# Javascript

## **Que es ECMAScript?**

Es un estándar para JS para escribir funciones complejas, es popular ya que trajo nuevas convenciones y funciones orientadas a objetos a JS.

## **Diferencia entre var y Let**

let es una constante. var es una variable normal.

```jsx
let camper = 'James';
let camper = 'David'; // throws an error
```

Sí pongo un “use Strict” en la parte alta del codigo, la consola me va a tirar error cuando trate de codear algo de manera “insegura” o poco practica.

```jsx
"use strict";
x = 3.14; // throws an error because x is not declared
```

Cuando declaras una variable con **var,** 
es declarada de manera global, o local sí esta adentro de una funcion, en cambio con **let,** 
sí declaro la funcion dentro de un block, statement o expresion, se va a declarar solo dentro de estas y no globalmente.

```jsx
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
```

También se puede declarar usando la palabra **const**
, que es una constante. Se declara y no puede ser cambiada en su valor, solo sirve de lectura.

```jsx
"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

Se recomienda poner el nombre de las constantes en mayúscula, pose las mismas caracteristicas que el let.

```jsx
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

Los array sí pueden ser modificados en sí mismos, lo que no se puede es apuntar a otro array distinto.

## **Funciones**

En javascript aveces no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una funcion como argumento a otra funcion. Para eso las **funciones inline**, no les ponemos nombre a las funciones porque no vamos a necesitarlas en ningún otro lado.

```jsx
const myFunc = function() {
  const myVar = "value";
  return myVar; }
```

Otra cosa que ofrece ES6 es reemplazar el cuerpo de la funcion por una flecha, en el caso de que el cuerpo no sea necesario y la funcion solo conste de un return, es decir

```jsx
const myFunc = () => "value" //Igual a return “value”;
```

También podemos realizar operaciones en una sola linea

```jsx
// doubles input value and returns it
const doubler = (item) => item * 2;
```

También podemos setear **parametros por defecto** 
 en nuestras funciones, sí llamamos a la funcion sin pasarle parametro, tomara el ya seteado por defecto.

```jsx
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous Por defecto
```

## **Función Object.freeze**

Es una funcion que evita que puedas modificar propiedades de un objeto o una variable

```jsx
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```

Cuando intento modificar algo, no tira error, simplemente lo ignora.

## **Extraer valores de objetos**

```jsx
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

const { name, age } = user;
// name = 'John Doe', age = 34
```

Es lo mismo que el anterior, guardo ambas propiedades del objeto User en dos variables name, age, en una sola declaracion de constantes

## **Rest Operator**

Con esto, se pueden crear funciones que pueden tomar una variable cantidad de argumentos, y estos pueden ser accedidos luego por estar guardados en un Array de dentro de la misma funcion

```jsx
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 argume
```

Es decir, esta funcion..

```jsx
const product = (function() {
	"use strict";
	return function product(n1, n2, n3) {
		const args = [n1, n2, n3];
		return args.reduce((a, b) => a * b, 1);
	};
})();
console.log(product(2, 4, 6));//48
```

Es lo mismo que esta

```jsx
const product = (function() {
	"use strict";
	return function product(...n) {		
		return n.reduce((a, b) => a * b, 1);
	};
})();
console.log(product(2, 4, 6));//48
```

Otra funcion puede ser sacar el valor maximo de un Array de la siguiente manera

```jsx
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

Esto también se puede usar con **objetos,** 
escribir este codigo

```jsx
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```

Es lo mismo que hacer esto

```jsx
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

También podemos transformar los objetos nested en variables

```jsx
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```

## **Creando Strings con Template Literals**

Es un tipo especial de String que hace que el manejo de String complejos sea más facil, pudiendo crear Strings multilinea para invocarlos luego, por ejemplo:

```jsx
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```

Se usa otro tipo de “comilla” cuando se quiere invocar al String (`) y no es necesario poner /n para que se haga un salto de línea en el texto de salida

## **Export Fallback con export default**

Lo mismo que el anterior, sí queremos exportar una funcion, cuando la declaramos, la exportamos. Se usa cuando quiero exportar solo un valor o funcion, solo puedo elegir un valor que tenga esta propiedad de exportacion, tampoco se puede usar con const, var o let.

```jsx
export default function add(x,y) {
  return x + y;
}
```

Despues lo importo agregandole un nombre de variable cualquiera e invocandolo normalmente.

```jsx
import add from "math_functions";
add(5,4); //Devuelve el resultado de acuerdo al metodo exportado anteriormente
```
## **Usar * para importar todo**

```jsx
import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
```

Esto va a crear una variable llamada como el “as” donde van a estar todos los export de la otra clase, puedo acceder a sus metodos y atributos tranquilamente.

Sí quiero solo importar una funcion exportada de otra clase

```jsx
import { add } from './math_functions.js';
```

## **Export**

Cuando queremos que una funcion, o algo de codigo, sea usable en otra parte, debemos **exportarlo** antes de **importarlo** en otro lado

```jsx
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.
```

y se puede resumir de la siguiente manera..

```jsx
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
```

## **Diferencia entre import y require**

- Require: Se usa para importar las funciones y el codigo en un archivo externo. Esto posee un problema, el cual es que este codigo puede ser muy largo y solo necesito una parte del codigo.
- Import: Herramienta de ES6 para importar solo los componentes que necesitamos de un archivo.

```jsx
import { countItems } from "math_array_functions"
```

## **Uso de getters y setters**

```jsx
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```

## **Creacion de Constructores**

```jsx
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

Esto se puede reemplazar por..

```jsx
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

## **Generar una funcion en un objeto**

```jsx
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

## **Otra manera de crear un objeto**

```jsx
const createPerson = (name, age, gender) => {
 "use strict";
 // change code below this line
 return {
  name,
   age,
  gender
 };
 // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
```

Se crea un objeto con un name= “Zodiac Hasbro”, age=56 and gender=”male”

## **Cuales son las diferencias entre Java y Javascript? **

1. **JavaScript** ha sido un lenguaje interpretado, y **Java** compilado. Los programas de **JavaScript** son archivos de texto que se integra directamente en las páginas HTML y es interpretado (sin estar compilado) por el cliente (navegador), mientras que en **Java** se compilan a un archivo especial para que ser optimizados a un lenguaje intermedio llamado bytecode, y leído posteriormente en un ordenador que lo ejecute.
2. **Java** es un lenguaje de programación orientado a objetos puros (OOP), mientras que **JavaScript** está basado en prototipos y, puede emular la programación orientada a objetos.
3. **JavaScript** es gestionado por ECMAScript, una organización sin ánimo de lucro. En **Java**, el control lo tiene Oracle, una empresa privada que lo gestiona en función de sus intereses.
4. **JavaScript** se depura en una fase y Java en dos. JavaScript hace que el código trabaje informando de los errores que se producen a medida que se ejecutando. **Java**, primero hace la fase de compilación y el compilador nos indica los posibles errores de sintaxis presentes en nuestro código. Después, se ejecuta el programa, donde pueden surgir errores para ser depurados.
5. **Java** tiene variables definidas que no se pueden cambiar y es más complejo, **JavaScript** puede ser cambiante, dándole flexibilidad y es más sencillo.
6. **JavaScript** es débilmente tipado, una misma variable puede contener primero un texto, luego un número, un array o un objeto. Esto, que parece una ventaja, también es fuente de posibles errores si no controlamos correctamente lo que ocurre en nuestro código. **Java** es fuertemente tipado, todas las variables tienen un tipo determinado y, una vez definidas, no se pueden cambiar.

## **Entre JS y un script ASP, ¿Cual es mas rápido?**

JavaScript es más rápido porque es un lenguaje del lado del cliente y no necesita la ayuda del servidor web para ejecutarse. Por otra parte el ASP es un lenguaje del lado del servidor. Motivo por el que siempre es más lento que JavaScript. Sin embargo, Javascript ahora, también puede ser usado como un lenguaje de lado del servidor (server side) (nodejs).

## **Que son las variables no declaradas y no definidas?**

**Variables no declaradas**: son las que no existen en un programa, y no se declaran. Si el programa trata de leer su valor entonces va a arrojar un error.

**Variables no definidas**: son aquellas declaradas en el programa, pero no tienen asignado ningún valor. Si el programa quiere leer el valor de  variable no definida, se devuelve un valor no definido.

## **Qué es el namespacing de JS? **

Namespacing se utiliza para agrupar funciones, variables, etc con un nombre único.  Esto mejora la modularidad en codificación y permite la reutilización del código.

## **¿Qué es una funcion Declarativa y una Expresiva? **

En las **Funciones Declarativas** usamos la palabra reservada `Function` para poder declararla

```jsx
 function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

La **Expresiva (Expresion de Funcion)** es cuando la declaramos tipo variable como funcion anonima

```jsx
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

A las funciones declarativas se les aplica hoisting, a la otra no, hoisting se aplica solo a las palabra sreservadas `var` y `function`, es decir, a la expresion de funcion podriamos llamarla recien despues de declararla.

## **Porque no se recomienda usar innerHTML?**

No se recomienda su uso porque es muy lento dado que refresca el contenido cada vez. Es más fácil insertar un código errado en el documento y hacer que la página web sea inestable.

## **Que es la tipificacion de Variables?**

La tipificación de variables, sirve para asignar un número a una variable y después asignar un string a la misma variable.

## **Cómo se pueden crear objetos genéricos?**

```jsx
var myObjeto = new Object({
'nombre': 'Diego',
'apeliido': 'Querales',
'edad': 25,
})
// Salida por consola
{nombre: "Diego", apeliido: "Querales", edad: 25}
```

## **Para que se usa Void(0)?**

Se usa Void(0) para prevenir que la página sea actualizada. También, se usa para llamar a otro método sin que se actualice la página.

## **Diferencia entre primitivo y objeto**

- Los primitivos se pasan por valor, los objetos se pasan por referencia
- Los primitivos se copian por valor y los objetos se copian por referencia
- Los primitivos se comparan por valor y los objetos por referencia
- Los primitivos son inmutables, el unico elemento inmutable del objeto es su referencia, el valor puede ser modificado.

Casos **primitivos**

```jsx
let animal = ‘perro’
let mascota = animal
animal = 'gato'
console.log(mascota) // perro, se copio por valor y no referencia
```

Caso **objetos**

```jsx
let animal = {
  nombre: 'perro'
}

let mascota = animal
animal.especie = 'gato'
console.log(mascota.nombre) // gato, se copio referencia no valor 
```

Que pasa si tengo dos objetos almacenados en distintas variables?

Y si creamos dos objetos, los mismos al ser igualados no seran iguales aunque su contenido sea el mismo, ya que la referencia es distinta.

## **Que es Truthy and Falsy?**

Son valores que por defecto son True o False

```jsx
// Falso
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

// Verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
```

## **Que son las funciones de alto nivel / Higher order Function?**

Habían muchas funcionalidades que se estaban repitiendo, entonces JS decidio hacerlas nativas, como iteraciones. Funciones de orden mayor es que reciben como parametro los iterables y un callback, que se ejecutaba en cada elemento iterado.

Hoy en dia todo esto esta abstraído y solo pasamos el callback.

## **Que es el event delegation?**

Por ejemplo, si tenemos botones y queremos hacer eventos para todos los botones, no es viable hacer un evento por boton ya que no es escalable.

Agregamos el evento al container y dependiendo donde es el click (en cual boton), se detecta una cierta clase o propiedad, y se ejecuta el evento correspondiente utilizando [`e.target`](http://e.target) para identificar el elemento, por ejemplo.

## **Bubble vs Capture**

Cuando agregamos un elemento parece que solo lo agregamos a un elemento DOM pero en realidad este se propaga en una direccion. Podemos elegir cual direccion escuchan nuestros eventos. 

- Fase Capture: Llega al evento que dispara el evento
- Fase Target
- Fase Bubbling

## **isNaN vs Math.isNaN**

NaN son operaciones aritmeticas que no pueden ser representadas correctamente. Ambas funciones tienen como objetivo identificar si un valor es NaN. `isNaN` global aplica una coercion de tipos al argumento que le pasamos, `Math.isNan` no lo hace, lo que hace que sea mas seguro de usar para valores no numericos. 

```jsx
isNaN('denu') // devolvera true porque primero intentará convertir la cadena a un numero
Number.isNaN('denu') // false porque no convertirá la cadena a numero
```

## **Cual es la diferencia entre foreach, map y reduce**

- **Foreach** itera por cada uno. Ejecuta la función que se le pasa por parámetro para cada elemento del array. Este método no devuelve nada, por lo tanto, si intentamos guardar su ejecución en una variable lo que ocurrirá es que esa variable tomará el valor de undefined.

```jsx
[1, 2, 3, 4].forEach(function (item) {   
   console.log(item); 
});
// Imprimirá por consola
1
2
3
4

let numbers = [1, 2, 3, 4].forEach(function (item) {   
     console.log(item); 
});
console.log(numbers); // undefined
```

- **Map**: Devuelve una nueva matriz aplicando la funcion de devolucion de llamada en cada elemento de la matriz.

```jsx
var result = [1,2,3,4].map(function (item) { return item * 2; });
console.log(result);
// Resultado
[2,4,6,8]
```

- **Reduce** tiene un acumulador y todo. Nos permite, dada una función, “reducirlo” o “transformar” los elementos de un arreglo en un nuevo y único valor.

```jsx
var myArray = [10, 20, 30];
var total = myArray.reduce((accumulator, number) => {
 return accumulator + number;
});
total;
// Prints 60
```

## **Cual es la diferencia entre Map y Weakmap?**

Son casi iguales, son la clasica estructura de datos de diccionario, su diferencia es que se puede acceder a los clave-valores de un Map usando .values o .keys

```jsx
const map = new Map()
const weakMap = new weakMap()

const obj = {
	hola: 'mundo',
}

map.set('denu', 'lemon')
weakMap.set(myObjKey, 'lemon weakmap')

// Map
map.get('denu') // lemon
map.keys() // {'denu'}
map.values() // {'lemon'}

// Weakmap
weakMap.get(obj)) // lemon weakmap
weakMap.keys() // ERROR
weakMap.values() // ERROR
```

Weakmap es una caja negra en donde solo se puede acceder a los valores si se tiene la Key. 

Weakmap, ademas, solo admite objetos como clave, estos estan debilmente referenciados por lo que puede ser recolectados por el garbage collector de JS si asi lo considera, destruyendo esa entrada en el Weakmap y liberando memoria.

## **Que es Symbol?**

Son valores primitivos de JS (como String, boolean, etc..) agregados al ES6. Son valores unicos en JS, antes si queriamos tener un valor unico debiamos usar objetos (porque solo son iguales a ellos mismos), es util para crear constantes

```jsx
let sym1 = Symbol()
let sym2 = Symbol('denu')
let sym3 = Symbol()

sym1 === sym3 // false
```

Tambien sirve para crear claves unicas en los objetos, donde los autores de librerias, navegadores web o cualquier runtime de ES podra evitar que hubieran colisiones al momento de agregar una prop u objeto global 

```jsx
const sym1 = Symbol()
const sym2 = Symbol()

const obj = {}

obj[sym1] = 'a'
obj[sym2] = 'b'
```

## **Que es un Event listener?**

Supongamos que estamos usando una libreria para renderizar items de una coleccion de datos, esta expone un componente llamado RenderItem que tiene una sola prop disponible onClick que no acepta ningun parametro. ¿Y si quiero mandarle un argumento? 

```jsx
// Esta es el closure
// en es5
function onItemClick(titulo) {
    return function() {
      alert("Click en " + titulo)
    }
}
// en es6
const onItemClick = titulo => () => alert(`Click en ${titulo}`)

return (
  <Contenedor>
{items.map(item => {
return (
   <RenderItem onClick={onItemClick(item.titulo)}>
    <Titulo>{item.titulo}</Titulo>
  </RenderItem>
)
})}
</Contenedor>
)
```

Creamos una funcion que recibe el titulo que se quiere mostrar y retorna otra funcion que cumple con la definicion de la funcion que RenderItem recibe como prop.

## **Que es el Function Factory?**

Son funciones que crean funciones u objetos. Con este patron se puede implementar Currying

```jsx
const crearUsuario = ({ userName, avatar }) => ({
      id: crearUnID(),
      userName,
      avatar,
      cambiarUserName (userName) {
        this.userName = userName;
        return this;
      },
      cambiarAvatar (url) {
        // ejecuta logica para obtener el avatar desde la url
        const nuevoAvatar = obtenerAvtarDesdeUrl(url)
        this.avatar = nuevoAvatar
        return this
      }
    });
    
        console.log(crearUsuario({ userName: 'Bender', avatar: 'bender.png' }));
    
    {
      "id":"17hakg9a7jas",
      "avatar": "bender.png",
      "userName": "Bender",
      "cambiarUsername": [Function cambiarUsername]
      "cambiarAvatar": [Function cambiarAvatar]
    
    }
    */
```

## **Que es la expresion de Funcion Inmediatamente Invocada - Immediately-invoked Function Expression (IIFE)?**

Es una tecnica que se usaba para emular las variables privadas. 

```jsx
const modulo = (function(){
	function metodoPrivado () {
	}
	const valorPrivado = "algo"
	return {
	  get: valorPrivado,
	  set: function(v) { valorPrivador = v }
	}
})()

var x = modulo()
x.get() // "algo"
x.set("Otro valor")
x.get() // "otro valor"
x.valorPrivado //Error
```

## **Que es decodeURL y encodeURL?**

- EncodeURL es para convertir una URL a su codificacion hexadecimal

```jsx
encodeURI(uri) // my%20test.asp?name=st%C3%A5le&car=saab
```

- DecodeURL es para convertir la URL codificada a la normal

```jsx
decodeURI(uri) // my test.asp?name=ståle&car=saab
```

## **Que es escape y unescape?**

- Escape es la responsable de codificar un string para hacer el pase de informacion de un ordenador a otro por una red

```jsx
escape ("Hola? Como estas tu?")); // Hola%3F%20Como%20estas%20tu%21
```

- Unescape la decodifica

```jsx
unescape("Hola%3F%20Como%20estas%20tu%21") // Hola? Como estas tu?
```

## **Como se implementan Promises?**

Las promises son una buena forma de manejar operaciones asincronicas. Puede tener 3 estados, `Pending`, `Fulfilled` y `Rejected`. Son utiles cuando hay que manejar mas de una operacion asincronica una despues de la otra, para eso se puede usar **Promise Chaining** usando then() y catch() para el manejo de cada una. 

Se pueden implementar por ejemplo, en un Lazy loading.

```jsx
function sum (a, b) {
return Promise(function (resolve, reject) { 
 setTimeout(function () {  // mandar respuesta despues de 1 seg
   if (typeof a !== "number" || typeof b !== "number") {   // testeamos inputs
		 return reject(new TypeError("Inputs must be numbers"));
   }
	   resolve(a + b);
	 }, 1000);
	});
}
var myPromise = sum(10, 5);
myPromsise.then(function (result) {
	document.write(" 10 + 5: ", result);
	return sum(null, "foo"); // Invalid data and return another promise
	}).then(function () {  // Won't be called because of the error
	}).catch(function (err) { // The catch handler is called instead, after another second
		console.error(err);  // => Please provide two numbers to sum.
	});

// Otra manera de crear una Promise

let promise = new Promise(function(resolve, reject){
	// hacer algo
});
```

## **Qué es una variable global, como se declara y cuales problemas puede tener?**

Se pueden usar en todo el codigo, no tienen alcance. Se declara sin usar `var` en la declaracion

```jsx
miVariableGlobal = 'Hola mundo'
```

Puede dar al choque entre variables locales y globales por nombre. Ademas es dificil limpiar el codigo basado en variables globales

## **Cuál es la diferencia entre Promises, Callbacks y Async/Await?**

Con las promesas no sabemos cuando se resolverá, pero se puede seguir utilizando la app mientras tanto. Async Await fuerza una espera en la función. 

Ejemplo **Async/await** ⇒ 

Hay un stop en la ejecucion. No se puede continuar.

```
async function secondFunction() {
  await fetch('url servicio', {
    method: 'get',
    headers: {
      'Authorization': 'data',
      'Content-Type': 'data'
    },
    body: JSON.stringify(data),
    mode: 'cors',
    cache: 'default'
  })
    .then(response => ....)
}
```

Ejemplo de **Promise ⇒**

Fetch ya funciona con Promises. Posee una sintaxis amigable y los errores son faciles de manejar. 

`resolve` se utiliza cuando se resuelve todo ok, `reject` cuando sucede un error. Promise en si mismo es un callback.

```jsx
const promise = new Promise((resolve, reject) => {
	// cosas que pueden suceder
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));


const doAsyncStuffWithPromises = (numero1, numero2) => {
	const resultado = numero1 + numero2;
	return new Promise(resolve => {
		setTimeout(()=> {
			resolve(resultado)
		}, 500)
	})
}

doAsyncStuffWithPromises(1,3).then(result => console.log(result));
}
```

Ejemplo **Callback** ⇒

Es como una “llamada de vuelta”. Es muy raro su uso hoy en día. Generalmente es el ultimo parámetro. Se usa con proyectos de NodeJS. 

Es complicado de entender y su manejo puede ser dificil

```jsx
const doAsyncStuff
```

---

# Manejo de Archivos

### 💙 Cuáles son las ventajas y desventajas del uso de archivos?

Entre las ventajas de usar archivos encontramos las siguientes:

- Son fáciles de usar.
- No requieren el uso de programas externos para su creación, lectura o edición
- Son fáciles de compartir o enviar a otros usuarios/programas.
- En ocasiones, pueden ser abiertos y editados desde programas de edición de texto simples como un bloc de notas (siempre que se trate de texto!)

Sin embargo, no serán la mejor opción cuando tengamos que hacer (con frecuencia):

- Consultas sobre algún dato puntual entre todos los datos almacenados (y no podamos guardarnos todo el lote de datos en memoria).
- Ediciones de datos puntuales (que no requieren sobreescribir el archivo por completo)
- Lecturas que combinen datos obtenidos de varios archivos (nuevamente, suponiendo que no podemos guardar todos los datos en memoria)

Para este segundo caso, probablemente sea mejor considerar en uso de un motor de base de datos.

### 💙 Manejo de Archivos en NodeJS

Al igual que la mayoría de los lenguajes, NodeJS cuenta con una librería (o módulo, en js) para interactuar con el sistema de archivos (o File System) de tu computadora.
Para poder usar este módulo solo debemos importarla al comienzo de nuestro archivo fuente, utilizando la función `require( module | path )`:

```jsx
const fs = require('fs')
```

La mayoría de las funciones que contiene este módulo pueden usarse tanto de manera sincrónica como asincrónica. En este apunte estudiaremos primero las funciones sincrónicas (de uso más intuitivo), y luego en el próximo apunte pondremos más atención en sendas versiones asincrónicas, ya que su funcionamiento es algo propio de NodeJS, y requiere de su estudio con más detenimiento.

### 💙 Operaciones más comunes sobre archivos

### Leer

Para leer un archivo usaremos la función readFileSync(path, encoding)
El primer parámetro es un string con la ruta del archivo que queremos leer, y el segundo parámetro indica el formato de codificación de caracteres con que fue escrito el dato que estamos leyendo. El formato que utilizaremos con más frecuencia será 'utf-8' (inglés: 8-bit Unicode Transformation Format, español: Formato de Codificación de caracteres Unicode).

```jsx
const data = fs.readFileSync('./test-input-sync.txt', 'utf-8')
console.log(data)
```

Si la ruta comienza con un '' o './' se trata de una ruta relativa, es decir, que el programa se está ejecutando en la carpeta '/user/documents/workspace/proyecto/' y llamamos a alguna función con la ruta: './mi-archivo.txt' o 'mi-archivo.txt', estaremos en realidad leyendo la ruta: `'/user/documents/workspace/proyecto/mi-archivo.txt'`.
Si la ruta, en cambio, comienza con '/' estaremos leyendo exactamente esa ruta.

### Escribir pisando el contenido anterior si existe

Para sobreescribir el contenido de un archivo usaremos la función `writeFileSync(ruta, datos)`. El primer parámetro es un string con la ruta del archivo en el que queremos escribir y el segundo parámetro indica lo que queremos escribir. La función admite un tercer parámetro opcional para indicar el formato de codificación de caracteres con que queremos escribir el texto. Si la función no recibe este tercer parámetro, se usará el formato por defecto, 'utf-8'.

```jsx
fs.writeFileSync('./test-output-sync.txt', 'ESTO ES UNA PRUEBA\n')
```

Si la ruta provista fuera válida, pero el nombre de archivo no existiera, la función creará un nuevo archivo con el nombre provisto.

### Escribir al final del contenido existente

Para agregar contenido a un archivo usaremos la función `appendFileSync(ruta, datos)`

El primer parámetro es un string con la ruta del archivo al que le queremos agregar contenidos, y el segundo parámetro indica lo que queremos agregar. La función admite un tercer parámetro opcional para indicar el formato de codificación de caracteres con que queremos escribir el texto. Si la función no recibe este tercer parámetro, se usará el formato por defecto, 'utf-8'.

```jsx
fs.appendFileSync('./test-output-sync.txt', 'ESTO ES UN AGREGADO\n')
```

Al igual que con la función writeFileSync, si la ruta provista fuera válida, pero el nombre de archivo no existiera, la función creará un nuevo archivo con el nombre provisto.

### Renombrar

Está función, que no devuelve nada, busca el archivo en la primera ruta provista y le asigna la segunda ruta provista.

```jsx
fs.renameSync(rutaVieja, rutaNueva)
```

### Borrar

Está función, que no devuelve nada, elimina al archivo ubicado en la ruta provista.

```jsx
fs.unlinkSync(ruta)
```

### Crear una carpeta

Está función, que no devuelve nada, crea una carpeta vacía en el directorio ubicado en la ruta provista.

```jsx
fs.mkdirSync(ruta)
```

### Leer el contenido de un directorio

Está función devuelve una lista de strings con los nombres de los archivos y carpetas del directorio que se encuentre en la ruta provista.

```jsx
const listaDeNombresDeArchivos = fs.readdirSync(rutaDeLaCarpeta)
```

### 💙 Manejo de errores

Es importante mencionar que todas las funciones que acabamos de describir pueden lanzar excepciones en el caso de encontrarse con algún imprevisto que impida su ejecución. La forma adecuada de manejar estas excepciones será ejecutando el código en cuestión dentro de una cláusula: `try / catch`.

```jsx
try {
	const data = fs.readFileSync(path)
	console.log(data)
} catch (algunError) {
	// manejar el error!!
	console.log(algunError)
}
```

---

# Arrow Functions

Es otra manera de escribir las funciones en javascript, argumento + flecha + contenido de la funcion. Estas dos funciones hacen lo mismo

```jsx
var funcion = value => value (no es necesario poner el return literalmente)

var funcion = function (value) {
  return value; 
}
```

En el caso de que la funcion reciba más de un parámetro

```jsx
var sum = (n1, n2) => n1 + n2;

------------------------

var sum = function (n1,n2) {
  return n1 + n2;
};
```

y en el caso de no recibir ningún argumento

```jsx
var getname = () => ‘hola’;

------------------------

var getname = function () {
  return ‘hola’;
};
```

Con esto podemos declarar la variable directamente con el return de la funcion. también podemos prescindir de la palabra function

```jsx
var sum = (n1, n2) => {
  return n1 + n2;
};

------------------------

var sum = function (n1, n2) {
  return n1 + n2;
};
```

Sí queremos una funcion que no haga nada

```jsx
var nada = () => {};

------------------------

var nada = function(){}
```

Sí queremos devolver un objeto

```html
var objeto = id => ({id : id, nombre : ‘hola’});

------------------------

var objeto = function (id) {
  return {
    id : id,
    nombre : ‘hola’
   };
};
```

---

### **Funciones invocadas inmediatamente**

Esto nos deja crear funciones anonimas y llamarlas sin guardar una referencia de las mismas. Es util cuando queremos armar un patrón aislado del resto del programa

```jsx
let person = ((name) => {
    return {
      getname: function() {
         return name;
      }
    }
})(‘hola’);

console.log(person.getname());

------------------------

let person = function(name){
  return {
   getname : function() {
      return name;
      }
   }
}(‘hola’);

console.log(person.getname());
```

---