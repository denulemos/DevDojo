<a name="har-base"></a>

# [System Design](#har)

| Cookies y Almacenamiento Web |
|----------|
| [Que es una cookie?](#arc15) |
| [Que es el cookie tracking?](#arc16) |
| [Como creo una cookie con Javascript?](#arc17) |
| [¿Cual es la diferencia entre Cookies, SessionStorage y LocalStorage?](#arc18) |
| [¿Como puedo borrar una cookie?](#arc19) |
| [¿Que es CORS?](#arc20) |

| Microfrontends y Monolitos |
|----------|
| [¿Qué resuelve la arquitectura de Microfrontends?](#arc1) |
| [¿Cuales son las caracteristicas de un Microfrontend?](#arc2) |
| [¿Qué beneficios y desventajas ves en la introducción de la arquitectura de microfrontends en algunos de tus proyectos?](#arc3) |
| [¿Qué es la arquitectura de monolitos?](#arc4) |
| [En que se comparan los microservicios con los monolitos?](#arc5) |

| Disponibilidad y Rendimiento |
|----------|
| [Cómo hace Amazon route 53 para dar alta disponibilidad y baja latencia?](#arc6) |
| [Cuál es la diferencia entre Availability Zone y Region?](#arc7) |
| [Qué es la alta disponibilidad?](#arc8) |
| [Qué es la baja latencia?](#arc9) |
| [Qué es un sistema tolerante a fallos?](#arc10) |
| [Qué es un sistema distribuido?](#arc11) |
| [Qué es un sistema de alta disponibilidad?](#arc12) |
| [Qué es un CDN?](#arc13) |
| [Qué es un balanceador de carga?](#arc14) |

---

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

<a id="arc1"></a>

### **¿Qué resuelve la arquitectura de Microfrontends?**

[Volver al indice](#har-base)

Imagina que tienes una gran aplicación web donde todo está junto: la base de datos, el backend (lo que maneja la lógica y las funciones) y el frontend (lo que ve el usuario). Al principio, todo está en un solo lugar, con un solo equipo encargándose de todo.

A medida que la aplicación crece, el equipo comienza a separar el backend y el frontend. El backend se convierte en varios **microservicios**, lo que significa que cada parte del negocio (como los pagos, la autenticación, etc.) tiene su propio servicio, su propia base de datos, y es independiente de las demás.

Pero, el frontend sigue siendo grande y monolítico (todo en un solo bloque de código), y eso empieza a causar problemas. Diferentes equipos trabajan en el frontend, pero al estar todo en un solo repositorio (código guardado en un solo lugar), hacen cambios que afectan a otras partes de la aplicación. Esto puede causar conflictos entre los equipos y hacer que todo sea más difícil de manejar.

Aquí es donde entra el concepto de **microfrontends**. En lugar de tener un solo frontend gigante, se divide en partes más pequeñas, como los microservicios. Cada parte del frontend se encarga de una función del negocio (por ejemplo, una parte para manejar pagos, otra para mostrar el perfil del usuario, etc.), y cada equipo se hace responsable de su propia parte. Cada equipo puede trabajar de forma independiente en su sección, sin afectar a los demás.

De esta manera, los equipos se vuelven dueños de toda una "vertical", lo que significa que no solo controlan el backend, sino también el frontend y la base de datos de su área específica del negocio. Esto mejora la eficiencia y reduce los problemas de coordinación entre equipos.

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

Los monolitos son una forma tradicional de construir aplicaciones. Imagina que todo está en un solo bloque: la parte que muestra la pantalla, la que maneja los datos y la que hace todo el trabajo en el fondo, todo está junto en un solo código. Esto hace que al principio sea fácil de hacer y entender, porque todo está conectado.

Sin embargo, cuando la aplicación crece y se vuelve más compleja, pueden surgir problemas. Si cambias una parte del código, puede afectar a otras partes de la aplicación, lo que hace más difícil agregar nuevas funciones o solucionar problemas.

Además, si necesitas que la aplicación sea más rápida o maneje más usuarios, un monolito puede ser difícil de escalar. Esto se debe a que toda la aplicación debe funcionar en una sola máquina, lo cual no es muy eficiente. En cambio, los microservicios (que son como pequeños bloques separados) permiten que cada parte de la aplicación se pueda escalar de forma independiente.

Aunque hoy en día muchas aplicaciones usan algo llamado microservicios, todavía hay algunas grandes aplicaciones que siguen usando monolitos. El debate ahora es si realmente necesitamos microservicios o si un monolito aún puede funcionar bien en algunos casos.

<a id="arc5"></a>

### **En que se comparan los microservicios con los monolitos?**

[Volver al indice](#har-base)

Cuando hablamos de frameworks para desarrollar el backend de una aplicación, podemos ver que algunos son más usados para aplicaciones monolíticas y otros para aplicaciones basadas en microservicios. La principal diferencia tiene que ver con el tamaño y las funcionalidades del framework.

1. **Frameworks tradicionales (Monolitos)**: Estos frameworks suelen ser más grandes y están diseñados para manejar tanto la parte visual (lo que ve el usuario) como la lógica del negocio (cómo funciona la aplicación) dentro de un solo bloque de código. Algunos ejemplos son Ruby on Rails, Django, Laravel, .NET, y Spring. También hay algunos frameworks más modernos, como Next.js, que siguen esta idea. Estos frameworks hacen mucho trabajo por ti, ofrecen muchas herramientas listas para usar y tienen una forma específica de hacer las cosas (convención sobre configuración). Esto es útil cuando estás construyendo una aplicación monolítica donde todo está conectado en una sola base de código.

2. **Micro frameworks (Microservicios)**: Estos son frameworks más pequeños y flexibles, que solo incluyen lo mínimo necesario para empezar a trabajar. Algunos ejemplos son Express, Flask, y Django REST Framework. No tienen muchas opiniones sobre cómo deberías hacer las cosas, lo que permite que el desarrollador tenga más libertad y control. Estos frameworks son ideales para microservicios, donde cada parte de la aplicación es independiente y solo hace una tarea específica. Como estos frameworks no incluyen funcionalidades extras (como un motor de vistas para generar el HTML), puedes elegir solo lo que necesitas y evitar sobrecargar el proyecto con cosas que no vas a usar.

En resumen, los frameworks grandes son mejores para aplicaciones monolíticas, donde todo está junto y listo para usar, mientras que los micro frameworks son perfectos para aplicaciones que se dividen en pequeños servicios independientes, donde cada uno hace solo una parte del trabajo.

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

Un CDN (Content Delivery Network) es una red de servidores distribuidos globalmente que facilita la entrega rápida y eficiente de contenido web, como imágenes, videos, archivos y otros recursos estáticos, a los usuarios finales. Estos servidores almacenan en caché el contenido en diferentes ubicaciones geográficas y emplean algoritmos de enrutamiento avanzados para dirigir a los usuarios al servidor más cercano, optimizando así la velocidad de carga y mejorando la experiencia del usuario. Al reducir la distancia entre el usuario y el servidor, los CDNs garantizan una entrega de contenido más ágil y eficiente.

<a id="arc14"></a>

### **Qué es un balanceador de carga?**

[Volver al indice](#har-base)

Un balanceador de carga es un dispositivo de red que distribuye el tráfico de manera equilibrada entre varios servidores o dispositivos de red. Su función principal es asegurar que el tráfico se distribuya de forma eficiente y uniforme, evitando la sobrecarga de un solo servidor. Los balanceadores de carga son fundamentales para optimizar la escalabilidad, disponibilidad y rendimiento de aplicaciones web y servicios en línea, al distribuir la carga de trabajo de manera que los servidores puedan manejar el tráfico de manera más efectiva y sin interrupciones.