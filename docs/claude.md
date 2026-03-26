# ⚡ Claude

Claude es un LLM desarrollado por Anthropic, una empresa de investigación en IA fundada por ex empleados de OpenAI. Se lanzó en marzo de 2023 y se ha posicionado como uno de los principales competidores de ChatGPT.

Se lo describe como más que un chatbot, sino como un asistente de IA que puede ayudar a las personas a realizar tareas complejas, como escribir código, redactar emails, etc.

- Fue construido para ser **honesto, seguro y útil**, evitando outputs discriminatorios, ofensivos o peligrosos. Esto fue decidido bajo un approach conocido como **Constitutional AI**.
- A Claude se lo describe como un asistente que puede ayudar en varios tipos de tareas, desde Coding hasta escribir emails, no solo para responder preguntas simples.
- Diseñado para reconocer los tonos del usuario con el que se está comunicando para poder ajustar sus propios tonos acorde a eso. Por ejemplo, si el usuario es más formal, Claude se ajusta a ese tono.

Se describe que la mejor forma de comunicarse con Claude es teniendo una conversación fluida, como uno la tendría con cualquier colega, más que haciendo preguntas de una sola vez en cada sesión.

## Projects

Los mismos son marcos de trabajo que se basan sobre un tema en específico. Son útiles cuando estamos trabajando en una feature que requiere más que una sola pregunta y respuesta, sino que precisa un marco de trabajo más extenso.

- **Projects** son workspaces que poseen su propia memoria, historial de chat y base de datos con sus propias instrucciones personalizadas. Esto permite manejar distintos flujos de trabajo (streams de trabajo).
- **Project knowledge** es la base de datos de cada proyecto, la **knowledge base**, donde se pueden guardar documentos, archivos, etc. para que Claude pueda acceder a ellos y utilizarlos durante las conversaciones. Esto es especialmente útil para proyectos complejos donde se necesita tener acceso a mucha información y donde no queremos subir el mismo documento una y otra vez.
- **Project Instructions** guían cómo Claude debe comportarse en cada stream de trabajo, por ejemplo, el tono, el tipo de respuesta, entre otras especificaciones.
- Cada project escala de manera automática. Cuando el knowledge base alcanza un cierto límite (es decir, subí más de cierta cantidad de documentos a modo de contexto), se habilita **RAG (Retrieval Augmented Generation)**, lo que permite que Claude pueda acceder a la información guardada en el knowledge base de manera más eficiente, sin tener que cargar toda la información en cada sesión para poder mantener una buena calidad de respuesta.
- Los projects pueden ser compartidos entre varias personas para poder trabajar de manera colaborativa. Esto es especialmente útil para equipos de trabajo que necesitan compartir información y colaborar en proyectos complejos.

Cada project posee **permisos** dentro del mismo:

- **Owner**: Tiene control total sobre el proyecto, puede editar las instrucciones, agregar o eliminar documentos del knowledge base, invitar o eliminar miembros, etc.
- **Editor**: Puede editar las instrucciones, agregar o eliminar documentos del knowledge base, pero no puede invitar o eliminar miembros.
- **Viewer**: Solo puede ver el proyecto, no puede editar las instrucciones, ni agregar o eliminar documentos del knowledge base, ni invitar o eliminar miembros.

### Project Instructions

Los Project Instructions le "marcan" a Claude cómo comportarse en las conversaciones.

Una buena Project Instruction incluye:

- Contexto sobre el proyecto, por ejemplo, el rol del usuario, los objetivos del proyecto, entre otros.
- **Instrucciones de proceso** que guían a Claude sobre cómo abordar las tareas, por ejemplo, si se quiere que la IA haga preguntas para aclarar dudas o si se quiere que la IA dé sugerencias para mejorar el producto.
- **Referencias de tono**, por ejemplo, "utilizar tono profesional"
- **Requerimientos específicos** sobre el output, por ejemplo, "proporcionar una respuesta detallada de al menos 300 palabras" o "utilizar un formato específico para la respuesta".

## Skills

Son carpetas de instrucciones, scripts y recursos que Claude carga de manera dinámica para mejorar la performance en algunas tareas específicas y que pueden ser repetitivas. Muy usado en la creación de PPTs, Excels, etc.

- **Anthropic Skills**: Son creados y mantenidos por Anthropic. Son habilidades generales que pueden ser utilizadas en varios proyectos, por ejemplo, "Summarization", "Code Generation", "Data Analysis", etc.
- **Custom Skills**: Son creados por los usuarios. Pueden ser habilidades específicas para un proyecto en particular, por ejemplo, "Generar un resumen de un documento utilizando un formato específico" o "Generar un código en un lenguaje específico utilizando ciertas librerías".
- Se pueden obtener Skills de terceros, pero se debe tener cuidado con esto, ya que no se sabe exactamente cómo fueron creadas estas Skills y pueden contener errores o ser peligrosas. Es importante revisar el código de estas Skills antes de utilizarlas.

Claude maneja la selección de Skills de manera automática, basándose en nuestra conversación, pero también se pueden seleccionar manualmente para asegurarnos de que se utilice la habilidad correcta para la tarea que queremos realizar.

**¿Cómo crearlas?** Simplemente conversando con Claude. Ejemplo: "Claude, me gustaría crear una Skill para generar resúmenes de documentos utilizando un formato específico, ¿podrías ayudarme a crear esta Skill?"

### Skills vs Project Instructions

**Los proyectos guardan conocimiento, las skills guardan y realizan procesos**

| Project Instructions | Skills |
| --- | --- |
| Guían el comportamiento de Claude en las conversaciones | Realizan tareas específicas de manera automática |
| Pueden incluir instrucciones de proceso, referencias de tono, requerimientos específicos sobre el output, entre otros | Son scripts que pueden ser reutilizados en varios proyectos para realizar tareas específicas |
| Se enfocan en el contexto y las reglas de la conversación | Se enfocan en la ejecución de tareas específicas, como generar un resumen, analizar datos, generar código, etc. |

## Connectors

Los Connectors convierten a Claude en un colega, ya que le estamos dando acceso a todo nuestro contexto de herramientas utilizadas diariamente. **Es permitirle a Claude realizar tareas por nosotros**.

Una manera de potenciar los Connectors es mediante **MCP (Model Context Protocol)**, que es un protocolo que permite a los modelos de lenguaje acceder a herramientas externas de manera segura y controlada. Esto permite que Claude pueda interactuar con nuestras herramientas diarias, como Google Drive, Slack, Gmail, entre otras, para realizar tareas por nosotros, como enviar un email, crear un documento, etc. **Es un estándar abierto**.

Hay 2 tipos de Connectors:

- **Web Connectors**: Permiten a Claude acceder a herramientas web, como Google Drive, Slack, Gmail, entre otras. Esto permite que Claude pueda interactuar con estas herramientas para realizar tareas por nosotros, como enviar un email, crear un documento, etc.
- **Desktop Connectors**: Permiten a Claude acceder a herramientas de escritorio, como Microsoft Word, Excel, PowerPoint, entre otras. Esto permite que Claude pueda interactuar con estas herramientas para realizar tareas por nosotros, como crear un documento, generar una presentación, etc.

Podemos darle acceso, por ejemplo, a nuestro Jira para que pueda crear tickets por nosotros, o a nuestro Google Drive para que pueda crear documentos, o a nuestro Slack para que pueda enviar mensajes, etc.

Esto nos permite automatizar tareas repetitivas y ahorrar tiempo.

- Claude no puede compartir nada a lo cual vos no le hayas dado acceso, es decir, si le das acceso a un documento de Google Drive, Claude no puede compartir ese documento con nadie más, ni siquiera con otros proyectos, a menos que le des acceso a ese proyecto también.
- Claude no puede acceder a nada a lo que no le hayas dado acceso, es decir, si no le das acceso a un documento de Google Drive, Claude no puede acceder a ese documento, ni siquiera para leerlo, por lo que no puede compartirlo con nadie más.

## Enterprise Search

Es un Search dedicado a un contexto interno de empresa, muy útil para realizar preguntas sobre el funcionamiento organizacional de la empresa.

Debe ser seteado primero por un Owner de la organización para poder ser accedido por otros.


## Effective Prompting

Para comunicarse de manera efectiva con Claude, se deben tener en cuenta los siguientes puntos:

- **Setear el escenario**: ¿Cuál es tu rol y objetivos? ¿Hay algún contexto de trabajo que Claude debería tener en cuenta?
- **Definir la tarea**: ¿Qué acción querés que Claude tome? ¿Análisis, escritura, coding, etc.?
- **Reglas**: ¿Qué tono querés que Claude utilice? ¿Querés que te haga preguntas para aclarar dudas? ¿Querés que te dé sugerencias para mejorar el producto? etc.

Ejemplo de prompt efectivo:

*I'm the marketing lead at an indie streaming startup, and we're preparing an investor pitch deck. Can you research the current state of the independent film streaming market and identify key trends, competitor positioning, and growth opportunities? Use current web research with citations and structure it as a professional report*

En este ejemplo, se le da a Claude un contexto claro sobre el rol del usuario, la tarea que se necesita realizar y las reglas de cómo se quiere que se comunique durante la sesión. Esto ayuda a que Claude pueda generar una respuesta más relevante y útil para el usuario.

Estas ideas sobre prompting pueden ayudarnos incluso a solucionar problemas cuando Claude nos da una respuesta que no es necesariamente la que esperamos.

| Problema | Solución |
| --- | --- |
| La respuesta es muy genérica | No se dio el suficiente contexto en la prompt |
| La respuesta es muy corta o muy larga | Claude intentó adivinar el largo adecuado en el cual responder. Esto puede ser especificado en la prompt, por ejemplo, "Por favor, proporciona una respuesta detallada de al menos 300 palabras" |
| Claude no siguió ningún tipo de formato | Claude entendió lo que querías, pero no CÓMO lo querías |
| Claude me dio información errónea como si fuera correcta | A veces puede suceder con LLMs. Esto se conoce como "alucinaciones". Para solucionarlo, se le puede pedir a Claude que revise su respuesta y corrija cualquier error, o se le puede pedir que cite sus fuentes para verificar la información proporcionada. |
| El tono no es correcto | Ajustar el tono en la prompt, por ejemplo, "Por favor, responde de manera formal y profesional" o "Responde de manera casual y amigable". |

También se recomienda que, si una conversación no está yendo en el camino deseado, iniciar una conversación nueva con una prompt más clara y específica, para que Claude pueda entender mejor lo que se necesita en vez de intentar redirigir la conversación ya existente.

## **Claude API**

(Último update: marzo de 2026)

Cuando realizamos una request a la API de Claude, se sigue un flujo de 5 fases:

- Request al servidor
- Request a Anthropic API
- Procesamiento en el Modelo
- Response al servidor
- Response al cliente

### API Requests

Las request a la API de Anthropic **no deben ser hechas desde el código del cliente, sino desde un servidor que tengamos nosotros** ya que:

- Se requiere una API Key secreta para autenticar al usuario que está haciendo uso de la API
- Esta key NO debe ser expuesta en el código del cliente por temas de seguridad

Cuando usamos la API de Anthropic podemos usar un SDK (Python, JS, TS, Go, Ruby, entre otras) o una request HTTP básica, y debe tener los siguientes campos:

- `API Key`
- `Model`: El modelo a utilizar, por ejemplo, `claude-3-sonnet`
- `Messages`: El mensaje del usuario
- `Max Tokens`: El límite de tokens que Claude puede generar

Una vez que se recibe la request, la misma se procesa en 4 pasos:

- **Tokenización**: Separar el mensaje del usuario en tokens.
- **Embedding**: Cada token es convertido en un embedding, una larga lista de números que representan los posibles significados de esa palabra guardada en ese token. Además, una palabra puede tener más de un posible significado.
- **Contextualización**: Cada embedding es refinado dependiendo del contexto en el cual está. Una palabra puede tener más de un posible significado, y el mismo puede ser obtenido si se tiene en cuenta el contexto.
- **Generación**: Los embeddings contextualizados pasan por una capa de salida que calcula probabilidades para cada posible palabra siguiente. Claude no siempre elige la palabra con mayor probabilidad: usa una combinación de probabilidad y aleatoriedad controlada para crear respuestas naturales y variadas. Después de seleccionar cada palabra, Claude la agrega a la secuencia y repite todo el proceso para la siguiente palabra.

Este último paso de **Generación** continúa hasta que:
 
- Se alcanzó la mayor cantidad de tokens permitidos
- La oración se terminó (EOS End of Sequence)
- Algo detuvo la ejecución

### API Response

Cuando la ejecución termina, se devuelve una response que incluye:

- `Message`: El texto generado para responder
- `Usage`: La cantidad de input y output tokens usados
- `Stop Reason`: La razón por la cual se detuvo la generación, por ejemplo, "max_tokens", "eos", "stop_sequence", entre otras.

### Environment

Para poder usar la API de Anthropic aunque sea para testing se debe:

- Obtener una API Key
- Instalar Jupyter Notebook
- Instalar las dependencias necesarias `%pip install anthropic python-dotenv`
- Crear un archivo `.env` con la variable de entorno `ANTHROPIC_API_KEY` y su valor correspondiente a la API Key obtenida
- Crear el API Client

```python
from dotenv import load_dotenv
load_dotenv()

from anthropic import Anthropic

client = Anthropic()
model = "claude-sonnet-4-0"
```

### Primera request a Claude

Para poder enviar una request a la API de Anthropic, se debe usar el método `client.messages.create()` y pasarle los siguientes parámetros:

-  `model: string`: El modelo a utilizar, por ejemplo, `claude-3-sonnet`
-  `messages: []`: El mensaje del usuario
- `max_tokens: int`: El límite de tokens que Claude puede generar. Si lo seteamos en, por ejemplo, 1000, Claude dejará de ejecutar el `Generation` una vez que se hayan generado 1000 tokens, aunque la oración no haya terminado.

```python
message = client.messages.create(
    model=model,
    max_tokens=1000,
    messages=[
        {
            "role": "user",
            "content": "What is quantum computing? Answer in one sentence"
        }
    ]
)
```

¿Qué es eso del `role` que se ve dentro de `messages`? Es el rol del mensaje, que puede ser `user` o `assistant`. Esto es importante para que Claude pueda entender el contexto de la conversación y generar una respuesta adecuada.

Por ejemplo, si el mensaje tiene el rol de `user`, Claude entenderá que es una pregunta o una solicitud, mientras que si el mensaje tiene el rol de `assistant`, Claude entenderá que es una respuesta o una información adicional.

Luego para obtener la respuesta, podemos acceder a ella directamente con: `message.content[0].text`

### Multi-turn conversations

Las Multi-turn conversations son conversaciones que tienen más de un mensaje, es decir, una conversación fluida entre el usuario y Claude. 

Por default, ni Claude ni la Anthropic API guardan ningún mensaje. Si queremos que Claude recuerde lo sucedido en algún mensaje anterior, debemos manejarlo. Por default, las conversaciones son **stateless**.

Para esto, simplemente se deben agregar más mensajes al array de `messages` con el rol correspondiente. Es por eso que existe el rol `user` y `assistant`, para poder diferenciar entre los mensajes del usuario y los mensajes de Claude, y así poder mantener el contexto de la conversación.

Se sugiere crear las siguientes funciones helper para manejar estos casos:

```python
def add_user_message(messages, text):
    user_message = {"role": "user", "content": text}
    messages.append(user_message)

def add_assistant_message(messages, text):
    assistant_message = {"role": "assistant", "content": text}
    messages.append(assistant_message)

def chat(messages):
    message = client.messages.create(
        model=model,
        max_tokens=1000,
        messages=messages,
    )
    return message.content[0].text
```

Y así quedaría la configuración básica de una conversación fluida con Claude:

```python
# Start with an empty message list
messages = []

# Add the initial user question
add_user_message(messages, "Define quantum computing in one sentence")

# Get Claude's response
answer = chat(messages)

# Add Claude's response to the conversation history
add_assistant_message(messages, answer)

# Add a follow-up question
add_user_message(messages, "Write another sentence")

# Get the follow-up response with full context
final_answer = chat(messages)
```

### System Prompts

Estas son una forma de personalizar la interacción del usuario con Claude. Por ejemplo, si nuestro chatbot es un asistente de cocina, podemos agregar un System Prompt que le diga a Claude que debe responder como si fuera un chef profesional y que debe dar consejos de cocina, recetas, etc.

Esto ayuda a que Claude pueda generar respuestas más relevantes y útiles para el usuario, ya que tiene un contexto claro sobre el rol que debe desempeñar en la conversación.

Estos prompts pueden ser enviados en conjunto con la request de `messages`.

```python
system_prompt = """You are a helpful assistant that provides cooking advice and recipes."""

message = client.messages.create(
    model=model,
    system=system_prompt,
    max_tokens=1000,
    messages=[
        {
            "role": "user",
            "content": "What can I make with chicken and rice?"
        }
    ]
)
```

### Temperatura

Como se mencionó [acá](./landing/ia#temperatura), la temperatura es un valor decimal entre 0 y 1 que controla el nivel de aleatoriedad en las respuestas generadas por el modelo. Un valor bajo (cercano a 0) hace que el modelo sea más determinista y repetitivo, mientras que un valor alto (cercano a 1) aumenta la creatividad y diversidad de las respuestas.

En Claude podemos setear la misma desde nuestro request:

```python
def chat(messages, system=None, temperature=1.0):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
        "temperature": temperature
    }
    
    if system:
        params["system"] = system
    
    message = client.messages.create(**params)
    return message.content[0].text

# Low temperature - more predictable
answer = chat(messages, temperature=0.0)

# High temperature - more creative  
answer = chat(messages, temperature=1.0)
```

### Response Streaming

Uno de los challenges más grandes que se tienen en aplicaciones que consumen Claude u otros servicios es que la respuesta completa puede tardar entre 10 y 30 segundos en generarse.

Si esperamos ese tiempo, el usuario vería un spinner por esa cantidad de segundos.

La solución a esto es el **Response Streaming**, que consiste en mostrarle al usuario en tiempo real los chunks de respuesta a medida que son generados por Claude.

En la configuración que hacemos hasta ahora en este documento, estamos esperando ante cada Request-Response-Request, lo que da lugar a la experiencia del spinner antes mencionada. La "experiencia" del Streaming puede ser habilitada transformando un poco nuestra comunicación Servidor-Claude.

- Enviamos el mensaje
- Claude nos responde inmediatamente con una confirmación de que el mensaje fue recibido
- Se reciben una serie de eventos que contienen un pedazo pequeño del texto generado

Todos estos eventos son parte de una sola request. Los tipos de eventos son:

- `MessageStart`: Un nuevo mensaje está siendo enviado
- `ContentBlockStart`: Un nuevo bloque de contenido está comenzando
- `ContentBlockDelta`: Bloques del texto generado actualmente. Se reciben varios con muchos chunks.
- `ContentBlockStop`: Un bloque de contenido ha terminado de generarse
- `MessageDelta`: El mensaje está completo
- `MessageStop`: Fin de la información sobre el mensaje actual

Para habilitar el Streaming, agregamos la propiedad `stream` a nuestro `message`: 

```python
messages = []
add_user_message(messages, "Write a 1 sentence description of a fake database")

stream = client.messages.create(
    model=model,
    max_tokens=1000,
    messages=messages,
    stream=True
)

for event in stream:
    print(event)
```


