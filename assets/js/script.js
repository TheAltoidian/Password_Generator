// DELETE FIRST 3 LINES, THEN CONTINUE ON LINE 49


// password requirements object
var passReqs = {
  length: 8,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  specialChararacters: false,
}

// strings to pull random characters from
// var stringLowerCase = "abcdef"

// function to generate a random numberic value
var RNG = function(min, max) {
  var value = Math.floor (Math.random() * (max - min + 1) + min);
  return value;
}

// Ask for the desired password length
var askLength = function() {
  passReqs.length = parseInt(window.prompt("How long would you like your password? Choose an integer between 8 and 128, inclusive."));
  if (passReqs.length > 7 && passReqs.length < 129) {
    return passReqs.length;
  }
  else {
    window.alert("Entered value not a number between 8 and 128, please try again.");
    return askLength();
  }
}

// Ask for which types of characters will be in the password
var askReqs = function() {
  lowerCase = window.confirm("Should the password contain lower case letters? \r\n YES: Okay \r\n NO: Cancel");
  upperCase = window.confirm("Should the password contain upper case letters? \r\n YES: Okay \r\n NO: Cancel");
  numeric = window.confirm("Should the password contain numbers? \r\n YES: Okay \r\n NO: Cancel");
  specialChararacters = window.confirm("Should the password contain special characters? \r\n YES: Okay \r\n NO: Cancel");
  if (!(lowerCase || upperCase || numeric || specialChararacters)) {
    window.alert("Password must contain at least one type of character. Please select at least one type of character.");
    askReqs();
  }
}

// assign character types numbers for RNG selection
var category = [lowerCase, upperCase, numeric, specialChararacters]

// Create a random character from the given requirements
var randomCharacter = function() {
  while (!(category[RNG(0,3)])) {}
  
  // var category = RNG(0, 3);
  console.log(category);
}

// Create the password
var passwordGen = "";
var generatePassword = function () {
  for (let i = 0; i < passReqs.length; i++) {
    passwordGen += randomCharacter();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  askLength();
  askReqs();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
