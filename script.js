// Arrays of the possible characters
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

function generatePassword(){
  var chosenChars = [];

  // Prompt the user for password length
  var passwordLength = prompt("Enter password length.");

  // Prompt the user for inclusion of characters
  var useLowercase = confirm("Do you want to use lowercase letters?");

  var useUppercase = confirm("Do you want to use uppercase letters?");

  var useNumbers = confirm("Do you want to use numbers?");

  var useSpecChar = confirm("Do you want to use special characters?");

  //Check to see if a set of charaters was chosen
  if(!useLowercase && !useUppercase && !useNumbers && !useSpecChar){
    alert('Must chose a set of characters');
    return;
  }

  // Generate char list based on response 
  if(useLowercase){
    chosenChars = chosenChars.concat(lowercase);
  }
  if(useUppercase){
    chosenChars = chosenChars.concat(uppercase);
  }
  if(useNumbers){
    chosenChars = chosenChars.concat(numbers);
  }
  if(useSpecChar){
    chosenChars = chosenChars.concat(specialChar);
  }

  // Generate the password using the given criteria
  var password = [];

  for (var i = 0; i < passwordLength; i++){
    randNum = Math.floor(Math.random() * chosenChars.length);
    password.push(chosenChars[randNum]);
  }

  // Return the password
  return password.join('');
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
