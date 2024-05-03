let lastArg = undefined;
let lastResult = undefined;

function double(x) {
  if (x === lastArg) {
      console.log('Returning cached result')
      return lastResult;
  }
  console.log('Computing new result');
  lastArg = x;
  lastResult = x * 2;
  return lastResult;
}

console.log(double(2)); // 4
console.log(double(2)); // 4
console.log(double(3)); // 6
console.log(double(3)); // 6

// Step 2
function memoize(func) {
    let cache = {};
    return (...args) => {
        let key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            console.log('#2 Returning cached result')
            return cache[key];
        } else {
            console.log('#2 Computing new result');
            let result = func(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Usage:
let double2 = memoize((x) => x * 2);
console.log(double2(4)); // 8 (computed)
console.log(double2(4)); // 8 (cached)
console.log(double2(2)); // 4 (computed)
console.log(double2(2)); // 4 (cached)
console.log(double2(4)); // 8 (cached)
