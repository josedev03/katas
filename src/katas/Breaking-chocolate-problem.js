// Romper la barra de chocolates con la menor cantidad de quiebres posible

// propuesta

function breakChocolate(n,m) {
  if( isNaN(n) || isNaN(m) || n <= 0 || m <= 0 ){
    return 0
  }

  return ((n * m) - 1)
}

// propuesta Mejorada

function breakChocolate(n,m) {
  let temp = n * m
  return (isNaN(temp) || temp === 0) ? 0 : (temp - 1)
}

// ------------------------------------------------------------------------------------------------

// buenas practicas

var breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};