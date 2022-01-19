// Assignment code here

var askLength = function() {
  var passLength = parseInt(window.prompt("How long would you like your password? Choose an integer between 8 and 128, inclusive."));
  if (passLength > 7 && passLength < 129) {
    return passLength;
  }
  else {
    return askLength();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = askLength();
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
