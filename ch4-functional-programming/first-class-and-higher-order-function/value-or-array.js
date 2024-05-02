/*const square = valurOrArray(function (x) {
  return x * x;
});*/
const square = valurOrArray(x => x * x);
const triple = valurOrArray(x => x * 3);

const numbers = [1, 2, 3, 4, 5];

function valurOrArray(func) {
    return function(arg) {
        if (Array.isArray(arg)) {
            return arg.map(func);
        }
        return func(arg);
    }
}

/*const square = valurOrArray(_square);
const triple = valurOrArray(_triple);*/

console.log(square(numbers)); // Outputs: [1, 4, 9, 16, 25]
console.log(triple(numbers)); // Outputs: [3, 6, 9, 12, 15]
