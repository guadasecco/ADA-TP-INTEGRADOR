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



//PUNTO 3: GESTION DE USUARIOS
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
 //b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.


//a) REGISTRANDO USUARIOS

function registratUsuario(nombre, email) {
  const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
  const nuevoUsuario = {
    id: nuevoId,
    nombre: nombre.trim(),
    email: email.trim().toLowerCase(),
    librosPrestados: []
  }
  usuarios.push(nuevoUsuario);
  console.log("Usuario" + nombre + "registrado con éxito");
}

//b) USUARIOS REGISTRADOS

function todosLosUsuarios() {
  console.log("Los usuarios registrados son:");

  usuarios.forEach(function(usuario,indice) {
  console.log( "Usuario " + (indice + 1) + ": Nombre = " + usuario.nombre + " | Email = " + usuario.email);
});
return usuarios;
}

//c) BUSCANDO AL USUARIO

function buscarUsuario(email) {
  const emailNormalizado = email.trim().toLowerCase();
  const usuarioEncontrado = usuarios.find (usuario => usuario.email === email);
  return usuarioEncontrado || "Usuario no encontrado";
}

//d) BORRAR A UN USUARIO

function borrarUsuario(nombre,email) {
  const emailNormalizado = email.trim().toLowerCase();
  const index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
  if (index !== -1) {
    
    const eliminado = usuarios.splice(index, 1)[0]; 

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
});

const usuario = usuarios.find(function(usuarioActual) {
  return usuarioActual.id === idUsuario;
});

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
}

libro.disponible = false;

usuario.librosPrestados.push(libro.id);

console.log("El libro " + libro.titulo + " fue prestado a " + usuario.nombre + "");

}


//b) DEVOLVIENDO LIBROS :)

function devolverLibro(idLibro, idUsuario) {

  const libro = libros.find(item => item.id === idLibro);
  const usuario = usuarios.find(usuarioActual => usuarioActual.id === idUsuario);

  if (!libro) {
    console.log("El libro con ID " + idLibro + " no existe");
    return;
  }

  if (!usuario) {
    console.log("El usuario con ID " + idUsuario + " no existe");
    return;
  }

    const indexLibro = usuario.librosPrestados.indexOf(idLibro);

    if (indexLibro === -1) {
      console.log("El usuario " + usuario.nombre + " ,no tiene el libro prestado " + libro.titulo + "");
      return;
    }

    libro.disponible = true;
    usuario.librosPrestados.splice(indexLibro, 1)

    console.log("El libro " + libro.titulo + " ,fue devuelto por " + usuario.nombre + "");
  }


    
      
    
   
  

