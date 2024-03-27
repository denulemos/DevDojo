# Microfrontends

## **¿Qué resuelve?**

Tenemos la aplicacion monolitica que tiene tanto el BD, Backend y Frotend en un solo monolito, y generalmente con un solo equipo manejandolo. A medida que va creciendo, se va separando el backend del frontend. 

Llega el punto en que el backend ya se maneja mediante microservicios con sus BD propias, separados por funciones del negocio (por ejemplo, un microservicio de pagos, otro de autenticacion, etc..)

Luego, al seguir siendo un frontend monolico, hay conflictos entre equipos y en los cambios en un mismo repositorio, y la afectacion de otras areas. 

La idea del microfrontend es separar el frontend en partes pequeñas por funciones del negocio al igual que los microservicios. 

Los equipos pasan a ser dueños de toda la vertical de negocios (Back, front y DB)

## **Caracteristicas**

### Aplicación contenedora

Es un contenedor que se va a asegurar de que cada frontend se reuna y que el usuario tenga una experiencia coherente, que todo se sienta parte del mismo sistema.

- **IFrames**: Son una buena forma de embeber paginas dentro de otras. Tiene algunas limitaciones
- **Web Components:** La app contenedora se encarga de renderizar los microfrontends como components

```markdown
const Restaurant = ({history}) => {
    <MicroFrontend name="restaurant" />
}
```

- **JS Puro**: Se puede hacer una composicion de las vistas o un enrutamiento (Si vas a esta URL cargo esto)

* Cada frontend debe tener su propio repositorio: Para que cada equipo tenga 100% de control sobre esa aplicacion.  
* Cada aplicacion debe poder desplegarse de forma independiente: No deben haber dependencias entre frontends

## **Comunicacion entre microfrontends**

- **Event Bus**: Es un canal de comunicacion entre los microfrontends. Se puede usar un bus de eventos para comunicar los microfrontends entre si.
- **API Gateway**: Es un punto de entrada para todas las peticiones de los microfrontends. Se encarga de enrutar las peticiones a los microservicios correspondientes.

## **¿Cuando usarlo?**

- **Cuando se tiene un equipo grande**: Para que cada equipo se encargue de una parte del negocio
- **Cuando se tiene una aplicacion grande**: Para que sea mas facil de mantener y escalar
- **Cuando se tiene una aplicacion con muchas funcionalidades**: Para que cada microfrontend se encargue de una funcionalidad especifica

## **Desventajas**

- **Complejidad**: Es mas complejo que un monolito
- **Performance**: Al tener que cargar varios frontends, puede afectar la performance
- **Seguridad**: Al tener varios frontends, puede haber problemas de seguridad


