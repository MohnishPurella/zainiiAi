  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAyFjmb6mwsJ2IPa4omjqu-cbPQ5icIdFU",
    authDomain: "zainii2.firebaseapp.com",
    databaseURL: "https://zainii2-default-rtdb.firebaseio.com",
    projectId: "zainii2",
    storageBucket: "zainii2.appspot.com",
    messagingSenderId: "971931649431",
    appId: "1:971931649431:web:4d0dbe39102704595970d2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    
  })