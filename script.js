// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

var charString = [ "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz",
"0123456789", "~!@#$%^&*()_-+="];
var userInput = [];
// Add event listener to generate button


function generatePassword(){
  var characterLength = 0;
  while ((characterLength < 8 || 
    characterLength > 128) || 
    Number.isInteger(characterLength) === false){
  
   characterLength = parseInt(prompt("Please input a password length between 8 & 128 characters"));
    }

  
  var upper = false;
  var lower = false;
  var number = false;
  var symbol = false;

  while(!upper && !lower &&
    !number && !symbol){
      upper = confirm("Click OK to confirm uppercase characters");
      lower = confirm("Click OK to confirm Lowercase characters");
      number = confirm("Click OK to confirm number characters");
      symbol = confirm("Click OK to confirm special characters");
    }
    if(upper){
      userInput.push(charString[0]);
    }
    if(lower){
      userInput.push(charString[1]);
    }
    if (number){
      userInput.push(charString[2]);
    }
    if(symbol){
      userInput.push(charString[3]);
    }

    var password = "";
    userInput = userInput.join("").split("");

    for(var i = 0; i < characterLength; i++){
      var index = (Math.floor(Math.random() * userInput.length));
      password = password + userInput[index];
    }
    return password;
  
}


generateBtn.addEventListener("click", writePassword);
