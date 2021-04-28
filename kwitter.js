function addUser(){
    var username = document.getElementById("username").value;
    localStorage.setItem("Username",username);
    window.location = "Kwitter_room.html";
    
}