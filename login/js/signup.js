 $('#signupform').submit(function () {
 	signUp();
 	return false;
 });

 function signUp() {
 	var email = document.getElementById("email").value;
 	var password = document.getElementById("password").value;
 	
 	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
 		// Handle Errors here.
 		var errorCode = error.code;
 		var errorMessage = error.message;
 		alert("Error: " + errorMessage);
 	});
 }

 firebase.auth().onAuthStateChanged(function (user) {
 	if (user) {

 		// User is signed in.
 		
 	} else {
 		// No user is signed in.


 	}
 });
