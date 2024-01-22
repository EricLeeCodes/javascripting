const range = function (start, end, step) {
  let some_array = [];
  if (
    start == undefined ||
    end == undefined ||
    step == undefined ||
    start > end ||
    step <= 0
  ) {
    return (some_array = []);
  } else {
    for (let i = start; i <= end; i += step) {
      some_array.push(i);
    }
    return some_array;
  }
};
