# Odin Recursion Assignment

This repo contains my solutions to the recursion exercises provided by The Odin Project curriculum.
It includes implementations of the Fibonacci sequence using both iterative and recursive approaches and a recursive version of the merge sort algorithm.

## Contents

- fibonacci.js - Contains an iterative approach to generating a Fibonacci sequence.
- fibonacci-2.js - Implements a recursive function to generate a Fibonacci sequence.
- mergeSort.js - Features a recursive merge sort function to sort an array.

### Warm up exercise: Fibonacci Sequence (fibonacci.js)

Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

### Fibonacci Recursion (fibonacci-2.js)

Now write another function fibsRec which solves the same problem recursively.
This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

### Assignment 2: Merge Sort

Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

Tips: Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

## Notes

For educational purposes, I have extensively commented the code to explain each step of the algorithms. Console logging is also used for step-by-step tracing of the functions executions, providing a clear understanding of the recursive processes involved.

## Running the Tests

To execute the test examples provided for each algorithm, you can run the JavaScript files in a Node.js environment:

node fibonacci.js
node fibonacci-2.js
node mergeSort.js
