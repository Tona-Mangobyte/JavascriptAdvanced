const newObj = {};

// Set a unique property that will never clash with anything else
const uniqueId = Symbol();
newObj[uniqueId] = 'No two alike';

// Set another one
const anotherUniqueId = Symbol();
newObj[anotherUniqueId] = 'This will not clash, either';

console.log(newObj); // { [Symbol()]: 'No two alike', [Symbol()]: 'This will not clash, either' }

console.log(newObj[uniqueId]);  // 'No two alike'
