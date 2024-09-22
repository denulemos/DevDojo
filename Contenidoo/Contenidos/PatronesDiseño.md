


### **¿Para qué sirven los patrones de diseño?**

Son soluciones basándonos en la experimentación de problemas comunes y recurrentes en varios proyectos de programación. Algunos pueden parecer abstractos en su explicación, le delegan al diseñador el esfuerzo de reconocer el problema y adaptar la solución. Son utilizados también como un facilitador de la comunicación, es decir, si todos los especialistas de IT conocen estos patrones de diseño, pueden ver cualquier proyecto y ya intuir como funciona, y cuál es la idea detrás de su tipo de organización. Son diseños orientados al cambio.

### **¿Cuáles son los elementos de un patrón de diseño?**

Los elementos de un patrón de diseño incluyen el nombre del patrón, que es el nombre por el cual el patrón es reconocido o conocido. Puede haber más de un nombre para un mismo patrón.

### **¿Cuáles son los tipos de patrones de diseño?**

- **Creacionales**: Se encargan de la creación de objetos, tratan de abstraer el proceso de creación de objetos. Resuelven problemas relacionados con la creación o instanciacion de objetos
- **Estructurales**: Se encargan de la composición de clases o de objetos. Resuelven problemas relacionados a la estructura y composición interna de los objetos, como problemas de asociación y agregación. No son fáciles de entender a la primera, y la mayoría son muy abstractos.
- **Comportamiento**: Se encargan de la comunicación entre objetos.  Estudian el comportamiento orientado a la comunicación entre objetos y conjuntos de objetos
- **De arquitectura**: Son patrones a nivel componente, normalmente operan en algún tipo de capa lógica. Expresan un esquema organizativo fundamental. El primer patrón postulado que define a este en GoF es el MVC
- **De interacción**: La primera aplicación de este se dio en el diseño de interfaces de usuarios. Son 5 patrones de interfaz, Windows per task, Few Panes, Standard Panes, Nouns and Verbs y Short Menú.
- **Del GRASP**: Son patrones generales de software relacionados con la asignación de responsabilidades. Son una serie de buenas prácticas de aplicación recomendable en el diseño de software que provienen de autores anteriores y paradigmas previos.
- **De negocio**: Obedecen a situaciones de negocio específico
- **Dialécticos**: Son patrones de bajo nivel específicos para un lenguaje de programación o entorno concreto

### **¿Qué es la intención y motivación de un patrón de diseño?**

La intención y motivación de un patrón de diseño se refiere a un resumen del problema que resuelve este patrón. Es un párrafo breve que explica su necesidad.

### **¿Qué es la aplicabilidad de un patrón de diseño?**

La aplicabilidad de un patrón de diseño menciona los usos más comunes y los criterios para aplicar cierto patrón. Suelen cambiar mucho con el tiempo dependiendo de la evolución de algunos frameworks o lenguajes.

### **¿Qué es el segundo nombre de un patrón de diseño?**

El segundo nombre de un patrón de diseño son los alias que puede tener un patrón según se llamaba en las distintas comunidades.

### **¿Qué es la estructura de un patrón de diseño?**

La estructura de un patrón de diseño es una enumeración y descripción de las entidades o clases concretas y abstractas, que explican los roles dentro del patrón. Pueden ser pequeños diagramas de clases que describan las clases e interfaces participantes o componentes del patrón.

### **¿Quiénes son los participantes de un patrón de diseño?**

Los participantes de un patrón de diseño son tanto las clases abstractas como concretas que participan en el patrón en las documentaciones.

### **¿Qué son las colaboraciones en un patrón de diseño?**
Las colaboraciones en un patrón de diseño se refieren a cómo se relacionan los participantes del patrón.

### **¿Cuáles son las consecuencias de implementar un patrón de diseño?**

Las consecuencias de implementar un patrón de diseño se refieren a lo positivo y negativo de su implementación, es de las cosas que más nos interesa.

---

# **Patrones Estructurales**

- **Adapter**: Se adapta a un determinado objeto para que pueda ser usado por otro, dado que de otro modo no se podría. Su nivel de uso es muy alto
- **Bridge**: Nos permite separar a una abstracción de su implementación. Su uso es nivel medio a bajo
- **Composite**: Permite, ayuda y simplifica la forma de tratar a objetos simples y compuestos de un mismo modo. Su uso es medio
- **Decorador**: Suma o añade funcionalidad a un objeto de manera dinámica. Su empleo es medio, se emplea usualmente con Composite.
- **Facade**: Provee de una interfaz o punto de entrada para acceder a la funcionalidad de un grupo de objetos de un sub sistema. Su utilización es alto.
- **Flyweight**: El patrón busca reducir la redundancia de objetos que viven en memoria cuando se trata de objetos pequeños con la misma información. Su empleo es medio, alto.

---

# **Patrones Creacionales**

- **Singleton**: Se ocupa de que exista una unica instancia de un determinado objeto. Es muy usado
- **Factory Method y/o Factory Simple**: Busca simplificar la creacion de objetos de una determinada familia definiendo una interfaz en comun. Su nivel de uso es alto.
- **Abstract Factory:** Busca centralizar la fabricación de objetos de distintas familias en únicamente un lugar. Su empleo es bajo.
- **Builder**: Se ocupa de construir objetos complejos. Su empleo es bajo.
- **Prototype**: Nos permite crear una copia exacta (o casi) de un objeto en memoria directamente sin necesidad de interactuar con su caso. Su utilización es bajo.
- **Object Pool**: No es un patrón GoF. Permite generar, tener, mantener y reutilizar una serie de objetos en memoria para reducir el trabajo de los Garbage Collector. Su uso es medio a alto.

---

# **Patrones Comportamiento**

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

---

# **Patrones De otros autores**

Son patrones de diseño por fuera de GoF que tambien son usados de manera media a baja

- **Type Object**: Permite desacoplar un objeto de su clase, permitiendo crear nuevas clases de forma dinámica en ejecución.
- **Type Square**: Es el resultado del uso del Type Object y del patron Property. Permite definir un modelo de elemento y propiedad.

---

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
- **Fallo de clase vacía (Empty Subclass Failure)**: Crear una clase que no supera el test de la subclase vacía, es decir, que se comporta de manera diferente cuando se invoca desde una subclase que no añade modificación o funcionalidad alguna.
- **Llamar a Super (Call Super)**: Obligar a las subclases a llamar a un método de la superclase que ha sido sobrescrito.
- **Modelo de dominio Anémico (Anemic Domain Model)**: Usar un modelo del dominio sin ninguna lógica de negocio que de valor. Esto no es un enfoque orientado a objetos porque cada objeto debería tener tanto propiedades como comportamiento asociado específico (que haga transformaciones) y no solo para llevar datos desde la base a la pantalla.
- **Objeto Sumidero (Object Cesspool)**: Reusar objetos no adecuados realmente para el fin que se persigue.
- **Poltergeist**: Emplear objetos cuyo único propósito es pasar la información a terceros objetos sin aportar valor o realizar transformaciones.
- **Problema del círculo-elipse (circle-ellipse problem)** : Crear variables de tipo pensando en los valores de posibles subtipos, generando problemas de bifurcaciones lógicas que no son predecibles.
- **Problema del yoyó (yo-yo problem)**: Construir estructuras (por ejemplo de herencia) que son difíciles de comprender debido a su excesiva fragmentación.
- **Singletonitis**: Abuso de la utilización del patrón singleton. Este concepto es también aplicable a cualquier tipo de patrón de diseño en el que se abuse de su implementación en lugares no adecuados o necesarios. Suele ocurrir con programadores con poca experiencia
- **YAFL (“yet another layer” u otra capa más no deseada)**: Se trata de añadir capas innecesarias a un programa, sub-programa, biblioteca o framework. Esta tendencia se extendió bastante después de que se publicase el primer libro sobre patrones.

---

# Patrones de Diseño - Ejemplos

### Singleton

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
---

# Design Thinking

## **Cuáles son las ramas del Design Thinking?**

- **Centrado en el Humano**: Los cambios son para ser usados por humanos. Personas y no tanto clientes. Ganar empatía en lo que les gustaría usar en cada uno de sus trabajos.
- **Creativo**: Es pensar por fuera de la caja, lo cual nos ayuda a ver las soluciones desde otra perspectiva y no viéndolo desde un punto de vista tan estático al momento de solucionar cosas. Dibujar, Role Play, etc..
- **Iterativo**: Es generar una idea, compartirla, tener feedback, y en base al mismo y mejorarla. Eso es la iteración. No es cuestión de ser el más inteligente, sí no, el tener la idea más inteligente, también mostrando a las mejoras a los usuarios reales, para tener un feedback un poco más directo.
- **Conducido por los Prototipos:** Se pasan por varios prototipos antes de llegar a la idea final, para poder testear en cada estadio el estado de la idea, y como irá a resultar.
- **Colaborativo:** Es importante que haya diversidad de cabezas en este caso, para poder sacar ideas mejores, y creativas

## **Cuáles son los estadios de Design Thinking?**

| Discover | Describe | Idea y Prototipo | Test | Implement |
| --- | --- | --- | --- | --- |
| Es ver como es el cliente, que es lo que desea, y ganar cierta empatía frente a su pedido. ¿Por qué lo pide? ¿Qué espera de eso? ¿A quiénes está dirigido?, es la parte más “profunda” de todas. | Aquí todos los integrantes detallan lo que aprendieron / descubrieron. Convierten estos descubrimientos en acciones para el proyecto futuro, y esto ayuda a que sea más claro como se debe mover el equipo de ahí en adelante. | Es acerca de convergir ideas hechas en la fase de Descripción, ahí se ingenian todas las posibles soluciones ante el problema. No se debe juzgar ninguna idea, se debe apuntar a un rápido prototipo. | Esto se realiza en el Desarrollo temprano, de los prototipos que aún están a prueba. Se comparten los desarrollos y los mismos se someten a cierto tipo de Feedback. También ayuda a priorizar algunas funcionalidades por encima de otras. Estas distintas funcionalidades son testeadas. | Se lanza el desarrollo, no sin haber sido antes testeado y probado. |
| User Research (field studies, shadowing) - Stakeholder Interviews and Mapping - Trends Research - Quantitative Analysis - Benchmarking - Capabilities Assessment | Personas - Journey Map and Blueprints - Storyboards - Problem-Framing - Business Drivers, Experience Vision & Sketching | System Design - Rapid Prototyping - Sketching - Cost-Value Relationships - Round Robin - Touchpoint Reframing | A-B Testing - Desirability Testing - Usability Testing - Multivariate Testing - Proof-of-Concept - Feedback and Surveys | Analytics - Market Reactions - New Features & Upgrades - Governance Modeling |
