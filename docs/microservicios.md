---
id: microservicios
title: 🧩 Microservicios
---

## Que son los Microservicios

Es una aplciacion dividida en servicios mas pequeños e independientes, que se encargan de distintas necesidades de negocio. Su deploy, desarrollo y escaling son independientes entre si.

En el approach **Monolitico** los componentes de la aplicacion funcionan todos juntos en un solo paquete. 

## Microservicios y Sistemas Real-time

Los microservicios permiten que los sistemas real-time operen de manera mas eficiente ya que cada funcionalidad se encuentra isolada en un servicio deployable independiente. 
Se recomienda una arquitectura **event-driven** y herramientas como **Apache Kafka**, **Redis Streams** o **gRPC**.
Los microservicios procesan la informacion en paralelo, reduciendo la latencia y mejorando el tiempo de respuesta. 

## API Gateway

Es un entry point que maneja las requests cuando se tienen microservicios. Se encarga de la Autenticación, Rate Limiting, Routing y Logging.

- Facilita el monitoring
- Centraliza la seguridad
- Simplifica la lógica del lado del cliente

Cliente -> API Gateway -> Microservicio correspondiente 

## Casos de estudio

### Netflix

Netflix migro de un sistema monolitico a microservicios para manejar la gran cantidad de usuarios que fueron creciendo con los años, esto para asegurar una alta **disponibilidad**.

Ahora poseen mas de 700 microservicios, cada uno responsable de funciones tales como perfiles de usuario, recomendaciones, streaming, etc..

Los servicios

