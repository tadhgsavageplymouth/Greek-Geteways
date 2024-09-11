// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB08BUmiV1m4_EcQZkor9eAlucMLuj8my8",
    authDomain: "greek-getaways-auth.firebaseapp.com",
    projectId: "greek-getaways-auth",
    storageBucket: "greek-getaways-auth.appspot.com",
    messagingSenderId: "935837785556",
    appId: "1:935837785556:web:3a08c535c69035f08f8a41",
    measurementId: "G-H54H81Q4R7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener for login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Login form submitted");

            var email = document.getElementById('login-email').value;
            var password = document.getElementById('login-password').value;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('Login successful! User: ', userCredential.user);
                    alert('Login successful!');
                    window.location.href = 'index.html'; // Redirect to index.html after login
                })
                .catch((error) => {
                    console.error('Login Error:', error);
                    alert('Error: ' + error.message);
                });
        });
    } else {
        console.error("Login form with ID 'login-form' not found.");
    }

    // Attach event listener for sign-up form submission
    const signUpForm = document.getElementById('signup-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Sign-up form submitted");

            var email = document.getElementById('signup-email').value;
            var password = document.getElementById('signup-password').value;

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('Sign-up successful! User: ', userCredential.user);
                    alert('Sign Up successful!');
                    window.location.href = 'index.html'; // Redirect to index.html after sign-up
                })
                .catch((error) => {
                    console.error('Sign-up Error:', error);
                    alert('Error: ' + error.message);
                });
        });
    } else {
        console.error("Sign-up form with ID 'signup-form' not found.");
    }
});
