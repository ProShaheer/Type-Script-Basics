// ============================================================
// LESSON 4: UNION TYPES AND LITERAL TYPES
// Run this file:  tsx 04-unions-and-literals.ts
//
// Union = "this OR that"   (written with the | symbol)
// ============================================================

// A value that can be a string OR a number
let id: string | number;
id = 101; // OK
id = "A-101"; // OK
// id = true; // ERROR: boolean is not allowed

// ------------------------------------------------------------
// LITERAL TYPES: only these EXACT values are allowed
// This is great for things like status, role, size, direction
// ------------------------------------------------------------
type Role = "admin" | "user" | "guest";

let myRole: Role = "admin";
// myRole = "boss"; // ERROR: "boss" is not one of the 3 allowed values
myRole = "guest"; // OK
console.log(myRole);

type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  console.log("Moving", direction);
}
move("left"); // OK
// move("forward"); // ERROR: not allowed (typos are caught!)

// ------------------------------------------------------------
// NARROWING: when a value can be 2 types, check which one it is
// before using it
// ------------------------------------------------------------
function printId(id: string | number): void {
  // id.toUpperCase(); // ERROR: a number has no toUpperCase

  if (typeof id === "string") {
    console.log(id.toUpperCase()); // here TypeScript knows: string
  } else {
    console.log(id.toFixed(2)); // here TypeScript knows: number
  }
}
printId("abc");
printId(42);

// ------------------------------------------------------------
// A REAL-LIFE EXAMPLE: an order with a status
// ------------------------------------------------------------
type Status = "pending" | "shipped" | "delivered";

type Order = {
  id: number;
  status: Status;
};

function describe(order: Order): string {
  if (order.status === "pending") return "We are preparing your order";
  if (order.status === "shipped") return "Your order is on the way";
  return "Your order arrived";
}

console.log(describe({ id: 1, status: "shipped" }));

// ============================================================
// YOUR TURN
// ============================================================
// 1. Make a type "Size" that can only be "small" | "medium" | "large".
// 2. Write "price(size: Size): number" returning 100, 150 or 200.
// 3. Make a variable "value" of type string | number | boolean.
// 4. Write "show(value: string | number): string" that returns
//    "Text: ..." for strings and "Number: ..." for numbers.
// 5. Try calling price("huge") and read the error.
