# Variables

### ¿Qué es una Variable?

Una *variable* es un *contenedor* que tiene un valor o dato. Desde el punto de vista técnico, es un espacio de la memoria en el que guardamos ese determinado valor (o dato). 

Todas las variables tienen características comunes (por ejemplo un nombre que las identifica) y otras que difieren según el tipo de dato que contengan. Si pudiéramos ver qué contiene internamente una variable, veríamos que en algunos casos contiene directamente el valor y en otros (como en el caso de los objetos) otra cosa.

### ¿En qué se diferencia una variable común, nativa, de un objeto?

Consideraremos que las variables nativas son entidades elementales: un número, un carácter, un valor verdadero o falso, que son entendidas por el lenguaje y asociadas a un tipo de dato *reconocible* por el entorno donde el programa corre, mientras que los objetos son entidades complejas que pueden estar formadas por la agrupación de más de un elemento, incluyendo *campos* y *métodos*. Pero todas ocupan un espacio de memoria (que puede ser mayor o menor).

Ahora bien, las variables nativas guardan en sí mismas sus valores, y su tamaño está determinado por el tamaño definido del tipo de dato. En el caso de los objetos, como cada clase tiene su propia definición y el tamaño de sus *instancias solamente puede ser resuelto en tiempo de ejecución*, solamente guardarán la *dirección de memoria* de la *instancia*. Es lo que comúnmente se conoce como puntero.

Es por eso que cuando a una variable de "tipo clase" no se le asigna ningún valor posee *null* como valor *por defecto*. Este *null* implica que la variable no guarda ningún objeto, y es por eso que produce un error de ejecución cuando se intenta acceder a un método de la instancia cuando ésta aún no se ha creado.

### ¿A qué nos referimos cuando hablamos de tipos de datos?

En los programas en Java puede ser necesario tanto el uso de datos elementales como de datos complejos. Por eso se usa el término “Tipos de datos” para englobar a cualquier cosa que ocupe un espacio de memoria y que pueda ir tomando distintos valores o características durante la ejecución del programa. Es decir, en vez de hablar de tipos de variables o de tipos de objetos, hablaremos simplemente de tipos de datos.

En Java diferenciamos dos tipos de datos: por un lado, los tipos primitivos, que se corresponden con los tipos de variables en lenguajes como C y que son los datos elementales que hemos citado. Por otro lado, los tipos objeto (que normalmente incluyen métodos)

![Cola](src/variables1.png)

### ¿Cómo se declara una variable?

Para definir una variable seguiremos la estructura:

```jsx
tipoDato nombreVariable;

String profesor;

int capacidad;

boolean funciona;
```

Una vez declaradas, podemos asignarles valor de la siguiente manera:

```jsx
profesor = "Catalina";

capacidad = 10;

funciona = true;
```

Si cuando declaramos una variable ya sabemos el valor inicial que queremos que tome, podemos asignarlo en el mismo momento. Por ejemplo:

```jsx
String profesor = "Catalina";
```

### Nombres de Variables

Cuando vayamos a dar un nombre a una variable deberemos tener en cuenta una serie de normas. Es decir, no podemos poner el nombre que nos dé la gana a una variable.

Es recomendable que los nombres de los identificadores sean legibles y no acrónimos que no podamos leer. De tal manera que a la hora de verlos se auto-documenten por sí mismos. Además estos identificadores nunca podrán coincidir con las palabras reservadas ni comenzar con un número.

Algunas reglas no escritas, pero que se han asumido *por convención* son:

- Los identificadores siempre se escriben en minúsculas. (pe. nombre). Y si son dos o más palabras, el inicio de cada siguiente palabra se escriba en mayúsculas (pe. nombrePersona)
- Si el identificador implica que sea una constante (es decir que hayamos utilizado los modificadores *final static*), dicho nombre se suele escribir en mayúsculas (pe. LETRA). Y si la constante está compuesta de dos palabras, estas se separan con un subrayado (pe. LETRA_PI).