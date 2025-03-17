<a name="har-base"></a>

## [Hardware, Redes, Infraestructura y Arquitectura](#har)

| Temas |
|----------|
| [Gabinete](#har1) |
| [Motherboard](#har2) |
| [Microprocesador](#har3) |
| [Memoria RAM](#har4) |
| [Disco Rigido](#har5) |
| [Lectograbadora CD/DVD](#har6) |
| [Placas adicionales](#har7) |
| [Que es la virtualizacion?](#har8) |
| [Para qué se usan las máquinas virtuales?](#har9) |
| [Cómo se usa una máquina virtual?](#har10) |
| [Cuales son los beneficios del uso de máquinas virtuales?](#har11) |
| [Que es un hipervisor?](#har12) |
| [Que es un hipervisor de tipo 1?](#har13) |
| [Que es un hipervisor de tipo 2?](#har14) |
| [Que es una maquina virtual de sistema?](#har15) |
| [Que es una maquina virtual de procesos?](#har16) |
| [Como funciona internet?](#har17) |
| [Como se comunican las redes de Internet?](#har18) |
| [Que sucede cuando escribo una URL en el navegador y hago click en Enter?](#har19) |
| [Como se define la Interconexión?](#har20) |
| [Que es una red de computadoras?](#har21) |
| [Que elementos conforman una red?](#har22) |
| [Cual es la finalidad de una red?](#har23) |
| [Clasificación por alcance](#har24) |
| [Clasificación por tipo de conexión](#har25) |
| [Clasificación de redes por tipología](#har26) |
| [Clasificación de redes por relación funcional](#har40) |
| [Clasificación de redes por relación funcional](#har41) |
| [Clasificación de redes por grado de autentificación](#har42) |
| [Clasificación de redes por grado de difusión](#har43) |
| [Como se cuál es mi dirección TCP-IP?](#har27) |
| [Cuáles son las 4 capas del modelo TCP-IP?](#har28) |
| [Que significa TCP-IP?](#har29) |
| [Que es un protocolo TCP-IP y como funciona?](#har30) |
| [En que se diferencian TCP e IP?](#har31) |
| [TCP-IP funciona con toda clase de direcciones IP?](#har32) |
| [¿Qué es un DNS Cache?](#har33) |
| [¿Que es SSL y TLS?](#har34) |
| [¿Que son las Autoridades de Certificado? (CA)](#har35) |
| [¿Que es un TLS Handshake?](#har36) |
| [Cuáles son los códigos de respuesta más comunes?](#har37) |
| [¿Qué es un DNS?](#har38) |
| [¿Qué es HTTPS?](#har39) |
| [¿Qué son las Redes Inalámbricas?](#har44) |
| [¿Qué es un DNS Root?](#har45) |
| [¿Qué es un TLD?](#har46) |
| [¿Qué es un SLD?](#har47) |
| [¿Qué es un DNS Poisoning?](#har48) |
| [¿Qué es un DNS Spoofing?](#har49) |
| [¿Qué resuelve la arquitectura de Microfrontends?](#arc1) |
| [¿Cuales son las caracteristicas de un Microfrontend?](#arc2) |
| [¿Qué beneficios y desventajas ves en la introducción de la arquitectura de microfrontends en algunos de tus proyectos?](#arc3) |
| [¿Qué es la arquitectura de monolitos?](#arc4) |
| [En que se comparan los microservicios con los monolitos?](#arc5) |
| [Cómo hace Amazon route 53 para dar alta disponibilidad y baja latencia?](#arc6) |
| [Cuál es la diferencia entre Availability Zone y Region?](#arc7) |
| [Qué es la alta disponibilidad?](#arc8) |
| [Qué es la baja latencia?](#arc9) |
| [Qué es un sistema tolerante a fallos?](#arc10) |
| [Qué es un sistema distribuido?](#arc11) |
| [Qué es un sistema de alta disponibilidad?](#arc12) |
| [Qué es un CDN?](#arc13) |
| [Qué es un balanceador de carga?](#arc14) |
| [Que es una cookie?](#arc15) |
| [Que es el cookie tracking?](#arc16) |
| [Como creo una cookie con Javascript?](#arc17) |
| [¿Cual es la diferencia entre Cookies, SessionStorage y LocalStorage?](#arc18) |
| [¿Como puedo borrar una cookie?](#arc19) |
| [¿Que es CORS?](#arc20) |
| [¿Que es un Sistema Operativo?](#arc21) |
| [FCFS (First come, first served)](#arc22) |
| [SPN/SJF (Shorted Process Next/Shorted Job First)](#arc23) |
| [SRT (Shortest Remaining Time)](#arc24) |

---

---

<a id="har"></a>

# Hardware, Sistemas, Infraestructura y Arquitectura

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

<a id="har8"></a>

### **Que es la virtualizacion?**

[Volver al indice](#har-base)

Virtualizar significa aparentar que algo con una forma tiene otra. Virtualizar una computadora representa simular que se trata de una o múltiples computadoras completamente diferentes.

La virtualización es una tecnología que permite que los sistemas operativos se ejecuten como aplicaciones dentro de otros sistemas operativos.

En términos generales, la virtualización es un software que también incluye emulación. La emulación se utiliza cuando el tipo de CPU de origen es diferente del tipo de CPU de destino. Este mismo concepto puede extenderse para permitir que todo un sistema operativo escrito para una plataforma funcione en otra.

En la emulación, cada instrucción a nivel de máquina que se ejecuta de forma nativa en el sistema de origen debe traducirse a la función equivalente en el sistema de destino. Esto, con frecuencia, resulta en varias instrucciones en el destino. Aún si la CPU fuente y la CPU destino tienen niveles de rendimiento similares, el código emulado puede funcionar mucho más lento que el código nativo.

Un ejemplo común de emulación se produce cuando un programa fuente no se compila a código nativo pero en su lugar se ejecuta en su forma de alto nivel o se convierte en un formulario intermedio. Esto se conoce como interpretación.

Algunos lenguajes, como BASIC, pueden ser compilados o interpretados. Java en contraste, siempre se interpreta. La interpretación es una forma de emulación en la que el código de lenguaje de alto nivel se traduce a instrucciones nativas de la CPU, no emulando otra CPU, sino una máquina virtual teórica en la que ese lenguaje podría funcionar de forma nativa. Por lo tanto, se puede ejecutar programas Java en "máquinas virtuales Java", pero técnicamente esas máquinas virtuales son emuladores Java.

La idea fundamental de una máquina virtual es la de abstraer el hardware de la computadora, formando entornos de ejecución diferentes, creando así la ilusión de que cada entorno de ejecución tiene su propia computadora.

En otras palabras, una máquina virtual (MV o VM *Virtual Machine* por su sigla en inglés), no es más que un software que es capaz de albergar en su interior otro sistema operativo haciendo creer que se tiene una computadora real.

<a id="har9"></a>

### **Para qué se usan las máquinas virtuales?**

¿Para qué querría alguien crear un PC virtual dentro de su PC?

A primera vista, esta idea parece algo intrascendente, las máquinas virtuales tienen una variedad de utilidades tanto en el entorno profesional como en el del usuario final.

Algunos de los principales usos de las máquinas virtuales de sistema son:

- Para probar otros sistemas operativos: Instalar un sistema operativo en una PC es un proceso largo y difícil de revertir si los resultados no son satisfactorios. De esta manera, cuando hay una nueva versión de Windows (o cualquier otro sistema operativo) es más fácil y seguro probarla instalándola en una máquina virtual. Si algo no funciona correctamente, se elimina la VM, sin riesgo de perder mucho tiempo o datos.
- Para ejecutar programas antiguos: ¿Qué sucede si una empresa o negocio depende de un software o aplicaciones a medida que no se actualizan desde hace 10 o 20 años? Si no se puede actualizar el software no queda otra opción que seguir ejecutándolo en un sistema operativo de su época. Usando una máquina virtual este sistema antiguo puede funcionar en un hardware actual. Lo mismo se puede aplicar a juegos antiguos que han dejado de funcionar en hardware o software moderno.
- Para usar aplicaciones disponibles para otros sistemas operativos: Algunas veces es necesario una máquina virtual para ejecutar aplicaciones que han sido desarrolladas para otro sistema operativo distinto al anfitrión. Por ejemplo, para usar una aplicación para Linux desde Windows, o viceversa.
- Para probar una aplicación en distintos sistemas: Para un desarrollador de una aplicación le permite probar que funcione correctamente en la mayor cantidad de configuraciones posibles, y esto incluye distintas versiones de sistemas operativos. Una opción es tener varias PCs instaladas con distintas versiones de Windows, por ejemplo, o simplemente una PC con máquinas virtuales de cada versión.
- Seguridad adicional: Una máquina virtual no puede acceder al resto de datos de la máquina anfitrión. Esta característica permite que una máquina virtual proporcione una seguridad adicional en tareas precisas en las que se debe estar seguro de que una aplicación no tendrá acceso al resto los datos. Es por eso que se suelen usar para hacer cosas tan peligrosas como instalar virus y malware para estudiarlos.
- Para aprovechar su gran dinamismo: Por su naturaleza las máquinas virtuales son muy útiles en ocasiones donde se necesita un extremo dinamismo en el sistema, se puede guardar estados (copias exactas de datos), ampliarlas, moverlas a un hardware totalmente distinto y seguirán funcionando sin problemas. Por esto son imprescindibles por ejemplo en empresas con servidores web que hospedan varias máquinas con las páginas web de sus clientes.

Todos estos usos tienen una contrapartida o efecto negativo: el rendimiento. Como es de esperar, si el hardware de la PC se usa para soportar dos (o más) sistemas operativos a la vez, en vez de uno, el rendimiento se resiente.

Aunque las aplicaciones para crear máquinas virtuales son cada vez más eficientes y el hardware más potente, emular un sistema siempre requiere un esfuerzo extra que no es necesario si el software se pudiera comunicar directamente con el hardware, sin intermediarios.

<a id="har10"></a>

### **Cómo se usa una máquina virtual?**

[Volver al indice](#har-base)

Para usar una máquina virtual lo primero que se necesita es instalar una aplicación en la PC, que pueda crearla o al menos reproducirla.

Hay varias aplicaciones conocidas que hacen esto, como son VirtualBox, VMWare, QEMU, Parallels, etc.

<a id="har11"></a>

### **Cuales son los beneficios del uso de máquinas virtuales?**

[Volver al indice](#har-base)

El concepto de VM presenta grandes ventajas. Este tipo de entorno brinda una protección completa de los diversos recursos del sistema. Cada máquina virtual está completamente aislada de las demás. De esta forma, los procesos que ejecutan están limitados por los recursos y abstracciones proporcionados por la VM. Estos procesos no pueden escaparse de esta "computadora virtual".

Un sistema de máquina virtual es un medio muy cómodo para la investigación y desarrollo de sistemas operativos. De esta forma se puede ejecutar el sistema operativo que se quiere probar, sin necesidad de instalarlo directamente en una computadora y sin peligro de des- configurar el sistema operativo primario.

<a id="har12"></a>

### **Que es un hipervisor?**

[Volver al indice](#har-base)

El software de virtualización implementa lo que se denomina hipervisor o VMM *(Virtual Machine Monitor)* que consiste en una capa de abstracción entre el hardware de la máquina física (*host*, anfitrión) y la máquina virtual formada por hardware y software virtualizado, haciendo el papel de intermediario entre lo real y lo virtualizado.

El sistema operativo instalado en la computadora real, con el que arranca, recibe el nombre de anfitrión *(host)*, mientras que el sistema operativo que se instala en la VM se denomina huésped *(guest)*.

La capa de software hipervisor o VMM, gestiona y arbitra los cuatro recursos principales de una computadora: CPU, memoria, almacenamiento y conexiones de red, repartiendo dinámicamente estos recursos entre todas las máquinas virtuales creadas en la PC anfitriona. Esto permite tener varias máquinas virtuales ejecutándose en la misma computadora física.

<a id="har13"></a>

### **Que es un hipervisor de tipo 1?**

[Volver al indice](#har-base)

Denominado también como “virtualización en modo nativo”, se caracteriza porque este software se instala directamente sobre el equipo haciendo las funciones tanto de sistema operativo (SO) como de virtualización.

Este método de virtualización se utiliza generalmente en las empresas que pueden disponer de uno o varios servidores dedicados en forma exclusiva a la virtualización de sistemas.

![alt text](src/virtualizacion1.png)

<a id="har14"></a>

### **Que es un hipervisor de tipo 2?**

[Volver al indice](#har-base)

El software de virtualización de tipo 2, o alojado (*hosted*), se caracteriza porque debe ser instalado en un equipo que cuente con un SO previo anfitrión (como Linux, Microsoft Windows, Mac OS X, etc.).

Este es el método de virtualización apropiado e ideal para probar software (sistemas operativos y aplicaciones) sin riesgo de afectar a nada de lo que haya en la máquina anfitriona. Ésta forma de virtualización es menos eficiente que la anterior, pero se puede seguir utilizando el equipo físico con otras aplicaciones en el SO anfitrión.

![alt text](src/virtualizacion2.png)

<a id="har15"></a>

### **Que es una maquina virtual de sistema?**

Una máquina virtual de sistema es aquella que emula a una computadora completa. El software se puede hacer pasar por otro dispositivo -como una PC- de tal modo que se ejecuta otro sistema operativo en su interior. Tiene su propio disco duro, memoria, tarjeta de video y demás componentes de hardware, aunque todos ellos son virtuales.

Que sus componentes sean virtuales no significa que necesariamente no existan. Por ejemplo, una máquina virtual puede tener recursos reservados de 1 GB de RAM y 20 GB de disco duro, que obviamente salen de algún sitio: salen de la PC donde está instalada la máquina virtual

Otros dispositivos podrían realmente ser inexistentes físicamente, como por ejemplo un CD (ROM) que puede ser el contenido de una imagen ISO en vez del leído en un lector de CD verdadero.

Para el sistema operativo que se ejecuta dentro de la máquina virtual toda esta emulación es transparente e invisible.

Todo funciona igual a si se estuviera ejecutando en una PC normal, sin que sepa que en verdad está incrustado dentro de un recinto, dentro de otro sistema operativo. De hecho, nada impide crear otra máquina virtual dentro de la anterior máquina virtual.

Una máquina virtual no puede acceder al resto de datos de la máquina anfitrión. A pesar de estar físicamente funcionando en la misma, están aisladas. Sin embargo, las principales aplicaciones de máquinas virtuales como VirtualBox o VMWare disponen de atajos y herramientas para facilitar la tarea de pasar archivos de una máquina a otra.

![alt text](src/virtualizacion3.png)

<a id="har16"></a>

### **Que es una maquina virtual de procesos?**

[Volver al indice](#har-base)

Una máquina virtual de proceso tiene menor alcance que una de sistema. En vez de emular una PC por completo, como su nombre lo indica, una máquina virtual de proceso ejecuta un proceso concreto, como una aplicación, en su entorno de ejecución.

Cada vez que se ejecuta una aplicación basada en Java o basada en .NET Framework, se está utilizando una máquina virtual de proceso.

Este modelo es muy usado cuando se desarrollan aplicaciones para varias plataformas, ya que en lugar de tener que programar específicamente para cada sistema, el entorno de ejecución (es decir, la máquina virtual de proceso) es quien se encarga de interactuar con el sistema operativo.

Las máquinas virtuales de proceso permiten ejecutar aplicaciones que se comportarán de igual forma en plataformas tan distintas como, por ejemplo: Linux, Windows, Mac, sin que el usuario note diferencias.

![alt text](src/virtualizacion4.png)

<a id="har17"></a>

### **Como funciona internet?**

[Volver al indice](#har-base)

Muchos ven a Internet como una “nube” de tecnología o alguna suerte de repositorio de aplicaciones y datos a los que se puede acceder, trabajar o simplemente consultar.

Internet se define como una gran “red de redes”, es decir, una red conectada a otra de manera continua y simultánea. 

Lo que define a estas redes como tales es que existe “interconexión” entre sus componentes, aún cuando no se encuentren la totalidad de los puntos conectados entre sí. Desde cualquier punto de la red podremos llegar a otro, con más o menos vueltas, pero todos los destinos son alcanzables. Internet es justamente eso: una gran red donde todos los dispositivos están conectados entre sí.

<a id="har18"></a>

### **Como se comunican las redes de Internet?**

[Volver al indice](#har-base)

Para que una interconexión sea realmente global, todas las redes que se conectan a la gran red de redes deben hacerlo a través de un mismo protocolo o “lenguaje en común”.
Es decir, el protocolo de comunicación de Internet debe ser una implementación estándar que garantice la conexión desde cualquier origen hasta cualquier destino.
Durante la década del  ́70, un grupo de investigadores de Estados Unidos creó un protocolo de comunicación que denominaron TCP/IP, y conectaron entre sí a un conjunto de redes de computadoras a pedido del gobierno de ese país, sin saber que el proyecto resultaría tan exitoso y tendría alcance global. De esta forma, TCP/IP se convirtió en el modelo de comunicación de las redes que componen Internet.

<a id="har19"></a>

### **Que sucede cuando escribo una URL en el navegador y hago click en Enter?**

[Volver al indice](#har-base)

- El browser tiene que encontrar la manera de traducir esa URL a una IP. Para eso usa el DNS, que es como un libro telefonico.
  - Busca el IP adress en el DNS Cache
  - Si no lo encuentra, ISP inicia una consula al DNS para buscar direcciones en estos DNS
  - Si no lo encuentra ahi, el navegador envia una peticion HTTP para encontrarlo en internet
  - Una vez encontrado, se establece una conexion con el servidor. Esto se llama conexion TCP.

<a id="har20"></a>

### **Como se define la Interconexión?**

[Volver al indice](#har-base)

Probablemente la computadora que utilizamos a diario en la oficina esté conectada a una red de computadoras. En nuestra casa, la computadora portátil, tablet y celulares los vinculamos a un dispositivo inalámbrico que luego se conecta a la red de fibra óptica de la empresa que nos brinda servicio de Internet y de televisión por cable o telefonía. Éste se comunica a la red de otro Proveedor de Servicios de Internet o ISP (por sus siglas en inglés) más grande, que llega a un número mayor de hogares y empresas, y así sucesivamente. A su vez, estos proveedores de acceso internacional se interconectan con otros más grandes, denominados Carriers, a través de fibras ópticas transcontinentales y satélites, entre otros.

Con el correr de los años, esta gran red de redes ha pasado a ocupar un lugar relevante en múltiples niveles, ya que es transversal a cuestiones sociales, políticas y económicas, y ya no excluyente de ámbitos tecnológicos. El impacto de Internet es tal que ha
modificado paradigmas y continúa estableciendo nuevos desafíos en torno a la educación, la industria, la seguridad, los derechos humanos, las políticas públicas y las nuevas tecnologías, entre otros.

De lo anterior se hace evidente que Internet no es algo dado y que es producto de un proceso histórico e interdisciplinario que continúa en constante movimiento y en donde la participación de diversas partes interesadas ha sido determinante para su desarrollo.
Es por esto que resulta fundamental comprender que la participación de diversos sectores, y más aun de nuevas generaciones, en la Gobernanza de Internet, es indispensable en las definiciones del futuro de Internet, contemplando intereses y derechos de todos los sectores de la comunidad.

<a id="har21"></a>

### **Que es una red de computadoras?**

[Volver al indice](#har-base)

Una red de computadoras, también llamada red informática, es un conjunto de equipos informáticos conectados entre sí por medio de dispositivos físicos que envían y reciben impulsos eléctricos, ondas electromagnéticas o cualquier otro medio para el transporte de datos con la finalidad de compartir información y recursos.

- Redes de datos o de información capaces de transportar muchos tipos diferentes de
comunicaciones.
- Colección de dos o más dispositivos interconectados de manera que puedan intercambiar información mediante cable o por otros medios inalámbricos.

<a id="har22"></a>

### **Que elementos conforman una red?**

[Volver al indice](#har-base)

- **Dispositivos**:  Son usados para comunicarse entre sí
- **Medio**:  La forma en que los dispositivos están conectados los unos a los otros
- **Mensajes**:  Información que viaja a través del medio
- **Reglas**:  Gobiernan la forma en que los mensajes fluyen a través de la red

<a id="har23"></a>

### **Cual es la finalidad de una red?**

[Volver al indice](#har-base)

La finalidad principal para la creación de una red de computadoras es compartir los recursos y la información en la distancia, asegurar la confiabilidad y la disponibilidad de la misma, aumentar la velocidad de transmisión de los datos y reducir el costo general de estas acciones.

Respecto a la estructura física, los modos de conexión física, los flujos de datos, etc.. Una red la constituyen dos o más computadoras que comparten determinados recursos, hardware y/o software.
La estructura y el modo de funcionamiento de las redes informáticas actuales están definidos por varios estándares, siendo el más importante y extendido de todos ellos el modelo TCP/IP basado en el modelo OSI.

Los distintos criterios de clasificación de redes son:

- Por alcance
- Por tipo de conexión
- Por relación funcional
- Por topología
- Por direccionalidad de datos
- Por grado de autentificación
- Por grado de difusión

<a id="har24"></a>

### **Clasificación por alcance**

[Volver al indice](#har-base)

- **Red LAN (Local Area Network o Red de área local)** Están los tipos básicos de red. Su alcance es de tan solo unos metros, suficientes como para conectar el equipo de cómputo de un mismo edificio o de un mismo campus universitario. Estas son mantenidas y administradas por el propietario de la red.  La velocidad está entre los 1 y 100 Mbps. Son de propiedad privada y no están sujetas a regulaciones del gobierno.
- **Red MAN (Metropolitan Área Network o Red de área metropolitana)** Cubren extensiones mayores como pueden ser una ciudad o un distrito. Mediante la interconexión de redes LAN distribuyen la informática a los diferentes puntos del distrito. Este tipo de redes son comúnmente utilizadas por bibliotecas, universidades u organismos oficiales. La extensión máxima de estas redes es de hasta 100 km.
- **Red WAN (Wide Area Network o Red de área extensa)** Las redes de área amplia conectan equipos distantes entre sí, su alcance es muy extenso típicamente global. A diferencia de las redes LAN y MAN, este tipo de redes no tienen un administrador en particular, por lo general son mantenidas por los mismos usuarios quienes prestan sus recursos. Un ejemplo es el propio internet.
- **VPN (Virtual Private Networks o Redes Privadas virtuales)** Es como un túnel de tu PC a una empresa por ejemplo. Es un grupo de computadoras con un conjunto común de recursos a compartir y de requerimientos, que se comunican entre sí como si estuvieran dentro de una red privada, pero utilizando una red pública para la transmisión /recepción de los recursos que comparten.

<a id="har25"></a>

### **Clasificación por tipo de conexión**

[Volver al indice](#har-base)

- **Cable Coaxial** Se usa para transportar señales eléctricas de alta frecuencia que posee dos conductores concéntricos, uno central llamado vivo, encargado de llevar la información y uno exterior, de aspecto tubular, llamado malla o blindaje, que sirve como referencia de tierra y retorno de las corrientes. Entre ambos se encuentra una capa aislante llamada dieléctrico, de cuyas características dependerá principalmente la calidad del cable. Todo el conjunto suele estar protegido por una cubierta aislante. Ya no se usa tanto.
- **Cable de par trenzado** Es un medio de conexión utilizado en telecomunicaciones en la que dos conductores eléctricos aislados son entrelazados para tener menores interferencias de fuentes externas y aumentar la potencia y disminuir la diafonía de los cables adyacentes. Este cable está conformado por 4 pares trenzados, comúnmente identificado con colores normalizados. Se clasifica en categorías numeradas, las cuales están asociadas al ancho de banda que pueden soportar. La categoría más usada actualmente es la Categoría 5, soporta hasta 100 Mhz.
- **Fibra Óptica** La fibra óptica es un medio de transmisión empleado habitualmente en redes de datos, un hilo muy fino de material transparente, vidrio o metales plásticos, por el que se envían pulsos de luz que representan los datos a transmitir. El haz de luz queda completamente confinado y se propaga por el interior de la fibra con un ángulo de reflexión por encima del ángulo límite de reflexión total. La fuente de luz puede ser láser o un LED. Las fibras se utilizan ampliamente en telecomunicaciones, ya que permiten enviar gran cantidad de datos a una gran distancia, con velocidades similares a las de radio o cable. Son el medio de transmisión por excelencia al ser inmune a las interferencias electromagnéticas, también se utilizan para redes locales, en donde se necesite aprovechar las ventajas de la fibra óptica sobre otros medios de transmisión.

<a id="har26"></a>

### **Clasificación de redes por tipología**

[Volver al indice](#har-base)

- **Anillo** La topología de anillo conecta a cualquier terminal únicamente con sus dos destinos más próximos mediante una línea dedicada, de tal forma que la última de las terminales se conecta con la primera de ellas por uno de los extremos, formando así un ciclo o un anillo a través del cual fluye la información cuando las terminales se comunican. La comunicación en un anillo es unidireccional o simple, y viaja de terminal a terminal hasta que encuentra su destino y regresa a su origen. Tiene la desventaja de que cualquier fallo entre alguna de las líneas dedicadas genera una falla letal en la red.
- **Estrella** Esta topología conecta a todas las terminales entre sí, aunque no en forma directa. Para ello utiliza un elemento que organiza el flujo de la información en la red mediante switches que conectan a la terminal destino con la terminal origen. A este elemento se le conoce como concentrador y su tarea debe ser invisible a las terminales que se comunican. La ventaja de la topología estrella es que es más robusta que la anillo, ya que si falla una terminal, el resto sigue funcionando. La desventaja es que si falla el concentrador entonces fallará toda la red.
- **Bus** Esta topología se caracteriza por tener un único canal de comunicaciones, al cual se conectan los diferentes dispositivos. De esta forma todos los dispositivos comparten el mismo canal para comunicarse entre sí. Encuentra dentro de sus principales ventajas su fácil instalación e implementación, con una arquitectura muy simple, pero con sus desventajas las cuales desmotivan su uso.
- **Árbol**  Es el más usado de todos, es una topología derivada de la topología estrella. En esta hay diferentes estrellas conectadas entre sí, utilizando concentradores como elemento de interconexión.
- **Malla** También es muy usado. En esta topología se busca la conexión física entre todas las terminales de la red. Utilizando conexiones punto a punto, esto permitirá que cualquier terminal se comunique con otras terminales de forma paralela si fuera necesario. La principal ventaja es que este tipo de redes difícilmente falla, pues inclusive, si alguna de estas líneas fallara, aun así se podrían encontrar otras rutas para lograr la información. La desventaja de la topología en malla, es que se requiere demasiado cableado específicamente si existen n terminales en la red entonces se requerirían N cables = n(n-1)/2 cables en total. Además cada terminal requiere n-1 puertos de comunicación. También el mantenimiento resulta costoso a largo plazo.

<a id="har27"></a>

### **Como se cuál es mi dirección TCP-IP?**

[Volver al indice](#har-base)

Cada dispositivo tiene su propia dirección TCP/IP. Por lo general, el dispositivo puede comunicarse automáticamente, pero a veces es necesario proporcionar su dirección TCP/IP de forma manual. El modo de encontrar su dirección IP depende del sistema operativo.

Podés consultar tu IP pública desde una página web como https://www.cual-es-mi-ip.net/

Conceptualmente, el número obtenido se puede asemejar a la “dirección” de una habitación de hotel, en la que la gerencia del mismo sabe que puede encontrarlo o el número de teléfono de tu celular.

<a id="har28"></a>

### **Cuáles son las 4 capas del modelo TCP-IP?**

[Volver al indice](#har-base)

TCP/IP es un protocolo de enlace de datos que se utiliza en Internet. Su modelo se divide en cuatro capas diferenciadas. Cuando se emplean juntas, es posible referirse a ellas como un paquete de protocolos.

- **Capa de enlace de datos**
La capa de enlace de datos (también denominada capa de enlace, capa de interfaz de red o capa física) es la que maneja las partes físicas del envío y recepción de datos mediante el cable Ethernet, la red inalámbrica, la tarjeta de interfaz de red, el controlador del dispositivo en el equipo, etcétera.
- **Capa de Internet**
La capa de Internet (también denominada capa de red) controla el movimiento de los paquetes alrededor de la red.
- **Capa de transporte**
La capa de transporte es la que proporciona una conexión de datos fiable entre dos dispositivos. Divide los datos en paquetes, hace acuse de recibo de los paquetes que recibe del otro dispositivo y se asegura de que el otro dispositivo haga acuse de recibo de los paquetes que recibe a su vez.
- **Capa de aplicaciones**
La capa de aplicaciones es el grupo de aplicaciones que requiere comunicación de red. Es con lo que el usuario suele interactuar, como el correo electrónico y la mensajería. Como la capa inferior gestiona los detalles de la comunicación, las aplicaciones no tienen que preocuparse por ello.

<a id="har29"></a>

### **Que significa TCP-IP?**

[Volver al indice](#har-base)

TCP/IP son las siglas de Transmission Control Protocol/Internet Protocol (Protocolo de control de transmisión/Protocolo de Internet). TCP/IP es un conjunto de reglas estandarizadas que permiten a los equipos comunicarse en una red como Internet.

<a id="har30"></a>

### **Que es un protocolo TCP-IP y como funciona?**

[Volver al indice](#har-base)

Como sucede con las personas, es importante que los equipos tengan un modo común de comunicarse entre ellos. Para la mayoría de los equipos actuales, este modo es TCP/IP. TCP/IP suele venir integrado en los equipos y está automatizado en buena medida, aunque puede ser útil comprender el modelo TCP/IP, en especial si va a configurar un equipo para conectarlo a otro sistema. Este artículo explica cómo funciona TCP/IP.

<a id="har31"></a>

### **En que se diferencian TCP e IP?**

[Volver al indice](#har-base)

TCP e IP son dos protocolos distintos para redes informáticas.
IP es la parte que obtiene la dirección a la que se envían los datos. TCP se encarga de la entrega de los datos una vez hallada dicha dirección IP.

Es posible separarlos, pero lo cierto es que no tiene mucho sentido diferenciar entre TCP e IP. Como se usan juntos tan habitualmente, “TCP/IP” y “modelo TCP/IP” son ya terminología reconocida.
Mírelo de esta forma: La dirección IP es como el número de teléfono que se asigna a su smartphone. TCP es toda la tecnología que hace que el teléfono emita un timbre al recibir una llamada y que le permite hablar con alguien al otro lado de la línea. Son cosas diferentes, pero tampoco tienen sentido la una sin la otra.

<a id="har32"></a>

### **TCP-IP funciona con toda clase de direcciones IP?**

[Volver al indice](#har-base)

Hay varios tipos de direcciones IP. No obstante, todas ellas utilizan TCP/IP.
Las diferencias entre los tipos de direcciones IP son transparentes para el usuario esporádico, y el hecho de que no necesite saber mucho al respecto es una de las ventajas de TCP/IP. Normalmente, estos asuntos los administra quien haya configurado el sistema operativo del equipo o el dispositivo móvil. En cualquier caso, a modo de aclaración:

- Las direcciones IP estáticas no cambian en ningún momento. Son como
la dirección fija de su domicilio, un dato inalterable.
- Las direcciones IP dinámicas cambian, o al menos están diseñadas para
cambiar. Cuando un sistema informático utiliza una dirección IP dinámica,
anuncia “¡aquí es donde puedes encontrarme!” a la red local.

Tal vez haya oído hablar de ciudades en las que la población crece tan rápido que se han tenido que crear nuevos códigos de área para que los recién llegados puedan tener número de teléfono. Con el número siempre creciente de dispositivos conectados, TCP/IP ha tenido un problema similar. Básicamente, Internet se estaba quedando sin direcciones IP. Por eso se desarrolló una nueva versión de dirección IP denominada IPv6, una alternativa a las direcciones IPv4 existentes.

De hecho, TCP/IP se incluye como estándar TCP/IP es el paquete de protocolos más utilizado en la web. Millones de personas lo emplean cada día, aunque no sean conscientes de ello.

En la inmensa mayoría de los equipos, TCP/IP se integra como estándar. No tiene que hacer nada para configurarlo de manera manual. En ocasiones, tal vez tenga que decirle a una aplicación cuál es su dirección TCP/IP.

En algunas circunstancias puede querer ocultar su dirección IP, normalmente por motivos de seguridad.

<a id="har33"></a>

### **¿Qué es un DNS Cache?**

[Volver al indice](#har-base)

Es una copia local de la base de datos de DNS, que contiene registros de consultas de DNS que se han realizado recientemente. Se utiliza para mejorar la velocidad de acceso a los sitios web, ya que evita la necesidad de realizar consultas de DNS a servidores remotos.

<a id="har34"></a>

### **¿Que es SSL y TLS?**

[Volver al indice](#har-base)

- SSL => Secure Socket Layer, hecho por netscape, en 1995 cuando salió, se empezó a usar la capa segura en web. Su último lanzamiento fue en 1996, y dejó de existir cuando en 2014 fue atacado (POODLE). Sigue siendo usado.
- TLS => Transport Layer Security, sucesor de SSL, y es el estándar para implementar HTTPS.

<a id="har35"></a>

### **¿Que son las Autoridades de Certificado? (CA)**

[Volver al indice](#har-base)

Son las entidades que emiten los certificados seguros para nuestra página. Se verifica el dominio, y el mismo es confiado por el SO, el cual actualiza constantemente la base de datos de CA confiables. También se eliminan CA confiables por distintas razones (como darle un certificado a quien NO es el dueño de la web).

<a id="har36"></a>

### **¿Que es un TLS Handshake?**

[Volver al indice](#har-base)

Es como un “Client Hello” al servidor receptor. El servidor responderá a este saludo con un “Server Hello”, ahora el cliente puede verificar la key pública que el servidor devolvió en su respuesta en su lista de certificados confiables, es la fase de negociación, la cual no está encriptada aún, es una comunicación sin contenido aun.  Una vez que esto termine, ya se puede establecer una conexión segura.

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

<a id="har38"></a>

### **¿Qué es un DNS?**

[Volver al indice](#har-base)

Es un sistema de nomenclatura jerárquica para computadoras, servicios o cualquier recurso conectado a internet o a una red privada. Este sistema asocia información variada con nombres de dominio asignados a cada uno de los participantes. Su función principal es traducir (resolver) un nombre de dominio en una dirección IP.

- **El usuario escribe la URL en el navegador**
- **El navegador busca la IP del dominio en el DNS local**
- **Si no la encuentra, busca en el DNS del ISP**
- **Si no la encuentra, busca en el DNS Root**
- **El DNS Root le dice donde está el DNS del dominio**
- **El DNS del dominio le dice la IP del dominio**
- **El navegador se conecta a la IP del dominio**

<a id="har39"></a>

### **¿Qué es HTTPS?**

[Volver al indice](#har-base)

Mas de la mitad de las páginas poseen HTTPS en el 2016, hasta en paginas donde no necesariamente intercambiamos información (como páginas de noticias), teniendo paginas que directamente forman el HTTPS (cuando ingreso la URL con HTTP, se redirecciona al sitio seguro automáticamente).

- **Optimiza los motores de búsqueda:** Tener el HTTPS funcionando hace que en una búsqueda en google tu sitio aparezca rápido
- Se evitará que se envie informacion en una request no segura
- **Se usa brote compression**, es un algoritmo de compresión de google que es muy bueno, aumenta la velocidad del sitio disminuyendo el tráfico

<a id="har40"></a>

### **Clasificación de redes por relación funcional**

[Volver al indice](#har-base)

- **Redes Cliente-Servidor** La arquitectura cliente-servidor es un modelo de aplicación distribuida en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Un cliente realiza peticiones a otro programa, el servidor, que le da respuesta. Esta idea también se puede aplicar a programas que se ejecutan sobre una sola computadora, aunque es más ventajosa en un sistema operativo multiusuario distribuido a través de una red de computadoras. En esta arquitectura, la capacidad de proceso está repartía entre los clientes y los servidores, aunque son más importantes las ventajas de tipo organizativo debidas a la centralización de la gestión de la información y la separación de responsabilidades, lo que facilita y clarifica el diseño del sistema. La separación entre cliente y servidor es una separación de tipo lógico, donde el servidor no se ejecuta necesariamente sobre una sola máquina ni es necesariamente un solo programa. Los tipos específicos de servidores incluyen los servidores web, los servidores de archivo, de correo, etc.. Mientras que sus propósitos varían en unos servicios a otros, la arquitectura básica seguirá siendo la misma.
- **Redes peer to peer** Una red peer-to-peer o un red de pares o red entre iguales o red punto a punto (P2P por sus siglas en inglés) es una red de computadoras en la que todos o algunos aspectos funcionan sin clientes ni servidores fijos, sino una serie de nodos que se comportan como iguales entre sí. Es decir, actúan simultáneamente como clientes y servidores respecto a los demás nodos de red. Las redes P2P permiten el intercambio directo de información, en cualquier formato, entre los ordenadores interconectados. Las redes peer-to-peer aprovechan, administran y optimizan el uso del ancho de banda de los demás usuarios de la red por medio de la conectividad entre los mismos y obtienen así más rendimiento en las conexiones y transferencias que con algunos métodos centralizados convencionales, donde una cantidad relativamente pequeña de servidores provee el total del año de banda y recursos compartidos para un servicio o aplicación.

<a id="har41"></a>

### **Clasificación de redes por direccionalidad de datos**

[Volver al indice](#har-base)

- **Simplex** En este tipo de comunicación, la información fluye en una sola dirección, es decir, desde el emisor hacia el receptor. Un ejemplo de este tipo de comunicación es la televisión, donde la información fluye desde la estación de televisión hacia el televisor.
- **Half Duplex** En este tipo de comunicación, la información fluye en ambas direcciones, pero no al mismo tiempo. Un ejemplo de este tipo de comunicación es un walkie-talkie, donde una persona habla y luego escucha la respuesta.
- **Full Duplex** En este tipo de comunicación, la información fluye en ambas direcciones al mismo tiempo. Un ejemplo de este tipo de comunicación es una llamada telefónica, donde ambas partes pueden hablar y escuchar al mismo tiempo.

<a id="har42"></a>

### **Clasificación de redes por grado de autentificación**

[Volver al indice](#har-base)

- **Redes públicas** Son aquellas que están abiertas al público en general, como por ejemplo Internet.
- **Redes privadas** Son aquellas que están restringidas a un grupo de usuarios específicos, como por ejemplo una red de una empresa.

<a id="har43"></a>

### **Clasificación de redes por grado de difusión**

[Volver al indice](#har-base)

- **Redes de difusión** Son aquellas en las que la información se envía a todos los nodos de la red.
- **Redes de punto a punto** Son aquellas en las que la información se envía de un nodo a otro nodo específico.

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

<a id="har45"></a>

### **¿Qué es un DNS Root?**

[Volver al indice](#har-base)

Es el servidor DNS de nivel superior en la jerarquía de DNS. Contiene la información de los servidores de nombres de dominio de nivel superior (TLD) y los servidores de nombres de dominio de nivel superior (SLD).

<a id="har46"></a>

### **¿Qué es un TLD?**

[Volver al indice](#har-base)

Es la parte más a la derecha de un nombre de dominio, como .com, .org, .net, etc..

<a id="har47"></a>

### **¿Qué es un SLD?**

[Volver al indice](#har-base)

Es la parte del nombre de dominio que está inmediatamente a la izquierda del TLD, como google.com, facebook.com, etc..

<a id="har48"></a>

### **¿Qué es un DNS Poisoning?**

[Volver al indice](#har-base)

Es un ataque informático en el que se introduce información falsa en la base de datos de DNS de un servidor, con el objetivo de redirigir a los usuarios a sitios web maliciosos o de phishing.

<a id="har49"></a>

### **¿Qué es un DNS Spoofing?**

[Volver al indice](#har-base)

Es un ataque informático en el que se falsifica la información de DNS de un servidor, con el objetivo de redirigir a los usuarios a sitios web maliciosos o de phishing.

<a id="arc1"></a>

### **¿Qué resuelve la arquitectura de Microfrontends?**

[Volver al indice](#har-base)

Tenemos la aplicacion monolitica que tiene tanto el BD, Backend y Frotend en un solo monolito, y generalmente con un solo equipo manejandolo. A medida que va creciendo, se va separando el backend del frontend. 
Llega el punto en que el backend ya se maneja mediante microservicios con sus BD propias, separados por funciones del negocio (por ejemplo, un microservicio de pagos, otro de autenticacion, etc..)
Luego, al seguir siendo un frontend monolico, hay conflictos entre equipos y en los cambios en un mismo repositorio, y la afectacion de otras areas. 
La idea del microfrontend es separar el frontend en partes pequeñas por funciones del negocio al igual que los microservicios. 
Los equipos pasan a ser dueños de toda la vertical de negocios (Back, front y DB)

<a id="arc2"></a>

### **¿Cuales son las caracteristicas de un Microfrontend?**

[Volver al indice](#har-base)

- **Aplicación contenedora**

Es un contenedor que se va a asegurar de que cada frontend se reuna y que el usuario tenga una experiencia coherente, que todo se sienta parte del mismo sistema.

- **IFrames**: Son una buena forma de embeber paginas dentro de otras. Tiene algunas limitaciones
- **Web Components:** La app contenedora se encarga de renderizar los microfrontends como components

```markdown
const Restaurant = ({history}) => {
    <MicroFrontend name="restaurant" />
}
```

- **JS Puro**: Se puede hacer una composicion de las vistas o un enrutamiento (Si vas a esta URL cargo esto)

* Cada frontend debe tener su propio repositorio: Para que cada equipo tenga 100% de control sobre esa aplicacion.  
* Cada aplicacion debe poder desplegarse de forma independiente: No deben haber dependencias entre frontends

- **Comunicacion entre microfrontends**

- **Event Bus**: Es un canal de comunicacion entre los microfrontends. Se puede usar un bus de eventos para comunicar los microfrontends entre si.
- **API Gateway**: Es un punto de entrada para todas las peticiones de los microfrontends. Se encarga de enrutar las peticiones a los microservicios correspondientes.

- **¿Cuando usarlo?**

- **Cuando se tiene un equipo grande**: Para que cada equipo se encargue de una parte del negocio
- **Cuando se tiene una aplicacion grande**: Para que sea mas facil de mantener y escalar
- **Cuando se tiene una aplicacion con muchas funcionalidades**: Para que cada microfrontend se encargue de una funcionalidad especifica

- **Desventajas**

**Complejidad**: Es mas complejo que un monolito
**Performance**: Al tener que cargar varios frontends, puede afectar la performance
**Seguridad**: Al tener varios frontends, puede haber problemas de seguridad.

<a id="arc3"></a>

### **¿Qué beneficios y desventajas ves en la introducción de la arquitectura de microfrontends en algunos de tus proyectos?**

[Volver al indice](#har-base)

Los Beneficios principales en la introducción de la arquitectura de microfrontends son:

- Escalabilidad y mantenibilidad: Permite escalar y mantener diferentes partes de la aplicación de forma independiente, lo que facilita la gestión de equipos y la evolución de la aplicación a medida que crece.

- Flexibilidad tecnológica: Permite el uso de diferentes tecnologías y frameworks en cada microfrontend, lo que facilita la adopción de nuevas tecnologías y la actualización de componentes sin afectar a toda la aplicación.

- Desarrollo paralelo: Permite que equipos separados trabajen en diferentes partes de la aplicación simultáneamente, lo que acelera el desarrollo y reduce los cuellos de botella.

Sin embargo, también hay algunas desventajas potenciales en la introducción de la arquitectura de microfrontends:

- Complejidad inicial: La introducción de microfrontends puede requerir un esfuerzo adicional en la configuración inicial y la gestión de la comunicación entre los diferentes microservicios.

- Mayor sobrecarga de red: Al dividir la aplicación en múltiples microfrontends, puede aumentar la cantidad de solicitudes de red y la complejidad de la gestión de la comunicación entre ellos.

- Posible fragmentación de la experiencia del usuario: Si no se gestiona adecuadamente, la arquitectura de microfrontends puede resultar en una experiencia de usuario fragmentada debido a las diferencias en la navegación y la interacción entre los diferentes microservicios.

En resumen, mientras que la arquitectura de microfrontends ofrece beneficios significativos en términos de escalabilidad y flexibilidad, también introduce complejidades adicionales que deben ser consideradas y gestionadas cuidadosamente en función de las necesidades específicas de cada proyecto.

<a id="arc4"></a>

### **¿Qué es la arquitectura de monolitos?**

[Volver al indice](#har-base)

Los monolitos representan una arquitectura tradicional en el desarrollo de aplicaciones web, caracterizada por consolidar todas las funcionalidades de un sistema en un único bloque de código. A diferencia de los microservicios, donde cada función se implementa de manera independiente, los monolitos son estructuras más compactas y centralizadas.
En un monolito, todas las partes de una aplicación, como la interfaz de usuario, la lógica de negocio y la persistencia de datos, coexisten en la misma base de código. Esta simplicidad estructural puede facilitar el desarrollo inicial y la comprensión global del sistema, ya que todas las partes están directamente interconectadas. Además, los monolitos suelen ser más sencillos de implementar, desplegar y gestionar, ya que toda la aplicación se ejecuta como una entidad única.
La arquitectura de monolitos ha sido históricamente la elección predeterminada para muchos proyectos debido a su simplicidad aparente. Sin embargo, a medida que las aplicaciones crecen en tamaño y complejidad, los monolitos pueden presentar desafíos significativos. La modificación de una parte del código puede afectar de forma inesperada otras partes del sistema, lo que puede dificultar la implementación de nuevas características, o la implementación de soluciones a problemas y bugs.
La escalabilidad también puede ser un desafío en los monolitos, ya que toda la aplicación debe ser escalada verticalmente, es decir, aumentando los recursos de la máquina que ejecuta el monolito. Esto puede resultar costoso y menos eficiente en comparación con la escalabilidad horizontal que ofrecen los microservicios.
Si bien durante los últimos años, la arquitectura de monolitos ha sido sujeta de cuestionamientos sobre si puede satisfacer las demandas de aplicaciones modernas altamente escalables y distribuida, existen muchas aplicaciones de gran escala que siguen utilizando este enfoque. En los últimos meses hemos visto este discurso ser ajustado para preguntarnos si realmente las aplicaciones modernas requieren una arquitectura de microservicios o no.

<a id="arc5"></a>

### **En que se comparan los microservicios con los monolitos?**

[Volver al indice](#har-base)

Si hablamos de frameworks del backend, encontramos una distinción clara entre aquellos que son más usados en monolitos, de los que son usados en microservicios, y tiene que ver con el tamaño del framework. Podemos distinguir dos principales categorías entre los frameworks web tradicionales, y los llamados micro frameworks. 
Hablamos de frameworks web tradicionales a los que históricamente han integrado la vista, y la lógica del negocio en una misma base de código, hablamos sobre todo de frameworks MVC como Ruby on Rails, Django, Laravel, .NET, Spring, por mencionar algunos, pero también podemos incluir a algunos modernos que aplican este mismo principio de una misma base de código como Next.js.
Estos frameworks se caracterizan por implementar las opiniones de los autores, ser de convención por sobre configuración, y empaquetar muchas funcionalidades sobre el framework, lo que les permite implementar sobre el mismo sistema, distintas facetas del proyecto.
Por otro lado, los conocidos como micro frameworks, se tratan de frameworks poco opinados, generalmente de configuración sobre convención, con funcionalidad mínima implementada, entre ellos podemos destacar algunos comúnes como Express, Flask, Django REST Framework, entre otros.
Estos micro frameworks son ideales para la arquitectura de micro servicios, porque al ofrecer una base mínima de convenciones y funcionalidades, permiten que proyectos de funcionalidad específica sean implementados, sin que se incluyan funcionalidades que no han de ser utilizadas.
Un ejemplo claro es el del motor de render de vistas, encargado de generar el HTML con la información de la capa de datos, comúnmente de un modelo, los frameworks “grandes” suelen incluir un sistema de render de vistas por defecto, mientras que los micro frameworks no lo incluyen y más bien requieren que el desarrollador configure el de su preferencia. Para una arquitectura de micro servicios donde la interfaz está separada de otros servicios que manejan datos, es ideal que dichos servicios se desarrollen sobre frameworks que no incluyan un motor de render de vistas que no será utilizado.

**Es hora de escalar, ¿cuál elijo?**

Existen dos principales áreas de análisis: hasta dónde puede escalar (viabilidad), y cómo se aprovechan los recursos de la infraestructura (eficiencia).

**Eficiencia**: Una arquitectura de microservicios permite que cada componente del sistema escale de manera independiente y de acuerdo a sus necesidades, en ese sentido, el proceso de escalar puede ser más sencillo, en contra de los monolitos. En el caso de los monolitos, el proceso de escala es vertical y menos eficiente, todos los componentes viven en la misma base de código y comparten infraestructura, por lo que, no es posible considerar las necesidades de cada componente en el proceso de escalar la infraestructura. Esto puede implicar que la infraestructura de un monolito sea excesiva para las necesidades de algunos componentes y ajustada para otros, mientras que para los componentes de un monolito la infraestructura es la adecuada para cada componente.

**Viabilidad**: Una de las principales razones por las que una organización decide migrar de un monolito hacia una arquitectura de microservicios responde a la viabilidad de que el monolito soporte la escala actual de la compañía. Es más eficiente escalar una arquitectura de microservicios, esto no significa que los monolitos funcionen solo para aplicaciones de baja escala y poco tráfico. Existen grandes proyectos con millones de usuarios implementados sobre monolitos, así como algunos más pequeños y de menor escala que usan microservicios. En muchas ocasiones, las y los expertos apuntan al tamaño de la empresa, y no al de la escala, para determinar qué arquitectura usar. 

La arquitectura de microservicios responde mejor a organizaciones grandes, donde cada equipo puede implementar la funcionalidad de un componente a su mejor criterio, sin la necesidad de coordinar con otros equipos, mientras que en el caso de los monolitos, todos los equipos deben compartir el mismo contexto y las mismas reglas en el desarrollo del proyecto, aumentando la necesidad de coordinación, reuniones, y comunicación entre equipos.
Por otro lado, para un equipo mediano a pequeño, una arquitectura de monolito puede eficientizar el desarrollo de nuevas características, ya que algunos miembros del equipo pueden necesitar contexto de la operación de múltiples componentes del sistema.
En resumen, escalar eficientemente para altas cargas de tráfico, y para empresas de gran tamaño, suelen ser las principales razones para migrar de monolitos a microservicios, mientras que también, podemos decir que un equipo pequeño, sin importar la escala de tráfico que maneja, puede beneficiarse de una arquitectura de monolito.

**Despliegue a producción, ¿qué cambia?**

En el caso de monolitos, la implementación ocurre de manera unitaria, ya que toda la aplicación se desarrolla sobre la misma base de código. Esto simplifica el proceso de despliegue, ya que no hay necesidad de coordinar múltiples servicios. No existe un problema de coordinación de versiones, como posiblemente suceda con los microservicios, luego de que todos los componentes comparten el mismo código, esto minimiza los conflictos por gestión de versiones. El despliegue de monolitos suele requerir una orquestación menos compleja, ya que todas las dependencias están presentes en un único entorno. Sin embargo, esto también implica que cualquier error en una parte del sistema puede tener impactos en la totalidad de la aplicación.

En el contexto de los microservicios, cada servicio puede ser desarrollado, probado y desplegado de manera independiente. Esto permite a los equipos actualizar servicios sin afectar la totalidad de la aplicación. La independencia en el despliegue permite que apliquemos algunas metodologías populares como integración continua o despliegue continuo, muy comúnes en equipos de desarrollo que implementan metodologías agiles, la existencias de múltiples servicios implica que exista coordinación de versiones entre ellos, luego de que cada microservicio tiene su propio ciclo de vida, es posible que uno dependa de una versión distinta a la que uno de los servicios está implementando. El despliegue de microservicios generalmente requiere una orquestación más sofisticada. Herramientas como Kubernetes o Docker Swarm se utilizan comúnmente para gestionar la implementación, escalado y actualización de servicios. Esta complejidad adicional es necesaria para mantener la coherencia y la disponibilidad del sistema.

En resumen, la elección entre monolitos y microservicios en el despliegue depende de las necesidades específicas del proyecto. Monolitos ofrecen simplicidad, coherencia; microservicios brindan independencia y escalabilidad.

**Teniendo en cuenta a la nube, que cambia?**

Cuando se trata de monolitos, el despliegue sigue siendo unitario, pero la nube ofrece oportunidades para optimizar recursos. La capacidad de escalar verticalmente en entornos basados en la nube permite ajustar los recursos de manera más eficiente, aunque aún se comparte la misma base de código. La coordinación de versiones puede ser menos compleja, pero la nube proporciona herramientas para gestionar actualizaciones y rollbacks de manera más flexible, facilitando el mantenimiento de la coherencia en el despliegue.

En el contexto de los microservicios, la independencia en el despliegue encuentra un aliado poderoso en la nube. Cada servicio puede aprovechar los recursos de manera autónoma, escalando horizontalmente según las demandas específicas de cada componente. La nube facilita la implementación de metodologías ágiles como la integración continua y despliegue continuo, permitiendo una evolución constante de los servicios de forma independiente. La coordinación de versiones se vuelve más esencial en entornos basados en la nube, ya que cada microservicio puede tener su propio ciclo de vida. Herramientas de orquestación como Kubernetes se convierten en aliados clave para gestionar la complejidad del despliegue.

En resumen, la elección entre monolitos y microservicios en la nube se centra en cómo aprovechar al máximo las capacidades escalables y flexibles de estos entornos. Monolitos pueden beneficiarse de la escalabilidad vertical, mientras que los microservicios encuentran en la nube un terreno propicio para su independencia y agilidad.

<a id="arc6"></a>

### **Cómo hace Amazon route 53 para dar alta disponibilidad y baja latencia?**

[Volver al indice](#har-base)

- Servidores distribuidos globalmente. Hay DNS en todo el mundo, sí haces una query desde cualquier lugar del mundo, va a haber un servidor DNS cerca para cumplirlo
- Dependencia: Route 53 proporciona un alto nivel de confiabilidad requerido por las aplicaciones críticas.
- Ubicaciones óptimas: Route 53 atiende las solicitudes desde el centro de datos más cercano al cliente que envía la solicitud. AWS tiene centros de datos en todo el mundo. Los datos se pueden almacenar en caché en diferentes centros de datos ubicados en diferentes regiones del mundo según los requisitos y la configuración elegida. Route 53 permite que cualquier servidor en cualquier centro de datos que tenga los datos necesarios para responder. De esta manera, permite que el servidor más cercano atienda la solicitud del cliente, reduciendo así el tiempo de atención

<a id="arc7"></a>

### **Cuál es la diferencia entre Availability Zone y Region?**

[Volver al indice](#har-base)

Availability Zone es una ubicación física donde Amazon tiene un data center. Una Region es una colección o grupo de AZ o Data Centers.

Esto ayuda a que los servicios tengan más disponibilidad mientras se colocan distintas VM en distintos lugares del mundo para cumplir peticiones. Esto también ayuda a que el servicio se mantenga siempre disponible aunque un Data Center caiga.

<a id="arc8"></a>

### **Qué es la alta disponibilidad?**

[Volver al indice](#har-base)

La alta disponibilidad es un término que se utiliza para describir la capacidad de un sistema o componente para estar operativo y accesible durante un período de tiempo determinado. La alta disponibilidad se logra mediante la implementación de redundancia y tolerancia a fallos en los sistemas y componentes críticos.

<a id="arc9"></a>

### **Qué es la baja latencia?**

[Volver al indice](#har-base)

La baja latencia es el tiempo que tarda un sistema en responder a una solicitud. La baja latencia es importante en aplicaciones en tiempo real, como juegos en línea, transmisión de video y aplicaciones financieras, donde incluso pequeños retrasos pueden afectar la experiencia del usuario.

<a id="arc10"></a>

### **Qué es un sistema tolerante a fallos?**

Un sistema tolerante a fallos es un sistema que puede continuar funcionando incluso si uno o más de sus componentes fallan. Los sistemas tolerantes a fallos se diseñan para minimizar el impacto de los fallos y garantizar que el sistema siga siendo operativo y accesible en caso de fallo de un componente.

<a id="arc11"></a>

### **Qué es un sistema distribuido?**

[Volver al indice](#har-base)

Un sistema distribuido es un sistema de software que se ejecuta en múltiples computadoras interconectadas y se comunica a través de una red de computadoras. Los sistemas distribuidos se utilizan para distribuir la carga de trabajo, mejorar la escalabilidad y la disponibilidad, y permitir la colaboración y la comunicación entre múltiples usuarios y sistemas.

<a id="arc12"></a>

### **Qué es un sistema de alta disponibilidad?**

[Volver al indice](#har-base)

Un sistema de alta disponibilidad es un sistema que está diseñado para garantizar que esté operativo y accesible durante un período de tiempo determinado. Los sistemas de alta disponibilidad se implementan mediante la redundancia y la tolerancia a fallos en los sistemas y componentes críticos para garantizar que el sistema siga siendo operativo en caso de fallo de un componente.

<a id="arc13"></a>

### **Qué es un CDN?**

[Volver al indice](#har-base)

Un CDN (Content Delivery Network) es una red de servidores distribuidos geográficamente que se utilizan para entregar contenido web, como imágenes, videos, archivos y otros recursos estáticos, a los usuarios finales de manera rápida y eficiente. Los CDNs almacenan en caché el contenido en servidores distribuidos en todo el mundo y utilizan algoritmos de enrutamiento inteligentes para dirigir a los usuarios al servidor más cercano para una entrega rápida y eficiente del contenido.

<a id="arc14"></a>

### **Qué es un balanceador de carga?**

[Volver al indice](#har-base)

Un balanceador de carga es un dispositivo de red que distribuye el tráfico de red entre múltiples servidores o dispositivos de red para garantizar que el tráfico se distribuya 
de manera uniforme y eficiente entre los servidores. Los balanceadores de carga se utilizan para mejorar la escalabilidad, la disponibilidad y el rendimiento de las aplicaciones web y los servicios en línea al distribuir la carga de trabajo entre múltiples servidores y garantizar que los servidores no se sobrecarguen.

<a id="arc15"></a>

### **Que es una cookie?**

[Volver al indice](#har-base)

Las cookies son textos planos con poca dificultad para entender de que se tratan, guardados localmente en cada pc. Se puede saber para que sirve cada cookie con solo leerlo

1. Hacer una request a una page desde el server
2. El server responde con la pagina y las cookies
3. El browser muestra la pagina y guarda las cookies

Otras propiedades de las cookies son..

- Son simples, contienen un par de “variable” y “valor” en sí mismo, y pesan menos de 4KB, las cookies son válidas en un solo dominio, el host del dominio actual, excluyendo subdominios, aunque podemos hacer que una cookie sea válida también para los subdominios estableciendo una propiedad específica de dominio, es decir, en vez de que el dominio sea [www.facebook.com](http://www.facebook.com/), que el dominio sea facebook.com, pudiendo poner cualquier cosa además del www.
- Los sitios web suelen usar las cookies para **identificar a los usuarios**, y sus **preferencias**, también para trackear el **comportamiento en la web**, es por eso que guardan en sí mismos info del usuario y su estatus online.
- Las cookies también sirven para que un usuario entre a la misma web y no tenga que logearse una y otra vez, para lograr esto se crea una cookie única en cada navegador con las **credenciales del usuario**. Y cada vez que el usuario ingresa, el sitio checkea sí esa credencial existe, y sí no existe, la pide.
- Cuando se crea una cookie, también se crea con una fecha de expiracion bajo el label **Expires**, con una fecha y una hora en particular. Esto se hace por cuestiones de seguridad, ya que sí alguien logra “robar” una cookie de auteticacion, podria logearse con la cuenta de cierta persona, esto se evita ya que la cookie checkea sí se trata del mismo nevegador el que pretende acceder a esa cookie.

<a id="arc16"></a>

### **Que es el cookie tracking?**

[Volver al indice](#har-base)

Las cookies cumplen un rol importante no solo en la autenticacion sí no también en el track de tu comportamiento online, esto con un **tracking cookie**. Usualmente, muchas paginas usan herramientas de trackeo de otros lugares y no propios, lo cual hace que se pueda trackear la actividad de distintas web al mismo tiempo.

Tracking pixel: Es un pequeño pedazo de codigo que es pedido desde el dominio de la web que hace el tracking para insertar la cookie, es invisible para el usuario en la web.

```html
<img height="0" width="0" alt="" src="http://track.com"/>
```

El tracking cookie puede tener mucha informacion, como la IP y el navegador que se esta usando.

```html
TrackingID=3984720234; Ip=11.0.1.1; origin=stuff.com
```

El tracking puede servirle a muchas empresas para obtener informacion exacta acerca del perfil del usuario, y así, ofrecer publicidad, dando a muchos problemas de privacidad para los usuarios, es por eso que se pide permiso antes de guardar cookies.


<a id="arc17"></a>

### **Como creo una cookie con Javascript?**

[Volver al indice](#har-base)

1. Crear una funcion de Javascript

```jsx
function addCookie() {}
```

2. Le agregamos dos parametros a la funcion. **cname** 
es el nombre de la cookie, y **value** 
para el valor de la cookie

```jsx
function addCookie(cname, value) { }
```

3. Para crear la cookie debemos llamar a la funcion **document.cookie**

```jsx
function addCookie(cname, value) {
   document.cookie= cname + “=” + value + “;”
 }
```

4. Ya teniendo esta funcion creada, podemos crear una cookie por fuera de la funcion, como **username**

```jsx
function addCookie(cname, value) {
   document.cookie= cname + “=” + value + “;”
     }

addCookie(“username”,”denukennedy”);
```

5. Para ver la cookie creada, invocamos a un console log.

```jsx
function addCookie(cname, value) {
   document.cookie= cname + “=” + value + “;”
     }

addCookie(“username”,”denulemos”);
console.log(document.cookie);
```

<a id="arc18"></a>

### **¿Cual es la diferencia entre Cookies, SessionStorage y LocalStorage?**

[Volver al indice](#har-base)

|  | Cookies | Local Storage | Session Storage |
| --- | --- | --- | --- |
| Capacidad | 4kb | 10 mb | 5 mb |
| Navegadores | HTML 4 / 5 | HTML 5 | HTML 5 |
| Accesible desde | Cualquier ventana | Cualquier ventana | Tab donde fue creada |
| Expira | Seteado a mano, si no se aclara, vence cuando termina la sesion | Nunca | Cuando se cierra la tab |
| Storage Location | Navegador y Server | Navegador | Navegador |
| Enviado con Requests | Si | No | No |
| Tipo de dato | Tod | Solo guarda Strings. Si queremos guardar objetos, arrays, u otros, debemos converirlos en String con JSON.stringify() |  |
| Deberia usarse |  | Para guardar informacion NO sensible ya que es facilmente accesible |  |
- Las cookies se usan para Auth mas que nada

```jsx
// Local Storage
localStorage.setItem(’item’, ‘valor’)
localStorage.getItem(’item’)
localStorage.removeItem('item')
localStorage.clear();
localStorage.key(1); // Obtener un valor/string de una posicion particular

// Session Storage
sessionStorage.setItem('item', 'valor);
sessionStorage.getItem('item')
sessionStorage.removeItem('item')
sessionStorage.clear();

// Cookies
document.cookie = "item=true";
// Con expire date
document.cookie= "item=true; expires= Fri, 31 Dec 9999 23:59:59 GMT; path=/"
document.cookie // No se puede obtener una sola cookie por vez, 
// todas se almacenan en un String, deben parsearse

```

<a id="arc19"></a>

### **¿Como puedo borrar una cookie?**

[Volver al indice](#har-base)

Para borrar una cookie, debemos setear la fecha de expiracion a una fecha pasada, de esta manera, el navegador la eliminara automaticamente.

```jsx
function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
```

<a id="arc20"></a>

### **¿Que es CORS?**

[Volver al indice](#har-base)

Es un mecanismo que usa cabeceras HTTP adicionales para permitir que un user-agent obtenga permiso para acceder a recursos seleccionados desde un servidor en un origen distinto (dominio) al que pertenece. Por ejemplo, si tengo mi dominio [`denisse.com`](http://denisse.com), uso XMLHttpRequest para cargar el recurso [`http://api.domain-b.com/data.json`](http://api.domain-b.com/data.json)

Tambien sirve para obtener fuentes externas, texturas webGL, Imagenes, hojas de estilos y Scripts. 

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