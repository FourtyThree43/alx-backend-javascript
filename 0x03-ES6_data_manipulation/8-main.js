import cleanSet from './8-clean_set';

// Existing test cases
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bona'));

// Additional test cases
console.log(cleanSet(new Set(['apple', 'banana', 'cherry', 'date']), 'a'));
console.log(cleanSet(new Set(['apple', 'banana', 'cherry', 'date']), 'b'));
console.log(cleanSet(new Set(['apple', 'banana', 'cherry', 'date']), 'c'));
console.log(cleanSet(new Set(['apple', 'banana', 'cherry', 'date']), 'd'));
console.log(cleanSet(new Set(['apple', 'banana', 'cherry', 'date']), ''));
console.log(cleanSet(new Set(['apple', 'banana', 'cherry', 'date']), null));
console.log(cleanSet(new Set(['apple', undefined, null, 123]), ''));
