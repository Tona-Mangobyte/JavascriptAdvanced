const person = {
    firstName: 'Joe',
    lastName: 'Khan',
    dateOfBirth: new Date(1996, 6, 12)
};

Object.defineProperty(person, 'age', {
    configurable: true,
    enumerable: true,
    get: function() {
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
});

console.log(person.age);
