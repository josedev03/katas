// en esta cata lo que se busca es ordenar un array compuesto por los nombre y apellidos de
// renos de navidad, se debe ordenar por el apellido

// el metodo sort recibe como parametro una funcion, los elementos son ordenados
// por lo que retorna dicha funcion 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort

// propuesta

function sortReindeer(reindeerNames){
  const miData = reindeerNames.map((e, i) => {
    const temp = e.split(' ')
    return temp[1] + ' ' + temp[0]
  })

  miData.sort()

  return miData.map((e, i) => {
    const temp = e.split(' ')
    return temp[1] + ' ' + temp[0]
  })
}

// ------------------------------------------------------------------------------------------------

// buenas practicas

function _sortReindeer(reindeerNames){
  return reindeerNames.sort((a, b) => a.split(' ')[1] > b.split(' ')[1]
  )
}

const data = _sortReindeer([
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
   "Donder Jonker", 
   "Blitzen Claus"
])

console.log(data)