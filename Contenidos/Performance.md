# Performance

---

## Performance Frontend

### **¿Como puedo mejorarla?**

**Paginacion**: No se puede renderizar mucha informacion al mismo tiempo, hace un payload gigante, y satura a la base de datos. Es preferible pedir de a pedazos de data para disminuir el peso en el Backend

**Queries Optimistics**: Mostrar el cambio en la UI independientemente del resultado del servidor, como el like de Instagram, primero se anima, luego se ejecuta la peticion de forma asincrona, y luego se tiene en cuenta el resultado

**Pedir solo lo necesario**: Solo pedir los datos necesarios, no traer cosas de más. Hay muchas aplicaciones hechas front-first, donde el back adapta sus servicios a lo que el front necesita. 

**Tener un connection state**: Si no hay internet, no realizar peticiones. Como Youtube, cualquier cosa que quiera hacer el cliente sin internet, no se va a realizar para nada. 

**Group Notifications**: Si la aplicacion utiliza notificaciones, hacerlo de a grupos para no hacer jobs grandes

**Evitar queries expensive**: Por ejemplo, Twitter no da la opcion de seguir o dejar de seguir gente de a grupos grandes ya que es innecesariamente caro para el servidor

⚛️ **Podemos usar el Profiler que viene con React Dev Tools**
En caso de componentes lentos en React, podemos usar esta herramienta y ver cual fue el componente que causo el problema.

- Flame Chart: Representa el estado de la aplicacion para un commit en particular
- Component chart: Ver cuantas veces se proceso un componente en particular

Para testear el rendimiento de una web se puede utilizar Lighthouse de Google en DevTools  

**Lazy Loading**: No cargar todas las imagenes de una, ir cargando a medida que el usuario lo va necesitando. 

**Usar Cache**: Si manejamos payloads muy grandes, no conviene cargar todo esto en memoria, se recomienda usar un cache, ir guardando estos payloads y volver a consultarlos a medida que sea necesario

**Usar HTTP 2**: Si necesito hacer demasiados request en paralelo (cosa que no es recomendable), HTTP 2 tiene una coneexion TCP muy buena, para el multiplexing (no siempre es aplicable)

**Hacer UI que llamen lo menos posible al backend**: Que sean UI que dependan de pocos llamados para funcionar (si se puede, ya que hay dependencias entre payloads) 

⚛️ **No pasar props que no son necesarios**: El propering afecta al rendimiento en React. El estado debe estar tan cerca como pueda de donde se esté usando. Mientras mas props recibimos, mayor es la dependencia con el componente padre. 

⚛️ **Evitar renderizados de mas**: Usar useMemo (memorizacion en React) para evitar renderizados o componentes puros

**Tener varias zonas de disponibilidad**: Esto para evitar la latencia en la obtencion de recursos.