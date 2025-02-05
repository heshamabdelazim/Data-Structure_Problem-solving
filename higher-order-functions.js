//.map   ===  .mapClone
const myArray = [1, 2, 3, 4, 5];

Array.prototype.mapClone = function (callBack) {
  let myArrayToPush = [];
  for (let i = 0; i < this.length; i++) {
    myArrayToPush.push(callBack(this[i], i, this)); 
  }
  return myArrayToPush;
};

//start testing the method .mapClone VS .map
const test1 = myArray.map((ele, i, arr) => ele * 3);
const test2 = myArray.mapClone((ele) => ele * 3);

console.log(test1, "map");
console.log(test2, "mapClone");

//--------------------------------------
// filter  === filterClone

Array.prototype.filterClone = function (callBack) {
  let arrayToPush = [];
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this) && arrayToPush.push(this[i]); //if true? ok push
  }
  return arrayToPush;
};

// strt testing
const test3 = myArray.filter((ele, ind, arr) => ele > 2);
const test4 = myArray.filterClone((ele, ind, arr) => ele > 2);

console.log(test3, "filter");
console.log(test4, "filterClone");

//--------------------------------------
// reducer === reducerClone
Array.prototype.reduceClone = function (callBack) {
  let accumalator = this[0]; //suppose first element is [1, ....] so accumalator = 1

  for (let i = 0; i < this.length; i++) {
    accumalator = callBack(accumalator, this[i + 1], i + 1, this); //every time it will update the first element
    if (i == this.length - 2) {
      break; //why? because the current(second) at the final
    }
  }
  return accumalator;
};

// start testing
const test5 = myArray.reduce((acc, cur, curInd, arr) => acc + cur);
const test6 = myArray.reduceClone((acc, curr, curInd, arr) => acc + curr);

console.log(test5, "reduce");
console.log(test6, "reduceClone");
