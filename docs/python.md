# 🐍 Python

Es un lenguaje de programacion de alto nivel que es utilizado para diversos tipos de proyectos, desde desarrollo web hasta ciencia de datos y automatización. Es conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes y expertos por igual. 

Python es un lenguaje de propósito general, lo que significa que se puede utilizar para una amplia variedad de aplicaciones.

- Pandas y Numpy para ciencia de datos
- Django y Flask para desarrollo web
- TensorFlow y PyTorch para aprendizaje automático
- MicroPython para desarrollo de microcontroladores con Raspberry Pi y Arduino
- Selenium y BeautifulSoup para automatización y web scraping

## Variables

En Python no se precisan palabras clave como `let` o `const` para declarar variables, simplemente se asigna un valor a un nombre de variable. 

Python es un lenguaje de **tipado dinámico**, lo que significa que no es necesario declarar el tipo de una variable antes de usarla. El tipo de la variable se determina automáticamente en tiempo de ejecución.

```python
name = "Denisse"
age = 30
is_developer = True
```

- Los nombres de las variables pueden comenzar solo con una letra o un guion bajo `_`, nunca con un número.
- Los nombres de las variables sólo pueden contener caracteres alfanuméricos (`a-z, A-Z, 0-9`) y guiones bajos (`_`)
- Los nombres son case-sensitive, lo que significa que `name` y `Name` serían variables diferentes.

Si alguna de estas reglas se rompe, Python lanzará un error de sintaxis.

```python
5variable_name = 5
     ^
SyntaxError: invalid syntax
```