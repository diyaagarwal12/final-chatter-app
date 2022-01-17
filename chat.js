// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAupXkmXUROuKbaSAYrVY7xj_YlaNcVYfI",
    authDomain: "practice-activity-86343.firebaseapp.com",
    databaseURL: "https://practice-activity-86343-default-rtdb.firebaseio.com",
    projectId: "practice-activity-86343",
    storageBucket: "practice-activity-86343.appspot.com",
    messagingSenderId: "994780292811",
    appId: "1:994780292811:web:e868ec82d2364726195d4e",
    measurementId: "G-WV922PLJ2R"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome" + user_name +"!";

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
    })
    localStorage.setItem("room_name",room_name);
         window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room name-"+Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

 //End code
 });});}
getData();
function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="chat_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}



  