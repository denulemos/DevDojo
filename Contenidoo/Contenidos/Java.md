# Java

## 🟡 Que es Java?

JAVA es una tecnología pensada para desarrollo de aplicaciones de gran envergadura, altamente escalables, de gran integración con otras tecnologías y sumamente robustas.
Java no es tan solo un lenguaje, es una tecnología para el desarrollo de aplicaciones que conforma la plataforma sobre la cual se ejecutarán las mismas y en conjunto esta se compone de:

- Un lenguaje de programación. (javac)
- Un entorno de desarrollo. (ide)
- Un entorno para aplicaciones. (java runtime)
- Un entorno para despliegue de aplicaciones (Servlet container). (java EE Apache Tomcat, Apache TomEE, RedHat Jboss, Eclipse Jetty, Oracle GlassFish, Oracle WebLogic, IBM WebSphere).

---

## 🟡 Las principales características de Java son

### Lenguaje orientado a objetos

Respeta el paradigma de orientación a objetos, permitiendo utilizar los fundamentos del mismo:

- Herencia
- Polimorfismo
- Abstracción
- Encapsulamiento

### Sintaxis basada en C/C++

La sintaxis es similar al C++ pero el manejo y la semántica son parecidos al SmallTalk. Se utiliza para desarrollar aplicaciones locales y distribuidas.
Aporta gran simplicidad ya que es una de las formas de escribir código más reconocidas y difundidas, y permite incorporar rápidamente a los programadores que conocen este lenguaje.

### Multiplataforma

Significa que su código es portable, es decir se puede transportar por distintas plataformas. De esta manera es posible codificar una única vez una aplicación, y luego ejecutarla sobre cualquier plataforma y/o sistema operativo.
"Write once, run anywhere" es la política desde el primer día de JAVA, es decir construir la aplicacion una vez y ejecutarla en “cualquier lado”.

### Manejo automático de memoria

No hay que preocuparse por liberar memoria manualmente ya que un proceso propio de la tecnología se encarga de monitorear, y por consiguiente eliminar el espacio ocupado que no esta siendo utilizado. El proceso encargado de realizar este trabajo se denomina Garbage Collector.

### Evolución permanente

La tecnología está en constante evolución debido a la gran cantidad de “consumidores” que poseen, JAVA es uno de los lenguajes más utilizados en el mundo, y SUN (Oracle) pretende estar a la altura de la situación ofreciendo constantemente nuevas entregas.

### El compilador Java

El *compilador* es una suerte de traductor que transforma el *código fuente* que escribe el programador en algo que puede entender una computadora ó, como en el caso de Java, una *Máquina Virtual*. Cuando alguien escribe un programa en Java escribe el *código fuente* (source) en archivos de texto con extensión *.java*. De alguna manera (nosotros utilizaremos un entorno de programación que permite hacer esto de manera muy fácil) este código fuente es entregado al compilador y éste lo compila.

¿Qué hace el compilador? Primero verifica que el código fuente cumpla con las reglas de sintaxis del lenguaje y que nada haya quedado sin ser correctamente definido (por ejemplo, las variables deben ser declaradas antes de ser usadas) y luego transcribe esas instrucciones escritas como texto en *código binario*. En el caso de Java, cada clase escrita por un programador se transformará en un archivo del mismo nombre que la clase pero con extensión *.class*.

Este *código binario* está formado por instrucciones estándar destinadas a ejecutarse en una *Java Virtual Machine* (*JVM*). Al agregar este nivel de abstracción, el compilador Java difiere de los otros compiladores de lenguaje, que escriben instrucciones apropiadas para el *chipset* de la CPU en el que el programa será usado. Esto permite la *portabilidad* del código ya compilado, aunque con el costo de necesitar un “intermediario” (la propia máquina virtual) para ser ejecutado.

### El recolector de basura

Los programas no sólo tiene *instrucciones*. Es casi imposible imaginar un programa que no procese, al menos, un *dato*. Y los datos deben ser “guardados” en algún lado.

Cada lenguaje de programación, dependiendo de su finalidad, su diseño y el paradigma que implementa, brinda un soporte de datos específicos.

Básicamente, los datos pueden guardarse en memoria en forma *estática* o *dinámica*, y el manejo dinámico de memoria está asociado al uso de *punteros*. A diferencia de otros lenguajes donde el programador es responsable de la correcta gestión de memoria indicándole al programa cómo y cuándo pedir y liberar memoria, directamente o a través de una librería de terceros, la plataforma Java proporciona una gestión de memoria lista para usar, en la cual el programador se despreocupa del manejo de memoria para concentrarse en la funcionalidad y la forma en la cual los objetos se relacionan entre sí.

Cuando una aplicación Java crea una *instancia de objeto* al momento de ejecución, la *JVM* asigna dinámica y automáticamente espacio de memoria para ese objeto, el cual se mantendrá “vivo” siempre que alguien tenga una referencia a él (es decir siempre que una *variable* esté guardando la *referencia* al objeto)

Es aquí donde aparece el *Garbage Collector* o, en nuestro idioma, *Recolector de Basura*. Este recolector de basura de Java se ejecuta en segundo plano y realiza un seguimiento de cuáles son los objetos que la aplicación está usando y cuáles ya no necesita. Cuando es así, esos objetos son eliminados y se recupera la memoria que ellos ocupan. Este abordaje al manejo de la memoria se llama *gestión implícita de la memoria* porque no exige que se escriba código específico para manejar la memoria, sino que lo hace el propio lenguaje.

Esta recolección de basura que libera la memoria utilizada por objetos que ya no son necesarios es una de las funciones esenciales del rendimiento de la plataforma Java.

### El JDK (kit de desarrollo de Java)

Los lenguajes de programación actuales suelen acompañar su juego de instrucciones mínimos con un “maletín de herramientas” que lo complementa y extiende.

Al descargar el JDK (por Java Development Kit) obtendrás, además del compilador y otras herramientas, una librería de clase completa con programas de utilidad preconstruidos que te ayudarán a cumplir las tareas comunes al desarrollo de aplicaciones. El mejor modo para tener una idea del alcance de los paquetes y bibliotecas JDK es verificar la documentación de la API JDK.

### **El JRE (Java Runtime Environment - Entorno de ejecución de Java)**

El *Entorno de Ejecución de Java* (*JRE*, por *Java Runtime Environment*) incluye las bibliotecas de códigos de la *JVM* y los componentes que necesarios para ejecutar programas escritos en Java. El *JRE* está disponible para múltiples plataformas, y puede distribuirse libremente junto con las aplicaciones.de acuerdo a los términos de la licencia del JRE. Esto permite proveer a los usuarios de la aplicación una plataforma en la cual ejecutar su software.

El JRE se incluye en el *JDK*.

---

## 🟡 Como es la organización de Java?

### JME Java Micro Edition

Esta área tiene como objetivo el desarrollo de aplicaciones móviles, tales como GPS, Handhelds (por ejemplo la conocida Palm), celulares y otros dispositivos móviles programables. JME significa Java Micro Edition.

### JSE Java Standard Edition

Esta área tiene como objetivo el desarrollo de aplicaciones de escritorio, similares a las aplicaciones tipo ventanas creadas con Visual Basic o Delphi. Incluye la funcionalidad básica del lenguaje como manejo de clases, colecciones, entrada/salida, acceso a base de datos, manejo de sockets, hilos de ejecución, etc. JSE significa Java Standard Edition.

### JEE Java Enterprise Edition

Esta área tiene como objetivo el desarrollo de aplicaciones empresariales, de gran envergadura. Contempla ambientes web, como los ambientes manejados por servidores de aplicación. Las tecnologías principales incluidas en esta área son Servlets, JSP y EJB, entre otras. JEE significa Java Enterprise Edition.

---

## 🟡 Cuál es la historia de Java?

En el año 1990 nace Java, bajo el diseño y la implementación de la empresa Sun Microsystems. El padre-fundador de la tecnología es el James Gosling, a través de una filial dentro de Sun llamada First Person Inc.
Gosling tuvo la visión inicial de construir una lenguaje de programación capaz de ejecutar su código sobre cualquier set de instrucciones, de distintos procesadores. Inicialmente el proyecto apuntó a la programación unificada de distintos electrodomésticos, es decir programar una sola vez y que el programa generado fuera útil para cualquier dispositivo.
El proyecto inicial de Java fue técnicamente un éxito, aunque comercialmente no tuvo el rendimiento esperado, y debió ser relegado unos años.

En el año 1993, Internet da el gran salto, y se convierte de una interfaz textual a una interfaz gráfica. Java ve una oportunidad y entra fuertemente a internet con los Applets, pequeños programitas construidos en Java – con todos sus beneficios – capaces de ejecutarse dentro de un navegador. Es aquí donde Java comienza a dar sus primeros pasos firmes como lenguaje a difundir masivamente.
En el año 1995, el navegador Netscape Navigator comienza formalmente a soportar los Applets Java.
Adicionalmente, el lenguaje podía adaptarse fácilmente a las múltiples plataformas, con lo cual surge una de las primeras aplicaciones multiplataformas más conocidas: WebRunner (hoy HotJava), un navegador multiplataforma construido en Java.

### ¿Por que se llama Java?

Inicialmente la intención fue nombrar al lenguaje de programación con el nombre de Oak, pero este ya estaba registrado. La leyenda cuenta que una visita a la cafetería le dio rápida solución al problema.
En las confiterías norteamericanas hay un café denominado Java, en el cual esta inspirado el nombre del lenguaje de programación. El logotipo de Java es justamente una taza café.
