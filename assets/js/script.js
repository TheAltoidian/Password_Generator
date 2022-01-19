// Assignment code here
var passReqs = {
  length: 8,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  specialChararacters: false,
}

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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  askLength();
  askReqs();
  debugger;

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
