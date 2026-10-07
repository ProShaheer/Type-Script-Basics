# TypeScript Practice Course (pure TypeScript)

No Next.js, no React, no Node knowledge needed. Only TypeScript.

## What you need
- Node.js installed
- TypeScript and tsx installed (you already did this):
  `npm install -g typescript tsx`

## How to use it
1. Unzip this folder (for example to your Desktop).
2. Open the folder in VS Code (File > Open Folder).
3. Open the terminal in VS Code (Ctrl + `).
4. Run a lesson:
   `tsx 01-basic-types.ts`
5. Read the lesson from top to bottom.
6. Remove the // from the "ERROR" lines one by one, and read the red error.
   Put the // back after.
7. Do the "YOUR TURN" tasks at the bottom of the file.

## Check your work for errors
`tsc --noEmit`
No output means no errors.

## Order (do one lesson per day)
| Day | File | Topic |
|---|---|---|
| 1 | 01-basic-types.ts | string, number, boolean, inference |
| 2 | 02-arrays-and-objects.ts | arrays, object types, optional properties |
| 3 | 03-functions.ts | typing inputs and outputs |
| 4 | 04-unions-and-literals.ts | "this OR that", exact values, narrowing |
| 5 | 05-null-and-undefined.ts | the most common real bug, and how to avoid it |
| 6 | 06-type-vs-interface.ts | type, interface, extends, readonly |
| 7 | 07-generics.ts | one function for many types |
| 8 | 08-utility-types.ts | Partial, Pick, Omit, Record, keyof |
| 9-10 | 09-final-project-library.ts | build a small library manager |

## Rules for learning
- Type the "YOUR TURN" answers yourself. Do not copy and paste.
- Read every error message before asking for help.
- Never use the type `any`. It switches off TypeScript's protection.
