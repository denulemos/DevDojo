<a name="har-base"></a>

## [Redes y Virtualizacion](#har)

| Virtualizacion |
|----------|
 [Que es la virtualizacion?](#har8) |
| [Para qué se usan las máquinas virtuales?](#har9) |
| [Cómo se usa una máquina virtual?](#har10) |
| [Cuales son los beneficios del uso de máquinas virtuales?](#har11) |
| [Que es un hipervisor?](#har12) |
| [Que es un hipervisor de tipo 1?](#har13) |
| [Que es un hipervisor de tipo 2?](#har14) |
| [Que es una maquina virtual de sistema?](#har15) |
| [Que es una maquina virtual de procesos?](#har16) |

| Redes e Internet |
|----------|
| [Como funciona internet?](#har17) |
| [Como se comunican las redes de Internet?](#har18) |
| [Que sucede cuando escribo una URL en el navegador y hago click en Enter?](#har19) |
| [Como se define la Interconexión?](#har20) |
| [Que es una red de computadoras?](#har21) |
| [Que elementos conforman una red?](#har22) |
| [Cual es la finalidad de una red?](#har23) |

| Clasificacion de redes |
|----------|
| [Clasificación por alcance](#har24) |
| [Clasificación por tipo de conexión](#har25) |
| [Clasificación de redes por tipología](#har26) |
| [Clasificación de redes por relación funcional](#har40) |
| [Clasificación de redes por direccionalidad de datos](#har41) |
| [Clasificación de redes por grado de autentificación](#har42) |
| [Clasificación de redes por grado de difusión](#har43) |

| TCP-IP |
|----------|
| [Como se cuál es mi dirección TCP-IP?](#har27) |
| [Cuáles son las 4 capas del modelo TCP-IP?](#har28) |
| [Que significa TCP-IP?](#har29) |
| [Que es un protocolo TCP-IP y como funciona?](#har30) |
| [En que se diferencian TCP e IP?](#har31) |
| [TCP-IP funciona con toda clase de direcciones IP?](#har32) |

| DNS y Seguridad |
|----------|
| [¿Qué es un DNS?](#har38) |
| [¿Qué es un DNS Cache?](#har33) |
| [¿Qué es un DNS Root?](#har45) |
| [¿Qué es un TLD?](#har46) |
| [¿Qué es un SLD?](#har47) |
| [¿Qué es un DNS Poisoning?](#har48) |
| [¿Qué es un DNS Spoofing?](#har49) |
| [¿Que es SSL y TLS?](#har34) |
| [¿Que son las Autoridades de Certificado? (CA)](#har35) |
| [¿Que es un TLS Handshake?](#har36) |
| [¿Qué es HTTPS?](#har39) |

---

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

<a id="har33"></a>

### **¿Qué es un DNS Cache?**

[Volver al indice](#har-base)

Es una copia local de la base de datos de DNS, que contiene registros de consultas de DNS que se han realizado recientemente. Se utiliza para mejorar la velocidad de acceso a los sitios web, ya que evita la necesidad de realizar consultas de DNS a servidores remotos.

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

<a id="har39"></a>

### **¿Qué es HTTPS?**

[Volver al indice](#har-base)

Mas de la mitad de las páginas poseen HTTPS en el 2016, hasta en paginas donde no necesariamente intercambiamos información (como páginas de noticias), teniendo paginas que directamente forman el HTTPS (cuando ingreso la URL con HTTP, se redirecciona al sitio seguro automáticamente).

- **Optimiza los motores de búsqueda:** Tener el HTTPS funcionando hace que en una búsqueda en google tu sitio aparezca rápido
- Se evitará que se envie informacion en una request no segura
- **Se usa brote compression**, es un algoritmo de compresión de google que es muy bueno, aumenta la velocidad del sitio disminuyendo el tráfico
