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
    // Attach event listener for login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
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
    }

    // Attach event listener for sign-up form submission
    const signUpForm = document.getElementById('signup-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (e) {
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
    }

    // Check if user is logged in and adjust the UI accordingly
    firebase.auth().onAuthStateChanged(function (user) {
        const loginLinks = document.querySelectorAll('.auth-links'); // Login and Sign Up buttons
        const logoutButton = document.getElementById('logout-btn');  // Log Out button

        if (user) {
            console.log('User logged in:', user.email);
            loginLinks.forEach(link => link.style.display = 'none'); // Hide login and sign-up buttons
            if (logoutButton) logoutButton.style.display = 'inline-block'; // Show logout button
        } else {
            if (window.location.pathname !== '/login.html') {
                window.location.href = 'login.html'; // Redirect to login page if not logged in
            }
        }
    });

    // Logout functionality
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            firebase.auth().signOut()
                .then(() => {
                    console.log('User logged out');
                    window.location.href = 'login.html'; // Redirect to login page after logout
                })
                .catch((error) => {
                    console.error('Logout Error:', error);
                });
        });
    }

    // Initialize Flatpickr calendar on inputs with class "calendar"
    flatpickr(".calendar", {
        minDate: "today", // Prevent past dates from being selected
        dateFormat: "Y-m-d", // Format: Year-Month-Day
        mode: "range", // Allow users to select a date range
        onChange: function (selectedDates, dateStr, instance) {
            console.log("Selected dates: ", dateStr); // Log selected dates for debugging
        }
    });
});
