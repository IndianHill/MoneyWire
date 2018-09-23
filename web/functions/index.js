const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDhrAm8bI3Eg2g1IzYMDFQAmZfb12RzxtQ&address='
const cl_branches = 'branches'

exports.searchByIFSC = functions.https.onRequest((req, res) => {
    const ifsc_code = req.query.ifsc;
    console.log("Search for IFSC:", ifsc_code);
    admin.firestore().collection(cl_branches).doc(ifsc_code).get()
    .then(doc => {
        console.log('Found branch:' + JSON.stringify(doc.data()));
        
        msg_json = {}
        if (doc.data()) {
            msg_json = {
                "status": 200,
                "branch": JSON.stringify(doc.data())
            }
        } else {
            msg_json = {
                "status": 200,
                "err": "Branch not found with IFSC:" + ifsc_code
            }
        }
        res.status(200).send(msg_json);
    })
    .catch(err => {
        err_json = {
            "status": 5000,
            "err": "Internal server error.."
        }
        console.log("Error in finding branch:", ifsc_code, err);
        res.status(200).send(err_json);
    });
});

exports.globalSearch = functions.https.onRequest((req, res) => {
    const bank_key = req.query.bank_key
    const state = req.query.state
    const city = req.query.city
    const ifsc = req.query.ifsc
    const pincode = req.query.pincode
    const name = req.query.name
    const district = req.query.district

    const firestore = admin.firestore();
    var mainQuery = firestore.collection(cl_branches);

    var searchParams = ""

    if (district && district.length > 0) {
        searchParams += " district=>"+district;
        mainQuery = mainQuery.where('district', '==', district)
    }

    if (name && name.length > 0) {
        searchParams += " name=>"+name;
        mainQuery = mainQuery.where('lowerName', '==', name.toLowerCase())
    }

    if (city && city.length > 0) {
        searchParams += " city=>"+city;
        mainQuery = mainQuery.where('lowerCity', '==', city.toLowerCase())
    }

    if (state && state.length > 0) {
        searchParams += " state=>"+state;
        mainQuery = mainQuery.where('state', '==', state)
    }

    if (bank_key && bank_key.length > 0) {
        searchParams += " bank_key=>"+bank_key;
        mainQuery = mainQuery.where('bankKey', '==', bank_key)
    }

    if (ifsc && ifsc.length > 0) {
        searchParams += " ifsc_code=>"+ifsc;
        mainQuery = mainQuery.where('lowerIfsc', '==', ifsc.toLowerCase())
    }

    if (pincode && pincode.length > 0) {
        searchParams += " pincode=>"+pincode;
        mainQuery = mainQuery.where('pinCode', '==', pincode)
    }

    console.log("Searching for:", searchParams)
    mainQuery.get()
        .then(function(querySnapshot) {
            resBranches = []
            querySnapshot.forEach(function(doc) {
                var branch = doc.data()
                var branchDict = {}
                branchDict.state = branch["state"]
                branchDict.ifsc = branch["ifsc"]
                branchDict.name = branch["name"]
                branchDict.fullAddress = branch["fullAddress"]
                branchDict.district = branch["district"]
                branchDict.city = branch["city"]
                branchDict.key = doc.id
                resBranches.push(branchDict)
            });
            msg = {
                "status": 200,
                "count": resBranches.length,
                "branches": resBranches
            }
            console.log("Match found for query:"+searchParams+", branch_count:"+resBranches.length)
            res.status(200).send(msg);
        })
        .catch(function(error) {
            console.log("Err for branch serach:"+searchParams+", err:"+error.name);
            msg = {
                "status": 5000,
                "err": "Internal server error.."
            }
            res.status(200).send(msg);
        });
        
});