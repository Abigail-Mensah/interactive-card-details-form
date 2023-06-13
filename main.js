
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
  numberText.innerText = numberInput.value;
  numberError.innerText = "";
  numberInput.style.borderColor = "";
});

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
  event.preventDefault(); // Prevent the default form submission

  var name = nameInput.value;
  var cardNumber = numberInput.value;
  var month = monthInput.value;
  var year = yearInput.value;
  var cvc = cvcInput.value;

  // Perform validation checks
  var isValid = true;

  if (name.trim() === "") {
    nameError.innerText = "Name can't be blank";
    nameInput.style.borderColor = "red";
    isValid = false;
  }


  if (cardNumber.trim() === "") {
    numberError.innerText = "Card number can't be blank";
    numberError.style.color = "red";
    numberInput.style.borderColor = "red";
    isValid = false;
  } else if (/^[a-zA-Z]+$/.test(cardNumber)) {
    numberError.innerText = "Wrong format, only numbers are required";
    numberError.style.color = "red";
    numberInput.style.borderColor = "red";
    isValid = false;
  } else {
    numberError.innerText = "";
    numberInput.style.borderColor = "";
  }
  

  if (month.trim() === "" || year.trim() === "") {
    monthYearError.innerText = "Expiration date can't be blank";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";
    isValid = false;
  }

  if (cvc.trim() === "") {
    cvcError.innerText = "CVC can't be blank";
    cvcInput.style.borderColor = "red";
    isValid = false;
  }

  if (isValid) {
    // Perform form submission
    console.log("Name: " + name);
    console.log("Card Number: " + cardNumber);
    console.log("Expiration: " + month + "/" + year);
    console.log("CVC: " + cvc);

    // Reset the form after submission (optional)
    document.getElementById("cardForm").reset();
  }

  var popup = document.getElementById("popup");
  var circle = document.querySelector(".circle1");
  popup.style.display = "none";
  circle.style.display = "none";


   if (isValid) {
    // Perform form submission
    console.log("Name: " + name);
    console.log("Card Number: " + cardNumber);
    console.log("Expiration: " + month + "/" + year);
    console.log("CVC: " + cvc);

    // Show the popup message
    popup.style.display = "block";
  
    // Show the circle
    circle.style.display = "block";
  
    // Reset the form after submission (optional)
    document.getElementById("cardForm").reset();
  }


}


function continueClicked() {
  // Hide the popup message and circle
  popup.style.display = "none";
  circle.style.display = "none";
}

document.getElementById("cardForm").addEventListener("submit", submitForm);











