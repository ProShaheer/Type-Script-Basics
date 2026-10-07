// ============================================================
// LESSON 7: GENERICS (a type that you fill in later)
// Run this file:  tsx 07-generics.ts
//
// You already used generics: Array<string> is the same as string[].
// Think of <T> as a blank: "this works for ANY type, and I will
// tell you which type when I use it".
// ============================================================

// ------------------------------------------------------------
// THE PROBLEM
// ------------------------------------------------------------
function firstNumber(list: number[]): number | undefined {
  return list[0];
}
// To get the first string we would need another function. Annoying.

// ------------------------------------------------------------
// THE SOLUTION: one function for every type
// T is a placeholder name (you can write any name, T is the habit)
// ------------------------------------------------------------
function first<T>(list: T[]): T | undefined {
  return list[0];
}

const firstNum = first([10, 20, 30]); // T becomes number
const firstName = first(["Ali", "Sara"]); // T becomes string
console.log(firstNum, firstName);

// TypeScript remembers the type:
// firstNum?.toUpperCase(); // ERROR: firstNum is a number
// firstName?.toFixed(2); // ERROR: firstName is a string

// ------------------------------------------------------------
// GENERIC TYPE: a box that can hold anything
// ------------------------------------------------------------
type Box<T> = {
  value: T;
};

const numberBox: Box<number> = { value: 42 };
const textBox: Box<string> = { value: "hello" };
console.log(numberBox.value, textBox.value);

// ------------------------------------------------------------
// REAL-LIFE EXAMPLE: the result of an operation (this is how many
// professional codebases describe API responses)
// ------------------------------------------------------------
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

type User = { id: number; name: string };

function getUser(id: number): Result<User> {
  if (id === 1) {
    return { success: true, data: { id: 1, name: "Ali" } };
  }
  return { success: false, error: "User not found" };
}

const res = getUser(1);

if (res.success) {
  console.log(res.data.name); // TypeScript knows "data" exists here
} else {
  console.log(res.error); // and "error" exists here
}

// ============================================================
// YOUR TURN
// ============================================================
// 1. Write "last<T>(list: T[]): T | undefined" returning the last item.
// 2. Test it with numbers and with strings.
// 3. Write "type Pair<A, B> = { first: A; second: B }" (two blanks!).
//    Make one Pair of string and number.
// 4. Use Result<number> in a function "divide(a, b)" that returns an
//    error when b is 0.
