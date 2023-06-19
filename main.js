
var nameInput = document.getElementById("nameInput");
var numberInput = document.getElementById("numberInput");
var monthInput = document.getElementById("monthInput");
var yearInput = document.getElementById("yearInput");
var cvcInput = document.getElementById("cvcInput");

var numberText = document.getElementById("numberText");
var nameText = document.getElementById("nameText");
var monthYearText = document.getElementById("monthYearText");
var cvcRectangle = document.getElementById("cvcRectangle");

var nameError = document.getElementById("nameError");
var numberError = document.getElementById("numberError");
var monthYearError = document.getElementById("monthYearError");
var cvcError = document.getElementById("cvcError");

numberInput.addEventListener("input", function() {
  addSpaces();
  numberText.innerText = numberInput.value;
  numberError.innerText = "";
  numberInput.style.borderColor = "";
});



function addSpaces() {
  var input = numberInput;
  var value = input.value;

  // Remove any existing spaces from the value
  value = value.replace(/\s/g, "");

  // Add spaces after every 4 characters
  value = value.replace(/(\d{4}(?!\s))/g, "$1 ");

  // Trim the value to the maximum length
  value = value.substring(0, 19);

  // Update the input value with the spaced format
  input.value = value;
}






nameInput.addEventListener("input", function() {
  nameText.innerText = nameInput.value;
  nameError.innerText = "";
  nameInput.style.borderColor = "";
});

monthInput.addEventListener("input", function() {
  updateMonthYearText();
  monthYearError.innerText = "";
  monthInput.style.borderColor = "";
});

yearInput.addEventListener("input", function() {
  updateMonthYearText();
  monthYearError.innerText = "";
  yearInput.style.borderColor = "";
});

cvcInput.addEventListener("input", function() {
  cvcRectangle.innerText = cvcInput.value;
  cvcError.innerText = "";
  cvcInput.style.borderColor = "";
});

function updateMonthYearText() {
  var month = monthInput.value;
  var year = yearInput.value;

  if (month && year) {
    monthYearText.innerText = month + " / " + year;
  } else {
    monthYearText.innerText = "";
  }
}

function submitForm(event) {
  event.preventDefault();
  
   // Prevent the default form submission

  var name = nameInput.value;
  var cardNumber = numberInput.value;
  var month = monthInput.value;
  var year = yearInput.value;
  var cvc = cvcInput.value;

  // Perform validation checks
  var isValid = true;

  if (name.trim() === "") {
    nameError.innerText = "Can't be blank";
    nameInput.style.borderColor = "red";
    isValid = false;
  }


  if (cardNumber.trim() === "") {
    numberError.innerText = " Can't be blank";
    numberError.style.color = "red";
    numberInput.style.borderColor = "red";
    isValid = false;
  }else if (/[a-zA-Z]/.test(cardNumber)) {
    numberError.innerText = "Wrong format, only numbers are required";
    numberError.style.color = "red";
    numberInput.style.borderColor = "red";
    isValid = false;
  } else {
    numberError.innerText = "";
    numberInput.style.borderColor = "";
  }
  

  if (month.trim() === "" || year.trim() === "") {
    monthYearError.innerText = " Can't be blank";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";
    isValid = false;
  }

  if (cvc.trim() === "") {
    cvcError.innerText = " Can't be blank";
    cvcInput.style.borderColor = "red";
    isValid = false;
  }


  

  if (isValid) {
    // Perform form submission
    console.log("Name: " + name);
    console.log("Card Number: " + cardNumber);
    console.log("Expiration: " + month + "/" + year);
    console.log("CVC: " + cvc);



    nameInput.style.display = "none";
    numberInput.style.display = "none";
    monthInput.style.display = "none";
    yearInput.style.display = "none";
    cvcInput.style.display = "none";
    nameError.style.display="none";
    numberError.style.display="none";
    cvcError.style.display="none";
    monthYearError.style.display="none";



    document.getElementById("submit").style.display="none";


      // Hide the labels
  document.querySelector(".nametext").style.display = "none";
  document.querySelector(".numbertext").style.display = "none";
  document.querySelector(".cvctext").style.display = "none";
  document.querySelector(".monthtext").style.display = "none";
  document.querySelector(".yeartext").style.display = "none";


    popup.style.display = "block";

    // Reset the form after submission (optional)
    document.getElementById("cardForm").reset();

  


     // Add spaces to card number field

  }



  



    
   

      // Show the continue button with text
      continueButton.style.display = "block";
      continueButton.innerText = "Continue";

    document.getElementById("cardForm").reset();
 
}


function continueClicked(event) {
  event.preventDefault();
  var popup = document.getElementById("popup");
  var circle1 = document.querySelector(".circle1");
  var continueButton = document.getElementById("continueButton");

  circle1.style.display = "block";
  // Hide the popup message, circle, and continue button
  popup.style.display = "none";
  circle1.style.display = "none";
  continueButton.style.display = "none";
}


document.getElementById("cardForm").addEventListener("submit", submitForm);











