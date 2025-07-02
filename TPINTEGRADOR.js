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



//Punto 5: Sistema de Préstamos
//a) Crear función generarReporteLibros() que utilice: (.map(), .filter(), .reduce()) 
//Generar reporte con: Cantidad total de libros - Cantidad de libros prestados - Cantidad de libros por género - Libro más antiguo y más nuevo.

//CODIGO y Comentarios.

const generarReporteLibros = () => {
  const totalLibros = libros.length; //Usamos .length para indicar cuántos elementos hay en ese array.

  const librosPrestados = libros.filter(
    (libro) => libro.disponible === false //Filtramos los libros que no están disponibles, es decir, los que están prestados y contamos cuántos son.
  ).length;

  const genero = libros.map((libro) => libro.genero); //usamos .map() para obtener los géneros de los libros.

  const cantidadPorGenero = genero.reduce((acc, genero) => { //Usamos .reduce() para contar cuántas veces aparece cada género
    acc[genero] = (acc[genero] || 0) + 1; // Si el género ya existe, incrementamos su contador, si no, lo inicializamos en 0 y luego le sumamos 1.
    return acc;
  }, {}); //

  const libroMasAntiguo = libros.reduce(
    (ant, libro) => (libro.anio < ant.anio ? libro : ant), //Comparamos los años de publicación de los libros para encontrar el más antiguo.
    libros[0]
  );
  const libroMasNuevo = libros.reduce(
    (nuevo, libro) => (libro.anio > nuevo.anio ? libro : nuevo), //Comparamos los años de publicación de los libros para encontrar el más nuevo.
    libros[0]
  );

  const reporte = { // Creamos el objeto de reporte
    totalLibros,
    librosPrestados,
    cantidadPorGenero,
    libroMasAntiguo: {
      titulo: libroMasAntiguo.titulo,
      anio: libroMasAntiguo.anio,
    },
    libroMasNuevo: {
      titulo: libroMasNuevo.titulo,
      anio: libroMasNuevo.anio,
    },
  };

  return reporte;
};

const ReporteDeLibros = generarReporteLibros(); //Llamamos a la función para generar el reporte.

console.log("Reporte de Libros completo:"); // Mostramos el reporte en la consola.
console.log(ReporteDeLibros); 


//Punto 6: Identificación Avanzada 
//Función librosConPalabrasEnTitulo() que:
//Recorra el array libros - Verifique que el título tenga más de una palabra - Asegure que cada palabra tenga solo letras (sin números ni signos) - Devuelva un array con esos títulos - Los muestre en la consola

//CODIGO y Comentarios.

const librosConPalabrasEnTitulo = () => {  //Usamos funcion arrow sin parametros y con return explicito. Usamos llaves y return ya que la funcion tiene mas de una linea de codigo.
  const titulosIdentificados = libros
    .map((libro) => libro.titulo) //Usamos .map() para recorrer el array de libros y obtener los títulos.
    .filter((titulo) => {     //Usamos .filter() para filtrar los títulos que cumplen con la condicion (más de una palabra y solo letras).
      const palabras = titulo.split(" "); // Dividimos el título en palabras usando el espacio como separador. 
      return (
        palabras.length > 1 && // Verificamos que el título tenga más de una palabra.
        palabras.every((palabra) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(palabra)) //Verificamos que cada palabra contenga solo letras
      );
    });

  console.log("Libros Identificados:"); //Mostramos un mensaje en la consola.

  console.log(titulosIdentificados); //Mostramos los títulos identificados en la consola.

  return titulosIdentificados; //Devolvemos el array de títulos identificados.
};
librosConPalabrasEnTitulo();  


//Punto 7: Cálculos Estadísticos
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
//Promedio de años de publicación de los libros - Año de publicación más frecuente - Diferencia en años entre el libro más antiguo y el más nuevo.

//CODIGO y Comentario

const calcularEstadisticas = () => {
};


