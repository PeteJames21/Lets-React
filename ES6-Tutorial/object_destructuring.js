/**
 * Object destructuring is the process of assigning multiple properties
 * of an object to variables. The variables should match the names of the
 * target properties. The order of listing the variables is irrelevant. The
 * variables can be renamed during destructuring (see examples below).
 */

const person = {
    fname: 'Troy',
    age: 34,
    country: 'Persia',
    profile_description: '6" male, black eyes'
};

// Obtain only one property
const {age} = person;
console.log(age);

// Obtain multiple properties and rename `age` to `yrs`
const {age: yrs, fname, country} = person;
console.log(`${fname} from ${country} is ${yrs} yrs old`)


// Provide a default value for a destructured property.
// Useful if we are not sure if the property exists or has a defined value
const person2 = {
    fname: 'May',
    age: 24,
    country: 'USA',
    profile_description: '5" female, blue eyes',
    weight: undefined
};
// If there is no property called 'weight' or if its value is undefined,
// the value will be set to 154.
const {weight = 154} = person2;
console.log('weight', weight);