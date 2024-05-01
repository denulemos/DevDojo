# JSON

Permite guardar e intercambiar datos. Es texto escrito con Javascript Object Notation. MongoDB y las bases de datos no relacionales utilizan este tipo de estructura.

Cuando intercambiamos datos entre un navegador y un servidor, los datos solo pueden ser texto. JSON es texto y puede ser convertido a un objeto JS, sin traducciones complicadas.

Con `Stringify` lo pasamos a un string puro

```markdown
const obj = {name: "Denis", age: 25}
const string = JSON.stringify(obj)
```

Con `parse` lo volvemos a convertir al JSON

```jsx
const obj = JSON.parse(string)
```

El JSON admite nulos y los tipos de datos que maneja JS (String, Boolean, etc..), y es independiente del lenguaje donde sea manejado, es decir, no funciona solo con Javascript. 

## **JSON vs XML**

```markdown
**Estructura XML**

<employees>
    <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
</employees> |

**Estructura JSON**

{ "employees": [ { "firstName":"John", "lastName":"Doe" }, { "firstName":"Anna", "lastName":"Smith" } ] }

```

Misma informacion en ambos formatos

- Ambos son human-readable, autodescriptivos
- JSON es mucho mas cómodo, corto y rapido de leer. Especialmente para aplicaciones AJAX.
- Con XML puedo obtener un documento, recorrerlo y extraer valores del mismo
- Son jerárquicos, puedo poner valores dentro de los valores como hijos.
- Ambos pueden ser analizados por muchos lenguajes de programación y ambos se pueden recuperar con un **XMLHttpRequest**
- JSON no usa end-tag y puede implementar matrices

---

## **JSONP**

Permite hacer solicitudes de dominio cruzado. Es un truco para hacer solicitudes de dominio cruzado, ya que los navegadores no permiten solicitudes de dominio cruzado. 

```jsx
<script>
    function myFunction(myObj) {
        document.getElementById("demo").innerHTML = myObj.name;
    }
</script>

<script src="https://www.w3schools.com/js/jsonp_demo_db.php">
</script>
```

---

## **JSON Schema**

Es un lenguaje de descripción de datos que permite validar, anotar y documentar datos JSON. 

```markdown
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
        "productId": {
            "description": "The unique identifier for a product",
            "type": "integer"
        },
        "productName": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "description": "The price of the product",
            "type": "number",
            "exclusiveMinimum": 0
        }
    },
    "required": ["productId", "productName"]
}
```

---

## **JSON Web Tokens (JWT)**

Es un estándar abierto basado en JSON propuesto por IETF para la creación de tokens de acceso que permiten la propagación de identidad y privilegios. 

---
