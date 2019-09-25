
const firebase = require("firebase");
initialize();
var db = firebase.firestore();

const STRIPE_BASE = "https://api.stripe.com";
const API_BASE = "https://reqres.in/api/";

export function initialize() {
  var firebaseConfig = {
    apiKey: "AIzaSyDrpjrXTXzAQzDk-xhDHsAvqce-yRs31ow",
    authDomain: "kazoom-e772c.firebaseapp.com",
    databaseURL: "https://kazoom-e772c.firebaseio.com",
    projectId: "kazoom-e772c",
    storageBucket: "",
    messagingSenderId: "489252395656",
    appId: "1:489252395656:web:c8617f26a51febf3"
  };
  firebase.initializeApp(firebaseConfig);
}

export function addActivity() {
  db.collection("activities").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

export function fetchActivities() {
  var activitiesRef = db.collection('activities');

  activitiesRef.get().then(function(snapShot){
    snapShot.forEach(function(doc){
      console.log(doc.data());
    });
  });
}

export function fetchActivity(id) {
  var activitiesRef = db.collection('activities').doc(id);

  activitiesRef.get().then(function(doc){
    if(doc.exists){
      console.log(doc.data());
    } else {
      console.log("No document");
    }
  }).catch(function(error){
      console.log("error");
  });
}

export function deleteActivity(id) {

}

export function login(email, password) {

}

export function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

export function getData() {
  fetch.get(API_BASE + 'users?page=2').then(function(response){
    console.log(response.data);
  });
}
