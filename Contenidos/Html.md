# HTML

## **Cual es la diferencia entre h1, h2, etc?**

Los elementos de encabezado h1 a h6 se utilizan para indicar la importancia del contenido que les sigue. Cuanto menor sea el número, mayor será la importancia, por lo que los elementos h2 tienen menos importancia que los elementos h1. Utiliza solo un elemento h1 por página y coloca los encabezados de menor importancia debajo de los de mayor importancia.

## **Cual es la importancia del uso de todos los elementos HTML?**


HTML5 tiene algunos elementos que identifican diferentes áreas de contenido. Estos elementos hacen que tu HTML sea más fácil de leer y ayudan con la Optimización para Motores de Búsqueda (SEO) y la accesibilidad.

## **Que son los atributos de los elementos HTML?**

Los atributos HTML son palabras especiales utilizadas dentro de la etiqueta de apertura de un elemento para controlar el comportamiento del elemento. El atributo src en un elemento img especifica la URL de la imagen (dónde se encuentra la imagen).

`<img src="linkaimagen.com/fcc_secondary.svg">`

## **Cuáles son las partes de un documento HTML?**

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

## **Puedo escribir las etiquetas en mayúscula y minúscula?**

En HTML las mayúsculas y minúsculas son indiferentes. Quiere decir que las etiquetas pueden ser escritas con cualquier tipo de combinación de mayúsculas y minúsculas. Resulta, sin embargo, aconsejable acostumbrarse a escribirlas en minúscula, ya que otras tecnologías que pueden convivir
con nuestro HTML (XML por ejemplo) no son tan permisivas y nunca viene mal hacernos a las buenas costumbres desde el principio, para evitar fallos triviales en un futuro.

## **Qué son los mapa de imagen?**

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

## **Que es el tag DataList?**

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33a5097d-ea3c-4c8e-9267-d3b37578f34e/Untitled.png)

## **Qué son las imágenes en HTML?**

Las imágenes son uno de los elementos más importantes de las páginas web. Los dos atributos requeridos son src y alt. El atributo src es similar al atributo href de los enlaces, ya que establece la URL de la imagen que se va a mostrar en la página. Las URL indicadas pueden ser absolutas o relativas. El atributo alt permite describir el
contenido de la imagen mediante un texto breve. Las descripciones deben tener una longitud inferior a 1024 caracteres y son útiles para las personas y dispositivos discapacitados que no pueden acceder a las imágenes.

## **Cual es la historia de HTML?**

El lenguaje HTML se creó en 1991. Tiene una historia realmente corta pero para su poca vida ha sufrido importantes cambios. Su padre es Tim Berners-Lee que lo diseñó con objetivos divulgativos. Inicialmente no se pensó que la web llegaría a ser un área de ocio con carácter multimedia, de modo que, nació sin dar respuesta a todos los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando modificaciones con el tiempo, agregando nuevas características para
cubrir las nuevas necesidades.
Como hemos dicho, los programas que leen y presentan las páginas web a los usuarios se llaman navegadores. Éstos son los responsables de interpretar el HTML y "pintar" una página tal como ellos entiendan que deben hacer. Sin embargo, esas reglas de representación no son subjetivas de cada fabricante del navegador, sino que existe una organización llamada W3C que se encarga de definir el estándar que todos deben seguir a la hora de escribir e interpretar el HTML. Estos estándares del HTML se conocen como "Especificaciones", las cuales han ido apareciendo en el tiempo. El HTML5 es el último estándar en la actualidad.

Históricamente los navegadores, además de la propia comunidad de usuarios, han sido los mayores impulsores de los cambios ocurridos en el lenguaje. Una vez detectada la necesidad es el W3C el que crea el estándar y marca una dirección que todos deben seguir.

## **Para que es el Doctype?**

Permite al navegador entender el tipo de documento y a que estructura responde como HTML o XHTML

---

# **Botones en HTML**

La mayoría de formularios dispone de un botón para enviar al servidor los datos introducidos por el usuario:

```css
<input type="submit" name="buscar" value="Buscar">
```

El valor del atributo type para este control de formulario es submit. El navegador se encarga de enviar
automáticamente, los datos cuando el usuario pincha sobre este tipo de botón. El valor del atributo value es el
texto que muestra el botón. Si no se establece el atributo value, el navegador muestra el texto predefinido
Enviar consulta. También podemos trabajar con `<button> Enviar </button>` este cumple el mismo propósito qué el `<input type=”submit”>`

## **Botón de Reseteo del Formulario**

Aunque su uso era muy popular hace unos años, la mayoría de formularios modernos ya no utilizan este tipo de botón. Se trata de un botón especial que borra todos los datos introducidos por el usuario y devuelve el formulario a su estado original:

```css
<input type="reset" name="limpiar" value="Borrar datos del formulario" />
```

El valor del atributo type para este control de formulario es reset. Cuando el usuario pulsa este botón, el navegador borra toda la información introducida y muestra el formulario en su estado original. Si el formulario no contenía originalmente ningún valor, el botón de reset lo vuelve a mostrar vacío. si el formulario contenía información, el botón reset vuelve a mostrar la misma información original.
Como es habitual en los botones de formulario, el atributo value permite establecer el texto que muestra el botón. Si no es utiliza este atributo, el navegador muestra el texto predefinido del botón, que en este caso es Restablecer.

## **Checkbox**

Los checkbox o "casillas de verificación" son controles de formulario que permiten al usuario seleccionar y deseleccionar opciones individualmente. Aunque en ocasiones se muestran varios checkbox juntos, cada uno de ellos es completamente independiente del resto. Por este motivo, se utilizan cuando el usuario puede activar y desactivar varias opciones relacionadas pero no excluyentes.

```css
<input name="puesto_directivo" type="checkbox" value="direccion"/> Dirección
<input name="puesto_tecnico" type="checkbox" value="tecnico"/> Técnico
<input name="puesto_empleado" type="checkbox" value="empleado"/> Empleado
```

El valor del atributo type para estos controles de formulario es checkbox. Como se muestra en el ejemplo anterior, el texto que se encuentra al lado de cada checkbox no se puede establecer mediante ningún
atributo, por lo que es necesario añadirlo manualmente fuera del control del formulario. Si no se añade un texto al lado de la etiqueta <input /> del checkbox, el usuario sólo ve un pequeño cuadrado sin ninguna información relativa a la finalidad de ese checkbox.
El valor del atributo value, junto con el valor del atributo name, es la información que llega al servidor cuando el usuario envía el formulario.
Si se quiere mostrar un checkbox seleccionado por defecto, se utiliza el atributo checked. Si el valor del atributo es checked, el checkbox se muestra seleccionado. En cualquier otro caso, el checkbox permanece sin seleccionar. Aunque resulta redundante que el nombre y el valor del atributo sean idénticos, es obligatorio indicarlo de esta forma porque los atributos en XHTML no pueden tener valores vacíos:

```html
<input type="checkbox" checked="checked" ... /> // Checkbox seleccionado por defecto
```

## **Radiobutton**

Los controles de tipo radiobutton son similares a los controles de tipo checkbox, pero presentan una diferencia muy importante: son mutuamente excluyentes. Los radiobutton se utilizan cuando el usuario solamente puede escoger una opción entre las distintas opciones relacionadas que se le presentan. Cada vez que se selecciona una opción, automáticamente se deselecciona la otra opción que estaba seleccionaba.

```html
<input type="radio" name="sexo" value="hombre" checked="checked" /> Hombre
<input type="radio" name="sexo" value="mujer" /> Mujer
```

El valor del atributo type para estos controles de formulario es radio. El atributo name se emplea para indicar los radiobutton que están relacionados. Por lo tanto, cuando varios radiobutton tienen el mismo valor en su atributo name, el navegador sabe que están relacionados y puede des seleccionar una opción del grupo de radiobutton cuando se seleccione otra opción.

---

# **Botones en HTML**

## **Que son los Vínculos?**

El lenguaje de marcado HTML se definió teniendo en cuenta algunas de las características que existían en ese momento para la publicación digital de contenidos. Entre los conceptos utilizados en su creación, se encuentra el mecanismo de "hipertexto".
Los enlaces se utilizan para establecer relaciones entre dos recursos. Aunque la mayoría de enlaces relacionan páginas web, también es posible enlazar otros recursos como imágenes, documentos y archivos.
Una característica que no se suele tener en cuenta en los enlaces es que están formados por dos extremos y un sentido. En otras palabras, el enlace comienza en un recurso y apunta hacia otro recurso. Cada uno de los dos extremos se llaman "anchors" en inglés, que se puede traducir literalmente como "anclas".

## **URL**

Antes de empezar a crear enlaces, es necesario comprender y dominar el concepto de URL. Él acrónimo URL (del inglés Uniform Resource Locator) hace referencia al identificador único de cada recurso disponible en Internet. La URL de un recurso tiene dos objetivos principales:

- Identificar de forma única a ese recurso
- Permitir localizar de forma eficiente ese recurso

En primer lugar, las URL permiten que cada página HTML publicada en Internet tenga un nombre único que permita diferenciarla de las demás. De esta forma es posible crear enlaces que apunten de forma inequívoca a una determinada página.
Si se accede a la página principal de Google, la dirección que muestra el navegador es: Si se accede a la página principal de Google, la dirección que muestra el navegador es: [http://www.google.com](http://www.google.com/)
La cadena de texto [http://www.google.com](http://www.google.com/) es la URL completa de la página principal de Google. La URL de las páginas es imprescindible para crear los enlaces, ya que permite distinguir una página de otra.
El segundo objetivo de las URL es el de permitir la localización eficiente de cada recurso de Internet.
Para ello es necesario comprender las diferentes partes que forman las URL. Una URL sencilla siempre está formada por las mismas tres partes. Si por ejemplo se considera la siguiente URL:
http://www.librosweb.es/xhtml/capitulo4.html

Las partes que componen la URL anterior son:

- Protocolo (http://): el mecanismo que debe utilizar el navegador para acceder a ese recurso. Todas
las páginas web utilizan http://. Las páginas web seguras (por ejemplo las de los bancos y las de los servicios de email) utilizan https:// (se añade una letra s).
- Servidor ([www.librosweb.es](http://www.librosweb.es/)): simplificando mucho su explicación, se trata del ordenador en el que se
encuentra guardada la página que se quiere acceder. Los navegadores son capaces de
obtener la dirección de cada servidor a partir de su nombre.
- Ruta (/xhtml/capitulo4.html): camino que se debe seguir, una vez que se ha llegado al servidor, para
localizar el recurso específico que se quiere acceder.

Por tanto, las URL no sólo identifican de forma única a cada recurso de Internet, sino que también proporcionan a los navegadores la información necesaria para poder llegar hasta ese recurso.
La mayoría de URL son tan sencillas como la URL mostrada anteriormente. No obstante, existen URL complejas formadas por más partes.

http://www.alistapart.com/comments/webstandards2008?page=5#42

Las cinco partes que forman la URL anterior son:

- Protocolo (http://)
- Servidor ([www.alistapart.com](http://www.alistapart.com/))
- Ruta (/comments/webstandards2008)
- Consulta (?page=5): información adicional necesaria para que el servidor localice correctamente el recurso que se quiere acceder. Siempre comienza con el carácter ? y
contiene una sucesión de palabras separadas por = y &
- Sección (#42): permite que el navegador se posicione automáticamente en una sección de la página web. Siempre comienza con el carácter #

Como las URL utilizan los caracteres :, =, & y / para separar sus partes, estos caracteres están reservados y no se pueden utilizar libremente. Además, algunos caracteres no están reservados pero pueden ser problemáticos si se utilizan en la propia URL.
Si es necesario incluir estos caracteres reservados y especiales en una URL, se sustituyen por combinaciones de caracteres seguros. Esta sustitución se denomina codificación de caracteres y el servidor realiza el proceso inverso (decodificación) cuando le llega una URL con los caracteres codificados.
Por otra parte, aunque desde hace tiempo ya es posible incluir en las URL caracteres de otros idiomas que no sean el inglés, aún no es completamente seguro utilizar estos caracteres en las URL. Si se utilizan letras como ñ, á, é o ç, es posible que algunos navegadores no las interpreten de forma correcta.
Teniendo en cuenta las dos tablas anteriores de codificación de caracteres, es fácil crear las URL correctas sin caracteres problemáticos:

```html
<a href=”mipagina.html” > Mi página </a>
```

## **Vínculos Relativos**

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

## **Vínculos Absolutos**

Las URL completas también se llaman URL absolutas, ya que el navegador no necesita disponer de información adicional para localizar el recurso enlazado. Si se utilizan siempre las URL absolutas, los enlaces están completamente definidos.
Sin embargo, escribir siempre las URL completas es bastante aburrido, cuesta mucho tiempo y hace imposible cambiar la ubicación de los contenidos de un sitio web. Por ese motivo, casi todos los sitios web de Internet utilizan URL relativas siempre que es posible.

Una URL relativa es una versión abreviada de una URL absoluta. Su objetivo es eliminar todas las partes de la URL absoluta que se pueden adivinar a partir de la información de contexto de la página web. En otras palabras, las URL relativas aprovechan la inteligencia de los navegadores para crear URL incompletas que los navegadores pueden completar deduciendo la información
que falta.

## **Vínculo de correo electrónico**

```html
<a href="mailto:nombre@direccion.com" title="Dirección de email para solicitar más
información"> Solicita más información </a>
```

Al clickear sobre el enlace anterior, se abre automáticamente el programa de correo electrónico del ordenador del usuario y se establece la dirección de envío al valor indicado después de mailto: La sintaxis es la misma que la de un enlace normal, salvo que se cambia el prefijo http:// por mailto:
La sintaxis de mailto: permite utilizarlo para otros ejemplos más complejos:

```html
<!-- Envío del correo electrónico a varias direcciones a la vez -->
<a href="mailto:nombre@direccion.com,otro_nombre@direccion.com">Solicita más
información</a>

<!-- Añadir un "asunto" inicial al correo electrónico -->
<a href="mailto:nombre@direccion.com?subject=Solicitud de más información">Solicita más
información</a>

<!-- Añadir un texto inicial en el cuerpo del correo electrónico -->
<a href="mailto:nombre@direccion.com?body=Estaría interesado en solicitar más
información sobre sus productos">Solicita más información</a>
```

Todas las opciones anteriores se pueden combinar entre sí para realizar ejemplos más avanzados. Aunque el uso de mailto: puede parecer una ventaja, su uso está desaconsejado. Si se incluye una dirección de correo electrónico directamente en una página web, es muy probable que en poco tiempo esa dirección de email se encuentre llena de correo electrónico basura o "spam", ya que existen programas automáticos encargados de rastrear sistemáticamente todas las páginas web de Internet para encontrar direcciones de correo electrónico válidas.

La forma de mostrar las direcciones de correo electrónico en las páginas web consiste en incluir la dirección en una imagen o indicarla de forma que solamente los usuarios puedan entenderlo:

```html
<p>La dirección de correo es <strong>nombre (arroba) direccion.com</strong></p>
<p>La dirección de correo es <strong>nombre_arroba_direccion.com</strong></p>
<p>La dirección de correo es <strong>nombreQUITAESTO@direccion.com</strong></p>
<p>La dirección de correo es <strong>nombre(ARROBA)direccion.com</strong></p>
<p>La dirección de correo es <strong>nombre @ direccion .com</strong></p>
```
## **Vínculo Ancla**

Alguna vez fuiste a una página donde al hacerle clic a un vínculo te llevo a una parte de la misma, eso se llama ancla.
Por ejemplo en wikipedia, o en otras páginas vemos constantemente su uso, por ejemplo:

```html
<a href="#mirespuesta"> Pregunta </a>

<p><a id="respuesta"></a>Respuesta </p>
```

De esta forma al hacerle clic a la primer pregunta me llevará a su correspondiente respuesta. Lo que hace el ancla en realidad es mover la barra de scroll al punto de mostrarme dónde está la otra parte del vínculo.

---

