# Typescript

## **Qué es TypeScript?**

Es un superset de JavaScript, es el mismo JavaScript pero le extiende características, o posee cosas propias. 

Es mantenido por Microsoft

- Ofrece tipado estricto y flexible
- Mejora la legibilidad del código
- Nos permite usar características modernas de Javascript sin miedo a la compatibilidad
- Mejora el intellisense
- Nos permite la **inyección de dependencias**

## **Cuáles son sus características superadoras?**

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

## **Cómo declaro una variable?**

```tsx
let nombre: string = 'Denu'; // Tipo explicito
let nombre= 'Denu' // Tipo implicito

// Variable de dos posibles tipos
let variable: number | string = 95;
variable = 'Denu'

let arrayVariable: (boolean | string | number)[] = ['Denu', 22, false]

```

## **Cómo declaro un objeto?**

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
## **Cómo declaro una función?**

```tsx
function sumar (a: number, b:number) : number {
	return a + b;
}

const sumar = (a?: number, b: number = 2) : number => {
	return a + b;
}
```

## **Cómo una clase?**

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


