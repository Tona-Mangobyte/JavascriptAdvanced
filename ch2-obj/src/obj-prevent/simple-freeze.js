const customer = {
    firstName: 'Josephine',
    lastName: 'Stanecki'
};

// freeze the object
Object.freeze(customer);

// This statement throws an error in strict mode
customer.firstName = 'Joe';

// So does an attempt to add a property
customer.middleInitial = 'P';

// Or remove one
delete customer.lastName;

console.log(customer); // { firstName: 'Josephine', lastName: 'Stanecki' }
