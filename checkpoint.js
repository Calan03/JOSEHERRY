// No cambies los nombres de las funciones.

function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
  grupo1 = [];
  grupo2 = [];
   for (var i = 0; i < array.length; i++){
  if (array[i] % 2 ==0) { 
  grupo1.push (array [i]) ; 
  }
  else {
  (array[i] % 2 ==0) 
  grupo2.push (array[i]) ;
  }
  }
  return  grupo2.reduce((a, b) => a + b, 0);

}


function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca:
  let words = str.split(" ");
  let palabraMasLarga = "";
  for (let word of words){ 
  if (word.length > palabraMasLarga.length){
  palabraMasLarga = word;
  }
  }
  return palabraMasLarga; 
}

function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  // var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  // ];
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:
  for (var i= 0; i < usuarios.length; i++){
    if (usuarios[i].nombre == nombre){
    (usuarios[i].online == true)
    return false;
    }
    else {
    return true;
    }
    }
}

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
  jose =[];
for(var i =0; i < persona1.length;i++){
    for(var j =0; j < persona2.length;j++){
         if(persona1[i] == persona2[j]){
jose.push (persona1[i]);
 }
    }
}
return jose
}

function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
  var resultado = []; 
  for (i=0; i < arreglo.length; i++){
  if (arreglo[i] !==num){
  resultado.push (arreglo[i]); 
  }
  }
  arreglo = resultado; 
  return arreglo;
}

function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca:
  var vehiculosPropiedades = [];
  for (var i = 0; i < arreglo.length; i++) {
    //Valid< que no exista el vehiculo en el arreglo para dejar unicos
    if(!vehiculosPropiedades[arreglo[i]]){
      vehiculosPropiedades.push(arreglo[i]); //Si no existe lo inserta
     }
  }
  var propiedadValor = {};
  //Recorre los vehiculos distintos
  for (var j = 0; j < vehiculosPropiedades.length; j++) {
    var cantidad = 0;
    for (var i = 0; i < arreglo.length; i++) {
      //Vuelve a recorrer el array principal para sacar la cantidad de vehuculos que hay
      if(arreglo[i] === vehiculosPropiedades[j]){
        cantidad++;
      }
    }
    //No regresara un array, sera un objeto, por lo que le generamos una propiedad y la cantidad de Items
    propiedadValor[vehiculosPropiedades[j]] = cantidad;
  }
  return propiedadValor;
var suma = sumarElTipo(['auto', 'moto', 'auto']);
return(suma);
}

// =======================================================================

function crearClaseEmprendedor() {
  class Emprendedor {
      constructor(nombre, apellido, libros, mascotas) {
          // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
          // Inicializar las propiedades del emprendedor con los valores recibidos como argumento
                    // Tu código aca:
                    this.nombre = nombre
                    this.apellido = apellido
                    this.libros = libros
                    this.mascotas = mascotas
      }
      

      addMascota(mascota) {
        // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
        // no debe retornar nada.
        

        // Tu código aca:
        this.mascotas.push (mascota); 
        
      }

      getMascotas() {
          // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
          // emprendedor.getMascotas() debería devolver 2

          // Tu código aca:
          return this.mascotas.length 

      }

      addBook(book, autor) {
          // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
          // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
          // No debe retornar nada.
           
             this.libros.push( { nombre: book, autor: autor} );
                  
      }

      getBooks() {
          // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
          // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

          // Tu código aca:
          let arreglo1 = [];

          for(var i = 0; i < this.libros.length; i++){
        
            arreglo1.push(this.libros[i].nombre);
        
          }
                return arreglo1
                
}

      

      getFullName() {
          // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
          // ej:
          // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
          // emprendedor.getFullName() deberia devolver 'Elon Musk'

          // Tu código aca:
          return this.nombre + " " + this.apellido 
      }
  }

  return Emprendedor;
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function mapear() {
  // Escribi una funcion mapear en el prototipo del objeto global 'Array'
  // que recibe una funcion callback , que se ejecuta por cada elemento del array
  // mapear los elementos de ese array segun la funcion callback
  // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  // NO USAR LA FUNCION MAP DE ARRAYS.
  // ej:
  // var numeros = [1, 2, 3, 4];
  // numeros.mapear(function(numero) {
  //   return numero + 1;
  // }) devuelve [2, 3, 4, 5]

  // Tu código aca:
  Array.prototype.mapear = function(cb) {
    let newArray = [];
    for(let i=0; i<this.length; i++) {
        const x = cb(this[i]);
        newArray.push(x);
    }
    return newArray;
  };
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  sumaTodosImpares,
  buscaDestruye,
  actividadesEnComun,
  estaOffline,
  stringMasLarga,
  sumarElTipo,
  crearClaseEmprendedor,
  mapear
};
