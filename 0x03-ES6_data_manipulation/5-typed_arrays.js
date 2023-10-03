function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range ');
  }

  if (value < -128 || value > 127) {
    throw new Error('Value is out of range for Int8Array');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
