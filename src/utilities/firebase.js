import firebase from "firebase/app";
require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyCKnjP_UoK0LhI_TJjZQs42uJkfCZDyqx8",
  authDomain: "vue-full-course-82cc0.firebaseapp.com",
  projectId: "vue-full-course-82cc0",
  storageBucket: "vue-full-course-82cc0.appspot.com",
  messagingSenderId: "533114545195",
  appId: "1:533114545195:web:70ffabb7f8b4582e37f66e"
};
firebase.initializeApp(firebaseConfig);
export default firebase;