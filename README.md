# DevDojo

## [Accesibilidad](#acc)  

| Temas   | 
|----------|
| [¿Qué es la accesibilidad web?](#acc1)    | 
| [¿Cuáles son sus beneficios?](#acc2)    | 
| [¿Qué significa A11y?](#acc3)    | 
| [¿Cuáles son las herramientas más usadas en accesibilidad?](#acc4)  | 
| [¿Qué es un screen reader?](#acc5)   | 
| [¿Qué es el contraste de color?](#acc6)   | 
| [¿Qué es el texto alternativo?](#acc7)    | 
| [¿Qué es el teclado virtual?](#acc8)    |
| [¿De qué trata el Web Content Accessibility Guidelines (WCAG)?](#acc9) |    
| [¿De qué tratan los principios POUR - Principios WCAG?](#acc10)    |
| [¿Qué es ARIA - Accessible Rich Internet Applications?](#acc11)    |
| [¿Cuándo es necesario utilizar ARIA?](#acc12)   |
| [Contenido dinámico y accesibilidad](#acc13)    |
| [Manejo de focus](#acc14)    |
| [CSS accesible](#acc15)    |
| [Nombrar algunas ARIA existentes](#acc16)    | 
| [¿Qué prácticas conlleva tener un HTML accesible?](#acc17)    | 

## [Algoritmos - Logica](#alg) 

| Temas   |
|----------|
| [Binary Search](#alg1)    | 
| [Podemos aplicar Binary Search a una Linked List ordenada?](#alg2)    |
| [Selection Sort (Ordenamiento)](#alg3)    |
| [Insertion Sort (Ordenamiento)](#alg4)    |
| [Bubble Sort (Ordenamiento)](#alg5)    |
| [Merge Sort (Ordenamiento)](#alg6)    |
| [Big O - ¿Qué es?](#alg7)    |
| [Reglas para calcular Big O](#alg8)    |
| [Calcular Big O](#alg9)    |
|  [Notación Asintótica](#alg10)    |
| [¿Cómo analizamos el codigo?](#alg11)    |
| [Multiplicacion de Runtimes](#alg12)    |
| [Complejidad Espacial](#alg13)    |
| [Ejemplos de Ejercicios](#alg14)    |
| [Estructuras de datos (Arrays)](#alg15)    |
| [Especificando la clase de contenido de un ArrayList](#alg16)    |


  

---
<a id="acc"></a>
# Accesibilidad

<a id="acc1"></a>
###  **¿Qué es la accesibilidad web?**

Es la práctica continua de asegurarnos de que todo lo que desarrollamos para la web se pueda usar, interpretar y operar por la mayor cantidad de personas posibles.

<a id="acc2"></a>
### **¿Cuáles son sus beneficios?**

* Mejora la experiencia de usuario.
* Mejora el SEO.
* Aumenta el alcance de la audiencia, ya que hoy en día casi un 20% de la población mundial posee algún tipo de discapacidad.
* Reduce el riesgo de demandas legales, en algunos lugares es la ley, como en EE. UU., donde todos los productos y programas deben ser accesibles. En otros países hay normas o guías para esto mismo.
* Mejora la reputación de la marca.
* Mejora la usabilidad de nuestros proyectos.

<a id="acc3"></a>
### **¿Qué significa A11y?**

Es una abreviación de la palabra "accessibility" y se utiliza para referirse a la accesibilidad web. La "A" y la "y" son las letras que comienzan y terminan la palabra, mientras que el "11" representa las 11 letras que hay en medio.

a|ccessibilit|y = a11y

<a id="acc4"></a>
### **¿Cuáles son las herramientas más usadas en accesibilidad?**

* Screen Readers
* Braille Output devices
* Configuraciones propias del sistema operativo
* Navegadores con herramientas de accesibilidad

<a id="acc5"></a>
### **¿Qué es un Screen Reader?**

Es un software que convierte el texto en voz o en braille. Es utilizado por personas ciegas o con baja visión para poder navegar por la web.

<a id="acc6"></a>
### **¿Qué es el contraste de color?**

Es la diferencia entre el color del texto y el color del fondo. Un buen contraste es importante para que las personas con discapacidad visual puedan leer el contenido.

<a id="acc7"></a>
### **¿Qué es el texto alternativo?**

Es una descripción alternativa que se le da a una imagen, para que las personas con discapacidad visual puedan entender de qué se trata la imagen.

<a id="acc8"></a>
### **¿Qué es el teclado virtual?**

Es una herramienta que permite a las personas con discapacidad motriz o que no pueden utilizar un teclado físico, poder navegar por la web.

<a id="acc9"></a>
### **¿De qué trata el Web Content Accessibility Guidelines (WCAG)?**

Son estándares internacionales de accesibilidad apuntados a web y mobile nativo. Fueron creados por W3C (World Wide Web Consortium), que construyeron estándares también en HTML y CSS.

Poseen 3 niveles de éxito:
* 30: A
* 20: AA
* 28: AAA
* 50: A + AA
* 78: A + AA + AAA

Cada nivel es progresivo, es decir, para tener 50, se debe tener A y AA aprobados.

Generalmente, el nivel AAA, el cual es el más avanzado, es al que debemos apuntar si trabajamos en servicios del gobierno, universidades o servicios esenciales, donde es extremadamente importante que todos puedan acceder a todo.

<a id="acc10"></a>
### **¿De qué tratan los principios POUR - Principios WCAG?**

POUR significa Perceivable, Operable, Understandable y Robust, la idea es aplicar los 4.

- **Perceivable (Perceptible)**: Todos los usuarios deberían poder percibir la información importante en la pantalla, para cumplir este se deben agregar alt a las imágenes, agregar transcritos a videos y/o audios y no apoyarnos 100% sobre el color de las cosas.
- **Operable**: La interfaz debería poder ser navegable por teclado o por pantalla táctil, también que los reproductores tengan todos sus botones accesibles y que los usuarios tengan el tiempo necesario para poder rellenar un formulario.
- **Understandable**: Todo el contenido de la página debe poder ser entendido por cualquiera. Si un lector de pantalla estuviera leyendo nuestra página, ¿tendría sentido lo que está leyendo? Se debe escribir simple, que la navegación sea predecible y que los mensajes de error sean explicativos.
- **Robust**: Poder soportar las tecnologías de accesibilidad disponibles. ¿Funciona en todos los navegadores y/o sistemas operativos? ¿También en distintas formas de pantalla de celular? Se debe poder usar desde cualquier dispositivo de cualquier tamaño.

<a id="acc11"></a>
### **¿Qué es ARIA - Accessible Rich Internet Applications?**

Fue desarrollado por WAI (Web Accessibility Initiative), es un set de atributos que se pueden agregar a los elementos HTML para aumentar la accesibilidad.
No cambia la apariencia ni el comportamiento de los elementos, esta diferencia solo puede ser notada por los usuarios con discapacidades. Es responsabilidad del Dev hacer que el sitio sea lo más accesible posible.

Los elementos de ARIA son:

- **role**: Define lo que un elemento hace en la página.
`<div role="button">Self-destruct</div>`
- **Propiedades** normales como `aria-describedby` y el ID definen las características y relaciones de los elementos.

```jsx
<div role="button" aria-describedby="more-info">Self-destruct</div>

<div id="more-info">This page will self-destruct in 10 seconds.</div>
```

- **States/values** definen las condiciones actuales y la data asociada con el elemento.

```jsx
<div role="button" aria-describedby="more-info" aria-pressed="false">
Self-destruct
</div>

<div id="more-info">
This page will self-destruct in 10 seconds.
</div>
```

No es necesario usar los 3 elementos de ARIA en una sola línea de código.

Con la nueva versión de HTML5 se incluyeron elementos como main, header, footer, aside y nav, con sus atributos como hidden y required, con estos nuevos elementos el uso de ARIA se hace menos necesario.

Son usados para definir cada parte en particular de la página. Se recomienda que haya un solo main (que contiene todo el contenido), y que el mismo no tenga dentro ni el footer, ni otros elementos.

```jsx
<header>
 <h1>Titulo importante header</h1>
</header>

<main></main>

<footer></footer>
```

<a id="acc12"></a>
### **¿Cuándo es necesario utilizar ARIA?**

Usar ARIA en un elemento no hace que el mismo sea accesible automáticamente, se debe usar correctamente si se decide usar. Se debe usar ARIA cuando un elemento HTML no tiene soporte de accesibilidad, es decir, los elementos que no son semánticos.

```jsx
😡 <a role="button">Submit</a>
✅ <button>Submit</button>
```

No agregar ARIA innecesario.

```jsx
😡 <h2 role="tab">Heading tab</h2>
✅ <div role="tab"><h2>Heading tab</h2></div>
```

Siempre tener soporte a teclados usando el tabindex para establecer la prioridad de foco con teclado. Se debe evitar establecer tabindex mayores a cero para evitar que el orden de focus sea desordenado.

```jsx
✅ <span role="button" tabindex="0">Submit</span>
😡 <span role="button" tabindex="1">Submit</span>
```

No agregar role=”presentation” o “aria-hidden= “true”” a los elementos que necesitan tener focus, ya que de lo contrario, se saltean al momento de navegar.

```jsx
✅ <div><button>Submit</button></div>
😡 <div aria-hidden="true"><button>Submit</button></div>
```

Usar nombres accesibles, por ejemplo, en este caso el nombre accesible es “Red Leather Boots”. Cuando una imagen y está explicada por el texto de la página y es puramente decorativa, el alto no es necesario, se puede dejar este alt con un String vacío

```jsx
html
<!-- A plain link with text between the link tags. -->
<a href="shoes.html">Red leather boots</a>

<!-- A linked image, where the image has alt text. -->
<a href="shoes.html"><img src="shoes.png" alt="Red leather boots"></a>

<!-- A checkbox input with a label. -->
<input type="checkbox" id="shoes">
<label for="shoes">Red leather boots</label>

<!-- Imagen decorativa -->
<img src="visualDecoration.jpeg" alt="">
```

No usar roles redundantes, por ejemplo:

```jsx	
✅ <ul>...</ul>
😡 <ul role="list">...</ul>
```

- Usar `<form>` o `<section>` sin el atributo name es un 😡 definitivo

```jsx
<section aria-label="Introduction to stamp collecting">
    <p>Stamp collecting, also known as philately, is
    and other materials relating
    to postal delivery.</p>
	</section>
```

Si vamos a agregar JS a un elemento, que sea en lo posible en un elemento de semantic HTML

```jsx
✅ <button onclick="doAction()">Click me!</div>
😡 <div role="button" tabindex="0" onclick="doAction()">Click me!</div>
```

Si se va a utilizar un elemento no semántico para trigger de un evento JS, se debe agregar un `keydown/keyup` event.

Se debe agregar el título de la página para que el Screen Reader le diga a los usuarios donde están posicionados, esto es especialmente para las SPA que funcionan desde un solo index.

<a id="acc13"></a>
### **Contenido Dinámico y Accesibilidad**

Una de las funcionalidades de JS es la habilidad de agregar código HTML de manera dinámica. Por ejemplo, si quiero mostrar un mensaje que le avise al usuario que se loggeo correctamente:

- Agrego el HTML:

```html
document.querySelector("#banner").innerHTML = '<p>You are now logged in</p>';
```

- Agrego el CSS:

```html
document.querySelector("#banner").setAttribute("style", "border-color:#0000ff;");
```

Para ambas cosas y para esta función, hay pros y contras

| 😡 | ✅ |
| --- | --- |
| Renderizar grandes porciones de HTML no semántico | Renderizar de a pequeños pedazos de HTML semántico |
| No dar tiempo para que la tecnología de accesibilidad reconozca al nuevo contenido dinámico | Agregar un setTimeout para dar tiempo a que los usuarios escuchen todo el mensaje |
| Aplicar estilos en onFocus() | Usar :focus en CSS para realizar esto mismo |
| Aplicar estilos inline | Poner los estilos en el stylesheet |
| Crear archivos JS demasiado largos | Usar menos JS, muchas cosas pueden hacerse con CSS |

Se debe usar JS simple y conciso.

<a id="acc14"></a>
### **Manejo de Focus**

Cuando un componente no está manejado de forma correcta puede crear un **keyboard trap**, ya que es muy probable que el focus quede trabado en un solo componente, es muy común que esto pase en los modales. 

😡

```jsx
class Modal extends React.Component {
  componentDidMount() {
    this.modalTarget = document.createElement("div");
    this.modalBackdrop = document.createElement("div");
    this.modalTarget.className = "react-modal";
    this.modalBackdrop.className = "react-modal__backdrop";
    document.body.appendChild(this.modalTarget);
    document.body.appendChild(this.modalBackdrop);
    this._render();

    setTimeout(() => {
      this.modalTarget.classList.add("react-modal--in");
      this.modalBackdrop.classList.add("react-modal__backdrop--in");
    }, 40);
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    this.modalTarget.classList.remove("react-modal--in");
    this.modalBackdrop.classList.remove("react-modal__backdrop--in");
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
      document.body.removeChild(this.modalBackdrop);
    }, 500);
  }

  renderModalDialogue() {
    return <div className="react-modal__dialogue">{this.props.children}</div>;
  }

  _render() {
    ReactDOM.render(this.renderModalDialogue(), this.modalTarget);
  }

  render() {
    return <noscript />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalOpen() {
    this.setState({ modalActive: true });
  }
  handleModalClose() {
    this.setState({ modalActive: false });
  }
  render() {
    const { modalActive } = this.state;
    return (
      <div>
        <button onClick={this.handleModalOpen} className="btn btn-primary">
          Show Message
        </button>
        {modalActive && (
          <Modal>
            <div className="deque-dialog-screen">
              <h1
                id="dialogMessageAlertHeading"
                className="deque-dialog-heading"
              >
                Message Alert Dialog
              </h1>
              <p
                id="dialogMessageAlertDescription"
                className="deque-dialog-description"
              >
                This is the description for the message alert dialog
              </p>
              <div role="document" className="deque-dialog-content">
                <p>
                  Message alert dialogs are more urgent than regular message
                  dialogs. They can contain long (or short) passages of text.
                </p>
              </div>
              <p className="deque-dialog-buttons">
                <button
                  onClick={this.handleModalClose}
                  className="deque-button deque-dialog-button-submit"
                  aria-label="button"
                >
                  Continue
                </button>
                <button
                  onClick={this.handleModalClose}
                  className="deque-dialog-button-cancel"
                  aria-label="button"
                >
                  Cancel
                </button>
                <button className="deque-dialog-button-close">
                  <span aria-hidden="true"></span>
                </button>
              </p>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

✅

```jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div class="buttonbox">
        <button onClick={this.handleOpenModal}>Show Message</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="react-modal__dialogue"
        >
          <div className="deque-dialog-screen">
            <h1 id="dialogMessageAlertHeading" className="deque-dialog-heading">
              Message Alert Dialog
            </h1>
            <p
              id="dialogMessageAlertDescription"
              className="deque-dialog-description"
            >
              This is the description for the message alert dialog
            </p>
            <div role="document" className="deque-dialog-content">
              <p>
                Message alert dialogs are more urgent than regular message
                dialogs. They can contain long (or short) passages of text.
              </p>
            </div>
            <p className="deque-dialog-buttons">
              <button
                onClick={this.handleCloseModal}
                className="deque-button deque-dialog-button-submit"
                aria-label="Continue"
              >
                Continue
              </button>
              <button
                onClick={this.handleCloseModal}
                className="deque-button deque-dialog-button-cancel"
                aria-label="Cancel"
              >
                Cancel
              </button>
              <button
                onClick={this.handleCloseModal}
                className="deque-dialog-button-close"
                aria-label="Close modal"
              >
                X<span aria-hidden="true"></span>
              </button>
            </p>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<App {...props} />, document.getElementById("app"));
```

Se debe también manejar el focus a nivel página, poniendo énfasis en las SPA que cuando se cambia de sección no hay un refresh. Cada vez que se cambia de página, se debe definir donde debe quedar el focus, esto es decidido por el equipo de desarrollo.

<a id="acc15"></a>
### **CSS Accesible**

Se puede hacer que cierto CSS Custom sea visto solo por el Screen Reader, esto se usa cuando tengo muchos gráficos en la pagina pero necesito que haya un texto alternativo para el mismo

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

Sin embargo, sí a un CSS de mi pagina le agrego los atributos **`display:none`** o **`visibility:hidden`** este elemento va a ser ignorado tanto por la página como por el Screen Reader

- Cuando hablamos del **contraste** de una página, las “reglas” de la web accesibility recomiendan al menos 4.5:1 radio para un texto normal, el cual es calculado comparando la luminancia relativa de dos colores. Hay varias herramientas online para hacer esta comparación. Es necesario que haya un contraste considerable entre el fondo y el color de texto para que personas con problemas visuales puedan leer correctamente la página.

Hay varios tipos de problemas de visión con respecto a los colores, el más común, es con el verde, también hay varias herramientas en internet que ayudan a simular el cómo se vería tu web si lo viera alguien con ciertos problemas visuales.

<a id="acc16"></a>
### **Que practicas conlleva tener un HTML Accesible?**

- Se deben poner captions en las tables

```jsx
<table>
  ✅ <caption>My stamp collection</caption>
  <tr>
    <th>Animal</th>
    <th>Year</th>
    <th>Condition</th>
  </tr>
</table>
```

- Utilizar correctamente los headings y con el orden correcto de prioridad

```jsx
😡
<div>
  <p>¿Cómo empiezo una colección de sellos?</p>
  <p>Equipo que necesitarás</p>
    <div>
      <p>Lupa</p>
      <p>Sellos</p>
    </div>
</div>

<div>
	<h3>Sellos</h3>
	<p>La colección de sellos, también conocida como filatelia, es el estudio de los sellos postales, sobres franqueados, matasellos, postales y otros materiales relacionados con la entrega postal.</p>
</div>
<div>
	<h3>¿Cómo empiezo una colección de sellos?</h3>
  <h2>Equipo que necesitarás</h2>
	<h4>...</h4>
</div>


✅
<div>
  <h1>¿Cómo empiezo una colección de sellos?</h1>
  <h2>Equipo que necesitarás</h2>
  <ol>
    <li>Pinzas pequeñas con puntas redondeadas</li>
    <li>Bisagras para sellos</li>
  </ol>
</div>

<header>
  <h1>Colección de Sellos</h1>
</header>
<main>
	<section aria-label="Introducción a la colección de sellos">
		<h2>¿Qué es la colección de sellos?</h2>
		<p>La colección de sellos, también conocida como filatelia, es el estudio de los sellos postales, sobres franqueados, matasellos, postales y otros materiales relacionados con la entrega postal.</p>
	</section>

	<section aria-label="Comenzar una colección de sellos">
		<h2>¿Cómo empiezo una colección de sellos?</h2>
    <h3>Equipo necesario</h3>
    <p>...</p>
    
    <h3>Cómo adquirir sellos</h3>
    <p>...</p>

    <h3>Organizaciones a las que puedes unirte</h3>
		<p>...</p>
	</section>
</main>
```

- Si se trata de una SPA se debe actualizar el `<title>` o `document.title` de la página para informar al usuario de donde está parado

```jsx
😡 <title>The Food Channel | Outrageous Pumpkins | Season 3 </title>
✅ <title>Season 3 | Outrageous Pumpkins | The Food Channel</title>
```

- Agregar el atributo lang al HTML, esto para que el Screen reader reconozca con qué acento leer todo

```jsx
😡 <html>...</html>
✅ <html lang="en">...</html>
```

- Si el contenido de la página está definido en un lang en particular, pero cierta parte de la misma está en otro idioma, esto se puede aclarar

```jsx
<html lang="en">
  <body>...
    <div>
      <p>While traveling in Estonia this summer, I often asked,
        <span lang="ee">"Kas sa räägid inglise keelt?"</span>
        when I met someone new.</p>
    </div>
  </body>
</html>
```

- Agregar `title` y la propiedad de scrolling al mismo, esto para que las personas con baja visión puedan saltear este iframe que probablemente no puedan ver.

```jsx
😡 <iframe src="https://www.youtube.com/embed/3obixhGZ5ds"></iframe>
✅ <iframe title="Google Pixel - Lizzo in Real Tone"
  src="https://www.youtube.com/embed/3obixhGZ5ds"
  scrolling="auto">
</iframe>
```

- Se recomienda, sí se tiene en un formulario una pregunta en el cual, hay varios **radiobutton** que responden a la misma, el envolver está en un **fieldset**, que ayuda a englobar tanto las opciones como las posibles respuestas, siendo la consigna o la pregunta el **legend** del fieldset

```html
<form>
  <fieldset>
    <legend>Elige uno de estos tres elementos:</legend>
    <input id="uno" type="radio" name="elementos" value="uno">
    <label for="uno">Opción Uno</label><br>
    <input id="dos" type="radio" name="elementos" value="dos">
    <label for="dos">Opción Dos</label><br>
    <input id="tres" type="radio" name="elementos" value="tres">
    <label for="tres">Opción Tres</label>
  </fieldset>
</form>
```

- También se recomienda englobar las fechas y/o horas en un **datetime tag**

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

- Se recomienda también, sí se tiene una lista de links, que se englobe en un **nav** y se le ponga un **aria-label** para que el Screen Reader sepa que es una lista de links

```html
<nav aria-label="Primary">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

<a id="acc17"></a>
### **Nombrar algunas ARIAS existentes**

- `aria-expanded`: Se usa cuando un dropdown está expandido o no

```html
<button id="toggle" aria-expanded="false">
```

- `aria-pressed`: Se usa cuando un botón fue seleccionado o presionado

```jsx
 <div role="main" class="grid">
        <div class="grid-item" id="colorOne">
            <button class="btn" id="buttonOne" aria-label="Press me please">Press me please!</button>
        </div>
        <div class="grid-item">
            <button class="btn" id="buttonTwo" aria-label="No press me">No press me!</button>
        </div>
    </div>
```

- `aria-hidden`: Se usa para esconder un elemento de la página

```html
<div aria-hidden="true"></div>
```

- `aria-label`: Se usa para darle un nombre a un elemento

```html
<button aria-label="Close"></button>
```

- `aria-describedby`: Se usa para describir un elemento

```html
<div id="more-info">This page will self-destruct in 10 seconds.</div>
<button aria-describedby="more-info">Self-destruct</button>
```

- `aria-labelledby`: Se usa para referenciar un elemento por su ID

```html
<h1 id="title">My title</h1>
<div aria-labelledby="title">...</div>
```

- `aria-controls`: Se usa para referenciar un elemento por su ID

```html
<div id="menu">...</div>
<button aria-controls="menu">Open menu</button>
```

- `aria-live`: Se usa para anunciar cambios en la página

```html
<div aria-live="polite"></div>
```

- `aria-atomic`: Se usa para anunciar cambios en la página

```html
<div aria-atomic="true"></div>
```

- `aria-busy`: Se usa para anunciar cambios en la página

```html
<div aria-busy="true"></div>
```

---
<a id="alg"></a>
# Algoritmos - Logica

<a id="alg1"></a>
###  **Binary Search**

Encontrar elementos en un vector ordenado de forma rápida sin recorrer todo el vector corriendo el comienzo para no recorrer lo ya recorrido. 

```jsx
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5)); // 4
```

![Algoritmo de búsqueda binaria](src/log1.png)

<a id="alg2"></a>
###  **Podemos aplicar Binary Search a una Linked List ordenada?**

No, no se puede, ya que encontrar el index del elemento del medio es demasiado complicado.

<a id="alg3"></a>
###  **Selection Sort (Ordenamiento)**

![Selection Sort Tutorials & Notes | Algorithms | HackerEarth](https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png)

Se busca el elemento mas pequeño y se pone en primera posición

Se busca el segundo mas pequeño y se pone segundo

Se repite el proceso hasta llegar a la ultima posición

```javascript
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

// Inicializo el for desde uno mas del index donde estoy parado
    for (let j = i + 1; j < array.length; j++) {
        // Si el valor actual de j es menor que minIndex, reemplazo minIndex por este nuevo valor
    if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

// Luego de que nuestro for interno finalizo, hago el swap de valores 
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}
```

<a id="alg4"></a>
###  **Insertion Sort (Ordenamiento)**

Este algoritmo funciona construyendo una matriz ordenada al principio de la lista. 

Comienza la matriz ordenada con el primer elemento. 

Inspecciona el siguiente elemento y lo cambia hacia atrás en la matriz ordenada hasta que esté en una posición ordenada, y así sucesivamente.

```javascript
const insertionSort = (array) => {
    // Un algoritmo de ordenación por inserción comienza la ordenación al principio de la lista, lo que significa que el primer elemento ya está ordenado.
  for (let i = 1; i < array.length; i++){
    const currValue = array[i];
    let j = i - 1; 
    // Mientras no vaya mas alla del inicio del array, y mientras no se encuentre un valor mas pequenio del guardado en currValue
      while(j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        // evitar el loop
        j--;
      }

      array[j + 1] = currValue;
  }
}
```

<a id="alg5"></a>
###  **Bubble Sort (Ordenamiento)**

Es el más simple de todos. 

Da vuelta los elementos si estan en el orden incorrecto de a pares. 

Para darse cuenta de que está ordenado, debe hacer una pasada completa sin hacer ningun swipe. 

![Algoritmo de búsqueda binaria](src/log2.png)

```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // Itera por todos los elementos menos el ultimo, por eso length - 1
    for (let j = 0; j < array.length - 1; j++) {
        // Es el elemento actual (j) mayor al siguiente? (j + 1)
      if (array[j] > array[j + 1]) {

        // Si se cumple la condicion, darlos vuelta
        const temp = array[j];

        // Asigno al elemento actual el valor siguiente
        array[j] = array[j + 1];

        // Asigno al valor siguiente el elemento actual
        array[j + 1] = temp;
      }
    }
  }

    // devuelvo el array ordenado
    return array;
}
```

<a id="alg6"></a>
###  **Merge Sort (Ordenamiento)**

![Understanding Merge Sort-Sorting Algorithm -4 | by Jaykishan Sewak | Medium](https://miro.medium.com/v2/resize:fit:672/1*WQ4YJMWRFrGHLK1KQDeDHQ.png)

Aplica el principio divide y vencerás.

Divide el array a la mitad de forma sucesiva

Se mezclan pares de subarray hasta volver a juntar el array completo

Es recursivo

 ```javascript
 // Función principal para ordenar un array utilizando Merge Sort
 function mergeSort(arr) {
     // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
     if (arr.length <= 1) {
         return arr;
     }
     
     // Encuentra el punto medio del array
     const mid = Math.floor(arr.length / 2);
     
     // Divide el array en mitades
     const left = arr.slice(0, mid);
     const right = arr.slice(mid);
     
     // Ordena recursivamente las mitades izquierda y derecha
     return merge(mergeSort(left), mergeSort(right));
 }
 
 // Función para combinar y ordenar dos arrays ordenados
 function merge(left, right) {
     // Array para almacenar el resultado fusionado
     let result = [];
     // Índices para recorrer los arrays izquierdo y derecho
     let leftIndex = 0;
     let rightIndex = 0;
 
     // Mientras haya elementos en ambos arrays
     while (leftIndex < left.length && rightIndex < right.length) {
         // Compara los elementos actuales de ambos arrays
         if (left[leftIndex] < right[rightIndex]) {
             // Si el elemento izquierdo es menor, añádelo al resultado y avanza al siguiente elemento del array izquierdo
             result.push(left[leftIndex]);
             leftIndex++;
         } else {
             // Si el elemento derecho es menor, añádelo al resultado y avanza al siguiente elemento del array derecho
             result.push(right[rightIndex]);
             rightIndex++;
         }
     }
 
     // Después de salir del bucle, uno de los arrays puede tener elementos restantes
 
 ```

<a id="alg7"></a>
###  **Big O - ¿Qué es?**

O viene por la palabra Orden. La n representa un número o el tamaño de un conjunto

Podemos ejecutar nuestro algoritmo y medir cuanto tiempo tarda en ejecutarse, pero es algo muy variable, dependiendo el algoritmo, el tiempo de ejecución escala con la entrada (lo que recibe), como por ejemplo los algoritmos de búsqueda que pueden funcionar bien con cantidades pequeñas de datos y muy mal con cantidades muy grandes.

La mejor opcion es la que crece menos ante el aumento de datos de entrada

<a id="alg8"></a>
###  **Reglas para calcular Big O**

- Se ignoran las constantes

```html
3 * O(1) => O(1)
0(n/2) => O(n)
```

- Dominancia de términos: Siempre nos quedaremos con el peor caso.

```html
O(n) < O(n^2)
O(n log n) < O(2^n)
```

- Ignorar los términos no dominantes

```html
O(n^2 + n) => O(n^2)
O(n^2 + n + 1) => O(n^2)
```

- Ignorar los productos

```html
O(n * log n) => O(n log n)
```

- Ignorar las sumas

```html
O(n + log n) => O(n)
```

- Ignorar las divisiones

```html
O(n / 2) => O(n)
```

- Ignorar las constantes multiplicativas

```html
O(2n) => O(n)
```

- Ignorar las constantes aditivas

```html
O(n + 1) => O(n)
```


<a id="alg9"></a>
###  **Calcular Big O**
Supongamos que necesitamos llevar unas valijas a la casa de un primo. No importan cuantas valijas llevemos, el tiempo siempre será el mismo, 5 minutos.

Si quiero llevar las valijas corriendo, supongamos que solo puedo llevar 2 valijas por corrida, entonces, el tiempo que tardaré subirá exponencialmente, dependo de mi entrada, y el tiempo sube de manera lineal.

![Grafico](.\src\perf1.png)

<a id="alg10"></a>
###  **Notación Asintótica**

La notacion asintotica nos permite simplificar estos graficos, es como redondear decimales.

En desarollo nos interesa el limite superior, que es la notacion de **Big 0, es el comportamiento en el peor de los casos**.

Asi podremos calificar nuestros algoritmos con distintas complejidades. Si mi algoritmo es n² entre mas crezca la entrada, peor se va a comportar, como se puede ver en el siguiente grafico

![performance](.\src\perf2.png)

* **O(N!) =>** Es el peor de todos. Tambien para funciones recursivas en general.

```javascript
void nFactorialExample(int n) {
  for (int i = 0; i < n; i++){
    nFactorialExample(n - 1);
  }
}

// Factorial de 3: 3x2 = 6
// Factorial de 6: 6x5x4x3x2 = 720
```

* **O(2'N) =>** Responde a las secuencias fibonacci recursivas. Es una complejidad exponencial. Tambien cuando se trata de arboles. 

```javascript
// Ejemplo poco eficiente - Recursiva
int fibonacci (int n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

* **O (N log N) =>** Aplica a Merge Sort, Heap Sort y Quick Sort, que son los mas eficientes.

* **O(log n)** => Es muy comun verlo en la busqueda binaria, ya que se situa a la mitad de un array ordenado y de ahi, mediante comparacion, encuentra el elemento.  

- **O(1)** => Tiempo constante, el algoritmo no variará su rendimiento con la entrada. Por ejemplo, asignaciones de variables.

```jsx
x = x+1; O(1)
y = 200*3; O(1)
print(y); O(1)
O(1) + O(1) + O(1) = O(1)

int max(int a, int b) {
  if (a >= b) return a;
  return b;
}
```

- **O(n)** => Crecimiento Lineal, indica que el crecimiento de complejidad del algoritmo es proporcional al input. Mas datos, mas complejidad. Aparece en iteraciones.

```jsx
for (int i = 0; i<n; i++) 
	print(arr[1]);

// En el peor de los casos se recorre el array entero para encontrar a un solo empleado.
Employee linearSeach(Employee[] employees, String name) {
  for (Employee e: employees) {
    if (name.equals(e.getName())) return e;
  }
  return null;
}
```

- **n * O(1) = O(n)** | La impresion es de complejidad O(1), pero se ejecuta n veces dependiendo del input ya que esta dentro de un bucle for

```jsx
y = 2+2; // O(1)

//O(n)
for(int i = 0; i<n; i++)
	print(arr[1]);

// n + O(1) => O(n)
```

- **O(n^2)** => El crecimiento en complejidad es proporcional al cuadrado del tamaño del input. Son los menos recomendados para datos grandes. Aparece sobre iteraciones dentro de iteraciones. Se le dice **complejidad cuadratica.**

```jsx
for(int i = 0; i<n; i++) // O(n)
	for (int j = 0; i<k; j++) { // O(n)
		print(m[i][j]); // O(1)
	}

n * n * O(1) => O(n^2)

void printPairs(int[] array) {
  for (int x: array) {
    for (int y : array) {
      System.out.println(x y);
    }
  }
}
```

No importa si tenemos un algoritmo muy complejo dentro de un if al que probablemente no se entre dependiendo la entrada, SIEMPRE se toma el peor caso posible.

<a id="alg11"></a>
###  **¿Cómo analizamos el codigo?**

Cualquier función se considera O(1) (constante) siempre y cuando no sea un ciclo, no tenga recursion y no sea una llamada a una funcion que no sea de tiempo constante

```jsx
entrada = input() // O(1)
x = 5 // O(1)

if entrada == "hola":
	print("saludo" * x) // O(1)

// n es la entrada
for (int i = 1; i <=n; i += c) { // O(n)
	// CUalquier sentencia O(1)
}
```

Los ciclos son considerados `O(n) `, siendo n la entrada. Depende que tan grande sea la entrada, cuanto se recorrerá. Pero, si se itera solo 3 veces, se considera `O(1)`, ya que la entrada es indiferente en la cantidad de ciclos de ejecución.

Si hay dos bucles anidados, se considera `O(n^2)`, la complejidad depende del ciclo de adentro del ciclo padre.

```javascript
// n es la entrada
for (int i = 1; i <= n; i += c) {
    // O(n^2)
    for (int j = 1; j <= n; j += c) {
        // Cualquier sentencia O(1)
    }
}
```

Si la variable del ciclo, en lugar de estar incrementandose por un numero constante, se multiplica o divide, se vuelve `O(log(n))`, va incrementandose de manera exponencial con su entrada.

```javascript
// n es la entrada
// O(log(n))
for (int i = 1; i <= n; i *= c) {
    // Cualquier sentencia O(1)
}
```

Si es mucho mas complejo lo que sucede con la variable que itera, se vuelve `O(log(log(n))`

```javascript
// O(log(log(n))) - Hay muchas mas operaciones dentro de ese for
for (int i = 2; i <= n; i = pow(i,c)) {
    // Cualquier sentencia O(1)
}
```

Sumamos todas las complejidades del codigo y lo simplificamos. Tomamos el termino mas significativo, el pedazo de codigo mas grande, para sacar la complejidad total de todo el codigo.

Las lineas dentro de un bucle tendrán el mismo tipo de complejidad que su ciclo padre.

```javascript
public static void main(String[] args){
    int []arr = {5,3,4,8,7,5,4,2,4}; // 1
    
    for (int j = 1; j < arr.length; j++) { // n
        int actual = arr[j]; // n
        
        int i = j - 1; // n
       	while (i >= 0 && arr[i] > actual) { // n^2
            arr[i+1] = arr[i]; // n^2
            i --; // n^2 - Ya que su padre es // n^2
        }
        
        arr[i + 1] = actual;
    }
}
```

Con esto, hacemos la siguiente operación:

`3n^2 + 4n + 1 = O(n^2)`

Nos quedamos con el termino mas significativo, que seria n^2

<a id="alg12"></a>
###  **Multiplicacion de Runtimes**

Si mi código es "Hace esto y luego hace esto otro", se agrega al Runtime 

```javascript
// O(A+B)
for (int a : arrA) {
    print(a);
}
for (int b: arrB) {
    print(b);
}
```

En cambio, si mi codigo es del estilo "Mientras haces esto, hace esto otro", se multiplica el runtime

```javascript
// O(AB)
for (int a: arrA) {
	for (int b: arrB) {
		print(a + "," + b);
	}
}
```

<a id="alg14"></a>
###  **Ejemplos de Ejercicios**

En este caso es O(N) (Muy bueno), el hecho de que iteremos dos veces el array no importa. 

```javascript
void foo(int[] array) {
    int sum = 0;
    int product = 1;
    for (int i = 0; i < array.length; i++) { // O(N)
        sum += array[i];
    }
    for (int i = 0; i < array.length; i++) { // O(N)
        product *= array[i];
    }
    
    System.out.println(sum + product);
}
```

`O(N)` - La complejidad crece dependiendo de la entrada de datos, es decir, el array que recibe y tendra que recorrer. 

```javascript
int sum = 0;
int product = 1;

for (int val: array) {
  sum +=val;
  product *=val;
}
```

`O(2N'2) == O(N'2 + N'2) === O(N'2)`. Se deben eliminar los terminos no dominantes

```javascript
int sum = 0;
int result = 0;

// O(N) - No Dominante
for (int val: array) {
  sum +=val;
}

// O(N'2) - Dominante. Si optimizamos solo esta parte, podremos obtener todos los beneficios
for (int x : array) {
  for (int y: array) {
    result += x * y - sum;
  }
}
```

A simple vista parece `O(N)`, porque recorre solo dos veces los dos array por separado, pero estos array pueden tener tamanios distintos, entonces seria `O(A + B)`, A siendo el tamanio de arrayA y B de arrayB

```javascript
int sum = 0;

for (int val: arrayA) {
  sum += val;
}

for (int val: arrayB){
  sum += val;
}
```

O(N), solo se necesita recorrer la mitad del array, y si el mismo crece de tamanio, la complejidad crecera con el. 

```javascript
void reverseArray(int [] array) {
  // Recorre el array hasta la mitad
  for (int i = 0; i < array.length / 2; i++) {
    // Calculamos la posicion nueva del elemento
    int reversePosition = array.length - 1 - i;
    // Posicion actual
    int tmpVal = array[i];
    
    // Cambiamos de lugar
    array[i] = array[reversePosition];
    array[reversePosition] = tmpVal;
  }
}
```

O(N'2) 

```javascript
// Imprimir parejas de valores de un array
void printUnorderedPairs(int[] array) {
  for (int i = 0; i< array.length - 1; i++) {
    for (int j = i+1; j < array.length; j++) {
      System.out.println(ij);
    }
  }
}
```

O(N) - Si B crece, el tiempo crece. Seria O(B)

```javascript
// Calcular el producto de dos numeros sin usar la funcion predeterminada. Sumar B veces el valor A
int product(int a, int b) {
  int result = 0;
  // B define que tan grande es este for
  for (int i = 0; i < b; i++) {
    result += a;
  }
  return result;
}
```

O(N'2) - Tengo dos complejidades lineales.

```javascript
// copiar un array a otro de forma poco eficiente - elemento a elemento a un array creado desde cero

// O(N) - recorre el array
// Se recibe un arrray
int[] copyArray(int[] array) {
  // Se guarda una copia del array
  int[] copy = new int[0];
  for (int val: array) {
    copy = appendToNew(copy, val);
  }
  return copy
}


// O(N) - recorre el array recibido
// Se pasa la copia del array y el valor a agregar en esa copia
int[] appendToNew(int[] array, int val) {
  // Creo un array un poco mayor
  int[] bigger = new int[array.length + 1];
  for (int i = 0; i < array.length; i++){
    bigger[i] = array[i];
  }
  
  bigger[bigger.length - 1] = val;
  return bigger;
}
```

O(AB) 

```javascript
void printPairsTwoArrays(int[] arrayA, int[] arrayB) {
  // Aca recorro el arrayA - O(A)
  for (int valA : arrayA) {
    // Aca el arrayB - O(B)
    for (int valB: arrayB) {
      System.out.println(valA, valB);
    }
  }
}
```

<a id="alg15"></a>
###  **Estructuras de datos (Arrays)**

Las colecciones de objetos son comunes en la programación moderna, especialmente bajo el paradigma de la Programación Orientada a Objetos (POO). Como su nombre lo indica, las colecciones de objetos permiten reunir elementos de un mismo tipo y, si existen, de sus subtipos. Esto significa que, desde el punto de vista de la POO, dentro de una colección podemos almacenar en memoria objetos de una misma clase, así como de sus subclases.

En Java, la forma más simple de trabajar con colecciones de objetos es utilizando la clase `ArrayList`, que permite guardar de forma dinámica y secuencial un elemento detrás del otro, acceder a ellos y eliminarlos cuando lo necesitemos.

A continuación, veremos cómo crear colecciones de objetos utilizando `ArrayList`. También exploraremos cómo manipular su contenido a través de los siguientes métodos (hay más, pero por ahora no los trataremos):

| Método            | Descripción                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `add(elemento)`   | Permite agregar un elemento al final de la colección.                                                                                           |
| `add(n, elemento)`| Permite agregar un elemento en la posición señalada por `n`. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |
| `get(n)`          | Permite obtener el elemento `n` de la colección. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |
| `remove(n)`       | Permite extraer el elemento `n` de la colección. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |

En Java, los `ArrayList` son una implementación de la interfaz `List`. También se los conoce como listas, aunque este concepto es más amplio de lo que trataremos aquí, donde sólo los utilizaremos para crear colecciones dinámicas de datos.

<a id="alg16"></a>
###  **Especificando la clase de contenido de un ArrayList**

Esta clase tiene una particularidad: para instanciar un ArrayList debemos indicar la clase de elementos que contendrá. Crear el ArrayList sin especificar la clase de elementos que contendrá está permitido, pero indicará una alerta y asumirá que sus elementos son de la clase Object. Los ArrayLists soportan que en su definición se indique cuál será la clase que tomaremos como clase base para añadir elementos a la estructura.
Si necesitamos crear una colección de objetos que pueda guardar cualquier clase de elemento, debemos asociarla a la clase Object, pero la clase Object no conocerá los métodos y atributos específicos de cada elemento que pongamos en la lista, y esto impedirá acceder a sus atributos y métodos particulares en forma automática. Más adelante veremos cómo reconocer y acceder a los atributos y miembros específicos de un elemento de una clase derivada.