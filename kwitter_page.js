//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD_AjEP8hr6ZZ1NKdI_Vew66tdwNvdS2fs",
      authDomain: "kwitter-88ed8.firebaseapp.com",
      databaseURL: "https://kwitter-88ed8-default-rtdb.firebaseio.com",
      projectId: "kwitter-88ed8",
      storageBucket: "kwitter-88ed8.appspot.com",
      messagingSenderId: "619351449260",
      appId: "1:619351449260:web:627cb34013c4c96c7bc909"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username")
    room_name = localStorage.getItem("room_name")

    function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like: 0
      });

      document.getElementById("msg").value = "";

      


    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
