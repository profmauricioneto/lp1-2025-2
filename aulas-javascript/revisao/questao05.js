const consumos = [80, 120, 150, 95, 200, 110, 113];

const consumoExcessivo = consumos.filter((consumo) => consumo >= 100);
console.log(consumoExcessivo);

const somatorio = consumoExcessivo.reduce((acc, consumo) => acc += consumo ,0);
let media = somatorio/consumoExcessivo.length;

console.log(`Média do consumo: ${media.toFixed(2)}`);
