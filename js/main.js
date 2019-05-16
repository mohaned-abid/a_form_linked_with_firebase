 var config = {
    apiKey: "AIzaSyA6l1YPV4D38aQJwJxtXKykIvKEjJo_8QU",
    authDomain: "firegomycode.firebaseapp.com",
    databaseURL: "https://firegomycode.firebaseio.com",
    projectId: "firegomycode",
    storageBucket: "firegomycode.appspot.com",
    messagingSenderId: "748034164323"
  };
  firebase.initializeApp(config);
var messagesRef = firebase.database().ref('messages');
function saveMessage(name, slide, track, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: name,
    Track: track,
    Slide:slide,
    Message:message
  });
}
document.getElementById('contactForm').addEventListener('submit', submitForm);
function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var slide = getInputVal('slide');
    var track = getInputVal('track');
    var message = getInputVal('message');
    saveMessage(name, slide, track, message);
    document.getElementById('contactForm').reset();
}



document.querySelector('.alert').style.display = 'block';
setTimeout(function(){ document.querySelector('.alert').style.display = 'none';},3000);
 