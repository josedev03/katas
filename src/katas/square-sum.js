// Square(n) Sum

// crear una funcion que calcule el cuadrado de cada elemento en un array y los sume
function squareSum(numbers) {
  if (numbers.length <= 0) return 0
  return numbers.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b)
}

// buenas practicas
function _squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}

let a = _squareSum([1,2,2]);
console.log(a)