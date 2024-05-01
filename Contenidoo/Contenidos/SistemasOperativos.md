# Sistemas Operativos

Un sistema operativo debe asignar los recursos de la computadora entre las necesidades potencialmente competitivas de múltiples procesos.En el caso del procesador, el recurso que se debe asignar es el tiempo de ejecución en el procesador. La forma de asignarlo es la planificación.La función de planificación debe estar diseñada para satisfacer varios objetivos que incluyen:

- Equidad
- Ausencia de inanición de cualquier proceso
- Uso eficiente del tiempo del procesador
- Baja sobrecarga

**Objetivos**

- Asignar procesos a ejecutar por el/los procesador/es
- Tiempo de respuesta
- Rendimiento del sistema
- Rendimiento del procesador

En un sistema de un solo procesador, sólo se puede ejecutar un proceso a la vez. Otros deberán esperar hasta que la CPU esté libre y se pueda reprogramar. El objetivo de la multiprogramación es tener algún proceso en marcha en todo momento, para maximizar la utilización de la CPU.

La idea es relativamente simple. Un proceso se ejecuta hasta que debe esperar, típicamente para la terminación de una petición de E/S. En un sistema informático simple, la CPU se queda inactiva. Todo este tiempo de espera se desperdicia (no se realiza ningún trabajo útil). Con la multiprogramación, se trata de utilizar este tiempo de manera productiva. Para esto, se mantienen varios procesos en la memoria a la vez. Cuando un proceso tiene que esperar, el sistema operativo toma la CPU saca a ese proceso y da la CPU a otro proceso. Cada vez que un proceso tiene que esperar, otro proceso puede asumir el uso de la CPU.La programación de este tipo es una función fundamental del sistema operativo.

### 🟢 Tipos de Planificacion

En muchos sistemas, esta actividad de planificación se divide en tres funciones independientes:

| Planificacion a Largo Plazo | La decision de añadir un proceso al conjunto de procesos a ser ejecutados |
| --- | --- |
| Planificacion mediano plazo | La decision de añadir un proceso al numero de procesos que estan parcial o totales en la memoria principal |
| Planificacion corto plazo | La decision por la que un proceso disponible sera ejecutado por el procesador |

### 🟢 **Planificación del procesador**

Las decisiones de planificación de la CPU pueden tener lugar bajo las siguientes cuatro circunstancias:

1. Cuando un proceso cambia del estado de ejecución al estado de espera o bloqueado (por ejemplo, como resultado de una petición de E/S o una invocación de wait() para la terminación de un proceso hijo)
2. Cuando un proceso cambia del estado de ejecución al estado preparado (por ejemplo, cuando se produce una interrupción)
3. Cuando un proceso cambia del estado de espera al estado preparado (por ejemplo, al finalizar la llamada de E/S que había generado el bloqueo)
4. Cuando un proceso termina

Para las situaciones 1 y 4, no hay nada para planificar. Se debe tomar un nuevo proceso para su ejecuciónHay una opción, sin embargo, para las situaciones 2 y 3.

Cuando la planificación se lleva a cabo en las circunstancias 1 y 4, se dice que el esquema de planificación es **no expropiativo** o **cooperativo**. De lo contrario, es **expropiativo**. Bajo programación no expropiativa, una vez que a la CPU se le ha asignado un proceso, el proceso se mantiene en la CPU hasta que la libera, ya sea terminando o cambiando al estado de espera o bloqueo.

### 🟢 **Modos de decisión**

- No expropiativo *(non preemptive)*. Cooperativo
    - Una vez que un proceso está en el estado de ejecución, continuará hasta que termina o se bloquea para E/S
    - Riesgo de acaparamiento injusto de la CPU
    - Windows 3.11, Apple Macintosh (original)
- Expropiativo *(preemptive)*
    - El proceso actualmente en ejecución puede ser interrumpido y movido al estado Listo por el SO
    - Permite un mejor servicio ya que ningún proceso puede monopolizar el procesador durante mucho tiempo
    - Para implementar tiempo compartido y tiempo real, es necesaria una planificación expulsiva o expropiativa
    - Riesgo en la consistencia de datos compartidos
    - Unix, Windows, Mac OS X ...

### 🟢 Política de planificación

¿Cuál es la mejor decisión a tomar para que un proceso entre en la CPU?¿En orden de llegada? ¿Primero la tarea más corta? ¿Por prioridades? Se deben definir posibles criterios de valoración de las políticas a aplicar, ya que existen diferentes algoritmos de planificación de CPU que tendrán propiedades diferentes.La elección de un algoritmo particular puede favorecer una clase de procesos sobre otra. Al elegir que algoritmo utilizar en una situación particular, se debe considerar las propiedades de los diversos algoritmos.

No existe una política de planificación óptima para todos los criterios, por lo cual habrá que llegar a un compromiso

### 🟢 **Criterios de planificación**

Existen muchos criterios para comparar algoritmos de planificación de CPU. Las características que se utilizan para la comparación pueden hacer una diferencia sustancial en la que un determinado algoritmo se juzga mejor. Algunos de estos criterios son:

- **Utilización de la CPU:** Mantener la CPU lo más ocupada posible. Conceptualmente, la utilización de la CPU puede variar de 0 a 100%. En un sistema real, debería oscilar entre el 40% (sistema ligeramente cargado) y el 90% (sistema muy cargado)
- **Rendimiento:** Si la CPU está ocupada ejecutando procesos, entonces se está trabajando. El rendimiento es una medida de trabajo que indica el número de procesos que se completan por unidad de tiempo
- **Tiempo de retorno:** Desde el punto de vista de un proceso en particular, el criterio importante es cuánto tiempo se tarda en ejecutar ese proceso. El intervalo entre el tiempo de presentación de un proceso y el tiempo de finalización es el tiempo de respuesta. El tiempo de respuesta es la suma de los periodos que pasan esperando para entrar en la memoria, esperando en la cola lista, ejecutándose en la CPU y realizando E/S
- **Tiempo de espera:** El algoritmo de programación de la CPU no afecta la cantidad de tiempo durante el cual un proceso se ejecuta o hace E/S. Afecta sólo a la cantidad de tiempo que un proceso pasa esperando en la cola lista. El tiempo de espera es la suma de los períodos de espera en la cola lista.
- **Tiempo de respuesta:** En un sistema interactivo, el tiempo de entrega puede no ser el mejor criterio. A menudo, un proceso puede producir alguna salida bastante temprana y puede continuar computando nuevos resultados mientras que los resultados anteriores se están produciendo al usuario. Por lo tanto, otra medida es el tiempo desde la presentación de una solicitud hasta que se produce la primera respuesta. Esta medida, llamada tiempo de respuesta, es el tiempo que tarda en comenzar a responder, no el tiempo que tarda en producir la respuesta. El tiempo de respuesta está generalmente limitado por la velocidad del dispositivo de salida

### 🟢 **Algunos algoritmos**

**FCFS *(First come, first served)***

El algoritmo de programación de CPU más sencillo es el algoritmo de programación de la primera llegada, primero servido (FCFS).

Con este esquema, el proceso que primero solicita la CPU es el primero que se le asigna. La implementación de la directiva FCFS se administra fácilmente con una cola FIFO.

Cuando un proceso entra en la cola lista, su PCB está vinculado a la final de la cola. Cuando la CPU está libre, se asigna al proceso en la cabeza de la cola. El proceso en ejecución se elimina de la cola. El código para la programación FCFS es fácil de escribir y entender. El lado negativo de este algoritmo es el tiempo medio de espera que a menudo bastante largo

**SPN/SJF *(Shorted Process Next/Shorted Job First)***

Un enfoque diferente para la planificación de la CPU es el algoritmo de planificación de la tarea más corta (SJF). Este algoritmo asocia con cada proceso la longitud de la siguiente ráfaga de CPU del proceso. Cuando la CPU está disponible, se la asigna al proceso que tiene la ráfaga de CPU más pequeña. Si las siguientes ráfagas de CPU de dos procesos son las mismas, se puede utilizar la planificación FCFS para romper el empate.

Aunque el algoritmo SJF es óptimo, no se puede implementar en el nivel de programación de CPU a corto plazo, debido a que no hay manera de saber la longitud de la próxima ráfaga de la CPU. Una aproximación a este problema es tratar de aproximar la programación SJF. Es posible que no se conozca la longitud de la siguiente ráfaga de CPU, pero se podría predecir su valor, asumiendo que la próxima ráfaga de uso de la CPU sea similar, en duración, a las anteriores. Mediante el cálculo de una aproximación de la duración de la siguiente ráfaga de la CPU, se puede seleccionar el proceso con la ráfaga de CPU más corta prevista

**SRT *(Shortest Remaining Time)***

Es un método de planificación con selección del proceso con tiempo restante más corto. (Versión expropiativa del proceso más corto -política SPN-).

El proceso en CPU es desalojado si llega a la cola un proceso con duración más corta. Para esto, se debe estimar el tiempo de procesamiento

### 🟢 **Planificación basada en prioridades**

En muchos sistemas, a cada proceso se le asigna una prioridad y el planificador otorgará tiempo de CPU a un proceso de prioridad mayor sobre un proceso de prioridad menor.

Cada proceso tiene una prioridad asignada.

La política puede ser expropiativa o no, pudiéndose definir las prioridades:

- De forma interna (por el SO)
- Externa (definida por los usuarios)

El SJF/SPN es un ejemplo (prioridad = duración  estimada)

Existe el riesgo de "inanición" de los procesos con menor prioridad. Una solución: envejecimiento (aging). Aumentar progresivamente la prioridad a los procesos en espera

La Figura anterior muestra el uso de las prioridades.

Por claridad, el diagrama de colas está simplificado, ignorando la existencia de múltiples colas bloqueadas y de estados suspendidos.

En lugar de una sola cola de procesos listos para ejecutar, se proporcionan un conjunto de colas en orden descendente de prioridad:

(RQ: Request Queue) RQ0, RQ1, ... RQn, con la prioridad[RQi] > prioridad[RQj]  para i<j .

Cuando se va a realizar una selección en la planificación, el planificador comenzará en la cola de listos con la prioridad más alta

(RQ0). Si hay uno o más procesos en la cola, se selecciona un proceso utilizando alguna política de planificación (FCFS por ejemplo). Si RQ0 está vacía, entonces se examina RQ1, y así sucesivamente.

Un problema de los esquemas de planificación con prioridades es que los procesos con prioridad más baja pueden sufrir inanición. Esto sucederá si hay siempre un conjunto de procesos de mayor prioridad listos para ejecutar

### 🟢 Planificación de multiprocesadores

Cuando un sistema informático tiene más de un procesador, el diseño de la planificación plantea nuevas cuestiones

Se puede clasificar los sistemas multiprocesador como:

- **Débilmente acoplado o multiprocesador distribuido, o cluster:** Formado por sistemas relativamente autónomos; cada procesador tiene su propia memoria principal y canales de E/S
- **Procesadores de funcionalidad especializada:** Hay un procesador de propósito general maestro y procesadores especializados que son controlados por el procesador maestro al cual le proporcionan servicios
- **Procesamiento fuertemente acoplado:** Formado por un conjunto de procesadores que comparten la memoria principal y están bajo el control integrado de un único sistema operativo

### 🟢 Multiprocesamiento asimétrico

Es un  enfoque de la planificación de la CPU en donde, un sistema multiprocesador tiene todas las decisiones de programación, procesamiento de E/S y otras actividades del sistema gestionadas por un único procesador: el servidor maestro. Los otros procesadores ejecutan sólo el código de usuario.

Este multiprocesamiento asimétrico es simple porque sólo un procesador accede a las estructuras de datos del sistema, reduciendo la necesidad de compartir datos.

### 🟢 Multiprocesamiento simétrico (SMP)

Un segundo enfoque utiliza el multiprocesamiento simétrico (SMP), donde cada procesador es auto-programado. Todos los procesos pueden estar en una cola de procesos listos, común, o cada procesador puede tener su propia cola privada de procesos listos. Independientemente, la planificación procede haciendo que el planificador de cada procesador examine la cola lista y seleccione un proceso a ejecutar. Si se tiene varios procesadores tratando de acceder y actualizar una estructura de datos común, el planificador debe programarse cuidadosamente.

Se debe asegurar de que dos procesadores independientes no elijan programar el mismo proceso y que los procesos no se pierdan de la cola. Prácticamente todos los sistemas operativos modernos soportan SMP, incluyendo Windows, Linux y Mac OS X.

Observando lo que sucede con la memoria caché cuando un proceso se ha estado ejecutando en un procesador específico, los datos más recientemente accedidos por el proceso están en el caché para el procesador. Como resultado, los accesos de memoria sucesivos por el proceso se satisfacen a menudo en la memoria caché.

Si el proceso migrara a otro procesador, el contenido de la memoria caché debe ser invalidado para el primer procesador, y la memoria caché para el segundo procesador debe ser recargada. Debido al alto costo de invalidar y recargar cachés, la mayoría de los sistemas SMP intentan evitar la migración de procesos de un procesador a otro y en su lugar intentan mantener un proceso en ejecución en el mismo procesador. Esto se conoce como afinidad del procesador, es decir, un proceso tiene una afinidad para el procesador en el que se está ejecutando actualmente.

En los sistemas SMP, es importante mantener la carga de trabajo equilibrada entre todos los procesadores para aprovechar al máximo los beneficios de tener más de un procesador. De lo contrario, uno o más procesadores pueden permanecer inactivos mientras otros procesadores tienen cargas de trabajo altas, junto con listas de procesos que esperan la CPU. El balanceo de carga intenta mantener la carga de trabajo uniformemente distribuida entre todos los procesadores en un sistema SMP. Es importante tener en cuenta que el equilibrio de carga suele ser necesario sólo en sistemas en los que cada procesador tiene su propia cola privada de procesos elegibles para ejecutar. En los sistemas con una cola de ejecución común, el equilibrio de carga es a menudo innecesario, porque una vez que un procesador se vuelve inactivo, inmediatamente extrae un proceso ejecutable de la cola de ejecución común. También es importante notar, sin embargo, que en la mayoría de los sistemas operativos contemporáneos que soportan SMP, cada procesador tiene una cola privada de procesos elegibles.

Hay dos enfoques generales para el equilibrio de carga: migración de empuje *(push)* y migración de extracción *(pull)*.

Con la migración de empuje, una tarea específica periódicamente comprueba la carga de cada procesador y, si encuentra un desequilibrio, distribuye uniformemente la carga moviendo (o empujando) los procesos de procesadores sobrecargados a procesadores inactivos o menos ocupados.

La migración de extracción se produce cuando un procesador inactivo extrae una tarea de espera de un procesador ocupado.
