class Person {
    constructor(firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;

        // Set the date using the property setter so a Person
        // can't be created in an invalid state
        this.dateOfBirth = date;
    }

    // Just return the date with no extra processing
    get dateOfBirth() {
        return this._dateOfBirth;
    }

    // Don't allow dates in the future
    set dateOfBirth(value) {
        if (value instanceof Date && value < Date.now()) {
            // This is a valid date
            this._dateOfBirth = value;
        }
        else {
            throw new TypeError('Birthdate needs to be a valid date in the past');
        }
    }
}

// Test the date restrictions
const newPerson = new Person('Luke', 'Takei', new Date(1990, 5, 22));
console.log(newPerson.dateOfBirth);

// This change is allowed
newPerson.dateOfBirth = new Date(2010, 10, 10);
console.log(newPerson.dateOfBirth);

// This change causes an error
// newPerson.dateOfBirth = new Date(2035, 10, 10);
