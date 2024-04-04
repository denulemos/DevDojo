# Microfrontends

### **¿Qué resuelve?**

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

### **Comunicacion entre microfrontends**

- **Event Bus**: Es un canal de comunicacion entre los microfrontends. Se puede usar un bus de eventos para comunicar los microfrontends entre si.
- **API Gateway**: Es un punto de entrada para todas las peticiones de los microfrontends. Se encarga de enrutar las peticiones a los microservicios correspondientes.

### **¿Cuando usarlo?**

- **Cuando se tiene un equipo grande**: Para que cada equipo se encargue de una parte del negocio
- **Cuando se tiene una aplicacion grande**: Para que sea mas facil de mantener y escalar
- **Cuando se tiene una aplicacion con muchas funcionalidades**: Para que cada microfrontend se encargue de una funcionalidad especifica

### **Desventajas**

- **Complejidad**: Es mas complejo que un monolito
- **Performance**: Al tener que cargar varios frontends, puede afectar la performance
- **Seguridad**: Al tener varios frontends, puede haber problemas de seguridad

---

### Pregunta entrevista: Microfrontends vs monolito. ¿Has tenido arquitectura de microfrontends en algunos de tus proyectos? ¿Qué beneficios y desventajas ves en la introducción de la arquitectura de microfrontends en algunos de tus proyectos?

Los Beneficios principales en la introducción de la arquitectura de microfrontends son:

- Escalabilidad y mantenibilidad: Permite escalar y mantener diferentes partes de la aplicación de forma independiente, lo que facilita la gestión de equipos y la evolución de la aplicación a medida que crece.

- Flexibilidad tecnológica: Permite el uso de diferentes tecnologías y frameworks en cada microfrontend, lo que facilita la adopción de nuevas tecnologías y la actualización de componentes sin afectar a toda la aplicación.

- Desarrollo paralelo: Permite que equipos separados trabajen en diferentes partes de la aplicación simultáneamente, lo que acelera el desarrollo y reduce los cuellos de botella.

Sin embargo, también hay algunas desventajas potenciales en la introducción de la arquitectura de microfrontends:

- Complejidad inicial: La introducción de microfrontends puede requerir un esfuerzo adicional en la configuración inicial y la gestión de la comunicación entre los diferentes microservicios.

- Mayor sobrecarga de red: Al dividir la aplicación en múltiples microfrontends, puede aumentar la cantidad de solicitudes de red y la complejidad de la gestión de la comunicación entre ellos.

- Posible fragmentación de la experiencia del usuario: Si no se gestiona adecuadamente, la arquitectura de microfrontends puede resultar en una experiencia de usuario fragmentada debido a las diferencias en la navegación y la interacción entre los diferentes microservicios.

En resumen, mientras que la arquitectura de microfrontends ofrece beneficios significativos en términos de escalabilidad y flexibilidad, también introduce complejidades adicionales que deben ser consideradas y gestionadas cuidadosamente en función de las necesidades específicas de cada proyecto.


