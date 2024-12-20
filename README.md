<div align="center">

# DevDojo

![Dev GIF](https://i.pinimg.com/originals/a7/a8/d0/a7a8d06c754cfbbbc37e64cb118c513c.gif)

</div>

Preguntas sin link de referencia con preguntas que proximamente seran respondidas, pero que igualmente son sugeridas.

Preguntas con 💛 son preguntas de entrevista (Rol Frontend)

## Tabla de Contenidos

- [Preguntas mas comunes en entrevistas de trabajo para un FE Engineer](./PreguntasComunes.md)
- [Algoritmos y manejo de datos](#alg-base)
  - [Algoritmos de Ordenamiento](#alg-base-ord)
  - [Complejidad Algorítmica](#alg-base-comp)
  - [Arrays y ArrayLists](#alg-base-arr)
  - [Colecciones y Estructuras](#alg-base-col)
  - [Variables](#alg-base-var)
  - [Pilas y Colas](#alg-base-pilcol)
  - [Arboles](#alg-base-arb)
  - [Programación Funcional y Orientada a Objetos](#alg-base-obj)
  - [Manejo de Eventos y Asincronía](#alg-base-async)
- [Metodos y Operadores en Javascript](#alg-base-2)
  - [Estructuras Avanzadas y Generics](#alg-base-3)
  - [Buenas Prácticas y Casos Comunes](#alg-base-4)
- [Organizacion en Software - Derecho en IT](./Organizacion.md)
- [Gestion de proyectos - Liderazgo](#cic-base-2)
- [Typescript](#typ-base)
- [Javascript Frameworks y Librerias](#rea-base)
  - [HTML](#html-base)
  - [React](#react-base)
  - [Angular](#angular-base)
  - [Conceptos Generales](#fe-base)
- [Styles - Estilos](#sty-base)
- [Desarrollo Mobile](#mob-base)
- [React Native](#mob-base-rn)
- [QA](./QA.md)
- [Control de Versiones y Cambios](./Versionado.md)
- [Conceptos Codigo Limpio, Objetos y Diseño](#cod-base)
- [Hardware, Sistemas, Infraestructura y Arquitectura](./Hardware.md)
- [Bases de Datos](./BaseDatos.md)
- [Seguridad](#seg-base)
- [Accesibilidad](./Accesibilidad.md)

<a name="alg-base"></a>

## [Algoritmos y manejo de datos](#alg)

| Búsqueda |
|----------|
| [Binary Search](#alg1) |
| [Podemos aplicar Binary Search a una Linked List ordenada?](#alg2) |
|[¿Cuál es la diferencia entre Binary Search y Linear Search?](#alg22)|

<a name="alg-base-ord"></a>

| Algoritmos de Ordenamiento |
|----------|
| [Selection Sort](#alg3) |
| [Insertion Sort](#alg4) |
| [Bubble Sort](#alg5) |
| [Merge Sort](#alg6) |
|[¿Cuándo sería más adecuado usar Merge Sort en lugar de Quick Sort?](#alg66)|
|[¿Cómo varía la eficiencia de estos algoritmos con el tamaño de los datos?](#alg77)|

<a name="alg-base-comp"></a>

| Complejidad Algorítmica |
|----------|
| [Big O - ¿Qué es?](#alg7) |
| [Reglas para calcular Big O](#alg8) |
| [Calcular Big O](#alg9) |
| [Notación Asintótica](#alg10) |
| [¿Cómo analizamos el codigo?](#alg11) |
| [Multiplicacion de Runtimes](#alg12) |
| [Ejemplos de Ejercicios](#alg14) |
|¿Qué significa que un algoritmo tenga una complejidad de O(n²)?|
|¿Cómo se calcula la complejidad temporal de un algoritmo recursivo?|
|¿Qué es la complejidad espacial y cómo se relaciona con la complejidad temporal?|

<a name="alg-base-arr"></a>

| Arrays y ArrayLists |
|----------|
| [Estructuras de datos (Arrays en Java)](#alg15) |
| [Qué es un "array-like" en Javascript?](#alg26) 💛|
| [Cuales son las funciones array de JavaScript?](#alg27) 💛 |
| [Funcion .sort()](#alg28) 💛|
|[¿Cómo funcionan los arrays en JavaScript internamente?](#alg282)|
| [Especificando la clase de contenido de un ArrayList en Java](#alg16) |
| [Creación de un ArrayList en Java](#alg17) |
|[¿Cuál es la diferencia entre un ArrayList y un array tradicional en Java?](#alg17-2)|
|[¿Cómo afecta la capacidad de crecimiento dinámico un ArrayList a su rendimiento?](#alg17-3)|
| [Agregar un elemento a un ArrayList](#alg18) |
| [Obtener el elemento n de un ArrayList](#alg19) |
| [Extraer el elemento n de un ArrayList](#alg20) |
| [Recorrer el ArrayList completo con for-each](#alg21) |
| [Buscar un elemento en la colección](#alg22) |
| [Remover algunos de los elementos del ArrayList](#alg23) |
|¿Cómo se puede mejorar el rendimiento de la búsqueda en un ArrayList?|
|¿Cuál es la diferencia entre el método remove() y clear() en un ArrayList?|

<a name="alg-base-col"></a>

| Colecciones y Estructuras |
|----------|
| [Creando colecciones como atributo de una clase en Java](#alg24) |
| [Devolver una colección secundaria en Java](#alg25) |
|¿Qué consideraciones de diseño debemos tener en cuenta al trabajar con colecciones como atributos de clases?|
|¿Cómo evitar la mutabilidad no deseada al devolver colecciones de una clase?|
| [Set() (HashSet)](#alg29) 💛|
| [HashTables (.Map)](#alg30) 💛 |
|[¿Cuál es la diferencia entre un Set y un Array en JavaScript?](#alg301)|
|[¿En qué situaciones es más eficiente usar un HashMap en lugar de un Array?](#alg302)|
| [Linked Lists](#alg31) 💛|
| [¿Cuales son los beneficios de un Linked List sobre un Array?](#alg32) |
|[¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?](#alg33) |
| [¿Cual es la diferencia entre un Linked List y un Doubly Linked List?](#alg34) |
|¿Cómo funciona el algoritmo de eliminación de un nodo en una Linked List?|
|¿Qué ventajas y desventajas tiene una Doubly Linked List sobre una Singly Linked List?|

<a name="alg-base-var"></a>

| Variables |
|----------|
| [¿Qué es una Variable?](#var1) |
| [¿En qué se diferencia una variable común, nativa, de un objeto?](#var2) |
| [¿A qué nos referimos cuando hablamos de tipos de datos?](#var3) |
| [¿Cómo se declara una variable?](#var4) |
| [Nombres de Variables](#var5) |
| [Diferencia entre let, var y const](#var6) 💛 |
| [¿Qué son las variables no declaradas y no definidas?](#var19) |
|[¿Qué es la tipificación estática y dinámica?](#var19-2)|

<a name="alg-base-pilcol"></a>

| Pilas y Colas |
|----------|
|[Qué son las Pilas y Colas?](#alg37) |
| [Colas](#alg38) |
| [Pilas](#alg39) |
| [Nodo versus dato](#alg40) |
| [Uso de Pilas y Colas](#alg41) |

<a name="alg-base-arb"></a>

| Arboles |
|----------|
| [Arboles](#alg42) |
| [¿Qué es un Binary Tree?](#alg43) |
| [¿Qué es un Binary Search Tree?](#alg44) |
| [¿Por qué se dice que buscar un nodo en un BST es más eficiente que en un Simple Binary Tree?](#alg45) |
| [Complete Binary Tree](#alg46) |
| [Maneras de recorrer un Arbol](#alg47) |
| [In-Order Traversal](#alg48) |
| [Pre-order traversal](#alg49) |
| [Post-order traversal](#alg51) |
| [Recorrido de un Binary Tree](#alg50) |
| [Heaps](#alg54) |
|¿Qué es un árbol AVL y cuáles son sus ventajas?|
|¿Qué es un árbol rojo-negro?|

<a name="alg-base-obj"></a>

| Programación Funcional y Orientada a Objetos |
|----------|
| [Que es la programacion funcional?](#var27-1) 💛 |
| [¿Qué es una funcion Declarativa y una Expresiva?](#var35) |
| [Prototypes y Herencia Prototype (Prototype Inheritance)](#var26) 💛|
| [Creacion de Constructores](#var28) |
| [Diferencia entre primitivo y objeto](#var14) |
| [Variable Hoisting](#var24) 💛 |
| [Diferencia entre class y function](#var25) |
| [Que es el Function Factory?](#var20) |
| [Que es el Currying?](#var23)  💛 |
| [¿Qué son las funciones puras y cómo se relacionan con la programación funcional?](#var23-1)|

<a name="alg-base-async"></a>

| Manejo de Eventos y Asincronía |
|----------|
| [Para que sirve event.preventDefault()?](#var7) 💛 |
| [Event delegation](#var11) |
| [Bubble vs Capture](#var15) |
| [Funciones de "bloqueo" y "no bloqueo"](#var13) |
| [Promises](#var21) 💛|
| [Async Await](#var21-1) 💛|
|[Callbacks](#var21-2) 💛|
| [Callback Hell](#var12) 💛|
| [Comparacion entre Promises, Callbacks y Async-await](#var22) 💛 |
| [Como funciona setTimeout?](#var10) |
|[¿Qué es un Promise.all y cuándo usarlo?](#var10-1) 💛|
| [¿Cómo se maneja un error en una promesa?](#var10-2) 💛|
|[¿Cómo funcionan Promise.allSettled, Promise.race y Promise.any?](#var10-3) 💛|
| [¿Cómo manejarías errores en funciones con async/await de forma eficiente?](#var10-4) 💛|
|[¿Cómo implementarías un patrón pub/sub para manejar eventos entre diferentes partes de una aplicación?](#var10-5)|

<a name="alg-base-2"></a>

| Métodos y Operadores en JavaScript |
|----------|
| [Funciones en Javascript](#var27) |
| [Metodos de Strings en Javascript](#alg55) |
| [Métodos de Objectos en Javascript](#alg56) |
| [Diferencia entre Map y Weakmap](#var30) |
| [Diferencia entre `for in` y `for of`](#var29) |
| [Diferencia entre foreach, map y reduce](#var32) |
| [Rest Operator](#var16) |
| [Creando Strings con Template Literal - Template Strings](#var17)|
| [Export Fallback con export default](#var18) |
| [Diferencia entre import y require](#var9) |
| [Función Object.freeze](#var8) |
|[¿Qué es la destructuración y cómo se utiliza?](#var8-2) 💛|
|[¿Cómo se diferencia un Spread Operator de un Rest Operator?](#var8-3) 💛|

<a name="alg-base-3"></a>

| Estructuras Avanzadas y Generics |
|----------|
| [Generics en Java](#alg35) |
|[Estructuras de Datos](#alg36) |
| [Recursividad](#alg52) |
| [Factorial](#alg53) |
| [¿Qué son los generics y cómo se implementan en TypeScript?](#alg53-2) 💛|

<a name="alg-base-4"></a>

| Buenas Prácticas y Casos Comunes |
|----------|
| [Porque no se recomienda usar innerHTML?](#var33) |
| [Entre JS y un script ASP, ¿Cual es mas rápido?](#var34) |
| [Qué es una variable global, como se declara y cuales problemas puede tener?](#var31) |

<a name="cic-base-2"></a>

| Gestión de Proyectos - Liderazgo |
|----------|
|¿Cómo realizas las revisiones de código en tus proyectos? ¿Qué verificas y cómo sabes que el código está listo para ser fusionado?|
|¿Podrías nombrar algunos "code smells" (indicadores de problemas en el código)?|
|¿Cómo estimas las tareas en tus proyectos? ¿Cómo manejas los problemas de sobreestimación o subestimación? ¿Cómo estimas tareas desconocidas?|
|Recomendaciones para realizar un onboarding a un desarrollador nuevo dependiendo de su nivel|
|¿Cómo te comunicas con el cliente acerca de los puntos de historia? ¿Cómo explicas los puntos de historia para que sean más comprensibles?|
|El cliente quiere agregar una característica super importante durante el sprint activo. No tienes capacidad y tu equipo está completamente ocupado. ¿Cómo manejarías este requerimiento?|
|Durante la sesión de refinamiento, proporcionaste una solución técnica para la tarea y la mencionaste en la historia. Pero tu compañero de equipo la implementó de manera completamente diferente. ¿Cómo revisarías su código? ¿Le harías cancelar el PR e implementar la característica como tú propusiste?|
|¿Cuál es el proceso de revisión de código en tus proyectos? ¿A qué prestas atención cuando revisas el código? Revisión de código con el cliente: ¿qué harías si no estás de acuerdo con los comentarios del cliente?|
|Estás liderando el equipo y tienes ingenieros con diferentes opiniones sobre el estilo de código. Uno de ellos escribe, por ejemplo, funciones de flecha y otro escribe declaraciones de funciones regulares. Discuten constantemente entre sí. ¿Cómo resolverías esta situación conflictiva?|
|Imagina el caso, usas SCRUM en el proyecto, pero constantemente fallas en los sprints. Parte de las historias no se completan, otra parte de las historias llega a QA el último día del sprint. Discutamos las posibles razones y busquemos soluciones.|
|Imagina que tienes una velocidad estable. Tienes 2 meses, pero ves que no puedes entregar el alcance a tiempo. Retraso potencial ~ 2 semanas. El cliente no quiere mover el día de lanzamiento. ¿Podrías proponer algunas ideas de cómo hacer un lanzamiento?|
|Imagina que tienes un miembro del equipo que no tiene suficiente experiencia y conocimientos para completar sus tareas correctamente y a tiempo. ¿Cómo organizarías el trabajo con esa persona? ¿Lo reemplazarías? ¿Lo mentorizarías?|
|Discute los desafíos durante la actividad de mentoría.|
|¿Cómo documentas tus elecciones de diseño? ¿Por qué?|
|Deuda técnica. Medición y gestión.|
|Estás comenzando un proyecto desde cero (greenfield project). ¿Qué requisitos considerarías al elegir la pila tecnológica?|
|Si tuvieras que desarrollar el frontend y hay un sistema de diseño existente en Angular, requisitos de SEO, métricas web (Web Vitals) y soporte para navegadores modernos, ¿cómo procederías?|
|¿Qué proceso de desarrollo adoptarías en un proyecto greenfield con un plazo fijo de entrega?|
|Si los requisitos cambian constantemente, ¿qué metodología sería más adecuada?|
|Si necesitas dividir un proyecto en múltiples equipos, ¿cómo organizarías la base de código para evitar duplicación, mejorar la escalabilidad y prevenir conflictos?|
|¿Cómo gestionarías cambios en los requisitos durante un sprint?|
|¿Cómo equilibrarías el impacto en el alcance y la planificación?|
|Tienes un proyecto con requisitos inestables que cambian constantemente y el cliente altera prioridades con frecuencia. ¿Qué metodología utilizarías para manejar estas condiciones?|
|Cuando entrevistas a candidatos, ¿cómo identificas señales verdes o rojas?|
|¿En qué aspectos pones mayor atención durante una entrevista?|
|¿Tienes un plan estructurado para realizar entrevistas o prefieres adaptarte a las respuestas del candidato?|
|¿Cómo equilibras seguir un plan con dejar espacio para conversaciones abiertas?|
|En un equipo, ¿cómo promoverías una comunicación efectiva entre desarrolladores con diferentes niveles de experiencia?|
|¿Qué harías si descubrieras que algunos miembros del equipo están luchando por adaptarse al ritmo del proyecto o a las tecnologías utilizadas?|
|Imagina el caso, vas a desarrollar una gran característica, que requiere esfuerzos de ingenieros de FE y BE. ¿Cómo dividirías esta característica y cómo manejarías las dependencias entre los ingenieros de FE y BE?|
| En que se diferencia un rol de desarrollador a uno de Tech Lead |
| Como se daria un feedback dificil? |

<a name="typ-base"></a>

## [Typescript](#typ)

| Temas |
|----------|
| [Qué es TypeScript?](#typ1) |
| [TSConfig.json](#typ2) |
| [Watch Mode](#typ3) |
| [Cuáles son sus características superadoras?](#typ4) |
| [Cómo declaro una variable?](#typ5) |
| [Tuples - Tuplas](#typ6) |
| [Tipo de dato Never](#typ7) 💛 |
| [Tipo de dato Any](#typ8) |
| [Cómo declaro un objeto?](#typ9) |
| [Cómo declaro una función?](#typ10) |
| [Parametros REST](#typ11) |
|[Cómo creo una clase?](#typ12) |
| [Cómo se transpilan las interfaces de TypeScript?](#typ13) |
| [Cómo hago que las props de una interface sean opcionales?](#typ14) |
| [Herencia en Typescript](#typ15) |
| [Interfaces en Typescript](#typ16) |
|[Cual es la diferencia entre el uso de types e interfaces?](#typ17) 💛|
|[¿Qué son los tipos Union e Intersection y cuándo se utilizan?](#typ18)|
|[¿Qué son los Utility Types como Partial, Pick, y Omit, y en qué casos son útiles?](#typ19)💛 |
|[¿Cómo funcionan los Mapped Types y cómo se aplican en proyectos complejos?](#typ20)|
|[¿Qué son los Conditional Types y cómo permiten lógica avanzada en los tipos?](#typ21)|
|[¿Cómo funcionan los decoradores en TypeScript y en qué casos son útiles?](#typ22)|
|¿Qué técnicas avanzadas de Type Narrowing puedes usar para trabajar con tipos complejos?|
|¿Cómo crear y utilizar tipos genéricos con restricciones múltiples (T extends U)?|
|¿Cómo funcionan keyof y los Lookup Types para trabajar dinámicamente con claves y valores?|
|¿Cómo manejas tipos recursivos en TypeScript?|
|¿Cómo configuras un TSConfig.json para proyectos complejos con monorepos o múltiples builds?|
|¿Qué estrategias usarías para gestionar grandes bases de código utilizando tipos estrictos en TypeScript?|
|¿Cómo manejarías el uso avanzado de this en métodos y funciones en TypeScript?|
|¿Cómo implementarías patrones de diseño utilizando características avanzadas de TypeScript?|
|¿Cómo evaluarías el impacto de strictNullChecks en un proyecto existente y cómo migrarías gradualmente?|
|¿Cómo aprovecharías TypeScript para mejorar el rendimiento y la seguridad en aplicaciones críticas?|
|¿Qué son los módulos de declaración (.d.ts) y cómo los usas para bibliotecas externas?|
|¿Cómo extender interfaces o tipos definidos en bibliotecas de terceros?|
|¿Cómo manejarías la interoperabilidad entre TypeScript y bibliotecas escritas en JavaScript puro?|
|¿Qué patrones sigues para definir tipos o interfaces en aplicaciones orientadas a dominios complejos?|
|¿Cómo aprovechar las herramientas de linting y análisis estático para mantener la calidad del código en TypeScript?|

<a name="sty-base"></a>

## [Styles - Estilos](#sty)

| CSS |
|----------|
| [Cuál es la diferencia entre div y span?](#sty1) |
| [Qué es la Especificidad (Specificity) de CSS?](#sty2) 💛 |
|[Que es BEM?](#sty3) |
| [Como declaro variables en CSS?](#sty4) |
| [Pseudoclases](#sty5) |
|[¿Qué es el modelo de caja (Box Model) en CSS y cómo funciona?](#sty5-1)💛|
|¿Cómo se pueden crear diseños de columnas en CSS?|
|¿Qué son los selectores en CSS y cuáles son los diferentes tipos de selectores?|
|¿Cómo se puede centrar un elemento en CSS?|
|¿Qué es Flexbox y para qué se utiliza?|
|¿Qué es CSS Grid y cómo se compara con Flexbox?|
|¿Cómo se puede hacer que un sitio web sea responsive con CSS?|
|¿Qué son las media queries en CSS y cómo se utilizan?|
|¿Cómo se puede cambiar el orden de los elementos en CSS?|
|¿Qué son las transiciones y animaciones en CSS y cómo se utilizan?|
|¿Cómo se pueden aplicar estilos a un elemento cuando se pasa el mouse sobre él (hover)?|
|¿Cómo se pueden aplicar estilos a un elemento cuando está enfocado (focus)?|
|¿Cómo se pueden aplicar estilos a un elemento cuando está activo (active)?|
|¿Cómo se pueden aplicar estilos a un enlace visitado (visited)?|

| SCSS |
|----------|
|[Qué es Sass?](#sty6) |
| [Cual es la diferencia entre .sass y scss?](#sty7) |
| [Sass reemplaza a CSS?](#sty8) |
| [Comentarios en Sass](#sty9) |
| [Variables en SASS](#sty10) |
| [Partials en SASS](#sty11) |
| [Imports en SASS](#sty12) |
| [Interpolacion en SASS](#sty13) |
| [Nesting en SASS](#sty14) |
| [Selectores en SASS](#sty15) |
| [Mixins en SASS](#sty16)  💛 |
| [Condicionales if-else en SASS](#sty17) |
| [Ciclos en SASS](#sty18) |
| [Funciones en SASS](#sty19) |
| [Extend/Inheritance en SASS](#sty20) |
| [Placeholder Selectors en SASS](#sty21) |

<a name="rea-base"></a>

## [Javascript Frameworks y Librerias](#rea)

<a name="html-base"></a>

| HTML |
|----------|
| [¿Cuál es la diferencia entre h1, h2, etc.?](#html1) |
| [Vínculos Relativos en HTML](#html2) |
| [Vínculos Absolutos en HTML](#html3) |
| [¿Para qué es el Doctype?](#html4) |
| [Atributo placeholder para campos en HTML](#html5) |
| [Que es HTML Semantico? 💛](#html6) |
| [Que son los atributos de los elementos HTML?](#html7) |
| [Cuáles son las partes de un documento HTML?](#html8) |
| [Puedo escribir las etiquetas en mayúscula y minúscula?](#html9) |
| [Qué son los mapa de imagen?](#html10) |
| [Que es el tag DataList?](#html11) |

<a name="react-base"></a>

| React |
|----------|
| [¿Qué es React?](#rea47) |
|[Libreria vs Framework 💛](#rea47-2)|
| [Para que es el comando React eject?](#rea49) |
| [Que son las Ref?](#rea52-5) |
| [De que tratan los Ciclos de Vida Componentes?](#react62) |
|[Componentes de clase vs Componentes de Funcion 💛](#rea62-1)|
| [componentWillReceiveProps()](#rea55) |
| [componentDidMount()](#rea56) |
| [componentWillUnmount()](#rea57) |
| [componentWillMount()](#rea58) |
| [componentDidUpdate()](#rea59) |
| [shouldComponentUpdate()](#rea60) |
| [componentWillUpdate()](#rea61) |
| [useCallback](#rea1) 💛|
| [useDispatch - Hook Redux](#rea2)|
| [useEffect](#rea3) 💛|
|[Puede el useEffect ser asincrono? Porque?](#rea3-2) 💛|
| [useState](#rea4) 💛|
| [useSelector - Hook Redux](#rea5) |
| [useRef](#rea6) 💛|
| [useMemo](#rea7) 💛|
|[¿Cuál es la diferencia entre useCallback y useMemo?](#rea7-1) 💛|
| [useReducer](#rea8) 💛|
| [useLayoutEffect](#rea9) |
|[¿Qué diferencia hay entre useEffect y useLayoutEffect? ¿Cuándo usarías cada uno?](#rea9-1)|
| [¿Que es Redux?](#rea18) 💛|
| [Cuando conviene usar Redux?](#rea19) |
| [¿Cuales son los beneficios de usar Redux?](#rea20) |
| [Redux vs ContextAPI](#rea21) 💛|
| [¿Cual es el flujo de Redux?](#rea22) |
| [Que es ContextAPI?](#rea23) 💛|
| [Que es React Fiber?](#rea24) |
|[Que tener en cuenta para tener una buena performance en React](#rea24-1) 💛|
| [¿Qué es el Virtual DOM?](#rea39) 💛|
|Para que tipo de proyectos React es recomendable?|
|¿Cuál es la diferencia entre React.createElement() y JSX?|
|¿Qué es un Fragment en React y para qué se utiliza?|
|¿Cómo funcionan las claves (keys) en las listas de React? ¿Por qué son importantes?|
|¿Qué es un "error boundary" y cómo se implementa en React?|
|¿Qué son los custom hooks? ¿Cómo los crearías y para qué sirven? 💛|
|¿Qué es el hook useImperativeHandle y en qué casos se utiliza?|
|¿Qué es el hook useTransition y cómo mejora la experiencia de usuario en aplicaciones de React?|
|¿Cómo manejarías el estado global sin usar Redux ni Context API? 💛|
|¿Qué son los Higher-Order Components (HOCs) y cómo se diferencian de los Render Props? 💛|
|¿Qué es el patrón "Compound Components" en React y cuándo sería útil implementarlo?|
|¿Cómo manejarías la composición de componentes en lugar de la herencia en React? 💛|
|¿Qué es un "portal" en React y para qué se utiliza?|
|¿Cómo implementarías un "Suspense" en React para manejar la carga de datos de forma asincrónica? 💛|
|¿Qué son las "re-renderizaciones innecesarias" y cómo las evitarías? 💛|
|¿Cómo usarías React.memo para mejorar la performance de un componente? 💛|
|¿Qué herramientas usarías para identificar problemas de rendimiento en una aplicación React? 💛|
|¿Cómo se gestiona el "debounce" o "throttle" en React para eventos como el scroll o input?|
|¿Cómo integrarías una librería de terceros en un proyecto de React?|
|¿Qué consideraciones tienes al usar React con TypeScript?|
|¿Qué diferencia hay entre usar un API REST y GraphQL con React?|
|¿Cómo manejarías la gestión de estados en aplicaciones grandes sin que se vuelva complicado?|
|¿Cómo realizarías pruebas unitarias para un componente React?|
|¿Qué es React Testing Library y en qué se diferencia de otras herramientas como Enzyme?|
|¿Cómo probarías un hook personalizado?|
|¿Qué es el modo estricto de React (React.StrictMode) y para qué sirve?|
|¿Cómo manejarías la internacionalización (i18n) en una aplicación React?|
|¿Qué diferencia hay entre SSR (Server-Side Rendering), CSR (Client-Side Rendering) y SSG (Static Site Generation)?|
|¿Qué son los Concurrent Features de React y cómo afectan la experiencia del usuario?|
|¿Qué problemas podrías encontrar al implementar un formulario grande en React y cómo los solucionarías?|
|¿Cómo manejarías la gestión de rutas en una aplicación React?|
|¿Qué es el "code splitting" y cómo lo implementarías en una aplicación React?|
|¿Cómo manejarías la autenticación y autorización en una aplicación React?|

<a name="angular-base"></a>

| Angular |
|----------|
| [Diferencia entre AngularJS y Angular](#rea10) 💛|
| [¿Qué son los modulos en Angular?](#rea11) |
| [¿Qué es Property Binding?](#rea12) |
| [¿Cuál es el flujo de datos una aplicación Angular?](#rea13) |
| [¿Qué es un Decorador en Angular?](#rea14) 💛|
| [Event Binding en Angular (Manejo de Eventos)](#rea15) |
| [Data Binding en Angular](#rea16) |
|[Que son los componentes standalone y cuando conviene utilizarlos?](#angular-1) 💛|
|[¿Qué problemas de rendimiento pueden existir en Angular y cómo se solucionan?](#angular-2) 💛|
|¿Cómo funciona la detección de cambios en Angular?|
|¿Cómo se maneja la inyección de dependencias y la inversión de control en las aplicaciones de Angular? 💛|
|¿Qué es la compilación JIT y AOT en Angular? Diferencias, pros y contras.|
|¿Cómo se maneja la gestión del estado en las aplicaciones de Angular?|
|¿Cómo se puede compartir el estado en las aplicaciones de Angular? Servicios vs Flux vs Redux. Pros y contras de cada enfoque.|
|¿Qué es el enrutamiento en Angular y cómo se configura?|
|¿Cómo se manejan las rutas protegidas en Angular?|
|¿Qué es el lazy loading y cómo se implementa en Angular?|
|¿Cómo se manejan las peticiones HTTP en Angular?|
|¿Qué es el patrón de diseño "Smart vs Dumb Components" y cómo se aplica en Angular?|
|¿Qué son los pipes en Angular y cómo se utilizan?|

<a name="fe-base"></a>

| Conceptos Generales |
|----------|
|Que es el Critical rendering path?|
| [¿De qué hablamos cuando hablamos de una SPA (Single Page App)?](#rea48) 💛|
| [Como evitar mandar muchos eventos inutiles, por ejemplo, ejecutar un search por letra?](#rea50) 💛|
| [Que es async rendering?](#rea51) 💛|
| [Para que son los eventos sinteticos (SyntheticEvent)?](#rea53) |
| [Que significa prop drilling y como evitarlo?](#rea54) |
| [Como puedo mejorar la performance de mi Frontend?](#rea17) 💛|
|Recibes un requisito no funcional para mejorar el SEO y acelerar la métrica de FCP (First Contentful Paint). Actualmente, tienes una aplicación SPA desarrollada en React o Angular que se renderiza completamente en el cliente. ¿Qué opciones considerarías para satisfacer este requisito?|
|¿Cómo implementarías SSR (Server-Side Rendering) o SSG (Static Site Generation) en un SPA existente? |
| [Para que sirven las claves o Keys en React?](#rea25) |
| [¿Que es async, preload y prefetch?](#rea29) |
| [Cual es la diferencia entre call, bind y apply?](#rea30) |
| [Cual es la diferencia entre setTimeout() y setInterval()?](#rea31) 💛|
| [Qué es "REPL" y para qué sirve?](#rea32) |
| [Qué es el "demultiplexer"?](#rea33) |
| [Que hace Babel?](#rea34) |
| [Que hace Webpack?](#rea35) |
| [Que es el server side rendering?](#rea36) |
| [Que es Tree Shaking?](#rea37) |
| [¿Que es el SEO?](#rea38) |
| [Qué es el namespacing de JS?](#rea40) |
| [Que es la tipificacion de Variables?](#rea41) |
| [Concepto Truthy and Falsy](#rea42) |
| [Funciones de alto nivel / Higher order Function](#rea43) |
| [Que es la Coercion explicita e Implicita?](#rea44) |
| [Que es el Scope en Javascript?](#rea45) |
| [Fetch API](#rea46) |
| [Cómo se pueden crear objetos genéricos?](#rea47) |
| [Document.ready vs Window.onload](#js1) |
| [Que es la expresion de Funcion Inmediatamente Invocada - Immediatelyinvoked Function Expression (IIFE)?](#rea49) |
| [Qué es un Event listener?](#rea50) |
| [isNaN vs Math.isNaN](#rea51) |
| [Que es Symbol?](#rea52) |
| [Cual es la diferencia entre un event loop, microtask y macrotask?](#rea53) |
| [Variable Shadowing - Ocultamiento de Variables](#rea54) |
|¿Qué son los observables? Multicast vs Unicast, "hot" vs "cold".|

| Server Side Rendering |
|----------|
|¿Qué es la generación de sitios estáticos, SSR y SPA del lado del cliente? Pros y contras de ambos enfoques.|
|¿Qué es el Server Side Rendering (SSR) y cómo funciona? 💛|
|¿Cuáles son las ventajas y desventajas de usar SSR en lugar de Client Side Rendering (CSR)?|
|¿En qué casos sería más beneficioso utilizar SSR en lugar de CSR?|
|¿Cómo afecta el SSR al rendimiento de una aplicación web?|
|¿Cómo maneja el SSR la carga inicial de la página y cómo afecta esto a la experiencia del usuario?|
|¿Cómo afecta el SSR al SEO de una aplicación web?|
|¿Cómo se manejan las solicitudes de datos asíncronos en SSR?|
|¿Cómo se maneja el enrutamiento en una aplicación con SSR?|
|¿Cómo se maneja el estado de la aplicación en un entorno SSR?|
|¿Qué herramientas o frameworks son comúnmente utilizados para implementar SSR y por qué?|
|¿Cómo se maneja la autenticación de usuarios en una aplicación con SSR?|
|¿Cómo se maneja la caché en una aplicación con SSR?|
|¿Cómo se manejan los errores y las excepciones en una aplicación con SSR?|
|¿Cómo se maneja la compatibilidad entre navegadores en una aplicación con SSR?|
|¿Cómo se manejan las pruebas en una aplicación con SSR?|
|¿Cómo se maneja la implementación y el despliegue en una aplicación con SSR?|
|¿Cómo se maneja la escalabilidad en una aplicación con SSR?|
|¿Cómo se maneja la seguridad en una aplicación con SSR?|
|¿Cómo se maneja la carga de recursos estáticos (imágenes, CSS, JavaScript) en SSR?|
|¿Cómo se maneja la internacionalización y la localización en una aplicación con SSR?|

| Comunicación de Red y Recuperación de Datos en JavaScript |
|----------|
|¿Cómo se realiza la comunicación de red en JavaScript?|
|¿Cómo se pueden obtener datos de un servidor en JavaScript?|
|¿Qué es REST y cómo se utiliza en JavaScript?|
|¿Cómo se maneja el problema de la Política del Mismo Origen en JavaScript?|
|¿Qué es el Modelo de Madurez de Richardson y cómo se aplica en JavaScript?|
|¿Qué es la consulta de sondeo (polling) y la consulta de sondeo prolongada (long polling) en JavaScript?|
|¿Cómo se utiliza HTTP en JavaScript para la comunicación de red?|
|¿Qué son los WebSockets y cómo se utilizan en JavaScript?|
|¿Qué es GraphQL y cómo se utiliza en JavaScript?|

| Rendimiento y Latencia en JavaScript |
|----------|
|¿Cómo se puede lograr una baja latencia en JavaScript? 💛|
|¿Cuáles son algunos problemas comunes de rendimiento en JavaScript y cómo se pueden resolver? 💛|
|¿Cuáles son algunos problemas comunes de memoria en JavaScript y cómo se pueden resolver? 💛|
|¿Cómo investigarías problemas de rendimiento o memoria en JavaScript?|
|¿Qué herramientas se pueden utilizar para optimizar el rendimiento en JavaScript?|
|¿Cómo se pueden modelar el rendimiento en JavaScript?|

<a name="mob-base"></a>

## [Desarrollo Mobile](#mob)

| Temas |
|----------|
| [¿Qué es el Manifest.xml en Android y qué funciones cumple?](#mob1) |
| [¿Qué es el Android Runtime y cómo se ejecutan las aplicaciones en Android?](#mob3) |

<a name="mob-base-rn"></a>

| React Native |
|----------|
|[¿Qué es React Native y cómo se compara con otras soluciones de desarrollo móvil?](#mob5)|
|[¿Como se compara React Native al resto de soluciones?](#mob6)|
|[¿Cómo se maneja el estado en una aplicación React Native?](#mob7)|
|[¿Qué es Expo y cómo se compara con React Native?](#mob8)|
|[¿Cómo se maneja la navegación en una aplicación React Native?](#mob9)|
|[¿Cómo se maneja la persistencia de datos en una aplicación React Native?](#mob10)|
|[¿Cómo se maneja la autenticación de usuarios en una aplicación React Native?](#mob11)|
|[¿Cómo se maneja la internacionalización en una aplicación React Native?](#mob12)|
|¿Cómo se maneja la compatibilidad entre diferentes versiones de sistemas  operativos en una aplicación React Native?|
|¿Cómo se maneja la compatibilidad entre diferentes tamaños de pantalla en una aplicación React Native?|
|¿Cómo se maneja la optimización del rendimiento en una aplicación React Native?|
|¿Cómo se maneja la depuración en una aplicación React Native?|
|¿Cómo se maneja el manejo de errores y las excepciones en una aplicación React Native?|
|¿Cómo se maneja la implementación y el despliegue en una aplicación React Native?|
|¿Cómo se maneja la escalabilidad en una aplicación React Native?|
|¿Cómo se maneja la seguridad en una aplicación React Native?|
|¿Cómo se maneja la carga de recursos estáticos (imágenes, CSS, JavaScript) en React Native?|
|¿Cómo se maneja la comunicación entre JavaScript y el código nativo en React Native?|
|¿Cómo se maneja la animación en una aplicación React Native?|
|¿Cómo se maneja el acceso a las funcionalidades del dispositivo (cámara, GPS, etc.) en una aplicación React Native?|
|¿Cómo se manejan las pruebas en una aplicación React Native?|
|¿Cómo se maneja la actualización de la aplicación en una aplicación React Native?|



<a name="cod-base"></a>

## [Conceptos Codigo Limpio, Objetos y Diseño](#cod)

| Temas |
|----------|
| [Ejemplo de Pseudo-código](#diag1) |
| [Diagramas de Nassi-Schneiderman](#diag2) |
| [¿De qué trata el código limpio?](#cod1) |
| [Nombres Significativos en Codigo Limpio](#cod2) |
| [Concepto DRY](#cod5) |
| [Concepto KISS](#cod6) |
| [Concepto YAGNI](#cod7) |
| [Concepto LOD](#cod8) |
| [Funciones Limpias](#cod9) |
| [Unico Nivel de abstraccion](#cod10) |
| [Manejo limpio de Parametros](#cod11) |
| [Cuales son los beneficios de una Code Review?](#cod12) |
| [Que tipos de Code review existen?](#cod13) |
| [Domain Driven Design](#cod14) |
| [¿Qué es un patrón de diseño?](#cod15) |
| [En qué se inspiran los patrones de diseño?](#cod16) |
| [¿Qué se obtiene con la implementación de patrones de diseño?](#cod17) |
| [¿Para qué sirven los patrones de diseño?](#cod18) |
| [¿Cuáles son los elementos de un patrón de diseño?](#cod19) |
| [¿Cuáles son los tipos de patrones de diseño?](#cod20) |
| [¿Qué es la intención y motivación de un patrón de diseño?](#cod21) |
| [¿Qué es la aplicabilidad de un patrón de diseño?](#cod22) |
| [¿Qué es la estructura de un patrón de diseño?](#cod23) |
| [¿Quiénes son los participantes de un patrón de diseño?](#cod24) |
| [Patrones Estructurales](#cod25) |
| [Patrones Creacionales](#cod26) |
| [Patrones Comportamiento](#cod27) |
| [Excepciones en lugar de codigos de error](#cod28) |
| [Manejo de Comentarios en el codigo](#cod29) |
| [Acomplamiento artificial](#cod30) |
| [Unchecked Exceptions](#cod31) |
| [Excepciones en lugar de códigos de error](#cod32) |
| [Gestión de errores](#cod33) |
| [Indentación](#cod34) |
| [Código en el nivel de abstracción incorrecto](#cod35) |
| [Acoplamiento (Evitar)](#cod36) |
| [Cohesion (Fomentar)](#cod37) |
| [Uso de numeros magicos en lugar de constantes](#cod38) |
| [Qué es la Programación orientada a Objetos?](#cod39) |
| [Qué es la programación procedural?](#cod40) |
| [Qué es la programacion declarativa?](#cod41) |
| [Que es la Programacion Imperativa?](#cod42) |
| [Qué es la Programacion Estructurada?](#cod43) |
| [Que es un antipatron?](#cod44) |
| [Que tipos de antipatrones para el diseño de Software existen?](#cod45) |
| [Que tipos de Antipatrones para el Diseño Orientado a Objetos existen?](#cod46) |
| [Singleton](#cod47) |
| [Que es el Polimorfismo?](#cod48) |
| [Que es el Upcasting?](#cod49) |
| [Que es el Downcasting?](#cod50) |
| [¿Cómo se produce la ligadura tardía y dinámica que posibilita el polimorfismo?](#cod51) |
| [El Principio de Sustitución de Liskov](#cod52) |
| [¿Cómo ejemplificarías el uso de polimorfismo en Java usando una colección de objetos?](#cod53) |
| [Qué es la densidad de codigo?](#cod54) |
| [La importancia del orden de las funciones](#cod55) |
| [Porque se deberia evitar retornar null?](#cod56) |
| [Porque se deberia evitar el uso de variables globales?](#cod57) |
|[¿Cómo podrías mejorar la calidad del código en un proyecto en marcha?](#cod57-1)|
|[Si tienes plazos ajustados y te ves obligado a escribir "mal código", ¿cómo manejarías esa situación?](#cod57-2) |

| Code Smells |
|----------|
| [¿Qué es un Code Smell?](#cod58) |
| [Code Smells en los Tests](#cod59) |
| [Code Smells en Codigo](#cod60) |
| [Code Smells en Nombres](#cod61) |
| [Code Smells en Comentarios](#cod62) |
| [Code Smells en el entorno](#cod63) |
| [Code Smells en Funciones](#cod64) |

| SOLID |
|----------|
| [Concepto SOLID](#cod4) |
|Principios SOLID aplicados en Javascript|
| [Dependency Inversion Principle](#cod3) |
| [Single Responsibility Principle](#cod65) |
| [Open/Closed Principle](#cod66) |
| [Interface Segregation Principle](#cod67) |
| [Liskov Substitution Principle](#cod68) |


<a name="seg-base"></a>

## [Seguridad](#seg)

| Introducción y Conceptos Básicos |
|----------|
| [¿Qué es el ciberespacio?](#seg4) |
| [¿Cuáles son los componentes del Ciberespacio?](#seg5) |
| [¿Cuáles son los problemas del Ciberespacio?](#seg6) |
| [¿Qué es la Ciberseguridad?](#seg8) |
| [¿Qué quiere decir "Ciberataque"?](#seg1) |
| [¿Que quiere decir "Ciberamenazas"?](#seg2) |
| [¿Qué quiere decir "Vulnerabilidad"?](#seg3) |
| [¿Cuáles son las ciberamenazas actuales?](#seg7) |
|¿Por qué es importante entender las vulnerabilidades en ciberseguridad?|
|¿Cómo se define una amenaza en ciberseguridad y cuál es su relación con una vulnerabilidad?|
|¿Qué es XSS, CSRF, CSP, CORS, DoS y cómo se manejan estos problemas de seguridad en la web?|

| Metodologías y Roles en Ciberseguridad |
|----------|
| [¿Cuál es el perfil del Oficial de seguridad informática?](#seg9) |
| [¿De qué pasos consta la metodología de ciberseguridad?](#seg10) |
| [¿De qué pasos criterios de seguridad consta la metodología de ciberseguridad?](#seg11) |
|¿Qué habilidades técnicas y no técnicas debe tener un Oficial de seguridad informática?|
|¿Cuáles son los diferentes enfoques en las metodologías de gestión de riesgos de ciberseguridad?|

| Tipos de Ciberataques |
|----------|
| [¿Cuáles son algunas modalidades comunes de ataques?](#seg13) |
| [¿Qué son los ataques internos?](#seg15) |
| [¿Qué tipos de Ingenierías sociales existen?](#seg16) |
| [¿Cuáles son las etapas en un proceso de hacking?](#seg14) |
|¿Cómo prevenir los ataques internos dentro de una organización?|
|¿Qué papel juega el phishing en los ciberataques actuales?|

| Medidas de prevencion |
|----------|
| [¿Cuáles son algunas medidas comunes contra los ataques?](#seg12) |
| [¿Qué es la triada CIA?](#seg17) |
| [¿Qué es la seguridad perimetral?](#seg18) |
| [Es una amenaza.. Verdadero o Falso?](#seg23) |
|¿Qué otros modelos de seguridad, además de la triada CIA, se utilizan en la industria de la ciberseguridad?|
|¿Qué son las políticas de seguridad de la información y cómo ayudan en la prevención de ciberataques?|

| IDS (Intrusion Detection Systems) |
|----------|
| [IDS (Intrusion Detection System)](#seg19) |
| [Tecnicas de detección de intrusiones](#seg20) |
| [Indicadores de una intrusión](#seg21) |
| [Tipos de IDS](#seg22) |
|¿Cómo se diferencia un IDS de un IPS (Intrusion Prevention System)?|
|¿Qué métodos utilizan los IDS para detectar intrusiones en tiempo real?|

| Firewalls |
|----------|
| [¿Qué es un Firewall?](#seg24) |
| [Tipos de Firewall](#seg25) |
|¿Cuál es la diferencia entre un firewall de filtrado de paquetes y un firewall de
inspección profunda de paquetes?|
|¿Cómo se puede configurar un firewall para proteger una red corporativa?|

| Criptografía |
|----------|
| [¿Qué es la criptografía?](#seg26) |
| [¿Qué es una función Hash?](#seg27) |
| [¿Cuáles son los requisitos de un Cripto sistema?](#seg28) |
| [¿Cómo funciona el Cifrado Simétrico?](#seg29) |
| [¿Cómo funciona el Cifrado Asimétrico?](#seg30) |
|¿Por qué es importante el uso de certificados digitales y cómo están relacionados con la criptografía?|
|¿Qué es la criptografía cuántica y cómo afectará la ciberseguridad en el futuro?|

| Informática Forense |
|----------|
| [Adquisición en Informática Forense](#seg31) |
| [El informe pericial informático](#seg32) |
|¿Qué debe contener un informe pericial informático y por qué es crucial para una investigación legal?|
|¿Qué herramientas se utilizan comúnmente para la adquisición forense de datos?|

---

<a id="seg"></a>

# Seguridad

<a id="seg1"></a>

### **Qué quiere decir "Ciberataque"?**

[Volver al indice](#seg-base)

Es cualquier maniobra ofensiva de explotación deliberada que tiene como objetivo tomar el control, desestabilizar o dañar un sistema informático.

<a id="seg2"></a>

### **Que quiere decir "Ciberamenazas"?**

[Volver al indice](#seg-base)

Representa un evento con potencial de daño que puede afectar negativamente a las operaciones de una organización o a sus activos.

<a id="seg3"></a>

### **¿Qué quiere decir "Vulnerabilidad"?**

[Volver al indice](#seg-base)

Representa una condición de debilidad en los sistemas informáticos que permiten la materialización del daño

<a id="seg4"></a>

### **¿Qué es el ciberespacio?**

[Volver al indice](#seg-base)

El ciberespacio es un ambiente complejo en donde interactúan los seres humanos, el software y los servicios disponibles en Internet, soportados por el hardware y las redes de comunicaciones de todo el mundo

<a id="seg5"></a>

### **¿Cuáles son los componentes del Ciberespacio?**

[Volver al indice](#seg-base)

- Personas
- Software
- Servicios en Internet
- Dispositivos Informaticos
- Redes Digitales

<a id="seg6"></a>

### **Cuales son los problemas del Ciberespacio?**

[Volver al indice](#seg-base)

- Ciberdelincuencia
- Robo de Informacion
- Fraude informático
- Ciberterrorismo
- Hacktivismo
- Daños informáticos
- Ciberataques

<a id="seg7"></a>

### **¿Cuáles son las ciberamenazas actuales?**

[Volver al indice](#seg-base)

| Nombre | Descripcion |
| --- | --- |
| Malware | Es un programa malicioso que realiza acciones dañinas en un sistema informático de forma intencionada ysin el conocimiento del usuario. |
| Web-bassed attacks | Es todo tipo de ataque que se realiza a la infraestructura web de una organización. |
| Phising | Es un conjunto de técnicas que tienecomo objetivo obtener a través de Internet datos privados de los usuarios, especialmente para accedera sus cuentas o datos bancarios. Sebasa en la ingeniería social |
| Web Application Attacks | Son ataques dirigidos a errores de codificación en los sitios web, ejemplo de estos son el XSS, SQL Injection, LFI, etc |
| SPAM: o “correo basura” | Es un correo electrónico no solicitado que se envía a un gran número de destinatarios con fines publicitarios o comerciales |
| DDoS | Es la versión distribuida de una ataque de denegación de servicio y tiene como objetivo afectar a la disponibilidad de los servicios de una organización |
| Identity Theft | O robo de identidad. Tiene como objetivo utilizar de manera ilícita los datos personales de otra persona persiguiendo un fin lucrativo. |
| Data Breach | Es un incidente en el que se roba o setoma información de un sistema sin el conocimiento o la autorización del propietario del sistema |
| Insider Threat | Es un riesgo de seguridad que seorigina dentro de la organizaciónobjetivo. Esto no significa que el actor deba ser un empleado o funcionario actual de la organización. |
| Botnets | Es una red de computadoras zombies secuestradas que están controladas de forma remota por un hacker |
| Data manipulation attack | El ciberdelincuente no toma posesión de los datos, sino que hace ajustes sutiles y sigilosos a los mismos con el fin de obtener algún tipo de ganancia |
| Information leakage | O fuga de información, es la transmisión no autorizada de datos desde dentro de una organización aun destino o destinatario externo. |
| Ransomware | Es un programa malicioso que persigue el cifrado de archivos y/o datos a fin de cobrar un rescate parasu restitución |
| Cyberespionage | Es la estrategia de irrumpir en sistemas y/o redes informáticas a finde extraer información sensible de un gobierno o corporación |
| Criptojacking | Es el uso no autorizado de una computadora o red informática ajena afin de minar criptomonedas |
| Carga de archivos sin restricciones | Archivos maliciosos se cargan en el servidor y luego se ejecutan. Puede incluir un sistema de archivos sobrecargado o bases de datos, control total del sistema, etc.. |
| Clickjacking | Un usuario hace click en un link o boton que lleva a un lugar que no corresponde al sitio, y dan datos personales |
| Ataque XSS | Se inyectan secuencias de comandos maliciosos del lado del navegador en la pagina, codigo JS |
| SQL Injection | Se inyecta codigo malicioso SQL en los campos de entrada, inputs. |
| Session Hijacking | Las comunicaciones entre el servidor y el cliente se interceptan y se roban datos.  |
| Remote Network Hack | Simula un ataque por internet  |
| Remote Dial-Up Network Hack | Simula un ataque hacia el pool de modems del cliente  |
| Stolen Equipment Hack | Simula el robo de un activo con info importante  |
| Online Scams | Se recopila información por premios que no existen, es publicidad engañosa  |
| Local Network Hack | Simula el ataque de una persona con acceso físico tratando de acceder de manera no permitida por una red local  |

<a id="seg8"></a>

### **¿Qué es la Ciberseguridad?**

[Volver al indice](#seg-base)

La Ciberseguridad surge como resultado de una visión amplia de los aspectos de seguridad que se deben tener a fin de poder minimizar los riesgos que proponen los nuevos desafíos y retos del ciberespacio. Se define como el conjunto de medidas de protección de la información, a través del tratamiento de las amenazas que ponen en riesgo a la misma y que es tratada por los sistemas de información interconectados

La Ciberseguridad se centra únicamente en los activos digitales conectados a Internet. Mantiene su atención principalmente en los riesgos provenientes únicamente del ciberespacio. Extiende su visión a la protección de la infraestructura crítica de información

<a id="seg9"></a>

### **¿Cuál es el perfil del Oficial de seguridad informática?**

[Volver al indice](#seg-base)

El oficial de seguridad informática tiene la función de brindar los servicios de seguridad en la organización, a través de la planeación, coordinación y administración de los procesos de seguridad informática, así como difundir la cultura de seguridad informática entre todos los miembros de la organización

- Analizar las necesidades particulares de la organización en cuestión de seguridad digital.
- Elaborar y presupuestar un plan de prevención y de actuación ante los posibles ciberataques.
- Determinar los requisitos de seguridad para el sistema en red de la organización.
- Proteger los equipos de la organización contra accesos no autorizados o maliciosos.
- Configurar las diferentes herramientas de software de seguridad.
- Realizar pruebas y análisis de vulnerabilidades.
- Llevar a cabo auditorías de seguridad informática.
- Responder de manera inmediata ante incidentes de seguridad informática.
- Investigar los ciberdelitos

<a id="seg10"></a>

### **¿De qué pasos consta la metodología de ciberseguridad?**

[Volver al indice](#seg-base)

- **Identificar**: se debe entender el funcionamiento de la organización para minimizar el riesgo de los sistemas, activos, datos y capacidades.
- **Proteger**: se deben diseñar salvaguardas para limitar el impacto de los eventos potenciales sobre los servicios y las infraestructuras críticas
- **Detectar**: ejecutar actividades para identificar la ocurrencia de un evento de ciberseguridad.
- **Responder**: tomar las medidas apropiadas después de enterarse de un evento de seguridad.
- **Recuperar**: planificar la capacidad de recuperación y la reparación oportuna de capacidades y servicios comprometidos

<a id="seg11"></a>

### **¿De qué pasos criterios de seguridad consta la metodología de ciberseguridad?**

[Volver al indice](#seg-base)

- Debido a los nuevos desafíos que vienen aparejados con las tecnologías, la rama de la ciberseguridad dentro de una organización debe ser considerada transversal, enfocándose principalmente en el resguardo de sus activos informáticos, pero también haciendohincapié en la concientización del factor humano
- Al momento de evaluar una tecnología, se debe prestar atención al entorno donde se va a implementar, su relación con otros entornos y/o plataformas y/o servicios, su alcance y sus canales de comunicación
- Se deben tener en cuenta sus vulnerabilidades asociadas y los riesgos inherentes y externos
- Se debe considerar quienes serán los actores principales y los secundarios de la misma, afin de efectuar una correcta segregación funciones y/o roles
- Es importante efectuar una validación univoca de la identidad de los actores
- Se debe poder garantizar, en todo momento, una trazabilidad completa de la operatoria

<a id="seg12"></a>

### **¿Cuáles son algunas medidas comunes contra los ataques?**

[Volver al indice](#seg-base)

* Restringir el acceso a la base de datos: No dejarla expuesta en la red para que cualquiera pueda conectarse. Recomendable tener una lista de IPs u origenes que pueden conectarse a la misma.
* Guardar de forma segura informacion sensible: No guardar en texto plano informacion sensible por si la BD se ve comprometida. Un ejemplo son las contraseñas, Se recomienda aplicar Hashing con algoritmos especializados.
* Guardar configuracion en variables de entorno: Como conexiones a bases de datos, keys de servicios, etc.. Que varíe dependiendo del ambiente que estemos usando
* Asegurar las rutas de la API: Alguien puede intentar con Postman usar nuestra API salteandose validaciones de seguridad. El endpoint deberia validar la autenticacion (token que expire) y la autorizacion (que esta persona tiene los permisos para acceder a esta API, estar autenticado no signfica estar autorizado)
* Validar del lado de Servidor y de Cliente idealmente: No asumir que los datos vienen del cliente y que este ya los valido. Se deberia validar tanto en cliente como en servidor.
* No guardar informacion sensible del lado del cliente: No guardar informacion sensible en cookies o Local Storage ya que son almacenamientos de facil acceso.
* **Honeypot** Es un dispositivo destinado a ser atacado para estudiar el comportamiento de los atacantes o desviar su atención.

<a id="seg13"></a>

### **¿Cuáles son algunas modalidades comunes de ataques?**

[Volver al indice](#seg-base)

- **Black Box (Blind):** Security Tester, no cuenta con info sobre el objetivo
- **Double Black Box (Double Blind):** El cliente no sabe nada sobre el test que hará, cómo ni cuándo
- **White Box:** El ST sabe todo sobre el objetivo, la forma, etc..
- **Gray Box:** Internal Testing, examina el nivel de acceso desde la red interna, solo sabe info parcial sobre los objetivos puestos por el cliente
- **Double Gray Box:** El cliente sabe que tipo de test se va a hacer, pero no como ni cuando.

<a id="seg14"></a>

### **¿Cuáles son las etapas en un proceso de hacking?**

[Volver al indice](#seg-base)

(Exploración de un sistema, Explotación de las vulnerabilidades, Corrupción del Sistema, Búsqueda de Vulnerabilidades y Eliminación de pruebas)

- **Reconocimiento** Recolectar info sobre la víctima, Riesgo Moderado
- **Escaneo** Con la información del reconocimiento, busco vulnerabilidades, Riesgo alto
- **Obtener Acceso** Explotar las vulnerabilidades, esto ya seria una violacion de la ley, Riesgo muy alto
- **Mantener el acceso** Una vez dentro, buscar el reingreso al mismo sin riesgos
- **Eliminar rastros** Eliminar evidencia y evitar acciones legales

<a id="seg15"></a>

### **¿Qué son los ataques internos?**

[Volver al indice](#seg-base)

Muchos ataques son desde dentro de la misma organización, se infiltran o hablan con empleados para obtener información sobre la víctima/empresa

Pueden infiltrar un pendrive con una etiqueta engañosa para que sea usado por algún empleado, el famoso **Rubber Ducky**

- **Tailgating:** Acceder a una área restringida sin permiso por credenciales falsas o usando la de otra persona
- **Piggybacking:** Persona autorizada da acceso a otra persona no autorizada
- **Eavesdropping:** Escucha, o ve cosas privadas sin permiso.

**Contramedidas:** Control de acceso, mínimo privilegio sí no es necesario, separación de tareas, política legal, etc...

<a id="seg16"></a>

### **¿Qué tipos de Ingenierías sociales existen?**

[Volver al indice](#seg-base)

- **Human Based:** La interacción de persona a persona, de forma remota o por llamada telefónica
    - **Impersonalización:** Ganar acceso físico simulando ser un usuario válido
    - **Empleado Importante:** Simular ser un ejecutivo e intimidar con eso
    - **Tercera parte de confianza:** Simular el tener el permiso de una tercera persona para acceder a algo
    - **Soporte Tecnico:** Simular ser soporte tecnico para acceder a información
    - **Shoulder Surfing:** Obtener contraseña mirando de reojo lo que escribe un usuario
- **Dumpster Diving:** Revisar basura y documentos
- **Computer Based:** Se hace un software tipo Phishing para interactuar con el usuario
    - Archivos adjuntos en emails
    - Sitios web falsos
    - Pop Ups
- **Ingeniería social Inversa:** Es la más usada, es para que el usuario contacte al atacante sí este lo solicita

<a id="seg17"></a>

### **¿Qué es la triada CIA?**

[Volver al indice](#seg-base)

**Confidencialidad:** Solo accede a la info gente autorizada

**Autenticidad:** Quien dice ser es verdadero

**Integridad:** Solo usuarios autorizados pueden modificar la info de manera controlada

**Disponibilidad:** El poder acceder a la info por usuarios autorizados sólo cuando sea necesario (por ejemplo, limite de horario)

**El no repudio:** Probar que un evento o una acción fue realizada por alguien o algo, y que ese alguien o algo no pueda "negarlo", esto es más para cuando hablamos de cosas como firma digital, etc..

**Triada de la seguridad informática:** No repudio, Autenticidad, Responsabilidad y Fiabilidad.

<a id="seg18"></a>

### **¿Qué es la seguridad perimetral?**

[Volver al indice](#seg-base)

- Conjunto de sistemas de detección electrónica hecho para proteger perímetros internos y externos
- Su funcion es detectar, disuadir, y hasta parar un ataque con antelación
- Algunos sistemas son: Firewall, DMZ, UTM, IDS, WAF, Web Filtering, AppControl, Antivirus y Antispam

<a id="seg19"></a>

### **IDS (Intrusion Detection System)**

[Volver al indice](#seg-base)

- Es un sistema de detección de intrusiones es un componente que inspecciona los datos de una red o equipo en busca de elementos sospechosos
- Recopilar info para analizar y correlacionar
- Sus elementos básicos son: Sensor, consola y un protocolo de comunicación entre ambos
- Su comportamiento en las redes influye el sniffing de paquetes
- Si detecta un posible ataque, manda una alarma

<a id="seg20"></a>

### **Tecnicas de detección de intrusiones**

[Volver al indice](#seg-base)

- **Reconocimiento de Firmas: Identificación de eventos y acciones conocidas**
- **Detección Anomalías: Identificación de comportamientos raros**
- **Anomalía de protocolos:** Identificación de paquetes TCP/IP raros.

<a id="seg21"></a>

### **Indicadores de una intrusión**

[Volver al indice](#seg-base)

- Modificación de software y archivos de configuración.
- Bajo rendimiento inusual en el sistema.
- Cuelgues y reinicios en el sistema.
- Períodos en los cuales los logs no registran datos.
- Ausencia de logs o incompletos.
- Procesos desconocidos.
- Cambios en los permisos del sistema de archivos.
- Cambios raros en el tamaño de los archivos.
- Problemas de disponibilidad en los sistemas.
- Conexiones desde y hacia lugares desconocidos.
- Repetición de intentos de conexiones.
- Presencia de archivos extraños. Ausencia de archivos determinados.

Si el IDS Detecta algún tipo de ataque toma las siguientes medidas:

- Bloquear la dirección IP del atacante en el Firewall.
- Alertar al administrador.
- Generar logs con toda la información posible.
- Guardar toda la evidencia y captura de paquetes.
- Lanzar otras aplicaciones para actuar sobre el evento

<a id="seg22"></a>

### **Tipos de IDS**

[Volver al indice](#seg-base)

- **NIDS (Network IDS)**: Elemento de red que inspecciona el tráfico de la misma.
- **HIDS (Host IDS)**: Software que inspecciona los eventos dentro del marco de un sistema operativo.
- **Monitor Logs**: Correlaciona y analiza los logs de sistemas y aplicaciones.
- **Verificador Integridad:** Chequea la integridad de archivos de un sistema

<a id="seg23"></a>

### **Es una amenaza.. Verdadero o Falso?**

[Volver al indice](#seg-base)

- **Verdadero Positivo**: Debería generarse una alarma y ésta se genera.
- **Falso Positivo**: No debería generarse una alarma, pero ésta se genera
- **Verdadero Negativo**: No debería generarse una alarma, y ésta no se genera.
- **Falso Negativo:** Debería generarse una alarma, pero ésta no se genera

<a id="seg24"></a>

### **¿Qué es un Firewall?**

[Volver al indice](#seg-base)

- Un Firewall divide una red segura de una red insegura, normalmente una privada de una publica
- Su función principal es examinar los paquetes en busca de coincidencia con las reglas definidas.
- El filtrado es en sentido entrante y saliente. También es por dirección de Origen / Destino, puerto Origen / Destino, protocolo de capa superior y por estado de conexión
- También puede crear logs y generar alarmas
- Toma acciones en base a cierto criterio y acepta o rechaza los paquetes

El firewall **NO** protege conexiones que NO pasen por el Firewall, no protege contra el Malware, no protege contra acciones internas y no protege contra ataques de ingeniería social

<a id="seg25"></a>

### **Tipos de Firewall**

[Volver al indice](#seg-base)

**Packet Filters**

- Filtran en Capa 3 (Internet Protocol IP)
- Sólo entienden direcciones IP
- Aplicable a Routers

**Circuit Level Gateways**

- Filtran en Capa 4 (TCP)
- No filtran paquetes individuales sino sesiones
- Entienden de puertos y sesiones

**Application Level Gateways**

- Filtran en Capa 7 (Application)
- Se utilizan como Proxy.
- Entienden comandos específicos de los protocolos.

**Stateful Multilayer**

- Filtran en todas las capas anteriores (Application, TCP y IP)
- Son más costosos y difíciles de administrar.
- Tienen gran capacidad de análisis y filtrado.

<a id="seg26"></a>

### **Que es la Criptografia?**

[Volver al indice](#seg-base)

- Técnica que protege documentos y datos
- Uso de cifras/códigos para ocultar cierta información para que sea decodificada por quien pueda (y deba) hacerlo
- Es una rama de las matemáticas y de la informática en cierta forma
- **Usos: Correo electrónico, E-commerce, Servicios web (HTTPS) y Networking**

**Los elementos básicos de un sistema criptográfico son:** Criptograma, Texto Claro y Algoritmo de Cifrado

<a id="seg27"></a>

### **Que es una funcion Hash?**

[Volver al indice](#seg-base)

Es un algoritmo que consigue crear a partir de una entrada (ya sea un texto, una contraseña o un archivo, por ejemplo) una salida alfanumérica de longitud normalmente fija, que representa un resumen de toda la información que se le ha dado.
Es decir, a partir de los datos de la entrada crea una cadena que solo puede volverse a crear con esos mismos datos.

Para crear una firma digital, el software de firma crea un hash unidireccional de los datos electrónicos que se deben firmar. La clave privada se usa para encriptar el hash. El hash cifrado junto con otra información es la firma digital.
Cualquier cambio en los datos, incluso cambiando o eliminando un solo carácter, da como resultado un valor diferente. Este atributo permite a otros validar la integridad de los datos mediante el uso de la clave pública del firmante para descifrar el hash.

Si el hash descifrado coincide con un segundo hash calculado de los mismos datos, prueba que los datos no han cambiado desde que se firmó. Si los dos hash no coinciden, los datos se han alterado de algún modo (integridad) o la firma se ha creado con una clave privada que no corresponde a la clave pública presentada por el firmante (autenticación).
Las firmas digitales dificultan que el firmante niegue haber firmado algo (no repudio), suponiendo que su clave privada no se haya visto comprometida, ya que la firma digital es única tanto para el documento como para el firmante, y los une.

Un certificado digital es un documento electrónico que contiene la firma digital de la autoridad emisora del certificado, vincula una clave pública con una identidad y se puede usar para verificar que una clave pública pertenece a una persona o entidad en particular.
Las firmas digitales se usan ampliamente para proporcionar pruebas de autenticidad, integridad de los datos y no repudio de las comunicaciones y transacciones realizadas a través de Internet.

- Es una funcion matemática fácil de calcular
- Uno puede hacer un algoritmo **unidireccional** (no se puede decodificar, o no se debería)
- Sirve para certificar que la informacion es veridica y no fue modificada
- Se usa para el concepto de firma digital y en blockchain
- **Compresión:** Son de longitud única su resultado
- **Difusión: Sí se modifica la mitad de un bit del mensaje original, el hash cambia la mitad de sus bits.**
- Mensaje => Algoritmo criptográfico (clave k) => Mensaje Cifrado (C)

**Principales algoritmos hash:** MD4, SHA 56, Sha1, etc..

<a id="seg28"></a>

### **Cuáles son los requisitos de un Cripto sistema?**

[Volver al indice](#seg-base)

- Integridad, confidencialidad y no repudio
- El algoritmo debe ser rápido y fiable, no debe haber retardo entre el cifrado y descifrado
- No debe ser posible contar con una clave para deshashearla
- Un esquema de cifrado es computacionalmente inseguro sí el texto cifrado generado cumple El costo de romper el cifrado es bajo y la información está dentro de la vida útil

<a id="seg29"></a>

### **Como funciona el Crifrado Simetrico?**

[Volver al indice](#seg-base)

Se descifra con una misma clave (Clave secreta), el emisor se lo tiene que "pasar" al receptor, lo cual significa una vulnerabilidad porque si son poco cuidadosos, cualquiera podría obtener esa clave y obtener la información privada. Es un proceso rápido. Que la clave sea muy segura es muy importante. También se le dice de clave privada porque es una sola clave. Con este sistema de clave pública se hizo SSH luego, que es una manera de establecer una comunicación segura entre páginas webs (servidores) y clientes.

Las debilidades del Cifrado simetrico son..

- Debilidades de clave única
- Mala gestión de claves
- Criptosistemas asimétricos
- Lo que se cifra con una clave se descifra con otra clave

<a id="seg30"></a>

### **Como funciona el Crifrado Asimetrico?**

[Volver al indice](#seg-base)

- También se le dice de **clave pública**.
- Hay 2 claves, una para cifrar y otra para descifrar.
- Tenemos que tener cuidado de que la clave pública no dé lugar a que se adivine de cierta manera a la clave privada. Lo ideal es que se descifra con la clave privada, es decir, una que tenga el receptor, es como tener una cuenta que no puedo resolver si no tengo los números para saber qué es lo que tengo que sumar.
- Sí quiero darle confidencialidad a un documento, y que lo vea solo el destinatario, cifrar el documento con la **clave pública** del destinatario
- Está pensado para pasar por lugares poco seguros, es por eso que se considera un sistema menos vulnerable.
- Hay 3 tipos de cifrado en este tipo de cifrado, RSA (La seguridad de este algoritmo radica en el problema de la factorización de números enteros (números primos grandes), DSA, edDSA y ECDSA (El sistema está basado en curvas elípticas el cual emplea puntos sobre las curvas para la generación del par de claves).

<a id="seg31"></a>

### **Adquisicion en Informatica Forense**

[Volver al indice](#seg-base)

En el campo de la Informática Forense, uno de los puntos más importantes es la recolección de la evidencia, también conocido como Adquisición Forense, ya que, si al momento de tomar la evidencia no se toman los recaudos correspondientes puede echarse a perder todo el análisis posterior. Es muy importante recalcar este punto debido a que la alteración de la evidencia llevará a la invalidez de toda la investigación.

Un punto a considerar al momento de realizar las copias bit a bit es que necesitaremos de tiempo, ya que, es un proceso que suele demandar varias horas.

En nuestro caso de estudio, trabajaremos con la distribución de DEFT 8.2, la cual dispone de todas las herramientas necesarias para realizar la toma de evidencia. Para la misma utilizaremos una herramienta muy sencilla y útil a la vez: dd.

Sin embargo, daremos un paseo por un listado de buenas prácticas que son recomendables realizar previo a la recolección de la evidencia.

**Adquisición física** Se entiende por adquisición física a la adquisición forense de la capacidad absoluta de un medio de almacenamiento. Qué quiere decir esto? Se refiere a que si nuestro disco es de 1TB, se realizará la copia del TB completo.

**Adquisición lógica** En el caso de la adquisición lógica, se adquiere por volúmen lógico, por partición. Esto quiere decir que si nuestro disco es de 1TB pero dentro tenemos una partición de 100GB podríamos únicamente realizar la copia bit a bit solo de esos 100GB. Pero, como se imaginarán, estaríamos descartando datos que podrían ayudar a la causa.

**Adquisición directa** Se llama Adquisición Directa cuando se extrae el medio de almacenamiento y se conecta al equipo de analista forense con el fin de realizar su copia bit a bit.

**Adquisición indirecta** En el caso de la adquisición Indirecta a la adquisición forense realizada por medio de un SW utilizando la red como medio de transmisión para almacenar la copia en un equipo remoto. En este caso deben tener en cuenta que si el proceso de copia bit a bit es largo, hacerlo por la red demandará de mucho más tiempo.

**Adquisición por hardware** Como supondrán, en este caso nos referimos a realizar la adquisición por un dispositivo que se encuentra diseñado para realizar copias forenses. Los mismos, por lo general, traen un bloqueador de escritura para evitar contaminar la evidencia.

**Adquisición por Software** En este caso, se utilizará para realizar la adquisición software confeccionado para llevar a cabo la copia bit a bit. En este caso, tenemos que preocuparnos de que el disco no se monte con permisos de escritura, ya que, si esto sucede estaríamos contaminando la evidencia. Con estas herramientas estaremos trabajando durante esta clase.

**Adquisición por red** En este caso, se realizará la adquisición por red, es decir, se realizará la copia bit a bit de un equipo remoto a un equipo local. En este caso, se deberá tener en cuenta que la red no esté saturada, ya que, si esto sucede, la copia se verá afectada.

<a id="seg32"></a>

### **El informe pericial informatico**

[Volver al indice](#seg-base)

La pericia se dirige a quienes no son especialistas por eso debe mantener un lenguaje claro para ser entendido por cualquiera.

- Debe iniciarle con los datos objetivos (nombre del perito, domicilio, teléfono, carátula del expediente y su número, nombre del tribunal al que se dirige, etc.
- Copia de los puntos de pericia que fueron encomendados.
- La descripción pormenorizada del objeto de estudio y de las medidas realizadas estableciendo día y hora de inicio y duración de la medida.
- La metodología empleada en la pericia, los elementos utilizados, los resguardos y el procedimiento de conservación.
- El análisis efectuado.
- Las conclusiones en forma de respuesta a los puntos de pericia ordenados.
- Toda aquella información que el perito considere conveniente para el esclarecimiento del caso. Puede ser explicaciones adicionales, nuevos elementos que el perito considere relevantes, etc.

---

<a id="alg"></a>

# Algoritmos y complejidad

<a id="alg1"></a>

### **Binary Search**

[Volver al indice](#alg-base)

Encontrar elementos en un vector ordenado de forma rápida sin recorrer todo el vector corriendo el comienzo para no recorrer lo ya recorrido.

```jsx
function binarySearch(arr, target) {
  // Inicializamos los extremos del rango de búsqueda.
  let left = 0; // Índice del extremo izquierdo del rango.
  let right = arr.length - 1; // Índice del extremo derecho del rango.

  // Calculamos el índice medio inicial.
  let middle = Math.floor((left + right) / 2);

  // Iteramos mientras no hayamos encontrado el elemento
  // y el rango de búsqueda sea válido (izquierda <= derecha).
  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) {
      // Si el elemento buscado es menor que el valor medio,
      // descartamos la mitad derecha del rango ajustando el límite derecho.
      right = middle - 1;
    } else {
      // Si el elemento buscado es mayor que el valor medio,
      // descartamos la mitad izquierda del rango ajustando el límite izquierdo.
      left = middle + 1;
    }
    // Recalculamos el índice medio con los nuevos límites.
    middle = Math.floor((left + right) / 2);
  }

  // Al salir del bucle, verificamos si el elemento en el índice medio
  // es igual al objetivo. Si lo es, devolvemos su índice.
  // Si no lo es, significa que el elemento no está en el array, devolvemos -1.
  return arr[middle] === target ? middle : -1;
}

// Ejemplo de uso:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array ordenado para búsqueda binaria.
console.log(binarySearch(arr, 5)); // Devuelve 4 (el índice del número 5 en el array).

```

Su complejidada temporal es de O(log n)

![Algoritmo de búsqueda binaria](src/log1.png)

<a id="alg2"></a>

### **Podemos aplicar Binary Search a una Linked List ordenada?**

[Volver al indice](#alg-base)

No, no se puede, ya que encontrar el index del elemento del medio es demasiado complicado.

<a id="alg22"></a>

### **¿Cuál es la diferencia entre Binary Search y Linear Search?**

[Volver al indice](#alg-base)

La diferencia principal es que en Binary Search se divide el array en dos partes y se busca en la mitad, mientras que en Linear Search se recorre todo el array hasta encontrar el elemento, es la que hacemos tipicamente en codigo.

La complejidad de Binary Search es O(log n) y la de Linear Search es O(n).

---

<a id="alg3"></a>

### **Selection Sort**

[Volver al indice](#alg-base-ord)

![Selection Sort Tutorials & Notes | Algorithms | HackerEarth](https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png)

Se busca el elemento mas pequeño y se pone en primera posición

Se busca el segundo mas pequeño y se pone segundo

Se repite el proceso hasta llegar a la ultima posición

```javascript
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

// Inicializo el for desde uno mas del index donde estoy parado
    for (let j = i + 1; j < array.length; j++) {
        // Si el valor actual de j es menor que minIndex, reemplazo minIndex por este nuevo valor
    if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

// Luego de que nuestro for interno finalizo, hago el swap de valores
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}
```

Su complejidad temporal es de O(n^2)

<a id="alg4"></a>

### **Insertion Sort**

[Volver al indice](#alg-base-ord)

Este algoritmo funciona construyendo una matriz ordenada al principio de la lista.

Comienza la matriz ordenada con el primer elemento.

Inspecciona el siguiente elemento y lo cambia hacia atrás en la matriz ordenada hasta que esté en una posición ordenada, y así sucesivamente.

```javascript
const insertionSort = (array) => {
    // Un algoritmo de ordenación por inserción comienza la ordenación al principio de la lista, lo que significa que el primer elemento ya está ordenado.
  for (let i = 1; i < array.length; i++){
    const currValue = array[i];
    let j = i - 1;
    // Mientras no vaya mas alla del inicio del array, y mientras no se encuentre un valor mas pequenio del guardado en currValue
      while(j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        // evitar el loop
        j--;
      }

      array[j + 1] = currValue;
  }
}
```

Su complejidad temporal es de O(n^2)

<a id="alg5"></a>

### **Bubble Sort**

[Volver al indice](#alg-base-ord)

Es el más simple de todos.

Da vuelta los elementos si estan en el orden incorrecto de a pares.

Para darse cuenta de que está ordenado, debe hacer una pasada completa sin hacer ningun swipe.

![Algoritmo de búsqueda binaria](src/log2.png)

```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // Itera por todos los elementos menos el ultimo, por eso length - 1
    for (let j = 0; j < array.length - 1; j++) {
        // Es el elemento actual (j) mayor al siguiente? (j + 1)
      if (array[j] > array[j + 1]) {

        // Si se cumple la condicion, darlos vuelta
        const temp = array[j];

        // Asigno al elemento actual el valor siguiente
        array[j] = array[j + 1];

        // Asigno al valor siguiente el elemento actual
        array[j + 1] = temp;
      }
    }
  }

    // devuelvo el array ordenado
    return array;
}
```

Su complejidad temporal es de O(n^2)

<a id="alg6"></a>

### **Merge Sort**

[Volver al indice](#alg-base-ord)

![Understanding Merge Sort-Sorting Algorithm -4 | by Jaykishan Sewak | Medium](https://miro.medium.com/v2/resize:fit:672/1*WQ4YJMWRFrGHLK1KQDeDHQ.png)

Aplica el principio divide y vencerás.

Divide el array a la mitad de forma sucesiva

Se mezclan pares de subarray hasta volver a juntar el array completo

Es recursivo

 ```javascript
 // Función principal para ordenar un array utilizando Merge Sort
 function mergeSort(arr) {
     // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
     if (arr.length <= 1) {
         return arr;
     }

     // Encuentra el punto medio del array
     const mid = Math.floor(arr.length / 2);

     // Divide el array en mitades
     const left = arr.slice(0, mid);
     const right = arr.slice(mid);

     // Ordena recursivamente las mitades izquierda y derecha
     return merge(mergeSort(left), mergeSort(right));
 }

 // Función para combinar y ordenar dos arrays ordenados
 function merge(left, right) {
     // Array para almacenar el resultado fusionado
     let result = [];
     // Índices para recorrer los arrays izquierdo y derecho
     let leftIndex = 0;
     let rightIndex = 0;

     // Mientras haya elementos en ambos arrays
     while (leftIndex < left.length && rightIndex < right.length) {
         // Compara los elementos actuales de ambos arrays
         if (left[leftIndex] < right[rightIndex]) {
             // Si el elemento izquierdo es menor, añádelo al resultado y avanza al siguiente elemento del array izquierdo
             result.push(left[leftIndex]);
             leftIndex++;
         } else {
             // Si el elemento derecho es menor, añádelo al resultado y avanza al siguiente elemento del array derecho
             result.push(right[rightIndex]);
             rightIndex++;
         }
     }

     // Después de salir del bucle, uno de los arrays puede tener elementos restantes

 ```

Su complejidad temporal es de O(n log n)

<a id="alg66"></a>

### **¿Cuándo sería más adecuado usar Merge Sort en lugar de Quick Sort?**

[Volver al indice](#alg-base-ord)

Merge Sort es más adecuado cuando se necesita una estabilidad en la ordenación, es decir, cuando se necesita mantener el orden relativo de los elementos iguales en el array original.

Quick Sort es más adecuado cuando se necesita una ordenación en su lugar, es decir, cuando no se puede permitir el uso de memoria adicional para almacenar los elementos ordenados.

<a id="alg77"></a>

### **¿Cómo varía la eficiencia de estos algoritmos con el tamaño de los datos?**

[Volver al indice](#alg-base-ord)

La eficiencia de los algoritmos de ordenación varía con el tamaño de los datos de entrada. En general, los algoritmos de ordenación más eficientes, como Merge Sort y Quick Sort, tienen una complejidad temporal de O(n log n), lo que significa que su tiempo de ejecución aumenta de forma logarítmica con el tamaño de los datos de entrada.

Por otro lado, los algoritmos de ordenación menos eficientes, como Bubble Sort y Selection Sort, tienen una complejidad temporal de O(n^2), lo que significa que su tiempo de ejecución aumenta de forma cuadrática con el tamaño de los datos de entrada.

---

<a id="alg7"></a>

### **Big O - ¿Qué es?**

[Volver al indice](#alg-base-comp)

O viene por la palabra Orden. La n representa un número o el tamaño de un conjunto

Podemos ejecutar nuestro algoritmo y medir cuanto tiempo tarda en ejecutarse, pero es algo muy variable, dependiendo el algoritmo, el tiempo de ejecución escala con la entrada (lo que recibe), como por ejemplo los algoritmos de búsqueda que pueden funcionar bien con cantidades pequeñas de datos y muy mal con cantidades muy grandes.

La mejor opcion es la que crece menos ante el aumento de datos de entrada

<a id="alg8"></a>

### **Reglas para calcular Big O**

[Volver al indice](#alg-base-comp)

* Se ignoran las constantes

```html
3 * O(1) => O(1)
0(n/2) => O(n)
```

* Dominancia de términos: Siempre nos quedaremos con el peor caso.

```html
O(n) < O(n^2)
O(n log n) < O(2^n)
```

* Ignorar los términos no dominantes

```html
O(n^2 + n) => O(n^2)
O(n^2 + n + 1) => O(n^2)
```

* Ignorar los productos

```html
O(n * log n) => O(n log n)
```

* Ignorar las sumas

```html
O(n + log n) => O(n)
```

* Ignorar las divisiones

```html
O(n / 2) => O(n)
```

* Ignorar las constantes multiplicativas

```html
O(2n) => O(n)
```

* Ignorar las constantes aditivas

```html
O(n + 1) => O(n)
```

<a id="alg9"></a>

### **Calcular Big O**

[Volver al indice](#alg-base-comp)

Supongamos que necesitamos llevar unas valijas a la casa de un primo. No importan cuantas valijas llevemos, el tiempo siempre será el mismo, 5 minutos.

Si quiero llevar las valijas corriendo, supongamos que solo puedo llevar 2 valijas por corrida, entonces, el tiempo que tardaré subirá exponencialmente, dependo de mi entrada, y el tiempo sube de manera lineal.

![Grafico](.\src\perf1.png)

<a id="alg10"></a>

### **Notación Asintótica**

[Volver al indice](#alg-base-comp)

La notacion asintotica nos permite simplificar estos graficos, es como redondear decimales.

En desarollo nos interesa el limite superior, que es la notacion de **Big 0, es el comportamiento en el peor de los casos**.

Asi podremos calificar nuestros algoritmos con distintas complejidades. Si mi algoritmo es n² entre mas crezca la entrada, peor se va a comportar, como se puede ver en el siguiente grafico

![performance](.\src\perf2.png)

* **O(N!) =>** Es el peor de todos. Tambien para funciones recursivas en general.

```javascript
void nFactorialExample(int n) {
  for (int i = 0; i < n; i++){
    nFactorialExample(n - 1);
  }
}

// Factorial de 3: 3x2 = 6
// Factorial de 6: 6x5x4x3x2 = 720
```

* **O(2'N) =>** Responde a las secuencias fibonacci recursivas. Es una complejidad exponencial. Tambien cuando se trata de arboles.

```javascript
// Ejemplo poco eficiente - Recursiva
int fibonacci (int n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

* **O (N log N) =>** Aplica a Merge Sort, Heap Sort y Quick Sort, que son los mas eficientes.

* **O(log n)** => Es muy comun verlo en la busqueda binaria, ya que se situa a la mitad de un array ordenado y de ahi, mediante comparacion, encuentra el elemento.

* **O(1)** => Tiempo constante, el algoritmo no variará su rendimiento con la entrada. Por ejemplo, asignaciones de variables.

```jsx
x = x+1; O(1)
y = 200*3; O(1)
print(y); O(1)
O(1) + O(1) + O(1) = O(1)

int max(int a, int b) {
  if (a >= b) return a;
  return b;
}
```

* **O(n)** => Crecimiento Lineal, indica que el crecimiento de complejidad del algoritmo es proporcional al input. Mas datos, mas complejidad. Aparece en iteraciones.

```jsx
for (int i = 0; i<n; i++)
 print(arr[1]);

// En el peor de los casos se recorre el array entero para encontrar a un solo empleado.
Employee linearSeach(Employee[] employees, String name) {
  for (Employee e: employees) {
    if (name.equals(e.getName())) return e;
  }
  return null;
}
```

* **n * O(1) = O(n)** | La impresion es de complejidad O(1), pero se ejecuta n veces dependiendo del input ya que esta dentro de un bucle for

```jsx
y = 2+2; // O(1)

//O(n)
for(int i = 0; i<n; i++)
 print(arr[1]);

// n + O(1) => O(n)
```

* **O(n^2)** => El crecimiento en complejidad es proporcional al cuadrado del tamaño del input. Son los menos recomendados para datos grandes. Aparece sobre iteraciones dentro de iteraciones. Se le dice **complejidad cuadratica.**

```jsx
for(int i = 0; i<n; i++) // O(n)
 for (int j = 0; i<k; j++) { // O(n)
  print(m[i][j]); // O(1)
 }

n * n * O(1) => O(n^2)

void printPairs(int[] array) {
  for (int x: array) {
    for (int y : array) {
      System.out.println(x y);
    }
  }
}
```

No importa si tenemos un algoritmo muy complejo dentro de un if al que probablemente no se entre dependiendo la entrada, SIEMPRE se toma el peor caso posible.

<a id="alg11"></a>

### **¿Cómo analizamos el codigo?**

[Volver al indice](#alg-base-comp)

Cualquier función se considera O(1) (constante) siempre y cuando no sea un ciclo, no tenga recursion y no sea una llamada a una funcion que no sea de tiempo constante

```jsx
entrada = input() // O(1)
x = 5 // O(1)

if entrada == "hola":
 print("saludo" * x) // O(1)

// n es la entrada
for (int i = 1; i <=n; i += c) { // O(n)
 // CUalquier sentencia O(1)
}
```

Los ciclos son considerados `O(n)`, siendo n la entrada. Depende que tan grande sea la entrada, cuanto se recorrerá. Pero, si se itera solo 3 veces, se considera `O(1)`, ya que la entrada es indiferente en la cantidad de ciclos de ejecución.

Si hay dos bucles anidados, se considera `O(n^2)`, la complejidad depende del ciclo de adentro del ciclo padre.

```javascript
// n es la entrada
for (int i = 1; i <= n; i += c) {
    // O(n^2)
    for (int j = 1; j <= n; j += c) {
        // Cualquier sentencia O(1)
    }
}
```

Si la variable del ciclo, en lugar de estar incrementandose por un numero constante, se multiplica o divide, se vuelve `O(log(n))`, va incrementandose de manera exponencial con su entrada.

```javascript
// n es la entrada
// O(log(n))
for (int i = 1; i <= n; i *= c) {
    // Cualquier sentencia O(1)
}
```

Si es mucho mas complejo lo que sucede con la variable que itera, se vuelve `O(log(log(n))`

```javascript
// O(log(log(n))) - Hay muchas mas operaciones dentro de ese for
for (int i = 2; i <= n; i = pow(i,c)) {
    // Cualquier sentencia O(1)
}
```

Sumamos todas las complejidades del codigo y lo simplificamos. Tomamos el termino mas significativo, el pedazo de codigo mas grande, para sacar la complejidad total de todo el codigo.

Las lineas dentro de un bucle tendrán el mismo tipo de complejidad que su ciclo padre.

```javascript
public static void main(String[] args){
    int []arr = {5,3,4,8,7,5,4,2,4}; // 1

    for (int j = 1; j < arr.length; j++) { // n
        int actual = arr[j]; // n

        int i = j - 1; // n
        while (i >= 0 && arr[i] > actual) { // n^2
            arr[i+1] = arr[i]; // n^2
            i --; // n^2 - Ya que su padre es // n^2
        }

        arr[i + 1] = actual;
    }
}
```

Con esto, hacemos la siguiente operación:

`3n^2 + 4n + 1 = O(n^2)`

Nos quedamos con el termino mas significativo, que seria n^2

<a id="alg12"></a>

### **Multiplicacion de Runtimes**

[Volver al indice](#alg-base-comp)

Si mi código es "Hace esto y luego hace esto otro", se agrega al Runtime

```javascript
// O(A+B)
for (int a : arrA) {
    print(a);
}
for (int b: arrB) {
    print(b);
}
```

En cambio, si mi codigo es del estilo "Mientras haces esto, hace esto otro", se multiplica el runtime

```javascript
// O(AB)
for (int a: arrA) {
 for (int b: arrB) {
  print(a + "," + b);
 }
}
```

<a id="alg14"></a>

### **Ejemplos de Ejercicios**

[Volver al indice](#alg-base-comp)

En este caso es O(N) (Muy bueno), el hecho de que iteremos dos veces el array no importa.

```javascript
void foo(int[] array) {
    int sum = 0;
    int product = 1;
    for (int i = 0; i < array.length; i++) { // O(N)
        sum += array[i];
    }
    for (int i = 0; i < array.length; i++) { // O(N)
        product *= array[i];
    }

    System.out.println(sum + product);
}
```

`O(N)` - La complejidad crece dependiendo de la entrada de datos, es decir, el array que recibe y tendra que recorrer.

```javascript
int sum = 0;
int product = 1;

for (int val: array) {
  sum +=val;
  product *=val;
}
```

`O(2N'2) == O(N'2 + N'2) === O(N'2)`. Se deben eliminar los terminos no dominantes

```javascript
int sum = 0;
int result = 0;

// O(N) - No Dominante
for (int val: array) {
  sum +=val;
}

// O(N'2) - Dominante. Si optimizamos solo esta parte, podremos obtener todos los beneficios
for (int x : array) {
  for (int y: array) {
    result += x * y - sum;
  }
}
```

A simple vista parece `O(N)`, porque recorre solo dos veces los dos array por separado, pero estos array pueden tener tamanios distintos, entonces seria `O(A + B)`, A siendo el tamanio de arrayA y B de arrayB

```javascript
int sum = 0;

for (int val: arrayA) {
  sum += val;
}

for (int val: arrayB){
  sum += val;
}
```

O(N), solo se necesita recorrer la mitad del array, y si el mismo crece de tamanio, la complejidad crecera con el.

```javascript
void reverseArray(int [] array) {
  // Recorre el array hasta la mitad
  for (int i = 0; i < array.length / 2; i++) {
    // Calculamos la posicion nueva del elemento
    int reversePosition = array.length - 1 - i;
    // Posicion actual
    int tmpVal = array[i];

    // Cambiamos de lugar
    array[i] = array[reversePosition];
    array[reversePosition] = tmpVal;
  }
}
```

O(N'2)

```javascript
// Imprimir parejas de valores de un array
void printUnorderedPairs(int[] array) {
  for (int i = 0; i< array.length - 1; i++) {
    for (int j = i+1; j < array.length; j++) {
      System.out.println(ij);
    }
  }
}
```

O(N) - Si B crece, el tiempo crece. Seria O(B)

```javascript
// Calcular el producto de dos numeros sin usar la funcion predeterminada. Sumar B veces el valor A
int product(int a, int b) {
  int result = 0;
  // B define que tan grande es este for
  for (int i = 0; i < b; i++) {
    result += a;
  }
  return result;
}
```

O(N'2) - Tengo dos complejidades lineales.

```javascript
// copiar un array a otro de forma poco eficiente - elemento a elemento a un array creado desde cero

// O(N) - recorre el array
// Se recibe un arrray
int[] copyArray(int[] array) {
  // Se guarda una copia del array
  int[] copy = new int[0];
  for (int val: array) {
    copy = appendToNew(copy, val);
  }
  return copy
}


// O(N) - recorre el array recibido
// Se pasa la copia del array y el valor a agregar en esa copia
int[] appendToNew(int[] array, int val) {
  // Creo un array un poco mayor
  int[] bigger = new int[array.length + 1];
  for (int i = 0; i < array.length; i++){
    bigger[i] = array[i];
  }

  bigger[bigger.length - 1] = val;
  return bigger;
}
```

O(AB)

```javascript
void printPairsTwoArrays(int[] arrayA, int[] arrayB) {
  // Aca recorro el arrayA - O(A)
  for (int valA : arrayA) {
    // Aca el arrayB - O(B)
    for (int valB: arrayB) {
      System.out.println(valA, valB);
    }
  }
}
```

---

<a id="alg15"></a>

### **Estructuras de datos (Arrays en Java)**

[Volver al indice](#alg-base-arr)

Las colecciones de objetos son comunes en la programación moderna, especialmente bajo el paradigma de la Programación Orientada a Objetos (POO). Como su nombre lo indica, las colecciones de objetos permiten reunir elementos de un mismo tipo y, si existen, de sus subtipos. Esto significa que, desde el punto de vista de la POO, dentro de una colección podemos almacenar en memoria objetos de una misma clase, así como de sus subclases.

En Java, la forma más simple de trabajar con colecciones de objetos es utilizando la clase `ArrayList`, que permite guardar de forma dinámica y secuencial un elemento detrás del otro, acceder a ellos y eliminarlos cuando lo necesitemos.

A continuación, veremos cómo crear colecciones de objetos utilizando `ArrayList`. También exploraremos cómo manipular su contenido a través de los siguientes métodos (hay más, pero por ahora no los trataremos):

| Método            | Descripción                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `add(elemento)`   | Permite agregar un elemento al final de la colección.                                                                                           |
| `add(n, elemento)`| Permite agregar un elemento en la posición señalada por `n`. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |
| `get(n)`          | Permite obtener el elemento `n` de la colección. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |
| `remove(n)`       | Permite extraer el elemento `n` de la colección. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |

En Java, los `ArrayList` son una implementación de la interfaz `List`. También se los conoce como listas, aunque este concepto es más amplio de lo que trataremos aquí, donde sólo los utilizaremos para crear colecciones dinámicas de datos.

<a id="alg26"></a>

### **Qué es un "array-like" en Javascript?** 💛

[Volver al indice](#alg-base-arr)

Es un tipo de dato similar a un Array pero que no posee todas las funciones heredadas de Prototype de un Array.

Un array-like es un objeto que tiene propiedades indexadas y una propiedad length. Aunque no es un array, se comporta como tal. Por ejemplo, el objeto arguments es un array-like.

```javascript
// Definición de un objeto "array-like"
var arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3 // La propiedad length es importante para que se comporte como un array
};

// Acceder a elementos
console.log(arrayLike[0]); // Imprime: 'a'
console.log(arrayLike[1]); // Imprime: 'b'

// Iteración sobre el objeto "array-like"
for (var i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}
// Imprime:
// 'a'
// 'b'
// 'c'
```

Es un objeto, no es un array. Para pasar su valor a un array, debo usar el spread operator

```javascript
var array = [...arrayLike];
console.log(array); // Imprime: ['a', 'b', 'c']
```

<a id="alg27"></a>

### **Cuales son las funciones array de JavaScript?** 💛

[Volver al indice](#alg-base-arr)

```jsx
// Agrega al final
[1,2,3].push(4) // [1,2,3,4]

// Quita y devuelve el último elemento
[1,2,3].pop() // [1,2]

// Quita y devuelve el primer elemento
[1,2,3].shift() // [2,3]

// Agrega al principio
[1,2,3].unshift(0) // [0,1,2,3]

//  Combina dos o más arreglos y devuelve un nuevo arreglo - los CONCATENA
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

// Devuelve un array donde cada elemento del array tiene en el medio
// el valor pasado como argumento
['a', 'b'].join('-') // a-b

// Devuelve una copia superficial de una porción del arreglo en un nuevo arreglo seleccionando los elementos desde el inicio hasta el final (o hasta un índice especificado).
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 4); // Copia desde el índice 1 hasta el índice 3 [2, 3, 4]

// Devuelve el index del elemento, si no lo encuentra, devuelve -1
['a', 'b'].indexOf('b') // 1

// Devuelve si el elemento existe en el array
['a', 'b'].includes('b') // true

// Devuelve el primer elemento que cumple con la condición
[3,5,6,8].find((valorActual) => valorActual % 2 === 0) // 6

// Devuelve el index del primer elemento que cumple con la condición
[2,4,3,5].findIndex((valorActual) => valorActual % 2 !== 0) // 2

// Devuelve un nuevo array con los elementos modificados, en este caso los multiplica por 2. Devuelve un nuevo array, no muta el array modificado
const array = [3,4,8,6].map((n) => n * 2) // [6,8,16,12]

// Devuelve un nuevo array con los elementos que cumplan con la condición
// Si el valorActual cumple con la condicion, queda en el array, de lo contrario, se quita
[1,4,7,8].filter((valorActual) => valorActual % 2 === 0) // [4,8]

// Devuelve un solo valor, en este caso la suma de los elementos
[2,4,3,7].reduce((accumulator, currentValue) => accumulator + currentValue) // 16

// El accomulator puede ser inicializado de antemano, si no, se toma como valor inicial el primer elemento del array
[2,4,3,7].reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// Devuelve true si todos los elementos cumplen con la condicion
[2,3,4,5].every((valorActual) => valorActual < 6) // true

// Devuelve true si algunos de los elementos cumplen con la condicion
[3,5,6,8].some((valorActual) => valorActual > 6) // true

// Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b"); // Elimina 1 elemento desde el índice 2 y agrega "a" y "b" [1, 2, "a", "b", 4, 5]
splice(indice, cantidad elementos a eliminar, agrego, agrego);

// Da vuelta el Array
[1,2,3,4].reverse() // [4,3,2,1]

// Devuelve, si es positivo, el elemento en el lugar 2 (0,1,2), caso negativo, contando desde el final.
[5, 12, 8, 130, 44].at(-2) // 130
[5, 12, 8, 130, 44].at(2) // 8

// Recorre el array
[1,2,3].forEach(x => console.log(x))

// Conviene valores a un array
"hola".split() => ['h','o','l','a'];
//Se puede separar la palabra dependiendo de un regex
"hola, denu".split(/,\s*/g) => ['hola', 'denu'];

```

<a id="alg28"></a>

### **Funcion `.sort()`** 💛

[Volver al indice](#alg-base-arr)

`.sort()` es una funcion que viene en Javascript. Funciona bien con numeros simples, pero no con numeros complejos como, por ejemplo, 10.

```javascript
[2,3,1].sort() => [1,2,3];
[2,10,3].sort() => [10, 2, 3];
```

Esto es porque esta funcion primero convierte los numeros a String y los ordena alfabeticamente. Es por eso que es necesario usar una funcion de callback.

```javascript
const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  });
```

Esta funcion devuelve un numero. El mismo determina lo siguiente:

* Si el numero es negativo, acomoda a antes que b.
* Si es positivo, b va antes que a
* Si es cero, no cambia nada

```javascript
const inputValues = [2, 10, 3];

const sortedValues = inputValues.sort((a, b) => {
  return a + b;
});

console.log(sortedValues); // Output: [10, 3, 2]
```

<a id="alg282"></a>

### **¿Cómo funcionan los arrays en JavaScript internamente?**

[Volver al indice](#alg-base-arr)

Los arrays en JavaScript son objetos especiales que permiten almacenar múltiples elementos en una sola variable. A diferencia de otros lenguajes de programación, los arrays en JavaScript no tienen un tamaño fijo y pueden contener elementos de diferentes tipos.

Internamente, los arrays en JavaScript se implementan como objetos con propiedades indexadas. Cada elemento del array se almacena en una propiedad con un índice numérico. Por ejemplo, el array [1, 2, 3] se representa internamente como un objeto con las siguientes propiedades:

```javascript
{
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
```

Por eso existe el `array-like` en Javascript

<a id="alg16"></a>

### **Especificando la clase de contenido de un ArrayList en Java**

[Volver al indice](#alg-base-arr)

Esta clase tiene una particularidad: para instanciar un ArrayList debemos indicar la clase de elementos que contendrá. Crear el ArrayList sin especificar la clase de elementos que contendrá está permitido, pero indicará una alerta y asumirá que sus elementos son de la clase Object. Los ArrayLists soportan que en su definición se indique cuál será la clase que tomaremos como clase base para añadir elementos a la estructura.
Si necesitamos crear una colección de objetos que pueda guardar cualquier clase de elemento, debemos asociarla a la clase Object, pero la clase Object no conocerá los métodos y atributos específicos de cada elemento que pongamos en la lista, y esto impedirá acceder a sus atributos y métodos particulares en forma automática.

```java
ArrayList<Object> coleccion = new ArrayList<>();
```

<a id="alg17"></a>

### **Creación de un ArrayList en Java**

[Volver al indice](#alg-base-arr)

Como primera medida importaremos el paquete correspondiente a partir de la adición de su namespace (Esto al momento de escritura de este apunte):

```java
import java.utils.ArrayList;
```

Una vez agregado el paquete nuestro programa permitirá crear colecciones de la siguiente manera (podemos hacerlo en dos partes, primero declarando la variable y luego creando el objeto; aquí está la “versión corta”):

```java
ArrayList<ClaseBase> coleccion = new ArrayList<>();
```

Así, para crear una colección de objetos de la clase Persona, haremos:

```java
ArrayList<Persona> personas = new ArrayList<>();
```

Tengamos en cuenta que al hacer esto estamos creando únicamente la colección vacía, sin ningún elemento. La clase ArrayList posee el método size() que nos indica cuál es la cantidad de elementos que se han guardado en el momento en la colección. Si ejecutásemos la siguiente instrucción inmediatamente después de crearla, obtendríamos como respuesta un 0:

```java
System.out.println(coleccion.size());
```

En caso de necesitar crear una colección de elementos de los tipos nativos del lenguaje (integer, double, etc.) debemos recurrir a sus contrapartes como clase:

```java
ArrayList<Integer> numeros = new ArrayList<>();
```

Tampoco deberemos crear una nueva clase para generar colecciones de Strings, porque de por sí String ya es una clase:

```java
ArrayList<String> palabras = new ArrayList<>();
```

<a id="alg17-2"></a>

### **¿Cuál es la diferencia entre un ArrayList y un array tradicional en Java?**

[Volver al indice](#alg-base-arr)

Un array tradicional en Java es una estructura de datos fija que almacena un conjunto de elementos del mismo tipo. Una vez que se crea un array, su tamaño no puede cambiar. Por otro lado, un ArrayList en Java es una implementación de la interfaz List que proporciona una colección dinámica de elementos. A diferencia de un array tradicional, un ArrayList puede cambiar de tamaño dinámicamente, lo que significa que puede crecer o reducirse según sea necesario.

<a id="alg17-3"></a>

### **¿Cómo afecta la capacidad de crecimiento dinámico un ArrayList a su rendimiento?**

[Volver al indice](#alg-base-arr)

El crecimiento dinámico de un ArrayList en Java puede afectar su rendimiento en ciertas situaciones. Cuando un ArrayList crece más allá de su capacidad actual, necesita aumentar su tamaño interno para acomodar más elementos. Esto implica la creación de un nuevo array interno con una capacidad mayor y la copia de todos los elementos existentes al nuevo array. Este proceso de redimensionamiento puede ser costoso en términos de tiempo y recursos, especialmente si el ArrayList contiene una gran cantidad de elementos.

<a id="alg18"></a>

### **Agregar un elemento a un ArrayList**

[Volver al indice](#alg-base-arr)

Para agregar un elemento a un ArrayList utilizaremos el método add(elemento), el cual permite agregar un nuevo elemento al final de la estructura (es decir, como último elemento).

Por ejemplo, para agregar un elemento, podemos hacer:

```java
// creamos el objeto
Objeto elemento = new Objeto();
...
...
...
// lo agregamos a la colección
coleccion.add(elemento);
```

Solamente en el caso de las clases relacionadas a los tipos nativos (integer, double, etc.) podremos agregar elementos sin necesidad de crear explícitamente el objeto (Java lo hará por nosotros):

```java
numeros.add(19); // insertará el número 19 en la colección
```

<a id="alg19"></a>

### **Obtener el elemento n de un ArrayList**

[Volver al indice](#alg-base-arr)

Para obtener el elemento n del ArrayList utilizaremos el método get(n), donde n es la posición en la cual está el elemento. El valor de n debe estar entre 0 y size()-1, caso contrario se producirá un error de ejecución.
Para obtener el primer elemento de la colección haremos:

```java
Objeto elemento = coleccion.get(0);
```

Esto guardará la referencia al elemento sin quitarlo de la lista (no hace una copia). Entonces, si modificamos el elemento que tenemos en el auxiliar, obviamente estaremos modificando el elemento que está en la lista, pues es el mismo elemento referenciado desde dos lugares distintos.

<a id="alg20"></a>

### **Extraer el elemento n de un ArrayList**

[Volver al indice](#alg-base-arr)

Para extraer el elemento n del ArrayList utilizaremos el método remove(n ), donde n es la posición en la cual está el elemento. El tratamiento es similar al caso del get(): el valor de n debe estar entre 0 y size()-1, caso contrario se producirá un error de ejecución. A diferencia del get(), remove() extrae el elemento de la posición, y si éste no era el último, su lugar será ocupado por el siguiente elemento (y así hasta el final), acortando el tamaño de la estructura en 1.
Por ejemplo, para extraer el primer elemento de la colección haremos:

```java
Objeto elemento = coleccion.remove(0);

coleccion.remove(0);
```

La diferencia entre estos dos casos es que mientras el primero guarda el elemento removido en una variable auxiliar para su uso posterior, el segundo lo descarta inmediatamente y ya no tendremos acceso al mismo.
Pero sacar un elemento de la colección, como vimos más arriba, tiene algunas consecuencias impensadas, algunas de las cuales trataremos más adelante en esta misma guía.

<a id="alg21"></a>

### **Recorrer el ArrayList completo con for-each**

[Volver al indice](#alg-base-arr)

El ciclo conocido como for-each es una variante del for tradicional que, en vez de utilizar un valor índice para iterar una determinada cantidad de veces, utiliza un iterador implícito para visitar en cada ciclo cada los elementos cargados en la lista, de a uno por vez, del primero al último elemento. Para eso necesita una variable local en la cual guardará temporalmente la referencia al elemento visitado.
La estructura del for-each es la que sigue:

```java
for (Clase elementoAuxiliar : coleccion) {
 proceso(elementoAuxiliar);
}
```

En el ejemplo, proceso() deberá reemplazarse por lo que querramos hacer con el elemento visitado. Por ejemplo, para mostrar el nombre y el número de DNI de cada persona guardada en la colección, haríamos:

```java
for (Persona persona : personas){
 System.out.println(persona.getNombre());
 System.out.println(persona.getDocumento());
}
```

Este ejemplo podría leerse como “para cada persona que esté en la colección de personas, mostrar el nombre y el número de documento”. Esto hará que en cada iteración (en cada vuelta del ciclo) la variable persona guarde temporalmente, una a una, cada persona que esté en la estructura, comenzando con la primera de todas y hasta que no haya más. La variable persona tendrá asignada en cada ciclo, entonces, el objeto de la colección que se está visitando en ese momento.

<a id="alg22"></a>

### **Buscar un elemento en la colección**

[Volver al indice](#alg-bas-arr)

Utilizar el ciclo for-each es muy fácil y cómodo, pero no tiene una manera natural de abandonar el recorrido por la colección sin recorrerlo por completo. El inconveniente de esto es que si estamos buscando un elemento específico y ya lo encontramos, o si ya sabemos que no lo encontraremos, seguiríamos recorriendo la estructura hasta el final innecesariamente.
Hay formas de recorrer la estructura parcialmente. Una de ellas es utilizando
explícitamente un iterador, la cual probablemente sea la forma más conocida de
hacerlo. Pero trabajar con iteradores requiere de cierto cuidado y tener en cuenta algunos conceptos que dejaremos para más adelante.
Entonces nos queda una forma de recorrer la estructura parcialmente sin
necesidad de hacerlo por completo: aprovechando la capacidad de acceder a un
elemento determinado con get(). Por ejemplo, si necesitamos ubicar una persona determinada de la lista, podríamos hacer lo siguiente:

```java
// Búsqueda de la persona por nro de documento.
// creamos una variable auxiliar donde dejaremos
// el elemento buscado, si lo encontramos.
Persona personaBuscada = null;
int indice = 0;
// buscamos mientras no hayamos llegado al final
// de la estructura y no hayamos encontrado el
// elemento que estamos buscando.
while (indice < personas.size() && personaBuscada == null) {
 if (personas.get(indice).getDocumento() == docBuscado) {
 // si la encontramos, la asignamos al auxiliar
  personaBuscada = personas.get(indice);
 } else {
  // incrementamos el índice para
  // pasar al siguiente elemento
  indice++;
 }
}
```

El ejemplo anterior utilizará el ciclo while para recorrer la estructura mientras haga falta. El if interno, como está expresado en los comentarios, cumple dos tareas. La primera es asignar el elemento al auxiliar cuando es el que buscamos. La segunda, es darnos la posibilidad de intentar con el siguiente, a ver si es el que queremos. El incremento de índice puede hacerse también fuera del if (no en el else), aunque en ese caso perdería la posición donde encontró el elemento. De esta forma, guarda también la posición y no incremente el índice sin necesidad.

<a id="alg23"></a>

### **Remover algunos de los elementos del ArrayList**

[Volver al indice](#alg-base-arr)

Un tratamiento similar debemos aplicar cuando queremos extraer algunos elementos de la colección, pero no todos. El tema, en este caso, pasa porque al remover un elemento determinado, los posteriores se adelantan en una posición. Esto hace que al incrementar el valor del índice inmediatamente después de extraer el elemento, como todos los elementos posteriores se movieron para adelante una posición, en la posición que acabamos de abandonar ha quedado, si existe, un elemento que no hemos visitado. Para que esto no suceda, sólo debemos avanzar cuando el elemento recién visitado no haya sido extraído. Si lo hemos extraído, nos quedaremos en esa posición esperando a que los  elementos se reacomoden (que todos los posteriores ocupen su nuevo lugar) y, así, no perder el nuevo elemento que cayó en la posición donde estamos parados.
Veamos el siguiente ejemplo: supongamos que tenemos una colección de números con los valores 1, 7, 4, 9, 17, 22. No es necesario que estén ordenados. Lo que intentaremos es dejar sólo los números impares, eliminando los pares:

```java
// Eliminando todos los números pares de la colección.
int indice = 0;
// buscamos mientras no hayamos llegado al final
// de la estructura.
while (indice < numeros.size()) {
 if (numeros.get(indice) % 2 == 0) {
 // si es par lo quitamos
  numeros.remove(indice);
 } else {
  // incrementamos el índice para
  // pasar al siguiente elemento
  indice++;
 }
}
```

Así, recorreremos la colección de números hasta llegar al 4 (índice=2, recordemos que el primero tiene índice=0). Entonces, lo extraeremos, y todos los elementos posteriores se adelantarán un lugar. La colección, entonces, queda así: 1, 7, 9, 17, 22

Nosotros seguiremos parados en la posición 2, donde ahora, en vez del 4 que extrajimos, está el 9. Gracias a que no avanzamos, en la nueva iteración del ciclo (donde podría haber encontrado un nuevo número par) trataremos el 9, luego el 17 y así hasta llegar al 22. Aquí también nos detendremos a extraer el número y no incrementaremos, pero la lista habrá perdido un nuevo elemento (el 22), quedando entonces sólo con 4 elementos (1, 7, 9, 17). Como el ciclo sólo itera mientras el índice sea menor a la cantidad de elementos de la colección, saldremos y la lista quedará solamente con los números impares.

---

<a id="alg24"></a>

### **Creando colecciones como atributo de una clase en Java**

[Volver al indice](#alg-base-col)

Supongamos que tenemos la clase Club, y que el club mantiene una lista de sus socios.
Para esto, crearemos el atributo privado socios, que será un ArrayList de elemento de clase Socio. Si bien podemos instanciar aquí la colección, sólo la declararemos y le asignaremos el valor null para que la colección sea creada explícitamente en el constructor de la clase Club, pues consideramos que es el mejor lugar para hacerlo:

```java
public class Club {
 private ArrayList<Socio> socios = null;
 public Club() {
  this.socios = new ArrayList<Socio>();
 }
 public void agregarSocio(Socio socio) {
  socios.add(socio);
 }
 public void agregarSocio(String nombre) {
  socios.add(new Socio(nombre));
 }
}
```

También podemos ver dos métodos distintos para agregar socios, el primero pasándole directamente un objeto de la clase Socio, y el segundo que sólo recibe el nombre del nuevo socio, que será instanciado y agregado en el momento.
¿Y qué deberíamos hacer para dar de baja un socio? ¿Cómo hacemos para devolver la instancia de socio que queremos eliminar sin exponer la colección completa?

```java
public Socio darDeBaja(int numero) {
 Socio socio = null;
 int indice = 0;
 while (indice < socios.size() && socio == null) {
  if (socios.get(indice).getNumero() == numero) {
   socio = socios.get(indice);
  } else {
   indice++;
  }
 }
 return socio;
}
```

Así devolvemos null o el socio encontrado, que ya ha sido removido de la colección, para que desde donde han llamado a la rutina se procese la instancia de la manera que se desee (por ejemplo, para mostrar los datos del socio dado de baja).

<a id="alg25"></a>

### **Devolver una colección secundaria en Java**

[Volver al indice](#alg-base-col)

Siguiendo con el ejemplo anterior, supongamos que queremos devolver una colección con todos los socios vitalicios del club. Para eso podríamos hacer algo como lo que sigue:

```java
public ArrayList<Socio> obtenerVitalicios() {
 ArrayList<Socio> vitalicios = new ArrayList<Socio>();
 for (Socio s: socios) {
  if (s.esVitalicio()) {
   vitalicios.add(s);
  }
 }
 return vitalicios;
}
```

En este caso agregará a la colección vitalicios (creada como variable local) todos aquellos socios que cumplan con la condición de ser vitalicios. Pero, ¿qué pasará, entonces, con la lista de socios principal, donde estaban los estos socios, ahora en la lista de socios vitalicios?
No pasará nada: todos los socios estarán en la lista principal, y aquellos que cumplan con lo condición deseada, además, estarán en esta lista secundaria. Cada socio vitalicio estará tanto en la lista secundaria como en la principal, porque en ambas se guarda la referencia al objeto de clase Socio en cuestión. En caso de eliminar el elemento de una de las listas, seguirá vivo en la otra. Esto puede no ser algo deseable, pero es algo que se tratará en otra oportunidad.

<a id="alg29"></a>

### **Set() en Javascript** (HashSet) 💛

[Volver al indice](#alg-base-col)

Es una estructura de datos que solo permite valores unicos. Si paso un array a un set, va a eliminar todos los valores duplicados.

* `new Set()` -> Crea el set nuevo, si es desde un array, elimina duplicados
* `Add()`
* `Delete()`
* `Has()` -> Devuelve true o false si el valor ya existe
* `clear()`-> Remover todos los elementos del set
* `Values()` -> devuelve un iterator con todos los valores
* `forEach()`
* `keys()`-> mismo con values
* `Entries()` -> devuelve un iterator con [value, value] pares

```javascript
// Crear una nueva instancia de Set
const mySet = new Set();

// Agregar elementos al Set
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("apple"); // Los Sets no permiten elementos duplicados, por lo que esta línea no tendrá ningún efecto

// Verificar si un elemento existe en el Set
console.log(mySet.has("apple")); // Output: true
console.log(mySet.has("grape")); // Output: false

// Eliminar un elemento del Set
mySet.delete("banana");

// Iterar sobre los elementos del Set
for (let item of mySet) {
    console.log(item);
}
// Output:
// apple
// orange

```

<a id="alg30"></a>

### **HashTables** (.Map) 💛

[Volver al indice](#alg-base-col)

Es una estructura de datos que almacena valores dado su Hash (int o long). Son muy eficientes para una busqueda dada por clave.

Sus operaciones son:

* Insertar nuevo par clave, valor - `index = hash(key) % array_length` , su complejidad es `O(1)`
* Obtener un valor mediante su clave, su complejidad es `O(1)` en un caso promedio, `O(N)` en el peor de los casos, en general si la funcion Hash es inadecuada.

```javascript
// Definición de una Hashtable
const hashtable = {};

// Agregar elementos a la Hashtable
hashtable["key1"] = "value1";
hashtable["key2"] = "value2";
hashtable["key3"] = "value3";

// Acceder a elementos en la Hashtable
console.log(hashtable["key1"]); // Output: "value1"
console.log(hashtable["key2"]); // Output: "value2"

// Verificar si una clave existe en la Hashtable
console.log("key4" in hashtable); // Output: false

// Eliminar un elemento de la Hashtable
delete hashtable["key3"];

// Iterar sobre las claves de la Hashtable
for (let key in hashtable) {
    console.log(key + ": " + hashtable[key]);
}
// Output:
// key1: value1
// key2: value2

----

// Crear una nueva instancia de Map
const myMap = new Map();

// Agregar elementos a la Map
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Acceder a elementos en la Map
console.log(myMap.get("key1")); // Output: "value1"
console.log(myMap.get("key2")); // Output: "value2"

// Verificar si una clave existe en la Map
console.log(myMap.has("key4")); // Output: false

// Eliminar un elemento de la Map
myMap.delete("key3");

// Iterar sobre las claves y valores de la Map
for (let [key, value] of myMap) {
    console.log(key + ": " + value);
}
// Output:
// key1: value1
// key2: value2

```

<a id="alg301"></a>

### **¿Cuál es la diferencia entre un Set y un Array en JavaScript?**

[Volver al indice](#alg-base-col)

| Set | Array |
| --- | ----- |
| Almacena valores únicos | Almacena valores duplicados |
| No tiene índices | Tiene índices |
| No tiene métodos como push(), pop(), shift(), unshift() | Tiene métodos como push(), pop(), shift(), unshift() |
| No tiene métodos como map(), filter(), reduce() | Tiene métodos como map(), filter(), reduce() |
| No tiene métodos como sort(), reverse() | Tiene métodos como sort(), reverse() |
| No tiene métodos como find(), findIndex(), every(), some() | Tiene métodos como find(), findIndex(), every(), some() |
| No tiene métodos como splice(), slice() | Tiene métodos como splice(), slice() |
| No tiene métodos como join(), concat() | Tiene métodos como join(), concat() |

<a id="alg302"></a>

### **¿En qué situaciones es más eficiente usar un HashMap en lugar de un Array?**

[Volver al indice](#alg-base-col)

Un HashMap es más eficiente que un Array cuando necesitamos almacenar pares clave-valor y realizar búsquedas rápidas por clave. En un Array, las búsquedas por valor tienen una complejidad de O(n), mientras que en un HashMap, las búsquedas por clave tienen una complejidad de O(1) en promedio.


<a id="alg31"></a>

### **Linked Lists** 💛

[Volver al indice](#alg-base-col)

Es una estructura de datos que representa una secuencia de nodos.

* Es una lista enlazada simple, un nodo apunta al siguiente.
* Doble, el nodo apunta al siguiente y al anterior nodo.

Los nodos almacenan cualquier tipo de informacion

```java
public class Node {
  // Referencia al nodo siguiente
 public Node next;
  // Valor del nodo en este caso int
 public int value;

 public Node(int value) {
  this.value = value;
 }
}
```

Sus operaciones mas comunes son:

* **Insercion al final de la lista**: Se obtiene el nodo primero de la lista (head), hasta llegar a uno que no tenga un nodo siguiente, significa que es el ultimo. Ahi inserto su referencia next al nuevo nodo, y este nuevo nodo, sin referencia a next
* **Eliminar un nodo**: Si es el head, solo se mueve la referencia a head al nodo siguiente. Para cualquier otro nodo, simplemente cambio las referencias al mismo en next (`node.next = node.next.next`)

Sus ventajas son:

* Capacidad de insertar un nodo en cualquier posicion de la lista de manera directa, sin mover nada. Solo cambio las referencias de los nodos.
* Se puede hacer referencia solo al valor

Sus inconvenientes son:

* El acceso a un item aleatorio es complicado. Se deben recorrer todos los nodos hasta llegar a donde queremos, esto es ineficiente.

```java
public class SingleLinkedList {
  public Node head; // El primer nodo de todos

  public void agregarAlFinal(int value) {
    // Si es el primer elemento de todos
    if (head == null) {
      head = new Node(value);
      return;
    }

    Node current = head;
    // Mientras no encuentre un nodo sin referencia next (el ultimo)
    while (current.next != null) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  public void eliminarNodo(int value) {
    // No hay elementos a eliminar porque no hay lista
    if (head == null) return;

    if (head.value == value) {
      // Si el elemento a borrar es el head, paso el head al segundo elemento de la lista
      head = head.next;
      return;
    }

    Node current = head;
    while(current.next != null) {
      if (current.next.value == value) {
        current.next = current.next.next;
        return
      }

      current = current.next;
    }
  }

  public void print() {
    if (head == null) return;

    Node current = head;
    while (current.next != null) {
      System.out.println(current.value);
      current = current.next;
    }
  }
}
```

<a id="alg32"></a>

#### **¿Cuales son los beneficios de un Linked List sobre un Array?**

[Volver al indice](#alg-base-col)

Un Array es una estructura de datos que almacena elementos de forma contigua en la memoria. Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria.

Consideremos un escenario donde debemos guardar mucha data en un array, pero, la memoria para guardar esa data no esta disponible de forma continua, en ese caso, no podemos usar un Array.

En un Linked List, como cada nodo esta conectado con un link, no es necesario que la memoria sea continua.

<a id="alg33"></a>

### ¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?

[Volver al indice](#alg-base-col)

Un Singly Linked List se tienen links derechos, pero no podemos ir para atrás ya que siempre apuntan al siguiente. El DLL posee en cada nodo 3 campos, uno que apunta al nodo anterior, otro al siguiente.

Se puede reconocer cuando un nodo es el primero ya que su link anterior es Nulo, lo mismo con el último. Es mas eficiente acceder a los elementos en un DLL

<a id="alg34"></a>

### **¿Cual es la diferencia entre un Linked List y un Doubly Linked List?**

[Volver al indice](#alg-base-col)

Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria. Un Doubly Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria, pero cada nodo tiene un link al nodo anterior y al siguiente.

---

<a id="var1"></a>

### **¿Qué es una Variable?**

[Volver al indice](#alg-base-var)

Una *variable* es un *contenedor* que tiene un valor o dato. Desde el punto de vista técnico, es un espacio de la memoria en el que guardamos ese determinado valor (o dato).

Todas las variables tienen características comunes (por ejemplo un nombre que las identifica) y otras que difieren según el tipo de dato que contengan. Si pudiéramos ver qué contiene internamente una variable, veríamos que en algunos casos contiene directamente el valor y en otros (como en el caso de los objetos) otra cosa.

<a id="var2"></a>

### **¿En qué se diferencia una variable común, nativa, de un objeto?**

[Volver al indice](#alg-base-var)

Consideraremos que las variables nativas son entidades elementales: un número, un carácter, un valor verdadero o falso, que son entendidas por el lenguaje y asociadas a un tipo de dato *reconocible* por el entorno donde el programa corre, mientras que los objetos son entidades complejas que pueden estar formadas por la agrupación de más de un elemento, incluyendo *campos* y *métodos*. Pero todas ocupan un espacio de memoria (que puede ser mayor o menor).

Ahora bien, las variables nativas guardan en sí mismas sus valores, y su tamaño está determinado por el tamaño definido del tipo de dato. En el caso de los objetos, como cada clase tiene su propia definición y el tamaño de sus *instancias solamente puede ser resuelto en tiempo de ejecución*, solamente guardarán la *dirección de memoria* de la *instancia*. Es lo que comúnmente se conoce como puntero.

Es por eso que cuando a una variable de "tipo clase" no se le asigna ningún valor posee *null* como valor *por defecto*. Este *null* implica que la variable no guarda ningún objeto, y es por eso que produce un error de ejecución cuando se intenta acceder a un método de la instancia cuando ésta aún no se ha creado.

<a id="var3"></a>

### **¿A qué nos referimos cuando hablamos de tipos de datos?**

[Volver al indice](#alg-base-var)

En los programas en Java puede ser necesario tanto el uso de datos elementales como de datos complejos. Por eso se usa el término “Tipos de datos” para englobar a cualquier cosa que ocupe un espacio de memoria y que pueda ir tomando distintos valores o características durante la ejecución del programa. Es decir, en vez de hablar de tipos de variables o de tipos de objetos, hablaremos simplemente de tipos de datos.

En Java diferenciamos dos tipos de datos: por un lado, los tipos primitivos, que se corresponden con los tipos de variables en lenguajes como C y que son los datos elementales que hemos citado. Por otro lado, los tipos objeto (que normalmente incluyen métodos)

![Cola](src/variables1.png)

<a id="var4"></a>

### **¿Cómo se declara una variable?**

[Volver al indice](#alg-base-var)

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

<a id="var5"></a>

### **Nombres de Variables**

[Volver al indice](#alg-base-var)

Cuando vayamos a dar un nombre a una variable deberemos tener en cuenta una serie de normas. Es decir, no podemos poner el nombre que nos dé la gana a una variable.

Es recomendable que los nombres de los identificadores sean legibles y no acrónimos que no podamos leer. De tal manera que a la hora de verlos se auto-documenten por sí mismos. Además estos identificadores nunca podrán coincidir con las palabras reservadas ni comenzar con un número.

Algunas reglas no escritas, pero que se han asumido *por convención* son:

* Los identificadores siempre se escriben en minúsculas. (pe. nombre). Y si son dos o más palabras, el inicio de cada siguiente palabra se escriba en mayúsculas (pe. nombrePersona)
* Si el identificador implica que sea una constante (es decir que hayamos utilizado los modificadores *final static*), dicho nombre se suele escribir en mayúsculas (pe. LETRA). Y si la constante está compuesta de dos palabras, estas se separan con un subrayado (pe. LETRA_PI).

<a id="var6"></a>

### **Diferencia entre let, var y const** 💛

[Volver al indice](#entrevista-base)

La diferencia es el alcance de cada uno.

- **var:** Es viable dentro de una funcion, incluso si es declarada dentro de un if o loop, es valida afuera, y es global si esta fuera de una funcion. Se puede reasignar y redeclarar.

```javascript
function ejemplo() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (aunque x se declaró dentro del bloque if)
}
```

- **let:** Es la manera de declarar variables en ES6. Es local en un bloque.
- **const:** Es la manera de declarar constantes en ES6. Es local en un bloque.

```jsx

var saludar = "hey, hola";
var saludar = "dice Hola tambien";
    saludar = "dice Hola tambien";


let camper = 'James';
let camper = 'David'; // throws an error
let saludar = "dice Hola";
    saludar = "dice Hola tambien";
let saludar = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared
```

Sí pongo un “use Strict” en la parte alta del codigo, la consola me va a tirar error cuando trate de codear algo de manera “insegura” o poco practica.

```jsx
"use strict";
x = 3.14; // throws an error because x is not declared
```

Cuando declaras una variable con **var,** es declarada de manera global, o local sí esta adentro de una funcion.

- Pueden ser modificadas y re-declaradas dentro de su ambito.
- Puede ser declarada sin ser inicializada, se inicializa con undefined por defecto.
- Puede ser declarada global o dentro de una funcion.

En cambio con **let,** sí declaro la funcion dentro de un block, statement o expresion, se va a declarar solo dentro de estas y no globalmente.

- No puede ser re-declarado pero si modificado.
- Puede ser declarada sin ser inicializada, se inicializa con undefined por defecto.
- Funciona a nivel bloque.

```jsx
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i); // 3

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 2
console.log(i); // i no esta definido
```

También se puede declarar usando la palabra **const**, que es una constante. Se declara y no puede ser cambiada en su valor, solo sirve de lectura.

```jsx
"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // error: Assignment to constant variable.
```

Se recomienda poner el nombre de las constantes en mayúscula.

```jsx
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // error asignando a una constante
s[2] = 45; // funciona
console.log(s); //  [5, 6, 45]
```

Los array sí pueden ser modificados en sí mismos, lo que no se puede es apuntar a otro array distinto.

```jsx
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // s = [2, 5, 7]; // error asignando a una constante
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```

<a id="var19"></a>

### **¿Qué son las variables no declaradas y no definidas?**

[Volver al indice](#alg-base-var)

**Variables no declaradas**: son las que no existen en un programa, y no se declaran. Si el programa trata de leer su valor entonces va a arrojar un error.

**Variables no definidas**: son aquellas declaradas en el programa, pero no tienen asignado ningún valor. Si el programa quiere leer el valor de  variable no definida, se devuelve un valor no definido.

<a id="var19-2"></a>

### **¿Qué es la tipificación estática y dinámica?**

[Volver al indice](#alg-base-var)

**Tipificación estática**: es un tipo de sistema de tipado en el que las variables están asociadas a un tipo de dato en tiempo de compilación. Esto significa que el tipo de dato de una variable se conoce en tiempo de compilación y no puede cambiar durante la ejecución del programa.

**Tipificación dinámica**: es un tipo de sistema de tipado en el que las variables están asociadas a un tipo de dato en tiempo de ejecución. Esto significa que el tipo de dato de una variable se conoce en tiempo de ejecución y puede cambiar durante la ejecución del programa.

---

<a id="alg37"></a>

### **Qué son las Pilas y Colas?**

[Volver al indice](#alg-base-pilcol)

Un Tipo de dato abstracto (TDA) es una estructura que integra un conjunto de datos (elementos) con un grupo de operaciones permitidas específicas que determinan la forma en la cual esos elementos son manipulados.

Cada TDA provee de una interfaz a través de la cual podemos realizar las operaciones permitidas, abstrayéndose de cómo estas están implementadas. Esto quiere decir que un mismo TDA puede ser implementado utilizando distintas estructuras de datos internas, pero proveyendo siempre la misma funcionalidad a través de su interfaz (API).

Como primeros ejemplos les mostraremos aquí un par de implementaciones de Pilas y Colas, las que serán implementadas usando ArrayList y Nodos, aunque es posible realizar otras implementaciones, como por ejemplo con Arrays. Elegimos implementar estas porque ninguna de las dos limita *por naturaleza* la cantidad de elementos que se pueden agregar, aunque podríamos crear pilas y colas con un máximo de elementos sin inconveniente.

Respecto a estas implementaciones, y dado que la funcionalidad propia de estas estructura va más allá del tipo elemento contenido (en cierta forma podemos decir que a cada uno de estos TDA no le importa el tipo de información que guarda) todas las implementaciones que presentamos hacen uso de *Generics* pues el *comportamiento* de ambas estructuras tiene que ver con el orden en el cual se puede acceder, agregar y quitar un elemento:

* Las PIlas son estructuras LIFO (Last In, First Out), donde el último elemento que se agrega es el primero que se sacará.
* Las Colas son estructuras FIFO (First In, First Out), donde los elementos se sacan en el mismo orden que fueron agregados.

Un detalle que tienen en común ambas estructuras es que **no permiten**
 acceder a ningún otro elemento contenido en el TDA. no es posible buscar ni elegir otro elemento que no sea el primero que está disponible para su extracción

<a id="alg38"></a>

### **Colas**

[Volver al indice](#alg-base-pilcol)

El primer par de implementaciones que mostramos son las pertenecientes al TDA **`Cola<*TipoElemento*>`** donde, al igual que se hace con ArrayList, *TipoElemento* indica qué clase de elemento podrá contener (puede ser tanto una *clase* como una *interfaz*).

Se puede ver que ambas implementaciones coinciden en el cumplimiento de la interfaz. Puede ser que la implementación con ArrayList sea más simple, pero no olvidemos el trabajo que hace el propio ArrayList en su manejo interno de su contenido, Así, lo único que tendremos que hacer siempre es agregar los nuevos elementos al final (usando el método *`add()`* de ArrayList) y siempre sacando el primer elemento (usando `remove(0)` también del ArrayList). También podemos transferir el valor del método *`isEmpty()`* de ArrayList al propio método *`isEmpty()`* de la cola).

La segunda implementación, basada en nodos, puede parecer más complicada, pero en cuanto a su funcionamiento real es más simple que la anterior pues el trabajo con nodos es más eficiente. Por ejemplo, con esta implementación no se produce el desplazamiento interno de todos los elementos del ArrayList cuando se saca el primer elemento.

![Cola](src/Cola1.png)

<a id="alg39"></a>

### **Pilas**

[Volver al indice](#alg-base-pilcol)

Veamos ahora las implementaciones de **`Pila<*TipoElemento*>`**

La implementación de **`Pila<*TipoElemento*>`** es extremadamente similar, aunque los nombres para los métodos *`add()`*, *`remove()`* y *`get()`* suelen encontrarse como *`push()`*, *`pop()`* y *`peek()`*, respectivamente, y éstos son los nombres que elegimos para diferenciar claramente la Pila de la Cola:

![Pila](src/Pila1.png)

<a id="alg40"></a>

### **Nodo versus dato**

[Volver al indice](#alg-base-pilcol)

Un detalle a tener en cuenta en cuanto a la implementación con nodos es que no debemos confundir el ***nodo*** con el ***dato***: mientras que este último es el *elemento* que se agrega, mira o quita, el primero es su *contenedor* circunstancial y lo guarda en su interior. Por otra parte, los nodos nunca son accesibles a través de la interfaz del TDA y están encapsulados (**composición**). Por lo tanto, así como en la implementación con ArrayList no podemos acceder al mismo, tampoco podemos acceder a la cadena de nodos. Para quien usa el TDA, la implementación es completamente *transparente*.

<a id="alg41"></a>

### **Uso de Pilas y Colas**

[Volver al indice](#alg-base-pilcol)

Para utilizar las estructuras haremos algo muy parecido a lo que hacemos con ArrayList: las declararemos indicando el tipo de elemento contenido dentro de los paréntesis agudos. Pero a diferencia de cuando usamos ArrayList, aquí estamos declarando las estructuras usando interfaces, y con éstas no se pueden crear instancias pues no están implementadas. Por eso, para poder crear alguna instancia de cualquier TDA deberemos elegir alguna de sus implementaciones

Por ejemplo podríamos elegir las implementaciones con Nodos y hacer:

```javascript
Pila<Caja> pilaDeCajas = new PilaNodos<>();
Cola<Persona> filaDePasajeros = new ColaNodos<>();
```

Para agregar una caja en la pilaDeCajas haremos:

```javascript
pilaDeCajas.push(new Caja());
```

Y para agregar una persona a la fila…

```javascript
filaDePasajeros.add(new Persona());
```

Para ver los elementos disponibles haremos:

```javascript
System.out.println(“Caja visible: “ + pilaDeCajas.peek());
System.out.println(“Primera persona en la fila: “ + filaDePasajeros.get());
```

Cabe aclarar que ninguna de estas dos operaciones modifica el estado de las estructuras (no agrega ni quita ningún elemento, simplemente muestran el único que se puede *ver* en cada caso).

```javascript
System.out.println(“Caja visible: “ + pilaDeCajas.pop());
System.out.println(“Primera persona en la fila: “ + filaDePasajeros.remove());
```

Quitan el primer elemento disponible en cada estructura, dejando ambas estructuras vacías pues las dos tenían un único elemento cada una. Ahora el método *isEmpty()* de ambas devolverá *true*

---

<a id="alg42"></a>

### **Arboles**

[Volver al indice](#alg-base-arb)

Es una estructura donde un nodo tiene un solo padre y muchos hijos. Siempre hay una raiz.
Es excelente para cuando queremos insertar conjuntos de datos ordenados o para las búsquedas.

```java
public class Node {
  public int value;
  public Node[] hijos;

  // Puede ser cualquier tipo de dato, no solo int
  public Node(int value) {
    this.value = value;
  }
}
```

<a id="alg43"></a>

### **Qué es un Binary Tree?**

[Volver al indice](#alg-base-arb)

Un arbol en donde cada nodo debe tener como MAXIMO 2 hijos.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

<a id="alg44"></a>

### **Qué es un Binary Search Tree?**

[Volver al indice](#alg-base-arb)

Cada nodo puede tener MAXIMO 2 hijos, y cada descendiente del lado izquierdo debe tener un valor menor o igual al padre y los de la derecha deben tener un valor mayor o igual al padre.

El mismo tiene las propiedades de:

* Cada hijo izquierdo tiene un valor mas pequeño que su padre
* Cada hijo derecho tiene un valor mas grande que su padre
* Cada nodo puede tener hasta dos hijos.

![Algoritmo de búsqueda binaria](src/log3.png)

```jsx
function TreeNode(val, left, right) {
     this.val = val
     this.left = left
     this.right = right
 }
```

<a id="alg45"></a>

#### **Porque se dice que buscar un nodo en un BST es mas eficiente que en un Simple Binary Tree?**

[Volver al indice](#alg-base-arb)

Porque, por la particularidad que tienen los hijos de los nodos de un BST (que uno es mas chico que el otro), se puede seguir el recorrido mas facilmente. Hace que la busqueda sea mucha mas eficiente.

<a id="alg46"></a>

### **Complete Binary Tree**

[Volver al indice](#alg-base-arb)

En este arbol todos los niveles estan completos excepto por el ultimo. Si el ultimo nivel no esta completo, debe estar ocupado de izquierda a derecha. Por ejemplo, todos los nodos tienen 2 hijos excepto el ultimo que tiene uno solo.

Es un arbol 100% balanceado.

```javascript
// Definición de la clase TreeNode para un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Crear un árbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
```

<a id="alg47"></a>

### **Maneras de recorrer un Arbol**

[Volver al indice](#alg-base-arb)

![Tree Traversal: Inorder, Preorder, Postorder, and Level-order](https://assets-global.website-files.com/5d0dc87aac109e1ffdbe379c/60e18e09daeb6db6f4995305_-Vsv_RLYEukjbDMgKxKJpxTnA246o-X1OjUPkl5HvnSiR-dFU4w5qKNaUtw-rq8wD4vMTGxFKtjvKCt7Uthmidpl_ajqRpVqgAH57N1HTpQ5MGBE4HCvE0dq7gTeM4-JtFLkQShX.png)

<a id="alg48"></a>

### **In-Order Traversal**

[Volver al indice](#alg-base-arb)

Rama izquierda del nodo, a continuación el propio nodo y después la rama derecha. Se empieza por la raiz

<a id="alg49"></a>

### **Pre-order traversal**

[Volver al indice](#alg-base)

Primero el nodo padre, despues izquierda y luego derecha

<a id="alg51"></a>

### **Post-order traversal**

[Volver al indice](#alg-base-arb)

Primero la rama izquierda, luego la derecha y luego el padre

<a id="alg50"></a>

### **Recorrido de un Binary Tree**

[Volver al indice](#alg-base-arb)

```javascript
// Definición de la clase TreeNode para un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Función recursiva para recorrer un árbol binario en orden (in-order traversal)
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Visita el nodo izquierdo
        console.log(node.value);    // Imprime el valor del nodo actual
        inOrderTraversal(node.right);// Visita el nodo derecho
    }
}

// Crear un árbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Ejemplo de uso
console.log("Recorrido in-order del árbol binario:");
inOrderTraversal(root);

```

<a id="alg54"></a>

### **Heaps**

[Volver al indice](#alg-base-arb)

Un heap, también conocido como montículo, es una estructura de datos que se utiliza para mantener un conjunto de elementos donde cada elemento tiene una relación de orden con respecto a los demás elementos. La propiedad fundamental de un heap es que el elemento en la raíz (ya sea el más grande o el más pequeño, dependiendo del tipo de heap) siempre cumple con esta relación de orden con respecto a sus hijos.

Hay dos tipos principales de heaps:

1. **Max-Heap**: En un max-heap, el valor de cada nodo es mayor o igual que los valores de sus hijos. Esto significa que el elemento en la raíz es el más grande de todos los elementos en el heap.
2. **Min-Heap**: En un min-heap, el valor de cada nodo es menor o igual que los valores de sus hijos. Esto significa que el elemento en la raíz es el más pequeño de todos los elementos en el heap.

Los heaps se utilizan comúnmente para implementar las siguientes estructuras de datos y algoritmos:

* Cola de prioridad: Se puede utilizar un min-heap o un max-heap para implementar una cola de prioridad, donde los elementos se insertan con una prioridad y se eliminan de acuerdo con esa prioridad.
* Algoritmos de ordenación eficientes: Algunos algoritmos de ordenación, como heapsort, utilizan heaps para ordenar eficientemente un conjunto de elementos.
* Algoritmos de búsqueda eficientes: Algunos algoritmos de búsqueda, como el algoritmo de Dijkstra para encontrar el camino más corto en un grafo, utilizan colas de prioridad basadas en heaps para buscar eficientemente el siguiente nodo a visitar.

Los heaps proporcionan operaciones eficientes para insertar nuevos elementos, eliminar el elemento mínimo o máximo, y encontrar el elemento mínimo o máximo. Estas operaciones tienen una complejidad de tiempo logarítmica en el peor de los casos, lo que hace que los heaps sean una estructura de datos muy eficiente para ciertas aplicaciones.

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Función para obtener el índice del padre de un nodo en el heap
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Función para obtener el índice del hijo izquierdo de un nodo en el heap
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    // Función para obtener el índice del hijo derecho de un nodo en el heap
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    // Función para intercambiar dos elementos en el heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Función para insertar un nuevo elemento en el heap
    insert(value) {
        // Agregar el nuevo elemento al final del heap
        this.heap.push(value);
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyUp();
    }

    // Función para reajustar el heap hacia arriba (hacia la raíz)
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.parentIndex(currentIndex);
            // Si el valor del nodo actual es menor que el valor del padre, intercambiamos los nodos
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break; // Si el valor del nodo actual es mayor o igual al valor del padre, el heap está en orden
            }
        }
    }

    // Función para extraer el elemento mínimo (raíz) del heap
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const minValue = this.heap[0];
        // Reemplazar la raíz con el último elemento del heap
        this.heap[0] = this.heap.pop();
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyDown();
        return minValue;
    }

    // Función para reajustar el heap hacia abajo (hacia las hojas)
    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = this.leftChildIndex(currentIndex);
            const rightChildIndex = this.rightChildIndex(currentIndex);
            let smallestIndex = currentIndex;

            // Encontrar el índice del hijo con el valor más pequeño
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            // Si el valor del nodo actual es mayor o igual que los valores de los hijos, el heap está en orden
            if (smallestIndex === currentIndex) {
                break;
            }

            // Si el valor del nodo actual es mayor que el valor del hijo más pequeño, intercambiamos los nodos
            this.swap(currentIndex, smallestIndex);
            currentIndex = smallestIndex;
        }
    }
}

// Ejemplo de uso de MinHeap
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(4);
console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4]

console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.heap); // Output: [2, 4, 3, 5]
```

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

<a id="var35"></a>

### **¿Qué es una funcion Declarativa y una Expresiva?**

[Volver al indice](#alg-base-obj)

En las **Funciones Declarativas** usamos la palabra reservada `Function` para poder declararla

```jsx
 function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

La **Expresiva (Expresion de Funcion)** es cuando la declaramos tipo variable como funcion anonima

```jsx
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

A las funciones declarativas se les aplica hoisting, a la otra no, hoisting se aplica solo a las palabra sreservadas `var` y `function`, es decir, a la expresion de funcion podriamos llamarla recien despues de declararla.

<a id="var26"></a>

### **Prototypes y Herencia Prototype (Prototype Inheritance)** 💛

[Volver al indice](#alg-base-obj)

Las funciones y clases tienen una propiedad llamada `Prototype` donde reside la información que es usada para crear los objetos. Todos los miembros del objeto Prototype del constructor seran miembros del objeto una vez instanciado con new.

Los prototypes son un mecanismo por el cual los objetos en JS heredan caracteristicas entre si.

```jsx
class C {
  m1() {}
  m2() {}
}

const obj = new C();
console.assert( typeof obj.m1 === 'function' );
console.assert( typeof obj.m2 === 'function' );
```

![js2](src/js2.png)

Otro ejemplo es si creamos un objeto persona:

```jsx
// definimos el objeto persona
function Persona(nombre, apellido, edad, genero, intereses) {

  // definiendo de propiedades y métodos
  this.first = first;
  this.last = last;
//...
}

// lo instanciamos
var person1 = new Persona('Bob', 'Smith', 32, 'hombre', ['music', 'skiing']);
```

Y si queremos ver lo que contiene el objeto, no solo contiene sus atributos si no, otros miembros como valueOf o Watch que estan definidos en el objeto.

![js3](src/js3.png)

Todos los objetos de JS heredan metodos de un Prototype, `Object.prototype` es el eslabon mas alto de la cadena de herencia.

Con prototype podemos agregar nuevos atributos y metodos a un objeto que no se encuentran en su constructor

```jsx
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// Atributos
Person.prototype.nationality = "English";

// Metodos
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```

<a id="var28"></a>

### **Creacion de Constructores**

[Volver al indice](#alg-base-obj)

```jsx
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

Esto se puede reemplazar por..

```jsx
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

<a id="var14"></a>

### **Diferencia entre primitivo y objeto**

[Volver al indice](#alg-base-obj)

- Los primitivos se pasan por valor, los objetos se pasan por referencia
- Los primitivos se copian por valor y los objetos se copian por referencia
- Los primitivos se comparan por valor y los objetos por referencia
- Los primitivos son inmutables, el unico elemento inmutable del objeto es su referencia, el valor puede ser modificado.

Casos **primitivos**

```jsx
let animal = ‘perro’
let mascota = animal
animal = 'gato'
console.log(mascota) // perro, se copio por valor y no referencia
```

Caso **objetos** ( Como puedo clonar un objeto ?)

```jsx
let animal = {
  nombre: 'perro'
}

let mascota = animal
animal.especie = 'gato'
console.log(mascota.nombre) // gato, se copio referencia no valor

---

let object = {a: 1, b:2};
let referencia = object; // Esto es solo una referencia

let clone = {...object}; // Esto si es un clon
let clone2 = Object.assign({}, object);// Esto si es un clon

clone.foo = "foo";
clone2.foo = "denu";

console.log(object);// { a: 1, b: 2 }
console.log(referencia); // { a: 1, b: 2 }
console.log(clone); // { a: 1, b: 2, foo: 'foo' }
```

<a id="var24"></a>

### **Variable Hoisting** 💛

[Volver al indice](#alg-base-obj)

Es un mecanismo de JS en el que las variables y declaraciones de funciones se mueven a la parte superior de su ambito antes de la ejecucion del codigo.

```jsx
console.log (saludar);
    var saludar = "dice hola"

// es decir

var saludar;
    console.log(saludar); // saludar is undefined
    saludar = "dice hola"
```

Es el usar las variables antes de que sean declaradas.

<a id="var25"></a>

### **Diferencia entre class y function**

[Volver al indice](#alg-base-obj)

class tiene un alcance comprendido por llaves, al igual que las variables let. function es local a la funcion donde fue definida, no podemos usar una clase o funcion constructora por fuera del alcance en donde se encuentra.

```jsx
// Class
{
  class C {
  }
}

// Function
function x () {
  function C () {
  }
}

// uso de ambas
try {
  const obj = new C();
  console.assert( false );
} catch (err) {
  console.assert(
    err.message === 'C is not defined'
  );
}
```

Ambas pueden ser definidas de forma anonima. Sus referencias funcionan igual que con object, no se envia una copia, si no una referencia de la misma.

```jsx
const C = class {};
const C = function () {};

console.assert( typeof  C === 'function' );
```

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

<a id="var7"></a>

### **Para que sirve event.preventDefault()?** 💛

[Volver al indice](#alg-base-async)

Los botones de los form en HTML por defecto hacen un submit, lo que puede llevar a que se recargue la pagina. Para evitar esto, se usa `event.preventDefault()` para evitar que se ejecute el comportamiento por defecto del evento.

Por ejemplo, si quiero que al hacer click en un boton no se recargue la pagina, puedo hacer lo siguiente:

```jsx
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();
});
```

U otro ejemplo es para evitar que el resto de eventos que se ejecutarian por defecto, no lo hagan

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

<a id="var21"></a>

### **Promises** 💛

[Volver al indice](#alg-base-async)

Las promises son una buena forma de manejar operaciones asincronicas. Puede tener 3 estados, `Pending`, `Fulfilled` y `Rejected`. Son utiles cuando hay que manejar mas de una operacion asincronica una despues de la otra, para eso se puede usar **Promise Chaining** usando then() y catch() para el manejo de cada una.

Se pueden implementar por ejemplo, en un Lazy loading.

```jsx
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'));
});
```

<a id="var21-1"></a>

### **Async Await** 💛

[Volver al indice](#alg-base-async)

Es una forma de escribir promises de manera mas limpia. Se usa para escribir codigo asincronico de manera sincronica. Se usa con la palabra `async` antes de la funcion y `await` antes de la promesa.

```jsx
async function myAsyncFunction() {
  try {
    const value = await promise;
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}
```

Tambien se puede usar con `fetch` para hacer peticiones a una API

```jsx
async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.error(error);
  }
}
```

<a id="var21-2"></a>

### **Callbacks** 💛

[Volver al indice](#alg-base-async)

Es una funcion que se pasa como argumento a otra funcion y se invoca dentro de la funcion externa para completar alguna accion. Se usa para manejar operaciones asincronicas.

```jsx
function doSomethingAsync(callback) {
  setTimeout(function() {
    callback('First data');
  }, 1000);
}

function doOtherThingAsync(callback) {
  setTimeout(function() {
    callback('Second data');
  }, 1000);
}

function doAll() {
  try {
    doSomethingAsync(function(data) {
      var processedData = data.split('');
      try {
        doOtherThingAsync(function(data2) {
          var processedData2 = data2.split('');
          try {
            setTimeout(function() {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            // handle error
          }
        });
      } catch (err) {
        // handle error
      }
    });
  } catch (err) {
    // handle error
  }
}

doAll();
```

<a id="var12"></a>

### **Callback Hell** 💛

[Volver al indice](#alg-base-async)

Es un termino que se usa para describir un codigo que se vuelve dificil de leer y mantener por el anidamiento excesivo de callbacks. Se puede evitar con Promises, Async Await o Modularizando el codigo.

```jsx
doSomething(function(result) {
  doSomething(result, function(newResult) {
    doSomething(newResult, function(finalResult) {
      console.log(finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

<a id="var22"></a>

### **Comparacion entre Promises, Callbacks y Async-await** 💛

[Volver al indice](#alg-base-async)

- **Callbacks:** Es una funcion que se pasa como argumento a otra funcion y se invoca dentro de la funcion externa para completar alguna accion. Se usa para manejar operaciones asincronicas.
- **Promises:** Son una buena forma de manejar operaciones asincronicas. Puede tener 3 estados, `Pending`, `Fulfilled` y `Rejected`. Son utiles cuando hay que manejar mas de una operacion asincronica una despues de la otra, para eso se puede usar **Promise Chaining** usando then() y catch() para el manejo de cada una.
- **Async Await:** Es una forma de escribir promises de manera mas limpia. Se usa para escribir codigo asincronico de manera sincronica. Se usa con la palabra `async` antes de la funcion y `await` antes de la promesa.

Sus ventajas son:

- **Callbacks:** Son simples y faciles de entender.
- **Promises:** Son mas faciles de leer y entender que los callbacks.
- **Async Await:** Es la forma mas limpia de escribir codigo asincronico.

Y sus desventajas son:

- **Callbacks:** Puede llevar a un Callback Hell.
- **Promises:** Puede ser complicado de entender.
- **Async Await:** No maneja errores de manera eficiente.

El mas usado es **Promises** por su facilidad de lectura y manejo de errores.

<a id="var10"></a>

### **Como funciona setTimeout?**

[Volver al indice](#alg-base-async)

Permite ejecutar un fragmento de código una vez pasa un tiempo determinado.

Por ejemplo, el codigo imprimirá “Hola Mundo” despues de 2 segundos

```jsx
setTimeout(function(){
  console.log('hola mundo');
}, 2000);
```

El primer parámetro es la función a ejecutar, puede ser hecha ahi mismo como en el ejemplo anterior, o ya estar hecha como en este ejemplo:

```jsx
function saludos(nombre, rol) {
  console.log(`hola mi nombre es ${nombre} y mi rol es ${rol}`);
}

setTimeout(saludos, 3000, "denu", "administrador");
```

¿Porque no pasar los parametros directamente a la funcion y recien despues del tiempo? Porque JS ejecutará la funcion sin esperar al timeout, ya que estarias pasando una llamada a la funcion, no la referencia a la funcion.

```jsx
setTimeout(saludos('denu', 'admin'), 3000); // NO
```

Si quiero cancelar un setTimeout debo utilizar `clearTimeout()`

```jsx
const timeoutid = setTimeout (function() {
  console.log('hola');
}, 2000);

clearTimeout(timeoutid)
```

<a id="var10-1"></a>

### **¿Qué es un Promise.all y cuándo usarlo?** 💛

[Volver al indice](#alg-base-async)

Promise.all es una funcion que recibe un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas del array se han resuelto o cuando el array de promesas esta vacio.

```jsx
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
```

Se utiliza cuando se necesita esperar a que todas las promesas se resuelvan para continuar con el codigo.

<a id="var10-2"></a>

### **¿Cómo se maneja un error en una promesa?** 💛

[Volver al indice](#alg-base-async)

Para manejar un error en una promesa se usa el metodo `catch()`

```jsx
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

myPromise.then((resolvedValue) => {
  console.log(resolvedValue);
}).catch((error) => {
  console.log(error);
});
```

<a id="var10-3"></a>

### **¿Cómo funcionan Promise.allSettled, Promise.race y Promise.any?** 💛

[Volver al indice](#alg-base-async)

- **Promise.allSettled:** Devuelve una promesa que se resuelve después de que todas las promesas del iterable se hayan resuelto o rechazado, con un array de objetos que describen el resultado de cada promesa.

```jsx
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status))); // "fulfilled", "rejected"
```

- **Promise.race**: Devuelve una promesa que se resuelve o rechaza tan pronto como una de las promesas del iterable se resuelve o se rechaza, con el valor o la razón de esa promesa.

```jsx
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```

-**Promise.any**: Devuelve una promesa que se resuelve tan pronto como una de las promesas del iterable se resuelve, con el valor de esa promesa.

```jsx
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.any([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```

La diferencia entre `any` y `race` es que `any` se resuelve con el primer valor resuelto, mientras que `race` se resuelve con el primer valor resuelto o rechazado, `any` ignora cualquier valor rechazado, a menos que todas las promises hayan tenido el mismo resultado de rechazo.

<a id="var10-4"></a>

### **¿Cómo manejarías errores en funciones con async/await de forma eficiente?**

[Volver al indice](#alg-base-async)

Para manejar errores en funciones con async/await de forma eficiente, se puede usar un bloque `try/catch` para manejar errores de manera sincrona.

```jsx
async function myAsyncFunction() {
  try {
    const value = await promise;
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}
```

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

<a id="alg35"></a>

### **Generics en Java**

[Volver al indice](#alg-base-3)

Cada tipo primitivo (int, boolean, float..) tiene su clase hermana. Las clases siempre empiezan en mayus, los minuscula son llamados clases envoltorio.

```html

Integer --> int
Boolean --> boolean
Float --> float
Character --> char

edades.add(45) == edades.add(new Integer(45));
```

Los ArrayList reconocen el tipo de dato que evaluan <String> / <Integer> por los **Generics** que ya vienen con java.

<a id="alg36"></a>

### **Estructuras de Datos**

[Volver al indice](#alg-base-3)

Manera de estructurar datos, Array, ArrayList, Pila, Cola..

Por ejemplo, un sorteador posee las sig operaciones:

* Sortear elemento
* Agregar un elemento --> En un ArrayList. Con **programacion generica**
no se que tipo voy a recibir, lo voy a saber cuando me lo mandan. (public class Sorteador<T>, private ArrayList<T> elementos , public void agregarElemento(T elemento){}), se trabaja todo con T (puede tener cualquier otro nombre).
* Esta vacio?

Definimos el tipo del sorteador cuando lo instanciamos para usarlo. Sorteador solo sabe como realiza sus metodos.

#### Agregar muchos elementos a la vez

```java
public void agregar (T[] elementos){
  this.elementos.addAll(Arrays.asList(elementos));
       }
```

También puedo usar un foreach.

#### Instancio mi Sorteador

```java
Sorteador<String> nombres = new Sorteador<>();
```

#### Hacer que mi sorteador sea iterable

```java
public class Sorteador<T> implements Iterable<T>
```

Implementando así el metodo propio de iterable que es iterator(), ya que es una interfaz

```java
@Override
public Iterator<T> iterator(){
return new IteratorSorteador();
}

private class IteratorSorteador implements Iterator<T>{
    @Override
    public boolean hasNext(){
        return !estaVacio();
    }

    @Override
    public T next(){
        return proximoSorteado();
    }
}
```

<a id="alg52"></a>

### **Recursividad**

[Volver al indice](#alg-base-3)

Son problemas que se pueden dividir en subproblemas. Por ejemplo: Calcula el elemento, obten los primero n elementos o un metodo que compute todos..

TODOS los algoritmos recursivos tienen una alternativa iterativa. Su complejidad espacial es `O(cantidad de llamadas)`.

<a id="alg53"></a>

### **Factorial**

[Volver al indice](#alg-base-3)

El factorial de un número entero positivo n, denotado como n!, es el producto de todos los enteros positivos menores o iguales a n. Por ejemplo, el factorial de 5 se denota como 5! y se calcula como 5! = 5 * 4 * 3 * 2 * 1 = 120.

```javascript
// Función recursiva para calcular el factorial de un número
function factorial(n) {
    // Caso base: factorial de 0 es 1
    if (n === 0) {
        return 1;
    }
    // Caso recursivo: n * factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso
console.log(factorial(5)); // Output: 120
```

<a id="alg53-2"></a>

### **¿Qué son los generics y cómo se implementan en TypeScript?** 💛

[Volver al indice](#alg-base-3)

Los generics son una característica de TypeScript que permite crear componentes, funciones y clases que pueden trabajar con una variedad de tipos de datos. Los generics permiten escribir código que es reutilizable y flexible, ya que no está limitado a un solo tipo de datos.

Para definir un tipo genérico en TypeScript, se utiliza la sintaxis de ángulos (<>) para especificar un tipo de parámetro genérico. Por ejemplo, la siguiente función toma un argumento de tipo genérico T y devuelve un array de ese tipo:

```typescript
function makeArray<T>(value: T): T[] {
    return [value];
}

const array1 = makeArray<number>(1); // array1 es de tipo number[]
const array2 = makeArray<string>('hello'); // array2 es de tipo string[]
```

Es ideal para reemplazar el uso de any. Por ejemplo, si se usa any, se pierde la información del tipo de datos que se está utilizando, lo que puede llevar a errores en tiempo de ejecución. Con generics, se puede especificar el tipo de datos que se espera y TypeScript se encargará de verificar que se cumpla en tiempo de compilación.

---

<a id="var27"></a>

### **Funciones en Javascript**

[Volver al indice](#alg-base-2)

En javascript aveces no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una funcion como argumento a otra funcion. Para eso las **funciones inline**, no les ponemos nombre a las funciones porque no vamos a necesitarlas en ningún otro lado.

```jsx
const myFunc = function() {
  const myVar = "value";
  return myVar; 
  }
```

Otra cosa que ofrece ES6 es reemplazar el cuerpo de la funcion por una flecha, en el caso de que el cuerpo no sea necesario y la funcion solo conste de un return, es decir

```jsx
const myFunc = () => "value" //Igual a return “value”;
```

También podemos realizar operaciones en una sola linea

```jsx
// doubles input value and returns it
const doubler = (item) => item * 2;
```

También podemos setear **parametros por defecto**
 en nuestras funciones, sí llamamos a la funcion sin pasarle parametro, tomara el ya seteado por defecto.

```jsx
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous Por defecto
```

<a id="alg55"></a>

### **Metodos de Strings en Javascript**

[Volver al indice](#alg-base-2)

```javascript
// Creacion de Strings
const notAnObject = "Hola";
const yesAnObject = new String("Hola"); // Acceso a todos los metodos del OBJETO String

// Descubrir el tamaño de mi String -- LOS ESPACIOS CUENTAN COMO UN ESPACIO
const test = "hola";
test.length // 4

// Acceder a un caracter en especifico
const test = "hola";
test[0] // h
test[test.length - 1] // a
test.charAt(0) // h

// Obtener el index de una letra - Case sensitive
const test = "hola denu hola";
test.indexOf("hola"); // 0 -- primera ocurrencia de la palabra
test.indexOf("holax"); // -1
test.lastIndexOf("hola"); // 10 -- ultima ocurrencia de la palabra
test.lastIndexOf("holax"); // -1
test.indexOf("hola", 0); // Se puede aclarar desde donde comienza, por defecto comienza desde cero
test.indexOf("hola", +infinito) // Por defecto empieza desde mas infinito
```

<a id="alg56"></a>

### **Métodos de Objectos en Javascript**

[Volver al indice](#alg-base-2)

```javascript
// Object.create() -- Crea un nuevo objeto con el prototipo de pasamos por parametro
const objeto = {nombre: "denu"};
const persona = Object.create(objeto);
console.log(persona.nombre); // denu

const persona = {
    init: function (nombre) {
        this.nombre = nombre;
        return this;
    },
    saludar: function() {
        console.log("hola, soy " + this.nombre);
        return this;
    }
}

const objeto = Object.create(persona).init("denu"); // init funcionaria como constructor
console.log(objeto.saludar()) // "hola, soy denu"

// Object.assign() -- Clona o mergea objetos

const persona = {
    nombre: "denu",
    apellido: "perez"
}

const persona2 {
    ojos: "verdes"
}

const clon = Object.assign({}, persona); // No es una referencia, es una copia
const fusion = Object.assign({}, persona, persona2); // El primer parametro es el objeto destino, inicializado en vacio

// Map - Object
const mapToObject = map => Object.fromEntries(map.entries());
mapToObject(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}

// Object - Map
const objectToMap = obj => new Map(Object.entries(obj));
objectToMap({a: 1, b: 2}); // Map {'a' => 1, 'b' => 2}

```

<a id="var30"></a>

### **Diferencia entre Map y Weakmap**

[Volver al indice](#alg-base-2)

Son casi iguales, son la clasica estructura de datos de diccionario, su diferencia es que se puede acceder a los clave-valores de un Map usando .values o .keys, en un Weakmap no se puede hacer eso.

```jsx
const map = new Map()
const weakMap = new weakMap()

const obj = {
  hola: 'mundo',
}

map.set('denu', 'lemon')
weakMap.set(myObjKey, 'lemon weakmap')

// Map
map.get('denu') // lemon
map.keys() // {'denu'}
map.values() // {'lemon'}

// Weakmap
weakMap.get(obj) // lemon weakmap
weakMap.keys() // ERROR
weakMap.values() // ERROR
```

Weakmap es una caja negra en donde solo se puede acceder a los valores si se tiene la Key.

Weakmap, ademas, solo admite objetos como clave, estos estan debilmente referenciados por lo que puede ser recolectados por el garbage collector de JS si asi lo considera, destruyendo esa entrada en el Weakmap y liberando memoria.

<a id="var29"></a>

### **Diferencia entre `for in` y `for of`**

[Volver al indice](#alg-base-2)

- For in toma los indices de los elementos que estan siendo recorridos

```javascript
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```

- For of toma los valores en si

```javascript
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

<a id="var32"></a>

### **Diferencia entre foreach, map y reduce**

[Volver al indice](#alg-base-2)

- **Foreach** itera por cada uno. Ejecuta la función que se le pasa por parámetro para cada elemento del array. Este método no devuelve nada, por lo tanto, si intentamos guardar su ejecución en una variable lo que ocurrirá es que esa variable tomará el valor de undefined.

```jsx
[1, 2, 3, 4].forEach(function (item) {
   console.log(item);
});
// Imprimirá por consola
1
2
3
4

let numbers = [1, 2, 3, 4].forEach(function (item) {
     console.log(item);
});
console.log(numbers); // undefined
```

- **Map**: Devuelve una nueva matriz aplicando la funcion de devolucion de llamada en cada elemento de la matriz.

```jsx
var result = [1,2,3,4].map((item) => { return item * 2; });
console.log(result);
// Resultado
[2,4,6,8]
```

- **Reduce** tiene un acumulador y todo. Nos permite, dada una función, “reducirlo” o “transformar” los elementos de un arreglo en un nuevo y único valor.

```jsx
var myArray = [10, 20, 30];
var total = myArray.reduce((accumulator, number) => {
 return accumulator + number;
});
total;
// Prints 60
```

<a id="var16"></a>

### **Rest Operator**

[Volver al indice](#alg-base-2)

Con esto, se pueden crear funciones que pueden tomar una variable cantidad de argumentos, y estos pueden ser accedidos luego por estar guardados en un Array de dentro de la misma funcion

```jsx
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 argume
```

Es decir, esta funcion..

```jsx
const product = (function() {
  "use strict";
  return function product(n1, n2, n3) {
    const args = [n1, n2, n3];
    return args.reduce((a, b) => a * b, 1);
  };
})();
console.log(product(2, 4, 6));//48
```

Es lo mismo que esta

```jsx
const product = (function() {
  "use strict";
  return function product(...n) {
    return n.reduce((a, b) => a * b, 1);
  };
})();
console.log(product(2, 4, 6));//48
```

Otra funcion puede ser sacar el valor maximo de un Array de la siguiente manera

```jsx
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

Esto también se puede usar con **objetos,**
escribir este codigo

```jsx
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```

Es lo mismo que hacer esto

```jsx
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

También podemos transformar los objetos nested en variables

```jsx
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```

<a id="var17"></a>

### **Creando Strings con Template Literal - Template Strings**

[Volver al indice](#alg-base-2)

Es un tipo especial de String que hace que el manejo de String complejos sea más facil, pudiendo crear Strings multilinea para invocarlos luego, por ejemplo:

```jsx
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```

Se usa otro tipo de “comilla” cuando se quiere invocar al String (`) y no es necesario poner /n para que se haga un salto de línea en el texto de salida

<a id="var18"></a>

### **Export Fallback con export default**

[Volver al indice](#alg-base-2)

Lo mismo que el anterior, sí queremos exportar una funcion, cuando la declaramos, la exportamos. Se usa cuando quiero exportar solo un valor o funcion, solo puedo elegir un valor que tenga esta propiedad de exportacion, tampoco se puede usar con const, var o let.

```jsx
export default function add(x,y) {
  return x + y;
}
```

Despues lo importo agregandole un nombre de variable cualquiera e invocandolo normalmente.

```jsx
import add from "math_functions";
add(5,4); //Devuelve el resultado de acuerdo al metodo exportado anteriormente
```

<a id="var9"></a>

### **Diferencia entre import y require**

[Volver al indice](#alg-base-2)

- Require: Se usa para importar las funciones y el codigo en un archivo externo. Esto posee un problema, el cual es que este codigo puede ser muy largo y solo necesito una parte del codigo.
- Import: Herramienta de ES6 para importar solo los componentes que necesitamos de un archivo.

```jsx
import { countItems } from "math_array_functions"
```

<a id="var8"></a>

### **Función Object.freeze**

[Volver al indice](#alg-base-2)

Es una funcion que evita que puedas modificar propiedades de un objeto o una variable

```jsx
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}
```

Cuando intento modificar algo, no tira error, simplemente lo ignora.

<a id="var8-2"></a>

### **¿Qué es la destructuración y cómo se utiliza?** 💛

[Volver al indice](#alg-base-2)

La destructuración es una expresión de JavaScript que permite desempaquetar valores de arreglos o propiedades de objetos en distintas variables.

```jsx
const person = {
  name: "denu",
  age: 25
};

const {name, age} = person;
console.log(name, age); // denu 25
```

Esto no ahorra tener que crear dos variables distintas en dos lineas distintas y asignarlas de manera independiente.

<a id="var8-3"></a>

### **¿Cómo se diferencia un Spread Operator de un Rest Operator?** 💛

[Volver al indice](#alg-base-2)

El Spread Operator (...) y el Rest Operator (...) tienen la misma sintaxis, pero se usan en contextos diferentes y tienen propósitos distintos. Aquí te explico sus diferencias y cómo se usan:

**Spread Operator**

- Propósito: Se utiliza para "expandir" o desempaquetar elementos de un objeto o arreglo en otro objeto o arreglo.
- Contexto de uso: Generalmente se usa en situaciones donde necesitas copiar o combinar elementos de un arreglo o propiedades de un objeto.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

Aquí, el Spread Operator se usa para desempaquetar todos los elementos de arr1 y luego agregar los nuevos elementos 4 y 5 en el arreglo arr2.

```jsx
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

El Spread Operator se usa para copiar todas las propiedades de obj1 y agregar una nueva propiedad c en obj2.

**Rest Operator**

- Propósito: Se usa para agrupar o recoger varios elementos (en un arreglo o un objeto) en una sola variable, generalmente en una función o al desestructurar un arreglo u objeto.
- Contexto de uso: Se usa cuando quieres capturar múltiples elementos o propiedades y almacenarlos en un solo arreglo u objeto.

Ejemplo, recibir indefinida cantidad de parametros en una funcion

```jsx
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

Y para destructurar un array

```jsx
const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]
```

**Resumen de Diferencias:**

| **Aspecto**            | **Spread Operator (`...`)**                                      | **Rest Operator (`...`)**                                             |
|------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------|
| **Propósito**           | Expande un arreglo o un objeto en elementos individuales.        | Recoge elementos en un arreglo o un objeto.                           |
| **Contexto de uso**     | Al crear nuevos arreglos u objetos, o al pasar elementos.       | Al desestructurar datos o en funciones para agrupar argumentos.       |
| **Uso en arreglos**     | Copiar, combinar o expandir elementos de un arreglo.             | Recoger el resto de los elementos que no se han asignado.            |
| **Uso en objetos**      | Copiar, combinar o expandir propiedades de un objeto.            | Recoger el resto de las propiedades no desestructuradas.             |
| **Ejemplo en arreglos** | `const arr2 = [...arr1, 4, 5];`                                  | `const [first, ...rest] = arr;`                                       |
| **Ejemplo en objetos**  | `const obj2 = {...obj1, c: 3};`                                  | `const { name, ...rest } = obj;`                                      |

Ambos usan la misma sintaxis (`...`), pero el **contexto** es lo que determina si se trata de un **Spread** o un **Rest**.

---

<a id="var31"></a>

### **Qué es una variable global, como se declara y cuales problemas puede tener?**

[Volver al indice](#alg-base)

Se pueden usar en todo el codigo, no tienen alcance. Se declara sin usar `var` en la declaracion

```jsx
miVariableGlobal = 'Hola mundo'
```

Puede dar al choque entre variables locales y globales por nombre. Ademas es dificil limpiar el codigo basado en variables globales

<a id="var33"></a>

### **Porque no se recomienda usar innerHTML?**

[Volver al indice](#alg-base)

No se recomienda su uso porque es muy lento dado que refresca el contenido cada vez. Es más fácil insertar un código errado en el documento y hacer que la página web sea inestable.

<a id="var34"></a>

### **Entre JS y un script ASP, ¿Cual es mas rápido?**

[Volver al indice](#alg-base)

JavaScript es más rápido porque es un lenguaje del lado del cliente y no necesita la ayuda del servidor web para ejecutarse. Por otra parte el ASP es un lenguaje del lado del servidor. Motivo por el que siempre es más lento que JavaScript. Sin embargo, Javascript ahora, también puede ser usado como un lenguaje de lado del servidor (server side) (nodejs).

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

<a id="typ"></a>

# Typescript

<a id="typ1"></a>

### **Qué es TypeScript?**

[Volver al indice](#typ-base)

Es un superset de JavaScript, es el mismo JavaScript pero le extiende características, o posee cosas propias.

Es mantenido por Microsoft

* Ofrece tipado estricto y flexible
* Mejora la legibilidad del código
* Nos permite usar características modernas de Javascript sin miedo a la compatibilidad
* Mejora el intellisense
* Nos permite la **inyección de dependencias**

<a id="typ2"></a>

### **TSConfig.json**

[Volver al indice](#typ-base)

Es el archivo de configuración de TypeScript, en el se definen las reglas de compilación de TypeScript.

Mediante estas configuraciones se **deberia** buscar que Typescript sea lo mas estricto posible.

```json
{
 "compilerOptions": {
  "target": "es5", // A que versión de JS se compilará
  "module": "commonjs", // Sistema de modulos
  "strict": true, // Habilita todas las opciones estrictas
  "noImplicitAny": true, // No permite any
  "esModuleInterop": true, // Permite importar modulos de ES6
  "skipLibCheck": true, // No revisa las librerias
  "forceConsistentCasingInFileNames": true, // Obliga a que los nombres de archivos sean consistentes
 }
}
```

<a id="typ3"></a>

### **Watch Mode**

[Volver al indice](#typ-base)

Typescript al ejecutarse es traducido a Javascript. Para que Typescript esté pendiente de los cambios en los archivos y los compile automáticamente, se puede usar el siguiente comando

```bash
tsc --watch
```

<a id="typ4"></a>

### **Cuáles son sus características superadoras?**

[Volver al indice](#typ-base)

Su tipado estricto ayuda a saber como funcionan las cosas, por ejemplo, en este código Javascript

```jsx
function calcularISV (productos) {
 let total = 0;

 productos.forEach( ({precio}) => {
  total += precio;
 }

 return [total, total * 0.15]
}
```

* No sabemos de que tipo de dato son los productos
* Como luce un producto
* Que propiedades debe tener el producto para que el código funcione

Entonces, en Typescript quedaría algo así la firma de nuestro método

```tsx
function calcularISV(productos: Producto[]): [number, number] {}
```

* Productos es un arreglo del tipo Producto
* ¿Cómo luce Producto? Se puede definir con una interfaz

```tsx
interface Producto {
 desc: string;
 precio: number;
}
```

* Retorna un arreglo de dos números

<a id="typ5"></a>

### **Cómo declaro una variable?**

[Volver al indice](#typ-base)

Por defecto, implicitamente Typescript asigna un tipo a las variables, pero se puede asignar un tipo explicito. `any` deberia evitarse a toda costa, a menos que sea un elemento reutilizable.

```tsx
let nombre: string = 'Denu'; // Tipo explicito
let nombre= 'Denu' // Tipo implicito

// Variable de dos posibles tipos
let variable: number | string = 95;
variable = 'Denu'

let arrayVariable: (boolean | string | number)[] = ['Denu', 22, false]
```

<a id="typ6"></a>

### **Tuples - Tuplas**

El primer dato del Array SIEMPRE sera un string y el segundo un number.

```tsx
let persona: [string, number] = ['Denu', 24];

persona[0] = 10; // Error
persona[1] = 'Denu'; // Error

persona[0] = 'Denu';
persona[1] = 24;
```

<a id="typ7"></a>

### **Tipo de dato Never** 💛

[Volver al indice](#typ-base)

Es un tipo de dato que representa un valor que nunca ocurre. Se utiliza principalmente para funciones que lanzan excepciones o que nunca terminan de ejecutarse.

No es undefined ni es void. Es never.

```tsx
function error(mensaje: string): never {
 throw new Error(mensaje);
}

function loopInfinito(): never {
 while (true) {
  console.log('Hola');
 }
}
```

Suele aparecer bastante cuando declaro un Array pero nunca declaro su tipo, y luego intento insertar elementos dentro de la misma

```tsx
let arreglo = [];
arreglo.push(1); // Error - Array no acepta number dentro de su tipo never[]
```

<a id="typ8"></a>

### **Tipo de dato Any**

[Volver al indice](#typ-base)

Es un tipo de dato que puede ser cualquier cosa, es decir, que no tiene un tipo de dato específico. Se debe evitar su uso en la medida de lo posible, ya que puede llevar a errores en tiempo de ejecución y dificultar el mantenimiento del código.

```tsx
let variable: any = 'Denu';
variable = 22;
variable = true;
```

En Javascript se traspilaria a

```jsx
let variable = 'Denu';
variable = 22;
variable = true;
```

<a id="typ9"></a>

### **Cómo declaro un objeto?**

[Volver al indice](#typ-base)

```tsx
interface Personaje {
 nombre: string;
 edad: number;
 habilidades: string[];
 nacionalidad?: string; // opcional
}

const personaje: Personaje = {
 nombre: 'Denu',
 edad: 24,
 habilidades: ['volar', 'comer']
}

personaje.nacionalidad = 'Costa Rica';
```

<a id="typ10"></a>

### **Cómo declaro una función?**

```tsx
function sumar (a: number, b:number) : number {
 return a + b;
}

const sumar = (a?: number, b: number = 2) : number => {
 return a + b;
}
```

<a id="typ11"></a>

### **Parametros REST**

[Volver al indice](#typ-base)

Una funcion puede recibir tantos argumentos como uno quiera, y los parametros REST son una manera de hacer esto.

Por ejemplo en la proxima funcion puedo enviar tantos numeros como yo quiera sumar. Guarda los elementos en el array `numeros`

```tsx
function sumar(a: number, b: number, ...numeros: number[]): number {
 return numeros.reduce((acc, curr) => acc + curr, 0);
}

sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```

<a id="typ12"></a>

### **Cómo creo una clase?**

[Volver al indice](#typ-base)

```tsx
class Person {
 private age: number;
 apellido: string; // por defecto es public

  constructor(age: number, apellido: string) {
   this.age = age;
   this.apellido = apellido;
  }
}

const denu = new Person(24, 'Lemon');

// ---- Forma resumida ----

class Person {
 constructor(private age: number, public apellido: string) {}
}
```

<a id="typ13"></a>

### **Cómo se transpilan las interfaces de TypeScript?**

[Volver al indice](#typ-base)

Las interfaces de TypeScript no se transpilan directamente a código JavaScript, ya que son una característica estática de TypeScript que se utiliza principalmente para proporcionar comprobaciones estáticas de tipo durante el desarrollo. Durante el proceso de transpilación de TypeScript a JavaScript, las interfaces se eliminan del código resultante, ya que no tienen un equivalente en JavaScript.

En lugar de transpilarse, las interfaces de TypeScript son utilizadas por el compilador para realizar comprobaciones de tipos estáticos durante la fase de desarrollo. Esto significa que las interfaces ayudan a detectar errores de tipo en tiempo de compilación y a proporcionar un mejor soporte para el desarrollo de software a gran escala en TypeScript. Una vez que el código TypeScript se ha transpilado a JavaScript, las interfaces no tienen ningún impacto en el código resultante, ya que se eliminan durante el proceso de transpilación.

<a id="typ14"></a>

### **Cómo hago que las props de una interface sean opcionales?**

[Volver al indice](#typ-base)

Para hacer todas las propiedades de una interfaz opcionales en TypeScript, puedes utilizar la característica de TypeScript llamada "intersección" junto con el tipo parcial ("Partial").

```typescript
interface MyInterface {
  prop1: string;
  prop2: number;
}

// Todas las propiedades de MyInterface ahora son opcionales
type PartialMyInterface = Partial<MyInterface>;

// Ejemplo de uso
const obj: PartialMyInterface = {}; // Todas las propiedades son opcionales
```

En este ejemplo, `Partial<MyInterface>` crea un nuevo tipo que tiene todas las propiedades de `MyInterface`, pero las declara como opcionales. Esto permite que cada propiedad pueda ser `undefined` o simplemente omitida al crear un objeto que cumpla con este tipo.

Otra opcion seria agregando un `?` al lado de la propiedad, de esta forma no sera obligatoria su existencia, aunque puede que se necesiten checks extras en el lado del codigo para verificar su no-nulidad

```typescript
interface MyInterface {
  prop1?: string;
  prop2?: number;
}
```

<a id="typ15"></a>

### **Herencia en Typescript**

[Volver al indice](#typ-base)

La herencia en TypeScript se logra mediante la palabra clave `extends`. Una clase puede heredar propiedades y métodos de otra clase utilizando la herencia. Aquí tienes un ejemplo de cómo se ve la herencia en TypeScript:

```typescript
class Beer extends Drink {
 private alcohol: number;

 constructor(name: string, price: number, alcohol: number) {
  super(name, price);
  this.alcohol = alcohol;
 }
}

const beer = new Beer('Imperial', 1000, 5);
```

<a id="typ16"></a>

### **Interfaces en Typescript**

[Volver al indice](#typ-base)

Nos permite categorizar objetos, es decir, que un objeto tenga un comportamiento ya esperado. Es un contrato.

```typescript
interface Product {
 name: string;
 price: number;
}

const beer: Product = {
 name: 'Imperial',
 price: 1000
}

class Beer extends Drink implements Product {
 private alcohol: number;

 constructor(name: string, price: number, alcohol: number) {
  super(name, price);
  this.alcohol = alcohol;
 }
}
```

<a id="typ17"></a>

### **Cual es la diferencia entre el uso de types e interfaces?**  💛

[Volver al indice](#typ-base)

Ambos se utilizan para definir tipos en TypeScript, pero tienen algunas diferencias clave en su comportamiento y uso:

### Interfaces:

- **Extensibilidad:** Las interfaces pueden extender otras interfaces, lo que permite la creación de jerarquías de interfaces y la reutilización de definiciones de tipo.

```typescript
interface Animal {
 name: string;
}

interface Dog extends Animal {
 breed: string;
}
```

- **Declaración de Objetos:** Las interfaces son ideales para definir la forma de un objeto y sus propiedades, métodos y tipos de datos esperados.

```typescript
interface Person {
 name: string;
 age: number;
}

const person: Person = { name: 'Alice', age: 30 };
```

- **Compatibilidad:** Las interfaces son más adecuadas para definir contratos y acuerdos entre diferentes partes del código, ya que representan un contrato que una clase o un objeto debe cumplir.
- **Merging:** Las interfaces se pueden fusionar si tienen el mismo nombre, lo que permite agregar propiedades y métodos a una interfaz existente en diferentes archivos.

```typescript
interface Person {
 name: string;
}

interface Person {
 age: number;
}

const person: Person = { name: 'Alice', age: 30 };
```

### Types:

- **Unión y Intersección:** Los tipos permiten la creación de tipos de datos más complejos mediante la unión y la intersección de tipos.

```typescript
type Status = 'active' | 'inactive';
type User = { name: string; age: number };

type Admin = User & { role: 'admin' };
```

- **Tipos Primitivos:** Los tipos pueden definir tipos primitivos, literales y tipos de datos más simples que las interfaces.

```typescript
type ID = number;
type Status = 'active' | 'inactive';
```

- **Alias:** Los tipos permiten la creación de alias de tipos, lo que facilita la reutilización de definiciones de tipo y la creación de tipos personalizados.
- **Compatibilidad:** Los tipos son más adecuados para definir tipos de datos más simples y para realizar transformaciones y operaciones en tipos de datos existentes.

<a id="typ18"></a>

### **¿Qué son los tipos Union e Intersection y cuándo se utilizan?**

[Volver al indice](#typ-base)

**Union Types:**

Los tipos de unión (`Union Types`) en TypeScript permiten definir un tipo que puede ser uno de varios tipos diferentes. Se utilizan para representar valores que pueden ser de diferentes tipos en un contexto determinado. Por ejemplo, un tipo de unión se define utilizando el operador de unión `|` entre los tipos que se permiten.

```typescript
type Status = 'active' | 'inactive';
type ID = number | string;
```

**Intersection Types:**

Los tipos de intersección (`Intersection Types`) en TypeScript permiten combinar varios tipos en uno solo. Se utilizan para crear un nuevo tipo que tiene todas las propiedades y métodos de los tipos combinados. Por ejemplo, un tipo de intersección se define utilizando el operador de intersección `&` entre los tipos que se desean combinar.

```typescript
type User = { name: string; age: number };
type Admin = User & { role: 'admin' };
```

**Cuándo se utilizan:**

- **Union Types:** Se utilizan cuando un valor puede ser de varios tipos diferentes en un contexto determinado. Por ejemplo, cuando un valor puede ser una cadena o un número, se puede utilizar un tipo de unión para representar esta posibilidad.

- **Intersection Types:** Se utilizan cuando se desea combinar varios tipos en uno solo para crear un nuevo tipo que tenga todas las propiedades y métodos de los tipos combinados. Por ejemplo, cuando se desea crear un nuevo tipo que tenga todas las propiedades de dos tipos existentes, se puede utilizar un tipo de intersección para lograr esto.

<a id="typ19"></a>

### **¿Qué son los Utility Types como Partial, Pick, y Omit, y en qué casos son útiles?** 💛

[Volver al indice](#typ-base)

Los Utility Types en TypeScript son tipos predefinidos que permiten realizar transformaciones y operaciones comunes en tipos de datos existentes. Estos tipos proporcionan funcionalidades útiles para trabajar con tipos de datos de una manera más flexible y reutilizable. Algunos de los Utility Types más comunes en TypeScript son `Partial`, `Pick`, y `Omit`.

**Partial:**

El tipo `Partial` en TypeScript se utiliza para hacer todas las propiedades de un tipo dado opcionales. Esto significa que cada propiedad del tipo se convierte en opcional, lo que permite crear objetos que no requieren todas las propiedades del tipo original.

```typescript
interface Person {
 name: string;
 age: number;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {}; // Todas las propiedades son opcionales
```

**Pick:**

El tipo `Pick` en TypeScript se utiliza para seleccionar un subconjunto de propiedades de un tipo dado y crear un nuevo tipo que contenga solo esas propiedades seleccionadas. Esto permite crear tipos personalizados que contienen solo las propiedades necesarias de un tipo existente.

```typescript
interface Person {
 name: string;
 age: number;
 address: string;
}

type PersonName = Pick<Person, 'name'>;

const personName: PersonName = { name: 'Alice' }; // Solo contiene la propiedad 'name'
```

**Omit:**

El tipo `Omit` en TypeScript se utiliza para crear un nuevo tipo que excluye una o más propiedades de un tipo dado. Esto permite crear tipos personalizados que contienen todas las propiedades de un tipo existente, excepto las propiedades especificadas.

```typescript
interface Person {
 name: string;
 age: number;
 address: string;
}

type PersonWithoutAddress = Omit<Person, 'address'>;

const personWithoutAddress: PersonWithoutAddress = { name: 'Alice', age: 30 }; // No contiene la propiedad 'address'
```

<a id="typ20"></a>

### **¿Cómo funcionan los Mapped Types y cómo se aplican en proyectos complejos?**

[Volver al indice](#typ-base)

Mapped Types en TypeScript son una forma de transformar tipos existentes en nuevos tipos utilizando un mecanismo de mapeo. Este es un concepto muy poderoso que te permite crear tipos dinámicamente basados en otros. Los Mapped Types se definen utilizando la sintaxis de los tipos indexados y la palabra clave `in`.

Un ejemplo común de Mapped Types es la creación de un tipo que convierte todas las propiedades de un tipo dado en propiedades opcionales. Esto se puede lograr utilizando un Mapped Type con la palabra clave `Partial`.

```typescript
interface Person {
 name: string;
 age: number;
}

// Mapped Type que convierte todas las propiedades de Person en opcionales
type PartialPerson = {
 [K in keyof Person]?: Person[K];
};

const partialPerson: PartialPerson = {}; // Todas las propiedades son opcionales
```

En proyectos complejos, los Mapped Types pueden ser muy útiles para crear tipos dinámicamente basados en otros tipos existentes. Por ejemplo, puedes utilizar Mapped Types para crear tipos que transforman propiedades

<a id="typ21"></a>

### **¿Qué son los Conditional Types y cómo permiten lógica avanzada en los tipos?**

[Volver al indice](#typ-base)

Los Conditional Types en TypeScript son una característica avanzada que permite definir tipos condicionales basados en una condición booleana. Esto permite crear tipos que se comportan de manera diferente según una condición dada. Los Conditional Types se definen utilizando la palabra clave `extends` y la sintaxis de los tipos condicionales.

```typescript
type IsString<T> = T extends string ? 'yes' : 'no';

type Test1 = IsString<string>; // 'yes'
type Test2 = IsString<number>; // 'no'
```

<a id="typ22"></a>

### **¿Cómo funcionan los decoradores en TypeScript y en qué casos son útiles?**

[Volver al indice](#typ-base)

Para usar decoradores, debes habilitar la opción experimentalDecorators en el archivo tsconfig.json:

```json
{
 "compilerOptions": {
  "experimentalDecorators": true
 }
}
```

Tipos de decoradores en TypeScript:

- Decoradores de Clase

Se aplican a la definición de una clase. Reciben como argumento el constructor de la clase y pueden modificar la clase misma.

```typescript
function Logger(target: Function) {
  console.log(`Clase registrada: ${target.name}`);
}

@Logger
class User {
  constructor(public name: string) {}
}

// Output: "Clase registrada: User"
```

- Decoradores de Método

Se aplican a los métodos de una clase y reciben metadatos sobre el método. Son útiles para extender o modificar el comportamiento de los métodos.

```typescript
function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método ${methodName} ejecutado con argumentos: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);
// Output:
// "Método add ejecutado con argumentos: 2,3"
// 5
```

- Decoradores de Propiedad

Se aplican a las propiedades de una clase. Reciben el prototipo del objeto y el nombre de la propiedad. Los decoradores de propiedad no tienen acceso al valor de la propiedad directamente (ya que el valor no está inicializado en tiempo de compilación).

```typescript
function PropertyMetadata(target: any, propertyName: string) {
  console.log(`Propiedad decorada: ${propertyName}`);
}

class Product {
  @PropertyMetadata
  price: number;
}

// Output: "Propiedad decorada: price"
```

- Decoradores de Parámetro

Se aplican a los parámetros de un método y reciben información sobre el parámetro decorado. Son útiles para implementar patrones como inyección de dependencias.

```typescript
function LogParameter(target: any, methodName: string, parameterIndex: number) {
  console.log(`Parámetro decorado en el método ${methodName}, índice: ${parameterIndex}`);
}

class UserService {
  greet(@LogParameter name: string) {
    console.log(`Hola, ${name}!`);
  }
}

const userService = new UserService();
userService.greet("Ana");
// Output:
// "Parámetro decorado en el método greet, índice: 0"
// "Hola, Ana!"
```

- Decoradores de Getter/Setter

Se aplican a los accesores (get y set) y funcionan como los decoradores de método, pero se usan para modificar el comportamiento de getters y setters.

```typescript
function LogAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.get;
  descriptor.get = function () {
    console.log(`Accediendo a la propiedad ${propertyName}`);
    return originalMethod?.apply(this);
  };
}

class User {
  private _age: number = 30;

  @LogAccessor
  get age() {
    return this._age;
  }
}

const user = new User();
console.log(user.age);
// Output:
// "Accediendo a la propiedad age"
// 30
```

Los decoradores son muy usados en, por ejemplo, Angular, para configurar clases de cierta forma predeterminada

```typescript
@Injectable()
class UserService {
  // Servicio disponible para otros
}
```

---

<a id="sty"></a>

# Styles - Estilos

<a id="sty1"></a>

### **Cuál es la diferencia entre div y span?**

[Volver al indice](#sty-base)

La etiqueta span trabaja como contenedor de línea, no se puede ampliar para ocupar un párrafo, debe usarse para edicion de frases en parrafos, y div trabaja como contenedor de bloque, y puede expandirse.

![image](https://github.com/denulemos/denobible/assets/32619895/e5463d4a-0cee-45ff-862b-f872e139ba9c)

<a id="sty2"></a>

### **Qué es la Especificidad (Specificity) de CSS?** 💛

[Volver al indice](#sty-base)

Es como el navegador determina que propiedad de CSS se debe aplicar a un elemento si hay varios en juego o muchos selectores.

Va del mas alto al mas bajo en especificidad:

* Estilos inline (Se aplica siempre)
* IDs
* Clases, atributos y pseudo-clases
* Elementos y pseudo-elementos (Compite)

```css
section p {
    color: red;
}

// Se va a aplicar este, ya que es el mas reciente en aparecer, y tiene una especificidad mayor
.p1 {
    color: green;
}

-----
<section>
 <p class="p1">Hola</p>
</section>
```

<a id="sty3"></a>

### **Que es BEM?**

[Volver al indice](#sty-base)

Block element modifier, consiste en escribir nombres de clases que dejen en claro que es lo que se esta representando en el HTML y en el CSS

`bloque__elemento--modificador_elemento (header__title--warning)`

<a id="sty4"></a>

### **Como declaro variables en CSS?**

```jsx
:root {
    --color-3: #000000;
}

html, body {
    background-color: var(--color-3);
}
```

<a id="sty5"></a>

### **Pseudoclases**

[Volver al indice](#sty-base)

Si vemos los vínculos, tiene un color asignado que podemos cambiarlo por ejemplo si le pasamos el
mouse por arriba al elemento , eso lo haremos con lo que se llaman pseudo clases pero es necesario
trabajar de forma interna para poder hacerlo, por ejemplo

```html
<head>
 <style>
  a:hover {color: pink;}
 </style>
</head>
```

En el ejemplo anterior hemos dicho que los vínculos al pasarle el mouse por arriba se verán en otro color, por ejemplo en el caso anterior en pink.
Tenemos varias pseudo clases:

* a:hover => cuando pasamos el mouse por arriba del vínculo
* a:link => cuando aún no hemos visitado al vínculo
* a:visited => cuando hemos visitado al vínculo
* a:active => cuando le hacemos clic al vínculo

```css
a {color: white; text-decoration:none;}
a:hover {text-decoration:underline; }
```

<a id="sty5-1"></a>

### **¿Qué es el modelo de caja (Box Model) en CSS y cómo funciona?** 💛

[Volver al indice](#sty-base)

El modelo de caja (Box Model) en CSS es la forma en que se representan y se calculan las dimensiones de los elementos HTML en una página web. Cada elemento HTML se representa como una caja rectangular que consta de cuatro áreas principales: el contenido, el relleno, el borde y el margen.

- **Contenido (Content):** Es el área interior de la caja que contiene el contenido real del elemento, como texto, imágenes, etc.
- **Relleno (Padding):** Es el espacio entre el contenido y el borde de la caja. Se puede agregar relleno para aumentar el espacio entre el contenido y el borde.
- **Borde (Border):** Es el borde que rodea el contenido y el relleno de la caja. Se puede agregar un borde para darle un aspecto visual alrededor del contenido.
- **Margen (Margin):** Es el espacio entre el borde de la caja y los elementos adyacentes. Se puede agregar un margen para controlar el espacio entre los elementos en la página.

![box-model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

<a id="sty6"></a>

### **Qué es Sass?**

[Volver al indice](#sty-base)

Es un preprocesador que nos permite escribir codigo CSS de una forma mas dinamica, agregando sintaxis de un lenguaje de programacion, incluyendo variables, funciones, modulos y valores

Ayuda a tener un codigo modular, simple y escalable.

* Es completamente compatible con CSS
* Se puede escribir codigo mucho mas rapidamente
* Muchos framework actualmente estan construidos con sass
* Hay mucha documentacion

<a id="sty7"></a>

### **Cual es la diferencia entre .sass y scss?**

[Volver al indice](#sty-base)

La primera no utiliza llaves, solo tabulaciones, que se interpretan como bloques de codigo. La segunda es mas similar a CSS ya que utiliza llaves, y con funcionalidades extra

<a id="sty8"></a>

### **Sass reemplaza a CSS?**

[Volver al indice](#sty-base)

No, es una herramienta para escribir CSS de forma mas rapida, esto se compila a CSS. Es CSS con "superpoderes".

En el HTML se hace el link al Stylesheet .css que es compilado desde sass.

<a id="sty9"></a>

### **Comentarios en Sass**

[Volver al indice](#sty-base)

```scss
// Los comentarios de 2 barras no aparecen en el CSS compilado

/*
 Este tipo de comentarios si aparecen en el codigo CSS compilado
*/
```

<a id="sty10"></a>

### **Variables en SASS**

[Volver al indice](#sty-base)

```scss
$color: red;

h1 {
 // Se pueden declarar fuera y dentro de los bloques de estilos en SASS
 $font: Arial;
 font-family: $font;

 color: $color;
}
```

<a id="sty11"></a>

### **Partials en SASS**

[Volver al indice](#sty-base)

Si tengo dos archivos en mi directorio sass, y no quiero que los dos aparezcan convertidos a css, si no que ambos esten combinados en un solo css (esto para que no ocupe tanto espacio), simplemente le pongo guion bajo al nombre del archivo sass que deseo combinar

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd504db2-9bd9-4188-9b25-c304a0d8ab82/Untitled.png)

El archivo con el guion bajo en su nombre no sera compilado, sera llamado en otro elemento que lo utilizara.

```scss
// No es necesario ni la extension ni el guion
// bajo en el nombre del archivo a importar
@use 'variables';

body {
 color: variables.$primary;
}
```

<a id="sty12"></a>

### **Imports en SASS**

[Volver al indice](#sty-base)

Puedo modificar los valores de las variables que importo al momento de referenciar al archivo

```scss
@use 'variables' with (
 $primary: pink;
);

color: variables.$primary;
```

Para que esto pueda ser modificado, se le debe agregar una propiedad a la declaración de la variable, un `!default`

```scss
$primary: pink !default;
```

Cuando una variable es declarada en el mismo archivo sass donde es usada (generalmente arriba de todo del archivo y por fuera de cualquier bloque de estilos) se le dice que tiene un **scope global**

<a id="sty13"></a>

### **Interpolacion en SASS**

[Volver al indice](#sty-base)

```scss
$selector: '.hero';
$propiedad: 'color';

#{$selector} {
 #{$propiedad}: red;
}

// Es lo mismo que =>

.hero {
 color: red;
}
```

<a id="sty14"></a>

### **Nesting en SASS**

```scss
// ----- SASS -----

.hero {
 //..estilos 1
  nav {
   //.. estilos 2
    a {
     //..estilos 3
    }
  }
}

// ----- CSS -----

.hero {
 //..estilos 1
}

.hero nav {
 //..estilos 2
}

.hero nav a {
 // ..estilos 3
}
```

<a id="sty15"></a>

### **Selectores en SASS**

[Volver al indice](#sty-base)

```scss
// Selector de hijo directo (.item es hijo directo de .card)

.card > {
 .item {}
}

.card {
 > .item {}
}
```

<a id="sty16"></a>

### **Mixins en SASS** 💛

[Volver al indice](#sty-base)

Es un grupo de declaraciones de CSS que pueden reutilizarse. Por ejemplo, si uso box-shadow, tendria que escribir varios estilos para varios navegadores

```jsx
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Entonces en SASS podemos usar mixins, que son como funciones que podemos invocar para reutilizar el codigo. Hasta tiene parametros y todo para cambiar los valores

```jsx
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

Luego llamamos al mixin utilizando la directiva `include`

```jsx
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

<a id="sty17"></a>

### **Condicionales if-else en SASS**

[Volver al indice](#sty-base)

Se puede utilizar if-else dentro de los mixins en SASS

```jsx
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

<a id="sty18"></a>

### **Ciclos en SASS**

[Volver al indice](#sty-base)

Se pueden utilizar ciclos en SASS para repetir estilos

```jsx
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

Esto nos sirve para crear clases de forma dinamica

<a id="sty19"></a>

### **Funciones en SASS**

[Volver al indice](#sty-base)

Se pueden crear funciones en SASS para reutilizar codigo

```jsx
@function suma($a, $b) {
  @return $a + $b;
}

div {
  width: suma(10px, 20px);
}
```

<a id="sty20"></a>

### **Extend/Inheritance en SASS**

[Volver al indice](#sty-base)

Se puede utilizar `@extend` para heredar estilos de un selector a otro

```jsx
.btn {
  color: white;
  background-color: blue;
}

.btn-primary {
  @extend .btn;
  border: 1px solid black;
}
```

<a id="sty21"></a>

### **Placeholder Selectors en SASS**

[Volver al indice](#sty-base)

Los placeholders son selectores que no se compilan a CSS, pero que pueden ser extendidos por otros selectores

```jsx
%btn {
  color: white;
  background-color: blue;
}

.btn-primary {
  @extend %btn;
  border: 1px solid black;
}
```

---

<a id="rea"></a>

# Frontend Frameworks and Libraries

<a id="html1"></a>

## **¿Cuál es la diferencia entre h1, h2, etc.?**

[Volver al indice](#html-base)

Los elementos de encabezado h1 a h6 se utilizan para indicar la importancia del contenido que les sigue. Cuanto menor sea el número, mayor será la importancia, por lo que los elementos h2 tienen menos importancia que los elementos h1. Utiliza solo un elemento h1 por página y coloca los encabezados de menor importancia debajo de los de mayor importancia.

<a id="html2"></a>

### **Vínculos Relativos en HTML**

[Volver al indice](#html-base)

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

<a id="html3"></a>

### **Vínculos Absolutos en HTML**

[Volver al indice](#html-base)

Es la URL que dirige a un recurso en la web, por ejemplo, si quiero ir a google.com desde mi archivo index.html, lo haré de la siguiente forma:

```html
<!doctype html>

<title>Vinculo</title>
<a href="https://www.google.com" title="Contacto"> Contacto </a>
```

<a id="html4"></a>

### **¿Para qué es el Doctype?**

[Volver al indice](#html-base)

El doctype es una declaración que se utiliza en un documento HTML para informar al navegador web sobre la versión de HTML en la que está escrito el documento. El doctype debe ser la primera línea de un documento HTML y se utiliza para garantizar que el navegador web interprete el documento correctamente.

```html
<!DOCTYPE html>
```

<a id="html5"></a>

### **Atributo placeholder para campos en HTML**

[Volver al indice](#html-base)

El atributo placeholder me permite guiar al usuario con referencia lo que tiene que colocar dentro de nuestro campo. Por ejemplo:

```html
<label> Nombre <br> <input type=”text” placeholder=”Nombre Completo”> </label>
```

Esto indica al usuario que en ese campo va el nombre completo, o tambien se podria poner un ejemplo.

<a id="html6"></a>

### **Que es HTML Semantico?** 💛

[Volver al indice](#html-base)

Es el uso de etiquetas introducidas en HTML5 en vez de divs y span para la division de secciones en mi HTML.

```html
<header> </header>
<nav> </nav>
<main> </main>
<section> </section>
<article> </article>
<aside> </aside>
<footer> </footer>
```

Esto a nivel de renderizado no cambia nada, pero si hace que mi codigo sea mucho mas accesible. Los motores de busqueda pueden entender mejor el contenido de mi pagina, y los lectores de pantalla tambien.


<a id="html7"></a>

### **Que son los atributos de los elementos HTML?**

[Volver al indice](#html-base)

Los atributos HTML son palabras especiales utilizadas dentro de la etiqueta de apertura de un elemento para controlar el comportamiento del elemento. El atributo src en un elemento img especifica la URL de la imagen (dónde se encuentra la imagen).

`<img src="linkaimagen.com/fcc_secondary.svg">`

<a id="html8"></a>

### **Cuáles son las partes de un documento HTML?**

[Volver al indice](#rea-base)

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

<a id="html9"></a>

### **Puedo escribir las etiquetas en mayúscula y minúscula?**

[Volver al indice](#html-base)

En HTML las mayúsculas y minúsculas son indiferentes. Quiere decir que las etiquetas pueden ser escritas con cualquier tipo de combinación de mayúsculas y minúsculas. Resulta, sin embargo, aconsejable acostumbrarse a escribirlas en minúscula, ya que otras tecnologías que pueden c onvivir
con nuestro HTML (XML por ejemplo) no son tan permisivas y nunca viene mal hacernos a las buenas costumbres desde el principio, para evitar fallos triviales en un futuro.

<a id="html10"></a>

### **Qué son los mapa de imagen?**

[Volver al indice](#rea-base)

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

<a id="html11"></a>

### **Que es el tag DataList?**

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

---

<a id="rea47"></a>

### **¿Qué es React?**

[Volver al indice](#react-base)

React fue creado por Facebook en el año 2013, y sigue siendo mantenida por él. (ahora Meta). Algunos ejemplos de proveedores que usan React son, además de Facebook, PayPal, Netflix, etc., páginas con un gran flujo de usuarios al día de hoy.

Es rápido y escalable. Es declarativo y basado en componentes. Aclaramos que es lo que queremos renderizar, pero no el cómo. Al ser declarativo, hace que sea facil el seguir patrones de diseño.

Su trabajo es predecible, toda la info va en una sola via. Nos ayuda a prevenir mutaciones involuntarias.

Funciona con la llamada **Programación Reactiva**, cada componente reacciona y se vuelve a renderizar (o no) cuando se produce un cambio de estado o llegan ciertas propiedades.

Al ser una libreria, se puede usar directamente en un HTML (aunque no es la manera mas común), y esta hecho para aplicaciones de cualquier magnitud.

Tambien se puede trabajar del lado del servidor con Node, aplicaciones mobile con React Native y de escritorio con Electron. Todo con el mismo tipo de codigo.

<a id="rea47-2"></a>

### **Libreria vs Framework** 💛

[Volver al indice](#react-base)

- **Libreria:** Es un conjunto de funciones que se pueden usar en un proyecto. El programador decide cuando y como usarla, es mucho mas flexible. Ejemplo: React, Redux, Lodash.
- **Framework:** Es un conjunto de reglas y estructuras que se deben seguir para desarrollar un proyecto. El framework decide cuando y como usarlo. Ejemplo: Angular, Vue, Django.

Es por eso que cuando vemos un proyecto hecho con React, y luego otro tambien hecho con React, su estructura puede ser completamente distinta. En cambio, cuando vemos proyectos Angular, podemos encontrar la misma estructura base en todos.

<a id="rea49"></a>

### **Para que es el comando React eject?**

[Volver al indice](#react-base)

El comando `eject` de React es una forma de sacar toda la configuración de Webpack y Babel que React trae por defecto, para poder modificarla a gusto. Es una forma de tener control total sobre la configuración de la aplicación.

```jsx
npx create-react-app my-app
cd my-app
npm run eject
```

<a id="rea52-5"></a>

### **Que son las Ref?**

[Volver al indice](#react-base)

Permite a react manipular directamente el DOM Sin necesidad de actualizar un componente, asumen cambios en los mismos que no se pueden resolver mediante el traspaso de props o cuyo impacto se limita al propio componente no siendo rentable renderizarlo de nuevo.

```jsx
class AnimatedSpinner extends Component {

  constructor() {
    super()
    this.animationRef = React.createRef()    // 1. creación
  }

  triggerAnimation() {
    this.animationRef.current.className.add('animated')  // 3. acceso
  }

  render() {
    return (
      <>
        <div ref={this.animationRef} className="spinner"> </div>  // asociación
        <button onClick={this.triggerAnimation}> Animar </button>

    )
  }
}
```

<a id="react62"></a>

### **De que tratan los Ciclos de Vida Componentes?**

[Volver al indice](#react-base)

React provee de metodos especificos para los ciclos de vida de los componentes, en este caso, veremos en los de clase. Se llaman cuando el componente se monta, actualiza o desmonta, veamos las deficiones:

- Monta: El componente se renderiza en la pagina
- Desmonta: El componente es removido de la pagina
- Actualiza: El componente se actualiza en la pagina

Varios de los estados que veremos que se utilizaban tipicamente en componentes de clase se encuentran deprecados, y deben usarse con un tag UNSAFE para su uso.

<a id="rea62-1"></a>

### **Componentes de clase vs Componentes de Funcion 💛**

[Volver al indice](#react-base)

Antes se utilizaban los componentes de clase para componentes complejos, y los componentes de funcion para componentes con poca logica en si mismos, hoy en dia se puede decir que los componentes de funcion reemplazaron completamente a los componentes de clase.

Los componentes de funcion son mas faciles de leer, escribir y testear, y son mas faciles de optimizar. Los componentes de clase son mas dificiles de leer, escribir y testear, y son mas dificiles de optimizar.

| Componentes de Clase | Componentes de Funcion |
| --- | --- |
| Manejaba los props con `this.props` | Maneja los props como argumentos de la funcion |
| Manejaba los ciclos de vida con funciones como `componentDidMount()` | Maneja los ciclos de vida con hooks como `useEffect()` |
| Manejaba los eventos con funciones como `this.handleClick` | Maneja los eventos con funciones como `handleClick` |
| Manejaba el estado con `this.state` | Maneja el estado con `useState` |
| Manejaba el contexto con `this.context` | Maneja el contexto con `useContext` |

<a id="rea55"></a>

### **componentWillReceiveProps()**

[Volver al indice](#react-base)

Se ejecuta cuando hay alguna actualizacion de alguna prop

```jsx
componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
        // do something important here
    }
}
```

<a id="rea56"></a>

### **componentDidMount()**

[Volver al indice](#react-base)

Se llama cuando el componente es renderizado en la pagina. Se puede usar para inicializar cosas, como para pedir la informacion inicial de los componentes.

```jsx
componentDidMount() {
    // get the data I need to correctly display
}
```

<a id="rea57"></a>

### **componentWillUnmount()**

[Volver al indice](#react-base)

Es llamado antes de que el componente sea desmontado del DOM. Se puede usar para liberar recursos. No existe un “DidUnmount” ya que, una vez que se desmonta, ya no se puede hacer nada por el mismo.

```jsx
componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
}
```

<a id="rea58"></a>

### **componentWillMount()**

[Volver al indice](#react-base)

Corresponde a cuando el componente va a montarse, se ejecuta antes de su montaje, es como el constructor del mismo.

```jsx
componentWillMount() {
    // setup your state
}
```

<a id="rea59"></a>

### **componentWillMount()**

[Volver al indice](#react-base)

Se llama cuando el componente se actualiza en el DOM. Podemos hacerlo para, por ejemplo, para avisar que el counter fue incrementado en uno.

```jsx
componentDidUpdate() {
    alert('Number of clicks: ' + this.state.count);
}
```

<a id="rea60"></a>

### **shouldComponentUpdate()**

[Volver al indice](#react-base)

Nos permite decidir si debemos ejecutar o no el render. Muestra con que valores, o bajo que condiciones, se realizará la actualizacion.

```jsx
shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
}
```

<a id="rea61"></a>

### **componentWillUpdate()**

[Volver al indice](#react-base)

Es cuando se esta por ejecutar el render. Nos ayuda a setear valores globales justo antes del mismo.

```jsx
componentWillUpdate() {
    // set some global variables
}
```


<a id="rea1"></a>

### **useCallback** 💛

[Volver al indice](#react-base)

Tiene dos casos de uso:

* Cuando queremos mandar una función a un componente hijo
* Cuando tenemos un useEffect y el efecto tiene una dependencia que es la función, se recomienda usar el useCallback

Lo importamos de la siguiente manera

```jsx
import React, {useState, useCallback} from "react";
```

Y lo usamos de la siguiente manera:

```jsx
const [counter, setCounter] = useState(10);

// const increment = () => {
//    setCounter(counter + 1);
//}

const increment = useCallback((num) => {
    setCounter(c => c + num);
}, [setCounter])
```

Se toma como referencia el setCounter, y la c de la función del useCallback hace referencia al counter.

Para solucionar el segundo caso de uso, tenemos que hacer lo siguiente:

```jsx
const increment = useCallback((num) => {
    setCounter(c => c + num);
}, [setCounter]);

useEffect(() => {
    // code
}, [increment])
```

Si no tuviéramos el useCallback, el useEffect se dispararía ante cada cambio de la función increment.

<a id="rea2"></a>

### **useDispatch - Hook Redux** 

[Volver al indice](#react-base)

Es para ejecutar las acciones que podamos tener en nuestro Redux

```jsx
const [name, setName] = useState("");
const [price, setPrice] = useState(0);

const dispatch = useDispatch();

const addProduct = (product) => {
    dispatch({
        type: "ADD_PRODUCT",
        payload: product,
    });
};

const submitNewProduct = (e) => {
    e.preventDefault();

    if (!name.trim()) {
        console.log("Name is required");
        return;
    }

    if (price <= 0) {
        console.log("Price is required");
        return;
    }

    addProduct({
        name,
        price,
    });
};
```

<a id="rea3"></a>

### **useEffect** 💛

[Volver al indice](#react-base)

Reemplaza las funciones del ciclo de vida para los componentes de función, los combina en uno solo, es un Hook.

```jsx
import React, {useEffect} from 'react';
```

Requiere ser importado para ser usado

Por ejemplo, en el caso del contador, quedaria algo asi con Hooks

```jsx
function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        alert("Amount of Clicks: " + counter);
    })

    function increment() {
        setCounter(counter++);
    }

    return <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    </div>;
}
```

Cuando el componente se monta y actualiza se ejecuta el useEffect()

Si queremos que useEffect se ejecute solo ante la actualización del componente y no cuando se monta, agregamos un pequeño array vacío al final del useEffect(). Este array puede llenarse de dependencia que puede que usemos al ejecutar el Hook.

```jsx
useEffect(() => {
    // Codigo
}), []);
```

Y si queremos que cumpla una función de “clean up” como en el caso del componentWillUnmount(), podemos devolver una función que limpie lo necesario

```jsx
useEffect(() => {
    return () => {
        // cleanup, se ejecuta ultimo
    };
});
```

Si queremos que nuestro useEffect funcione como un componentDidMount() y un componentDidUpdate()

```jsx
useEffect(() => {console.log("Update"); });
```

Si queremos que funcione como un componentDidMount() (Solo se ejecuta cuando es montado)

```jsx
useEffect(() => {console.log("Mount");}, []);
```

Y si queremos que se ejecute ante el cambio de un state

```jsx
useEffect(() => {console.log("Mount");}, [state]);
```

<a id="rea3-2"></a>

### **Puede el useEffect ser asincrono? Porque?** 💛

[Volver al indice](#react-base)

El useEffect **no** deberia ser asincrono en si mismo, ya que no se puede retornar una promesa. Pero si se puede llamar a una funcion asincrona dentro del useEffect

```jsx
useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://api.com");
        const data = await response.json();
        console.log(data);
    }

    fetchData();
}, []);
```

Esto es porque el useEffect esta hecho para devolver una funcion de clean up, y no una promesa.

En el caso de que el useEffect en si mismo sea asincrono, el codigo funcionara, pero habra un error en la consola.

![useeffect error](https://blog.logrocket.com/useeffect-react-hook-complete-guide/)

<a id="rea4"></a>

### **useState**

[Volver al indice](#react-base)

Hooks permiten usar los state dentro de los componentes funcionales. El más común es el useState que necesita ser importado de la siguiente manera para ser usado

`import React, {useState} from 'react';`

Y lo manejamos de la siguiente manera:

```jsx
function Hello() {
  const [name, setName] = useState("David");

  return <h1>Hola {name} </h1>;
}
```

name es la manera en la que nos referimos al state en si, `useState` lo inicializa con algún valor, y setName queda como la funcion para modificar el mismo.

Tambien podemos manejar objetos dentro de los `useState`

```jsx
const [coordenadas, serCoodernadas] = useState ({
  latitud: null, longitud: null });

setCoordenadas({latitud: 12, longitud: 13});
```

Los Hooks solo pueden ser usados dentro de un componente funcional, en el caso de los componentes de clase, debemos usar el this para referenciar a un estado.

<a id="rea5"></a>

### **useSelector - Hook Redux**

[Volver al indice](#react-base)

Es un hook dado por Redux. 

Es para acceder a un state dentro del componente. Es decir, si tenemos un state de error, poder reflejar algo en la UI en funcion de su valor.

```jsx
const error = useSelector(state => state.error)
```

<a id="rea6"></a>

### **useRef**

[Volver al indice](#react-base)

Es otro Hook que viene con React. Asi que debe ser importado en conjunto

```jsx
import React, {useRef} from 'react';
```

Su utilidad es para hacer referencia a un item en particular sin necesitar que la página o el componente vuelvan a ser renderizados.

Un caso de uso es, teniendo un input de texto y un botón, hacer que el cuadro de texto se seleccione cuando el botón es accionado.

Inicializamos el ref:

```jsx
const inputRef = useRef();
```

Agregamos el ref al elemento deseado, en este caso, el input de texto:

```jsx
<input
    ref={inputRef}
    className="form-control"
    placeholder="Nombre"
/>
```

Y se lo agregamos a la función que se ejecuta en el `onClick` del botón, en este caso, la función `handleClick`

```jsx
const handleClick = () => {
    inputRef.current.select();
}
```

Y si hacemos un console.log de este ref, podemos ver que hace referencia al item de input que configuramos, con todas sus propiedades

!<https://miro.medium.com/max/1236/1*UY_6duTresBTHq5p35M8EQ.png>

Esto no es el uso más común de este Hook de React. Podemos usarlo para chequear si un componente está montado (o no, si se tiene la referencia es porque el componente no está montado actualmente)

Entonces ante un desmonte del componente, actualizamos el valor de la refernecia de `isMounted` a `false`, como se puede ver en el useEffect() (Recordar que cuando esta en el return, se ejecuta en el **`componentWillUnmount**()` )

Lo podemos utilizar para no llamar a un servicio cuando el componente esta desmontado, por ejemplo.

```jsx
const isMounted = useRef(true);
const [state, setState] = useState({data});

useEffect(() => {
    return () => {
        isMounted.current = false;
    }
}, [])
```

Notar que nos referimos al valor del ref o para su cambio con current

<a id="rea7"></a>

### **useMemo**

[Volver al indice](#react-base)

Primero para entender este Hook, debemos entender el uso de Memo en React.

Para prevenir que un componente vuelva a renderizarse si sus props son las mismas usamos Memo, lo memorizamos.

Lo podemos hacer de dos maneras, con memo desde React, si la prop “value” no cambia del valor anterior, el componente no vuelve a renderizarse.

```jsx
import React, {memo} from 'react';

export const Small = memo(({value}) => {
    console.log("Me volvi a llamar");
    // http?

    return (
        <small>{value}</small>
    )
})
```

En el caso del uso del Hook useMemo, es muy parecido a Memo.

```jsx
const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
```

Se recibe como primer parámetro una función en callback, y como segundo parámetro una variable o estado que debemos chequear su valor para memorizar, o no, la función.

El valor se almacena en la variable memoProcesoPesado, y lo usamos en lugar de la función en todas sus referencias de uso

```jsx
<p> {memoProcesoPesado} </p>
```

Lo que hace, en resumen, es que si el valor de counter no cambia, la función no se re-ejecuta ante cada nuevo renderizado, solo se vuelve a procesar si counter cambia, no es necesario que sea la misma variable que la función recibe por parámetros.

Evitar re-renderizado de, por ejemplo, una lista

```jsx
const twoRandomProducts = useMemo(() => [...products]
.sort(() => (Math.random() > ...))
.slice(0,2), [products]); // dependencia de products, si products no cambia, memo no cambia
```

<a id="rea7-1"></a>

### **¿Cuál es la diferencia entre useCallback y useMemo?**

[Volver al indice](#react-base)

Tanto useCallback como useMemo son hooks de React diseñados para optimizar el rendimiento al evitar cálculos innecesarios o recreaciones de funciones/valores. La diferencia principal radica en qué optimizan y cómo se usan:

- `useCallback` memoriza funciones, evitando que se creen nuevas instancias de la función en cada renderizado. Se usa para evitar que las funciones se pasen como propiedades a componentes hijos se vuelvan a renderizar innecesariamente.

```jsx
const memoizedCallback = useCallback(() => {
  // lógica de la función
}, [dependencias]);

const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);

return <Button onClick={handleClick} />;
```

- `useMemo` memoriza valores, evitando que se recalculen en cada renderizado. Se usa para evitar cálculos costosos en componentes funcionales.

```jsx
const memoizedValue = useMemo(() => {
  // lógica de cálculo
  return resultado;
}, [dependencias]);

const filteredItems = useMemo(() => {
  return items.filter(item => item.isActive);
}, [items]);

return <ItemList items={filteredItems} />;
```

Ambos dependen de un array de dependencias para saber cuándo deben actualizarse. Si las dependencias no cambian, el hook devuelve el valor o la función memorizada.

<a id="rea8"></a>

### **useReducer**

[Volver al indice](#react-base)

Es una alternativa a useState que se utiliza de la siguiente manera al momento de inicializar el componente:

`const [state, dispatch] = useReducer(reducer, initialArg, init);`

* **init** es usado como funcion para inicializar el state en caso de que el mismo sea procesado o haga varias acciones.
* **dispatch** ayuda a disparar las acciones hacia el reducer

Cuando son estados simples, es preferible el useState, pero si es algo bastante amplio y con muchas acciones que deben estar cambiando mediante props, ahí puede considerarse el useReducer con el Reducer correspondiente.

```jsx
const initialState = {count: 0};

function reducer(state, action){
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onCLick={() => dispatch({type: 'decrement'})}> - </button>
      <button onCLick={() => dispatch({type: 'increment'})}> + </button>
    </>
  );
}
```

<a id="rea9"></a>

### **useLayoutEffect**

[Volver al indice](#react-base)

No es un Hook muy común en si mismo. Se dispara de forma asíncrona después de que todas las manipulaciones del DOM se hayan hecho, se usa para tomar referencias, como por ejemplos, tamaños de cajas de textos, etc...

La misma documentación de React recomienda usar `useEffect` en su lugar para evitar el bloqueo de actualizaciones visuales.

Se activa en las mismas fases del `componentDidMount` y `componentDidUpdate` que podiamos ver en los componentes de clase y sus ciclos de vida.

Por ejemplo, para recoger el tamaño de un elemento de nuestro DOM, hacemos lo siguiente.

Lo importamos como un Hook nativo de React

```jsx
import React, {useLayoutEffect} from 'react';
```

Posee la misma estructura que el useEffect, en el ejemplo este console.log se ejecutará ante cada primer renderizado del componente por su array final []

```jsx
useLayoutEffect(() => {
    console.log("hola");
}, [])
```

Podemos complementar el ejemplo con useRef, y agregarlo al elemento que queremos evaluar.

```jsx
const pTag = useRef();

useLayoutEffect(() => {
 console.log(pTag.current.getBoundingClientRect());
}, [quote]);
```

En este ejemplo podemos ver que se creó la referencia (pTag) ya posicionada en el elemento a evaluar, y, cada vez que cambia la variable quote de nuestro componente, se ejecutará el `useLayoutEffect`, tomando el tamaño del rectángulo que contiene al elemento, para eso sirve el **`getBoundingClientRect()`** usado en este caso.

Una vez hecho esto, nos aparecerá esto en la consola del navegador ⇒

!<https://miro.medium.com/max/1400/1*ehoXFftQ5DCge88ZZtS7cQ.png>

El primero es cuando el DOM todavía no renderizo el elemento, por eso es todo valor cero. El segundo es cuando ya está renderizado.

Ante cada cambio de quote que se haga, volverá a cero y volverá a tener otro valor, ya que este elemento es el que contiene el valor de quote, de longitud variable (es una frase random)

<a id="rea9-1"></a>

### **¿Qué diferencia hay entre useEffect y useLayoutEffect? ¿Cuándo usarías cada uno?**

[Volver al indice](#react-base)

Ambos son Hooks de React que se utilizan para ejecutar efectos secundarios en componentes funcionales. La diferencia principal entre useEffect y useLayoutEffect es cuándo se ejecutan.

1. **useEffect**:
   - Se ejecuta después de que el navegador haya renderizado el componente y actualizado el DOM.
   - Es asincrónico y no bloquea la actualización visual del navegador.
   - Se utiliza para tareas que no requieren acceso inmediato al DOM, como llamadas a API, suscripciones a eventos y actualizaciones de estado.
   - Se ejecuta después de que el navegador haya pintado el componente en la pantalla, lo que puede causar un parpadeo o retraso en la actualización visual.
   - Se recomienda usar useEffect para la mayoría de los efectos secundarios, ya que es más eficiente y no bloquea la actualización visual.

2. **useLayoutEffect**:
    - Se ejecuta de forma síncrona después de que el navegador haya renderizado el componente pero antes de que se actualice el DOM.
    - Es síncrono y bloquea la actualización visual del navegador.
    - Se utiliza para tareas que requieren acceso inmediato al DOM, como medir elementos, calcular geometría y realizar animaciones.
    - Se ejecuta antes de que el navegador pinte el componente en la pantalla, lo que garantiza que los cambios en el DOM se reflejen de inmediato.
    - Se recomienda usar useLayoutEffect solo cuando sea necesario acceder al DOM de forma síncrona y realizar cambios que afecten la geometría de los elementos.

En resumen, useEffect se utiliza para efectos secundarios asincrónicos que no requieren acceso inmediato al DOM, mientras que useLayoutEffect se utiliza para efectos secundarios síncronos que requieren acceso inmediato al DOM y afectan la geometría de los elementos.

<a id="rea18"></a>

### **¿Que es Redux?**

[Volver al indice](#react-base)

Redux permitira manejar el state global de manera facil conforme van creciendo, tambien ayuda a manejar los datos dependiendo de las acciones del usuario. Fue creado por un dev del equipo de React.

- Solo hay 1 state principal
- El state cambia depende lo que pase en la interfaz de usuario
- Solo ciertas funciones cambiarán el State
- Solo se hace un cambio a la vez

<a id="rea19"></a>

### **Cuando conviene usar Redux?**

[Volver al indice](#rea-base)

Si la app es pequeña, se recomienda ContextAPI o hooks. Si es grande, y va a ser mantenido por varias personas, se recomeinda Redux

- No hace la app mas rapida
- Existe Redux para muchos frameworks, no solo React
- No es necesario usarlo en cada proyecto

<a id="rea20"></a>

### **¿Cuales son los beneficios de usar Redux?**

[Volver al indice](#react-base)

- Como su estructura es muy estricta, es muy facil de mantener y de organizar, tambien es muy estable.
- Da una fiable representacion del servidor, es muy util especialmente para presentaciones preliminares. Puede optimizar, por ejemplo, motores de busqueda.
- Provee muchas herramientas para los devs
- Es facil de probar, las funciones de redux y el codigo en si son pequeñas y atomicas.

<a id="rea21"></a>

### **Redux vs ContextAPI**

[Volver al indice](#react-base)

**Context**

- Context es una herramienta de React que permite pasar datos a traves del arbol de componentes sin tener que pasar props manualmente en cada nivel
- Context es una buena opcion para datos que son necesarios en muchos componentes de la aplicacion
- Context es una buena opcion para datos que no cambian frecuentemente
- Context viene integrado a React
- Es facil de entender para principiantes
- No requiere mucho codigo boilerplate

**Redux**

- Redux es una libreria de manejo de estado que permite manejar el estado de la aplicacion de manera predecible
- Redux es una buena opcion para datos que cambian frecuentemente
- Redux es una buena opcion para aplicaciones grandes con muchos componentes
- Redux no viene integrado a React, se debe instalar por separado

<a id="rea22"></a>

### **¿Cual es el flujo de Redux?**

[Volver al indice](#react-base)

Store

- Contiene el state y solo hay un Store por app

Dispatch

- Ejecuta una accion, es una funcion que maneja un state

```jsx
dispatch(addProductOk(product))
```

Actions

- Objetos en JS con tipo y payload (datos que modificaran el state)
- Los componentes no deben modificar el state directamente, se modifica por medio de funciones llamadas Actions

Subscribe

- Similar al event listener para el state

Reducer

- Funciones que saben que hacer con las acciones y el payload

<a id="rea23"></a>

### **Que es ContextAPI?**

[Volver al indice](#react-base)

Es una manera de tener un estado global sin dependencias como Redux, ya que viene desde React 16.3.

Se pueden pasar state o funciones desde el componente principal hacia los hijos, nos evitamos pasarlo por cada uno de los componentes, es algo global.

Cuenta con el hook `useContext` que facilita el acceso a los datos del Context.

Children refiere a los componentes dentro del Provider que recibirán estos datos.

Provider: De donde vienen los datos

```jsx
import {createContext} from 'react';

const QuoteContext = createContext();

const QuoteProvider = ({children}) => {
  return (
    <QuoteContext.Provider
    value=({})>
      {children}
    </QuoteContext.Provider>
  )
}

export { QuoteProvider }
export default QuoteContext;
```

Dentro de value ponemos lo que queremos exportar para el resto de componentes, y luego, lo consumimos de la siguiente manera:

```jsx
// Donde entre llaves ponemos lo que queremos consumir de ese Context.
const {} = useContext(QuoteContext);
```

<a id="rea24"></a>

### **Que es React Fiber?**

[Volver al indice](#rea-base)

La arquitectura de React hizo que fuera muy facil trabajar no solo en web si no tambien en mobile (React Native) y en hasta aplicaciones de Realidad Virtual. Asi los dev de React decidieron separar su algoritmo de reconciliacion (el que compara los cambios entre DOM y VDOM) y el lienzo donde esos cambios se muestran (Web, Mobile, etc..)

Fiber fue diseñado para mejorar el rendimiento, particularmente en aplicaciones que requieren animaciones, interacciones complejas y actualizaciones de gran volumen.

React Fiber organiza la renderización en dos fases principales:

- **Fase de Render (Reconciliación)**: Se construye o actualiza un árbol de componentes de manera asíncrona. React decide qué cambios deben aplicarse al DOM basándose en las prioridades.
- **Fase de Commit**: Es sincrónica y rápida. Los cambios calculados en la fase de render se aplican al DOM real.

React Fiber no cambia cómo los desarrolladores escriben código React, pero mejora significativamente el rendimiento y la flexibilidad de las aplicaciones React modernas. Es la base que permite que React maneje de manera eficiente aplicaciones cada vez más interactivas y complejas.

<a id="rea24-1"></a>

### **Que tener en cuenta para tener una buena performance en React** 💛

[Volver al indice](#react-base)

- Usar memorizacion para evitar renderizados innecesarios. Usar `useMemo` para valores y `useCallback` para funciones.

```jsx
import React, { useMemo, useCallback } from 'react';

const Componente = ({ lista }) => {
  const listaOrdenada = useMemo(() => lista.sort(), [lista]);
  const manejarClick = useCallback(() => console.log('Clicked'), []);
  return <button onClick={manejarClick}>Ordenar</button>;
};
```

- Usa contextos (React Context) de manera adecuada para evitar actualizaciones globales innecesarias.
- Evita la mutacion directa de objetos y arrays. Usa `useState` y `useReducer` para actualizar el estado de manera inmutable.
- Divide la logica en componentes mas pequeños y reutilizables.
- Usar la propiedad `key` cuando se renderizan listas para mejorar el rendimiento, ya que ayuda a React a identificar elementos únicos y realizar actualizaciones más eficientes.
- Usar React Window o React Virtualized para renderizar grandes listas de elementos de manera eficiente.

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const App = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
```

- Usa React.lazy y Suspense para cargar componentes bajo demanda y mejorar los tiempos de carga.
- Usa herramientas como Webpack para dividir el código en partes más pequeñas y cargar solo lo necesario.
- Limita el uso de operaciones manuales con el DOM que pueden interferir con la reconciliación de React.
- Usa herramientas como className o bibliotecas como styled-components en lugar de pasar estilos inline directamente en los elementos. Evita renders excesivos de estilos dinámicos.
- Usa Server-Side Rendering (SSR) con herramientas como Next.js para mejorar tiempos de carga inicial
- Usa las herramientas de React para identificar problemas de rendimiento como React DevTools y React Profiler.
- Optimización de imágenes, carga diferida y compresión de recursos para mejorar los tiempos de carga y la experiencia del usuario. Usa formatos modernos como WebP.

<a id="rea39"></a>

### **¿Qué es el Virtual DOM?** 💛

[Volver al indice](#react-base)

Para que React pueda efectuar esta suerte de “recarga parcial por pedazos” de una página, debe usar el Virtual DOM, que es una representación del DOM real.

Cuando un elemento cambia, primero se actualiza el VDOM de forma muy rápida, luego, React compara este VDOM propio con el DOM real, y basándonos en sus diferencias, únicamente aplica los cambios necesarios para que ambos coincidan.

Todo sale de app.js, que contiene X cantidad de componentes, y estos poseen Z cantidad de componentes en sí mismos. Si actualizamos a `app.js`, se actualiza la página entera, pero si actualizamos algo dentro de estos componentes, únicamente se actualizará de este componente “para arriba” en la jerarquía de componentes.

Más arriba la jerarquía, más refrescos habrá. Un componente hijo, idealmente, no deberia necesitar modificar el estado del componente padre.

- Aumenta la velocidad de la aplicacion
- No acapara mucha memoria, hace que el uso de la misma sea mucho mas eficiente
- Provee una capa adicional de Scripting, dandole un peso mas a la CPU

![Virtual Dom](src/vdom.png)

---

<a id="rea10"></a>

### **Diferencia entre AngularJS y Angular**

[Volver al indice](#angular-base)

AngularJS y Angular son dos frameworks de JavaScript desarrollados por Google, pero tienen diferencias significativas en cuanto a su arquitectura y características.

1. **AngularJS (1.x)**:
   - AngularJS es el primer framework de JavaScript desarrollado por Google. Se lanzó en 2010.
   - Utiliza un enfoque MVC (Modelo-Vista-Controlador) para el desarrollo de aplicaciones web.
   - AngularJS usa la sintaxis de enlace de datos bidireccional para sincronizar automáticamente los datos del modelo y la vista.
   - Usa directivas para extender el HTML con nuevas funcionalidades.
   - Utiliza inyección de dependencias para facilitar la creación y administración de componentes.
   - AngularJS se basa en JavaScript puro y no requiere TypeScript.

2. **Angular (2+)**:
   - Angular, también conocido como Angular 2 y versiones posteriores, es una reescritura completa de AngularJS.
   - Se lanzó en 2016 y fue reconstruido con TypeScript.
   - Adopta un enfoque de componentes, donde las aplicaciones se construyen a partir de componentes independientes y reutilizables.
   - Utiliza un enfoque unidireccional para la vinculación de datos, lo que mejora el rendimiento y la previsibilidad.
   - Angular cuenta con un enfoque modular, lo que permite la carga bajo demanda de características y optimización del rendimiento.
   - Ofrece una mejor optimización para dispositivos móviles y es más adecuado para el desarrollo de aplicaciones empresariales complejas.
   - Angular proporciona herramientas integradas para realizar pruebas unitarias y de extremo a extremo.
   - Angular es compatible con las últimas especificaciones de JavaScript (ES6/ES7) y TypeScript.

En resumen, AngularJS es el primer framework desarrollado por Google, que utiliza un enfoque MVC y está basado en JavaScript puro, mientras que Angular es una reescritura completa en TypeScript, con un enfoque de componentes, vinculación de datos unidireccional y una arquitectura más modular y optimizada para aplicaciones empresariales modernas.

<a id="rea11"></a>

### **¿Qué son los modulos en Angular?**

[Volver al indice](#angular-base)

Las aplicaciones de Angular son Modulares, en Angular existe NgModules. Sirve para mantener la lógica de un flujo de trabajo de la aplicación. Por ejemplo, se tiene un e-commerce, con sus módulos correspondientes, usuarios vendedores, compradores, productos, etc..

Son diseños lógicos que se encargan de trabajar dentro de la aplicación, se usan para poder importar librerías u otros módulos dentro de los mismos. Cada módulo hasta puede tener su propio ruteo.

Se identifican por su nombre que tipicamente es `app.module.ts` o similares. Hoy en dia en las ultimas versiones de Angular se usan cada vez mas los componentes standalone, donde no es necesario el uso de modulos.

---

<a id="rea12"></a>

### **¿Qué es Property Binding?**

[Volver al indice](#angular-base)

Es la forma que tiene Angular de controlar y cambiar las propiedades de los elementos HTML usando corchetes []

```html
<input [value]="empresa" [disabled]="habilitado"  />

// Empresa y habilitado son datos dinamicos
```

Los corchetes (square brakets) hacen que Angular evalúe el lado derecho de la asignación como una expresión dinámica. Sin los corchetes, Angular trata el lado derecho como un literal de cadena y establece la propiedad en ese valor estático.

A menudo, “interpolation” y “Property Binding” pueden lograr los mismos resultados. Los siguientes pares de enlaces hacen lo mismo.

```html
// Interpolacion
<p><img src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>

// Property Binding
<p><img [src]="itemImageUrl"> is the <i>property bound</i> image.</p>
```

Al establecer una propiedad de elemento en un valor de datos que no sea un String a secas (por ejemplo, objetos), debe usar “Property Binding”.

Se recomienda comprender los “Event binding” para entender el flujo de datos de la aplicacion y como este interactua con “interpolation” y “Property Binding”.

<a id="rea13"></a>

### **¿Cuál es el flujo de datos una aplicación Angular?**

[Volver al indice](#angular-base)

- Enlace unidireccional [] para enlazar desde la capa lógica (component.ts) a la vista (html).
- Enlace unidireccional () para enlazar de la vista (html) a la capa lógica (component.ts).
- Enlace bidireccional [()] para enlazar una secuencia de vista bidireccional a la capa lógica (component.ts).

<a id="rea14"></a>

### **¿Qué es un Decorador en Angular?**

[Volver al indice](#angular-base)

Indica como debe comportarse el componente. Dentro de este decorador, puedes observar el selector del componente (un nombre para el mismo), el template HTML y la hoja de estilos que usará.

```tsx
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

<a id="rea15"></a>

### **Event Binding en Angular (Manejo de Eventos)**

[Volver al indice](#angular-base)

```tsx
<button (click)="onSave()">Save</button>

// Multiples eventos
<button (click)="clickEvent()" (mouseenter)="mouseEnterEvent()">Click Me</button>

<button (click)="handleClick($event)">Save</button>

<button (click)="value = value + 1">Presioname</button>

// -- En app.component.ts ---

btnDisabled = true;

onSave() {
  this.btnDisabled = false; // Se usa this para hacer referencia al contexto actual
}

handleClick($event: Event) {
    const element = event.target as HTMLElement;
}
```

- Usar () en el template html es sinónimo de llamar “addEventListener()”

<a id="rea16"></a>

### **Data Binding en Angular**

[Volver al indice](#angular-base)

El atributo **ngModel** permite el **intercambio de datos de forma bidireccional** entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.

```tsx
<input #nameInput="ngModel" [(ngModel)]="name" />

<p>{{nameInput.valid}}</p> // true o false dependiendo de validaciones html
```

Si no quieres la bidireccionalidad, solo colocamos los corchetes `[ngModel]` para que la comunicación sea unidireccional. Para utilizar ngModel, es necesario hacer uso e importar **Angular Forms**

```tsx
... // -- app.module.ts ---
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ... ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [ ... ]
})
export class AppModule { }
```

<a id="angular-1"></a>

### **Que son los componentes standalone y cuando conviene utilizarlos?**

[Volver al indice](#angular-base)

Son una característica introducida en Angular 14 que permite definir componentes sin necesidad de declararlos en un módulo (`NgModule`). En lugar de eso, los componentes standalone se definen utilizando la propiedad `standalone: true` en el decorador `@Component`, y ellos mismos pueden importar directamente otros componentes, directivas, pipes, o módulos necesarios.

**¿Cómo se define un componente standalone?**

Un ejemplo básico de un componente standalone es el siguiente:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  template: `<h1>Hola desde un componente standalone</h1>`,
  standalone: true,
  imports: [], // Aquí puedes importar otros componentes o módulos
})
export class StandaloneExampleComponent {}
```

**Ventajas**

1. **Simplicidad**: Elimina la necesidad de crear o mantener módulos para cada grupo de componentes.
2. **Modularidad**: Facilita la creación de componentes altamente independientes que pueden ser reutilizados en diferentes aplicaciones.
3. **Carga más rápida**: Se pueden usar directamente en **lazy loading** (carga diferida) o **bootstrap** sin necesidad de un módulo adicional.
4. **Menos boilerplate**: Reduce la sobrecarga de configuración al no requerir un módulo explícito para declarar o exportar un componente.
5. **Facilidad de pruebas**: Son más fáciles de probar de manera aislada, ya que no dependen de módulos intermedios.

**¿Cuándo conviene utilizarlos?**
Conviene usar componentes standalone en las siguientes situaciones:

1. **Aplicaciones nuevas**:
   - Si comienzas un proyecto desde cero, puedes adoptar el enfoque standalone desde el inicio para simplificar la estructura del proyecto y aprovechar las ventajas de esta arquitectura.

2. **Componentes independientes**:
   - Para componentes reutilizables o librerías de UI (como botones, tarjetas, o modal dialogs), donde no necesitas integrarlos en un módulo completo.

3. **Rutas (Lazy Loading)**:
   - En módulos cargados de manera diferida, los componentes standalone pueden ser la opción ideal, ya que pueden ser cargados directamente en una ruta sin necesidad de un módulo asociado.
   ```typescript
   import { Route } from '@angular/router';
   import { StandaloneExampleComponent } from './standalone-example.component';

   const routes: Route[] = [
     { path: 'example', component: StandaloneExampleComponent },
   ];
   ```

4. **Migración progresiva**:
   - Si tienes un proyecto con módulos existentes, puedes migrar poco a poco a componentes standalone en lugar de reestructurar completamente los módulos.

5. **Proyectos pequeños o específicos**:
   - En aplicaciones con pocos componentes, usar componentes standalone puede ser suficiente y evita el uso innecesario de módulos.

**Limitaciones**

1. **Compatibilidad con proyectos existentes**:
   - En proyectos grandes con módulos muy establecidos, puede ser complicado combinar ambos enfoques. Sin embargo, Angular permite mezclar componentes standalone y no-standalone.

2. **Agrupación lógica**:
   - Si tienes muchos componentes que comparten servicios o configuraciones, un módulo podría ser más práctico para organizar estas dependencias.

Los componentes standalone simplifican la arquitectura de Angular al reducir la dependencia de módulos y alinear el framework con tendencias modernas en diseño de componentes. Conviene adoptarlos cuando buscas simplicidad, modularidad y mayor flexibilidad en proyectos nuevos o en escenarios específicos como componentes reutilizables o lazy loading.

<a id="angular-2"></a>

### **¿Podrías describir algunos problemas de rendimiento que hayas enfrentado en aplicaciones Angular y cómo los resolviste?** 💛

[Volver al indice](#angular-base)

Claro, aquí tienes una descripción de problemas de rendimiento comunes en aplicaciones Angular y las estrategias que he utilizado para resolverlos.

---

**1. Renderizado excesivo (Change Detection Ineficiente)**

**Problema:**
- Angular utiliza un sistema de detección de cambios (`Change Detection`) que verifica cada componente en el árbol para detectar actualizaciones. Si no se optimiza, puede provocar renderizados innecesarios, afectando el rendimiento en aplicaciones grandes o con datos dinámicos.

**Solución:**
- **Uso de `OnPush` Change Detection:**
  Configuré el componente con `changeDetection: ChangeDetectionStrategy.OnPush`, lo que indica a Angular que solo actualice el componente si cambian sus entradas (`@Input`) o eventos explícitos como observables.

  ```typescript
  import { ChangeDetectionStrategy, Component } from '@angular/core';

  @Component({
    selector: 'app-my-component',
    template: `<p>{{ data }}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class MyComponent {
    @Input() data!: string;
  }
  ```

- **Desuscripción de Observables:**
  Aseguré que todos los observables y suscripciones se manejaran adecuadamente utilizando operadores como `takeUntil` o librerías como `RxJS`.

---

**2. Carga innecesaria de datos (Lazy Loading ineficiente)**

**Problema:**
- Los módulos o componentes se cargaban todos al inicio (Eager Loading), incluso aquellos que no eran necesarios de inmediato, aumentando los tiempos de carga inicial.

**Solución:**

- **Lazy Loading con Rutas:**
  Implementé la carga diferida (`Lazy Loading`) para módulos relacionados con rutas específicas, de forma que solo se cargaran cuando fueran necesarias.

  ```typescript
  const routes: Routes = [
    {
      path: 'feature',
      loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
    },
  ];
  ```

- **Preloading Strategy personalizada:**
  Para evitar demoras en la carga de módulos críticos, utilicé una estrategia de pre-carga personalizada para cargar solo ciertos módulos cuando el usuario está inactivo.

---

**3. Renderizado lento de listas grandes**

**Problema:**
- En componentes con listas grandes (por ejemplo, una tabla con miles de filas), el renderizado era muy lento debido a que Angular intentaba procesar todos los elementos del DOM.

**Solución:**
- **Uso de Virtual Scroll (Angular CDK):**
  Reemplacé listas convencionales (`*ngFor`) con el `cdk-virtual-scroll`, que solo renderiza los elementos visibles en la pantalla.

  ```html
  <cdk-virtual-scroll-viewport itemSize="50" style="height: 300px;">
    <div *cdkVirtualFor="let item of items">{{ item }}</div>
  </cdk-virtual-scroll-viewport>
  ```

- **Paginación en el backend:**
  Implementé paginación en el backend para limitar la cantidad de datos enviados al cliente, reduciendo el impacto en memoria y procesamiento.

---

**4. Problemas con imágenes grandes**

**Problema:**
- La carga de imágenes grandes o innecesarias causaba tiempos de carga lentos y un impacto significativo en el rendimiento, especialmente en dispositivos móviles.

**Solución:**
- **Lazy Loading de Imágenes:**
  Configuré `loading="lazy"` en las etiquetas `<img>` para que las imágenes se cargaran solo cuando estuvieran cerca de entrar en el viewport.

  ```html
  <img src="path/to/image.jpg" alt="Example" loading="lazy" />
  ```

- **Optimización de imágenes:**
  Implementé herramientas como **ImageMagick** o **Cloudinary** para comprimir y redimensionar imágenes antes de enviarlas al cliente.

---

**5. Demora en formularios complejos**

**Problema:**
- Formularios grandes con validaciones dinámicas ralentizaban la experiencia del usuario.

**Solución:**
- **Optimización de validaciones:**
  - Utilicé validaciones asincrónicas solo cuando eran absolutamente necesarias.
  - Reemplacé validadores complejos con funciones más simples.

  ```typescript
  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  ```

- **División de formularios:**
  Dividí formularios extensos en pasos con componentes separados (wizard), cargando solo la parte visible.

---

**6. API calls repetitivos**

**Problema:**
- Varias partes de la aplicación realizaban solicitudes redundantes al backend, lo que aumentaba el tiempo de respuesta y sobrecargaba el servidor.

**Solución:**
- **Cache en servicios:**
  Implementé cache utilizando el patrón de memoización con RxJS y un `BehaviorSubject` para almacenar y reutilizar los datos en lugar de hacer múltiples solicitudes.

  ```typescript
  private cache = new Map<string, any>();

  getData(url: string): Observable<any> {
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(
      tap(data => this.cache.set(url, data))
    );
  }
  ```

- **Combinar solicitudes (ForkJoin):**
  Agrupé múltiples llamadas a la API en una sola utilizando `forkJoin` o `combineLatest`.

---

**7. Scripts pesados y dependencias innecesarias**

**Problema:**
- La aplicación cargaba muchas librerías de terceros y scripts, aumentando el tamaño del bundle.

**Solución:**
- **Eliminación de dependencias no usadas:**
  Revisé `package.json` y eliminé librerías no esenciales, reemplazándolas con implementaciones nativas o más ligeras.

- **Uso de importaciones específicas:**
  En lugar de importar módulos completos de Angular Material o librerías, importé solo los módulos necesarios.

  ```typescript
  import { MatButtonModule } from '@angular/material/button';
  ```

- **Habilitación de Tree Shaking:**
  Configuré correctamente Webpack y Angular CLI para asegurarnos de que el código no usado se eliminara en el proceso de construcción.

---

Optimizar aplicaciones Angular requiere identificar los cuellos de botella específicos, ya sea en el DOM, la carga de datos o las dependencias. Las herramientas de Angular como `OnPush`, `Lazy Loading` y `Virtual Scroll`, junto con estrategias como el uso de cache y optimización de recursos, pueden mejorar significativamente el rendimiento.

---

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

<a id="rea25"></a>

### **Para que sirven las claves o Keys en React?**

[Volver al indice](#rea-base)

Se usan las claves para diferenciar entre simples elementos DOM virtuales con los que son unicos. Ayudan a React a reciclar elementos DOM existentes para que la libreria pueda ejecutarse y renderizarse mas rápidamente, ya que React recicla los elementos que no fueron modificados de los que si para no renderizarlos cuando no es necesario. Este elemento se usa mas que nada en iteraciones de listas.

Esto optimiza el proceso de **reconciliacion**

El key no afecta el renderizado en si, es por eso que igualmente funciona el render, solo se muestra un warning.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

Su no uso ocasiona

- Renderizados innecesarios, ya que no se pueden identificar que elementos especificos cambiaron
- Pérdida de estado en los componentes (por ejemplo, un input pierde su texto cuando cambia el orden de la lista).

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

<a id="rea31"></a>

### **Cual es la diferencia entre setTimeout() y setInterval()?**

[Volver al indice](#rea-base)

- `SetTimeout` nos permite ejecutar una funcion una vez despues del intervalo de tiempo

```jsx
*setTimeout(sayHi, 1000, "Hola", "John");*
```

- `SetInterval` nos permite ejecutar una funcion repetidamente. Esperando el intervalo, ejecutando y asi sucesivamente.

```jsx
let timerId = setInterval(() => alert('tick'), 2000);

// después de 5 segundos parar
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

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

Es Search Engine Optimization, es lo que hace que un sitio sea encontrado por Google, y HTML hace un aporte con su metadata para que esto suceda. Por ejemplo, no se recomienda usar muchos <h1> en un HTML para no afectar al SEO.

- Describir la pagina con titulos y fragmentos unicos. Uso de <title> y utilizar terminos claros. Todas las paginas del sitio deben tener una meta descripcion para que aparezca la misma en los resultados del buscador

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

<a id="rea40"></a>

### **Qué es el namespacing de JS?**

[Volver al indice](#rea-base)

Namespacing se utiliza para agrupar funciones, variables, etc con un nombre único.  Esto mejora la modularidad en codificación y permite la reutilización del código.

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

<a id="rea43"></a>

### **Funciones de alto nivel / Higher order Function**

[Volver al indice](#rea-base)

Habían muchas funcionalidades que se estaban repitiendo, entonces JS decidio hacerlas nativas, como iteraciones. Funciones de orden mayor es que reciben como parametro los iterables y un callback, que se ejecutaba en cada elemento iterado.

Hoy en dia todo esto esta abstraído y solo pasamos el callback.

Ejemplos puede ser .map, .filter, .reduce

```javascript
// Función de orden superior que toma una función como argumento
function operacionMatematica(x, y, operacion) {
  return operacion(x, y);
}

// Funciones que serán pasadas como argumentos a la función de orden superior
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

// Uso de la función de orden superior con diferentes funciones como argumentos
console.log(operacionMatematica(5, 3, suma)); // Devuelve 8 (5 + 3)
console.log(operacionMatematica(10, 4, resta)); // Devuelve 6 (10 - 4)
console.log(operacionMatematica(6, 2, multiplicacion)); // Devuelve 12 (6 * 2)
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

<a id="rea45"></a>

### **Que es el Scope en Javascript?**

[Volver al indice](#rea-base)

Es el contexto actual de ejecución.

Cuando hacemos referencia a una variable, javascript busca su definicion en cada entorno, o Scope, esto depende de como (var, const, let) y donde la declaremos (fuera o dentro de una funcion).

```javascript
var variable = "global"; // Variable global, todos pueden acceder a ella

function test() { // Tiene acceso a variable y variable1
    var variable1 = "hola"; // Variable local -hola
}

function test2() { // Tiene acceso a variable y variable1
    var variable1 = "chau"; // Variable local - chau
}
```

Entre scopes hay jerarquia. Primero se busca la variable en el mismo scope local, luego en el scope padre y luego el global.

<a id="rea46"></a>

### **Fetch API**

[Volver al indice](#rea-base)

Es una interfaz moderna que permite hacer peticiones HTTP desde el navegador. Es una alternativa a XMLHttpRequest y es más fácil de usar y más potente.

```jsx
fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Otra forma de hacerlo

async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

<a id="rea47"></a>

### **Cómo se pueden crear objetos genéricos?**

[Volver al indice](#rea-base)

```jsx
var myObjeto = new Object({
'nombre': 'Diego',
'apeliido': 'Querales',
'edad': 25,
})
// Salida por consola
{nombre: "Diego", apeliido: "Querales", edad: 25}
```

<a id="js1"></a>

### **Document.ready vs Window.onload**

`Document.ready` se ejecuta despues de cargar todo el HTML. `Window.onload` se ejecuta cuando ya cargo completamente todo el contenido, mas adelante.

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

<a id="mob"></a>

# Desarrollo Mobile

<a id="mob1"></a>

### **¿Qué es el Manifest.xml en Android y qué funciones cumple?**

[Volver al indice](#mob-base)

El Manifest.xml es un archivo de configuración en Android que describe la estructura y los requisitos de una aplicación. Contiene información como los componentes de la aplicación, permisos necesarios, hardware y software requerido, entre otros detalles, y es fundamental para el funcionamiento adecuado de la aplicación en el sistema Android.


<a id="mob3"></a>

### **¿Qué es el Android Runtime y cómo se ejecutan las aplicaciones en Android?**

[Volver al indice](#mob-base)

El Android Runtime es el entorno de ejecución de aplicaciones de Android. Las aplicaciones de Android se ejecutan en el Android Runtime, que utiliza el compilador de tiempo de ejecución ART para convertir el código de la aplicación en código nativo que se ejecuta en el dispositivo.

<a id="mob5"></a>

### **¿Qué es React Native y cómo se compara con otras soluciones de desarrollo móvil?**

[Volver al indice](#mob-base-rn)

React Native es un framework de desarrollo de aplicaciones móviles creado por Facebook. Permite construir aplicaciones híbridas, lo que significa que puedes escribir un único código en JavaScript (con React) y generar aplicaciones nativas para iOS y Android. React Native utiliza un enfoque bridge para interactuar con componentes nativos, lo que lo hace más eficiente que soluciones basadas únicamente en WebViews.

-  Código Compartido: Puedes escribir una sola base de código y reutilizarla en ambas plataformas, reduciendo el esfuerzo de desarrollo y los costos.
- Curva de Aprendizaje: Si ya conoces React, aprender React Native es mucho más fácil que aprender lenguajes nativos como Swift/Objective-C o Kotlin/Java.
- Mantenimiento: Gracias a la base de código compartida, mantener y actualizar aplicaciones para ambas plataformas es más sencillo.
- Ecosistema React: Puedes aprovechar herramientas, librerías, y técnicas de React para desarrollar interfaces de usuario declarativas y reutilizables.
- Hot Reloading: Permite ver cambios en tiempo real durante el desarrollo, acelerando la iteración.

Aunque React Native tiene muchas ventajas, puede no ser la mejor opción para aplicaciones que requieren acceso intensivo a hardware, como juegos de alta gama, donde el desarrollo nativo aún domina. Sin embargo, para la mayoría de aplicaciones comerciales y de consumo, es una excelente solución.

<a id="mob6"></a>

### **¿Como se compara React Native al resto de soluciones?**

[Volver al indice](#mob-base-rn)

**Frente a Soluciones Web (Ionic, Cordova):**

- React Native utiliza componentes nativos reales, mientras que frameworks como Ionic o Cordova renderizan interfaces usando un WebView, lo que puede afectar el rendimiento.
- Las aplicaciones de React Native tienen una experiencia de usuario más fluida y cercana a lo nativo.

**Frente a Desarrollo Nativo Puro (Swift/Objective-C y Kotlin/Java):**

- React Native es más rápido de desarrollar gracias a la reutilización de código, pero puede no ofrecer acceso directo a todas las API nativas de cada plataforma.
- El desarrollo nativo ofrece un control absoluto sobre el hardware y las características, lo que puede ser esencial para aplicaciones con alto rendimiento o personalización extrema.

**Frente a Flutter:**

- Flutter, desarrollado por Google, utiliza un enfoque diferente, renderizando toda la interfaz con su propio motor gráfico (Skia). Esto le da mayor consistencia visual entre plataformas pero puede requerir más recursos en tiempo de ejecución. Aunque se dice que en general Flutter gestiona mucho mejor la performance.
- React Native tiene un ecosistema más maduro debido a su tiempo en el mercado y la adopción masiva por parte de la comunidad.

<a id="mob7"></a>

### **¿Cómo se maneja el estado en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

El sistema de React Native y ReactJs es muy parecido ya que comparten el mismo core. Las formas de manejar el estado son:

**Estado Local (useState y useReducer)**

Se utiliza para manejar el estado dentro de un componente específico.

* useState: Ideal para estados simples y locales.

```jsx
const [count, setCount] = useState(0);
```

* useReducer: Útil para manejar estados más complejos o con lógica de actualización específica.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
    </View>
  );
};
```

**Context API**

Permite compartir el estado entre componentes sin necesidad de pasar props manualmente por cada nivel del árbol. Es útil para aplicaciones con múltiples componentes que necesitan acceder al mismo estado.

```jsx
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <Text>Count: {count}</Text>;
};

const CounterControls = () => {
  const { setCount } = useContext(CounterContext);
  return (
    <Button title="Increment" onPress={() => setCount((prev) => prev + 1)} />
  );
};

const App = () => (
  <CounterProvider>
    <View>
      <CounterDisplay />
      <CounterControls />
    </View>
  </CounterProvider>
);

```

**Estado Global (Librerias externas)**

Para aplicaciones más grandes, donde el estado necesita ser compartido ampliamente, es común usar librerías dedicadas.

* Redux: Se utiliza para manejar estados globales complejos y lógica de actualización avanzada.

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Text, Button, View } from 'react-native';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(counterSlice.actions.increment())} />
      <Button title="Decrement" onPress={() => dispatch(counterSlice.actions.decrement())} />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

```

Otra libreria muy usada tambien es MobX, que es una libreria de manejo de estado simple y escalable.

**Hooks y Librerías para Sincronización del Estado (SWR, React Query)**

Son útiles para manejar estados que dependen de datos remotos o asincrónicos. Permiten manejar la carga de datos, caché y actualización del estado de forma sencilla.

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const App = () => {
  const { data, error } = useSWR('https://api.example.com/data', fetcher);

  if (error) return <Text>Error loading data</Text>;
  if (!data) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

```

<a id="mob8"></a>

### **¿Qué es Expo y cómo se compara con React Native?**

[Volver al indice](#mob-base-rn)

Expo es un conjunto de herramientas para facilitar el desarrollo en React Native, el mas usado es la facilidad de conectar un dispositivo fisico a la app en desarrollo sin tener que lidiar con Android Studio o XCode.

- Entorno Preconfigurado: Incluye una serie de bibliotecas y herramientas que funcionan "out-of-the-box" sin necesidad de configurar proyectos nativos. Aunque esto puede aumentar el peso de la aplicacion.
- Expo Go: Una aplicación que permite probar tu código en dispositivos reales sin necesidad de compilarlo. Simplemente escaneas un código QR y ves los cambios.
- Expo SDK: Ofrece un conjunto de APIs listas para usar (cámara, localización, notificaciones, etc.), simplificando la integración de funcionalidades comunes.
- Expo Dev Tools: Un panel interactivo para gestionar el desarrollo, depuración y compilación de tu proyecto.
- Expo Build: Permite compilar aplicaciones listas para distribución (APK, AAB, IPA) sin necesidad de configurar entornos nativos.

Es mucho mas facil de usar para principiantes, ya que no requiere la pre-configuracion previa de los entornos nativos. Sin embargo, puede tener limitaciones en cuanto a personalización y acceso a ciertas funcionalidades avanzadas.

**Cuando deberia usar expo?**

- Proyectos Simples o MVPs: Si necesitas prototipar rápidamente o crear aplicaciones sin mucha personalización nativa.
- Desarrolladores Principiantes: Es ideal para quienes quieren enfocarse en React Native sin lidiar con la configuración nativa.
- Casos Comunes: Si solo necesitas funcionalidades estándar (cámara, notificaciones, mapas, etc.) que ya soporta el SDK de Expo.

Expo es una excelente herramienta para desarrollar aplicaciones rápidamente y sin complicaciones, especialmente para quienes priorizan la velocidad y simplicidad. La elección entre Expo y React Native depende de las necesidades y limitaciones del proyecto.

<a id="mob9"></a>

### **¿Cómo se maneja la navegación en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

Para la navegacion de una aplicacion de React Native se utiliza generalmente la libreria `react-navigation`. Hay distintos tipos de navegaciones que pueden ser agregadas a la aplicacion.

**Stack Navigation (Navegación en pila):**

Es para navegaciones mas basicas, es decir, de pantalla hacia adelante y hacia atrás. Ejemplo: Un flujo de inicio donde pasas de una pantalla de inicio a detalles y puedes regresar.

```jsx
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```

**Bottom Tab Navigation (Navegación por pestañas):**

Es el tipico menu estatico que aparece por debajo del contenido de la aplicacion con secciones estaticas. Ejemplo: Pestañas para "Inicio", "Buscar" y "Perfil".

```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Search" component={SearchScreen} />
</Tab.Navigator>
```

**Material Top Tabs Navigation (Pestañas superiores):**

Mismo concepto que Bottom Tab Navigation pero con las pestañas en la parte superior de la pantalla. Ejemplo: Pestañas para "Inicio", "Buscar" y "Perfil".

```jsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

<TopTab.Navigator>
  <TopTab.Screen name="Chats" component={ChatsScreen} />
  <TopTab.Screen name="Calls" component={CallsScreen} />
</TopTab.Navigator>
```

**Drawer Navigation (Navegación con menú lateral):**

Es el menu lateral de las aplicaciones mobile que es deslizable. Ejemplo: Un menú lateral para opciones como "Configuración" o "Cerrar sesión".

```jsx
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<Drawer.Navigator>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
```

<a id="mob10"></a>

### **¿Cómo se maneja la persistencia de datos en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

Las aplicaciones mobile pueden ser cerradas diversas veces y es clave tener algun tipo de almacenamiento para poder sobrevivir al cierre o reinicio de la aplicacion.

**AsyncStorage**

Sirve para almacenar datos de tipo clave-valor, muy parecido al concepto de session o local storage de web. Se recomienda para guardar datos simples, como configuraciones o tokens.

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar un valor
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

// Recuperar un valor
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Error reading data', e);
  }
};
```

**Secure Storage**

A veces nos toca guardar datos sensibles de los usuarios, como datos de autenticacion, para eso se usan liberias como `react-native-keychain` o `react-native-secure-storage`, o si se esta usando expo, `expo-secure-store`.

```jsx
import * as SecureStore from 'expo-secure-store';

// Guardar un valor
const storeData = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

// Recuperar un valor

const getData = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Error reading data', e);
  }
};
```

En el caso de `expo-secure-store` se puede usar de la misma forma que `AsyncStorage`, se guardan datos en formato clave-valor.

**Base de Datos Local (SQLite)**

Se utilizan para almacenar grandes volumenes de datos estructurados. Se puede usar bajo el soporte de librerias como `react-native-sqlite-storage` o `expo-sqlite`. se requiere un conocimiento sobre bases de datos para poder armar las queries.

```jsx
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('example.db');

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, name TEXT, age INTEGER);'
  );
});

const insertUser = (name, age) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO users (name, age) VALUES (?, ?);', [name, age]);
  });
};
```

**Bases de datos NoSQL (Realm, WatermelonDB)**

Si el usuario posee mas experiencia con bases de datos noSQL, se pueden usar librerias como `realm` o `watermelonDB` para manejar la persistencia de datos.

**Realm** es ideal para aplicaciones con sincronizacion en tiempo real.

```jsx
import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'int',
    name: 'string',
    age: 'int',
  },
};

const realm = await Realm.open({ schema: [UserSchema] });

realm.write(() => {
  realm.create('User', { id: 1, name: 'John', age: 30 });
});
```

**WatermelonDB** es una base de datos local y reactiva para aplicaciones móviles, que se sincroniza con una base de datos remota. Es ideal para aplicaciones que precizan sincronizacion offline y rendimiento alto en dispositivos mobiles.

```jsx
import { Database } from '@nozbe/watermelondb';

const adapter = new SQLiteAdapter({
  dbName: 'myapp',
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: [Post, Comment],
});
```

**Sincronización con Bases de Datos Remotas**

Se pueden encontrar soluciones en la nube para persistir los datos por fuera del dispositivo en si. Algunas opciones son Firebase Realtime Database, Firestore, AWS Amplify, o GraphQL con Apollo Client.

```jsx
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

const addUser = async () => {
  await usersCollection.add({ name: 'John Doe', age: 25 });
};
```

En conclusion, si se tiene en cuenta el tamaño y Complejidad de los Datos:

Datos simples -> AsyncStorage.
Datos estructurados y grandes -> SQLite, Realm, WatermelonDB.
Seguridad:
Datos sensibles -> Secure Storage.
Sincronización en Tiempo Real:
Firebase, Firestore o bases de datos con sincronización nativa.
Integración con el Estado Global:
Redux Persist para persistir el estado en almacenamiento local.

<a id="mob11"></a>

### **¿Cómo se maneja la autenticación de usuarios en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

Se puede manejar usando un servicio propio, es decir, una autenticacion contra una base de datos propia y un servicio propio, o contra un servicio
de terceros como `Firebase`, `Auth0`, `AWS Cognito`, `Okta`, `OAuth`, `OpenID Connect`, entre otros.

El flujo basico de autenticacion consta de los siguientes pasos:

1. Autenticacion del usuario

Se le pide al usuario que ingrese sus datos en un, casi siempre, formulario en la aplicacion. Tambien
existe la posibilidad de implementar un servicio de autenticacion con Google, Facebook, Twitter, etc.

2. Verificacion de credenciales

Se verifica contra un backend propio o un servicio de terceros la informacion dada por el usuario. Se envian
a traves de una solicitud HTTPS a un servidor.
En caso de que las credenciales sean validadas, se vuelve un token de acceso como JWT.

3. Guardado del token

Como se necesita persistir la sesion del usuario en el celular a pesar de que la aplicacion pueda ser reiniciada, la misma se almacena
de manera segura usando librerias como `SecureStore` de iOS o `AsyncStorage` de React Native, que posee limitaciones de seguridad.
En Android, se puede usar el `Encrypted Shared Preferences` o librerías como `react-native-keychain`

4. Manutencion de la sesion

Como se menciono antes, se necesita el token para validar que el usuario se encuentra loggeado en cada reinicio de la aplicacion, tambien para enviar este token en caso de que se hagan ciertas solicitudes a la API.

Una vez que se cierra la sesion, el token es eliminado.

Otros extras a tener en cuenta son:

- Refresh Tokens: Utiliza un flujo de actualización de tokens para evitar expiraciones frecuentes.
- Time-out de sesión: Maneja expiraciones de sesión y redirige al usuario al flujo de inicio de sesión si el token es inválido.

**Ejemplo practico con Firebase**

Las librerias usadas son `@react-native-firebase/app @react-native-firebase/auth`

```jsx
import { View, TextInput, Button, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Inicio de sesión exitoso', `Bienvenido ${userCredential.user.email}`);
    } catch (error) {
      Alert.alert('Error de autenticación', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

```

Luego almacenamos el token

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    console.error('Error al guardar el token', e);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@auth_token');
    return token;
  } catch (e) {
    console.error('Error al obtener el token', e);
    return null;
  }
};
```

<a id="mob12"></a>

### **¿Cómo se maneja la internacionalización en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

La internacionalización es el proceso de adaptar una aplicación para que pueda ser utilizada en diferentes idiomas y regiones. En React Native, se puede manejar la internacionalización de varias formas:

**Librerías de Internacionalización**

Existen librerías como `i18next`, `react-intl`, `react-native-localize`, `react-i18next`, `react-native-i18n`, entre otras, que facilitan la implementación de la internacionalización en una aplicación React Native.

**Uso de Context API**

Se puede utilizar el Context API de React para manejar el idioma de la aplicación y compartirlo entre los componentes.

```jsx
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();


const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
```

**Uso de Hooks Personalizados**

Se pueden crear hooks personalizados para manejar la internacionalización en los componentes.

```jsx
import { useLanguage } from './LanguageContext';

const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    // Lógica para traducir la clave al idioma seleccionado
    return translations[language][key] || key;
  };

  return { t };
};
```

**Implementación en Componentes**

```jsx
import { Text, Button, View } from 'react-native';
import { useTranslation } from './useTranslation';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Button title={t('login')} />
    </View>
  );
};

```

**Manejo de Traducciones**

Se pueden almacenar las traducciones en archivos JSON o en una base de datos, y cargarlas en la aplicación según el idioma seleccionado.

```json
{
  "en": {
    "welcome": "Welcome to the app",
    "login": "Login"
  },
  "es": {
    "welcome": "Bienvenido a la aplicación",
    "login": "Iniciar sesión"
  }
}
```

**Selección de Idioma**

Se puede permitir al usuario seleccionar el idioma de la aplicación y guardar esta preferencia en el almacenamiento local.

```jsx
import { Button, View } from 'react-native';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <View>
      <Button title="English" onPress={() => handleLanguageChange('en')} />
      <Button title="Español" onPress={() => handleLanguageChange('es')} />
    </View>
  );
};

```




---

<a id="cod"></a>

# Conceptos Codigo Limpio, Objetos y Diseño

<a id="diag1"></a>

### **Ejemplo de Pseudo-código**

[Volver al indice](#cod-base)

```pseudocode
1. pedir el primer numero
2. se guarda el numero en la variable numero
3. se pide el 2do numero
4. se guarda el 2do numero en la variable numero 2
5. preguntarle al usuario que cuenta quiere hacer
6. si el usuario quiere division se chequea que la varieble 2 no sea 0
7. si alguna de las variebles es cero debe aparecer un perro rojo
8. realizar la cuenta
9. guardar resultado en la varieble resultado
10. se muestra el resultado

1. Solicitar el nombre al usuario
2. Guardar nombre en la variable “nombre”
3. Solicitar la cantidad de horas trabajadas
4. Guardar la cantidad en la variable “cantHoras”
5. calcular el importe a abonar haciendo: importeTotal = cantHoras * VALOR_HORA
6. Mostrar por pantalla: “El empleado ”, nombre, “ debe cobrar: $”, importeTotal
```

<a id="diag2"></a>

### **Diagramas de Nassi-Schneiderman**

[Volver al indice](#cod-base)

![Diagrama de Nassi-Schneiderman](src/diag1.png)

**Mostrar mensajes por pantalla**

Para representar una salida por pantalla, debe utilizarse un rectángulo, en cuyo ángulo superior izquierdo lleve un pequeño cuadrado marcando una S de Salida.

![Diagrama de Nassi-Schneiderman](src/diag2.png)

**Leer datos desde el teclado**

La E en lugar de la S nos marca una Entrada, es decir, que el programa espera que el usuario ingrese un dato.

En el rectángulo, debe ir el nombre de la variable en dónde se va a almacenar el dato. Asignación de valores a variables.

![Diagrama de Nassi-Schneiderman](src/diag3.png)

**Asignar valores a variables**

Para asignarle un dato a una variable, se debe poner a la izquierda de la sentencia el nombre de la variable que va a recibir un valor, el signo “=” y el valor a asignarle. Este valor puede ser:

- Un valor propiamente dicho.
- Una constante (se le asigna el valor de la constante).
- Una variable (se le asigna el valor de la variable).
- El resultado de una operación aritmética o lógica.

Por ejemplo:

![Diagrama de Nassi-Schneiderman](src/diag4.png)

Como sucede en este caso, en el que la variable importeTotal recibe el resultado del producto del valor de una constante por una variable, el valor puede darse por alguna operación aritmética o lógica.

**Operadores**

Los operadores son la herramienta que tenemos para indicarle al programa que debe realizar cierta operación. Existen operadores aritméticos (suma, resta, etc..), de relación (Numero mayor a otro numero, etc..) o lógicos (AND, OR, XOR..).

![Diagrama de Nassi-Schneiderman](src/diag5.png)

```jsx
int a = 8;
int b = 3;
System.out.println(“La suma de a + b es ” + (a + b));
```

**Decisiones simples**

![Diagrama de Nassi-Schneiderman](src/diag6.png)

```jsx
if (a>b) {
  System.out.println(“el valor de a es mayor que el de b”);
} else {
  System.out.println(“el valor de b es mayor o igual que el de a”);
}
```

En caso de que un empleado trabaje más de 40 horas, el valor hora aumentará en un 15%. De esta forma, luego de pedirle al usuario que ingrese la cantidad de horas trabajadas, debemos resolver cuánto es el sueldo real, antes de multiplicarlo por esta cantidad

```php
// declaración de constantes
const int VALOR_HORA_CAT1 = 20;
const int VALOR_HORA_CAT2 = 30;
const int TOPE_HORAS = 40;

// declaración de variables
string nombre;
float cantHoras;
float importeTotal;
```

**Decisiones múltiples. Sentencia switch**

A diferencia de un si condicional, existen oportunidades en que se debe decidir entre más de dos posibilidades. Las decisiones múltiples también se basan en una comparación, pero que puede resolver múltiples resultados.

Hasta ahora, a los programadores del ejercicio se les pagaba según la cantidad de horas trabajadas. Vamos a cambiar esta estrategia de pago y utilizaremos algo más real con el mundo de los sistemas. Dependiendo del Rol que cumpla, podemos decir que un programador Junior está en la categoría 1, un semi-senior en la categoría 2 y un senior en la categoría 3.

Vamos a solicitarle entonces, un dato más al usuario. La categoría del programador. De esta forma, las constantes y variables quedarían de este modo:

```php
// Declaración de constantes
const int VALOR_HORA_CAT1 = 20;
const int VALOR_HORA_CAT2 = 30;
const int VALOR_HORA_CAT3 = 40;
const int ERROR = -1;

// Declaración de variables
string nombre;
float cantHoras;
float importeTotal;
int categoria;
```

![Diagrama de Nassi-Schneiderman](src/diag7.png)

La variable categoria nos indica qué es lo que estamos evaluando. Los números 1, 2 y 3 indican las opciones posibles. Por último, este diagrama incluye un valor default (por defecto), el cual se ejecuta siempre y cuando la condición o variable evaluada no corresponda con ninguna opción.

![Diagrama de Nassi-Schneiderman](src/diag8.png)

**While (ciclo 0-n)**

Se lo llama así porque puede ser que no haya posibilidad de *entrar* al ciclo (porque ya antes de entrar la condición del ciclo no se cumple) y porque, una vez que se entró al ciclo, lo único que permitirá que se salga es que la condición deje de cumplirse. Este ciclo es conocido como *while* y se caracteriza porque la condición de permanencia antecede al bloque de instrucciones que conforman el ciclo:

![Diagrama de Nassi-Schneiderman](src/diag9.png)

```jsx
while (condicion_de_permanencia) {
  instruccion o bloque de instruccciones;
}
```

Es muy probable que el ciclo esté controlado por una o más variables que, incluidas dentro de la condición de permanencia, determinen a partir de su *estado* (si la condición relacionada con la variable de control se cumple o no) y, por lo tanto, si se permanece dentro del ciclo o si sale y continúa con el resto del programa. Por eso, podemos ver también este ciclo de esta manera:

![Diagrama de Nassi-Schneiderman](src/diag10.png)

Uno de los usos habituales de los ciclos es el ingreso validado de valores. Como muchas veces los programas interactúan con usuarios y éstos casi inevitablemente cometerán errores, es muy importante que los datos que vamos a usar en nuestros programas estén controlados, siendo sus valores acordes a lo que esperamos.

Veamos un ejemplo: queremos que alguien ingrese el número de día de la semana para que nosotros, a partir de eso, hagamos algo (no importa qué). Por eso, controlaremos que el número esté dentro del rango esperado (un número entre 1 y 7), caso contrario deberíamos informar del error y volver a pedir el número. El diagrama es el siguiente:

![Diagrama de Nassi-Schneiderman](src/diag11.png)

```java
int numeroDeDia;
System.out.print("Ingresa el numero de dia de la semana (1 a 7)");
numeroDeDia = Integer.parseInt(input.nextLine());
while (numeroDeDia < 1 || numeroDeDia > 7) {
  System.out.print("Me parece que te equivocaste. " +
    "Ingresa el numero de dia de la semana " +
    "asegurandote de que sea un numero " +
    "entre el 1 y el 7 (inclusive):");
  numeroDeDia = Integer.parseInt(input.nextLine());
}
```

**Do-while (ciclo 1-n)**

Se lo llama *ciclo 1-n* porque, a diferencia del *while*, su condición de permanencia se escribe y chequea luego de ejecutar el bloque de instrucciones que conforman el ciclo. Por lo tanto, siempre se entrará al ciclo aunque, al igual que en el caso de *while*, una vez que se entró al ciclo sólo se permitirá salir de él cuando la condición deje de cumplirse.

![Diagrama de Nassi-Schneiderman](src/diag12.png)

```java
do {
  instruccion o bloque de instruccciones;
} while (condicion_de_permanencia);
```

Haciendo un paralelo con lo que dijimos anteriormente para el while, podemos ver a este ciclo de esta manera:

![Diagrama de Nassi-Schneiderman](src/diag13.png)

Es importante aquí resaltar que no hay dos puntos de actualización de la variable de control, y que éste es apenas se ingresa al ciclo, ni antes ni después.

Veamos el ejemplo de la carga del día de semana tal como se haría con este ciclo. Dado que el dato se carga apenas antes de ser procesado, y dentro del ciclo, en caso de desear un tratamiento especial en caso de error implicaría que usemos un *if* para mostrar el problema. Para hacer eso, aconsejamos usar el ciclo *while*.

<a id="cod1"></a>

### **¿De qué trata el código limpio?**

[Volver al indice](#cod-base)

- Es un codigo facil de leer, entender y modificar
- Se recomienda leer el código de otras personas para aprender como son las distintas implementaciones para seguir limpiando nuestro código.
- No es posible escribir codigo perfecto a la primera, se consigue mediante un proceso de iteracion continuo que lo va mejorando
- La refactorizacion es segura ya que esta pensada la existencia de los Test Unitarios
- Es recomendable programar en ingles ya que los lenguajes estan en ingles y la mayoria del codigo tambien, las librerias, etc..

<a id="cod2"></a>

### **Nombres Significativos en Codigo Limpio**

[Volver al indice](#cod-base)

En el dia a dia nombramos muchas cosas (clases, paquetes, ficheros, etc..), se deben aclarar nombres claros.

Se deben buscar nombres que revelen intención, es decir:

DON´T

```
int d; // Day
int m; // Month
int y; // Year
```

DO

```
int dayOfBirth;
int monthOfBirth;
int yearOfBirth;for (int i = 0; i < numberOfRequests; i++){
    processRequest(requests.get(i));
}
```

- Con el nombre en si mismo ya se debe saber la intencion de la variable y lo que almacena.
- En el caso de los bucles for (como se puede ver en el ejemplo con el int i) se pueden aceptar las declaraciones de variable de una sola letra ya que se realizan solo para hacer iteraciones

Tambien se debe evitar la desinformacion

- Se deben evitar los nombres largos y poco significativos, por ejemplo `ServiceForEfficientUpdateMysqlDatabase` vs `ServiceForEfficientBackupMysqlDatabase`, son largos, podriamos decir que son explicativos, pero a simple vista pueden ser confundidos ya que solo cambia una palabra de ellas entre si.
- Otro ejemplo es `Map<Integer, String> employeeList`, ¿Es realmente una lista?, no, es un mapa, confunde al programador.
- Otro ejemplo son dos clases, una llamada `ProductData` y otra `ProductInfo`, ¿Cual es la diferencia entre Data e Info? Podrian ser lo mismo

Se deben buscar nombres pronunciables, que sean faciles de buscar. Es mejor elegir un nombre largo a uno corto que no deja claro su significado

DON´T

```
public class InfRcrd {
    private String nm;
    private String snm;
}
```

DO

```
public class Employee {
    private String name;
    private String surname;
}
```

- Se deben evitar las abreviaciones innecesarias
- Los nombres de las clases deben ser nombres, y las funciones deben ser verbos. Es decir, una clase NO debe llamarse `createEmployee`, y un metodo NO deberia llamarse `EmployeeName` ya que no corresponde con su proposito.

<a id="cod3"></a>

### **Dependency Inversion Principle**

[Volver al indice](#cod-base)

Los sistemas mas flexibles son los que dependen de abstracciones y no concreciones. En Java significa que se debe depender de interfaces y clases abstractas, no de implementaciones directas. Hace necesario un mecanismo que nos cree las instancias de las implementaciones que queremos.

La clase `Switch` no depende directamente de la clase `LightBulb`, sino que depende de la abstracción `SwitchableDevice`. Esto permite que `Switch` sea más flexible y pueda controlar cualquier dispositivo que implemente la interfaz `SwitchableDevice`, no solo la bombilla. Además, la clase `LightBulb` sigue cumpliendo con el DIP al depender de una abstracción (`SwitchableDevice`) en lugar de depender directamente de `Switch`. Esto facilita la reutilización y el mantenimiento del código, ya que los componentes son más independientes y menos propensos a cambios.

```javascript
// Abstracción para un dispositivo que se puede encender y apagar
class SwitchableDevice {
    turnOn() {} // Método para encender el dispositivo
    turnOff() {} // Método para apagar el dispositivo
}

// Clase para representar una bombilla
class LightBulb extends SwitchableDevice {
    turnOn() {
        console.log("Light bulb turned on");
    }

    turnOff() {
        console.log("Light bulb turned off");
    }
}

// Clase para representar un interruptor
class Switch {
    constructor(device) {
        this.device = device;
    }

    press() {
        if (this.isOn) {
            this.device.turnOff();
            this.isOn = false;
        } else {
            this.device.turnOn();
            this.isOn = true;
        }
    }
}

// Uso de las clases
const lightBulb = new LightBulb(); // Creamos una bombilla
const switchButton = new Switch(lightBulb); // Creamos un interruptor y lo asociamos con la bombilla

switchButton.press(); // Output: Light bulb turned on
switchButton.press(); // Output: Light bulb turned off

```

<a id="cod4"></a>

### **Concepto SOLID**

[Volver al indice](#cod-base)

Propuesto por Robert C. Martin

S -> Single Responsibility Principle (Principio de responsabilidad unica)

O -> Open-Closed Principle (Principio abierto-cerrado)

L -> Liskov Substitution Principle (Principio de Sustitucion de Liskov)

I -> Interface Segregation Principle (Principio de segregacion de interfaz)

D -> Dependency Inversion Principle (Principio de inversion de dependencia)

Nos ayudaran a

- Crear software escalable con nuevas funcionalidades
- Crear una arquitectura limpia y mantenible
- Escribir Código mas facil de leer y entender
- Módulos con alta cohesion y bajo acoplamiento

<a id="cod5"></a>

### **Concepto DRY**

[Volver al indice](#cod-base)

Don’t Repeat Yourself, si hay una pieza de programación que se repite en mas de un lugar, se debe crear una función de la misma

<a id="cod6"></a>

### **Concepto KISS**

[Volver al indice](#cod-base)

Keep it Simple Stupid, no escribir codigo que nadie pueda entender o leer, mantener todo simple

<a id="cod7"></a>

### **Concepto YAGNI**

[Volver al indice](#cod-base)

You Aren’t Gonna Need it! No escribir codigo de mas solo porque puede que lo necesites mas adelante. Implementar algo solo si es necesario en el momento

<a id="cod8"></a>

### **Concepto LOD**

[Volver al indice](#cod-base)

Law Of Demeter, quien puede hablar con quien, una unidad puede comunicarse solo con sus unidades cercanas

<a id="cod9"></a>

### **Funciones Limpias**

[Volver al indice](#cod-base)

- Las funciones deben ser claras, concisas, faciles de leer y modificar
- Deben ser pequeñas, deben hacer una unica cosa, un unico nivel de abstraccion. Debemos separar lo mas posible todas las funciones, haciendo que sean reutilizables.
- No deben recibir muchos parametros
- No tienen efectos secundarios por fuera de su proposito principal
- Devuelven excepciones en lugar de codigos de error

<a id="cod10"></a>

### **Unico Nivel de abstraccion**

[Volver al indice](#cod-base)

Separar las responsabilidades en las entidades correspondientes.

DON´T

```java
public class Person {
    public void drive (Car car) {
        car.openDoor();
        car.setDriver(this);
        // Esto no es responsabilidad de la Persona, es responsabilidad del Vehiculo
        car.getBattery().connect();
        car.setEngine().start();
    }
}
```

DO

```java
public class Car {
    Battery battery;
    Engine engine;    public void start(){
        battery.connect();
        engine.start();
    }
}public class Person {
    public void drive (Car car){
        car.openDoor();
        car.setDriver(this);
        car.start();
    }
}
```

<a id="cod11"></a>

### **Manejo limpio de Parametros**

[Volver al indice](#cod-base)

Se deben evitar las funciones que reciben mas de 3 argumentos, muchos argumentos es una mala encapsulación. La mejor funcion es la que menos argumentos recibe.

DON´T

```java
public User createUser(String username, String password, String name, String lastname, String address);public Circle createCircle(double x, double y, double radius)
```

DO

```java
public User createUser(UserFormData userFormData)// Pasamos x e y a un objeto "Point" (centro del circulo) que es mucho mas explicativo
public Circle createCircle(Point center, double radius)
```

<a id="cod12"></a>

### **Cuales son los beneficios de una Code Review?**

[Volver al indice](#cod-base)

Los objetivos clave de la revisión de código son identificar errores de desarrollo iniciales y facilitar una base de código mantenible. El proceso de revisión de código puede ayudar a su equipo a prever posibles problemas técnicos que son mucho más fáciles de abordar en una etapa temprana.

La revisión de código resulta en varios otros beneficios para sus proyectos y equipo; lo más significativo: menos defectos, mejor intercambio de conocimientos, estándares más consistentes y mejor cumplimiento.

**Menos defectos**

A menudo es más fácil para un revisor con una perspectiva externa identificar errores estructurales (por ejemplo, código muerto, errores de lógica o algoritmos, preocupaciones de rendimiento o arquitectura, etc.) y errores funcionales (cuando el código no funciona como se esperaba).

Incluso las revisiones de código cortas e informales pueden tener un impacto significativo en la calidad del código y la frecuencia de errores.

**Compartir conocimiento**

El valioso conocimiento que su equipo comparte durante el proceso de revisión de código se relaciona principalmente con la funcionalidad de una aplicación específica, su dominio y su lógica empresarial. También cubre las mejores prácticas de codificación, incluyendo técnicas de optimización y refactorización.

El intercambio de conocimientos garantiza que todos los miembros del equipo estén en la misma página y fortalece la comunicación y cooperación positivas.

**Standards Consistentes**

La revisión de código garantiza que los miembros de su equipo sigan la guía de estilo acordada. La consistencia en una base de código hace que sea más fácil de leer y comprender, previene errores y facilita la colaboración entre desarrolladores regulares y migratorios. El código legible es más reutilizable, sin errores y a prueba de futuros cambios.

El autor del código puede no ser capaz de juzgar la legibilidad de su fragmento de código tan fácilmente como lo puede hacer un revisor. Seguir estándares consistentes hace que la cooperación entre autores y revisores de código sea más fácil.

**Compliance**

La revisión de código es una excelente manera de evitar trampas técnicas comunes. Por ejemplo, si su aplicación tiene requisitos estrictos de seguridad, su especialista en seguridad local debería revisarla para asegurarse de que cumpla con los requisitos de cumplimiento.

Un revisor también puede detectar y reemplazar dependencias externas recién introducidas con licencias inapropiadas o vulnerabilidades conocidas antes de que aparezcan en producción.

Que puede suceder si evito una Code Review?

**Menos Calidad de Código estructural**

La falta de revisión de código puede afectar la calidad estructural del código, haciéndolo ilegible y difícil de mantener.

**Menos Calidad de código Funcional**

Eludir la revisión de código puede afectar negativamente la calidad funcional del código. El código de baja calidad, a su vez, disminuye la calidad del producto.

**Se comparte poco conocimiento**

La falta de revisión de código puede hacer que algunos miembros de tu equipo pierdan información importante. Esto puede llevar a una situación en la que varios miembros del equipo estén implementando funcionalidades similares en lugar de reutilizar la solución existente.

Además, la falta de compartir conocimientos adecuadamente puede resultar en la pérdida de algunas funcionalidades empresariales reutilizables.

**Re-trabajo**

La falta de transparencia y retroalimentación temprana en tu equipo puede requerir retrabajo en una etapa posterior. Por ejemplo, mientras trabajan en dos módulos diferentes, varios miembros del equipo pueden incorporar diferentes enfoques técnicos. Para hacer que la base de código sea consistente, uno de los enfoques tendrá que ser refactorizado.

Este tipo de situación puede llevar a conflictos interpersonales entre los miembros del equipo, así como trabajo adicional.

**Posibles problemas técnicos**

Sin revisión de código, tu equipo tiene una mayor probabilidad de introducir problemas de seguridad que afecten a los usuarios finales. Estos problemas podrían llevar a brechas de datos sensibles, vulnerabilidad a ataques de ransomware y otras consecuencias negativas para tus clientes y la reputación de tu empresa...

<a id="cod13"></a>

### **Que tipos de Code review existen?**

[Volver al indice](#cod-base)

**Peer Review**

La revisión por pares permite que varios miembros del equipo revisen el código en diferentes momentos. Su conveniencia lo convierte en un tipo de revisión popular.

Con la ayuda del sistema de control de versiones, el autor pone el código a disposición de otros miembros del equipo para su revisión. Después, el autor comienza a trabajar en otra tarea mientras sus compañeros realizan la revisión. Diversas herramientas y estrategias de ramificación facilitan el proceso.

La revisión por pares puede ser interna o externa. Cuando su equipo realiza una revisión interna por pares, es una excelente manera de mejorar el intercambio de conocimientos. Su equipo también puede optar por la ayuda de un especialista externo con experiencia específica que no forma parte del equipo.

**Specialist Review**

La revisión de un especialista es un ejemplo de práctica de revisión de código entre equipos.

A veces, un fragmento de código puede requerir la revisión de un especialista que tiene habilidades específicas y conocimientos profundos en un área particular. Muy a menudo, este tipo de especialista no forma parte del equipo de desarrollo.

La revisión de un especialista podría ser una revisión arquitectónica, de seguridad o de rendimiento. Este tipo de revisión puede ser requerida periódicamente o a pedido.

**Instant Code Review**

La revisión instantánea de código permite que varios miembros del equipo revisen el código simultáneamente. Por lo general, se lleva a cabo como programación en pareja: cuando dos miembros del equipo escriben código y lo revisan línea por línea.

Este enfoque puede ser apropiado para dos desarrolladores de aproximadamente el mismo nivel de madurez que trabajan juntos en un problema empresarial complejo. También es útil si los desarrolladores más senior quieren ayudar a los desarrolladores junior a mejorar sus habilidades técnicas: un desarrollador senior codifica y explica lo que está haciendo línea por línea, mientras que un desarrollador junior observa y aprende. El mismo principio se aplica a la integración, cuando un recién llegado observa y escucha a otro miembro del equipo codificando y explicando las ideas esenciales línea por línea.

<a id="cod14"></a>

### **Domain Driven Design**

[Volver al indice](#cod-base)

Este diseño se enfoca en el dominio del problema, es decir, en el problema que se está tratando de resolver. Se enfoca en el lenguaje que se usa para describir el problema y en cómo se resuelve. Se basa en la idea de que el diseño de software debe reflejar el dominio del problema, y no al revés.

Por ejemplo, para desarrollar el software de un hospital, debo tener en cuenta las necesidades del usuario y sobre todo, si es necesario, un marco juridico, mas si se trata de informacion sensible sobre pacientes.

**Software del modelo del dominio anemico**: No tiene un conocimiento sobre el dominio donde el software se desempeña.

**Software del modelo del dominio rico**: Tiene un conocimiento profundo sobre el dominio donde el software se desempeña.

Se deben conocer las reglas, casos de uso, y las necesidades del usuario para poder desarrollar un software que se adapte a las necesidades del usuario. Se deben conocer los datos que necesitan recopilar los medicos, las enfermeras, y los pacientes, y cómo se deben almacenar y procesar esos datos.

<a id="cod15"></a>

### **¿Qué es un patrón de diseño?**

[Volver al indice](#cod-base)

Un patrón de diseño es una solución descubierta para un problema informático que se presenta recurrentemente y de una forma especifica, para que sea reutilizada en otros desarrollos en cualquier otro lenguaje.

<a id="cod16"></a>

### **En qué se inspiran los patrones de diseño?**

[Volver al indice](#cod-base)

Se inspiran en los patrones de construcción en la arquitectura, en esa disciplina se usa el mismo concepto para la comunicación entre colegas y en otros procesos de la disciplina.

<a id="cod17"></a>

### **¿Qué se obtiene con la implementación de patrones de diseño?**

[Volver al indice](#cod-base)

- **Reutilización de código**: Se puede reutilizar el código que ya ha sido probado y que se sabe que funciona.
- **Facilita la comunicación**: Los patrones de diseño permiten que los desarrolladores se comuniquen de una manera más efectiva.
- **Facilita el mantenimiento del código**: Los patrones de diseño permiten que el código sea más fácil de mantener.
- **Facilita la escalabilidad del código**: Los patrones de diseño permiten que el código sea más fácil de escalar.

<a id="cod18"></a>

### **¿Para qué sirven los patrones de diseño?**

[Volver al indice](#cod-base)

Son soluciones basándonos en la experimentación de problemas comunes y recurrentes en varios proyectos de programación. Algunos pueden parecer abstractos en su explicación, le delegan al diseñador el esfuerzo de reconocer el problema y adaptar la solución. Son utilizados también como un facilitador de la comunicación, es decir, si todos los especialistas de IT conocen estos patrones de diseño, pueden ver cualquier proyecto y ya intuir como funciona, y cuál es la idea detrás de su tipo de organización. Son diseños orientados al cambio.

<a id="cod19"></a>

### **¿Cuáles son los elementos de un patrón de diseño?**

[Volver al indice](#cod-base)

Los elementos de un patrón de diseño incluyen el nombre del patrón, que es el nombre por el cual el patrón es reconocido o conocido. Puede haber más de un nombre para un mismo patrón.

<a id="cod20"></a>

### **¿Cuáles son los tipos de patrones de diseño?**

[Volver al indice](#cod-base)

- **Creacionales**: Se encargan de la creación de objetos, tratan de abstraer el proceso de creación de objetos. Resuelven problemas relacionados con la creación o instanciacion de objetos
- **Estructurales**: Se encargan de la composición de clases o de objetos. Resuelven problemas relacionados a la estructura y composición interna de los objetos, como problemas de asociación y agregación. No son fáciles de entender a la primera, y la mayoría son muy abstractos.
- **Comportamiento**: Se encargan de la comunicación entre objetos.  Estudian el comportamiento orientado a la comunicación entre objetos y conjuntos de objetos
- **De arquitectura**: Son patrones a nivel componente, normalmente operan en algún tipo de capa lógica. Expresan un esquema organizativo fundamental. El primer patrón postulado que define a este en GoF es el MVC
- **De interacción**: La primera aplicación de este se dio en el diseño de interfaces de usuarios. Son 5 patrones de interfaz, Windows per task, Few Panes, Standard Panes, Nouns and Verbs y Short Menú.
- **Del GRASP**: Son patrones generales de software relacionados con la asignación de responsabilidades. Son una serie de buenas prácticas de aplicación recomendable en el diseño de software que provienen de autores anteriores y paradigmas previos.
- **De negocio**: Obedecen a situaciones de negocio específico
- **Dialécticos**: Son patrones de bajo nivel específicos para un lenguaje de programación o entorno concreto

<a id="cod21"></a>

### **¿Qué es la intención y motivación de un patrón de diseño?**

[Volver al indice](#cod-base)

La intención y motivación de un patrón de diseño se refiere a un resumen del problema que resuelve este patrón. Es un párrafo breve que explica su necesidad.

<a id="cod22"></a>

### **¿Qué es la aplicabilidad de un patrón de diseño?**

[Volver al indice](#cod-base)

La aplicabilidad de un patrón de diseño menciona los usos más comunes y los criterios para aplicar cierto patrón. Suelen cambiar mucho con el tiempo dependiendo de la evolución de algunos frameworks o lenguajes.

<a id="cod23"></a>

### **¿Qué es la estructura de un patrón de diseño?**

[Volver al indice](#cod-base)

La estructura de un patrón de diseño es una enumeración y descripción de las entidades o clases concretas y abstractas, que explican los roles dentro del patrón. Pueden ser pequeños diagramas de clases que describan las clases e interfaces participantes o componentes del patrón.

<a id="cod24"></a>

### **¿Quiénes son los participantes de un patrón de diseño?**

[Volver al indice](#cod-base)

Los participantes de un patrón de diseño son tanto las clases abstractas como concretas que participan en el patrón en las documentaciones.

<a id="cod25"></a>

### **Patrones Estructurales**

[Volver al indice](#cod-base)

- **Adapter**: Se adapta a un determinado objeto para que pueda ser usado por otro, dado que de otro modo no se podría. Su nivel de uso es muy alto
- **Bridge**: Nos permite separar a una abstracción de su implementación. Su uso es nivel medio a bajo
- **Composite**: Permite, ayuda y simplifica la forma de tratar a objetos simples y compuestos de un mismo modo. Su uso es medio
- **Decorador**: Suma o añade funcionalidad a un objeto de manera dinámica. Su empleo es medio, se emplea usualmente con Composite.
- **Facade**: Provee de una interfaz o punto de entrada para acceder a la funcionalidad de un grupo de objetos de un sub sistema. Su utilización es alto.
- **Flyweight**: El patrón busca reducir la redundancia de objetos que viven en memoria cuando se trata de objetos pequeños con la misma información. Su empleo es medio, alto.

<a id="cod26"></a>

### **Patrones Creacionales**

[Volver al indice](#cod-base)

- **Singleton**: Se ocupa de que exista una unica instancia de un determinado objeto. Es muy usado
- **Factory Method y/o Factory Simple**: Busca simplificar la creacion de objetos de una determinada familia definiendo una interfaz en comun. Su nivel de uso es alto.
- **Abstract Factory:** Busca centralizar la fabricación de objetos de distintas familias en únicamente un lugar. Su empleo es bajo.
- **Builder**: Se ocupa de construir objetos complejos. Su empleo es bajo.
- **Prototype**: Nos permite crear una copia exacta (o casi) de un objeto en memoria directamente sin necesidad de interactuar con su caso. Su utilización es bajo.
- **Object Pool**: No es un patrón GoF. Permite generar, tener, mantener y reutilizar una serie de objetos en memoria para reducir el trabajo de los Garbage Collector. Su uso es medio a alto.

<a id="cod27"></a>

### **Patrones Comportamiento**

[Volver al indice](#cod-base)

Como los objetos se van a comportar y a cambiar su comportamiento.

- **State**: Suele presentarse cuando es necesario que un objeto modifique su comportamiento cuando cambia su estado interno (Muy usado en React). Empleo alto.
- **Strategy**: Permite disponer de varios métodos para resolver un problema y permitir elegir cual de ellos se usara en tiempo de ejecución. Uso alto.
- **Observer**: Define una dependencia entre un objeto determinado a muchos otros (llamados observadores) de manera que cuando se produce un cambio de estado en el sujeto observado, los observadores dependen de el para que el resto se actualice solo. Uso alto.
- **Mediator**: Es cuando se define que un objeto coordine la comunicación entre objetos de distintas clases y que no fueron diseñados para comunicarse entre si. Empleo medio a bajo.
- **Command**: Encapsula una operación en un objeto, permitiendo ejecutar esa operacion sin conocer el contenido de la misma. Empleo medio.
- **Template method**: Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos. Esto permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura. Uso medio a bajo
- **Memento**: Permite volver a estados anteriores de un objeto y/o sistema. Uso medio bajo
- **Iterator**: Permite recorrer sobre objetos compuestos independientemente de la implementación de los mismos
- **Interpreter**: Dado un lenguaje, define una gramática para dicho lenguaje, asi como las herramientas para interpretarlo. Uso bajo.
- **Chain of Responsability**: Permite establecer la linea que deben llevar los mensajes para que los objetos hagan la tarea indicada
- **Visitor**: Permite definir nuevas operaciones sobre una jerarquía de clases sin cambiar las clases sobre las que opera. Uso bajo

<a id="cod28"></a>

### **Excepciones en lugar de codigos de error**

[Volver al indice](#cod-base)

Conviene encerrar todo nuestro codigo que puede fallar dentro de un try/catch y manejarlo mediante el mismo que logear los errores al momento en que suceden, el flujo normal queda mucho mas claro.

DON´T

```java
public void restoreDatabase(){
    if (state() == 'OK'){
        realizoUnaAccion();
        if (state() == 'OK'){
            Logger.log("Todo salio bien");
        }
        else {
            Logger.log("Error");
        }
    }
    else {
        Logger.log("Error");
    }
}
```

DO

```java
public void restoreDatabase(){
    try {
        realizoUnaAccion(); // Throws excepcionUna
        realizoOtraAccion(); // Throws excepcionDos
        Logger.log('Todo Salio Bien')
    }
    catch (excepcionUna e){
        Logger.log("Ocurrio un error");
    }
    catch (excepcionDos e){
        Logger.log("Ocurrio un error");
    }
}
```

Tambien seria ideal separar las funciones try/catch en una sola funcion, asi tenemos los caminos por separado. Cada funcion puede tratar con un solo nivel de abstraccion.

```java
public void restoreDatabase(){
    try {
        realizoTodasLasAcciones(); // Throws excepcionUna y excepcionDos
    }
    catch (excepcionUna e){
        Logger.log("Ocurrio un error");
    }
    catch (excepcionDos e){
        Logger.log("Ocurrio un error");
    }
}
```

<a id="cod29"></a>

### **Manejo de Comentarios en el codigo**

[Volver al indice](#cod-base)

Se nos enseña mucho que debemos comentar mucho nuestro codigo. El buen codigo deberia poder leerse con casi ningun comentario.

- Solo agregar comentarios cuando es estrictamente necesario
- Los comentarios se desactualizan muy rapidamente ya que el codigo cambia mucho, son muy complicados de mantener, por eso no son aconsejables
- Si el codigo tiene demasiados comentarios es porque no se entiende (Refactorizacion necesaria) o porque los comentarios son demasiado obvios (eliminarlos en ese caso)
- Los comentarios de Javadocs en una API publica si son comentarios utiles.

DON´T

```java
// --- En este caso el comentario esta ya que la condicion del if no es lo suficientemente explicativa por si misma ---

// Check if password is secure
if (password != null && password.length > 9 && !password.contains(username)){}
// --- Comentario generado automaticamente por javadoc, no nos suma nada, es innecesario ---

/*
* @param title The title of the book
* @param descripcion The description of the book
*
*/
public void addBook(String title, String description){}

// --- NUNCA dejar codigo comentado pensando que lo vamos a usar en un futuro, para eso usamos control de versiones ---

//public void oldWayOfAddingBook(Request request){}
```

DO

```java
// --- Reemplazamos la condicion confusa por una funcion que resume lo que hace ---

if(isSecure(password))
// --- Se explican cosas que suman al codigo, por ejemplo, que busca matchear un regex que no se puede ver a simple vista ---
// Matches Date in format 17-09-2022 18:05:15
Pattern.matches(regexDate, date);

// --- Se dejan cosas en TODO para un futuro ---
// TODO expect this method to change when..
public void login (User user) {}
```

<a id="cod30"></a>

### **Acomplamiento artificial**

[Volver al indice](#cod-base)

Los elementos que no dependan entre si no deben estar acoplados. Por ejemplo, en el caso de PI dentro del ejemplo, nos conviene hacer una variable global del mismo, ya que es un valor que puede ser usado por cualquier otro elemento del codigo y no es algo exclusivo del Circulo.

```java
public class Circle {
    private static final Double PI = 3.14159265359;
    private Double radius;
    public Circle(Double radius) {
        this.radius = radius;
    }
    public Double calculateArea() {
        return PI * radius * radius;
    }
}
```

<a id="cod31"></a>

### **Unchecked Exceptions**

[Volver al indice](#cod-base)

- Son excepciones que heredan de `RuntimeException`, como `NullPointerException`, muy común en Java, y en lenguajes compilados
- Se pueden tratar con try-catch pero no es necesario al 100%
- Las excepciones checked son las excepciones normales que heredan de `Exception`, si no son tratadas, el programa directamente no compila, ensucia mucho el codigo.
- Se recomienda usar checked Excepcions si se trata de una libreria critica donde se quiera obligar a quien usa la liberia a manejar estas excepciones.

```jsx
public class Driver {
    public void startDriving() {
        try {
            startCar();
        }
        catch (CarCrashException e) {
            logger.log(e);
        }
    }
}

public class Car {
    public void start() throws BatteryDeadException, EngineStartException {
        // ...
    }
}

public class Battery {
    public void start() throws BatteryDeadException {
        // ...
    }
}

public class Engine {
    public void start() throws EngineStartException {
        // ...
    }
}
```

<a id="cod32"></a>

### **Excepciones en lugar de códigos de error**

[Volver al indice](#cod-base)

Usando excepciones no hay porque tratar el error en el momento. Nos conviene separar la gestion de errores del codigo con el flujo correcto.

```jsx
public void sendShutDown() {
    try {
        tryToShutDown();
    }
    catch (DeviceShutDownError e) {
        logger.log(e);
    }
}

private void tryToShutDown() throws DeviceShutDownError {
    DeviceHandle handle = getHandle(DEV1); // Throws DeviceShutDownError
    // ...
    sendShutDown(handle);
}
```

<a id="cod33"></a>

### **Gestión de errores**

[Volver al indice](#cod-base)

- Se debe buscar un codigo limpio pero tambien robusto en si mismo
- La gestion de errores puede ensuciar el codigo, hay que prestarle especial atención
- Se deben devolver excepciones en lugar de códigos de error
- Se deben usar excepciones unchecked
- No devolver ni pasar `null`

<a id="cod34"></a>

### **Indentación**

[Volver al indice](#cod-base)

- Se recomiendan dos o cuatro espacios de indentacion
- El maximo recomendado de caracteres por linea es de 100 caracteres, si no, se tendrá que partir la linea
- Se deben seguir siempre las mismas reglas

DON´T

```java
public Integer tripleSum(Integer a, Integer b, Integer c){
if (a==null||b==null||c==null){
return null;
}
return a+b+c;
}
```

<a id="cod35"></a>

### **Código en el nivel de abstracción incorrecto**

[Volver al indice](#cod-base)

El método `changeRadioChannel` esta mal, ya que no todos los vehículos tienen radio. El método no debería estar en esa clase tan general como lo es `Vehicle`

```java
public class Vehicle() {
  public void turnOn();
  public void turnOff();
  public Integer getLeftAutonomyInKm();
  public void changeRadioChannel(RadioCHannel selectedChannel);
}
```

<a id="cod36"></a>

### **Acoplamiento (Evitar)**

[Volver al indice](#cod-base)

Grado en que dos modulo software estan relacionados entre si. Con un buen diseño, se crean modulos poco acoplados, haciendo que si se modifica un modulo, afecte lo menos posible al resto (Misma logica con las arquitecturas de microservicios o microfrontends)

```javascript
// -----------Módulo con acoplamiento alto-----------
const HighCouplingModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para calcular el área de un rectángulo
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Función para imprimir el área de una forma geométrica
    function printArea(shape, ...args) {
        let area;
        if (shape === 'circle') {
            area = calculateCircleArea(...args);
        } else if (shape === 'rectangle') {
            area = calculateRectangleArea(...args);
        } else {
            throw new Error("Shape not supported");
        }
        console.log(`The area of the ${shape} is: ${area}`);
    }

    // Exponer las funciones públicas del módulo
    return {
        printArea
    };
})();

// Uso del módulo con acoplamiento alto
HighCouplingModule.printArea('circle', 5); // Output: The area of the circle is: 78.53981633974483
HighCouplingModule.printArea('rectangle', 4, 6); // Output: The area of the rectangle is: 24

// -----------Módulo con acoplamiento bajo-----------

const LowCouplingModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para calcular el área de un rectángulo
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Exponer las funciones públicas del módulo
    return {
        calculateCircleArea,
        calculateRectangleArea
    };
})();

// Módulo independiente
const IndependentModule = (function() {
    // Función para imprimir el área de una forma geométrica
    function printArea(shape, ...args) {
        let area;
        if (shape === 'circle') {
            area = LowCouplingModule.calculateCircleArea(...args);
        } else if (shape === 'rectangle') {
            area = LowCouplingModule.calculateRectangleArea(...args);
        } else {
            throw new Error("Shape not supported");
        }
        console.log(`The area of the ${shape} is: ${area}`);
    }

    // Exponer las funciones públicas del módulo
    return {
        printArea
    };
})();

// Uso del módulo con acoplamiento bajo
IndependentModule.printArea('circle', 5); // Output: The area of the circle is: 78.53981633974483
IndependentModule.printArea('rectangle', 4, 6); // Output: The area of the rectangle is: 24
```

<a id="cod37"></a>

### **Cohesion (Fomentar)**

[Volver al indice](#cod-base)

Es el grado en que los elementos de un modulo estan relacionados entre si. Mientas mas alta la cohesion en el codigo, mejor

En el ejemplo la cohesion es baja, las funciones se relacionan con distintas variables. Se podria separar en 2 clases, una que sea para el manejo de niveles y otra para el manejo del jugador.

Ejemplo de alta cohesion:

```javascript
// Módulo para manejar operaciones relacionadas con formas geométricas
const GeometryModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para calcular el perímetro de un círculo
    function calculateCirclePerimeter(radius) {
        return 2 * Math.PI * radius;
    }

    // Función para calcular el área de un rectángulo
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Función para calcular el perímetro de un rectángulo
    function calculateRectanglePerimeter(length, width) {
        return 2 * (length + width);
    }

    // Exponer las funciones públicas del módulo
    return {
        calculateCircleArea,
        calculateCirclePerimeter,
        calculateRectangleArea,
        calculateRectanglePerimeter
    };
})();

// Uso del módulo de geometría
console.log(GeometryModule.calculateCircleArea(5)); // Output: 78.53981633974483
console.log(GeometryModule.calculateRectanglePerimeter(4, 6)); // Output: 20

---

// Módulo con baja cohesión
const LowCohesionModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para convertir un número a binario
    function decimalToBinary(number) {
        return number.toString(2);
    }

    // Función para generar un número aleatorio
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Función para validar un correo electrónico
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Exponer las funciones públicas del módulo
    return {
        calculateCircleArea,
        decimalToBinary,
        generateRandomNumber,
        validateEmail
    };
})();

// Uso del módulo de baja cohesión
console.log(LowCohesionModule.calculateCircleArea(5)); // Output: 78.53981633974483
console.log(LowCohesionModule.decimalToBinary(10)); // Output: "1010"
console.log(LowCohesionModule.generateRandomNumber(1, 100)); // Output: un número aleatorio entre 1 y 100
console.log(LowCohesionModule.validateEmail("example@example.com")); // Output: true
```

<a id="cod38"></a>

### **Uso de numeros magicos en lugar de constantes**

[Volver al indice](#cod-base)

Se deben pasar numeros que no se sabe que son como en el primer caso a constantes, como sucede en su segunda refactorizacion.

```javascript
public Double getAnnualSalary() {
    return 200.0 * 0.6..
}

public Double getAnnualSalary() {
    return WORKING_DAYS * WORKING_HOURS_PER_DAY...
}
```

<a id="cod39"></a>

### **Qué es la Programación orientada a Objetos?**

[Volver al indice](#cod-base)

En ella las instrucciones tratan de modelar un sistema con base en la realidad, haciendo más cercanos los conceptos que vemos en ella. Es por eso que en la programación orientada a objetos aparecen conceptos de clase, objeto, atributo, método, etc., que en el fondo no dejan de ser bloques de código. Asimismo, cabe notar que también hacen uso de estructuras de control y repetición.

<a id="cod40"></a>

### **Qué es la programación procedural?**

[Volver al indice](#cod-base)

En ella las imposiciones o instrucciones se pueden agrupar en “procedimientos”. Cada procedimiento es un bloque (la programación procedural es una forma de programación estructurada) que se dedica a un cambio de una parte específica del estado del sistema. Estos bloques son conocidos típicamente como “funciones” o “subrutinas”

<a id="cod41"></a>

### **Qué es la programacion declarativa?**

[Volver al indice](#cod-base)

Los lenguajes declarativos, en el paradigma declarativo de programación, se utilizan para describir la estructura del sistema y describir qué hace el sistema. Una vez descrita “la misión” del programa, el cómo se llega al resultado depende de la implementación interna del propio lenguaje.
Generalmente, se define a la programación declarativa como “no-imperativa”. Es decir, es todo lo que la imperativa no es. En este sentido, la programación declarativa dice qué debe hacer el sistema, en donde la ejecución no afecte otras partes del sistema y pueda representarse como una serie de premisas matemáticas (funciones/transformaciones). En un lenguaje imperativo, entonces, el sistema pasará de un estado a otro ejecutando una serie de pasos, un algoritmo. En un lenguaje declarativo se debe describir el estado inicial, el estado final y luego el propio motor del lenguaje hará todo lo necesario para ir de un estado al otro
El ejemplo más claro de un lenguaje declarativo es SQL. En SQL se describe qué información debe extraerse de una o más tablas, sin control sobre la forma de obtenerlo. Cómo se obtiene lo maneja el motor de la base. Otro ejemplo ubicuo es HTML. En HTML se describe, por ejemplo, que debe existir cierto texto, centrado y en negrita, sin especificar ningún tipo de lógica ni control de flujo. Cómo es que veremos el texto centrado y en negrita dependerá de cada navegador

<a id="cod42"></a>

### **Que es la Programacion Imperativa?**

[Volver al indice](#cod-base)

Los lenguajes imperativos definen al paradigma imperativo de programación. En este paradigma se usa el lenguaje para describir cómo cambia el estado del sistema.

Típicamente, hay instrucciones (imposiciones) ordenadas en forma de líneas de texto, una debajo de la otra, que se ejecutan de forma secuencial. El lenguaje imperativo describe cómo opera el sistema.

La programación imperativa es la más “natural”, dado que surge desde el mismísimo hardware, donde se ejecuta instrucciones de máquina. Estas instrucciones, en su más bajo nivel, mueven registros de datos de un lugar a otro, alteran valores, etc. Es decir, cambian el estado de los integrados, de la memoria, del procesador, en fin, de nuestra computadora. A medida que subimos de nivel, los lenguajes siguen haciendo lo mismo, solo que con estructuras más complejas como variables, instrucciones complejas (como bucles, modificadores de visibilidad, e incluso cosas más complejas como las anotaciones).

Ejemplos de lenguajes imperativos hay muchos: C, C++, Java, Perl y un infinito etcétera. En todos estos lenguajes se escriben líneas de código que describen los pasos de una algoritmo para lograr un resultado.

<a id="cod43"></a>

### **Qué es la Programacion Estructurada?**

[Volver al indice](#cod-base)

En ella las imposiciones se ven divididas en estructuras. Pueden ser estructura de control de flujo (if/else), de repeticiones (for/while) o pueden ser estructuras de ordenamiento(bloques de código, generalmente delimitados por TABs o por llaves o corchetes)

<a id="cod44"></a>

### **Que es un antipatron?**

[Volver al indice](#cod-base)

Un antipatrón de diseño es una implementación que invariablemente conduce a una mala solución. Al documentarse junto con los patrones de diseño, se dan argumentos para no escoger malos caminos en lugar de simplemente usar la intuición y el sentido común.
El término se origina inspirado en el libro Design Patterns, el libro Anti-Patterns describe los antipatrones como la contrapartida natural al estudio de los patrones de diseño.
El estudio formal de errores que se repiten permite reconocer y reconducir los elementos involucrados hacia una mejor solución. Los antipatrones no se mencionan en el libro original de Design Patterns, puesto que éste es anterior.
Los antipatrones se consideran una parte importante de una buena práctica de programación. Es decir, un buen programador procurará evitar los antipatrones siempre que sea posible, lo que requiere su reconocimiento e identificación tan pronto como sea posible, dentro del ciclo de vida del software.
El concepto se puede aplicar a la ingeniería en general, e incluso a cualquier tarea realizada por el hombre. Aunque no se escucha con frecuencia fuera del campo ingenieril, la noción está ampliamente extendida.

<a id="cod45"></a>

### **Que tipos de antipatrones para el diseño de Software existen?**

[Volver al indice](#cod-base)

- **Base de datos como comunicador de procesos (Database as IPC)**: Es cuando usamos una base de datos para comunicar procesos para uno o varias máquinas, en lugar de hacer una comunicación entre procesos directa (que es más adecuada).
- **Objeto todopoderoso (BLOB Object)**: Simple, cuando hacemos que toda la funcionalidad se haga en un solo objeto (aplicable también a cualquier tipo de componente).
- **Clase Gorda (Fat class)**: Es la que le sigue a la anterior, se trata de dotar a una clase con demasiados atributos y/o métodos, haciéndola responsable lógicas de negocio que no les correspondan
- **Botón mágico (Magic Push-button)**: Se trata de desarrollar lógica de negocio en los métodos de interacción de pantallas de usuario.
- **Carrera de obstáculos (Race Hazard)**: Incapacidad de prever las consecuencias de diferentes sucesiones de eventos. En otras palabras es no tener visión o trazabilidad de la lógica que se dispara en cada evento.
- **Entrada chapuza (Input Kludge)**: No especificar e implementar el manejo de entradas inválidas. En otras palabras, es cuando no validamos los datos que entran al sistema.
- **Fábrica de combustible (Gas Factory)**: Diseñar de manera innecesariamente compleja. Dicho de otro modo, sobre modelar, diseñar por demás, diseñar funcionalidad que no sabremos cuando.
- **Gran bola de lodo (Big Ball of Mud)**: Construir un sistema sin estructura definida. Sin una estructura la implementación se desmorona.
- **Interfaz inflada (Interface Bloat)**: Pretender que una interfaz sea tan potente que resulta extremadamente difícil de implementar.
- **Punto de vista ambiguo (Ambiguous Viewpoint)**: Presentar un modelo sin concretar ciertos aspectos, postergando así decisiones conflictivas para más adelante.
- **Re-dependencia (Re-coupling)**: Introducir dependencias ( o relaciones entre objetos) innecesarias.
- **Sistema de cañerías de calefacción (Stovepipe System)**: Construir un sistema difícilmente mantenible, ensamblando componentes poco relacionados.

<a id="cod46"></a>

### **Que tipos de Antipatrones para el Diseño Orientado a Objetos existen?**

[Volver al indice](#cod-base)

- **Acoplamiento secuencial (Sequential coupling)**: Construir una clase que necesita que sus métodos se invoquen en un orden determinado o secuencia.
- **Base Bean**: Heredar funcionalidad de una clase utilidad en lugar de delegar lo que se necesite en ella.
- **Fallo de clase vacía (Empty Subclass Failure)**: Crear una clase que no supera el test de la subclase vacía, es decir, que se comporta de manera diferente cuando se invoca desde una subclase que no añade modificación o funcionalidad alguna.
- **Llamar a Super (Call Super)**: Obligar a las subclases a llamar a un método de la superclase que ha sido sobrescrito.
- **Modelo de dominio Anémico (Anemic Domain Model)**: Usar un modelo del dominio sin ninguna lógica de negocio que de valor. Esto no es un enfoque orientado a objetos porque cada objeto debería tener tanto propiedades como comportamiento asociado específico (que haga transformaciones) y no solo para llevar datos desde la base a la pantalla.
- **Objeto Sumidero (Object Cesspool)**: Reusar objetos no adecuados realmente para el fin que se persigue.
- **Poltergeist**: Emplear objetos cuyo único propósito es pasar la información a terceros objetos sin aportar valor o realizar transformaciones.
- **Problema del círculo-elipse (circle-ellipse problem)** : Crear variables de tipo pensando en los valores de posibles subtipos, generando problemas de bifurcaciones lógicas que no son predecibles.
- **Problema del yoyó (yo-yo problem)**: Construir estructuras (por ejemplo de herencia) que son difíciles de comprender debido a su excesiva fragmentación.
- **Singletonitis**: Abuso de la utilización del patrón singleton. Este concepto es también aplicable a cualquier tipo de patrón de diseño en el que se abuse de su implementación en lugares no adecuados o necesarios. Suele ocurrir con programadores con poca experiencia
- **YAFL (“yet another layer” u otra capa más no deseada)**: Se trata de añadir capas innecesarias a un programa, sub-programa, biblioteca o framework. Esta tendencia se extendió bastante después de que se publicase el primer libro sobre patrones.

<a id="cod47"></a>

### **Singleton**

[Volver al indice](#cod-base)

Obliga a que exista solo un objeto de un tipo. Se puede usar para crear un objeto que se encargue de la conexión a una base de datos, para que no se creen múltiples conexiones.

```javascript
class Singleton {
    constructor() {
        // Si la instancia no existe, se crea
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        // Si no, se devuelve lo que ya existe
        return Singleton.instance;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton(); // Devuelve la misma instancia
```

<a id="cod48"></a>

### **Que es el Polimorfismo?**

[Volver al indice](#cod-base)

Conocido también como ***ligadura dinámica***, ***ligadura tardía*** (***late binding***), el concepto fundamental del ***Polimorfismo*** es “mismo mensaje, distinta implementación” y consiste en implementar o reemplazar el método de una clase con otro método llamado exactamente igual pero escrito en otra clase (derivada de la primera).

Para que se produzca esta ligadura tardía (que efectivamente se produce **en *tiempo de ejecución***, cuando el objeto es asignado a la variable) se requieren algunas cosas:

- Que las clase implicadas tengan declarado (y directa o indirectamente implementado) un método con ***exactamente la misma firma***.
- Que la variable que guarde el objeto sea de la clase de ***mayor jerarquía*** entre las todas las implicadas (la que todos los objetos posibles tengan en común).
- Que no se trate de un método *de clase* (***static***).
- Que no se trate de un método privado (porque no se puede heredar).
- Que no haya sido declarado como ***final***, porque no podrá ser definido.

Si se cumplen estos requisitos, usando **siempre la misma *llamada* o *invocación***  y**sea cual sea el objeto asignado**, **la variable declarada expondrá** a través de su*capa de abstracción* o *API* (*application programming interface*, o *interfaz de acceso programático*) ***distinta implementación***. Así, cuando una variable que contiene una instancia propia o de cualquiera de sus subclases invoca a un método, la versión del método que se ejecutará no será necesariamente la que figura en la clase de la variable declarada, sino la existente en la clase de la instancia referida por la variable. Dicho de otra manera, **la versión del método que será ejecutada depende de la clase del objeto referenciado, no de la variable que lo referencia**.

El polimorfismo es una de las principales aplicaciones de la herencia y supone el principal motivo de las clases abstractas

En POO polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de distinta clase

El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía

Para que el objeto pueda responder al mensaje, la clase debe contener el método (mensaje)

Para garantizar que dos clases distintas contengan el  mismo método, debemos hacer que estas  lo hereden de una clase superior

En el ejemplo de los polígonos, creamos una clase abstracta Poligono con un método abstracto obtenerSuperficie(). Este método no tiene implementación en la clase Poligono porque cada polígono tiene su propia fórmula para calcular la superficie, pero al declarar el método, establecemos un contrato que asegura que cualquier subclase de Poligono tendrá que implementar su propio cálculo de superficie. De esta forma, logramos que cada subclase, como Cuadrado, Triangulo o Circulo, implemente su cálculo específico de superficie, usando polimorfismo para permitir diferentes comportamientos en una misma estructura.

<a id="cod49"></a>

### **Que es el Upcasting?**

[Volver al indice](#cod-base)

Es la posibilidad de tratar a un objeto de una subclase como un objeto de la superclase.

Esto se logra apuntando a un objeto de una subclase con un puntero de su superclase.

```jsx
Perro fido;
Mascota a;
fido = new Perro("Fido", "Bull Dog");
a = fido;
```

Tras la conexión polimorfa únicamente podemos acceder a los atributos y métodos pertenecientes a la clase asociada a la referencia

<a id="cod50"></a>

### **Que es el Downcasting?**

[Volver al indice](#cod-base)

Es la posibilidad de volver a tratar el objeto con un puntero a la clase a la que pertenece

Se utiliza para volver a acceder a todos los atributos y métodos del mismo

A diferencia del upcasting, siempre se hace indicando cual es la subclase

```jsx
Perro fido;
Mascota a;
Perro  mismoFido;

fido = new Perro("Fido",
               "Bull Dog");
a = fido;
mismoFido = (Perro) a;
```

Es posible que al hacer un downcasting se produzca un error debido a que la clase a la que pertenezca el objeto no coincida con la clase del puntero.

Para evitarlo podemos utilizar la instrucción de Java instanceof.

```jsx
if (a instanceof Perro)
      mismoFido = (Perro) a;
```

<a id="cod51"></a>

### **¿Cómo se produce la ligadura tardía y dinámica que posibilita el polimorfismo?**

[Volver al indice](#cod-base)

Gracias a los punteros o referencias: cuando se crea una variable el lenguaje registra en una lista interna cada método declarado para esa clase y espera a que se “guarde” un objeto en la variable a través de una asignación. Cuando se produce la asignación del objeto, se recorre internamente la lista de métodos de la declarados en la variable que pueden ser sobreescritos y se compara con los métodos disponibles para el objeto (propios o heredados). Si la firma coincide, el método encontrado en el objeto asignado se asociará a la declaración existente y sobreescribirá la referencia y sustituirá el enlace al método original, si éste estaba implementado.

<a id="cod52"></a>

### **El Principio de Sustitución de Liskov**

[Volver al indice](#cod-base)

El ***Principio de Sustitución de Liskov*** fue acuñado por **Barbara Liskov** en 1987 durante una conferencia sobre *Jerarquía y Abstracción de datos*. Este principio dice que al sobreescribir un método se debe asegurar que éste mantenga el espíritu original del método, sin alterar ni dejar de cumplir la premisa o responsabilidad declarada inicialmente para el mismo. Según este principio, **una clase derivada no únicamente *es*, sino que *debe comportarse* como la clase base**. Por ejemplo, si hay un método *abrirPuerta()*, una clase derivada no debería hacer que su *abrirPuerta()* abra las ventanas, o prenda la radio. A nivel declarativo y de programación puede estar perfecto, pero no sería correcto. Puede tener otra forma de abrir la puerta, pero no hacer otra cosa.

<a id="cod53"></a>

### **¿Cómo ejemplificarías el uso de polimorfismo en Java usando una colección de objetos?**

[Volver al indice](#cod-base)

En Java, el polimorfismo se puede ver claramente al trabajar con una colección de objetos que comparten una clase base. En este ejemplo, creamos una lista ArrayList<Poligono> y agregamos instancias de Cuadrado, Triangulo y Circulo. Cuando recorremos esta colección, llamamos al método obtenerSuperficie() de cada polígono, y cada uno calcula su superficie utilizando su propia implementación del método. Así, aunque estamos llamando al mismo método, el comportamiento es diferente según el tipo específico de polígono:

```java
ArrayList<Poligono> poligonos = new ArrayList<>();
poligonos.add(new Cuadrado("#FF0000", 50));
poligonos.add(new Triangulo("#00FF00", 50, 50));
poligonos.add(new Circulo("#0000FF", 25));

for (Poligono poligono : poligonos) {
    System.out.printf("%s Superficie=%f\n", poligono, poligono.obtenerSuperficie());
}
```

<a id="cod54"></a>

### **Qué es la densidad de codigo?**

[Volver al indice](#cod-base)

La densidad de código es una métrica que mide la cantidad de código fuente en un programa en relación con la cantidad de comentarios y líneas en blanco. Se utiliza para evaluar la legibilidad y mantenibilidad del código, ya que un código con una alta densidad de código puede ser difícil de entender y modificar.

**Densidad Horizontal**

Mismo concepto pero de manera horizontal, entre caracteres

DON´T

```java
public Integer tripleSum(Integer a, Integer b, Integer c){
   if (a==null||b==null||c==null){
       return null;
   }
   return a+b+c;
}
```

DO

```java
public Integer tripleSum(Integer a, Integer b, Integer c) {
   if (a == null || b == null|| c == null){
       return null;
   }
   return a + b + c;
}
```

<a id="cod55"></a>

### **La importancia del orden de las funciones**

[Volver al indice](#cod-base)

El orden de las funciones es para facilitar la lectura. En el ejemplo, primero ponemos la funcion `a()` que a su vez, consume a `b()` y `c()`, haciendo que la lectura sea ordenada.

```
public void a(){
    b();
    c();
}public void b(){}public void c(){}
```

<a id="cod56"></a>

### **Porque se deberia evitar retornar null?**

[Volver al indice](#cod-base)

- No se debe devolver null en una funcion
- Al devolver null, obligamos que se chequee ese null, es una gran fuente de bugs, por ejemplo, es recomendable devolver una lista vacia en vez de un null
- No debemos pasar null en los parametros de una funcion, obligamos a que se chequee que estos parametros no sean nulos para ejecutar correctamente.

DON'T

```jsx
public void processRequestBatch() {
  List<Request> requestList = getRequestList();
  if (requestList != null) {
    for (Request r: requestList) {
      processRequest(r);
    }
  }
}
```

DO

```jsx
public void processRequestBatch(){
  List<Request> requestList = getRequestList();
  for (Request r: requestList) {
    processRequest(r);
  }
}
```

<a id="cod57"></a>

### **Porque se deberia evitar el uso de variables globales?**

[Volver al indice](#cod-base)

- Las variables globales pueden ser modificadas por cualquier parte del código, lo que puede llevar a errores difíciles de rastrear.
- Las variables globales pueden ser accedidas por cualquier parte del código, lo que puede llevar a dependencias no deseadas.
- Las variables globales pueden ser difíciles de depurar y mantener, ya que su alcance es global y no está claro dónde se utilizan o modifican.
- Las variables globales pueden causar problemas de concurrencia si se acceden y modifican desde múltiples hilos de ejecución.
- Las variables globales pueden dificultar la reutilización del código, ya que las dependencias globales pueden hacer que sea difícil separar las partes del código en módulos independientes.

<a id="cod57-1"></a>

### **¿Cómo podrías mejorar la calidad del código en un proyecto en marcha?**

[Volver al indice](#cod-base)

Mejorar la calidad del código en un proyecto en marcha requiere un enfoque estructurado y progresivo para no afectar la funcionalidad existente mientras se mejora la base del proyecto. Aquí hay varias estrategias que puedes seguir:


### **1. Evaluación inicial y establecimiento de objetivos**
- **Auditoría del código existente:** Revisa el código base para identificar problemas comunes como:
  - Código duplicado.
  - Nombres de variables poco descriptivos.
  - Falta de pruebas unitarias.
  - Ciclos de vida complejos o difíciles de seguir.
- **Definir estándares:** Establece o actualiza las guías de estilo (por ejemplo, estándares para nombres, estructura de carpetas, o uso de patrones).
- **Objetivos progresivos:** Define metas alcanzables, como mejorar la cobertura de pruebas al 80% o reducir el tiempo de carga en un 20%.

---

### **2. Limpieza y refactorización del código**
- **Refactorización progresiva:**
  - Identifica módulos o componentes críticos y refactorízalos uno a la vez.
  - Aplica principios SOLID para mejorar la modularidad y legibilidad.
  - Usa patrones de diseño (como Factory, Singleton o Strategy) si simplifican el código.
- **Eliminar código muerto:** Identifica funciones, componentes o estilos que ya no se usan y elimínalos.
- **Simplificación de funciones:** Divide funciones complejas en funciones más pequeñas y reutilizables.

*Ejemplo de refactorización:*

Código inicial:
```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === 'discounted') {
      total += items[i].price * 0.9;
    } else {
      total += items[i].price;
    }
  }
  return total;
}
```

Código refactorizado:
```javascript
function calculateItemPrice(item) {
  return item.type === 'discounted' ? item.price * 0.9 : item.price;
}

function calculateTotal(items) {
  return items.reduce((total, item) => total + calculateItemPrice(item), 0);
}
```

---

### **3. Implementación de pruebas**
- **Pruebas unitarias y de integración:**
  - Usa herramientas como Jest, Jasmine o Mocha para asegurar la calidad de cada módulo.
  - Prioriza las áreas del código con mayor probabilidad de errores o que se usan frecuentemente.
- **Pruebas automatizadas:**
  - Usa herramientas como Selenium, Cypress o Playwright para automatizar pruebas funcionales y de interfaz.
- **Cobertura de pruebas:** Implementa herramientas como Istanbul para monitorear la cobertura de pruebas y mantener estándares altos.

---

### **4. Optimización del rendimiento**
- **Análisis de rendimiento:**
  - Mide la velocidad del renderizado, el uso de memoria, y el tamaño de los bundles.
  - Usa herramientas como Lighthouse, Webpack Bundle Analyzer o DevTools.
- **Lazy loading y tree shaking:** Implementa carga diferida para recursos pesados y elimina código no utilizado en los bundles.
- **Optimización de la red:** Reduce las peticiones HTTP, habilita compresión (gzip/brotli) y usa HTTP/2 o HTTP/3.

---

### **5. Automatización de tareas repetitivas**
- **Linting y formateo:** Usa ESLint y Prettier para mantener la consistencia en el código.
- **Integración continua (CI/CD):**
  - Configura pipelines con herramientas como Jenkins, GitHub Actions, o GitLab CI para automatizar pruebas, linting y despliegues.
- **Revisión automatizada de código:** Implementa bots como Dependabot para gestionar dependencias y Snyk para detectar vulnerabilidades.

---

### **6. Mejora de documentación**
- **Comentarios efectivos:** Escribe comentarios para explicar el "por qué" de decisiones complejas, no el "cómo".
- **Documentación del proyecto:** Usa herramientas como Storybook para documentar componentes UI o Swagger/OpenAPI para APIs.
- **README claro:** Asegúrate de que el README tenga instrucciones claras sobre cómo ejecutar, probar y desplegar el proyecto.

---

### **7. Capacitación y revisión de código**
- **Revisión por pares:** Implementa pull requests obligatorios para garantizar que cada cambio pase por al menos una revisión.
- **Capacitación del equipo:** Organiza talleres para enseñar nuevas herramientas, patrones o buenas prácticas.

---

### **8. Monitoreo continuo**
- **Seguimiento de errores:** Usa herramientas como Sentry o LogRocket para detectar y solucionar problemas en producción.
- **Métricas de calidad:** Monitorea métricas como el tiempo de respuesta, número de bugs reportados y cumplimiento de estándares.

<a id="cod57-2"></a>

### **Si tienes plazos ajustados y te ves obligado a escribir "mal código", ¿cómo manejarías esa situación?**

[Volver al indice](#cod-base)

Cuando te enfrentas a plazos ajustados y necesitas priorizar la entrega sobre la calidad del código, es importante abordar la situación de manera estratégica para minimizar el impacto a largo plazo.


### **1. Planificación y comunicación temprana**
- **Habla con el equipo o stakeholders:**
  - Informa que, para cumplir con el plazo, es posible que se comprometa la calidad del código.
  - Explica los riesgos de acumular deuda técnica, como mayor dificultad de mantenimiento, bugs futuros, y tiempo extra para agregar nuevas funcionalidades.
  - Propón un plan para abordar esa deuda técnica después del plazo.

  *Ejemplo:*
  "Podemos cumplir con la fecha límite, pero algunos aspectos del código serán soluciones temporales. Después de la entrega, necesitaremos tiempo para refactorizar y mejorar la calidad del código para evitar problemas futuros."


### **2. Mantén un enfoque mínimo viable**
- **Define el alcance exacto:** Limita las funcionalidades al núcleo imprescindible para cumplir con los objetivos. Recorta características secundarias que puedan ser agregadas más tarde.
- **Prototipos rápidos:** En lugar de implementar una solución perfecta, crea una solución funcional que cumpla los requisitos mínimos.

  *Ejemplo:* Si estás desarrollando una funcionalidad de búsqueda, inicialmente podrías implementar una búsqueda básica sin filtros avanzados ni ordenación sofisticada.


### **3. Escribe "código malo" de manera controlada**
Si escribir "código malo" es inevitable, sigue estas prácticas para minimizar el daño:

- **Documenta las áreas débiles:**
  - Añade comentarios en el código para señalar qué partes necesitan refactorización o tienen lógica temporal.
  - Usa palabras clave como `// TODO` o `// FIXME` para que sean fácilmente identificables.

  ```javascript
  // FIXME: Optimizar esta función para manejar casos con grandes cantidades de datos.
  function processData(data) {
    return data.map(item => heavyComputation(item));
  }
  ```

- **Evita la propagación del mal código:**
  - Restringe las soluciones rápidas a un área específica del sistema.
  - Encapsula la lógica temporal en módulos o funciones que puedas reemplazar fácilmente más adelante.

  ```javascript
  // Solución temporal para cálculo de descuentos
  function calculateDiscount(price) {
    return price * 0.9; // TODO: implementar lógica avanzada con reglas dinámicas
  }
  ```

- **Pruebas básicas:** Aunque sea un código rápido, incluye al menos pruebas mínimas para asegurarte de que funciona correctamente.


### **4. Prioriza la deuda técnica más crítica**
- **Crea un backlog de deuda técnica:** Lleva un registro claro de todas las áreas donde el código requiere mejoras, priorizando según el impacto.
- **Asigna tiempo post-entrega:** Programa un sprint técnico después de cumplir con el plazo para refactorizar el código.


### **5. Evita problemas comunes del "código malo"**
Incluso bajo presión, sigue estas prácticas para evitar errores desastrosos:
- **No omitas validaciones:** Asegúrate de manejar errores, incluso con soluciones simples.
- **Usa nombres significativos:** No sacrifiques claridad; el código mal estructurado no tiene que ser ilegible.
- **Evita dependencias rígidas:** Asegúrate de que las soluciones rápidas no bloqueen la integración de futuras funcionalidades.

  *Ejemplo de mala práctica:*
  ```javascript
  // Hardcode que será difícil de mantener
  const API_URL = "http://localhost:3000/api/v1/products";
  ```

  *Mejor alternativa:*
  ```javascript
  // Define constantes para permitir configuraciones futuras
  const API_URL = process.env.API_URL || "http://localhost:3000/api/v1/products";
  ```


### **6. Post-entrega: Paga tu deuda técnica**
Después de cumplir el plazo:
- **Revisa el código:** Evalúa las partes comprometidas y refactóralas.
- **Incrementa la cobertura de pruebas:** Agrega pruebas unitarias y de integración para las áreas con código temporal.
- **Aprende de la experiencia:** Analiza qué causó el plazo ajustado y ajusta los procesos (como planificación o estimaciones) para evitar futuras situaciones similares.

Aunque no es ideal escribir "mal código," puedes minimizar el impacto con documentación, encapsulación, y planificación. Siempre prioriza una refactorización inmediata después de cumplir con los plazos. Esto garantizará que el proyecto siga siendo mantenible y escalable en el futuro.

<a id="cod58"></a>

### **¿Qué es un Code Smell?**

[Volver al indice](#cod-base)

Son sintomas de que el codigo no es todo lo limpio que deberia. Hay distintos tipos de code smells como:

- En los comentarios
- En el entorno de desarrollo
- En las funciones
- Code Smells Generales
- Code Smells en Java u otros lenguajes
- En los nombres
- En los tests

Nadie se va a volver experto teniendo esta lista de memoria, nunca va a ser una lista completa de todos los problemas que puede tener el código.

<a id="cod59"></a>

### **Code Smells en los Tests**

[Volver al indice](#cod-base)

**Tests insuficientes** Se deben probar todas las posibilidades de una funcion. Si no se prueban todas las condiciones, los tests son insuficientes.

**No usar una herramienta de cobertura** Se muestran claramente las lineas que no estan siendo cubiertas por los tests. Son faciles de instalar.

**Evitar los tests triviales** Aunque una funcionalidad parezca trivial, hacer un test igual. Es una gran fuente de bugs.

**Test ignorado o comentado** Segun Robert C. Martin “A veces tenemos dudas sobre los detalles de una funcionalidad, porque los requisitos no están claros. Podemos expresar estas dudas con un test comentado, o con un test con `@ignore`. La opcion que elijas depende de si tu test compila o no"

Si hay dudas en los tests, hay dudas en los requisitos

**No testear condiciones limite** Son los mayores generadores de bugs, hay que testearlos. No solo testear las condiciones normales del código.

**No buscar bugs de forma exhaustiva** Los bugs tienden a estar cerca unos de otros. Si encontrás un bug, revisar, pueden haber más.

**Los patrones de fallo son reveladores** Si vemos que una funcion falla cuando mandamos un String con caracteres en blanco, debemos manejar esto.

**La cobertura de codigo es reveladora** Se pueden encontrar los motivos de fallo con las lineas que no estan analizadas

**Los tests deben ser rápidos** Si los tests tardan mucho, no se van a correr. Deben ser rápidos para que se corran seguido.

<a id="cod60"></a>

### **Code Smells en Codigo**

[Volver al indice](#cod-base)

**Mezclar muchos lenguajes en un solo fichero** En el ejemplo podemos ver que se mezclan Java y HTML en un mismo archivo. A veces puede ser razonable (CSS + JS), pero en casos como el ejemplo, solo ensucia el codigo.

```java
public String getUserProfilePage (User user) {
  return "<html> <body>...."
}
```

**No usar variables explicatorias** Crear variables intermedias hace que el codigo quede mucho mas claro. Por ejemplo, en la imagen podemos ver la primera imagen que es una funcion de una sola linea, que queda mucho mas clara en su segunda version, agregando una variable intermedia para calcular un cateto.

```javascript
public Double calcularArea(Double hipotenusa, Double cateto) {
    return Math.sqrt(hipotenusa*hipotenusa - cateto*cateto) * cateto / 2;
}

public Double calcularArea (Double hipotenusa, Double cateto) {
    Double cateto_2 = Math.sqrt(hipotenusa*hipotenusa - cateto*cateto);

    return cateto * cateto_2 / 2;
}
```

No se debe sacrificar claridad por menos lineas.

**Duplicidad** Tener codigo repetido entre funciones y clases es algo común, es una oportunidad perdida para generar una nueva abstraccion. Si tenemos duplicidad entre varias clases, puede indicar la necesidad de una nueva jerarquia.
Ademas es dificil de mantener, ya que si cambiamos una parte de ese codigo, debemos repetirlo en todos los lugares en donde se encuentra.

**Demasiada Información** Poner demasiados metodos, demasiados get/set, etc, cuando no sabemos si hace falta. Los modulos bien definidos tienen interfaces muy pequeñas que permiten hacer mucho con pocos metodos.

- Exponer solo lo necesario
- Esconde los datos, ofrece operaciones, que no todo tenga get/set si no es necesario.

**Código Muerto** Código que no se usa debe ser eliminado. Por ejemplo:

- Funciones que no se llaman
- Condiciones en el switch/case que no se dan nunca, al igual que con el if
- try/catch con excepciones que nunca se lanzan

Se debe borrar sin miedo, Git recuerda todo.

**Basura** Son partes que no sirven de nuestro codigo, como por ejemplo:

- Constructores sin implementacion puestos por defecto
- Getters y Setters de todas las variables privadas de una clase que puede ser que no se usen nunca
- Variables y funciones que no se usan nunca

**Inconsistencia**

- Si haces algo de una forma, hacelo siempre de la misma forma, tanto nombre como logica
- Si, por ejemplo, se elije la palabra “delete” para eliminar algo, no cambiarlo en otro lado por “remove”
- Esto hace que nuestro codigo sea mucho mas facil de leer para otros y para uno mismo

**Distancia Vertical** Las variables y funciones deben estar cerca de donde se usen

- Las variables locales deben ser declaradas antes de ser usadas
- Las funciones privadas deben estar debajo de la primera funcion que las usa
- No queremos que codigo local este puesto a muchas lineas de distancia de donde es usado ya que hace que sea complicado de leer

**Comportamiento obvio no implementado**

```
Month month = MonthDate.StringToMonth(String monthName);
```

Esperamos que esta funcion pase el parametro `July` a un enum `Month.JULY`. Que haga lo mismo con `jULY` y `july`, si el codigo no hace lo que se espera en estos casos, se pierde confianza en el, y se debe estar revisando lo que hace cada linea.


**Listas de imports muy largas** Si usas dos o mas clases de un paquete, importar directamente todo el paquete.

**Herencia de constante** Se debe evitar el uso de herencia para estos mecanismos. Por ejemplo `Game` hereda de `GameConstants`. Se debe usar `GameConstants.NUMBER_OF_LEVELS` o importarlo directamente. No se debe usar herencia para crear estos mecanismos.

```jsx
public class EasyGame extends Game {
    private int currentLevel;
    public Double calculateProgress(){
        return currentLevel / NUMBER_OF_LEVELS;
    }
}

public abstract class Game implements GameConstants {
    public Double calculateProgress();
}

public interface GameConstants {
    public static final int NUMBER_OF_LEVELS = 10;
}
```

**Enums vs Constantes** Usar enums siempre y cuando sea posible. Es mas potente en funcionalidad y claridad. Tambien nos permiten declarar funciones abstractas para cada valor, como `numberOfLevels` por nivel.

```jsx
public class Game {
  private int currentLevel;
  DifficultyLevel difficultyLevel;

  public int levelsLeft() {
    return difficultyLevel.numberOfLevels() - currentLevel;
  }
}

public enum DifficultyLevel {
  EASY {
    public int numberOfLevels() {
      return 20;
    }
  },
  MEDIUM {
    public int numberOfLevels() {
      return 30;
    }
  },
  HARD {
    public int numberOfLevels(){
      return 50;
    }
  }

  public abstract int numberOfLevels();
}
```

Se evitan los condicionales por nivel de dificultad en el ejemplo.

<a id="cod61"></a>

### **Code Smells en Nombres**

[Volver al indice](#cod-base)

**Nombres en nivel de abstraccion incorrecto** Si tenemos una clase `FtpFileDownloader` que implementa la interfaz, ya no recibiria una web url.

```jsx
public interface FileDownloader {
  File download(String webUrl);
}
```

**No usar nomenclatura estandar**

- Por ejemplo, usar la palabra `Singleton` para clases que usen ese patrón, la palabra `Controller` cuando se trata de un controlador, etc..
- Sobreescribir metodos `toString` que ya tienen las clases Java en lugar de crear un metodo propio. No reinventar la rueda

**No usar nombres largos para largos alcances** Se pueden usar nombres de pocos caracteres para alcances cortos, pero si el alcance es mayor, el nombre largo es necesario. El ejemplo de un alcance acotado es en el caso de `i` para un bucle.

```jsx
for (int i = 0; i < numberOfRequests; i++) {
  processRequest(requests.get(i));
}

// NOPE
public class Car {
  private int hp;
}

// SIP
public class Car {
  private int horsePower;
}
```

**Usar Codificaciones**

- Evitar los nombres con codificaciones que distraigan al lector
- Un ejemplo malo son las variables, por ejemplo `intVariable` o `strName`. No es necesario agregar el prefijo `str` si ya se sabe que se trata de un String.

**Ocultar efectos secundarios** Si existen efectos secundarios, los nombres de las variables y funciones deben describirlo. Por ejemplo, en el caso de esta funcion `login`, se hace mas de una cosa, y no es aclarado. Se debe separar en dos funciones o cambiar el nombre (recomendable la primera)

```jsx
public Boolean login (User user) {
    User databaseUser = userRepository.findByUsername(user.getUsername());

    if (validCredentials(user, databaseUser)) {
        return true;
    }

    // Esto esta de mas
    if (checkNumberOfTries(user.getIp()) > MAX_TRIES) {
        blockUser(user);
    }

    return false;

}
```

<a id="cod62"></a>

### **Code Smells en Comentarios**

[Volver al indice](#cod-base)

**Informacion Inapropiada** Todo comentario que contenga informacion que este mejor documentada en otro sistema debe ser movida.
Por ejemplo en este caso, el autor del codigo ya esta siendo registrado por Git, no es necesario que haya un comentario que lo indique, lo mismo con los TODO

DON´T

```java
//@author Denisse Lemos
public class Comments {}
```

**Comentario Obsoleto** Los comentarios deben estar actualizados al codigo actual para que no confundan al programador.

**Comentario Redundante** Comentarios innecesarios de, por ejemplo, javadoc. Que no aportan valor al codigo

**Comentario mal redactado** Los comentarios utiles deben estar bien redactados, sin faltas de ortografia y directo.

**Código Comentado** Nunca dejar codigo comentado, ya que se guarda el registro de cambios en Git. El codigo que no se necesita, se borra.

<a id="cod63"></a>

### **Code Smells en el entorno**

[Volver al indice](#cod-base)

**Que la compilacion requiera mas de un paso** Se debe ser capaz de hacer un checkout del codigo fuente con un solo comando y compilarlo con otro solo comando. Si el codigo es simple y no tiene dependencias, es facil de hacer, pero a medida que va creciendo en dependencia, puede ser que se necesite compilar las dependencias por separado para luego compilar el proyecto, para esto se crearon muchas herramientas para automatizar el build del codigo. En Java el mas usado es Maven o Apache, en JS es Grunt, entre otros…

```
git clone {nuestroProyecto}
mvn install
```

**Los test requieren mas de un paso** Los test se deben ejecutar con un unico comando facil, rapido y obvio, al igual que la compilacion. Si esto no se cumple, pueden haber altas chances de que los test no suelan correrse por el trabajo que conllevan en si mismos. La idea es ejecutarlos muy seguido.
Tambien hay herramientas de automatizacion para los tests, con comandos especificos para los tests. En maven existe `mvn test`

<a id="cod64"></a>

### **Code Smells en Funciones**

[Volver al indice](#cod-base)

**Demasiados parametros / argumentos** Las funciones mas faciles de leer son las que no reciben parametros. Mientras mas parametros, mayor es la complejidad. No se recomiendan mas de 3 parametros, y si es el caso, se recomienda refactorizar, separando esta funcion en varias funciones mas pequeñas o encapsulando los argumentos en una clase

**Intenciones ocultas dificiles de apreciar**

- El codigo debe ser lo mas expresivo posible
- De nada vale un codigo que ocupa poco espacio si no lo entendemos. Mejor aclarar lo mas posible antes que priorizar el ahorro de caracteres

En este ejemplo podemos ver que se ahorraron muchas letras en los nombres de las funciones, haciendo que sea muy confuso de leer

```javascript
public int otCalc(){
  return isWkn * wkRte + (int) Math.round(0.5 * wkRte * ...);
}
```

**Una función recibe parametros de salida** Los argumentos de salida con los que se le pasan a una funcion para que esta guarde el resultado, en vez de usar un return, como en el caso del ejemplo el parametro `int* result`, que solo sirve para guardar el resultado en una variable global. Siempre se debe usar el `return`
Estos argumentos son muy usados en lenguajes como C.

```c
#include <stdio.h>

void suma (int input1, int input2, int* result) {
  *result = input1 + input2;
}

int main() {
  int result;
  suma(1,2,&result);
  printf("Result: %d\n", result);

  return 0;
}
```

**Comportamiento incorrecto en los limites del codigo** Muchos bugs del codigo estan en los limites de los condicionales o bucles de los codigos.

```java
private final List<String> thirtyOneDayMonths = Arrays.asList("January", "March", "May", "July", "August", "October", "December");

private final List<String> thirtyDayMonths = Arrays.asList("April", "June", "September", "November");

public int getNumberOfDaysInMonth(String month) {
  if (thirtyOneDayMonths.contains(month)) {
    return 31;
  }
  if (thirtyDayMonths.contains(month)) {
    return 30;
  }
  return 28;
}
```

Si un año es biciesto, el codigo seria incorrecto

**No encapsular las condiciones limite** Las condiciones limite son los focos mas importantes de bug. Es importante encapsularlas bien y tenerlas bien definidas.
Si tenemos que definir una variable mas para que quede mas claro, lo hacemos.

```jsx
if (level + 1 == game.getMaxLevel()) {
  loadFinalBoss();
}

Integer nextLevel = level + 1;
if (nextLevel == game.getMaxLevel()) {
  loadFinalBoss();
}
```

**Metodos estaticos inapropiados** Los metodos estaticos no operan bajo ninguna instancia. Se debe pensar si un metodo es realmente estatico antes de declararlo como tal.
En el caso del ejemplo, deberia ser una funcion de `Employee` si deseamos que sea polimorfica y calcule distinto dependiendo del tipo de Employee.

```java
public class HourlyPayCalculator {
    public static Double calculatePay(Employee employee, Double overtimeRate)
}
```

**No ser precisos** Se debe tener precision sobre las decisiones que se tomen sobre el codigo. No ser vago con las decisiones.

- Si se va a calcular dinero, usar enteros y manejar el redondeo
- Si se va a tratar con concurrencia, asegurar que no hayan carreras criticas
- Si hay metodos que pueden lanzar excepciones, tratarlas.

**Darle mas peso a convenciones que a la estructura** Las convenciones son importantes pero el diseño del software es mas importante. No uses MVC si no es la apropiada para tu codigo.

**Navegacion Transitiva**

- Un modulo debe saber lo menos posible sobre los demás
- Si A usa a B, y B usa a C, evitar `a.getB().getC()`, desde A hay que acceder a B para acceder a C. Y si queremos intercalar una clase D, tenemos que modificar estos llamados agregando `getD()` en el medio.
- Segun la Ley de Demeter hay que escribir codigo timido, A debe ser timido y no llamar a una funcion de C a traves de B. Debe conocer lo menos posible sobre los demás.
- Asi es como se forman las arquitecturas rigidas, si surge la necesidad de modificarla, será muy costoso.

**Usar condicionales negativos** Siempre es mejor usar condicionales positivos. Se debe cambiar el nombre a lo que sea necesario

```java
if (!isNotValid) {
    // ...
}

if (isValid) {
    // ...
}
```

**Envidia del ambito de otra clase** Cuando una clase esta interesada en demasiada info de otra clase. Es un problema de diseño. Lo ideal es que los metodos de una clase esten interesadas en su propia clase, y no tenga que usar variables ni funciones de otra clase.
En el ejemplo, `GameRankCalculator` tiene "envidia" de la clase `user`, ya que pide demasiadas cosas del mismo

```java

public class GameRankCalculator {
    public Rank calculateRank(User user) {
        Double hoursPlayed = user.getHoursPlayed();
        int gamesPlayed = user.getGamesPlayed();
        int achievements = user.getAchievements();

        Double winPercentage = gamesPlayed / user.getGamesWon();
        Double rank = hoursPlayed * gamesPlayed * achievements * winPercentage;

        return new Rank(rank);
    }
}
```

**Clases base dependen de las derivadas** Las clases base no deben saber nada de sus derivadas. En el ejemplo, `PlaneGeometry` no deberia tener logica asociada ni a `Rectangle` ni a `Triangle` que lo heredan, deberian encargarse ellos de sus especificaciones de clase. La clase base no deberia depender de quien la hereda.
Se recomendaria aplicar `getNumberOfSides` como abstracto.

```java
public class PlaneGeometry {
    public int getNumberOfSides() {
        if (this instanceof Rectangle) {
            return 4;
        }
        if (this instanceof Triangle) {
            return 3;
        }
        return 0;
    }
}

public class Rectangle extends PlaneGeometry {}
public class Triangle extends PlaneGeometry {}
```

**Ser arbitrario** Si la estructura del codigo es arbitraria, otros haran lo mismo sobre el, ensuciando mas el codigo. Las decisiones deben ser consistentes.

**No usar convenciones** Es importante seguir las normas establecidas para un lenguaje de programacion en particular, como las formas de llamar a las variables, tamaños de lineas, etc..
Todo el equipo debe seguir las mismas normas, si no, el codigo no sera homogeneo

**Responsabilidad fuera de lugar**

- El codigo debe ser escrito en el lugar mas natural para un lector
- No escribir el codigo donde mas convenga, si no, donde se esperaria leer
- Esto puede ir acoplado al ejemplo de PI acoplado con Circle, cuando quedaria mas claro que exista en una clase de constantes matematicas llamada `Math`

**Funciones que no dicen lo que hacen** Los nombres de las funciones deben ser explicativos, por ejemplo:

```
Date newDate = oldDate.add(5)
```

¿Qué estamos agregando acá? ¿Son 5 horas, minutos, segundos, dias?

**No conocer el algoritmo** Se deben entender los algoritmos complicados, si no los entendemos, el codigo no será todo lo limpio que puede ser. Si no se entiende, se debe refactorizar.

**Pasar Flags como argumento** Un flag, boolean, indica que la funcion hace mas de una cosa. Cada funcion debe hacer unicamente una cosa.

```java
private static final Double PREMIUM_DISCOUNT_FACTOR = 0.2;
private static final Double REGULAR_DISCOUNT_FACTOR = 0.1;

public Double calculateDiscount(Item item, boolean isPremium) {
  if (isPremium) {
    return item.getPrice() * PREMIUM_DISCOUNT_FACTOR;
  }
  return item.getPrice() * REGULAR_DISCOUNT_FACTOR;
}
```

**Funciones muertas — Dead Functions** Son funciones que no se llaman nunca. Deben eliminarse, y si llegamos a necesitarlas en un futuro, se guardan en el historial de Git.

<a id="cod65"></a>

### **Single Responsibility Principle**

- Puede ser un nombre confuso. No quiere decir que un modulo debe hacer una sola cosa, si no que **un modulo debe tener una unica razon para cambiar**
- Un modulo debe ser responsable de solo un usuario o interesado del sistema
- Un modulo es una clase dentro de POO.

Hay ciertos sintomas que diagnostican el no cumplimiento de SRP

```javascript
// Clase con una única responsabilidad: gestionar la lógica relacionada con el manejo de usuarios
class UserManager {
    // Método para agregar un nuevo usuario a la base de datos
    addUser(user) {
        // Lógica para agregar un usuario a la base de datos
        console.log(`User added: ${user.name}`);
    }

    // Método para enviar un correo electrónico de bienvenida a un nuevo usuario
    sendWelcomeEmail(user) {
        // Lógica para enviar un correo electrónico de bienvenida al nuevo usuario
        console.log(`Welcome email sent to: ${user.email}`);
    }

    // Método para generar un informe de usuarios registrados
    generateUserReport() {
        // Lógica para generar un informe de usuarios registrados
        console.log("Generating user report...");
    }
}

// Clase que representa un usuario del sistema
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Uso de las clases
const userManager = new UserManager();

const newUser = new User("John", "john@example.com");
userManager.addUser(newUser); // Output: User added: John
userManager.sendWelcomeEmail(newUser); // Output: Welcome email sent to: john@example.com
userManager.generateUserReport(); // Output: Generating user report...

```

<a id="cod66"></a>

### **Open/Closed Principle**

[Volver al indice](#cod-base)

**Un artefacto de software debe estar abierto para su extension, pero cerrado para su modificacion**. Se debe poder aumentar la funcionalidad sin modificar el funcionamiento ya existente.

¿Cómo se consigue?

- Separando el Software en componentes de alta cohesion.
- Que la direccion de las dependencias sea la correcta (se vera con mas detalle mas adelante).
- Se deben proteger a los componentes de alto nivel de los cambios en los componentes de bajo nivel.

```java
// Clase base para representar formas
class Shape {
    area() {
        // Método para calcular el área de la forma
        throw new Error("This method must be overridden");
    }
}

// Clase para representar un rectángulo
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        // Sobrescribimos el método para calcular el área de un rectángulo
        return this.width * this.height;
    }
}

// Clase para representar un círculo
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        // Sobrescribimos el método para calcular el área de un círculo
        return Math.PI * this.radius ** 2;
    }
}

// Uso de las clases
const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);

console.log(rectangle.area()); // Output: 20
console.log(circle.area()); // Output: 28.274333882308138

```

<a id="cod67"></a>

### **Interface Segregation Principle**

[Volver al indice](#cod-base)

El Principio de Segregación de Interfaces (ISP) establece que una clase no debe depender de interfaces que no utiliza. En otras palabras, las interfaces deben ser lo suficientemente específicas para cada cliente, evitando que los clientes dependan de métodos que no necesitan.

Supongamos que tenemos una interfaz `Worker` (Trabajador) que define diferentes acciones que un trabajador puede realizar. Sin embargo, algunos tipos de trabajadores solo necesitan implementar un subconjunto de estas acciones. Aplicaremos el ISP para dividir la interfaz `Worker` en interfaces más específicas:

```javascript
// Interfaz original para un trabajador
class Worker {
    work() {}
    eat() {}
    sleep() {}
}

// Interfaz para un trabajador que solo necesita trabajar
class WorkOnlyWorker {
    work() {}
}

// Interfaz para un trabajador que solo necesita comer
class EatOnlyWorker {
    eat() {}
}

// Interfaz para un trabajador que solo necesita dormir
class SleepOnlyWorker {
    sleep() {}
}

// Clase para un programador que solo necesita trabajar
class Programmer extends WorkOnlyWorker {
    work() {
        console.log("Programming...");
    }
}

// Clase para un camarero que solo necesita trabajar y comer
class Waiter extends WorkOnlyWorker, EatOnlyWorker {
    work() {
        console.log("Taking orders...");
    }

    eat() {
        console.log("Eating during break...");
    }
}

// Uso de las clases
const programmer = new Programmer();
const waiter = new Waiter();

programmer.work(); // Output: Programming...
waiter.work(); // Output: Taking orders...
waiter.eat(); // Output: Eating during break...

```

En este ejemplo, la interfaz `Worker` se divide en interfaces más específicas (`WorkOnlyWorker`, `EatOnlyWorker` y `SleepOnlyWorker`) que contienen solo los métodos necesarios para cada tipo de trabajador. Las clases concretas (`Programmer` y `Waiter`) implementan las interfaces relevantes para su tipo de trabajo, evitando así la dependencia de métodos que no necesitan. Esto cumple con el Principio de Segregación de Interfaces.

<a id="cod68"></a>

### **Liskov Substitution Principle**

[Volver al indice](#cod-base)

El Principio de Sustitución de Liskov (LSP) establece que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar la corrección del programa. En otras palabras, si tenemos una clase base y una subclase que la extiende, deberíamos poder usar un objeto de la subclase en lugar de un objeto de la clase base sin cambiar el comportamiento del programa.

Supongamos que tenemos una clase `Rectangle` (Rectángulo) y una subclase `Square` (Cuadrado). Según el LSP, deberíamos poder usar un objeto de tipo `Square` donde se espera un objeto de tipo `Rectangle` sin alterar el comportamiento esperado del programa:

```javascript
// Clase base para representar un rectángulo
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Subclase para representar un cuadrado
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

// Función para calcular el área de un rectángulo
function calculateArea(rectangle) {
    rectangle.setWidth(5);
    rectangle.setHeight(4);
    console.log("Area:", rectangle.area());
}

// Uso de las clases
const rectangle = new Rectangle(5, 4);
const square = new Square(5);

calculateArea(rectangle); // Output: Area: 20
calculateArea(square); // Output: Area: 25

```

En este ejemplo, la clase `Square` es una subclase de `Rectangle` y sobrescribe los métodos `setWidth()` y `setHeight()` para asegurarse de que siempre tenga la misma anchura y altura. Aunque `Square` es una subclase de `Rectangle`, podemos usar un objeto de tipo `Square` donde se espera un objeto de tipo `Rectangle` (como en la función `calculateArea()`) sin cambiar el comportamiento esperado del programa. Esto cumple con el Principio de Sustitución de Liskov.

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