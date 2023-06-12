var nameInput = document.getElementById("nameInput");
var numberInput = document.getElementById("numberInput");
var monthInput = document.getElementById("monthInput");
var yearInput = document.getElementById("yearInput");
var cvcInput = document.getElementById("cvcInput");

var numberText = document.getElementById("numberText");
var nameText = document.getElementById("nameText");
var monthYearText = document.getElementById("monthYearText");
var cvcRectangle = document.getElementById("cvcRectangle");

numberInput.addEventListener("input", function() {
  numberText.innerText = numberInput.value;
});

nameInput.addEventListener("input", function() {
  nameText.innerText = nameInput.value;
});

monthInput.addEventListener("input", updateMonthYearText);
yearInput.addEventListener("input", updateMonthYearText);

function updateMonthYearText() {
  var month = monthInput.value;
  var year = yearInput.value;

  if (month && year) {
    monthYearText.innerText = month + " / " + year;
  } else {
    monthYearText.innerText = "";
  }
}

cvcInput.addEventListener("input", function() {
  cvcRectangle.innerText = cvcInput.value;
});

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  var name = nameInput.value;
  var cardNumber = numberInput.value;
  var month = monthInput.value;
  var year = yearInput.value;
  var cvc = cvcInput.value;

  // Perform any additional validation checks if required

  // Perform form submission 
  console.log("Name: " + name);
  console.log("Card Number: " + cardNumber);
  console.log("Expiration: " + month + "/" + year);
  console.log("CVC: " + cvc);

  // Reset the form after submission (optional)
  document.getElementById("cardForm").reset();
}