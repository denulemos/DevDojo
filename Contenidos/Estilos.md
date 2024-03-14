# Estilos (CSS, SASS..) 

### **Cuál es la diferencia entre div y span?**
La etiqueta span trabaja como contenedor de línea, no se puede ampliar para ocupar un párrafo, debe usarse para edicion de frases en parrafos, y div trabaja como contenedor de bloque, y puede expandirse.

![image](https://github.com/denulemos/denobible/assets/32619895/e5463d4a-0cee-45ff-862b-f872e139ba9c)

### **Qué buenas prácticas pueden existir en CSS?**

- Usar shorthand properties, propiedades abreviadas. Nos permiten escribir varias propiedades en una sola linea.

### **Para que usarias Storybook?**

Para cuando, por ejemplo, tengo una libreria de componentes. Para mostrar cada uno como se veria en un entorno lo mas real e individual posible con todas sus configuraciones posibles

### **Que es BEM?**

Block element modifier, consiste en escribir nombres de clases que dejen en claro que es lo que se esta representando en el HTML y en el CSS

`bloque__elemento-modificador_elemento (header__title-warning)`

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

# SASS

### 💗 Que es Sass?

Es un preprocesador que nos permite escribir codigo CSS de una forma mas dinamica, agregando sintaxis de un lenguaje de programacion, incluyendo variables, funciones, modulos y valores

Ayuda a tener un codigo modular, simple y escalable. 

- Es completamente compatible con CSS
- Se puede escribir codigo mucho mas rapidamente
- Muchos framework actualmente estan construidos con sass
- Hay mucha documentacion

### 💗 Cual es la diferencia entre .sass y scss?

La primera no utiliza llaves, solo tabulaciones, que se interpretan como bloques de codigo. La segunda es mas similar a CSS ya que utiliza llaves, y con funcionalidades extra

### 💗 Sass reemplaza a CSS?

No, es una herramienta para escribir CSS de forma mas rapida, esto se compila a CSS. Es CSS con superpoderes.

En el HTML se hace el link al Stylesheet .css que es compilado desde sass.

### 💗 Comentarios en Sass

```scss
// Los comentarios de 2 barras no aparecen en el CSS compilado

/* 
	Este tipo de comentarios si aparecen en el codigo CSS compilado
*/
```

### 💗 Variables

```scss
$color: red;

h1 {
	// Se pueden declarar fuera y dentro de los bloques de estilos en SASS
	$font: Arial;
	font-family: $font;

	color: $color;
}
```

### 💗 Partials

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

### 💗 Imports

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

### 💗 Interpolacion

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

### 💗 Nesting

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

### 💗 Selectores

```scss
// Selector de hijo directo (.item es hijo directo de .card)

.card > {
	.item {}
}

.card {
	> .item {}
}

```

### 💗 Mixins

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

### 💗 Condicionales if-else

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
