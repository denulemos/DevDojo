# 🔌 APIs

Una API (Application Programming Interface) es un conjunto de reglas y protocolos que siguen las aplicaciones para comunicarse entre ellas.

Expone las operaciones que se pueden realizar en nuestra app.

Por ejemplo, si se tiene una aplicación que informa sobre el clima, esta información no está directamente puesta en la aplicación, sino que esta llama a un servicio que provee los datos correspondientes para mostrarlos.

Hay tipos de APIs **públicas, privadas y partners (APIs de pago por uso)**.

## Arquitecturas y Tipos {#arquitecturas-y-tipos}

### REST API

REST (Representational State Transfer) es una arquitectura de diseño para aplicaciones que usan protocolos HTTP para comunicarse y para modificar recursos.

Por ejemplo, una aplicación de comida usa las siguientes REST APIs:

- `GET /restaurants`: Obtiene los restaurantes disponibles
- `POST /orders`: Crea una nueva orden
- `GET /orders/{id}`: Obtiene el status de una orden en particular
- `DELETE /orders/{id}`: Cancela una orden

#### REST Constraints

Estas son reglas que definen cómo una REST API debería funcionar.

1. Client-Server
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System

Por ejemplo, se tiene el cliente frontend -> backend hecho con NodeJS -> base de datos MySQL; cada capa funciona de manera independiente de la otra.

### REST vs SOAP

SOAP (Simple Object Access Protocol) es un protocolo de mensajería basado en XML, muy usado en bancos y en sistemas legacy.

| Feature | REST | SOAP |
| --- | --- | --- |
| Protocolo | HTTP | XML Based |
| Formato | JSON | XML |
| Velocidad | Rápido | Más lento |
| Complejidad | Simple | Complejo |
| Uso | Web apps modernas | Sistemas legacy |

### GraphQL

Es un lenguaje query que permite al cliente pedir la data exacta que el mismo precisa.

```
{
  user(id: 1) {
    name
    email
  }
}
```

Soluciona el hecho de que REST a veces devuelve más información de la necesaria.

### REST vs GraphQL

| REST | GraphQL |
| --- | --- |
| Es un link para cada recurso | Es un solo link para varios recursos, endpoint unico |
| Puede tener problemas de sobre-recuperación (más información de la necesaria) o sub-recuperación (menos información de la necesaria), lo cual causa que necesitemos varias consultas para tener lo que precisamos, o que tengamos payloads muy pesados | El cliente puede especificar qué campos quiere en la consulta |
| Es mas facil de desarrollar desde cero pero complicado de escalar | Su inicializacion es compleja, pero si se tienen los datos necesarios, los cambios que se tendrian que hacer serian minimos |
| Como las consultas son con su propio endpoint y pueden ser dentro de todo predecibles, el catching es mucho mas facil de implementar | Como las consultas son variadas, el catching es complicado de implementar, aunque hay tecnicas especificas | 
| Se recomienda usar REST cuando la seguridad y el catching son una prioridad, ademas si tengo clientes que buscan servicios predecibles | Se recomienda cuando es importante el minimizar la cantidad de solicitudes hechas en el servidor |

## Componentes de una API {#componentes-de-una-api}

### Endpoints

Es una URL desde donde se puede acceder a una API específica para realizar ciertas operaciones.

Por ejemplo, en una app bancaria tenemos `/api/accounts` o `/api/transfers`.

### Métodos HTTP

Son operaciones estándar definidas por el protocolo HTTP para la comunicación en la web.

- `GET`: Obtiene
- `POST`: Agrega
- `PUT`: Modifica
- `DELETE`: Elimina
- `PATCH`: Actualiza parcialmente

#### `GET` vs `POST`

| GET | POST |
| --- | --- |
| Usado para obtener información | Usado para el submit de información |
| Parámetros visibles en la URL | Parámetros dados en el body |
| Bookmarkable | No bookmarkable |
| Capacidad de data limitada | Capacidad de data ilimitada |
| Ejemplo: Buscar productos en Amazon `amazon.com/search?q=laptop` | Ejemplo: Realizar un login con contraseña y usuario |

### Query Parameters

Son valores del tipo clave-valor que se envían en la URL y se usan para filtrar, ordenar, paginar, etc.

**Es lo que viene luego del `?` en la URL**

Por ejemplo: `GET /api/products?category=mobile&price=low&page=2`, en este caso `category` se encarga de filtrar, `price` se encarga de ordenar y `page` de paginar.

Estos parámetros son opcionales, generalmente son usados en servicios de búsquedas.

### Path Parameters

Son variables embebidas en la URL que indican un recurso específico. Son parte de la URL.

Por ejemplo: `DELETE /api/orders/123`, indica que hay que eliminar la orden número 123.

Estos parámetros son obligatorios y representan identificadores únicos de los recursos.

### Headers

Son valores del tipo clave-valor enviados con una request HTTP o response que posee metadatos con información extra sobre la request o el response.

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

#### `Content-Type`

Este header especifica el formato de la data que está siendo enviada en la request. Por ejemplo, si se trata de la subida de un archivo: `Content-Type: multipart/form-data`

**Es lo que se le envía al servidor**

Es importante su correcto seteo, especialmente en requests del tipo `POST`, `PUT` y `PATCH`

#### `Accept`

Este header le indica al servidor qué tipo de respuesta el cliente espera.

**Es lo que el servidor devuelve**

Por ejemplo, si el servidor responde con una página HTML: `Accept: text/html`

### HTTP Status Code

Es un código de 3 dígitos que indica el resultado de una request HTTP.

- `200` (Éxito): La solicitud fue procesada correctamente.
  - Ejemplos: `200 OK`, `201 Created`, `204 No Content`
- `300` (Redirección): La solicitud requiere una acción adicional, normalmente una redirección.
  - Ejemplos: `301 Moved Permanently`, `302 Found`, `307 Temporary Redirect`, `308 Permanent Redirect`
- `400` (Error del cliente): La solicitud tiene un problema del lado del usuario/cliente.
  - Ejemplos: `400 Bad Request`, `401 Unauthorized` (puede faltar token), `403 Forbidden` (autenticado pero no autorizado), `404 Not Found`, `429 Too Many Requests`
- `500` (Error del servidor): El servidor no pudo procesar la solicitud correctamente.
  - Ejemplos: `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`

## Diseño y Buenas Prácticas {#diseno-y-buenas-practicas}

### Buenas prácticas

- **Deben encapsular por completo el sistema**, si tenemos que saber cómo funciona por dentro quiere decir que hay problemas de diseño.
- Debe estar **desacoplada** de la lógica interna del sistema. Las APIs se deben modificar lo mínimo posible.
- Las APIs no se modifican, **se versionan**, y si cambian, debe ser retrocompatible.
- Si una API se llama varias veces con los mismos parámetros, debe devolver el mismo resultado, **operaciones idempotentes**, ya que si hacemos un llamado a la API y la misma falla, se debe poder reintentar sin miedo de obtener resultados inesperados.
- **Paginación** para evitar devolver conjuntos enormes de datos en una sola request.
- **Usar operaciones asíncronas**, por ejemplo, si tenemos una API que genera un reporte, podemos devolver un código 200 para indicar que el reporte está siendo creado, y el usuario puede esperar por la respuesta.

### Manejo de errores

Las mejores prácticas para esto son:

- Devolver los códigos HTTP correspondientes, hay servicios que devuelven siempre un `200 OK` y envían el error en el payload, esto **no** es correcto.
- Registrar errores
- No exponer stack traces internos del sistema

Se recomienda tener un **manejo de errores centralizado**, como un middleware en ExpressJS o un Global Handler en Spring Boot.

### Statelessness

Cada request hecha del cliente al servidor debe tener toda la información necesaria para entender y procesar la solicitud. El servidor no guarda ningún tipo de información del cliente entre requests.

### Idempotency - Idempotencia

Una operación es idempotente si ante cada ejecución produce el mismo resultado. Por ejemplo, `POST /payments (with idempotency-key)`, si el usuario reintenta esta operación por un error de red, el pago o la ejecución de esta request es hecha **una sola vez**

Los métodos idempotentes son `GET, PUT` y `DELETE`

`POST` no es idempotente, ya que crea un nuevo recurso en cada ejecución.

### Pagination

Esta divide datasets grandes en chunks más pequeños para **mejorar la performance**

Por ejemplo, en un feed de Instagram:

- Se cargan de a 10 posts
- Al realizar el scroll, se carga el siguiente chunk de 10 posts

`GET /api/posts?page=2&limit=20` -> Devuelve la página dos, que posee hasta 20 posts.

Existen dos approaches para la paginación:

- Offset-based pagination
- Cursor-based pagination (mejor para datasets más grandes)

### Versioning - Versionado

El versioning o versionado es importante ya que es una manera de actualizar APIs sin romper aplicaciones legacy. Por ejemplo, si cambiamos un recurso llamado `name` por `fullname` es mejor hacerlo con la implementación de dos APIs, la primera podría ser `/api/v1/users` y la segunda `/api/v2/users`.

## Seguridad y Control de Tráfico {#seguridad-y-control-de-trafico}

### Seguridad en la API

La seguridad de una API asegura que solo clientes autenticados y autorizados puedan acceder a los recursos. Algunas medidas que se pueden tomar son:

- HTTPS (SSL - TLS Encryption)
- Authentication ([JWT](#jwt), [OAuth](#oauth), API Keys)
- [Authorization](#authentication-vs-authorization) (Acceso basado en Roles)
- Input Validation
- Rate Limiting
- Firewalls

Por ejemplo, en una app bancaria:

- HTTPS encripta las transacciones
- JWT valida a los usuarios
- Rate Limiting evita posibles ataques
- Input Validation previene ataques del tipo SQL Injection

#### Authentication vs Authorization

- **Authentication**: Pregunta quién sos
- **Authorization**: Pregunta qué tenés permitido (ya sabiendo quién sos)

#### JWT

JSON Web Token es una herramienta compacta que ofrece un token de seguridad para la transmisión de información entre el cliente y el servidor.

Una vez que un usuario inicia sesión en el sistema, recibe un JWT que le permite acceder a todos los recursos para los cuales tiene permiso, y este es enviado en cada request.

Consiste de 3 partes: **Header.Payload.Signature**

- **Header**: El tipo de token y su algoritmo
- **Payload**: La información del usuario y sus permisos
- **Signature**: Verifica la integridad del token

```
{
    "userId": 123,
    "role": "admin",
    "exp": 23434534
}
```

1. El usuario envía sus credenciales (`POST /login`)
2. El servidor valida estas credenciales
3. El servidor genera JWT
4. JWT es enviado al cliente
5. El cliente guarda este JWT
6. Este JWT es enviado en todas las request a esa API para identificar al cliente

Este proceso se llama **stateless auth flow**

#### OAuth

Es un framework de autorización que permite que aplicaciones third-party accedan a la información del usuario sin exponer ninguna contraseña.

Por ejemplo, el **Login de Google**, en donde la app nunca ve tu contraseña, y recibe un access token de Google.

#### Refresh Token

Este sirve para obtener un nuevo access token sin necesidad de pedirle al usuario que haga el login de vuelta.

- Puede tener tiempo de expiración
- Se puede refrescar cada cierto tiempo
- No es necesario que el usuario esté iniciando sesión constantemente

### CORS

(Ejemplos con Express en la sección NodeJS)

CORS (Cross-Origin Resource Sharing) es una forma de decirle a los navegadores que está bien compartir recursos (como datos de una API) entre diferentes dominios. Por defecto, los navegadores bloquean solicitudes de un dominio a otro por razones de seguridad. CORS permite que un servidor diga: "Está bien, este dominio puede acceder a mis datos".

**Ejemplo simple:**
- Tu API está en `https://mi-api.com`.
- Tu frontend está en `https://mi-frontend.com`.
- Sin CORS, el navegador bloqueará las solicitudes del frontend a la API.

En resumen, CORS es como un portero que decide quién puede entrar a tu API. Con el paquete `cors`, puedes configurarlo fácilmente en Express.

### API Rate Limiting

Este limita la cantidad de requests que puede realizar un cliente a un servicio en una ventana de tiempo, por ejemplo, 100 requests por minuto por usuario.

- Previene abusos
- Protege recursos
- Asegura el fair usage

Una API sin esta protección se encuentra expuesta a:

- Bot Attacks
- Ataques DDoS
- Crashes del servidor

Cuando se sobrepasa este límite, el servicio devuelve un error `429 Too Many Requests`

### API Throttling

Es un control temporal sobre los request rates cuando la carga del servidor es demasiado alta.

Por ejemplo, si hay un Black Friday en Amazon y se espera un alto flujo de gente, se hace un throttle para evitar que el servidor se caiga.

### API Latency

Es el tiempo que tarda una request en ser respondida correctamente. Mientras más latencia, peor experiencia de usuario. Para disminuirla tenemos las siguientes opciones:

- Caching
- Indexing de la base de datos
- CDN
- Procesamiento Async
