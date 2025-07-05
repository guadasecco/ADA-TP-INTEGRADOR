//PUNTO 1: ESTRUCTURA DE DATOS
//Crear: ARRAY DE OBJETOS (10 LIBROS) QUE CONTENGA: 
// ID(NUM) - TITULO(STRING) - AUTOR(STRING) - AÑO(NUM) - GENERO(STRING) Y SI ESTA DISPONIBLE(BOOLEANO) 

const libros = [ 
  { id: 1, titulo: "Las maldiciones", autor: "Claudia Piñeiro", anio: 2017, genero: "Política ficción", disponible: true },
  { id: 2, titulo: "Elena sabe", autor: "Claudia Piñeiro", anio: 2007, genero: "Novela policial", disponible: false },
  { id: 3, titulo: "Las malas", autor: "Camila Sosa Villada", anio: 2019, genero: "Ficción autobiográfica", disponible: true },
  { id: 4, titulo: "Tesis sobre una domesticación", autor: "Camila Sosa Villada", anio: 2023, genero: "Ensayo", disponible: true },
  { id: 5, titulo: "Nuestra parte de noche", autor: "Mariana Enriquez", anio: 2019, genero: "Terror", disponible: true },
  { id: 6, titulo: "Los peligros de fumar en la cama", autor: "Mariana Enriquez", anio: 2009, genero: "Cuento", disponible: true },
  { id: 7, titulo: "Cometierra", autor: "Dolores Reyes", anio: 2019, genero: "Ficción", disponible: false },
  { id: 8, titulo: "Enero", autor: "Sara Gallardo", anio: 1958, genero: "Novela", disponible: true },
  { id: 9, titulo: "Nuestra piel muerta", autor: "Natalia García Freire", anio: 2019, genero: "Ficción gótica", disponible: true },
  { id: 10, titulo: "Mandíbula", autor: "Mónica Ojeda", anio: 2018, genero: "Horror psicológico", disponible: true }
];

//Crear: ARRAY DE OBJETOS (10 USUARIOS) QUE CONTENGA: 
//ID(NUM) - NOMBRE (STRING) - MAIL (STRING) - librosPrestados (aray de ids de libros booleano)

const usuarios = [
  { id: 1, nombre: "Laura Bonafe", email: "laura.bonafe@gmail.com", librosPrestados: [2, 7] }, //Elena sabe y Cometierra
  { id: 2, nombre: "Melina Storani", email: "melina.storani@gmail.com", librosPrestados: [] }, // Ninguno
  { id: 3, nombre: "Florencia Mazzoni", email: "flor.mazzoni@gmail.com", librosPrestados: [3] }, // Las Malas
  { id: 4, nombre: "Marina Fernandez", email: "marina.fernandez@gmail.com", librosPrestados: [1, 6] }, // Las maldiciones y Los peligros de fumar en la cama
  { id: 5, nombre: "Daniela Fontanetto", email: "daniela.fontanetto@gmail.com", librosPrestados: [] }, // Ninguno
  { id: 6, nombre: "Nadir Secco", email: "nadir.secco@gmail.com", librosPrestados: [4] }, // Tesis sobre una domesticacion
  { id: 7, nombre: "Lucrecia Secco", email: "lucrecia.secco@gmail.com", librosPrestados: [5] }, // Nuestra parte de noche
  { id: 8, nombre: "Marina Rinaudo", email: "marina.rinaudo@gmail.com", librosPrestados: [] }, // Ninguno
  { id: 9, nombre: "Ana Diaz", email: "ana.diaz@gmail.com", librosPrestados: [8, 9, 10] }, // Enero, Nuestra piel muerta y Mandibula
  { id: 10, nombre: "Lucia Rinero", email: "lucia.rinero@gmail.com", librosPrestados: [5, 8] } //Nuestra parte de noche y Enero 
];

//PUNTO 2: FUNCIONES DE GESTION DE LIBROS
// A- implementar FUNCION agregarLibro(id, titulo, autor, anio, genero) 
// que agregue un nuevo libro al array libros.

function agregarLibro(id, titulo, autor, anio, genero) {
  const nuevoLibro = {
    id,
    titulo,
    autor,
    anio,
    genero,
    disponible: true
  };
  libros.push(nuevoLibro);
  console.log("El libro fue agregado correctamente:");
  console.log(nuevoLibro);
}

// B- Crear una FUNCION buscarLibro(criterio, valor) 
// que permita buscar libros por título, autor o género
// utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor) {
  const resultados = libros.filter(libro => {
    return libro[criterio].toLowerCase().includes(valor.toLowerCase());
  });

  console.log(`Resultados de búsqueda por ${criterio}` = "${valor}");
  console.log(resultados);
}

// C- Desarrollar una FUNCION ordenarLibros(criterio) 
// que ordene los libros por título o año 
// utilizando el algoritmo de ordenamiento burbuja (bubble sort)
// y luego muestre los libros ordenados en la consola.
libros[i].titulo.toLowerCase() > libros[j].titulo.toLowerCase() ;{
          let temp = libros[i];
          libros[i] = libros[j];
          libros[j] = temp;
        
        }
    

      // Si el criterio es 'anio', comparamos como número
      if (criterio === "anio") {
        if (libros[i].anio > libros[j].anio) {
          let temp = libros[i];
          libros[i] = libros[j];
          libros[j] = temp;
        }
      }
    
  console.log("Libros ordenados por ${criterio}:");
  console.log(libros);



// D- Desarrollar una FUNCION borrarLibro(id) 
// que elimine el libro que se le pase por parámetro.

  function borrarLibro(id) {
  const index = libros.findIndex(libro => libro.id === id);
  if (index !== -1) {
    const libroEliminado = libros.splice(index, 1);
    console.log("El libro eliminado:");
    console.log(libroEliminado[0]);
  } else {
    console.log("No se encontró un libro con ese ID.");
  }
}





//PUNTO 3: GESTION DE USUARIOS
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
 //b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.


//a) REGISTRANDO USUARIOS

function registratUsuario(nombre, email) {
  const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1; //Se calcula el nuevo ID: si hay usuarios, toma el último ID y le suma 1; si no hay, empieza en 1.
  const nuevoUsuario = {
    id: nuevoId,
    nombre: nombre.trim(),
    email: email.trim().toLowerCase(),
    librosPrestados: []
  } //Se crea un nuevo objeto nuevoUsuario con los datos: ID, nombre sin espacios extras, email en minúsculas y array vacío de libros.
  usuarios.push(nuevoUsuario);//Se agrega el nuevo usuario al array usuarios usando push.
  console.log("Usuario" + nombre + "registrado con éxito");
}

//b) USUARIOS REGISTRADOS

function todosLosUsuarios() {
  console.log("Los usuarios registrados son:");

  usuarios.forEach(function(usuario,indice) {
  console.log( "Usuario " + (indice + 1) + ": Nombre = " + usuario.nombre + " | Email = " + usuario.email);
}); //Se recorre el array usuarios con forEach, mostrando en consola nombre e email de cada uno, y el número de orden.
return usuarios;
}

//c) BUSCANDO AL USUARIO

function buscarUsuario(email) {
  const emailNormalizado = email.trim().toLowerCase(); //Se normaliza el email ingresado, quitando espacios y pasando a minúsculas.
  const usuarioEncontrado = usuarios.find (usuario => usuario.email === email); //Se busca un usuario cuyo email coincida exactamente con el ingresado, usando find.
  return usuarioEncontrado || "Usuario no encontrado";
}

//d) BORRAR A UN USUARIO

function borrarUsuario(nombre,email) {
  const emailNormalizado = email.trim().toLowerCase(); //Se normaliza el email para compararlo correctamente.
  const index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email); //Se busca el índice del usuario que tenga exactamente el mismo nombre y email, usando findIndex.
  if (index !== -1) {
    
    const eliminado = usuarios.splice(index, 1)[0]; //Si se encuentra el índice (es distinto de -1), se elimina ese usuario del array con splice y se guarda el eliminado.

    console.log("Usuario eliminado: Nombre = " + eliminado.nombre + " | Email = " + eliminado.email);
  } else {
    console.log("No se encontró usuario para eliminar con Nombre = " + nombre + " y Email = " + email);
  }
}




//PUNTO 4 : SISTEMA DE PRESTAMOS
//a)  Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista 
// de libros prestados del usuario
//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista
//  de libros prestados del usuario

//a) PRESTANDO LIBROS :)

function prestarLibro(idLibro, idUsuario) {

  const libro = libros.find(function(item) {
    return item.id === idLibro;
}); //Se busca el libro en el array libros cuyo ID coincida con el idLibro recibido.

const usuario = usuarios.find(function(usuarioActual) {
  return usuarioActual.id === idUsuario;
}); //Se busca el usuario en el array usuarios cuyo ID coincida con el idUsuario recibido.

if (!libro) {
  console.log("El libro con ID " + idLibro + " no existe");
  return;
}

if (!usuario) {
  console.log("El usuario con ID " + idUsuario + " no existe");
  return;
}

if (!libro.disponible) {
  console.log("El libro " + libro.titulo + " no esta disponible ahora");
  return;
} //Se verifica si el libro no está disponible, si es así, se muestra un mensaje y se corta la función.

libro.disponible = false; //Si todo está bien, se marca el libro como no disponible.

usuario.librosPrestados.push(libro.id); //Se agrega el ID del libro a la lista de libros prestados del usuario, usando push.

console.log("El libro " + libro.titulo + " fue prestado a " + usuario.nombre + "");

}


//b) DEVOLVIENDO LIBROS :)

function devolverLibro(idLibro, idUsuario) {

  const libro = libros.find(item => item.id === idLibro); //Se busca el libro en el array libros por ID.
  const usuario = usuarios.find(usuarioActual => usuarioActual.id === idUsuario); //Se busca el usuario en el array usuarios por ID.
  if (!libro) {
    console.log("El libro con ID " + idLibro + " no existe");
    return;
  }

  if (!usuario) {
    console.log("El usuario con ID " + idUsuario + " no existe");
    return;
  }

    const indexLibro = usuario.librosPrestados.indexOf(idLibro); //Se busca la posición del libro dentro del array librosPrestados del usuario.

    if (indexLibro === -1) {
      console.log("El usuario " + usuario.nombre + " ,no tiene el libro prestado " + libro.titulo + "");
      return;
    }

    libro.disponible = true;
    usuario.librosPrestados.splice(indexLibro, 1); //Se elimina el libro de la lista librosPrestados del usuario usando splice con el índice encontrado.

    console.log("El libro " + libro.titulo + " ,fue devuelto por " + usuario.nombre + "");
  }


//PUNTO 8: CREAR UNA FUNCION (NORMALIZARDATOS)
//A) CONVERTIR TODOS LOS TITULOS A MAYUSCULA 
//B) ELIMINAR ESPACIOS EN BLANCO AL INICIO Y AL FINAL DE LOS NOMBRES DE AUTORES 
//C) FORMATEAR LOS EMAILS DE LOS USUARIOS A MINUSCULAS 


function normalizarDatos(titulo, autor, email){
  // Convertir título a mayúsculas
  const tituloNormalizado = titulo.toUpperCase();

  // Recortar espacios del autor
  const autorNormalizado = autor.trim();

  // Formatear email a minúsculas 
  const emailNormalizado = email.toLowerCase();

  return {
    titulo: tituloNormalizado,
    autor: autorNormalizado,
    email: emailNormalizado
  };
}
const resultado = normalizarDatos("titulo", "autor", "email")
console.log(resultado)

//Punto 9: Interfaz de Usuario por Consola
//a) Implementar una función menuPrincipal() que muestre un menú de
//opciones al usuario y permita interactuar con el sistema utilizando prompt().
//El menú debe incluir opciones para todas las funcionalidades anteriores y
//utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.*/

function menuPrincipal(){
    let opcion
    do{
    //Visualizacion de las opciones 
    opcion=Number(prompt(`Introduzca la opcion que desee:
      1- Agregar un libro
      2- Buscar un libro
      3- Ordenar libros segun...
      4- Borrar libro      
      5- Prestar libro
      6- Devolver libro
      7- Reporte general de libros
      8- Libros con más de una palabra en el titulo 
      9- Registrar un usuario
      10- Mostrar usuarios 
      11- Buscar usuario
      12- Borrar Usuario
      13- Estadistias
      0- Salir `))
    
    if(isNaN(opcion)){//verificamos que el ingreso sea un número
      console.log(`Error: se debe ingresar un número `)
    }else{
      switch(opcion){
        case 1:
            let id=Number(prompt(`Ingrese el nuevo id `));
            let titulo=prompt(`Ingrese el titulo del libro `);
            let autor=prompt(`Ingrese el titulo del libro `);
            let anio=prompt(`Ingrese el año de publicacion del libro `);
            let genero=prompt(`Ingrese el genero del libro `);
           agregarLibro(id, titulo, autor, anio, genero);
        break;
        case 2: 
            let criterio=prompt(`Por que desea buscar el libro(titulo, autor, genero, anio, id) `);
            let valor=prompt(`Ingrese el ${criterio} que desea buscar `)           
            buscarLibro(criterio, valor);
        break;
        case 3: 
            criterio=prompt("Ingrese por que criterio desea ordenar los libros (titulo, autor, genero, anio, id)");
            ordenarLibros(criterio); 
        break;
        case 4: 
            id=prompt(`Ingrese el id del libro que desea borrar `);
            borrarLibro(id);
        break;
        case 5: 
            let idLibro=prompt(`Ingrese el id del libro que se va a prestar: `);
            let idUsuario=prompt(`Ingrese el id del usuario que recibira el libro: `);
            prestarLibro(idLibro, idUsuario);
        break;
        case 6: 
            idLibro=prompt(`Ingrese el id del libro que se va a devolver: `);
            idUsuario=prompt(`Ingrese el id del usuario que devuelve el libro: `);
            devolverLibro(idLibro, idUsuario);
        break;
        case 7: 
            generarReporteLibros();
        break;
        case 8: 
            librosConPalabrasEnTitulo(); 
        break;
        case 9:
            let nombre=(`Ingrese el nombre del usuario que desea registrar `);
            let email=(`Ingrese el email al que estara vinculado el usuario `);
            registrarUsuario(nombre, email); 
        break;
        case 10: 
            mostrarTodosLosUsuarios();
        break;
        case 11: 
            email=prompt(`Ingrese el email de usuario que busca `);
            buscarUsuario(email);
        break;
        case 12:
            nombre=prompt(`Ingrese el nombre del usuario a borrar `);
            email=prompt(`Ingrese el email del usuario a borrar `);
            borrarUsuario(nombre, email);
        break;
        case 13:
            calcularEstadisticas();
        break;
        case 0:
          console.log("Que tenga buen dia. Adios");
        break;
        default:
          console.log(Error="se debe ingresar una de las opciones");
        break;
      }
    }
    }while(opcion!==0)
}

const prompt = require('prompt-sync')({ sigint: true });

menuPrincipal();
