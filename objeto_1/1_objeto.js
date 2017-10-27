;
/*
  Comentario
  de
  varias
  líneas
*/

// Comentario de una línea

//Definición o declaración
function saludo (nombre = 'ICONOS') {
  //Interpolación de variables
  //alert(`Hola, ${nombre}`)
},

//Invocación o ejecución
//saludo('Tete')
//saludo()
;
//Es buena práctica encapsular tu código en una función anónima autoejecutable
(function (d, w) {
  //alert(d)
  //alert(w)
  //alert('Hola')
  //console.log(d, w, 'Hola')
})(document, window);

/* Objetos Literales */
(function (c) {
  c('*****Objetos Literales*****')

  /* Para declarar una variable en JS se utilizaba la palabra 'var'. Ahora para declarar una variable usamos 'const' o 'let' */

  /* Los objetos en JS son una colección de propiedades con sus respectivos valores. Esas propiedades pueden ser atributos o métodos */
  const Planta = {
    nombre: 'árbol',
    Tamaño: 'variable',
    color: 'Verde',
    especie: 'Pino',
    Fotosintesis: function () {
      c('proceso mediante el cual las plantas producen sustancias orgánicas a partir de dióxido de carbono y agua en presencia de clorofila captadora de la energía solar.')
    },
    Agua: function (Necesita = 'de lluvia, H2O') {
      c(`${this.tipos} Necesita ${Agua}`)
    },
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  c(
    Planta,
    Planta.nombre,
    Planta.Tamaño,
    Planta.color,
    Planta.especie,
  )

  Planta.Fotosintesis()
  Planta.Agua()
  Planta.aparecer('https://us.123rf.com/450wm/zerbor/zerbor1505/zerbor150500106/40562595-un-rbol-de-pino-sobre-un-fondo-blanco.jpg?ver=6')

  const planta2 = {
    nombre: 'árbol amarillo',
    Tamaño: 'variable',
    color: 'amarillo',
    especie: 'dosel',

    Fotosintesis: function () {
      c('proceso mediante el cual las plantas producen sustancias orgánicas a partir de dióxido de carbono y agua en presencia de clorofila captadora de la energía solar.')
    },
    Agua: function (Necesita = 'de lluvia, H2O') {
      c(`${this.tipos} Necesita ${Agua}`)
    },
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  
  c(
    planta2,
    planta2.nombre,
    planta2.Tamaño,
    planta2.color,
    planta2.especie,
  )

  planta2.Fotosintesis()
  planta2.Agua()
  planta2.aparecer('http://www.hdfondos.eu/pictures/2013/0101/1/nature-trees-leaves-color-yellow-autumn-fall-seasons-foliage-branches-limb-top-images-226510.jpg')
})(console.log);

/* Clases */
(function (c) {
  /* Una clase es un modelo a seguir, un machote */
  class Perro {
    //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor (nombre, Tamaño, color, especie) {
      //Definición de los Atributos de mi clase
      this.nombre = nombre
      this.Tamaño = Tamaño
      this.color = color
      this.especie = especie
      
    }

    //Definición de los métodos de mi clase
    Fotosintesis () {
      c('proceso mediante el cual las plantas producen sustancias orgánicas a partir de dióxido de carbono y agua en presencia de clorofila captadora de la energía solar.')
    }

    Agua (Necesita = 'de lluvia, H2O') {
      c(`${this.nombre} necesita ${agua}`)
    }

    aparecer (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  //La palabra new me permite crear o INSTANCIAR un objeto de un tipo determinado de clase
  const Planta = new Planta('árbol', 'variable', 'verde', 'pino')
  const planta2 = new planta2('árbol amarillo', 'variable', 'amarillo', 'dosel')

  c(
    Planta,
    Planta.nombre,
    Planta.Tamaño,
    Planta.color,
    Planta.especie,
    planta2,
    planta2.nombre,
    planta2.Tamaño,
    planta2.color,
    planta2.especie,
  )

  Planta.Fotosintesis()
  Planta.agua()
  Planta.aparecer('https://us.123rf.com/450wm/zerbor/zerbor1505/zerbor150500106/40562595-un-rbol-de-pino-sobre-un-fondo-blanco.jpg?ver=6')  

  planta2.Fotosintesis()
  planta2.agua()
  planta2.aparecer('http://www.hdfondos.eu/pictures/2013/0101/1/nature-trees-leaves-color-yellow-autumn-fall-seasons-foliage-branches-limb-top-images-226510.jpg')
})(console.log);