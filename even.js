const isEven  = function (num) {
  return num % 2 === 0;
}

// more wordy version
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

// easier version

console.log(isEven(10));
console.log(isEven(11));
