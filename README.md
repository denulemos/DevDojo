<div align="center">

# DevDojo

![Dev GIF](https://i.pinimg.com/originals/a7/a8/d0/a7a8d06c754cfbbbc37e64cb118c513c.gif)

</div>

Preguntas son agregadas todas las semanas. Se aceptan sugerencias mediante Pull Request!

## Tabla de Temas (Sigue en desarrollo y re-organización)

- [Preguntas mas comunes en entrevistas de trabajo para un FE Engineer](./PreguntasComunes.md)

- [Algoritmos y manejo de datos](./Algoritmos.md)
  - [Programación Funcional y Orientada a Objetos](#alg-base-obj)
  - [Manejo de Eventos y Asincronía](#alg-base-async)
  - [Estructuras Avanzadas y Generics](#alg-base-3)
- [Organizacion en Software - Derecho en IT](./Organizacion.md)
- [Typescript - Javascript](./JSTS.md)
- [Javascript Frameworks y Librerias](#rea-base)
- [HTML - CSS - SCSS](./html.md)
- [React](./react.md)
- [Angular](./Angular.md)
- [Conceptos Generales](#fe-base)
- [Desarrollo Mobile y React Native](./DesarrolloMobile.md)
- [QA](./QA.md)
- [Control de Versiones y Cambios - Integracion Continua](./Versionado.md)
- [Clean Code y Best Practices](./CleanCode.md)
- [Hardware, Sistemas, Infraestructura y Arquitectura](./Hardware.md)
- [Bases de Datos](./BaseDatos.md)
- [Seguridad](./Seguridad.md)
- [Accesibilidad](./Accesibilidad.md)

<a name="alg-base-obj"></a>

| Programación Funcional y Orientada a Objetos |
|----------|
| [Que es la programacion funcional?](#var27-1) 💛 |
| [Que es el Function Factory?](#var20) |
| [Que es el Currying?](#var23)  💛 |
| [¿Qué son las funciones puras y cómo se relacionan con la programación funcional?](#var23-1)|

<a name="alg-base-async"></a>

| Manejo de Eventos y Asincronía |
|----------|
| [Event delegation](#var11) |
| [Bubble vs Capture](#var15) |
| [Funciones de "bloqueo" y "no bloqueo"](#var13) |
|[¿Cómo implementarías un patrón pub/sub para manejar eventos entre diferentes partes de una aplicación?](#var10-5)|

<a name="rea-base"></a>

## [Javascript Frameworks y Librerias](#rea)

<a name="fe-base"></a>

| Conceptos Generales |
|----------|
| [¿De qué hablamos cuando hablamos de una SPA (Single Page App)?](#rea48) 💛|
| [Como evitar mandar muchos eventos inutiles, por ejemplo, ejecutar un search por letra?](#rea50) 💛|
| [Que es async rendering?](#rea51) 💛|
| [Para que son los eventos sinteticos (SyntheticEvent)?](#rea53) |
| [Que significa prop drilling y como evitarlo?](#rea54) |
| [Como puedo mejorar la performance de mi Frontend?](#rea17) 💛|
| [¿Que es async, preload y prefetch?](#rea29) |
| [Cual es la diferencia entre call, bind y apply?](#rea30) |
| [Qué es "REPL" y para qué sirve?](#rea32) |
| [Qué es el "demultiplexer"?](#rea33) |
| [Que hace Babel?](#rea34) |
| [Que hace Webpack?](#rea35) |
| [Que es el server side rendering?](#rea36) |
| [Que es Tree Shaking?](#rea37) |
| [¿Que es el SEO?](#rea38) |
| [Que es la tipificacion de Variables?](#rea41) |
| [Concepto Truthy and Falsy](#rea42) |
| [Que es la Coercion explicita e Implicita?](#rea44) |
| [Que es la expresion de Funcion Inmediatamente Invocada - Immediatelyinvoked Function Expression (IIFE)?](#rea49) |
| [Qué es un Event listener?](#rea50) |
| [isNaN vs Math.isNaN](#rea51) |
| [Que es Symbol?](#rea52) |
| [Cual es la diferencia entre un event loop, microtask y macrotask?](#rea53) |
| [Variable Shadowing - Ocultamiento de Variables](#rea54) |

---

<a id="var27-1"></a>

### **Que es la programacion funcional?** 💛

[Volver al indice](#alg-base-obj)

Es un paradigma de programación que trata de minimizar los cambios de estado y los datos mutables. Se basa en funciones puras, que son funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos.

```jsx
const sum = (a, b) => a + b;
```

La programación funcional se basa en los siguientes principios:

- **Inmutabilidad**: Los datos no cambian una vez que se han creado.
- **Funciones puras**: Las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos.
- **Composición de funciones**: Las funciones se pueden combinar para crear funciones más complejas.
- **Declaratividad**: Se centra en qué se quiere hacer, no en cómo hacerlo.
- **Transparencia referencial**: Dado un valor de entrada, la función siempre devolverá el mismo valor de salida.
- **Recursión**: Se pueden definir funciones que se llaman a sí mismas para resolver problemas de manera iterativa.
- **Funciones de orden superior**: Las funciones pueden tomar otras funciones como argumentos o devolver funciones como resultado.
- **Evaluación perezosa**: Los valores se calculan solo cuando se necesitan.
- **Currying**: Transformar una función que toma varios argumentos en una secuencia de funciones que toman un solo argumento.

<a id="var20"></a>

### **Que es el Function Factory?**

[Volver al indice](#alg-base-obj)

Son funciones que crean funciones u objetos. Con este patron se puede implementar Currying

```jsx
const crearUsuario = ({ userName, avatar }) => ({
      id: crearUnID(),
      userName,
      avatar,
      cambiarUserName (userName) {
        this.userName = userName;
        return this;
      },
      cambiarAvatar (url) {
        // ejecuta logica para obtener el avatar desde la url
        const nuevoAvatar = obtenerAvtarDesdeUrl(url)
        this.avatar = nuevoAvatar
        return this
      }
    });

        console.log(crearUsuario({ userName: 'Bender', avatar: 'bender.png' }));

    {
      "id":"17hakg9a7jas",
      "avatar": "bender.png",
      "userName": "Bender",
      "cambiarUsername": [Function cambiarUsername]
      "cambiarAvatar": [Function cambiarAvatar]

    }
    */
```

<a id="var23"></a>

### **Que es el Currying?** 💛

[Volver al indice](#alg-base-obj)

Es una técnica de programación funcional que consiste en transformar una función que recibe múltiples argumentos en una secuencia de funciones que reciben un solo argumento.

```jsx
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30); // 60
```

<a id="var23-1"></a>

### **¿Qué son las funciones puras y cómo se relacionan con la programación funcional?**

[Volver al indice](#alg-base-obj)

Las funciones puras son funciones que siempre devuelven el mismo resultado dadas los mismos parametros, no dependen de factores externos como states o variables.

```jsx
function suma (a, b) {
  return a + b;
}

function agregarElemento(array, elemento) {
  return [...array, elemento]; // Crea un nuevo array sin modificar el original
}

const miArray = [1, 2, 3];
const nuevoArray = agregarElemento(miArray, 4);

console.log(miArray);      // [1, 2, 3] (el array original no se modifica)
console.log(nuevoArray);   // [1, 2, 3, 4]

```

Una funcion que no es pura se puede ver asi:

```jsx
let contador = 0;

function incrementar(a) {
  contador++; // Modifica el estado externo
  return a + contador;
}
```

Si utilizas funciones puras, puedes:

- Evitar errores al no modificar datos globales ni estados externos.
- Hacer pruebas unitarias fácilmente, porque su comportamiento es predecible.
- Aprovechar características como la memoización, donde puedes guardar los resultados de funciones puras y reutilizarlos para optimización.

---

<a id="var11"></a>

### **Event delegation**

[Volver al indice](#alg-base-async)

Por ejemplo, si tenemos botones y queremos hacer eventos para todos los botones, no es viable hacer un evento por boton ya que no es escalable.

Agregamos el evento al container y dependiendo donde es el click (en cual boton), se detecta una cierta clase o propiedad, y se ejecuta el evento correspondiente utilizando [`e.target`](http://e.target) para identificar el elemento, por ejemplo.

<a id="var15"></a>

### **Bubble vs Capture**

[Volver al indice](#alg-base-async)

Cuando agregamos un elemento parece que solo lo agregamos a un elemento DOM pero en realidad este se propaga en una direccion. Podemos elegir cual direccion escuchan nuestros eventos.

- Fase Capture: Llega al evento que dispara el evento
- Fase Target
- Fase Bubbling

<a id="var13"></a>

### **Funciones de "bloqueo" y "no bloqueo"**

[Volver al indice](#alg-base-async)

Cuando emites una función de bloqueo, las demás piezas de código detienen su ejecución hasta que haya sido completado un evento designado de Entrada/Salida.

A su vez, las funciones de no bloqueo le permiten al desarrollador realizar múltiples tareas (Manteniendo múltiples códigos en ejecución) mientras que simultáneamente se realizan múltiples eventos de Entrada/Salida.

<a id="var10-5"></a>

### **¿Cómo implementarías un patrón pub/sub para manejar eventos entre diferentes partes de una aplicación?**

[Volver al indice](#alg-base-async)

El patrón pub/sub (publicación/suscripción) es un patrón de diseño de software que permite la comunicación entre diferentes partes de una aplicación.

```jsx
// Implementación de un patrón pub/sub
const pubsub = (function() {
  const events = {};

  // Suscribirse a un evento
  function subscribe(eventName, fn) {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  }

  // Publicar un evento
  function publish(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }

  return {
    subscribe,
    publish
  };
})();

// Uso del patrón pub/sub
function mySubscriber(data) {
  console.log(data);
}

// Suscribirse a un evento
pubsub.subscribe('event1', mySubscriber); // Suscribirse a 'event1'
pubsub.publish('event1', 'hello, world!'); // Publicar 'event1'

// Salida: 'hello, world!'
```

---

<a id="cic67"></a>

### **Imagina que un cliente te dice que la aplicación es lenta y quiere que la aceleres, pero no te da más detalles. ¿Cómo manejarías esta situación?** 💛

[Volver al indice](#cic-base-2)

**Entender el Problema**

Lo primero es obtener más información para comprender bien el contexto del problema. Preguntaría cosas como:

- ¿Cuáles son las áreas específicas de la aplicación que están lentas (carga inicial, navegación, interacciones específicas)?
- ¿Es lento en todas las plataformas (móvil, escritorio) o solo en una?
- ¿En qué condiciones o momentos de uso notas la lentitud (por ejemplo, al iniciar sesión, al cargar ciertos datos, en ciertas operaciones)?
- ¿Estás observando una disminución del rendimiento con el tiempo, o es algo que ocurre de manera constante?

Con estos detalles, puedo comenzar a identificar patrones y áreas específicas que necesitan ser mejoradas.

**Reproducir el Problema**

Es importante intentar reproducir la lentitud en mi entorno de desarrollo para ver si se puede identificar el origen del problema. Para esto, podría usar herramientas de monitoreo y registro (logs) en tiempo real para detectar cualquier irregularidad.

**Diagnóstico**

Realizar un análisis exhaustivo del rendimiento es clave. Usaría herramientas como:

- Herramientas de desarrollo del navegador (Chrome DevTools, Firefox Developer Tools): Para analizar el tiempo de carga, uso de recursos (CPU, memoria), red (requests/responses), y detectar posibles cuellos de botella.
- Lighthouse: Para realizar auditorías automáticas y obtener una visión general del rendimiento, accesibilidad, y mejores prácticas.
- Monitoring Tools: Si es una aplicación ya en producción, usar herramientas como New Relic, Datadog, o Sentry puede proporcionar métricas de rendimiento a nivel de servidor, base de datos y frontend.

**Identificar Posibles Causas Comunes**

Algunas áreas que podrían estar contribuyendo a la lentitud incluyen:

- Tiempo de carga inicial: Si el tiempo de carga es lento, podría ser por un exceso de archivos JavaScript o CSS pesados, imágenes no optimizadas, o mala gestión de cachés.
- Problemas con la red o el backend: Consultar con el equipo de backend para verificar la velocidad de las API y la base de datos.
- JavaScript ineficiente: Revisar si hay scripts largos, sincrónicos o mal estructurados que bloqueen el hilo principal.
- Problemas de renderizado en el frontend: Si se trata de una aplicación de React, Angular, o similar, revisar la optimización de la renderización, evitar re-renderizados innecesarios, y utilizar técnicas como "memoization", lazy loading y virtualización.

**Optimización**

Una vez identificado el problema, podría proceder con soluciones como:

- Optimización de imágenes y recursos estáticos: Comprimir imágenes, usar formatos modernos (como WebP), y asegurarse de que los archivos CSS y JS estén minimizados y combinados.
- Lazy loading y code splitting: Cargar solo los módulos y componentes necesarios en cada página, para evitar que la aplicación cargue más de lo necesario al principio.
- Optimización del backend: Si el problema está en la interacción con el backend, podría optimizar las consultas a la base de datos o implementar cachés.
- Mejorar el rendimiento en la renderización de la UI: En aplicaciones React o Angular, revisar la lógica de renderizado y usar técnicas como memoización, debouncing, o use of virtual DOM optimizations.

**Pruebas de Rendimiento**

Después de realizar las optimizaciones, es importante medir de nuevo el rendimiento para asegurarse de que el problema haya sido resuelto y si la aplicación responde de manera más eficiente.

En resumen, manejaría esta situación con un enfoque metódico: primero recolectando información, luego diagnosticando la causa, optimizando el sistema según sea necesario, y asegurando que la mejora sea efectiva antes de comunicar los resultados al cliente.

<a id="cic68"></a>

### **¿Cuáles son los posibles riesgos de adoptar una nueva tecnología en el proyecto? ¿Cómo mitigarlos?**

[Volver al indice](#cic-base-2)

En mi experiencia tuve que enfrentar una migracion de una aplicacion muy antigua de AngularJS a Angular. Algunos de los desafios que enfrente fueron los siguientes:

- Hacerle entender al cliente que el cambio era necesario: Se estaban planificando cambios a futuro que incluian el uso de librerias de componentes que no eran compatibles con AngularJS pero si con las nuevas versiones de Angular, por lo que era necesario migrar la aplicacion para no reinventar lo ya hecho.
- Capacitacion del equipo: El equipo no tenia experiencia con Angular, por lo que fue necesario capacitarlos en la nueva tecnologia. Que todo el equipo entendiera la diferencia entre ambos, aunque su mismo nombre (o similar) pueda llevar a confusiones.
- Riesgo de retrasos en el proyecto: La migracion de una aplicacion de AngularJS a Angular no es un proceso sencillo y puede llevar mas tiempo del esperado. Por lo que fue necesario planificar bien los tiempos y recursos necesarios para llevar a cabo la migracion.
- Riesgo de errores y bugs: Al migrar una aplicacion a una nueva tecnologia es probable que aparezcan errores y bugs que no se habian detectado antes. Por lo que fue necesario realizar pruebas exhaustivas para asegurarse de que todo funcionaba correctamente.
- Riesgo de Integración con Sistemas Existentes: La aplicacion tenia integraciones con otros sistemas que no habian sido probadas con AngularJS, por lo que fue necesario realizar pruebas de integracion para asegurarse de que todo funcionaba correctamente.

En resumen, los riesgos de adoptar una nueva tecnología pueden gestionarse a través de una planificación cuidadosa, pruebas exhaustivas, capacitación continua, y una gestión adecuada de recursos y expectativas. La mitigación de estos riesgos no solo depende de un análisis exhaustivo antes de tomar la decisión, sino también de una gestión activa durante todo el ciclo de vida del proyecto.

<a id="cic69"></a>

### **Algunos miembros de tu equipo no pueden ponerse de acuerdo sobre una solución. Discuten y no pueden tomar una decisión. ¿Cómo resolverías esta situación conflictiva?**

[Volver al indice](#cic-base-2)

Cuando los miembros del equipo no pueden ponerse de acuerdo sobre una solución y la discusión se estanca, es importante intervenir de manera constructiva para resolver el conflicto de manera efectiva. Aquí tienes algunos pasos que seguiría para manejar la situación:

### 1. **Escuchar a Todas las Partes:**
   - **Descripción:** Primero, es esencial dar a cada miembro del equipo la oportunidad de exponer su perspectiva y razones para apoyar su enfoque. Escuchar activamente, sin interrumpir, puede ayudar a comprender mejor las diferentes posiciones y los argumentos detrás de cada propuesta.
   - **Acción:** Organiza una reunión donde cada miembro pueda explicar su propuesta, sin juicios previos. Esto también permite que las emociones y frustraciones se expresen, lo cual es importante para desactivar tensiones.

### 2. **Identificar los Puntos en Común:**
   - **Descripción:** Aunque el equipo no esté de acuerdo en la solución, probablemente haya puntos comunes o metas compartidas. Es crucial enfocarse en lo que une al equipo, no en lo que los separa.
   - **Acción:** Facilita una discusión en la que se resalten los objetivos comunes del equipo (por ejemplo, la necesidad de una solución escalable, fácil de mantener o eficiente). Esto ayuda a encaminar el diálogo hacia un terreno más colaborativo.

### 3. **Fomentar un Debate Constructivo:**
   - **Descripción:** En lugar de centrarse en que cada miembro “gane” la discusión, enfócate en fomentar un debate productivo que permita al equipo evaluar las ventajas y desventajas de cada opción. Es importante que las críticas sean constructivas y no personales.
   - **Acción:** Utiliza preguntas abiertas para guiar el debate: “¿Cuáles son las ventajas de esta propuesta frente a la otra?”, “¿Qué riesgos implica esta solución?”, “¿Cómo podemos combinar elementos de ambas propuestas para obtener lo mejor de cada una?”

### 4. **Establecer Criterios Objetivos para la Decisión:**
   - **Descripción:** A veces el conflicto surge porque no hay un marco claro para tomar decisiones. Establecer criterios objetivos puede ayudar a enfocar la discusión hacia una solución lógica, en lugar de emocional o subjetiva.
   - **Acción:** Define criterios claros de evaluación para tomar la decisión, como el costo, el tiempo de implementación, la complejidad técnica, la escalabilidad, etc. Esto convierte la decisión en un análisis objetivo basado en las necesidades del proyecto.

### 5. **Buscar un Compromiso o Solución Intermedia:**
   - **Descripción:** Si las propuestas son mutuamente excluyentes, buscar un compromiso o una solución híbrida puede ser una forma de resolver el conflicto sin perder el valor de las ideas de cada miembro del equipo.
   - **Acción:** Propón integrar los mejores aspectos de ambas soluciones. Por ejemplo, si una propuesta es más simple pero menos escalable, y la otra es más compleja pero más robusta, ¿pueden fusionarse elementos de ambas para obtener lo mejor de cada una?

### 6. **Tomar una Decisión de Forma Democrática o por Consenso:**
   - **Descripción:** Si después de la discusión el equipo sigue sin llegar a un acuerdo, una forma de avanzar es tomar una decisión de forma democrática, donde se vote sobre las opciones disponibles.
   - **Acción:** Si es apropiado, organiza una votación con opciones claras. Si la opción ganadora no es la preferida por todos, se puede acordar un plan para monitorear su implementación y estar dispuestos a realizar ajustes si es necesario.

### 7. **Asignar a un Decisor Final (si es necesario):**
   - **Descripción:** Si el conflicto persiste y es necesario tomar una decisión rápida para avanzar, puede ser útil que un líder o un responsable del proyecto tome la decisión final. Sin embargo, esto debe hacerse con sensibilidad y considerando que el equipo pueda sentir que su opinión ha sido valorada, incluso si no se les da la última palabra.
   - **Acción:** Como líder o facilitador, podrías tomar la decisión final después de haber escuchado a todos los miembros y evaluado los pros y contras. Asegúrate de comunicar de manera clara cómo se llegó a esa decisión y cómo se tomaron en cuenta las diferentes perspectivas.

### 8. **Fomentar la Colaboración a Largo Plazo:**
   - **Descripción:** Los conflictos en equipos no solo se resuelven con una sola decisión, sino con una cultura de trabajo colaborativa y de respeto mutuo. Asegurarte de que el equipo se enfoque en la cooperación y el trabajo en equipo evitará futuros conflictos.
   - **Acción:** Después de resolver la situación, es importante reflexionar con el equipo sobre cómo pueden mejorar la comunicación y la colaboración a futuro. Pueden establecerse normas de trabajo en equipo que fomenten la escucha activa, el respeto y la búsqueda de consenso.

### 9. **Revisar el Proceso Después de la Implementación:**
   - **Descripción:** Después de tomar una decisión y ponerla en marcha, realiza un seguimiento para asegurarte de que la solución elegida está funcionando bien. Si surge algún problema, es importante estar dispuesto a ajustar el enfoque.
   - **Acción:** Planifica reuniones periódicas de retroalimentación para evaluar cómo la solución está funcionando en la práctica y si se necesitan cambios o mejoras.

---

### Resumen del Enfoque:
1. **Escuchar a todas las partes** para entender sus puntos de vista.
2. **Buscar puntos en común** y centrar la discusión en los objetivos del proyecto.
3. Fomentar un **debate constructivo** basado en datos y hechos.
4. Establecer **criterios objetivos** para tomar decisiones.
5. Buscar **compromisos** o soluciones híbridas si es posible.
6. Si es necesario, tomar una decisión **democrática** o **por consenso**.
7. **Asumir la responsabilidad** de tomar una decisión final si no hay acuerdo.
8. Fomentar la **colaboración y el respeto** en el equipo a largo plazo.
9. **Monitorear la implementación** para realizar ajustes si es necesario.

Este enfoque puede ayudar a resolver el conflicto de manera justa y equilibrada, promoviendo la unidad del equipo y asegurando que se tomen decisiones informadas y orientadas al éxito del proyecto.


<a id="cic70"></a>

### **¿Cómo motivas a tu equipo y qué enfoques conoces? ¿Existe algún motivador universal para todos?**

[Volver al indice](#cic-base-2)

### 1. **Reconocimiento y Agradecimiento:**
   - Reconocer y agradecer el esfuerzo y los logros del equipo es una forma poderosa de motivación. El reconocimiento público, premios, o simplemente un agradecimiento sincero pueden tener un impacto positivo en la moral y la motivación del equipo.

### 2. **Desarrollo Profesional:**
    - Ofrecer oportunidades de crecimiento y desarrollo profesional es un motivador clave para muchos empleados. Esto puede incluir capacitación, mentoría, asignación de proyectos desafiantes, y promoción interna. Aunque esto depende mas de los puestos de management y no tanto de un lider tecnico.

### 3. **Feedback Constructivo:**
    - Proporcionar feedback regular y constructivo es fundamental para la motivación. Los empleados valoran la retroalimentación honesta y específica sobre su desempeño, y la oportunidad de aprender y mejorar.

### 4. **Ambiente de Trabajo Positivo:**
    - Crear un ambiente de trabajo positivo y colaborativo es esencial para la motivación. Fomentar la comunicación abierta, el trabajo en equipo, y la diversión en el trabajo puede aumentar la satisfacción y el compromiso de los empleados.

### 5. **Propósito y Sentido de Contribución:**
    - Ayudar a los empleados a comprender cómo su trabajo contribuye al éxito de la organización y al logro de metas más amplias puede ser un motivador poderoso. Comunicar la visión y los objetivos de la empresa puede aumentar la motivación y el compromiso.

### 6. **Flexibilidad y Equilibrio entre el Trabajo y la Vida Personal:**
    - Ofrecer flexibilidad en los horarios de trabajo, la posibilidad de trabajar desde casa, y apoyar el equilibrio entre el trabajo y la vida personal puede ser un motivador importante para muchos.

### 7. **Participación y Empoderamiento:**
    - Involucrar a los empleados en la toma de decisiones, darles autonomía y responsabilidad sobre su trabajo, y permitirles contribuir con ideas y soluciones puede aumentar la motivación y el compromiso.


<a id="cic70-1"></a>

### **¿Cómo delegas tareas en tu equipo y cómo varía tu enfoque dependiendo de la antigüedad del miembro del equipo?**

[Volver al indice](#cic-base-2)

Delegar tareas de manera efectiva es clave para maximizar la productividad del equipo, fomentar el desarrollo de habilidades y garantizar que los proyectos avancen correctamente. El enfoque para delegar puede variar dependiendo de la experiencia, antigüedad y nivel de confianza del miembro del equipo. Aquí hay una descripción detallada de cómo podría manejarlo:

---

### **1. Evaluar la tarea y sus requerimientos**
Antes de delegar, es importante comprender la complejidad, prioridad y dependencia de la tarea. Preguntas clave:
- ¿Requiere conocimientos técnicos avanzados o específicos?
- ¿Tiene una fecha límite ajustada?
- ¿Impacta a otras partes del proyecto?
Esto me ayuda a decidir a quién asignar la tarea según su nivel de experiencia.

---

### **2. Delegar según el nivel de experiencia**
El nivel de experiencia del miembro del equipo influye directamente en la forma en que se delega la tarea y el nivel de supervisión.

#### **Miembros junior (nivel inicial)**
- **Enfoque**: Darles tareas más claras, delimitadas y con un alcance bien definido. Estas tareas suelen tener menor impacto crítico y pueden ser oportunidades de aprendizaje.
- **Estrategia**:
  - Proporcionar instrucciones detalladas y un objetivo claro.
  - Asignar tareas donde puedan desarrollar habilidades específicas.
  - Supervisar más de cerca y revisar frecuentemente su progreso.
  - Ser accesible para resolver dudas y brindar apoyo.
- **Ejemplo**: "Quiero que implementes este componente siguiendo este diseño. Si tienes dudas con la estructura o lógica, revisémoslas antes de avanzar."

#### **Miembros de nivel medio**
- **Enfoque**: Confiar en su capacidad para completar tareas con menor supervisión, pero aún dando un poco de orientación cuando sea necesario.
- **Estrategia**:
  - Asignar tareas con mayor complejidad, pero que no afecten de manera crítica al proyecto.
  - Establecer puntos de control para validar el progreso.
  - Fomentar su autonomía y proactividad al resolver problemas.
- **Ejemplo**: "Implementa este módulo. Asegúrate de integrar correctamente con el backend, y programemos una revisión después de que completes el 50%."

#### **Miembros senior (alto nivel de experiencia)**
- **Enfoque**: Darles autonomía total en tareas estratégicas o críticas y confiar en su criterio.
- **Estrategia**:
  - Asignar responsabilidades clave, como liderar partes complejas del proyecto.
  - Fomentar que definan su propio enfoque para resolver problemas.
  - Incluirlos en decisiones de alto nivel y en mentoría de otros miembros.
- **Ejemplo**: "Tenemos un problema con la arquitectura actual del proyecto. ¿Puedes liderar la investigación de opciones y proponer una solución?"

---

### **3. Supervisión y seguimiento**
El nivel de supervisión varía según la experiencia del miembro:
- **Junior**: Revisiones más frecuentes (diarias o semanales) para asegurarse de que están en el camino correcto.
- **Nivel medio**: Check-ins ocasionales o revisiones en puntos clave del progreso.
- **Senior**: Supervisión mínima; confiar en su experiencia y proporcionar feedback al final del ciclo.

---

### **4. Fomentar la comunicación abierta**
Independientemente de la antigüedad, siempre dejo claro que pueden acercarse si tienen dudas, enfrentan obstáculos o necesitan ajustar plazos. Esto genera confianza y ayuda a prevenir problemas antes de que se agraven.

---

### **5. Delegar con aprendizaje en mente**
Siempre considero cómo las tareas que asigno pueden contribuir al desarrollo profesional de los miembros del equipo:
- **Junior**: Les doy tareas que amplíen sus conocimientos básicos y habilidades técnicas.
- **Medio**: Les asigno tareas que los expongan a nuevas responsabilidades, como comunicación con stakeholders o resolver problemas más abstractos.
- **Senior**: Los desafío con tareas que requieran innovación o pensamiento estratégico.

---

### **6. Retroalimentación al finalizar**
Una vez completada la tarea:
- **Para juniors**: Brindar feedback detallado sobre lo que hicieron bien y dónde mejorar.
- **Para niveles medios**: Reconocer su progreso y discutir cómo podrían optimizar su enfoque.
- **Para seniors**: Discutir su trabajo en un nivel más estratégico, como el impacto general en el proyecto.

---

### **Resumen de mi enfoque**
- **Evaluar las habilidades del miembro y las demandas de la tarea.**
- **Asignar tareas de acuerdo con el nivel de experiencia.**
- **Supervisar proporcionalmente según la antigüedad.**
- **Fomentar la comunicación abierta para resolver bloqueos.**
- **Dar retroalimentación constructiva después de completar la tarea.**

Este enfoque ayuda a mantener al equipo alineado, desarrollar sus habilidades y garantizar que las tareas sean manejadas de manera eficiente según las capacidades individuales. ¿Quieres ejemplos específicos de tareas técnicas o gestión para cada nivel?

---

<a id="rea"></a>

# Frontend Frameworks and Libraries

<a id="rea48"></a>

### **¿De qué hablamos cuando hablamos de una SPA (Single Page App)?**

[Volver al indice](#fe-base)

Una SPA (Single Page Application) son apps web que simulan ser una única página con contenido dinámico. La idea es darle la “ilusión” al usuario de que está navegando una aplicación de escritorio, que no recarga, no se satura, etc.

Las únicas recargas, o pantallas de carga, son cuando se está trayendo información del servidor. No se recarga toda la página, aun así, solo ciertas partes, dando a una experiencia mucho más fluida.

En resumen:

- Se evita la constante recarga entera de la página
- La página no se satura ni realiza peticiones constantes al servidor. Únicamente se pide lo necesario.

<a id="rea50"></a>

### **(Performance) Como evitar mandar muchos eventos inutiles, por ejemplo, ejecutar un search por letra?**

[Volver al indice](#rea-base)

Debounce es un termino de electronica que ayuda a que, por ejemplo, si apretamos varias veces un boton, no se manden muchas veces las instrucciones

```jsx
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeoutId)
}, [value])

return debouncedValue;
}

// Luego en el component que tiene el search

const queryDebouncedValue = useDebounce(query, 300)

useEffect(() => {
api.search(queryDebouncedValue).then(setProducts);
}, [queryDebouncedValue]);
```

<a id="rea51"></a>

### **Que es async rendering?**

[Volver al indice](#rea-base)

Permite que el renderizado pueda interrumpirse, permitiendo renderizar varios arboles de componentes a la vez sin necesidad de bloquear el hilo principal del navegador.

<a id="rea53"></a>

### **Para que son los eventos sinteticos (SyntheticEvent)?**

[Volver al indice](#rea-base)

Funcionan de la misma forma que los eventos normales de los exploradores. Los eventos sinteticos usan codigo que puede ser aplicado en multiples exploradores web mientras que los eventos normales se enfocan en un solo navegador

Ayuda a que el dev no se preocupe tanto en como manejar un evento segun el navegador para el cual esta desarrollando, ya que estos eventos simulan muchos eventos y garantiza el mismo comportamiento.

<a id="rea54"></a>

### **Que significa prop drilling y como evitarlo?**

[Volver al indice](#rea-base)

Es cuando las props que se comparten acumulan demasiadas dependencias. Da lugar a flujos de datos profundos, dificiles de identificar y refactorizar. Dos formas de resolverlo son:

- Composicion de componentes frente a un mismo juego de datos compartido por varios componentes
- Redux o API Context, aptas para escenarios mas complejos donde conviene manejar un estado global. 


<a id="rea17"></a>

### **Como puedo mejorar la performance de mi Frontend?**

[Volver al indice](#rea-base)

**Paginacion**: No se puede renderizar mucha informacion al mismo tiempo, hace un payload gigante, y satura a la base de datos. Es preferible pedir de a pedazos de data para disminuir el peso en el Backend

**Queries Optimistics**: Mostrar el cambio en la UI independientemente del resultado del servidor, como el like de Instagram, primero se anima, luego se ejecuta la peticion de forma asincrona, y luego se tiene en cuenta el resultado

**Pedir solo lo necesario**: Solo pedir los datos necesarios, no traer cosas de más. Hay muchas aplicaciones hechas front-first, donde el back adapta sus servicios a lo que el front necesita.

**Tener un connection state**: Si no hay internet, no realizar peticiones. Como Youtube, cualquier cosa que quiera hacer el cliente sin internet, no se va a realizar para nada.

**Group Notifications**: Si la aplicacion utiliza notificaciones, hacerlo de a grupos para no hacer jobs grandes

**Evitar queries expensive**: Por ejemplo, Twitter no da la opcion de seguir o dejar de seguir gente de a grupos grandes ya que es innecesariamente caro para el servidor

⚛️ **Podemos usar el Profiler que viene con React Dev Tools**
En caso de componentes lentos en React, podemos usar esta herramienta y ver cual fue el componente que causo el problema.

- Flame Chart: Representa el estado de la aplicacion para un commit en particular
- Component chart: Ver cuantas veces se proceso un componente en particular

Para testear el rendimiento de una web se puede utilizar Lighthouse de Google en DevTools

**Lazy Loading**: No cargar todas las imagenes de una, ir cargando a medida que el usuario lo va necesitando.

**Usar Cache**: Si manejamos payloads muy grandes, no conviene cargar todo esto en memoria, se recomienda usar un cache, ir guardando estos payloads y volver a consultarlos a medida que sea necesario

**Usar HTTP 2**: Si necesito hacer demasiados request en paralelo (cosa que no es recomendable), HTTP 2 tiene una coneexion TCP muy buena, para el multiplexing (no siempre es aplicable)

**Hacer UI que llamen lo menos posible al backend**: Que sean UI que dependan de pocos llamados para funcionar (si se puede, ya que hay dependencias entre payloads)

⚛️ **No pasar props que no son necesarios**: El propering afecta al rendimiento en React. El estado debe estar tan cerca como pueda de donde se esté usando. Mientras mas props recibimos, mayor es la dependencia con el componente padre.

⚛️ **Evitar renderizados de mas**: Usar useMemo (memorizacion en React) para evitar renderizados o componentes puros

**Tener varias zonas de disponibilidad**: Esto para evitar la latencia en la obtencion de recursos.

<a id="rea26"></a>

### **Que es ECMAScript?**

[Volver al indice](#rea-base)

Es un estándar para JS para escribir funciones complejas, es popular ya que trajo nuevas convenciones y funciones orientadas a objetos a JS.

<a id="rea27"></a>

### **Que es decodeURL y encodeURL?**

[Volver al indice](#rea-base)

- EncodeURL es para convertir una URL a su codificacion hexadecimal

```jsx
encodeURI(uri) // my%20test.asp?name=st%C3%A5le&car=saab
```

- DecodeURL es para convertir la URL codificada a la normal

```jsx
decodeURI(uri) // my test.asp?name=ståle&car=saab
```

<a id="rea28"></a>

### **Que es escape y unescape?**

[Volver al indice](#rea-base)

- Escape es la responsable de codificar un string para hacer el pase de informacion de un ordenador a otro por una red

```jsx
escape ("Hola? Como estas tu?")); // Hola%3F%20Como%20estas%20tu%21
```

- Unescape la decodifica

```jsx
unescape("Hola%3F%20Como%20estas%20tu%21") // Hola? Como estas tu?
```

<a id="rea29"></a>

### **¿Que es async, preload y prefetch?**

[Volver al indice](#rea-base)

En JavaScript, `async`, `preload` y `prefetch` son conceptos relacionados pero diferentes:

1. **Async/Await**:
   - `async` y `await` son características introducidas en JavaScript para facilitar la escritura y gestión de código asíncrono.
   - `async` se utiliza para declarar que una función devuelve una promesa. Esto permite que la función se pueda utilizar con `await` para esperar la resolución de la promesa dentro de un contexto asíncrono.
   - `await` se utiliza dentro de funciones `async` para esperar la resolución de una promesa antes de continuar con la ejecución del código.
   - Estas características son útiles para trabajar con operaciones asíncronas, como solicitudes HTTP, operaciones de lectura/escritura de archivos, y otras operaciones que pueden tomar tiempo y no bloquean la ejecución del código.

2. **Preload**:
   - `preload` es una directiva HTML que se utiliza para indicar al navegador que cargue un recurso de manera prioritaria.
   - Se puede usar en elementos `<link>` o en elementos `<script>` para pre-cargar recursos como archivos CSS, JavaScript, fuentes web, etc.
   - El navegador descarga estos recursos en segundo plano mientras procesa el resto del contenido de la página. Esto puede mejorar significativamente los tiempos de carga de la página al garantizar que los recursos importantes se carguen antes de que sean necesarios.

3. **Prefetch**:
   - `prefetch` es similar a `preload`, pero se utiliza para indicar al navegador que cargue recursos que probablemente se necesitarán en el futuro, pero no de manera inmediata.
   - Se utiliza principalmente para cargar recursos relacionados con rutas de navegación o acciones del usuario que aún no se han realizado.
   - Al igual que `preload`, se puede usar en elementos `<link>` o en elementos `<script>`, y ayuda a mejorar el rendimiento de la aplicación al anticiparse a las necesidades futuras de recursos.

En resumen, `async` y `await` se utilizan en JavaScript para trabajar con código asíncrono de manera más legible y manejable, mientras que `preload` y `prefetch` son directivas HTML utilizadas para optimizar la carga de recursos en las páginas web, priorizando recursos importantes o anticipándose a las necesidades futuras de recursos.

<a id="rea30"></a>

### **Cual es la diferencia entre call, bind y apply?**

[Volver al indice](#rea-base)

Por ejemplo tenemos dos objetos y una funcion

```jsx
const user = {
  name: 'Marcos'
};

const business = {
  name: 'Headbook'
}

function showInfo(likes, friends){
  return `${this.name} tiene ${likes} likes y ${friends}`
}
```

En ese caso, el [`this.name`](http://this.name)hace referencia al contexto global. ¿Como hacer para matchearlo de manera dinamica por objeto?

```jsx
showInfo.call(user, 4, 5); // le pasamos la referencia que deseamos y las props
// Marcos tiene 4 likes y 5 amigos

showInfo.apply(user, [4,5]); // lo mismo pero los params deben ir en un array

const newFunction = showInfo.bind(user);
newFunction(10,15); // hacemos otra funcion que toma otro contexto
```

Basicamente los 3 asocian un objeto a `this`

<a id="rea32"></a>

### **Qué es "REPL" y para qué sirve?**

[Volver al indice](#rea-base)

REPL, acrónimo en Ingles de "Leer, Evaluar, Imprimir, Bucle". Este shell es utilizado para realizar declaraciones específicas en JavaScript.

<a id="rea33"></a>

### **Qué es el "demultiplexer"?**

[Volver al indice](#rea-base)

El **demultiplexer,** *es una interfaz encargada de las notificaciones dentro de Node JS.* Es utilizado para recopilar información de eventos específicos y formar preguntas, brindando así lo que se conoce como un **Evento QUE**.

<a id="rea34"></a>

### **Que hace Babel?**

[Volver al indice](#rea-base)

Babel es un compilador para JavaScript. Permite transformar codigo escrito con las ultimas caracteristicas y traducirlo en codigo de JS bien vanilla que pueda ser entendido por navegadores antiguos.

<a id="rea35"></a>

### **Que hace Webpack?**

[Volver al indice](#rea-base)

Es el responsable de producir los bundles a partir del codigo Front. Es un Module Bundler, hay otras opciones como Gulp, Rollup, etc..

Los bundles son paquetes de codigo necesarios para poder llevar a produccion un proyecto, traspilando el codigo y el empaquetado de los modulos en uno o varios archivos compactados, minimizados y optimizados. Es lo que se hace cuando se hace `build`.

<a id="rea36"></a>

### **Que es el server side rendering?**

[Volver al indice](#rea-base)

Es crear paginas HTML renderizadas en servidor para que lleguen listas. Se crean usando NodeJS que generalmente se usa con Express (para utilizar verbos de HTTP).

NextJS es una opcion para usar esto. Favorecen mucho al SEO ya que renderizan la pagina antes de que pueda ser enviada al navegador.

<a id="rea37"></a>

### **Que es Tree Shaking?**

[Volver al indice](#rea-base)

Es remover codigo no usado, como, por ejemplo, imports y exports que no fueron usados. Esto lo hace webpack y Rollup de manera automatica.

<a id="rea38"></a>

### **¿Que es el SEO?**

[Volver al indice](#rea-base)

Es Search Engine Optimization, es lo que hace que un sitio sea encontrado por Google, y HTML hace un aporte con su metadata para que esto suceda. Por ejemplo, no se recomienda usar muchos h1 en un HTML para no afectar al SEO.

- Describir la pagina con titulos y fragmentos unicos. Uso de title y utilizar terminos claros. Todas las paginas del sitio deben tener una meta descripcion para que aparezca la misma en los resultados del buscador

```html
<head>
  <title>Bienvenidos</title>
  <meta name="description" content="Sitio web">
</head>
```

- Usar codigos de estado HTTP Significativos. Google usa rastreadores sobre los sitios web, o robots, es un programa que descubre y analiza sitios web, en google se llama Google Bot, que usa codigos de estado HTTP. Si uso codigos significativos, le indico al robot si esta pagina debe ser indexada, o no (por ejemplo, si es 404, no es trackeado)
- Solucionar problemas con imagenes y carga diferida. Cargar cuando el usuario este por verlas.

```html
<img src="image.jpg" alt="..." loading="lazy">
```

- Crear diseños accesibles, crear paginas para los usuarios, no solo para los motores de busqueda. Un ejemplo para testear la accesibilidad, es cargar la pagina sin JS habilitado.

<a id="rea41"></a>

### **Que es la tipificacion de Variables?**

[Volver al indice](#rea-base)

La tipificación de variables, sirve para asignar un número a una variable y después asignar un string a la misma variable.

<a id="rea42"></a>

### **Concepto Truthy and Falsy**

[Volver al indice](#rea-base)

En JavaScript, un valor se considera "falsy" si se convierte en `false` cuando se evalúa en un contexto booleano.

```jsx
// Falso
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

// Verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
```

<a id="rea44"></a>

### **Que es la Coercion explicita e Implicita?**

Coercion es la forma en la que podemos cambiar de un tipo de valor a otro

- **Coercion explícita:** Obligamos que un valor de un tipo cambie a otro valor de otro tipo

```jsx
//Aquí obligamos a la variable a convertirse en string (coerción explícita)
var c = String(a);
console.log(c);

//Aquí obligamos a la variable a convertirse en número (coerción explícita)
var d = Number(c);
console.log(d);
```

- **Coercion Implicita:** El lenguaje cambia el tipo de valor por detrás

```jsx
//Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"
var a = 4 + "7";

//Convierte al "7" en un número y realiza la operación, por esto devuelve 28
4 * "7";

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b);
```

<a id="rea49"></a>

### **Que es la expresion de Funcion Inmediatamente Invocada - Immediately-invoked Function Expression (IIFE)?**

[Volver al indice](#rea-base)

Es una tecnica que se usaba para emular las variables privadas.

```jsx
const modulo = (function(){
  function metodoPrivado () {
  }
  const valorPrivado = "algo"
  return {
    get: valorPrivado,
    set: function(v) { valorPrivador = v }
  }
})()

var x = modulo()
x.get() // "algo"
x.set("Otro valor")
x.get() // "otro valor"
x.valorPrivado //Error
```

<a id="rea50"></a>

### **Qué es un Event listener?**

[Volver al indice](#rea-base)

Supongamos que estamos usando una libreria para renderizar items de una coleccion de datos, esta expone un componente llamado RenderItem que tiene una sola prop disponible onClick que no acepta ningun parametro. ¿Y si quiero mandarle un argumento?

```jsx
// Esta es el closure
// en es5
function onItemClick(titulo) {
    return function() {
      alert("Click en " + titulo)
    }
}
// en es6
const onItemClick = titulo => () => alert(`Click en ${titulo}`)

return (
  <Contenedor>
{items.map(item => {
return (
   <RenderItem onClick={onItemClick(item.titulo)}>
    <Titulo>{item.titulo}</Titulo>
  </RenderItem>
)
})}
</Contenedor>
)
```

Creamos una funcion que recibe el titulo que se quiere mostrar y retorna otra funcion que cumple con la definicion de la funcion que RenderItem recibe como prop.

<a id="rea51"></a>

### **isNaN vs Math.isNaN**

[Volver al indice](#rea-base)

NaN son operaciones aritmeticas que no pueden ser representadas correctamente. Ambas funciones tienen como objetivo identificar si un valor es NaN. `isNaN` global aplica una coercion de tipos al argumento que le pasamos, `Math.isNan` no lo hace, lo que hace que sea mas seguro de usar para valores no numericos.

```jsx
isNaN('denu') // devolvera true porque primero intentará convertir la cadena a un numero
Number.isNaN('denu') // false porque no convertirá la cadena a numero
```

### **Metodos String**

```javascript

// .includes() Detecta y devuelve true o false si el String posee un substring en el
const str = 'This is my example string!';
const substr = 'my';

console.log(str.includes(substr)); // true

//.indexOf() es otra forma de saber si un substring se encuentra dentro de un string si el mismo no funciona
stringObj.indexOf("string to check for") // -1 Si no se encuentra

//.replace Reemplaza de un String o un regex un valor por otro, no muta al objeto en si, devuelve lo nuevo
array[0] = array[0].replace("PM", '') // Quita el PM del string dentro de ese array
```

<a id="rea52"></a>

### **Que es Symbol?**

[Volver al indice](#rea-base)

Son valores primitivos de JS (como String, boolean, etc..) agregados al ES6. Son valores unicos en JS, antes si queriamos tener un valor unico debiamos usar objetos (porque solo son iguales a ellos mismos), es util para crear constantes

```jsx
let sym1 = Symbol()
let sym2 = Symbol('denu')
let sym3 = Symbol()

sym1 === sym3 // false
```

Tambien sirve para crear claves unicas en los objetos, donde los autores de librerias, navegadores web o cualquier runtime de ES podra evitar que hubieran colisiones al momento de agregar una prop u objeto global

```jsx
const sym1 = Symbol()
const sym2 = Symbol()

const obj = {}

obj[sym1] = 'a'
obj[sym2] = 'b'
```

<a id="rea53"></a>

### **Cual es la diferencia entre un event loop, microtask y macrotask?**

[Volver al indice](#rea-base)

Javascript ejecuta una linea de codigo por vez. **Event Loop** se encarga de gestionar las funciones asincronas.
Funciona con una Call Stack y una Callback Queue. Cuando hay una linea en ejecucion, se agrega al Call Stack, y cuando finaliza, se elimina. La Queue tiene las funciones callback que deben ejecutarse, no debe haber ninguna funcion ejecutandose en la Call Stack ni debe haber otra funcion adelante suyo en la Queue.
Cuando ejecutamos una funcion con setTimeout, la misma se entrega a Timers API, y aunque setTimeout sea cero, habrá un retraso en la ejecucion de esta funcion, haciendo que tenga que esperar en la Queue a que termine de ejecutarse el codigo asincrono.

![js](src/js1.png)

* macroTasks: [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout), [setInterval](https://developer.mozilla.org/docs/Web/API/WindowTimers/setInterval), [setImmediate](https://developer.mozilla.org/docs/Web/API/Window/setImmediate), [requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame), [I/O](https://developer.mozilla.org/docs/Mozilla/Projects/NSPR/Reference/I_O_Functions), UI rendering
* microTasks: [process.nextTick](https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick/), [Promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise), [queueMicrotask](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask), [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver)

Solo despues de que las task en las microTasks estan completas, event loop tomará las task de macrotasks. Mientras mas microtasks haya, mas delay habra en los macrotasks. Se recomienda usar microtasks cuando se necesitan hacer cosas de forma asincrona, de otra manera, siempre es recomendado usar macrotasks.

En resumen, su funcionamiento en ingles seria:

- *Tasks* are taken from the *Task (MacroTask) Queue*.
- *Task* from the *Task Queue* is a *Macrotask* != a *Microtask*.
- *Microtasks* are processed when the current task ends and the *microtask* queue is cleared before the next *macrotask* cycle.
- *Microtasks* can enqueue other *microtasks*. All are executed before the next task inline.
- UI rendering is run after all microtasks execution (NA for nodejs).

<a id="rea54"></a>

### **Variable Shadowing - Ocultamiento de Variables**

[Volver al indice](#rea-base)

Se produce cuando una variable que esta en un scope mas reducido tiene el mismo nombre que otra que esta en un scope superior siguiendo la cadena

```javascript
function test() {

var variable = "hola";
console.log(variable);

  function test1() {
    var variable = "denu";
      console.log(variable);
  }

  test1(); // denu
}

test(); // hola
```

---

<a id="cic66"></a>

### **¿Que son los NFRs, Quién los define y cómo se priorizan?**

[Volver al indice](#cic-base-2)

Los NFRs (Non-Functional Requirements), o requisitos no funcionales, son características o atributos de un sistema que no están relacionados con las funcionalidades específicas que ofrece, sino con cómo el sistema debe comportarse o funcionar. Mientras los requisitos funcionales describen lo que el sistema debe hacer, los NFRs describen las cualidades del sistema, como rendimiento, seguridad, escalabilidad, accesibilidad, entre otros.

Ejemplos de NFRs:

- Rendimiento: El sistema debe procesar 1.000 solicitudes por segundo.
- Escalabilidad: Debe poder soportar un aumento del 50% en la cantidad de usuarios sin degradar el rendimiento.
- Disponibilidad: El sistema debe estar disponible el 99,9% del tiempo.
- Seguridad: Los datos de los usuarios deben cifrarse durante el almacenamiento y la transmisión.
- Usabilidad: Debe ser accesible para personas con discapacidades según las pautas WCAG.
- Compatibilidad: Debe funcionar en los navegadores más populares y dispositivos móviles.


Los NFRs (Non-Functional Requirements), o requisitos no funcionales, son características o atributos de un sistema que no están relacionados con las funcionalidades específicas que ofrece, sino con cómo el sistema debe comportarse o funcionar. Mientras los requisitos funcionales describen lo que el sistema debe hacer, los NFRs describen las cualidades del sistema, como rendimiento, seguridad, escalabilidad, accesibilidad, entre otros.

Ejemplos de NFRs:
Rendimiento: El sistema debe procesar 1.000 solicitudes por segundo.
Escalabilidad: Debe poder soportar un aumento del 50% en la cantidad de usuarios sin degradar el rendimiento.
Disponibilidad: El sistema debe estar disponible el 99,9% del tiempo.
Seguridad: Los datos de los usuarios deben cifrarse durante el almacenamiento y la transmisión.
Usabilidad: Debe ser accesible para personas con discapacidades según las pautas WCAG.
Compatibilidad: Debe funcionar en los navegadores más populares y dispositivos móviles.

**¿Quién define los NFRs?**

Los NFRs suelen ser definidos por una combinación de diferentes actores involucrados en el proyecto, ya que dependen de múltiples perspectivas:

- Cliente o patrocinador del proyecto: Define las expectativas generales de calidad, disponibilidad y rendimiento.
- Usuarios finales: Especifican necesidades relacionadas con usabilidad, accesibilidad y experiencia del usuario.
- Arquitectos de software: Proporcionan requisitos relacionados con escalabilidad, rendimiento, y sostenibilidad del sistema.
- Desarrolladores: Identifican necesidades técnicas para garantizar la implementación eficiente de los NFRs.
- Ingenieros de seguridad: Proponen requisitos para proteger datos y prevenir vulnerabilidades.
-Regulaciones externas o normativas: En algunos casos, los NFRs vienen definidos por estándares legales, como GDPR para protección de datos o PCI DSS para procesamiento de pagos.

**¿Cómo se priorizan los NFRs?**

La priorización de NFRs es clave para garantizar que los recursos disponibles se utilicen de manera efectiva y que el sistema cumpla con las expectativas más importantes. Algunos enfoques comunes incluyen:

- Impacto en los objetivos del negocio: Se priorizan los NFRs que afectan directamente la satisfacción del cliente o el éxito del producto. Por ejemplo, si el sistema debe soportar ventas online, la disponibilidad y el rendimiento serán críticos.
- Riesgos asociados: Los NFRs relacionados con seguridad o cumplimiento normativo suelen tener alta prioridad porque ignorarlos puede tener consecuencias legales o de reputación.
- Coste y viabilidad técnica: Se analiza cuánto tiempo y esfuerzo requiere implementar un NFR. Por ejemplo, alcanzar un tiempo de respuesta de 1 segundo puede ser más costoso que aceptar un límite de 2 segundos.

Metodologías de priorización:

- MoSCoW: Clasificar los NFRs en Must Have (imprescindibles), Should Have (deseables), Could Have (opcionales) y Won’t Have (no necesarios ahora).
- Kano Model: Identificar cuáles generan mayor satisfacción en los usuarios.
- Colaboración y negociación: Los equipos deben trabajar junto con los stakeholders para balancear los NFRs con los requisitos funcionales, asegurando que no haya conflictos en las prioridades.