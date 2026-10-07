// ============================================================
// LESSON 3: FUNCTIONS
// Run this file:  tsx 03-functions.ts
//
// For a function you label two things:
//   1. the INPUTS (parameters)
//   2. the OUTPUT (return value)
// ============================================================

// function name(input: type): outputType
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // 15

// add("5", 10); // ERROR: "5" is a string, a number is needed
// add(5); // ERROR: the second number is missing
// add(5, 10, 15); // ERROR: too many values

// ------------------------------------------------------------
// ARROW FUNCTIONS work the same way
// ------------------------------------------------------------
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(4, 3));

// ------------------------------------------------------------
// FUNCTIONS THAT RETURN NOTHING use "void"
// ------------------------------------------------------------
function sayHello(name: string): void {
  console.log("Hello, " + name);
}
sayHello("Ali");

// ------------------------------------------------------------
// OPTIONAL and DEFAULT parameters
// ------------------------------------------------------------
function greet(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}
console.log(greet("Sara")); // uses the default "Hello"
console.log(greet("Sara", "Welcome")); // uses "Welcome"

function fullName(first: string, last?: string): string {
  // last may be missing (undefined), so we must check it first
  if (last === undefined) {
    return first;
  }
  return first + " " + last;
}
console.log(fullName("Ali"));
console.log(fullName("Ali", "Khan"));

// ------------------------------------------------------------
// FUNCTIONS WITH OBJECTS
// ------------------------------------------------------------
type Student = { name: string; marks: number };

function isPassed(student: Student): boolean {
  return student.marks >= 50;
}

console.log(isPassed({ name: "Sara", marks: 80 })); // true

// ------------------------------------------------------------
// FUNCTIONS WITH ARRAYS
// ------------------------------------------------------------
function average(numbers: number[]): number {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}
console.log(average([80, 90, 100])); // 90

// ============================================================
// YOUR TURN
// ============================================================
// 1. Write "square(n: number): number" that returns n * n.
// 2. Write "isEven(n: number): boolean".
// 3. Write "makeTitle(text: string): string" that returns the text in UPPERCASE
//    (hint: text.toUpperCase()).
// 4. Write "totalPrice(prices: number[]): number".
// 5. Call each one wrongly on purpose and read the errors.
