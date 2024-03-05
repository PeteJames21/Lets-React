/**
 * An iterator is an object that produces a sequence through consecutive calls to
 * its next() method. The method returns an object which has two properties: 'value'
 * and 'done'. 'done' is a boolean that indicates if the iterator's sequence has ended.
 * If 'done' is false, then 'value' is expected to be a valid object. 'done' is true
 * if we have reached the end of the sequence. If 'value' is defined at this point,
 * then it is considered to be the final return value of the iterator, but providing
 * a value is optional at this point.
 *
 * Not all iterators are iterable and there is no standard way of knowing if an iterator
 * is iterable. It is up to the programmer to inspect the value of 'done' on the object
 * returned by 'next'. Generators are a suitable alternative for making iterable types.
 */

/**
 * Return an iterator that yields numbers between `start` and `end` exclusively
 * @param {Number} start - the start value of the range
 * @param {Number} end - the end value of the range
 * @param {Number} step - interval size to use in iteration
 * @returns
 */
function myRange(start=0, end=20, step=2) {
  // Note: `i` could also have been defined as a property of the iterator, but
  // placing it in the function protects if from being modified by the user.
  let i = start;

  return {
    next() {
      if (i < end) {
        const result = {'done': false, 'value': i};
        i += step;
        return result;
      }
      return {'done': true, 'value': undefined};
    }
  }
}

// Will produce the sequence:10, 15, 20, 25
const rangeIterator = myRange(10, 30, 5);
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// Looping over the iterator
const rangeIterator2 = myRange(10, 30, 5);
let result = rangeIterator2.next();
while (!result.done) {
  console.log(result.value);
  result = rangeIterator2.next();
}

