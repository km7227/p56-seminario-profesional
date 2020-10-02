var docente = {
    nombre: 'Guillermo',
    apellido: 'Pizarro'
}

var docente2= {
    nombre: 'Dario',
    apellido:'Huilcapi',

}

var otroDocente = {
    ... docente
}

console.log(docente == docente2)
console.log(docente == otroDocente)
console.log(otroDocente.nombre)

docente3= otroDocente
otroDocente.nombre= 'Gaby'
console.log(docente3 == otroDocente)
console.log(docente3)
console.log(docente)