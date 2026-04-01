---
id: systemdesign
title: 🛠️ System Design
---

## **Rendimiento**

### Response Time

Dentro del tiempo de respuesta se tiene:

- **Tiempo de procesamiento**: El tiempo que tarda el servidor en procesar la solicitud y generar una respuesta. Esto puede incluir la ejecución de código, consultas a bases de datos, etc..
- **Tiempo de espera**: El tiempo que tarda la solicitud en viajar desde el cliente al servidor y viceversa. Esto puede incluir la latencia de la red, el tiempo que tarda el servidor en recibir la solicitud, etc..

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

## **Escalabilidad**

Significa que puede crecer sin romperse ni volverse muy lento cuando hay picos de tráfico. Simplemente se añaden más recursos sin afectar el rendimiento (CPU, memoria, etc.).

Si se pasa de 10 a 1000 usuarios, el sistema debería seguir respondiendo igual de bien.

Un ejemplo puede ser una cafetería: si se tiene un solo barista para 50 clientes, la cola se hace infinita.

### Vertical vs Horizontal

Existe la Escalabilidad **vertical** y **horizontal**.

|Vertical|Horizontal|
| --- | --- |
| Se le agregan más recursos al servidor: CPU, memoria, etc. | Se añaden más instancias o máquinas virtuales para repartir la carga entre ellas |
| Se tiene el mismo barista, pero con una máquina más rápida | Se contratan más baristas para lidiar con el flujo de gente |
| Es un poco más fácil, pero a veces limitada; siempre hay un tope de mejora | Es más difícil de realizar, pero no tiene límite teórico |
| No es tolerante a fallos: si el servidor falla, todo el sistema cae | Es más tolerante a fallos: si una instancia falla, las demás siguen funcionando, lo que aporta **alta disponibilidad** |

**No hay relación directa entre más recursos y más rendimiento; a veces se pueden tener cuellos de botella que no se solucionan agregando recursos.**

Por ejemplo, si el sistema tiene un cuello de botella en la base de datos, agregar mas CPU al servidor no va a solucionar el problema.

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

## Load Balancer

Algunas partes del frontend de una página web escalable serán posicionadas detrás de un load balancer. Esto permite que el sistema distribuya la carga para que un solo servidor no maneje todo y, si falla, no haga caer a todo el sistema.
Para hacer esto, se deben tener varios servidores clones, con los mismos recursos disponibles para lidiar con la misma carga. 

## **¿Cómo solucionar un problema de entrevista?**

1. **Desarrollar el Scope del Problema**: Hacer preguntas para entender el problema, los requerimientos, las restricciones, etc.. Esto es importante para poder entender el problema y no asumir cosas que no son ciertas. Por ejemplo, si el problema es diseñar un sistema de reservas de vuelos, se pueden hacer preguntas como: ¿Qué tipo de vuelos se van a reservar? ¿Solo vuelos comerciales o también vuelos privados? ¿Qué tipo de usuarios van a usar el sistema? ¿Solo clientes o también agentes de viajes? etc..
2. **Realizar un diseño abstracto**
3. **Encontrar cuellos de botella (bottlenecks) en tu solución**: Esto es importante para poder mejorar la solución y hacerla más escalable. Por ejemplo, si el sistema de reservas de vuelos tiene un solo servidor para manejar todas las reservas, esto puede ser un cuello de botella, ya que si el servidor falla, todo el sistema cae. Para solucionarlo, se pueden añadir más servidores clonados para repartir la carga entre ellos.

- Separar el problema en módulos más simples. Por ejemplo, si el problema es diseñar un sistema de reservas de vuelos, se puede separar en módulos como búsqueda de vuelos, reserva de vuelos y pago. **Top-down approach**
- Charlar sobre los trade-offs
