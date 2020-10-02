let persona = {
    nombres: 'Gabriela Farias',
    apellidos: 'Lopez Vega',
    peso: 140,
}

const INCREMENTARPESO = 3
const DECREMENTARPESO = 2
const aumentarPeso = (persona) => objeto.peso += INCREMENTARPESO
const disminuyePeso = (persona) => objeto.peso -= DECREMENTARPESO

const comeMucho = () => Math.random() < 0.5
const realizaDeporte = () => Math.random() < 0.7
const meta = persona.peso - 10
 console.log(´Al inicio del años ${persona.nombre}pesa ${persona.peso}.´)

while(persona.peso > meta){
if (comeMucho()){
    aumentarPeso(persona)

}
if(realizaDeporte()) {
    disminuirPeso(persona)
}
}

console.log (`Al final del año ${persona.nombre}pesa ${persona.peso}`)
