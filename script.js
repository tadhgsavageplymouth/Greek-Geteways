// Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Sign Up
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Sign Up successful!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Initialize the flatpickr calendar on each input element with the class 'calendar'
flatpickr(".calendar", {
    minDate: "today", // Prevent past dates from being selected
    dateFormat: "Y-m-d", // Date format: Year-Month-Day
    mode: "range", // Allow users to select a date range
    onChange: function(selectedDates, dateStr, instance) {
        console.log("Selected dates: ", dateStr); // Can be used for booking functionality
    }
});
