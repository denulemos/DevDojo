---
id: systemdesign
title: 🛠️ System Design
---

## Rendimiento

Vivimos en un tiempo de inmediatez, donde los usuarios esperan resultados inmediatos. 

Se deben tener en cuenta dos parametros:

- **Response Time**
- **Throughput (Numero de peticiones por unidad de tiempo)**

## Escalabilidad (Vertical vs Horizontal)

Significa que puede crecer sin romperse ni volverse muy lento. Simplemente se añaden mas recursos (CPU, Memoria, etc..)

Si se pasan de 10 a 1000 usuarios el sistema deberia seguir respondiendo igual de bien. Un ejemplo puede ser con una cafeteria, si se tiene un solo barista para 50 clientes, la cola se hace infinita. 

Existe la Escalabilidad **vertical** y **horizontal**.

|Vertical|Horizontal|
| --- | --- |
| Se le agregan mas recursos al servidor, CPU, Memoria.. | Se añaden mas instancias, maquinas virtuales para repartir la carga entre ellas |
| Se tiene el mismo barista, pero el mismo tiene una maquina mas rapida | Se contratan mas baristas para lidiar con el flujo de gente |
| Es un poco mas facil, pero a veces limitada | Es mas dificil de realizar |


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

### Load Balancer

Algunas partes del frontend de una pagina web escalable seran posicionados en un Load Balancer. Esto permite que el sistema distribuya la carga de tal forma que un solo servidor no maneje todo, y si falla, haga caer a todo el sistema. 
Para hacer esto, se deben tener varios servidores clones, con los mismos recursos disponibles para lidiar con la misma carga. 

### **Como solucionar un problema de entrevista?**

1. **Desarrollar el Scope del Problema**: Hacer preguntas para entender el problema, los requerimientos, las restricciones, etc.. Esto es importante para poder entender el problema y no asumir cosas que no son ciertas. Por ejemplo, si el problema es diseñar un sistema de reservas de vuelos, se pueden hacer preguntas como: ¿Qué tipo de vuelos se van a reservar? ¿Solo vuelos comerciales o también vuelos privados? ¿Qué tipo de usuarios van a usar el sistema? ¿Solo clientes o también agentes de viajes? etc..
2. **Realizar un disenio abstracto**
3. **Encontrar cuellos de botella (Bottlenecks) en tu solucion**: Esto es importante para poder mejorar la solución y hacerla mas escalable. Por ejemplo, si el sistema de reservas de vuelos tiene un solo servidor para manejar todas las reservas, esto puede ser un cuello de botella, ya que si el servidor falla, todo el sistema cae. Para solucionar esto, se pueden añadir mas servidores clones para repartir la carga entre ellos.

- Separar el problema en modulos mas simples, por ejemplo, si el problema es diseñar un sistema de reservas de vuelos, se pueden separar en modulos como: busqueda de vuelos, reserva de vuelos, pago, etc.. **Top-down approach**
- Charlar sobre los trade-offs