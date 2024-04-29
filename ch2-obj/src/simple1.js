const obj = {
    name: 'Lee',
}
console.log(obj); // { name: 'Lee' }


const dynamicProperty = 'nickname';
const dynamicPropertyValue = 'The Izz';
const i = 10;
const employee = {
    employeeId: 402,
    firstName: 'Lisa',
    lastName: 'Stanecki',
    birthDate: new Date(1995, 8, 15),
    [dynamicProperty]: dynamicPropertyValue,
    ['sequence' + i]: 1
};

console.log(employee.firstName);  // 'Lisa'

// additional property to the employee object
employee.role = 'Manager';

console.log(employee);  // { employeeId: 402, firstName: 'Lisa', lastName: 'Stanecki', birthDate: 1995-09-14T16:00:00.000Z, role: 'Manager' }
