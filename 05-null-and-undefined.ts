// ============================================================
// LESSON 5: null AND undefined (the #1 source of real bugs)
// Run this file:  tsx 05-null-and-undefined.ts
//
// In JavaScript the most common crash is:
//   "Cannot read properties of undefined"
// TypeScript's "strict" mode stops this BEFORE you run the code.
// ============================================================

type User = {
  name: string;
  email: string;
};

const users: User[] = [
  { name: "Ali", email: "ali@example.com" },
  { name: "Sara", email: "sara@example.com" },
];

// .find() returns the user OR undefined (if nobody matches)
function findUser(name: string): User | undefined {
  return users.find((u) => u.name === name);
}

const result = findUser("Ali");

// console.log(result.email); // ERROR: result might be undefined!

// Fix 1: check before you use it
if (result !== undefined) {
  console.log(result.email); // safe here
}

// Fix 2: optional chaining ?.  (stops safely if the value is missing)
console.log(result?.email); // email, or undefined if result is missing

// Fix 3: a default value with ??
const email = findUser("Nobody")?.email ?? "No email found";
console.log(email); // "No email found"

// ------------------------------------------------------------
// null means "empty on purpose"
// ------------------------------------------------------------
let selectedUser: User | null = null; // nobody selected yet
console.log(selectedUser);

selectedUser = { name: "Sara", email: "sara@example.com" };
console.log(selectedUser.name);

// ------------------------------------------------------------
// The "!" symbol says "trust me, it is not undefined".
// AVOID IT. If you are wrong, your app crashes.
// ------------------------------------------------------------

// ============================================================
// YOUR TURN
// ============================================================
// 1. Write "findByEmail(email: string): User | undefined".
// 2. Call it with an email that exists, and one that does not.
// 3. Print the name using ?. and a default using ??.
// 4. Write "getFirstUser(list: User[]): User | null" that returns null
//    for an empty list.
// 5. Try to use the result directly (without checking) and read the error.
