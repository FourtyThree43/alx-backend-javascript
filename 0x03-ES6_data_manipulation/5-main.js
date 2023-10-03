import createInt8TypedArray from './5-typed_arrays';

try {
  console.log(createInt8TypedArray(10, 2, 89)); // Valid call
  console.log(createInt8TypedArray(10)); // Valid call
  // Edge case checks:
  // console.log(createInt8TypedArray(0, 2, 89)); // Throws: Length must be greater than 0
  // console.log(createInt8TypedArray(10, -2, 89)); // Throws: Position outside valid range
  console.log(createInt8TypedArray(10, 2.6, 89)); // Throws: Position must be an integer
  console.log(createInt8TypedArray(10, 2, 900)); // Throws: Value is out of range for Int8Array
} catch (error) {
  console.error(error.message);
}
