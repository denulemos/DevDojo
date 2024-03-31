# APIs

Cada vez que entramos a una pagina web, estamos haciendo un request de data a la API del mismo, es decir, un **GET request** a la URL, devolviendonos por lo general, el HTML del sitio.

También podemos usar las API cuando no necesitamos una respuesta HTML, sí hacemos una llamada a una URL particular, de por ejemplo, twitter, nos devolvera un JSON..

```jsx
[{
   "created_at": "Thu Apr 06 15:28:43 +0000 2017",
   "text": "Happy coding everyone!",
   "favorite_count": 1000,
   ...
}]
```

Esto significa que la cuenta twitteo “Happy coding everyone!” y tuvo 1000 favoritos. Se devuelve en formato JSON ya que es más facil de leer. Esto nos sirve para construir nuestra propia aplicación usando la data de la API de twitter.

**API-->** Application Programming Interface, diferentes apps necesitan distintos formatos de respuesta ante distintas necesidades.

### Creando una request con Javascript

1. Una forma de crear una nueva request con JS es con la herramienta **XMLHttpRequest(),** algo que podemos guardar tranquilamente en una variable:

```jsx
var request = new XMLHttpRequest();
```

1. Tendríamos que poner en otra variable, la URL a la que queremos hacer la llamada

```jsx
var url = www.twitter.com
```

1. Luego con un **request.open()** especificamos el tipo de llamada que deseamos hacer, con la URL a la que se lo queremos hacer. El false es para desactivar la especificación de un código más complejo durante la espera de la respuesta de la API, en este caso es false ya que todavía no se entra en detalles

```jsx
request.open(“GET”, url, false);
```

1. Ya que tenemos la request abierta, solo nos queda mandarla

```jsx
request.send();
```

1. También podemos imprimir en consola la respuesta de la api mediante

```jsx
console.log(request.response);
```

### **Poniendo en practica las API**

1. Ponemos un titulo

```jsx
console.log(“Cat Fact”);
```

1. Creamos una variable con la herramienta deseada

```jsx
var request = new XMLHttpRequest();
```

1. Agregamos la URL a la que vamos a hacer el llamado

```jsx
var url = "https://cat-fact.herokuapp.com/facts/random"
```

1. Abrir la request

```jsx
request.open(“GET”, url, false);
```

1. Mandamos la request a la API

```jsx
request.send();
```

1. Creamos una variable con lo que trae la API

```jsx
var response = request.responseText;
```

1. Crear una variable para formatear la respuesta como un objecto JSON

```jsx
var data = JSON.parse(response);
```

1. Imprimimos el formateo, solo queremos que nos traiga el campo “text”

```jsx
console.log(data[“text”]);
```