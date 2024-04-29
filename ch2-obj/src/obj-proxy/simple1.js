const obj = {}
const proxy = new Proxy(obj, {
    get(target, prop, receiver) {
        // console.log('get', prop, receiver);
        // console.log(prop); // name
        // console.log(receiver); // { name: 'Lee' }
        // console.log(arguments);
        return target[prop];
    }
});

proxy.name = 'Lee';
console.log(proxy.name); // Lee
