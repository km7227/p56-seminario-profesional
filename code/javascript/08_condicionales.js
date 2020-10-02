var persona = {
    nombre: 'Gabriela ',
    apellido: 'Farias',
    edad: 24,
    universidad: 'Universidad Politecnica Salesiana',
    correo: 'gfariaso@est.ups.edu.ec',
    ingeniera: true,
    master= false,
    doctor= false,
}

function imprimirPersona ( objeto ){
    console.log(`${objeto.nombre} ${objeto.apellido}`)
    console.log(`Edad: ${objeto.edad} años. `)
    console.log(`Universidad: ${objeto.universidad}`)
    console.log(`correo: ${correo}`)
    if(objeto.ingeniero){
        console.log(`Es Ingeniero.`)

    }
    if (objeto.master){
        console.log(`  Magister. `)
    }
    if(objeto.doctor){
        console.log(` Es Doctor. `)
    }
}
imprimirPersona(persona)