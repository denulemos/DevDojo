---
id: arquitectura
title: 🧠 Arquitectura y System Design 
---

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

