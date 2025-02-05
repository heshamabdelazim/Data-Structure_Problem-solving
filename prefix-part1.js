/*
Runing sum of 1d array
https://leetcode.com/problems/running-sum-of-1d-array/description/
*/

//-----------------------------------------------------

/*
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

//-----------------------------------------------------

/*
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

//-----------------------------------------------------

/*
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

//--------Solu-----------------------------------------

const ex1 = [1, 2, 3, 4]; //you need output to be [1, 3, 6, 10]
const ex2 = [1, 1, 1, 1, 1];  //you need output to be [1, 2, 3, 4, 5]
const ex3 = [3, 1, 2, 10, 1];  //you need output to be [3, 4, 6, 16, 17]

function solution(inputArray) {
  let arrayToPush = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    //the loop starts at the index [1]
    inputArray[i] += inputArray[i - 1];
    arrayToPush.push(inputArray[i]);
  }
  return arrayToPush;
}

console.log(solution(ex1)); //output [1, 3, 6, 10]
console.log(solution(ex2)); //output [1, 2, 3, 4, 5]
console.log(solution(ex3)); //output [3, 4, 6, 16, 17]
