firebase.auth().onAuthStateChanged(function(user) {
  var userEmail = document.getElementById('email_field').value;
  var userPass = document.getElementById('password_field').value;
  if (user) {
    // User is signed in.
    //document.getElementById("user_div").style.display = "block";
    //document.getElementById("login_div").style.display = "none";
    window.alert(userEmail+" "+userPass);
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login() {

  var userEmail = document.getElementById('email_field').value;
  var userPass = document.getElementById('password_field').value;

  //window.alert(userEmail+" "+userPass);
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage);

  // ...
});



}
