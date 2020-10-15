// contar el numero de caracteres dentro de un string
// se debe retornar en un objeto {a: 2, b: 1} o un objeto vacio si el string esta vacio {}

// propuesta
function count (string) {  
    // The function code should be here
    if(string == "") return {}
    let dataCount = {};
    const splitString = string.split('');
    
    splitString.map((el) =>{
      dataCount[el] = (dataCount[el] + 1) || 1
    })
  
    return dataCount;
}


// buenas practicas
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}