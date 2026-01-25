---
id: arquitectura
title: 🧠 Arquitectura y System Design 
---

### Escalabilidad (Vertical vs Horizontal)

Significa que puede crecer sin romperse ni volverse muy lento. Simplemente se añaden mas recursos (CPU, Memoria, etc..)

Si se pasan de 10 a 1000 usuarios el sistema deberia seguir respondiendo igual de bien. Un ejemplo puede ser con una cafeteria, si se tiene un solo barista para 50 clientes, la cola se hace infinita. 

Existe la Escalabilidad **vertical** y **horizontal**.

|Vertical|Horizontal|
| --- | --- |
| Se le agregan mas recursos al servidor, CPU, Memoria.. | Se añaden mas instancias, maquinas virtuales para repartir la carga entre ellas |
| Se tiene el mismo barista, pero el mismo tiene una maquina mas rapida | Se contratan mas baristas para lidiar con el flujo de gente |



### Microservicios vs Monolito

**Microservicios** es un conjunto de apps pequeñas que trabajan en conjunto, se comunican entre si mediante APIs. **Monolito** es una sola aplicacion "todo en uno".

| Microservicios | Monolito |
| ---- | ---- |
| Conjunto de apps pequeñas que trabajan en conjunto | una sola aplicacion "todo en uno" |
|Cada servicio tiene su deploy independiente|Deploy conjunto. Infraestructura unica|
|Se escala por servicio lo necesario|Se escala todo junto|
|Stack distinto entre servicios|Stack unico|
|Ideal para aplicaciones grandes y cuando se busca escalabilidad|Ideal para proyectos pequeños, MVPs o equipos reducidos|

### SLA, SLO y SLI

Son metricas para medir la calidad de los servicios, especialmente en sistemas distribuidos como microservicios

SLI (medición real) → SLO (objetivo interno) → SLA (promesa al cliente)

- **SLI (Service Level Indicator):** Es el termometro de la aplicacion, como la latencia, disponibilidad..
- **SLO (Service Level Objective):** Es el objetivo interno que nos ponemos basado en el SLI, por ejemplo, se quiere un 99% de uptime al mes. 
- **SLA (Service Level Agreement):** Es lo que se garantiza al cliente, por ejemplo, garantizamos un 98% de uptime. Si esta se rompe, hay penalizaciones. 

**SLA < SLO: Siempre promete menos de lo que se puede cumplir internamente. Si tu SLO es 99.9%, tu SLA debería ser 99.5% para tener margen de error**

### Dependencias compartidas en un monorepo

Lo que se debe buscar es este manejo es que sea **mantenible**, **reproducible** y **barato de mantener**.

- Tener una sola politica de dependencias
- Versionado y actualizaciones controladas
- Dedupe y overrides para evitar **dependency hell**
- Compartir dependencias sin romper el aislamiento 
- Enforzo límites con ESLint (ej: `eslint-plugin-boundaries`) o reglas del monorepo
- Evito imports “cruzados” random entre apps: todo via paquetes con API pública.

Centralizo el tooling, limito dependencias con reglas, comparto código vía paquetes bien definidos, y automatizo upgrades con overrides y CI para que el monorepo no se vuelva un lio.

## **System Design**


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


## **Microfrontends**

### Qué patron es el más utilizado?

El patron mas usado es el de **Host + Remotes**, tener en cuenta que el Host es la app principal que se carga primero, y los remotes son cada Microfrontend.

- Se tiene una app principal, el **host**, que se carga primero
- El host carga los micro-frontends desde sus propios URLs o CDN
- Cada remote se puede deployar sin tocar al host (idealmente)

1. El usuario abre `app.com`
2. Carga el **host**
3. Si el usuario va hacia `app.com/checkout` el host carga el remote correspondiente a checkout, que estaria en `cdn.checkout.com/remoteEntry.js`

### Cuando se deberia usar microfrontends?

Usarlo si:

- Hay varios equipos con varias personas
- Se quieren releases frecuentes sin pisarse
- La app host es grande
- Se puede tolerar la infraestructura

NO usarlo si:

- Es un equipo pequeño
- La app es pequeña

### Qué es Module Federation?

Es la base técnica más usada para micro-frontends modernos. **Module Federation es la herramienta, micro-frontends es el patrón/arquitectura**

Es una forma de hacer que el **host** cargue partes de otra aplicacion en tiempo real sin tener que recompilarse, descargando el codigo del **remote** y usandolo como si fuera propio, todo esto durante el runtime.

Antes si cambiaba una parte de la aplicacion habia que realizar un rebuild y un redeploy de todo, ahora cada equipo deploya su parte, el resto de la app no se entera y hay menos friccion.

- App principal: layout + navegación
- Micro-frontend “Search”
- Micro-frontend “Profile”
- Micro-frontend “Player”

Importante:

❌ no es un framework
❌ no decide arquitectura por vos
❌ no organiza carpetas ni equipos
❌ no soluciona mal diseño

Es solo la tecnología para cargar código remoto.

Sus pros son:

- deploys independientes reales
- comparte dependencias
- excelente para equipos grandes
- muy flexible

Y sus contras:

- setup inicial complejo
- debugging más difícil
- tenés que cuidar versiones compartidas
- no es para apps chicas

## **Server Side Rendering**

### Que es Server Side Rendering?

SSR ocurre cuando el HTML es generado en el servidor y no en el cliente. Se usa en frameworks como **Next.Js, Angular Universal, Nuxt** entre otros. 

Es un **Patron de renderizado**, NO es un Patron de disenio, no entra en los GoF design patterns, aunque se suele confundir ya que define como fluye la responsabilidad, impacta performance, UX y se aplica a nivel de arquitectura, no solo de codigo. 