
//Password Criteria
var lower ="abcdefghijklmnopqrstuvwxyz";
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits ="1234567890";
var symbols ="!@#$%^&*_-+=";

//Prompts
var length parseInt(prompt("Password length? (Please between 8-128 characters."));

var numericprompt = confirm("Do you want numbers in your password?");

var lowercaseprompt =  confirm("Do you want lower-case letters in your password?");

var uppercaseprompt = confirm("Do you want upper-case letters in your password?");

var symbolsprompt = confirm("Do you want symbols in your password?")


function generatePassword() {
  
  var options = generateOptions();

  
  
  if (options.numericprompt) {
    for (i = 0; i< digits.length;++i)
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

