const newObj = {};
const propertyName = Symbol('Log Status');
newObj[propertyName] = 'logged';

console.log(newObj); // { [Symbol(Log Status)]: 'logged' }
console.log(newObj[propertyName]); // 'logged'
