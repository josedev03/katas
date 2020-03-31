// conforme una matriz 2D, encontrar la suma del elemento con menor valor de cada array

// propuesta

function sumOfMinimums(arr) {
  return arr.reduce((total, intArr) => {
    const sortElements = intArr.sort((a, b) => a - b)
    return total + sortElements[0]
  }, 0)
}

const data = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [26, 20, 21, 34, 56, 100]
]


// ------------------------------------------------------------------------------------------------

// buenas practicas

function _sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}