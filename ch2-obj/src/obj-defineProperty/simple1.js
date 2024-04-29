// 'use strict';

const data = {};

Object.defineProperty(data, 'type', {
    value: 'primary',
    enumerable: true // true = read-only
});

// Attempt to change the read-only property
console.log(data.type); // primary
data.type = 'secondary';
console.log(data.type); // nope, still primary

Object.defineProperty(data, 'id', {
    value: 1,
    writable: true // true = modifiable
});

// Change this modifiable property
console.log(data.id); // 1
data.id = 300;
console.log(data.id); // 300

// See what properties appear during enumeration
for (prop in data) {
    console.log(prop); // only type displays
}
