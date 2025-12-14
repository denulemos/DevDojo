---
sidebar_position: 1
---
# 🩷 CSS y SASS

### **Qué es la Especificidad (Specificity) de CSS?** 

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

---

### **Que es BEM?**

Block element modifier, consiste en escribir nombres de clases que dejen en claro que es lo que se esta representando en el HTML y en el CSS

`bloque__elemento--modificador_elemento (header__title--warning)`

---

### **Como declaro variables en CSS?**

```jsx
:root {
    --color-3: #000000;
}

html, body {
    background-color: var(--color-3);
}
```

---

### **Pseudoclases**

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

---

### **¿Qué es el modelo de caja (Box Model) en CSS y cómo funciona?** 

El modelo de caja (Box Model) en CSS es la forma en que se representan y se calculan las dimensiones de los elementos HTML en una página web. Cada elemento HTML se representa como una caja rectangular que consta de cuatro áreas principales: el contenido, el relleno, el borde y el margen.

- **Contenido (Content):** Es el área interior de la caja que contiene el contenido real del elemento, como texto, imágenes, etc.
- **Relleno (Padding):** Es el espacio entre el contenido y el borde de la caja. Se puede agregar relleno para aumentar el espacio entre el contenido y el borde.
- **Borde (Border):** Es el borde que rodea el contenido y el relleno de la caja. Se puede agregar un borde para darle un aspecto visual alrededor del contenido.
- **Margen (Margin):** Es el espacio entre el borde de la caja y los elementos adyacentes. Se puede agregar un margen para controlar el espacio entre los elementos en la página.

![box-model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

---

### **Qué es Sass?**

Es un preprocesador que nos permite escribir codigo CSS de una forma mas dinamica, agregando sintaxis de un lenguaje de programacion, incluyendo variables, funciones, modulos y valores

Ayuda a tener un codigo modular, simple y escalable.

* Es completamente compatible con CSS
* Se puede escribir codigo mucho mas rapidamente
* Muchos framework actualmente estan construidos con sass
* Hay mucha documentacion

---

### **Cual es la diferencia entre .sass y scss?**

La primera no utiliza llaves, solo tabulaciones, que se interpretan como bloques de codigo. La segunda es mas similar a CSS ya que utiliza llaves, y con funcionalidades extra

---

### **Sass reemplaza a CSS?**

No, es una herramienta para escribir CSS de forma mas rapida, esto se compila a CSS. Es CSS con "superpoderes".

En el HTML se hace el link al Stylesheet .css que es compilado desde sass.

---

### **Comentarios en Sass**

```scss
// Los comentarios de 2 barras no aparecen en el CSS compilado

/*
 Este tipo de comentarios si aparecen en el codigo CSS compilado
*/
```

---

### **Variables en SASS**

Las variables en SASS te permiten guardar valores (como colores, fuentes, tamaños, etc.) en un nombre para poder reutilizarlos fácilmente en tu código. Así, si necesitas cambiar un color o una fuente, solo lo cambias en un lugar.

**¿Cómo se declara una variable?**

Solo tienes que poner un signo `$` antes del nombre de la variable:

```scss
$color-principal: #ff69b4;
$fuente-principal: Arial, sans-serif;
$tamano-titulo: 2rem;
```

**¿Cómo se usan las variables?**

Simplemente usas el nombre de la variable donde normalmente pondrías el valor:

```scss
body {
    color: $color-principal;
    font-family: $fuente-principal;
}

h1 {
    font-size: $tamano-titulo;
    color: $color-principal;
}
```

**¿Por qué usar variables?**

- Si quieres cambiar el color principal de tu sitio, solo cambias el valor de `$color-principal` y listo, se actualiza en todos lados.
- Hace tu código más limpio y fácil de mantener.

```scss
// Declaración de variables
$color-fondo: #222;
$color-texto: #fff;
$padding-general: 16px;

// Uso de variables
body {
    background-color: $color-fondo;
    color: $color-texto;
    padding: $padding-general;
}

.button {
    background: $color-texto;
    color: $color-fondo;
    padding: $padding-general;
}
```

¡Así de fácil! Piensa en las variables como etiquetas para tus valores favoritos en CSS.

---

### **Partials en SASS**

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

---

### **Imports en SASS**


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

---

### **Interpolacion en SASS**


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

---

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

---

### **Selectores en SASS**


```scss
// Selector de hijo directo (.item es hijo directo de .card)

.card > {
 .item {}
}

.card {
 > .item {}
}
```

---

### **Mixins en SASS** 💛

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

---

### **Condicionales if-else en SASS**


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

---

### **Ciclos en SASS**


Se pueden utilizar ciclos en SASS para repetir estilos

```jsx
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

Esto nos sirve para crear clases de forma dinamica

---

### **Funciones en SASS**


Se pueden crear funciones en SASS para reutilizar codigo

```jsx
@function suma($a, $b) {
  @return $a + $b;
}

div {
  width: suma(10px, 20px);
}
```

---

### **Extend/Inheritance en SASS**


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

---

### **Placeholder Selectors en SASS**

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