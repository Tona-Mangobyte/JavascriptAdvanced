function _addElement(arr1, arr2) {
    return arr1.map((num, index) => num + arr2[index]);
}
function argCheck(fn) {
    return function (...args) {
        if (args.some(arg => !Array.isArray(arg))) {
            throw new Error('All arguments should be arrays');
        }
        if (args[0].length !== args[1].length) {
            throw new Error('Both arrays should have the same length');
        }
        return fn(...args);
    };
}

const addElement = argCheck(_addElement);
console.log(addElement([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
// console.log(addElement([1, 2, 3], [4, 5])); // Error: Both arrays should have the same length
// console.log(addElement([1, 2, 3], 4)); // Error: All arguments should be arrays
