function makeString(prefix, suffix, str) {
    return prefix + str + suffix;
}
const named = makeString.bind(undefined, "&#", ";");

console.log(named(169)); // "&#169;"

function simpleBind() {
    const newObject = {
        name: 'object',

        sayGreeting: function() {
            console.log(`Now this is easy, ${this.name}`);

            const nestedGreeting = function(greeting) {
                console.log(`${greeting} ${this.name}`);
            }.bind(this);

            nestedGreeting('hello');
        }
    };

    newObject.sayGreeting();
}
simpleBind();
