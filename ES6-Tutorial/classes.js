/**
 * Illustrates class definition and inheritance.
 */

class Person{
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Use the `new` keyword to create a new instance of a class
const guy = new Person('Hans');
guy.greet();


/**
 * Class inheritance.
 *
 * If the child class overrides the parent's constructor, the super()
 * function must be called with the expected arguments of the parent
 * method.
 *
 * Other methods can be overriden without using `super`, but `super` can
 * be used if we need to call the parent mehod.
 */

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

const student = new Student('Poh', 'Medicine');
student.greet();