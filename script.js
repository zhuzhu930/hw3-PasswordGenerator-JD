
//button id="generate"
//textarea id="password"

// Approach 1: Make a string consist of Alphabets(lowercase and uppercase), Numbers and Special Characters. the we will use Math.random() and Math.floor() method to generate a number in between 0 and l-1(where l is length of string). To get the character of the string of a particular index we can use .charAt() method. This will keep concatenating the random character from the string until the password of the desired length is obtained.

var textarea = document.getElementById("password");
var generateBtn = document.querySelector("#generate");
  
/* Function to generate combination of password */
function generatePassword() {
    var passwordText = '';
    var stringList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
              'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
    for (i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random() * stringList.length + 1);
                  
      passwordText += stringList.charAt(char)
    }
              
    return passwordText;
  }

// function generateRun() {
//     textarea.innerHTML = generatePassword();
//   }

generateBtn.addEventListener("click", generateRun);

function generateRun() {
  textarea.innerHTML = generatePassword();
}

//   // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page