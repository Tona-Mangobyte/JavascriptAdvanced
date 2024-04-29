class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // This is a method
    swapNames() {
        // Use a handy shortcut (destructuring assignment) to assign both
        // properties at once
        [this.firstName, this.lastName] = [this.lastName, this.firstName];
    }
}

// Test the Person class by creating an object
// The constructor is invoked when you use the new keyword with the class
const newPerson = new Person('Luke', 'Takei');
console.log(newPerson);   // Person { firstName: 'Luke', lastName: 'Takei' }
console.log(newPerson.firstName);  // 'Luke'

newPerson.swapNames();
console.log(newPerson.firstName);   // 'Takei'
