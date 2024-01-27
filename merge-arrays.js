function merge(array1, array2) {
  let mergedArray = array1;
  for (const number of array2) {
    mergedArray = array1.push(number);
  }
  return array1.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
