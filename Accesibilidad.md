<a name="acc-base"></a>

## [Accesibilidad](#acc)

| Introducción a la Accesibilidad |
|----------|
| [¿Qué es la accesibilidad web?](#acc1) |
| [¿Cuáles son sus beneficios?](#acc2) |
| [¿Qué significa A11y?](#acc3) |
|¿Qué leyes o normativas existen a nivel global relacionadas con la accesibilidad web?|
|¿Por qué es importante la accesibilidad web para las personas con discapacidades?|

| Fundamentos y Principios |
|----------|
| [¿De qué trata el Web Content Accessibility Guidelines (WCAG)?](#acc9) |
| [¿De qué tratan los principios POUR - Principios WCAG?](#acc10) |
|¿Cómo se aplica la regla de "suficiente tiempo para leer y usar el contenido" en el diseño web accesible?|
|¿Qué significa que una página web sea "perceptible, operable, comprensible y robusta"?|

| Herramientas |
|----------|
| [¿Cuáles son las herramientas más usadas en accesibilidad?](#acc4) |
| [¿Qué es un screen reader?](#acc5) |
|¿Qué herramientas específicas se utilizan para realizar auditorías de accesibilidad en un sitio web?|
|¿Cómo funciona un lector de pantalla y qué desafíos puede presentar a los diseñadores web?|

| Elementos Clave |
|----------|
| [¿Qué es el contraste de color?](#acc6) |
| [¿Qué es el texto alternativo?](#acc7) |
| [¿Qué es el teclado virtual?](#acc8) |
|¿Cómo puede el contraste de color impactar en la legibilidad del contenido para personas con deficiencia visual?|
|¿Qué buenas prácticas deben seguirse para escribir texto alternativo efectivo?|

| ARIA y Contenido Dinámico |
|----------|
| [¿Qué es ARIA - Accessible Rich Internet Applications?](#acc11) |
| [¿Cuándo es necesario utilizar ARIA?](#acc12) |
| [Contenido dinámico y accesibilidad](#acc13) |
| [Nombrar algunas ARIA existentes](#acc16) |
|¿Cuáles son las limitaciones de usar ARIA y por qué no siempre es la mejor solución para mejorar la accesibilidad?|
|¿Cómo se utiliza ARIA para mejorar la accesibilidad de contenido dinámico como menús o formularios interactivos?|

| Buenas Prácticas y Técnicas |
|----------|
| [Manejo de focus](#acc14) |
| [CSS accesible](#acc15) |
| [¿Qué prácticas conlleva tener un HTML accesible?](#acc17) |
| ¿Cómo influye el manejo adecuado del focus en la accesibilidad para usuarios
de teclado?|
|¿Qué reglas de CSS son esenciales para garantizar una experiencia accesible  en un sitio web?|

---

<a id="acc"></a>

# Accesibilidad

<a id="acc1"></a>

### **¿Qué es la accesibilidad web?**

[Volver al indice](#acc-base)

Es la práctica continua de asegurarnos de que todo lo que desarrollamos para la web se pueda usar, interpretar y operar por la mayor cantidad de personas posibles.

<a id="acc2"></a>

### **¿Cuáles son sus beneficios?**

[Volver al indice](#acc-base)

* Mejora la experiencia de usuario.
* Mejora el SEO.
* Aumenta el alcance de la audiencia, ya que hoy en día casi un 20% de la población mundial posee algún tipo de discapacidad.
* Reduce el riesgo de demandas legales, en algunos lugares es la ley, como en EE. UU., donde todos los productos y programas deben ser accesibles. En otros países hay normas o guías para esto mismo.
* Mejora la reputación de la marca.
* Mejora la usabilidad de nuestros proyectos.

<a id="acc3"></a>

### **¿Qué significa A11y?**

[Volver al indice](#acc-base)

Es una abreviación de la palabra "accessibility" y se utiliza para referirse a la accesibilidad web. La "A" y la "y" son las letras que comienzan y terminan la palabra, mientras que el "11" representa las 11 letras que hay en medio.

a|ccessibilit|y = a11y

<a id="acc4"></a>

### **¿Cuáles son las herramientas más usadas en accesibilidad?**

[Volver al indice](#acc-base)

* Screen Readers
* Braille Output devices
* Configuraciones propias del sistema operativo
* Navegadores con herramientas de accesibilidad

<a id="acc5"></a>

### **¿Qué es un Screen Reader?**

[Volver al indice](#acc-base)

Es un software que convierte el texto en voz o en braille. Es utilizado por personas ciegas o con baja visión para poder navegar por la web.

<a id="acc6"></a>

### **¿Qué es el contraste de color?**

[Volver al indice](#acc-base)

Es la diferencia entre el color del texto y el color del fondo. Un buen contraste es importante para que las personas con discapacidad visual puedan leer el contenido.

<a id="acc7"></a>

### **¿Qué es el texto alternativo?**

[Volver al indice](#acc-base)

Es una descripción alternativa que se le da a una imagen, para que las personas con discapacidad visual puedan entender de qué se trata la imagen.

<a id="acc8"></a>

### **¿Qué es el teclado virtual?**

[Volver al indice](#acc-base)

Es una herramienta que permite a las personas con discapacidad motriz o que no pueden utilizar un teclado físico, poder navegar por la web.

<a id="acc9"></a>

### **¿De qué trata el Web Content Accessibility Guidelines (WCAG)?**

[Volver al indice](#acc-base)

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

[Volver al indice](#acc-base)

POUR significa Perceivable, Operable, Understandable y Robust, la idea es aplicar los 4.

* **Perceivable (Perceptible)**: Todos los usuarios deberían poder percibir la información importante en la pantalla, para cumplir este se deben agregar alt a las imágenes, agregar transcritos a videos y/o audios y no apoyarnos 100% sobre el color de las cosas.
* **Operable**: La interfaz debería poder ser navegable por teclado o por pantalla táctil, también que los reproductores tengan todos sus botones accesibles y que los usuarios tengan el tiempo necesario para poder rellenar un formulario.
* **Understandable**: Todo el contenido de la página debe poder ser entendido por cualquiera. Si un lector de pantalla estuviera leyendo nuestra página, ¿tendría sentido lo que está leyendo? Se debe escribir simple, que la navegación sea predecible y que los mensajes de error sean explicativos.
* **Robust**: Poder soportar las tecnologías de accesibilidad disponibles. ¿Funciona en todos los navegadores y/o sistemas operativos? ¿También en distintas formas de pantalla de celular? Se debe poder usar desde cualquier dispositivo de cualquier tamaño.

<a id="acc11"></a>

### **¿Qué es ARIA - Accessible Rich Internet Applications?**

[Volver al indice](#acc-base)

Fue desarrollado por WAI (Web Accessibility Initiative), es un set de atributos que se pueden agregar a los elementos HTML para aumentar la accesibilidad.
No cambia la apariencia ni el comportamiento de los elementos, esta diferencia solo puede ser notada por los usuarios con discapacidades. Es responsabilidad del Dev hacer que el sitio sea lo más accesible posible.

Los elementos de ARIA son:

* **role**: Define lo que un elemento hace en la página.
`<div role="button">Self-destruct</div>`
* **Propiedades** normales como `aria-describedby` y el ID definen las características y relaciones de los elementos.

```jsx
<div role="button" aria-describedby="more-info">Self-destruct</div>

<div id="more-info">This page will self-destruct in 10 seconds.</div>
```

* **States/values** definen las condiciones actuales y la data asociada con el elemento.

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

[Volver al indice](#acc-base)

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

* Usar `<form>` o `<section>` sin el atributo name es un 😡 definitivo

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

[Volver al indice](#acc-base)

Una de las funcionalidades de JS es la habilidad de agregar código HTML de manera dinámica. Por ejemplo, si quiero mostrar un mensaje que le avise al usuario que se loggeo correctamente:

* Agrego el HTML:

```html
document.querySelector("#banner").innerHTML = '<p>You are now logged in</p>';
```

* Agrego el CSS:

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

[Volver al indice](#acc-base)

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

[Volver al indice](#acc-base)

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

* Cuando hablamos del **contraste** de una página, las “reglas” de la web accesibility recomiendan al menos 4.5:1 radio para un texto normal, el cual es calculado comparando la luminancia relativa de dos colores. Hay varias herramientas online para hacer esta comparación. Es necesario que haya un contraste considerable entre el fondo y el color de texto para que personas con problemas visuales puedan leer correctamente la página.

Hay varios tipos de problemas de visión con respecto a los colores, el más común, es con el verde, también hay varias herramientas en internet que ayudan a simular el cómo se vería tu web si lo viera alguien con ciertos problemas visuales.

<a id="acc16"></a>

### **Que practicas conlleva tener un HTML Accesible?**

[Volver al indice](#acc-base)

* Se deben poner captions en las tables

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

* Utilizar correctamente los headings y con el orden correcto de prioridad

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

* Si se trata de una SPA se debe actualizar el `<title>` o `document.title` de la página para informar al usuario de donde está parado

```jsx
😡 <title>The Food Channel | Outrageous Pumpkins | Season 3 </title>
✅ <title>Season 3 | Outrageous Pumpkins | The Food Channel</title>
```

* Agregar el atributo lang al HTML, esto para que el Screen reader reconozca con qué acento leer todo

```jsx
😡 <html>...</html>
✅ <html lang="en">...</html>
```

* Si el contenido de la página está definido en un lang en particular, pero cierta parte de la misma está en otro idioma, esto se puede aclarar

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

* Agregar `title` y la propiedad de scrolling al mismo, esto para que las personas con baja visión puedan saltear este iframe que probablemente no puedan ver.

```jsx
😡 <iframe src="https://www.youtube.com/embed/3obixhGZ5ds"></iframe>
✅ <iframe title="Google Pixel - Lizzo in Real Tone"
  src="https://www.youtube.com/embed/3obixhGZ5ds"
  scrolling="auto">
</iframe>
```

* Se recomienda, sí se tiene en un formulario una pregunta en el cual, hay varios **radiobutton** que responden a la misma, el envolver está en un **fieldset**, que ayuda a englobar tanto las opciones como las posibles respuestas, siendo la consigna o la pregunta el **legend** del fieldset

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

* También se recomienda englobar las fechas y/o horas en un **datetime tag**

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

* Se recomienda también, sí se tiene una lista de links, que se englobe en un **nav** y se le ponga un **aria-label** para que el Screen Reader sepa que es una lista de links

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

[Volver al indice](#acc-base)

* `aria-expanded`: Se usa cuando un dropdown está expandido o no

```html
<button id="toggle" aria-expanded="false">
```

* `aria-pressed`: Se usa cuando un botón fue seleccionado o presionado

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

* `aria-hidden`: Se usa para esconder un elemento de la página

```html
<div aria-hidden="true"></div>
```

* `aria-label`: Se usa para darle un nombre a un elemento

```html
<button aria-label="Close"></button>
```

* `aria-describedby`: Se usa para describir un elemento

```html
<div id="more-info">This page will self-destruct in 10 seconds.</div>
<button aria-describedby="more-info">Self-destruct</button>
```

* `aria-labelledby`: Se usa para referenciar un elemento por su ID

```html
<h1 id="title">My title</h1>
<div aria-labelledby="title">...</div>
```

* `aria-controls`: Se usa para referenciar un elemento por su ID

```html
<div id="menu">...</div>
<button aria-controls="menu">Open menu</button>
```

* `aria-live`: Se usa para anunciar cambios en la página

```html
<div aria-live="polite"></div>
```

* `aria-atomic`: Se usa para anunciar cambios en la página

```html
<div aria-atomic="true"></div>
```

* `aria-busy`: Se usa para anunciar cambios en la página

```html
<div aria-busy="true"></div>
```