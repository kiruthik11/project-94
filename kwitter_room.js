var firebaseConfig = {
      apiKey: "AIzaSyDumqGl45Q0eAOsJ1ynaJNKSAD0xdQpd-U",
      authDomain: "project-kwitter-25daa.firebaseapp.com",
      databaseURL: "https://project-kwitter-25daa-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-25daa",
      storageBucket: "project-kwitter-25daa.appspot.com",
      messagingSenderId: "933181316564",
      appId: "1:933181316564:web:6f5aa3b00836737b700a41"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
