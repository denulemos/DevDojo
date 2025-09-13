<a name="typ-base"></a>

### TypeScript

| Tema | Enlace |
|------|--------|
| Qué es TypeScript? | [Ver](#typ1) |
| TSConfig.json | [Ver](#typ2) |
| Watch Mode | [Ver](#typ3) |
| Cuáles son sus características superadoras? | [Ver](#typ4) |
| Cómo declaro una variable? | [Ver](#typ5) |
| Tuples - Tuplas | [Ver](#typ6) |
| Tipo de dato Never  | [Ver](#typ7) |
| Tipo de dato Any | [Ver](#typ8) |
| Cómo declaro un objeto? | [Ver](#typ9) |
| Cómo declaro una función? | [Ver](#typ10) |
| Parámetros REST | [Ver](#typ11) |
| Cómo creo una clase? | [Ver](#typ12) |
| Cómo se transpilan las interfaces de TypeScript? | [Ver](#typ13) |
| Cómo hago que las props de una interface sean opcionales? | [Ver](#typ14) |
| Herencia en Typescript | [Ver](#typ15) |
| Interfaces en Typescript | [Ver](#typ16) |
| Diferencia entre el uso de types e interfaces  | [Ver](#typ17) |
| ¿Qué son los tipos Union e Intersection y cuándo se utilizan? | [Ver](#typ18) |
| ¿Qué son los Utility Types como Partial, Pick, y Omit, y en qué casos son útiles?  | [Ver](#typ19) |
| ¿Cómo funcionan los Mapped Types y cómo se aplican en proyectos complejos? | [Ver](#typ20) |
| ¿Qué son los Conditional Types y cómo permiten lógica avanzada en los tipos? | [Ver](#typ21) |
| ¿Cómo funcionan los decoradores en TypeScript y en qué casos son útiles? | [Ver](#typ22) |
| ¿Qué son los generics y cómo se implementan en TypeScript?  | [Ver](#alg53-2) |
| Null vs undefined vs never | [Ver](#ent0-2) |

---

<a id="typ"></a>

# Typescript

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

---

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

### **Cómo declaro una variable en Typescript?**

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

[Volver al indice](#typ-base)

Una **tupla** en TypeScript es un tipo especial de arreglo donde se conoce el tipo de dato y la cantidad de elementos que contiene. Permite definir una estructura de datos con un número fijo de elementos, cada uno con su propio tipo.

Por ejemplo:

```ts
let tupla: [string, number];
tupla = ['Denu', 22]; // Correcto
// tupla = [22, 'Denu']; // Error: el orden y tipo deben coincidir
```

Las tuplas son útiles cuando se necesita retornar o manejar un conjunto de valores relacionados pero de diferentes tipos.

También pueden tener elementos opcionales o usar el operador rest:

```ts
let tuplaOpcional: [string, number?] = ['Denu'];
let tuplaRest: [string, ...number[]] = ['Denu', 1, 2, 3];
```

<a id="typ7"></a>

### **Tipo de dato `Never`** 

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

### **Tipo de dato `Any`**

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

<a id="typ9"></a>

### **Cómo declaro un objeto en Typescript?**

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

### **Cómo declaro una función en Typescript?**

```tsx
function sumar (a: number, b:number) : number {
 return a + b;
}

const sumar = (a?: number, b: number = 2) : number => {
 return a + b;
}
```

<a id="typ13"></a>

### **Cómo se transpilan las interfaces de TypeScript?**

[Volver al indice](#typ-base)

Las interfaces en TypeScript se **no transpilan a código JavaScript**, ya que son un mecanismo exclusivo del tiempo de compilación para mantener el tipado estático y ayudar en la detección de errores durante el desarrollo. En otras palabras, las interfaces solo existen en TypeScript mientras se escribe y compila el código, pero al momento de la transpilación final a JavaScript, **se eliminan completamente** porque JavaScript no reconoce ese concepto.

- Las **interfaces definen "contratos" o "tipos"** para objetos, clases o funciones en TypeScript, especificando qué propiedades y métodos deben existir y qué tipos tienen.
- Cuando se transpila TypeScript a JavaScript, **todo lo relacionado con las interfaces se elimina**, porque JavaScript no tiene soporte nativo para interfaces o tipos estáticos.
- Solo el código "real" y ejecutable (funciones, clases, instrucciones) se convierte en JavaScript; las interfaces se usan solo para la validación en tiempo de compilación.
- Por ejemplo, si defines una interfaz para tipar un objeto, al generar el código JavaScript, no aparecerá ninguna referencia a esa interfaz ni ninguno de sus detalles.

> **Las interfaces TypeScript no se transpilan a JavaScript; son eliminadas durante la compilación, ya que solo sirven para verificar tipos en tiempo de desarrollo, sin generar código runtime.**

Esto permite que el código resultante sea código JavaScript limpio y compatible con cualquier entorno, sin cargas extras por el sistema de tipos de TypeScript.

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

### **¿Qué son los Utility Types como Partial, Pick, y Omit, y en qué casos son útiles?** 

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

<a id="typ21"></a>

### **¿Qué son los Conditional Types y cómo permiten lógica avanzada en los tipos?**

[Volver al indice](#typ-base)

Los Conditional Types en TypeScript son una característica avanzada que permite definir tipos condicionales basados en una condición booleana. Esto permite crear tipos que se comportan de manera diferente según una condición dada. Los Conditional Types se definen utilizando la palabra clave `extends` y la sintaxis de los tipos condicionales.

```typescript
type IsString<T> = T extends string ? 'yes' : 'no';

type Test1 = IsString<string>; // 'yes'
type Test2 = IsString<number>; // 'no'
```

### **Null vs undefined vs never**

[Volver al indice](#typ-base)

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

### **Cual es la diferencia entre el uso de types e interfaces?**

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