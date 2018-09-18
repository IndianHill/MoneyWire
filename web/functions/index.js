const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDhrAm8bI3Eg2g1IzYMDFQAmZfb12RzxtQ&address='

exports.searchByIFSC = functions.https.onRequest((req, res) => {
    const ifsc_code = req.query.ifsc;
    console.log("Search for IFSC:", ifsc_code);
    admin.firestore().collection('branches').doc(ifsc_code).get()
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