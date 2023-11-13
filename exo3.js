function myReduce(arr, func, initialValue) {
  let acc = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }
  return acc;
}

// test
console.log("Test exo3 :");
console.log(myReduce([1,2,3,4], (accumulator, currentValue) => accumulator + currentValue, 0)); // Expected output: 10
