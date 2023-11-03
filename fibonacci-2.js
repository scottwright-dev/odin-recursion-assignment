/*
** Assignment 1: Fibonacci Sequence Recursive **

Now write another function fibsRec which solves the same problem recursively. 
This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
*/

function fibsRec(num) {
    // If the function is called with num as 1, then return an array with the first Fibonacci number.
    if (num === 1) return [0];
    
    // If the function is called with num as 2, then return an array with the first two Fibonacci numbers.
    if (num === 2) return [0, 1];
    
    // For other values of num:
    // - Recursively compute the Fibonacci sequence for num-1
    // - Store the result in fibsArray
    let fibsArray = fibsRec(num -1);
    
    // Calculate the next Fibonacci number by summing the last two numbers in fibsArray
    // and then append the calculated number to the end of fibsArray
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
    
    // Return the computed fibsArray
    return fibsArray;
}

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));
