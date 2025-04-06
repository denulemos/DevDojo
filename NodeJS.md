<a name="node-base"></a>

| Fundamentos NodeJS |
|----------|
| [¿Qué es Node.js y para qué se utiliza?](#node1)|
|[¿Cuál es la diferencia entre Node.js y el navegador en cuanto a ejecución de JavaScript?](#node2)|
|[¿Qué es el Event Loop en Node.js?](#node3)|
|[¿Qué son los módulos en Node.js? ¿Cuál es la diferencia entre CommonJS y ES Modules?](#node4)|
| [¿Qué es npm y qué diferencia hay con npx?](#node5) |
| [¿Qué es nodemon y para qué se utiliza?](#node6) |
| [¿Cómo usar dotenv para manejar variables de entorno?](#node7) |
| [¿Qué es clustering en Node.js y cuándo lo usarías?](#node8) |
| [Escalabilidad NodeJS](#ent73) |

| Express.js y estructura de APIs |
|----------|
| ¿Qué es Express.js y por qué se usa con Node? |
| ¿Cómo crear una API REST simple con Express? |
| ¿Qué es el middleware en Express y para qué sirve? |
| ¿Cómo estructurar una API REST escalable con Express? |
| ¿Cómo implementar controladores y rutas en Express? |
| ¿Qué son middlewares de error y cómo se crean? |
| ¿Cómo loguear peticiones y errores en producción (winston, morgan)? |

| REST API - Conceptos y Buenas Prácticas |
|----------|
| ¿Qué es una REST API? |
| ¿Qué métodos HTTP se usan comúnmente en una API REST? |
| ¿Qué es CORS y cómo lo manejás en una API REST? |
| ¿Cómo manejar la carga de archivos (file uploads) en Express? |
| ¿Cómo implementar una API versionada (v1, v2...)? |
| [Diferencias entre REST y GraphQL](#ent18) |
| ¿Cómo implementar paginación, filtrado y ordenamiento en una REST API? |
| ¿Cómo se manejan las relaciones entre entidades en una API REST (por ejemplo, usuarios y posts)? |

| Seguridad y Autenticación |
|----------|
| ¿Cómo se realiza la autenticación en una REST API con JWT? |
| ¿Cómo proteger rutas privadas en Express? |
| ¿Cómo manejar rate limiting y prevenir ataques de fuerza bruta? |
| ¿Cómo validar datos en una API (por ejemplo, usando Joi o Zod)? |

---

<a id="node1"></a>

### **¿Qué es Node.js y para qué se utiliza?**

[Volver al indice](#node-base)

Node.js es un entorno de ejecución de JavaScript que se ejecuta en el servidor. Fue construido sobre el motor V8 de Google Chrome, lo que le permite ejecutar código JavaScript fuera del navegador. 

Se utiliza principalmente para construir aplicaciones del lado del servidor, como APIs, aplicaciones en tiempo real (chat, notificaciones), servidores web, y más. Su arquitectura basada en eventos y no bloqueante lo hace ideal para manejar múltiples conexiones simultáneamente con alta eficiencia.

Algunas de las ventajas de Node.js incluyen:

- **Velocidad**: Gracias al motor V8, el código JavaScript se ejecuta rápidamente.
- **Escalabilidad**: Su modelo de I/O no bloqueante permite manejar grandes cantidades de solicitudes concurrentes.
- **Ecosistema**: Con npm, Node.js tiene una de las bibliotecas más grandes y activas del mundo.

<a id="node2"></a>

### **¿Cuál es la diferencia entre Node.js y el navegador en cuanto a ejecución de JavaScript?**

[Volver al indice](#node-base)

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

<a id="node3"></a>

### **¿Qué es el Event Loop en Node.js?**

[Volver al indice](#node-base)

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

<a id="node4"></a>

### **¿Qué son los módulos en Node.js? ¿Cuál es la diferencia entre CommonJS y ES Modules?**

[Volver al indice](#node-base)

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

<a id="node5"></a>

### **¿Qué es npm y qué diferencia hay con npx?**

[Volver al indice](#node-base)

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

<a id="node6"></a>

### **¿Qué es nodemon y para qué se utiliza?**

[Volver al indice](#node-base)

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

<a id="node7"></a>

### **¿Cómo usar dotenv para manejar variables de entorno?**

[Volver al indice](#node-base)

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

<a id="node8"></a>

### **¿Qué es clustering en Node.js y cuándo lo usarías?**

[Volver al indice](#node-base)

Clustering en Node.js es una técnica que permite aprovechar al máximo los procesadores multinúcleo de un servidor. Por defecto, Node.js utiliza un solo hilo para ejecutar el código, lo que significa que solo puede usar un núcleo del procesador. Con clustering, puedes crear múltiples procesos (llamados "workers") que ejecutan tu aplicación en paralelo, utilizando todos los núcleos disponibles.

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

<a id="ent73"></a>

### **Escalabilidad NodeJS**

[Volver al indice](#node-base)

La **escalabilidad** de una aplicación Node.js se refiere a su capacidad para manejar un número creciente de solicitudes o carga de trabajo sin perder rendimiento ni confiabilidad. Dado que Node.js está basado en un modelo de **event loop** de un solo hilo, tiene ciertas limitaciones en cuanto a cómo manejar múltiples solicitudes simultáneas. Sin embargo, se pueden aplicar varias estrategias para mejorar la escalabilidad de una aplicación Node.js y asegurar que pueda manejar más tráfico y usuarios a medida que crece.

A continuación, te detallo algunas de las principales estrategias para hacer que una aplicación Node.js sea escalable:

**1. Uso de Clusters (Escalabilidad Horizontal)**

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

**2. Balanceo de Carga**

El **balanceo de carga** se utiliza para distribuir el tráfico entre múltiples instancias de la aplicación en diferentes servidores o máquinas, de modo que ningún servidor se sobrecargue. Esto es especialmente útil para aplicaciones Node.js en entornos de producción distribuidos.

- **Soluciones comunes de balanceo de carga**:
  - **Nginx o HAProxy**: Puedes usar servidores de balanceo de carga como Nginx o HAProxy para distribuir el tráfico HTTP entre varias instancias de tu aplicación Node.js. Estos servidores pueden distribuir las solicitudes entrantes entre los diferentes procesos de la aplicación (por ejemplo, instancias que están ejecutándose en diferentes máquinas o contenedores).

  - **Load Balancers en la nube**: Servicios como **AWS Elastic Load Balancing** o **Google Cloud Load Balancing** también pueden distribuir las solicitudes entre diferentes servidores.

**3. Desacoplar y Dividir en Microservicios**

Una de las mejores formas de escalar una aplicación Node.js es dividirla en **microservicios**. Los microservicios son una arquitectura que descompone la aplicación en servicios pequeños e independientes, cada uno con su propio dominio de negocio y base de datos. Esto permite que diferentes servicios se escalen de forma independiente según la carga.

- **¿Cómo funciona?** En lugar de una aplicación monolítica, donde todo está en un solo bloque, los microservicios permiten desplegar y escalar cada parte de la aplicación por separado. Si un servicio experimenta una carga alta, puedes escalar solo ese servicio, sin afectar a otros.

- **Beneficios de los microservicios**:
  - Escalabilidad independiente para cada componente.
  - Despliegue y mantenimiento más sencillo.
  - Resiliencia, ya que si un microservicio falla, no afecta a toda la aplicación.

- **Tecnologías asociadas**:
  - **Docker**: Permite empaquetar microservicios en contenedores que pueden ser ejecutados en cualquier entorno.
  - **Kubernetes**: Orquestador de contenedores que facilita la gestión y escalado de microservicios.

**4. Cacheo de Respuestas**

Una de las técnicas clave para mejorar la escalabilidad de una aplicación Node.js es el **cacheo**. Al almacenar en caché las respuestas de las solicitudes más comunes o de larga duración, puedes reducir significativamente la carga en el servidor y acelerar el tiempo de respuesta.

- **Cacheo en memoria**: Puedes usar herramientas como **Redis** o **Memcached** para almacenar respuestas en memoria y evitar hacer consultas repetitivas a bases de datos u otras fuentes externas.

- **Cacheo de respuestas HTTP**: Si tu aplicación maneja muchas solicitudes similares, puedes usar herramientas como **Varnish** o configurar **caching HTTP** en el servidor para almacenar respuestas de manera eficiente.

**5. Optimización de Base de Datos**

Las aplicaciones Node.js a menudo dependen de bases de datos para almacenar y recuperar información. La escalabilidad de tu aplicación también depende de cómo escalas y optimizas tu base de datos.

- **Sharding**: Distribuir datos entre varias bases de datos, de modo que cada base de datos maneje solo una parte de los datos. Esto puede ser especialmente útil en bases de datos NoSQL como MongoDB.

- **Replicación**: Configurar replicación para distribuir las consultas entre varias réplicas de bases de datos y mejorar la disponibilidad.

- **Índices**: Asegúrate de que tu base de datos esté optimizada con índices para mejorar el rendimiento de las consultas.

**6. Optimización del Event Loop**

El **event loop** de Node.js es el mecanismo que maneja todas las solicitudes de entrada y salida de la aplicación. Es importante optimizar el código para evitar bloqueos del event loop, que pueden afectar negativamente el rendimiento y la capacidad de escalado.

- **Operaciones asincrónicas**: Utiliza operaciones asincrónicas siempre que sea posible para evitar bloquear el event loop. Esto incluye hacer uso de **callbacks**, **promesas** o **async/await**.

- **Worker Threads**: En algunas situaciones, podrías necesitar realizar tareas de procesamiento intensivo. Para evitar que el event loop se bloquee, puedes usar **Worker Threads**, que permiten realizar tareas intensivas en segundo plano sin bloquear la ejecución principal.

**7. Escalabilidad en la Nube**

Node.js se integra muy bien con servicios en la **nube** como **AWS**, **Google Cloud** o **Microsoft Azure**, lo que facilita la escalabilidad automática.

- **Autoescalado**: Estos proveedores en la nube permiten configurar el **autoescalado**, lo que significa que, a medida que la demanda de tu aplicación aumenta, los servidores adicionales se crearán automáticamente, y cuando la demanda disminuye, los recursos se liberan.

- **Funcionalidades como AWS Lambda**: Si tu aplicación es pequeña o tiene tareas que no requieren servidores constantes, puedes aprovechar **AWS Lambda** o **Google Cloud Functions** para manejar cargas de trabajo bajo demanda y solo cobrar por el tiempo de ejecución real.

**8. Manejo de Conexiones Simultáneas**

Node.js es ideal para manejar una gran cantidad de conexiones simultáneas gracias a su arquitectura basada en el event loop. Sin embargo, en aplicaciones de alto tráfico, es importante manejar las conexiones de manera eficiente.

- **Conexiones HTTP/2**: Usar HTTP/2 permite mejorar la eficiencia de las conexiones y reducir la latencia de la comunicación entre el cliente y el servidor.

- **Keep-Alive y conexiones persistentes**: Configura conexiones persistentes para reducir la sobrecarga asociada con la apertura y cierre de nuevas conexiones HTTP.

La escalabilidad en Node.js se puede lograr mediante diferentes estrategias que abarcan desde la **optimización del event loop**, la **escala horizontal con clústeres**, hasta el **uso de microservicios** y **caché**. Implementar estas prácticas te permitirá construir aplicaciones que puedan manejar más tráfico, ser más resilientes y ofrecer una experiencia de usuario más rápida y confiable.

<a id="ent18"></a>

### **Diferencias entre REST y GraphQL**

[Volver al indice](#node-base)

| REST | GraphQL |
| --- | --- |
| Es un link para cada recurso | Es un solo link para varios recursos, endpoint unico |
| Puede tener problemas de sobre-recuperacion (mas informacion de la necesaria) o sub-recuperacion (Menos informacion de la necesaria), lo cual causa que necesitemos varias consultas para tener lo que precisamos, o tengamos payloads muy pesados | El cliente puede especificar que campos quiere en la consulta |
| Es mas facil de desarrollar desde cero pero complicado de escalar | Su inicializacion es compleja, pero si se tienen los datos necesarios, los cambios que se tendrian que hacer serian minimos |
| Como las consultas son con su propio endpoint y pueden ser dentro de todo predecibles, el catching es mucho mas facil de implementar | Como las consultas son variadas, el catching es complicado de implementar, aunque hay tecnicas especificas | 
| Se recomienda usar REST cuando la seguridad y el catching son una prioridad, ademas si tengo clientes que buscan servicios predecibles | Se recomienda cuando es importante el minimizar la cantidad de solicitudes hechas en el servidor |