// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to be?",
    "Choose a number between 8 and 128"
  );
  confirmLength = parseInt(confirmLength);
  // confrim lenth is more than 8 OR less than 123
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Please choose a number between 8 and 128.");
    return generatePassword();
  }

  var confirmUpper = confirm("Would you like to include upper case letters?");
  var confirmLower = confirm("Would you like to include lower case letters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSymbol = confirm("Would you like to include symbols?");

  // checking values to make sure at least one value was selected
  // if(!confirmUpper && !confirmLower && !confirmNumber && !confirmSymbol)
  // more effective checker since it is two parts rather than 5
  if (!(confirmUpper || confirmLower || confirmNumber || confirmSymbol)) {
    alert("Please select a minimum of one option");
    return generatePassword();
  }
  // defining passwords as a blank value that can be filled
  var password = "";
  // concat
  while (password.length < confirmLength) {
    if (confirmUpper) {
      // concat together (non-array concat)
      password += getRandomUpper();
      // once it reaches the number entered it breaks the cycle
      if (password.length === confirmLength) break;
    }

    if (confirmLower) {
      password += getRandomLower();
      if (password.length === confirmLength) break;
    }

    if (confirmNumber) {
      password += getRandomNumber();
      if (password.length === confirmLength) break;
    }

    if (confirmSymbol) {
      password += getRandomSymbol();
      if (password.length === confirmLength) break;
    }
  }
  // turns string into an array to shuffle (ensuring one of each but mixing them up)
  password = password.split("");
  // for loop i = length not 0 to avoid issues
  for (var i = password.length; i < password.length; i++) {
    var randIndex = Math.floor(Math.random() * password.length);

    var temp1 = password[i];
    var temp2 = password[randIndex];
    // shuffle
    password[i] = temp2;
    password[randIndex] = temp1;
  }
  // turns the array back into a string
  return password.join("");

  // my Tutor explained another and more way to create and shuffle from an array instead of math.floor
  // var password = [];
  // var options = [];
  // defines values without assining it a value
  // var values;

  // if (confirmUpper) {
  // generates an array in the charcode from 65-90
  //   values = returnVals(65, 90);
  //   options = options.concat(values);
  // defines the password as the concat of the random values from the array
  //   password = password.concat(returnRandomVal(values));
  // }
  // if (confirmLower) {
  //   values = returnVals(97, 122);
  //   options = options.concat(values);
  //   password = password.concat(returnRandomVal(values));
  // }
  // if (confirmNumber) {
  //   values = returnVals(48, 57);
  //   options = options.concat(values);
  //   password = password.concat(returnRandomVal(values));
  // }
  // if (confirmSymbol) {
  //   values = returnVals(33, 47);
  //   options = options.concat(values);
  //   password = password.concat(returnRandomVal(values));
  // }

  // while (password.length < confirmLength) {
  //   var value = returnRandomVal(options);
  //   password.push(value);
  // }

  // for (var i = 0; i < password.length; i++) {
  //   var randIndex = Math.floor(Math.random() * password.length);

  //   var temp1 = password[i];
  //   var temp2 = password[randIndex];

  //   if (typeof temp1 === "number") {
  //     temp1 = String.fromCharCode(temp1);
  //   }
  //   if (typeof temp2 === "number") {
  //     temp2 = String.fromCharCode(temp2);
  //   }

  //   password[i] = temp2;
  //   password[randIndex] = temp1;
  // }

  // for (var i = 0; i < password.length; i++) {
  //   var randIndex = Math.floor(Math.random() * password.length);

  //   var temp1 = password[i];
  //   var temp2 = password[randIndex];

  //   if (typeof temp1 === "number") {
  //     temp1 = String.fromCharCode(temp1);
  //   }
  //   if (typeof temp2 === "number") {
  //     temp2 = String.fromCharCode(temp2);
  //   }

  //   password[i] = temp2;
  //   password[randIndex] = temp1;
  // }

  // return password.join("");
}

// function returnVals(lo, hi) {
//   var temp = [];
//   while (lo <= hi) {
//     temp.push(lo);
//     lo++;
//   }
//   return temp;
// }

// function returnRandomVal(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// Random Generation
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
