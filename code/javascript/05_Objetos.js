var estudiante = {
    nombre: 'Gabriela',
    apellido: 'Farias',
    trabajo: 'Claro',
    correo: 'fariasgc@globalhitss.com'

}
var estudiante2 ={
    nombre: 'Carolina',
    apellido: 'Olivares',
    trabajo: 'Claro',
    correo: 'colivares@globalhitss.com'
 
}

function imprimirNombreMayuscula(objeto){
    var { nombre } = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto){
       console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}
imprimirNombreMayuscula(estudiante)
imprimirNombreMayuscula(estudiante2)