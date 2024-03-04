/*
 * When a method is executed directly on an object, `this` will point to the
 * object. However, when the method is assigned to a variable and executed,
 * `this` will point to the global object, which will be the window object in
 * browsers. If strict mode is enabled, `this` will point to undefined.
 *
 * To make `this` point to the object when calling a method outside the object,
 * use the `bind` method and pass to it the object that you want to bind `this`
 * to. bind() will return another function with the same body as the original,
 * but with `this` bound to the object.
 */
const person = {
    name: 'Bobby',
    greet() {
        console.log(this);
    }
}

// The `person` object will be logged to the console since `this` points to `person`
person.greet();
console.log('\n');

// `this` now refers to the global object
const func = person.greet;
func();
console.log('\n');

// `this` now refers to the `person` object
const func2 = person.greet.bind(person);
func2();
