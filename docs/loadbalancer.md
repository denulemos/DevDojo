---
id: loadbalancer
title: "⚖️ Load Balancer"
---

Load Balancing es el proceso de distribuir el tráfico de red entre múltiples servidores para:

- No sobrecargar ninguno de ellos.
- Mejorar la performance reduciendo los tiempos de respuesta.
- Mejorar la availability/disponibilidad del servicio redirigiendo el tráfico si algún servidor se cae.

Para implementar load balancing, hay **algoritmos** con sus pros y cons.

## Round Robin

![Round Robin](https://substackcdn.com/image/fetch/$s_!jpjg!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F54114fcc-cce5-4f0d-a678-47f8f0339fd4_1304x1076.png)

Supongamos que tenemos 3 servidores.

1. La primera request se envía al primer servidor.
2. La segunda request se envía al segundo servidor.
3. La tercera request se envía al tercer servidor.
4. Ante una cuarta request, el loop se reinicia y esta se envía al primer servidor.

**¿Cuándo se usa?**

- Todos los servidores tienen la misma o similar capacidad de procesamiento.
- Cuando la distribución par entre servidores es importante.
- Cuando la simplicidad es importante.

| Pros | Cons |
| --- | --- |
| Simple de entender | No considera el nivel de carga ni el tiempo de respuesta |
| Simple de implementar | Si los servidores tienen distinta capacidad de procesamiento, puede ser ineficiente |
| Asegura la distribución equitativa | |

## Weighted Round Robin

![Weighted Round Robin](https://substackcdn.com/image/fetch/$s_!v6Dt!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb12546e-4905-46b0-89e6-80ab007a6aa2_1570x1110.png)

Es la arquitectura perfecta para cuando **tenemos servidores con distinto procesamiento**.

- Cada servidor es asignado con una cantidad máxima de requests dependiendo de su poder de procesamiento.
- Más procesamiento, más requests, y viceversa.

| Pros | Cons |
| --- | --- |
| Se asigna carga dependiendo del poder de procesamiento | Un poco más complejo de implementar |
| Uso más eficiente de los recursos | No considera tiempo de respuesta |
| Asegura la distribución equitativa | |

## Least Connections

![Least Connections](https://substackcdn.com/image/fetch/$s_!MRhR!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc42a1db9-75b4-4a52-9e9b-dfcc0118c235_1728x1118.png)

- Monitorea la cantidad de conexiones activas en cada servidor.
- Se le asignan nuevas requests al servidor que tiene menor carga.

Es una buena opción cuando se tienen varios servidores con capacidades de procesamiento similares, pero con distinto nivel de conexiones concurrentes.

| Pros | Cons |
| --- | --- |
| Distribuye la carga de forma más dinámica | Si los servidores tienen distinto nivel de procesamiento, puede no ser óptimo |
| Previene el overload de cualquier servidor | Requiere el tracking de la cantidad de conexiones por servidor |

## Least Response Time

![Least Response Time](https://substackcdn.com/image/fetch/$s_!WU5I!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F13178f62-358e-4717-83e9-f404bf9f91e5_1710x1120.png)

- Se monitorea el tiempo de respuesta de cada servidor.
- Se le asigna la siguiente request al servidor con el tiempo de respuesta más rápido.

| Pros | Cons |
| --- | --- |
| Minimiza la latencia | Se debe monitorear el response time de forma exacta para poder tomar la mejor decisión |
| Se adapta dinámicamente a los cambios de tiempo de respuesta de los servidores | No se consideran factores como carga ni cantidad de conexiones |
| Mejora la experiencia del usuario, ya que el tiempo de respuesta es mucho mejor | |

## IP Hash

![IP Hash](https://substackcdn.com/image/fetch/$s_!qMbL!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc38a5648-bcdf-487c-9fe6-a0a179eb5f72_1304x1098.png)

- Se usa la IP de origen del cliente para calcular un hash.
- Ese hash determina a qué servidor se enviará la request.
- Mientras la IP no cambie, el cliente tiende a caer siempre en el mismo servidor.

Es una buena opción cuando se necesita **session persistence (sticky sessions)**, por ejemplo, en aplicaciones donde el estado de sesión se guarda en memoria del servidor.

| Pros | Cons |
| --- | --- |
| Mantiene afinidad cliente-servidor de forma natural | Si muchos usuarios salen por una misma IP (NAT/proxy), puede generar desbalance |
| Reduce la necesidad de compartir estado entre servidores | Si un servidor cae, los clientes mapeados a ese nodo deben re-hashearse |
| Implementación simple y predecible | Cambios en la red (IP dinámica) pueden romper la persistencia |
