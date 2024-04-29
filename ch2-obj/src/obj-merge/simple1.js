const address = {
    country: 'Australia', city: 'Sydney', streetNum: '412',
    streetName: 'Worcestire Blvd'
};

const customer = {
    firstName: 'Lisa', lastName: 'Stanecki'
};

const customerWithAddress = {...customer, ...address};
console.log(customerWithAddress); // { firstName: 'Lisa', lastName: 'Stanecki', country: 'Australia', city: 'Sydney', streetNum: '412', streetName: 'Worcestire Blvd' }
