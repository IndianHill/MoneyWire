
/*
 *  Initialize the firebase app
 */
function initializeFirebaseApp() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDhrAm8bI3Eg2g1IzYMDFQAmZfb12RzxtQ",
        authDomain: "app-moneywire.firebaseapp.com",
        databaseURL: "https://app-moneywire.firebaseio.com",
        projectId: "app-moneywire",
        storageBucket: "app-moneywire.appspot.com",
        messagingSenderId: "84141118544"
    };
    return firebase.initializeApp(config);
}
