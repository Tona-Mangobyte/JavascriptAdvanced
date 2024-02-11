function counter() {
    let count = 0;
    return function () {
        return count += 1;
    }
}
const count = counter();
console.log("Count #1: ", count());
console.log("Count #2: ", count());
