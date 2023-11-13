function myFilter(arr, func) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    if (result == true) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// test
console.log(myFilter([0, 2, 8, 33], val => val % 2 == 0)); // [0, 2, 8]