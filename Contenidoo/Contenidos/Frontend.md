# Conceptos Frontend Sueltos

### ✨ Explicar que hace Babel

Babel es un compilador para JS. Permite transformar codigo escrito con las ultimas caracteristicas y traducirlo en codigo de JS bien vanilla que pueda ser entendido por navegadores antiguos. 

### ✨ Explicar que hace Webpack

Es el responsable de producir los bundles a partir del codigo Front. Es un Module Bundler, hay otras opciones como Gulp, Rollup, etc.. 

Los bundles son paquetes de codigo necesarios para poder llevar a produccion un proyecto, traspilando el codigo y el empaquetado de los modulos en uno o varios archivos compactados, minimizados y optimizados. Es lo que se hace cuando se hace `build`. 

### ✨ Que es CORS

Es un mecanismo que usa cabeceras HTTP adicionales para permitir que un user-agent obtenga permiso para acceder a recursos seleccionados desde un servidor en un origen distinto (dominio) al que pertenece. Por ejemplo, si tengo mi dominio [`denisse.com`](http://denisse.com), uso XMLHttpRequest para cargar el recurso [`http://api.domain-b.com/data.json`](http://api.domain-b.com/data.json)

Tambien sirve para obtener fuentes externas, texturas webGL, Imagenes, hojas de estilos y Scripts. 

### ✨ Que es Tree Shaking?

Es remover codigo no usado, como, por ejemplo, imports y exports que no fueron usados. Esto lo hace webpack y Rollup de manera automatica. 

**✨ Diferencia entre DOM y BOM**

DOM hace referencia a todos los elementos de la pagina. **BOM es el Brower Object Model** que hace referencia a los elementos del navegador, por ejemplo, seleccionar la ventana del navegador, location, url, etc.. 

### ✨ Que es el server side rendering?

Es crear paginas HTML renderizadas en servidor para que lleguen listas. Se crean usando NodeJS que generalmente se usa con Express (para utilizar verbos de HTTP). 

NextJS es una opcion para usar esto. Favorecen mucho al SEO ya que renderizan la pagina antes de que pueda ser enviada al navegador. 

### ✨ ¿Que es el SEO?

Es Search Engine Optimization, es lo que hace que un sitio sea encontrado por Google, y HTML hace un aporte con su metadata para que esto suceda. Por ejemplo, no se recomienda usar muchos <h1> en un HTML para no afectar al SEO. 

- Describir la pagina con titulos y fragmentos unicos. Uso de <title> y utilizar terminos claros. Todas las paginas del sitio deben tener una meta descripcion para que aparezca la misma en los resultados del buscador

```html
<head>
	<title>Bienvenidos</title>
	<meta name="description" content="Sitio web">
</head>
```

- Usar codigos de estado HTTP Significativos. Google usa rastreadores sobre los sitios web, o robots, es un programa que descubre y analiza sitios web, en google se llama Google Bot, que usa codigos de estado HTTP. Si uso codigos significativos, le indico al robot si esta pagina debe ser indexada, o no (por ejemplo, si es 404, no es trackeado)
- Solucionar problemas con imagenes y carga diferida. Cargar cuando el usuario este por verlas.

```html
<img src="image.jpg" alt="..." loading="lazy">
```

- Crear diseños accesibles, crear paginas para los usuarios, no solo para los motores de busqueda. Un ejemplo para testear la accesibilidad, es cargar la pagina sin JS habilitado.

---

## Performance Frontend - Formas de mejora

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