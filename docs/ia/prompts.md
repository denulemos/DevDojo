---
id: prompts
title: Prompts
---

**La calidad de la salida es proporcional a la calidad de la entrada**

Cuando se le da un prompt a una LLM, la misma la utiliza para buscar todas las probabilidades y poder dar la respuesta mas cercana a lo que se le pide. 

Por lo tanto, es importante que el prompt sea lo mas claro y conciso posible, para que la LLM pueda entenderlo y dar una respuesta adecuada.

**La respuesta se predice en probabilidades**

### Porque fallan los prompts?

Cuando recibimos una respuesta incorrecta de una LLM es porque realizamos mal la pregunta, no tiene nada que ver con el modelo. 

Si puede suceder en al enviar un prompt muy generico, modelos como Gemini generen igualmente una respuesta sumamente generica si es que no le damos suficiente contexto de principio. 

En cambio, otros modelos como Claude, nos va a realizar diversas preguntas para poder entender mejor lo que queremos, y así poder dar una respuesta mas acertada.

Ejemplo de Prompt para probar esta teoria: "Necesito generar un correo electronico para pedir una cita medica" (Sumamente generico y sin contexto)

Se le puede pedir ayuda al LLM para mejorar el contexto, por ejemplo: "Necesito generar un correo electronico para pedir una cita medica, **pedime todos los datos necesarios para poder generar el mejor email posible**" (Ahora el LLM nos va a pedir todos los datos necesarios para poder generar un correo electronico mas acertado y con mejor contexto)

### Formula base = Tarea + Contexto + Audiencia + Formato

Prompt malo: "Haceme un cuento"

- **Pedir la tarea concreta**: Para que pueda entender que es lo que quiero hacer, y poder generar un resultado mas apegado a lo que estoy buscando
- **Agregar contexto (informacion relevante, restricciones, etc)**: Para que pueda generar un resultado mas apegado a lo que estoy buscando
- **Definir la audiencia (quien va a recibir la respuesta)**: Son adultos? Personas tecnicas? Niños? etc. Esto es importante para que la LLM pueda generar un resultado mas adecuado a la audiencia
- **Definir el formato (si es un email, un codigo, un ensayo, etc)**: Para estructurar la respuesta de manera apropiada, es un JSON? Una carta? Un ensayo? etc. Esto es importante para que la LLM pueda generar un resultado mas adecuado al formato

Prompt bueno: "Hazme un cuento corto para un nene de 6 a 8 años, que tenga como protagonista a un perro y un gato, y que tenga un final feliz. Que termine con una frase alegre y motivadora. El cuento debe tener un máximo de 200 palabras y debe estar escrito en un lenguaje sencillo y comprensible para un niño de esa edad. El formato debe ser un cuento narrativo."

### Formato de Salida

Es necesario especificar el formato de salida que queremos, ya que la LLM puede generar una respuesta en un formato que no sea el que necesitamos, nos va a dar como respuesta lo que **generalmente le sirvio a la mayoria de las personas que le hicieron la misma pregunta**, y no lo que necesitamos nosotros.






