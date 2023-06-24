  
var nameInput = document.getElementById("nameInput");
var numberInput = document.getElementById("numberInput");
var monthInput = document.getElementById("monthInput");
var yearInput = document.getElementById("yearInput");
// var cardNumberInput = document.getElementById("cardNumberInput");
var cvcInput = document.getElementById("cvcInput");
var cardTypeNumber = document.getElementById("cardTypeNumber");
var cardTypeCVC = document.getElementById("cardTypeCVC");

var numberText = document.getElementById("numberText");
var nameText = document.getElementById("nameText");
var monthYearText = document.getElementById("monthYearText");
var cvcRectangle = document.getElementById("cvcRectangle");

var nameError = document.getElementById("nameError");
var numberError = document.getElementById("numberError");
var monthYearError = document.getElementById("monthYearError");
var cvcError = document.getElementById("cvcError");





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





// Function to determine the card type based on the entered card number
function getCardType(cardNumber) {
  var cardType = "Unknown";

  // Visa
  var visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (visaRegex.test(cardNumber)) {
    cardType = "Visa";
  }

  // Mastercard
  var mastercardRegex = /^5[1-5][0-9]{14}$/;
  if (mastercardRegex.test(cardNumber)) {
    cardType = "Mastercard";
  }

  // American Express
  var amexRegex = /^3[47][0-9]{13}$/;
  if (amexRegex.test(cardNumber)) {
    cardType = "American Express";
  }

  // Discover
  var discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  if (discoverRegex.test(cardNumber)) {
    cardType = "Discover";
  }

  // JCB
  var jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;
  if (jcbRegex.test(cardNumber)) {
    cardType = "JCB";
  }

  // Diners Club
  var dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  if (dinersClubRegex.test(cardNumber)) {
    cardType = "Diners Club";
  }

  return cardType;
}

// Function to update the card type number input based on the entered card number
function updateCardTypeNumber() {
  var cardNumber = numberInput.value.replace(/\s/g, ''); // Remove whitespace from the card number
  var cardType = getCardType(cardNumber);

  // Update cardTypeNumber
  cardTypeNumber.value = cardType;
}

numberInput.addEventListener("input", function() {
  addSpaces();
  updateCardTypeNumber();
  numberText.innerText = numberInput.value;
  numberError.innerText = "";
  numberInput.style.borderColor = "";
});


nameInput.addEventListener("input", function() {
  var enteredName = nameInput.value;
  var uppercaseName = enteredName.toUpperCase();

  nameText.innerText = uppercaseName;
  nameInput.value = uppercaseName;
  nameError.innerText = "";
  nameInput.style.borderColor = "";
});

function validateMonth(enteredMonth) {
  return new Promise(function(resolve, reject) {
    // Check if the entered month is within the valid range (1 to 12)
    if (isNaN(enteredMonth) || enteredMonth < 1 || enteredMonth > 12) {
      reject("Invalid month");
    } else {
      // Remove leading zero if present
      enteredMonth = enteredMonth.replace(/^0+/, "");

      // Add leading zero if the entered month is a single digit
      if (enteredMonth.length === 1 && enteredMonth !== "0") {
        enteredMonth = "0" + enteredMonth;
      }

      resolve(enteredMonth);
    }
  });
}

var timeoutId;

function validateMonth(enteredMonth) {
  return new Promise(function(resolve, reject) {
    // Check if the entered month is within the valid range (1 to 12)
    if (isNaN(enteredMonth) || enteredMonth < 1 || enteredMonth > 12) {
      reject("Invalid month");
    } else {
      // Remove leading zero if present
      enteredMonth = enteredMonth.replace(/^0+/, "");

      resolve(enteredMonth);
    }
  });
}

function handleMonthInput() {
  var enteredMonth = monthInput.value.trim();

  clearTimeout(timeoutId); // Clear the previous timeout

  timeoutId = setTimeout(function() {
    validateMonth(enteredMonth)
      .then(function(validatedMonth) {
        monthInput.style.borderColor = "";
        monthYearError.innerText = "";
        monthInput.value = validatedMonth;

        if (enteredMonth.length === 1 && validatedMonth.length === 1) {
          monthInput.value = "0" + validatedMonth;
        }

        updateMonthYearText();
      })
      .catch(function(error) {
        monthInput.style.borderColor = "red";
        monthYearError.innerText = error;
      });
  }, 500); // Delay before performing validation
}

monthInput.addEventListener("input", handleMonthInput);









yearInput.addEventListener("input", function() {
  updateMonthYearText();
  monthYearError.innerText = "";
  yearInput.style.borderColor = "";
});

// cvcInput.addEventListener("input", function() {
//   cvcRectangle.innerText = cvcInput.value;
//   cvcError.innerText = "";
//   cvcInput.style.borderColor = "";
// });





// Function to determine the CVC type based on the entered CVC
function getCVCType(cvc) {
  var cvcType = "Unknown";

  // Visa CVC
  var visaCvcPattern = /^[0-9]{3}$/;
  if (visaCvcPattern.test(cvc)) {
    cvcType = "Visa";
  }

  // Mastercard CVC
  var mastercardCvcPattern = /^[0-9]{3}$/;
  if (mastercardCvcPattern.test(cvc)) {
    cvcType = "Mastercard";
  }

  // American Express CVC
  var amexCvcPattern = /^[0-9]{4}$/;
  if (amexCvcPattern.test(cvc)) {
    cvcType = "American Express";
  }

  return cvcType;
}



// Function to update the card type CVC input based on the entered CVC
function updateCardTypeCVC() {
  var cvc = cvcInput.value;
  var cvcType = getCVCType(cvc);
  cardTypeCVC.value = cvcType;
}




// Event listener for the cvcInput
cvcInput.addEventListener("input", function() {
  cvcRectangle.innerText = cvcInput.value;
  cvcError.innerText = "";
  cvcInput.style.borderColor = "";
  updateCardTypeCVC();
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
     numberError.innerText = "Can't be blank";
     numberError.style.color = "red";
     numberInput.style.borderColor = "red";
     isValid = false;
   } else if (/[a-zA-Z]/.test(cardNumber)) {
     numberError.innerText = "Wrong format, only numbers are required";
     numberError.style.color = "red";
     numberInput.style.borderColor = "red";
     isValid = false;
   } else {
     numberError.innerText = "";
     numberInput.style.borderColor = "";
   }
 
   if (month.trim() === "" || year.trim() === "") {
     monthYearError.innerText = "Can't be blank";
     monthInput.style.borderColor = "red";
     yearInput.style.borderColor = "red";
     isValid = false;
   } else {
     var monthValue = parseInt(month);
     var yearValue = parseInt(year);



 
     if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
      monthYearError.innerText = "Invalid month";
      monthInput.style.borderColor = "red";
      isValid = false;
    } else {
      monthYearError.innerText = "";
      monthInput.style.borderColor = "";
    }
    
 
    if (isNaN(yearValue) || yearValue < 0 || yearValue > 99) {
      monthYearError.innerText = "Invalid year";
      yearInput.style.borderColor = "red";
      isValid = false;
    } else {
       yearInput.style.borderColor = "";
     }
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


    // Hide inputfields
    
    nameInput.style.display = "none";
    numberInput.style.display = "none";
    monthInput.style.display = "none";
    yearInput.style.display = "none";
    cvcInput.style.display = "none";
    nameError.style.display="none";
    numberError.style.display="none";
    cvcError.style.display="none";
    monthYearError.style.display="none";
    document.querySelector(".card_cvctype").style.display = "none";
    document.getElementById("cardTypeNumber").style.display = "none";
    document.getElementById("cardTypeCVC").style.display = "none";



    document.getElementById("submit").style.display="none";


      // Hide the labels
  document.querySelector(".nametext").style.display = "none";
  document.querySelector(".numbertext").style.display = "none";
  document.querySelector(".cvctext").style.display = "none";
  document.querySelector(".monthtext").style.display = "none";
  document.querySelector(".yeartext").style.display = "none";
  document.querySelector(".cvctype_text").style.display = "none";
  document.querySelector(".cardtype_text").style.display = "none";


    popup.style.display = "block";

    // Reset the form after submission (optional)
    document.getElementById("cardForm").reset();

  


     

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

  // Show the input fields again
  nameInput.style.display = "block";
  numberInput.style.display = "block";
  monthInput.style.display = "block";
  yearInput.style.display = "block";
  cvcInput.style.display = "block";
  nameError.style.display = "block";
  numberError.style.display = "block";
  cvcError.style.display = "block";
  monthYearError.style.display = "block";
  document.querySelector(".card_cvctype").style.display = "block";
  document.getElementById("cardTypeNumber").style.display = "block";
  document.getElementById("cardTypeCVC").style.display = "block";


  document.getElementById('submit').style.display = "block"
  
  // Show the labels again
  document.querySelector(".nametext").style.display = "block";
  document.querySelector(".numbertext").style.display = "block";
  document.querySelector(".cvctext").style.display = "block";
  document.querySelector(".monthtext").style.display = "block";
  document.querySelector(".yeartext").style.display = "block";
  document.querySelector(".cvctype_text").style.display = "block";
  document.querySelector(".cardtype_text").style.display = "block";
  
  // Reset the form after submission
  document.getElementById("cardForm").reset();




}


var continueButton = document.getElementById("continueButton");
continueButton.addEventListener("click", continueClicked);


document.getElementById("cardForm").addEventListener("submit", submitForm);











