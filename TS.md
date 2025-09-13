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