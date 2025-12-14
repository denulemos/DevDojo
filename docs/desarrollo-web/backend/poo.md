# ✏️ Programación Orientada a Objetos

Ejemplos en **Java**

[Formato README en Github](https://github.com/denulemos/DevDojo/blob/master/poo.md)

### Que es la programacion orientada a objetos?

La programación orientada a objetos (POO) es un estilo de programación que organiza el código en "objetos". Un objeto es como una caja que contiene datos (llamados atributos) y cosas que puede hacer (llamadas métodos).

```java
public class Perro {
    private String nombre;
    private int edad;

    public Perro(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void ladrar() {
        System.out.println(nombre + " dice: Guau!");
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Perro miPerro = new Perro("Fido", 3);
        miPerro.ladrar();
    }
}
```
Por ejemplo, imagina que tienes un objeto llamado "Perro". Este objeto podría tener atributos como "nombre" y "edad", y métodos como "ladrar()" o "correr()". Así, puedes crear muchos perros con diferentes nombres y edades, pero todos pueden ladrar y correr.

La POO se basa en cuatro ideas principales:

1. **Clases y objetos**: Una clase es como un molde (por ejemplo, "Perro"), y un objeto es una cosa creada a partir de ese molde (por ejemplo, "mi perro Fido").
2. **Encapsulación**: Los datos de un objeto están protegidos y solo se pueden cambiar usando sus métodos.
3. **Herencia**: Puedes crear nuevas clases basadas en otras. Por ejemplo, una clase "Perro" puede heredar de una clase más general llamada "Animal".
4. **Polimorfismo**: Los objetos pueden comportarse de manera diferente según el contexto. Por ejemplo, un método "hacerSonido()" puede hacer que un perro ladre y un gato maúlle.

En resumen, la POO te ayuda a organizar tu código de manera que sea más fácil de entender, reutilizar y mantener.

## Programación Estructurada vs POO

Imagina que estás cocinando. En la **programación estructurada**, es como seguir una receta paso a paso: primero picas las verduras, luego las cocinas, después las sirves. Todo es una secuencia lineal de instrucciones. No hay "cosas" que recuerden su estado; solo funciones que hacen una tarea específica.

En la **POO (Programación Orientada a Objetos)**, es como tener un robot chef que sabe cómo picar verduras, cocinar y servir. Cada "objeto" (como el robot) tiene sus propias propiedades (velocidad, herramientas) y métodos (acciones que puede hacer). Los objetos interactúan entre sí, como si el robot le pasara la comida a otro robot para servirla.

- **Estructurada**: Enfocada en procedimientos y funciones. El código fluye de arriba abajo.
- **POO**: Enfocada en objetos que encapsulan datos y comportamientos. Más fácil para proyectos grandes y complejos.

En resumen, la estructurada es como un libro de instrucciones, mientras que la POO es como un equipo de trabajadores especializados.

## Encapsulamiento

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

### Getters y Setters

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

### Visibilidad

- `public`: accesible desde cualquier parte.
- `private`: accesible solo dentro de la misma clase.
- `protected`: accesible dentro del mismo paquete y por subclases.
- `default` - sin modificador: accesible solo dentro del mismo paquete.


## Abstracción

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

### Clases abstractas e Interfaces'

Una **Clase abstracta** es una clase que no puede instanciarse directamente, solo da una base comun para subclases. No tiene cuerpo.

```java
public abstract class ProductoBase {
    private String nombre;

    public ProductoBase(String nombre) {
        this.nombre = nombre;
    }

    public abstract double calcularPrecioFinal();
}
```

Una **Interfaz** define un conjunto de metodos que una clase debe implementar sin proveer esta implementacion, ya esta dada. Define un contrato

```java
// Cualquier clase que implemente Descontable debe proveer aplicarDescuento
public interface Descontable {
    double aplicarDescuento(double porcentaje);
}
```



| Clase Abstracta | Interfaz |
| --- | ---| 
| Puede tener métodos con implementación y métodos abstractos (sin cuerpo) | Solo puede tener métodos abstractos (hasta Java 7); desde Java 8 puede tener métodos default y estáticos |
| Puede tener atributos (variables de instancia) | Solo puede tener constantes (atributos `public static final`) |
| Se usa la palabra clave `abstract` | Se usa la palabra clave `interface` |
| Una clase puede heredar solo de una clase abstracta (herencia simple) | Una clase puede implementar varias interfaces (herencia múltiple) |
| Puede tener constructores | No puede tener constructores |
| Los métodos pueden tener cualquier modificador de acceso (`public`, `protected`, `private`) | Los métodos son `public` y abstractos por defecto (hasta Java 7) |



## Metodos estaticos - `static`

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


## Polimorfismo

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

Otra explicacion mas simple es, suponiendo que tengo `Producto p = new Producto()` y `Producto d = new Producto()`, si bien ambos son `Producto`, cuando se invoquen metodos sobre ellos se ejecutara la version sobrescrita de la subclase.

### Sobrescritura - `Override`

Consiste en redefinir un metodo heredado de la superclase adaptando su comportamiento. 

```java
public class Bebida extends Producto {
    @Override
    public double calcularPrecioFinal() {
        // Supongamos que las bebidas siempre tienen 10 pesos de recargo
        return getPrecio() + 10; 
    }
}
```


## Clase y Objeto

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

## Métodos

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

## Constructor

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



## Herencia

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

`ProductoElectronico` hereda de `Producto`, y hace uso de `super` para llamar al constructor de la clase padre, y agrega su garantia como propiedad propia. 

### Uso de `this` y `super`

`this` hace referencia al objeto actual, y `super` a la superclase (clase padre), puedo usarlo para llamar la constructor de esta superclase o a un metodo del mismo, evitando la **duplicacion de codigo**






