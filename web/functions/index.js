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
        console.log("Error in finding branch:", ifsc_code, err);
        err_json = {"status": 200, "err":"Branch not found"}
        res.status(200).send(err_json);
    });
});

exports.globalSearch = functions.https.onRequest((req, res) => {
    const bank_key = req.query.bank_key
    const state = req.query.state
    const city = req.query.city

    const firestore = admin.firestore();
    var mainQuery = firestore.collection(cl_branches);

    if (city && city.length > 0) {
        console.log("city:", city)
        mainQuery = mainQuery.where('lowerCity', '==', city.toLowerCase())
    }

    if (state && state.length > 0) {
        console.log("state:", state)
        mainQuery = mainQuery.where('state', '==', state)
    }

    if (bank_key && bank_key.length > 0) {
        console.log("bank_key:", bank_key)
        mainQuery = mainQuery.where('bankKey', '==', bank_key)
    }

    mainQuery.get()
        .then(function(querySnapshot) {
            queryBranch = []
            querySnapshot.forEach(function(doc) {
                var branch = doc.data()
                branch.key = doc.id
                queryBranch.push(branch)
                console.log(doc.id, " => ", JSON.stringify(doc.data()));
            });

            msg = {
                "status": 200,
                "count": queryBranch.length,
                "branches": JSON.stringify(queryBranch)
            }
            res.status(200).send(msg);
        })
        .catch(function(error) {
            console.log("Error name code matching documents: ", error.name);
            msg = {
                "status": 200,
                "err": "No branch found.."
            }
            res.status(200).send(msg);
        });
        
});