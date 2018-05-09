// modulo propio ejemplo
// import en ES6
// import calc from './calculadora.js';
// igual que:
// const miCalculadora = {
//   suma: function(x,y) { return x + y;},
//   resta: function(x,y) {return x - y;},
//   divide: function(x,y) {return x / y;},
//   multiplica:  function(x,y) {return x * y;},
// }
// let calc = miCalculadora;

// igual que:
// importar con require en ES5
let calc = require('./calculadora.js');

let [a, b, ...args] = process.argv;
args = args.map(item => +item);

console.log('max of '+ args + ': ', calc.max(args));
