# Arquitectura - Diseño de Sistemas

---
# Microfrontends

### **¿Qué resuelve?**

Tenemos la aplicacion monolitica que tiene tanto el BD, Backend y Frotend en un solo monolito, y generalmente con un solo equipo manejandolo. A medida que va creciendo, se va separando el backend del frontend. 

Llega el punto en que el backend ya se maneja mediante microservicios con sus BD propias, separados por funciones del negocio (por ejemplo, un microservicio de pagos, otro de autenticacion, etc..)

Luego, al seguir siendo un frontend monolico, hay conflictos entre equipos y en los cambios en un mismo repositorio, y la afectacion de otras areas. 

La idea del microfrontend es separar el frontend en partes pequeñas por funciones del negocio al igual que los microservicios. 

Los equipos pasan a ser dueños de toda la vertical de negocios (Back, front y DB)

## **Caracteristicas**

### Aplicación contenedora

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

### **Comunicacion entre microfrontends**

- **Event Bus**: Es un canal de comunicacion entre los microfrontends. Se puede usar un bus de eventos para comunicar los microfrontends entre si.
- **API Gateway**: Es un punto de entrada para todas las peticiones de los microfrontends. Se encarga de enrutar las peticiones a los microservicios correspondientes.

### **¿Cuando usarlo?**

- **Cuando se tiene un equipo grande**: Para que cada equipo se encargue de una parte del negocio
- **Cuando se tiene una aplicacion grande**: Para que sea mas facil de mantener y escalar
- **Cuando se tiene una aplicacion con muchas funcionalidades**: Para que cada microfrontend se encargue de una funcionalidad especifica

### **Desventajas**

- **Complejidad**: Es mas complejo que un monolito
- **Performance**: Al tener que cargar varios frontends, puede afectar la performance
- **Seguridad**: Al tener varios frontends, puede haber problemas de seguridad

---

### Pregunta entrevista: Microfrontends vs monolito. ¿Has tenido arquitectura de microfrontends en algunos de tus proyectos? ¿Qué beneficios y desventajas ves en la introducción de la arquitectura de microfrontends en algunos de tus proyectos?

Los Beneficios principales en la introducción de la arquitectura de microfrontends son:

- Escalabilidad y mantenibilidad: Permite escalar y mantener diferentes partes de la aplicación de forma independiente, lo que facilita la gestión de equipos y la evolución de la aplicación a medida que crece.

- Flexibilidad tecnológica: Permite el uso de diferentes tecnologías y frameworks en cada microfrontend, lo que facilita la adopción de nuevas tecnologías y la actualización de componentes sin afectar a toda la aplicación.

- Desarrollo paralelo: Permite que equipos separados trabajen en diferentes partes de la aplicación simultáneamente, lo que acelera el desarrollo y reduce los cuellos de botella.

Sin embargo, también hay algunas desventajas potenciales en la introducción de la arquitectura de microfrontends:

- Complejidad inicial: La introducción de microfrontends puede requerir un esfuerzo adicional en la configuración inicial y la gestión de la comunicación entre los diferentes microservicios.

- Mayor sobrecarga de red: Al dividir la aplicación en múltiples microfrontends, puede aumentar la cantidad de solicitudes de red y la complejidad de la gestión de la comunicación entre ellos.

- Posible fragmentación de la experiencia del usuario: Si no se gestiona adecuadamente, la arquitectura de microfrontends puede resultar en una experiencia de usuario fragmentada debido a las diferencias en la navegación y la interacción entre los diferentes microservicios.

En resumen, mientras que la arquitectura de microfrontends ofrece beneficios significativos en términos de escalabilidad y flexibilidad, también introduce complejidades adicionales que deben ser consideradas y gestionadas cuidadosamente en función de las necesidades específicas de cada proyecto.

---

# Microservicios vs Monolitos

### **Que son los microservicios?**

Es un enfoque de arquitectura basado en la idea de "divide y venceras". La aplicacion se divide en servicios
mas pequenios, cada uno con una funcion particular. Es una solucion modular y distribuida.
En esencia, un microservicio es un componente autónomo que se centra en realizar una tarea específica dentro de la aplicación global. Estos servicios están diseñados para ser independientes entre sí, lo que significa que pueden ser desarrollados, desplegados y escalados de manera independiente. Cada microservicio se comunica con otros a través de interfaces bien definidas, generalmente a través de protocolos de comunicación como HTTP o gRPC.
Las características clave de los microservicios incluyen la independencia de implementación, lo que permite a los equipos trabajar de manera aislada en cada servicio, y la capacidad de escalar horizontalmente según las necesidades de carga específicas de cada componente. Esto facilita la implementación de actualizaciones y mejoras sin afectar todo el sistema, ya que cada microservicio puede evolucionar de forma independiente.
La adopción de microservicios también proporciona una mayor flexibilidad en términos de tecnologías utilizadas para cada servicio. Los equipos pueden seleccionar las herramientas y lenguajes de programación más adecuados para cada tarea, siempre y cuando se respeten las interfaces de comunicación establecidas.
A pesar de estas ventajas, la arquitectura de microservicios no está exenta de desafíos. La complejidad en la gestión de múltiples servicios, la necesidad de una infraestructura robusta para el descubrimiento y la comunicación entre servicios, así como la necesidad de un diseño resiliente que permita la operación del sistema aún cuando un microservicio falle.

- Las funciones Lamba funcionan como microservicios
- Es complicado de implementar, hay que pensar la arquitectura y demás
- Es un conjunto de servicios pequeños que corren sus propios procesos, se deployan de manera independiente, y hay poco manejo centralizado de los mismos.
- Pueden estar escritos en distintos lenguajes, funcionar con distitnas bases de datos y funcionar de distintas maneras
- Es el encapsulamiento a la maxima potencia, cada servicio se encarga de una y solo una sola, de tal manera que si se cae uno, el resto del servicio no se inmuta
- Otra manera de manejo es replicar los servicios que se van necesitando. Es mas optimo ya que puedo distribuir mejor los recursos a nivel arquitectura, además posee escalamiento independiente.
- Tiene desventajas. El testeo es complicado, el monitoreo es complicado, la resiliencia es cara, se necesitan mas dev para su mantenimiento.
- Se debe intentar que no hayan dependencias fuertes entre microservicios para cuando suceden errores. Se deben tener cuidado con librerias de terceros y se deben pensar en los protocolos a utilizar.

### **Que son los monolitos?**

Los monolitos representan una arquitectura tradicional en el desarrollo de aplicaciones web, caracterizada por consolidar todas las funcionalidades de un sistema en un único bloque de código. A diferencia de los microservicios, donde cada función se implementa de manera independiente, los monolitos son estructuras más compactas y centralizadas.
En un monolito, todas las partes de una aplicación, como la interfaz de usuario, la lógica de negocio y la persistencia de datos, coexisten en la misma base de código. Esta simplicidad estructural puede facilitar el desarrollo inicial y la comprensión global del sistema, ya que todas las partes están directamente interconectadas. Además, los monolitos suelen ser más sencillos de implementar, desplegar y gestionar, ya que toda la aplicación se ejecuta como una entidad única.
La arquitectura de monolitos ha sido históricamente la elección predeterminada para muchos proyectos debido a su simplicidad aparente. Sin embargo, a medida que las aplicaciones crecen en tamaño y complejidad, los monolitos pueden presentar desafíos significativos. La modificación de una parte del código puede afectar de forma inesperada otras partes del sistema, lo que puede dificultar la implementación de nuevas características, o la implementación de soluciones a problemas y bugs.
La escalabilidad también puede ser un desafío en los monolitos, ya que toda la aplicación debe ser escalada verticalmente, es decir, aumentando los recursos de la máquina que ejecuta el monolito. Esto puede resultar costoso y menos eficiente en comparación con la escalabilidad horizontal que ofrecen los microservicios.
Si bien durante los últimos años, la arquitectura de monolitos ha sido sujeta de cuestionamientos sobre si puede satisfacer las demandas de aplicaciones modernas altamente escalables y distribuida, existen muchas aplicaciones de gran escala que siguen utilizando este enfoque. En los últimos meses hemos visto este discurso ser ajustado para preguntarnos si realmente las aplicaciones modernas requieren una arquitectura de microservicios o no.

### **En que se comparan los microservicios con los monolitos?**

Si hablamos de frameworks del backend, encontramos una distinción clara entre aquellos que son más usados en monolitos, de los que son usados en microservicios, y tiene que ver con el tamaño del framework. Podemos distinguir dos principales categorías entre los frameworks web tradicionales, y los llamados micro frameworks. 
Hablamos de frameworks web tradicionales a los que históricamente han integrado la vista, y la lógica del negocio en una misma base de código, hablamos sobre todo de frameworks MVC como Ruby on Rails, Django, Laravel, .NET, Spring, por mencionar algunos, pero también podemos incluir a algunos modernos que aplican este mismo principio de una misma base de código como Next.js.
Estos frameworks se caracterizan por implementar las opiniones de los autores, ser de convención por sobre configuración, y empaquetar muchas funcionalidades sobre el framework, lo que les permite implementar sobre el mismo sistema, distintas facetas del proyecto.
Por otro lado, los conocidos como micro frameworks, se tratan de frameworks poco opinados, generalmente de configuración sobre convención, con funcionalidad mínima implementada, entre ellos podemos destacar algunos comúnes como Express, Flask, Django REST Framework, entre otros.
Estos micro frameworks son ideales para la arquitectura de micro servicios, porque al ofrecer una base mínima de convenciones y funcionalidades, permiten que proyectos de funcionalidad específica sean implementados, sin que se incluyan funcionalidades que no han de ser utilizadas.
Un ejemplo claro es el del motor de render de vistas, encargado de generar el HTML con la información de la capa de datos, comúnmente de un modelo, los frameworks “grandes” suelen incluir un sistema de render de vistas por defecto, mientras que los micro frameworks no lo incluyen y más bien requieren que el desarrollador configure el de su preferencia. Para una arquitectura de micro servicios donde la interfaz está separada de otros servicios que manejan datos, es ideal que dichos servicios se desarrollen sobre frameworks que no incluyan un motor de render de vistas que no será utilizado.

### **Es hora de escalar, ¿cuál elijo?**

Existen dos principales áreas de análisis: hasta dónde puede escalar (viabilidad), y cómo se aprovechan los recursos de la infraestructura (eficiencia).

**Eficiencia**: Una arquitectura de microservicios permite que cada componente del sistema escale de manera independiente y de acuerdo a sus necesidades, en ese sentido, el proceso de escalar puede ser más sencillo, en contra de los monolitos. En el caso de los monolitos, el proceso de escala es vertical y menos eficiente, todos los componentes viven en la misma base de código y comparten infraestructura, por lo que, no es posible considerar las necesidades de cada componente en el proceso de escalar la infraestructura. Esto puede implicar que la infraestructura de un monolito sea excesiva para las necesidades de algunos componentes y ajustada para otros, mientras que para los componentes de un monolito la infraestructura es la adecuada para cada componente.

**Viabilidad**: Una de las principales razones por las que una organización decide migrar de un monolito hacia una arquitectura de microservicios responde a la viabilidad de que el monolito soporte la escala actual de la compañía. Es más eficiente escalar una arquitectura de microservicios, esto no significa que los monolitos funcionen solo para aplicaciones de baja escala y poco tráfico. Existen grandes proyectos con millones de usuarios implementados sobre monolitos, así como algunos más pequeños y de menor escala que usan microservicios. En muchas ocasiones, las y los expertos apuntan al tamaño de la empresa, y no al de la escala, para determinar qué arquitectura usar. 

La arquitectura de microservicios responde mejor a organizaciones grandes, donde cada equipo puede implementar la funcionalidad de un componente a su mejor criterio, sin la necesidad de coordinar con otros equipos, mientras que en el caso de los monolitos, todos los equipos deben compartir el mismo contexto y las mismas reglas en el desarrollo del proyecto, aumentando la necesidad de coordinación, reuniones, y comunicación entre equipos.
Por otro lado, para un equipo mediano a pequeño, una arquitectura de monolito puede eficientizar el desarrollo de nuevas características, ya que algunos miembros del equipo pueden necesitar contexto de la operación de múltiples componentes del sistema.
En resumen, escalar eficientemente para altas cargas de tráfico, y para empresas de gran tamaño, suelen ser las principales razones para migrar de monolitos a microservicios, mientras que también, podemos decir que un equipo pequeño, sin importar la escala de tráfico que maneja, puede beneficiarse de una arquitectura de monolito.

### **Despliegue a producción, ¿qué cambia?**

En el caso de monolitos, la implementación ocurre de manera unitaria, ya que toda la aplicación se desarrolla sobre la misma base de código. Esto simplifica el proceso de despliegue, ya que no hay necesidad de coordinar múltiples servicios. No existe un problema de coordinación de versiones, como posiblemente suceda con los microservicios, luego de que todos los componentes comparten el mismo código, esto minimiza los conflictos por gestión de versiones. El despliegue de monolitos suele requerir una orquestación menos compleja, ya que todas las dependencias están presentes en un único entorno. Sin embargo, esto también implica que cualquier error en una parte del sistema puede tener impactos en la totalidad de la aplicación.

En el contexto de los microservicios, cada servicio puede ser desarrollado, probado y desplegado de manera independiente. Esto permite a los equipos actualizar servicios sin afectar la totalidad de la aplicación. La independencia en el despliegue permite que apliquemos algunas metodologías populares como integración continua o despliegue continuo, muy comúnes en equipos de desarrollo que implementan metodologías agiles, la existencias de múltiples servicios implica que exista coordinación de versiones entre ellos, luego de que cada microservicio tiene su propio ciclo de vida, es posible que uno dependa de una versión distinta a la que uno de los servicios está implementando. El despliegue de microservicios generalmente requiere una orquestación más sofisticada. Herramientas como Kubernetes o Docker Swarm se utilizan comúnmente para gestionar la implementación, escalado y actualización de servicios. Esta complejidad adicional es necesaria para mantener la coherencia y la disponibilidad del sistema.

En resumen, la elección entre monolitos y microservicios en el despliegue depende de las necesidades específicas del proyecto. Monolitos ofrecen simplicidad, coherencia; microservicios brindan independencia y escalabilidad.

### **Teniendo en cuenta a la nube, que cambia?**

Cuando se trata de monolitos, el despliegue sigue siendo unitario, pero la nube ofrece oportunidades para optimizar recursos. La capacidad de escalar verticalmente en entornos basados en la nube permite ajustar los recursos de manera más eficiente, aunque aún se comparte la misma base de código. La coordinación de versiones puede ser menos compleja, pero la nube proporciona herramientas para gestionar actualizaciones y rollbacks de manera más flexible, facilitando el mantenimiento de la coherencia en el despliegue.

En el contexto de los microservicios, la independencia en el despliegue encuentra un aliado poderoso en la nube. Cada servicio puede aprovechar los recursos de manera autónoma, escalando horizontalmente según las demandas específicas de cada componente. La nube facilita la implementación de metodologías ágiles como la integración continua y despliegue continuo, permitiendo una evolución constante de los servicios de forma independiente. La coordinación de versiones se vuelve más esencial en entornos basados en la nube, ya que cada microservicio puede tener su propio ciclo de vida. Herramientas de orquestación como Kubernetes se convierten en aliados clave para gestionar la complejidad del despliegue.

En resumen, la elección entre monolitos y microservicios en la nube se centra en cómo aprovechar al máximo las capacidades escalables y flexibles de estos entornos. Monolitos pueden beneficiarse de la escalabilidad vertical, mientras que los microservicios encuentran en la nube un terreno propicio para su independencia y agilidad.

---

# Disponibilidad

### **Cómo hace Amazon route 53 para dar alta disponibilidad y baja latencia?**

- Servidores distribuidos globalmente. Hay DNS en todo el mundo, sí haces una query desde cualquier lugar del mundo, va a haber un servidor DNS cerca para cumplirlo
- Dependencia: Route 53 proporciona un alto nivel de confiabilidad requerido por las aplicaciones críticas.
- Ubicaciones óptimas: Route 53 atiende las solicitudes desde el centro de datos más cercano al cliente que envía la solicitud. AWS tiene centros de datos en todo el mundo. Los datos se pueden almacenar en caché en diferentes centros de datos ubicados en diferentes regiones del mundo según los requisitos y la configuración elegida. Route 53 permite que cualquier servidor en cualquier centro de datos que tenga los datos necesarios para responder. De esta manera, permite que el servidor más cercano atienda la solicitud del cliente, reduciendo así el tiempo de atención

### **Cuál es la diferencia entre Availability Zone y Region?**

Availability Zone es una ubicación física donde Amazon tiene un data center. Una Region es una colección o grupo de AZ o Data Centers.

Esto ayuda a que los servicios tengan más disponibilidad mientras se colocan distintas VM en distintos lugares del mundo para cumplir peticiones. Esto también ayuda a que el servicio se mantenga siempre disponible aunque un Data Center caiga.

### **Qué es la alta disponibilidad?**

La alta disponibilidad es un término que se utiliza para describir la capacidad de un sistema o componente para estar operativo y accesible durante un período de tiempo determinado. La alta disponibilidad se logra mediante la implementación de redundancia y tolerancia a fallos en los sistemas y componentes críticos.

### **Qué es la baja latencia?**

La baja latencia es el tiempo que tarda un sistema en responder a una solicitud. La baja latencia es importante en aplicaciones en tiempo real, como juegos en línea, transmisión de video y aplicaciones financieras, donde incluso pequeños retrasos pueden afectar la experiencia del usuario.

### **Qué es un sistema tolerante a fallos?**

Un sistema tolerante a fallos es un sistema que puede continuar funcionando incluso si uno o más de sus componentes fallan. Los sistemas tolerantes a fallos se diseñan para minimizar el impacto de los fallos y garantizar que el sistema siga siendo operativo y accesible en caso de fallo de un componente.

### **Qué es un sistema distribuido?**

Un sistema distribuido es un sistema de software que se ejecuta en múltiples computadoras interconectadas y se comunica a través de una red de computadoras. Los sistemas distribuidos se utilizan para distribuir la carga de trabajo, mejorar la escalabilidad y la disponibilidad, y permitir la colaboración y la comunicación entre múltiples usuarios y sistemas.

### **Qué es un sistema de alta disponibilidad?**

Un sistema de alta disponibilidad es un sistema que está diseñado para garantizar que esté operativo y accesible durante un período de tiempo determinado. Los sistemas de alta disponibilidad se implementan mediante la redundancia y la tolerancia a fallos en los sistemas y componentes críticos para garantizar que el sistema siga siendo operativo en caso de fallo de un componente.

### **Qué es un CDN?**

Un CDN (Content Delivery Network) es una red de servidores distribuidos geográficamente que se utilizan para entregar contenido web, como imágenes, videos, archivos y otros recursos estáticos, a los usuarios finales de manera rápida y eficiente. Los CDNs almacenan en caché el contenido en servidores distribuidos en todo el mundo y utilizan algoritmos de enrutamiento inteligentes para dirigir a los usuarios al servidor más cercano para una entrega rápida y eficiente del contenido.

### **Qué es un balanceador de carga?**

Un balanceador de carga es un dispositivo de red que distribuye el tráfico de red entre múltiples servidores o dispositivos de red para garantizar que el tráfico se distribuya de manera uniforme y eficiente entre los servidores. Los balanceadores de carga se utilizan para mejorar la escalabilidad, la disponibilidad y el rendimiento de las aplicaciones web y los servicios en línea al distribuir la carga de trabajo entre múltiples servidores y garantizar que los servidores no se sobrecarguen.





