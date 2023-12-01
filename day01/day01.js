const fs = require("fs");

const lines = fs
  .readFileSync("day01/example.txt", { encoding: "utf-8" })
  .split("\n")

// Check function with validation only on numbers - commented for the second puzzle
// function checkOneString(string){
//     let result;
//     let nums = [];
//     for(let i = 0; i < string.length; i++){
//       let temp = Number(string[i]);
//       if(!isNaN(temp)){
//         nums.push(temp);
//       }
//     }
//     result = String(nums[0]) + String(nums[nums.length -1]);
//     return result;
// }

// Check function with validation true of false if the string has a number in letters - second puzzle
function containsNumbersInLetter(string){
    let result = [];
    let validNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    while(string.length > 0){
        //console.log(string);
        let temp = Number(string[0]);
        if(!isNaN(temp)){
            result.push(temp);
            string = string.slice(1);
        } else{
            let found = false;
            for(let validNumber of validNumbers){
                if(string.indexOf(validNumber) === 0){
                    result.push(validNumbers.indexOf(validNumber));
                    string = string.slice(1);
                    found = true;
                    break;
                }
            }
            if(!found){
                string = string.slice(1);
            }            
        }
    }
    return result;
    //returns an array of the numbers in the string
}

// Helper function for adding the first and the last number in the array
function addTwoIndexes(array){
    let result = String(array[0]) + String(array[array.length -1]);
    return result;
}

// Check function with validation only on numbers - updated for the second puzzle
// function checkOneString(string){
//     let result;
//     let posibleNums = containsANumberInLetter(string);
//     for(let i = 0; i < string.length; i++){
//       let temp = Number(string[i]);
//       if(!isNaN(temp)){
//         nums.push(temp);
//       }
//     }
//     result = String(nums[0]) + String(nums[nums.length -1]);
//     return result;
// }

// Check function with validation only on numbers - commented for the second puzzle
// function checkAllStrings(array){
//     let sum = 0;
//     for(let i=0; i<array.length; i++){
//       let tempNum = checkOneString(array[i]);
//       sum += Number(tempNum);
//     }
//     return sum;
// }

// Check function with validation only on numbers - commented for the second puzzle
function checkAllStrings(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
      let temp = array[i];
      let tempArrayNumbers = containsNumbersInLetter(temp);
      let tempNumb = addTwoIndexes(tempArrayNumbers);
      console.log(tempNumb)
      sum += Number(tempNumb);
    }
    return sum;
}

//console.log test cases
//console.log(lines);
//console.log(checkAllStrings(lines));
//let test = containsNumbersInLetter('ddgjgcrssevensix37twooneightgt');
//console.log(addTwoIndexes(test));
console.log(checkAllStrings(lines));