function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = { name: 'John' };

greet.call(person);  // Output: Hello, my name is John
greet.apply(person); // Output: Hello, my name is John
greet.bind(person)(); // Output: Hello, my name is John
// Output: Hello, my name is John
