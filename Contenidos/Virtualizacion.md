# Virtualizacion

### **Que es la virtualizacion?**

Virtualizar significa aparentar que algo con una forma tiene otra. Virtualizar una computadora representa simular que se trata de una o múltiples computadoras completamente diferentes.

La virtualización es una tecnología que permite que los sistemas operativos se ejecuten como aplicaciones dentro de otros sistemas operativos.

En términos generales, la virtualización es un software que también incluye emulación. La emulación se utiliza cuando el tipo de CPU de origen es diferente del tipo de CPU de destino. Este mismo concepto puede extenderse para permitir que todo un sistema operativo escrito para una plataforma funcione en otra.

En la emulación, cada instrucción a nivel de máquina que se ejecuta de forma nativa en el sistema de origen debe traducirse a la función equivalente en el sistema de destino. Esto, con frecuencia, resulta en varias instrucciones en el destino. Aún si la CPU fuente y la CPU destino tienen niveles de rendimiento similares, el código emulado puede funcionar mucho más lento que el código nativo.

Un ejemplo común de emulación se produce cuando un programa fuente no se compila a código nativo pero en su lugar se ejecuta en su forma de alto nivel o se convierte en un formulario intermedio. Esto se conoce como interpretación.

Algunos lenguajes, como BASIC, pueden ser compilados o interpretados. Java en contraste, siempre se interpreta. La interpretación es una forma de emulación en la que el código de lenguaje de alto nivel se traduce a instrucciones nativas de la CPU, no emulando otra CPU, sino una máquina virtual teórica en la que ese lenguaje podría funcionar de forma nativa. Por lo tanto, se puede ejecutar programas Java en "máquinas virtuales Java", pero técnicamente esas máquinas virtuales son emuladores Java.

La idea fundamental de una máquina virtual es la de abstraer el hardware de la computadora, formando entornos de ejecución diferentes, creando así la ilusión de que cada entorno de ejecución tiene su propia computadora.

En otras palabras, una máquina virtual (MV o VM *Virtual Machine* por su sigla en inglés), no es más que un software que es capaz de albergar en su interior otro sistema operativo haciendo creer que se tiene una computadora real.

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

### **Cómo se usa una máquina virtual?**

Para usar una máquina virtual lo primero que se necesita es instalar una aplicación en la PC, que pueda crearla o al menos reproducirla.

Hay varias aplicaciones conocidas que hacen esto, como son VirtualBox, VMWare, QEMU, Parallels, etc.

### **Cuales son los beneficios del uso de máquinas virtuales?**

El concepto de VM presenta grandes ventajas. Este tipo de entorno brinda una protección completa de los diversos recursos del sistema. Cada máquina virtual está completamente aislada de las demás. De esta forma, los procesos que ejecutan están limitados por los recursos y abstracciones proporcionados por la VM. Estos procesos no pueden escaparse de esta "computadora virtual".

Un sistema de máquina virtual es un medio muy cómodo para la investigación y desarrollo de sistemas operativos. De esta forma se puede ejecutar el sistema operativo que se quiere probar, sin necesidad de instalarlo directamente en una computadora y sin peligro de des- configurar el sistema operativo primario.

### **Que es un hipervisor?**

El software de virtualización implementa lo que se denomina hipervisor o VMM *(Virtual Machine Monitor)* que consiste en una capa de abstracción entre el hardware de la máquina física (*host*, anfitrión) y la máquina virtual formada por hardware y software virtualizado, haciendo el papel de intermediario entre lo real y lo virtualizado.

El sistema operativo instalado en la computadora real, con el que arranca, recibe el nombre de anfitrión *(host)*, mientras que el sistema operativo que se instala en la VM se denomina huésped *(guest)*.

La capa de software hipervisor o VMM, gestiona y arbitra los cuatro recursos principales de una computadora: CPU, memoria, almacenamiento y conexiones de red, repartiendo dinámicamente estos recursos entre todas las máquinas virtuales creadas en la PC anfitriona. Esto permite tener varias máquinas virtuales ejecutándose en la misma computadora física.

### **Que es un hipervisor de tipo 1?**

Denominado también como “virtualización en modo nativo”, se caracteriza porque este software se instala directamente sobre el equipo haciendo las funciones tanto de sistema operativo (SO) como de virtualización.

Este método de virtualización se utiliza generalmente en las empresas que pueden disponer de uno o varios servidores dedicados en forma exclusiva a la virtualización de sistemas.

![alt text](src/virtualizacion1.png)

### **Que es un hipervisor de tipo 2?**

El software de virtualización de tipo 2, o alojado (*hosted*), se caracteriza porque debe ser instalado en un equipo que cuente con un SO previo anfitrión (como Linux, Microsoft Windows, Mac OS X, etc.).

Este es el método de virtualización apropiado e ideal para probar software (sistemas operativos y aplicaciones) sin riesgo de afectar a nada de lo que haya en la máquina anfitriona. Ésta forma de virtualización es menos eficiente que la anterior, pero se puede seguir utilizando el equipo físico con otras aplicaciones en el SO anfitrión.

![alt text](src/virtualizacion2.png)

### **Que es una maquina virtual de sistema?**

Una máquina virtual de sistema es aquella que emula a una computadora completa. El software se puede hacer pasar por otro dispositivo -como una PC- de tal modo que se ejecuta otro sistema operativo en su interior. Tiene su propio disco duro, memoria, tarjeta de video y demás componentes de hardware, aunque todos ellos son virtuales.

Que sus componentes sean virtuales no significa que necesariamente no existan. Por ejemplo, una máquina virtual puede tener recursos reservados de 1 GB de RAM y 20 GB de disco duro, que obviamente salen de algún sitio: salen de la PC donde está instalada la máquina virtual

Otros dispositivos podrían realmente ser inexistentes físicamente, como por ejemplo un CD (ROM) que puede ser el contenido de una imagen ISO en vez del leído en un lector de CD verdadero.

Para el sistema operativo que se ejecuta dentro de la máquina virtual toda esta emulación es transparente e invisible.

Todo funciona igual a si se estuviera ejecutando en una PC normal, sin que sepa que en verdad está incrustado dentro de un recinto, dentro de otro sistema operativo. De hecho, nada impide crear otra máquina virtual dentro de la anterior máquina virtual.

Una máquina virtual no puede acceder al resto de datos de la máquina anfitrión. A pesar de estar físicamente funcionando en la misma, están aisladas. Sin embargo, las principales aplicaciones de máquinas virtuales como VirtualBox o VMWare disponen de atajos y herramientas para facilitar la tarea de pasar archivos de una máquina a otra.

![alt text](src/virtualizacion3.png)

### **Que es una maquina virtual de procesos?**

Una máquina virtual de proceso tiene menor alcance que una de sistema. En vez de emular una PC por completo, como su nombre lo indica, una máquina virtual de proceso ejecuta un proceso concreto, como una aplicación, en su entorno de ejecución.

Cada vez que se ejecuta una aplicación basada en Java o basada en .NET Framework, se está utilizando una máquina virtual de proceso.

Este modelo es muy usado cuando se desarrollan aplicaciones para varias plataformas, ya que en lugar de tener que programar específicamente para cada sistema, el entorno de ejecución (es decir, la máquina virtual de proceso) es quien se encarga de interactuar con el sistema operativo.

Las máquinas virtuales de proceso permiten ejecutar aplicaciones que se comportarán de igual forma en plataformas tan distintas como, por ejemplo: Linux, Windows, Mac, sin que el usuario note diferencias.

![alt text](src/virtualizacion4.png)

