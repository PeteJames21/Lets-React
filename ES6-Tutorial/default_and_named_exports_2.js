// Default exports are not enclosed in curly braces.
// Named exports must be enclosed in curly braces.
import Person, {MAX_AGE} from "./default_and_named_exports_1.js";

const guy = new Person();
guy.greet();
console.log(MAX_AGE);