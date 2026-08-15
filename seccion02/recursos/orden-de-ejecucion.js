

console.log('Inicio de programa'); // Se ejecuta 1°

setTimeout( () => {
    console.log('Primer Timeout'); // Se ejecuta 5°
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout'); // Se ejecuta 3°
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout'); // Se ejecuta 4°
}, 0 );


console.log('Fin de programa'); // Se ejecuta 2°

