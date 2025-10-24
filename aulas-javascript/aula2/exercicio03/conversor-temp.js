let temperaturasCelsius = [15, 30, 12, 13.4, 40.2, 33.3]

function converterCelsiusParaFahrenheit(tempCelsius) {
    let conversaoFahrenheit = tempCelsius.map(function(temp){
        return (temp * 9/5) + 32;
    })
    return conversaoFahrenheit;
}

let novasTemperaturas = converterCelsiusParaFahrenheit(temperaturasCelsius);
console.log(novasTemperaturas);
