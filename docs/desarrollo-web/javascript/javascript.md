---
sidebar_position: 1
---
# 💛 Javascript

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/JSTS.md)

### Metodos de Strings

| Método | Descripción |
|--------|-------------|
| `charAt(index)` | Devuelve el carácter en la posición especificada por `index`. |
| `concat(string1, string2, ...)` | Combina dos o más cadenas y devuelve una nueva cadena. |
| `includes(substring)` | Verifica si la cadena contiene la subcadena especificada. Devuelve `true` o `false`. |
| `indexOf(substring)` | Devuelve el índice de la primera aparición de la subcadena. Si no se encuentra, devuelve `-1`. |
| `lastIndexOf(substring)` | Devuelve el índice de la última aparición de la subcadena. Si no se encuentra, devuelve `-1`. |
| `slice(start, end)` | Extrae una sección de la cadena desde `start` hasta `end` (no incluido) y devuelve una nueva cadena. |
| `split(separator)` | Divide la cadena en un array de subcadenas utilizando el `separator` especificado. |
| `substring(start, end)` | Extrae los caracteres entre `start` y `end` y devuelve una nueva cadena. |
| `toLowerCase()` | Convierte la cadena a minúsculas. | 
| `toUpperCase()` | Convierte la cadena a mayúsculas. |
| `trim()` | Elimina los espacios en blanco al inicio y al final de la cadena. |
| `replace(searchValue, newValue)` | Reemplaza la primera aparición de `searchValue` con `newValue`. |
| `replaceAll(searchValue, newValue)` | Reemplaza todas las apariciones de `searchValue` con `newValue`. |
| `startsWith(substring)` | Verifica si la cadena comienza con la subcadena especificada. Devuelve `true` o `false`. |
| `endsWith(substring)` | Verifica si la cadena termina con la subcadena especificada. Devuelve `true` o `false`. |
| `repeat(count)` | Devuelve una nueva cadena que repite la cadena original `count` veces. |  
| `padStart(targetLength, padString)` | Rellena la cadena al inicio con `padString` hasta alcanzar la longitud `targetLength`. |
| `padEnd(targetLength, padString)` | Rellena la cadena al final con `padString` hasta alcanzar la longitud `targetLength`. | 
| `match(regex)` | Devuelve un array con todas las coincidencias de la expresión regular `regex` en la cadena. |
| `matchAll(regex)` | Devuelve un iterador con todas las coincidencias de la expresión regular `regex` en la cadena. |
| `search(regex)` | Devuelve el índice de la primera coincidencia de la expresión regular `regex` en la cadena. Si no se encuentra, devuelve `-1`. |
| `localeCompare(string)` | Compara la cadena con otra cadena y devuelve un número que indica si la cadena es menor, igual o mayor que la otra. | 
| `valueOf()` | Devuelve el valor primitivo de la cadena. |
| `toString()` | Devuelve la cadena como una cadena de texto. |
| `charCodeAt(index)` | Devuelve el código Unicode del carácter en la posición especificada por `index`. |
| `fromCharCode(code1, code2, ...)` | Devuelve una cadena creada a partir de los códigos Unicode especificados. |
| `fromCodePoint(code1, code2, ...)` | Devuelve una cadena creada a partir de los puntos de código Unicode especificados. |
| `normalize(form)` | Normaliza la cadena según la forma de normalización Unicode especificada (`NFC`, `NFD`, `NFKC`, `NFKD`). |
| `toLocaleLowerCase()` | Convierte la cadena a minúsculas según las reglas de localización. |
| `toLocaleUpperCase()` | Convierte la cadena a mayúsculas según las reglas de localización. |
| `substr(start, length)` | Extrae una sección de la cadena comenzando en `start` y con una longitud de `length`. |
| `search(regex)` | Busca una coincidencia entre la cadena y una expresión regular. Devuelve el índice de la primera coincidencia o `-1` si no se encuentra. |

### Métodos de Objetos

| Método | Descripción |
|--------|-------------|
| `Object.keys(obj)` | Devuelve un array con las claves enumerables de un objeto. |
| `Object.values(obj)` | Devuelve un array con los valores de las claves enumerables de un objeto. |
| `Object.entries(obj)` | Devuelve un array de pares [clave, valor] de un objeto. |
| `Object.assign(target, ...sources)` | Copia las propiedades de uno o más objetos fuente al objeto destino. |
| `Object.freeze(obj)` | Congela un objeto, impidiendo que se modifiquen sus propiedades. |
| `Object.seal(obj)` | Sella un objeto, impidiendo que se agreguen o eliminen propiedades, pero permitiendo modificaciones en las existentes. |
| `Object.getPrototypeOf(obj)` | Devuelve el prototipo de un objeto. |
| `Object.setPrototypeOf(obj, prototype)` | Establece el prototipo de un objeto. |
| `Object.create(proto, propertiesObject)` | Crea un nuevo objeto con el prototipo y las propiedades especificadas. |
| `Object.defineProperty(obj, prop, descriptor)` | Define una nueva propiedad o modifica una existente en un objeto. |
| `Object.defineProperties(obj, props)` | Define múltiples propiedades en un objeto. |
| `Object.is(value1, value2)` | Determina si dos valores son el mismo valor. |
| `Object.isExtensible(obj)` | Determina si un objeto es extensible (se le pueden agregar nuevas propiedades). |
| `Object.preventExtensions(obj)` | Previene que se agreguen nuevas propiedades a un objeto. |
| `Object.isFrozen(obj)` | Determina si un objeto está congelado. |
| `Object.isSealed(obj)` | Determina si un objeto está sellado. |
| `Object.getOwnPropertyDescriptor(obj, prop)` | Devuelve el descriptor de una propiedad específica de un objeto. |
| `Object.getOwnPropertyNames(obj)` | Devuelve un array con los nombres de todas las propiedades (enumerables y no enumerables) de un objeto. |
| `Object.getOwnPropertySymbols(obj)` | Devuelve un array con los símbolos de las propiedades de un objeto. |
| `Object.hasOwn(obj, prop)` | Determina si un objeto tiene la propiedad especificada como propiedad propia (no heredada). |
| `Object.fromEntries(iterable)` | Convierte una lista de pares clave-valor en un objeto. |

### Se pueden comparar dos Objetos con `===` ?

No, en JavaScript, dos objetos no son iguales a menos que sean la misma referencia en memoria. Incluso si dos objetos tienen las mismas propiedades y valores, se consideran diferentes si no son la misma instancia.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true
```

La forma de compararlos serialmente es convertirlos a JSON:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
```

O usando lodash, `_.isEqual(obj1, obj2)`.

---

### Namespacing

Namespacing se utiliza para agrupar funciones, variables, etc con un nombre único.  Esto mejora la modularidad en codificación y permite la reutilización del código.

```javascript
var myNamespace = {
  myFunction: function() {
    console.log('Hello, World!');
  },
  myVariable: 'Hello, World!'
};

myNamespace.myFunction(); // Hello, World!

console.log(myNamespace.myVariable); // Hello, World!
```

---

### `setTimeout()` vs `setInterval()`


- `SetTimeout` nos permite ejecutar una funcion una vez despues del intervalo de tiempo

```jsx
*setTimeout(sayHi, 1000, "Hola", "John");*
```

- `SetInterval` nos permite ejecutar una funcion repetidamente. Esperando el intervalo, ejecutando y asi sucesivamente.

```jsx
let timerId = setInterval(() => alert('tick'), 2000);

// después de 5 segundos parar
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

---

### `let`, `var` y `const`

La diferencia es el alcance de cada uno.

- **var:** Es viable dentro de una funcion, incluso si es declarada dentro de un if o loop, es valida afuera, y es global si esta fuera de una funcion. Se puede reasignar y redeclarar.

```javascript
function ejemplo() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (aunque x se declaró dentro del bloque if)
}
```

- **let:** Es la manera de declarar variables en ES6. Es local en un bloque.
- **const:** Es la manera de declarar constantes en ES6. Es local en un bloque.

```jsx

var saludar = "hey, hola";
var saludar = "dice Hola tambien";
    saludar = "dice Hola tambien";


let camper = 'James';
let camper = 'David'; // throws an error
let saludar = "dice Hola";
    saludar = "dice Hola tambien";
let saludar = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared
```

Sí pongo un “use Strict” en la parte alta del codigo, la consola me va a tirar error cuando trate de codear algo de manera “insegura” o poco practica.

```jsx
"use strict";
x = 3.14; // throws an error because x is not declared
```

Cuando declaras una variable con **var,** es declarada de manera global, o local sí esta adentro de una funcion.

- Pueden ser modificadas y re-declaradas dentro de su ambito.
- Puede ser declarada sin ser inicializada, se inicializa con undefined por defecto.
- Puede ser declarada global o dentro de una funcion.

En cambio con **let,** sí declaro la funcion dentro de un block, statement o expresion, se va a declarar solo dentro de estas y no globalmente.

- No puede ser re-declarado pero si modificado.
- Puede ser declarada sin ser inicializada, se inicializa con undefined por defecto.
- Funciona a nivel bloque.

```jsx
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i); // 3

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 2
console.log(i); // i no esta definido
```

También se puede declarar usando la palabra **const**, que es una constante. Se declara y no puede ser cambiada en su valor, solo sirve de lectura.

```jsx
"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // error: Assignment to constant variable.
```

Se recomienda poner el nombre de las constantes en mayúscula.

```jsx
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // error asignando a una constante
s[2] = 45; // funciona
console.log(s); //  [5, 6, 45]
```

Los array sí pueden ser modificados en sí mismos, lo que no se puede es apuntar a otro array distinto.

```jsx
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // s = [2, 5, 7]; // error asignando a una constante
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```

---

### Generics

Podes crear objetos genéricos en JavaScript usando funciones constructoras, la sintaxis de objetos literales o clases. Por ejemplo, usando un objeto literal:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};
```

O usando una función constructora para crear varios objetos similares:

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log("Hola, soy " + this.nombre);
  };
}

const persona1 = new Persona("Ana", 25);
persona1.saludar(); // Hola, soy Ana
```

También podes usar la sintaxis de clases (ES6):

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona2 = new Persona("Luis", 40);
persona2.saludar(); // Hola, soy Luis
```

---

### `Document.ready` vs `Window.onload`

`Document.ready` se ejecuta despues de cargar todo el HTML. `Window.onload` se ejecuta cuando ya cargo completamente todo el contenido, mas adelante.

---

### Scope

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

---

### Currying


Es una tecnica de programacion funcional donde meto una funcion dentro de otra, y todas estas reciben solo un parametro a la vez. 

```typescript
function multiply(a: number): (b: number) => number {
    return function(b: number): number {
        return a * b;
    };
}

// Uso de la función curried
const multiplyByTwo = multiply(2);
const result = multiplyByTwo(3);  // result será 6
console.log(result);
```

En este ejemplo, multiply es una función que toma el primer número, a, y devuelve otra función que toma el segundo número, b. La función devuelta realiza la multiplicación de a y b.

Al dividir todo en pequenias funciones, hace que la reutilizacion de codigo sea mucho mejor. 

---

### Web y Service Workers

Como se menciono anteriormente, Javascript es single-thread, y esto puede ser un problema cuando se trata de operaciones pesadas o que se deben realizar en segundo plano. Para esto se crearon los Service Workers, que son scripts que se ejecutan en segundo plano y que permiten realizar operaciones como notificaciones push, actualizaciones de contenido, y manejo de cache. Es especialmente util tambien cuando quiero que mi app tenga cierta funcionalidad offline.

Los Service Workers son eventos que se ejecutan en segundo plano y que no tienen acceso al DOM, pero si pueden comunicarse con la pagina principal mediante mensajes.

```javascript
// service-worker.js
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
```

```javascript
// main.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service Worker registrado'))
        .catch(error => console.error('Error al registrar el Service Worker', error));
}
```

---

### `isNaN` vs `Math.isNaN`

NaN son operaciones aritmeticas que no pueden ser representadas correctamente. Ambas funciones tienen como objetivo identificar si un valor es NaN. `isNaN` global aplica una coercion de tipos al argumento que le pasamos, `Math.isNan` no lo hace, lo que hace que sea mas seguro de usar para valores no numericos.

```jsx
isNaN('denu') // devolvera true porque primero intentará convertir la cadena a un numero
Number.isNaN('denu') // false porque no convertirá la cadena a numero
```

---

### `class` vs `function`

class tiene un alcance comprendido por llaves, al igual que las variables let. function es local a la funcion donde fue definida, no podemos usar una clase o funcion constructora por fuera del alcance en donde se encuentra.

```jsx
// Class
{
  class C {
  }
}

// Function
function x () {
  function C () {
  }
}

// uso de ambas
try {
  const obj = new C();
  console.assert( false );
} catch (err) {
  console.assert(
    err.message === 'C is not defined'
  );
}
```

Ambas pueden ser definidas de forma anonima. Sus referencias funcionan igual que con object, no se envia una copia, si no una referencia de la misma.

```jsx
const C = class {};
const C = function () {};

console.assert( typeof  C === 'function' );
```

---

### Truthy and Falsy

En JavaScript, un valor se considera "falsy" si se convierte en `false` cuando se evalúa en un contexto booleano.

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

---

### Hoisting


Es un mecanismo de JS en el que las variables y declaraciones de funciones se mueven a la parte superior de su ambito antes de la ejecucion del codigo.

```jsx
console.log (saludar);
    var saludar = "dice hola"

// es decir

var saludar;
    console.log(saludar); // saludar is undefined
    saludar = "dice hola"
```

Es el usar las variables antes de que sean declaradas.

---

### Primitivo vs Objeto

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

Caso **objetos** ( Como puedo clonar un objeto ?)

```jsx
let animal = {
  nombre: 'perro'
}

let mascota = animal
animal.especie = 'gato'
console.log(mascota.nombre) // gato, se copio referencia no valor

---

let object = {a: 1, b:2};
let referencia = object; // Esto es solo una referencia

let clone = {...object}; // Esto si es un clon
let clone2 = Object.assign({}, object);// Esto si es un clon

clone.foo = "foo";
clone2.foo = "denu";

console.log(object);// { a: 1, b: 2 }
console.log(referencia); // { a: 1, b: 2 }
console.log(clone); // { a: 1, b: 2, foo: 'foo' }
```

---

### Declarativa vs Expresiva


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

---

### Event Loop

El Event Loop es un bucle que se encarga de manejar los eventos y las operaciones asincronas en Javascript.

- **Call Stack**: Es donde se guardan las operaciones sincronas, y se ejecutan en orden de llegada.
- **Web API**: Es donde se guardan las operaciones asincronas, como `setTimeout`, `fetch`, `addEventListener`, etc.
- **Callback Queue**: Es donde se guardan las operaciones que se deben ejecutar una vez que el Call Stack este vacio, como los Callbacks.
- **Event Loop**: Es el encargado de chequear el Call Stack y el Callback Queue, y si el Call Stack esta vacio, toma la primera operacion de la Callback Queue y la pone en el Call Stack.
- **Microtask Queue**: Es donde se guardan las Promises, y tiene prioridad sobre el Callback Queue.

```javascript
console.log('Inicio');

setTimeout(() => console.log('Timeout'), 0);

console.log('Fin');
```

En este caso, el `setTimeout` se va a ejecutar una vez que el Call Stack este vacio, por lo que el orden de ejecucion va a ser `Inicio`, `Fin`, `Timeout`.
En el caso de las Promises, estas se ejecutan en el Microtask Queue, que tiene prioridad sobre el Callback Queue.

```javascript
console.log('Inicio');

Promise.resolve().then(() => console.log('Promise'));

console.log('Fin');
```

En este caso, el orden de ejecucion va a ser `Inicio`, `Fin`, `Promise`, ya que las Promises se ejecutan en el Microtask Queue.

En el caso de los Callbacks, estos se ejecutan en el Callback Queue, y se ejecutan una vez que el Call Stack este vacio.

```javascript
console.log('Inicio');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('Fin');
```

Y en el caso de async-await se ejecutan en el Microtask Queue, por lo que tienen prioridad sobre los Callbacks.

```javascript
console.log('Inicio');

(async () => {
    await Promise.resolve();
    console.log('Async');
})();

console.log('Fin');
```

---

### `setTimeout`

`setTimeout` es una funcion que permite ejecutar una funcion o un bloque de codigo despues de un tiempo determinado. Se utiliza para programar la ejecucion de una tarea en el futuro.

```jsx
console.log('Inicio');

setTimeout(function() {
  console.log('Esto se ejecuta despues de 2 segundos');
}, 2000);

console.log('Fin');
```

En este ejemplo, la funcion dentro de `setTimeout` se ejecutara despues de 2 segundos, mientras que el resto del codigo continuara ejecutandose sin esperar.

---

### `Map` vs `Weakmap`


Son casi iguales, son la clasica estructura de datos de diccionario, su diferencia es que se puede acceder a los clave-valores de un Map usando .values o .keys, en un Weakmap no se puede hacer eso.

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

---

### `for in` vs `for of`


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

---

### `forEach`, `map` y `reduce`

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

---

### Rest Operator

Se pueden crear funciones que pueden tomar una variable cantidad de argumentos, y estos pueden ser accedidos luego por estar guardados en un Array de dentro de la misma funcion

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

---

### Template Literals

Con **template literals**:

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

### `export default` - Módulos ES6

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

### `import` vs `require`

- `Require`: Se usa para importar las funciones y el codigo en un archivo externo. Esto posee un problema, el cual es que este codigo puede ser muy largo y solo necesito una parte del codigo.
- `Import`: Herramienta de ES6 para importar solo los componentes que necesitamos de un archivo.

```jsx
import { countItems } from "math_array_functions"
```

### `Object.freeze` - Inmutabilidad

Con `Object.freeze` se puede hacer que un objeto sea inmutable. Es una funcion que evita que puedas modificar propiedades de un objeto o una variable

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

### Destructuración


La destructuración es una expresión de JavaScript que permite desempaquetar valores de arreglos o propiedades de objetos en distintas variables.

```jsx
const person = {
  name: "denu",
  age: 25
};

const {name, age} = person;
console.log(name, age); // denu 25
```

Esto no ahorra tener que crear dos variables distintas en dos lineas distintas y asignarlas de manera independiente.

---

### Spread Operator vs Rest Operator

El Spread Operator (...) y el Rest Operator (...) tienen la misma sintaxis, pero se usan en contextos diferentes y tienen propósitos distintos. Aquí te explico sus diferencias y cómo se usan:

**Spread Operator**

- Propósito: Se utiliza para "expandir" o desempaquetar elementos de un objeto o arreglo en otro objeto o arreglo.
- Contexto de uso: Generalmente se usa en situaciones donde necesitas copiar o combinar elementos de un arreglo o propiedades de un objeto.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

Aquí, el Spread Operator se usa para desempaquetar todos los elementos de arr1 y luego agregar los nuevos elementos 4 y 5 en el arreglo arr2.

```jsx
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

El Spread Operator se usa para copiar todas las propiedades de obj1 y agregar una nueva propiedad c en obj2.

**Rest Operator**

- Propósito: Se usa para agrupar o recoger varios elementos (en un arreglo o un objeto) en una sola variable, generalmente en una función o al desestructurar un arreglo u objeto.
- Contexto de uso: Se usa cuando quieres capturar múltiples elementos o propiedades y almacenarlos en un solo arreglo u objeto.

Ejemplo, recibir indefinida cantidad de parametros en una funcion

```jsx
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

Y para destructurar un array

```jsx
const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]
```

**Resumen de Diferencias:**

| **Aspecto**            | **Spread Operator (`...`)**                                      | **Rest Operator (`...`)**                                             |
|------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------|
| **Propósito**           | Expande un arreglo o un objeto en elementos individuales.        | Recoge elementos en un arreglo o un objeto.                           |
| **Contexto de uso**     | Al crear nuevos arreglos u objetos, o al pasar elementos.       | Al desestructurar datos o en funciones para agrupar argumentos.       |
| **Uso en arreglos**     | Copiar, combinar o expandir elementos de un arreglo.             | Recoger el resto de los elementos que no se han asignado.            |
| **Uso en objetos**      | Copiar, combinar o expandir propiedades de un objeto.            | Recoger el resto de las propiedades no desestructuradas.             |
| **Ejemplo en arreglos** | `const arr2 = [...arr1, 4, 5];`                                  | `const [first, ...rest] = arr;`                                       |
| **Ejemplo en objetos**  | `const obj2 = {...obj1, c: 3};`                                  | `const { name, ...rest } = obj;`                                      |

Ambos usan la misma sintaxis (`...`), pero el **contexto** es lo que determina si se trata de un **Spread** o un **Rest**.

### `.sort()`

Esta funcion modifica al array original.

```javascript
array.sort*([compareFunction])
```

Es la funcion que se utiliza para ordenar elementos de un array. En casos de numeros no compuestos (es decir de un solo digito) funciona bien en su forma sin parametros extra:

```javascript

const numeros = [3, 1, 2];

// Ordena los elementos de menor a mayor
numeros.sort();
```

Pero en caso de numeros o palabras compuestas, la funcion en si misma realiza un Orden lexicográfico, no numérico, entonces el funcionamiento debe ser llevado a cabo de otra forma:

```javascript
const numeros = [10, 20, 1, 2];

// Ordena los elementos de menor a mayor
numeros.sort((a, b) => a - b);

// Cuando esa resta sea negativa, a va antes que b, si es positiva, b va antes que a

// En el caso de palabras
const palabras = ["manzana", "banana", "cereza"];

// Ordena los elementos alfabéticamente
palabras.sort((a, b) => a.localeCompare(b));
```

a - b devuelve:

- Un número negativo si a < b (debe aparecer antes).
- Un número positivo si a > b (debe aparecer después).
- 0 si son iguales.

En caso de una ordenacion de arrays donde pueden encontrarse elementos `null` o `undefined`, se puede utilizar la siguiente funcion:

```javascript
const numeros = [10, 20, 1, 2, null, undefined];

numeros.sort((a, b) => {
  if (a == null) {
    return 1;
  }
  if (b == undefined) {
    return -1;
  }
  return a - b;
});
```

Esto lo que hace es enviar a los elementos `null` al final del array, y a los `undefined` al principio. Si este caso de uso no se tiene en cuenta, la funcion `sort` devolvera `undefined` en caso de encontrar un elemento `null` o `undefined`.

### `.map()`

Es una funcion que no modifica el array original, sino que devuelve un nuevo array con los elementos modificados.

```javascript
array.map(callback(element, index, array), thisArg)
```

Esta funcion ejecuta la funcion callback que se le envia como parametro en cada elemento del array

```javascript
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map(num => num * 2);

console.log(duplicados); // [2, 4, 6, 8]
console.log(numeros);    // [1, 2, 3, 4] (el array original no se modifica)
```

Hay que estar atento a que la funcion de callback devuelva algo, de lo contrario, el array resultante tendra elementos `undefined`.

`map()` puede ser encadenado con otros metodos como `filter()` o `reduce()`

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const paresDuplicados = numeros
  .filter(num => num % 2 === 0) // Filtrar números pares
  .map(num => num * 2);         // Multiplicarlos por 2

console.log(paresDuplicados); // [4, 8, 12]
```

La diferencia entre el uso de `map()` y un recorrido `forEach` es que `map` devuelve un array nuevo, mientras que `forEach` no devuelve nada, solo itera.

### `.filter()`

Es un metodo que tambien devuelve un nuevo array, pero con los elementos que cumplan con la condicion que se le pasa como parametro.

```javascript
array.filter(callback(element, index, array), thisArg)
```

Por ejemplo, si quiero filtrar los elementos pares de un array:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros.filter(numero => numero % 2 === 0);

console.log(resultado); // [2, 4, 6]
```

Lo que se debe tener en cuenta en la funcion callback dentro del `filter` es que debe devolver un valor booleano, que si es `true` incluye al elemento en el nuevo array, y viceversa, de lo contrario obtendremos un array vacio como resultado.

### `.reduce()`

Generalmente se utiliza para sumarizar de alguna forma los elementos de un array, ya sea sumandolos, concatenandolos, etc.

```javascript
array.reduce(reducerFunction(accumulator, currentValue, currentIndex, originalArray), initialValue)
```

`initialValue` en el caso de las funciones de sumatoria en general es 0, pero puede ser cualquier valor que se desee.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value is 0

console.log(sum); // Output: 15
```

---

### Set vs Map

Los 3 son colecciones pero tienen caracteristicas distintas entre si.

`Set` no permite valores repetidos, y no es de tipo clave-valor. Sus metodos son:

```javascript
const set = new Set();
```

- `add(value)`: Agrega un valor al set
- `delete(value)`: Elimina un valor del set
- `has(value)`: Devuelve `true` si el valor existe en el set, `false` en caso contrario
- `clear()`: Elimina todos los valores del set
- `size`: Devuelve la cantidad de valores en el set

En cambio `Map` es un mapa de clave-valor que permite valores repetidos pero no kjey repetidos. Sus metodos son:

```javascript
const map = new Map();
```

- `set(key, value)`: Agrega un par clave-valor al mapa
- `get(key)`: Devuelve el valor asociado a la clave
- `delete(key)`: Elimina un par clave-valor del mapa
- `has(key)`: Devuelve `true` si la clave existe en el mapa, `false` en caso contrario
- `clear()`: Elimina todos los pares clave-valor del mapa
- `size`: Devuelve la cantidad de pares clave-valor en el mapa

`WeakMap` es un tipo de `Map` que no permite claves de tipo primitivo, solo objetos. No tiene metodos para iterar sobre sus elementos, ni tampoco tiene el metodo `size`. Es útil en situaciones donde se necesita asociar datos adicionales a un objeto sin interferir con la recolección de basura del objeto. Por ejemplo, en la gestión de metadatos de objetos que son creados y destruidos dinámicamente, o para mantener información privada de instancias en bibliotecas y frameworks sin exponer esos datos en las propias instancias.

```javascript
let weakMap = new WeakMap();
let obj = {};

// Añadir datos al WeakMap
weakMap.set(obj, { key: "value" });

console.log(weakMap.get(obj)); // Output: { key: "value" }

// Verificar si una clave existe
console.log(weakMap.has(obj)); // Output: true

// Eliminar una entrada
weakMap.delete(obj);
console.log(weakMap.has(obj)); // Output: false

// El objeto obj ya no tiene otras referencias, puede ser recolectado por el recolector de basura
obj = null; // Ahora weakMap está vacío
```

En resumen, WeakMap proporciona una forma segura de memoria para asociar datos a objetos mientras permite que esos objetos sean recolectados por el recolector de basura cuando ya no son necesarios, ayudando a prevenir problemas de memoria en aplicaciones grandes y complejas.

Tambien existe el `WeakSet` que es similar al `WeakMap` pero solo acepta objetos y no tiene metodos para iterar sobre sus elementos. Mismo caso que este, es util para asociar datos a objetos sin interferir con la recoleccion de basura.

```javascript
let weakSet = new WeakSet();

let obj = {};
let obj2 = {};

// Añadir objetos al WeakSet
weakSet.add(obj);
weakSet.add(obj2);

console.log(weakSet.has(obj)); // Output: true
console.log(weakSet.has(obj2)); // Output: true

// Eliminar un objeto
weakSet.delete(obj);
console.log(weakSet.has(obj)); // Output: false
```

Ninguno de los `weak` es enumerable, es decir, no se pueden iterar sobre ellos.

---

### Parametros por valor y por referencia

En Javascript podemos pasar como parametro valores que pueden ser por valor en si mismo o por referencia, es decir, pasamos el puntero de memoria que apunta a la direccion de memoria donde se encuentra el valor.

**Parametros por valor**

Esto se hace usualmente con elementos tipo `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
Si tenemos el valor en una variable, debemos realizar la re-asignacion para cambiar el valor del mismo.

```javascript
let a = 1;

// Aca estamos modificando el valor de a
function modificarValor(a) {
  a = 2;
}

// Si bien estamos modificando el 1 por 2, el valor de a sigue siendo 1
function noModificarValor(a) {
  a++;
}
```

En cambio en el caso de variables del tipo objeto, arrays, entre otros, estos son pasados por referencia, por lo que si modificamos el valor de un objeto o array, este se vera reflejado en la variable original.

```javascript
let obj = { a: 1 };

// Aca estamos modificando el valor de a, ya que no llega el valor de objeto, si no el puntero de memoria
function modificarValor(obj) {
  obj.a = 2;
}

let array = [1, 2, 3];

// Aca estamos modificando el valor de la posicion 0
function modificarArray(array) {
  array[0] = 2;
}
```

---

### Prototype

`Prototype` permite que objetos y funciones en Javascript compartan propiedades y metodos entre si.

Todos los objetos en JS tienen una propiedad interna llamada `[[Prototype]]` al que se accede con `__proto__` o configurarla con `Object.create()`.
Las funciones al ser tambien objetos en JS tienen una propiedad tambien llamada `prototype`

```javascript
const animal = {
  hacerSonido: function () {
    console.log("El animal hace un sonido");
  },
};

const perro = {
  nombre: "Firulais",
};

// Vinculamos el prototipo de "perro" al objeto "animal"
Object.setPrototypeOf(perro, animal);

// Ahora "perro" puede usar el método de "animal"
perro.hacerSonido(); // El animal hace un sonido
```

`hacerSonido` no esta definido en `perro`, pero lo JS lo busco en su prototipo `animal`

```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

// Agregamos un método al prototipo de Persona
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre}`);
};

// Creamos una nueva instancia de Persona
const juan = new Persona("Juan");

// Llamamos al método saludar
juan.saludar(); // Hola, me llamo Juan
```

Hay algo llamado `prototype chain`, que es una cadena de prototipos que se va formando cuando se busca una propiedad o metodo en un objeto. Si no se encuentra en el objeto, JS busca en el prototipo, y si no se encuentra ahi, busca en el prototipo del prototipo, y asi sucesivamente. Al final, si no hay resultados, se devuelve `undefined`.

Todos los objetos de JS heredan metodos de un Prototype, `Object.prototype` es el eslabon mas alto de la cadena de herencia.

```javascript
const arr = [1, 2, 3];

// Los métodos como `push` están en el prototipo de Array
console.log(arr.__proto__ === Array.prototype); // true

// El prototipo de Array.prototype es Object.prototype
console.log(Array.prototype.__proto__ === Object.prototype); // true

// El final de la cadena de prototipos es null
console.log(Object.prototype.__proto__); // null
```

En resumen, prototype es la base del funcionamiento de objetos y de la herencia en JS.

---

### `array-like`

Es un tipo de dato similar a un Array pero que no posee todas las funciones heredadas de Prototype de un Array.

Un array-like es un objeto que tiene propiedades indexadas y una propiedad length. Aunque no es un array, se comporta como tal. Por ejemplo, el objeto arguments es un array-like.

```javascript
// Definición de un objeto "array-like"
var arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3 // La propiedad length es importante para que se comporte como un array
};

// Acceder a elementos
console.log(arrayLike[0]); // Imprime: 'a'
console.log(arrayLike[1]); // Imprime: 'b'

// Iteración sobre el objeto "array-like"
for (var i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}
// Imprime:
// 'a'
// 'b'
// 'c'
```

Es un objeto, no es un array. Para pasar su valor a un array, debo usar el spread operator

```javascript
var array = [...arrayLike];
console.log(array); // Imprime: ['a', 'b', 'c']
```

---

### Arrays

```jsx
// Agrega al final
[1,2,3].push(4) // [1,2,3,4]

// Quita y devuelve el último elemento
[1,2,3].pop() // [1,2]

// Quita y devuelve el primer elemento
[1,2,3].shift() // [2,3]

// Agrega al principio
[1,2,3].unshift(0) // [0,1,2,3]

//  Combina dos o más arreglos y devuelve un nuevo arreglo - los CONCATENA
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

// Devuelve un array donde cada elemento del array tiene en el medio
// el valor pasado como argumento
['a', 'b'].join('-') // a-b

// Devuelve una copia superficial de una porción del arreglo en un nuevo arreglo seleccionando los elementos desde el inicio hasta el final (o hasta un índice especificado).
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 4); // Copia desde el índice 1 hasta el índice 3 [2, 3, 4]

// Devuelve el index del elemento, si no lo encuentra, devuelve -1
['a', 'b'].indexOf('b') // 1

// Devuelve si el elemento existe en el array
['a', 'b'].includes('b') // true

// Devuelve el primer elemento que cumple con la condición
[3,5,6,8].find((valorActual) => valorActual % 2 === 0) // 6

// Devuelve el index del primer elemento que cumple con la condición
[2,4,3,5].findIndex((valorActual) => valorActual % 2 !== 0) // 2

// Devuelve un nuevo array con los elementos modificados, en este caso los multiplica por 2. Devuelve un nuevo array, no muta el array modificado
const array = [3,4,8,6].map((n) => n * 2) // [6,8,16,12]

// Devuelve un nuevo array con los elementos que cumplan con la condición
// Si el valorActual cumple con la condicion, queda en el array, de lo contrario, se quita
[1,4,7,8].filter((valorActual) => valorActual % 2 === 0) // [4,8]

// Devuelve un solo valor, en este caso la suma de los elementos
[2,4,3,7].reduce((accumulator, currentValue) => accumulator + currentValue) // 16

// El accomulator puede ser inicializado de antemano, si no, se toma como valor inicial el primer elemento del array
[2,4,3,7].reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// Devuelve true si todos los elementos cumplen con la condicion
[2,3,4,5].every((valorActual) => valorActual < 6) // true

// Devuelve true si algunos de los elementos cumplen con la condicion
[3,5,6,8].some((valorActual) => valorActual > 6) // true

// Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b"); // Elimina 1 elemento desde el índice 2 y agrega "a" y "b" [1, 2, "a", "b", 4, 5]
splice(indice, cantidad elementos a eliminar, agrego, agrego);

// Da vuelta el Array
[1,2,3,4].reverse() // [4,3,2,1]

// Devuelve, si es positivo, el elemento en el lugar 2 (0,1,2), caso negativo, contando desde el final.
[5, 12, 8, 130, 44].at(-2) // 130
[5, 12, 8, 130, 44].at(2) // 8

// Recorre el array
[1,2,3].forEach(x => console.log(x))

// Conviene valores a un array
"hola".split() => ['h','o','l','a'];
//Se puede separar la palabra dependiendo de un regex
"hola, denu".split(/,\s*/g) => ['hola', 'denu'];

```

---

### `event.preventDefault()`

Los botones de los form en HTML por defecto hacen un submit, lo que puede llevar a que se recargue la pagina. Para evitar esto, se usa `event.preventDefault()` para evitar que se ejecute el comportamiento por defecto del evento.

Por ejemplo, si quiero que al hacer click en un boton no se recargue la pagina, puedo hacer lo siguiente:

```jsx
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();
});
```

U otro ejemplo es para evitar que el resto de eventos que se ejecutarian por defecto, no lo hagan

---

### Set vs Array

| Set | Array |
| --- | ----- |
| Almacena valores únicos | Almacena valores duplicados |
| No tiene índices | Tiene índices |
| No tiene métodos como `push(), pop(), shift(), unshift()` | Tiene métodos como `push()`, `pop()`, `shift()`, `unshift()` |
| No tiene métodos como `map(), filter(), reduce()` | Tiene métodos como `map(), filter(), reduce()` |
| No tiene métodos como `sort(), reverse()` | Tiene métodos como `sort(), reverse()` |
| No tiene métodos como `find(), findIndex(), every(), some()` | Tiene métodos como `find(), findIndex(), every(), some()` |
| No tiene métodos como `splice(), slice()` | Tiene métodos como `splice(), slice()` |
| No tiene métodos como `join(), concat()` | Tiene métodos como `join(), concat()` |

---

## **Async Operations**

### Promises

Las promises son una buena forma de manejar operaciones asincronicas. Puede tener 3 estados, `Pending`, `Fulfilled` y `Rejected`. Son utiles cuando hay que manejar mas de una operacion asincronica una despues de la otra, para eso se puede usar **Promise Chaining** usando then() y catch() para el manejo de cada una.

Se pueden implementar por ejemplo, en un Lazy loading.

```jsx
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'));
});
```

---

### `Promise.all`

Promise.all es una funcion que recibe un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas del array se han resuelto o cuando el array de promesas esta vacio.

```jsx
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
```

Se utiliza cuando se necesita esperar a que todas las promesas se resuelvan para continuar con el codigo.

---

### ¿Cómo se maneja un error en una promesa?

Para manejar un error en una promesa se usa el metodo `catch()`

```jsx
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

myPromise.then((resolvedValue) => {
  console.log(resolvedValue);
}).catch((error) => {
  console.log(error);
});
```

---

### `Promise.allSettled`

Devuelve una promesa que se resuelve después de que todas las promesas del iterable se hayan resuelto o rechazado, con un array de objetos que describen el resultado de cada promesa.

```jsx
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status))); // "fulfilled", "rejected"
```

### `Promise.race`

Devuelve una promesa que se resuelve o rechaza tan pronto como una de las promesas del iterable se resuelve o se rechaza, con el valor o la razón de esa promesa.

```jsx
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```

---

### `Promise.any`

Devuelve una promesa que se resuelve tan pronto como una de las promesas del iterable se resuelve, con el valor de esa promesa.

```jsx
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.any([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```

La diferencia entre `any` y `race` es que `any` se resuelve con el primer valor resuelto, mientras que `race` se resuelve con el primer valor resuelto o rechazado, `any` ignora cualquier valor rechazado, a menos que todas las promises hayan tenido el mismo resultado de rechazo.

---

### Async Await

Es una forma de escribir promises de manera mas limpia. Se usa para escribir codigo asincronico de manera sincronica. Se usa con la palabra `async` antes de la funcion y `await` antes de la promesa.

```jsx
async function myAsyncFunction() {
  try {
    const value = await promise;
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}
```

Tambien se puede usar con `fetch` para hacer peticiones a una API

```jsx
async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.error(error);
  }
}
```

---

### Callbacks

Es una funcion que se pasa como argumento a otra funcion y se invoca dentro de la funcion externa para completar alguna accion. Se usa para manejar operaciones asincronicas.

```jsx
function doSomethingAsync(callback) {
  setTimeout(function() {
    callback('First data');
  }, 1000);
}

function doOtherThingAsync(callback) {
  setTimeout(function() {
    callback('Second data');
  }, 1000);
}

function doAll() {
  try {
    doSomethingAsync(function(data) {
      var processedData = data.split('');
      try {
        doOtherThingAsync(function(data2) {
          var processedData2 = data2.split('');
          try {
            setTimeout(function() {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            // handle error
          }
        });
      } catch (err) {
        // handle error
      }
    });
  } catch (err) {
    // handle error
  }
}

doAll();
```

---

### Callback Hell

Es un termino que se usa para describir un codigo que se vuelve dificil de leer y mantener por el anidamiento excesivo de callbacks. Se puede evitar con Promises, Async Await o Modularizando el codigo.

```jsx
doSomething(function(result) {
  doSomething(result, function(newResult) {
    doSomething(newResult, function(finalResult) {
      console.log(finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

---

### Promises, Callbacks y Async-await

- **Callbacks:** Es una funcion que se pasa como argumento a otra funcion y se invoca dentro de la funcion externa para completar alguna accion. Se usa para manejar operaciones asincronicas.
- **Promises:** Son una buena forma de manejar operaciones asincronicas. Puede tener 3 estados, `Pending`, `Fulfilled` y `Rejected`. Son utiles cuando hay que manejar mas de una operacion asincronica una despues de la otra, para eso se puede usar **Promise Chaining** usando then() y catch() para el manejo de cada una.
- **Async Await:** Es una forma de escribir promises de manera mas limpia. Se usa para escribir codigo asincronico de manera sincronica. Se usa con la palabra `async` antes de la funcion y `await` antes de la promesa.

Sus ventajas son:

- **Callbacks:** Son simples y faciles de entender.
- **Promises:** Son mas faciles de leer y entender que los callbacks.
- **Async Await:** Es la forma mas limpia de escribir codigo asincronico.

Y sus desventajas son:

- **Callbacks:** Puede llevar a un Callback Hell.
- **Promises:** Puede ser complicado de entender.
- **Async Await:** No maneja errores de manera eficiente.

El mas usado es **Promises** por su facilidad de lectura y manejo de errores.

---

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

---

### ¿Cómo manejarías errores en funciones con async/await de forma eficiente?

[Volver al indice](#alg-base-async)

Para manejar errores en funciones con async/await de forma eficiente, se puede usar un bloque `try/catch` para manejar errores de manera sincrona.

```jsx
async function myAsyncFunction() {
  try {
    const value = await promise;
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}
```

