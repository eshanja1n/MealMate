$('#loginform').submit(function () {
	toggleButtonLoader();
	login();
	return false;
});


function login() {

	var userEmail = document.getElementById("email").value;
	var userPass = document.getElementById("password").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		alert("Error : " + errorMessage);

	});

}

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in.
	}
});
