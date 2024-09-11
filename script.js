// Initialize the flatpickr calendar on each input element with the class 'calendar'
flatpickr(".calendar", {
    minDate: "today", // Prevent past dates from being selected
    dateFormat: "Y-m-d", // Date format: Year-Month-Day
    mode: "range", // Allow users to select a date range
    onChange: function(selectedDates, dateStr, instance) {
        console.log("Selected dates: ", dateStr); // Can be used for booking functionality
    }
});
