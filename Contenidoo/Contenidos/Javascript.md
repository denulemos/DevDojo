
### **Funciones**

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


**Diferencia entre blur y focus**

Focus es cuando uno se para sobre un input, blur es el hecho de salir de ese input. Son dos eventos diferentes. 


### **Extraer valores de objetos**

```jsx
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

const { name, age } = user;
// name = 'John Doe', age = 34
```

Es lo mismo que el anterior, guardo ambas propiedades del objeto User en dos variables name, age, en una sola declaracion de constantes

### **Usar * para importar todo**

```jsx
import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
```

Esto va a crear una variable llamada como el “as” donde van a estar todos los export de la otra clase, puedo acceder a sus metodos y atributos tranquilamente.

Sí quiero solo importar una funcion exportada de otra clase

```jsx
import { add } from './math_functions.js';
```

### **Export**

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

### **Creacion de Constructores**

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

### **Generar una funcion en un objeto**

```jsx
const person = {
  name: "Taylor",
  sayHello: () => {
    return `Hello! My name is ${this.name}.`;
  }
};
```

### **Otra manera de crear un objeto**

```jsx
const createPerson = (name, age, gender) => {
 "use strict";
 return {
  name,
   age,
  gender
 };
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); 
```

Se crea un objeto con un name= “Zodiac Hasbro”, age=56 and gender=”male”

### **Entre JS y un script ASP, ¿Cual es mas rápido?**

JavaScript es más rápido porque es un lenguaje del lado del cliente y no necesita la ayuda del servidor web para ejecutarse. Por otra parte el ASP es un lenguaje del lado del servidor. Motivo por el que siempre es más lento que JavaScript. Sin embargo, Javascript ahora, también puede ser usado como un lenguaje de lado del servidor (server side) (nodejs).

### **Qué es el namespacing de JS? **

Namespacing se utiliza para agrupar funciones, variables, etc con un nombre único.  Esto mejora la modularidad en codificación y permite la reutilización del código.

### **¿Qué es una funcion Declarativa y una Expresiva? **

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

### **Porque no se recomienda usar innerHTML?**

No se recomienda su uso porque es muy lento dado que refresca el contenido cada vez. Es más fácil insertar un código errado en el documento y hacer que la página web sea inestable.

### **Que es la tipificacion de Variables?**

La tipificación de variables, sirve para asignar un número a una variable y después asignar un string a la misma variable.

### **Cómo se pueden crear objetos genéricos?**

```jsx
var myObjeto = new Object({
'nombre': 'Diego',
'apeliido': 'Querales',
'edad': 25,
})
// Salida por consola
{nombre: "Diego", apeliido: "Querales", edad: 25}
```

### **Callback**

Es una funcion que se ejecuta dentro de otra, una funcion que se pasa como parametro a otra.

```javascript
array.sort((a, b) => a - b); 
```

### **Diferencia entre `for in` y `for of`**

- For in toma los indices de los elementos que estan siendo recorridos

```javascript
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```

- For of toma los valores en si

```javascript
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```



### **Stubs**

**Stubs,** *son ciertas funciones que copian el comportamiento de módulos específicos.* Son utilizados en casos de prueba ya que pueden brindar las respuestas necesarias para resolver algunos problemas que pueden surgir dentro de los módulos.


### **Context - Contextos**

Es el valor del `this`, que es una referencia al objeto “dueño” del codigo que esta siendo ejecutado. 

Por ejemplo, `window` es un objeto global al que se puede acceder con this.

### **Void(0)**

Se usa Void(0) para prevenir que la página sea actualizada. También, se usa para llamar a otro método sin que se actualice la página.

### **Truthy and Falsy**

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

#### **Funciones de alto nivel / Higher order Function**

Habían muchas funcionalidades que se estaban repitiendo, entonces JS decidio hacerlas nativas, como iteraciones. Funciones de orden mayor es que reciben como parametro los iterables y un callback, que se ejecutaba en cada elemento iterado.

Hoy en dia todo esto esta abstraído y solo pasamos el callback.

Ejemplos puede ser .map, .filter, .reduce

```javascript
// Función de orden superior que toma una función como argumento
function operacionMatematica(x, y, operacion) {
  return operacion(x, y);
}

// Funciones que serán pasadas como argumentos a la función de orden superior
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

// Uso de la función de orden superior con diferentes funciones como argumentos
console.log(operacionMatematica(5, 3, suma)); // Devuelve 8 (5 + 3)
console.log(operacionMatematica(10, 4, resta)); // Devuelve 6 (10 - 4)
console.log(operacionMatematica(6, 2, multiplicacion)); // Devuelve 12 (6 * 2)
```

### **isNaN vs Math.isNaN**

NaN son operaciones aritmeticas que no pueden ser representadas correctamente. Ambas funciones tienen como objetivo identificar si un valor es NaN. `isNaN` global aplica una coercion de tipos al argumento que le pasamos, `Math.isNan` no lo hace, lo que hace que sea mas seguro de usar para valores no numericos. 

```jsx
isNaN('denu') // devolvera true porque primero intentará convertir la cadena a un numero
Number.isNaN('denu') // false porque no convertirá la cadena a numero
```

### **Diferencia entre foreach, map y reduce**

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
var result = [1,2,3,4].map((item) => { return item * 2; });
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

### **Metodos String**

```javascript

// .includes() Detecta y devuelve true o false si el String posee un substring en el 
const str = 'This is my example string!';
const substr = 'my';

console.log(str.includes(substr)); // true

//.indexOf() es otra forma de saber si un substring se encuentra dentro de un string si el mismo no funciona
stringObj.indexOf("string to check for") // -1 Si no se encuentra

//.replace Reemplaza de un String o un regex un valor por otro, no muta al objeto en si, devuelve lo nuevo
array[0] = array[0].replace("PM", '') // Quita el PM del string dentro de ese array 

```

### **Diferencia entre Map y Weakmap**

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
weakMap.get(obj) // lemon weakmap
weakMap.keys() // ERROR
weakMap.values() // ERROR
```

Weakmap es una caja negra en donde solo se puede acceder a los valores si se tiene la Key. 

Weakmap, ademas, solo admite objetos como clave, estos estan debilmente referenciados por lo que puede ser recolectados por el garbage collector de JS si asi lo considera, destruyendo esa entrada en el Weakmap y liberando memoria.

### **Que es Symbol?**

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

### Cual es la diferencia entre un event loop, microtask y macrotask?

Javascript ejecuta una linea de codigo por vez. **Event Loop** se encarga de gestionar las funciones asincronas.

Funciona con una Call Stack y una Callback Queue. Cuando hay una linea en ejecucion, se agrega al Call Stack, y cuando finaliza, se elimina. La Queue tiene las funciones callback que deben ejecutarse, no debe haber ninguna funcion ejecutandose en la Call Stack ni debe haber otra funcion adelante suyo en la Queue.

Cuando ejecutamos una funcion con setTimeout, la misma se entrega a Timers API, y aunque setTimeout sea cero, habrá un retraso en la ejecucion de esta funcion, haciendo que tenga que esperar en la Queue a que termine de ejecutarse el codigo asincrono. 

![js](src/js1.png)

* macroTasks: [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout), [setInterval](https://developer.mozilla.org/docs/Web/API/WindowTimers/setInterval), [setImmediate](https://developer.mozilla.org/docs/Web/API/Window/setImmediate), [requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame), [I/O](https://developer.mozilla.org/docs/Mozilla/Projects/NSPR/Reference/I_O_Functions), UI rendering
* microTasks: [process.nextTick](https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick/), [Promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise), [queueMicrotask](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask), [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver)

Solo despues de que las task en las microTasks estan completas, event loop tomará las task de macrotasks. Mientras mas microtasks haya, mas delay habra en los macrotasks. Se recomienda usar microtasks cuando se necesitan hacer cosas de forma asincrona, de otra manera, siempre es recomendado usar macrotasks.

En resumen, su funcionamiento en ingles seria:

- *Tasks* are taken from the *Task (MacroTask) Queue*.
- *Task* from the *Task Queue* is a *Macrotask* != a *Microtask*.
- *Microtasks* are processed when the current task ends and the *microtask* queue is cleared before the next *macrotask* cycle.
- *Microtasks* can enqueue other *microtasks*. All are executed before the next task inline.
- UI rendering is run after all microtasks execution (NA for nodejs).

### Prototypes y Herencia Prototype (Prototype Inheritance)

Las funciones y clases tienen una propiedad llamada `Prototype` donde reside la información que es usada para crear los objetos. Todos los miembros del objeto Prototype del constructor seran miembros del objeto una vez instanciado con new.

Los prototypes son un mecanismo por el cual los objetos en JS heredan caracteristicas entre si.

```jsx
class C {
  m1() {}
  m2() {}
}
 
const obj = new C();
console.assert( typeof obj.m1 === 'function' );
console.assert( typeof obj.m2 === 'function' );
```

![js2](src/js2.png)

Otro ejemplo es si creamos un objeto persona:

```jsx
// definimos el objeto persona
function Persona(nombre, apellido, edad, genero, intereses) {

  // definiendo de propiedades y métodos
  this.first = first;
  this.last = last;
//...
}

// lo instanciamos
var person1 = new Persona('Bob', 'Smith', 32, 'hombre', ['music', 'skiing']);
```

Y si queremos ver lo que contiene el objeto, no solo contiene sus atributos si no, otros miembros como valueOf o Watch que estan definidos en el objeto.

![js3](src/js3.png)

Todos los objetos de JS heredan metodos de un Prototype, `Object.prototype` es el eslabon mas alto de la cadena de herencia.

Con prototype podemos agregar nuevos atributos y metodos a un objeto que no se encuentran en su constructor

```jsx
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// Atributos
Person.prototype.nationality = "English";

// Metodos
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```


### Que es la Coercion explicita e Implicita?

Coercion es la forma en la que podemos cambiar de un tipo de valor a otro

- **Coercion explícita:** Obligamos que un valor de un tipo cambie a otro valor de otro tipo

```jsx
//Aquí obligamos a la variable a convertirse en string (coerción explícita)
var c = String(a); 
console.log(c);

//Aquí obligamos a la variable a convertirse en número (coerción explícita)
var d = Number(c); 
console.log(d);
```

- **Coercion Implicita:** El lenguaje cambia el tipo de valor por detrás

```jsx
//Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"
var a = 4 + "7"; 

//Convierte al "7" en un número y realiza la operación, por esto devuelve 28
4 * "7"; 

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b); 
```

### Variable Shadowing - Ocultamiento de Variables

Se produce cuando una variable que esta en un scope mas reducido tiene el mismo nombre que otra que esta en un scope superior siguiendo la cadena

```javascript
function test() {

var variable = "hola";
console.log(variable); 

	function test1() {
		var variable = "denu";
    	console.log(variable); 
	}

  test1(); // denu
}

test(); // hola
```



### Scopes en Javascript

Es el contexto actual de ejecución. 

Cuando hacemos referencia a una variable, javascript busca su definicion en cada entorno, o Scope, esto depende de como (var, const, let) y donde la declaremos (fuera o dentro de una funcion).

```javascript
var variable = "global"; // Variable global, todos pueden acceder a ella

function test() { // Tiene acceso a variable y variable1
    var variable1 = "hola"; // Variable local -hola
}

function test2() { // Tiene acceso a variable y variable1
    var variable1 = "chau"; // Variable local - chau
}
```

Entre scopes hay jerarquia. Primero se busca la variable en el mismo scope local, luego en el scope padre y luego el global.

### Closures

Se tiene un closure cuando una función accede a una variable fuera de su contexto. Una funcion puede acceder y usar valores definidos fuera de su contexto.

```jsx
const valor = 1
function obtenerModulo() {
    let datos = [1,2,3,4,5,6,7,8,9,10,11]
    return datos.filter(item => item % valor === 0) // se usa valor, definido fuera de la funcion
}
```

### Fetch API 

Es una interfaz moderna que permite hacer peticiones HTTP desde el navegador. Es una alternativa a XMLHttpRequest y es más fácil de usar y más potente.

```jsx
fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Otra forma de hacerlo

async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```


### Document.ready vs Window.onload

`Document.ready` se ejecuta despues de cargar todo el HTML. `Window.onload` se ejecuta cuando ya cargo completamente todo el contenido, mas adelante.

### **Qué es un Event listener?**

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

### **Que es la expresion de Funcion Inmediatamente Invocada - Immediately-invoked Function Expression (IIFE)?**

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


### **Qué es una variable global, como se declara y cuales problemas puede tener?**

Se pueden usar en todo el codigo, no tienen alcance. Se declara sin usar `var` en la declaracion

```jsx
miVariableGlobal = 'Hola mundo'
```

Puede dar al choque entre variables locales y globales por nombre. Ademas es dificil limpiar el codigo basado en variables globales


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

---

###  Manejo de errores

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

### Arrow Functions

Es otra manera de escribir las funciones en javascript, argumento + flecha + contenido de la funcion. Estas dos funciones hacen lo mismo

- Podemos prencidir del return si es una funcion de una sola linea
- No se pueden usar arrow function como funciones de constructores

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