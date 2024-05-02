function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = { name: 'John' };

greet.bind(person)(); // Output: Hello, my name is John
