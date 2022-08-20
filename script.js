/* Password has to have lower upper numbers special char Variables
You want the generate button to start, do you want lower, upper, etc
IF they want uppercase, add to password possiblility,
want an empty array to hold the user choices

After that, make the user chose the desired length o
*/

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
  var userLower = confirm("Would you like any lowercase letters? \n Select ok to continue, no to cancel");
  var userUpper = confirm("Would you like any uppercase letters? \n Select ok to continue, no to cancel");
  var userSpecial = confirm("Would you like any special characters? \n Select ok to continue, no to cancel");
  var userNumber = confirm("Would you like any numbers? \n Select ok to continue, no to cancel");


//error control 

if (!userLength && !userLower && !userUpper && !userSpecial && !userNumber){
  alert("You must select one type at least to generate a password");
  return generatePassword();
}

if (userLength < 8 || userLength > 128){
  alert("You must select a password length between 8 to 128 characters.");
  return generatePassword();
}

//push the user choices into the ultron array

if (userLower===true){
  for (var i = 0; i < lowercase.length; i++){
    ultronArray.push(lowercase[i]);
  }
}

if (userUpper){
  for (var i = 0; i < uppercase.length; i++){
    ultronArray.push(uppercase[i]);
  }
}

if (userSpecial){
  for (var i = 0; i < specialchar.length; i++){
    ultronArray.push(specialchar[i]);
  }
}

if (userNumber){
  for (var i = 0; i < numbers.length; i++){
    ultronArray.push(numbers[i]);
  }
}


// Create a new variable that can store the new password

var nuevoPassword = "";

for (var i = 0; i < userLength; i++){
  nuevoPassword = nuevoPassword + ultronArray[Math.floor(Math.random()*ultronArray.length)];
}

return nuevoPassword;
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

console.log(ultronArray);