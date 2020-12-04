// The app's Firebase configuration(change it to fit your database).
var firebaseConfig = {
    apiKey: "AIzaSyBxHk2BN2p9brQ90AHq9jGhWOEFLg5l2zY",
    authDomain: "medium-toturial.firebaseapp.com",
    databaseURL: "https://medium-toturial.firebaseio.com",
    projectId: "medium-toturial",
    storageBucket: "medium-toturial.appspot.com",
    messagingSenderId: "1066065169112",
    appId: "1:1066065169112:web:7d6faff764cc334a99e5ad"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Write data
// This code is from : https://firebase.google.com/docs/firestore/query-data/get-data
var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

    var docRef = db.collection("cities").doc("SF");

// Read data.
// This code is from : https://firebase.google.com/docs/firestore/query-data/get-data
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});