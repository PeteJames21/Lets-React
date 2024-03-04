/**
 * Arrow functions provide a shorter and more readable syntax of defining
 * functions. They are particularly useful when passing an anonymous
 * function as an argument to another function.
 *
 * Another interesting property of arrow functions is that they do not rebind
 * `this` when used within an object (see examples below). This means that when
 * calling arrow functions within an object, `this` will point to the object rather
 * than the global object, as is the case for regular functions.
 */


// The old JavaScript way of defining a function and binding it to a variable.
const square = function(x) {
    return x ** 2;
}
console.log(square(3));

// Redefining square() as an arrow function.
// The curly braces can be omitted if the body only has a single line.
const square2 = x => x ** 2;
console.log(square2(3));

// If the arrow function has more than two args, the args must be enclosed
// in brackets.
const add = (x, y) => x + y;
console.log(add(5, 10));

// Let it shine! Use an arrow function to filter positive integers from an array.
const nums = [3, 4, 10, 19, 6, 100];
const even_nums = nums.filter(i => i % 2 === 0);
console.log(even_nums);


// Test the rebinding of `this` in arrow functions and regular functions.

// `this` will point to the global object
const person = {
    name: 'Junior',
    greet() {
        setTimeout( function() {
            console.log(this);
        }
        ), 1000;
    }
}

person.greet();

// `this` will point to the `person2` object
const person2 = {
    name: 'Junior',
    greet() {
        setTimeout(() => console.log(this),
        1000)
    }
}

person2.greet();