const personajes = ['Samuel', 'Kevin', 'Parker'];

const [, , p3] = personajes;
console.log(p3);

const retornarArreglo = () =>{
    return ['ABC',123]
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//1. e llamaŕa nombre
const usaState = (valor)=>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usaState('Samuel')

console.log(nombre);
setNombre();