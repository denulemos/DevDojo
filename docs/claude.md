# ⚡ Claude

Claude es un LLM desarrollado por Anthropic, una empresa de investigación en IA fundada por ex empleados de OpenAI. Se lanzó en marzo de 2023 y se ha posicionado como uno de los principales competidores de ChatGPT.

Se lo describe como mas que un chatbot, si no como un asistente de IA que puede ayudar a las personas a realizar tareas complejas, como escribir código, redactar emails, etc.

- Fue construido para ser **honesto, seguro y útil**, evitando outputs discriminatorios, ofensivos o peligrosos, esto fue decidido bajo un approach conocido como **Constitutional AI**
- A Claude se lo describe como un asistente que puede ayudar en varios tipos de tarea, desde Coding hasta escribir emails, no solo para responder preguntas simples.
- Diseniado para reconocer los tonos del usuario con el que se esta comunicando para poder ajustar sus propios tonos acorde a eso, por ejemplo, si el usuario es mas formal, Claude se ajusta a ese tono.

Se describe que la mejor forma de comunicarse con Claude es teniendo una conversacion fluida como uno la tendria con cualquier colega mas que preguntas de una sola vez en cada sesion. 

## Projects

Los mismos son marcos de trabajo que se basan sobre un tema en especifico, son utiles cuando estamos trabajando en una feature que requiere mas que una sola pregunta y respuesta, si no que precisa un marco de trabajo mas extenso. 

- **Projects** son workspaces que poseen su propia memoria, historial de chat y base de datos con sus propias instrucciones customizadas. Esto permite manejar distintos flujos de trabajo (Streams de trabajo) 
- **Project knowledge** es la base de datos de cada proyecto, el **knowledge base**, donde se pueden guardar documentos, archivos, etc.. para que Claude pueda acceder a ellos y utilizarlos durante las conversaciones. Esto es especialmente útil para proyectos complejos donde se necesita tener acceso a mucha información, y donde no queremos subir el mismo documento una y otra vez.
- **Project Intructions** guian como Claude debe comportarse en cada Stream de trabajo, por ejemplo, el tono, tipo de respuesta, entre otras especificaciones.
- Cada project escala de manera automatica, cuando el knowledge base alcanza un cierto limite (Es decir, subi mas de cierta cantidad de documentos a modo de contexto), se habilita **RAG (Retrieval Augmented Generation)**, lo que permite que Claude pueda acceder a la información guardada en el knowledge base de manera mas eficiente, sin tener que cargar toda la información en cada sesion para poder mantener una buena calidad de respuesta.
- Los projects pueden ser compartidos entre varias personas para poder trabajar de manera colaborativa, esto es especialmente util para equipos de trabajo que necesitan compartir información y colaborar en proyectos complejos.

Cada project posee **permisos** dentro del mismo:

- **Owner**: Tiene control total sobre el proyecto, puede editar las instrucciones, agregar o eliminar documentos del knowledge base, invitar o eliminar miembros, etc..
- **Editor**: Puede editar las instrucciones, agregar o eliminar documentos del knowledge base, pero no puede invitar o eliminar miembros.
- **Viewer**: Solo puede ver el proyecto, no puede editar las instrucciones, ni agregar o eliminar documentos del knowledge base, ni invitar o eliminar miembros

### Project Instructions

Los Project Intructions le "marcan" a Claude como comportarse en las conversaciones. 

Una buena Project Intruction incluye:

- Contexto sobre el proyecto, por ejemplo, el rol del usuario, los objetivos del proyecto, entre otros.
- **Intrucciones de proceso** que guian a Claude sobre cómo abordar las tareas, por ejemplo, si se quiere que la IA haga preguntas para aclarar dudas o si se quiere que la IA de sugerencias para mejorar el producto.
- **Referencias de tono**, por ejemplo, "utilizar tono profesional"
- **Requerimientos especificos** sobre el output, por ejemplo, "proporcionar una respuesta detallada de al menos 300 palabras" o "utilizar un formato específico para la respuesta".

## Effective Prompting

Para comunicarse de manera efectiva con Claude, se deben tener en cuenta los siguientes puntos:

- **Setear el escenario**: Cual es tu rol y objetivos? Hay algun contexto de trabajo el cual Claude deberia tener en cuenta?
- **Definir la tarea**: Que accion queres que Claude tome? Analisis, escritura, coding, etc..
- **Reglas**: Que tono queres que Claude utilice? Querés que te haga preguntas para aclarar dudas? Querés que te de sugerencias para mejorar el producto? etc..

Ejemplo de prompt efectivo:

*I'm the marketing lead at an indie streaming startup, and we're preparing an investor pitch deck. Can you research the current state of the independent film streaming market and identify key trends, competitor positioning, and growth opportunities? Use current web research with citations and structure it as a professional report*

En este ejemplo, se le da a Claude un contexto claro sobre el rol del usuario, la tarea que se necesita realizar y las reglas de cómo se quiere que se comunique durante la sesión. Esto ayuda a que Claude pueda generar una respuesta más relevante y útil para el usuario.

Estas ideas sobre prompting pueden ayudarnos a incluso solucionar problemas cuando Claude nos da una respuesta que no necesariamente la que esperamos.

| Problema | Solución |
| --- | --- |
| La respuesta es muy generica | No se dio el suficiente contexto en la Prompt |
| La respuesta es muy corta o muy larga | Claude intento adivinar el largo adecuado en el cual responder, esto puede ser especificado en la prompt, por ejemplo, "Por favor, proporciona una respuesta detallada de al menos 300 palabras" |
| Claude no siguio ningun tipo de formato | Claude entendio lo que querias, pero no COMO lo querias |
| Claude me dio informacion erronea como si fuera correcta | A veces puede suceder con LLMs, esto se conoce como "alucinaciones", para solucionarlo, se le puede pedir a Claude que revise su respuesta y corrija cualquier error, o se le puede pedir que cite sus fuentes para verificar la información proporcionada. |
| El tono no es correcto | Ajustar el tono en la prompt, por ejemplo, "Por favor, responde de manera formal y profesional" o "Responde de manera casual y amigable". |

Tambien se recomienda que, si una conversacion no esta yendo en el camino deseado, iniciar una conversacion nueva con una prompt mas clara y especifica, para que Claude pueda entender mejor lo que se necesita en vez de intentar redirigir la conversacion ya existente. 
