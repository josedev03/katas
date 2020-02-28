// propuesta

function solutiona(number) {
  let multiplosTres = construirArray(number, 3)
  let multiplosCinco = construirArray(number, 5)

  if (multiplosTres.length <= 0 && multiplosTres.length <= 0) return 0

  multiplosTres = multiplosTres.filter((val) => {
    return !(multiplosCinco.includes(val))
  })

  let comunes = [...multiplosTres, ...multiplosCinco]
  comunes = comunes.reduce((accumulator, currentValue) => accumulator + currentValue)
  return comunes
}

function construirArray(numero, incremento) {
  let temp = []
  let n = incremento
  while (n < numero) {
    temp.push(n);
    n += incremento
  }
  return temp
}

// ------------------------------------------------------------------------------------------------

// buenas practicas

function solutionb(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}