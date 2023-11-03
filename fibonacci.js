/*
** Warm up: Fibonacci Sequence **

Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. 
Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
Now write another function fibsRec which solves the same problem recursively. 
This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
*/


// part 1:
// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. 
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(num) {
    // Initialize fibArray with the first two numbers of the Fibonacci sequence: [0, 1]
    let fibonacciArray = [0,1];

    // Handle special cases where num is 1 or 2, since they are the starting numbers of the Fibonacci sequence.
    if(num === 1) return [0];
    if(num === 2) return [0,1];

    // loop thru the fibonacciArray up until num, starting at index 2, because we have 1st two numbers in sequence already
    for (let i = 2; i < num; i++) {

    // Calculate the next number in the sequence as the sum of the last two numbers in fibArray using re
    let nextNum = fibonacciArray[i-1] + fibonacciArray[i-2];

    // Add the next number to fibonacciArray.
        fibonacciArray.push(nextNum);
    }
    // Return fibonacciArray up to the length 'num'
    return fibonacciArray;
}

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(5));
console.log(fibs(7));
console.log(fibs(8));