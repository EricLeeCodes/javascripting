function lastIndexOf(array, lastIndex) {
  for (let i = array.length; i >= 0; i--) {
    if (lastIndex == array[i]) {
      return i;
    }
    if (i == 0) {
      return -1;
    }
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);

console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
