const address = {
    country: 'Australia',
    city: 'Sydney',
    streetNum: '412',
    streetName: 'Worcestire Blvd'
};

if ('country' in address) {
    // This code runs, because there is an address.country property
    console.log('has property country')
}

if ('zipCode' in address) {
    // This code does not run, because there is no address.zipCode property
    console.log('has property zipCode')
}

console.log(address.hasOwnProperty('country'));  // true
console.log(address.hasOwnProperty('zipCode'));  // false
