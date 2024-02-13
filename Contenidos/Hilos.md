# Hilos 🐤

## **Qué es un Hilo?**

Es la unidad básica de ejecución que contiene su propio identificador, contador de programa, registros de CPU y stack. 
Los hilos dentro de una misma app comparten código, datos, y recursos del SO

## **Qué es un proceso pesado y un proceso ligero?**

- Un proceso pesado contiene uno o mas hilos que comparten la misma memoria y recursos. Una aplicacion es un ejemplo
- Un proceso ligero es un hilo, son actividades recurrentes dentro de una app

## **Cómo funciona el proceso mono hilo y multi hilo?**

Los programas multiproceso introducen desafios para los dev, para la creacion de hilos, almacenamiento, etc..
<img src="blob:chrome-untrusted://media-app/7f5c50aa-c3cd-4852-91fa-8033a57bfa0f" alt="Untitled.png"/>![image](https://github.com/denulemos/denobible/assets/32619895/34b52856-dca7-412a-a466-80f37f859e6a)

## **Cuáles son los beneficios del uso de hilos?**

- Comunicación más sencilla entre los procesos. Memoria compartida
- Más concurrencia con menos recursos
- La conmutación entre hilos puede ser más eficiente, al cambiar de hilo no hay que cambiar cache ni nada

## **Qué son los hilos de usuario y de núcleo?**

- El hilo de usuario es cuando algunos sistemas manejan los hilos por fuera del núcleo, dentro de la propia app. Como Java JVM clásica
- Los hilos de núcleo es cuando el propio núcleo es el que soporta los hilos, es el caso más frecuente

En un sistema con hilos de usuario, el núcleo no sabe que un proceso tiene concurrencia interna. Si un hilo queda bloqueado, bloquea todo el proceso pesado

## **Qué son las bibliotecas de Hilos?**

Proporciona al programador una API para crear y administrar subprocesos. Actualmente se usan 3:

- POSIX Threads
- Windows: Disponible a nivel núcleo
- Java: La API de Hilos permiten que los subprocesos se creen y administren directamente en programas Java
