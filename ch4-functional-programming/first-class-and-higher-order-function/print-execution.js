function add(a, b) {
  return a + b;
}

function call(fn, a, b) {
  return fn(a, b);
}

function spy(fn) {
  return function(...args) {
    return fn(...args);
  };
}

const addWithSpy = spy(add);
console.log(addWithSpy(1, 2)); // 3
