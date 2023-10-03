function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  let result = '';

  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }

  return result.slice(0, -1); // remove the trailing '-'
}

export default cleanSet;
