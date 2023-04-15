const { sumar } = require('./funciones/suma')
const { resta } = require('./funciones/resta')
const { multiplicacion } = require('./funciones/multiplicacion')
const { division } = require('./funciones/division')

const resultado1 = sumar(50, 35)
const resultado2 = resta(75, 68)
const resultado3 = multiplicacion(5, 0)
const resultado4 = division(10, 0)

console.log(resultado1, resultado2, resultado3, resultado4)