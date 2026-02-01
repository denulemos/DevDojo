---
id: arquitectura
title: 🧠 Arquitectura
---

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


## **Server Side Rendering**

### Que es Server Side Rendering?

SSR ocurre cuando el HTML es generado en el servidor y no en el cliente. Se usa en frameworks como **Next.Js, Angular Universal, Nuxt** entre otros. 

Es un **Patron de renderizado**, NO es un Patron de disenio, no entra en los GoF design patterns, aunque se suele confundir ya que define como fluye la responsabilidad, impacta performance, UX y se aplica a nivel de arquitectura, no solo de codigo. 