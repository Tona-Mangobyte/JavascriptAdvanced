const address = {
    country: 'Australia', city: 'Sydney', streetNum: '412',
    streetName: 'Worcestire Blvd'
};

const properties = Object.keys(address);

// Show every property and its value
for (const property of properties) {
    console.log(`Property: ${property}, Value: ${address[property]}`);
}
