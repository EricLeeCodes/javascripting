function concat(array1, array2) {
  for (const element of array2) {
    array1.push(element);
  }
  return array1;
}
console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
