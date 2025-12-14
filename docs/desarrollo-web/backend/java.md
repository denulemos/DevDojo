# 🚀 Java 

## **Funciones**

Las funciones en Java poseen la siguiente estructura:

```java
public int sumar(int a, int b) {
    int resultado = a + b;
    return resultado;
}
```

- `public`: Es el modificador de acceso, puede ser `private`, `protected` o `public`.
- `int`: Es el tipo de dato que retorna la función. Si no retorna nada, se usa `void`.
- `sumar`: Es el nombre de la función.
- `(int a, int b)`: Son los parámetros que recibe la función, cada uno con su tipo de dato.
- `return resultado;`: Devuelve el valor calculado por la función.

### Como se maneja un parametro que puede ser nulo? (`Optional<>`)

En Java 8 aparecio `Optional<>` que es un wrapper para un valor que puede ser nulo, pero evita el `null` en si mismo y la excepcion `NullPointerException`.

```java
Optional<String> nombre = obtenerNombreOptional();
nombre.ifPresent(n -> System.out.println(n.toUpperCase()));
```

Se ejecuta el `System.out.println(n.toUpperCase())` si el nombre no es nulo (esta presente).

Por ejemplo, en el siguiente codigo se obtiene el nombre de una persona y se imprime en mayusculas si no es nulo, si es nulo se imprime "DESCONOCIDO".

```java
public class EjemploOptional {
    public static void main(String[] args) {
        Optional<String> nombre = obtenerNombre();

        String resultado = nombre
                .map(String::toUpperCase)
                .orElse("DESCONOCIDO");

        System.out.println(resultado);
    }

    static Optional<String> obtenerNombre() {
        return Optional.ofNullable(null);
    }
}
```

### Se recomienda usar `Optional<>` en parametros de funciones?

NO se recomienda usar `Optional` como parámetro de un método.

Este codigo: 

```java
public void saludar(Optional<String> nombre) {
    System.out.println("Hola " + nombre.orElse("Invitado"));
}
```

Es bastante mas complejo que:

```java
public void saludar(String nombre) {
    System.out.println("Hola " + (nombre != null ? nombre : "Invitado"));
}
```

`Optional` esta pensado para valores de retorno, no para entradas. Ademas, si se llama al metodo, se debe crear un `Optional`

```java
saludar(Optional.of("Denisse"));
```

Incluso se podria seguir pasando `null` como parametro.

```java
saludar(null); // NullPointerException
```

Ademas casi todas las librerias y frameworks esperan parametros normales, no `Optional`.

SI tiene sentido usarlo cuando son metodos privados.

```java
private void procesarUsuario(Optional<Usuario> usuarioOpt) {
    usuarioOpt.ifPresent(this::guardar);
}
```


### ¿Las funciones en Java reciben parámetros por valor o por referencia?

En Java, los parámetros de una función **siempre se pasan por valor**, pero lo que cambia es *qué es lo que se copia* según el tipo de dato:

Cuando pasas un **tipo primitivo** (como `int`, `double`, `boolean`), lo que la función recibe es una copia del valor.  
Esto significa que dentro del método puedes modificar ese valor, pero el original fuera de la función no cambia.

```java
void cambiarNumero(int x) {
    x = 10;
}

public static void main(String[] args) {
    int a = 5;
    cambiarNumero(a);
    System.out.println(a); // Imprime 5, porque 'a' no cambió
}
```

Aquí se copia el número `5`, no la variable original.

En el caso de **objetos y arrays**, lo que se copia es *la referencia* al objeto. Esa referencia sigue apuntando al mismo espacio de memoria, por lo que, aunque la variable original no cambie de referencia, **sí puedes modificar el contenido interno del objeto**.

```java
void modificarArray(int[] arr) {
    arr[0] = 99; // Modifica el contenido del array
}

public static void main(String[] args) {
    int[] numeros = {1, 2, 3};
    modificarArray(numeros);
    System.out.println(numeros[0]); // Imprime 99
}
```

Aquí se copió la referencia al array. Ambas variables (la de fuera y la del parámetro) apuntan al mismo array en memoria.

- No se puede cambiar qué objeto referencia la variable original dentro del método (porque solo recibes una copia de la referencia).  
- Sí se puede cambiar el **estado interno** del objeto.

```java
void asignarNuevoArray(int[] arr) {
    arr = new int[]{10, 20}; // esta asignación no afecta al array original
}

public static void main(String[] args) {
    int[] numeros = {1, 2, 3};
    asignarNuevoArray(numeros);
    System.out.println(numeros[0]); // Imprime 1, no 10
}
```

En este caso, reasignar la referencia no afecta al original, porque solo cambió la copia de la referencia que recibe el método.  


## Cómo se maneja la entrada de datos por consola?

Se permite mediante el uso de la clase `Scanner`

```java
// Importar la clase
import java.util.Scanner;

// Crear una instancia
Scanner sc = new Scanner(System.in);

// Metodos comunes
String lineaTexto = sc.nextLine(); 
int numeroEntero = sc.nextInt();
double numeroDecimal = sc.nextDouble();

// libera los recursos del sistema
sc.close();
```

## Métodos sobre Strings

Estos métodos poseen la misma base de la **programación funcional**, es decir, no mutan el dato original si no que devuelven nuevas instancias con los cambios aplicados.

Los metodos existentes son:

- `length()`
- `substring(int inicio, int fin)`
- `toUpperCase()` y `toLowerCase()`
- `isBlank()`: Verifica si la cadena es nula o vacia
- `trim()` : Quita los espacios en blanco al principio y al final de la cadena
- `indexOf(String s)`: retorna la posición de la primera aparición de s en la cadena
- `replace(String viejo, String nuevo)`
- `split(" ")`: Convierte la cadena de caracteres en un array, en este caso, entre cada espacio, ya es un elemento en el Array 
- `append()`: Agregar elemento a la cadena, funciona cuando se lo realiza a un `StringBuilder`

## **Listas**

Hay distintos tipos de listas en Java

### Arrays
Es una estructura de datos de tamaño fijo, una vez declarada no puede ser modificada en su tamaño.

```java
String[] productos = new String[3];
productos[0] = "Cafe";
productos[1] = "Fideos";
productos[2] = "Chocolate";
```

Operaciones como búsqueda o eliminación requieren manejo manual

### Listas y ArrayList

Java ofrece `ArrayList` que es una lista dinámica, el tamaño es dinámico, y se pueden agregar elementos `add(elemento)`, eliminar `remove(index u objeto)` y obtener `get(index)`.

```java
import java.util.ArrayList;

ArrayList<String> listaProductos = new ArrayList<>();

listaProductos.add("Cafe");

System.out.println(listaProductos.size()); // 1

listaProductos.clear(); // Vacia la lista
```

## **Iteraciones**

### `for-each`

```java
for (String producto : listaProductos) {
    System.out.println(producto);
}
```

### `for`

```java
for (int i = 0; i < productos.length; i++) {
    System.out.println(productos[i]);
}
```

## Excepciones

### Qué es una excepcion? Que tipos hay? (`try-catch`)

Una excepcion es un error que sucede durante la ejecucion del programa e interrumpe el flujo normal del mismo. Hay 2 grandes categorias:

- **Excepciones verificadas**: Son aquellas que el compilador obliga a manejar, como `IOException`. Debes usar `try-catch` o declarar la excepcion en el metodo.
- **Excepciones no verificadas**: Son errores de tiempo de ejecucion, como `NullPointerException`. No es obligatorio manejarlas.

```java
try {
    // Codigo que puede lanzar una excepcion
} catch (TipoDeExcepcion e) {
    // Manejo de la excepcion
} finally {
    // Se ejecuta independientemente del resultado al final de todo, se puede usar para librerar recursos
}
```

Por ejemplo:

```java
private void validarStock(Producto producto, int cantidad) throws StockInsuficienteException {
        if (cantidad <= 0) {
            throw new StockInsuficienteException("Cantidad debe ser mayor que cero.");
        }
        if (producto.getStock() < cantidad) {
            throw new StockInsuficienteException("Stock insuficiente. Disponible: " + producto.getStock());
        }
    }
```

La funcion, `validarStock`, lanza la excepcion `StockInsuficienteException` si la cantidad es menor o igual a 0 o si el stock del producto es menor a la cantidad.

```java
try {
                validarStock(producto, cantidad);
                // Restar stock
                producto.setStock(producto.getStock() - cantidad);
                orden.addItem(new OrdenItem(producto, cantidad));
                System.out.println("Item agregado.");
            } catch (StockInsuficienteException e) {
                System.out.println(e.getMessage());
            }
```

Que la excepcion este dentro del `catch` hace que la ejecucion del programa no se interrumpa y se pueda seguir ejecutando.

Mientras tanto la excepcion en si se ve asi:

```java
public class StockInsuficienteException extends Exception {
    public StockInsuficienteException(String mensaje){
        super(mensaje);
    }
}
```

### Excepciones personalizadas

Se pueden crear excepciones personalizadas extendiendo de `Exception` o `RuntimeException`

```java
public class ProductoNoEncontradoException extends Exception {
    public ProductoNoEncontradoException(String mensaje){
        super(mensaje);
    }
}
```

## Modulos 

Los modulos permiten una division logica mayor que con los paquetes. Un modulo puede contener muchos paquetes.

- Control preciso de que partes del codigo son accesibles
- Gestion de dependencias explicita

Todas poseen un `module-info.java` que puede ser similar al `package.json`

```java
module com.paquete.negocio {
    exports com.paquete.dependencia1;
    //...
}
```


