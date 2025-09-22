<a name="poo"></a>

| Programación Funcional y Orientada a Objetos |
|----------|
| [Que es la programacion orientada a objetos?](#var24) |
| [Programación Estructurada vs POO](#poo1) |
| [Encapsulamiento](#poo2) |
| [Getters y Setters](#poo3) |
| [Visibilidad](#poo4) |
| [Abstracción](#poo5) |
| [Metodos estaticos (static)](#poo6) |
| [Herencia](#poo7) |
| [Polimorfismo](#poo8) |
| [Clase y Objeto](#poo9) |
| [Métodos](#poo91) |
| [Constructor](#poo92) |
| [Herencia](#poo93) |

<a id="var24"></a>

### **Que es la programacion orientada a objetos?**

[Volver al indice](#poo)

La programación orientada a objetos (POO) es un estilo de programación que organiza el código en "objetos". Un objeto es como una caja que contiene datos (llamados atributos) y cosas que puede hacer (llamadas métodos).

Por ejemplo, imagina que tienes un objeto llamado "Perro". Este objeto podría tener atributos como "nombre" y "edad", y métodos como "ladrar()" o "correr()". Así, puedes crear muchos perros con diferentes nombres y edades, pero todos pueden ladrar y correr.

La POO se basa en cuatro ideas principales:

1. **Clases y objetos**: Una clase es como un molde (por ejemplo, "Perro"), y un objeto es una cosa creada a partir de ese molde (por ejemplo, "mi perro Fido").
2. **Encapsulación**: Los datos de un objeto están protegidos y solo se pueden cambiar usando sus métodos.
3. **Herencia**: Puedes crear nuevas clases basadas en otras. Por ejemplo, una clase "Perro" puede heredar de una clase más general llamada "Animal".
4. **Polimorfismo**: Los objetos pueden comportarse de manera diferente según el contexto. Por ejemplo, un método "hacerSonido()" puede hacer que un perro ladre y un gato maúlle.

En resumen, la POO te ayuda a organizar tu código de manera que sea más fácil de entender, reutilizar y mantener.

<a id="poo1"></a>

## **Programación Estructurada vs POO**

[Volver al indice](#poo)

Imagina que estás cocinando. En la **programación estructurada**, es como seguir una receta paso a paso: primero picas las verduras, luego las cocinas, después las sirves. Todo es una secuencia lineal de instrucciones. No hay "cosas" que recuerden su estado; solo funciones que hacen una tarea específica.

En la **POO (Programación Orientada a Objetos)**, es como tener un robot chef que sabe cómo picar verduras, cocinar y servir. Cada "objeto" (como el robot) tiene sus propias propiedades (velocidad, herramientas) y métodos (acciones que puede hacer). Los objetos interactúan entre sí, como si el robot le pasara la comida a otro robot para servirla.

- **Estructurada**: Enfocada en procedimientos y funciones. El código fluye de arriba abajo.
- **POO**: Enfocada en objetos que encapsulan datos y comportamientos. Más fácil para proyectos grandes y complejos.

En resumen, la estructurada es como un libro de instrucciones, mientras que la POO es como un equipo de trabajadores especializados.

<a id="poo2"></a>

## Encapsulamiento

[Volver al indice](#poo)

Cada objeto controla su propio estado interno, exponiendo solo lo necesario. Para esto se usan **Getters** y **Setters**.

```java
public class Producto {
    private String nombre;
    private double precio;
    private int stock;

    // Getter para nombre
    public String getNombre() {
        return nombre;
    }

    // Setter para nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Getter para precio
    public double getPrecio() {
        return precio;
    }

    // Setter para precio
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // Getter para stock
    public int getStock() {
        return stock;
    }

    // Setter para stock
    public void setStock(int stock) {
        this.stock = stock;
    }
}
```

<a id="poo3"></a>

## Getters y Setters

[Volver al indice](#poo)

Son métodos que permiten acceder y modificar los atributos privados de una clase, promoviendo el encapsulamiento.

```java
public class Producto {
    private String nombre;
    private double precio;
    private int stock;

    // Getter para nombre
    public String getNombre() {
        return nombre;
    }

    // Setter para nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Getter para precio
    public double getPrecio() {
        return precio;
    }

    // Setter para precio
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // Getter para stock
    public int getStock() {
        return stock;
    }

    // Setter para stock
    public void setStock(int stock) {
        this.stock = stock;
    }
}
```

<a id="poo4"></a>

## Visibilidad

[Volver al indice](#poo)

- `public`: accesible desde cualquier parte.
- `private`: accesible solo dentro de la misma clase.
- `protected`: accesible dentro del mismo paquete y por subclases.
- `default` - sin modificador: accesible solo dentro del mismo paquete.

<a id="poo5"></a>

## Abstracción

[Volver al indice](#poo)

Ocultar la complejidad interna de los objetos, presentando una interfaz sencilla. 

```java
abstract class Animal {
    abstract void hacerSonido();

    void dormir() {
        System.out.println("Zzz...");
    }
}

class Perro extends Animal {
    void hacerSonido() {
        System.out.println("Guau");
    }
}

class Gato extends Animal {
    void hacerSonido() {
        System.out.println("Miau");
    }
}
```

<a id="poo6"></a>

## Metodos estaticos (static)

[Volver al indice](#poo)

En Java, la palabra clave static se usa para indicar que algo pertenece a la clase y no a los objetos creados a partir de esa clase.

```java
class Perro {
    static int cantidadDePatas = 4; // Pertenece a la clase Perro
    String nombre; // Pertenece a cada objeto Perro
}

// Se puede acceder a la variable estática sin crear un objeto
int patas = Perro.cantidadDePatas; // 4
// Pero para acceder a 'nombre', necesitas un objeto
Perro miPerro = new Perro();
miPerro.nombre = "Fido";

class Utilidades {
    static int sumar(int a, int b) {
        return a + b;
    }
}

// Se puede llamar así, sin crear un objeto:
int resultado = Utilidades.sumar(2, 3);
```

<a id="poo7"></a>

## Herencia

[Volver al indice](#poo)

Se pueden crear nuevas clases basadas en otras existentes. 

```java
class Animal {
    void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

class Perro extends Animal {
    void hacerSonido() {
        System.out.println("Guau");
    }
}

class Gato extends Animal {
    void hacerSonido() {
        System.out.println("Miau");
    }
}
```

<a id="poo8"></a>

## Polimorfismo

[Volver al indice](#poo)


Objetos de distintas clases pueden ser tratados de la misma forma si comparten una interfaz en común. 

```java
interface Animal {
    void hacerSonido();
}

class Perro implements Animal {
    public void hacerSonido() {
        System.out.println("Guau");
    }
}

class Gato implements Animal {
    public void hacerSonido() {
        System.out.println("Miau");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal miPerro = new Perro();
        Animal miGato = new Gato();

        miPerro.hacerSonido(); // Guau
        miGato.hacerSonido();  // Miau
    }
}
```

<a id="poo9"></a>

## Clase y Objeto

[Volver al indice](#poo)

Una clase es un plano o plantilla que define las **características (atributos)** y las **acciones (métodos)** de algo. 

Un objeto es la **instancia de una clase**. La clase es la receta, el objeto es la comida.

```java
public class Producto {
    String nombre;
    double precio;
    int stock;
}

// Creación del Objeto

Producto cafe = new Producto();
cafe.nombre = "Capuchino";
cafe.precio = 10.0;
cafe.stock = 12;

// Creación de un array de objetos del mismo tipo

ArrayList<Producto> catalogo = new ArrayList<>();
Producto teVerde = new Producto();

// .. se definen sus propiedades

catalogo.add(teVerde);
```
<a id="poo91"></a>

## Métodos

[Volver al indice](#poo)

Los **Métodos de instancia** son aquellos que operan sobre un objeto específico. Hace referencia a `this`.
Los **Métodos de clase (estáticos)** no requieren una instancia para ser usados, son buenos para el manejo de lógica general. 

```java
public class Producto {
    String nombre;
    double precio;
    int stock;

    // Método de Instancia (this)
    public void descontarStock(int cantidad) {
        this.stock -= cantidad;
    }

    // Método estático
    public static double calcularImpuesto(double precio) {
        return precio * 0.21;
    }
}
```

<a id="poo92"></a>

## Constructor

[Volver al indice](#poo)

Es un método especial que se llama automáticamente cuando se crea un objeto. Sirve para inicializar los atributos del objeto.

```java
public class Producto {
    String nombre;
    double precio;
    int stock;

    // Constructor
    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// Creación del Objeto usando el constructor
Producto cafe = new Producto("Capuchino", 10.0, 12);
```

<a id="poo93"></a>

## Herencia

[Volver al indice](#poo)

La herencia permite crear una nueva clase basada en una clase existente, heredando sus atributos y métodos.

```java
public class Producto {
    String nombre;
    double precio;
    int stock;

    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

public class ProductoElectronico extends Producto {
    int garantia; // en meses

    public ProductoElectronico(String nombre, double precio, int stock, int garantia) {
        super(nombre, precio, stock); // Llama al constructor de la clase padre
        this.garantia = garantia;
    }
}
```






