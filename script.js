// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialchar = ["!","\u0022","#","$","%","&","'","(",")","*","+",",","-",
".","/",":",";","<","=",">","?","@","[","\u005C","]","^","_","`","{",
"|", "}","~",];
var numbers = "0123456789".split("");

// [] will hold arrays
var ultronArray = [];

function generatePassword(){

  var userLength = prompt("How long would you like your password? \n Select a number between 8 and 128!");
  var userLower = confirm("Would you like any lowercase letters? \n Select yes to continue, no to cancel");
  var userUpper = confirm("Would you like any uppercase letters? \n Select yes to continue, no to cancel");
  var userSpecial = confirm("Would you like any special characters? \n Select yes to continue, no to cancel");
  var userNumber = confirm("Would you like any numbers? \n Select yes to continue, no to cancel");

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


/* Password has to have lower upper numbers special char Variables
You want the generate button to start, do you want lower, upper, etc
IF they want uppercase, add to password possiblility,
want an empty array to hold the user choices

After that, make the user chose the desired length o
*/