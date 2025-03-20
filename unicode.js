// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);
let thirdCodePoint = inputString1.charCodeAt(2);

// Task 2
let wordFromCodePoints = String.fromCharCode(72) + String.fromCharCode(101) + String.fromCharCode(108) + String.fromCharCode(108);

// Task 3
let inputString2 = "Launch";
let firstCharacter = inputString2.charCodeAt(0);
let secondCharacter = inputString2.charCodeAt(5);
let swappedString = String.fromCharCode(secondCharacter) + "aunc" + String.fromCharCode(firstCharacter);

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  firstCharacter,
  secondCharacter,
  swappedString,
});
