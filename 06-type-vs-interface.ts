// ============================================================
// LESSON 6: type VS interface
// Run this file:  tsx 06-type-vs-interface.ts
//
// Both describe the shape of an object. For a beginner they are
// almost the same, so do not stress about the choice.
// ============================================================

// With "type"
type Product = {
  id: number;
  title: string;
  price: number;
};

// With "interface"
interface Customer {
  id: number;
  name: string;
}

const p: Product = { id: 1, title: "Pen", price: 20 };
const c: Customer = { id: 1, name: "Ali" };
console.log(p, c);

// ------------------------------------------------------------
// WHEN TO USE WHICH?
//   - interface: describing objects, can be extended
//   - type: also works for unions ("a" | "b"), and more
//
// A simple rule: use "type" for everything. Use "interface" if
// your team already does, or when you need "extends".
// ------------------------------------------------------------

// Extending an interface (adding more properties to an existing one)
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = { name: "Sara", age: 25, salary: 50000 };
console.log(emp);

// The same idea with "type" uses & (it joins two types)
type Animal = { name: string };
type Dog = Animal & { breed: string };

const dog: Dog = { name: "Max", breed: "Labrador" };
console.log(dog);

// ------------------------------------------------------------
// readonly: a property that cannot be changed after it is created
// ------------------------------------------------------------
type Account = {
  readonly id: number; // cannot change
  balance: number; // can change
};

const acc: Account = { id: 1, balance: 100 };
acc.balance = 200; // OK
// acc.id = 2; // ERROR: id is read-only
console.log(acc);

// ============================================================
// YOUR TURN
// ============================================================
// 1. Make an interface "Vehicle" with: brand (string), wheels (number).
// 2. Make an interface "Truck" that extends Vehicle and adds "loadKg" (number).
// 3. Create a Truck object.
// 4. Make the "brand" property readonly. Try to change it and read the error.
// 5. Make the same Truck using "type" and "&" instead.
