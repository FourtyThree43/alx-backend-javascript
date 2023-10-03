function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const cleanedValue = value.substring(startString.length);
      if (result.length > 0) {
        result += '-';
      }
      result += cleanedValue;
    }
  }

  return result;
}

export default cleanSet;
