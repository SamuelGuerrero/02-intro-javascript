const persona={
    nombre: 'Sam',
    apellido: 'Guerrero',
    edad: 20,
    direccion: {
        ciudad: 'Huajuapan',
        zip: 96000,
        lat: 12.3532423,
        lng: 1.2311412,

    }
};

//console.table({persona});
console.log(persona);

//Para clonar objetos
const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)