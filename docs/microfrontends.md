---
id: microfrontends
title: 🧱 Microfrontends
---

### Qué son los Microfrontends?

Es dividir una app grande en mini apps que funcionan en conjunto para formar un mismo producto. Se pueden tener varios repositorios de codigo que se conectan luego entre si, cada una con su propia tecnologia y equipo.

Sus ventajas son:
- Es facil deployar cambios ya que cada equipo se encarga de un pedazo de la aplicacion sin pisarse con otros.
- Se puede actualizar una parte de la app sin tocar todo

Y sus desventajas:
- Es mas complejo de armar y precisa mas recursos, por eso solo se recomienda usar cuando el producto es sumamente grande
- Si no se cuida adecuadamente puede ser poco performante o pesado


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

### Server‑side composition

El servidor se encarga de armar la pagina completa juntando los pedazos de varias mini-apps y la envia ya unida. **El servidor se encarga de juntar los pedazos** y el usuario recibe todo junto como si fuera un solo sitio.

- Carga rapido al inicio
- El SEO suele ser mejor
- Da mucho mas trabajo al servidor
- Los cambios entre piezas son mas complicados de coordinar

Se recomienda su uso en:

- E-commerce grandes con muchas areas independientes
- Portales de contenido como de noticias donde el SEO y la performance son importantes
- Aplicaciones con muchas secciones y equipos trabajando a la vez
- Sistemas con cargas iniciales pesadas

### Module Federation

Es la base técnica más usada para micro-frontends modernos. **Module Federation es la herramienta, micro-frontends es el patrón/arquitectura**

Es una forma de hacer que el **host** cargue partes de otra aplicacion en tiempo real sin tener que recompilarse, descargando el codigo del **remote** y usandolo como si fuera propio, todo esto durante el runtime.

Antes si cambiaba una parte de la aplicacion habia que realizar un rebuild y un redeploy de todo, ahora cada equipo deploya su parte, el resto de la app no se entera y hay menos friccion.

- App principal: layout + navegación
- Micro-frontend “Search”
- Micro-frontend “Profile”
- Micro-frontend “Player”

**Todo se carga en tiempo real desde el navegador, usando el runtime del cliente**

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

### Single‑SPA / Orchestrator

Una app jefa se encarga de decidir que app es mostrada y cuándo. Se tiene un controlador central que segun la ruta del usuario carga la app correspondiente. 

Lo unico malo de este tipo de manejo es que si la app controladora falla, toda la app se cae. La union sucede en el cliente al igual que en **Module Federation**, solo que este se encarga de la forma de traer el código, se complementan pero no es lo mismo. Se puede usar **Single‑SPA sin Module Federation** (Microapps empaquetadas aparte), **Module Federation sin Single‑SPA** (Un host importa remotes directo) o **ambos juntos** (Single‑SPA orquesta y Module Federation trae el código)

Single‑SPA = quién manda.
Module Federation = cómo llega el código.
