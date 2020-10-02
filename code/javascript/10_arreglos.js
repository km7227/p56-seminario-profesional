var objeto1={
    nombre:'Gaby',
    apellido: 'Farias',
    altura: '1.64',
    cantidadLibros: 30, 
}

var objeto2={
    nombre:'Carolina',
    apellido: 'Olivares',
    altura: '1.65',
    cantidadLibros: 20, 
}

var objeto3={
    nombre:'Erika',
    apellido: 'Orellana',
    altura: '1.60',
    cantidadLibros: 40, 
}
var objeto4={
    nombre:'Bella',
    apellido: 'Espinoza',
    altura: '1.61',
    cantidadLibros: 20, 
}

var objeto5={
    nombre:'Douglas',
    apellido: 'Castro',
    altura: '1.70',
    cantidadLibros: 30, 
}
var personas = [ objeto1, objeto2, objeto3, objeto4, objeto5 ]

//1ra Forma de recorrer arreglo
for (persona of personas) {
    console.log( `${persona.nombre} ${persona.apellido}` )
}

//2da Forma de recorrer arreglo
for (var i=0; i<personas.length; i++){
    console.log( ` ${personas[i].nombre} ${personas[i].apellido}`)
}

//Filtrar con arreglos

const esAlta = (objeto) => objeto.altura >= 1.80
var personasAltas = personas.filter( esAlta )

console.log( personasAltas )
for (persona of personasAltas){
    console.log(`${persona.nombre} ${persona.apellido}`)
}

//Uso de la funcion map con arreglos (conversión)
//METROS
const pasarAlturasMetros = (objeto) => {
    objeto.altura = objeto.altura / 100
    return objeto
}

var personasMetros = personas.map( pasarAlturasMetros )


//Otra forma de ejecutar resultado
//CENTIMETROS
var personasCentimetros = personas.map( function(objeto) {
    objeto.altura = objeto.altura * 100
    return objeto
} )

//Modificar Arreglo
var otrasPersonas = []
for(persona of personas){
    otrasPersonas.push( { ...persona })
}

otrasPersonas.map(pasarAlturasMetros)

console.log( personas )
console.log( otrasPersonas )

//------ Contabilizar Libros en total ------

//1ra forma 
var sum = 0
for(persona of personas){
    sum += persona.cantidadLibros
}
console.log( `La cantidad de libros es ${sum}.` )


//2da forma
const contabilizarLibros = (acum, { cantidadLibros }) => acum + cantidadLibros

var totalLibros = personas.reduce( contabilizarLibros, 0 )
console.log( `La cantidad de libros en total es ${totalLibros}.` )