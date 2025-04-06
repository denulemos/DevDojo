<a name="node-base"></a>

| Fundamentos NodeJS |
|----------|
| ¿Qué es Node.js y para qué se utiliza?|
|¿Cuál es la diferencia entre Node.js y el navegador en cuanto a ejecución de JavaScript?|
|¿Qué es el Event Loop en Node.js?|
|¿Qué son los módulos en Node.js? ¿Cuál es la diferencia entre CommonJS y ES Modules?|
|¿Qué es npm y qué diferencia hay con npx?|
|¿Qué es nodemon y para qué se utiliza?|
|¿Cómo usar dotenv para manejar variables de entorno?|
| ¿Qué es clustering en Node.js y cuándo lo usarías? |

| Express.js y estructura de APIs |
|----------|
| ¿Qué es Express.js y por qué se usa con Node? |
| ¿Cómo crear una API REST simple con Express? |
| ¿Qué es el middleware en Express y para qué sirve? |
| ¿Cómo estructurar una API REST escalable con Express? |
| ¿Cómo implementar controladores y rutas en Express? |
| ¿Qué son middlewares de error y cómo se crean? |
| ¿Cómo loguear peticiones y errores en producción (winston, morgan)? |

| REST API - Conceptos y Buenas Prácticas |
|----------|
| ¿Qué es una REST API? |
| ¿Qué métodos HTTP se usan comúnmente en una API REST? |
| ¿Qué es CORS y cómo lo manejás en una API REST? |
| ¿Cómo manejar la carga de archivos (file uploads) en Express? |
| ¿Cómo implementar una API versionada (v1, v2...)? |
| [Diferencias entre REST y GraphQL](#ent18) |
| ¿Cómo implementar paginación, filtrado y ordenamiento en una REST API? |
| ¿Cómo se manejan las relaciones entre entidades en una API REST (por ejemplo, usuarios y posts)? |

| Seguridad y Autenticación |
|----------|
| ¿Cómo se realiza la autenticación en una REST API con JWT? |
| ¿Cómo proteger rutas privadas en Express? |
| ¿Cómo manejar rate limiting y prevenir ataques de fuerza bruta? |
| ¿Cómo validar datos en una API (por ejemplo, usando Joi o Zod)? |

---

<a id="ent18"></a>

### **Explica las diferencias entre REST y GraphQL. ¿Cuándo usarías uno sobre el otro?**

[Volver al indice](#node-base)

| REST | GraphQL |
| --- | --- |
| Es un link para cada recurso | Es un solo link para varios recursos, endpoint unico |
| Puede tener problemas de sobre-recuperacion (mas informacion de la necesaria) o sub-recuperacion (Menos informacion de la necesaria), lo cual causa que necesitemos varias consultas para tener lo que precisamos, o tengamos payloads muy pesados | El cliente puede especificar que campos quiere en la consulta |
| Es mas facil de desarrollar desde cero pero complicado de escalar | Su inicializacion es compleja, pero si se tienen los datos necesarios, los cambios que se tendrian que hacer serian minimos |
| Como las consultas son con su propio endpoint y pueden ser dentro de todo predecibles, el catching es mucho mas facil de implementar | Como las consultas son variadas, el catching es complicado de implementar, aunque hay tecnicas especificas | 
| Se recomienda usar REST cuando la seguridad y el catching son una prioridad, ademas si tengo clientes que buscan servicios predecibles | Se recomienda cuando es importante el minimizar la cantidad de solicitudes hechas en el servidor |