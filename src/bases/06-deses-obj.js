//Desestructuración
//Asignación Desestructurante
const persona = {
    nombre: 'Samuel',
    edad: 22,
    clave: 'Toprak44Kmpl',
}

//Extraigo el valor nombre del objeto
//y lo guardo en la constante nombre2
const {nombre:nombre2} = persona;
console.log(nombre2);

const {nombre, edad, clave} = persona;
//console.log(nombre);
//console.log(edad);
//console.log(clave);

const usingContext = ({clave, nombre, edad, rango = 'Capitan'}) =>{
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.123124,
            lng: -12.5345

        }
    }
}



//Para extraer elementos anidados
const {nombreClave, anios, latlng:{lat,lng}} = usingContext (persona)
console.log(nombreClave, anios);
console.log(lat,lng);