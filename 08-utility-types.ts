// ============================================================
// LESSON 8: UTILITY TYPES (shortcuts built into TypeScript)
// Run this file:  tsx 08-utility-types.ts
//
// They create a NEW type from an existing one, so you do not
// rewrite the same type again and again.
// ============================================================

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

// ------------------------------------------------------------
// Partial<T>: makes EVERY property optional
// Useful for "update" functions where you change only some fields
// ------------------------------------------------------------
function updateUser(user: User, changes: Partial<User>): User {
  return { ...user, ...changes };
}

const ali: User = { id: 1, name: "Ali", email: "ali@example.com", age: 20 };
console.log(updateUser(ali, { age: 21 })); // only age changed

// ------------------------------------------------------------
// Pick<T, "a" | "b">: keep ONLY some properties
// ------------------------------------------------------------
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 1, name: "Ali" };
console.log(preview);

// ------------------------------------------------------------
// Omit<T, "a">: keep everything EXCEPT some properties
// Useful for "create" forms (the id is made later by the system)
// ------------------------------------------------------------
type NewUser = Omit<User, "id">;
const newUser: NewUser = { name: "Sara", email: "sara@example.com", age: 22 };
console.log(newUser);

// ------------------------------------------------------------
// Readonly<T>: nothing can be changed
// ------------------------------------------------------------
const frozen: Readonly<User> = ali;
// frozen.age = 30; // ERROR: read-only

// ------------------------------------------------------------
// Record<Keys, Value>: an object where keys and values have set types
// ------------------------------------------------------------
type Role = "admin" | "user" | "guest";

const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
console.log(permissions.admin);
// If you forget one role, TypeScript gives an error.

// ------------------------------------------------------------
// keyof: a union of all the property names
// ------------------------------------------------------------
type UserKeys = keyof User; // "id" | "name" | "email" | "age"

function getProp(user: User, key: UserKeys) {
  return user[key];
}
console.log(getProp(ali, "name"));
// getProp(ali, "phone"); // ERROR: "phone" is not a property of User

// ============================================================
// YOUR TURN
// ============================================================
// 1. Make a type "Product" with id, title, price, stock.
// 2. Make "ProductSummary" using Pick (title and price only).
// 3. Make "NewProduct" using Omit (no id).
// 4. Write "updateProduct(product, changes: Partial<Product>)".
// 5. Make a Record where the keys are "pending" | "shipped" | "delivered"
//    and the values are numbers (how many orders in each status).
