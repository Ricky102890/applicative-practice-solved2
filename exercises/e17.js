/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  let resultArray;
   let resultObj;
   let minArrayIndex = 0;
   for (let i = 0; i < array.length; i++) {
    if (cb(array[minArrayIndex]) > cb(array[i])) {
        minArrayIndex = i;
        resultObj = array[i];
    }
   }
   if(resultObj) {
    return resultObj;
   }
   else {
    return resultArray;
   }

}

export function maxBy(array, cb) {
  let resultArray;
    let resultObj;
    let maxArrayIndex = 0;
    for (let i = 0; i < array.length; i++) {
        let obj = array;
        if (cb(obj[i]) > cb(obj[maxArrayIndex])) {
            maxArrayIndex = i;
            resultObj = obj[i];
        }
    }
    if(resultObj) {
        return resultObj;
    }
    else {
        return resultArray;
    }

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function