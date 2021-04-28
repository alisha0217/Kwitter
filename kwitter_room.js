// Your web app's Firebase configuration
      // Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}