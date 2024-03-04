/**
 * All objects are private by default. The `export` keyword is used
 * to make an object publicly available.
 *
 * NOTE: there are two import systems: the older CommonJS (cjs) and ES.
 * You must specify the module system explicitly for imports to work correctly.
 * This can be done by using the .cjs and .mjs extensions to name
 * module files in each of the respective systems. Alternatively, specify
 * `"type": "module"` in the package.json file to use ES or `"type": "commonjs"`
 * to use CommonJS.
 *
 * If the package.json file does not exist, run `npm init` to generate it.
 */

export class Person{
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    greet(){
        super.greet();  // Optional
        console.log(`I am taking ${this.course}`)
    }
}