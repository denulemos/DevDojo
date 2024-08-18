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
| [Creación de un ArrayList](#alg17) |
| [Agregar un elemento a un ArrayList](#alg18) |
| [Obtener el elemento n de un ArrayList](#alg19) |
| [Extraer el elemento n de un ArrayList](#alg20) |
| [Recorrer el ArrayList completo con for-each](#alg21) |
| [Buscar un elemento en la colección](#alg22) |
| [Remover algunos de los elementos del ArrayList](#alg23) |
| [Creando colecciones como atributo de una clase](#alg24) |
| [Devolver una colección secundaria](#alg25) |
| [Qué es un "array-like" en Javascript?](#alg26) |
| [Cuales son las funciones array de JavaScript?](#alg27) |
| [Funcion .sort()](#alg28) |
| [Set() en Javascript (HashSet)](#alg29) |
| [HashTables (.Map)](#alg30) |
| [Linked Lists](#alg31) |
| [¿Cuales son los beneficios de un Linked List sobre un Array?](#alg32) |
|[¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?](#alg33) |
| [¿Cual es la diferencia entre un Linked List y un Doubly Linked List?](#alg34) |
| [Generics](#alg35) |
|[Estructuras de Datos](#alg36) |
|[Qué son las Pilas y Colas?](#alg37) |
| [Colas](#alg38) |
| [Pilas](#alg39) |
| [Nodo versus dato](#alg40) |
| [Uso de Pilas y Colas](#alg41) |
| [Arboles](#alg42) |
| [Qué es un Binary Tree?](#alg43) |
| [Qué es un Binary Search Tree?](#alg44) |
| [¿Porque se dice que buscar un nodo en un BST es mas eficiente que en un Simple Binary Tree?](#alg45) |
| [Complete Binary Tree](#alg46) |
| [Maneras de recorrer un Arbol](#alg47) |
| [Recorrido de un Binary Tree](#alg50) |
| [In-Order Traversal](#alg48) |
| [Pre-order traversal](#alg49) |
| [Post-order traversal](#alg51) |
| [Recursividad](#alg52) |
| [Factorial](#alg53) |
| [Heaps](#alg54) |
| [Metodos de Strings en Javascript](#alg55) |
| [Métodos de Objectos en Javascript](#alg56) |

  

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

<a id="alg17"></a>
### **Creación de un ArrayList**

Como primera medida importaremos el paquete correspondiente a partir de la adición de su namespace (Esto al momento de escritura de este apunte):

```java
import java.utils.ArrayList;
```

Una vez agregado el paquete nuestro programa permitirá crear colecciones de la siguiente manera (podemos hacerlo en dos partes, primero declarando la variable y luego creando el objeto; aquí está la “versión corta”):

```java
ArrayList<ClaseBase> coleccion = new ArrayList<>();
```

Así, para crear una colección de objetos de la clase Persona, haremos:

```java
ArrayList<Persona> personas = new ArrayList<>();
```

Tengamos en cuenta que al hacer esto estamos creando únicamente la colección vacía, sin ningún elemento. La clase ArrayList posee el método size() que nos indica cuál es la cantidad de elementos que se han guardado en el momento en la colección. Si ejecutásemos la siguiente instrucción inmediatamente después de crearla, obtendríamos como respuesta un 0:

```java
System.out.println(coleccion.size());
```

En caso de necesitar crear una colección de elementos de los tipos nativos del lenguaje (integer, double, etc.) debemos recurrir a sus contrapartes como clase:

```java
ArrayList<Integer> numeros = new ArrayList<>();
```

Tampoco deberemos crear una nueva clase para generar colecciones de Strings, porque de por sí String ya es una clase:

```java
ArrayList<String> palabras = new ArrayList<>();
```

<a id="alg18"></a>
### **Agregar un elemento a un ArrayList**

Para agregar un elemento a un ArrayList utilizaremos el método add(elemento), el cual permite agregar un nuevo elemento al final de la estructura (es decir, como último elemento). Hay forma de indicar específicamente dónde insertar el nuevo elemento, pero eso excede lo que hoy queremos aprender.

Por ejemplo, para agregar un elemento, podemos hacer:

```java
// creamos el objeto
Objeto elemento = new Objeto();
...
...
...
// lo agregamos a la colección
coleccion.add(elemento);
```

Solamente en el caso de las clases relacionadas a los tipos nativos (integer, double, etc.) podremos agregar elementos sin necesidad de crear explícitamente el objeto (Java lo hará por nosotros):

```java
numeros.add(19); // insertará el número 19 en la colección
```
<a id="alg19"></a>
### **Obtener el elemento n de un ArrayList**

Para obtener el elemento n del ArrayList utilizaremos el método get(n), donde n es la posición en la cual está el elemento. El valor de n debe estar entre 0 y size()-1, caso contrario se producirá un error de ejecución.
Para obtener el primer elemento de la colección haremos:

```java
Objeto elemento = coleccion.get(0);
```

Esto guardará la referencia al elemento sin quitarlo de la lista (no hace una copia). Entonces, si modificamos el elemento que tenemos en el auxiliar, obviamente estaremos modificando el elemento que está en la lista, pues es el mismo elemento referenciado desde dos lugares distintos.

<a id="alg20"></a>
### **Extraer el elemento n de un ArrayList**

Para extraer el elemento n del ArrayList utilizaremos el método remove(n ), donde n es la posición en la cual está el elemento. El tratamiento es similar al caso del get(): el valor de n debe estar entre 0 y size()-1, caso contrario se producirá un error de ejecución. A diferencia del get(), remove() extrae el elemento de la posición, y si éste no era el último, su lugar será ocupado por el siguiente elemento (y así hasta el final), acortando el tamaño de la estructura en 1.
Por ejemplo, para extraer el primer elemento de la colección haremos:

```java
Objeto elemento = coleccion.remove(0);

coleccion.remove(0);
```

La diferencia entre estos dos casos es que mientras el primero guarda el elemento removido en una variable auxiliar para su uso posterior, el segundo lo descarta inmediatamente y ya no tendremos acceso al mismo.
Pero sacar un elemento de la colección, como vimos más arriba, tiene algunas consecuencias impensadas, algunas de las cuales trataremos más adelante en esta misma guía.

<a id="alg21"></a>
### **Recorrer el ArrayList completo con for-each**

El ciclo conocido como for-each es una variante del for tradicional que, en vez de utilizar un valor índice para iterar una determinada cantidad de veces, utiliza un iterador implícito para visitar en cada ciclo cada los elementos cargados en la lista, de a uno por vez, del primero al último elemento. Para eso necesita una variable local en la cual guardará temporalmente la referencia al elemento visitado.
La estructura del for-each es la que sigue:

```java
for (Clase elementoAuxiliar : coleccion) {
	proceso(elementoAuxiliar);
}
```

En el ejemplo, proceso() deberá reemplazarse por lo que querramos hacer con el elemento visitado. Por ejemplo, para mostrar el nombre y el número de DNI de cada persona guardada en la colección, haríamos:

```java
for (Persona persona : personas){
	System.out.println(persona.getNombre());
	System.out.println(persona.getDocumento());
}
```

Este ejemplo podría leerse como “para cada persona que esté en la colección de personas, mostrar el nombre y el número de documento”. Esto hará que en cada iteración (en cada vuelta del ciclo) la variable persona guarde temporalmente, una a una, cada persona que esté en la estructura, comenzando con la primera de todas y hasta que no haya más. La variable persona tendrá asignada en cada ciclo, entonces, el objeto de la colección que se está visitando en ese momento.

<a id="alg22"></a>
### **Buscar un elemento en la colección**

Utilizar el ciclo for-each es muy fácil y cómodo, pero no tiene una manera natural de abandonar el recorrido por la colección sin recorrerlo por completo. El inconveniente de esto es que si estamos buscando un elemento específico y ya lo encontramos, o si ya sabemos que no lo encontraremos, seguiríamos recorriendo la estructura hasta el final innecesariamente.
Hay formas de recorrer la estructura parcialmente. Una de ellas es utilizando
explícitamente un iterador, la cual probablemente sea la forma más conocida de
hacerlo. Pero trabajar con iteradores requiere de cierto cuidado y tener en cuenta algunos conceptos que dejaremos para más adelante.
Entonces nos queda una forma de recorrer la estructura parcialmente sin
necesidad de hacerlo por completo: aprovechando la capacidad de acceder a un
elemento determinado con get(). Por ejemplo, si necesitamos ubicar una persona determinada de la lista, podríamos hacer lo siguiente:

```java
// Búsqueda de la persona por nro de documento.
// creamos una variable auxiliar donde dejaremos
// el elemento buscado, si lo encontramos.
Persona personaBuscada = null;
int indice = 0;
// buscamos mientras no hayamos llegado al final
// de la estructura y no hayamos encontrado el
// elemento que estamos buscando.
while (indice < personas.size() && personaBuscada == null) {
	if (personas.get(indice).getDocumento() == docBuscado) {
	// si la encontramos, la asignamos al auxiliar
		personaBuscada = personas.get(indice);
	} else {
		// incrementamos el índice para
		// pasar al siguiente elemento
		indice++;
	}
}
```

El ejemplo anterior utilizará el ciclo while para recorrer la estructura mientras haga falta. El if interno, como está expresado en los comentarios, cumple dos tareas. La primera es asignar el elemento al auxiliar cuando es el que buscamos. La segunda, es darnos la posibilidad de intentar con el siguiente, a ver si es el que queremos. El incremento de índice puede hacerse también fuera del if (no en el else), aunque en ese caso perdería la posición donde encontró el elemento. De esta forma, guarda también la posición y no incremente el índice sin necesidad.

<a id="alg23"></a>
### **Remover algunos de los elementos del ArrayList**

Un tratamiento similar debemos aplicar cuando queremos extraer algunos elementos de la colección, pero no todos. El tema, en este caso, pasa porque al remover un elemento determinado, los posteriores se adelantan en una posición. Esto hace que al incrementar el valor del índice inmediatamente después de extraer el elemento, como todos los elementos posteriores se movieron para adelante una posición, en la posición que acabamos de abandonar ha quedado, si existe, un elemento que no hemos visitado. Para que esto no suceda, sólo debemos avanzar cuando el elemento recién visitado no haya sido extraído. Si lo hemos extraído, nos quedaremos en esa posición esperando a que los  elementos se reacomoden (que todos los posteriores ocupen su nuevo lugar) y, así, no perder el nuevo elemento que cayó en la posición donde estamos parados.
Veamos el siguiente ejemplo: supongamos que tenemos una colección de números con los valores 1, 7, 4, 9, 17, 22. No es necesario que estén ordenados. Lo que intentaremos es dejar sólo los números impares, eliminando los pares:

```java
// Eliminando todos los números pares de la colección.
int indice = 0;
// buscamos mientras no hayamos llegado al final
// de la estructura.
while (indice < numeros.size()) {
	if (numeros.get(indice) % 2 == 0) {
	// si es par lo quitamos
		numeros.remove(indice);
	} else {
		// incrementamos el índice para
		// pasar al siguiente elemento
		indice++;
	}
}
```

Así, recorreremos la colección de números hasta llegar al 4 (índice=2, recordemos que el primero tiene índice=0). Entonces, lo extraeremos, y todos los elementos posteriores se adelantarán un lugar. La colección, entonces, queda así: 1, 7, 9, 17, 22

Nosotros seguiremos parados en la posición 2, donde ahora, en vez del 4 que extrajimos, está el 9. Gracias a que no avanzamos, en la nueva iteración del ciclo (donde podría haber encontrado un nuevo número par) trataremos el 9, luego el 17 y así hasta llegar al 22. Aquí también nos detendremos a extraer el número y no incrementaremos, pero la lista habrá perdido un nuevo elemento (el 22), quedando entonces sólo con 4 elementos (1, 7, 9, 17). Como el ciclo sólo itera mientras el índice sea menor a la cantidad de elementos de la colección, saldremos y la lista quedará solamente con los números impares.

<a id="alg24"></a>
### **Creando colecciones como atributo de una clase**

Supongamos que tenemos la clase Club, y que el club mantiene una lista de sus socios.
Para esto, crearemos el atributo privado socios, que será un ArrayList de elemento de clase Socio. Si bien podemos instanciar aquí la colección, sólo la declararemos y le asignaremos el valor null para que la colección sea creada explícitamente en el constructor de la clase Club, pues consideramos que es el mejor lugar para hacerlo:

```java
public class Club {
	private ArrayList<Socio> socios = null;
	public Club() {
		this.socios = new ArrayList<Socio>();
	}
	public void agregarSocio(Socio socio) {
		socios.add(socio);
	}
	public void agregarSocio(String nombre) {
		socios.add(new Socio(nombre));
	}
}
```

También podemos ver dos métodos distintos para agregar socios, el primero pasándole directamente un objeto de la clase Socio, y el segundo que sólo recibe el nombre del nuevo socio, que será instanciado y agregado en el momento.
¿Y qué deberíamos hacer para dar de baja un socio? ¿Cómo hacemos para devolver la instancia de socio que queremos eliminar sin exponer la colección completa?

```java
public Socio darDeBaja(int numero) {
	Socio socio = null;
	int indice = 0;
	while (indice < socios.size() && socio == null) {
		if (socios.get(indice).getNumero() == numero) {
			socio = socios.get(indice);
		} else {
			indice++;
		}
	}
	return socio;
}
```

Así devolvemos null o el socio encontrado, que ya ha sido removido de la colección, para que desde donde han llamado a la rutina se procese la instancia de la manera que se desee (por ejemplo, para mostrar los datos del socio dado de baja).

<a id="alg25"></a>
### **Devolver una colección secundaria**

Siguiendo con el ejemplo anterior, supongamos que queremos devolver una colección con todos los socios vitalicios del club. Para eso podríamos hacer algo como lo que sigue:

```java
public ArrayList<Socio> obtenerVitalicios() {
	ArrayList<Socio> vitalicios = new ArrayList<Socio>();
	for (Socio s: socios) {
		if (s.esVitalicio()) {
			vitalicios.add(s);
		}
	}
	return vitalicios;
}
```

En este caso agregará a la colección vitalicios (creada como variable local) todos aquellos socios que cumplan con la condición de ser vitalicios. Pero, ¿qué pasará, entonces, con la lista de socios principal, donde estaban los estos socios, ahora en la lista de socios vitalicios?
No pasará nada: todos los socios estarán en la lista principal, y aquellos que cumplan con lo condición deseada, además, estarán en esta lista secundaria. Cada socio vitalicio estará tanto en la lista secundaria como en la principal, porque en ambas se guarda la referencia al objeto de clase Socio en cuestión. En caso de eliminar el elemento de una de las listas, seguirá vivo en la otra. Esto puede no ser algo deseable, pero es algo que se tratará en otra oportunidad.

<a id="alg26"></a>
### Qué es un "array-like" en Javascript?

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
### **Cuales son las funciones array de JavaScript?**

```jsx
// Agrega al final
[1,2,3].push(4) // [1,2,3,4]

// Quita y devuelve el último elemento
[1,2,3].pop() // [1,2]

// Quita y devuelve el primer elemento
[1,2,3].shift() // [2,3]

// Agrega al principio
[1,2,3].unshift(0) // [0,1,2,3]

//  Combina dos o más arreglos y devuelve un nuevo arreglo.
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

<a id="alg28"></a>
### Funcion .sort()

`.sort()` es una funcion que viene en Javascript. Funciona bien con numeros simples, pero no con numeros complejos como, por ejemplo, 10.

```javascript
[2,3,1].sort() => [1,2,3];
[2,10,3].sort() => [10, 2, 3];
```

Esto es porque esta funcion primero conviene los numeros a String y los ordena alfabeticamente. Es por eso que es necesario usar una funcion de callback.

```javascript
const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  });
```

Esta funcion devuelve un numero. El mismo determina lo siguiente:
- Si el numero es negativo, acomoda a antes que b.
- Si es positivo, b va antes que a
- Si es cero, no cambia nada

<a id="alg29"></a>
### **Set() en Javascript** (HashSet)

Es una estructura de datos que solo permite valores unicos. Si paso un array a un set, va a eliminar todos los valores duplicados.

* `new Set()` -> Crea el set nuevo, si es desde un array, elimina duplicados
* `Add() `
* `Delete()`
* `Has()` -> Devuelve true o false si el valor ya existe
* `clear() `-> Remover todos los elementos del set
* `Values()` -> devuelve un iterator con todos los valores
* `forEach()`
* `keys() `-> mismo con values
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
### HashTables (.Map)

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

<a id="alg31"></a>
### Linked Lists

Es una estructura de datos que representa una secuencia de nodos. 

* Es una lista enlazada simple, un nodo apunta al siguiente.
* Doble, el nodo apunta al siguiente y al anterior nodo. 

Los nodos almacenan cualquier tipo de informacion

```java
public class Node {
  // Referencia al nodo siguiente
	public Node next;
  // Valor del nodo en este caso int
	public int value;

	public Node(int value) {
		this.value = value;
	}
}
```

Sus operaciones mas comunes son:

* **Insercion al final de la lista**: Se obtiene el nodo primero de la lista (head), hasta llegar a uno que no tenga un nodo siguiente, significa que es el ultimo. Ahi inserto su referencia next al nuevo nodo, y este nuevo nodo, sin referencia a next
* **Eliminar un nodo**: Si es el head, solo se mueve la referencia a head al nodo siguiente. Para cualquier otro nodo, simplemente cambio las referencias al mismo en next (`node.next = node.next.next`)

Sus ventajas son:

* Capacidad de insertar un nodo en cualquier posicion de la lista de manera directa, sin mover nada. Solo cambio las referencias de los nodos.
* Se puede hacer referencia solo al valor

Sus inconvenientes son:

* El acceso a un item aleatorio es complicado. Se deben recorrer todos los nodos hasta llegar a donde queremos, esto es ineficiente. 

```java
public class SingleLinkedList {
  public Node head; // El primer nodo de todos
  
  public void agregarAlFinal(int value) {
    // Si es el primer elemento de todos
    if (head == null) {
      head = new Node(value);
      return;
    }
    
    Node current = head;
    // Mientras no encuentre un nodo sin referencia next (el ultimo)
    while (current.next != null) {
      current = current.next;
    }
    
    current.next = new Node(value);
  }
  
  public void eliminarNodo(int value) {
    // No hay elementos a eliminar porque no hay lista
    if (head == null) return;
    
    if (head.value == value) {
      // Si el elemento a borrar es el head, paso el head al segundo elemento de la lista
      head = head.next;
      return;
    }
    
    Node current = head;
    while(current.next != null) {
      if (current.next.value == value) {
        current.next = current.next.next;
        return
      }
      
      current = current.next;
    }
  }
  
  public void print() {
    if (head == null) return;
    
    Node current = head;
    while (current.next != null) {
      System.out.println(current.value);
      current = current.next;
    }
  }
}
```

<a id="alg32"></a>
#### ¿Cuales son los beneficios de un Linked List sobre un Array?

Un Array es una estructura de datos que almacena elementos de forma contigua en la memoria. Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria.

Consideremos un escenario donde debemos guardar mucha data en un array, pero, la memoria para guardar esa data no esta disponible de forma continua, en ese caso, no podemos usar un Array. 

En un Linked List, como cada nodo esta conectado con un link, no es necesario que la memoria sea continua. 

<a id="alg33"></a>
### ¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?

Un Singly Linked List se tienen links derechos, pero no podemos ir para atrás ya que siempre apuntan al siguiente. El DLL posee en cada nodo 3 campos, uno que apunta al nodo anterior, otro al siguiente. 

Se puede reconocer cuando un nodo es el primero ya que su link anterior es Nulo, lo mismo con el último. Es mas eficiente acceder a los elementos en un DLL

<a id="alg34"></a>
### ¿Cual es la diferencia entre un Linked List y un Doubly Linked List?

Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria. Un Doubly Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria, pero cada nodo tiene un link al nodo anterior y al siguiente.

<a id="alg35"></a>
### Generics

Cada tipo primitivo (int, boolean, float..) tiene su clase hermana. Las clases siempre empiezan en mayus, los minuscula son llamados clases envoltorio.

```html

Integer --> int
Boolean --> boolean
Float --> float
Character --> char

edades.add(45) == edades.add(new Integer(45));
```

Los ArrayList reconocen el tipo de dato que evaluan <String> / <Integer> por los **Generics** 
que ya vienen con java.

<a id="alg36"></a>
### Estructuras de Datos

Manera de estructurar datos, Array, ArrayList, Pila, Cola..

Por ejemplo, un sorteador posee las sig operaciones:

- Sortear elemento
- Agregar un elemento --> En un ArrayList. Con **programacion generica** 
no se que tipo voy a recibir, lo voy a saber cuando me lo mandan. (public class Sorteador<T>, private ArrayList<T> elementos , public void agregarElemento(T elemento){}), se trabaja todo con T (puede tener cualquier otro nombre).
- Esta vacio?

Definimos el tipo del sorteador cuando lo instanciamos para usarlo. Sorteador solo sabe como realiza sus metodos.

#### Agregar muchos elementos a la vez

```java
public void agregar (T[] elementos){
  this.elementos.addAll(Arrays.asList(elementos));
       }
```

También puedo usar un foreach.

#### Instancio mi Sorteador

```java
Sorteador<String> nombres = new Sorteador<>();
```

#### Hacer que mi sorteador sea iterable

```java
public class Sorteador<T> implements Iterable<T>
```

Implementando así el metodo propio de iterable que es iterator(), ya que es una interfaz

```java
@Override
public Iterator<T> iterator(){
return new IteratorSorteador();
}

private class IteratorSorteador implements Iterator<T>{
    @Override
    public boolean hasNext(){
        return !estaVacio();
    }

    @Override
    public T next(){
        return proximoSorteado();
    }
}
```

<a id="alg37"></a>
### Qué son las Pilas y Colas?

Un Tipo de dato abstracto (TDA) es una estructura que integra un conjunto de datos (elementos) con un grupo de operaciones permitidas específicas que determinan la forma en la cual esos elementos son manipulados.

Cada TDA provee de una interfaz a través de la cual podemos realizar las operaciones permitidas, abstrayéndose de cómo estas están implementadas. Esto quiere decir que un mismo TDA puede ser implementado utilizando distintas estructuras de datos internas, pero proveyendo siempre la misma funcionalidad a través de su interfaz (API).

Como primeros ejemplos les mostraremos aquí un par de implementaciones de Pilas y Colas, las que serán implementadas usando ArrayList y Nodos, aunque es posible realizar otras implementaciones, como por ejemplo con Arrays. Elegimos implementar estas porque ninguna de las dos limita *por naturaleza* la cantidad de elementos que se pueden agregar, aunque podríamos crear pilas y colas con un máximo de elementos sin inconveniente.

Respecto a estas implementaciones, y dado que la funcionalidad propia de estas estructura va más allá del tipo elemento contenido (en cierta forma podemos decir que a cada uno de estos TDA no le importa el tipo de información que guarda) todas las implementaciones que presentamos hacen uso de *Generics* pues el *comportamiento* de ambas estructuras tiene que ver con el orden en el cual se puede acceder, agregar y quitar un elemento:

- Las PIlas son estructuras LIFO (Last In, First Out), donde el último elemento que se agrega es el primero que se sacará.
- Las Colas son estructuras FIFO (First In, First Out), donde los elementos se sacan en el mismo orden que fueron agregados.

Un detalle que tienen en común ambas estructuras es que **no permiten**
 acceder a ningún otro elemento contenido en el TDA. no es posible buscar ni elegir otro elemento que no sea el primero que está disponible para su extracción

<a id="alg38"></a>
### Colas

El primer par de implementaciones que mostramos son las pertenecientes al TDA **`Cola<*TipoElemento*>`** donde, al igual que se hace con ArrayList, *TipoElemento* indica qué clase de elemento podrá contener (puede ser tanto una *clase* como una *interfaz*).

Se puede ver que ambas implementaciones coinciden en el cumplimiento de la interfaz. Puede ser que la implementación con ArrayList sea más simple, pero no olvidemos el trabajo que hace el propio ArrayList en su manejo interno de su contenido, Así, lo único que tendremos que hacer siempre es agregar los nuevos elementos al final (usando el método *`add()`* de ArrayList) y siempre sacando el primer elemento (usando `remove(0)` también del ArrayList). También podemos transferir el valor del método *`isEmpty()`* de ArrayList al propio método *`isEmpty()`* de la cola).

La segunda implementación, basada en nodos, puede parecer más complicada, pero en cuanto a su funcionamiento real es más simple que la anterior pues el trabajo con nodos es más eficiente. Por ejemplo, con esta implementación no se produce el desplazamiento interno de todos los elementos del ArrayList cuando se saca el primer elemento.

![Cola](src/Cola1.png)

<a id="alg39"></a>
### Pilas

Veamos ahora las implementaciones de **`Pila<*TipoElemento*>`**

La implementación de **`Pila<*TipoElemento*>`** es extremadamente similar, aunque los nombres para los métodos *`add()`*, *`remove()`* y *`get()`* suelen encontrarse como *`push()`*, *`pop()`* y *`peek()`*, respectivamente, y éstos son los nombres que elegimos para diferenciar claramente la Pila de la Cola:

![Pila](src/Pila1.png)

<a id="alg40"></a>
### Nodo versus dato

Un detalle a tener en cuenta en cuanto a la implementación con nodos es que no debemos confundir el ***nodo*** con el ***dato***: mientras que este último es el *elemento* que se agrega, mira o quita, el primero es su *contenedor* circunstancial y lo guarda en su interior. Por otra parte, los nodos nunca son accesibles a través de la interfaz del TDA y están encapsulados (**composición**). Por lo tanto, así como en la implementación con ArrayList no podemos acceder al mismo, tampoco podemos acceder a la cadena de nodos. Para quien usa el TDA, la implementación es completamente *transparente*.

<a id="alg41"></a>
### Uso de Pilas y Colas

Para utilizar las estructuras haremos algo muy parecido a lo que hacemos con ArrayList: las declararemos indicando el tipo de elemento contenido dentro de los paréntesis agudos. Pero a diferencia de cuando usamos ArrayList, aquí estamos declarando las estructuras usando interfaces, y con éstas no se pueden crear instancias pues no están implementadas. Por eso, para poder crear alguna instancia de cualquier TDA deberemos elegir alguna de sus implementaciones

Por ejemplo podríamos elegir las implementaciones con Nodos y hacer:

```javascript
Pila<Caja> pilaDeCajas = new PilaNodos<>();
Cola<Persona> filaDePasajeros = new ColaNodos<>();
```

Para agregar una caja en la pilaDeCajas haremos:

```javascript
pilaDeCajas.push(new Caja());
```

Y para agregar una persona a la fila…

```javascript
filaDePasajeros.add(new Persona());
```

Para ver los elementos disponibles haremos:

```javascript
System.out.println(“Caja visible: “ + pilaDeCajas.peek());
System.out.println(“Primera persona en la fila: “ + filaDePasajeros.get());
```

Cabe aclarar que ninguna de estas dos operaciones modifica el estado de las estructuras (no agrega ni quita ningún elemento, simplemente muestran el único que se puede *ver* en cada caso).

```javascript
System.out.println(“Caja visible: “ + pilaDeCajas.pop());
System.out.println(“Primera persona en la fila: “ + filaDePasajeros.remove());
```

Quitan el primer elemento disponible en cada estructura, dejando ambas estructuras vacías pues las dos tenían un único elemento cada una. Ahora el método *isEmpty()* de ambas devolverá *true*

<a id="alg42"></a>
### Arboles 

Es una estructura donde un nodo tiene un solo padre y muchos hijos. Siempre hay una raiz. 
Es excelente para cuando queremos insertar conjuntos de datos ordenados o para las búsquedas. 

```java
public class Node {
  public int value;
  public Node[] hijos;
  
  // Puede ser cualquier tipo de dato, no solo int
  public Node(int value) {
    this.value = value;
  }
}
```

<a id="alg43"></a>
### Qué es un Binary Tree?

Un arbol en donde cada nodo debe tener como MAXIMO 2 hijos.

<a id="alg44"></a>
### Qué es un Binary Search Tree?

Cada nodo puede tener MAXIMO 2 hijos, y cada descendiente del lado izquierdo debe tener un valor menor o igual al padre y los de la derecha deben tener un valor mayor o igual al padre.

El mismo tiene las propiedades de:

- Cada hijo izquierdo tiene un valor mas pequeño que su padre
- Cada hijo derecho tiene un valor mas grande que su padre
- Cada nodo puede tener hasta dos hijos.

![Algoritmo de búsqueda binaria](src/log3.png)

```jsx
function TreeNode(val, left, right) {
     this.val = val
     this.left = left
     this.right = right
 }
```

<a id="alg45"></a>
#### ¿Porque se dice que buscar un nodo en un BST es mas eficiente que en un Simple Binary Tree?

Porque, por la particularidad que tienen los hijos de los nodos de un BST (que uno es mas chico que el otro), se puede seguir el recorrido mas facilmente. Hace que la busqueda sea mucha mas eficiente.

<a id="alg46"></a>
### Complete Binary Tree

En este arbol todos los niveles estan completos excepto por el ultimo. Si el ultimo nivel no esta completo, debe estar ocupado de izquierda a derecha. Por ejemplo, todos los nodos tienen 2 hijos excepto el ultimo que tiene uno solo. 

Es un arbol 100% balanceado. 

<a id="alg47"></a>
### Maneras de recorrer un Arbol

![Tree Traversal: Inorder, Preorder, Postorder, and Level-order](https://assets-global.website-files.com/5d0dc87aac109e1ffdbe379c/60e18e09daeb6db6f4995305_-Vsv_RLYEukjbDMgKxKJpxTnA246o-X1OjUPkl5HvnSiR-dFU4w5qKNaUtw-rq8wD4vMTGxFKtjvKCt7Uthmidpl_ajqRpVqgAH57N1HTpQ5MGBE4HCvE0dq7gTeM4-JtFLkQShX.png)

<a id="alg48"></a>
### In-Order Traversal

Rama izquierda del nodo, a continuación el propio nodo y después la rama derecha. Se empieza por la raiz

<a id="alg49"></a>
### Pre-order traversal

Primero el nodo padre, despues izquierda y luego derecha

<a id="alg50"></a>
### Recorrido de un Binary Tree

```javascript
// Definición de la clase TreeNode para un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Función recursiva para recorrer un árbol binario en orden (in-order traversal)
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Visita el nodo izquierdo
        console.log(node.value);    // Imprime el valor del nodo actual
        inOrderTraversal(node.right);// Visita el nodo derecho
    }
}

// Crear un árbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Ejemplo de uso
console.log("Recorrido in-order del árbol binario:");
inOrderTraversal(root);

```

<a id="alg51"></a>
### Post-order traversal

Primero la rama izquierda, luego la derecha y luego el padre

<a id="alg52"></a>
### Recursividad 

Son problemas que se pueden dividir en subproblemas. Por ejemplo: Calcula el elemento, obten los primero n elementos o un metodo que compute todos..

TODOS los algoritmos recursivos tienen una alternativa iterativa. Su complejidad espacial es `O(cantidad de llamadas)`. 

<a id="alg53"></a>
### Factorial

```javascript
// Función recursiva para calcular el factorial de un número
function factorial(n) {
    // Caso base: factorial de 0 es 1
    if (n === 0) {
        return 1;
    }
    // Caso recursivo: n * factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso
console.log(factorial(5)); // Output: 120

```

<a id="alg54"></a>
### Heaps

Un heap, también conocido como montículo, es una estructura de datos que se utiliza para mantener un conjunto de elementos donde cada elemento tiene una relación de orden con respecto a los demás elementos. La propiedad fundamental de un heap es que el elemento en la raíz (ya sea el más grande o el más pequeño, dependiendo del tipo de heap) siempre cumple con esta relación de orden con respecto a sus hijos.

Hay dos tipos principales de heaps:

1. **Max-Heap**: En un max-heap, el valor de cada nodo es mayor o igual que los valores de sus hijos. Esto significa que el elemento en la raíz es el más grande de todos los elementos en el heap.
2. **Min-Heap**: En un min-heap, el valor de cada nodo es menor o igual que los valores de sus hijos. Esto significa que el elemento en la raíz es el más pequeño de todos los elementos en el heap.

Los heaps se utilizan comúnmente para implementar las siguientes estructuras de datos y algoritmos:

- Cola de prioridad: Se puede utilizar un min-heap o un max-heap para implementar una cola de prioridad, donde los elementos se insertan con una prioridad y se eliminan de acuerdo con esa prioridad.
- Algoritmos de ordenación eficientes: Algunos algoritmos de ordenación, como heapsort, utilizan heaps para ordenar eficientemente un conjunto de elementos.
- Algoritmos de búsqueda eficientes: Algunos algoritmos de búsqueda, como el algoritmo de Dijkstra para encontrar el camino más corto en un grafo, utilizan colas de prioridad basadas en heaps para buscar eficientemente el siguiente nodo a visitar.

Los heaps proporcionan operaciones eficientes para insertar nuevos elementos, eliminar el elemento mínimo o máximo, y encontrar el elemento mínimo o máximo. Estas operaciones tienen una complejidad de tiempo logarítmica en el peor de los casos, lo que hace que los heaps sean una estructura de datos muy eficiente para ciertas aplicaciones.

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Función para obtener el índice del padre de un nodo en el heap
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Función para obtener el índice del hijo izquierdo de un nodo en el heap
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    // Función para obtener el índice del hijo derecho de un nodo en el heap
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    // Función para intercambiar dos elementos en el heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Función para insertar un nuevo elemento en el heap
    insert(value) {
        // Agregar el nuevo elemento al final del heap
        this.heap.push(value);
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyUp();
    }

    // Función para reajustar el heap hacia arriba (hacia la raíz)
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.parentIndex(currentIndex);
            // Si el valor del nodo actual es menor que el valor del padre, intercambiamos los nodos
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break; // Si el valor del nodo actual es mayor o igual al valor del padre, el heap está en orden
            }
        }
    }

    // Función para extraer el elemento mínimo (raíz) del heap
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const minValue = this.heap[0];
        // Reemplazar la raíz con el último elemento del heap
        this.heap[0] = this.heap.pop();
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyDown();
        return minValue;
    }

    // Función para reajustar el heap hacia abajo (hacia las hojas)
    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = this.leftChildIndex(currentIndex);
            const rightChildIndex = this.rightChildIndex(currentIndex);
            let smallestIndex = currentIndex;

            // Encontrar el índice del hijo con el valor más pequeño
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            // Si el valor del nodo actual es mayor o igual que los valores de los hijos, el heap está en orden
            if (smallestIndex === currentIndex) {
                break;
            }

            // Si el valor del nodo actual es mayor que el valor del hijo más pequeño, intercambiamos los nodos
            this.swap(currentIndex, smallestIndex);
            currentIndex = smallestIndex;
        }
    }
}

// Ejemplo de uso de MinHeap
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(4);
console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4]

console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.heap); // Output: [2, 4, 3, 5]
```

<a id="alg55"></a>
### Metodos de Strings en Javascript

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
### Métodos de Objectos en Javascript

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