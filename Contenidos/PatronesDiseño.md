# Patrones de Diseño

### **¿Qué es un patrón de diseño?**

Un patrón de diseño es una solución descubierta para un problema informático que se presenta recurrentemente y de una forma especifica, para que sea reutilizada en otros desarrollos en cualquier otro lenguaje.

### **En qué se inspiran los patrones de diseño?**

Se inspiran en los patrones de construcción en la arquitectura, en esa disciplina se usa el mismo concepto para la comunicación entre colegas y en otros procesos de la disciplina.

### **¿Qué se obtiene con la implementación de patrones de diseño?**

- **Reutilización de código**: Se puede reutilizar el código que ya ha sido probado y que se sabe que funciona.
- **Facilita la comunicación**: Los patrones de diseño permiten que los desarrolladores se comuniquen de una manera más efectiva.
- **Facilita el mantenimiento del código**: Los patrones de diseño permiten que el código sea más fácil de mantener.
- **Facilita la escalabilidad del código**: Los patrones de diseño permiten que el código sea más fácil de escalar.

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

