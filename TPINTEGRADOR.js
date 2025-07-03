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

function generarReporteLibros() { // Función arrow sin parámetros que devuelve el reporte de libros.
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

  const reporte = { // Creamos el reporte que devuelve la función.
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

function librosConPalabrasEnTitulo() {  
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

function calcularEstadisticas() {  

  const aniosPublicacion = libros
    .map(libro => libro.anio); //Usamos .map() para recorrer el array de libros y obtener los años de publicación.


  //Promedio de años de publicación
  const sumaAnios = aniosPublicacion.reduce((acumulador, anio) => acumulador + anio, 0); //Usamos .reduce() para sumar todos los años de publicación.
  const promedioAnios = sumaAnios / aniosPublicacion.length; //Calculamos el promedio dividiendo la suma total de años por la cantidad de libros.

  console.log(`✔ Promedio de años de publicación de los libros: ${promedioAnios}`);  //Mostramos el promedio en la consola.


  //Año de publicación más frecuente
  const frecuenciaAnios = {}; //Creamos un objeto para contar la frecuencia de cada año de publicación. Consideraremos  los años y los valores, la cantidad de veces que aparecen.

    aniosPublicacion.forEach(anio => { //Usamos forEach (objeto) para recorrer cada año de publicación
      frecuenciaAnios[anio] = (frecuenciaAnios[anio] || 0) + 1; //Por cada año, si ya existe como clave en frecuenciaAnios, incrementamos su contador; si no existe, lo inicializamos en 1.
  });

  let anioMasFrecuente = 0; //Usamos una variable para almacenar el año más frecuente
  let maxFrecuencia = 0; //Usamos una variable para almacenar la máxima frecuencia encontrada

  for (const anio in frecuenciaAnios) {  //Recorremos las claves del objeto frecuenciaAnios
    if (frecuenciaAnios[anio] > maxFrecuencia) {  //si encontramos una frecuencia mayor, actualizamos maxFrecuencia
      maxFrecuencia = frecuenciaAnios[anio]; // Actualizamos la máxima frecuencia
      anioMasFrecuente = parseInt(anio);  //Convertimos a numero, las claves de los objetos que son cadenas de texto (queremos el año como un número)    }
  }
  } //Al finalizar el bucle, anioMasFrecuente contendrá el año más frecuente y maxFrecuencia la cantidad de veces que aparece.
  console.log(`✔ Año de publicación más frecuente: ${anioMasFrecuente} (aparece ${maxFrecuencia} veces)`); //Mostramos el año más frecuente y cuántas veces aparece en la consola.


  //Diferencia en años entre el libro más antiguo y el más nuevo
  const anioMasAntiguo = Math.min(...aniosPublicacion); //Usamos Math.min para encontrar el valor mas antiguo
  const anioMasNuevo = Math.max(...aniosPublicacion);   //Usamos Math.max para encontrar el valor mas nuevo
  const diferenciaAnios = anioMasNuevo - anioMasAntiguo; //Calculamos la diferencia entre el año mas nuevo y el más antiguo
  
  console.log(`✔ Diferencia en años entre el libro más antiguo (${anioMasAntiguo}) y el más nuevo (${anioMasNuevo}): ${diferenciaAnios} años`);  //Mostramos la diferencia en años en la consola.
}

calcularEstadisticas(); 
