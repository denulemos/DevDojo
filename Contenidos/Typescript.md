# Typescript

### **Qué es TypeScript?**

Es un superset de JavaScript, es el mismo JavaScript pero le extiende características, o posee cosas propias. 

Es mantenido por Microsoft

- Ofrece tipado estricto y flexible
- Mejora la legibilidad del código
- Nos permite usar características modernas de Javascript sin miedo a la compatibilidad
- Mejora el intellisense
- Nos permite la **inyección de dependencias**

### **Cuáles son sus características superadoras?**

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

- No sabemos de que tipo de dato son los productos
- Como luce un producto
- Que propiedades debe tener el producto para que el código funcione

Entonces, en Typescript quedaría algo así la firma de nuestro método

```tsx
function calcularISV(productos: Producto[]): [number, number] {}
```

- Productos es un arreglo del tipo Producto
- ¿Cómo luce Producto? Se puede definir con una interfaz

```tsx
interface Producto {
	desc: string;
	precio: number;
}
```

- Retorna un arreglo de dos números

### **Cómo declaro una variable?**

```tsx
let nombre: string = 'Denu'; // Tipo explicito
let nombre= 'Denu' // Tipo implicito

// Variable de dos posibles tipos
let variable: number | string = 95;
variable = 'Denu'

let arrayVariable: (boolean | string | number)[] = ['Denu', 22, false]

```

### **Cómo declaro un objeto?**

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
### **Cómo declaro una función?**

```tsx
function sumar (a: number, b:number) : number {
	return a + b;
}

const sumar = (a?: number, b: number = 2) : number => {
	return a + b;
}
```

### **Cómo una clase?**

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

### **Cómo se transpilan las interfaces de TypeScript?**

Las interfaces de TypeScript no se transpilan directamente a código JavaScript, ya que son una característica estática de TypeScript que se utiliza principalmente para proporcionar comprobaciones estáticas de tipo durante el desarrollo. Durante el proceso de transpilación de TypeScript a JavaScript, las interfaces se eliminan del código resultante, ya que no tienen un equivalente en JavaScript.

En lugar de transpilarse, las interfaces de TypeScript son utilizadas por el compilador para realizar comprobaciones de tipos estáticos durante la fase de desarrollo. Esto significa que las interfaces ayudan a detectar errores de tipo en tiempo de compilación y a proporcionar un mejor soporte para el desarrollo de software a gran escala en TypeScript. Una vez que el código TypeScript se ha transpilado a JavaScript, las interfaces no tienen ningún impacto en el código resultante, ya que se eliminan durante el proceso de transpilación.

### **Cómo hago que las props de una interface sean opcionales?**

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

### **Herencia en Typescript**

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

### **Interfaces en Typescript**

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