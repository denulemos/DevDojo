---
id: prompts
title: Prompts
---

## Contexto

Es la información adicional que se le proporciona al modelo para ayudarlo a generar respuestas más relevantes y precisas.

Incluye información sobre el tema, el tono deseado, o cualquier detalle útil.

## Prompt Engineering

Es un conjunto de técnicas para diseñar y perfeccionar prompts de manera que los modelos generen respuestas óptimas. Involucra un proceso iterativo:

- **Setear el escenario**: Definir rol, contexto y objetivos
- **Dar contexto**: Ser claro sobre qué se precisa, por qué y cómo
- **Definir la tarea**: Qué acción específica tomar
- **Dar ejemplos (Few-shot prompting)**: Mostrar formatos esperados
- **Especificar constantes y reglas**: Formato, límites, especificaciones
- **Separar en pasos lógicos**: Dividir tareas complejas en pasos
- **Permitir que la IA piense primero**: Darle espacio para razonar
- **Definir el tono**: Formal, casual, conciso, etc.

### ¿Cómo se resuelven problemas comunes en prompts?

| Problema | Solución |
| :-- | :-- |
| Respuesta muy genérica | Aportar más contexto y detalles |
| Respuesta muy corta o larga | Especificar longitud explícitamente |
| Sin formato | Usar instrucciones de formato claras o etiquetas XML |
| Información errónea (alucinación) | Pedir citas de fuentes o razonamiento paso a paso |
| Tono incorrecto | Ajustar el tono explícitamente en el prompt |

Si una conversación larga tomó mal rumbo, es más eficiente iniciar una nueva con un prompt refinado.

### ¿Por qué es importante ser específico en los prompts?

Porque evita que el agente interprete libremente. Se puede:

- Listar qué debe y qué no debe tener el output (largo, formato, elementos, tono)
- Listar el camino de razonamiento que debe seguir (especialmente para soluciones complejas o múltiples puntos de vista)
- Combinar ambas técnicas para obtener mejores resultados

### ¿Para qué sirve la estructura XML en prompts?

Cuando se envía información específica, las etiquetas XML ayudan a la IA a entender la estructura deseada. No hay etiquetas predefinidas; se crean las necesarias. Ejemplo: `<meal_history>`, `<athlete_information>`, `<code>`. Esto es útil para separar diferentes tipos de información dentro de un mismo prompt

### One-shot y Multi-shot prompting

- **One-shot**: Dar un solo ejemplo del formato deseado para que la IA lo entienda
- **Multi-shot**: Dar varios ejemplos para cubrir distintos escenarios

Ambas técnicas ayudan a la IA a entender exactamente el tipo de output esperado.

### ¿Cómo se pueden controlar outputs que deben cumplir restricciones numéricas (como caracteres máximos)?

Los números son mejores que las palabras ("máximo 70 caracteres" es mejor que "mantener los commits cortos").

También se puede usar `maxLength` en el strict schema.

Sin embargo, sigue siendo probabilístico: no es 100% seguro, pero es mucho más probable que se cumpla

### System Prompts

Son una forma de personalizar la interacción. Por ejemplo, si el chatbot es un asistente de cocina, el System Prompt le dice a Claude que responda como chef profesional. Se envían con la propiedad system en la request de messages.

## Prompt Evaluation

Es la medición automática de la efectividad de los prompts mediante:

- Testing de respuesta esperada vs recibida
- Comparación de versiones del mismo prompt
- Revisión de outputs en busca de errores

Se usan Evaluation Pipelines para automatizar el proceso e iterar rápidamente.

1. Escribir un prompt en draft
2. Crear un dataset de evaluación
3. Evaluar el prompt con el dataset
4. Analizar resultados con un Grader (puntuación 1-10)
5. Mejorar el prompt
6. Repetir si es necesario

### Graders

- **Grader Humano**: Un humano evalúa y puntúa la respuesta
- **Code Grader**: Evaluación programática (sintaxis, si el código corre, etc.)
- **Model Grader**: Otro modelo de lenguaje evalúa la calidad de la respuesta

¿Qué formato quiero? → Code Grader (output estructurado)
¿Qué sintaxis es válida? → Code Grader (corrección sintáctica)
¿Cómo se ejecutó la tarea? → Model Grader (relevancia y coherencia)

### Evaluation Pipeline

1. Se crea un dataset JSON con tareas
2. Se combina el prompt con cada tarea del dataset
3. Se obtiene el output del modelo para cada tarea
4. Se evalúa cada output con un Grader
5. Se obtienen scores y se identifican áreas de mejora
6. Se refina el prompt y se repite

Se recomienda usar Haiku para la evaluación por ser más veloz y controlar la concurrencia para evitar errores de cuota.