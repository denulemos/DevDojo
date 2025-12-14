# Preguntas generales 

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/Angular.md)

## ¿Qué son los modulos en Angular?

**⚠️ En versiones nuevas de Angular (como Angular 15+), ya no es obligatorio usar módulos. Ahora puedes tener componentes "standalone": independientes, sin necesidad de estar dentro de un módulo.**

Imaginá que tu aplicación es una casa grande. En esa casa, hay habitaciones diferentes para distintas tareas: la cocina, el dormitorio, el baño, etc. Cada habitación tiene su propósito y sus herramientas.

En Angular, esa casa es tu aplicación, y cada habitación es un módulo (`NgModule`).

- Ayudan a organizar el código para que no sea un caos.
- Agrupan cosas que trabajan juntas, como componentes, servicios, y rutas.
- Te permiten importar otras librerías (por ejemplo, para mostrar botones, manejar formularios, etc.).
- Podes tener rutas específicas dentro de un módulo (como si tuvieras un mini-GPS dentro de cada habitación).

Supongamos que estás creando una tienda online:

- 🛍 Módulo de productos: todo lo que tiene que ver con mostrar productos, ver detalles, etc.
- 👩‍💼 Módulo de usuarios vendedores: gestión de sus productos, sus ventas.
- 🧑‍🤝‍🧑 Módulo de compradores: ver historial de compras, carrito, etc.

Cada módulo tiene su propio archivo `.module.ts`, como `productos.module.ts`

```js
@NgModule({
  declarations: [ProductoComponent],
  imports: [CommonModule],
  exports: [ProductoComponent]
})
export class ProductosModule {}
```

- declarations: qué componentes tiene este módulo.
- imports: qué cosas necesita (otros módulos, librerías, etc).
- exports: qué cosas le comparte a otros módulos.

Para resumir un poco:

- Los módulos son como grupos de funcionalidades que organizan tu app.
- Hacen que sea más fácil de mantener y escalar.
- Son como contenedores de lógica, donde pones componentes, servicios, rutas, etc.
- Aunque ahora podés usar componentes independientes, los módulos siguen siendo útiles en muchos casos.

---

## ¿Qué son los componentes standalone y cuando conviene utilizarlos?

Son una característica introducida en Angular 14 que permite definir componentes sin necesidad de declararlos en un módulo (`NgModule`). En lugar de eso, los componentes standalone se definen utilizando la propiedad `standalone: true` en el decorador `@Component`, y ellos mismos pueden importar directamente otros componentes, directivas, pipes, o módulos necesarios.

Un ejemplo básico de un componente standalone es el siguiente:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  template: `<h1>Hola desde un componente standalone</h1>`,
  standalone: true,
  imports: [], // Aquí puedes importar otros componentes o módulos
})
export class StandaloneExampleComponent {}
```

**Ventajas**

1. **Simplicidad**: Elimina la necesidad de crear o mantener módulos para cada grupo de componentes.
2. **Modularidad**: Facilita la creación de componentes altamente independientes que pueden ser reutilizados en diferentes aplicaciones.
3. **Carga más rápida**: Se pueden usar directamente en **lazy loading** (carga diferida) o **bootstrap** sin necesidad de un módulo adicional.
4. **Menos boilerplate**: Reduce la sobrecarga de configuración al no requerir un módulo explícito para declarar o exportar un componente.
5. **Facilidad de pruebas**: Son más fáciles de probar de manera aislada, ya que no dependen de módulos intermedios.

**¿Cuándo conviene utilizarlos?**
Conviene usar componentes standalone en las siguientes situaciones:

1. **Aplicaciones nuevas**:
   - Si comienzas un proyecto desde cero, puedes adoptar el enfoque standalone desde el inicio para simplificar la estructura del proyecto y aprovechar las ventajas de esta arquitectura.

2. **Componentes independientes**:
   - Para componentes reutilizables o librerías de UI (como botones, tarjetas, o modal dialogs), donde no necesitas integrarlos en un módulo completo.

3. **Rutas (Lazy Loading)**:
   - En módulos cargados de manera diferida, los componentes standalone pueden ser la opción ideal, ya que pueden ser cargados directamente en una ruta sin necesidad de un módulo asociado.
   ```typescript
   import { Route } from '@angular/router';
   import { StandaloneExampleComponent } from './standalone-example.component';

   const routes: Route[] = [
     { path: 'example', component: StandaloneExampleComponent },
   ];
   ```

4. **Migración progresiva**:
   - Si tienes un proyecto con módulos existentes, puedes migrar poco a poco a componentes standalone en lugar de reestructurar completamente los módulos.

5. **Proyectos pequeños o específicos**:
   - En aplicaciones con pocos componentes, usar componentes standalone puede ser suficiente y evita el uso innecesario de módulos.

**Limitaciones**

1. **Compatibilidad con proyectos existentes**:
   - En proyectos grandes con módulos muy establecidos, puede ser complicado combinar ambos enfoques. Sin embargo, Angular permite mezclar componentes standalone y no-standalone.

2. **Agrupación lógica**:
   - Si tienes muchos componentes que comparten servicios o configuraciones, un módulo podría ser más práctico para organizar estas dependencias.

Los componentes standalone simplifican la arquitectura de Angular al reducir la dependencia de módulos y alinear el framework con tendencias modernas en diseño de componentes. Conviene adoptarlos cuando buscas simplicidad, modularidad y mayor flexibilidad en proyectos nuevos o en escenarios específicos como componentes reutilizables o lazy loading.

---

## ¿Qué es Property Binding?

Property Binding es cuando le pasás un valor dinámico a un elemento HTML usando corchetes [].
Es la forma que tiene Angular de decir: *“Ey, esta propiedad va a cambiar, así que estate atento”*

```html
<input [value]="empresa" [disabled]="habilitado" >
```

- empresa y habilitado son variables de tu componente.
- value y disabled son propiedades del `<input>`.
- El [value]="empresa" significa: "Poné el valor de esta variable dentro del input."

En cambio, la misma linea de codigo SIN corchetes: 

```html
<input type="text" value="empresa" disabled="habilitado" >
```

Acá Angular no entiende que empresa o habilitado son variables.
Los toma como texto plano. O sea, va a escribir literalmente "empresa" en el input.

#### ¿Y qué diferencia hay con la interpolación `{{}}`?

Ambas cosas sirven para mostrar datos, pero se usan en contextos distintos.

```html
<!-- Interpolación -->
<img src="{{itemImageUrl}}" />

<!-- Property Binding -->
<img [src]="itemImageUrl" />
```

Las dos hacen lo mismo si es un string, pero si estás trabajando con cosas más complejas que un texto (como objetos, booleanos, números, arrays), usá Property Binding. **¿Por qué?** Porque Angular entiende mejor ese tipo de datos con los corchetes

- Property Binding = `[propiedad]="valor"`
- Angular escucha y actualiza la propiedad del HTML cuando cambie el valor.
- Te ayuda a tener una app reactiva, sin andar actualizando todo a mano.
- Si pasás algo que no es un texto, usá sí o sí Property Binding.

---

## ¿Qué mejoras hay en la migración de AngularJS a Angular?

Migrar de AngularJS a Angular trae muchas mejoras importantes:

- **Arquitectura basada en componentes:** Angular utiliza componentes reutilizables y encapsulados, lo que facilita la organización y el mantenimiento del código.
- **Mejor rendimiento:** Angular es más rápido gracias a la compilación AOT (Ahead-of-Time), el cambio en la detección de cambios y el uso de TypeScript.
- **Soporte para TypeScript:** Angular está escrito en TypeScript, lo que permite tipado estático, autocompletado y detección temprana de errores.
- **Herramientas modernas:** Angular CLI automatiza tareas como la generación de componentes, servicios y la construcción del proyecto.
- **Lazy Loading:** Permite cargar módulos bajo demanda, mejorando el tiempo de carga inicial de la aplicación.
- **Mejor sistema de inyección de dependencias:** Más simple, potente y fácil de testear.
- **Programación reactiva con RxJS:** Facilita el manejo de flujos de datos asíncronos y eventos complejos.
- **Soporte para pruebas:** Angular tiene mejor integración con herramientas de testing y facilita la creación de pruebas unitarias y de integración.
- **Actualizaciones y soporte:** Angular recibe actualizaciones frecuentes, mejoras de seguridad y nuevas funcionalidades.

En resumen, migrar a Angular permite crear aplicaciones más rápidas, escalables, mantenibles y seguras, utilizando herramientas y patrones modernos.

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

---

## **¿Qué es RxJS?**

Reactive Extensions for Javascript (RxJS) es una libreria que nos permite trabajar con programacion reactiva en Javascript permitiendo el manejo de flujos asincronos de una forma mas declarativa, reactiva y consistente.

- Manejo de peticiones asincronas, en vez de utilizar Callbacks o Promises anidados, se pueden utilizar Observables para manejar flujos de datos asincronos
- Cuando tengo varias fuentes de datos que manejar que interactuan entre si, en RxJS puedo utilizar operadores como `map`, `combineLatest`, `map`, `filter` y `switchMap` para manejar estos flujos.
- RxJS ofrece herramientas como `takeUntil` o `takeWhile` para manejar las subscripciones de una forma eficiente y asi evitar memory leaks
- Con RxJs puedo manejar tanto flujos de datos sincronicos como asincronicos, y puedo combinarlos de una forma muy sencilla
- Si necesito coordinar multiples tareas asincronicas o flujos, RxJS me permite hacerlo de una forma muy sencilla con `forkJoin`, `merge`, `concat`, `combineLatest`, `zip`, etc, mejorando la concurrencia (la cual significa que puedo manejar multiples tareas al mismo tiempo)

En parte su uso podria ser reemplazado con Angular Signals en Angular 16, pero RxJS sigue siendo una herramienta muy poderosa para manejar flujos de datos asincronos.

### ¿Qué es un Observable?

Los observables pueden ser modificados mediante el uso de otras tools de RxJS como `map` (transforma los valores), `filter` (filtra los valores), `reduce` (reduce los valores), `merge` (combina los valores de varios observables), `concat` (combina los valores de varios observables en orden), `forkJoin` (combina los valores de varios observables y devuelve un solo valor), `switchMap` (cancela la subscripcion anterior y se suscribe a la nueva), `debounceTime` (espera un tiempo antes de emitir un valor), `distinctUntilChanged` (emite un valor solo si es diferente al anterior), `catchError` (captura un error y lo maneja), `retry` (reintenta la operacion si falla), entre otros.

Sin embargo los observables por si mismos no hacen nada, precisan que algo este **subscripto** a ellos para que hagan algo, similar al funcionamiento de un newsletter de email, si no nos suscribimos, no recibimos ningun email, y no sabemos cuantos email y cuando recibiremos esos emails, es por eso que es importante desubscribirse de ellos en el estado unmounted de la aplicacion, para no llenar nuestras casillas de correo de Spam

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

Ejemplo mas basico

```javascript
let observable = Observable.create((observer) => {
  observer.next("Hello World!");
});
observable.subscribe(function logMessage(message) {
  console.log(message);
});
```

### Next, Error y Complete - Return de los Observables

Se pueden disparar valores del tipo: 
- `next`
- `error` que detiene la ejecucion y se interpreta como una excepcion
- `complete`, que tambien detiene la ejecucion y no devuelve ningun valor. 

Esto puede ser explicado con el siguiente codigo:

```javascript
let observable = Observable.create((observer: any) => {
  observer.next("I am number 1"); // Impreso en consola
  observer.next("I am number 2"); // Impreso en consola
  observer.error("I am number 3"); // Impreso en consola FIN EJECUCION
  observer.complete("I am number 4"); // No impreso, hubiera detenido la ejecucion tambien
  observer.next("I am number 5");
});

observable.subscribe(function logMessage(message: any) {
  console.log(message);
});
```

### Observable vs Promises

Las Promises solo pueden manejar un valor o evento, los Observables pueden manejar varias de manera sincronica e asincronica, por eso es ideal para el manejo de solicitudes HTTP. 

| Promises | Observables |
| --- | --- |
| Solo pueden emitir un valor o un error | Pueden emitir multiples valores a lo largo del tiempo siempre y cuando la subscripcion este activa |
| Apenas se crea la Promise, la misma es ejecutad, se le dice `Eager` | No hace nada hasta que alguien este observandolo, es por eso que se le dice `lazy`, porque por si mismo no hace nada |
| La promesa no se puede cancelar | Se puede cancelar la subscripcion a un observable |

### Subjects

Es un tipo especial de Observable que permite que un mismo valor sea enviado a varios Observers, en general se envia un valor o flow de data distinto a cada observer ya que los Observables comunes son unicast (valor de uno a uno). 

Subjects son multicast, un mismo resultado es mandado a varios al mismo tiempo. 

![multicast](https://miro.medium.com/v2/resize:fit:1400/0*T1tftHIsMCcvhn7h)

Se deberian usar cuando:

- Tengo varios Suscribers y estoy interesado en que reciban la misma informacion todos al mismo tiempo
- Solo quiero escuchar al evento y no quiero pasar ningun tipo de valor. 
- `BehaviourSubject` cuando solo preciso el ultimo valor
- `ReplaySubject` cuando quiero realizar una especie de caching y obtener solo valores anteriores. 


### Porque es importante desuscribirnos de los Observables?

- **Evitar Memory Leaks** Estas ocurren cuando objetos que ya no estamos usando quedan en memoria, si no te desubscribis de los observables, por su naturaleza, se seguiran ejecutando siempre y cuando tengan subscribers que lo escuchen.
- **Controlar el Ciclo de Vida del Observable**: Como Angular no lo maneja de manera automatica, es responsabilidad del desarrollador su manejo. Utilizar técnicas de desuscripción adecuadas (como ngOnDestroy o el operador takeUntil) garantiza que los observables solo vivan durante el ciclo de vida necesario y no más.
- **Evitar el Doble Manejo de Datos**: Si no te desuscribes de un observable, puedes terminar recibiendo datos que ya no necesitas o que no tienen sentido para el componente actual. Esto puede generar lógica extra para manejar estos casos y complicar el código.

### Formas de desubscripcion de Observables

Uso de `ngOnDestroy`

```ts
 ngOnInit() {
    this.subscription = this.myService.getData().subscribe(data => {
      // Manejo de los datos
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
```

Uso de `TakeUntil`

```ts
private destroy$ = new Subject<void>();

  ngOnInit() {
    this.myService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        // Manejo de los datos
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
```

### Cual es la diferencia entre un Observable "cold" y "hot"?

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

### Angular Signals vs Observables

Observables

```typescript
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  template: `<p>Contador: {{ counter$ | async }}</p>`,
})
export class ObservableExampleComponent {
  counter$: Observable<number>;

  constructor() {
    this.counter$ = interval(1000).pipe(map((value) => value + 1));
  }
}
```

Signals

```typescript
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  template: `<p>Contador: {{ counter() }}</p>`,
})
export class SignalExampleComponent {
  counter = signal(0);

  constructor() {
    setInterval(() => {
      this.counter.set(this.counter() + 1);
    }, 1000);
  }
}
```

Comparación

- **Observables**: Necesitan suscripción y, opcionalmente, el uso del `async` pipe para manejar el flujo de datos. Son ideales para manejar flujos complejos o múltiples fuentes de datos.
- **Signals**: Son más simples y no requieren suscripción explícita. Angular maneja automáticamente la reactividad, lo que los hace ideales para estados locales y cambios simples.

Ambos enfoques pueden coexistir en una aplicación Angular, dependiendo de las necesidades específicas del proyecto.

Algunas de las ventajas del uso de Signals vs Observables son:

- No es necesario subscribirse ni desuscribirse de los Signals, posee un sistema de reactividad automatica que detecta cualquier cambio de input
- Signals es mucho mas simple y declarativo que RxJS
- Se evitan re-renderings innecesarios ya que Angular maneja mucho mejor la deteccion de cambios

Sin embargo, si uno planifica trabajar con WebSockets o Eventos Complejos, Observables puede ser una mejor opcion, ya que posee herramientas para manejar la informacion de forma mucho mas especifica.

### ¿Qué es Angular Signals?

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

---

## **Clean Code en Angular**

### Un componente, una responsabilidad
**❌ Malo:** un componente que muestra una lista *y* también guarda datos en el servidor.
**✅ Bueno:** un componente que solo muestra la lista, y otro que se encarga de guardar los datos.

```ts
// ❌ Esto hace demasiado:
@Component({...})
export class UsuarioComponent {
  usuarios = [];
  guardarUsuario(usuario) {
    // guardar en API
  }
}
```

```ts
// ✅ Separado en dos componentes:
- UsuarioListaComponent (muestra)
- UsuarioFormularioComponent (guarda)
```

### Usá componentes hijos
Cuando un componente se vuelve grande, dividilo en partes más chiquitas:

```html
<!-- padre -->
<app-info-personal></app-info-personal>
<app-preferencias></app-preferencias>
```

🔹 **3. Plantillas (HTML) simples y limpias**
**❌ Malo:**

```html
<div *ngIf="user && user.age > 18 && user.isActive">...</div>
```

**✅ Bueno:**

```ts
mostrarContenido() {
  return this.user && this.user.age > 18 && this.user.isActive;
}
```

```html
<div *ngIf="mostrarContenido()">...</div>
```


### Servicios para lógica pesada
El componente solo debería mostrar cosas, **no** manejar llamadas a APIs.

```ts
// Servicio
getDatos() {
  return this.http.get('https://api.com/datos');
}
```

```ts
// Componente
this.apiService.getDatos().subscribe(...);
```

### Desuscribirse de los Observables

```ts
subscripcion: Subscription;

ngOnInit() {
  this.subscripcion = this.servicio.getDatos().subscribe(...);
}

ngOnDestroy() {
  this.subscripcion.unsubscribe();
}
```

O mejor aún, usá el `async` pipe:

```html
<div *ngIf="datos$ | async as datos">
  {{ datos.nombre }}
</div>
```

### Usá Angular CLI
Siempre preferí:

```bash
ng generate component usuario
ng generate service api
```

Te asegura estructura clara y buenas prácticas.


### Evitá lógica compleja en el HTML
Si hay mucha lógica en el template, movela al archivo `.ts`.


### Usá tipado estricto y `interfaces`
No uses `any`. Definí tus modelos:

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
```


### Poné nombres claros y descriptivos
**❌ Malo:** `comp1`, `servicio2`
**✅ Bueno:** `FormularioUsuarioComponent`, `AutenticacionService`


### Estilo consistente con Prettier/ESLint
Instalá herramientas que formateen y detecten errores automáticamente.

---

## **Patrones de diseño en Angular**

### Arquitectura modular

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

### Inyeccion de Dependencias

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

### Component Communication

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

### Singleton Services

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

### Redux Pattern

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

### Reactive Forms

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

### Lazy Loading

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

### Facade Pattern

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

---

### ¿Cómo organizas un proyecto grande en Angular? ¿Usas Nx o alguna otra herramienta de monorepo?

- **Modularización:** Divide la aplicación en módulos lógicos. Cada módulo debe tener una responsabilidad clara y contener componentes, servicios y otros elementos relacionados.
- **Lazy Loading:** Implementa lazy loading para cargar módulos solo cuando sean necesarios, mejorando el rendimiento inicial de la aplicación.
- **Shared Module:** Crea un módulo compartido para componentes, directivas y pipes que se usan en varios lugares de la aplicación.
- **Core Module:** Crea un módulo core para servicios singleton que se usan en toda la aplicación, como servicios de autenticación o configuración.
- **Feature Modules:** Agrupa funcionalidades relacionadas en módulos específicos. Por ejemplo, un módulo de usuarios, un módulo de productos, etc.
- **Uso de Nx o Monorepos:** Si el proyecto es muy grande o tiene múltiples aplicaciones, considera usar herramientas como Nx para gestionar un monorepo. Esto permite compartir código entre aplicaciones y bibliotecas, y facilita la gestión de dependencias y versiones.
- **Estructura de carpetas:** Mantén una estructura de carpetas clara y consistente. Por ejemplo, puedes tener carpetas para `components`, `services`, `models`, `pipes`, etc.
- **Documentación:** Documenta el código y las decisiones arquitectónicas. Esto es especialmente importante en proyectos grandes donde varios desarrolladores pueden trabajar en diferentes partes de la aplicación.
- **Pruebas:** Implementa pruebas unitarias y de integración para asegurar la calidad del código. Usa herramientas como Jasmine y Karma para pruebas unitarias, y Protractor o Cypress para pruebas end-to-end.
- **Linting y Formateo:** Usa herramientas como ESLint y Prettier para mantener un código limpio y consistente. Configura reglas de linting que se ajusten a las convenciones del equipo.
- **Gestión de Estado:** Considera usar una librería de gestión de estado como NgRx o Akita para manejar el estado de la aplicación de manera predecible y escalable.
- **Optimización de Rendimiento:** Utiliza herramientas de análisis de rendimiento como el Angular DevTools para identificar cuellos de botella y optimizar la aplicación.
- **Seguridad:** Implementa buenas prácticas de seguridad, como sanitización de entradas, protección contra ataques XSS y CSRF, y uso de HTTPS.



---

## **Performance en Angular**

### Manejo de estado de una aplicación Angular, qué metodos hay?

En Angular, el manejo de estado de una aplicación puede hacerse de varias maneras, dependiendo de la complejidad y los requerimientos de la aplicación. Aquí hay algunos métodos comunes:

1. **Servicios compartidos**: Utilizar servicios para almacenar y compartir el estado entre componentes. Los servicios pueden contener propiedades y métodos para manipular el estado.

   ```typescript
   @Injectable({
     providedIn: 'root',
   })
   export class StateService {
     private state = { count: 0 };

     getCount() {
       return this.state.count;
     }

     increment() {
       this.state.count++;
     }
   }
   ```

2. **BehaviorSubject de RxJS**: Utilizar `BehaviorSubject` para manejar el estado reactivo. Permite emitir y suscribirse a cambios en el estado.

   ```typescript
    import { Injectable } from '@angular/core';
    import { BehaviorSubject } from 'rxjs';
    @Injectable({
      providedIn: 'root',
    })
    export class StateService {
      private state = new BehaviorSubject<{ count: number }>({ count: 0 });

      getState() {
        return this.state.asObservable();
      }

      increment() {
        const currentState = this.state.getValue();
        this.state.next({ count: currentState.count + 1 });
      }
    }
    ```

3. **NgRx**: Utilizar NgRx, una librería basada en Redux, para manejar el estado de la aplicación de manera más estructurada y predecible. NgRx utiliza acciones, reducers y efectos para gestionar el estado.

    ```typescript
    // Acción
    export const increment = createAction('[Counter] Increment');
  
    // Reducer
    export const counterReducer = createReducer(
      initialState,
      on(increment, (state) => ({ ...state, count: state.count + 1 }))
    );
  
    // Componente
    export class CounterComponent {
      count$ = this.store.select('count');
  
      constructor(private store: Store<{ count: number }>) {}
  
      increment() {
        this.store.dispatch(increment());
      }
    }
    ```

4. **Akita**: Otra librería para el manejo de estado que proporciona una API simple y flexible, ideal para aplicaciones más pequeñas o medianas.

5. **Signals**: Con Angular 16, se introdujo Signals, que permite manejar el estado de manera reactiva y declarativa, similar a los observables pero con una sintaxis más simple y sin necesidad de suscripciones.

   ```typescript
   import { signal } from '@angular/core';

   const count = signal(0);

   function increment() {
     count.set(count() + 1);
   }
   ```

---

### ¿Cómo se implementa Lazy Loading en Angular?

Lazy Loading carga un modulo solo cuando el usuario esta por acceder a la misma. Antes de la introduccion de standalone components, era necesario crear modulos para cada componente, pero ahora no es necesario. Se utiliza `loadComponent` en lugar de `loadChildren`

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
```

Tambien puede complementarse muy bien con `Route Guards` para proteger rutas y asegurarse de que el usuario tenga acceso a la misma si posee autorizacion. 

```ts
{
  path: 'admin',
  loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
  canActivate: [authGuard]
}
```

### ¿Cómo funciona la detección de cambios en Angular?

Angular tiene un sistema que cada vez que:

- tocás algo del DOM (como un botón),

- hacés un evento ((click), (input), etc.),

- llega un nuevo dato de un observable o un servicio,

automáticamente revisa todos los componentes y se pregunta: **“¿Cambió algo que estoy mostrando en la pantalla?”**

Si la respuesta es sí, Angular actualiza lo que ve el usuario.

**¿Angular revisa TODO todo el tiempo?**

Sí, y no. Por defecto, Angular vuelve a revisar todos los componentes desde la raíz hacia abajo, cada vez que cree que algo pudo haber cambiado. Esto es gracias a algo que se llama **zone.js**, una librería que observa cosas como:

- setTimeout
- eventos de usuario
- llamadas HTTP
- promesas

Entonces Angular dice: “Algo pasó, mejor reviso todo, por si las dudas”, a esto se le dice **Dirty Checking**
Si tu app es de tamanio pequenio, ni lo notás. Pero en apps grandes con muchos componentes, puede volverse lento. 

Hay varias estrategias para detectar los cambios:

* **Default**: Angular recorre todo el arbol de componentes y verifica si hay cambios en las propiedades de los componentes. Si hay cambios, actualiza la vista. Se ejecuta ante cualquier evento asincronico y puede afectar el rendimiento si hay muchos componentes.
* **OnPush**: Solo se actualiza el componente si hay cambios en las propiedades de entrada (`@Input`) o si se emite un evento (`@Output`). Es mas eficiente que la estrategia por defecto.

```typescript
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // Activa la detección optimizada
})
```

La deteccion de cambios sin embargo puede ser tambien forzada mediante el uso de `ChangeDetectorRef`

- `ChangeDetectorRef.detectChanges()` → Recorre el árbol de componentes y actualiza la vista.
- `ChangeDetectorRef.markForCheck()` → Marca el componente como "sucio" para la próxima detección.

```typescript
constructor(private cdr: ChangeDetectorRef) {}

ngAfterViewInit() {
  this.cdr.detectChanges(); // Forzar actualización
}
```


### ⚠️ Renderizado excesivo (detección de cambios ineficiente)

**Qué pasa:**
Angular, por defecto, revisa todo el árbol de componentes cada vez que algo cambia. En apps grandes, esto puede hacer que se renderice más de lo necesario, generando lentitud.

**Cómo lo solucionás:**

* Activá `ChangeDetectionStrategy.OnPush` en tus componentes. Esto le dice a Angular que solo actualice el componente si cambian sus `@Input` o se dispara un evento (como un observable).

```ts
@Component({
  selector: 'app-mi-componente',
  template: `{{ data }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente {
  @Input() data!: string;
}
```

* Desuscribite de los observables cuando ya no los necesites, usando `takeUntil` o el operador `async` directamente en el HTML.

#### 2. 🐢 Carga innecesaria de módulos

**Qué pasa:**
Si cargás todos los módulos desde el inicio (eager loading), el usuario va a esperar más para ver algo en pantalla.

**Cómo lo solucionás:**

* Aplicá **lazy loading** en rutas que no se usan de entrada:

```ts
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

* Si querés un balance, podés usar una **estrategia de pre-carga personalizada** para cargar algunos módulos después de la carga inicial, mientras el usuario está inactivo.

### 📋 Listas largas que se renderizan lento

**Qué pasa:**
Una tabla con miles de filas puede hacer que todo se vuelva pesado, ya que Angular intenta renderizar todos los ítems del DOM.

**Cómo lo solucionás:**

* Usá **Virtual Scroll** del Angular CDK para renderizar solo lo visible:

```html
<cdk-virtual-scroll-viewport itemSize="50" style="height: 300px;">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

* Si estás trayendo todo desde una API, agregá **paginación en el backend** para evitar cargar miles de elementos de una sola.

### 🖼️ Imágenes pesadas

**Qué pasa:**
Imágenes grandes o mal optimizadas pueden hacer que la página tarde en cargar, sobre todo en dispositivos móviles.

**Cómo lo solucionás:**

* Usá `loading="lazy"` en todas las etiquetas `<img>`:

```html
<img src="imagen.jpg" alt="Ejemplo" loading="lazy" />
```

* Comprimí y redimensioná las imágenes con herramientas como **TinyPNG**, **ImageMagick** o servicios como **Cloudinary**.

### 📝 Formularios lentos

**Qué pasa:**
Si tenés formularios con muchas validaciones, lógica compleja o campos dinámicos, la app se puede trabar al escribir.

**Cómo lo solucionás:**

* Evitá validaciones complejas innecesarias. Usá funciones simples y validaciones asincrónicas solo si realmente las necesitás.

```ts
myForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
});
```

* Dividí formularios largos en **pasos o secciones** (wizard), para no cargar todo al mismo tiempo.

### 🔁 Llamadas repetidas a la API

**Qué pasa:**
Si hacés muchas llamadas iguales a la misma API desde distintos lugares, saturás el backend y hacés más lenta tu app.

**Cómo lo solucionás:**

* Implementá cache en los servicios, por ejemplo con `Map` y RxJS:

```ts
private cache = new Map<string, any>();

getData(url: string): Observable<any> {
  if (this.cache.has(url)) return of(this.cache.get(url));
  return this.http.get(url).pipe(tap(data => this.cache.set(url, data)));
}
```

* Agrupá múltiples llamadas con `forkJoin` o `combineLatest` para hacer una sola petición conjunta.

#### 📦 Scripts pesados y dependencias innecesarias

**Qué pasa:**
Agregar muchas librerías sin control aumenta el tamaño del bundle, haciendo más lenta la app.

**Cómo lo solucionás:**

* Limpiá el `package.json`: eliminá lo que no uses.
* Importá solo los módulos necesarios:

```ts
import { MatButtonModule } from '@angular/material/button'; // No todo Angular Material
```

* Asegurate de que el **tree shaking** esté funcionando en tu build.


## ¿Qué es la compilación JIT y AOT en Angular?

Como el codigo TS y HTML precisa ser compilado para ser mostrado en el navegador, se ofrecen dos modos de compilacion

**Just-in-Time (JIT)**

Se compilan las planillas cuando la aplicacion es ejecutada en el navegador, se usa en desarrollo, ya que no es necesario recompilar todo el proyecto para poder ver los cambios. 

- El bundle final es mas grande ya que incluye al compilador de Angular en si mismo
- La app es mas lenta al iniciar ya que debe compilar en el navegador
- Es mas facil de depurar ya que el codigo fuente es mas claro, pero menos seguro. 

Es el activado con `ng serve`

**Ahead-of-Time (AOT)**

Compila el codigo antes de mostrarlo en el navegador, se usa en produccion ya que el rendimiento es optimizado

- Inicio mas rapido ya que el codigo es compilado antes de llegar al browser
- El bundle final es mas pequeño ya que no incluye al compilador de Angular
- Es mas dificil de depurar ya que el codigo fuente es mas dificil de leer, pero mas seguro
- Detecta errores en las plantillas durante la compilacion, evitando fallos en ejecucion
- La compilacion es mucho mas lenta durante el build

Es el activado con `ng build --aot`

---

## ¿Cómo se maneja la inyección de dependencias y la inversión de control en Angular?

La inyeccion de dependencias es basicamente el hecho de crear un archivo con servicios que sirvan para ser **inyectados** en otros componentes. 

```typescript
@Injectable({
  providedIn: 'root' // Angular lo registra en el inyector raíz automáticamente
})
```

Luego este componente es inyectado en el constructor (o mediante el inject) del componente donde se desea usar.

```typescript
constructor(private userService: UserService) {}
```

Se pueden definir distintos niveles de inyección, por ejemplo:

- **root**: El servicio esta disponible globalmente para toda la aplicacion
- **Nivel de Módulo (providers: [] en @NgModule)**: El servicio esta disponible solo para el módulo en el que se encuentra
- **Componente**: El servicio esta disponible solo para el componente en el que se encuentra

Gracias a la **Inversion de Control** de Angular, no es necesario hacer un `new` de un servicio, sino que Angular se encarga de hacerlo por nosotros. 

```typescript	
export class EjemploComponent {
  miServicio = new MiServicioService(); // 🚨 Mala práctica: acoplamiento fuerte
}

export class EjemploComponent {
  constructor(private miServicio: MiServicioService) { } // ✔ Mejor práctica
}
```

Si se busca inyectar una **interfaz** en lugar de una clase, se usa `InjectionToken`

```typescript

import { InjectionToken } from '@angular/core';

export const CONFIG_TOKEN = new InjectionToken<string>('config');

@NgModule({
  providers: [
    { provide: CONFIG_TOKEN, useValue: 'Modo oscuro' }
  ]
})
export class AppModule { }

// En el componente

constructor(@Inject(CONFIG_TOKEN) private config: string) {
  console.log(this.config); // 'Modo oscuro'
}
```

---

## Two-Way Data Binding

El Two-Way Data Binding es una forma de vincular datos entre el componente y la vista de manera que si cambia el valor en el HTML, también cambia en el componente, y viceversa. Es como una autopista de doble mano: lo que escribís en el input se refleja en la variable, y si la variable cambia, el input también.

Se usa con la sintaxis especial `[(ngModel)]`:

```html
<input [(ngModel)]="nombre">
```

- Si escribís algo en el input, la variable `nombre` se actualiza.
- Si cambiás el valor de `nombre` en el componente, el input también lo muestra.

**¿Cuándo usarlo?**  
Cuando necesitás que el usuario pueda modificar datos y que esos cambios se reflejen automáticamente en tu lógica (por ejemplo, formularios).

---

## Pipes

Un Pipe es una herramienta para transformar datos directamente en el HTML, sin tener que modificar el valor original en el componente. Es como un filtro que le da formato a lo que se muestra.

Ejemplo de uso:

```html
<p>{{ fecha | date:'shortDate' }}</p>
<p>{{ precio | currency:'USD' }}</p>
```

- `date` transforma una fecha a un formato legible.
- `currency` muestra un número como dinero.

---

## Services

Un Service es una clase donde ponés lógica que querés compartir entre varios componentes, como llamadas a APIs, manejo de datos, o utilidades. Así evitás repetir código y mantenés tus componentes más limpios.

Ejemplo típico:

```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  getUsuarios() {
    return this.http.get('/api/usuarios');
  }
}
```

---

## Guard

Un Guard es como un portero para tus rutas. Decide si un usuario puede entrar a una página o no (por ejemplo, si está logueado o tiene permisos).

Ejemplo básico:

```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.authService.estaLogueado();
  }
}
```

Y lo usás en tus rutas:

```typescript
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

---

## Resolver

Un Resolver es una clase que se encarga de traer datos antes de que se muestre una ruta. Así, cuando el usuario entra a una página, ya tiene toda la información lista y no ve pantallas vacías o "cargando".

Ejemplo:

```typescript
@Injectable({ providedIn: 'root' })
export class UsuarioResolver implements Resolve<Usuario> {
  resolve(route: ActivatedRouteSnapshot): Observable<Usuario> {
    return this.apiService.getUsuario(route.params['id']);
  }
}
```

Y en la ruta:

```typescript
{ path: 'usuario/:id', component: UsuarioComponent, resolve: { usuario: UsuarioResolver } }
```

---

## Directives

Una Directiva es una instrucción que le das a un elemento HTML para que cambie su comportamiento o apariencia. Hay directivas estructurales (como `*ngIf`, `*ngFor`) y de atributo (como `[ngClass]`, `[ngStyle]`).

Ejemplo:

```html
<div *ngIf="mostrar">Solo se muestra si 'mostrar' es true</div>
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

También podés crear tus propias directivas para reutilizar lógica visual.

---

## Decorators

Indica como debe comportarse el componente. Dentro de este decorador, puedes observar el selector del componente (un nombre para el mismo), el template HTML y la hoja de estilos que usará.

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

---

## `Input` y `Output`

- **@Input:** Permite que un componente hijo reciba datos de su componente padre.
- **@Output:** Permite que un componente hijo le envíe eventos o datos al padre.

Ejemplo:

```typescript
// Hijo
@Input() mensaje: string;
@Output() notificar = new EventEmitter<string>();

enviar() {
  this.notificar.emit('¡Hola padre!');
}
```

```html
<!-- Padre -->
<app-hijo [mensaje]="texto" (notificar)="recibir($event)"></app-hijo>
```

---

## Routing

Es la configuracion que permite a los usuarios navegar en nuestra aplicacion sin necesidad de recargar la pagina por cada cambio en el caso de los SPA.
Tambien se encarga de gestionar las URL para facilitar el compartir links y la navegabilidad.
Se configura mediante el `RouterModule` en un array de rutas, el cual se referencia con un path y un componente. 

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz
  { path: 'about', component: AboutComponent }, // Ruta para "Acerca de"
  { path: '**', component: NotFoundComponent } // Ruta comodín para páginas no encontradas
];
```

En el mismo tambien se pueden manejar componentes con Lazy Loading

```ts
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
```

Restringir el acceso a rutas protegidas

```ts
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

Y luego en el ng.html que hace de entrypoint de nuestra app, referenciamos al contenido "routerizado"

```html
<nav>
  <a routerLink="/">Inicio</a>
  <a routerLink="/about">Acerca de</a>
</nav>

<router-outlet></router-outlet>
```

Tambien es posible manejar las rutas desde el codigo logico de nuestra app por fuera de los componentes

```ts
import { Router } from '@angular/router';

constructor(private router: Router) {}

irAAbout() {
  this.router.navigate(['/about']);
}
```

---

## Módulo compartido (Shared Module)

Un Shared Module es un módulo donde ponés componentes, pipes y directivas que vas a usar en varios lugares de tu app. Así, evitás importar lo mismo muchas veces y mantenés tu código más organizado.

Ejemplo:

```typescript
@NgModule({
  declarations: [MiPipe, MiDirectiva],
  exports: [MiPipe, MiDirectiva, CommonModule]
})
export class SharedModule {}
```

Luego lo importás en otros módulos que lo necesiten.

---

## `ViewChild` vs `ContentChild`

`ViewChild` y `ContentChild` son dos decoradores en Angular que se utilizan para acceder a elementos del DOM o componentes hijos, pero tienen propósitos diferentes.

- **ViewChild:** Se usa para acceder a un elemento del DOM o un componente hijo que está en la vista del componente actual. Es útil cuando necesitas interactuar con un elemento que está directamente en el template del componente.

```typescript
import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-mi-componente',
  template: `<input #miInput type="text">`
})
export class MiComponente {
  @ViewChild('miInput') inputRef!: ElementRef;

  ngAfterViewInit() {
    this.inputRef.nativeElement.focus(); // Accede al input y le da foco
  }
}
```

- **ContentChild:** Se usa para acceder a un elemento del DOM o un componente hijo que está proyectado dentro del componente actual mediante `<ng-content>`. Es útil cuando necesitas interactuar con contenido que se inserta en el componente desde el exterior.

```typescript
import { Component, ContentChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: `<ng-content></ng-content>`
})

export class MiComponente {
  @ContentChild('miContenido') contenidoRef!: ElementRef;

  ngAfterContentInit() {
    console.log(this.contenidoRef.nativeElement.textContent); // Accede al contenido proyectado
  }
}
```