
/*
* Objects in JS are a collection of key-value pairs.
*
* Members can be accessed using dot notation or bracket notation.
*
* The field names are not enclosed in quotes.
*
* Methods within objects can be written with or without a function declaration
* (see the 'borrow' and 'return' methods in the 'book' object)
*
*/

// Define an object that models a book
const book = {
    name: 'Paradise Lost',
    pages: 500,
    available: true,
    borrow: function() {
        if (this.available  === true) {
            this.available = false;
            return true;
        } else {
            return false
        }
    },
    return() {
        this.available = true;
    }
}

// Dot notation used to access object member
console.log(`Book title: '${book.name}'`)
console.log(`Book available: ${book.available}`)
result = book.borrow()
console.log(`Borrowed book (success = ${result})`)
console.log(`Book available: ${book.available}`)
book.return()
console.log('Book returned.')
// Bracket notation used to access object member
console.log(`Book available: ${book['available']}`)
