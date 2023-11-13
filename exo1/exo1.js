function myMap(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    newArr.push(result);
  }
  return newArr;
}

// test
console.log(myMap([0, 1, 7, 33], val => val * 3)); // [0, 3, 21, 99]