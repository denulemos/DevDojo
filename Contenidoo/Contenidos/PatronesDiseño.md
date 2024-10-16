

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
