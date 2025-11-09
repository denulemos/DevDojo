<a id="entrevista-base"></a>
<a name="rea-base"></a>

# [Conjunto de preguntas generales para un Frontend Engineer](#entrevista-base)

Este es un conjunto de preguntas sumarizadas mas comunes en entrevistas de trabajo para un Frontend Engineer. Engloba conceptos comunmente preguntados sobre Javascript, patrones de disenio, mejora de performance, etc. Tambien se agregan preguntas sobre React, Redux y Angular en esta ocasion.

| Programacion Funcional |
|----------|
| [Programacion reactiva (Observables, RxJs, Subscribers)](#ent8-2) |
| [Paradigma Reactiva Funcional (FRP)? (Funcional + Reactiva)](#ent9) |
| [Funciones lambda (Funciones Anonimas)](#ent8-1) |
| [Memoization](#ent16) |

| Patrones y Arquitectura |
|----------|
| [Encapsulación (Private, public)](#ent10)|
| [Principios SOLID](#ent11) |
| [Que es la inyeccion de dependencias?](#ent12) |
| [Patrones de disenio en Frontend](#ent46) |
| [Antipatrones en Frontend](#ent47) |
| [Microfrontends](#ent54) |
| [Como organizarias el code reuse en una aplicacion?](#ent42) |

| Performance y Optimización |
|----------|
| [Lazy loading](#ent20) |
| [Performance](#ent21) |
| [Critical Rendering Path](#ent22) |
| [Tree shaking](#ent33) |
| [Code splitting](#ent56) |
| [Como puedo mejorar la performance de mi Frontend?](#rea17) 💛|
| [¿Que es async, preload y prefetch?](#rea29) |

| Seguridad y Almacenamiento |
|----------|
| [Cuales son los ataques mas comunes en la web? Nombrar tambien sus protecciones del lado del cliente](#ent19) |
| [¿Cuáles son las diferencias entre localStorage, sessionStorage y las cookies?](#ent23) |
| [CORS](#ent67) |
| [Obfuscation and Minification](#ent55) |

| Desarrollo y Herramientas |
|----------|
| [Beneficios de usar Webpack o Rollup](#ent32) |
| [Que hace Babel?](#rea34) |
| [Que hace Webpack?](#rea35) |
| [CDN (Content Delivery Network)](#ent41) |
| [Server Side Rendering (SSR)](#ent48) |
| [Static site rendering (SSR)](#ent52) |
| [Serverless](#ent57) |
| [PWA (Progressive Web App)](#ent25-1) |

| JavaScript y Eventos |
|----------|
| [Cual es la diferencia entre call, bind y apply?](#rea30) |
| [Como evitar mandar muchos eventos inutiles, por ejemplo, ejecutar un search por letra?](#rea50) 💛|
| [Que es async rendering?](#rea51) 💛|
| [Para que son los eventos sinteticos (SyntheticEvent)?](#rea53) |
| [Cual es la diferencia entre un event loop, microtask y macrotask?](#rea535) |
| [Variable Shadowing - Ocultamiento de Variables](#rea545) |

| Metodologías y Procesos |
|----------|
| [Es la metodologia Agile recomendable para todos los proyectos?](#ent60) |
| [MVP (Minimum Viable Product)](#ent61) |
| [Metodologias de estimacion de tareas](#ent66) |
| [Continuous Integration, Continuous Delivery, Continuous Deployment - Mejoras del proceso CI-CD](#ent65-4) |

| Testing y Calidad |
|----------|
| [Mejoras en el ciclo de vida](#ent68) |

| Arquitectura y Escalabilidad |
|----------|
| [Escalabilidad FE](#ent74)|
| [Principios de Disponibilidad, Escalamiento en Frontend](#ent75)|
| [¿De qué hablamos cuando hablamos de una SPA (Single Page App)?](#rea48) 💛|
| [Que significa prop drilling y como evitarlo?](#rea54) |

| Conceptos Generales |
|----------|
| [Qué es "REPL" y para qué sirve?](#rea32) |
| [Qué es el "demultiplexer"?](#rea33) |
| [¿Que es el SEO?](#rea38) |
| [Que es la tipificacion de Variables?](#rea41) |
| [Que es la Coercion explicita e Implicita?](#rea44) |
| [Que es la expresion de Funcion Inmediatamente Invocada - Immediately invoked Function Expression (IIFE)?](#rea49) |
| [Qué es un Event listener?](#rea505) |
| [Que es Symbol?](#rea52) |

---

## Preguntas mas comunes en entrevistas de trabajo para un FE Engineer


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



<a id="rea48"></a>

### **¿De qué hablamos cuando hablamos de una SPA (Single Page App)?**

[Volver al indice](#fe-base)

Una SPA (Single Page Application) son apps web que simulan ser una única página con contenido dinámico. La idea es darle la “ilusión” al usuario de que está navegando una aplicación de escritorio, que no recarga, no se satura, etc.

Las únicas recargas, o pantallas de carga, son cuando se está trayendo información del servidor. No se recarga toda la página, aun así, solo ciertas partes, dando a una experiencia mucho más fluida.

En resumen:

- Se evita la constante recarga entera de la página
- La página no se satura ni realiza peticiones constantes al servidor. Únicamente se pide lo necesario.

<a id="rea50"></a>

### **(Performance) Como evitar mandar muchos eventos inutiles, por ejemplo, ejecutar un search por letra?**

[Volver al indice](#rea-base)

Debounce es un termino de electronica que ayuda a que, por ejemplo, si apretamos varias veces un boton, no se manden muchas veces las instrucciones

```jsx
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeoutId)
}, [value])

return debouncedValue;
}

// Luego en el component que tiene el search

const queryDebouncedValue = useDebounce(query, 300)

useEffect(() => {
api.search(queryDebouncedValue).then(setProducts);
}, [queryDebouncedValue]);
```

<a id="rea51"></a>

### **Que es async rendering?**

[Volver al indice](#rea-base)

Permite que el renderizado pueda interrumpirse, permitiendo renderizar varios arboles de componentes a la vez sin necesidad de bloquear el hilo principal del navegador.

<a id="rea53"></a>

### **Para que son los eventos sinteticos (SyntheticEvent)?**

[Volver al indice](#rea-base)

Funcionan de la misma forma que los eventos normales de los exploradores. Los eventos sinteticos usan codigo que puede ser aplicado en multiples exploradores web mientras que los eventos normales se enfocan en un solo navegador

Ayuda a que el dev no se preocupe tanto en como manejar un evento segun el navegador para el cual esta desarrollando, ya que estos eventos simulan muchos eventos y garantiza el mismo comportamiento.

<a id="rea54"></a>

### **Que significa prop drilling y como evitarlo?**

[Volver al indice](#rea-base)

Es cuando las props que se comparten acumulan demasiadas dependencias. Da lugar a flujos de datos profundos, dificiles de identificar y refactorizar. Dos formas de resolverlo son:

- Composicion de componentes frente a un mismo juego de datos compartido por varios componentes
- Redux o API Context, aptas para escenarios mas complejos donde conviene manejar un estado global. 

<a id="rea17"></a>

### **Como puedo mejorar la performance de mi Frontend?**

[Volver al indice](#rea-base)

**Paginacion**: No se puede renderizar mucha informacion al mismo tiempo, hace un payload gigante, y satura a la base de datos. Es preferible pedir de a pedazos de data para disminuir el peso en el Backend

**Queries Optimistics**: Mostrar el cambio en la UI independientemente del resultado del servidor, como el like de Instagram, primero se anima, luego se ejecuta la peticion de forma asincrona, y luego se tiene en cuenta el resultado

**Pedir solo lo necesario**: Solo pedir los datos necesarios, no traer cosas de más. Hay muchas aplicaciones hechas front-first, donde el back adapta sus servicios a lo que el front necesita.

**Tener un connection state**: Si no hay internet, no realizar peticiones. Como Youtube, cualquier cosa que quiera hacer el cliente sin internet, no se va a realizar para nada.

**Group Notifications**: Si la aplicacion utiliza notificaciones, hacerlo de a grupos para no hacer jobs grandes

**Evitar queries expensive**: Por ejemplo, Twitter no da la opcion de seguir o dejar de seguir gente de a grupos grandes ya que es innecesariamente caro para el servidor

⚛️ **Podemos usar el Profiler que viene con React Dev Tools**
En caso de componentes lentos en React, podemos usar esta herramienta y ver cual fue el componente que causo el problema.

- Flame Chart: Representa el estado de la aplicacion para un commit en particular
- Component chart: Ver cuantas veces se proceso un componente en particular

Para testear el rendimiento de una web se puede utilizar Lighthouse de Google en DevTools

**Lazy Loading**: No cargar todas las imagenes de una, ir cargando a medida que el usuario lo va necesitando.

**Usar Cache**: Si manejamos payloads muy grandes, no conviene cargar todo esto en memoria, se recomienda usar un cache, ir guardando estos payloads y volver a consultarlos a medida que sea necesario

**Usar HTTP 2**: Si necesito hacer demasiados request en paralelo (cosa que no es recomendable), HTTP 2 tiene una coneexion TCP muy buena, para el multiplexing (no siempre es aplicable)

**Hacer UI que llamen lo menos posible al backend**: Que sean UI que dependan de pocos llamados para funcionar (si se puede, ya que hay dependencias entre payloads)

⚛️ **No pasar props que no son necesarios**: El propering afecta al rendimiento en React. El estado debe estar tan cerca como pueda de donde se esté usando. Mientras mas props recibimos, mayor es la dependencia con el componente padre.

⚛️ **Evitar renderizados de mas**: Usar useMemo (memorizacion en React) para evitar renderizados o componentes puros

**Tener varias zonas de disponibilidad**: Esto para evitar la latencia en la obtencion de recursos.

<a id="rea29"></a>

### **¿Que es async, preload y prefetch?**

[Volver al indice](#rea-base)

En JavaScript, `async`, `preload` y `prefetch` son conceptos relacionados pero diferentes:

1. **Async/Await**:
   - `async` y `await` son características introducidas en JavaScript para facilitar la escritura y gestión de código asíncrono.
   - `async` se utiliza para declarar que una función devuelve una promesa. Esto permite que la función se pueda utilizar con `await` para esperar la resolución de la promesa dentro de un contexto asíncrono.
   - `await` se utiliza dentro de funciones `async` para esperar la resolución de una promesa antes de continuar con la ejecución del código.
   - Estas características son útiles para trabajar con operaciones asíncronas, como solicitudes HTTP, operaciones de lectura/escritura de archivos, y otras operaciones que pueden tomar tiempo y no bloquean la ejecución del código.

2. **Preload**:
   - `preload` es una directiva HTML que se utiliza para indicar al navegador que cargue un recurso de manera prioritaria.
   - Se puede usar en elementos `<link>` o en elementos `<script>` para pre-cargar recursos como archivos CSS, JavaScript, fuentes web, etc.
   - El navegador descarga estos recursos en segundo plano mientras procesa el resto del contenido de la página. Esto puede mejorar significativamente los tiempos de carga de la página al garantizar que los recursos importantes se carguen antes de que sean necesarios.

3. **Prefetch**:
   - `prefetch` es similar a `preload`, pero se utiliza para indicar al navegador que cargue recursos que probablemente se necesitarán en el futuro, pero no de manera inmediata.
   - Se utiliza principalmente para cargar recursos relacionados con rutas de navegación o acciones del usuario que aún no se han realizado.
   - Al igual que `preload`, se puede usar en elementos `<link>` o en elementos `<script>`, y ayuda a mejorar el rendimiento de la aplicación al anticiparse a las necesidades futuras de recursos.

En resumen, `async` y `await` se utilizan en JavaScript para trabajar con código asíncrono de manera más legible y manejable, mientras que `preload` y `prefetch` son directivas HTML utilizadas para optimizar la carga de recursos en las páginas web, priorizando recursos importantes o anticipándose a las necesidades futuras de recursos.

<a id="rea30"></a>

### **Cual es la diferencia entre call, bind y apply?**

[Volver al indice](#rea-base)

Por ejemplo tenemos dos objetos y una funcion

```jsx
const user = {
  name: 'Marcos'
};

const business = {
  name: 'Headbook'
}

function showInfo(likes, friends){
  return `${this.name} tiene ${likes} likes y ${friends}`
}
```

En ese caso, el [`this.name`](http://this.name)hace referencia al contexto global. ¿Como hacer para matchearlo de manera dinamica por objeto?

```jsx
showInfo.call(user, 4, 5); // le pasamos la referencia que deseamos y las props
// Marcos tiene 4 likes y 5 amigos

showInfo.apply(user, [4,5]); // lo mismo pero los params deben ir en un array

const newFunction = showInfo.bind(user);
newFunction(10,15); // hacemos otra funcion que toma otro contexto
```

Basicamente los 3 asocian un objeto a `this`

<a id="rea32"></a>

### **Qué es "REPL" y para qué sirve?**

[Volver al indice](#rea-base)

REPL, acrónimo en Ingles de "Leer, Evaluar, Imprimir, Bucle". Este shell es utilizado para realizar declaraciones específicas en JavaScript.

<a id="rea33"></a>

### **Qué es el "demultiplexer"?**

[Volver al indice](#rea-base)

El **demultiplexer,** *es una interfaz encargada de las notificaciones dentro de Node JS.* Es utilizado para recopilar información de eventos específicos y formar preguntas, brindando así lo que se conoce como un **Evento QUE**.

<a id="rea34"></a>

### **Que hace Babel?**

[Volver al indice](#rea-base)

Babel es un compilador para JavaScript. Permite transformar codigo escrito con las ultimas caracteristicas y traducirlo en codigo de JS bien vanilla que pueda ser entendido por navegadores antiguos.

<a id="rea35"></a>

### **Que hace Webpack?**

[Volver al indice](#rea-base)

Es el responsable de producir los bundles a partir del codigo Front. Es un Module Bundler, hay otras opciones como Gulp, Rollup, etc..

Los bundles son paquetes de codigo necesarios para poder llevar a produccion un proyecto, traspilando el codigo y el empaquetado de los modulos en uno o varios archivos compactados, minimizados y optimizados. Es lo que se hace cuando se hace `build`.

<a id="rea36"></a>

### **Que es el server side rendering?**

[Volver al indice](#rea-base)

Es crear paginas HTML renderizadas en servidor para que lleguen listas. Se crean usando NodeJS que generalmente se usa con Express (para utilizar verbos de HTTP).

NextJS es una opcion para usar esto. Favorecen mucho al SEO ya que renderizan la pagina antes de que pueda ser enviada al navegador.

<a id="rea37"></a>

### **Que es Tree Shaking?**

[Volver al indice](#rea-base)

Es remover codigo no usado, como, por ejemplo, imports y exports que no fueron usados. Esto lo hace webpack y Rollup de manera automatica.

<a id="rea38"></a>

### **¿Que es el SEO?**

[Volver al indice](#rea-base)

Es Search Engine Optimization, es lo que hace que un sitio sea encontrado por Google, y HTML hace un aporte con su metadata para que esto suceda. Por ejemplo, no se recomienda usar muchos h1 en un HTML para no afectar al SEO.

- Describir la pagina con titulos y fragmentos unicos. Uso de title y utilizar terminos claros. Todas las paginas del sitio deben tener una meta descripcion para que aparezca la misma en los resultados del buscador

```html
<head>
  <title>Bienvenidos</title>
  <meta name="description" content="Sitio web">
</head>
```

- Usar codigos de estado HTTP Significativos. Google usa rastreadores sobre los sitios web, o robots, es un programa que descubre y analiza sitios web, en google se llama Google Bot, que usa codigos de estado HTTP. Si uso codigos significativos, le indico al robot si esta pagina debe ser indexada, o no (por ejemplo, si es 404, no es trackeado)
- Solucionar problemas con imagenes y carga diferida. Cargar cuando el usuario este por verlas.

```html
<img src="image.jpg" alt="..." loading="lazy">
```

- Crear diseños accesibles, crear paginas para los usuarios, no solo para los motores de busqueda. Un ejemplo para testear la accesibilidad, es cargar la pagina sin JS habilitado.

<a id="rea41"></a>

### **Que es la tipificacion de Variables?**

[Volver al indice](#rea-base)

La tipificación de variables, sirve para asignar un número a una variable y después asignar un string a la misma variable.

<a id="rea44"></a>

### **Que es la Coercion explicita e Implicita?**

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

<a id="rea49"></a>

### **Que es la expresion de Funcion Inmediatamente Invocada - Immediately-invoked Function Expression (IIFE)?**

[Volver al indice](#rea-base)

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

<a id="rea505"></a>

### **Qué es un Event listener?**

[Volver al indice](#rea-base)

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

<a id="rea52"></a>

### **Que es Symbol?**

[Volver al indice](#rea-base)

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

<a id="rea535"></a>

### **Cual es la diferencia entre un event loop, microtask y macrotask?**

[Volver al indice](#rea-base)

Javascript ejecuta una linea de codigo por vez. **Event Loop** se encarga de gestionar las funciones asincronas.
Funciona con una Call Stack y una Callback Queue. Cuando hay una linea en ejecucion, se agrega al Call Stack, y cuando finaliza, se elimina. La Queue tiene las funciones callback que deben ejecutarse, no debe haber ninguna funcion ejecutandose en la Call Stack ni debe haber otra funcion adelante suyo en la Queue.
Cuando ejecutamos una funcion con setTimeout, la misma se entrega a Timers API, y aunque setTimeout sea cero, habrá un retraso en la ejecucion de esta funcion, haciendo que tenga que esperar en la Queue a que termine de ejecutarse el codigo asincrono.

* macroTasks: [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout), [setInterval](https://developer.mozilla.org/docs/Web/API/WindowTimers/setInterval), [setImmediate](https://developer.mozilla.org/docs/Web/API/Window/setImmediate), [requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame), [I/O](https://developer.mozilla.org/docs/Mozilla/Projects/NSPR/Reference/I_O_Functions), UI rendering
* microTasks: [process.nextTick](https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick/), [Promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise), [queueMicrotask](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask), [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver)

Solo despues de que las task en las microTasks estan completas, event loop tomará las task de macrotasks. Mientras mas microtasks haya, mas delay habra en los macrotasks. Se recomienda usar microtasks cuando se necesitan hacer cosas de forma asincrona, de otra manera, siempre es recomendado usar macrotasks.

En resumen, su funcionamiento en ingles seria:

- *Tasks* are taken from the *Task (MacroTask) Queue*.
- *Task* from the *Task Queue* is a *Macrotask* != a *Microtask*.
- *Microtasks* are processed when the current task ends and the *microtask* queue is cleared before the next *macrotask* cycle.
- *Microtasks* can enqueue other *microtasks*. All are executed before the next task inline.
- UI rendering is run after all microtasks execution (NA for nodejs).

<a id="rea545"></a>

### **Variable Shadowing - Ocultamiento de Variables**

[Volver al indice](#rea-base)

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