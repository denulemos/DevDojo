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
