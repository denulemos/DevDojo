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

## Skills

Son carpetas de intrucciones, scripts y recursos que Claude carga de manera dinamica para mejorar la performance en algunas tareas especificas y que pueden ser repetitivas. Muy usado en la creacion de PPTs, Excels, etc..

- **Anthropic Skills**: Son creados y mantenidos por Anthropic, son habilidades generales que pueden ser utilizadas en varios proyectos, por ejemplo, "Summarization", "Code Generation", "Data Analysis", etc..
- **Custom Skills**: Son creados por los usuarios, pueden ser habilidades especificas para un proyecto en particular, por ejemplo, "Generar un resumen de un documento utilizando un formato específico" o "Generar un código en un lenguaje específico utilizando ciertas librerías".
- Se pueden obtener Skills de terceros, pero se debe tener cuidado con esto, ya que no se sabe exactamente como fueron creadas estas Skills, y pueden contener errores o ser peligrosas. Es importante revisar el código de estas Skills antes de utilizarlas.

Claude maneja la seleccion de Skills de manera automatica, basado en nuestra conversación, pero tambien se pueden seleccionar manualmente para asegurarnos de que se utilice la habilidad correcta para la tarea que queremos realizar. 

**¿Cómo crearlas?** Simplemente conversando con Claude, ejemplo: "Claude, me gustaria crear una Skill para generar resúmenes de documentos utilizando un formato específico, ¿podrías ayudarme a crear esta Skill?"

### Skills vs Project Instructions

**Los proyectos guardan conocimiento, las skills guardan y realizan procesos**

| Project Instructions | Skills |
| --- | --- |
| Guian el comportamiento de Claude en las conversaciones | Realizan tareas especificas de manera automatica |
| Pueden incluir instrucciones de proceso, referencias de tono, requerimientos especificos sobre el output, entre otros | Son scripts que pueden ser reutilizados en varios proyectos para realizar tareas especificas |
| Se enfocan en el contexto y las reglas de la conversación | Se enfocan en la ejecución de tareas específicas, como generar un resumen, analizar datos, generar código, etc.. |

## Connectors

Los Connectors convierten a Claude en un colega ya que le estamos dando acceso a todo nuestro contexto de herramientas utilizadas diariamente. **Es permitirte a Claude realizar tareas por nosotros**.

Una manera de potenciar los Connectors es mediante **MCP (Model Context Protocol)**, que es un protocolo que permite a los modelos de lenguaje acceder a herramientas externas de manera segura y controlada. Esto permite que Claude pueda interactuar con nuestras herramientas diarias, como Google Drive, Slack, Gmail, entre otras, para realizar tareas por nosotros, como enviar un email, crear un documento, etc.., **Es un estandar abierto**.

Hay 2 tipos de Connectors:

- **Web Connectors**: Permiten a Claude acceder a herramientas web, como Google Drive, Slack, Gmail, entre otras. Esto permite que Claude pueda interactuar con estas herramientas para realizar tareas por nosotros, como enviar un email, crear un documento, etc..
- **Desktop Connectors**: Permiten a Claude acceder a herramientas de escritorio, como Microsoft Word, Excel, PowerPoint, entre otras. Esto permite que Claude pueda interactuar con estas herramientas para realizar tareas por nosotros, como crear un documento, generar una presentación, etc..

Podemos darle acceso, por ejemplo, a nuestro Jira para que pueda crear tickets por nosotros, o a nuestro Google Drive para que pueda crear documentos, o a nuestro Slack para que pueda enviar mensajes, etc.. 

Esto nos permite automatizar tareas repetitivas y ahorrar tiempo.

- Claude no puede compartir nada a lo cual vos no le hayas dado acceso, es decir, si le das acceso a un documento de Google Drive, Claude no puede compartir ese documento con nadie mas, ni siquiera con otros proyectos, a menos que le des acceso a ese proyecto también.
- Claude no puede acceder a nada que no le hayas dado acceso, es decir, si no le das acceso a un documento de Google Drive, Claude no puede acceder a ese documento, ni siquiera para leerlo, por lo que no puede compartirlo con nadie mas.

## Enterprise Search

Es un Search dedicado a un contexto interno de empresa, muy util para realizar preguntas sobre el funcionamiento organizacional de la empresa.

Debe ser seteado primero por un Owner de la organizacion para poder ser accedido por otros. 


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
