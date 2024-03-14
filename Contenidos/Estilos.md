# Estilos (CSS, SASS..) 

### **Cuál es la diferencia entre div y span?**
La etiqueta span trabaja como contenedor de línea, no se puede ampliar para ocupar un párrafo, debe usarse para edicion de frases en parrafos, y div trabaja como contenedor de bloque, y puede expandirse.

![image](https://github.com/denulemos/denobible/assets/32619895/e5463d4a-0cee-45ff-862b-f872e139ba9c)

### **Qué buenas prácticas pueden existir en CSS?**

- Usar shorthand properties, propiedades abreviadas. Nos permiten escribir varias propiedades en una sola linea.

### **Para que usarias Storybook?**

Para cuando, por ejemplo, tengo una libreria de componentes. Para mostrar cada uno como se veria en un entorno lo mas real e individual posible con todas sus configuraciones posibles

### **Que es BEM?**

Block element modifier, consiste en escribir nombres de clases que dejen en claro que es lo que se esta representando en el HTML y en el CSS

`bloque__elemento-modificador_elemento (header__title-warning)`

### **Como declaro variables en CSS?**

```jsx
:root {
    --color-3: #000000;
} 

html, body {
    background-color: var(--color-3);
}
```
