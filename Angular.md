<a name="angular-base"></a>

| Arquitectura y Organización del Proyecto |
|----------|
| [¿Cuales son algunas reglas de Clean Code en Angular?](#rea1) |
| [¿Qué son los modulos en Angular?](#rea11) |
|[¿Qué problemas de rendimiento pueden existir en Angular y cómo se solucionan?](#angular-2) 💛|
|[¿Cómo se maneja la inyección de dependencias y la inversión de control en las aplicaciones de Angular?](#angular3) 💛|
|[¿Qué es la compilación JIT y AOT en Angular? Diferencias, pros y contras](#angular4)|
|[¿Qué es el enrutamiento en Angular y cómo se configura?](#angular5)|
| [Como se implementa Lazy Loading en Angular?](#angular6)|
| [Que mejoras hay en la migracion de AngularJS a Angular?](#ent51-1) |

| Componentes y Estructura |
|----------|
| [¿Qué es un Decorador en Angular?](#rea14) 💛|
|[Que son los componentes standalone y cuando conviene utilizarlos?](#angular-1) 💛|
| [¿Cuál es el flujo de datos una aplicación Angular?](#rea13) |
| [Patrones de disenio en Angular](#ent45) |
|[¿Cómo funciona la detección de cambios en Angular?](#angular2)|

| Manejo de datos |
|----------|
| [¿Qué es Property Binding?](#rea12) |
| [Event Binding en Angular (Manejo de Eventos)](#rea15) |
| [Data Binding en Angular](#rea16) |
| [Angular Signals](#ent65-1) |
| [Angular Signals vs Observables](#ent65-11) |
| [¿Qué es RxJS y qué problemas resuelve en el desarrollo de aplicaciones?](#ent38) |
| [Observable en RxJS](#ent39) |
| [Formas de desubscripcion de Observables](#rea3) |
| [Porque es importante desuscribirnos de los Observables?](#rea2) |
| [Observable "cold" y "hot"](#ent40) |

---

<a id="rea1"></a>

### **¿Cuales son algunas reglas de Clean Code en Angular?**

[Volver al indice](#angular-base)

Entre las tipicas reglas de Clean Code que existen para nuestro codigo, hay otros especificos de Angular que podrian ser tenidos en cuenta:

- Los componentes deben tener una única responsabilidad. Si un componente se vuelve demasiado grande o realiza múltiples tareas, divide su funcionalidad en componentes más pequeños.
- Usa componentes hijos cuando un componente se vuelve complejo y necesita dividirse
- Mantener los archivos template simples, manejar toda logica en los archivos correspondientes
- Se debe delegar el trabajo pesado, como el llamado a APIS, a los servicios. Los componentes deben manejar todo lo relacionado a la UI y nada mas.
- Desubscribirnos de los Observables a la hora de no utilizarlos mas.
- Usar Angular CLI para la creacion de nuevo codigo, para asegurarnos que se siguen los mejores estandar de codigo posible. 

<a id="rea11"></a>

### **¿Qué son los modulos en Angular?**

[Volver al indice](#angular-base)

Las aplicaciones de Angular son Modulares, en Angular existe NgModules. Sirve para mantener la lógica de un flujo de trabajo de la aplicación. Por ejemplo, se tiene un e-commerce, con sus módulos correspondientes, usuarios vendedores, compradores, productos, etc..

Son diseños lógicos que se encargan de trabajar dentro de la aplicación, se usan para poder importar librerías u otros módulos dentro de los mismos. Cada módulo hasta puede tener su propio ruteo.

Se identifican por su nombre que tipicamente es `app.module.ts` o similares. Hoy en dia en las ultimas versiones de Angular se usan cada vez mas los componentes standalone, donde no es necesario el uso de modulos.

<a id="rea12"></a>

### **¿Qué es Property Binding?**

[Volver al indice](#angular-base)

Es la forma que tiene Angular de controlar y cambiar las propiedades de los elementos HTML usando corchetes []

```html
<input [value]="empresa" [disabled]="habilitado"  />

// Empresa y habilitado son datos dinamicos
```

Los corchetes (square brakets) hacen que Angular evalúe el lado derecho de la asignación como una expresión dinámica. Sin los corchetes, Angular trata el lado derecho como un literal de cadena y establece la propiedad en ese valor estático.

A menudo, “interpolation” y “Property Binding” pueden lograr los mismos resultados. Los siguientes pares de enlaces hacen lo mismo.

```html
// Interpolacion
<p><img src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>

// Property Binding
<p><img [src]="itemImageUrl"> is the <i>property bound</i> image.</p>
```

Al establecer una propiedad de elemento en un valor de datos que no sea un String a secas (por ejemplo, objetos), debe usar “Property Binding”.

Se recomienda comprender los “Event binding” para entender el flujo de datos de la aplicacion y como este interactua con “interpolation” y “Property Binding”.

<a id="rea13"></a>

### **¿Cuál es el flujo de datos una aplicación Angular?**

[Volver al indice](#angular-base)

- Enlace unidireccional [] para enlazar desde la capa lógica (component.ts) a la vista (html).
- Enlace unidireccional () para enlazar de la vista (html) a la capa lógica (component.ts).
- Enlace bidireccional [()] para enlazar una secuencia de vista bidireccional a la capa lógica (component.ts).

<a id="rea14"></a>

### **¿Qué es un Decorador en Angular?**

[Volver al indice](#angular-base)

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

<a id="rea15"></a>

### **Event Binding en Angular (Manejo de Eventos)**

[Volver al indice](#angular-base)

```tsx
<button (click)="onSave()">Save</button>

// Multiples eventos
<button (click)="clickEvent()" (mouseenter)="mouseEnterEvent()">Click Me</button>

<button (click)="handleClick($event)">Save</button>

<button (click)="value = value + 1">Presioname</button>

// -- En app.component.ts ---

btnDisabled = true;

onSave() {
  this.btnDisabled = false; // Se usa this para hacer referencia al contexto actual
}

handleClick($event: Event) {
    const element = event.target as HTMLElement;
}
```

- Usar () en el template html es sinónimo de llamar “addEventListener()”

<a id="rea16"></a>

### **Data Binding en Angular**

[Volver al indice](#angular-base)

El atributo **ngModel** permite el **intercambio de datos de forma bidireccional** entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.

```tsx
<input #nameInput="ngModel" [(ngModel)]="name" />

<p>{{nameInput.valid}}</p> // true o false dependiendo de validaciones html
```

Si no quieres la bidireccionalidad, solo colocamos los corchetes `[ngModel]` para que la comunicación sea unidireccional. Para utilizar ngModel, es necesario hacer uso e importar **Angular Forms**

```tsx
... // -- app.module.ts ---
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ... ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [ ... ]
})
export class AppModule { }
```

<a id="angular-1"></a>

### **Que son los componentes standalone y cuando conviene utilizarlos?**

[Volver al indice](#angular-base)

Son una característica introducida en Angular 14 que permite definir componentes sin necesidad de declararlos en un módulo (`NgModule`). En lugar de eso, los componentes standalone se definen utilizando la propiedad `standalone: true` en el decorador `@Component`, y ellos mismos pueden importar directamente otros componentes, directivas, pipes, o módulos necesarios.

**¿Cómo se define un componente standalone?**

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

<a id="angular-2"></a>

### **¿Podrías describir algunos problemas de rendimiento que hayas enfrentado en aplicaciones Angular y cómo los resolviste?** 💛

[Volver al indice](#angular-base)

Claro, aquí tienes una descripción de problemas de rendimiento comunes en aplicaciones Angular y las estrategias que he utilizado para resolverlos.

---

**1. Renderizado excesivo (Change Detection Ineficiente)**

**Problema:**
- Angular utiliza un sistema de detección de cambios (`Change Detection`) que verifica cada componente en el árbol para detectar actualizaciones. Si no se optimiza, puede provocar renderizados innecesarios, afectando el rendimiento en aplicaciones grandes o con datos dinámicos.

**Solución:**
- **Uso de `OnPush` Change Detection:**
  Configuré el componente con `changeDetection: ChangeDetectionStrategy.OnPush`, lo que indica a Angular que solo actualice el componente si cambian sus entradas (`@Input`) o eventos explícitos como observables.

  ```typescript
  import { ChangeDetectionStrategy, Component } from '@angular/core';

  @Component({
    selector: 'app-my-component',
    template: `<p>{{ data }}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class MyComponent {
    @Input() data!: string;
  }
  ```

- **Desuscripción de Observables:**
  Aseguré que todos los observables y suscripciones se manejaran adecuadamente utilizando operadores como `takeUntil` o librerías como `RxJS`.

---

**2. Carga innecesaria de datos (Lazy Loading ineficiente)**

**Problema:**
- Los módulos o componentes se cargaban todos al inicio (Eager Loading), incluso aquellos que no eran necesarios de inmediato, aumentando los tiempos de carga inicial.

**Solución:**

- **Lazy Loading con Rutas:**
  Implementé la carga diferida (`Lazy Loading`) para módulos relacionados con rutas específicas, de forma que solo se cargaran cuando fueran necesarias.

  ```typescript
  const routes: Routes = [
    {
      path: 'feature',
      loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
    },
  ];
  ```

- **Preloading Strategy personalizada:**
  Para evitar demoras en la carga de módulos críticos, utilicé una estrategia de pre-carga personalizada para cargar solo ciertos módulos cuando el usuario está inactivo.

---

**3. Renderizado lento de listas grandes**

**Problema:**
- En componentes con listas grandes (por ejemplo, una tabla con miles de filas), el renderizado era muy lento debido a que Angular intentaba procesar todos los elementos del DOM.

**Solución:**
- **Uso de Virtual Scroll (Angular CDK):**
  Reemplacé listas convencionales (`*ngFor`) con el `cdk-virtual-scroll`, que solo renderiza los elementos visibles en la pantalla.

  ```html
  <cdk-virtual-scroll-viewport itemSize="50" style="height: 300px;">
    <div *cdkVirtualFor="let item of items">{{ item }}</div>
  </cdk-virtual-scroll-viewport>
  ```

- **Paginación en el backend:**
  Implementé paginación en el backend para limitar la cantidad de datos enviados al cliente, reduciendo el impacto en memoria y procesamiento.

---

**4. Problemas con imágenes grandes**

**Problema:**
- La carga de imágenes grandes o innecesarias causaba tiempos de carga lentos y un impacto significativo en el rendimiento, especialmente en dispositivos móviles.

**Solución:**
- **Lazy Loading de Imágenes:**
  Configuré `loading="lazy"` en las etiquetas `<img>` para que las imágenes se cargaran solo cuando estuvieran cerca de entrar en el viewport.

  ```html
  <img src="path/to/image.jpg" alt="Example" loading="lazy" />
  ```

- **Optimización de imágenes:**
  Implementé herramientas como **ImageMagick** o **Cloudinary** para comprimir y redimensionar imágenes antes de enviarlas al cliente.

---

**5. Demora en formularios complejos**

**Problema:**
- Formularios grandes con validaciones dinámicas ralentizaban la experiencia del usuario.

**Solución:**
- **Optimización de validaciones:**
  - Utilicé validaciones asincrónicas solo cuando eran absolutamente necesarias.
  - Reemplacé validadores complejos con funciones más simples.

  ```typescript
  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  ```

- **División de formularios:**
  Dividí formularios extensos en pasos con componentes separados (wizard), cargando solo la parte visible.

---

**6. API calls repetitivos**

**Problema:**
- Varias partes de la aplicación realizaban solicitudes redundantes al backend, lo que aumentaba el tiempo de respuesta y sobrecargaba el servidor.

**Solución:**
- **Cache en servicios:**
  Implementé cache utilizando el patrón de memoización con RxJS y un `BehaviorSubject` para almacenar y reutilizar los datos en lugar de hacer múltiples solicitudes.

  ```typescript
  private cache = new Map<string, any>();

  getData(url: string): Observable<any> {
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(
      tap(data => this.cache.set(url, data))
    );
  }
  ```

- **Combinar solicitudes (ForkJoin):**
  Agrupé múltiples llamadas a la API en una sola utilizando `forkJoin` o `combineLatest`.

---

**7. Scripts pesados y dependencias innecesarias**

**Problema:**
- La aplicación cargaba muchas librerías de terceros y scripts, aumentando el tamaño del bundle.

**Solución:**
- **Eliminación de dependencias no usadas:**
  Revisé `package.json` y eliminé librerías no esenciales, reemplazándolas con implementaciones nativas o más ligeras.

- **Uso de importaciones específicas:**
  En lugar de importar módulos completos de Angular Material o librerías, importé solo los módulos necesarios.

  ```typescript
  import { MatButtonModule } from '@angular/material/button';
  ```

- **Habilitación de Tree Shaking:**
  Configuré correctamente Webpack y Angular CLI para asegurarnos de que el código no usado se eliminara en el proceso de construcción.

---

Optimizar aplicaciones Angular requiere identificar los cuellos de botella específicos, ya sea en el DOM, la carga de datos o las dependencias. Las herramientas de Angular como `OnPush`, `Lazy Loading` y `Virtual Scroll`, junto con estrategias como el uso de cache y optimización de recursos, pueden mejorar significativamente el rendimiento.

<a id="ent65-1"></a>

### **Angular Signals**

[Volver al indice](#angular-base)

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

<a id="ent65-11"></a>

### **Angular Signals vs Observables**

[Volver al indice](#angular-base)

Algunas de las ventajas del uso de Signals vs Observables son:

- No es necesario subscribirse ni desuscribirse de los Signals, posee un sistema de reactividad automatica que detecta cualquier cambio de input
- Signals es mucho mas simple y declarativo que RxJS
- Se evitan re-renderings innecesarios ya que Angular maneja mucho mejor la deteccion de cambios

Sin embargo, si uno planifica trabajar con WebSockets o Eventos Complejos, Observables puede ser una mejor opcion, ya que posee herramientas para manejar la informacion de forma mucho mas especifica.

<a id="ent51-1"></a>

### **Que mejoras hay en la migracion de AngularJS a Angular?**

[Volver al indice](#angular-base)

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


<a id="ent38"></a>

### **¿Qué es RxJS y qué problemas resuelve en el desarrollo de aplicaciones?**

[Volver al indice](#angular-base)

Reactive Extensions for Javascript (RxJS) es una libreria que nos permite trabajar con programacion reactiva en Javascript permitiendo el manejo de flujos asincronos de una forma mas declarativa, reactiva y consistente.

- Manejo de peticiones asincronas, en vez de utilizar Callbacks o Promises anidados, se pueden utilizar Observables para manejar flujos de datos asincronos
- Cuando tengo varias fuentes de datos que manejar que interactuan entre si, en RxJS puedo utilizar operadores como `map`, `combineLatest`, `map`, `filter` y `switchMap` para manejar estos flujos.
- RxJS ofrece herramientas como `takeUntil` o `takeWhile` para manejar las subscripciones de una forma eficiente y asi evitar memory leaks
- Con RxJs puedo manejar tanto flujos de datos sincronicos como asincronicos, y puedo combinarlos de una forma muy sencilla
- Si necesito coordinar multiples tareas asincronicas o flujos, RxJS me permite hacerlo de una forma muy sencilla con `forkJoin`, `merge`, `concat`, `combineLatest`, `zip`, etc, mejorando la concurrencia (la cual significa que puedo manejar multiples tareas al mismo tiempo)

En parte su uso podria ser reemplazado con Angular Signals en Angular 16, pero RxJS sigue siendo una herramienta muy poderosa para manejar flujos de datos asincronos.

<a id="ent39"></a>

### **¿Qué es un Observable en RxJS y cómo difiere de una Promesa en JavaScript?**

[Volver al indice](#angular-base)

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

<a id="rea3"></a>

### **Formas de desubscripcion de Observables**

[Volver al indice](#angular-base)

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


<a id="rea2"></a>

### **Porque es importante desuscribirnos de los Observables?**

[Volver al indice](#angular-base)

- **Evitar Memory Leaks** Estas ocurren cuando objetos que ya no estamos usando quedan en memoria, si no te desubscribis de los observables, por su naturaleza, se seguiran ejecutando siempre y cuando tengan subscribers que lo escuchen.
- **Controlar el Ciclo de Vida del Observable**: Como Angular no lo maneja de manera automatica, es responsabilidad del desarrollador su manejo. Utilizar técnicas de desuscripción adecuadas (como ngOnDestroy o el operador takeUntil) garantiza que los observables solo vivan durante el ciclo de vida necesario y no más.
- **Evitar el Doble Manejo de Datos**: Si no te desuscribes de un observable, puedes terminar recibiendo datos que ya no necesitas o que no tienen sentido para el componente actual. Esto puede generar lógica extra para manejar estos casos y complicar el código.

<a id="ent40"></a>

### **Explica la diferencia entre un Observable "cold" y "hot". Proporciona un ejemplo práctico de cada uno.**

[Volver al indice](#angular-base)

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

<a id="ent45"></a>

### **Patrones de disenio en Angular**

[Volver al indice](#angular-base)

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

<a id="angular2"></a>

### **¿Cómo funciona la detección de cambios en Angular?**

[Volver al indice](#angular-base)

Angular usa un sistema basado en zonas y el algoritmo de determinacion de diferencias (Dirty Checking) para saber cuando actualizar la interfaz.

Hay varios factores dentro de este sistema:

- **zone.js**: Es una libreria que detecta eventos asincronicos como eventos del DOM (click), peticiones HTTP, timers (setTimeout) y Promesas. Cuando se detecta un evento, se ejecuta un ciclo de deteccion de cambios.
- **Ciclo de deteccion de cambios**: Cuando se inicia la deteccion de cambios, primero se recorre el arbol de componentes, se comparan los valores y si se detectan cambios, la vista es actualizada. Este proceso se repite hasta que no haya mas cambios.

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

- ChangeDetectorRef.detectChanges() → Recorre el árbol de componentes y actualiza la vista.
- ChangeDetectorRef.markForCheck() → Marca el componente como "sucio" para la próxima detección.

```typescript
constructor(private cdr: ChangeDetectorRef) {}

ngAfterViewInit() {
  this.cdr.detectChanges(); // Forzar actualización
}
```

<a id="angular3"></a>

### **¿Cómo se maneja la inyección de dependencias y la inversión de control en las aplicaciones de Angular?**

[Volver al indice](#angular-base)

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

Se pueden definir distintos niveles de inyeccion, por ejemplo:

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

<a id="angular4"></a>

### **¿Qué es la compilación JIT y AOT en Angular? Diferencias, pros y contras**

[Volver al indice](#angular-base)

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

<a id="angular5"></a>

### **¿Qué es el enrutamiento en Angular y cómo se configura?**

[Volver al indice](#angular-base)

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

<a id="angular6"></a>

### **Como se implementa Lazy Loading en Angular?**

[Volver al indice](#angular-base)

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