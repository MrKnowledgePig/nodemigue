var prompt = require('prompt');

var calculator = function() {
    console.log('Calculator is On ....');
    console.log('enter your oparation')
    prompt.start();

    prompt.get(['numero1', 'simbol', 'numero2'], function(err, data) {
        if (err)
            console.log(err);

        if (data.simbol === '+') {
            var suma = parseInt(data.numero1) + parseInt(data.numero2);
            console.log("La suma es ", suma);
        } else if (data.simbol === '*') {
            var multi = parseInt(data.numero1) * parseInt(data.numero2)
            console.log("La multiplication es ", multi);
        } else if (data.simbol === '-') {
            var resta = parseInt(data.numero1) - parseInt(data.numero2)
            console.log("La resta es ", resta);
        } else if (data.simbol === '/') {
            var divi = parseInt(data.numero1) / parseInt(data.numero2)
            console.log("La divicion es ", divi);
        } else {
            console.log('Error en el simbolo');
        }
        console.log('\n');
        calculator();
    })
}
calculator();