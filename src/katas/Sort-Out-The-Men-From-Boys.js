// Separar los niños de los hombres
// se busca eliminar los elementos duplicados del array
// los numeros pares debe mostrarse de primeras y ordenado de manera ascendente
// los numeros impares se deben mostrar despues de los pares y de manera descente

// propuesta
function menFromBoys(arr){
  let oddNumbers = []
  let evenNumbers = []
  arr.forEach((el) => {
    (el % 2 === 0) ? evenNumbers.push(el) : oddNumbers.push(el)
  })
  oddNumbers = [...new Set(oddNumbers)].sort((a,b)=>a-b).reverse()
  evenNumbers = [...new Set(evenNumbers)].sort((a,b)=>a-b)
  return [...evenNumbers, ...oddNumbers]
}

// ------------------------------------------------------------------------------------------------

// buenas practicas

function menFromBoys(arr){
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}

// menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})