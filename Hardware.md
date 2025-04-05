<a name="har-base"></a>

# [Hardware y Sistemas Operativos](#har)

| Temas |
|----------|
| [Gabinete](#har1) |
| [Motherboard](#har2) |
| [Microprocesador](#har3) |
| [Memoria RAM](#har4) |
| [Disco Rigido](#har5) |
| [Lectograbadora CD/DVD](#har6) |
| [Placas adicionales](#har7) |
| [Cuáles son los códigos de respuesta más comunes?](#har37) |
| [¿Qué son las Redes Inalámbricas?](#har44) |

| Sistemas Operativos y Planificacion |
|----------|
| [¿Que es un Sistema Operativo?](#arc21) |
| [FCFS (First come, first served)](#arc22) |
| [SPN/SJF (Shorted Process Next/Shorted Job First)](#arc23) |
| [SRT (Shortest Remaining Time)](#arc24) |

---

<a id="har"></a>

## Hardware, Sistemas, Infraestructura y Arquitectura

<a id="har1"></a>

### **Gabinete**

[Volver al indice](#har-base)

Es el principal contenedor de todos los componentes de una computadora. Más allá del diseño, la búsqueda de un buen gabinete debe incluir una mirada atenta a estos aspectos técnicos:

- **La chapa**: La misma debe ser de buena calidad para garantizar una adecuada protección de los componentes.
- **La fuente**: Es importante que sea compatible con el tipo de motherboard que vamos a usar, y sus requerimientos de consumo eléctrico, ya que podemos tener problemas de funcionamiento si la cantidad de potencia que nuestra fuente entrega no es suficiente para el equipo que estamos ensamblando.
- **Ventilación**: Es un punto clave, porque cuanto más potente es el procesador, más será el calor que va a emitir, y debemos asegurarnos que el gabinete posee buenas cualidades de disipación del calor y flujo de aire en su interior.
- **Tamaño**: La selección del mismo estará relacionada con el tipo de uso que le daremos al equipo, considerando que a menor tamaño de gabinete menor será el espacio entre los componentes y por consiguiente será más complicada la disipación de calor y el trabajo sobre el mismo cuando se requiera realizar cambios o reparaciones.

<a id="har2"></a>

### **Motherboard**

[Volver al indice](#har-base)

Es el elemento principal de toda la PC, en el que se encuentran todos los demás aparatos y dispositivos. La principal funcion es generar a través de un circuito eléctrico la conexión entre los componentes. De ella depende tanto el rendimiento del sistema en índole general como así también el funcionamiento de los elementos que lo componen.

Se diseña básicamente para realizar tareas específicas vitales para el funcionamiento del ordenador (Conexión física, Administración, Control de energia, Comunicación datos, Temporización, Sincronismo, Control y monitoreo.. ). Para que la placa base cumpla con su cometido, lleva instalado un software muy básico denominado BIOS (Basic Input / Output System).

- **Zócalo del microprocesador**: Lugar donde se alojara el microprocesador, existen diversos modelos para cada marca de procesadores, por lo que debemos asegurarnos que estamos usando el mother indicado para el mismo, de lo contrario no podremos colocar el procesador.
- **Chipset Northbridge**: Es uno de los chips más importantes. Su función es conectar al microprocesador con la memoria RAM, el puerto AGP y el puerto PCI express.
- **Chipset Southbridge**: Su misión es controlar todas las funciones de entrada y salida. Además se conecta al Northbridge por medio de un bus específico.
- **Slot de expansion**: Son ranuras que permiten la incorporación de tarjetas especificas adicionales. Pueden ser usados para ingresar tarjetas de video, sonido, etc..
- **Puertos I/O (Entrada y Salida)**:  Son puertos que nos permiten interconectar nuestra computadora con otros dispositivos externos.
- **Zócalos de memoria**: Albergan a las memorias RAM que se adicionan al mother.
- **Memoria ROM**: Aloja al BIOS del mother, este es el que nos permite configurar al sistema y sus componentes.
- **Pila**: Mantiene tensión continua en el mother de modo de guardar todas las configuraciones necesarias.
- **Conectores Serial ATA**: Son conectores de alto rendimiento. Se usan para conectar discos rígidos de gran capacidad y reemplazan al IDE.
- **Conectores IDE - FDD (sin uso)**: Se encargan de generar la conexión entre la disquetera, el rígido y las lectograbadoras.

<a id="har3"></a>

### **Microprocesador**

[Volver al indice](#har-base)

Es la parte de la pc diseñada para llevar a cabo la ejecucion de los programas. Es comparable a un cerebro, su funcion se basa en la ejecucion de instrucciones a muy bajo nivel haciendo operaciones logicas simples. Tiene millones de elementos microscopicos llamados transistores.

<a id="har4"></a>

### **Memoria RAM**

[Volver al indice](#har-base)

Es donde la computadora guarda los datos que esta usando al momento de procesarlos o trabajar con ellos. El almacenamiento es considerado temporal porque los datos y programas permanecen en ella mientras la computadora esta encendida, desapareciendo cuando la misma se apaga.  Físicamente, estan constituidas por un conjunto de chips o módulos de chips normalmente conectados a la tarjeta madre. Son rectangulos negros soldados en grupos a unas placas con pines/contactos. La diferencia entre la RAM y otros tipos de memoria de almacenamiento, es que la RAM es mucho más rapida.

<a id="har5"></a>

### **Disco Rigido**

[Volver al indice](#har-base)

Es el dispositivo encargado de almacenar informacion de forma persistente en la PC. Generalmente usan un sistema de grabacion magnetica analogica. En este disco encontramos dentro de la carcasa una serie de platos metalicos apilados girando a gran velocidad. Sobre estos se situan los cabezales encargados de leer o escribir los impulsos magneticos.  El disco rigido es el sistema de almacenamiento más importante de la pc, y en el se guarda, por ejemplo el SO.

- **IDE/ATA**: Es el standar más difundido en el mercado, a traves de los años fue mejorando la velocidad de transferencia de datos entre dispositivos, pero actualmente se encuentra en retirada.
- **SCSI**: Es una interfaz standar para la transferencia de datos entre periféricos en el bus de la pc, fue usada en servidores y computadoras con necesidad de gran velocidad de transferencia de datos.
- **SATA**: Es la reemplazante del IDE. Es actualmente el estandar más usado en el mercado, mejorando las velocidades.

<a id="har6"></a>

### **Lectograbadora CD/DVD**

[Volver al indice](#har-base)

Permiten la lectura de CDs y DVDs. La realizan a traves de la utilización de discos opticos los cuales son leidos y escritos mediante un laser. Permiten guardar grandes cantidades de datos en espacios reducidos.

<a id="har7"></a>

### **Placas adicionales**

[Volver al indice](#har-base)

- **Placa de red**: permite conectar una pc a una red de computadoras. Esto nos deja compartir y acceder a varios recursos que esten disponibles en la red.
- **MODEM**: Dispositivo que transforma las señas digitales de una computadora en analogicas y viceversa, para poder enviar/recibir paquetes de datos.
- **Placa de video**: Componente electronico requerido para generar una señal de video que se manda a una pantalla de video por medio de un cable. Se pueden visualizar los datos que procesa la computadora en un lenguaje humano.
- **Placa de sonido**: Permite reproducir sonidos.


<a id="har37"></a>

### **Cuáles son los códigos de respuesta más comunes?**

[Volver al indice](#har-base)

- **404** Not Found
- **403** Forbidden
- **401** No Autorizado
- **500** Internal Server Error
- **503** Servicio no disponible
- **200** Ok
- **201** Creado
- **202** Aceptado

Los códigos 400 hacen referencia a errores con la request, 500 hacen referencia a errores en el servidor. 200 siempre refiere a respuestas positivas

<a id="har44"></a>

### **¿Qué son las Redes Inalámbricas?**

[Volver al indice](#har-base)

El término red inalámbrica se utiliza en informática para designar la conexión de nodos sin necesidad de una conexión física , esta se da por medio de ondas electromagnéticas. La transmisión y la recepción se realizan a través de puertos.  En la actualidad este tipo de redes ha cobrado gran importancia, ya que entre sus principales ventajas se puede destacar su costo, ya que se elimina todo el cable Ethernet y conexiones físicas entre nodos, sin embargo también cuenta con una desventaja considerable ya que para este tipo de red se debe tener un nivel de seguridad mucho más exigente y robusto para evitar el uso no autorizado.

Algunos medios de conexión son:

- **Radiofrecuencias:** Es un tipo de red muy actual, usada en distintas empresas dedicadas al soporte de redes en situaciones difíciles para el establecimiento de cableado, como es el caso de edificios antiguos no pensados para la ubicación de los diversos equipos componentes de una red de ordenadores. Los dispositivos inalámbricos que permiten la constitución de estas redes utilizan diversos protocolos como el WiFi, el estándar IEEE 802.11. El cual es para las redes inalámbricas, lo que Ethernet para las redes de área local (LAN) cableadas.
- **Infrarrojo:** Se trata de emisores/receptores de las ondas infrarrojas entre ambos dispositivos, cada dispositivo necesita “ver” al otro para realizar la comunicación por ello su escasa utilización a gran escala.
- **Microondas:** Su funcionamiento se basa en el envío /recepción de datos por intermedio de microondas, para lograrlo es necesario instalar antenas en un área despejada de árboles u otras obstrucciones, tiene como principal ventaja facilitar su instalación en zonas donde por problemas de infraestructura es muy difícil acceder al cableado estructurado, en contrapartida su elevado costo la convierte en una solución no apta para uso doméstico.
- **Conectores IDE-FDD:** Se encargan de generar la conexión entre la disquetera, el rígido y las lectograbadoras.
- **Conectores Serial ATA:** Son conectores de alto rendimiento, se usan para conectar discos rígidos de gran capacidad y que reemplazan al IDE.

<a id="arc21"></a>

### **¿Que es un Sistema Operativo?**

[Volver al indice](#har-base)

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

<a id="arc22"></a>

### **FCFS (First come, first served)**

[Volver al indice](#har-base)

El algoritmo de programación de CPU más sencillo es el algoritmo de programación de la primera llegada, primero servido (FCFS).

Con este esquema, el proceso que primero solicita la CPU es el primero que se le asigna. La implementación de la directiva FCFS se administra fácilmente con una cola FIFO.

Cuando un proceso entra en la cola lista, su PCB está vinculado a la final de la cola. Cuando la CPU está libre, se asigna al proceso en la cabeza de la cola. El proceso en ejecución se elimina de la cola. El código para la programación FCFS es fácil de escribir y entender. El lado negativo de este algoritmo es el tiempo medio de espera que a menudo bastante largo

<a id="arc23"></a>

### **SPN/SJF (Shorted Process Next/Shorted Job First)**

[Volver al indice](#har-base)

Un enfoque diferente para la planificación de la CPU es el algoritmo de planificación de la tarea más corta (SJF). Este algoritmo asocia con cada proceso la longitud de la siguiente ráfaga de CPU del proceso. Cuando la CPU está disponible, se la asigna al proceso que tiene la ráfaga de CPU más pequeña. Si las siguientes ráfagas de CPU de dos procesos son las mismas, se puede utilizar la planificación FCFS para romper el empate.

Aunque el algoritmo SJF es óptimo, no se puede implementar en el nivel de programación de CPU a corto plazo, debido a que no hay manera de saber la longitud de la próxima ráfaga de la CPU. Una aproximación a este problema es tratar de aproximar la programación SJF. Es posible que no se conozca la longitud de la siguiente ráfaga de CPU, pero se podría predecir su valor, asumiendo que la próxima ráfaga de uso de la CPU sea similar, en duración, a las anteriores. Mediante el cálculo de una aproximación de la duración de la siguiente ráfaga de la CPU, se puede seleccionar el proceso con la ráfaga de CPU más corta prevista

<a id="arc24"></a>

### **SRT (Shortest Remaining Time)**

[Volver al indice](#har-base)

Es un método de planificación con selección del proceso con tiempo restante más corto. (Versión expropiativa del proceso más corto -política SPN-).

El proceso en CPU es desalojado si llega a la cola un proceso con duración más corta. Para esto, se debe estimar el tiempo de procesamiento
