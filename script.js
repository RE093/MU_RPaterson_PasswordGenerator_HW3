// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var letter = "abcdefghijklmnopqrstuvwxyz";
var letterUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*_-+=][|<>?/`~";

// Password generation function
function writePassword() {

  // Password Length prompt
  var userLet = prompt("How many characters do you want your password to be?               Must be between 8 - 128 characters ");
  if (userLet < 8 || userLet > 128) {
    var lengthIncorrect = alert("Invalid password length. Please choose a length between 8 - 128")
  }

  // Password length checker
  if (userLet >= 8 && userLet <= 128) {

    // Lower Case letters prompt
    var userLow = confirm("Would you like your password to contain lower case letters?");
    if (userLow) {
        alert("You have selected you want lower case letters in your password")
    }

    // Upper Case letters prompt
    var userUpp = confirm("Would you like your password to contain upper case letters?");
    if (userUpp) {
        alert("You have selected you want upper case letters in your password")
    }

    // Numbers prompt
    var userNum = confirm("Would you like your password to contain numbers?");
    if (userNum) {
        alert("You have selected you want numbers in your password")
    }

    // Special Characters prompt
    var userSym = confirm("Would you like your password to contain special characters?");
    if (userSym) {
        alert("You have selected you want special characters in your password")
    }

    // Password minimum criteria check
    if (userLow === false && userUpp === false && userNum === false && userSym === false) {
        alert("You need to select at least one character type before a password can be generated")
    }
  }

  // Password make up
  passwordMakeUp = "";

  if (userLow) {
    passwordMakeUp += letter;
  }
  if (userUpp) {
    passwordMakeUp += letterUpp;
  }
  if (userNum) {
    passwordMakeUp += number;
  }
  if (userSym) {
    passwordMakeUp += symbol;
  }

  // Password Generator function
  password = "";

  for (i = 1; i <= userLet; i++) {
    var passLet = Math.round(Math.random() * passwordMakeUp.length);
    password += passwordMakeUp.charAt(passLet);

    if (userLow === true || userUpp === true || userNum === true || userSym === true) {
      passwordText.value = password;
    };
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)