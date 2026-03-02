---
id: microservicios
title: 🧩 Microservicios
---

## Qué son los Microservicios

Es una aplicación dividida en servicios más pequeños e independientes, que se encargan de distintas necesidades de negocio. Su deploy, desarrollo y scaling son independientes entre sí.

En el approach **Monolítico** los componentes de la aplicación funcionan todos juntos en un solo paquete.

| Beneficios | Desventajas |
| --- | --- |
| Multiples equipos pueden trabajar en diversos servicios al mismo tiempo | El manejo de la latencia, tipo de comunicacion y consistencia es complicado |
| Si un servicio tiene problemas, no afecta al resto del sistema | Mas complejidad de desarrollo, testing y deployment |
| El sistema puede adaptarse a cambios de workloads | Mantener la consistencia de la informacion entre servicios puede ser complicado | 
| Cada microservicio puede funcionar con tecnologias completamente distintas | El manejo de errores puede ser complejo | 

## Microservicios y Sistemas Real-time

Los microservicios permiten que los sistemas real-time operen de manera más eficiente, ya que cada funcionalidad se encuentra aislada en un servicio deployable independiente.
Se recomienda una arquitectura **event-driven** y herramientas como **Apache Kafka**, **Redis Streams** o **gRPC**.
Los microservicios procesan la información en paralelo, reduciendo la latencia y mejorando el tiempo de respuesta.

## Componentes

### API Gateway

Es un entry point que maneja las requests cuando se tienen microservicios. Se encarga de la autenticación, rate limiting, routing y logging.

- Facilita el monitoreo
- Centraliza la seguridad
- Simplifica la lógica del lado del cliente

Cliente -> API Gateway -> microservicio correspondiente

### Service Registry 

Mantiene un registro de las ubicaciones y direcciones de todos los microservicios, permitiendo que se comuniquen entre ellos de manera dinámica.

### Load Balancer

Distribuye el tráfico entre varias instancias del servicio para prevenir que cualquier microservicio se vea sobrecargado.

### Containerization

El uso de **Docker** para encapsular los microservicios en conjunto con sus dependencias. Se usan herramientas de orquestación como **Kubernetes** para manejar el deployment y scaling.

### Event Bus - Message Broker

Facilita la comunicación entre microservicios, permitiendo interacciones pub-sub asíncronas de eventos entre componentes y microservicios.

### Bases de Datos

Cada microservicio tiene su propia base de datos generalmente, permitiendo que se tenga una cierta autonomía respecto a la información.

## Patrones de diseño

### API Gateway Pattern

Es pensar al API Gateway como la puerta de entrada a nuestros microservicios. Es un único punto de entrada para los clientes.
Simplifica la experiencia del cliente escondiendo la complejidad de diversos servicios detrás de una sola interfaz.
También puede manejar tareas como la autenticación, logging, rate limiting, entre otros.

### Service Registry Pattern

Es como una guía telefónica para los microservicios. Mantiene una lista de todos los servicios activos y sus localizaciones. Cuando un servicio es iniciado, se registra.
Otros servicios pueden acceder a este registro para encontrar al servicio con el cual desean comunicarse. Esto permite cierta flexibilidad, y el no tener una lista de servicios hardcodeada.

### Circuit Breaker Pattern

Este sistema ayuda a prevenir fallas en cascada. Si un servicio falla de forma repetitiva, el mismo es automáticamente cortado, para evitar que más requests lleguen a este. Luego de un cierto timeout, el servicio vuelve a habilitarse de forma limitada a modo de canary.
Esto mejora la disponibilidad y la prevención de fallas de nuestros servicios.

### Saga Pattern

Este patrón es útil para manejar procesos de negocios complejos que requieren múltiples servicios. En vez de tratar al proceso como una sola transacción, se separa en pequeños pasos, y cada uno de estos, manejado por un servicio distinto.
Si un paso falla, se revierten los pasos anteriores, así se mantiene la consistencia de la información a través de todo el sistema.

### Event Sourcing Pattern

En vez de guardar el estado actual de una aplicacion, se guardan todos los cambios en forma de secuencia de eventos. 
Cada evento describe un cambio que ocurrio, permitiendo que los servicios puedan reproducir los pasos las veces necesarias bajo repeticion. Se tiene un historial claro.
Esto provee una auditoria clara y simplifica el proceso de data recovery en caso de ser necesario, si algo falla. 

## Antipatrones

- Compartir una sola base de datos entre todos los microservicios, comprometiendo la independencia y la escalabilidad.
- Microservicios que constantemente se comunican ante tareas muy pequeñas, ocasionando un gran peso en el trafico de red y afectando la latencia. 
- Crear demasiados microservicios con responsabilidades sumamente pequeñas, agregando complejidad innecesaria.
- Microservicios con limites poco definidos, responsabilidades poco claras.
- No prestar atencion a la seguridad del sistema, exponiendo los servicios a data breaches.