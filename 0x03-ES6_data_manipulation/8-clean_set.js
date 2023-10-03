function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }

  }

  return result.join('-');
}

export default cleanSet;
