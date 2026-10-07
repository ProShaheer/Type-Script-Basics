// ============================================================
// LESSON 1: BASIC TYPES
// Run this file:  tsx 01-basic-types.ts
//
// A type is a LABEL that says what kind of value a variable holds.
// ============================================================

// The 3 types you will use the most
const name: string = "Ali"; // text
const age: number = 20; // any number (whole or decimal)
const isStudent: boolean = true; // true or false

console.log(name, age, isStudent);

// ------------------------------------------------------------
// TYPE INFERENCE: TypeScript can often guess the type for you.
// You do NOT need to write the label every time.
// ------------------------------------------------------------
const city = "Lahore"; // TypeScript knows this is a string
const score = 95; // TypeScript knows this is a number

console.log(city, score);

// ------------------------------------------------------------
// WHAT TYPESCRIPT PROTECTS YOU FROM
// Remove the // at the start of BOTH lines of a pair. Read the red error.
// Then put the // back.
// ------------------------------------------------------------

// let price: number = 100;
// price = "free"; // ERROR: a string is not a number

// let isOpen: boolean = true;
// isOpen = "yes"; // ERROR: a string is not a boolean

// ------------------------------------------------------------
// let vs const
// const = cannot be reassigned.  let = can be reassigned.
// ------------------------------------------------------------
let counter = 0;
counter = counter + 1; // OK, it is still a number
console.log(counter);

// ============================================================
// YOUR TURN (write your answers below this line)
// ============================================================
// 1. Make a variable "myName" (string) with your name.
// 2. Make a variable "myAge" (number) with your age.
// 3. Make a variable "likesCoding" (boolean).
// 4. Use console.log to print all three.
// 5. Try to put a string into myAge. Read the error message.
