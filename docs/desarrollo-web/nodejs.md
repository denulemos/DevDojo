# 💚 NodeJS

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/NodeJS.md)

### ¿Qué es Node.js y para qué se utiliza?

Node.js es un entorno de ejecución de JavaScript que se ejecuta en el servidor. Fue construido sobre el motor V8 de Google Chrome, lo que le permite ejecutar código JavaScript fuera del navegador. 

Se utiliza principalmente para construir aplicaciones del lado del servidor, como APIs, aplicaciones en tiempo real (chat, notificaciones), servidores web, y más. Su arquitectura basada en eventos y no bloqueante lo hace ideal para manejar múltiples conexiones simultáneamente con alta eficiencia.

Algunas de las ventajas de Node.js incluyen:

- **Velocidad**: Gracias al motor V8, el código JavaScript se ejecuta rápidamente.
- **Escalabilidad**: Su modelo de I/O no bloqueante permite manejar grandes cantidades de solicitudes concurrentes.
- **Ecosistema**: Con npm, Node.js tiene una de las bibliotecas más grandes y activas del mundo.

---

### ¿Cuál es la diferencia entre Node.js y el navegador en cuanto a ejecución de JavaScript?

En términos simples, la diferencia principal entre Node.js y el navegador al ejecutar JavaScript es **dónde y cómo se ejecuta el código**:

1. **Entorno**:
    - En el navegador, JavaScript se ejecuta en un entorno diseñado para interactuar con páginas web. Tiene acceso al DOM (Document Object Model) para manipular elementos de la página y a APIs específicas del navegador como `alert`, `fetch`, o `localStorage`.
    - En Node.js, JavaScript se ejecuta en un entorno del lado del servidor. No tiene acceso al DOM ni a las APIs del navegador, pero ofrece módulos y herramientas para manejar archivos, redes, procesos, y más.

2. **Propósito**:
    - En el navegador, JavaScript se usa principalmente para crear experiencias interactivas en la web.
    - En Node.js, se usa para construir aplicaciones del lado del servidor, como APIs, servidores web, o herramientas de línea de comandos.

3. **APIs disponibles**:
    - El navegador tiene APIs específicas para trabajar con la interfaz de usuario.
    - Node.js tiene módulos como `fs` (para manejar archivos), `http` (para crear servidores), y `os` (para información del sistema operativo).

En resumen, el navegador es para la web y Node.js es para el servidor. Ambos usan JavaScript, pero en contextos muy diferentes.

---

### Event Loop en Node.js


El **Event Loop** en Node.js es un mecanismo fundamental que permite manejar operaciones asíncronas de manera eficiente. Es el encargado de coordinar la ejecución de tareas, la gestión de eventos y las operaciones no bloqueantes.

Node.js utiliza un modelo de ejecución basado en eventos y no bloqueante, lo que significa que puede manejar múltiples operaciones simultáneamente sin necesidad de bloquear el hilo principal. El Event Loop es el componente que hace esto posible.

**¿Cómo funciona el Event Loop?**

1. **Call Stack (Pila de llamadas)**:
    - Es donde se ejecuta el código JavaScript de manera síncrona. Las funciones se apilan y desapilan a medida que se ejecutan.

2. **Node APIs**:
    - Cuando se realiza una operación asíncrona (como leer un archivo o hacer una solicitud HTTP), esta se delega a las APIs de Node.js, que manejan la operación en segundo plano.

3. **Task Queue (Cola de tareas)**:
    - Una vez que una operación asíncrona se completa, su callback se coloca en la cola de tareas, esperando a ser ejecutado.

4. **El Event Loop**:
    - El Event Loop verifica constantemente si el Call Stack está vacío. Si lo está, toma la siguiente tarea de la cola de tareas y la ejecuta.

El Event Loop tiene varias fases, cada una con un propósito específico:

- **Timers**: Ejecuta callbacks programados con `setTimeout` y `setInterval`.
- **I/O Callbacks**: Maneja callbacks de operaciones I/O.
- **Idle, Prepare**: Usado internamente por Node.js.
- **Poll**: Recupera nuevos eventos I/O y ejecuta callbacks relacionados.
- **Check**: Ejecuta callbacks de `setImmediate`.
- **Close Callbacks**: Maneja eventos de cierre, como `socket.on('close')`.

- Permite manejar miles de conexiones concurrentes con un solo hilo.
- Es ideal para aplicaciones en tiempo real, como chats o servidores de streaming.

---

### Módulos en Node.js - CommonJS y ES Modules

Node.js soporta dos sistemas de módulos principales:

**CommonJS (CJS)**

- Es el sistema de módulos por defecto en Node.js.
- Utiliza `require` para importar módulos y `module.exports` o `exports` para exportarlos.
- Se ejecuta de manera síncrona, lo que significa que los módulos se cargan en el orden en que se requieren.

    ```javascript
    // archivo.js
    module.exports = function saludar() {
        console.log("Hola desde CommonJS");
    };

    // main.js
    const saludar = require('./archivo');
    saludar();
    ```

**ES Modules (ESM)**

- Es el sistema de módulos estándar de JavaScript introducido en ES6.
- Utiliza `import` para importar módulos y `export` para exportarlos.
- Se ejecuta de manera asíncrona, lo que permite cargar módulos de forma más eficiente.
- Requiere que los archivos tengan la extensión `.mjs` o que el campo `"type": "module"` esté definido en el `package.json`.

    ```javascript
    // archivo.mjs
    export function saludar() {
        console.log("Hola desde ES Modules");
    }

    // main.mjs
    import { saludar } from './archivo.mjs';
    saludar();
    ```

| Característica         | CommonJS (CJS)         | ES Modules (ESM)       |
|------------------------|------------------------|------------------------|
| Sintaxis               | `require` / `module.exports` | `import` / `export`   |
| Ejecución              | Síncrona              | Asíncrona              |
| Compatibilidad         | Soportado por defecto | Requiere configuración |
| Ámbito de exportación  | Objeto mutable        | Exportación estática   |

En general, CommonJS es ideal para proyectos existentes o cuando se necesita compatibilidad con versiones anteriores de Node.js. Por otro lado, ES Modules es el estándar moderno y se recomienda para nuevos proyectos.

--- 

### NPM y NPX

npm (Node Package Manager) es una herramienta que viene con Node.js y se utiliza para instalar, compartir y gestionar paquetes (bibliotecas o herramientas) de JavaScript. Es como una tienda de aplicaciones, pero para desarrolladores.

**¿Qué hace npm?**
- Instala paquetes desde un repositorio en línea.
- Permite gestionar dependencias de un proyecto.
- Ayuda a ejecutar scripts definidos en el archivo `package.json`.

**¿Qué es npx y en qué se diferencia?**
- npx es una herramienta que también viene con npm (a partir de la versión 5.2.0) y se utiliza para ejecutar paquetes directamente sin necesidad de instalarlos globalmente.
- Es útil para probar herramientas o ejecutar comandos sin ensuciar tu sistema con instalaciones innecesarias.

**Ejemplo práctico:**
- Con npm: Si quieres usar una herramienta como `create-react-app`, primero necesitas instalarla globalmente con `npm install -g create-react-app` y luego ejecutarla con `create-react-app my-app`.
- Con npx: Puedes ejecutarla directamente con `npx create-react-app my-app` sin instalarla globalmente.

En resumen:
- Usa **npm** para instalar y gestionar paquetes.
- Usa **npx** para ejecutar paquetes de manera temporal o probar herramientas sin instalarlas.

--- 

### Nodemon

Nodemon es una herramienta que se utiliza en el desarrollo con Node.js para facilitar el proceso de reinicio del servidor. Normalmente, cuando haces cambios en tu código, necesitas detener y reiniciar manualmente el servidor para que los cambios se reflejen. Nodemon automatiza este proceso.

**¿Cómo funciona?**
- Nodemon observa los archivos de tu proyecto y, cuando detecta un cambio, reinicia automáticamente el servidor.
- Esto ahorra tiempo y mejora la productividad, ya que no necesitas reiniciar el servidor manualmente cada vez que haces un cambio.

**¿Cómo se instala y usa?**
1. Instálalo globalmente con npm:
    ```bash
    npm install -g nodemon
    ```
2. En lugar de ejecutar tu aplicación con `node`, usa `nodemon`:
    ```bash
    nodemon app.js
    ```

**Ventajas:**
- Ideal para desarrollo, ya que no necesitas preocuparte por reiniciar el servidor.
- Compatible con cualquier aplicación Node.js.

---

### Variables de entorno - dotenv

Dotenv es una biblioteca que permite cargar variables de entorno desde un archivo `.env` a `process.env` en Node.js. Esto es útil para mantener información sensible (como claves API, contraseñas o configuraciones) fuera del código fuente.

**Pasos para usar dotenv:**

1. **Instalar dotenv**:

    Ejecuta el siguiente comando para instalar la biblioteca:
    ```bash
    npm install dotenv
    ```

2. **Crear un archivo `.env`**:

    En la raíz de tu proyecto, crea un archivo llamado `.env` y define tus variables de entorno:
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=supersecret
    ```

3. **Configurar dotenv en tu proyecto**:

    En el archivo principal de tu aplicación (por ejemplo, `app.js` o `index.js`), importa y configura dotenv al inicio del archivo:
    ```javascript
    require('dotenv').config();

    console.log(process.env.PORT); // Accede a las variables de entorno
    ```

4. **Usar las variables de entorno**:

    Ahora puedes acceder a las variables definidas en el archivo `.env` usando `process.env`:
    ```javascript
    const port = process.env.PORT || 3000;
    console.log(`El servidor se ejecutará en el puerto: ${port}`);
    ```

Nunca subas tu archivo `.env` al repositorio. Añádelo al archivo `.gitignore` para mantenerlo privado.

**Ventajas de usar dotenv**

- Mantiene las configuraciones sensibles fuera del código.
- Facilita el cambio de configuraciones entre entornos (desarrollo, pruebas, producción).
- Mejora la seguridad y la organización del proyecto.

En resumen, dotenv es como una libreta secreta para tus configuraciones, y `process.env` es la forma de leer esas notas en tu código.

---

### Clustering

Clustering es una técnica que permite aprovechar al máximo los procesadores multinúcleo de un servidor. Por defecto, Node.js utiliza un solo hilo para ejecutar el código, lo que significa que solo puede usar un núcleo del procesador. Con clustering, puedes crear múltiples procesos (llamados "workers") que ejecutan tu aplicación en paralelo, utilizando todos los núcleos disponibles.

- Node.js tiene un módulo llamado `cluster` que permite crear varios procesos hijos (workers) que comparten el mismo puerto del servidor.
- Cada worker es una copia de tu aplicación, pero se ejecuta de manera independiente.
- Un proceso maestro (master) se encarga de distribuir las solicitudes entre los workers.

**¿Cuándo usar clustering?**

- Cuando tu aplicación necesita manejar muchas solicitudes simultáneamente y quieres aprovechar todos los núcleos del procesador.
- Es útil para aplicaciones con alta carga de trabajo, como servidores web o APIs que reciben muchas conexiones.

**Ejemplo básico de clustering:**

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Proceso maestro ${process.pid} está corriendo`);

    // Crear un worker por cada núcleo de CPU
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} murió`);
    });
} else {
    // Workers pueden compartir la conexión TCP
    http.createServer((req, res) => {
        res.writeHead(200);

        res.end('Hola desde Node.js\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} está corriendo`);
}
```

**Ventajas:**

- Mejora el rendimiento al usar todos los núcleos del procesador.
- Permite manejar más solicitudes simultáneamente.

**Desventajas:**

- Los workers no comparten memoria, por lo que debes usar soluciones externas (como Redis) para compartir datos entre ellos.
- Puede ser más complejo de implementar y depurar.

En resumen, clustering es como contratar más empleados (workers) para que trabajen en paralelo y manejen más clientes (solicitudes) al mismo tiempo. Es ideal para aplicaciones que necesitan escalar en servidores con múltiples núcleos.

---

## **ExpressJS**

Express.js es un framework minimalista y flexible para Node.js que facilita la creación de aplicaciones web y APIs. Proporciona una serie de características robustas para el desarrollo del lado del servidor, lo que lo convierte en una de las herramientas más populares en el ecosistema de Node.js.

**Características principales de Express.js:**
- **Simplicidad**: Express es fácil de aprender y usar, lo que permite a los desarrolladores crear aplicaciones rápidamente.
- **Middleware**: Permite el uso de funciones middleware para manejar solicitudes y respuestas, lo que facilita la adición de funcionalidades como autenticación, manejo de errores, y más.
- **Rutas**: Ofrece un sistema de enrutamiento sencillo para definir cómo manejar diferentes solicitudes HTTP (GET, POST, PUT, DELETE).
- **Compatibilidad con plantillas**: Se integra fácilmente con motores de plantillas como EJS, Pug, y Handlebars para generar HTML dinámico.
- **Ecosistema**: Tiene una gran cantidad de middleware y complementos disponibles, lo que permite extender sus funcionalidades fácilmente.

**¿Por qué es tan popular?**
- **Comunidad activa**: Tiene una gran comunidad de desarrolladores que contribuyen con paquetes y middleware, lo que facilita encontrar soluciones a problemas comunes.
- **Flexibilidad**: No impone una estructura rígida, lo que permite a los desarrolladores organizar su código como prefieran.
- **Rendimiento**: Es ligero y rápido, lo que lo hace adecuado para aplicaciones de alto rendimiento.
- **Integración con Node.js**: Al ser un framework para Node.js, se beneficia de todas las características y ventajas de este entorno, como el modelo de I/O no bloqueante.
- **Documentación completa**: La documentación de Express es clara y extensa, lo que facilita su aprendizaje y uso.

**Ejemplo básico de una aplicación Express:**

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware para parsear JSON
app.use(express.json());
// Ruta GET
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
// Ruta POST
app.post('/api', (req, res) => {
    const data = req.body;
    res.json({ message: 'Datos recibidos', data });
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

Crear una API REST simple con Express es fácil y directo. Aquí tienes un ejemplo paso a paso:

1. **Instalar Node.js y Express**  
    Asegúrate de tener Node.js instalado. Luego, crea un proyecto y añade Express:

    ```bash
    mkdir mi-api
    cd mi-api
    npm init -y
    npm install express
    ```

2. **Crear el archivo principal**  
    Crea un archivo llamado `index.js` y escribe el siguiente código básico:

    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    // Middleware para parsear JSON
    app.use(express.json());

    // Rutas simples
    app.get('/', (req, res) => {
         res.send('¡Bienvenido a mi API!');
    });

    // Obtener todos los elementos
    app.get('/items', (req, res) => {
         res.json([{ id: 1, nombre: 'Item 1' }, { id: 2, nombre: 'Item 2' }]);
    });

    // Crear un nuevo elemento
    app.post('/items', (req, res) => {
         const nuevoItem = req.body;
         res.status(201).json({ mensaje: 'Elemento creado', item: nuevoItem });
    });

    // Actualizar un elemento
    app.put('/items/:id', (req, res) => {
         const id = req.params.id;
         const datosActualizados = req.body;
         res.json({ mensaje: `Elemento ${id} actualizado`, datos: datosActualizados });
    });

    // Eliminar un elemento
    app.delete('/items/:id', (req, res) => {
         const id = req.params.id;
         res.json({ mensaje: `Elemento ${id} eliminado` });
    });

    // Iniciar el servidor
    app.listen(port, () => {
         console.log(`Servidor corriendo en http://localhost:${port}`);
    });
    ```

3. **Ejecutar el servidor**  
    Inicia el servidor con el siguiente comando:
    ```bash
    node index.js
    ```

4. **Probar la API**  
    Usa herramientas como Postman o cURL para probar las rutas:
    - `GET /items` para obtener todos los elementos.
    - `POST /items` con un cuerpo JSON para crear un nuevo elemento.
    - `PUT /items/:id` para actualizar un elemento.
    - `DELETE /items/:id` para eliminar un elemento.

### CORS

CORS (Cross-Origin Resource Sharing) es una forma de decirle a los navegadores que está bien compartir recursos (como datos de una API) entre diferentes dominios. Por defecto, los navegadores bloquean solicitudes de un dominio a otro por razones de seguridad. CORS permite que un servidor diga: "Está bien, este dominio puede acceder a mis datos".

**Ejemplo simple:**
- Tu API está en `https://mi-api.com`.
- Tu frontend está en `https://mi-frontend.com`.
- Sin CORS, el navegador bloqueará las solicitudes del frontend a la API.

1. **Instalar el paquete `cors`:**
    ```bash
    npm install cors
    ```

2. **Usarlo en tu servidor:**
    ```javascript
    const express = require('express');
    const cors = require('cors');
    const app = express();

    // Permitir CORS para todos los dominios
    app.use(cors());

    app.get('/datos', (req, res) => {
         res.json({ mensaje: '¡Hola desde la API!' });
    });

    app.listen(3000, () => {
         console.log('Servidor corriendo en http://localhost:3000');
    });
    ```

3. **Configurar CORS para dominios específicos (opcional):**
    ```javascript
    const corsOptions = {
         origin: 'https://mi-frontend.com', // Solo este dominio puede acceder
    };
    app.use(cors(corsOptions));
    ```

En resumen, CORS es como un portero que decide quién puede entrar a tu API. Con el paquete `cors`, puedes configurarlo fácilmente en Express.

---

## Middleware

Un **middleware** en Express es simplemente una función que se ejecuta durante el ciclo de vida de una solicitud HTTP. Se utiliza para procesar solicitudes y respuestas antes de que lleguen a la ruta final o después de que la ruta haya respondido.

**¿Para qué sirve?**

- Manejar tareas comunes como autenticación, validación de datos, manejo de errores, o registro de solicitudes.
- Modificar la solicitud (`req`) o la respuesta (`res`) antes de enviarlas al cliente.

**Ejemplo básico de middleware:**

```javascript
const express = require('express');
const app = express();

// Middleware que se ejecuta para todas las solicitudes
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next(); // Pasa al siguiente middleware o ruta
});

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
```

**Ejemplo con middleware para validar datos:**

```javascript
// Middleware para validar que el cuerpo de la solicitud tenga un campo "nombre"
function validarNombre(req, res, next) {
    if (!req.body.nombre) {
        return res.status(400).send('El campo "nombre" es obligatorio');
    }
    next(); // Si todo está bien, pasa a la siguiente función
}

app.use(express.json()); // Middleware para parsear JSON

app.post('/usuarios', validarNombre, (req, res) => {
    res.send(`Usuario ${req.body.nombre} creado`);
});
```

En resumen, los middlewares son como "filtros" o "intermediarios" que ayudan a procesar las solicitudes y respuestas en Express.


---

## **Performance**

La **performance** de una aplicación Node.js se refiere a su capacidad para manejar solicitudes y operaciones de manera eficiente, minimizando el tiempo de respuesta y el uso de recursos. Dado que Node.js está diseñado para ser asíncrono y no bloqueante, tiene un rendimiento excelente en comparación con otros entornos de ejecución.

Para mejorar la performance de una aplicación Node.js, se pueden aplicar varias estrategias y prácticas recomendadas. A continuación, te detallo algunas de las más importantes:

### Uso de Asincronía y Promesas
Node.js es conocido por su modelo de I/O no bloqueante, lo que significa que las operaciones de entrada/salida (como leer archivos o hacer solicitudes HTTP) no bloquean el hilo principal. Utilizar funciones asíncronas y promesas es clave para aprovechar esta característica.
- **Callbacks**: Aunque son la forma más básica de manejar la asincronía, pueden llevar a un "callback hell" si no se manejan adecuadamente.
- **Promesas**: Permiten encadenar operaciones asíncronas de manera más legible y manejan errores de forma más sencilla.
- **Async/Await**: Introducido en ES2017, permite escribir código asíncrono de manera más similar al código síncrono, mejorando la legibilidad y el manejo de errores.

```javascript
// Ejemplo de uso de async/await
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.example.com/datos');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
```

### Uso de Clústeres
El módulo `cluster` de Node.js permite crear múltiples instancias de tu aplicación que pueden ejecutarse en diferentes núcleos del procesador. Esto mejora la capacidad de manejo de solicitudes concurrentes y aprovecha al máximo los recursos del servidor.

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    // Crear
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} murió`);
    });
} else {
    // Código de la aplicación
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('¡Hola, mundo!');
    }).listen(8000);
}
```

### Optimización de Consultas a Bases de Datos
Las consultas a bases de datos pueden ser un cuello de botella en el rendimiento de una aplicación. Aquí hay algunas prácticas para optimizarlas:
- **Índices**: Asegúrate de que las tablas de tu base de datos tengan índices adecuados para acelerar las consultas.
- **Consultas eficientes**: Evita consultas complejas y costosas. Utiliza paginación para manejar grandes volúmenes de datos.
- **Conexiones en grupo**: Utiliza conexiones en grupo (pooling) para reutilizar conexiones a la base de datos y reducir la sobrecarga de abrir y cerrar conexiones repetidamente.

**4. Uso de Cache**
El cacheo es una técnica que almacena datos temporalmente para evitar cálculos o consultas repetitivas. Esto puede mejorar significativamente el rendimiento de tu aplicación.
- **Cache en memoria**: Utiliza herramientas como Redis o Memcached para almacenar datos en memoria y acceder a ellos rápidamente.
- **Cache de respuestas HTTP**: Configura el cacheo de respuestas en tu servidor para evitar recalcular o volver a consultar datos que no cambian con frecuencia.

```javascript
const redis = require('redis');
const client = redis.createClient();
client.on('error', (err) => {
    console.error('Error de conexión a Redis:', err);
});
client.get('clave', (err, valor) => {
    if (err) throw err;
    if (valor) {
        console.log('Valor en cache:', valor);
    } else {
        // Calcular el valor y almacenarlo en cache
        const nuevoValor = 'Datos calculados';
        client.set('clave', nuevoValor);
        console.log('Nuevo valor almacenado en cache:', nuevoValor);
    }
});
```

### Profiling
Utiliza herramientas de profiling para identificar cuellos de botella en tu aplicación. Node.js ofrece herramientas como `node --inspect` y `clinic.js` que te permiten analizar el rendimiento y detectar problemas.
- **Node Inspector**: Permite depurar y perfilar aplicaciones Node.js en tiempo real.
- **Clinic.js**: Proporciona herramientas para analizar el rendimiento, la memoria y los cuellos de botella en aplicaciones Node.js.

**6. Optimización del Código**
Revisa y optimiza tu código para mejorar el rendimiento. Algunas prácticas incluyen:
- **Evitar operaciones bloqueantes**: No realices operaciones que bloqueen el event loop, como cálculos intensivos o lecturas/escrituras de archivos grandes en el hilo principal.
- **Minimizar el uso de variables globales**: Las variables globales pueden causar problemas de rendimiento y dificultar la depuración.
- **Utilizar módulos nativos**: Siempre que sea posible, utiliza módulos nativos de Node.js en lugar de bibliotecas externas, ya que suelen ser más eficientes.
- **Evitar el uso excesivo de memoria**: Utiliza estructuras de datos eficientes y evita mantener en memoria grandes volúmenes de datos innecesarios.

### Compresion

La compresión de respuestas HTTP puede reducir el tamaño de los datos enviados al cliente, mejorando la velocidad de carga y reduciendo el uso del ancho de banda.
- **Gzip**: Utiliza el middleware `compression` de Express para comprimir las respuestas HTTP.

```javascript
const compression = require('compression');
const express = require('express');
const app = express();
app.use(compression()); // Habilitar compresión de respuestas
app.get('/', (req, res) => {
    res.send('¡Hola, mundo comprimido!');
});
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
```

### Monitoreo y Análisis de Rendimiento
Implementa herramientas de monitoreo para analizar el rendimiento de tu aplicación en producción. Esto te permitirá identificar problemas y optimizar el rendimiento en tiempo real.
- **Herramientas de monitoreo**: Utiliza servicios como New Relic, Datadog o Prometheus para monitorear el rendimiento de tu aplicación y recibir alertas sobre problemas.
- **Logs de rendimiento**: Implementa un sistema de logging que registre métricas clave, como tiempos de respuesta, uso de memoria y errores, para analizar el rendimiento a lo largo del tiempo.

---

## **Escalabilidad**

La **escalabilidad** de una aplicación Node.js se refiere a su capacidad para manejar un número creciente de solicitudes o carga de trabajo sin perder rendimiento ni confiabilidad. Dado que Node.js está basado en un modelo de **event loop** de un solo hilo, tiene ciertas limitaciones en cuanto a cómo manejar múltiples solicitudes simultáneas. Sin embargo, se pueden aplicar varias estrategias para mejorar la escalabilidad de una aplicación Node.js y asegurar que pueda manejar más tráfico y usuarios a medida que crece.

A continuación, te detallo algunas de las principales estrategias para hacer que una aplicación Node.js sea escalable:

### Clusters (Escalabilidad Horizontal)

Aunque Node.js usa un solo hilo para manejar solicitudes, puedes aprovechar todos los núcleos de CPU de tu servidor utilizando el **módulo `cluster`**. Esto permite crear múltiples instancias de tu aplicación Node.js que pueden ejecutarse en diferentes procesos, distribuyendo la carga de trabajo entre varios núcleos de CPU.

- **¿Cómo funciona?** Cada instancia o "worker" del cluster puede manejar su propio conjunto de solicitudes. Si tu servidor tiene varios núcleos de CPU, puedes crear tantos procesos como núcleos haya, lo que mejora el rendimiento y permite que tu aplicación maneje más tráfico.
  
- **Implementación básica con `cluster`:**
  ```javascript
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length; // Número de núcleos disponibles
  
  if (cluster.isMaster) {
    // Crear un worker para cada núcleo del procesador
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    // Código de la aplicación
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello World');
    }).listen(8000);
  }
  ```

### Balanceo de Carga - Load Balancer

El **balanceo de carga** se utiliza para distribuir el tráfico entre múltiples instancias de la aplicación en diferentes servidores o máquinas, de modo que ningún servidor se sobrecargue. Esto es especialmente útil para aplicaciones Node.js en entornos de producción distribuidos.

- **Soluciones comunes de balanceo de carga**:
  - **Nginx o HAProxy**: Puedes usar servidores de balanceo de carga como Nginx o HAProxy para distribuir el tráfico HTTP entre varias instancias de tu aplicación Node.js. Estos servidores pueden distribuir las solicitudes entrantes entre los diferentes procesos de la aplicación (por ejemplo, instancias que están ejecutándose en diferentes máquinas o contenedores).

  - **Load Balancers en la nube**: Servicios como **AWS Elastic Load Balancing** o **Google Cloud Load Balancing** también pueden distribuir las solicitudes entre diferentes servidores.

### Microservicios

Una de las mejores formas de escalar una aplicación Node.js es dividirla en **microservicios**. Los microservicios son una arquitectura que descompone la aplicación en servicios pequeños e independientes, cada uno con su propio dominio de negocio y base de datos. Esto permite que diferentes servicios se escalen de forma independiente según la carga.

- **¿Cómo funciona?** En lugar de una aplicación monolítica, donde todo está en un solo bloque, los microservicios permiten desplegar y escalar cada parte de la aplicación por separado. Si un servicio experimenta una carga alta, puedes escalar solo ese servicio, sin afectar a otros.

- **Beneficios de los microservicios**:
  - Escalabilidad independiente para cada componente.
  - Despliegue y mantenimiento más sencillo.
  - Resiliencia, ya que si un microservicio falla, no afecta a toda la aplicación.

- **Tecnologías asociadas**:
  - **Docker**: Permite empaquetar microservicios en contenedores que pueden ser ejecutados en cualquier entorno.
  - **Kubernetes**: Orquestador de contenedores que facilita la gestión y escalado de microservicios.

### Cacheo de Respuestas

Una de las técnicas clave para mejorar la escalabilidad de una aplicación Node.js es el **cacheo**. Al almacenar en caché las respuestas de las solicitudes más comunes o de larga duración, puedes reducir significativamente la carga en el servidor y acelerar el tiempo de respuesta.

- **Cacheo en memoria**: Puedes usar herramientas como **Redis** o **Memcached** para almacenar respuestas en memoria y evitar hacer consultas repetitivas a bases de datos u otras fuentes externas.

- **Cacheo de respuestas HTTP**: Si tu aplicación maneja muchas solicitudes similares, puedes usar herramientas como **Varnish** o configurar **caching HTTP** en el servidor para almacenar respuestas de manera eficiente.

### Optimización de Base de Datos

Las aplicaciones Node.js a menudo dependen de bases de datos para almacenar y recuperar información. La escalabilidad de tu aplicación también depende de cómo escalas y optimizas tu base de datos.

- **Sharding**: Distribuir datos entre varias bases de datos, de modo que cada base de datos maneje solo una parte de los datos. Esto puede ser especialmente útil en bases de datos NoSQL como MongoDB.

- **Replicación**: Configurar replicación para distribuir las consultas entre varias réplicas de bases de datos y mejorar la disponibilidad.

- **Índices**: Asegúrate de que tu base de datos esté optimizada con índices para mejorar el rendimiento de las consultas.

### Event Loop

El **event loop** de Node.js es el mecanismo que maneja todas las solicitudes de entrada y salida de la aplicación. Es importante optimizar el código para evitar bloqueos del event loop, que pueden afectar negativamente el rendimiento y la capacidad de escalado.

- **Operaciones asincrónicas**: Utiliza operaciones asincrónicas siempre que sea posible para evitar bloquear el event loop. Esto incluye hacer uso de **callbacks**, **promesas** o **async/await**.

- **Worker Threads**: En algunas situaciones, podrías necesitar realizar tareas de procesamiento intensivo. Para evitar que el event loop se bloquee, puedes usar **Worker Threads**, que permiten realizar tareas intensivas en segundo plano sin bloquear la ejecución principal.

### Escalabilidad en la Nube

Node.js se integra muy bien con servicios en la **nube** como **AWS**, **Google Cloud** o **Microsoft Azure**, lo que facilita la escalabilidad automática.

- **Autoescalado**: Estos proveedores en la nube permiten configurar el **autoescalado**, lo que significa que, a medida que la demanda de tu aplicación aumenta, los servidores adicionales se crearán automáticamente, y cuando la demanda disminuye, los recursos se liberan.

- **Funcionalidades como AWS Lambda**: Si tu aplicación es pequeña o tiene tareas que no requieren servidores constantes, puedes aprovechar **AWS Lambda** o **Google Cloud Functions** para manejar cargas de trabajo bajo demanda y solo cobrar por el tiempo de ejecución real.

**8. Manejo de Conexiones Simultáneas**

Node.js es ideal para manejar una gran cantidad de conexiones simultáneas gracias a su arquitectura basada en el event loop. Sin embargo, en aplicaciones de alto tráfico, es importante manejar las conexiones de manera eficiente.

- **Conexiones HTTP/2**: Usar HTTP/2 permite mejorar la eficiencia de las conexiones y reducir la latencia de la comunicación entre el cliente y el servidor.

- **Keep-Alive y conexiones persistentes**: Configura conexiones persistentes para reducir la sobrecarga asociada con la apertura y cierre de nuevas conexiones HTTP.

La escalabilidad en Node.js se puede lograr mediante diferentes estrategias que abarcan desde la **optimización del event loop**, la **escala horizontal con clústeres**, hasta el **uso de microservicios** y **caché**. Implementar estas prácticas te permitirá construir aplicaciones que puedan manejar más tráfico, ser más resilientes y ofrecer una experiencia de usuario más rápida y confiable.

---

## REST vs GraphQL

| REST | GraphQL |
| --- | --- |
| Es un link para cada recurso | Es un solo link para varios recursos, endpoint unico |
| Puede tener problemas de sobre-recuperacion (mas informacion de la necesaria) o sub-recuperacion (Menos informacion de la necesaria), lo cual causa que necesitemos varias consultas para tener lo que precisamos, o tengamos payloads muy pesados | El cliente puede especificar que campos quiere en la consulta |
| Es mas facil de desarrollar desde cero pero complicado de escalar | Su inicializacion es compleja, pero si se tienen los datos necesarios, los cambios que se tendrian que hacer serian minimos |
| Como las consultas son con su propio endpoint y pueden ser dentro de todo predecibles, el catching es mucho mas facil de implementar | Como las consultas son variadas, el catching es complicado de implementar, aunque hay tecnicas especificas | 
| Se recomienda usar REST cuando la seguridad y el catching son una prioridad, ademas si tengo clientes que buscan servicios predecibles | Se recomienda cuando es importante el minimizar la cantidad de solicitudes hechas en el servidor |

---
