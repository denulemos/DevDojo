# 🚀 Spring 

## Que es Spring Boot y porque usarlo?

Es un proyecto que nace para simplificar el desarrollo de aplicaciones Spring, antes se necesitaban muchos archivos XML, configuraciones manuales y decisiones complejas. Spring Boot automatiza gran parte de esta usando el principio de **conveniencia sobre configuración**, que dice que en vez de configurar todo de manera manual, se asumen configuraciones razonables default, por ejemplo, si se importa la dependencia `spring-boot-starter-web` se asume que se quiere un servidor web embebido y configura Spring MVC.

Ademas con Spring boot se puede ejecutar el proyecto con `java -jar` y el servidor se inicia de manera automatica, agilizando el testeo de APIs. 

### Spring boot Actuator

Ofrece endpoints para monitorear la salud, metricas e informacion del sistema. Facilita la integracion con herramientas de monitoreo y alertas como New Relic. 

## Inicio rapido con Spring Boot

1. Crear un proyecto en [Spring Initializr](https://start.spring.io/) con las siguientes opciones:
   - Project: Nombre Project
   - Language: Java
   - Spring Boot: 2.5.4
   - Project Metadata:
     - Group: com.ejemplo
     - Artifact: demo
     - Name: demo
     - Description: Demo project for Spring Boot
     - Package name: com.ejemplo.demo
     - Packaging: Jar
     - Java: 11
   - Dependencies: Spring Web, Spring Boot DevTools
2. Descargar el proyecto y descomprimirlo.
3. Abrir el proyecto en tu IDE favorito (IntelliJ, Eclipse, VSCode).
4. Navegar a la clase principal `DemoApplication.java` y ejecutar el metodo `main`.
5. Abrir el navegador y acceder a `http://localhost:8080` para ver la aplicacion en funcionamiento.
6. Crear un controlador simple:
   - Crear una nueva clase `HelloController.java` en el paquete `com.ejemplo.demo`.
   - Agregar el siguiente codigo:
   ```java
   package com.ejemplo.demo;

   import org.springframework.web.bind.annotation.GetMapping;
   import org.springframework.web.bind.annotation.RestController;

   @RestController
   public class HelloController {

       @GetMapping("/hello")
       public String hello() {
           return "Hola, Mundo!";
       }
   }
   ```
7. Guardar los cambios y reiniciar la aplicacion.
8. Acceder a `http://localhost:8080/hello` para ver el mensaje "Hola, Mundo!".

### Dependencias comunes

- `spring-boot-starter-web`: Para desarrollar aplicaciones web.
- `spring-boot-starter-data-jpa`: Para trabajar con bases de datos usando JPA.
- `spring-boot-starter-security`: Para agregar seguridad a la aplicación.
- `spring-boot-starter-test`: Para pruebas unitarias y de integración.