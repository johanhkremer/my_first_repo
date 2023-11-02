/*
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
//password = "password"; // inte giltigt
//password = "pa$sword"; // giltigt
//password = "p@ssw%rd"; // giltigt
//password = "pa$$word"; // giltigt
//password = "secretpassword"; // inte giltigt
password = "secret-password"; // giltigt
//password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
];

// Skriv din kod här

/*
//Lösning 1
let specialCharCount = 0;

for (let i = 0; i < password.length; i++) {
  if (specialChars.includes(password[i])) {
    specialCharCount++;
  }
}

if (password.length >= 6 && specialCharCount >= 2) {
  console.log("1. Your password is super strong enough");
} else if (password.length >= 8 && specialCharCount >= 1) {
  console.log("2. Password strong enough");
} else if (password.length >= 12 && password.includes("-")) {
  console.log("3. Password strong enough");
} else if (password.length >= 16) {
  console.log("4. Password strong enough");
} else {
  console.log("5. Password not strong enough 😩");
}
*/

//Lösning 2
let specialCharCount = 0;

for (let i = 0; i < password.length; i++) {
  if (specialChars.includes(password[i])) {
    specialCharCount++;
  }
}

if (
  (password.length >= 6 && specialCharCount >= 2) ||
  (password.length >= 8 && specialCharCount >= 1) ||
  (password.length >= 12 && password.includes("-")) ||
  password.length >= 16
) {
  console.log("✅ Password strong enough");
} else {
  console.log("🛑 Password not strong enough");
}

// || OR option+7
// && AND

//Lektion
