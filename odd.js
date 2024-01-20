const isOdd = function(num) {
  return num % 3 === 1 || num === 3 || num === 1;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
