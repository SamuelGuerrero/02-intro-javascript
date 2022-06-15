//Funciones en JS
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Samuel'))


console.log(saludar('Samuel'))
console.log(saludar2('Peter'));
console.log(saludar3('Emma'));
console.log(saludar4());

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'Toprak44Kmpl'
    });

console.log(getUser())


//Tarea
//1. Transformen a una función de Flecha
//2. Tiene que retornar un bojeto implícito
//3. Pruebas

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC123',
        username: nombre
    }
};

const getUsuarioActivo2 = (nombre) =>({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Samuel');
console.log(usuarioActivo)

const usuarioActivo2 = getUsuarioActivo('Samuel2');
console.log(usuarioActivo2)