const customer = {
    firstName: 'Josephine',
    lastName: 'Stanecki'
};

// seal the object
Object.seal(customer);

customer.firstName = 'Joe';

// So does an attempt to add a property
customer.middleInitial = 'P';

// Or remove one
delete customer.lastName;

console.log(customer); // { firstName: 'Josephine', lastName: 'Stanecki' }
