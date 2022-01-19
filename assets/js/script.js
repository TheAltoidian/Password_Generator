// password requirements object
var passReqs = {
  length: 8,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  specialCharacters: false,
}

// strings to pull random characters from
var stringLowerCase = "abcdefghijklmnopqrstuvwxyz";
var stringUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringNumeric = "0123456789";
var stringSpecialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"' + "\\"

// function to create a random numberic value
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
  passReqs.lowerCase = window.confirm("Should the password contain lower case letters? \r\n YES: Okay \r\n NO: Cancel");
  passReqs.upperCase = window.confirm("Should the password contain upper case letters? \r\n YES: Okay \r\n NO: Cancel");
  passReqs.numeric = window.confirm("Should the password contain numbers? \r\n YES: Okay \r\n NO: Cancel");
  passReqs.specialCharacters = window.confirm("Should the password contain special characters? \r\n YES: Okay \r\n NO: Cancel");
  if (!(passReqs.lowerCase || passReqs.upperCase || passReqs.numeric || passReqs.specialCharacters)) {
    window.alert("Password must contain at least one type of character. Please select at least one type of character.");
    askReqs();
  }
}

// Recieves characterType, then randomly returns a character of that type
var characterPicker = function(cType) {
  switch (cType) {
    case passReqs.lowerCase:
      return (stringLowerCase.charAt(RNG(0,25)));
      break;
    case passReqs.upperCase:
      return (stringUpperCase.charAt(RNG(0,25)));
      break;
    case passReqs.numeric:
      return (stringNumeric.charAt(RNG(0,9)));
      break;
    case passReqs.specialCharacters:
      return (stringSpecialCharacters.charAt(RNG(0,32)));
      break;
  }
}

// Randomly picks the category for the next character in the password, then calls randomCharacter() to get the character itself
var randomCharacter = function() {
  characterType = RNG(0,3);
  switch (characterType) {
    case 0:
      if (passReqs.lowerCase) {
        return (stringLowerCase.charAt(RNG(0,25)));
      }
      else {
        return (randomCharacter());
      }
    case 1:
      if (passReqs.upperCase){
        return (stringUpperCase.charAt(RNG(0,25)));
      }
      else {
        return (randomCharacter());
      }
    case 2:
      if (passReqs.numeric) {
        return (stringNumeric.charAt(RNG(0,9)));
      }
      else {
        return (randomCharacter());
      }
    case 3:
      if (passReqs.specialCharacters) {
        return (stringSpecialCharacters.charAt(RNG(0,32)));
      }
      else {
        return (randomCharacter());
      }
  }
}

// Create the password
var generatePassword = function () {
  var passwordGen = "";
  for (let i = 0; i < passReqs.length; i++) {
    passwordGen += randomCharacter();
    console.log(passwordGen);
  }
  return passwordGen;
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
