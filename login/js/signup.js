$('#loginform').submit(function () {
	login();
	return false;
});


function login() {

	var userEmail = document.getElementById("email").value;
	console.log(userEmail);
	var userPass = document.getElementById("password").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		alert("Error : " + errorMessage);

	});

}

 $('#signupform').submit(function () {
 	signUp();
 	return false;
 });

 var fname;
 var justsignedup=false;

 function signUp() {
	 justsignedup = true;
	fname = document.getElementById("fname").value;
 	var email = document.getElementById("email1").value;
 	var password = document.getElementById("password1").value;
 	
 	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
 		// Handle Errors here.
 		var errorCode = error.code;
 		var errorMessage = error.message;
 		alert("Error: " + errorMessage);
	 });
 }

 firebase.auth().onAuthStateChanged(function (user) {
 	if (user && justsignedup) {
		
 		firebase.database().ref('users/'+firebase.auth().currentUser.uid).set({
			 firstname: fname,
		 }, function(error){
			 if(error){
				 alert(error);
			 }
			 else {
				window.location.replace("../index2.html");
				console.log("we good");
			 }
		 })
 		
	 } else if(user){
		window.location.replace("../index2.html");

	 }
	 
	 else {
 		// No user is signed in.


 	}
 });
