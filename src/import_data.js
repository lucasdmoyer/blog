const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAYS0hOgIJ83Gf7dN8Di0HOdFFzKayV98M",
    authDomain: "koiblog.firebaseapp.com",
    projectId: "koiblog"
});

var db = firebase.firestore();

var menu = [{
        "uid": "1",
        "displayName": "Senora Buta",
        "location": [47.549237500000004, 122.15484989999997],
        "photoURL": "https://cdn-images-1.medium.com/max/2400/1*-kYvsl7wDP-6wNJKsLyxCQ.jpeg",
        "email": "Lucasdmoyer@gmail.com"
    },
    {
        "uid": "2",
        "displayName": "Roy",
        "location": [47.549237500000004, 122.15484989999997],
        "photoURL": "https://cdn-images-1.medium.com/max/2400/1*-kYvsl7wDP-6wNJKsLyxCQ.jpeg",
        "email": "Lucasdmoyer@gmail.com"
    }
]

menu.forEach(function(obj) {
    db.collection("users").doc(obj.uid).set({
            uid: obj.uid,
            displayName: obj.displayName,
            location: obj.location,
            photoURL: obj.photoURL,
            email: obj.email
        }).then(function(docRef) {
            console.log("Document written with ID: ", obj.uid);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});