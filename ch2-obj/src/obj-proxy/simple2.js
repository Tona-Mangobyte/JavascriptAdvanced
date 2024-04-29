let target = {};
let handler = {
    get: function(target, prop, receiver) {
        console.log(`Getting ${prop}`);
        return Reflect.get(...arguments);
    },
    set: function(target, prop, value, receiver) {
        console.log(`Setting ${prop} to ${value}`);
        return Reflect.set(...arguments);
    }
};

let proxy = new Proxy(target, handler);

proxy.a = 'example'; // logs: Setting a to example
console.log(proxy.a); // logs: Getting a
