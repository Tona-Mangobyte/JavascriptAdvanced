class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    // This is a getter for the age property
    get age() {
        if (this.dateOfBirth instanceof Date) {
            // Calculate the difference in years
            const today = new Date();
            let age = today.getFullYear() - this.dateOfBirth.getFullYear();

            // Adjust if the bithday hasn't happened yet this year
            const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
            if (monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())) {
                age -= 1;
            }

            return age;
        }
    }
}

// Test the Person class
const newPerson = new Person('Luke', 'Takei', new Date(1990, 5, 22));
console.log(newPerson.age); // 33
