//Crear un funcion que calcule el factorial de un numero

// propuesta
function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('número fuera del rango')
  }

  if (n == 0) {
    return 1
  }

  let factorial = 1
  for (var i = n; i > 0; i--) {
    factorial = (factorial * i)
  }

  return factorial
}

// buenas practicas
factorial = n => {  
  if (n < 0 || n > 12) throw RangeError;
  return n > 1 ? n * factorial(n - 1) : 1;
}