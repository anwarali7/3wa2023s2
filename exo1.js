function myMap(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    newArr.push(result);
  }
  return newArr;
}

Object.defineProperty(Array.prototype, "myMap", {
  value: function (func) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const result = func(this[i]);
      newArr.push(result);
    }
    return newArr;
  },
});


// test
console.log("Exo1.");
console.log("Test myMap() :");
console.log(myMap([0, 1, 7, 33], val => val * 3)); // [0, 3, 21, 99]

// test prototype
console.log("Test prototype :");
console.log([0, 4, 7, 33].myMap(val => val * 3)); // [0, 12, 21, 99]