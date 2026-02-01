---
id: systemdesign
title: 🛠️ System Design
---

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

### Escalabilidad (Vertical vs Horizontal)

Significa que puede crecer sin romperse ni volverse muy lento. Simplemente se añaden mas recursos (CPU, Memoria, etc..)

Si se pasan de 10 a 1000 usuarios el sistema deberia seguir respondiendo igual de bien. Un ejemplo puede ser con una cafeteria, si se tiene un solo barista para 50 clientes, la cola se hace infinita. 

Existe la Escalabilidad **vertical** y **horizontal**.

|Vertical|Horizontal|
| --- | --- |
| Se le agregan mas recursos al servidor, CPU, Memoria.. | Se añaden mas instancias, maquinas virtuales para repartir la carga entre ellas |
| Se tiene el mismo barista, pero el mismo tiene una maquina mas rapida | Se contratan mas baristas para lidiar con el flujo de gente |
| Es un poco mas facil, pero a veces limitada | Es mas dificil de realizar |

### Load Balancer

Algunas partes del frontend de una pagina web escalable seran posicionados en un Load Balancer. Esto permite que el sistema distribuya la carga de tal forma que un solo servidor no maneje todo, y si falla, haga caer a todo el sistema. 
Para hacer esto, se deben tener varios servidores clones, con los mismos recursos disponibles para lidiar con la misma carga. 