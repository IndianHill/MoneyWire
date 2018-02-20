const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDhrAm8bI3Eg2g1IzYMDFQAmZfb12RzxtQ&address='

exports.updateLatLng = functions.firestore.document('/branches/{branch}').onUpdate((event)=>{

    fetchAndUpdateLatLng(event)
    return true;
});

exports.addLatLng = functions.firestore.document('/branches/{branch}').onCreate((event)=>{

    event.data.ref.set({
        lat: 0,
        lng: 0
        }, {merge: true});
    
    return true;
});

function fetchAndUpdateLatLng(event) {
    fullAddress = event.data.data().fullAddress;
    console.log('Requesting lat lng for address:'+fullAddress);
    const get_url = encodeURI(BASE_URL+fullAddress);
    
    var request = require("request");
    request(get_url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonBody = JSON.parse(body)
            const lat = jsonBody['results'][0]['geometry']['location']['lat'];
            const lng = jsonBody['results'][0]['geometry']['location']['lng'];
            console.log('Lat:'+lat+' Lng:'+lng+' FullAddress:'+fullAddress);

            event.data.ref.set({
                lat: lat,
                lng: lng
                }, {merge: true});
        } else {
            console.log('Error:'+JSON.stringify(error))
        }
    });
}