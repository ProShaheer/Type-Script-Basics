// ============================================================
// FINAL PROJECT: LIBRARY MANAGER (pure TypeScript, no libraries)
// Run this file:  tsx 09-final-project-library.ts
//
// It uses everything from lessons 1 to 8. The base works already.
// Finish the 8 tasks at the bottom.
// ============================================================

// ---------- TYPES ----------
type Genre = "fiction" | "science" | "history" | "other";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  isAvailable: boolean;
  borrowedBy?: string; // only filled while someone has the book
};

type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// ---------- DATA ----------
const books: Book[] = [
  { id: 1, title: "The Little Prince", author: "Saint-Exupery", genre: "fiction", isAvailable: true },
  { id: 2, title: "A Brief History of Time", author: "Hawking", genre: "science", isAvailable: true },
  { id: 3, title: "Sapiens", author: "Harari", genre: "history", isAvailable: false, borrowedBy: "Ali" },
];

// ---------- FUNCTIONS ----------
function findBook(id: number): Book | undefined {
  return books.find((b) => b.id === id);
}

function addBook(newBook: Omit<Book, "id" | "isAvailable">): Book {
  const book: Book = {
    ...newBook,
    id: books.length + 1,
    isAvailable: true,
  };
  books.push(book);
  return book;
}

function borrowBook(id: number, person: string): Result<Book> {
  const book = findBook(id);

  if (book === undefined) {
    return { success: false, error: "Book not found" };
  }
  if (!book.isAvailable) {
    return { success: false, error: `Already borrowed by ${book.borrowedBy}` };
  }

  book.isAvailable = false;
  book.borrowedBy = person;
  return { success: true, data: book };
}

function printBooks(list: Book[]): void {
  for (const b of list) {
    const status = b.isAvailable ? "available" : `borrowed by ${b.borrowedBy}`;
    console.log(`#${b.id} ${b.title} (${b.genre}) - ${status}`);
  }
}

// ---------- TRY IT ----------
addBook({ title: "Cosmos", author: "Sagan", genre: "science" });

const r1 = borrowBook(1, "Sara");
console.log(r1.success ? "Borrowed: " + r1.data.title : r1.error);

const r2 = borrowBook(3, "Sara");
console.log(r2.success ? "Borrowed: " + r2.data.title : r2.error);

const r3 = borrowBook(99, "Sara");
console.log(r3.success ? "Borrowed: " + r3.data.title : r3.error);

printBooks(books);

// ============================================================
// YOUR TASKS
// ============================================================
// TASK 1: Add a new genre "poetry" to the Genre type. Add a book with it.
// TASK 2: Write "returnBook(id: number): Result<Book>" that makes the book
//         available again and removes borrowedBy.
// TASK 3: Write "getAvailableBooks(): Book[]" using .filter().
// TASK 4: Write "getBooksByGenre(genre: Genre): Book[]".
// TASK 5: Write "countByGenre(): Record<Genre, number>"
//         (how many books in each genre).
// TASK 6: Write "updateBook(id: number, changes: Partial<Book>): Result<Book>".
// TASK 7: Add a "year" (number) to Book. Fix every error TypeScript shows.
// TASK 8: Write "searchBooks(text: string): Book[]" that finds books whose
//         title or author contains the text (ignore capital letters).
