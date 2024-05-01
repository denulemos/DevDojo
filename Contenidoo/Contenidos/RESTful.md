# APIs

### **De que hablamos cuando hablamos de Apps RESTful?**

Cuando hablamos de aplicaciones RESTful, nos referimos a aplicaciones que operan en forma de servicios web, respondiendo consultas a otros sistemas a través de internet, y lo hacen respetando algunas reglas y convenciones

### **Que es una API?**

Una API (sigla de Application Programming Interface) es un conjunto de reglas y especificaciones que describen la manera en que un sistema puede comunicarse con otros.
Definir una API en forma clara y explícita, habilita y facilita el intercambio de mensajes entre sistemas, y permite la colaboración e interoperabilidad entre los mismos, aún cuando éstos hayan sido desarrollados para distintas plataformas e incluso en distintos lenguajes.
Algunas APIs cuentan con una interfaz gráfica que puede ser embebida en un sitio web y directamente usada por un usuario, mientras que otras sólo son de uso interno, es decir que un usuario nunca accederá directamente a ella, sino que será algún programa quien la utilice (internamente).
Por lo dicho, es importante al momento de crear una API también generar la documentación detallada que acompañe, en donde se especifique con precisión cómo se debe interactuar con la misma (esto es, qué tipo de mensajes puede recibir, y qué clase de respuestas se puede esperar de la misma).
Como ejemplo de API con interfaz gráfica accesible directamente por usuarios podemos nombrar la API de Google Maps, que nos permite embeber en nuestros sitios y aplicaciones mapas con toda la información actualizada de google, sin necesidad de haberlos programado.
O también, las APIs de redes sociales como Facebook o Twitter, que nos permiten compartir artículos y publicaciones en las redes desde el mismo sitio que estamos mirando, sin necesidad de salir del mismo, vinculándose automáticamente con nuestra cuenta (previo login), y realizando la publicación del contenido en cuestión.

### **Que es REST?**

REST viene del inglés “REpresentational State Transfer” (o en español: Transferencia de Estado Representacional).
Por Representación nos referimos a un modelo o estructura con la que representamos algo.
Por Estado de una representación, hablamos de los datos que contiene ese modelo estructura.
Transferir un Estado de Representación implica el envío de datos (con una determinada estructura) entre dos partes.

Los dos formatos más utilizados para este tipo de transferencias de datos son XML y JSON.
Ambos formatos permiten asociar valores con identificadores, así como también generar estructuras anidadas.

### **Que es una API REST?**

Este tipo de API tiene como particularidad que no posee interfaz gráfica, y se utiliza exclusivamente para comunicación entre sistemas, mediante el protocolo HTTP.
Para que una API se considere REST, debe cumplir con las siguiente características:

**Arquitectura Cliente / Servidor sin estado**: Cada mensaje HTTP contiene toda la información necesaria para comprender la petición.
Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las
comunicaciones entre mensajes. Esta restricción mantiene al cliente y al servidor débilmente
acoplados. Esto quiere decir que el cliente no necesita conocer los detalles de implementación
del servidor y el servidor se “despreocupa” de cómo son usados los datos que envía al cliente.

**Cacheable**: Las respuestas a las peticiones deben ser marcadas como cacheables o no-cacheables. Si una respuesta es cacheable, el cliente puede reutilizar la respuesta para peticiones futuras. Debe admitir un sistema de almacenamiento en caché. La infraestructura de red debe soportar una caché de varios niveles. Este almacenamiento evitará repetir varias conexiones entre el servidor y el cliente, en casos en que peticiones idénticas fueran a generar la misma respuesta.

**Operaciones comunes**: Todos los recursos detrás de nuestra API deben poder ser consumidos mediante peticiones HTTP, preferentemente sus principales (POST, GET, PUT y DELETE).
Con frecuencia estas operaciones se equiparan a las operaciones CRUD en bases de datos (en inglés: Create, Read, Update, Delete, en español: Alta, Lectura, Modificación, y Baja).
Al tratarse de peticiones HTTP, éstas deberán devolver con sus respuestas los correspondientes códigos de estado, informando el resultado de las mismas.

**Interfaz uniforme**: En un sistema REST, cada acción (más correctamente, cada recurso - ver próximo punto) debe contar con una URI (Uniform Resource Identifier), un identificador único. Ésta nos facilita el acceso a la información, tanto para consultarla, como para modificarla o eliminarla, pero también para compartir su ubicación exacta a terceros.

**Utilización de hipermedios**: Cada vez que se hace una petición al servidor y este devuelve una respuesta, parte de la información devuelta pueden ser también hipervínculos de navegación asociada a otros recursos del cliente. Como resultado de esto, es posible navegar de un recurso REST a muchos otros, simplemente siguiendo enlaces sin requerir el uso de registros u otra infraestructura adicional.

### **Que es un RPC?**

Existe una forma de trabajo que sigue este último modelo, basado en RPC (Remote Procedure Calls, llamadas a procedimientos remotos). En RPC, se pone el énfasis en la diversidad de operaciones que puede realizar el sistema (acciones, usualmente verbos).
Por ejemplo, una aplicación RPC podría definir operaciones como: getUsuario(), addUsuario(),removeUsuario(), updateUsuario(), listUsuarios(), findUsuario()

En REST, al contrario, el énfasis se pone en los recursos (usualmente sustantivos), especialmente en los nombres que se le asigna a cada tipo de recurso.