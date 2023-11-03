/*
Assignment 2
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

Tips: Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!). 
It may be helpful to check out the background videos again if you don’t quite understand what should be going on.
*/


// the idea of a merge sort algo is to sort smaller arrays, and then combine those arrays together (merge) in a sorted order.
// merge sort leverages recursion.


// mergeSort algorithm concept:

/* 
on input of n elements
    if n < 2
        return
    else
        sort left half of elements
        sort right half of elements
        merge sorted halves
*/ 

function mergeSort(array) {
    console.log("Calling mergeSort on array:", array);
    // base case:
    // If the array is less than or = to 1, it is already sorted. Return as is.
    if (array.length <= 1) {
        console.log("base case reached with array:", array);
        return array;
    }
    // split the array into two parts
    const midpoint = Math.floor(array.length / 2);
    console.log("splitting the array at index", midpoint, "into two halves");

    // recursive step:
    // create a variable to store leftSideOfArray of array, and recursively sort it by calling mergeSort on it
    const leftSideOfArray = array.slice(0, midpoint);
    console.log("Going to sort the left side:", leftSideOfArray);
    const leftSideSorted = mergeSort(leftSideOfArray);

    // Do the same with the right side
    const rightSideOfArray = array.slice(midpoint);
    console.log("Going to sort the right side:", rightSideOfArray);
    const rightSideSorted = mergeSort(rightSideOfArray);

    // merge the sorted halves
    console.log("Merging sorted halves", leftSideSorted, "and", rightSideSorted);
    const merged = merge(leftSideSorted, rightSideSorted);
    console.log("Result of merge:", merged);
    return merged;
}

// merge step:
// create a function to handle merging the two sub-arrays, which will be called inside mergeSort
function merge(leftSubArray, rightSubArray) {
    let mergeResult = []; // will hold the merged result
    let leftIndex = 0;    // tracks current position in left sub-array
    let rightIndex = 0;   // tracks current position in right sub-array

    // Continue looping until we exhaust one of the sub-arrays
    while (leftIndex < leftSubArray.length && rightIndex < rightSubArray.length) {
        console.log('Comparing:', leftSubArray[leftIndex], 'and', rightSubArray[rightIndex]);
        // Push the smaller element to mergeResult
        if (leftSubArray[leftIndex] <= rightSubArray[rightIndex]) {
            mergeResult.push(leftSubArray[leftIndex]);
            console.log(`Added ${leftSubArray[leftIndex]} from the left subarray, merge result:`, mergeResult);
            //increment to move through array
            leftIndex++;
        } else {
            mergeResult.push(rightSubArray[rightIndex]);
            console.log(`Added ${rightSubArray[rightIndex]} from the right subarray, merge result:`, mergeResult);
            //increment to move through array
            rightIndex++;
        }
    }

    // Append any remaining elements from the left sub-array (if any)
    while (leftIndex < leftSubArray.length) {
        mergeResult.push(leftSubArray[leftIndex]);
        console.log(`Added remaining ${leftSubArray[leftIndex]} from the left subarray, merge result:`, mergeResult);
        leftIndex++;
    } 
    // Append any remaining elements from the right sub-array (if any)
    while (rightIndex < rightSubArray.length) {
        mergeResult.push(rightSubArray[rightIndex]);
        console.log(`Added remaining ${rightSubArray[rightIndex]} from the right subarray, merge result:`, mergeResult);
        rightIndex++;
    }

    // The mergeResult is now a fully merged and sorted array
    console.log("Final merged array:", mergeResult);
    return mergeResult;
}

// TESTING AREA //

let testArray0 = [];
let testArray1 = [0];
let testArray2 = [1, 0];
let testArray3 = [1, 7, 4, 8, 2, 3, 5, 0];
let testArray4 = [1, 7, 4, 8, 2, 3, 5, 0, 6];

console.log('testArray0: original:', [...testArray0], 'sorted:', mergeSort([...testArray0]));
console.log('testArray1: original:', [...testArray1], 'sorted:', mergeSort([...testArray1]));
console.log('testArray2: original:', [...testArray2], 'sorted:', mergeSort([...testArray2]));
console.log('testArray3: original:', [...testArray3], 'sorted:', mergeSort([...testArray3]));
console.log('testArray4: original:', [...testArray4], 'sorted:', mergeSort([...testArray4]));
 