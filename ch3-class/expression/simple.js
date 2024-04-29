const personExpression = class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// This won't work, because there is no Person class to be found in scope
// const newPerson = new Person('Luke', 'Takei');

// This works because you can create a new instance of the variable that holds
// the class expression
const newPerson = new personExpression('Luke', 'Takei');
console.log(newPerson);   // Person { firstName: 'Luke', lastName: 'Takei' }
