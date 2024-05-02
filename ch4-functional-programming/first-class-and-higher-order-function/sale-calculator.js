
function saleCalculator(discount) {
  return function(price) {
    return price - price * discount;
  };
}

const tenPercentOff = saleCalculator(0.1);
const twentyPercentOff = saleCalculator(0.2);

console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(100)); // 80
