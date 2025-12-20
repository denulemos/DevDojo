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





