const person = { name: 'Cocacola Sugar Free', qty: 24, price: 1.5 };

function getProperty(obj) {
    return function(prop, defaultValue) {
        return obj[prop] || defaultValue;
    }
}

const getPropertyFromPerson = getProperty(person);
console.log(getPropertyFromPerson('name', 'No name')); // Outputs: Cocacola Sugar Free
console.log(getPropertyFromPerson('age', 0)); // Outputs: 0
console.log(getPropertyFromPerson('qty', 0)); // Outputs: 24
console.log(getPropertyFromPerson('price', 0)); // Outputs: 1.5

