 // let peliculas = ['it', 'rambo', 'terminator', 'predator'];
// let peliculas = new Array('it', 'rambo', 'terminator', 'predator');
// var peliculas = Array('it', 'rambo', 'terminator', 'predator');
// console.log(peliculas[1]);


// let objetos = [{nombre:'juan'},{nombre:'carlos'}];
// console.log(objetos[1].nombre);

/*
let objetos = new Array({nombre:'juan'}, {nombre:'carlos'});
console.log(objetos);
*/

/*
let matriz3x3 = [ [1,2,3], [4,5,6], [7,8,9]  ];
console.log(matriz3x3);

let tabla3x3 = [
                  ['fila1,columna1','fila1,columna2','fila1,columna3'],
                  ['fila2,columna1','fila2,columna2','fila3,columna3'],
                  ['fila3,columna1','fila3,columna2','fila3,columna3']
                ];
console.log(tabla3x3);

*/

/*
let peliculas = ['it', 'rambo', 'terminator', 'predator'];
for(let i=0; i<peliculas.length; i++){
  document.write(peliculas[i] + '|');
}
*/

//recorriendo OBJETOS con For in
let persona =
{
  nombre: 'Marcelo Salas',
  edad: 11,
  saludar: () =>{
    return 'Buena Matador';
  }
};

//notacion 1 para acceder a los valores
console.log(persona.edad);
//notacion 2 para acceder a los valores
console.log(persona['edad']);

//obteniendo las propiedades y valores
for(propiedad in persona){
  //mostrando propiedad
  console.log(propiedad);
  //mostrando el valores
  console.log(persona[propiedad]);
}


let peliculas = ['it', 'rambo', 'terminator', 'predator'];
for(valores of peliculas){
  console.log(valores);
}
