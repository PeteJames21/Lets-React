// NOTE: The file extension is explicitly specified. Failure to add the extension
// will result in an import error if using the ES import system
import { Person } from './custom_modules_1.js';

const person = new Person('Miriam');
person.greet();