# 🔌 APIs

## ¿Qué es una API?

Una API (Application Programming Interface) es un conjunto de reglas y protocolos que siguen las aplicaciones para comunicarse entre ellas.

Por ejemplo, si se tiene una aplicación que informa sobre el clima, esta información no está directamente puesta en la aplicación, sino que esta llama a un servicio que provee los datos correspondientes para mostrarlos.

## REST API

REST (Representational State Transfer) es una arquitectura de diseño para aplicaciones que usan protocolos HTTP para comunicarse y para modificar recursos.

Por ejemplo, una aplicación de comida usa las siguientes REST APIs:

- `GET /restaurants`: Obtiene los restaurantes disponibles
- `POST /orders`: Crea una nueva orden
- `GET /orders/{id}`: Obtiene el status de una orden en particular
- `DELETE /orders/{id}`: Cancela una orden

### REST Constraint

Estas son reglas que definen como una REST API deberia funcionar.

1. Client-Server
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System

Por ejemplo, se tiene el Cliente frontend -> Backend hecho con NodeJS -> Base de Datos MySQL, cada capa funciona de manera independiente de la otra. 

## Métodos HTTP

Son operaciones estándar definidas por el protocolo HTTP para la comunicación en la web.

- `GET`: Obtiene
- `POST`: Agrega
- `PUT`: Modifica
- `DELETE`: Elimina
- `PATCH`: Actualiza parcialmente

### `GET` vs `POST`

| GET | POST |
| --- | --- |
| Usado para obtener información | Usado para el submit de información |
| Parámetros visibles en la URL | Parámetros dados en el body |
| Bookmarkeable | No bookmarkeable |
| Capacidad de data limitada | Capacidad de data ilimitada |
| Ejemplo: Buscar productos en Amazon `amazon.com/search?q=laptop` | Ejemplo: Realizar un login con contraseña y usuario |

## Endpoints

Es una URL desde donde se puede acceder a una API específica para realizar ciertas operaciones.

Por ejemplo, en una app bancaria tenemos `/api/accounts` o `/api/transfers`.

## HTTP Status Code

Es un código de 3 dígitos que indica el resultado de una request HTTP.

- `200` (Éxito): La solicitud fue procesada correctamente.
  - Ejemplos: `200 OK`, `201 Created`, `204 No Content`
- `300` (Redirección): La solicitud requiere una acción adicional, normalmente una redirección.
  - Ejemplos: `301 Moved Permanently`, `302 Found`, `307 Temporary Redirect`, `308 Permanent Redirect`
- `400` (Error del cliente): La solicitud tiene un problema del lado del usuario/cliente.
  - Ejemplos: `400 Bad Request`, `401 Unauthorized` (puede faltar token), `403 Forbidden` (autenticado pero no autorizado), `404 Not Found`, `429 Too Many Requests`
- `500` (Error del servidor): El servidor no pudo procesar la solicitud correctamente.
  - Ejemplos: `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`

## Statelessness

Cada request hecha del cliente al servidor debe tener toda la información necesaria para entender y procesar la solicitud. El servidor no guarda ningún tipo de información del cliente entre requests.

## Headers

Son valores del tipo clave-valor enviados con una request HTTP o response que posee metadata con extra información sobre la request o el response.

Son generalmente usados para auth, content type, caching e información del cliente.

**No poseen directamente data, solo le dicen al server cómo procesar la información**

Por ejemplo:

```http
GET /api/user/profile

// Quién es el usuario
Authorization: Bearer ...

// El formato de la data del request
Content-Type: application/json

// Formato esperado del response
Accept: application/json
```

### `Content-Type`

Este header especifica el formato de la data que está siendo enviada en la request. Por ejemplo, si se trata de la subida de un archivo: `Content-Type: multipart/form-data`

**Es lo que se le envía al servidor**

Es importante su correcto seteo, especialmente en requests del tipo `POST`, `PUT` y `PATCH`

### `Accept`

Este header le indica al servidor qué tipo de respuesta el cliente espera.

**Es lo que el servidor devuelve**

Por ejemplo, si el servidor responde con una página HTML: `Accept: text/html`

## Query Parameters

Son valores del tipo clave-valor que se envían en la URL y se usan para filtrar, ordenar, paginar, etc.

**Es lo que viene luego del `?` en la URL**

Por ejemplo: `GET /api/products?category=mobile&price=low&page=2`, en este caso `category` se encarga de filtrar, `price` se encarga de ordenar y `page` de paginar.

Estos parámetros son opcionales, generalmente son usados en servicios de búsquedas.

## Path Parameters

Son variables embebidas en la URL que indican un recurso especifico. Son parte de la URL

Por ejemplo: `DELETE /api/orders/123`, indica que hay que eliminar la orden numero 123

Estos parametros son obligatorios y representan indicadores unicos de los recursos. 

## Versioning - Versionado

El Versioning o Versionado es importante ya que es una manera de actualizar APIs sin romper aplicaciones legacy. Por ejemplo, si cambiamos un recurso llamado `name` por `fullname` es mejor hacerlo con la implementacion de dos APIs, la primera podria ser `/api/v1/users` y la segunda `/api/v2/users`.

## CORS

(Ejemplos con Express en la seccion NodeJS)

CORS (Cross-Origin Resource Sharing) es una forma de decirle a los navegadores que está bien compartir recursos (como datos de una API) entre diferentes dominios. Por defecto, los navegadores bloquean solicitudes de un dominio a otro por razones de seguridad. CORS permite que un servidor diga: "Está bien, este dominio puede acceder a mis datos".

**Ejemplo simple:**
- Tu API está en `https://mi-api.com`.
- Tu frontend está en `https://mi-frontend.com`.
- Sin CORS, el navegador bloqueará las solicitudes del frontend a la API.

En resumen, CORS es como un portero que decide quién puede entrar a tu API. Con el paquete `cors`, puedes configurarlo fácilmente en Express.

## Authentication vs Authorization

- **Authentication**: Pregunta quien sos
- **Authorization**: Pregunta que tenes permitido (Ya sabiendo quien sos)

## JWT

JSON Web Token es una herramienta compacta que ofrece un token de seguridad para la tramision de informacion entre el cliente y el servidor.

Una vez que un usuario se logea en el sistema, recibe un JWT que le permite acceder a todos los recursos para los cuales tiene permiso, y este es enviado en cada request. 

Consiste de 3 partes: **Header.Payload.Signature**

- **Header**: El tipo de token y su algoritmo
- **Payload**: La informacion del usuario y sus permisos
- **Signature**: Verifica la integridad del token

```
{
    "userId": 123,
    "role": "admin", 
    "exp": 23434534
}
```
