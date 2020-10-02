var nombreApellido = 'Gabriela Farias'
var edad = 37

//FUNCION TIPO DECLARATIVA
function imprimirEdad(nombre, edad) {
    console.log(nombre, 'tiene la edad de: ', edad)

}

//FUNCION TIPO FLECHA 
var imprimirEdad2 = (nombre, edad) => {
console.log(nombre, 'tiene la edad de: ', edad)
}

//FUNCION TIPO EXPRESIVA
var imprimirEdad3 = function(nombre, edad)  {
    console.log(nombre, 'tiene la edad de: ', edad)
}

imprimirEdad(nombreApellido, edad)
imprimirEdad('Gabriela Farias', 24)
imprimirEdad2(nombreApellido, edad)
imprimirEdad3('Carolina Olivares', 15)

