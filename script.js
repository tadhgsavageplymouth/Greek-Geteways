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

document.addEventListener("DOMContentLoaded", function () {
    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    showMessage(loginMessage, 'Login successful! Redirecting...', 'success');
                    setTimeout(() => {
                        window.location.href = 'index.html'; // Redirect after login
                    }, 2000); // Delay for 2 seconds before redirecting
                })
                .catch((error) => {
                    showMessage(loginMessage, `Login failed: ${error.message}`, 'error');
                });
        });
    }

    // Handle sign-up form submission
    const signUpForm = document.getElementById('signup-form');
    const signUpMessage = document.getElementById('signup-message');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    showMessage(signUpMessage, 'Sign up successful! Redirecting...', 'success');
                    setTimeout(() => {
                        window.location.href = 'index.html'; // Redirect after sign-up
                    }, 2000); // Delay for 2 seconds before redirecting
                })
                .catch((error) => {
                    showMessage(signUpMessage, `Sign up failed: ${error.message}`, 'error');
                });
        });
    }

    // Function to show messages
    function showMessage(element, message, type) {
        element.textContent = message;
        element.classList.remove('success', 'error'); // Remove both classes
        element.classList.add(type); // Add success or error class
        element.style.display = 'block'; // Make the message visible

        // Automatically hide the message after 5 seconds
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
});
