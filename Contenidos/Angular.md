# Angular

## ⭕ Comandos Iniciales

- `npm i -g @ angular/cli` Instalación de Angular
- `ng new proyecto-nuevo —routing —style=css`
- `ng version` Verificación versión Angular
- `ng serve` Ejecutar el proyecto, si se le agrega el parametro `-o` se abrirá el navegador automáticamente, y con `—-port=3500` podemos elegir el puerto, `ng s`
- `ng s —host=0.0.0.0` ⇒ Si tengo varios dispositivos conectados en un mismo host, en la misma red local
- Generar un modulo ⇒  `ng generate modules/nombre-modulo` | `ng g m nombre-modulo —routing` (modules/ ya que se genera dentro de esa carpeta, si no existe, con el nombre es necesario),

## ⭕ Características

- Se lanzan nuevas versiones cada 6 meses
- Usa TypeScript para mantener una uniformidad en toda la aplicación
- Cuando se hace referencia a Angular a secas, es de la versión 2 para arriba. La versión de Angular 1 es AngularJS

## ⭕ ¿Qué es la interpolación?

Es la forma que desde la lógica de TS podemos pasar datos a renderizar en el template HTML. 

```tsx
<h2>{{'Hola'.repeat(5)}}</h2>
<p> {{ 3 + 3 }} </p>
<img src="{img}" alt="imagen"/>
```

## ⭕ ¿Qué es un Decorador?

Indica como debe comportarse el componente. Dentro de este decorador, puedes observar el selector del componente (un nombre para el mismo), el template HTML y la hoja de estilos que usará.

```tsx
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

## ⭕ ¿Qué es Property Binding?

Es la forma que tiene Angular de controlar y cambiar las propiedades de los elementos HTML usando corchetes [] 

```tsx
<input [value]="empresa" [disabled]="habilitado"  />

// Empresa y habilitado son datos dinamicos
```

Los corchetes (square brakets) hacen que Angular evalúe el lado derecho de la asignación como una expresión dinámica. Sin los corchetes, Angular trata el lado derecho como un literal de cadena y establece la propiedad en ese valor estático.

A menudo, “interpolation” y “Property Binding” pueden lograr los mismos resultados. Los siguientes pares de enlaces hacen lo mismo.

```tsx
// Interpolacion
<p><img src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>

// Property Binding
<p><img [src]="itemImageUrl"> is the <i>property bound</i> image.</p>
```

Al establecer una propiedad de elemento en un valor de datos que no sea un String a secas (por ejemplo, objetos), debe usar “Property Binding”. 

Se recomienda comprender los “Event binding” para entender el flujo de datos de la aplicacion y como este interactua con “interpolation” y “Property Binding”.

## ⭕ Event Binding en Angular (Manejo de Eventos)

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

## ⭕ ¿Cuál es el flujo de datos de la aplicación?

- Enlace unidireccional [] para enlazar desde la capa lógica (component.ts) a la vista (html).
- Enlace unidireccional () para enlazar de la vista (html) a la capa lógica (component.ts).
- Enlace bidireccional [()] para enlazar una secuencia de vista bidireccional a la capa lógica (component.ts).

## ⭕ ¿Qué es Data Binding?

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

## ⭕ ¿Cómo se usa ngIf?

```tsx
<div *ngIf="show">
	Texto
</div>

// If else 

<div *ngIf="isDenu; else templateElse">Hola, soy denu</div>
<ng-template #templateElse>
    <div>No soy denu</div>
</ng-template>

// if then else

<input type="text" required [(ngModel)]="person.name">

<P *ngIf="person.name == 'liz';then thenMyBlock else otherElseMyBlock"> Hola soy alexis</P>

<ng-template #thenMyBlock>
  <p>Hola liz</p>
</ng-template>

<ng-template #otherElseMyBlock>
  <p>Ingresa la palabra liz</p>
</ng-template>

// Renderizado condicional por array
<p *ngIf="names.length === 0">No hay nombres</p>
```

Se usa para expresar si se debe mostrar o no un elemento

En el `elseif`, si la primera condición es verdadera, se muestra el div correspondiente, de lo contrario, se muestra el componente dentro del `ng-template` con el ID correspondiente. 

## ⭕ ¿Cómo se usa ngFor?

El *ngFor es otra de las estructuras de control en Angular, que nos sirve para iterar un array

```tsx
<li *ngFor="let name of names">
	{{name}}
</li>

// Obtener el index

<li *ngFor="let name of names; index as i">
	{{name}}{{i}}
</li>

// Manejo de objetos

// Iteramos el array students y definimos para cade elemento la variable student 
<div *ngFor="let student of students">
  // Cada elemento student contiene las propiedades del objeto por lo que podemos istanciarlas con punto elmento.propiedad
  <img [src]="student?.image">
   <span>
     {{ student?.firstName + ' ' + student.lastName }}
   </span>
   <span>{{ student?.isStudent ? 'Si es estudiante' : 'No es estudiante' }}</span>
</div>

```

## ⭕ ¿Qué es un Módulo?

Las aplicaciones de Angular son Modulares, en Angular existe NgModules. Sirve para mantener la lógica de un flujo de trabajo de la aplicación. Por ejemplo, se tiene un e-commerce, con sus módulos correspondientes, usuarios vendedores, compradores, productos, etc.. 

Son diseños lógicos que se encargan de trabajar dentro de la aplicación, se usan para poder importar librerías u otros módulos dentro de los mismos. Cada módulo hasta puede tener su propio ruteo. 

## ⭕ ¿Qué es un Modelo?

Es un archivo, por ejemplo,  product.model.ts donde se definen, de un objeto, de qué tipo son los elementos que la componen.  Una forma más deductiva de conocer las propiedades del array de objetos, es definiendo una interface donde se declaran cada una de sus propiedades y el tipo de dato que contendrá

```jsx
export interface Student {
    firstName: string;
    lastName: string;
    !age: number; // Es un dato obligatorio
    isStudent: boolean;
    image: string;
    category?: string; // Es un dato que puede ser nulo
}
```

Una vez tenemos a interface en un archivo independiente la importamos en nuestro componente y definimos el array de objetos students de tipo student heredando las propiedades de la interface.

```
import { Student } from './student.model';
students: Student[] = [{...}]
```

## ⭕ ¿Cómo se usa ngSwitch?

El funcionamiento de esta directiva es exactamente igual que el de un switch de programación, donde el resultante de una expresión definirá cual es el elemento del DOM (el tag) que se mostrará. Para ello se utilizan los atributos `[ngSwitch]` igualado a una variable definida en código (la cual será la que cambie su valor) y los atributos `*ngSwitchCase` igualados a los posibles valores que puede tomar la variable. Cuando la variable tome el valor de uno de los `*ngSwitchCase` se mostrará el tag asignado. También se puede incluir un tag con el atributo `*ngDefaultSwitch` para que se muestre siempre y cuando el valor de la variable no está contemplado en ninguno de los casos.

```jsx
// Se ingresa un nombre, el mismo modelara al nombre del objeto person
<input type="text" required #inputNameNew="ngModel" [(ngModel)]="person.name">
// Dependiendo del valor que tome person.name, se tomara la opcion correspondiente
<div [ngSwitch]="person.name">
  <div *ngSwitchCase="'nicolas'">La persona es nicolas</div>
  <div *ngSwitchCase="'julian'">La persona es julian</div>
  <div *ngSwitchCase="'camilo'">La persona es camilo</div>
// Cuando person.name no es ninguno de los valores anteriores
  <div *ngSwitchDefault>Usuario no conocido!</div>
</div>
```
