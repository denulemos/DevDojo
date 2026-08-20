---
sidebar_position: 1
---
# 🩷 HTML

### ¿Cuál es la diferencia entre h1, h2, etc.?

Las etiquetas `h1`, `h2`, `h3`, `h4`, `h5` y `h6` se usan para poner títulos y subtítulos en una página web. Piensa en ellas como los títulos grandes y pequeños de un libro:

- `h1` es el título más importante (como la portada de un libro). Solo debe haber uno por página.
- `h2` es un subtítulo importante, debajo del `h1`.
- `h3` es un subtítulo dentro de un `h2`, y así sucesivamente hasta `h6`.

Cada número más alto (`h3`, `h4`, etc.) indica un título menos importante. Usar bien estas etiquetas ayuda a que tu página sea más fácil de leer y también ayuda a los buscadores (como Google) a entender de qué trata tu contenido.

Ejemplo:

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Sub-subtítulo</h3>
```

---

### Vínculos Relativos


Los vínculos relativos son aquellos que permiten interconectar los archivos de nuestro sitio (internos, dentro de nuestro sitio o servidor).
Si por ejemplo quiero ir de mi archivo index a mi contacto.html lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="contacto.html" title="Contacto"> Contacto </a>
```

En el ejemplo anterior, hemos visto también cómo se ha agregado el atributo title, este es obligatorio por cuestiones de accesibilidad y también nos permite describir nuestros vínculos para hacer aparecer una etiqueta amarilla llamada tooltip con dicha información.
Si mi archivo contacto se encontrase dentro de una carpeta la ruta a marcar sería la siguiente:

```html
<!doctype html>

<title>Vinculo</title>
<a href="en/contacto.html" title="Contacto"> Contacto </a>
```

---

### Vínculos Absolutos

Es la URL que dirige a un recurso en la web, por ejemplo, si quiero ir a google.com desde mi archivo index.html, lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="https://www.google.com" title="Contacto"> Contacto </a>
```

---

### `DOCTYPE`


El doctype es una declaración que se utiliza en un documento HTML para informar al navegador web sobre la versión de HTML en la que está escrito el documento. El doctype debe ser la primera línea de un documento HTML y se utiliza para garantizar que el navegador web interprete el documento correctamente.

```html
<!DOCTYPE html>
```

---

### Atributo `placeholder` para campos

El atributo placeholder me permite guiar al usuario sobre lo que tiene que colocar dentro de nuestro campo. Por ejemplo:

```html
<label> Nombre <br> <input type=”text” placeholder=”Nombre Completo”> </label>
```

Esto indica al usuario que en ese campo va el nombre completo, o también se podría poner un ejemplo.

---

### HTML Semántico


Es el uso de etiquetas introducidas en HTML5 en vez de divs y span para la división de secciones en mi HTML.

```html
<header> </header>
<nav> </nav>
<main> </main>
<section> </section>
<article> </article>
<aside> </aside>
<footer> </footer>
```

Esto a nivel de renderizado no cambia nada, pero sí hace que mi código sea mucho más accesible. Los motores de búsqueda pueden entender mejor el contenido de mi página, y los lectores de pantalla también.


---

### Cuáles son las partes de un documento HTML?


Además de todo esto, un documento HTML ha de estar delimitado por la etiqueta HTML.
Dentro de este documento, podemos asimismo distinguir dos partes principales:

La cabecera, delimitada por la etiqueta HEAD, donde colocaremos etiquetas de índole informativo, como por ejemplo el título de nuestra página. El contenido de la cabecera no suele aparecer en el cuerpo de la página, pero sirve a los navegadores y otros sistemas para encontrar información útil para entender y procesar el documento.
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

---

### Puedo escribir las etiquetas en mayúscula y minúscula?


En HTML las mayúsculas y minúsculas son indiferentes. Quiere decir que las etiquetas pueden ser escritas con cualquier tipo de combinación de mayúsculas y minúsculas. Resulta, sin embargo, aconsejable acostumbrarse a escribirlas en minúscula, ya que otras tecnologías que pueden c onvivir
con nuestro HTML (XML por ejemplo) no son tan permisivas y nunca viene mal hacernos a las buenas costumbres desde el principio, para evitar fallos triviales en un futuro.

---

### Mapas de Imagen


Aunque el uso de los mapas de imagen se ha reducido drásticamente en los últimos años, aún se utilizan en algunos sitios especializados. Muchas agencias de viaje y sitios relacionados utilizan mapas geográficos para
seleccionar el destino del viaje.

Un mapa de imagen permite definir diferentes zonas "pinchables" dentro de una imagen. El usuario puede clickear sobre cada una de las zonas definidas y cada una de ellas puede apuntar a una URL diferente.
Siguiendo el ejemplo anterior, una sola imagen que muestre un mapa de todos los continentes puede definir una zona diferente para cada continente. De esta forma, el usuario puede clickear sobre la zona correspondiente a cada continente para que el navegador muestre la página que contiene los viajes disponibles a ese destino.
Las zonas o regiones que se pueden definir en una imagen se crean mediante rectángulos, círculos y polígonos. Para crear un mapa de imagen, en primer lugar se inserta la imagen original mediante la etiqueta `<img>`. A continuación, se utiliza la etiqueta `<map>` para definir las zonas o regiones de la imagen. Cada zona se define mediante la etiqueta `<area>`.

`<img width="197" alt="image" src="https://github.com/denulemos/denobible/assets/32619895/627950b8-7461-48b2-9846-5be8d3f355b0">`

Ejemplo de imagen que incluye un mapa de imagen
Utilizando un círculo, dos rectángulos y un polígono se pueden definir fácilmente cuatro zonas cliqueables en la imagen mediante el siguiente código HTML:

```jsx
<img src="imagen.gif" usemap="#mapa_zonas" />
<map name="mapa_zonas">
<area shape="rect" coords="20,25,84,113" href="rectangulo.html" />
<area shape="polygon" coords="90,25,162,26,163,96,89,25,90,24"
href="triangulo.html" /> <area shape="circle" coords="130,114,29"
href="circulo.html" />
<area shape="rect" coords="19,156,170,211" href="mailto:rectangulo@direccion.com" />
<area shape="default" nohref="nohref" />
</map>
```

La verdad es que los mapas de imágenes son tediosos a veces de crear, y para eso contamos con generadores online por ejemplo:
https://www.image-maps.com/

---

### `<datalist>`

Se usa para proveer con un autocomplete a algunos elementos

```jsx
<form action="action_page.php" method="get">
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
</datalist>
</form>
```

---

### `div` vs `span`

La etiqueta span trabaja como contenedor de línea, no se puede ampliar para ocupar un párrafo, debe usarse para edición de frases en párrafos, y div trabaja como contenedor de bloque, y puede expandirse.

![image](https://github.com/denulemos/denobible/assets/32619895/e5463d4a-0cee-45ff-862b-f872e139ba9c)

---

### `alt`

El atributo `alt` proporciona un texto alternativo que se muestra si la imagen no carga. También ayuda a personas con discapacidad visual.

---

### Listas `<ul>` `<ol>`

Hay dos tipos principales de listas:
- `<ul>`: lista desordenada (con viñetas).
- `<ol>`: lista ordenada (con números).

```html
<ul>
    <li>Manzana</li>
    <li>Banana</li>
</ul>
```

---

### ¿Cómo hago un salto de línea?

Usa la etiqueta `<br>` para hacer un salto de línea dentro de un texto.

---

### Comentarios

Un comentario es texto que no se muestra en la página. Se escribe así:

```html
<!-- Esto es un comentario -->
```

---

### `<input>`

La etiqueta `<input>` se usa para crear campos donde el usuario puede escribir datos, como texto, contraseñas o seleccionar archivos.

---

### ¿Qué es el atributo `id`?

El atributo `id` identifica de forma única un elemento en la página. Solo debe haber un elemento con el mismo `id`.

```html
<div id="cabecera"></div>
```