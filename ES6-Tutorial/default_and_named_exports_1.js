/**
 * Default exports are used when we only need to export a single object from
 * a module. The syntax is as follows: "export default ...". When importing
 * a default export, the curly braces are not needed. The import syntax
 * therefore becomes, 'import name from module.js'.
 *
 * A module can have named exports alongside a detault export. In this case,
 * while importing both the default and named exports, the default export is
 * still not placed within curly braces unlike the named exports. The import
 * syntax will look something like: 'import name, {foo, bar} from module.js'
 */

export default class Person {
    greet() {
        console.log('hello');
    }
}

export const MAX_AGE = 130;