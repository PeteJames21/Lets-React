/**
 * The generator syntax provides a more concise and readable way of defining
 * iterators. Generators are implemented in form of functions that use the
 * function* syntax.
 *
 * Generators have more convenience over iterators because you do not need
 * to keep track of internal state unlike in iterators.
 */

function* myRange(start=0, end=20, step=1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// Yields the sequence 10, 12, 14, 16, 18
for (const value of myRange(10, 20, 2)) {
  console.log(value);
}
