---
id: systemdesign
title: 🛠️ System Design
---

## **Rendimiento**

### Response Time

Dentro del tiempo de respuesta se tiene:

- **Tiempo de procesamiento**: El tiempo que tarda el servidor en procesar la solicitud y generar una respuesta. Esto puede incluir la ejecución de código, consultas a bases de datos, etc.
- **Tiempo de espera**: El tiempo que tarda la solicitud en viajar desde el cliente al servidor y viceversa. Esto puede incluir la latencia de la red, el tiempo que tarda el servidor en recibir la solicitud, etc.

Se puede tener un servidor que procese requests de forma muy rápida, pero si está desplegado muy lejos geográficamente, el tiempo de espera puede ser muy alto. Esto se nota mucho si, por ejemplo, el usuario juega en línea.

La solución para esto es acercar nuestros servidores a los usuarios finales.

Lo que nos interesa disminuir es el **tail latency**, que es el tiempo de respuesta de las solicitudes más lentas. Esto es importante porque si tenemos un sistema que procesa el 99% de las solicitudes en 100 ms, pero el 1% restante tarda 1 segundo, esto puede ser un gran problema para los usuarios finales.

Se recomienda usar como enfoque: "El 99% de las solicitudes deben ser procesadas en menos de 100 ms", en lugar de "El tiempo promedio de respuesta debe ser de 100 ms". Esto es porque el tiempo promedio puede ser engañoso si hay algunas solicitudes que tardan mucho tiempo en procesarse.

### Throughput

Número de peticiones por unidad de tiempo que nuestro sistema puede llevar a cabo. Por ejemplo, podemos tener un sistema que procesa peticiones en 100 ms, pero si solo puede procesar una petición a la vez, el throughput será de 10 peticiones por segundo.

Si se tiene un sistema que procesa peticiones en 100 ms, pero puede procesar 10 peticiones a la vez, el throughput será de 100 peticiones por segundo.

Esto debe ser controlado si se espera que haya picos de tráfico, por ejemplo, en un sitio de e-commerce durante el Black Friday.

### Medición

Se recomienda el uso de **Histogramas** para calcular los **Percentiles** del tiempo de respuesta.

Por ejemplo, se tienen 10 servidores con su tiempo de respuesta en ms.

| Servidor | Tiempo de respuesta (ms) |
| --- | --- |
| Servidor 1 | 30 |
| Servidor 2 | 50 |
| Servidor 3 | 20 |
| Servidor 4 | 155 |
| Servidor 5 | 30 |
| Servidor 6 | 205 |
| Servidor 7 | 30 |
| Servidor 8 | 25 |
| Servidor 9 | 15 |
| Servidor 10 | 35 |

En esta lista podemos ver que los servidores 4 y 6 poseen un tiempo de respuesta mucho mayor al de los demás. Esto nos dice que algo raro está sucediendo con estos dos servidores.

Esto, con un gráfico del tipo histograma, sería fácilmente identificable, siendo las barras más altas o más bajas las problemáticas.

![Histograma](https://www.addlink.es/images/productos/minitab/2023/minitab-histograma-picos-dispersion.png)

## **Fiabilidad**

No sirve si nuestro sistema es escalable y performante si falla constantemente. La **tolerancia a fallos** es la capacidad de un sistema para seguir funcionando correctamente incluso cuando ocurren fallos o errores.

- **Uptime**: Tiempo que nuestro sistema está operativo

- **Downtime**: Tiempo en que nuestro sistema no está operativo

**Disponibilidad (%) = Uptime / Tiempo total**

Si tenemos múltiples servicios, se tienen varios tipos de cálculos disponibles, ya que las caídas no son lineales (se puede caer solo una región, solo un servidor, etc.)

**Uptime = (cantidad de servicios operativos / Servicios totales) * tiempo** => no se tiene en cuenta el porcentaje de uso de cada uno.

**Uptime = (número de peticiones exitosas / número de peticiones totales) * tiempo** => se tiene en cuenta el porcentaje de uso de cada servicio, pero no la relevancia de cada uno.

Se debe ponderar cada servicio según importancia y uso del mismo. Por ejemplo, no es lo mismo un servicio que se encarga de publicar mensajes en Reddit como el login; el segundo es mucho menos usado que el primero en un producto como Reddit.

### Mean Time Between Failures (MTBF)

Es el tiempo medio entre fallos de nuestro sistema.

**Nos interesa un MTBF alto, ya que esto significa que nuestro sistema es más confiable y tiene menos fallos.**

#### Mean Time To Recover (MTTR)

Es el tiempo medio para que el sistema se recupere de un fallo.

**Nos interesa un MTTR bajo, ya que esto significa que nuestro sistema se recupera rápidamente de los fallos.**

### Disponibilidad

¿Qué significa que nuestro sistema tenga **alta disponibilidad**?

Obviamente nuestros clientes quieren que el sistema esté el 100% del tiempo disponible, pero esto no es posible, ya que siempre pueden ocurrir fallos humanos, de hardware, proveedores externos o mantenimiento.

Sin embargo, se puede diseñar un sistema para que tenga una alta disponibilidad, lo que significa que el sistema estará disponible la mayor parte del tiempo posible.

El 100% es inalcanzable, pero se puede apuntar a un 99.999% de disponibilidad, que quiere decir que nuestro sistema estará caído solo 5.26 minutos por año, lo que representa 800 milisegundos por día.

Empezamos a hablar de alta disponibilidad a partir del **99.9% Tres nueves**, que representa un downtime de 8.77 horas por año, o 49 minutos por mes.

## **Escalabilidad**

Significa que puede crecer sin romperse ni volverse muy lento cuando hay picos de tráfico. Simplemente se añaden más recursos sin afectar el rendimiento (CPU, memoria, etc.).

Si se pasa de 10 a 1000 usuarios, el sistema debería seguir respondiendo igual de bien.

Un ejemplo puede ser una cafetería: si se tiene un solo barista para 50 clientes, la cola se hace infinita.

### Vertical vs Horizontal

Existe la escalabilidad **vertical** y **horizontal**.

|Vertical|Horizontal|
| --- | --- |
| Se le agregan más recursos al servidor: CPU, memoria, etc. | Se añaden más instancias o máquinas virtuales para repartir la carga entre ellas |
| Se tiene el mismo barista, pero con una máquina más rápida | Se contratan más baristas para lidiar con el flujo de gente |
| Es un poco más fácil, pero a veces limitada; siempre hay un tope de mejora | Es más difícil de realizar, pero no tiene límite teórico |
| No es tolerante a fallos: si el servidor falla, todo el sistema cae | Es más tolerante a fallos: si una instancia falla, las demás siguen funcionando, lo que aporta **alta disponibilidad** |

**No hay relación directa entre más recursos y más rendimiento; a veces se pueden tener cuellos de botella que no se solucionan agregando recursos.**

Por ejemplo, si el sistema tiene un cuello de botella en la base de datos, agregar más CPU al servidor no va a solucionar el problema.

### Escalable entre múltiples equipos

Debemos tener en cuenta los siguientes puntos:

**Gobernanza clara**

- Core team (dueños del sistema): define estándares, revisa PRs, mantiene roadmap
- Contribución abierta: cualquier equipo puede aportar, pero con guidelines y templates.
- RFC liviano para cambios grandes (nuevos patterns, breaking changes, tokens nuevos)

**Tokens primero (la base de la consistencia)**

Defino design tokens como fuente de verdad: colores, spacing, tipografía, radios, sombras, z-index, breakpoints.

**Arquitectura por capas**

- Foundations: tokens + guidelines.
- Primitives: Button, Input, Text, Stack, Grid.
- Composites: Modal, Table, DatePicker.
- Patterns: flows y ejemplos (login, checkout, settings).

Esto permite que equipos usen lo mínimo necesario sin romper todo.

**Documentación**

- Un Storybook / Docs site con: ejemplos reales, do/don’t, guidelines de UX, accesibilidad, snippets copy-paste.
- “Cómo migrar” entre versiones (no solo “breaking changes”).

**Calidad y compatibilidad en CI**

Tests:
- unitarios + visual regression (Chromatic / Playwright screenshots)
- a11y checks (axe)
- type tests (TS)

**Consumer-driven**: una app grande sirve como canary para detectar breaks.

## Servicios Stateful

En los **servicios stateful** el estado se mantiene en el servidor. Por ejemplo, si un usuario inicia sesión, el servidor guarda su información en memoria.

Esto puede ser un problema para la escalabilidad horizontal, ya que si se añaden más instancias, el estado no se comparte entre ellas. Para solucionar esto, se pueden usar bases de datos o cachés distribuidas para compartir el estado entre las instancias, o asignar un servidor a un usuario específico y siempre direccionar sus peticiones hacia el mismo servidor mediante **sticky sessions**, aunque esto reduciría la **tolerancia a fallos**.

## Servicios Stateless

En los **servicios stateless** no se almacena información del usuario en el servidor; cada petición es independiente y contiene toda la información necesaria para ser procesada. Esto facilita la escalabilidad horizontal, ya que se pueden añadir más instancias sin preocuparse por el estado.

Si hace falta guardar algún tipo de información, esta puede almacenarse en las **cookies** o en el **Local Storage** del cliente, o se puede usar un sistema de **tokens (JWT)** para mantener la información del usuario sin necesidad de almacenarla en el servidor.

## **Tolerancia a Fallos**

Los fallos son inevitables, lo importante es cómo los manejamos.

La misma consta de 3 prácticas:

- Prevención
- Detección
- Recuperación

### Prevención

Para prevenir los fallos de un sistema se debe entender el **Single Point of Failure (SPoF)**, que es un componente del sistema que, si falla, hará que todo el sistema falle.

- Servidor
- Base de datos
- Proveedor de servicios externos

Es importante **eliminar** estos puntos. Se debe aplicar **redundancia**.

- Múltiples servidores (escalado horizontal)
- Múltiples bases de datos (réplicas)

### Detección

La detección rápida es vital.

- Aviso a interesados
- Puesta en marcha de estrategias de mitigación (fallbacks, circuit breakers, etc.)

Esto se maneja mediante la **Monitorización** del sistema, que es el proceso de recopilar, analizar y utilizar datos para entender el rendimiento y la salud de un sistema. Esto incluye:

- **Logs**: Registros detallados de eventos que ocurren en el sistema. Pueden ser útiles para diagnosticar problemas y entender el comportamiento del sistema.
- **Métricas**: Datos cuantitativos que miden el rendimiento del sistema, como el tiempo de respuesta, el throughput, la tasa de errores, etc. Estas métricas pueden ser utilizadas para detectar anomalías y predecir fallos.
- **Alertas**: Notificaciones que se envían cuando se detecta un problema o una anomalía en el sistema. Las alertas pueden ser configuradas para diferentes niveles de gravedad y pueden ser enviadas a diferentes equipos o personas según el tipo de problema.

### Recuperación

Es importante recuperar el sistema lo antes posible para evitar que los usuarios se vean afectados a gran medida.

- Apagar por completo el sistema para dejar de propagar errores
- Rollback a una versión anterior estable
- Copia de seguridad de los datos

La recuperación debe ser lo más sencilla posible, ya que se considera una situación de estrés.

Luego, se debe hacer un **Post Mortem** para entender qué pasó, por qué pasó y cómo evitar que vuelva a pasar.

## **Mantenibilidad**

El desarrollo inicial de un sistema es solo el comienzo.

El sistema debe ser mantenido y actualizado a lo largo del tiempo para corregir errores, agregar nuevas funcionalidades, mejorar el rendimiento, etc.

El producto debe ser **sencillo de mantener** para que los devs puedan trabajar en el mismo y no se convierta en un sistema abandonado, ya que el costo de implementación es mayor a la ganancia.

### Observabilidad

Hacer sencillo el trabajo del equipo de operaciones, que el sistema se mantenga trabajando de la manera más fácil posible.

- Mantener la documentación actualizada
- Dar los accesos necesarios a los equipos de operaciones para que puedan monitorear el sistema de manera efectiva

No siempre el mismo equipo de devs compone el equipo de operaciones, por eso es importante que el sistema sea fácil de entender y mantener para cualquier persona que trabaje en él, incluso si no fue el equipo original que lo desarrolló. En este caso se debe **ofrecer soporte para la automatización y la integración del código**

Los mismos son responsables de:

- Monitorizar la salud del sistema y restaurarlo lo antes posible si algo sucede. **Es importante que la información interna del sistema tenga una buena visibilidad para que el monitoreo sea útil**
- Investigar la razón de los problemas
- Mantener la infraestructura y herramientas actualizadas
- Anticipar futuros problemas que puedan suceder, **nuestro sistema debe ser lo más predecible posible para minimizar las sorpresas**
- Mantenimiento, **se debe evitar la dependencia con máquinas individuales**

### Simplicidad

Que si un nuevo dev ingresa a nuestro equipo, pueda entender el sistema de manera fácil y rápida para poder aportar valor de manera más rápida.

- A medida que el código crece, la calidad baja.
- Si el código es complejo, la probabilidad de generar nuevos bugs es alta.
- El código debe ser sencillo de entender, con una buena estructura y organización, para que cualquier persona pueda entenderlo sin necesidad de tener un conocimiento profundo del mismo.

Algunos problemas comunes son:

- Módulos muy acoplados
- Dependencias innecesarias
- Nombres de variables o funciones inconsistentes
- Acciones inesperadas en el código, cuando se ejecuta una función, se espera que haga algo, pero hace otra cosa, lo que puede generar confusión y errores.

### Extensibilidad

Que nuestro sistema pueda ser extendido con nuevas funcionalidades sin necesidad de modificar el código existente, lo que facilita la incorporación de nuevas características y la adaptación a cambios futuros.

Facilitar futuros cambios en nuestro sistema, ya que los mismos son inevitables.

Esto se puede lograr mediante:

- **Lado código**: Mantener el código limpio y predecible
- **Lado organizativo**: Dar lugar a procesos de organización simples y claros para que los devs puedan seguirlos y no se convierta en un caos.
    - **Cascada**: Primero toma de requisitos, diseño, implementación y mantenimiento. Es un proceso lineal, donde cada etapa se completa antes de pasar a la siguiente. Este proceso es rígido y no permite cambios una vez que se ha pasado a la siguiente etapa. **Poca flexibilidad**
    - **Ágil**: Se divide el trabajo en sprints, donde se planifica, se ejecuta y se revisa el trabajo de manera iterativa. Este proceso es flexible y permite cambios a medida que se avanza en el proyecto, lo que facilita la adaptación a cambios futuros. **Alta flexibilidad**

## Load Balancer

Algunas partes del frontend de una página web escalable serán posicionadas detrás de un load balancer. Esto permite que el sistema distribuya la carga para que un solo servidor no maneje todo y, si falla, no haga caer a todo el sistema.
Para hacer esto, se deben tener varios servidores clones, con los mismos recursos disponibles para lidiar con la misma carga.

## **¿Cómo solucionar un problema de entrevista?**

1. **Desarrollar el Scope del Problema**: Hacer preguntas para entender el problema, los requerimientos, las restricciones, etc. Esto es importante para poder entender el problema y no asumir cosas que no son ciertas. Por ejemplo, si el problema es diseñar un sistema de reservas de vuelos, se pueden hacer preguntas como: ¿Qué tipo de vuelos se van a reservar? ¿Solo vuelos comerciales o también vuelos privados? ¿Qué tipo de usuarios van a usar el sistema? ¿Solo clientes o también agentes de viajes? etc.
2. **Realizar un diseño abstracto**
3. **Encontrar cuellos de botella (bottlenecks) en tu solución**: Esto es importante para poder mejorar la solución y hacerla más escalable. Por ejemplo, si el sistema de reservas de vuelos tiene un solo servidor para manejar todas las reservas, esto puede ser un cuello de botella, ya que si el servidor falla, todo el sistema cae. Para solucionarlo, se pueden añadir más servidores clonados para repartir la carga entre ellos.

- Separar el problema en módulos más simples. Por ejemplo, si el problema es diseñar un sistema de reservas de vuelos, se puede separar en módulos como búsqueda de vuelos, reserva de vuelos y pago. **Top-down approach**
- Charlar sobre los trade-offs
