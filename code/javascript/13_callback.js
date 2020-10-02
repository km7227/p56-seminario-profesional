
//Funcion como parametro a otra funcion
function hola (nombre, fn_cb) {
    setTimeout(function() {
        console.log(`Hola soy ${nombre}.`)
        fn_cb(nombre)
    }, 0)
}


function hablar( fn_cb ) {
    setTimeout(function (){
        console.log(`bla bla bla....`)
        fn_cb()
    }, 1000)
}

function adios(nombre){
    setTimeout(function () {
        console.log(`Adios ${nombre}!`)
        console.log(`Finalizando conversación...`)
    }, 1000)
}

function dialogar(nombre, numVeces) {
    
    if (numVeces > 0 ){
        hablar(function() {
            dialogar( nombre, --numVeces)
        })
    } else{
        adios(nombre)
    }

}

console.log(`Inicializando conversación...`)

hola('Gabriela', function(nombre) {
    dialogar(nombre, 4)
    
})