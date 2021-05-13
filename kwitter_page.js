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
console.log(firebase_message_id);
console.log(message_data);
uname = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + uname + "<img class='user_tick' src='tick.png' > </h4>";
message_with_tag = "<h4 class='message_h4' >" + message + "</h4>";
like_button = "<button class='btn btn-warning' id =" +firebase_message_id+ " value=" + like + " onclick=updateLike(this.id); ></button>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + Like + "<span><button><hr>"

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id.value);
      updated.likes = Number(Likes) + 1;
      console.log(updated_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes   
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.Location.replace("kwitter.html")
}

      } });  }); }
getData();

