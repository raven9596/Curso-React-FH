

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 555584585,
    lat: 14.16544,
    lng: 34.16468
  }
};

// console.table({persona});
console.log(persona);

// no hacer este tipo de mutacion
// const persona2 = persona;
// persona2.nombre = 'Peter';

// esta es la forma de hacer la mutacion
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);


