// CATCH ALL ELEMENTS
const passwordLength = document.getElementById("passwordLength");
const password = document.getElementById("password");
const getPassword = document.getElementById("generatePassword");
const savePassword = document.getElementById("savePassword");

// FUNCTION GENERATE PASSWORD
let generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = '`~!@#$%^&*()_+={}[]||:;"<>,./?';

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";

  for (let i = 0; i < len; i++) {
    generator += data[~~(Math.random() * data.length)];
  }

  return generator;
};

// WHEN THE BUTTON IS CLICKED
getPassword.addEventListener("click", () => {
  let newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
});

savePassword.addEventListener("click", () => (document.title = password.value));