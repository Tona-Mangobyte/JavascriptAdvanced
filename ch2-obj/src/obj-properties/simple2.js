const address = {
    country: 'Australia', city: 'Sydney', streetNum: '412',
    streetName: 'Worcestire Blvd'
};

// Show every property and its value
for (const property in address) {
    console.log(`Property: ${property}, Value: ${address[property]}`);
}
