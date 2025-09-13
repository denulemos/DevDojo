<a name="html-base"></a>

| HTML |
|----------|
| [¿Cuál es la diferencia entre h1, h2, etc.?](#html1) |
| [Vínculos Relativos en HTML](#html2) |
| [Vínculos Absolutos en HTML](#html3) |
| [¿Para qué es el Doctype?](#html4) |
| [Atributo placeholder para campos en HTML](#html5) |
| [Que es HTML Semantico? 💛](#html6) |
| [Que son los atributos de los elementos HTML?](#html7) |
| [Cuáles son las partes de un documento HTML?](#html8) |
| [Puedo escribir las etiquetas en mayúscula y minúscula?](#html9) |
| [Qué son los mapa de imagen?](#html10) |
| [Que es el tag DataList?](#html11) |

<a name="sty-base"></a>

| CSS |
|----------|
| [Cuál es la diferencia entre div y span?](#sty1) |
| [Qué es la Especificidad (Specificity) de CSS?](#sty2) 💛 |
|[Que es BEM?](#sty3) |
| [Como declaro variables en CSS?](#sty4) |
| [Pseudoclases](#sty5) |
|[¿Qué es el modelo de caja (Box Model) en CSS y cómo funciona?](#sty5-1)💛|

| SCSS |
|----------|
|[Qué es Sass?](#sty6) |
| [Cual es la diferencia entre .sass y scss?](#sty7) |
| [Sass reemplaza a CSS?](#sty8) |
| [Comentarios en Sass](#sty9) |
| [Variables en SASS](#sty10) |
| [Partials en SASS](#sty11) |
| [Imports en SASS](#sty12) |
| [Interpolacion en SASS](#sty13) |
| [Nesting en SASS](#sty14) |
| [Selectores en SASS](#sty15) |
| [Mixins en SASS](#sty16)  💛 |
| [Condicionales if-else en SASS](#sty17) |
| [Ciclos en SASS](#sty18) |
| [Funciones en SASS](#sty19) |
| [Extend/Inheritance en SASS](#sty20) |
| [Placeholder Selectors en SASS](#sty21) |

---

<a id="html1"></a>

## **¿Cuál es la diferencia entre h1, h2, etc.?**

[Volver al indice](#html-base)

Los elementos de encabezado h1 a h6 se utilizan para indicar la importancia del contenido que les sigue. Cuanto menor sea el número, mayor será la importancia, por lo que los elementos h2 tienen menos importancia que los elementos h1. Utiliza solo un elemento h1 por página y coloca los encabezados de menor importancia debajo de los de mayor importancia.

<a id="html2"></a>

### **Vínculos Relativos en HTML**

[Volver al indice](#html-base)

Los vínculos relativos son aquellos que permiten interconectar los archivos de nuestro sitio (internos, dentro de nuestro sitio o servidor).
Si por ejemplo quiero ir de mi archivo index a mi contacto.html lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="contacto.html" title="Contacto"> Contacto </a>
```

En el ejemplo anterior, hemos visto también cómo se ha agregado el atributo title, este es obligatorio por cuestiones de accesibilidad y también nos permite describir nuestros vínculos para hacer aparecer un etiqueta amarilla llamada tooltip con dicha información.
Si mi archivo contacto se encontrase dentro de una carpeta la ruta a marcar sería la siguiente:

```html
<!doctype html>

<title>Vinculo</title>
<a href="en/contacto.html" title="Contacto"> Contacto </a>
```

<a id="html3"></a>

### **Vínculos Absolutos en HTML**

[Volver al indice](#html-base)

Es la URL que dirige a un recurso en la web, por ejemplo, si quiero ir a google.com desde mi archivo index.html, lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="https://www.google.com" title="Contacto"> Contacto </a>
```

<a id="html4"></a>

### **¿Para qué es el Doctype?**

[Volver al indice](#html-base)

El doctype es una declaración que se utiliza en un documento HTML para informar al navegador web sobre la versión de HTML en la que está escrito el documento. El doctype debe ser la primera línea de un documento HTML y se utiliza para garantizar que el navegador web interprete el documento correctamente.

```html
<!DOCTYPE html>
```

<a id="html5"></a>

### **Atributo placeholder para campos en HTML**

[Volver al indice](#html-base)

El atributo placeholder me permite guiar al usuario con referencia lo que tiene que colocar dentro de nuestro campo. Por ejemplo:

```html
<label> Nombre <br> <input type=”text” placeholder=”Nombre Completo”> </label>
```

Esto indica al usuario que en ese campo va el nombre completo, o tambien se podria poner un ejemplo.

<a id="html6"></a>

### **Que es HTML Semantico?** 💛

[Volver al indice](#html-base)

Es el uso de etiquetas introducidas en HTML5 en vez de divs y span para la division de secciones en mi HTML.

```html
<header> </header>
<nav> </nav>
<main> </main>
<section> </section>
<article> </article>
<aside> </aside>
<footer> </footer>
```

Esto a nivel de renderizado no cambia nada, pero si hace que mi codigo sea mucho mas accesible. Los motores de busqueda pueden entender mejor el contenido de mi pagina, y los lectores de pantalla tambien.


<a id="html7"></a>

### **Que son los atributos de los elementos HTML?**

[Volver al indice](#html-base)

Los atributos HTML son palabras especiales utilizadas dentro de la etiqueta de apertura de un elemento para controlar el comportamiento del elemento. El atributo src en un elemento img especifica la URL de la imagen (dónde se encuentra la imagen).

`<img src="linkaimagen.com/fcc_secondary.svg">`

<a id="html8"></a>

### **Cuáles son las partes de un documento HTML?**

[Volver al indice](#rea-base)

Además de todo esto, un documento HTML ha de estar delimitado por la etiqueta HTML.
Dentro de este documento, podemos asimismo distinguir dos partes principales:

- La cabecera, delimitada por la etiqueta HEAD, donde colocaremos etiquetas de índole informativo, como por ejemplo el titulo de nuestra página. El contenido de la cabecera no suele aparecer en el cuerpo de la página, pero sirve a los navegadores y otros sistemas para encontrar información útil para entender y procesar el documento.
- El cuerpo, flanqueado por la etiqueta BODY, que será donde colocaremos nuestro texto e imágenes delimitados a su vez por otras etiquetas como las que hemos visto.

El resultado de un documento básico tiene la siguiente estructura:

```html
<html>
  <head>
    <title>Mi documento básico</title>
  </head>
<body>
  <p>Este es el cuerpo de mi primera página HTML</p>
  <p>Este segundo párrafo también forma parte del cuerpo</p>
</body>
</html>
```

<a id="html9"></a>

### **Puedo escribir las etiquetas en mayúscula y minúscula?**

[Volver al indice](#html-base)

En HTML las mayúsculas y minúsculas son indiferentes. Quiere decir que las etiquetas pueden ser escritas con cualquier tipo de combinación de mayúsculas y minúsculas. Resulta, sin embargo, aconsejable acostumbrarse a escribirlas en minúscula, ya que otras tecnologías que pueden c onvivir
con nuestro HTML (XML por ejemplo) no son tan permisivas y nunca viene mal hacernos a las buenas costumbres desde el principio, para evitar fallos triviales en un futuro.

<a id="html10"></a>

### **Qué son los mapa de imagen?**

[Volver al indice](#rea-base)

Aunque el uso de los mapas de imagen se ha reducido drásticamente en los últimos años, aún se utilizan en algunos sitios especializados. Muchas agencias de viaje y sitios relacionados utilizan mapas geográficos para
seleccionar el destino del viaje.

Un mapa de imagen permite definir diferentes zonas "pinchables" dentro de una imagen. El usuario puede clickear sobre cada una de las zonas definidas y cada una de ellas puede apuntar a una URL diferente.
Siguiendo el ejemplo anterior, una sola imagen que muestre un mapa de todos los continentes puede definir una zona diferente para cada continente. De esta forma, el usuario puede clickear sobre la zona correspondiente a cada continente para que el navegador muestre la página que contiene los viajes disponibles a ese destino.
Las zonas o regiones que se pueden definir en una imagen se crean mediante rectángulos, círculos y polígonos. Para crear un mapa de imagen, en primer lugar se inserta la imagen original mediante la etiqueta <img>. A continuación, se utiliza la etiqueta `<map>` para definir las zonas o regiones de la imagen. Cada zona se define mediante la etiqueta `<area>`.

<img width="197" alt="image" src="https://github.com/denulemos/denobible/assets/32619895/627950b8-7461-48b2-9846-5be8d3f355b0">

Ejemplo de imagen que incluye un mapa de imagen
Utilizando un círculo, dos rectángulos y un polígono se pueden definir fácilmente cuatro zonas clickeables en la imagen mediante el siguiente código HTML:

```jsx
<img src="imagen.gif" usemap="#mapa_zonas" />
<map name="mapa_zonas">
<area shape="rect" coords="20,25,84,113" href="rectangulo.html" />
<area shape="polygon" coords="90,25,162,26,163,96,89,25,90,24"
href="triangulo.html" /> <area shape="circle" coords="130,114,29"
href="circulo.html" />
area shape="rect" coords="19,156,170,211" [href="mailto:rectangulo@direccion.com](mailto:href=%22mailto:rectangulo@direccion.com)" />
<area shape="default" nohref="nohref" />
</map>
```

La verdad es que los mapas de imágenes son tediosos a veces de crear, y para eso contamos con generadores online por ejemplo:
https://www.image-maps.com/

<a id="html11"></a>

### **Que es el tag DataList?**

Se usa para proveer con un autocomplete a algunos elementos

```jsx
<form action="action_page.php" method="get">
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
  <option value="Edge"
  <option value="Firefox">
</datalist>
</form>
```

<a id="sty1"></a>

### **Cuál es la diferencia entre div y span?**

[Volver al indice](#sty-base)

La etiqueta span trabaja como contenedor de línea, no se puede ampliar para ocupar un párrafo, debe usarse para edicion de frases en parrafos, y div trabaja como contenedor de bloque, y puede expandirse.

![image](https://github.com/denulemos/denobible/assets/32619895/e5463d4a-0cee-45ff-862b-f872e139ba9c)

<a id="sty2"></a>

### **Qué es la Especificidad (Specificity) de CSS?** 💛

[Volver al indice](#sty-base)

Es como el navegador determina que propiedad de CSS se debe aplicar a un elemento si hay varios en juego o muchos selectores.

Va del mas alto al mas bajo en especificidad:

* Estilos inline (Se aplica siempre)
* IDs
* Clases, atributos y pseudo-clases
* Elementos y pseudo-elementos (Compite)

```css
section p {
    color: red;
}

// Se va a aplicar este, ya que es el mas reciente en aparecer, y tiene una especificidad mayor
.p1 {
    color: green;
}

-----
<section>
 <p class="p1">Hola</p>
</section>
```

<a id="sty3"></a>

### **Que es BEM?**

[Volver al indice](#sty-base)

BEM (Block Element Modifier) es una metodología para nombrar clases en HTML y CSS que facilita la escritura de código claro, estructurado y fácil de mantener. Su objetivo es dejar explícito qué representa cada clase y cómo se relaciona con la estructura del componente.

- **Bloque (Block):** Representa el componente principal o contenedor (por ejemplo, `header`).
- **Elemento (Element):** Es una parte del bloque que no tiene sentido por sí sola (por ejemplo, `header__title`).
- **Modificador (Modifier):** Indica una variación o estado del bloque o elemento (por ejemplo, `header__title--warning`).

**Ejemplo de nomenclatura BEM:**

```html
<header class="header">
  <h1 class="header__title header__title--warning">Título</h1>
</header>
```

Esto ayuda a evitar conflictos de estilos y hace que el código sea más predecible y escalable.

<a id="sty4"></a>

### **Como declaro variables en CSS?**

Puedes declarar variables en CSS utilizando la pseudo-clase `:root`, que representa el elemento raíz del documento. Así puedes definir variables globales que luego puedes reutilizar en todo tu CSS usando la función `var()`:

```css
:root {
  --color-3: #000000;
}

html, body {
  background-color: var(--color-3);
}
```

En este ejemplo, `--color-3` es una variable CSS que almacena el color negro, y luego se utiliza para establecer el color de fondo de la página. Las variables CSS ayudan a mantener tu código más limpio y fácil de mantener.

<a id="sty5"></a>

### **Pseudoclases**

[Volver al indice](#sty-base)

Si vemos los vínculos, tiene un color asignado que podemos cambiarlo por ejemplo si le pasamos el
mouse por arriba al elemento , eso lo haremos con lo que se llaman pseudo clases pero es necesario
trabajar de forma interna para poder hacerlo, por ejemplo

```html
<head>
 <style>
  a:hover {color: pink;}
 </style>
</head>
```

En el ejemplo anterior hemos dicho que los vínculos al pasarle el mouse por arriba se verán en otro color, por ejemplo en el caso anterior en pink.
Tenemos varias pseudo clases:

* a:hover => cuando pasamos el mouse por arriba del vínculo
* a:link => cuando aún no hemos visitado al vínculo
* a:visited => cuando hemos visitado al vínculo
* a:active => cuando le hacemos clic al vínculo

```css
a {color: white; text-decoration:none;}
a:hover {text-decoration:underline; }
```

<a id="sty5-1"></a>

### **¿Qué es el modelo de caja (Box Model) en CSS y cómo funciona?** 💛

[Volver al indice](#sty-base)

El modelo de caja (Box Model) en CSS es la forma en que se representan y se calculan las dimensiones de los elementos HTML en una página web. Cada elemento HTML se representa como una caja rectangular que consta de cuatro áreas principales: el contenido, el relleno, el borde y el margen.

- **Contenido (Content):** Es el área interior de la caja que contiene el contenido real del elemento, como texto, imágenes, etc.
- **Relleno (Padding):** Es el espacio entre el contenido y el borde de la caja. Se puede agregar relleno para aumentar el espacio entre el contenido y el borde.
- **Borde (Border):** Es el borde que rodea el contenido y el relleno de la caja. Se puede agregar un borde para darle un aspecto visual alrededor del contenido.
- **Margen (Margin):** Es el espacio entre el borde de la caja y los elementos adyacentes. Se puede agregar un margen para controlar el espacio entre los elementos en la página.

![box-model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

<a id="sty6"></a>

### **Qué es Sass?**

[Volver al indice](#sty-base)

Es un preprocesador que nos permite escribir codigo CSS de una forma mas dinamica, agregando sintaxis de un lenguaje de programacion, incluyendo variables, funciones, modulos y valores

Ayuda a tener un codigo modular, simple y escalable.

* Es completamente compatible con CSS
* Se puede escribir codigo mucho mas rapidamente
* Muchos framework actualmente estan construidos con sass
* Hay mucha documentacion

<a id="sty7"></a>

### **Cual es la diferencia entre .sass y scss?**

[Volver al indice](#sty-base)

**.sass** y **.scss** son dos sintaxis diferentes para escribir SASS:

- **.sass** (Sass Indented Syntax): Usa indentación (espacios o tabs) para definir los bloques de código, no utiliza llaves `{}` ni punto y coma `;`. Es más concisa y legible para quienes prefieren la sintaxis tipo Python.
  
  ```sass
  // Sintaxis .sass
  $color: red
  body
  background: $color
  ```

- **.scss** (Sassy CSS): Es una extensión de CSS, por lo que todo CSS válido también es SCSS válido. Usa llaves `{}` y punto y coma `;`, igual que CSS, pero permite todas las características avanzadas de SASS.
  
  ```scss
  // Sintaxis .scss
  $color: red;
  body {
  background: $color;
  }
  ```

**Resumen:**  
- `.sass` es más minimalista y depende de la indentación.  
- `.scss` es más familiar para quienes ya conocen CSS y es la sintaxis más utilizada actualmente.

Ambas sintaxis se compilan al mismo CSS final, la elección depende de tus preferencias personales o del equipo de trabajo.

<a id="sty8"></a>

### **Sass reemplaza a CSS?**

[Volver al indice](#sty-base)

No, es una herramienta para escribir CSS de forma mas rapida, esto se compila a CSS. Es CSS con "superpoderes".

En el HTML se hace el link al Stylesheet .css que es compilado desde sass.

<a id="sty9"></a>

### **Comentarios en Sass**

[Volver al indice](#sty-base)

```scss
// Los comentarios de 2 barras no aparecen en el CSS compilado

/*
 Este tipo de comentarios si aparecen en el codigo CSS compilado
*/
```

<a id="sty10"></a>

### **Variables en SASS**

[Volver al indice](#sty-base)

```scss
$color: red;

h1 {
 // Se pueden declarar fuera y dentro de los bloques de estilos en SASS
 $font: Arial;
 font-family: $font;

 color: $color;
}
```

<a id="sty11"></a>

### **Partials en SASS**

[Volver al indice](#sty-base)

Si tengo dos archivos en mi directorio sass, y no quiero que los dos aparezcan convertidos a css, si no que ambos esten combinados en un solo css (esto para que no ocupe tanto espacio), simplemente le pongo guion bajo al nombre del archivo sass que deseo combinar

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd504db2-9bd9-4188-9b25-c304a0d8ab82/Untitled.png)

El archivo con el guion bajo en su nombre no sera compilado, sera llamado en otro elemento que lo utilizara.

```scss
// No es necesario ni la extension ni el guion
// bajo en el nombre del archivo a importar
@use 'variables';

body {
 color: variables.$primary;
}
```

<a id="sty12"></a>

### **Imports en SASS**

[Volver al indice](#sty-base)

Puedo modificar los valores de las variables que importo al momento de referenciar al archivo

```scss
@use 'variables' with (
 $primary: pink;
);

color: variables.$primary;
```

Para que esto pueda ser modificado, se le debe agregar una propiedad a la declaración de la variable, un `!default`

```scss
$primary: pink !default;
```

Cuando una variable es declarada en el mismo archivo sass donde es usada (generalmente arriba de todo del archivo y por fuera de cualquier bloque de estilos) se le dice que tiene un **scope global**

<a id="sty13"></a>

### **Interpolacion en SASS**

[Volver al indice](#sty-base)

```scss
$selector: '.hero';
$propiedad: 'color';

#{$selector} {
 #{$propiedad}: red;
}

// Es lo mismo que =>

.hero {
 color: red;
}
```

<a id="sty14"></a>

### **Nesting en SASS**

```scss
// ----- SASS -----

.hero {
 //..estilos 1
  nav {
   //.. estilos 2
    a {
     //..estilos 3
    }
  }
}

// ----- CSS -----

.hero {
 //..estilos 1
}

.hero nav {
 //..estilos 2
}

.hero nav a {
 // ..estilos 3
}
```

<a id="sty15"></a>

### **Selectores en SASS**

[Volver al indice](#sty-base)

```scss
// Selector de hijo directo (.item es hijo directo de .card)

.card > {
 .item {}
}

.card {
 > .item {}
}
```

<a id="sty16"></a>

### **Mixins en SASS** 💛

[Volver al indice](#sty-base)

Es un grupo de declaraciones de CSS que pueden reutilizarse. Por ejemplo, si uso box-shadow, tendria que escribir varios estilos para varios navegadores

```jsx
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Entonces en SASS podemos usar mixins, que son como funciones que podemos invocar para reutilizar el codigo. Hasta tiene parametros y todo para cambiar los valores

```jsx
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

Luego llamamos al mixin utilizando la directiva `include`

```jsx
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

<a id="sty17"></a>

### **Condicionales if-else en SASS**

[Volver al indice](#sty-base)

Se puede utilizar if-else dentro de los mixins en SASS

```jsx
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

<a id="sty18"></a>

### **Ciclos en SASS**

[Volver al indice](#sty-base)

Se pueden utilizar ciclos en SASS para repetir estilos

```jsx
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

Esto nos sirve para crear clases de forma dinamica

<a id="sty19"></a>

### **Funciones en SASS**

[Volver al indice](#sty-base)

Se pueden crear funciones en SASS para reutilizar codigo

```jsx
@function suma($a, $b) {
  @return $a + $b;
}

div {
  width: suma(10px, 20px);
}
```

<a id="sty20"></a>

### **Extend/Inheritance en SASS**

[Volver al indice](#sty-base)

Se puede utilizar `@extend` para heredar estilos de un selector a otro

```jsx
.btn {
  color: white;
  background-color: blue;
}

.btn-primary {
  @extend .btn;
  border: 1px solid black;
}
```

<a id="sty21"></a>

### **Placeholder Selectors en SASS**

[Volver al indice](#sty-base)

Los placeholders son selectores que no se compilan a CSS, pero que pueden ser extendidos por otros selectores

```jsx
%btn {
  color: white;
  background-color: blue;
}

.btn-primary {
  @extend %btn;
  border: 1px solid black;
}
```