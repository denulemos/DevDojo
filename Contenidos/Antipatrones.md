# Antipatrones

### **Que es un antipatron?**

Un antipatrón de diseño es una implementación que invariablemente conduce a una mala solución. Al documentarse junto con los patrones de diseño, se dan argumentos para no escoger malos caminos en lugar de simplemente usar la intuición y el sentido común.
El término se origina inspirado en el libro Design Patterns, el libro Anti-Patterns describe los antipatrones como la contrapartida natural al estudio de los patrones de diseño.
El estudio formal de errores que se repiten permite reconocer y reconducir los elementos involucrados hacia una mejor solución. Los antipatrones no se mencionan en el libro original de Design Patterns, puesto que éste es anterior.
Los antipatrones se consideran una parte importante de una buena práctica de programación. Es decir, un buen programador procurará evitar los antipatrones siempre que sea posible, lo que requiere su reconocimiento e identificación tan pronto como sea posible, dentro del ciclo de vida del software.
El concepto se puede aplicar a la ingeniería en general, e incluso a cualquier tarea realizada por el hombre. Aunque no se escucha con frecuencia fuera del campo ingenieril, la noción está ampliamente extendida.

### **Que tipos de antipatrones para el diseño de Software existen?**

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

### **Que tipos de Antipatrones para el Diseño Orientado a Objetos existen?**

- **Acoplamiento secuencial (Sequential coupling)**: Construir una clase que necesita que sus métodos se invoquen en un orden determinado o secuencia.
- **Base Bean**: Heredar funcionalidad de una clase utilidad en lugar de delegar lo que se necesite en ella.