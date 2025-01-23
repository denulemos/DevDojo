<a name="alg-base-2"></a>

| JavaScript |
|----------|
| [Funciones en Javascript](#var27) |
| [Metodos de Strings en Javascript](#alg55) |
| [Métodos de Objectos en Javascript](#alg56) |
| [Diferencia entre Map y Weakmap](#var30) |
| [Diferencia entre `for in` y `for of`](#var29) |
| [Diferencia entre foreach, map y reduce](#var32) |
| [Rest Operator](#var16) |
| [Creando Strings con Template Literal - Template Strings](#var17)|
| [Export Fallback con export default](#var18) |
| [Diferencia entre import y require](#var9) |
| [Función Object.freeze](#var8) |
|[¿Qué es la destructuración y cómo se utiliza?](#var8-2) 💛|
|[¿Cómo se diferencia un Spread Operator de un Rest Operator?](#var8-3) 💛|
| [`.sort()`](#ent1) |
| [`.map()`](#ent2) |
| [`.filter()`](#ent3) |
| [`.reduce()`](#ent4) |
|[Set vs Map vs WeakMap vs WeakSet](#ent4-1)|
| [Parametros por valor y por referencia](#ent0) |
| [Prototype Javascript](#ent0-1) |
|[Spread y Rest Operator](#ent0-4)|
| [Qué es un "array-like" en Javascript?](#alg26) 💛|
| [Cuales son las funciones array de JavaScript?](#alg27) 💛 |
|[¿Cómo funcionan los arrays en JavaScript internamente?](#alg282)|
| [Para que sirve event.preventDefault()?](#var7) 💛 |
| [Set() (HashSet)](#alg29) 💛|
| [HashTables (.Map)](#alg30) 💛 |
|[¿Cuál es la diferencia entre un Set y un Array en JavaScript?](#alg301)|
| [Promises](#var21) 💛|
| [Async Await](#var21-1) 💛|
|[Callbacks](#var21-2) 💛|
| [Callback Hell](#var12) 💛|
| [Comparacion entre Promises, Callbacks y Async-await](#var22) 💛 |
| [Como funciona setTimeout?](#var10) |
|[¿Qué es un Promise.all y cuándo usarlo?](#var10-1) 💛|
| [¿Cómo se maneja un error en una promesa?](#var10-2) 💛|
|[¿Cómo funcionan Promise.allSettled, Promise.race y Promise.any?](#var10-3) 💛|
| [Diferencia entre let, var y const](#var6) 💛 |
| [Cual es la diferencia entre setTimeout() y setInterval()?](#rea31) 💛|
| [Qué es el namespacing de JS?](#rea40) |
| [Fetch API](#rea46) |
| [Cómo se pueden crear objetos genéricos?](#rea47) |
| [Document.ready vs Window.onload](#js1) |
| [Que es el Scope en Javascript?](#rea45) |


<a name="typ-base"></a>

## [Typescript](#typ)

| Temas |
|----------|
| [Qué es TypeScript?](#typ1) |
| [TSConfig.json](#typ2) |
| [Watch Mode](#typ3) |
| [Cuáles son sus características superadoras?](#typ4) |
| [Cómo declaro una variable?](#typ5) |
| [Tuples - Tuplas](#typ6) |
| [Tipo de dato Never](#typ7) 💛 |
| [Tipo de dato Any](#typ8) |
| [Cómo declaro un objeto?](#typ9) |
| [Cómo declaro una función?](#typ10) |
| [Parametros REST](#typ11) |
|[Cómo creo una clase?](#typ12) |
| [Cómo se transpilan las interfaces de TypeScript?](#typ13) |
| [Cómo hago que las props de una interface sean opcionales?](#typ14) |
| [Herencia en Typescript](#typ15) |
| [Interfaces en Typescript](#typ16) |
|[Cual es la diferencia entre el uso de types e interfaces?](#typ17) 💛|
|[¿Qué son los tipos Union e Intersection y cuándo se utilizan?](#typ18)|
|[¿Qué son los Utility Types como Partial, Pick, y Omit, y en qué casos son útiles?](#typ19)💛 |
|[¿Cómo funcionan los Mapped Types y cómo se aplican en proyectos complejos?](#typ20)|
|[¿Qué son los Conditional Types y cómo permiten lógica avanzada en los tipos?](#typ21)|
|[¿Cómo funcionan los decoradores en TypeScript y en qué casos son útiles?](#typ22)|
| [¿Qué son los generics y cómo se implementan en TypeScript?](#alg53-2) 💛|

---

<a id="typ"></a>

# Typescript

<a id="alg53-2"></a>

### **¿Qué son los generics y cómo se implementan en TypeScript?** 💛

[Volver al indice](#typ-base)

Los generics son una característica de TypeScript que permite crear componentes, funciones y clases que pueden trabajar con una variedad de tipos de datos. Los generics permiten escribir código que es reutilizable y flexible, ya que no está limitado a un solo tipo de datos.

Para definir un tipo genérico en TypeScript, se utiliza la sintaxis de ángulos (<>) para especificar un tipo de parámetro genérico. Por ejemplo, la siguiente función toma un argumento de tipo genérico T y devuelve un array de ese tipo:

```typescript
function makeArray<T>(value: T): T[] {
    return [value];
}

const array1 = makeArray<number>(1); // array1 es de tipo number[]
const array2 = makeArray<string>('hello'); // array2 es de tipo string[]
```

Es ideal para reemplazar el uso de any. Por ejemplo, si se usa any, se pierde la información del tipo de datos que se está utilizando, lo que puede llevar a errores en tiempo de ejecución. Con generics, se puede especificar el tipo de datos que se espera y TypeScript se encargará de verificar que se cumpla en tiempo de compilación.

<a id="typ1"></a>

### **Qué es TypeScript?**

[Volver al indice](#typ-base)

Es un superset de JavaScript, es el mismo JavaScript pero le extiende características, o posee cosas propias.

Es mantenido por Microsoft

* Ofrece tipado estricto y flexible
* Mejora la legibilidad del código
* Nos permite usar características modernas de Javascript sin miedo a la compatibilidad
* Mejora el intellisense
* Nos permite la **inyección de dependencias**

<a id="typ2"></a>

### **TSConfig.json**

[Volver al indice](#typ-base)

Es el archivo de configuración de TypeScript, en el se definen las reglas de compilación de TypeScript.

Mediante estas configuraciones se **deberia** buscar que Typescript sea lo mas estricto posible.

```json
{
 "compilerOptions": {
  "target": "es5", // A que versión de JS se compilará
  "module": "commonjs", // Sistema de modulos
  "strict": true, // Habilita todas las opciones estrictas
  "noImplicitAny": true, // No permite any
  "esModuleInterop": true, // Permite importar modulos de ES6
  "skipLibCheck": true, // No revisa las librerias
  "forceConsistentCasingInFileNames": true, // Obliga a que los nombres de archivos sean consistentes
 }
}
```

<a id="typ3"></a>

### **Watch Mode**

[Volver al indice](#typ-base)

Typescript al ejecutarse es traducido a Javascript. Para que Typescript esté pendiente de los cambios en los archivos y los compile automáticamente, se puede usar el siguiente comando

```bash
tsc --watch
```

<a id="typ4"></a>

### **Cuáles son sus características superadoras?**

[Volver al indice](#typ-base)

Su tipado estricto ayuda a saber como funcionan las cosas, por ejemplo, en este código Javascript

```jsx
function calcularISV (productos) {
 let total = 0;

 productos.forEach( ({precio}) => {
  total += precio;
 }

 return [total, total * 0.15]
}
```

* No sabemos de que tipo de dato son los productos
* Como luce un producto
* Que propiedades debe tener el producto para que el código funcione

Entonces, en Typescript quedaría algo así la firma de nuestro método

```tsx
function calcularISV(productos: Producto[]): [number, number] {}
```

* Productos es un arreglo del tipo Producto
* ¿Cómo luce Producto? Se puede definir con una interfaz

```tsx
interface Producto {
 desc: string;
 precio: number;
}
```

* Retorna un arreglo de dos números

<a id="typ5"></a>

### **Cómo declaro una variable?**

[Volver al indice](#typ-base)

Por defecto, implicitamente Typescript asigna un tipo a las variables, pero se puede asignar un tipo explicito. `any` deberia evitarse a toda costa, a menos que sea un elemento reutilizable.

```tsx
let nombre: string = 'Denu'; // Tipo explicito
let nombre= 'Denu' // Tipo implicito

// Variable de dos posibles tipos
let variable: number | string = 95;
variable = 'Denu'

let arrayVariable: (boolean | string | number)[] = ['Denu', 22, false]
```

<a id="typ6"></a>

### **Tuples - Tuplas**

El primer dato del Array SIEMPRE sera un string y el segundo un number.

```tsx
let persona: [string, number] = ['Denu', 24];

persona[0] = 10; // Error
persona[1] = 'Denu'; // Error

persona[0] = 'Denu';
persona[1] = 24;
```

<a id="typ7"></a>

### **Tipo de dato Never** 💛

[Volver al indice](#typ-base)

Es un tipo de dato que representa un valor que nunca ocurre. Se utiliza principalmente para funciones que lanzan excepciones o que nunca terminan de ejecutarse.

No es undefined ni es void. Es never.

```tsx
function error(mensaje: string): never {
 throw new Error(mensaje);
}

function loopInfinito(): never {
 while (true) {
  console.log('Hola');
 }
}
```

Suele aparecer bastante cuando declaro un Array pero nunca declaro su tipo, y luego intento insertar elementos dentro de la misma

```tsx
let arreglo = [];
arreglo.push(1); // Error - Array no acepta number dentro de su tipo never[]
```

<a id="typ8"></a>

### **Tipo de dato Any**

[Volver al indice](#typ-base)

Es un tipo de dato que puede ser cualquier cosa, es decir, que no tiene un tipo de dato específico. Se debe evitar su uso en la medida de lo posible, ya que puede llevar a errores en tiempo de ejecución y dificultar el mantenimiento del código.

```tsx
let variable: any = 'Denu';
variable = 22;
variable = true;
```

En Javascript se traspilaria a

```jsx
let variable = 'Denu';
variable = 22;
variable = true;
```

<a id="typ9"></a>

### **Cómo declaro un objeto?**

[Volver al indice](#typ-base)

```tsx
interface Personaje {
 nombre: string;
 edad: number;
 habilidades: string[];
 nacionalidad?: string; // opcional
}

const personaje: Personaje = {
 nombre: 'Denu',
 edad: 24,
 habilidades: ['volar', 'comer']
}

personaje.nacionalidad = 'Costa Rica';
```

<a id="typ10"></a>

### **Cómo declaro una función?**

```tsx
function sumar (a: number, b:number) : number {
 return a + b;
}

const sumar = (a?: number, b: number = 2) : number => {
 return a + b;
}
```

<a id="typ11"></a>

### **Parametros REST**

[Volver al indice](#typ-base)

Una funcion puede recibir tantos argumentos como uno quiera, y los parametros REST son una manera de hacer esto.

Por ejemplo en la proxima funcion puedo enviar tantos numeros como yo quiera sumar. Guarda los elementos en el array `numeros`

```tsx
function sumar(a: number, b: number, ...numeros: number[]): number {
 return numeros.reduce((acc, curr) => acc + curr, 0);
}

sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```

<a id="typ12"></a>

### **Cómo creo una clase?**

[Volver al indice](#typ-base)

```tsx
class Person {
 private age: number;
 apellido: string; // por defecto es public

  constructor(age: number, apellido: string) {
   this.age = age;
   this.apellido = apellido;
  }
}

const denu = new Person(24, 'Lemon');

// ---- Forma resumida ----

class Person {
 constructor(private age: number, public apellido: string) {}
}
```

<a id="typ13"></a>

### **Cómo se transpilan las interfaces de TypeScript?**

[Volver al indice](#typ-base)

Las interfaces de TypeScript no se transpilan directamente a código JavaScript, ya que son una característica estática de TypeScript que se utiliza principalmente para proporcionar comprobaciones estáticas de tipo durante el desarrollo. Durante el proceso de transpilación de TypeScript a JavaScript, las interfaces se eliminan del código resultante, ya que no tienen un equivalente en JavaScript.

En lugar de transpilarse, las interfaces de TypeScript son utilizadas por el compilador para realizar comprobaciones de tipos estáticos durante la fase de desarrollo. Esto significa que las interfaces ayudan a detectar errores de tipo en tiempo de compilación y a proporcionar un mejor soporte para el desarrollo de software a gran escala en TypeScript. Una vez que el código TypeScript se ha transpilado a JavaScript, las interfaces no tienen ningún impacto en el código resultante, ya que se eliminan durante el proceso de transpilación.

<a id="typ14"></a>

### **Cómo hago que las props de una interface sean opcionales?**

[Volver al indice](#typ-base)

Para hacer todas las propiedades de una interfaz opcionales en TypeScript, puedes utilizar la característica de TypeScript llamada "intersección" junto con el tipo parcial ("Partial").

```typescript
interface MyInterface {
  prop1: string;
  prop2: number;
}

// Todas las propiedades de MyInterface ahora son opcionales
type PartialMyInterface = Partial<MyInterface>;

// Ejemplo de uso
const obj: PartialMyInterface = {}; // Todas las propiedades son opcionales
```

En este ejemplo, `Partial<MyInterface>` crea un nuevo tipo que tiene todas las propiedades de `MyInterface`, pero las declara como opcionales. Esto permite que cada propiedad pueda ser `undefined` o simplemente omitida al crear un objeto que cumpla con este tipo.

Otra opcion seria agregando un `?` al lado de la propiedad, de esta forma no sera obligatoria su existencia, aunque puede que se necesiten checks extras en el lado del codigo para verificar su no-nulidad

```typescript
interface MyInterface {
  prop1?: string;
  prop2?: number;
}
```

<a id="typ15"></a>

### **Herencia en Typescript**

[Volver al indice](#typ-base)

La herencia en TypeScript se logra mediante la palabra clave `extends`. Una clase puede heredar propiedades y métodos de otra clase utilizando la herencia. Aquí tienes un ejemplo de cómo se ve la herencia en TypeScript:

```typescript
class Beer extends Drink {
 private alcohol: number;

 constructor(name: string, price: number, alcohol: number) {
  super(name, price);
  this.alcohol = alcohol;
 }
}

const beer = new Beer('Imperial', 1000, 5);
```

<a id="typ16"></a>

### **Interfaces en Typescript**

[Volver al indice](#typ-base)

Nos permite categorizar objetos, es decir, que un objeto tenga un comportamiento ya esperado. Es un contrato.

```typescript
interface Product {
 name: string;
 price: number;
}

const beer: Product = {
 name: 'Imperial',
 price: 1000
}

class Beer extends Drink implements Product {
 private alcohol: number;

 constructor(name: string, price: number, alcohol: number) {
  super(name, price);
  this.alcohol = alcohol;
 }
}
```

<a id="typ17"></a>

### **Cual es la diferencia entre el uso de types e interfaces?**  💛

[Volver al indice](#typ-base)

Ambos se utilizan para definir tipos en TypeScript, pero tienen algunas diferencias clave en su comportamiento y uso:

### Interfaces:

- **Extensibilidad:** Las interfaces pueden extender otras interfaces, lo que permite la creación de jerarquías de interfaces y la reutilización de definiciones de tipo.

```typescript
interface Animal {
 name: string;
}

interface Dog extends Animal {
 breed: string;
}
```

- **Declaración de Objetos:** Las interfaces son ideales para definir la forma de un objeto y sus propiedades, métodos y tipos de datos esperados.

```typescript
interface Person {
 name: string;
 age: number;
}

const person: Person = { name: 'Alice', age: 30 };
```

- **Compatibilidad:** Las interfaces son más adecuadas para definir contratos y acuerdos entre diferentes partes del código, ya que representan un contrato que una clase o un objeto debe cumplir.
- **Merging:** Las interfaces se pueden fusionar si tienen el mismo nombre, lo que permite agregar propiedades y métodos a una interfaz existente en diferentes archivos.

```typescript
interface Person {
 name: string;
}

interface Person {
 age: number;
}

const person: Person = { name: 'Alice', age: 30 };
```

### Types:

- **Unión y Intersección:** Los tipos permiten la creación de tipos de datos más complejos mediante la unión y la intersección de tipos.

```typescript
type Status = 'active' | 'inactive';
type User = { name: string; age: number };

type Admin = User & { role: 'admin' };
```

- **Tipos Primitivos:** Los tipos pueden definir tipos primitivos, literales y tipos de datos más simples que las interfaces.

```typescript
type ID = number;
type Status = 'active' | 'inactive';
```

- **Alias:** Los tipos permiten la creación de alias de tipos, lo que facilita la reutilización de definiciones de tipo y la creación de tipos personalizados.
- **Compatibilidad:** Los tipos son más adecuados para definir tipos de datos más simples y para realizar transformaciones y operaciones en tipos de datos existentes.

<a id="typ18"></a>

### **¿Qué son los tipos Union e Intersection y cuándo se utilizan?**

[Volver al indice](#typ-base)

**Union Types:**

Los tipos de unión (`Union Types`) en TypeScript permiten definir un tipo que puede ser uno de varios tipos diferentes. Se utilizan para representar valores que pueden ser de diferentes tipos en un contexto determinado. Por ejemplo, un tipo de unión se define utilizando el operador de unión `|` entre los tipos que se permiten.

```typescript
type Status = 'active' | 'inactive';
type ID = number | string;
```

**Intersection Types:**

Los tipos de intersección (`Intersection Types`) en TypeScript permiten combinar varios tipos en uno solo. Se utilizan para crear un nuevo tipo que tiene todas las propiedades y métodos de los tipos combinados. Por ejemplo, un tipo de intersección se define utilizando el operador de intersección `&` entre los tipos que se desean combinar.

```typescript
type User = { name: string; age: number };
type Admin = User & { role: 'admin' };
```

**Cuándo se utilizan:**

- **Union Types:** Se utilizan cuando un valor puede ser de varios tipos diferentes en un contexto determinado. Por ejemplo, cuando un valor puede ser una cadena o un número, se puede utilizar un tipo de unión para representar esta posibilidad.

- **Intersection Types:** Se utilizan cuando se desea combinar varios tipos en uno solo para crear un nuevo tipo que tenga todas las propiedades y métodos de los tipos combinados. Por ejemplo, cuando se desea crear un nuevo tipo que tenga todas las propiedades de dos tipos existentes, se puede utilizar un tipo de intersección para lograr esto.

<a id="typ19"></a>

### **¿Qué son los Utility Types como Partial, Pick, y Omit, y en qué casos son útiles?** 💛

[Volver al indice](#typ-base)

Los Utility Types en TypeScript son tipos predefinidos que permiten realizar transformaciones y operaciones comunes en tipos de datos existentes. Estos tipos proporcionan funcionalidades útiles para trabajar con tipos de datos de una manera más flexible y reutilizable. Algunos de los Utility Types más comunes en TypeScript son `Partial`, `Pick`, y `Omit`.

**Partial:**

El tipo `Partial` en TypeScript se utiliza para hacer todas las propiedades de un tipo dado opcionales. Esto significa que cada propiedad del tipo se convierte en opcional, lo que permite crear objetos que no requieren todas las propiedades del tipo original.

```typescript
interface Person {
 name: string;
 age: number;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {}; // Todas las propiedades son opcionales
```

**Pick:**

El tipo `Pick` en TypeScript se utiliza para seleccionar un subconjunto de propiedades de un tipo dado y crear un nuevo tipo que contenga solo esas propiedades seleccionadas. Esto permite crear tipos personalizados que contienen solo las propiedades necesarias de un tipo existente.

```typescript
interface Person {
 name: string;
 age: number;
 address: string;
}

type PersonName = Pick<Person, 'name'>;

const personName: PersonName = { name: 'Alice' }; // Solo contiene la propiedad 'name'
```

**Omit:**

El tipo `Omit` en TypeScript se utiliza para crear un nuevo tipo que excluye una o más propiedades de un tipo dado. Esto permite crear tipos personalizados que contienen todas las propiedades de un tipo existente, excepto las propiedades especificadas.

```typescript
interface Person {
 name: string;
 age: number;
 address: string;
}

type PersonWithoutAddress = Omit<Person, 'address'>;

const personWithoutAddress: PersonWithoutAddress = { name: 'Alice', age: 30 }; // No contiene la propiedad 'address'
```

<a id="typ20"></a>

### **¿Cómo funcionan los Mapped Types y cómo se aplican en proyectos complejos?**

[Volver al indice](#typ-base)

Mapped Types en TypeScript son una forma de transformar tipos existentes en nuevos tipos utilizando un mecanismo de mapeo. Este es un concepto muy poderoso que te permite crear tipos dinámicamente basados en otros. Los Mapped Types se definen utilizando la sintaxis de los tipos indexados y la palabra clave `in`.

Un ejemplo común de Mapped Types es la creación de un tipo que convierte todas las propiedades de un tipo dado en propiedades opcionales. Esto se puede lograr utilizando un Mapped Type con la palabra clave `Partial`.

```typescript
interface Person {
 name: string;
 age: number;
}

// Mapped Type que convierte todas las propiedades de Person en opcionales
type PartialPerson = {
 [K in keyof Person]?: Person[K];
};

const partialPerson: PartialPerson = {}; // Todas las propiedades son opcionales
```

En proyectos complejos, los Mapped Types pueden ser muy útiles para crear tipos dinámicamente basados en otros tipos existentes. Por ejemplo, puedes utilizar Mapped Types para crear tipos que transforman propiedades

<a id="typ21"></a>

### **¿Qué son los Conditional Types y cómo permiten lógica avanzada en los tipos?**

[Volver al indice](#typ-base)

Los Conditional Types en TypeScript son una característica avanzada que permite definir tipos condicionales basados en una condición booleana. Esto permite crear tipos que se comportan de manera diferente según una condición dada. Los Conditional Types se definen utilizando la palabra clave `extends` y la sintaxis de los tipos condicionales.

```typescript
type IsString<T> = T extends string ? 'yes' : 'no';

type Test1 = IsString<string>; // 'yes'
type Test2 = IsString<number>; // 'no'
```

<a id="typ22"></a>

### **¿Cómo funcionan los decoradores en TypeScript y en qué casos son útiles?**

[Volver al indice](#typ-base)

Para usar decoradores, debes habilitar la opción experimentalDecorators en el archivo tsconfig.json:

```json
{
 "compilerOptions": {
  "experimentalDecorators": true
 }
}
```

Tipos de decoradores en TypeScript:

- Decoradores de Clase

Se aplican a la definición de una clase. Reciben como argumento el constructor de la clase y pueden modificar la clase misma.

```typescript
function Logger(target: Function) {
  console.log(`Clase registrada: ${target.name}`);
}

@Logger
class User {
  constructor(public name: string) {}
}

// Output: "Clase registrada: User"
```

- Decoradores de Método

Se aplican a los métodos de una clase y reciben metadatos sobre el método. Son útiles para extender o modificar el comportamiento de los métodos.

```typescript
function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método ${methodName} ejecutado con argumentos: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);
// Output:
// "Método add ejecutado con argumentos: 2,3"
// 5
```

- Decoradores de Propiedad

Se aplican a las propiedades de una clase. Reciben el prototipo del objeto y el nombre de la propiedad. Los decoradores de propiedad no tienen acceso al valor de la propiedad directamente (ya que el valor no está inicializado en tiempo de compilación).

```typescript
function PropertyMetadata(target: any, propertyName: string) {
  console.log(`Propiedad decorada: ${propertyName}`);
}

class Product {
  @PropertyMetadata
  price: number;
}

// Output: "Propiedad decorada: price"
```

- Decoradores de Parámetro

Se aplican a los parámetros de un método y reciben información sobre el parámetro decorado. Son útiles para implementar patrones como inyección de dependencias.

```typescript
function LogParameter(target: any, methodName: string, parameterIndex: number) {
  console.log(`Parámetro decorado en el método ${methodName}, índice: ${parameterIndex}`);
}

class UserService {
  greet(@LogParameter name: string) {
    console.log(`Hola, ${name}!`);
  }
}

const userService = new UserService();
userService.greet("Ana");
// Output:
// "Parámetro decorado en el método greet, índice: 0"
// "Hola, Ana!"
```

- Decoradores de Getter/Setter

Se aplican a los accesores (get y set) y funcionan como los decoradores de método, pero se usan para modificar el comportamiento de getters y setters.

```typescript
function LogAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.get;
  descriptor.get = function () {
    console.log(`Accediendo a la propiedad ${propertyName}`);
    return originalMethod?.apply(this);
  };
}

class User {
  private _age: number = 30;

  @LogAccessor
  get age() {
    return this._age;
  }
}

const user = new User();
console.log(user.age);
// Output:
// "Accediendo a la propiedad age"
// 30
```

Los decoradores son muy usados en, por ejemplo, Angular, para configurar clases de cierta forma predeterminada

```typescript
@Injectable()
class UserService {
  // Servicio disponible para otros
}
```

---

# Javascript

<a id="var27"></a>

### **Funciones en Javascript**

[Volver al indice](#alg-base-2)

En javascript aveces no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una funcion como argumento a otra funcion. Para eso las **funciones inline**, no les ponemos nombre a las funciones porque no vamos a necesitarlas en ningún otro lado.

```jsx
const myFunc = function() {
  const myVar = "value";
  return myVar; 
  }
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

<a id="alg55"></a>

### **Metodos de Strings en Javascript**

[Volver al indice](#alg-base-2)

```javascript
// Creacion de Strings
const notAnObject = "Hola";
const yesAnObject = new String("Hola"); // Acceso a todos los metodos del OBJETO String

// Descubrir el tamaño de mi String -- LOS ESPACIOS CUENTAN COMO UN ESPACIO
const test = "hola";
test.length // 4

// Acceder a un caracter en especifico
const test = "hola";
test[0] // h
test[test.length - 1] // a
test.charAt(0) // h

// Obtener el index de una letra - Case sensitive
const test = "hola denu hola";
test.indexOf("hola"); // 0 -- primera ocurrencia de la palabra
test.indexOf("holax"); // -1
test.lastIndexOf("hola"); // 10 -- ultima ocurrencia de la palabra
test.lastIndexOf("holax"); // -1
test.indexOf("hola", 0); // Se puede aclarar desde donde comienza, por defecto comienza desde cero
test.indexOf("hola", +infinito) // Por defecto empieza desde mas infinito
```

<a id="alg56"></a>

### **Métodos de Objectos en Javascript**

[Volver al indice](#alg-base-2)

```javascript
// Object.create() -- Crea un nuevo objeto con el prototipo de pasamos por parametro
const objeto = {nombre: "denu"};
const persona = Object.create(objeto);
console.log(persona.nombre); // denu

const persona = {
    init: function (nombre) {
        this.nombre = nombre;
        return this;
    },
    saludar: function() {
        console.log("hola, soy " + this.nombre);
        return this;
    }
}

const objeto = Object.create(persona).init("denu"); // init funcionaria como constructor
console.log(objeto.saludar()) // "hola, soy denu"

// Object.assign() -- Clona o mergea objetos

const persona = {
    nombre: "denu",
    apellido: "perez"
}

const persona2 {
    ojos: "verdes"
}

const clon = Object.assign({}, persona); // No es una referencia, es una copia
const fusion = Object.assign({}, persona, persona2); // El primer parametro es el objeto destino, inicializado en vacio

// Map - Object
const mapToObject = map => Object.fromEntries(map.entries());
mapToObject(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}

// Object - Map
const objectToMap = obj => new Map(Object.entries(obj));
objectToMap({a: 1, b: 2}); // Map {'a' => 1, 'b' => 2}

```

<a id="var30"></a>

### **Diferencia entre Map y Weakmap**

[Volver al indice](#alg-base-2)

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

<a id="var29"></a>

### **Diferencia entre `for in` y `for of`**

[Volver al indice](#alg-base-2)

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

<a id="var32"></a>

### **Diferencia entre foreach, map y reduce**

[Volver al indice](#alg-base-2)

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

<a id="var16"></a>

### **Rest Operator**

[Volver al indice](#alg-base-2)

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

<a id="var17"></a>

### **Creando Strings con Template Literal - Template Strings**

[Volver al indice](#alg-base-2)

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

<a id="var18"></a>

### **Export Fallback con export default**

[Volver al indice](#alg-base-2)

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

<a id="var9"></a>

### **Diferencia entre import y require**

[Volver al indice](#alg-base-2)

- Require: Se usa para importar las funciones y el codigo en un archivo externo. Esto posee un problema, el cual es que este codigo puede ser muy largo y solo necesito una parte del codigo.
- Import: Herramienta de ES6 para importar solo los componentes que necesitamos de un archivo.

```jsx
import { countItems } from "math_array_functions"
```

<a id="var8"></a>

### **Función Object.freeze**

[Volver al indice](#alg-base-2)

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

<a id="var8-2"></a>

### **¿Qué es la destructuración y cómo se utiliza?** 💛

[Volver al indice](#alg-base-2)

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

<a id="var8-3"></a>

### **¿Cómo se diferencia un Spread Operator de un Rest Operator?** 💛

[Volver al indice](#alg-base-2)

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

<a id="ent1"></a>

### **.sort() en JavaScript**

[Volver al indice](#alg-base-2)

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

[Volver al indice](#alg-base-2)

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

[Volver al indice](#alg-base-2)

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

[Volver al indice](#alg-base-2)

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

[Volver al indice](#alg-base-2)

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

<a id="ent0"></a>

### **Parametros por valor y por referencia en Javascript**

[Volver al indice](#alg-base-2)

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

[Volver al indice](#alg-base-2)

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

[Volver al indice](#alg-base-2)

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

<a id="alg26"></a>

### **Qué es un "array-like" en Javascript?** 💛

[Volver al indice](#alg-base-2)

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

<a id="alg27"></a>

### **Cuales son las funciones array de JavaScript?** 💛

[Volver al indice](#alg-base-2)

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

<a id="alg282"></a>

### **¿Cómo funcionan los arrays en JavaScript internamente?**

[Volver al indice](#alg-base-2)

Los arrays en JavaScript son objetos especiales que permiten almacenar múltiples elementos en una sola variable. A diferencia de otros lenguajes de programación, los arrays en JavaScript no tienen un tamaño fijo y pueden contener elementos de diferentes tipos.

Internamente, los arrays en JavaScript se implementan como objetos con propiedades indexadas. Cada elemento del array se almacena en una propiedad con un índice numérico. Por ejemplo, el array [1, 2, 3] se representa internamente como un objeto con las siguientes propiedades:

```javascript
{
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
```

Por eso existe el `array-like` en Javascript

<a id="var7"></a>

### **Para que sirve event.preventDefault()?** 💛

[Volver al indice](#alg-base-2)

Los botones de los form en HTML por defecto hacen un submit, lo que puede llevar a que se recargue la pagina. Para evitar esto, se usa `event.preventDefault()` para evitar que se ejecute el comportamiento por defecto del evento.

Por ejemplo, si quiero que al hacer click en un boton no se recargue la pagina, puedo hacer lo siguiente:

```jsx
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();
});
```

U otro ejemplo es para evitar que el resto de eventos que se ejecutarian por defecto, no lo hagan

<a id="alg29"></a>

### **Set() en Javascript** (HashSet) 💛

[Volver al indice](#alg-base-col)

Es una estructura de datos que solo permite valores unicos. Si paso un array a un set, va a eliminar todos los valores duplicados.

* `new Set()` -> Crea el set nuevo, si es desde un array, elimina duplicados
* `Add()`
* `Delete()`
* `Has()` -> Devuelve true o false si el valor ya existe
* `clear()`-> Remover todos los elementos del set
* `Values()` -> devuelve un iterator con todos los valores
* `forEach()`
* `keys()`-> mismo con values
* `Entries()` -> devuelve un iterator con [value, value] pares

```javascript
// Crear una nueva instancia de Set
const mySet = new Set();

// Agregar elementos al Set
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("apple"); // Los Sets no permiten elementos duplicados, por lo que esta línea no tendrá ningún efecto

// Verificar si un elemento existe en el Set
console.log(mySet.has("apple")); // Output: true
console.log(mySet.has("grape")); // Output: false

// Eliminar un elemento del Set
mySet.delete("banana");

// Iterar sobre los elementos del Set
for (let item of mySet) {
    console.log(item);
}
// Output:
// apple
// orange

```

<a id="alg30"></a>

### **HashTables** (.Map) 💛

[Volver al indice](#alg-base-2)

Es una estructura de datos que almacena valores dado su Hash (int o long). Son muy eficientes para una busqueda dada por clave.

Sus operaciones son:

* Insertar nuevo par clave, valor - `index = hash(key) % array_length` , su complejidad es `O(1)`
* Obtener un valor mediante su clave, su complejidad es `O(1)` en un caso promedio, `O(N)` en el peor de los casos, en general si la funcion Hash es inadecuada.

```javascript
// Definición de una Hashtable
const hashtable = {};

// Agregar elementos a la Hashtable
hashtable["key1"] = "value1";
hashtable["key2"] = "value2";
hashtable["key3"] = "value3";

// Acceder a elementos en la Hashtable
console.log(hashtable["key1"]); // Output: "value1"
console.log(hashtable["key2"]); // Output: "value2"

// Verificar si una clave existe en la Hashtable
console.log("key4" in hashtable); // Output: false

// Eliminar un elemento de la Hashtable
delete hashtable["key3"];

// Iterar sobre las claves de la Hashtable
for (let key in hashtable) {
    console.log(key + ": " + hashtable[key]);
}
// Output:
// key1: value1
// key2: value2

----

// Crear una nueva instancia de Map
const myMap = new Map();

// Agregar elementos a la Map
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Acceder a elementos en la Map
console.log(myMap.get("key1")); // Output: "value1"
console.log(myMap.get("key2")); // Output: "value2"

// Verificar si una clave existe en la Map
console.log(myMap.has("key4")); // Output: false

// Eliminar un elemento de la Map
myMap.delete("key3");

// Iterar sobre las claves y valores de la Map
for (let [key, value] of myMap) {
    console.log(key + ": " + value);
}
// Output:
// key1: value1
// key2: value2

```

<a id="alg301"></a>

### **¿Cuál es la diferencia entre un Set y un Array en JavaScript?**

[Volver al indice](#alg-base-2)

| Set | Array |
| --- | ----- |
| Almacena valores únicos | Almacena valores duplicados |
| No tiene índices | Tiene índices |
| No tiene métodos como push(), pop(), shift(), unshift() | Tiene métodos como push(), pop(), shift(), unshift() |
| No tiene métodos como map(), filter(), reduce() | Tiene métodos como map(), filter(), reduce() |
| No tiene métodos como sort(), reverse() | Tiene métodos como sort(), reverse() |
| No tiene métodos como find(), findIndex(), every(), some() | Tiene métodos como find(), findIndex(), every(), some() |
| No tiene métodos como splice(), slice() | Tiene métodos como splice(), slice() |
| No tiene métodos como join(), concat() | Tiene métodos como join(), concat() |

<a id="var21"></a>

### **Promises** 💛

[Volver al indice](#alg-base-async)

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

<a id="var21-1"></a>

### **Async Await** 💛

[Volver al indice](#alg-base-2)

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

<a id="var21-2"></a>

### **Callbacks** 💛

[Volver al indice](#alg-base-2)

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

<a id="var12"></a>

### **Callback Hell** 💛

[Volver al indice](#alg-base-2)

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

<a id="var22"></a>

### **Comparacion entre Promises, Callbacks y Async-await** 💛

[Volver al indice](#alg-base-2)

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

<a id="var10"></a>

### **Como funciona setTimeout?**

[Volver al indice](#alg-base-2)

Permite ejecutar un fragmento de código una vez pasa un tiempo determinado.

Por ejemplo, el codigo imprimirá “Hola Mundo” despues de 2 segundos

```jsx
setTimeout(function(){
  console.log('hola mundo');
}, 2000);
```

El primer parámetro es la función a ejecutar, puede ser hecha ahi mismo como en el ejemplo anterior, o ya estar hecha como en este ejemplo:

```jsx
function saludos(nombre, rol) {
  console.log(`hola mi nombre es ${nombre} y mi rol es ${rol}`);
}

setTimeout(saludos, 3000, "denu", "administrador");
```

¿Porque no pasar los parametros directamente a la funcion y recien despues del tiempo? Porque JS ejecutará la funcion sin esperar al timeout, ya que estarias pasando una llamada a la funcion, no la referencia a la funcion.

```jsx
setTimeout(saludos('denu', 'admin'), 3000); // NO
```

Si quiero cancelar un setTimeout debo utilizar `clearTimeout()`

```jsx
const timeoutid = setTimeout (function() {
  console.log('hola');
}, 2000);

clearTimeout(timeoutid)
```

<a id="var10-1"></a>

### **¿Qué es un Promise.all y cuándo usarlo?** 💛

[Volver al indice](#alg-base-2)

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

<a id="var10-2"></a>

### **¿Cómo se maneja un error en una promesa?** 💛

[Volver al indice](#alg-base-2)

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

<a id="var10-3"></a>

### **¿Cómo funcionan Promise.allSettled, Promise.race y Promise.any?** 💛

[Volver al indice](#alg-base-2)

- **Promise.allSettled:** Devuelve una promesa que se resuelve después de que todas las promesas del iterable se hayan resuelto o rechazado, con un array de objetos que describen el resultado de cada promesa.

```jsx
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status))); // "fulfilled", "rejected"
```

- **Promise.race**: Devuelve una promesa que se resuelve o rechaza tan pronto como una de las promesas del iterable se resuelve o se rechaza, con el valor o la razón de esa promesa.

```jsx
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```

-**Promise.any**: Devuelve una promesa que se resuelve tan pronto como una de las promesas del iterable se resuelve, con el valor de esa promesa.

```jsx
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.any([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```

La diferencia entre `any` y `race` es que `any` se resuelve con el primer valor resuelto, mientras que `race` se resuelve con el primer valor resuelto o rechazado, `any` ignora cualquier valor rechazado, a menos que todas las promises hayan tenido el mismo resultado de rechazo.

<a id="var5"></a>

### **Nombres de Variables**

[Volver al indice](#alg-base-2)

Cuando vayamos a dar un nombre a una variable deberemos tener en cuenta una serie de normas. Es decir, no podemos poner el nombre que nos dé la gana a una variable.

Es recomendable que los nombres de los identificadores sean legibles y no acrónimos que no podamos leer. De tal manera que a la hora de verlos se auto-documenten por sí mismos. Además estos identificadores nunca podrán coincidir con las palabras reservadas ni comenzar con un número.

Algunas reglas no escritas, pero que se han asumido *por convención* son:

* Los identificadores siempre se escriben en minúsculas. (pe. nombre). Y si son dos o más palabras, el inicio de cada siguiente palabra se escriba en mayúsculas (pe. nombrePersona)
* Si el identificador implica que sea una constante (es decir que hayamos utilizado los modificadores *final static*), dicho nombre se suele escribir en mayúsculas (pe. LETRA). Y si la constante está compuesta de dos palabras, estas se separan con un subrayado (pe. LETRA_PI).

<a id="var6"></a>

### **Diferencia entre let, var y const** 💛

[Volver al indice](#alg-base-2)

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

<a id="rea31"></a>

### **Cual es la diferencia entre setTimeout() y setInterval()?**

[Volver al indice](#alg-base-2)

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

<a id="rea40"></a>

### **Qué es el namespacing de JS?**

[Volver al indice](#alg-base-2)

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

<a id="rea46"></a>

### **Fetch API**

[Volver al indice](#alg-base-2)

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

<a id="rea47"></a>

### **Cómo se pueden crear objetos genéricos?**

[Volver al indice](#alg-base-2)

```jsx
var myObjeto = new Object({
'nombre': 'Diego',
'apeliido': 'Querales',
'edad': 25,
})
// Salida por consola
{nombre: "Diego", apeliido: "Querales", edad: 25}
```

<a id="js1"></a>

### **Document.ready vs Window.onload**

[Volver al indice](#alg-base-2)

`Document.ready` se ejecuta despues de cargar todo el HTML. `Window.onload` se ejecuta cuando ya cargo completamente todo el contenido, mas adelante.

<a id="rea45"></a>

### **Que es el Scope en Javascript?**

[Volver al indice](#alg-base-2)

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