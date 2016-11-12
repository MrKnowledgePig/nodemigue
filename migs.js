var prompt = require('prompt');

var calculator = function() {
    console.log('calculator');
    console.log('enter your operation')
    prompt.get(['numero1', 'simbol', 'numero2'], function(err, data) {
        if (err)
            console.log(err);

        if (data.simbol === '+') {
            var suma = parseInt(data.numero1) +  parseInt(data.numero2);
            console.log("la suma es", suma);
        }  else if (data.simbol === '-') {
            var sua = parseInt(data.numero1) -  parseInt(data.numero2);
            console.log("la suma es", sua);
        }  else if (data.simbol === '*') {
            var sum = parseInt(data.numero1) *  parseInt(data.numero2);
            console.log("la suma es", sum);
        }  else if (data.simbol === '/') {
            var sma = parseInt(data.numero1) /  parseInt(data.numero2);
            console.log("la suma es", sma);
        }  else {
            console.log('Error en el simbolo');
        }
        console.log('\n');
        calculator();
    })
}
calculator();