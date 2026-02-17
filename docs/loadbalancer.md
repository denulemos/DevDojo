---
id: loadbalancer
title: ⚖️ Load Balancer
---

Load Balancing es el proceso de distribuir el trafico de red entre multiples servidores para:

- No sobrecargar ninguno de ellos
- Mejora la performance reduciendo los tiempos de respuesta
- Mejora el availability/disponibilidad del servicio redirigiendo el trafico si algun servidor se cae.

Para implementar load balancing, hay **algoritmos** con sus pro y cons. 

## Round Robin

![Round Robin](https://substackcdn.com/image/fetch/$s_!jpjg!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F54114fcc-cce5-4f0d-a678-47f8f0339fd4_1304x1076.png)

Supongamos que tenemos 3 servidores.

1. La primera request se envia al primer servidor
2. La segunda request se envia al segundo servidor
3. La tercera request se envia al tercer servidor
4. Ante una cuarta request, el loop se reinicia, y esta se envia al primer servidor.  

**Cuando se usa?**

- Todos los servidores tienen la misma o similar capacidad de procesamiento
- Cuando la distribucion par entre servidores es importante
- Cuando la simplicidad es importante

| Pros | Cons |
| --- | --- |
| Simple de entender | No considera el nivel de carga ni el tiempo de respuesta |
| Simple de implementar | Si los servidores tienen distinta capacidad de procesamiento, puede ser ineficiente | 
| Asegura la distribucion equitativa | |

## Weighted Round Robin

![Weighted Round Robin](https://substackcdn.com/image/fetch/$s_!v6Dt!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb12546e-4905-46b0-89e6-80ab007a6aa2_1570x1110.png)

Es la arquitectura perfecta para cuando **tenemos servidores con distinto procesamiento**. 

- Cada servidor es asignado con una cantidad maxima de requests dependiendo de su poder de procesamiento
- Mas procesamiento, mas requests, y viceversa

| Pros | Cons |
| --- | --- |
| Se asigna carga dependiendo del poder de procesamiento | Un poco mas complejo de implementar |
| Uso mas eficiente de los recursos | No considera tiempo de respuesta | 
| Asegura la distribucion equitativa | |

## Least Connections

![Least Connections](https://substackcdn.com/image/fetch/$s_!MRhR!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc42a1db9-75b4-4a52-9e9b-dfcc0118c235_1728x1118.png)

- Monitorea la cantidad de conexiones activas en cada servidor
- Se le asignan nuevas requests al servidor que tiene menor carga

Es una buena opcion cuando se tienen varios servidores con capacidades de procesamiento similares pero con distinto nivel de conexiones concurrentes. 

| Pros | Cons |
| --- | --- |
| Distribuye la carga de forma mas dinamica | Si los servidores tienen distinto nivel de procesamiento puede no ser optimo |
| Previene el overload de cualquier servidor | Requiere el tracking de la cantidad de conexiones por servidor | 

## Least Response Time

![Least Response Time](https://substackcdn.com/image/fetch/$s_!WU5I!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F13178f62-358e-4717-83e9-f404bf9f91e5_1710x1120.png)

- Se monitorea el tiempo de respuesta de cada servidor
- Se le asigna la siguiente request al servidor con el tiempo de respuesta mas rapido

