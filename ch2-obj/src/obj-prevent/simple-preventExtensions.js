const customer = {
    firstName: 'Josephine',
    lastName: 'Stanecki'
};

// preventExtensions the object
Object.preventExtensions(customer);

customer.firstName = 'Joe';

// So does an attempt to add a property
customer.middleInitial = 'P';

// Or remove one
delete customer.lastName;

console.log(customer); // { firstName: 'Joe'}
