// Variables to store references for form elements:
const submitButton = document.getElementById("submit-button");
const fullnameInput = document.getElementById("fname");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("message");

// Declare regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Declare object that will store the form-data
let formData = {};

// Declare array that will store the errors
let errors = [];

// Function to validate form:
function validateForm() {
  // Reset errors array
  errors = [];

  // Validate fullname
  if (fullnameInput.value.trim() === "") {
    errors.push("Full name is missing");
  } else {
    formData.fullname = fullnameInput.value.trim();
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    errors.push("Email is missing");
  } else if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email address");
  } else {
    formData.email = emailInput.value.trim();
  }

  // Validate message
  if (messageTextarea.value.trim() === "") {
    errors.push("Message is missing");
  } else {
    formData.message = messageTextarea.value.trim();
  }

  // Check if there are any errors
  if (errors.length > 0) {
    // Print errors to console
    console.log("Errors:", errors);
  } else {
    // Print data to console
    console.log("Collected Data:", formData);
    // Clear text fields
    fullnameInput.value = "";
    emailInput.value = "";
    messageTextarea.value = "";
  }
}

// Register form to "click" event
submitButton.addEventListener("click", validateForm);
