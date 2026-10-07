// ============================================================
// LESSON 2: ARRAYS AND OBJECTS
// Run this file:  tsx 02-arrays-and-objects.ts
// ============================================================

// ------------------------------------------------------------
// ARRAYS: a list of the same kind of thing
// string[] means "a list of strings"
// ------------------------------------------------------------
const fruits: string[] = ["apple", "banana", "mango"];
const marks: number[] = [80, 92, 75];

fruits.push("orange"); // OK
// fruits.push(5); // ERROR: 5 is a number, the list holds strings

console.log(fruits, marks);

// ------------------------------------------------------------
// OBJECTS: describe the SHAPE with a "type"
// ------------------------------------------------------------
type Student = {
  name: string;
  age: number;
  isPassed: boolean;
};

const student1: Student = {
  name: "Sara",
  age: 19,
  isPassed: true,
};

console.log(student1.name);

// TypeScript checks every object against the type:
// const student2: Student = { name: "Ahmed", age: 21 }; // ERROR: isPassed is missing
// console.log(student1.nme); // ERROR: "nme" does not exist (typo caught!)

// ------------------------------------------------------------
// ARRAY OF OBJECTS (very common in real projects)
// ------------------------------------------------------------
const students: Student[] = [
  { name: "Sara", age: 19, isPassed: true },
  { name: "Ahmed", age: 21, isPassed: false },
];

for (const s of students) {
  console.log(s.name, "passed?", s.isPassed);
}

// ------------------------------------------------------------
// OPTIONAL PROPERTY: add ? when a value may be missing
// ------------------------------------------------------------
type Book = {
  title: string;
  author: string;
  pages?: number; // optional
};

const book1: Book = { title: "My Book", author: "Ali" }; // OK without pages
console.log(book1);

// ============================================================
// YOUR TURN
// ============================================================
// 1. Make a type "Car" with: brand (string), year (number), isElectric (boolean).
// 2. Make an array "cars" with 3 Car objects.
// 3. Use a for loop to print each brand.
// 4. Make "color" an OPTIONAL property of Car.
// 5. Add a car with a typo in a property name. Read the error.
