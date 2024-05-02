function _expensiveFunction() {
    const arr = [];
    for (let i = 0; i < 1000000; i++) {
        arr.push(i);
    }
    return arr;
}

function performanceSpy(func) {
    return function (...args) {
        console.time(func.name);
        const value = func(...args);
        console.timeEnd(func.name);
        return value;
    }
}

const betterExpensiveFunction = performanceSpy(_expensiveFunction);
betterExpensiveFunction();
