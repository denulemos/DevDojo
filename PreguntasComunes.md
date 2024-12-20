<a id="entrevista-base"></a>

## [Preguntas mas comunes en entrevistas de trabajo para un FE Engineer](#entrevista-base)

Este es un conjunto de preguntas sumarizadas mas comunes en entrevistas de trabajo para un Frontend Engineer. Engloba conceptos comunmente preguntados sobre Javascript, patrones de disenio, mejora de performance, etc. Tambien se agregan preguntas sobre React, Redux y Angular en esta ocasion.

| Preguntas |
|----------|
| [Parametros por valor y por referencia](#ent0) |
| [Prototype Javascript](#ent0-1) |
|[Spread y Rest Operator](#ent0-4)|
| [Null vs undefined vs never](#ent0-2) |
| [`.sort()`](#ent1) |
| [`.map()`](#ent2) |
| [`.filter()`](#ent3) |
| [`.reduce()`](#ent4) |
|[Set vs Map vs WeakMap vs WeakSet](#ent4-1)|
| [Programacion Funcional](#ent8) |
| [Pure function en Programacion Funcional](#ent13) |
| [Currying (funcion dentro de funcion)](#ent15) |
| [¿Qué ventajas ofrece la inmutabilidad al manejar estructuras de datos? Proporciona un ejemplo práctico.](#ent14) |
| [Programacion reactiva (Observables, RxJs, Subscribers)](#ent8-2) |
| [Programacion declarativa (SQL)](#ent8-3) |
| [Paradigma Reactiva Funcional (FRP)? (Funcional + Reactiva)](#ent9) |
| [Funciones lambda (Funciones Anonimas)](#ent8-1) |
|[Encapsulación (Private, public)](#ent10)|
| [Principios SOLID](#ent11) |
| [Que es la inyeccion de dependencias?](#ent12) |
| [Memoization](#ent16) |
| [¿Cuáles son las diferencias clave entre HTTP/1.1, HTTP/2 y HTTP/3? ¿Por qué se considera HTTP/2 más eficiente que HTTP/1.1?](#ent17) |
| [Diferencias entre REST y GraphQL](#ent18) |
| [Cuales son los ataques mas comunes en la web? Nombrar tambien sus protecciones del lado del cliente](#ent19) |
| [Lazy loading](#ent20) |
| [Performance](#ent21) |
| [PWA (Progressive Web App)](#ent25-1) |
| [Critical Rendering Path](#ent22) |
| [¿Cuáles son las diferencias entre localStorage, sessionStorage y las cookies?](#ent23) |
| [Web y Service Workers](#ent26) |
| [Event Loop (Macro, Micro tasks, Callback Queue)](#ent27) |
| [Obfuscation and Minification](#ent55) |
| [Promises - Async Await - Callbacks](#ent29) |
| [Beneficios de usar Webpack o Rollup](#ent32) |
| [Tree shaking](#ent33) |
| [Mejoras en el ciclo de vida](#ent68) |
| [Redux, sus caracteristicas](#ent34) |
| [Redux Async Flow](#ent53) |
| [Context API](#ent35) |
| [useEffect() React](#ent37) |
| [useActionState() React](#ent69) |
| [React Server Components](#ent69-1) |
| [startTransition() React](#ent70) |
| [useFormStatus() React](#ent71) |
| [useOptimistic() React](#ent72) |
| [useCallback() React](#ent39) |
| [Que mejoras hay en la migracion de AngularJS a Angular?](#ent51-1) |
| [Decorators en Angular](#ent65) |
| [Angular Signals](#ent65-1) |
| [RxJS](#ent38) |
| [Observable en RxJS](#ent39) |
| [Observable "cold" y "hot"](#ent40) |
| [CDN (Content Delivery Network)](#ent41) |
| [Como organizarias el code reuse en una aplicacion?](#ent42) |
| [Higher order component (HoC)](#ent43) |
| [Patrones de disenio en React](#ent44) |
| [Patrones de disenio en Angular](#ent45) |
| [Patrones de disenio en Frontend](#ent46) |
| [Antipatrones en Frontend](#ent47) |
| [Server Side Rendering (SSR)](#ent48) |
| [Static site rendering (SSR)](#ent52) |
| [Microfrontends](#ent54) |
| [Code splitting](#ent56) |
| [Serverless](#ent57) |
| [Es la metodologia Agile recomendable para todos los proyectos?](#ent60) |
| [MVP (Minimum Viable Product)](#ent61) |
| [Metodologias de estimacion de tareas](#ent66) |
| [Distintos tipos de testing en Frontend](#ent62) |
| [Git vs Mercurial](#ent63) |
| [Continuous Integration, Continuous Delivery, Continuous Deployment - Mejoras del proceso CI-CD](#ent65-4) |
| [CORS](#ent67) |
| [Escalabilidad NodeJS](#ent73) |
| [Escalabilidad FE](#ent74)|
|[Principios de Disponibilidad, Escalamiento en Frontend](#ent75)|
| [Mencionar como manejarias la delegacion de tareas dentro de tu equipo](#ent76) |
| [Se te da la tarea de empezar un nuevo proyecto, que preguntas realizarias para tomar que decisiones como un Tech Lead?](#ent76-1) |

---

# Preguntas mas comunes en entrevistas de trabajo para un FE Engineer

<a id="ent0"></a>

### **Parametros por valor y por referencia en Javascript**

[Volver al indice](#entrevista-base)

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

<a id="ent0-1"></a>

### **Prototype Javascript**

[Volver al indice](#entrevista-base)

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



<a id="ent0-4"></a>

### **Spread vs Rest Operator**

[Volver al indice](#entrevista-base)

Spread es cuando los 3 puntos se encuentran al principio, de ese modo por ejemplo, puedo pasar un array como parametro pero en vez de tomar su referencia tomo su valor. Convierte un array en una lista de argumentos.

```javascript
const arr = [1, 2, 3];

function sumar(a, b, c) {
  return a + b + c;
}

console.log(sumar(...arr)); // 6
```

En el caso del Rest Operator, es cuando los 3 puntos se encuentran en el parametro de una funcion, y se utiliza para agrupar elementos en un array. Convierte los argumentos de una funcion en un array.

```javascript
function sumar(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // 15
```

El operador es el mismo pero su nombre depende del contexto en donde esten siendo usados. 

<a id="ent0-2"></a>

### **Null vs undefined vs never**

[Volver al indice](#entrevista-base)

`null` y `undefined` son valores que existen tanto en JS como en TS, pero `never` es propio de TS.

`null` es ningun valor en particular, califica como inicializacion en si mismo. 
`undefined` es el valor por defecto de una variable que no ha sido inicializada.
`never` es un tipo que representa un valor que nunca sucedera. Aparece seguido en errores de compilacion cuando se declara un array pero, o no se inicializa o no se declara de que tipo es, y se intenta hacer alguna operacion con la misma.

```typescript
let a: null = null;
let b: undefined = undefined;

let c: never = (() => {
  throw new Error("Error");
})();
```

<a id="ent1"></a>

### **.sort() en JavaScript**

[Volver al indice](#entrevista-base)

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

<a id="ent2"></a>

### **.map() en JavaScript**

[Volver al indice](#entrevista-base)

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

<a id="ent3"></a>

### **.filter() en JavaScript**

[Volver al indice](#entrevista-base)

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

<a id="ent4"></a>

### **.reduce() en JavaScript**

[Volver al indice](#entrevista-base)

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

<a id="ent4-1"></a>

### **Set vs Map en Javascript**

[Volver al indice](#entrevista-base)

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

<a id="ent8"></a>

### **Programacion Funcional**

[Volver al indice](#entrevista-base)

Es un paradigma de programacion donde una regla principal es que los datos son inmutables, por eso a las funciones tipo `filter` o `map` se dicen que son funciones puras, ya que no modifican el array original, sino que devuelven un nuevo array con los elementos modificados. Entre otras cosas. 

Las caracteristicas de la programacion funcional son:

- Datos inmutables, la principal razon de esto es para evitar errores de estado compartido
- Las funciones se consideran de primera clase, esto quiere decir que pueden ser asignados a variables, ser pasados a funciones como parametros igual que cualquier otra estructura de datos, incluso ser devueltos por una funcion.
- Se introducen las **Funciones Puras** las cuales son funciones que ante los mismos argumentos siempre devuelven lo mismo, y no tienen efectos secundarios, facilitando la depuracion.
- Se introduce el **Lazy Evaluation** que es basicamente no evaluar una expresion a menos que sea necesario, permitiendo mejor rendimiento y estructuras de datos infinitas.
- En la programacion funcional se acostumbra a usar recursion en lugar de bucles `for` o `while`, ya que es mas facil de leer y de mantener.

Javascript no es un lenguaje puramente funcional, aunque tiene algunos conceptos soportados por el mismo. 

```javascript
// Función pura
const sumar = (x, y) => x + y;

// Uso de funciones de primera clase
const aplicarOperacion = (a, b, operacion) => operacion(a, b);

console.log(aplicarOperacion(3, 4, sumar)); // Output: 7

// Inmutabilidad
const agregarElemento = (array, elemento) => [...array, elemento];

const original = [1, 2, 3];
const nuevo = agregarElemento(original, 4);

console.log(original); // Output: [1, 2, 3]
console.log(nuevo);    // Output: [1, 2, 3, 4]
```

Los lenguajes de programacion hechos para la programacion funcional son Scala, Erlang, Haskell entre otros, son lenguajes usados en sistemas funcancieros, telecomunicaciones, analisis de datos entre otras areas.

<a id="ent13"></a>

### **Explica el concepto de "pure function" y por qué es fundamental en la programación funcional.**

[Volver al indice](#entrevista-base)

Como se explico anteriormente, las Pure functions son funciones que, al recibir los mismos parametros, siempre devuelven el mismo resultado.

```typescript
// Función pura
function sumar(a: number, b: number): number {
    return a + b;
}

// Función impura
let resultado = 0;
function sumar(a: number, b: number): number {
    resultado += a + b;
    return resultado;
}
```

La diferencia entre ambas funciones es que la impura esta mutando a la variable resultado, en cambio, la funcion pura, simplemente devuelve el resultado de la operacion, sin mutar la informacion, algo principal cuando se trata de programacion funcional.

<a id="ent14"></a>

### **¿Qué ventajas ofrece la inmutabilidad al manejar estructuras de datos? Proporciona un ejemplo práctico.**

[Volver al indice](#entrevista-base)

Solo a modo de repaso, la inmutabilidad es algo muy propio de la programacion funcional. Algunas de sus ventajas son:

- Al no estar modificando directamente mis datos, evito errores de estado compartido
- Eliminamos los errores de concurrencia, ya que los datos no estan siendo modificados, entonces no tengo necesidad de tener si o si la ultima version de los mismos para poder continuar
- Se pueden implementar facilmente funciones de `undo`, ya que se puede volver a la version anterior muy facilmente
- Integridad de datos, ya que al no estar modificando los datos, no se pueden corromper los mismos

```typescript
const tareasOriginales = [
    { id: 1, texto: 'Hacer la compra', completada: false },
    { id: 2, texto: 'Llamar al médico', completada: true }
];

function agregarTarea(tareas, nuevaTarea) {
    return [...tareas, nuevaTarea];
}

const nuevaTarea = { id: 3, texto: 'Pagar el alquiler', completada: false };
const tareasActualizadas = agregarTarea(tareasOriginales, nuevaTarea);

console.log(tareasOriginales); // La lista original permanece sin cambios
console.log(tareasActualizadas); // Nueva lista con la tarea agregada
```

Un ejemplo de la IA que me gusto mucho para explicar esto: 

Imagina que estás escribiendo un documento en un procesador de textos. Cada vez que haces un cambio, como añadir una palabra, el programa no borra todo el documento y lo reescribe desde cero con la palabra añadida. En lugar de eso, crea una nueva versión del documento con la palabra incluida. Si algo sale mal mientras escribes, siempre puedes volver a la versión anterior sin problemas. Esto es similar a cómo funciona la inmutabilidad en las aplicaciones de software.

<a id="ent15"></a>

### **Currying**

[Volver al indice](#entrevista-base)

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

<a id="ent8-1"></a>

### **Funciones lambda**

[Volver al indice](#entrevista-base)

Las funciones Lambda son basicamente funciones cortas y anonimas. En Javascript se podria decir que son funciones flecha, ya que no tienen nombre y se definen con `=>`.

```javascript
const sumar = (a, b) => a + b;
```

<a id="ent8-2"></a>

### **Que es la programacion reactiva?**

[Volver al indice](#entrevista-base)

Es el tipo de programacion que se maneja cuando se usa RxJS en Angular. Basicamente es un paradigma de programacion orientado a manejar datos asincronos, algo muy propio de las paginas web, donde mientras estamos obteniendo informacion de un servicio, es muy importante que sigamos pudiendo interactuar con la pagina.

- Orientada a datos: Se basa en la propagacion de cambios en los datos a lo largo de la aplicacion.
- Asincrona y no bloqueante: Es importante que mientras se realiza una operacion, no se bloquee la responsividad de nuestra aplicacion.
- Propagacion de cambios: Si tengo muchos componentes que consumen informacion, los mismos deberian mutar si esta informacion cambia.
- Programacion declarativa: A menudo utiliza un estilo declarativo, donde se especifica la lógica de control sin describir su flujo de control, lo que facilita el razonamiento sobre el código y reduce los errores.

Los elementos comunes de la programacion reactiva son:

- Observables: Representas flujos de datos que pueden ser observados y reaccionar a los cambios.
- Observadores: Son funciones que reaccionan a los cambios en los observables. Tambien se le dicen Subscriptores.
- Operadores: Son funciones que permiten manipular los datos emitidos por los observables.

```jsx
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// Crear un observable que emite eventos de clic en un botón
const button = document.querySelector('button');
const clicks = fromEvent(button, 'click');

// Transformar el flujo de datos para contar los clics
const clickPositions = clicks.pipe(
  map(event => ({ x: event.clientX, y: event.clientY }))
);

// Suscribirse al observable para hacer algo con los datos
clickPositions.subscribe(pos => {
  console.log(`Clic en posición: x=${pos.x}, y=${pos.y}`);
});
```

Se podria decir que los **WebSockets** tienen mucho que ver con la programacion reactiva en si misma, ya que se basa en la propagacion de datos en tiempo real.

<a id="ent8-3"></a>

### **Que es la programacion declarativa?**

[Volver al indice](#entrevista-base)

La programacion declarativa se concentra en que cosas hay que hacer y no necesariamente en como hacerlas. Un ejemplo es SQL, donde se le dice a la base de datos que datos queremos, pero no como obtenerlos.

<a id="ent9"></a>

### **Que es la Paradigma Reactiva Funcional (FRP)?**

[Volver al indice](#entrevista-base)

Combina las ideas de la Programacion Funcional (funciones anonimas) con la Programacion Reactiva (observables). Podria ponerse de ejemplo tambien los framework de Frontend como Angular junto a RxJS.

<a id="ent10"></a>

### **¿Qué es el principio de Encapsulación y por qué es importante en OOP?**

[Volver al indice](#entrevista-base)

Es la capacidad de ocultar la informacion interna de una funcion ya que solo deberia importarnos el resultado de la misma, no como se llego a ese resultado.

En JS se puede manejar el concepto mediante distintos medios

- Usando `private` o `public` para las funciones que quiero que tengan una cierta privacidad
- Usando `let`, `var` o `const` para declarar ciertas cosas dentro de un scope limitado

<a id="ent11"></a>

### **Principios SOLID**

[Volver al indice](#entrevista-base)

SOLID es un acronimo que representa 5 reglas del codigo limpio, introducidas por Robert C. Martin en su libro Clean Code.

1. Single Responsibility Principle (SRP): Una clase deberia tener una sola razon para cambiar, es decir, una sola responsabilidad.

```typescript
// Mal: Esta clase maneja tanto los detalles del usuario como la persistencia de datos.
class User {
    constructor(public username: string) {}

    saveUser(user: User) {
        // código para guardar el usuario en una base de datos
    }
}

// Bien: Separación de responsabilidades
class User {
    constructor(public username: string) {}
}

class UserRepository {
    saveUser(user: User) {
        // código para guardar el usuario en una base de datos
    }
}
```

2. Open Closed Principle (OCP): Las clases deberian estar abiertas para extension pero cerradas para modificacion.

```typescript
// Bien: Usando la abstracción para permitir la extensión sin modificar la clase existente
abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

function calculateArea(shapes: Shape[]): number {
    return shapes.reduce((area, shape) => area + shape.area(), 0);
}
```

3. Liskov Substitution Principle (LSP): Los objetos de una superclase deberian ser reemplazables por objetos de sus subclases sin afectar la funcionalidad del programa.

```typescript
class Bird {
    fly() {
        console.log("Puedo volar!");
    }
}

class Duck extends Bird {}

class Ostrich extends Bird {
    fly() {
        throw new Error("No puedo volar!");
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}

const duck = new Duck();
const ostrich = new Ostrich();

makeBirdFly(duck);      // Funciona bien
makeBirdFly(ostrich);   // Error en tiempo de ejecución
```

4. Principio de Segregación de Interfaces (Interface Segregation Principle, ISP): Un cliente no deberia verse forzado a depender de interfaces que no usa.

```typescript
interface Bird {
    eat(): void;
}

interface FlyingBird extends Bird {
    fly(): void;
}

class Duck implements FlyingBird {
    eat() {
        console.log("El pato está comiendo.");
    }

    fly() {
        console.log("El pato está volando.");
    }
}

class Ostrich implements Bird {
    eat() {
        console.log("El avestruz está comiendo.");
    }
}
```


5. Dependency Inversion Principle (DIP): Las clases de alto nivel no deberian depender de las clases de bajo nivel. Ambas deberian depender de abstracciones.

```typescript
interface Database {
    save(data: string): void;
}

class MongoDB implements Database {
    save(data: string) {
        console.log(`Guardando datos en MongoDB: ${data}`);
    }
}

class UserService {
    constructor(private db: Database) {}

    saveUserData(data: string) {
        this.db.save(data);
    }
}

const db = new MongoDB();
const userService = new UserService(db);
userService.saveUserData("datos de usuario");
```

<a id="ent12"></a>

### **Que es la inyeccion de dependencias?**

[Volver al indice](#entrevista-base)

Es un patron de disenio (DI) en donde si necesito un servicio o componentes, no los creo en el componente padre mismo, si no que lo creo en otro archivo y simplemente lo inyecto en donde lo necesito.

Esto facilita el testing ya que lo vuelve mas modular en si mismo, y me facilita el uso de `stub` o `mocks` para simular el funcionamiento de algo inyectado.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class EngineService {
  start() {
    console.log('Engine started');
  }
}

import { Component } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-car',
  template: `<h1>Car Component</h1>`
})
export class CarComponent {

  // Aca angular utiliza el constructor para inyectar el servicio EngineService
  constructor(private engineService: EngineService) {}

  // En Angular mas moderno se recomienda usar el injects en vez de agregarlo en el constructor como se ve aca abajo
  private readonly engineService = inject(EngineService);

  startCar() {
    this.engineService.start();
  }
}
```

<a id="ent16"></a>

### **Memoization**

[Volver al indice](#entrevista-base)

Es una tecnica donde se guarda el resultado de una operacion costosa para poder devolverla si se realizan llamadas consecutivas a la misma operacion. Es muy util en funciones puras donde el resultado depende exclusivamente de los valores de entrada.

Cuando una función memoizada se llama por primera vez con un conjunto particular de argumentos, calcula el resultado como lo haría normalmente. Luego, antes de devolver el resultado, lo almacena en una especie de caché (generalmente un objeto o un mapa) junto con los argumentos utilizados para generar ese resultado. Si la función se llama nuevamente con los mismos argumentos, la función puede simplemente buscar en la caché y devolver el resultado almacenado en lugar de recalcularlo.

```typescript
function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();

    return function(...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key) as ReturnType<T>;
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    } as T;
}

function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(40));  // Calcula y almacena en caché
console.log(memoizedFibonacci(40));  // Recupera de la caché, mucho más rápido
```

Lo negativo que posee es que estas memorizaciones son guardadas en memoria, asi que seria necesario tener no solo un buen sistema de limpieza de cache si no tambien de manejo de memoria. 

En React tenemos el hook `useMemo` que hace uso de esto mismo guardando resultados, tambien tenemos `useCallback` que es similar pero para funciones.

<a id="ent17"></a>

### **¿Cuáles son las diferencias clave entre HTTP/1.1, HTTP/2 y HTTP/3? ¿Por qué se considera HTTP/2 más eficiente que HTTP/1.1?**

[Volver al indice](#entrevista-base)

Todas estas versiones de HTTP introdujeron mejoras enormes en cada una de ellas. La primera version introdujo el protocolo de comunicacion en la web, la segunda version introdujo cosas que incluso al dia de hoy usamos como la multiplicidad de solicitudes sin esperar un desbloqueo e incluso la posibilidad de manejar un Servidor Push, donde se podia obtener data de antemano sin que el usuario vaya a solicitarla, dando como resultado la aparicion de las notificaciones push que hoy usamos.
En el caso de HTTP/3, se introdujo el protocolo QUIC, que es un protocolo de transporte que se ejecuta sobre UDP en lugar de TCP, lo que permite una comunicacion mas rapida y segura, pero el mayor salto fue desde HTTP1 a HTTP2.

<a id="ent18"></a>

### **Explica las diferencias entre REST y GraphQL. ¿Cuándo usarías uno sobre el otro?**

[Volver al indice](#entrevista-base)

| REST | GraphQL |
| --- | --- |
| Es un link para cada recurso | Es un solo link para varios recursos, endpoint unico |
| Puede tener problemas de sobre-recuperacion (mas informacion de la necesaria) o sub-recuperacion (Menos informacion de la necesaria), lo cual causa que necesitemos varias consultas para tener lo que precisamos, o tengamos payloads muy pesados | El cliente puede especificar que campos quiere en la consulta |
| Es mas facil de desarrollar desde cero pero complicado de escalar | Su inicializacion es compleja, pero si se tienen los datos necesarios, los cambios que se tendrian que hacer serian minimos |
| Como las consultas son con su propio endpoint y pueden ser dentro de todo predecibles, el catching es mucho mas facil de implementar | Como las consultas son variadas, el catching es complicado de implementar, aunque hay tecnicas especificas | 
| Se recomienda usar REST cuando la seguridad y el catching son una prioridad, ademas si tengo clientes que buscan servicios predecibles | Se recomienda cuando es importante el minimizar la cantidad de solicitudes hechas en el servidor |

<a id="ent19"></a>

### **Cuales son los ataques mas comunes en la web? Nombrar tambien sus protecciones del lado del cliente**

[Volver al indice](#entrevista-base)

**Cross Site Scripting XSS**

Es injectar scripts en las paginas web para obtener datos como cookies, sesiones, etc.

- Usar `Content Security Policy` para limitar los recursos que se pueden cargar en una página web
- Asegurar los inputs de los usuarios para que no se pueda inyectar codigo malicioso
- Usar funciones para escapar caracteres especiales que pueden identificar cuando se trata de un script

**Inyeccion SQL**

Es muy parecido al anterior pero en este caso el usuario trata de correr consultar SQL en los inputs o en las requests al servidor para obtener cierto acceso o informacion. 

- Sanitizar los inputs de los usuarios

**Man in the middle**

Es cuando un tercer interlocutor esta espiando de alguna manera la comunicacion entre dos puntos. 

- Usar HTTPS para asegurar la comunicacion
- Implementar HSTP Strict Transport Security para forzar conexiones seguras
- Verificar los certificados SSL/TLS

**Clickjacking**

Engaña al usuario para que haga clic en algo diferente a lo que percibe, potencialmente revelando información confidencial o tomando control de su cuenta.

- Utilizar la cabecera HTTP X-Frame-Options para evitar que la página sea incrustada en iframes de otros dominios.

**CSRF (Cross-Site Request Forgery)**

Cuando por ejemplo estoy en la pagina de mi banco, y al mismo tiempo ingreso a una pagina maliciosa, podria suceder que se realicen trasferencias en mi banco sin mi autorizacion. 

- Uso de tokens CSRF que es una especie de identificacion unica que se envia por solicitud y que es validada antes de realizar la accion
- Usar metodos POST cuando son metodos importantes ya que la mayoria de las CSRF tratan de ser realizadas con metodos GET ya que son mas faciles de disimular
- Politica SAmeSite en las cookies. La política de SameSite es una configuración que puedes añadir a las cookies para controlar si se deben enviar con solicitudes de origen cruzado. Si configuras `SameSite=Strict`, la cookie solo se enviará si la solicitud proviene del mismo sitio que originalmente estableció la cookie. Esto ayuda a prevenir ataques CSRF porque impide que las cookies se envíen junto con solicitudes iniciadas por sitios maliciosos. Es decir, las cookies no pueden ser compartidas con otros dominios. 

<a id="ent20"></a>

### **¿Qué es el concepto de "lazy loading" y cómo se implementa en una aplicación web?**

[Volver al indice](#entrevista-base)

- Virtualizacion (Como el Lazy Loading pero para listas)
- Lazy Loading de imagenes (Cargar las imagenes solo cuando son visibles)
- Lazy Loading de modulos (Cargar modulos solo cuando son necesarios)
- Code Splitting (Dividir el codigo en partes mas pequeñas para cargar solo lo necesario)
- Catching (Guardar datos en memoria para no tener que volver a pedirlos)
- Optimizar el tamanio del bundle
- Evitar memory leaks (No declarar cosas que no se usan)

Tambien llamado carga diferida es un metodo en desarrollo web y mobile en donde los recursos necesarios con cargados solo cuando se necesitan, reduciendo el tiempo de carga inicial y ahorrando ancho de banda.

Se realiza con:

- Imagenes, se cargan cuando ya son visibles

```html
<img src="imagen.jpg" alt="Ejemplo" loading="lazy" />
```

- Componentes, se cargan cuando se necesitan

```jsx
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./MiComponente'));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}
```

- Modulos, no se incluyen en el bundle principal de una si no que solo se incluye si es necesario

```javascript
document.getElementById("boton").addEventListener("click", () => {
    import('./miModulo.js').then(module => {
        module.miFuncion();
    });
});
```

El modulo miModulo.js es solo cargado cuando se apreta el boton.

<a id="ent21"></a>

### **Mejoras de Performance**

[Volver al indice](#entrevista-base)

- Utilizar `for` en lugar de `forEach` ya que aparentemente es mucho mas eficiente
- Reducir la cantidad de llamadas a funciones dentro de un bucle.
- Cachear valores para no re-calcularlos todo el tiempo

```javascript
const length = array.length; // Cachea la longitud del array
for (let i = 0; i < length; i++) {
    console.log(array[i]);
}
```

- Cuando trabajes con eventos frecuentes (como scroll o input), usa debouncing o throttling para limitar la cantidad de ejecuciones.

  - Debouncing: Retrasa la ejecución hasta que la acción se detenga.

```javascript
function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const onResize = debounce(() => console.log("Resize terminado"), 300);
window.addEventListener('resize', onResize);
```

  - Throttling: Limita la frecuencia de ejecución a un cierto intervalo.

```javascript
function throttle(func, limit) {
    let lastFunc, lastTime;
    return (...args) => {
        const now = Date.now();
        if (!lastTime || now - lastTime >= limit) {
            func(...args);
            lastTime = now;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                func(...args);
                lastTime = now;
            }, limit - (now - lastTime));
        }
    };
}

const onScroll = throttle(() => console.log("Scrolling"), 200);
window.addEventListener('scroll', onScroll);
```

- Evitar declarar cosas que no se usan para evitar Memory Leaks
- Usar `let` y `const` en lugar de `var` para evitar problemas de scope
- Javascript es **Single Thread** por lo cual debemos evitar operaciones asincronas que sean muy largas, y si debo implementarlo, hacer uso de `Web Workers`.

```javascript
// worker.js
self.onmessage = function (e) {
    const result = e.data * 2;
    self.postMessage(result);
};

---

const worker = new Worker("worker.js");
worker.postMessage(5);

worker.onmessage = function (e) {
    console.log("Resultado del worker:", e.data);
};

- Realizar un profiling de la aplicacion para ver que partes del codigo estan consumiendo mas recursos y optimizarlas. Esto se puede hacer con el `Performance API` de Javascript

```javascript
console.time("Tiempo de ejecución");
// Código a medir
console.timeEnd("Tiempo de ejecución");
```

- React cuenta con React DevTools, y entre las herramientas se encuentra el Profiler que nos puede ayudar a identificar componentes lentos.
- Si se pueden combinar las operaciones `map`, `filter` y `reduce` en una sola, hacerlo, ya que es mucho mas eficiente y se evitan recorridos multiples al mismo set de datos. 
- Evitar mutar los datos si no es necesario.
- Usar `Maps` y `Sets` en lugar de arrays si necesito hacer busquedas frecuentes, ya que son mucho mas eficientes. Si tengo que usar un Array, usar `push` y `pop` en lugar de un ejemplo un `shift` ya que es mucho mas eficiente.
- Si se puede utilizar `async/await` en lugar de promises chaining hacerlo, ya que es mucho mas facil de leer y de mantener.

```javascript
async function fetchData() {
   const response = await fetch("https://api.example.com/data");
   const data = await response.json();
   console.log(data);
}
```

- Minificar el codigo con herramientas como Rollup, asi se reduce el peso del archivo y se mejora la velocidad de carga.
- Configura herramientas como Terser y habilita la compresión Gzip o Brotli en el servidor.
- Usar imagenes que esten optimizadas en formatos nuevos como WEBP o AVIF, y si es posible, usar SVG en lugar de imagenes.
- Minimizar las manipulaciones directas al DOM, usar `documentFragment` para manipulaciones masivas.
- Usar `@ViewChild` en lugar de `document.getElementById` para acceder a elementos del DOM

```typescript
@Component({
  selector: 'app-my-component',
  template: `<div #myElement>Elemento</div>`
})

export class MyComponent {
  @ViewChild('myElement') myElement: ElementRef;

  ngAfterViewInit() {
    this.myElement.nativeElement.style.color = 'red';
  }
}
```
- Y como fue mencionado anteriormente, la Memoization es una tecnica muy util para mejorar la performance de la aplicacion, guardando operaciones constosas para no tener que volver a realizarlas. Hacer uso de la memoizacion en los componentes que lo necesiten mediante el uso de `useMemo` para valores y `useCallback` para funciones, y asi evitar re-renderizados innecesarios si es que se recibe la misma informacion.

```jsx
import React, { useMemo, useCallback } from "react";

const ExpensiveComponent = ({ num }) => {
    const computedValue = useMemo(() => num * 10, [num]);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return <div onClick={handleClick}>{computedValue}</div>;
};
```

- Evitar el re-rendering de los elementos de una lista mediante el uso de sus `keys` unicas, esto ayuda a identificar a React que elementos precisan se re-renderizados y cuales no.

```jsx
items.map(item => <Item key={item.id} data={item} />);
```

- Usar `trackBy` en las listas para evitar re-renderizados innecesarios

```typescript
@Component({
  selector: 'app-my-list',
  template: `
    <ul>
      <li *ngFor="let item of items; trackBy: trackByFn">{{ item }}</li>
    </ul>
  `
})
export class MyListComponent {
  items = [1, 2, 3, 4, 5];

  trackByFn(index: number, item: number): number {
    return index;
  }
}
```

- Utilizar Code Splitting para guardar las partes mas pesadas de la aplicacion para cuando son realmente necesarias

```jsx
import React, { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
   return (
       <Suspense fallback={<div>Cargando...</div>}>
           <HeavyComponent />
       </Suspense>
   );
}
```

- Implementar Lazy Loading para cargar modulos solo cuando son necesarios

```typescript
const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];
```

- Cargar modulos cuando solo son necesarios

```jsx
if (condition) {
   import("./module").then(mod => mod.function());
}
```

- Si debo renderizar una lista muy extensa, usar `react-window` o `react-virtualized` para solo renderizar los elementos que estan en pantalla, y no todos los elementos de la lista. Es como un lazy loading pero para listas.

```jsx
import { FixedSizeList } from "react-window";

const Row = ({ index, style }) => <div style={style}>Fila {index}</div>;

function App() {
   return (
       <FixedSizeList height={400} itemCount={1000} itemSize={35} width={300}>
           {Row}
       </FixedSizeList>
   );
}
```

- Virtualizar (que es como el lazy loading pero para listas) las listas que tengan muchos elementos

```html
<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

- **Lifting State Up** es una tecnica en React donde se sube el estado de un componente hijo a un componente padre, esto ayuda a evitar re-renderizados innecesarios.

```jsx
function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Child count={count} setCount={setCount} />
        </div>
    );
}

function Child({ count, setCount }) {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}
```

- Si voy a hacer uso de un estado global, usar librerias como Redux Toolkit para manejarlo de manera eficiente, ya que Redux Toolkit maneja el estado de manera inmutable, lo cual es muy importante para React.
- No importar librerias cuando no son necesarias, y de esas librerias, solo importar los elementos que voy a precisar y no toda la libreria en si misma. Tambien evitar librerias pesadas como Moment o lodash que tienen reemplazos mas pequenios o incluso nativos en Javascript. 

```jsx
import { isEmpty } from "lodash"; // Solo importa una función
```

- Angular tiene un metodo de detectar cambios que puede llevar a re-renderizados innecesarios, para evitar esto, se puede usar `ChangeDetectionStrategy.OnPush` en los componentes que no necesitan ser re-renderizados todo el tiempo.

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `<div>{{ data }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() data: string;
}
```

- Usar `async` pipe en lugar de subscribirse a un observable manualmente

```typescript
@Component({
  selector: 'app-my-component',
  template: `<div>{{ data$ | async }}</div>`
})

export class MyComponent {
  data$ = this.myService.getData();

  constructor(private myService: MyService) {}
}
```

- Usar `ng-container` para evitar elementos HTML innecesarios

```typescript
@Component({
  selector: 'app-my-component',
  template: `
    <ng-container *ngIf="condition">
      <div>Contenido</div>
    </ng-container>
  `
})
```

- Usar `ChangeDetectorRef` para marcar los componentes como dirty o checkearlos manualmente. Que sea dirty significa que se debe re-renderizar.

```typescript
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `<div>{{ data }}</div>`
})

export class MyComponent {
  data: string;

  constructor(private cdr: ChangeDetectorRef) {}

  fetchData() {
    this.data = 'Datos cargados';
    this.cdr.detectChanges();
  }
}
```

- Evitar llamadas a funciones en el `ng.html` ya que se ejecutan en cada ciclo de deteccion de cambios

```html
<!-- Evita esto -->
<p>{{ calculateValue() }}</p>

<!-- Mejor esto -->
<p>{{ value }}</p>
```

- Habilitar el Preloading strategy para cargar modulos en segundo plano

```typescript
import { PreloadAllModules } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

- Convierte tu aplicación en una Progressive Web App para mejorar el rendimiento y el almacenamiento en caché de recursos. 
- Usa HttpClient con RxJS operadores para manejar las solicitudes HTTP de manera eficiente. Usa shareReplay para compartir respuestas en lugar de ejecutar solicitudes repetidas.

```typescript
import { shareReplay } from 'rxjs/operators';

this.data$ = this.http.get('api/data').pipe(shareReplay(1));
```

- Implementar Catching

```typescript
private cache = new Map();

getData() {
  if (this.cache.has('data')) {
    return of(this.cache.get('data'));
  }

  return this.http.get('api/data').pipe(
    tap(data => this.cache.set('data', data))
  );
}
```

- Habilitar AOT (Ahead-of-Time Compilation) para compilar tu aplicación Angular en tiempo de compilación en lugar de tiempo de ejecución.

```bash
ng build --aot
```

<a id="ent25-1"></a>

### **Que es una PWA?**

[Volver al indice](#entrevista-base)

Una Progressive Web App (PWA) es una aplicación web que utiliza tecnologías web modernas para proporcionar una experiencia de usuario similar a la de una aplicación nativa. Funciona tanto en Web como Mobile ya que se adapta. 

Es la tipica aplicacion que podemos instalar en nuestros telefonos sin pasar por la Web Store, haciendo tambien mucho mas facil su actualizacion en caso de ser necesaria. 

Hace uso de **Service Workers** para manejar los datos en segundo plano, y en el caso de haber notificaciones push, tambien manejarlas, ademas permite su funcionamiento offline. 

El framework mas famoso para hacer PWA es Angular, ya que tiene un modulo especifico para ello, pero tambien se puede hacer con React y Vue. Ionic tambien es un framework que se especializa en PWA.

<a id="ent22"></a>

### **Critical Rendering Path**

[Volver al indice](#entrevista-base)

Es el paso a paso que se lleva a cabo para mostrarle al usuario la aplicacion en pantalla. Consta de los siguientes pasos:

- **HTML**: El navegador recibe el HTML y lo convierte en el DOM
- **CSS**: El navegador recibe el CSS y lo convierte en el CSSOM
- **Render Tree**: Se combinan el DOM y el CSSOM para crear el Render Tree (Si un elemento tiene `display: none` no es incluido en el mismo)
- **Layout**: Se calcula el layout de la pagina, tambien se le dice reflow.
- **Paint**: Se pinta la pagina en pantalla
- **Composite**: Se combinan las capas para mostrar la pagina en pantalla

Si yo optimizo este proceso, la carga de mi pagina sera mucho mas veloz. 

- Minimizar el tamanio de los archivos mediante la minificacion y compresion de los mismos
- Eliminar el CSS no utilizado para disminuir el peso
- Servir recursos estáticos desde un CDN reduce los tiempos de descarga.
- Optimizar imagenes usando formatos modernos como WEBP o AVIF
- Cuando JS se esta ejecutando, el renderizado es bloqueado. Usar `async` o `defer` en los scripts para evitar esto. `async` descarga el script de manera asincrona y lo ejecuta cuando esta listo, `defer` descarga el script de manera asincrona pero lo ejecuta cuando el DOM esta listo.

<a id="ent23"></a>

### **¿Cuáles son las diferencias entre localStorage, sessionStorage y las cookies?**

[Volver al indice](#entrevista-base)

| SessionStorage | LocalStorage | Cookies |
| --- | --- | --- |
| Los datos se guardan por pestania y no son compartidos entre pestanias | Los datos se guardan en el navegador y son persistentes una vez que el usuario cierra la pestania | Los datos se guardan en el navegador y son persistentes una vez que el usuario cierra la pestania |
| El tamaño maximo es de 5MB | El tamaño maximo es de 5MB | El tamaño maximo es de 4KB |
| Se puede acceder a los datos a traves de `window.sessionStorage` | Se puede acceder a los datos a traves de `window.localStorage` | Se puede acceder a los datos a traves de `document.cookie` |
| Los datos se guardan en forma de pares clave-valor | Los datos se guardan en forma de pares clave-valor | Los datos se guardan en forma de pares clave-valor |
| Los datos se almacenan en el lado del cliente | Los datos se almacenan en el lado del cliente | Los datos se almacenan en el lado del cliente |
| Los datos no se envian al servidor con cada solicitud HTTP | Los datos no se envian al servidor con cada solicitud HTTP | Los datos se envian al servidor con cada solicitud HTTP, es por eso que es importante resguardarlas ya que pueden tener session keys para la identificacion ante el llamado a un servicio |

<a id="ent26"></a>

### **Web y Service Workers**

[Volver al indice](#entrevista-base)

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

<a id="ent27"></a>

### **Event Loop (Macro, Micro tasks, Callback Queue)**

[Volver al indice](#entrevista-base)

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

<a id="ent55"></a>

### **Obfuscation and Minification**

[Volver al indice](#entrevista-base)

La **Minificacion** es eliminar espacios innecesarios para reducir el tamaño del archivo, y asi mejorar la velocidad de carga de la pagina, siempre y cuando su funcionalidad no se vea comprometida. Es reversible, es decir que el codigo original puede ser reconstruido.

La **Obfuscacion** transforma el codigo en algo que los humanos no van a poder entender pero la computadora aun si. Se usa para proteger al codigo de ingenieria inversa, y es irreversible (solo en algunos casos). Debe combinarse con la minificacion, si no el tamanio del archivo podria ser aun mayor. 

La Minificacion se usa en produccion para reducir el tamanio del bundle. La ofsucacion se usa cuando se precisa proteger al codigo fuente por haber manejo de informacion sensible.

<a id="ent29"></a>

### **Promises - Async Await - Callbacks**

[Volver al indice](#entrevista-base)

**Callbacks** es la forma mas antigua de manejar procesos asincronicos en Javascript. En frontend podria ser reemplazado por Promises o Async Await, pero en backend (NodeJs) sigue siendo muy utilizado.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Datos');
    }, 1000);
}

fetchData(data => {
    console.log(data);
});
```

La desventaja de su uso es el famoso **Callback hell** donde al anidar un callback dentro de otro callback puede surgir un codigo bastante ilegible. 

```javascript
// Ejemplo callback hell

function fetchData(callback) {
    setTimeout(() => {
        callback('Datos');
    }, 1000);
}

// Anidamiento de callbacks
fetchData(data => {
    console.log(data);
    fetchData(data => {
        console.log(data);
        fetchData(data => {
            console.log(data);
        });
    });
});
```

Otra cosa a tener cuenta es que los Callbacks se guardan en el **Callback Stack** que tiene menos prioridad de ejecucion que el **Microtask Queue**, donde se guardan las Promises.

Las **Promises** son una forma mas moderna de manejar los procesos asincronicos en Javascript. Poseen diversos estados:

- Rejected: Algo salio mal en la ejecucion, entonces se buscara el codigo catch
- Solved: La promise se soluciono de forma exitosa
- Pending: La promise aun esta pendiente de finalizacion

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos');
        }, 1000);
    });
}

fetchData().then(data => {
    console.log(data);
});
```

Las Promises son mucho mas faciles de leer y de mantener que los Callbacks, y ademas se pueden encadenar.

```javascript
fetchData()
    .then(data => {
        console.log(data);
        return fetchData();
    })
    .then(data => {
        console.log(data);
        return fetchData();
    })
    .then(data => {
        console.log(data);
    });
```

Otra ventaja de las promises es que se pueden, por ejemplo, llamar a varios servicios y finalizar la promise una vez que tenemos todos los resultados

```javascript
Promise.all([fetchData(), fetchData(), fetchData()])
    .then(data => {
        console.log(data);
    });
```

**Async Await** es una forma de manejar las Promises de una forma mas sincronica, y es mucho mas facil de leer y de mantener que las Promises.

```javascript
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos');
        }, 1000);
    });
}

(async () => {
    const data = await fetchData();
    console.log(data);
})();
```

El uso de Async Await es muy recomendado en el desarrollo de aplicaciones modernas, ya que es mucho mas facil de leer y de mantener que las Promises.

Promises y Callbacks pueden ser combinados con Async Await, pero no es recomendado ya que se pierde la ventaja de Async Await.

En RxJS se pueden manejar las Promises de una forma mas avanzada, y se pueden hacer operaciones mas complejas con ellas.

<a id="ent32"></a>

### **Beneficios de usar Webpack o Rollup**

[Volver al indice](#entrevista-base)

Son herramientas para realizar el bundle de las aplicaciones.

- Combinan multiples archivos para disminuir la cantidad de solicitudes HTTP
- Mejoran la velocidad de la carga de recursos en produccion
- Se realiza Tree Shaking para eliminar el codigo no utilizado
- Se permite la minificacion
- Cambian parte del codigo para hacerlo compatible con navegadores que no soporten Javascript
- Proveen herramientas como HMR (Hot Module Replacement) que permiten actualizaciones rápidas sin recargar toda la aplicación.

Rollup es recomendado para librerias mas pequenias que Webpack en si mismo, ya que ofrece una optimizacion avanzada.

<a id="ent33"></a>

### **¿Qué es el concepto de "tree shaking" y cómo se aplica en una aplicación JavaScript?**

[Volver al indice](#entrevista-base)

El **Tree Shaking** es una tecnica de optimizacion que se utiliza para eliminar el codigo no utilizado de un bundle. Se realiza mediante el uso de modulos ES6, y se realiza en el proceso de minificacion.

```javascript
// modulo.js
export const a = 1;

// main.js
import { a } from './modulo';

console.log(a);
```

En este caso, si no se utiliza la variable `a` en el archivo `main.js`, el Tree Shaking se encargara de eliminarla del bundle final, mismo con las dependencias. 

<a id="ent68"></a>

### **Mejoras en el ciclo de vida**

[Volver al indice](#entrevista-base)

**React**

En React los componentes se montan, actualizan y desmontan. Para mejorar el ciclo de vida podriamos hacer lo siguiente:

- Optimizar el montaje utilizando `React.memo` para evitar re-renderizados innecesarios, especialmente si se tratan de componentes que no dependen de props y state.

```jsx
const MyComponent = React.memo(function MyComponent(props) {
    return <div>{props.value}</div>;
});
```

- Cargar componentes de manera diferida y cuando se los precisa para mejorar el rendimiento inicial de la aplicacion

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <React.Suspense fallback={<div>Cargando...</div>}>
            <LazyComponent />
        </React.Suspense>
    );
}
```

- Usar el `useEffect` de manera eficiente evitando tareas costosas o innecesarias durante el montaje. Una forma seria usando la funcion de cleanUp para evitar fugas de memoria.

```jsx
useEffect(() => {
    const timer = setInterval(() => console.log('Hola'), 1000);
    return () => clearInterval(timer); // Limpieza en desmontaje
}, []);
```

- Desglosar componentes grandes en mas pequenios para manejar su montaje de forma mas especifica.
- Cancela timers, fetch requests y eventos al desmontar el componente.

**Angular**

En Angular existes hooks como `ngOnInit`, `ngOnChanges`, `ngAfterViewInit`, `ngOnDestroy` que se pueden utilizar para mejorar el ciclo de vida de los componentes.

- Usar `ngOnInit` para inicializaciones

```typescript
ngOnInit() {
    this.loadData();
}
```

- Usar `ngOnChanges` de manera eficiente evitando logica innecesaria, podriamos realizar logica pesada solo cuando los inputs cambien.

```typescript
ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
        this.processData(changes['data'].currentValue);
    }
}
```

- Usar `ChangeDetectionStrategy.OnPush` en los componentes para evitar re-renderizados innecesarios.

```typescript
@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent { }
```

- Usar el `ngOnDestroy` para realizar limpieza. Cancelar subscripciones, detener timers o event listeners.

```typescript
ngOnDestroy() {
    this.subscription.unsubscribe();
}
```

Tambien se puede controlar el ciclo de vida de las subscripciones mediante herramientas dadas por RxJs como `takeUntil` o `takeWhile`.

```typescript
private destroy$ = new Subject<void>();

this.service.getData()
  .pipe(takeUntil(this.destroy$))
  .subscribe(data => this.data = data);

ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
}
```

<a id="ent34"></a>

### **Redux, sus caracteristicas**

[Volver al indice](#entrevista-base)

Redux es un contenedor de estado que se usa generalmente con React. 

En el **Redux Store** se guarda el estado de la aplicacion al cual podemos acceder mediante **Actions**. 

```javascript
{
  type: 'PEDIR_PIZZA',
  payload: { item: 'pizza' }
}
```

El `type` es el tipo de accion que se desea realizar de una cantidad pre-definida, el `payload` es la informacion necesaria para realizar este cambio. Este pedido es manejado por el **Reducer**

```javascript
function pedidosReducer(state = [], action) {
  switch (action.type) {
    case 'PEDIR_PIZZA':
      return [...state, action.payload.item]; // Añade 'pizza' al pedido
    default:
      return state; // Devuelve el estado tal cual si no reconoce la acción
  }
}
```

Una vez que el cambio esta hecho, todos los componentes que la consumen estan al tanto de este cambio y cambian en consecuencia.

Redux guarda la informacion en un solo lugar de la aplicacion y la distribuye a todos los componentes que la necesitan, y es facil de depurar. Es especialmete util en aplicaciones grandes.

<a id="ent53"></a>

### **Redux Async Flow**

[Volver al indice](#entrevista-base)

Redux Async Flow es el flujo asincrono de Redux. Si bien Redux maneja los estados de manera asincrona, a veces necesitamos llevar a cabo tareas asincronas en si mismos, como llamar a una API, y Redux no entiende funciones asincronas, no sabe esperar a que la API termine su procesamiento. 

Para solucionar esto se usa un middleware llamado `Redux Thunk` o `Redux Saga` que funciona como intermediario entre los actions y los reducers, los mismos permiten ejeuctan funciones asincronas en las acciones y despachar nuevas acciones una vez que la primera tarea asincrona termino.

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
```

Se suele manejar la informacion en un objeto con 3 elementos:

```javascript
{
  loading: false,
  data: [...], // Datos obtenidos
  error: null
}
```

<a id="ent35"></a>

### **Context API**

[Volver al indice](#entrevista-base)

ContextAPI es una herramienta que viene con React de manera nativa que cumple la misma funcion que Redux pero de una manera mucho mas pequenia. 
A veces nos puede suceder que si queremos que cierta informacion sea usada por varios componentes caemos en un **prop drilling** donde terminamos pasando esas mismas props de un componente a otro, incluso si ese componente no lo necesita en su totalidad. 

```jsx
const App = () => {
  const user = { name: 'John Doe' }; // Datos globales

  return (
    <Parent user={user} />
  );
};

const Parent = ({ user }) => {
  return (
    <Child user={user} />
  );
};

const Child = ({ user }) => {
  return <h1>{user.name}</h1>;
};
```

En este caso, ContextApi soluciona este problema disponibilizando un sistema de estado global, haciendo que solo el que lo necesita acceda a la informacion. 

ContextApi funciona bajo 3 conceptos:

- Context: Es un contenedor para datos que pueden ser compartidos entre componentes

```jsx
const UserContext = React.createContext();
```

- Provider: Es un componente que provee la infomacion a los componentes que lo precisan, solo se deben poner dentro de este los componentes que necesitan la informacion.

```jsx
<UserContext.Provider value={{ name: 'John Doe' }}>
  <Parent />
</UserContext.Provider>
```

- Consumer: Es el componente que precisa acceder a esta informacion.

```jsx  
import React from 'react';
import { UserContext } from './UserContext';

const Child = () => {
  return (
    <UserContext.Consumer>
      {(user) => <h1>Hola, {user.name}!</h1>}
    </UserContext.Consumer>
  );
};
```

Tambien se puede utilizar el hook `useContext` que facilita la consumicion de esta informacion.

```jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Child = () => {
  const user = useContext(UserContext); // Consumir el contexto directamente
  return <h1>Hola, {user.name}!</h1>;
};
```

Las limitaciones que posee ContextApi son

- Cuando el valor del contexto cambia, los elementos que la consumen se van a re-renderizar de manera innecesaria en algunos casos, es por eso que es recomendable dividir los componentes en unidades mas pequenias para poder manejar esto de mejor manera
- Si preciso manejar estados mas complejos, Redux sigue siendo la mejor opcion

<a id="ent37"></a>

### **useEffect en React**

[Volver al indice](#entrevista-base)

El hook `useEffect` es un hook que aparecio como reemplazo de las funciones de manejo de ciclo de vida de los componentes de clase.

Podemos hacer que se ejecute ante cada renderizado, solo al montar el componente, solo al desmontar el componente, o solo cuando ciertos valores cambian.

```jsx
// Se ejecuta ante cada renderizado
useEffect(() => {
    console.log('Hola');
});

// Se ejecuta solo al montar el componente
useEffect(() => {
    console.log('Hola');
}, []);

// Se ejecuta solo al desmontar el componente
useEffect(() => {
    return () => console.log('Adios');
}, []);

// Se ejecuta solo cuando el valor de `value` cambia
useEffect(() => {
    console.log('Hola');
}, [value]);
```

Se pueden realizar diversas cosas dentro del useEffect, como llamadas a las APIs, para las cuales se recomienda que esten en otra funcion aparte y no dentro del useEffect, convirtiendolo en asincrono, ya que React espera que useEffect devuelva `undefined` o una funcion de limpieza, no una Promise. Probablemente funcione, pero tendremos un error en la consola.

<a id="ent69"></a>

### **useActionState en React**

[Volver al indice](#entrevista-base)

Es un hook que en React 18 fue considerado experimental, utilizado para simpliificr la gestion de acciones asincronas en los componentes, como el estado de `loading`, `error` y `data`.

```jsx
const [state, action, isPending] = useActionState(actionFunction, initialState);
```

- `actionFunction` es la funcion asincrona
- `initialState` es el valor inicial del estado

Este hook nos ahorra usar multiples `useState` para el manejo de estos estados

<a id="ent69-1"></a>

### **React Server Components**

[Volver al indice](#entrevista-base)

Es una caracteristica de React que nos permite renderizar algunos componentes en el lado del servidor, y que el cliente solo reciba el HTML necesario para renderizar la pagina, y que lo hidrate (que significa que los hace interactivos sin tener que re-renderizarlos completamente) de ser necesario, esto es muy util para componentes que son estaticos y no son interactivos, todo esto para evitar la carga de JS inutil.

- Disminuye el peso del bundle 
- Mejora el tiempo de carga ya que el browser no debe hacer tanto trabajo para cargar la pagina
- Se pueden realizar acciones como acceder a una base de datos desde el lado del servidor sin necesitar de involucrar al cliente
- En estos componentes marcados como `Server Component` no se puede usar `useState` o `useEffect`, ya que estos son manejados por el cliente

```jsx
// Componente del Servidor (Rendimiento en el servidor)
export default function ServerComponent() {
  // Este código se ejecuta en el servidor
  const data = fetchDataFromDatabase();  // Llamada al servidor o base de datos
  return <div>Datos del servidor: {data}</div>;
}

// Componente del Cliente (Rendimiento en el cliente)
export default function ClientComponent() {
  // Este componente puede ser interactivo
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Haz clic</button>
      <p>Has hecho clic {count} veces</p>
    </div>
  );
}
```

Es muy util combinar esta funcionalidad con NextJs para mejorar el rendimiento de la aplicacion.

<a id="ent70"></a>

### **startTransition() React**

[Volver al indice](#entrevista-base)

La función `startTransition()` de React es una herramienta que se utiliza para gestionar actualizaciones de estado que no son críticas para la interacción inmediata del usuario. Su principal objetivo es mejorar la **experiencia de usuario** al permitir que las actualizaciones menos importantes no bloqueen el hilo de ejecución principal y no interfieran con las interacciones críticas.

### ¿Cómo funciona `startTransition()`?

En React, las actualizaciones de estado, por defecto, son **sincrónicas**, lo que significa que cualquier cambio en el estado de un componente o renderización se ejecutará inmediatamente, lo cual puede causar problemas de rendimiento si el componente tiene un renderizado pesado o si hay muchos cambios de estado que se ejecutan al mismo tiempo.

`startTransition()` es una API que permite que ciertas actualizaciones no se consideren prioritarias. Cuando usas `startTransition()`, le estás diciendo a React que esta actualización es **baja prioridad** y puede ser interrumpida si el hilo está ocupado haciendo tareas más importantes, como responder a las interacciones del usuario.

### ¿Cómo se usa `startTransition()`?

Aquí tienes un ejemplo básico de cómo usar `startTransition()`:

```javascript
import React, { useState, startTransition } from 'react';

function MyComponent() {
  const [isPending, setIsPending] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    // Aquí usamos startTransition para hacer que el cambio en el estado de inputValue sea de baja prioridad
    startTransition(() => {
      setInputValue(value);
    });

    // Marca si la actualización está pendiente
    setIsPending(true);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {isPending && <div>Updating...</div>}
    </div>
  );
}
```

1. **Prioridad baja para actualizaciones de estado**: Dentro del `startTransition()`, el cambio de estado `setInputValue(value)` se marca como una actualización de baja prioridad, lo que significa que React intentará procesar esta actualización solo cuando haya tiempo disponible, sin bloquear interacciones importantes como el input del usuario.
   
2. **Optimización del rendimiento**: Esto permite que, si hay una actualización costosa o renderizado en progreso, las actualizaciones menos importantes no retrasen la interacción del usuario.

### ¿Cuándo se debería usar `startTransition()`?

Se debe usar `startTransition()` cuando tengas actualizaciones de estado o renderizados que no necesiten ser procesados inmediatamente y que no afecten la interacción directa del usuario. Algunos ejemplos incluyen:

- **Filtros o búsquedas en listas grandes**: Si tienes una búsqueda que filtra una lista muy grande y el filtrado no es urgente.
- **Actualización de datos en segundo plano**: Si necesitas actualizar ciertos estados o cálculos en segundo plano sin interrumpir las interacciones del usuario.
- **Animaciones o cambios visuales complejos**: Para renderizados pesados o animaciones que no son necesarias de inmediato, como transiciones de interfaz de usuario.

### Beneficios de `startTransition()`

1. **Mejora de la experiencia del usuario**: Evita que la interfaz se congele o se sienta lenta debido a renderizados pesados.
2. **Optimización del rendimiento**: Al gestionar las actualizaciones de estado con menor prioridad, React puede hacer las actualizaciones más críticas primero, manteniendo la interfaz fluida.
3. **Control más fino de las actualizaciones**: Permite una separación entre las tareas que son cruciales para la interacción del usuario y las que pueden esperar.

### Limitaciones

- **No reemplaza el uso de `useEffect`**: `startTransition()` no se debe usar para efectos secundarios que deban ocurrir de manera inmediata (como realizar peticiones API).
- **No aplica a todas las actualizaciones de estado**: Debe usarse en contextos donde el rendimiento es una preocupación, pero no es necesario para todas las actualizaciones de estado.

<a id="ent71"></a>

### **Que mejoras hay en la migracion de AngularJS a Angular?**

[Volver al indice](#entrevista-base)

`useFormStatus()` es un **hook** en React que se introdujo en React 18 como parte de las nuevas APIs para mejorar la experiencia de formularios y manejar estados de carga en el proceso de envío de formularios. Está diseñado para trabajar con formularios que pueden estar en un estado de envío o validación y es especialmente útil para mejorar la accesibilidad y la usabilidad cuando los formularios se envían de manera asincrónica.

`useFormStatus()` te permite manejar el estado de un formulario de forma declarativa y reaccionar a las actualizaciones del estado del formulario, como si está enviando datos (en proceso), si hay un error o si se ha completado con éxito.

Este hook ofrece un estado relacionado con la validación y el envío del formulario, incluyendo propiedades como `pending` (si la acción de envío está pendiente), `submitted` (si el formulario ha sido enviado), y `error` (si hubo un error durante el envío).

El hook `useFormStatus()` devuelve un objeto con los siguientes valores:

1. **`pending`**: Un valor booleano que indica si el formulario está en proceso de envío. Es `true` cuando el formulario está esperando una respuesta (por ejemplo, esperando una respuesta del servidor).
2. **`submitted`**: Un valor booleano que indica si el formulario ha sido enviado.
3. **`error`**: Un valor que contiene cualquier error que ocurra durante el proceso de envío del formulario (puede ser un objeto de error si se produjo algún fallo).

Ejemplo básico de uso

Aquí te dejo un ejemplo básico de cómo usar `useFormStatus()` en un formulario React.

```javascript
import React, { useState } from 'react';
import { useFormStatus } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  // Usamos useFormStatus para manejar el estado del formulario
  const { pending, submitted, error } = useFormStatus();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simula el envío del formulario (por ejemplo, hacer una petición a un servidor)
    try {
      // Aquí enviaríamos el formulario a una API, pero en este ejemplo solo simulamos
      await new Promise((resolve) => setTimeout(resolve, 2000));  // Simulando un retraso
      // Si el envío es exitoso, podemos marcar el formulario como enviado
      console.log('Formulario enviado con éxito');
    } catch (error) {
      console.log('Error en el envío:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      
      <button type="submit" disabled={pending}>
        {pending ? 'Enviando...' : 'Enviar'}
      </button>

      {submitted && <p>Formulario enviado con éxito.</p>}
      {error && <p>Error al enviar el formulario: {error.message}</p>}
    </form>
  );
}

export default MyForm;
```

Explicación del código:

1. **Estados de Formulario**:
   - Se utiliza `useState` para manejar los valores del formulario (`formData`).
   - Se utiliza `useFormStatus()` para obtener el estado del formulario en cuanto a su envío (`pending`, `submitted`, `error`).
   
2. **Envío del Formulario**:
   - El formulario está configurado para simular el proceso de envío de datos al hacer una petición simulada con `setTimeout`. 
   - Durante este proceso, el botón de envío está deshabilitado si el formulario está en estado `pending`, es decir, si está esperando una respuesta.
   
3. **Mensajes de Estado**:
   - Si el formulario se envía con éxito, se muestra un mensaje diciendo "Formulario enviado con éxito".
   - Si hay un error durante el envío, se muestra un mensaje de error.

Beneficios de usar `useFormStatus()`

- **Mejora la accesibilidad**: Proporciona un estado claro y consistente sobre el envío del formulario, lo que es útil para los lectores de pantalla y otras herramientas de accesibilidad.
- **Control de estado de carga**: Permite gestionar y mostrar los estados de carga, éxito y error sin tener que manejar manualmente estos estados.
- **Flujo de trabajo simplificado**: Facilita la gestión del estado relacionado con el formulario, simplificando la lógica que generalmente involucra manejar los estados de validación, envío y error.

Consideraciones

- **Compatibilidad**: Asegúrate de que tu versión de React sea 18 o posterior, ya que `useFormStatus()` es una característica nueva que fue introducida en React 18.
- **Flujos de trabajo complejos**: Si tu formulario involucra validación compleja o interacciones con múltiples APIs, es posible que necesites integrar este hook con otros hooks personalizados o librerías como Formik o React Hook Form para manejar el estado y las validaciones de manera más avanzada.

<a id="ent72"></a>

### **useOptimistic() React**

[Volver al indice](#entrevista-base)

El hook `useOptimistic()` es una característica introducida en React para manejar **actualizaciones optimistas** de manera más sencilla y declarativa. Se utiliza para actualizar la interfaz de usuario de manera inmediata, asumiendo que una operación asíncrona se completará correctamente, mientras el servidor procesa los datos. Si la operación falla, puedes revertir el estado de la interfaz de usuario.

Este enfoque mejora la experiencia del usuario al hacer que las actualizaciones sean instantáneas, incluso antes de recibir una confirmación del servidor.

---

### ¿Cómo funciona `useOptimistic()`?

`useOptimistic()` es un hook diseñado para trabajar con estados que podrían necesitar ser actualizados de forma optimista. Al usarlo, defines un estado inicial y una función para calcular el nuevo estado después de una actualización. React se encargará de manejar ese estado temporalmente mientras la operación real se completa.

El hook devuelve un par de valores:

1. **`optimisticState`**: El estado actual, incluyendo cualquier cambio optimista que se haya realizado.
2. **`setOptimisticState`**: Una función para actualizar el estado de manera optimista.

---

### Sintaxis de `useOptimistic()`

```javascript
const [optimisticState, setOptimisticState] = useOptimistic(initialState, reducer);
```

- **`initialState`**: El estado inicial que quieres usar.
- **`reducer`**: Una función que calcula el nuevo estado basado en el estado actual y una acción.

---

### Ejemplo básico

Aquí tienes un ejemplo de cómo usar `useOptimistic()` para manejar una lista de tareas donde las eliminaciones se manejan de forma optimista:

```javascript
import React, { useOptimistic } from 'react';

function TodoList() {
  const initialTodos = [
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir una app' },
    { id: 3, text: 'Publicar en producción' },
  ];

  // Estado optimista para la lista de tareas
  const [todos, setTodos] = useOptimistic(initialTodos, (currentTodos, action) => {
    switch (action.type) {
      case 'delete':
        // Eliminar tarea de manera optimista
        return currentTodos.filter((todo) => todo.id !== action.id);
      default:
        return currentTodos;
    }
  });

  const handleDelete = async (id) => {
    // Actualización optimista: elimina la tarea de inmediato
    setTodos({ type: 'delete', id });

    try {
      // Simular una operación asíncrona, como una petición al servidor
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error('Error eliminando la tarea:', error);
      // Si falla, puedes manejar la reversión manualmente (aquí no se implementa).
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button onClick={() => handleDelete(todo.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
```

---

### Explicación del ejemplo:

1. **Estado optimista**: Usamos `useOptimistic()` para definir un estado inicial de tareas y un `reducer` que nos permite actualizar ese estado de forma declarativa.

2. **Actualización optimista**: Cuando el usuario elimina una tarea, el estado se actualiza inmediatamente en la interfaz de usuario sin esperar la confirmación del servidor.

3. **Reversión manual (si es necesario)**: Si la operación asíncrona (como la petición al servidor) falla, puedes manejar la reversión al estado anterior. Este manejo de errores no se incluye en el ejemplo, pero es importante para aplicaciones reales.

---

### ¿Cuándo usar `useOptimistic()`?

Usa `useOptimistic()` cuando quieras manejar interacciones de usuario con actualizaciones rápidas en la interfaz, pero que dependen de operaciones asíncronas que podrían fallar. Algunos casos comunes incluyen:

- **Edición de datos**: Actualizar textos, estados o elementos en una lista.
- **Eliminaciones**: Mostrar instantáneamente que un elemento fue eliminado, aunque aún no se haya confirmado en el servidor.
- **Creación de elementos**: Mostrar nuevos elementos en la interfaz antes de recibir confirmación del servidor.
- **Actualizaciones de likes/reacciones**: Incrementar un contador de likes instantáneamente mientras se envía la acción al servidor.

---

### Beneficios de `useOptimistic()`

1. **Experiencia de usuario mejorada**: Las actualizaciones optimistas hacen que la aplicación parezca más rápida y responsiva.
2. **Código más declarativo**: Con el uso de un `reducer`, puedes definir cómo manejar diferentes acciones de manera clara.
3. **Integración con la API de React**: Funciona perfectamente con las características de React 18, como el concurrent rendering.

---

### Consideraciones:

- **Reversión manual**: Si la operación falla, tendrás que manejar manualmente la reversión del estado optimista.
- **No es adecuado para todas las operaciones**: Si el resultado de la operación en el servidor afecta de manera significativa la lógica de la aplicación, puede ser mejor esperar a la confirmación antes de actualizar el estado.
- **Evitar estados inconsistentes**: Asegúrate de manejar errores correctamente para que la interfaz no muestre datos incorrectos.


<a id="ent51-1"></a>

### **Que mejoras hay en la migracion de AngularJS a Angular?**

[Volver al indice](#entrevista-base)

| AngularJS | Angular |
| --- | --- |
| Arquitectura MVC (no estrictamente aplicado pero que usaba varios conceptos del mismo donde se separa la logica de negocio de la vista y el controlador) donde los controllers eran el nucleo de la logica de los componentes, y las directivas permitian la reutilizacion de partes de la interfaz | Arquitectura basada en componentes, cada componente tiene su vista y logica, mejorando la modularidad y reutilizacion de codigo |
| Poseia inyeccion de dependencias aunque era mucho mas complejo de entender, y no era facil de testear | Inyeccion de dependencias mucho mas facil de entender y de testear |
| El lenguaje principal de AngularJs es Javascript | Angular por defecto usa Typescript |
| Funcionaba con two-way data binding, que era bueno pero en aplicaciones grandes podia significar un gran problema de rendimiento ya que para mantener los datos actualizados en la vista se debian hacer muchas operaciones | Usa one-way data binding, que es mucho mas eficiente y facil de mantener, ademas de introducir Change Detection y compilacion AOT (ahead of time) precompilando el codigo antes de la ejecucion mejorando tiempos de carga |
| El sistema de routing de AngularJs era bueno y basico | El sistema de routing de Angular es mas avanzado y ofrece muchas mas herramientas como lazy loading, guards, resolvers, etc |
| Soportaba enlaces bidireccionales de datos, pero no estaba enfocado en una programacion reactiva | Se puede usar RxJS para manejar los datos de manera reactiva |
| Todo nuevo archivo y agregado debia hacerse a mano | Se cuenta con Angular CLI que automatiza muchas cosas |
| En AngularJS tenemos modulos, pero no se soporta el Lazy Loading | Se soporta el Lazy Loading |

<a id="ent65"></a>

### **Decorators en Angular**

[Volver al indice](#entrevista-base)

El concepto de decorators en si no es propio de Angular si no que viene de Typescript. Los decoradores son funciones que se utilizan para modificar clases, metodos, propiedades, parametros, etc.

- `@Component`: Se utiliza para decorar una clase que define un componente de Angular

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombre de la etiqueta HTML
  templateUrl: './app.component.html', // Archivo HTML
  styleUrls: ['./app.component.css'] // Estilos CSS
})
export class AppComponent {
  title = 'Mi aplicación Angular';
}
```

- `@Injectable`: marca una clase como inyección de dependencias en Angular. Se usa para declarar que una clase puede ser inyectada en otros componentes o servicios

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Este servicio estará disponible en toda la aplicación
})
export class DataService {
  constructor() {}

  getData() {
    return ['Elemento1', 'Elemento2', 'Elemento3'];
  }
}
```

- ` @NgModule`: Se usa para definir que este componente es un modulo en si mismo. Con la aparicion de los componentes standalone ya no es tan comunmente usado.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Componentes que pertenecen al módulo
  imports: [BrowserModule], // Otros módulos que necesita
  providers: [], // Servicios a inyectar
  bootstrap: [AppComponent] // Componente inicial
})
export class AppModule {}
```

- `@Input`: se utiliza para marcar una propiedad de un componente que va a recibir datos desde su componente padre.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h2>{{ name }}</h2>'
})
export class ChildComponent {
  @Input() name: string; // Recibe un valor desde el componente padre
}
```

- `@Output`: El decorador @Output se usa para crear un evento personalizado en un componente que puede ser escuchado por su componente padre.

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="sendMessage()">Enviar Mensaje</button>'
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hola desde el componente hijo');
  }
}
```

- `@HostListener`: Cuando preciso escuchar cualquier accion en el navegador, como clicks o cambios en el tamanio de la pantalla.

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-resize-listener',
  template: '<p>El tamaño de la ventana es: {{ width }}px</p>'
})
export class ResizeListenerComponent {
  width: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
  }
}
```

- `@ViewChild`: Se utiliza para acceder a un componente hijo desde su componente padre.

```typescript
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child #childComponent></app-child>'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('childComponent') child: any;

  ngAfterViewInit() {
    console.log(this.child); // Accede al componente hijo
  }
}
```

<a id="ent65-1"></a>

### **Angular Signals**

[Volver al indice](#entrevista-base)

Angular signals es una caracteristica que aparecio con Angular 16 en donde se introducen herramientas de reacividad para mejorar la gestion de estados y deteccion de cambios. Reemplaza a algunos elementos nativos y a algunos usos de RxJs

Se inspira en **Patrones declarativos** como en el caso de SolidJS o Svelte. 

Un **Signal** es un contenedor que mantiene un valor reactivo (es decir, un valor que cambia con el tiempo) y que puede ser observado por otros componentes, entonces cuando este valor cambia, los componentes cambian en consecuencia. 

```typescript
import { signal } from '@angular/core';

const counter = signal(0); // Signal inicializado con un valor
console.log(counter()); // Acceder al valor del signal: 0

counter.set(1); // Actualizar el valor del signal
console.log(counter()); // Acceder al nuevo valor: 1
```

No es necesario el manejo de subscripciones como en el caso de RxJS ya que la reactividad esta integrada en el mismo Angular. 
Al cambiar este Signal, Angular actualiza solo lo necesario sin tener que recorrer todo el arbol de componentes. 

Se pueden crear Signals compuestos, es decir, de mas de un elemento en ellos

```typescript
import { signal, computed } from '@angular/core';

const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => `${firstName()} ${lastName()}`);

console.log(fullName()); // "John Doe"

firstName.set('Jane');
console.log(fullName()); // "Jane Doe"
```

Y si quiero ejecutar una logica cuando un Signal cambia, puedo usar los `Effects`, algo muy similar al `useEffect` de React

```typescript
import { signal, effect } from '@angular/core';

const counter = signal(0);

effect(() => {
    console.log(`Counter value is: ${counter()}`);
});

counter.set(1); // Consola: "Counter value is: 1"
```

<a id="ent38"></a>

### **¿Qué es RxJS y qué problemas resuelve en el desarrollo de aplicaciones?**

[Volver al indice](#entrevista-base)

Reactive Extensions for Javascript (RxJS) es una libreria que nos permite trabajar con programacion reactiva en Javascript permitiendo el manejo de flujos asincronos de una forma mas declarativa, reactiva y consistente.

- Manejo de peticiones asincronas, en vez de utilizar Callbacks o Promises anidados, se pueden utilizar Observables para manejar flujos de datos asincronos
- Cuando tengo varias fuentes de datos que manejar que interactuan entre si, en RxJS puedo utilizar operadores como `map`, `combineLatest`, `map`, `filter` y `switchMap` para manejar estos flujos.
- RxJS ofrece herramientas como `takeUntil` o `takeWhile` para manejar las subscripciones de una forma eficiente y asi evitar memory leaks
- Con RxJs puedo manejar tanto flujos de datos sincronicos como asincronicos, y puedo combinarlos de una forma muy sencilla
- Si necesito coordinar multiples tareas asincronicas o flujos, RxJS me permite hacerlo de una forma muy sencilla con `forkJoin`, `merge`, `concat`, `combineLatest`, `zip`, etc, mejorando la concurrencia (la cual significa que puedo manejar multiples tareas al mismo tiempo)

En parte su uso podria ser reemplazado con Angular Signals en Angular 16, pero RxJS sigue siendo una herramienta muy poderosa para manejar flujos de datos asincronos.

<a id="ent39"></a>

### **¿Qué es un Observable en RxJS y cómo difiere de una Promesa en JavaScript?**

[Volver al indice](#entrevista-base)

RxJS (Reactive Extensions for JS) es una libreria que nos permite trabajar con programacion reactiva en Javascript, y la misma posee `Observables` que es un objeto que reprssenta una coleccion de valores o eventos que se emiten a lo largo del tiempo.

Las Promises solo pueden manejar un valor o evento, los Observables pueden manejar varias de manera sincronica e asincronica, por eso es ideal para el manejo de solicitudes HTTP. 

Los observables pueden ser modificados mediante el uso de otras tools de RxJS como `map` (transforma los valores), `filter` (filtra los valores), `reduce` (reduce los valores), `merge` (combina los valores de varios observables), `concat` (combina los valores de varios observables en orden), `forkJoin` (combina los valores de varios observables y devuelve un solo valor), `switchMap` (cancela la subscripcion anterior y se suscribe a la nueva), `debounceTime` (espera un tiempo antes de emitir un valor), `distinctUntilChanged` (emite un valor solo si es diferente al anterior), `catchError` (captura un error y lo maneja), `retry` (reintenta la operacion si falla), entre otros.

Sin embargo los observables por si mismos no hacen nada, precisan que algo este **subscripto** a ellos para que hagan algo, es por eso que es importante desubscribirse de ellos en el estado unmounted de la aplicacion. 

```javascript
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe({
  next(value) {
    console.log(value); // 'Hello', 'World'
  },
  complete() {
    console.log('Done!');
  }
});
```

| Promises | Observables |
| --- | --- |
| Solo pueden emitir un valor o un error | Pueden emitir multiples valores a lo largo del tiempo siempre y cuando la subscripcion este activa |
| Apenas se crea la Promise, la misma es ejecutad, se le dice `Eager` | No hace nada hasta que alguien este observandolo, es por eso que se le dice `lazy`, porque por si mismo no hace nada |
| La promesa no se puede cancelar | Se puede cancelar la subscripcion a un observable |

<a id="ent40"></a>

### **Explica la diferencia entre un Observable "cold" y "hot". Proporciona un ejemplo práctico de cada uno.**

[Volver al indice](#entrevista-base)

Los **Cold Observables** son Observables que crean un flujo de datos por cada subscriptor, produciendo datos on-demand, es decir, solo cuando alguien se subscribe. El ejemplo mas comun es el llamado a un servicio con HTTP.

```typescript
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const httpObservable = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1');

// Ambas ejecutaran una llamada HTTP
httpObservable.subscribe(data => console.log('Subscriber 1:', data));
httpObservable.subscribe(data => console.log('Subscriber 2:', data));
``` 

Los **Hot Observables** tienen su propio flujo independiente de las subscripciones, un ejemplo puede ser un WebSocket, donde los datos se emiten independientemente de las subscripciones. Tambien puede suceder que si una parte de subscribe de forma muy tardia, se pierda de alguna informacion, no vera ningun historial al respecto.

```typescript
import { fromEvent } from 'rxjs';

const clicks$ = fromEvent(document, 'click');

clicks$.subscribe(() => console.log('Subscriber 1: Click detected'));
setTimeout(() => {
  clicks$.subscribe(() => console.log('Subscriber 2: Click detected (late subscriber)'));
}, 5000);
```

<a id="ent41"></a>

### **Beneficios de usar un CDN**

[Volver al indice](#entrevista-base)

El uso de CDN consta de poner todos mis archivos estaticos en un servidor (preferentemente de alta disponibilidad) para poder obtener mis archivos desde ahi, y no desde mi propio bundle, aumentando asi el peso del mismo.

Como la idea del servidor CDN (Content Delivery Network) es que sea de alta disponibilidad, es muy comun tener servidores en distintas regiones, permitiendo que el usuario acceda al servidor mas cercano a su ubicacion actual para poder obtener la informacion de manera mucho mas rapida. 

Tambien el contenido obtenido de estos CDN es guardado por el servidor a modo de catching, haciendo que su segunda obtencion sea mucho mas veloz. 

Generalmente se usan para:

- Archivos estaticos como fue anteriormente mencionado
- Distribucion de librerias de terceros como por ejemplo Bootstrap
- Entrega de contenido multimedia que puede ser un poco pesado
- Paginas web globales

Cloudflare, Akamai, AWS CloudFront, Google Cloud CDN, son algunos servicios disponibles para CDN cuyo precio varia segun el servicio de catching, seguridad y latencia.

<a id="ent42"></a>

### **Como organizarias el code reuse en una aplicacion?**

[Volver al indice](#entrevista-base)

- Una forma seria fomentando la **Modularizacion**, haciendo modulos reutilizables y separados por responsabilidades. Usa patrones como Separation of Concerns (SoC) y Single Responsibility Principle (SRP)
- Algo muy parecido pero cuando se utilizan frameworks de Frontend pero con los componentes visuales. 
- Hacer uso del tipico archivo `utils` con funciones que pueden ser utilizadas en toda la aplicacion.
- Mismo con los servicios. Apuntar a un patron `Singleton` para garantizar que solo haya una instancia de un servicio en toda la aplicacion.
- Si hay alguna funcion que incluso podria ser usada en otras aplicaciones, considerar la creacion de una libreria.
- Apoyarse mucho en patrones de disenio:
  - Factory Pattern: Crear objetos de forma centralizada
  - Singleton Pattern: Resguardar una sola instancia de un objeto
  - Observer Pattern: Manejar eventos y notificaciones de manera centralizada
  - Strategy Pattern: Cambiar el comportamiento de un objeto en tiempo de ejecucion, para encapsular diferentes algoritmos reutilizables. Esto podria relacionarse mucho con la herencia.

```typescript
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using credit card`);
  }
}

class PaypalPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

const paymentMethod: PaymentStrategy = new CreditCardPayment();
paymentMethod.pay(100); // "Paid 100 using credit card"
```

- En React el uso de custom Hooks es ideal para el manejo de logica repetida
- Hacer uso del tipico archivo de constantes para manejar la misma informacion a lo largo de toda la aplicacion desde una misma fuente.

<a id="ent43"></a>

### **Que es un higher order component?**

[Volver al indice](#entrevista-base)

Es un patron de disenio muy comunmente usado en React en donde una funcion recibe como parametro un componente y devuelve un componente nuevo con una funcioanlidad extendida.

```jsx
const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { extra: 'some extra prop' };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};
```

Es muy comun cuando debo chequear varias veces si el usuario se encuentra autenticado en la aplicacion

```jsx
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Lógica de autenticación
    if (!isAuthenticated) {
      return <div>No estás autenticado</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const Dashboard = () => {
  return <h1>Bienvenido al Dashboard</h1>;
};

const ProtectedDashboard = withAuth(Dashboard);

// Ahora ProtectedDashboard verifica autenticación antes de renderizar Dashboard
export default function App() {
  return <ProtectedDashboard />;
}

```

Existe el concepto de **wrapper hell** en donde tengo demasiados niveles anidados en los componentes, este fue el motivo por el cual React introdujo a los Custom Hook 

```jsx
const useAuth = () => {
  const isAuthenticated = true; // Lógica de autenticación
  return isAuthenticated;
};

const Dashboard = () => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <div>No estás autenticado</div>;
  }
  return <h1>Bienvenido al Dashboard</h1>;
};
```

Hoy en dia los HOC son utiles cuando se utilizan patrones de clases, o cuando se necesita un mayor control sobre el ciclo de vida del componente.

<a id="ent44"></a>

### **Patrones de disenio en React**

[Volver al indice](#entrevista-base)

**Componentizacion**

Es el separar la interfaz de usuario en componentes reutilizables, es la base de React en si mismo.

**Contenedor y Presentación (Container-Presenter Pattern)**

Separar los componentes que se encargan de la UI de los componentes de logica. Se le dice componente presentacion y componente contenedor

```jsx
// Componente Presentación
const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

// Componente Contenedor
const UserContainer = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <UserList users={users} />;
};

export default UserContainer;
```

**Higher-Order Components (HOCs)**

Como se explico anteriormente, es un patron de disenio muy comunmente usado en React en donde una funcion recibe como parametro un componente y devuelve un componente nuevo con una funcionalidad extendida.

```jsx
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Componente renderizado con props:', props);
    return <WrappedComponent {...props} />;
  };
};

// Uso
const MyComponent = ({ message }) => <div>{message}</div>;
const MyComponentWithLogging = withLogging(MyComponent);

// Render
<MyComponentWithLogging message="Hola, mundo!" />;
```

**Render Props**

Es un patron de disenio que permite a los componentes compartir logica de renderizado con otros componentes.

```jsx
const Mouse = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return render(position);
};

// Uso
const App = () => (
  <Mouse
    render={({ x, y }) => (
      <div>
        <h1>El mouse está en la posición ({x}, {y})</h1>
      </div>
    )}
  />
);
```

**Custom Hooks**

Es un patron de disenio que permite extraer logica de un componente en una funcion reutilizable. reemplaza en parte a los HOC

```jsx
const useMouse = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

// Uso
const App = () => {
  const { x, y } = useMouse();

  return (
    <div>
      <h1>El mouse está en la posición ({x}, {y})</h1>
    </div>
  );
};
```

**Context API - Context pattern**

Es un patron de disenio que permite pasar datos a traves del arbol de componentes sin tener que pasar props manualmente en cada nivel. Elimina el Prop Drilling.

```jsx
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
```

**Compound Components**

Es un patron de disenio que permite a los componentes trabajar juntos de manera mas eficiente, como por ejemplo un `select` y `option`

```jsx
const Select = ({ children }) => {
  const [selected, setSelected] = React.useState(null);

  const onSelect = (value) => {
    setSelected(value);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === Option) {
          return React.cloneElement(child, {
            onSelect,
            selected: child.props.value === selected
          });
        }
        return child;
      })}
    </div>
  );
};

const Option = ({ value, onSelect, selected, children }) => (
  <div
    onClick={() => onSelect(value)}
    style={{ background: selected ? 'lightblue' : 'white' }}
  >
    {children}
  </div>
);

// Uso

const App = () => (
  <Select>
    <Option value="1">Opción 1</Option>
    <Option value="2">Opción 2</Option>
    <Option value="3">Opción 3</Option>
  </Select>
);
```

**Controlled y Uncontrolled Components**

Es un patron de disenio que permite manejar los componentes de una forma mas eficiente, en los **Controlled Components** el estado del componente es manejado por React, mientras que en los **Uncontrolled Components** el estado es manejado por el propio componente.

```jsx
// Controlled Component
const ControlledInput = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input value={value} onChange={handleChange} />;
};

// Uncontrolled Component
const UncontrolledInput = () => {
  const inputRef = React.useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
    // El estado es manejado por el DOM
      <input ref={inputRef} />
      <button onClick={handleClick}>Obtener valor</button>
    </div>
  );
};
```

<a id="ent45"></a>

### **Patrones de disenio en Angular**

[Volver al indice](#entrevista-base)

**Arquitectura modular**

Trata de separar toda la aplicacion en modulos logicos y funcionales que agrupan componentes, servivios y directivas relacionadas.

```typescript
// Módulo de usuario (user.module.ts)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
})
export class UserModule {}

// Módulo principal (app.module.ts)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Inyeccion de Dependencias**

Angular gestiona los servicios compartidos mediante la inyeccion de dependencias. Se inyecta mediante el constructor o con `injector`

```typescript
// Servicio (logger.service.ts)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponible en toda la app
})
export class LoggerService {
  log(message: string): void {
    console.log('Log:', message);
  }
}

// Componente que usa el servicio (app.component.ts)
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="logMessage()">Log</button>`,
})
export class AppComponent {
  constructor(private logger: LoggerService) {}

  logMessage(): void {
    this.logger.log('Mensaje desde el componente');
  }
}
```

**Component Communication**

Es el uso de `@Input` y `@Output` para la comunicacion entre componentes, en conjunto con `EventEmitter` para emision de eventos desde componentes hijos y `ViewChild` para acceder a componentes hijos desde componentes padres.

```typescript
// Componente hijo (child.component.ts)
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="notify()">Notificar al padre</button>`,
})
export class ChildComponent {
  @Input() childMessage: string = ''; // Recibe datos del padre
  @Output() notifyParent = new EventEmitter<string>();

  notify(): void {
    this.notifyParent.emit('Mensaje del hijo');
  }
}

// Componente padre (parent.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child
      [childMessage]="'Hola desde el padre'"
      (notifyParent)="handleNotification($event)"
    ></app-child>
  `,
})
export class ParentComponent {
  handleNotification(message: string): void {
    console.log('Mensaje recibido:', message);
  }
}
```

**Singleton Services**

Si un servicio que luego sera inyectado posee el `injectable` con el valor `root` eso significa que habra una sola instancia de la misma en toda la aplicacion.

```typescript
// Servicio global (state.service.ts)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state = { counter: 0 };

  getCounter(): number {
    return this.state.counter;
  }

  incrementCounter(): void {
    this.state.counter++;
  }
}

// Componentes que comparten el estado
@Component({ /* ... */ })
export class ComponentA {
  constructor(private stateService: StateService) {}

  increment(): void {
    this.stateService.incrementCounter();
  }
}

@Component({ /* ... */ })
export class ComponentB {
  constructor(private stateService: StateService) {}

  getCounter(): number {
    return this.stateService.getCounter();
  }
}
```

**Redux Pattern**

Es el uso de Redux o NgRx para el manejo de estados complejos en aplicaciones grandes. 

```typescript

// Defino estado y accioned

export interface AppState {
  count: number;
}

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// Reducer

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);

// Uso

export class CounterComponent {
  count$ = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
```

**Reactive Forms**

Mediante el uso de `ReactiveFormsModule` puedo manejar estados complejos de formularios.

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="name" placeholder="Nombre" />
      <button type="submit" [disabled]="form.invalid">Enviar</button>
    </form>
  `,
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
```

**Lazy Loading**

Es el uso de `loadChildren` en el archivo de rutas para cargar modulos de manera asincrona.

```typescript
// Ruta con Lazy Loading (app-routing.module.ts)
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
];
```

**Facade Pattern**

Abstrae la logica compleja de varios servicios en una sola clase para proporcionar una API simplificada para el resto de la aplicacion.

Por ejemplo en este caso, `UserFacade` combina el uso de `userService` y `authService` en uno solo.

```typescript
// Servicios individuales
@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() {
    return { name: 'John Doe' };
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated() {
    return true;
  }
}

// Fachada (user.facade.ts)
@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  getUserData() {
    if (this.authService.isAuthenticated()) {
      return this.userService.getUser();
    }
    return null;
  }
}

// Componente que usa la fachada
@Component({ /* ... */ })
export class ProfileComponent {
  constructor(private userFacade: UserFacade) {}

  getUser() {
    console.log(this.userFacade.getUserData());
  }
}
```

<a id="ent46"></a>

### **Patrones de disenio en Frontend**

[Volver al indice](#entrevista-base)

**Patrones de estructura**

- **Atomic Design**: Basado en dividir la interfaz en componentes más pequeños y reutilizables. Los átomos son los elementos básicos (como botones e inputs), las moléculas combinaciones de átomos (como un formulario), y los organismos son bloques completos de la interfaz (como una barra de navegación).
- **Layout Responsivos**: Usar técnicas como CSS Grid o Flexbox junto con media queries para crear interfaces adaptativas que se ajusten a diferentes resoluciones y dispositivos.
- **Componentizacion**: Dividir la UI en componentes reutilizables mejora la mantenibilidad, legibilidad y escalabilidad del código.

**Patrones de comportamiento**

- **Singleton**: Manejar un unico estado compartido across toda la aplicacion como una sesion de usuario o un carrito de compras. 
- **Observer**: Manejar eventos y notificaciones de manera centralizada mediante subscripciones y emisiones de eventos. Por ejemplo, es útil para manejar eventos en tiempo real, como actualizaciones de datos en un chat o en una notificación global.
- **Strategy**: Cambiar el comportamiento de un objeto en tiempo de ejecucion, para encapsular diferentes algoritmos reutilizables. Esto podria relacionarse mucho con la herencia. Por ejemplo, en una tienda online, podrías encapsular diferentes estrategias de cálculo de descuento para aplicarlas en diferentes contextos.
- **Factory**: Crear objetos de forma centralizada. Por ejemplo, se puede usar una Factory para generar diferentes instancias de botones o componentes dinámicamente, dependiendo de los parámetros recibidos.
- **Decorator**: Agregar funcionalidades a un objeto sin modificar su estructura. Por ejemplo, añadir un log a una función sin modificar su lógica original.
- **Facade**: Abstrae la logica compleja de varios servicios en una sola clase para proporcionar una API simplificada para el resto de la aplicacion. Por ejemplo, un servicio que combine múltiples API y exponga una interfaz simplificada a los consumidores.
- **Adapter**: Permite que dos interfaces incompatibles trabajen juntas
- **Chain of Responsibility**: Permite que multiples objetos manejen una peticion sin que el cliente sepa cual objeto la maneja
- **Command**: Encapsula una peticion como un objeto, permitiendo parametrizar clientes con diferentes peticiones, colas y logs
- **State**: Permite que un objeto cambie su comportamiento cuando su estado cambia
- **Memento**: Permite que un objeto capture su estado interno y lo restaure mas tarde
- **Proxy**: Proporciona un objeto de sustitucion o marcador de posicion para otro objeto
- **Template Method**: Define el esqueleto de un algoritmo en una operacion, permitiendo que las subclases redefinan ciertos pasos del algoritmo sin cambiar su estructura

**Patrones de renderizado**

- **Lazy Loading**: Retrasa la carga de recursos hasta que los mismos sean necesarios
- **Skeleton Screens**: Muestra un esqueleto, es decir, un elemento basico o placeholder mientras los datos reales son cargados
- **Infinite Scroll y Paginacion**: Carga de contenido mediante el scroll o mediante la paginacion

**Patrones de gestion de estado**

- **Flux**: Patron unidireccional de flujo de datos como Redux. (acciones -> reducers -> estado -> vista).
- **MVC** Se divide la logica en 3 capas, el modelo donde se gestionan datos, view donde se muestran los datos y controller, donde se conectan ambos
- **MVVM**: Modelo Vista VistaModelo, donde el ViewModel se encarga de la logica de negocio y la vista de la presentacion, en esto se basa Angular

**Patrones de comunicacion**

- **Mediator**: Un intermediario que gestiona la comunicación entre módulos o componentes. Un ejemplo es Redux o ContextApi, mejora la desacopladura entre módulos, lo que simplifica el mantenimiento.
- **Pub-Sub**: Componentes se encargan de publicar eventos y otros se subcriben a los mismos, como un sistema de notificaciones. `EventEmitter` en Angular o `EventTarget` en Javascript

**Patrones de optimizacion**

- **Virtual DOM**: Usado en React para comparar en todo momento las diferencias entre el DOM y el DOM Virtual, y asi actualizar solo lo necesario.
- **Code Splitting**: Dividir el codigo en distintos bundles para cargar solo lo necesario, usar `React.lazy` o `import()`
- **Memoizacion**: Guardar el resultado de una funcion para evitar recalcularlo en el futuro

<a id="ent47"></a>

### **Antipatrones en Frontend**

[Volver al indice](#entrevista-base)

Un antipatron es una solucion comun pero ineficiente a un problema comun.

- Spaghetti Code: Codigo desorganizado y dificil de mantener
- Over-Engineering: Hacer una solucion mas compleja de lo necesario
- HArdcoding: Codificar valores que deberian ser dinamicos
- Global Scope Pollution: Crear variables globales que pueden ser accedidas desde cualquier parte de la aplicacion pero en demasiada cantidad, causando conflictos
- Lack of State Management: No manejar el estado de la aplicacion de manera eficiente, como usar `useState` en muchos componentes sin ningun tipo de sincronizacion clara
- No seguir el principio DRY (Do not repeat youself) copiando y pegando codigo en lugar de hacerlo reutilizable
- Overfetching, es traer demasiada informacion desde un servicio cuando solo preciso una parte
- Underfetching es lo contrario al anterior, traer menos datos de los que necesito, obligandome a hacer demasiadas llamadas
- CSS Specificity Hell, es cuando se tiene un archivo de estilos muy grande y no se puede sobreescribir facilmente
- No manejar errores de manera correcta, por ejemplo, no usar el bloque catch en un llamado asincronico.

<a id="ent48"></a>

### **Que es el Server Side Rendering?**

[Volver al indice](#entrevista-base)

Consta de renderizar los componentes del lado del servidor en lugar del HTMl minimo y necesario. 

- Se hace una solicitud al servidor
- El servidor procesa los componentes y genera un HTML completamente renderizado basado en datos necesarios
- Se entrega el HTML al cliente
- El codigo cliente hidrata este codigo, haciendolo interactivo

Sus **beneficios** son:

- Mejor rendimiento inicial ya que se recibe un HTML ya completo
- SEO optimizado ya que los motores de busqueda pueden leer el contenido de la pagina de antemano e indexarlo, mismo para las redes sociales
- Mayor accesibilidad, todo lo estatico ya se encuentra en pantalla para ser consumido

Sus **desventajas** son:

- Mayor carga en el servidor ya que debe procesar cada solicitud y si es una aplicacion muy grande se vuelve mas complicado
- Latencia inicial, debe cargarse todo y en el mientras tanto puede que no veamos nada
- Es complejo de aplicar
- La hidratacion puede ser costosa de implementar

Generalmente se usa NextJs que es un framework de React que facilita la implementacion de SSR

```javascript
import React from 'react';

export async function getServerSideProps() {
  // Código que se ejecuta en el servidor
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());
  return { props: { posts: data } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

En el caso de Angular existe Angular Universal. 

Se recomienda usar SSR cuando:

- Nuestra pagina depende del SEO
- Se quiere mejorar el tiempo de primera carga para usuarios con conexiones lentas
- Es importante tener contenido 100% accesible

<a id="ent52"></a>

### **Que es el Static site rendering?**

[Volver al indice](#entrevista-base)

Es basicamente cuando las paginas de una web se generan como archivos HTML estaticos en el momento de la compilacion. El contenido es estatico y esta listo para ser servido por un CDN o un servidor, no es generado de manera dinamica. No se depende del backend para la carga.

En React se puede implementar usando `getStaticProps`

```javascript
import React from "react";

export async function getStaticProps() {
  // Llamada a una API o fuente de datos durante el tiempo de compilación
  const data = await fetch("https://api.example.com/posts").then((res) =>
    res.json()
  );

  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

Tambien se utiliza `Gatsby` para esto. Toda la generacion de contenido ocurre durante la compilacion

```jsx
import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default function Blog({ data }) {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <article key={index}>
          <h2>{node.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </article>
      ))}
    </div>
  );
}
```

Se recomienda su uso para portfolios, documentaciones, landing pages, todo lo que sea estatico y no posea mucha posibilidad de interaccion.

<a id="ent54"></a>

### **Arquitectura de microfrontends**

[Volver al indice](#entrevista-base)

Es una arquitectura que se basa en dividir partes de una pagina en distintos repositorios independientes a cargo de distintos equipos. Todo los microfrontend se juntan para formar la aplicacion en si misma. 

Para cada repositorio se puede usar la tecnologia deseada, despliegues independientes, escalabilidad y mantenibilidad. Tambien el mismo microfrontend puede ser utilizado varias veces. 

Sus desventajas son que se requiere una infraestructura mucho mas poderosa para poder gestionar los mismos. 

Dentro de la arquitectura de microfrontend tenemos distintos **Patrones de integracion**

**Integracion del lado del servidor**

El servidor ensambla todos los componentes antes de enviarla al cliente.

**Integracion del lado del cliente**

Cada microfrontend es cargado de manera independiente en el cliente y se ensambla en el navegador.

**Integracion basada en iframes**

Cada microfrontend es renderizado en su propio iframe independiente

**Integracion basada en Web Components**

Cada microfrontend es un Web Component independiente que se puede cargar en cualquier aplicacion

Entre microfrontends la comunicacion se manera de la siguiente manera:

- Eventos globales, crear un `bus de eventos` para que los microfrontends se comuniquen entre si
- Estado compartido, usar herramientas como Redux, RxJs o un almacenamiento global que este compartido
- Pasar datos mediante props, como si fueran componentes de React
- API-REST o GraphQL si quiero que los componentes se comuniquen mediante una API

<a id="ent56"></a>

### **¿Qué es el concepto de "code splitting" y cómo se implementa en una aplicación web?**

[Volver al indice](#entrevista-base)

El Code Splitting es una tecnica en frontend para mejorar la performance, basicamente trata de no cargar todos los archivos o modulos de la aplicacion al mismo tiempo, sino que se carguen solo cuando sean necesarios.

Se puede implementar mediante el uso de Webpack y su funcion `import()`

```javascript
// Antes: importar todo de forma estática
import { heavyFunction } from './heavyModule';
heavyFunction();

// Con code splitting: importar de forma dinámica
const loadHeavyModule = async () => {
  // Heavy module sera cargado solo cuando se llame a la funcion, guardado en un archivo aparte
    const { heavyFunction } = await import('./heavyModule');
    heavyFunction();
};

loadHeavyModule();
```

Tambien ofrece la posibilidad de dividir varias partes del codigo en bundles distintos

```javascript
entry: {
    app: './src/index.js',
    admin: './src/admin.js'
},
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
}
```

En React se utiliza `React.lazy` y `Suspense` para cargar componentes de manera dinamica

```javascript
import React, { Suspense } from 'react';

// Importar un componente de forma dinámica
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
    <Suspense fallback={<div>Cargando...</div>}>
    // Solo se cargara mientras sea necesario, mientras tanto se muestra el loading
        <LazyComponent />
    </Suspense>
);

export default App;
```

En Angular se puede implementar en las rutas, las cuales pueden cargar solo cuando sean necesarias

```typescript
const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
];
```

El modulo `admin` solo se cargara cuando se acceda a la ruta `/admin`

En JS vainilla se puede implementar mediante imports dinamicos

```javascript
document.getElementById('loadFeature').addEventListener('click', () => {
    import('./feature.js')
        .then((module) => {
            module.runFeature();
        })
        .catch((err) => {
            console.error('Error cargando el módulo:', err);
        });
});
```

<a id="ent57"></a>

### **¿Qué es el concepto de "serverless" y cómo se implementa en una aplicación web?**

[Volver al indice](#entrevista-base)

Serverless es una arquitectura donde no se tienen servidores on-premise (es decir, fisicos en un datacenter propio)  si no que se dependen de servicios en la nube como AWS, Azure o Google Cloud para proveer estos servicios. 

En el caso de la web se podria manejar de la siguiente manera:

- **Frontend**: Se puede usar servicios como AWS S3 para almacenar los archivos estaticos, CloudFront para la CDN, y servicios como AWS Amplify para el despliegue de la aplicacion
- **Backend**: Se puede usar AWS Lambda para funciones serverless, API Gateway para manejar las peticiones, DynamoDB para la base de datos, S3 para almacenar archivos, etc
- **Base de datos**: Se puede usar servicios como DynamoDB, Firestore, o Aurora Serverless para manejar la base de datos
- **Autenticacion**: Se puede usar Cognito, Auth0 o Firebase para manejar la autenticacion
- **Almacenamiento**: Se puede usar S3, Cloud Storage o Azure Blob Storage para almacenar archivos
- **Notificaciones**: Se puede usar SNS, Firebase Cloud Messaging o Twilio para enviar notificaciones
- **Analiticas**: Se puede usar Google Analytics, AWS Pinpoint o Firebase Analytics para analiticas

<a id="ent58"></a>

### **¿Qué es el concepto de "progressive web app" y cómo se implementa en una aplicación web?**

[Volver al indice](#entrevista-base)

Es esa aplicacion mobile que si accedemos a la misma desde el navegador nos da la opcion de descargarla sin usar a ninguna Store como intermediario, es una pagina que puede funcionar en varios dispositivos de la misma manera. 

Hace uso de `Service Workers` para manejar la cache y la disponibilidad offline, `Web App Manifest` para definir la apariencia de la aplicacion, y `HTTPS` para garantizar la seguridad de la aplicacion.

Una desventaja que poseen es que no se tienen algunas ventajas como con las aplicaciones nativas, pero igualmente se pueden instalar en el dispositivo y actualizarse por si solas. 

<a id="ent60"></a>

### **Es la metodologia Agile recomendable para todos los proyectos?**

[Volver al indice](#entrevista-base)

No es adecuada para todo tipo de proyectos, es muy util cuando los requisitos no estan al 100% definidos desde el principio y se sabe que va a tener que cambiar en el tiempo, y ajustarse a diversos requerimientos. 
Si los requisitos son definidos, rigidos y no van a cambiar, no es recomendable usar Agile, ya que se pierde tiempo en la planificacion y en la adaptacion a los cambios.

Tampoco se recomienda que se aplique en equipos muy distribuidos y grandes, ya que en esos casos la comunicacion se puede ver sumamente afectada.

En el caso de que hayan proyectos en donde se tiene un deadline demasiado estricto, un presuesto ajustado, puede que sea mejor usar un approach mas apuntado a **Waterfall**.

En los casos donde Agile no sea adecuado, las siguientes metodologías podrían ser más apropiadas:

- Waterfall (Cascada): Bueno para proyectos con un alcance claro y requisitos definidos de principio a fin, como en el desarrollo de software empresarial con pocos cambios en el camino.
- Lean: Enfocada en la eficiencia de los procesos y la reducción de desperdicios. Es ideal para proyectos donde se busca minimizar costos y tiempo, y priorizar el valor del cliente.
- PRINCE2: Una metodología estructurada para la gestión de proyectos, útil en proyectos más grandes y complejos que requieren un enfoque detallado de planificación y control.

Agile es excelente para proyectos con alta incertidumbre, cambios frecuentes y que necesitan entregas incrementales. Sin embargo, no es adecuado para todos los tipos de proyectos. Si el alcance es fijo, el presupuesto es limitado, o el proyecto necesita cumplir con regulaciones estrictas, otras metodologías como Waterfall o Lean pueden ser más efectivas. La clave está en evaluar las características del proyecto y las necesidades del equipo antes de elegir una metodología.

<a id="ent61"></a>

### **Que es un MVP?**

[Volver al indice](#entrevista-base)

MVP (Minimum Viable Product) es una version de un producto con un conjunto minimo de caracteristicas que es suficiente para lanzar el producto y que sea funcional, para poder obtener un feedback rapido y poder iterar sobre el mismo. 
Generalmente se lanza a un grupo disminuido de usuarios para que puedan dar feedback sobre el mismo. 

Para poder construir y planificar un MVP se deben dejar de lado los detalles innecesarios y es importante enfocarse en la funcionalidad principal y mas importante. 

<a id="ent66"></a>

### **Metodologias de estimacion de tareas**

[Volver al indice](#entrevista-base)

- **Story Points**: Es una tecnica de estimacion de tareas que se basa en la complejidad de la tarea, no en el tiempo que se tarda en realizarla. Se asigna un valor numerico a cada tarea, y se compara con otras tareas para saber cual es mas compleja. Se usa en Scrum.
- **Horas-Dias Directo**: Es una tecnica de estimacion de tareas que se basa en el tiempo que se tarda en realizar una tarea. Se asigna un tiempo estimado a cada tarea, y se compara con otras tareas para saber cual es mas compleja. Se usa en metodologias mas tradicionales.
- **Técnica de PERT**: Es una tecnica de estimacion de tareas que se basa en la probabilidad de que una tarea se complete en un tiempo determinado. Se asigna un tiempo optimista, pesimista y mas probable a cada tarea, y se calcula el tiempo esperado. Se usa en proyectos donde se necesita una estimacion mas precisa.
- **Estimación por analogía**: Es una tecnica de estimacion de tareas que se basa en la comparacion de tareas similares realizadas anteriormente. Se asigna un tiempo estimado a cada tarea, y se compara con otras tareas para saber cual es mas compleja. Se usa en proyectos donde se tiene un historial de tareas realizadas.
- **Estimación Delphi**: Es una tecnica de estimacion de tareas que se basa en la opinion de expertos. Se asigna un tiempo estimado a cada tarea, y se compara con otras tareas para saber cual es mas compleja. Se usa en proyectos donde se necesita una estimacion mas precisa.

<a id="ent62"></a>

### **Distintos tipos de testing en Frontend**

[Volver al indice](#entrevista-base)

- **Unit Testing**: Se enfoca en probar unidades individuales de codigo, como funciones o componentes, para asegurarse de que funcionan como se espera. Se pueden usar herramientas como Jest, Mocha o Jasmine.
- **Integration Testing**: En el frontend, esto implica probar interacciones entre múltiples componentes o entre un componente y su API o base de datos. Se hace con Jest o Mocha. Por ejemplo, un test seria Verificar que un componente de formulario interactúe correctamente con un componente de validación o con una API para enviar datos.
- **End-to-End Testing**: Se enfoca en probar la aplicacion en su totalidad, desde el frontend hasta el backend, para asegurarse de que todas las partes funcionan juntas como se espera. Se puede hacer con herramientas como Cypress o Selenium. Por ejemplo, un test seria Verificar que un usuario pueda registrarse en la aplicacion y que sus datos se guarden correctamente en la base de datos.
- **Functional Testing**: Se enfoca en probar las funciones de la aplicacion, como la navegacion, la interaccion con los elementos de la interfaz de usuario y la entrada de datos. Se puede hacer con herramientas como Jest, Mocha o Jasmine. Por ejemplo, un test seria Verificar que un usuario pueda navegar por la aplicacion y que los botones y enlaces funcionen correctamente.
- **UI/UX Testing**: Se enfoca en probar la interfaz de usuario y la experiencia del usuario, como la apariencia, la usabilidad y la accesibilidad de la aplicacion. Se puede hacer con herramientas como Storybook o Chromatic. Por ejemplo, un test seria Verificar que la aplicacion se vea y se comporte correctamente en diferentes dispositivos y navegadores.
- **Performance Testing**: Se enfoca en probar el rendimiento de la aplicacion, como la velocidad de carga, la capacidad de respuesta y la escalabilidad. Se puede hacer con herramientas como Lighthouse, JMeter o WebPageTest. Por ejemplo, un test seria Verificar que la aplicacion se cargue en menos de 3 segundos y que pueda manejar 1000 usuarios simultáneos.
- **Regression Testing**: Se enfoca en probar que los cambios recientes en el codigo no hayan afectado el funcionamiento de la aplicacion. Se puede hacer con herramientas como Jest, Mocha o Jasmine. Por ejemplo, un test seria Verificar que una nueva funcionalidad no haya introducido errores en funcionalidades existentes.
- **Smoke Testing**: Se enfoca en probar las funcionalidades principales de la aplicacion para asegurarse de que funcionan correctamente antes de realizar pruebas más exhaustivas. Se puede hacer con herramientas como Jest, Mocha o Jasmine. Por ejemplo, un test seria Verificar que un usuario pueda iniciar sesión en la aplicacion y que sus datos se muestren correctamente en la pantalla principal.

<a id="ent63"></a>

### **Git vs Mercurial**

[Volver al indice](#entrevista-base)

Las diferencias principales entre **Git** y **Mercurial** son:

### **1. Filosofía y Diseño**

- **Git**:
  - **Modelo distribuido**: Git es un sistema distribuido de control de versiones. Cada desarrollador tiene una copia completa del repositorio, incluidos el historial de cambios y las ramas.
  - **Eficiencia y rendimiento**: Git está diseñado para ser rápido y manejar grandes repositorios con eficiencia, lo que lo hace ideal para proyectos de gran escala.
  - **Complejidad**: Git puede ser más complejo debido a su amplio conjunto de características y su sintaxis más complicada. Ofrece una gran flexibilidad, pero eso puede hacer que sea más difícil de aprender para los principiantes.

- **Mercurial**:
  - **Modelo distribuido**: Al igual que Git, Mercurial también es distribuido, lo que significa que cada usuario tiene una copia completa del repositorio.
  - **Simplicidad y enfoque**: Mercurial se centra en ser simple, intuitivo y fácil de usar. Su flujo de trabajo está diseñado para ser más sencillo, lo que puede facilitar su adopción en equipos pequeños o nuevos en el control de versiones.
  - **Curva de aprendizaje**: Mercurial es generalmente considerado más fácil de aprender que Git debido a su sintaxis más sencilla y menos características avanzadas.

### **2. Popularidad y Comunidad**

- **Git**:
  - **Adopción**: Git es más popular que Mercurial y se ha convertido en el estándar de facto para la mayoría de los proyectos de desarrollo de software, especialmente en plataformas como GitHub, GitLab y Bitbucket.
  - **Ecosistema y herramientas**: Dado que Git es más utilizado, tiene un ecosistema más grande de herramientas, bibliotecas y documentación disponible. Muchas plataformas de desarrollo, CI/CD y servicios de repositorio están optimizados para Git.

- **Mercurial**:
  - **Adopción**: Aunque Mercurial tiene una base de usuarios leal, ha sido menos adoptado que Git, y muchos proyectos más grandes han migrado a Git. Un ejemplo famoso de esto es el caso de **Bitbucket**, que inicialmente soportaba Mercurial antes de que decidiera centrarse exclusivamente en Git.
  - **Comunidad más pequeña**: Mercurial tiene una comunidad de usuarios más pequeña en comparación con Git, lo que puede resultar en una menor cantidad de recursos y soporte.

### **3. Flujo de trabajo y rendimiento**

- **Git**:
  - **Ramas**: Git es conocido por su fuerte soporte para **ramas (branching)**, lo que permite a los desarrolladores crear y fusionar ramas de manera rápida y flexible. Git es altamente eficiente en cuanto al manejo de ramas, lo que lo hace perfecto para flujos de trabajo que dependen de ramificación y fusiones frecuentes.
  - **Rendimiento**: Git generalmente tiene un buen rendimiento, incluso con repositorios grandes, aunque algunas operaciones complejas como el *merge* pueden ser lentas si no se gestionan correctamente.

- **Mercurial**:
  - **Ramas**: Mercurial utiliza un modelo de ramas diferente al de Git. Si bien Mercurial también soporta ramas, su enfoque es algo diferente y puede ser menos flexible en comparación con Git. Sin embargo, Mercurial proporciona soporte para **"named branches"** y **"bookmarks"** (que son más parecidos a las ramas en Git).
  - **Rendimiento**: Mercurial también tiene un buen rendimiento, aunque puede no ser tan rápido como Git en repositorios de gran escala debido a su menor optimización para estos casos.

### **4. Características clave**

- **Git**:
  - **Flexibilidad avanzada**: Git ofrece una gran cantidad de comandos y opciones avanzadas, lo que permite personalizar flujos de trabajo según las necesidades del equipo o el proyecto.
  - **Staging Area**: Git tiene una **staging area** o área de preparación que permite a los desarrolladores seleccionar qué cambios se deben incluir en el próximo commit, lo que proporciona un control más preciso sobre las modificaciones.

- **Mercurial**:
  - **Simplicidad y enfoque**: Mercurial es más simple en cuanto a su conjunto de características. No tiene un equivalente directo a la **staging area** de Git, lo que hace que el flujo de trabajo sea más directo (aunque menos flexible).
  - **Facilidad de uso**: Mercurial ofrece una interfaz de línea de comandos más simple y tiene menos configuraciones que gestionar.

### **5. Soporte y Herramientas**

- **Git**:
  - **Herramientas**: Git es ampliamente soportado por herramientas de desarrollo modernas, como **GitHub**, **GitLab**, **Bitbucket** y otras plataformas de CI/CD. Además, la integración de Git con herramientas como **Visual Studio Code**, **Atom** y **Sublime Text** es muy robusta.
  - **Servicios en la nube**: Git es compatible con todos los principales servicios en la nube de control de versiones (GitHub, GitLab, Bitbucket).

- **Mercurial**:
  - **Herramientas**: Mercurial tiene soporte en herramientas como **Bitbucket** (aunque ya no se usa para repositorios nuevos), **SourceForge**, y algunos editores de texto. Sin embargo, su integración no es tan amplia como la de Git.
  - **Soporte de la comunidad**: La comunidad de Mercurial es más pequeña, lo que puede dificultar encontrar recursos y soporte en comparación con Git.

### **6. Casos de uso y elección**

- **Git**: 
  - Ideal para equipos grandes, proyectos de código abierto y flujos de trabajo con ramificación frecuente.
  - Utilizado ampliamente en la industria del software, especialmente en proyectos que requieren una integración estrecha con plataformas como GitHub o GitLab.
  
- **Mercurial**: 
  - Mejor para equipos más pequeños que buscan una herramienta sencilla y rápida de implementar.
  - Aún se utiliza en ciertos proyectos grandes y populares como **Mozilla** y **Facebook**, que lo adoptaron debido a sus beneficios para sus flujos de trabajo específicos.

---

### **Resumen de las diferencias clave**

| Característica                 | **Git**                                  | **Mercurial**                        |
|---------------------------------|------------------------------------------|--------------------------------------|
| **Popularidad**                 | Mucho más popular, especialmente con GitHub | Menos popular, con base de usuarios más pequeña |
| **Complejidad**                 | Más complejo, con muchas características avanzadas | Más simple, fácil de aprender |
| **Rendimiento**                 | Muy eficiente, especialmente en grandes repositorios | Buen rendimiento, pero no tan optimizado en repositorios grandes |
| **Soporte para ramas**          | Muy fuerte, con ramificación avanzada    | Menos flexible, pero soporta ramas básicas y bookmarks |
| **Flujo de trabajo**            | Flexible, adecuado para equipos grandes y colaboraciones complejas | Flujo de trabajo más simple y directo |
| **Herramientas y servicios**    | Gran soporte (GitHub, GitLab, Bitbucket) | Menos herramientas, principalmente Bitbucket antes de eliminar soporte |
| **Curva de aprendizaje**       | Más empinada, requiere más tiempo para aprender | Más fácil de aprender, ideal para principiantes |

### **Conclusión**

**Git** es la opción preferida para la mayoría de los proyectos de desarrollo modernos debido a su flexibilidad, rendimiento, y soporte en plataformas como GitHub. Es ideal para proyectos grandes y equipos que necesitan un control detallado sobre sus flujos de trabajo y un ecosistema de herramientas robusto.

**Mercurial** puede ser una excelente opción para proyectos pequeños o equipos que buscan una solución más simple y fácil de aprender, aunque su adopción está disminuyendo debido a la creciente popularidad de Git.

<a id="ent65-4"></a>

### **Continuous Integration, Continuous Delivery, Continuous Deployment - Mejoras del proceso CI-CD**

[Volver al indice](#entrevista-base)

**Continuous Integration (CI)**

Es el integrar los cambios de los desarrolladores al codigo al repositorio asegurandose que el codigo nuevo se integre bien al viejo.

- Automatización completa: Asegúrate de que todos los pasos de la integración, como la ejecución de pruebas, la verificación de la calidad del código (linting, formateo), y el despliegue a un entorno de staging, sean completamente automáticos.
- Integración con herramientas de CI: Usa herramientas como Jenkins, GitLab CI, CircleCI, Travis CI o GitHub Actions para gestionar las integraciones automáticas.
- Feedback rápido: Asegúrate de que los desarrolladores reciban retroalimentación casi en tiempo real sobre el estado de la integración, de modo que puedan actuar rápidamente en caso de que se detecten errores.

**Continuous Delivery (CD)**

Se extiende a CI ya que consta de llevar este codigo ya integrado a un entorno, la idea es poder deployar en todo momento sin necesidad de intervenciones manuales necesarias. 

- Implementar pipelines de CD: Usa herramientas como Jenkins, GitLab CI/CD, CircleCI, Travis CI, entre otras, para crear pipelines de entrega continua que validen y desplieguen automáticamente en entornos de staging o producción.
- Pruebas de aceptación automatizadas: Integra pruebas de aceptación y pruebas funcionales en el pipeline de CD para asegurar que el código sea probado exhaustivamente antes de ser entregado a producción.
- Control de versiones y etiquetado de releases: Usa etiquetas o versiones específicas en los despliegues, lo que permite tener un control más riguroso de qué cambios están en producción en todo momento.

**Continuous Deployment (CD)**

Es una rama de Delivery, pero exclusivamente hacia produccion

- Pruebas exhaustivas y monitoreo: Dado que los cambios se despliegan automáticamente, es crucial que el proceso de pruebas esté completamente automatizado y que existan pruebas de integración y pruebas de aceptación completas. Además, debe haber un monitoreo riguroso en producción para detectar cualquier problema rápidamente.
- Despliegue progresivo: Implementa estrategias como canary releases o blue-green deployments para minimizar el riesgo de fallos en producción. Estas técnicas permiten realizar despliegues graduales y probar nuevos cambios en una pequeña porción de los usuarios antes de hacerlo en toda la base de usuarios.
- Rollback automático: Implementa mecanismos automáticos para revertir rápidamente cualquier despliegue que cause problemas en producción, asegurando que los usuarios no experimenten interrupciones.

En resumen, hay que prestar especial atencion al testing automatizado y a la retroalimentacion rapida, al igual que a la automatizacion de todo el proceso. Tambien a las analiticas y alarmas, ya que de esa manera podremos darnos cuenta si hay algo que esta saliendo mal o afectado.

<a id="ent67"></a>

### **CORS**

[Volver al indice](#entrevista-base)

**CORS** (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web que permite o restringe que los recursos de una página web sean solicitados desde un dominio distinto al que sirve la página. Este sistema es utilizado para evitar ciertos riesgos de seguridad, como ataques de **Cross-Site Request Forgery (CSRF)** o **Cross-Site Scripting (XSS)**.

Por defecto, los navegadores restringen las solicitudes **cross-origin** (de un origen a otro) debido a la política de **mismo origen** (*same-origin policy*). La política de mismo origen significa que, por razones de seguridad, una página web solo puede hacer solicitudes a su propio dominio, protocolo y puerto, y no a otros dominios. 

Sin embargo, hay muchos casos en los que una aplicación web legítima necesita hacer solicitudes a otro dominio (por ejemplo, hacer una llamada a una API en un dominio diferente). Aquí es donde entra en juego **CORS**, que permite a los servidores especificar si se permiten solicitudes de otros orígenes.

### **¿Cómo Funciona CORS?**

Cuando una página web intenta realizar una solicitud HTTP a un dominio diferente (es decir, una solicitud "cross-origin"), el navegador envía una solicitud HTTP preliminar llamada **preflight request** (opcional en algunos casos) utilizando el método **OPTIONS** para verificar con el servidor si la solicitud real está permitida.

1. **Preflight Request**: El navegador realiza una solicitud `OPTIONS` al servidor del otro dominio con ciertos encabezados para comprobar si el servidor permite solicitudes de ese origen.
   - Ejemplo de solicitud `OPTIONS`:
     ```http
     OPTIONS /api/data HTTP/1.1
     Host: example.com
     Origin: http://another-domain.com
     ```

2. **Respuesta del Servidor**: Si el servidor permite la solicitud desde el origen específico, responde con encabezados `Access-Control-Allow-Origin` y otros encabezados relacionados con CORS, indicando que la solicitud es permitida.
   - Ejemplo de respuesta exitosa:
     ```http
     HTTP/1.1 200 OK
     Access-Control-Allow-Origin: http://another-domain.com
     Access-Control-Allow-Methods: GET, POST
     Access-Control-Allow-Headers: Content-Type
     ```

3. **Real Request**: Si la respuesta del servidor es positiva, el navegador puede continuar con la solicitud real (por ejemplo, una solicitud GET, POST, etc.) y enviarla al servidor.

4. **Si no se permite la solicitud**: Si el servidor no permite la solicitud desde un origen diferente, el navegador bloqueará la solicitud y no permitirá que la aplicación obtenga los datos.

### **Encabezados Comunes de CORS**

- **`Access-Control-Allow-Origin`**: Especifica qué dominios están permitidos para hacer solicitudes a este servidor. Puede ser un dominio específico (por ejemplo, `http://example.com`) o un valor especial `*` que indica que cualquier dominio puede acceder.
  
- **`Access-Control-Allow-Methods`**: Indica qué métodos HTTP están permitidos (por ejemplo, `GET`, `POST`, `PUT`).

- **`Access-Control-Allow-Headers`**: Especifica qué encabezados pueden ser utilizados por la solicitud real.

- **`Access-Control-Allow-Credentials`**: Indica si las credenciales (como cookies o encabezados de autenticación) pueden ser enviadas con la solicitud. El valor debe ser `true` para permitir el envío de credenciales.

- **`Access-Control-Expose-Headers`**: Permite exponer ciertos encabezados específicos en la respuesta, de modo que el cliente pueda acceder a ellos.

- **`Access-Control-Max-Age`**: Especifica durante cuánto tiempo la respuesta a una solicitud de preflight puede ser almacenada en caché, evitando que el navegador tenga que realizar una solicitud de preflight repetidamente.

### **Ejemplo Práctico**

Imagina que tienes una aplicación web que se sirve desde `http://example-client.com` y hace solicitudes a una API alojada en `http://api-server.com`. Si no se configura adecuadamente CORS en el servidor de la API, el navegador bloqueará las solicitudes de `http://example-client.com` debido a que el dominio es diferente.

En el servidor de la API, podrías configurar los encabezados CORS para permitir que las solicitudes desde `http://example-client.com` sean aceptadas. Ejemplo de configuración de CORS en un servidor:

```http
Access-Control-Allow-Origin: http://example-client.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
```

### **Problemas Comunes con CORS**

- **Bloqueo de solicitudes no configuradas**: Si el servidor no permite solicitudes desde el dominio del cliente (ya sea a través de `Access-Control-Allow-Origin` o mediante otros encabezados), el navegador bloqueará la solicitud.
  
- **Preflight Request**: Algunas solicitudes (como las que incluyen métodos no estándar o encabezados personalizados) requieren una solicitud `OPTIONS` de preflight, lo que puede causar un pequeño retraso.

- **`Access-Control-Allow-Credentials`**: Si se necesitan enviar cookies o credenciales de sesión, es necesario que el servidor configure correctamente este encabezado, y no se puede usar el valor `*` en `Access-Control-Allow-Origin`.


CORS es una política de seguridad en los navegadores que controla cómo los recursos de un sitio web pueden ser solicitados desde otro dominio. Permite que los servidores controlen qué orígenes pueden interactuar con ellos, asegurando que las solicitudes cross-origin se manejen de manera segura y controlada. Sin la configuración adecuada de CORS, las aplicaciones web pueden enfrentar problemas al intentar interactuar con APIs externas o servicios alojados en otros dominios.

<a id="ent73"></a>

### **Escalabilidad NodeJS**

[Volver al indice](#entrevista-base)

La **escalabilidad** de una aplicación Node.js se refiere a su capacidad para manejar un número creciente de solicitudes o carga de trabajo sin perder rendimiento ni confiabilidad. Dado que Node.js está basado en un modelo de **event loop** de un solo hilo, tiene ciertas limitaciones en cuanto a cómo manejar múltiples solicitudes simultáneas. Sin embargo, se pueden aplicar varias estrategias para mejorar la escalabilidad de una aplicación Node.js y asegurar que pueda manejar más tráfico y usuarios a medida que crece.

A continuación, te detallo algunas de las principales estrategias para hacer que una aplicación Node.js sea escalable:

### **1. Uso de Clusters (Escalabilidad Horizontal)**

Aunque Node.js usa un solo hilo para manejar solicitudes, puedes aprovechar todos los núcleos de CPU de tu servidor utilizando el **módulo `cluster`**. Esto permite crear múltiples instancias de tu aplicación Node.js que pueden ejecutarse en diferentes procesos, distribuyendo la carga de trabajo entre varios núcleos de CPU.

- **¿Cómo funciona?** Cada instancia o "worker" del cluster puede manejar su propio conjunto de solicitudes. Si tu servidor tiene varios núcleos de CPU, puedes crear tantos procesos como núcleos haya, lo que mejora el rendimiento y permite que tu aplicación maneje más tráfico.
  
- **Implementación básica con `cluster`:**
  ```javascript
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length; // Número de núcleos disponibles
  
  if (cluster.isMaster) {
    // Crear un worker para cada núcleo del procesador
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    // Código de la aplicación
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello World');
    }).listen(8000);
  }
  ```

### **2. Balanceo de Carga**

El **balanceo de carga** se utiliza para distribuir el tráfico entre múltiples instancias de la aplicación en diferentes servidores o máquinas, de modo que ningún servidor se sobrecargue. Esto es especialmente útil para aplicaciones Node.js en entornos de producción distribuidos.

- **Soluciones comunes de balanceo de carga**:
  - **Nginx o HAProxy**: Puedes usar servidores de balanceo de carga como Nginx o HAProxy para distribuir el tráfico HTTP entre varias instancias de tu aplicación Node.js. Estos servidores pueden distribuir las solicitudes entrantes entre los diferentes procesos de la aplicación (por ejemplo, instancias que están ejecutándose en diferentes máquinas o contenedores).

  - **Load Balancers en la nube**: Servicios como **AWS Elastic Load Balancing** o **Google Cloud Load Balancing** también pueden distribuir las solicitudes entre diferentes servidores.

### **3. Desacoplar y Dividir en Microservicios**

Una de las mejores formas de escalar una aplicación Node.js es dividirla en **microservicios**. Los microservicios son una arquitectura que descompone la aplicación en servicios pequeños e independientes, cada uno con su propio dominio de negocio y base de datos. Esto permite que diferentes servicios se escalen de forma independiente según la carga.

- **¿Cómo funciona?** En lugar de una aplicación monolítica, donde todo está en un solo bloque, los microservicios permiten desplegar y escalar cada parte de la aplicación por separado. Si un servicio experimenta una carga alta, puedes escalar solo ese servicio, sin afectar a otros.

- **Beneficios de los microservicios**:
  - Escalabilidad independiente para cada componente.
  - Despliegue y mantenimiento más sencillo.
  - Resiliencia, ya que si un microservicio falla, no afecta a toda la aplicación.

- **Tecnologías asociadas**:
  - **Docker**: Permite empaquetar microservicios en contenedores que pueden ser ejecutados en cualquier entorno.
  - **Kubernetes**: Orquestador de contenedores que facilita la gestión y escalado de microservicios.

### **4. Cacheo de Respuestas**

Una de las técnicas clave para mejorar la escalabilidad de una aplicación Node.js es el **cacheo**. Al almacenar en caché las respuestas de las solicitudes más comunes o de larga duración, puedes reducir significativamente la carga en el servidor y acelerar el tiempo de respuesta.

- **Cacheo en memoria**: Puedes usar herramientas como **Redis** o **Memcached** para almacenar respuestas en memoria y evitar hacer consultas repetitivas a bases de datos u otras fuentes externas.

- **Cacheo de respuestas HTTP**: Si tu aplicación maneja muchas solicitudes similares, puedes usar herramientas como **Varnish** o configurar **caching HTTP** en el servidor para almacenar respuestas de manera eficiente.

### **5. Optimización de Base de Datos**

Las aplicaciones Node.js a menudo dependen de bases de datos para almacenar y recuperar información. La escalabilidad de tu aplicación también depende de cómo escalas y optimizas tu base de datos.

- **Sharding**: Distribuir datos entre varias bases de datos, de modo que cada base de datos maneje solo una parte de los datos. Esto puede ser especialmente útil en bases de datos NoSQL como MongoDB.

- **Replicación**: Configurar replicación para distribuir las consultas entre varias réplicas de bases de datos y mejorar la disponibilidad.

- **Índices**: Asegúrate de que tu base de datos esté optimizada con índices para mejorar el rendimiento de las consultas.

### **6. Optimización del Event Loop**

El **event loop** de Node.js es el mecanismo que maneja todas las solicitudes de entrada y salida de la aplicación. Es importante optimizar el código para evitar bloqueos del event loop, que pueden afectar negativamente el rendimiento y la capacidad de escalado.

- **Operaciones asincrónicas**: Utiliza operaciones asincrónicas siempre que sea posible para evitar bloquear el event loop. Esto incluye hacer uso de **callbacks**, **promesas** o **async/await**.

- **Worker Threads**: En algunas situaciones, podrías necesitar realizar tareas de procesamiento intensivo. Para evitar que el event loop se bloquee, puedes usar **Worker Threads**, que permiten realizar tareas intensivas en segundo plano sin bloquear la ejecución principal.

### **7. Escalabilidad en la Nube**

Node.js se integra muy bien con servicios en la **nube** como **AWS**, **Google Cloud** o **Microsoft Azure**, lo que facilita la escalabilidad automática.

- **Autoescalado**: Estos proveedores en la nube permiten configurar el **autoescalado**, lo que significa que, a medida que la demanda de tu aplicación aumenta, los servidores adicionales se crearán automáticamente, y cuando la demanda disminuye, los recursos se liberan.

- **Funcionalidades como AWS Lambda**: Si tu aplicación es pequeña o tiene tareas que no requieren servidores constantes, puedes aprovechar **AWS Lambda** o **Google Cloud Functions** para manejar cargas de trabajo bajo demanda y solo cobrar por el tiempo de ejecución real.

### **8. Manejo de Conexiones Simultáneas**

Node.js es ideal para manejar una gran cantidad de conexiones simultáneas gracias a su arquitectura basada en el event loop. Sin embargo, en aplicaciones de alto tráfico, es importante manejar las conexiones de manera eficiente.

- **Conexiones HTTP/2**: Usar HTTP/2 permite mejorar la eficiencia de las conexiones y reducir la latencia de la comunicación entre el cliente y el servidor.

- **Keep-Alive y conexiones persistentes**: Configura conexiones persistentes para reducir la sobrecarga asociada con la apertura y cierre de nuevas conexiones HTTP.


La escalabilidad en Node.js se puede lograr mediante diferentes estrategias que abarcan desde la **optimización del event loop**, la **escala horizontal con clústeres**, hasta el **uso de microservicios** y **caché**. Implementar estas prácticas te permitirá construir aplicaciones que puedan manejar más tráfico, ser más resilientes y ofrecer una experiencia de usuario más rápida y confiable.

<a id="ent74"></a>

### **Escalabilidad FE**

[Volver al indice](#entrevista-base)

La **escalabilidad del frontend** se refiere a la capacidad de una aplicación web para manejar un aumento en el número de usuarios, volumen de datos o complejidad, sin que su rendimiento o experiencia de usuario se vea afectada. A medida que las aplicaciones web crecen, se vuelve crucial adoptar estrategias y mejores prácticas para asegurar que el frontend pueda adaptarse y escalar eficientemente. Aquí te explico algunos enfoques y prácticas clave para lograr la escalabilidad en el desarrollo frontend.

### **1. Componentización y Reutilización de Código**

Una de las formas más efectivas de escalar una aplicación frontend es **componentizar** la interfaz de usuario. Esto implica dividir la UI en componentes pequeños, independientes y reutilizables.

- **Beneficios**:
  - Facilita el mantenimiento y la evolución de la aplicación.
  - Mejora la reutilización de código.
  - Permite el trabajo en paralelo por parte de diferentes equipos de desarrollo.
  
- **Frameworks como React, Vue, Angular** proporcionan formas naturales de crear aplicaciones basadas en componentes que pueden ser reutilizados en distintas partes de la aplicación.

- **Estrategias**:
  - Asegúrate de que los componentes sean **lo más desacoplados posible**. Un componente debe manejar una única responsabilidad.
  - Utiliza **props** o **state management** (como Redux, Vuex, etc.) para gestionar el estado de la aplicación de manera centralizada, evitando el paso de información innecesaria entre componentes.

### **2. Lazy Loading**

El **Lazy Loading** o carga diferida es una técnica que retrasa la carga de recursos, como módulos, imágenes o componentes, hasta que realmente son necesarios.

- **Beneficios**:
  - Mejora el tiempo de carga inicial de la aplicación, permitiendo que los usuarios vean rápidamente la interfaz principal.
  - Reduce el consumo de recursos al cargar solo lo que se necesita en cada momento.
  
- **Implementación en React**:
  ```javascript
  const LazyComponent = React.lazy(() => import('./LazyComponent'));

  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  ```
  La función `React.lazy()` permite la carga diferida de un componente, y `Suspense` maneja el estado de carga.

- **En Angular y Vue**: También existen soluciones de carga diferida de módulos y rutas, lo que permite dividir la aplicación en fragmentos que se cargan solo cuando el usuario navega a ellos.

### **3. Code Splitting**

El **code splitting** es una técnica que divide el código en "trozos" más pequeños (chunks) que solo se cargan cuando son necesarios. Esto es similar al lazy loading, pero se aplica a los scripts de JavaScript.

- **Beneficios**:
  - Mejora el tiempo de carga inicial, ya que no se necesita cargar todo el código de una vez.
  - Permite una distribución eficiente del código, cargando solo lo que es relevante para la parte específica de la aplicación que el usuario está utilizando.

- **Implementación en Webpack**:
  ```javascript
  import(/* webpackChunkName: "module1" */ './module1');
  ```

  Webpack automáticamente crea archivos más pequeños basados en el código de los módulos que se importan de manera diferida.

### **4. Optimización de Imágenes y Archivos Estáticos**

Las imágenes y otros archivos estáticos son comúnmente los elementos más pesados de una aplicación web. Optimizar estos recursos es esencial para mejorar el rendimiento y la escalabilidad.

- **Estrategias de optimización**:
  - **Compresión**: Usa herramientas de compresión de imágenes como **ImageOptim**, **TinyPNG** o **Squoosh** para reducir el tamaño de las imágenes sin perder calidad perceptible.
  - **Formato adecuado**: Utiliza formatos modernos de imagen como **WebP**, que ofrecen una mejor compresión sin sacrificar calidad.
  - **Lazy loading de imágenes**: Al igual que el lazy loading de componentes, las imágenes pueden cargarse solo cuando están a punto de ser visibles en la pantalla (usando la API `IntersectionObserver`).

  ```html
  <img src="image.jpg" loading="lazy" alt="Imagen optimizada">
  ```

### **5. Manejo Eficiente del Estado**

A medida que las aplicaciones crecen, la complejidad en la gestión del estado puede aumentar. Usar un sistema adecuado para el manejo del estado puede ser esencial para escalar la aplicación y evitar problemas como el acoplamiento de datos o la redundancia.

- **Opciones de gestión de estado**:
  - **Redux** (en React) o **Vuex** (en Vue) son bibliotecas de gestión de estado centralizado.
  - **Context API** en React también puede servir para gestionar estados globales sin necesidad de bibliotecas externas.
  - **React Query** y **Apollo Client** son herramientas útiles cuando se trabaja con datos remotos (APIs), que manejan el estado de la caché y las peticiones a APIs.

- **Estrategias**:
  - Mantén el estado **descentralizado** en componentes pequeños cuando sea posible. Solo centraliza el estado cuando sea necesario.
  - Utiliza **acciones y reducers** en Redux para gestionar el estado de manera predecible y escalable.
  - Mantén los estados **inmutables** para evitar efectos secundarios inesperados.

### **6. Paginación e Infinite Scrolling**

Para manejar grandes volúmenes de datos sin sobrecargar el frontend ni afectar la experiencia del usuario, se deben emplear técnicas como la **paginación** o el **infinite scrolling**.

- **Paginación**: Divide el conjunto de datos en páginas manejables, permitiendo que el usuario navegue entre ellas.
- **Infinite Scrolling**: Carga más datos de manera incremental a medida que el usuario hace scroll hacia abajo. Esta es una técnica útil para aplicaciones que muestran una lista continua de elementos, como redes sociales o aplicaciones de noticias.

### **7. Uso de Service Workers y Caching**

El uso de **Service Workers** y estrategias de caché es clave para la escalabilidad de aplicaciones frontend, especialmente en el contexto de **Progressive Web Apps (PWAs)**.

- **Service Workers** permiten que los recursos se almacenen en caché, lo que hace que las aplicaciones sean mucho más rápidas y funcione sin conexión a internet.
  
- **Estrategias de caché**:
  - Utiliza **Cache API** para almacenar y recuperar archivos de manera eficiente.
  - Implementa un **"Cache First"** o **"Network First"** para optimizar la forma en que la aplicación maneja las solicitudes.

### **8. Optimización del Renderizado**

El rendimiento del renderizado es crucial para escalar una aplicación frontend. Un renderizado eficiente reduce el uso de recursos y mejora la experiencia del usuario.

- **React**:
  - Usa **React.memo()** para evitar renderizados innecesarios de componentes.
  - **PureComponent** es útil para componentes que solo deben re-renderizarse cuando sus props cambian.
  - Utiliza **Suspense** para cargar partes de la UI de forma diferida y mejorar la experiencia de usuario.

- **Vue**:
  - Usa la directiva `v-if` para renderizar solo los componentes necesarios.
  - Optimiza el uso de **computed properties** y **watchers**.

### **9. Reducción del Tamaño del Bundle**

Reducir el tamaño de los archivos JavaScript que se descargan en el navegador mejora la escalabilidad de una aplicación, especialmente en redes lentas.

- **Estrategias**:
  - Usa **Tree Shaking** para eliminar código no utilizado.
  - Utiliza herramientas como **Webpack** y **Rollup** para optimizar el tamaño de los bundles.
  - Comprime los archivos con **gzip** o **Brotli**.

### **10. Prácticas de Optimización en la Nube**

Si la aplicación frontend depende de APIs o servicios en la nube, asegúrate de que estos servicios puedan escalar automáticamente para manejar una mayor carga.

- Usa **CDNs (Content Delivery Networks)** para distribuir contenido estático como imágenes, archivos CSS/JS, etc., desde servidores más cercanos al usuario.
- Implementa **autoescalado** en la infraestructura de backend y utiliza soluciones de caching.

<a id="ent75"></a>

### **Principios de Disponibilidad, Escalamiento en Frontend**

[Volver al indice](#entrevista-base)

La **disponibilidad** y el **escalamiento** son principios clave en el desarrollo de aplicaciones frontend para asegurar que el sistema sea confiable, rápido y capaz de manejar un volumen creciente de usuarios o datos. A continuación, se detallan los principios relacionados con estos conceptos, adaptados al contexto del frontend:

### **1. Disponibilidad en el Frontend**

La **disponibilidad** se refiere a que la aplicación esté accesible y funcione correctamente cuando los usuarios la necesiten. En el contexto del frontend, esto implica garantizar que la aplicación se cargue rápidamente, que no se caiga debido a errores de código y que siga funcionando incluso cuando haya problemas en el backend o con la conectividad de la red.

#### **Principios clave de disponibilidad en el frontend**:

- **Uso de Service Workers**: Los **Service Workers** permiten que una aplicación web funcione sin conexión o con una conexión intermitente. Al usar un Service Worker, puedes almacenar en caché recursos esenciales (HTML, CSS, JS) para que la aplicación siga funcionando aunque la conexión a internet se pierda temporalmente.
  - **Ejemplo**: Implementación de una Progressive Web App (PWA) que permite acceder a funcionalidades básicas sin conexión.

- **Redundancia de recursos**: Asegúrate de que los recursos esenciales (scripts, imágenes, fuentes) se distribuyan en **CDNs** (Content Delivery Networks) para que la aplicación esté disponible incluso si un servidor se cae o está inactivo.

- **Caché local y manejo de errores**: Usar técnicas como **Local Storage** o **IndexedDB** para almacenar temporalmente datos críticos que puedan necesitarse cuando el backend no esté disponible. Esto permite una **experiencia offline** que no depende totalmente de la conectividad en todo momento.
  
- **Detección y manejo de fallos**: Implementa estrategias de manejo de errores que detecten problemas rápidamente y brinden retroalimentación al usuario (como mensajes de error claros o páginas de mantenimiento). Por ejemplo, mostrar una pantalla de **"fallback"** mientras los datos se cargan o cuando hay un problema de conectividad.

- **Escalabilidad de servicios externos**: Asegúrate de que los servicios de terceros (APIs, bases de datos, etc.) a los que se conecta el frontend puedan manejar **altos volúmenes de tráfico** sin interrupciones. Por ejemplo, utilizando soluciones como **load balancing** para distribuir solicitudes.

### **2. Escalamiento en el Frontend**

El **escalamiento** se refiere a la capacidad de una aplicación de manejar una mayor carga de usuarios o de datos sin que su rendimiento se degrade. En el contexto del frontend, esto implica asegurar que la aplicación pueda adaptarse a un mayor volumen de usuarios, contenido o interacciones sin afectar la **experiencia de usuario**.

#### **Principios clave de escalamiento en el frontend**:

- **Optimización de recursos**: A medida que la aplicación crece, los recursos como JavaScript, CSS, imágenes y otros archivos estáticos deben optimizarse para reducir su tamaño y mejorar los tiempos de carga.
  - **Code splitting**: Divide tu código en diferentes "chunks" o fragmentos que se cargan bajo demanda (por ejemplo, con **React.lazy** o **Vue's async components**). Esto asegura que los usuarios solo descarguen lo necesario, reduciendo el tamaño inicial de la carga.
  - **Minificación y compresión**: Minifica los archivos JavaScript y CSS, y usa compresión de archivos como **gzip** o **Brotli** para reducir el tamaño de los archivos transferidos entre el servidor y el cliente.

- **Carga diferida (Lazy Loading)**: Utiliza el **lazy loading** de componentes, imágenes, y módulos para cargar solo lo necesario cuando el usuario interactúa con la aplicación. Esto reduce el tiempo de carga inicial y mejora la experiencia del usuario.
  - **Ejemplo**: En una lista infinita de productos, solo carga las imágenes o detalles de los productos que están visibles en la pantalla.

- **Cacheo de recursos**: Implementa técnicas de caché para minimizar la necesidad de hacer solicitudes repetidas al servidor. Esto incluye el uso de **CDNs**, **Service Workers**, y estrategias como **cache-first** o **network-first** para manejar las peticiones de datos.
  - **Ejemplo**: Almacenar en caché los datos de la API para que no tengas que hacer una nueva solicitud cada vez que un usuario regresa a la aplicación.

- **Optimización de imágenes y archivos estáticos**: Las imágenes suelen ser una de las principales causas de que una página web sea lenta. Usar herramientas de optimización y elegir el formato adecuado (como **WebP**) puede reducir significativamente el tamaño de las imágenes y mejorar el rendimiento.
  - **Estrategias**:
    - Utilizar imágenes de **resolución adecuada** para los diferentes tamaños de pantalla.
    - Usar el atributo `loading="lazy"` en imágenes que no sean críticas para la visualización inicial.

- **Virtualización de listas y tablas**: En aplicaciones que muestran grandes cantidades de datos, utiliza técnicas de **virtualización** para cargar solo una parte de la lista o tabla en el viewport visible, reduciendo el trabajo de renderizado.
  - **Ejemplo**: Librerías como **React Virtualized** o **Vue Virtual Scroller** ayudan a mostrar solo los elementos visibles, mejorando el rendimiento.

- **Manejo eficiente del estado**: A medida que tu aplicación crece, es fundamental tener un sistema eficiente para manejar el estado. Utiliza patrones y herramientas adecuadas para mantener el estado de la aplicación bien organizado y predecible.
  - **Bibliotecas de gestión del estado** como **Redux**, **Vuex**, o el **Context API** en React ayudan a centralizar y manejar el flujo de datos de manera eficiente, evitando la propagación innecesaria de cambios de estado a través de componentes.

- **Reducción del re-renderizado**: Minimiza el número de **re-renderizados** de componentes cuando no es necesario. Usa técnicas como **React.memo**, **shouldComponentUpdate** o **PureComponent** en React para evitar renderizados innecesarios de componentes cuando sus propiedades no han cambiado.

- **Optimización del rendimiento del renderizado**: Usa el **Virtual DOM** (como en **React**) para hacer comparaciones rápidas entre el DOM real y el virtual, actualizando solo los cambios necesarios.
  - **Web Workers**: Para evitar bloquear el hilo principal, puedes usar **Web Workers** para realizar tareas pesadas en segundo plano y no interrumpir la experiencia del usuario.

### **3. Escalabilidad Horizontal en el Frontend**

A medida que el número de usuarios aumenta, también puede ser necesario escalar la infraestructura de tu frontend de forma **horizontal**, distribuyendo la carga entre múltiples instancias de tu aplicación. En este caso, las **CDNs** y el uso de **caché distribuida** son herramientas esenciales para escalar eficazmente.

- **Uso de múltiples servidores de frontend**: Si tu aplicación es muy popular, puedes distribuir el tráfico entre varios servidores frontend. Las **CDNs** permiten que los recursos estáticos de la aplicación se sirvan desde múltiples ubicaciones geográficas, asegurando una **distribución eficiente** de los recursos.

- **Autocuración de fallos**: Asegúrate de que tu infraestructura pueda detectar y recuperarse automáticamente de posibles fallos de servidor o red. Esto puede incluir el monitoreo de servidores, el **failover automático** y la distribución de carga entre múltiples instancias.

La **disponibilidad** y el **escalamiento** en frontend son cruciales para garantizar una **experiencia de usuario fluida y confiable** en aplicaciones que crecen en tamaño y en complejidad. Para mejorar la disponibilidad, las técnicas como el uso de **Service Workers** y la **gestión de errores** son esenciales, mientras que el escalamiento se logra optimizando recursos, utilizando **lazy loading**, **code splitting**, y manejando eficientemente el **estado de la aplicación**. Además, técnicas como el **cacheo** de datos, la **optimización de imágenes** y el uso de **CDNs** son fundamentales para asegurar que tu aplicación pueda manejar el crecimiento del tráfico sin perder rendimiento.

<a id="ent76"></a>

### **Mencionar como manejarias la delegacion de tareas dentro de tu equipo**

[Volver al indice](#entrevista-base)

La idea es que cada miembro del equipo tenga sus fortalezas, y es deber de los lideres identificar cuales son estos, al igual que sus areas a mejorar, y asignar tareas acorde a esto. Esto nos sirve para fomentar la colaboracion, independencia y autonomia de los miembros del equipo, al igual que su confianza.

Lo ideal es que cada miembro del equipo trabaje en tareas que esten acordes a sus habilidades y debilidades de manera independiente, pero no sacando el trabajo en equipo, que debe seguir teniendo una comunicacion fluida para pedir recursos o colaboracion con algunas cosas. Para lograr esto no solo depende del desarollador si no de quien arma las tasks que las mismas sean claras, y que las prioridades ante todo tambien lo sean.

Ademas, otra cosa importante que se mejora al delegar tareas es que hay una distribucion del conocimiento bastante pareja, para que no quede el conocimiento concentrado en un solo miembro, y que luego el mismo sufra un exceso de trabajo debido a esto.

<a id="ent76-1"></a>

### **Se te da la tarea de empezar un nuevo proyecto, que preguntas realizarias para tomar que decisiones como un Tech Lead?**

[Volver al indice](#entrevista-base)

La respuesta a las preguntas clave planteadas puede influir directamente en las decisiones que tomes como **Tech Lead** para guiar el proyecto hacia el éxito. Aquí te dejo cómo podrías tomar decisiones en base a las respuestas de cada pregunta, para definir la arquitectura, el stack tecnológico, la metodología y las prioridades del proyecto.

### **1. ¿Cuál es el objetivo principal del proyecto?**
   - **Decisiones posibles**:
     - **Definir funcionalidades clave**: Si el objetivo es resolver un problema específico (como un carrito de compras o un sistema de mensajería), priorizar las características necesarias para resolver ese problema.
     - **Enfoque en UX/UI**: Si la prioridad es mejorar la experiencia de usuario, asegurar que el diseño y la interacción sean fáciles de usar.
     - **Definir KPIs**: Establecer métricas claras para medir el progreso y el éxito (conversiones, retención de usuarios, rendimiento).

### **2. ¿Cuál es el alcance y la visión del producto?**
   - **Decisiones posibles**:
     - **Priorizar MVP (Minimum Viable Product)**: Si el alcance es limitado, podrías optar por un MVP para lanzar rápidamente con las funcionalidades básicas y luego iterar.
     - **Planificación a largo plazo**: Si la visión es a largo plazo, elegir arquitecturas que permitan la expansión o escalabilidad (por ejemplo, microservicios, arquitectura modular).

### **3. ¿Cuál es el presupuesto y los plazos?**
   - **Decisiones posibles**:
     - **Tecnologías y herramientas más económicas**: Si el presupuesto es limitado, optar por soluciones de código abierto o de bajo costo (como frameworks populares).
     - **MVP o lanzamientos escalonados**: Si los plazos son ajustados, optar por un enfoque ágil, desarrollando un MVP y luego agregando características de manera iterativa.
     - **Recursos disponibles**: Seleccionar tecnologías que coincidan con la experiencia de tu equipo, evitando aprender tecnologías nuevas que retrasen el proyecto.

### **4. ¿Qué tecnologías usaremos?**
   - **Decisiones posibles**:
     - **Selección de stack tecnológico**: Si el equipo ya tiene experiencia con una tecnología específica, podrías optar por eso para minimizar el tiempo de aprendizaje.
     - **Evaluación de rendimiento y escalabilidad**: Si el proyecto necesita escalar rápidamente, optar por tecnologías que permitan un crecimiento fácil (como Node.js, microservicios).
     - **Evaluación de frameworks**: Si la prioridad es el desarrollo rápido, podrías optar por frameworks como React, Angular o Vue para facilitar la creación de la interfaz de usuario.

### **5. ¿Cómo manejaremos el desarrollo y la entrega?**
   - **Decisiones posibles**:
     - **Metodología ágil**: Si el proyecto es dinámico y requiere flexibilidad, aplicar metodologías ágiles como Scrum o Kanban para adaptarse rápidamente a los cambios.
     - **Automatización de CI/CD**: Si el proyecto requiere despliegues rápidos, configurar pipelines de integración continua (CI) y entrega continua (CD) desde el inicio.

### **6. ¿Cuál es el enfoque de escalabilidad y rendimiento?**
   - **Decisiones posibles**:
     - **Escalabilidad a través de microservicios**: Si el tráfico esperado es grande o la aplicación debe soportar muchos usuarios concurrentes, considerar una arquitectura de microservicios o serverless.
     - **Optimización de rendimiento**: Implementar estrategias como lazy loading, caché, y el uso de un CDN para mejorar la carga y rendimiento.

### **7. ¿Cómo gestionaremos el estado y la arquitectura de la aplicación?**
   - **Decisiones posibles**:
     - **Arquitectura de estado**: Si el proyecto necesita manejar un estado global complejo, puedes elegir soluciones como Redux o Context API.
     - **Componentización**: Adoptar un enfoque modular para dividir la UI en componentes reutilizables, lo que facilita el mantenimiento y la escalabilidad.

### **8. ¿Cómo aseguraremos la calidad del código?**
   - **Decisiones posibles**:
     - **Implementación de revisiones de código**: Establecer un proceso de revisión de código formal para mantener la calidad del código.
     - **Uso de linters y formateadores**: Configurar herramientas como ESLint o Prettier para mantener un estilo de código coherente.
     - **Pruebas automatizadas**: Implementar pruebas unitarias, de integración y end-to-end para garantizar que el código esté libre de errores.

### **9. ¿Cómo gestionaremos la seguridad?**
   - **Decisiones posibles**:
     - **Autenticación y autorización**: Si el proyecto necesita manejar información sensible, implementar soluciones robustas de autenticación (JWT, OAuth).
     - **Protección contra vulnerabilidades**: Establecer estrategias de mitigación contra vulnerabilidades comunes (como inyecciones SQL, CSRF, XSS).
     - **Encriptación de datos**: Asegurar que los datos sensibles sean cifrados, tanto en tránsito como en reposo.

### **10. ¿Cómo manejará la aplicación la infraestructura y el despliegue?**
   - **Decisiones posibles**:
     - **Infraestructura escalable**: Elegir proveedores de infraestructura en la nube (AWS, Google Cloud, Azure) que permitan escalar fácilmente según el crecimiento del proyecto.
     - **Contenedores y orquestación**: Usar Docker y Kubernetes si necesitas un entorno de contenedores para facilitar la gestión de la infraestructura.

### **11. ¿Cómo gestionaremos la documentación?**
   - **Decisiones posibles**:
     - **Documentación técnica**: Decidir si usar herramientas como Swagger para documentar APIs o GitHub Wiki para la documentación del proyecto.
     - **Documentación de código**: Establecer una convención para comentar el código y generar documentación de forma automática (JSDoc, TypeDoc).

### **12. ¿Cómo gestionaremos el equipo?**
   - **Decisiones posibles**:
     - **Asignación de roles**: Definir claramente las responsabilidades y los roles de cada miembro del equipo, desde los desarrolladores hasta los testers y diseñadores.
     - **Proceso de trabajo colaborativo**: Establecer herramientas de comunicación (Slack, Teams) y colaboración (Trello, Jira) para mantener a todos alineados.

### **13. ¿Cómo aseguraremos la calidad del soporte post-lanzamiento?**
   - **Decisiones posibles**:
     - **Mantenimiento y parches**: Crear un plan de mantenimiento post-lanzamiento para corregir bugs y realizar actualizaciones regulares.
     - **Monitorización de la aplicación**: Implementar herramientas de monitorización (New Relic, Sentry) para detectar y corregir problemas en tiempo real.

### **14. ¿Cuáles son los riesgos y dependencias del proyecto?**
   - **Decisiones posibles**:
     - **Gestión de riesgos**: Identificar los principales riesgos (tecnológicos, de recursos, de negocio) y definir planes de mitigación.
     - **Gestión de dependencias externas**: Evaluar las dependencias de terceros (APIs, bibliotecas) y definir estrategias para asegurar su fiabilidad.

### **15. ¿Cómo aseguraremos la accesibilidad y la experiencia de usuario?**
   - **Decisiones posibles**:
     - **Diseño inclusivo**: Asegurarse de que el diseño cumpla con los estándares de accesibilidad (WCAG).
     - **Pruebas de usabilidad**: Realizar pruebas de usabilidad con usuarios reales para asegurarse de que la interfaz sea intuitiva y fácil de usar.


