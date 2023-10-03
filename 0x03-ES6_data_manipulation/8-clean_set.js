function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const result = [];

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
