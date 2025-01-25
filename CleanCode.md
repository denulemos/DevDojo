<a name="cod-base"></a>

## [Clean Code y Best Practices](#cod)

| Temas |
|----------|
| [Ejemplo de Pseudo-código](#diag1) |
| [Diagramas de Nassi-Schneiderman](#diag2) |
| [¿De qué trata el código limpio?](#cod1) |
| [Nombres Significativos en Codigo Limpio](#cod2) |
| [Concepto DRY](#cod5) |
| [Concepto KISS](#cod6) |
| [Concepto YAGNI](#cod7) |
| [Concepto LOD](#cod8) |
| [Funciones Limpias](#cod9) |
| [Unico Nivel de abstraccion](#cod10) |
| [Manejo limpio de Parametros](#cod11) |
| [Cuales son los beneficios de una Code Review?](#cod12) |
| [Que tipos de Code review existen?](#cod13) |
| [Domain Driven Design](#cod14) |
| [¿Qué es un patrón de diseño?](#cod15) |
| [En qué se inspiran los patrones de diseño?](#cod16) |
| [¿Qué se obtiene con la implementación de patrones de diseño?](#cod17) |
| [¿Para qué sirven los patrones de diseño?](#cod18) |
| [¿Cuáles son los elementos de un patrón de diseño?](#cod19) |
| [¿Cuáles son los tipos de patrones de diseño?](#cod20) |
| [¿Qué es la intención y motivación de un patrón de diseño?](#cod21) |
| [¿Qué es la aplicabilidad de un patrón de diseño?](#cod22) |
| [¿Qué es la estructura de un patrón de diseño?](#cod23) |
| [¿Quiénes son los participantes de un patrón de diseño?](#cod24) |
| [Patrones Estructurales](#cod25) |
| [Patrones Creacionales](#cod26) |
| [Patrones Comportamiento](#cod27) |
| [Excepciones en lugar de codigos de error](#cod28) |
| [Manejo de Comentarios en el codigo](#cod29) |
| [Acomplamiento artificial](#cod30) |
| [Unchecked Exceptions](#cod31) |
| [Excepciones en lugar de códigos de error](#cod32) |
| [Gestión de errores](#cod33) |
| [Indentación](#cod34) |
| [Código en el nivel de abstracción incorrecto](#cod35) |
| [Acoplamiento (Evitar)](#cod36) |
| [Cohesion (Fomentar)](#cod37) |
| [Uso de numeros magicos en lugar de constantes](#cod38) |
| [Qué es la Programación orientada a Objetos?](#cod39) |
| [Qué es la programación procedural?](#cod40) |
| [Qué es la programacion declarativa?](#cod41) |
| [Que es la Programacion Imperativa?](#cod42) |
| [Qué es la Programacion Estructurada?](#cod43) |
| [Que es un antipatron?](#cod44) |
| [Que tipos de antipatrones para el diseño de Software existen?](#cod45) |
| [Que tipos de Antipatrones para el Diseño Orientado a Objetos existen?](#cod46) |
| [Singleton](#cod47) |
| [Que es el Polimorfismo?](#cod48) |
| [Que es el Upcasting?](#cod49) |
| [Que es el Downcasting?](#cod50) |
| [¿Cómo se produce la ligadura tardía y dinámica que posibilita el polimorfismo?](#cod51) |
| [El Principio de Sustitución de Liskov](#cod52) |
| [¿Cómo ejemplificarías el uso de polimorfismo en Java usando una colección de objetos?](#cod53) |
| [Qué es la densidad de codigo?](#cod54) |
| [La importancia del orden de las funciones](#cod55) |
| [Porque se deberia evitar retornar null?](#cod56) |
| [Porque se deberia evitar el uso de variables globales?](#cod57) |
|[¿Cómo podrías mejorar la calidad del código en un proyecto en marcha?](#cod57-1)|
|[Si tienes plazos ajustados y te ves obligado a escribir "mal código", ¿cómo manejarías esa situación?](#cod57-2) |

| Code Smells |
|----------|
| [¿Qué es un Code Smell?](#cod58) |
| [Code Smells en los Tests](#cod59) |
| [Code Smells en Codigo](#cod60) |
| [Code Smells en Nombres](#cod61) |
| [Code Smells en Comentarios](#cod62) |
| [Code Smells en el entorno](#cod63) |
| [Code Smells en Funciones](#cod64) |

| SOLID |
|----------|
| [Concepto SOLID](#cod4) |
| [Dependency Inversion Principle](#cod3) |
| [Single Responsibility Principle](#cod65) |
| [Open/Closed Principle](#cod66) |
| [Interface Segregation Principle](#cod67) |
| [Liskov Substitution Principle](#cod68) |

---

<a id="cod"></a>

# Clean Code y Best Practices

<a id="diag1"></a>

### **Ejemplo de Pseudo-código**

[Volver al indice](#cod-base)

```pseudocode
1. pedir el primer numero
2. se guarda el numero en la variable numero
3. se pide el 2do numero
4. se guarda el 2do numero en la variable numero 2
5. preguntarle al usuario que cuenta quiere hacer
6. si el usuario quiere division se chequea que la varieble 2 no sea 0
7. si alguna de las variebles es cero debe aparecer un perro rojo
8. realizar la cuenta
9. guardar resultado en la varieble resultado
10. se muestra el resultado

1. Solicitar el nombre al usuario
2. Guardar nombre en la variable “nombre”
3. Solicitar la cantidad de horas trabajadas
4. Guardar la cantidad en la variable “cantHoras”
5. calcular el importe a abonar haciendo: importeTotal = cantHoras * VALOR_HORA
6. Mostrar por pantalla: “El empleado ”, nombre, “ debe cobrar: $”, importeTotal
```

<a id="diag2"></a>

### **Diagramas de Nassi-Schneiderman**

[Volver al indice](#cod-base)

![Diagrama de Nassi-Schneiderman](src/diag1.png)

**Mostrar mensajes por pantalla**

Para representar una salida por pantalla, debe utilizarse un rectángulo, en cuyo ángulo superior izquierdo lleve un pequeño cuadrado marcando una S de Salida.

![Diagrama de Nassi-Schneiderman](src/diag2.png)

**Leer datos desde el teclado**

La E en lugar de la S nos marca una Entrada, es decir, que el programa espera que el usuario ingrese un dato.

En el rectángulo, debe ir el nombre de la variable en dónde se va a almacenar el dato. Asignación de valores a variables.

![Diagrama de Nassi-Schneiderman](src/diag3.png)

**Asignar valores a variables**

Para asignarle un dato a una variable, se debe poner a la izquierda de la sentencia el nombre de la variable que va a recibir un valor, el signo “=” y el valor a asignarle. Este valor puede ser:

- Un valor propiamente dicho.
- Una constante (se le asigna el valor de la constante).
- Una variable (se le asigna el valor de la variable).
- El resultado de una operación aritmética o lógica.

Por ejemplo:

![Diagrama de Nassi-Schneiderman](src/diag4.png)

Como sucede en este caso, en el que la variable importeTotal recibe el resultado del producto del valor de una constante por una variable, el valor puede darse por alguna operación aritmética o lógica.

**Operadores**

Los operadores son la herramienta que tenemos para indicarle al programa que debe realizar cierta operación. Existen operadores aritméticos (suma, resta, etc..), de relación (Numero mayor a otro numero, etc..) o lógicos (AND, OR, XOR..).

![Diagrama de Nassi-Schneiderman](src/diag5.png)

```jsx
int a = 8;
int b = 3;
System.out.println(“La suma de a + b es ” + (a + b));
```

**Decisiones simples**

![Diagrama de Nassi-Schneiderman](src/diag6.png)

```jsx
if (a>b) {
  System.out.println(“el valor de a es mayor que el de b”);
} else {
  System.out.println(“el valor de b es mayor o igual que el de a”);
}
```

En caso de que un empleado trabaje más de 40 horas, el valor hora aumentará en un 15%. De esta forma, luego de pedirle al usuario que ingrese la cantidad de horas trabajadas, debemos resolver cuánto es el sueldo real, antes de multiplicarlo por esta cantidad

```php
// declaración de constantes
const int VALOR_HORA_CAT1 = 20;
const int VALOR_HORA_CAT2 = 30;
const int TOPE_HORAS = 40;

// declaración de variables
string nombre;
float cantHoras;
float importeTotal;
```

**Decisiones múltiples. Sentencia switch**

A diferencia de un si condicional, existen oportunidades en que se debe decidir entre más de dos posibilidades. Las decisiones múltiples también se basan en una comparación, pero que puede resolver múltiples resultados.

Hasta ahora, a los programadores del ejercicio se les pagaba según la cantidad de horas trabajadas. Vamos a cambiar esta estrategia de pago y utilizaremos algo más real con el mundo de los sistemas. Dependiendo del Rol que cumpla, podemos decir que un programador Junior está en la categoría 1, un semi-senior en la categoría 2 y un senior en la categoría 3.

Vamos a solicitarle entonces, un dato más al usuario. La categoría del programador. De esta forma, las constantes y variables quedarían de este modo:

```php
// Declaración de constantes
const int VALOR_HORA_CAT1 = 20;
const int VALOR_HORA_CAT2 = 30;
const int VALOR_HORA_CAT3 = 40;
const int ERROR = -1;

// Declaración de variables
string nombre;
float cantHoras;
float importeTotal;
int categoria;
```

![Diagrama de Nassi-Schneiderman](src/diag7.png)

La variable categoria nos indica qué es lo que estamos evaluando. Los números 1, 2 y 3 indican las opciones posibles. Por último, este diagrama incluye un valor default (por defecto), el cual se ejecuta siempre y cuando la condición o variable evaluada no corresponda con ninguna opción.

![Diagrama de Nassi-Schneiderman](src/diag8.png)

**While (ciclo 0-n)**

Se lo llama así porque puede ser que no haya posibilidad de *entrar* al ciclo (porque ya antes de entrar la condición del ciclo no se cumple) y porque, una vez que se entró al ciclo, lo único que permitirá que se salga es que la condición deje de cumplirse. Este ciclo es conocido como *while* y se caracteriza porque la condición de permanencia antecede al bloque de instrucciones que conforman el ciclo:

![Diagrama de Nassi-Schneiderman](src/diag9.png)

```jsx
while (condicion_de_permanencia) {
  instruccion o bloque de instruccciones;
}
```

Es muy probable que el ciclo esté controlado por una o más variables que, incluidas dentro de la condición de permanencia, determinen a partir de su *estado* (si la condición relacionada con la variable de control se cumple o no) y, por lo tanto, si se permanece dentro del ciclo o si sale y continúa con el resto del programa. Por eso, podemos ver también este ciclo de esta manera:

![Diagrama de Nassi-Schneiderman](src/diag10.png)

Uno de los usos habituales de los ciclos es el ingreso validado de valores. Como muchas veces los programas interactúan con usuarios y éstos casi inevitablemente cometerán errores, es muy importante que los datos que vamos a usar en nuestros programas estén controlados, siendo sus valores acordes a lo que esperamos.

Veamos un ejemplo: queremos que alguien ingrese el número de día de la semana para que nosotros, a partir de eso, hagamos algo (no importa qué). Por eso, controlaremos que el número esté dentro del rango esperado (un número entre 1 y 7), caso contrario deberíamos informar del error y volver a pedir el número. El diagrama es el siguiente:

![Diagrama de Nassi-Schneiderman](src/diag11.png)

```java
int numeroDeDia;
System.out.print("Ingresa el numero de dia de la semana (1 a 7)");
numeroDeDia = Integer.parseInt(input.nextLine());
while (numeroDeDia < 1 || numeroDeDia > 7) {
  System.out.print("Me parece que te equivocaste. " +
    "Ingresa el numero de dia de la semana " +
    "asegurandote de que sea un numero " +
    "entre el 1 y el 7 (inclusive):");
  numeroDeDia = Integer.parseInt(input.nextLine());
}
```

**Do-while (ciclo 1-n)**

Se lo llama *ciclo 1-n* porque, a diferencia del *while*, su condición de permanencia se escribe y chequea luego de ejecutar el bloque de instrucciones que conforman el ciclo. Por lo tanto, siempre se entrará al ciclo aunque, al igual que en el caso de *while*, una vez que se entró al ciclo sólo se permitirá salir de él cuando la condición deje de cumplirse.

![Diagrama de Nassi-Schneiderman](src/diag12.png)

```java
do {
  instruccion o bloque de instruccciones;
} while (condicion_de_permanencia);
```

Haciendo un paralelo con lo que dijimos anteriormente para el while, podemos ver a este ciclo de esta manera:

![Diagrama de Nassi-Schneiderman](src/diag13.png)

Es importante aquí resaltar que no hay dos puntos de actualización de la variable de control, y que éste es apenas se ingresa al ciclo, ni antes ni después.

Veamos el ejemplo de la carga del día de semana tal como se haría con este ciclo. Dado que el dato se carga apenas antes de ser procesado, y dentro del ciclo, en caso de desear un tratamiento especial en caso de error implicaría que usemos un *if* para mostrar el problema. Para hacer eso, aconsejamos usar el ciclo *while*.

<a id="cod1"></a>

### **¿De qué trata el código limpio?**

[Volver al indice](#cod-base)

- Es un codigo facil de leer, entender y modificar
- Se recomienda leer el código de otras personas para aprender como son las distintas implementaciones para seguir limpiando nuestro código.
- No es posible escribir codigo perfecto a la primera, se consigue mediante un proceso de iteracion continuo que lo va mejorando
- La refactorizacion es segura ya que esta pensada la existencia de los Test Unitarios
- Es recomendable programar en ingles ya que los lenguajes estan en ingles y la mayoria del codigo tambien, las librerias, etc..

<a id="cod2"></a>

### **Nombres Significativos en Codigo Limpio**

[Volver al indice](#cod-base)

En el dia a dia nombramos muchas cosas (clases, paquetes, ficheros, etc..), se deben aclarar nombres claros.

Se deben buscar nombres que revelen intención, es decir:

DON´T

```
int d; // Day
int m; // Month
int y; // Year
```

DO

```
int dayOfBirth;
int monthOfBirth;
int yearOfBirth;for (int i = 0; i < numberOfRequests; i++){
    processRequest(requests.get(i));
}
```

- Con el nombre en si mismo ya se debe saber la intencion de la variable y lo que almacena.
- En el caso de los bucles for (como se puede ver en el ejemplo con el int i) se pueden aceptar las declaraciones de variable de una sola letra ya que se realizan solo para hacer iteraciones

Tambien se debe evitar la desinformacion

- Se deben evitar los nombres largos y poco significativos, por ejemplo `ServiceForEfficientUpdateMysqlDatabase` vs `ServiceForEfficientBackupMysqlDatabase`, son largos, podriamos decir que son explicativos, pero a simple vista pueden ser confundidos ya que solo cambia una palabra de ellas entre si.
- Otro ejemplo es `Map<Integer, String> employeeList`, ¿Es realmente una lista?, no, es un mapa, confunde al programador.
- Otro ejemplo son dos clases, una llamada `ProductData` y otra `ProductInfo`, ¿Cual es la diferencia entre Data e Info? Podrian ser lo mismo

Se deben buscar nombres pronunciables, que sean faciles de buscar. Es mejor elegir un nombre largo a uno corto que no deja claro su significado

DON´T

```
public class InfRcrd {
    private String nm;
    private String snm;
}
```

DO

```
public class Employee {
    private String name;
    private String surname;
}
```

- Se deben evitar las abreviaciones innecesarias
- Los nombres de las clases deben ser nombres, y las funciones deben ser verbos. Es decir, una clase NO debe llamarse `createEmployee`, y un metodo NO deberia llamarse `EmployeeName` ya que no corresponde con su proposito.

<a id="cod3"></a>

### **Dependency Inversion Principle**

[Volver al indice](#cod-base)

Los sistemas mas flexibles son los que dependen de abstracciones y no concreciones. En Java significa que se debe depender de interfaces y clases abstractas, no de implementaciones directas. Hace necesario un mecanismo que nos cree las instancias de las implementaciones que queremos.

La clase `Switch` no depende directamente de la clase `LightBulb`, sino que depende de la abstracción `SwitchableDevice`. Esto permite que `Switch` sea más flexible y pueda controlar cualquier dispositivo que implemente la interfaz `SwitchableDevice`, no solo la bombilla. Además, la clase `LightBulb` sigue cumpliendo con el DIP al depender de una abstracción (`SwitchableDevice`) en lugar de depender directamente de `Switch`. Esto facilita la reutilización y el mantenimiento del código, ya que los componentes son más independientes y menos propensos a cambios.

```javascript
// Abstracción para un dispositivo que se puede encender y apagar
class SwitchableDevice {
    turnOn() {} // Método para encender el dispositivo
    turnOff() {} // Método para apagar el dispositivo
}

// Clase para representar una bombilla
class LightBulb extends SwitchableDevice {
    turnOn() {
        console.log("Light bulb turned on");
    }

    turnOff() {
        console.log("Light bulb turned off");
    }
}

// Clase para representar un interruptor
class Switch {
    constructor(device) {
        this.device = device;
    }

    press() {
        if (this.isOn) {
            this.device.turnOff();
            this.isOn = false;
        } else {
            this.device.turnOn();
            this.isOn = true;
        }
    }
}

// Uso de las clases
const lightBulb = new LightBulb(); // Creamos una bombilla
const switchButton = new Switch(lightBulb); // Creamos un interruptor y lo asociamos con la bombilla

switchButton.press(); // Output: Light bulb turned on
switchButton.press(); // Output: Light bulb turned off

```

<a id="cod4"></a>

### **Concepto SOLID**

[Volver al indice](#cod-base)

Propuesto por Robert C. Martin

S -> Single Responsibility Principle (Principio de responsabilidad unica)

O -> Open-Closed Principle (Principio abierto-cerrado)

L -> Liskov Substitution Principle (Principio de Sustitucion de Liskov)

I -> Interface Segregation Principle (Principio de segregacion de interfaz)

D -> Dependency Inversion Principle (Principio de inversion de dependencia)

Nos ayudaran a

- Crear software escalable con nuevas funcionalidades
- Crear una arquitectura limpia y mantenible
- Escribir Código mas facil de leer y entender
- Módulos con alta cohesion y bajo acoplamiento

<a id="cod5"></a>

### **Concepto DRY**

[Volver al indice](#cod-base)

Don’t Repeat Yourself, si hay una pieza de programación que se repite en mas de un lugar, se debe crear una función de la misma

<a id="cod6"></a>

### **Concepto KISS**

[Volver al indice](#cod-base)

Keep it Simple Stupid, no escribir codigo que nadie pueda entender o leer, mantener todo simple

<a id="cod7"></a>

### **Concepto YAGNI**

[Volver al indice](#cod-base)

You Aren’t Gonna Need it! No escribir codigo de mas solo porque puede que lo necesites mas adelante. Implementar algo solo si es necesario en el momento

<a id="cod8"></a>

### **Concepto LOD**

[Volver al indice](#cod-base)

Law Of Demeter, quien puede hablar con quien, una unidad puede comunicarse solo con sus unidades cercanas

<a id="cod9"></a>

### **Funciones Limpias**

[Volver al indice](#cod-base)

- Las funciones deben ser claras, concisas, faciles de leer y modificar
- Deben ser pequeñas, deben hacer una unica cosa, un unico nivel de abstraccion. Debemos separar lo mas posible todas las funciones, haciendo que sean reutilizables.
- No deben recibir muchos parametros
- No tienen efectos secundarios por fuera de su proposito principal
- Devuelven excepciones en lugar de codigos de error

<a id="cod10"></a>

### **Unico Nivel de abstraccion**

[Volver al indice](#cod-base)

Separar las responsabilidades en las entidades correspondientes.

DON´T

```java
public class Person {
    public void drive (Car car) {
        car.openDoor();
        car.setDriver(this);
        // Esto no es responsabilidad de la Persona, es responsabilidad del Vehiculo
        car.getBattery().connect();
        car.setEngine().start();
    }
}
```

DO

```java
public class Car {
    Battery battery;
    Engine engine;    public void start(){
        battery.connect();
        engine.start();
    }
}public class Person {
    public void drive (Car car){
        car.openDoor();
        car.setDriver(this);
        car.start();
    }
}
```

<a id="cod11"></a>

### **Manejo limpio de Parametros**

[Volver al indice](#cod-base)

Se deben evitar las funciones que reciben mas de 3 argumentos, muchos argumentos es una mala encapsulación. La mejor funcion es la que menos argumentos recibe.

DON´T

```java
public User createUser(String username, String password, String name, String lastname, String address);public Circle createCircle(double x, double y, double radius)
```

DO

```java
public User createUser(UserFormData userFormData)// Pasamos x e y a un objeto "Point" (centro del circulo) que es mucho mas explicativo
public Circle createCircle(Point center, double radius)
```

<a id="cod12"></a>

### **Cuales son los beneficios de una Code Review?**

[Volver al indice](#cod-base)

Los objetivos clave de la revisión de código son identificar errores de desarrollo iniciales y facilitar una base de código mantenible. El proceso de revisión de código puede ayudar a su equipo a prever posibles problemas técnicos que son mucho más fáciles de abordar en una etapa temprana.

La revisión de código resulta en varios otros beneficios para sus proyectos y equipo; lo más significativo: menos defectos, mejor intercambio de conocimientos, estándares más consistentes y mejor cumplimiento.

**Menos defectos**

A menudo es más fácil para un revisor con una perspectiva externa identificar errores estructurales (por ejemplo, código muerto, errores de lógica o algoritmos, preocupaciones de rendimiento o arquitectura, etc.) y errores funcionales (cuando el código no funciona como se esperaba).

Incluso las revisiones de código cortas e informales pueden tener un impacto significativo en la calidad del código y la frecuencia de errores.

**Compartir conocimiento**

El valioso conocimiento que su equipo comparte durante el proceso de revisión de código se relaciona principalmente con la funcionalidad de una aplicación específica, su dominio y su lógica empresarial. También cubre las mejores prácticas de codificación, incluyendo técnicas de optimización y refactorización.

El intercambio de conocimientos garantiza que todos los miembros del equipo estén en la misma página y fortalece la comunicación y cooperación positivas.

**Standards Consistentes**

La revisión de código garantiza que los miembros de su equipo sigan la guía de estilo acordada. La consistencia en una base de código hace que sea más fácil de leer y comprender, previene errores y facilita la colaboración entre desarrolladores regulares y migratorios. El código legible es más reutilizable, sin errores y a prueba de futuros cambios.

El autor del código puede no ser capaz de juzgar la legibilidad de su fragmento de código tan fácilmente como lo puede hacer un revisor. Seguir estándares consistentes hace que la cooperación entre autores y revisores de código sea más fácil.

**Compliance**

La revisión de código es una excelente manera de evitar trampas técnicas comunes. Por ejemplo, si su aplicación tiene requisitos estrictos de seguridad, su especialista en seguridad local debería revisarla para asegurarse de que cumpla con los requisitos de cumplimiento.

Un revisor también puede detectar y reemplazar dependencias externas recién introducidas con licencias inapropiadas o vulnerabilidades conocidas antes de que aparezcan en producción.

Que puede suceder si evito una Code Review?

**Menos Calidad de Código estructural**

La falta de revisión de código puede afectar la calidad estructural del código, haciéndolo ilegible y difícil de mantener.

**Menos Calidad de código Funcional**

Eludir la revisión de código puede afectar negativamente la calidad funcional del código. El código de baja calidad, a su vez, disminuye la calidad del producto.

**Se comparte poco conocimiento**

La falta de revisión de código puede hacer que algunos miembros de tu equipo pierdan información importante. Esto puede llevar a una situación en la que varios miembros del equipo estén implementando funcionalidades similares en lugar de reutilizar la solución existente.

Además, la falta de compartir conocimientos adecuadamente puede resultar en la pérdida de algunas funcionalidades empresariales reutilizables.

**Re-trabajo**

La falta de transparencia y retroalimentación temprana en tu equipo puede requerir retrabajo en una etapa posterior. Por ejemplo, mientras trabajan en dos módulos diferentes, varios miembros del equipo pueden incorporar diferentes enfoques técnicos. Para hacer que la base de código sea consistente, uno de los enfoques tendrá que ser refactorizado.

Este tipo de situación puede llevar a conflictos interpersonales entre los miembros del equipo, así como trabajo adicional.

**Posibles problemas técnicos**

Sin revisión de código, tu equipo tiene una mayor probabilidad de introducir problemas de seguridad que afecten a los usuarios finales. Estos problemas podrían llevar a brechas de datos sensibles, vulnerabilidad a ataques de ransomware y otras consecuencias negativas para tus clientes y la reputación de tu empresa...

<a id="cod13"></a>

### **Que tipos de Code review existen?**

[Volver al indice](#cod-base)

**Peer Review**

La revisión por pares permite que varios miembros del equipo revisen el código en diferentes momentos. Su conveniencia lo convierte en un tipo de revisión popular.

Con la ayuda del sistema de control de versiones, el autor pone el código a disposición de otros miembros del equipo para su revisión. Después, el autor comienza a trabajar en otra tarea mientras sus compañeros realizan la revisión. Diversas herramientas y estrategias de ramificación facilitan el proceso.

La revisión por pares puede ser interna o externa. Cuando su equipo realiza una revisión interna por pares, es una excelente manera de mejorar el intercambio de conocimientos. Su equipo también puede optar por la ayuda de un especialista externo con experiencia específica que no forma parte del equipo.

**Specialist Review**

La revisión de un especialista es un ejemplo de práctica de revisión de código entre equipos.

A veces, un fragmento de código puede requerir la revisión de un especialista que tiene habilidades específicas y conocimientos profundos en un área particular. Muy a menudo, este tipo de especialista no forma parte del equipo de desarrollo.

La revisión de un especialista podría ser una revisión arquitectónica, de seguridad o de rendimiento. Este tipo de revisión puede ser requerida periódicamente o a pedido.

**Instant Code Review**

La revisión instantánea de código permite que varios miembros del equipo revisen el código simultáneamente. Por lo general, se lleva a cabo como programación en pareja: cuando dos miembros del equipo escriben código y lo revisan línea por línea.

Este enfoque puede ser apropiado para dos desarrolladores de aproximadamente el mismo nivel de madurez que trabajan juntos en un problema empresarial complejo. También es útil si los desarrolladores más senior quieren ayudar a los desarrolladores junior a mejorar sus habilidades técnicas: un desarrollador senior codifica y explica lo que está haciendo línea por línea, mientras que un desarrollador junior observa y aprende. El mismo principio se aplica a la integración, cuando un recién llegado observa y escucha a otro miembro del equipo codificando y explicando las ideas esenciales línea por línea.

<a id="cod14"></a>

### **Domain Driven Design**

[Volver al indice](#cod-base)

Este diseño se enfoca en el dominio del problema, es decir, en el problema que se está tratando de resolver. Se enfoca en el lenguaje que se usa para describir el problema y en cómo se resuelve. Se basa en la idea de que el diseño de software debe reflejar el dominio del problema, y no al revés.

Por ejemplo, para desarrollar el software de un hospital, debo tener en cuenta las necesidades del usuario y sobre todo, si es necesario, un marco juridico, mas si se trata de informacion sensible sobre pacientes.

**Software del modelo del dominio anemico**: No tiene un conocimiento sobre el dominio donde el software se desempeña.

**Software del modelo del dominio rico**: Tiene un conocimiento profundo sobre el dominio donde el software se desempeña.

Se deben conocer las reglas, casos de uso, y las necesidades del usuario para poder desarrollar un software que se adapte a las necesidades del usuario. Se deben conocer los datos que necesitan recopilar los medicos, las enfermeras, y los pacientes, y cómo se deben almacenar y procesar esos datos.

<a id="cod15"></a>

### **¿Qué es un patrón de diseño?**

[Volver al indice](#cod-base)

Un patrón de diseño es una solución descubierta para un problema informático que se presenta recurrentemente y de una forma especifica, para que sea reutilizada en otros desarrollos en cualquier otro lenguaje.

<a id="cod16"></a>

### **En qué se inspiran los patrones de diseño?**

[Volver al indice](#cod-base)

Se inspiran en los patrones de construcción en la arquitectura, en esa disciplina se usa el mismo concepto para la comunicación entre colegas y en otros procesos de la disciplina.

<a id="cod17"></a>

### **¿Qué se obtiene con la implementación de patrones de diseño?**

[Volver al indice](#cod-base)

- **Reutilización de código**: Se puede reutilizar el código que ya ha sido probado y que se sabe que funciona.
- **Facilita la comunicación**: Los patrones de diseño permiten que los desarrolladores se comuniquen de una manera más efectiva.
- **Facilita el mantenimiento del código**: Los patrones de diseño permiten que el código sea más fácil de mantener.
- **Facilita la escalabilidad del código**: Los patrones de diseño permiten que el código sea más fácil de escalar.

<a id="cod18"></a>

### **¿Para qué sirven los patrones de diseño?**

[Volver al indice](#cod-base)

Son soluciones basándonos en la experimentación de problemas comunes y recurrentes en varios proyectos de programación. Algunos pueden parecer abstractos en su explicación, le delegan al diseñador el esfuerzo de reconocer el problema y adaptar la solución. Son utilizados también como un facilitador de la comunicación, es decir, si todos los especialistas de IT conocen estos patrones de diseño, pueden ver cualquier proyecto y ya intuir como funciona, y cuál es la idea detrás de su tipo de organización. Son diseños orientados al cambio.

<a id="cod19"></a>

### **¿Cuáles son los elementos de un patrón de diseño?**

[Volver al indice](#cod-base)

Los elementos de un patrón de diseño incluyen el nombre del patrón, que es el nombre por el cual el patrón es reconocido o conocido. Puede haber más de un nombre para un mismo patrón.

<a id="cod20"></a>

### **¿Cuáles son los tipos de patrones de diseño?**

[Volver al indice](#cod-base)

- **Creacionales**: Se encargan de la creación de objetos, tratan de abstraer el proceso de creación de objetos. Resuelven problemas relacionados con la creación o instanciacion de objetos
- **Estructurales**: Se encargan de la composición de clases o de objetos. Resuelven problemas relacionados a la estructura y composición interna de los objetos, como problemas de asociación y agregación. No son fáciles de entender a la primera, y la mayoría son muy abstractos.
- **Comportamiento**: Se encargan de la comunicación entre objetos.  Estudian el comportamiento orientado a la comunicación entre objetos y conjuntos de objetos
- **De arquitectura**: Son patrones a nivel componente, normalmente operan en algún tipo de capa lógica. Expresan un esquema organizativo fundamental. El primer patrón postulado que define a este en GoF es el MVC
- **De interacción**: La primera aplicación de este se dio en el diseño de interfaces de usuarios. Son 5 patrones de interfaz, Windows per task, Few Panes, Standard Panes, Nouns and Verbs y Short Menú.
- **Del GRASP**: Son patrones generales de software relacionados con la asignación de responsabilidades. Son una serie de buenas prácticas de aplicación recomendable en el diseño de software que provienen de autores anteriores y paradigmas previos.
- **De negocio**: Obedecen a situaciones de negocio específico
- **Dialécticos**: Son patrones de bajo nivel específicos para un lenguaje de programación o entorno concreto

<a id="cod21"></a>

### **¿Qué es la intención y motivación de un patrón de diseño?**

[Volver al indice](#cod-base)

La intención y motivación de un patrón de diseño se refiere a un resumen del problema que resuelve este patrón. Es un párrafo breve que explica su necesidad.

<a id="cod22"></a>

### **¿Qué es la aplicabilidad de un patrón de diseño?**

[Volver al indice](#cod-base)

La aplicabilidad de un patrón de diseño menciona los usos más comunes y los criterios para aplicar cierto patrón. Suelen cambiar mucho con el tiempo dependiendo de la evolución de algunos frameworks o lenguajes.

<a id="cod23"></a>

### **¿Qué es la estructura de un patrón de diseño?**

[Volver al indice](#cod-base)

La estructura de un patrón de diseño es una enumeración y descripción de las entidades o clases concretas y abstractas, que explican los roles dentro del patrón. Pueden ser pequeños diagramas de clases que describan las clases e interfaces participantes o componentes del patrón.

<a id="cod24"></a>

### **¿Quiénes son los participantes de un patrón de diseño?**

[Volver al indice](#cod-base)

Los participantes de un patrón de diseño son tanto las clases abstractas como concretas que participan en el patrón en las documentaciones.

<a id="cod25"></a>

### **Patrones Estructurales**

[Volver al indice](#cod-base)

- **Adapter**: Se adapta a un determinado objeto para que pueda ser usado por otro, dado que de otro modo no se podría. Su nivel de uso es muy alto
- **Bridge**: Nos permite separar a una abstracción de su implementación. Su uso es nivel medio a bajo
- **Composite**: Permite, ayuda y simplifica la forma de tratar a objetos simples y compuestos de un mismo modo. Su uso es medio
- **Decorador**: Suma o añade funcionalidad a un objeto de manera dinámica. Su empleo es medio, se emplea usualmente con Composite.
- **Facade**: Provee de una interfaz o punto de entrada para acceder a la funcionalidad de un grupo de objetos de un sub sistema. Su utilización es alto.
- **Flyweight**: El patrón busca reducir la redundancia de objetos que viven en memoria cuando se trata de objetos pequeños con la misma información. Su empleo es medio, alto.

<a id="cod26"></a>

### **Patrones Creacionales**

[Volver al indice](#cod-base)

- **Singleton**: Se ocupa de que exista una unica instancia de un determinado objeto. Es muy usado
- **Factory Method y/o Factory Simple**: Busca simplificar la creacion de objetos de una determinada familia definiendo una interfaz en comun. Su nivel de uso es alto.
- **Abstract Factory:** Busca centralizar la fabricación de objetos de distintas familias en únicamente un lugar. Su empleo es bajo.
- **Builder**: Se ocupa de construir objetos complejos. Su empleo es bajo.
- **Prototype**: Nos permite crear una copia exacta (o casi) de un objeto en memoria directamente sin necesidad de interactuar con su caso. Su utilización es bajo.
- **Object Pool**: No es un patrón GoF. Permite generar, tener, mantener y reutilizar una serie de objetos en memoria para reducir el trabajo de los Garbage Collector. Su uso es medio a alto.

<a id="cod27"></a>

### **Patrones Comportamiento**

[Volver al indice](#cod-base)

Como los objetos se van a comportar y a cambiar su comportamiento.

- **State**: Suele presentarse cuando es necesario que un objeto modifique su comportamiento cuando cambia su estado interno (Muy usado en React). Empleo alto.
- **Strategy**: Permite disponer de varios métodos para resolver un problema y permitir elegir cual de ellos se usara en tiempo de ejecución. Uso alto.
- **Observer**: Define una dependencia entre un objeto determinado a muchos otros (llamados observadores) de manera que cuando se produce un cambio de estado en el sujeto observado, los observadores dependen de el para que el resto se actualice solo. Uso alto.
- **Mediator**: Es cuando se define que un objeto coordine la comunicación entre objetos de distintas clases y que no fueron diseñados para comunicarse entre si. Empleo medio a bajo.
- **Command**: Encapsula una operación en un objeto, permitiendo ejecutar esa operacion sin conocer el contenido de la misma. Empleo medio.
- **Template method**: Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos. Esto permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura. Uso medio a bajo
- **Memento**: Permite volver a estados anteriores de un objeto y/o sistema. Uso medio bajo
- **Iterator**: Permite recorrer sobre objetos compuestos independientemente de la implementación de los mismos
- **Interpreter**: Dado un lenguaje, define una gramática para dicho lenguaje, asi como las herramientas para interpretarlo. Uso bajo.
- **Chain of Responsability**: Permite establecer la linea que deben llevar los mensajes para que los objetos hagan la tarea indicada
- **Visitor**: Permite definir nuevas operaciones sobre una jerarquía de clases sin cambiar las clases sobre las que opera. Uso bajo

<a id="cod28"></a>

### **Excepciones en lugar de codigos de error**

[Volver al indice](#cod-base)

Conviene encerrar todo nuestro codigo que puede fallar dentro de un try/catch y manejarlo mediante el mismo que logear los errores al momento en que suceden, el flujo normal queda mucho mas claro.

DON´T

```java
public void restoreDatabase(){
    if (state() == 'OK'){
        realizoUnaAccion();
        if (state() == 'OK'){
            Logger.log("Todo salio bien");
        }
        else {
            Logger.log("Error");
        }
    }
    else {
        Logger.log("Error");
    }
}
```

DO

```java
public void restoreDatabase(){
    try {
        realizoUnaAccion(); // Throws excepcionUna
        realizoOtraAccion(); // Throws excepcionDos
        Logger.log('Todo Salio Bien')
    }
    catch (excepcionUna e){
        Logger.log("Ocurrio un error");
    }
    catch (excepcionDos e){
        Logger.log("Ocurrio un error");
    }
}
```

Tambien seria ideal separar las funciones try/catch en una sola funcion, asi tenemos los caminos por separado. Cada funcion puede tratar con un solo nivel de abstraccion.

```java
public void restoreDatabase(){
    try {
        realizoTodasLasAcciones(); // Throws excepcionUna y excepcionDos
    }
    catch (excepcionUna e){
        Logger.log("Ocurrio un error");
    }
    catch (excepcionDos e){
        Logger.log("Ocurrio un error");
    }
}
```

<a id="cod29"></a>

### **Manejo de Comentarios en el codigo**

[Volver al indice](#cod-base)

Se nos enseña mucho que debemos comentar mucho nuestro codigo. El buen codigo deberia poder leerse con casi ningun comentario.

- Solo agregar comentarios cuando es estrictamente necesario
- Los comentarios se desactualizan muy rapidamente ya que el codigo cambia mucho, son muy complicados de mantener, por eso no son aconsejables
- Si el codigo tiene demasiados comentarios es porque no se entiende (Refactorizacion necesaria) o porque los comentarios son demasiado obvios (eliminarlos en ese caso)
- Los comentarios de Javadocs en una API publica si son comentarios utiles.

DON´T

```java
// --- En este caso el comentario esta ya que la condicion del if no es lo suficientemente explicativa por si misma ---

// Check if password is secure
if (password != null && password.length > 9 && !password.contains(username)){}
// --- Comentario generado automaticamente por javadoc, no nos suma nada, es innecesario ---

/*
* @param title The title of the book
* @param descripcion The description of the book
*
*/
public void addBook(String title, String description){}

// --- NUNCA dejar codigo comentado pensando que lo vamos a usar en un futuro, para eso usamos control de versiones ---

//public void oldWayOfAddingBook(Request request){}
```

DO

```java
// --- Reemplazamos la condicion confusa por una funcion que resume lo que hace ---

if(isSecure(password))
// --- Se explican cosas que suman al codigo, por ejemplo, que busca matchear un regex que no se puede ver a simple vista ---
// Matches Date in format 17-09-2022 18:05:15
Pattern.matches(regexDate, date);

// --- Se dejan cosas en TODO para un futuro ---
// TODO expect this method to change when..
public void login (User user) {}
```

<a id="cod30"></a>

### **Acomplamiento artificial**

[Volver al indice](#cod-base)

Los elementos que no dependan entre si no deben estar acoplados. Por ejemplo, en el caso de PI dentro del ejemplo, nos conviene hacer una variable global del mismo, ya que es un valor que puede ser usado por cualquier otro elemento del codigo y no es algo exclusivo del Circulo.

```java
public class Circle {
    private static final Double PI = 3.14159265359;
    private Double radius;
    public Circle(Double radius) {
        this.radius = radius;
    }
    public Double calculateArea() {
        return PI * radius * radius;
    }
}
```

<a id="cod31"></a>

### **Unchecked Exceptions**

[Volver al indice](#cod-base)

- Son excepciones que heredan de `RuntimeException`, como `NullPointerException`, muy común en Java, y en lenguajes compilados
- Se pueden tratar con try-catch pero no es necesario al 100%
- Las excepciones checked son las excepciones normales que heredan de `Exception`, si no son tratadas, el programa directamente no compila, ensucia mucho el codigo.
- Se recomienda usar checked Excepcions si se trata de una libreria critica donde se quiera obligar a quien usa la liberia a manejar estas excepciones.

```jsx
public class Driver {
    public void startDriving() {
        try {
            startCar();
        }
        catch (CarCrashException e) {
            logger.log(e);
        }
    }
}

public class Car {
    public void start() throws BatteryDeadException, EngineStartException {
        // ...
    }
}

public class Battery {
    public void start() throws BatteryDeadException {
        // ...
    }
}

public class Engine {
    public void start() throws EngineStartException {
        // ...
    }
}
```

<a id="cod32"></a>

### **Excepciones en lugar de códigos de error**

[Volver al indice](#cod-base)

Usando excepciones no hay porque tratar el error en el momento. Nos conviene separar la gestion de errores del codigo con el flujo correcto.

```jsx
public void sendShutDown() {
    try {
        tryToShutDown();
    }
    catch (DeviceShutDownError e) {
        logger.log(e);
    }
}

private void tryToShutDown() throws DeviceShutDownError {
    DeviceHandle handle = getHandle(DEV1); // Throws DeviceShutDownError
    // ...
    sendShutDown(handle);
}
```

<a id="cod33"></a>

### **Gestión de errores**

[Volver al indice](#cod-base)

- Se debe buscar un codigo limpio pero tambien robusto en si mismo
- La gestion de errores puede ensuciar el codigo, hay que prestarle especial atención
- Se deben devolver excepciones en lugar de códigos de error
- Se deben usar excepciones unchecked
- No devolver ni pasar `null`

<a id="cod34"></a>

### **Indentación**

[Volver al indice](#cod-base)

- Se recomiendan dos o cuatro espacios de indentacion
- El maximo recomendado de caracteres por linea es de 100 caracteres, si no, se tendrá que partir la linea
- Se deben seguir siempre las mismas reglas

DON´T

```java
public Integer tripleSum(Integer a, Integer b, Integer c){
if (a==null||b==null||c==null){
return null;
}
return a+b+c;
}
```

<a id="cod35"></a>

### **Código en el nivel de abstracción incorrecto**

[Volver al indice](#cod-base)

El método `changeRadioChannel` esta mal, ya que no todos los vehículos tienen radio. El método no debería estar en esa clase tan general como lo es `Vehicle`

```java
public class Vehicle() {
  public void turnOn();
  public void turnOff();
  public Integer getLeftAutonomyInKm();
  public void changeRadioChannel(RadioCHannel selectedChannel);
}
```

<a id="cod36"></a>

### **Acoplamiento (Evitar)**

[Volver al indice](#cod-base)

Grado en que dos modulo software estan relacionados entre si. Con un buen diseño, se crean modulos poco acoplados, haciendo que si se modifica un modulo, afecte lo menos posible al resto (Misma logica con las arquitecturas de microservicios o microfrontends)

```javascript
// -----------Módulo con acoplamiento alto-----------
const HighCouplingModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para calcular el área de un rectángulo
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Función para imprimir el área de una forma geométrica
    function printArea(shape, ...args) {
        let area;
        if (shape === 'circle') {
            area = calculateCircleArea(...args);
        } else if (shape === 'rectangle') {
            area = calculateRectangleArea(...args);
        } else {
            throw new Error("Shape not supported");
        }
        console.log(`The area of the ${shape} is: ${area}`);
    }

    // Exponer las funciones públicas del módulo
    return {
        printArea
    };
})();

// Uso del módulo con acoplamiento alto
HighCouplingModule.printArea('circle', 5); // Output: The area of the circle is: 78.53981633974483
HighCouplingModule.printArea('rectangle', 4, 6); // Output: The area of the rectangle is: 24

// -----------Módulo con acoplamiento bajo-----------

const LowCouplingModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para calcular el área de un rectángulo
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Exponer las funciones públicas del módulo
    return {
        calculateCircleArea,
        calculateRectangleArea
    };
})();

// Módulo independiente
const IndependentModule = (function() {
    // Función para imprimir el área de una forma geométrica
    function printArea(shape, ...args) {
        let area;
        if (shape === 'circle') {
            area = LowCouplingModule.calculateCircleArea(...args);
        } else if (shape === 'rectangle') {
            area = LowCouplingModule.calculateRectangleArea(...args);
        } else {
            throw new Error("Shape not supported");
        }
        console.log(`The area of the ${shape} is: ${area}`);
    }

    // Exponer las funciones públicas del módulo
    return {
        printArea
    };
})();

// Uso del módulo con acoplamiento bajo
IndependentModule.printArea('circle', 5); // Output: The area of the circle is: 78.53981633974483
IndependentModule.printArea('rectangle', 4, 6); // Output: The area of the rectangle is: 24
```

<a id="cod37"></a>

### **Cohesion (Fomentar)**

[Volver al indice](#cod-base)

Es el grado en que los elementos de un modulo estan relacionados entre si. Mientas mas alta la cohesion en el codigo, mejor

En el ejemplo la cohesion es baja, las funciones se relacionan con distintas variables. Se podria separar en 2 clases, una que sea para el manejo de niveles y otra para el manejo del jugador.

Ejemplo de alta cohesion:

```javascript
// Módulo para manejar operaciones relacionadas con formas geométricas
const GeometryModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para calcular el perímetro de un círculo
    function calculateCirclePerimeter(radius) {
        return 2 * Math.PI * radius;
    }

    // Función para calcular el área de un rectángulo
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Función para calcular el perímetro de un rectángulo
    function calculateRectanglePerimeter(length, width) {
        return 2 * (length + width);
    }

    // Exponer las funciones públicas del módulo
    return {
        calculateCircleArea,
        calculateCirclePerimeter,
        calculateRectangleArea,
        calculateRectanglePerimeter
    };
})();

// Uso del módulo de geometría
console.log(GeometryModule.calculateCircleArea(5)); // Output: 78.53981633974483
console.log(GeometryModule.calculateRectanglePerimeter(4, 6)); // Output: 20

---

// Módulo con baja cohesión
const LowCohesionModule = (function() {
    // Función para calcular el área de un círculo
    function calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    // Función para convertir un número a binario
    function decimalToBinary(number) {
        return number.toString(2);
    }

    // Función para generar un número aleatorio
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Función para validar un correo electrónico
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Exponer las funciones públicas del módulo
    return {
        calculateCircleArea,
        decimalToBinary,
        generateRandomNumber,
        validateEmail
    };
})();

// Uso del módulo de baja cohesión
console.log(LowCohesionModule.calculateCircleArea(5)); // Output: 78.53981633974483
console.log(LowCohesionModule.decimalToBinary(10)); // Output: "1010"
console.log(LowCohesionModule.generateRandomNumber(1, 100)); // Output: un número aleatorio entre 1 y 100
console.log(LowCohesionModule.validateEmail("example@example.com")); // Output: true
```

<a id="cod38"></a>

### **Uso de numeros magicos en lugar de constantes**

[Volver al indice](#cod-base)

Se deben pasar numeros que no se sabe que son como en el primer caso a constantes, como sucede en su segunda refactorizacion.

```javascript
public Double getAnnualSalary() {
    return 200.0 * 0.6..
}

public Double getAnnualSalary() {
    return WORKING_DAYS * WORKING_HOURS_PER_DAY...
}
```

<a id="cod39"></a>

### **Qué es la Programación orientada a Objetos?**

[Volver al indice](#cod-base)

En ella las instrucciones tratan de modelar un sistema con base en la realidad, haciendo más cercanos los conceptos que vemos en ella. Es por eso que en la programación orientada a objetos aparecen conceptos de clase, objeto, atributo, método, etc., que en el fondo no dejan de ser bloques de código. Asimismo, cabe notar que también hacen uso de estructuras de control y repetición.

<a id="cod40"></a>

### **Qué es la programación procedural?**

[Volver al indice](#cod-base)

En ella las imposiciones o instrucciones se pueden agrupar en “procedimientos”. Cada procedimiento es un bloque (la programación procedural es una forma de programación estructurada) que se dedica a un cambio de una parte específica del estado del sistema. Estos bloques son conocidos típicamente como “funciones” o “subrutinas”

<a id="cod41"></a>

### **Qué es la programacion declarativa?**

[Volver al indice](#cod-base)

Los lenguajes declarativos, en el paradigma declarativo de programación, se utilizan para describir la estructura del sistema y describir qué hace el sistema. Una vez descrita “la misión” del programa, el cómo se llega al resultado depende de la implementación interna del propio lenguaje.
Generalmente, se define a la programación declarativa como “no-imperativa”. Es decir, es todo lo que la imperativa no es. En este sentido, la programación declarativa dice qué debe hacer el sistema, en donde la ejecución no afecte otras partes del sistema y pueda representarse como una serie de premisas matemáticas (funciones/transformaciones). En un lenguaje imperativo, entonces, el sistema pasará de un estado a otro ejecutando una serie de pasos, un algoritmo. En un lenguaje declarativo se debe describir el estado inicial, el estado final y luego el propio motor del lenguaje hará todo lo necesario para ir de un estado al otro
El ejemplo más claro de un lenguaje declarativo es SQL. En SQL se describe qué información debe extraerse de una o más tablas, sin control sobre la forma de obtenerlo. Cómo se obtiene lo maneja el motor de la base. Otro ejemplo ubicuo es HTML. En HTML se describe, por ejemplo, que debe existir cierto texto, centrado y en negrita, sin especificar ningún tipo de lógica ni control de flujo. Cómo es que veremos el texto centrado y en negrita dependerá de cada navegador

<a id="cod42"></a>

### **Que es la Programacion Imperativa?**

[Volver al indice](#cod-base)

Los lenguajes imperativos definen al paradigma imperativo de programación. En este paradigma se usa el lenguaje para describir cómo cambia el estado del sistema.

Típicamente, hay instrucciones (imposiciones) ordenadas en forma de líneas de texto, una debajo de la otra, que se ejecutan de forma secuencial. El lenguaje imperativo describe cómo opera el sistema.

La programación imperativa es la más “natural”, dado que surge desde el mismísimo hardware, donde se ejecuta instrucciones de máquina. Estas instrucciones, en su más bajo nivel, mueven registros de datos de un lugar a otro, alteran valores, etc. Es decir, cambian el estado de los integrados, de la memoria, del procesador, en fin, de nuestra computadora. A medida que subimos de nivel, los lenguajes siguen haciendo lo mismo, solo que con estructuras más complejas como variables, instrucciones complejas (como bucles, modificadores de visibilidad, e incluso cosas más complejas como las anotaciones).

Ejemplos de lenguajes imperativos hay muchos: C, C++, Java, Perl y un infinito etcétera. En todos estos lenguajes se escriben líneas de código que describen los pasos de una algoritmo para lograr un resultado.

<a id="cod43"></a>

### **Qué es la Programacion Estructurada?**

[Volver al indice](#cod-base)

En ella las imposiciones se ven divididas en estructuras. Pueden ser estructura de control de flujo (if/else), de repeticiones (for/while) o pueden ser estructuras de ordenamiento(bloques de código, generalmente delimitados por TABs o por llaves o corchetes)

<a id="cod44"></a>

### **Que es un antipatron?**

[Volver al indice](#cod-base)

Un antipatrón de diseño es una implementación que invariablemente conduce a una mala solución. Al documentarse junto con los patrones de diseño, se dan argumentos para no escoger malos caminos en lugar de simplemente usar la intuición y el sentido común.
El término se origina inspirado en el libro Design Patterns, el libro Anti-Patterns describe los antipatrones como la contrapartida natural al estudio de los patrones de diseño.
El estudio formal de errores que se repiten permite reconocer y reconducir los elementos involucrados hacia una mejor solución. Los antipatrones no se mencionan en el libro original de Design Patterns, puesto que éste es anterior.
Los antipatrones se consideran una parte importante de una buena práctica de programación. Es decir, un buen programador procurará evitar los antipatrones siempre que sea posible, lo que requiere su reconocimiento e identificación tan pronto como sea posible, dentro del ciclo de vida del software.
El concepto se puede aplicar a la ingeniería en general, e incluso a cualquier tarea realizada por el hombre. Aunque no se escucha con frecuencia fuera del campo ingenieril, la noción está ampliamente extendida.

<a id="cod45"></a>

### **Que tipos de antipatrones para el diseño de Software existen?**

[Volver al indice](#cod-base)

- **Base de datos como comunicador de procesos (Database as IPC)**: Es cuando usamos una base de datos para comunicar procesos para uno o varias máquinas, en lugar de hacer una comunicación entre procesos directa (que es más adecuada).
- **Objeto todopoderoso (BLOB Object)**: Simple, cuando hacemos que toda la funcionalidad se haga en un solo objeto (aplicable también a cualquier tipo de componente).
- **Clase Gorda (Fat class)**: Es la que le sigue a la anterior, se trata de dotar a una clase con demasiados atributos y/o métodos, haciéndola responsable lógicas de negocio que no les correspondan
- **Botón mágico (Magic Push-button)**: Se trata de desarrollar lógica de negocio en los métodos de interacción de pantallas de usuario.
- **Carrera de obstáculos (Race Hazard)**: Incapacidad de prever las consecuencias de diferentes sucesiones de eventos. En otras palabras es no tener visión o trazabilidad de la lógica que se dispara en cada evento.
- **Entrada chapuza (Input Kludge)**: No especificar e implementar el manejo de entradas inválidas. En otras palabras, es cuando no validamos los datos que entran al sistema.
- **Fábrica de combustible (Gas Factory)**: Diseñar de manera innecesariamente compleja. Dicho de otro modo, sobre modelar, diseñar por demás, diseñar funcionalidad que no sabremos cuando.
- **Gran bola de lodo (Big Ball of Mud)**: Construir un sistema sin estructura definida. Sin una estructura la implementación se desmorona.
- **Interfaz inflada (Interface Bloat)**: Pretender que una interfaz sea tan potente que resulta extremadamente difícil de implementar.
- **Punto de vista ambiguo (Ambiguous Viewpoint)**: Presentar un modelo sin concretar ciertos aspectos, postergando así decisiones conflictivas para más adelante.
- **Re-dependencia (Re-coupling)**: Introducir dependencias ( o relaciones entre objetos) innecesarias.
- **Sistema de cañerías de calefacción (Stovepipe System)**: Construir un sistema difícilmente mantenible, ensamblando componentes poco relacionados.

<a id="cod46"></a>

### **Que tipos de Antipatrones para el Diseño Orientado a Objetos existen?**

[Volver al indice](#cod-base)

- **Acoplamiento secuencial (Sequential coupling)**: Construir una clase que necesita que sus métodos se invoquen en un orden determinado o secuencia.
- **Base Bean**: Heredar funcionalidad de una clase utilidad en lugar de delegar lo que se necesite en ella.
- **Fallo de clase vacía (Empty Subclass Failure)**: Crear una clase que no supera el test de la subclase vacía, es decir, que se comporta de manera diferente cuando se invoca desde una subclase que no añade modificación o funcionalidad alguna.
- **Llamar a Super (Call Super)**: Obligar a las subclases a llamar a un método de la superclase que ha sido sobrescrito.
- **Modelo de dominio Anémico (Anemic Domain Model)**: Usar un modelo del dominio sin ninguna lógica de negocio que de valor. Esto no es un enfoque orientado a objetos porque cada objeto debería tener tanto propiedades como comportamiento asociado específico (que haga transformaciones) y no solo para llevar datos desde la base a la pantalla.
- **Objeto Sumidero (Object Cesspool)**: Reusar objetos no adecuados realmente para el fin que se persigue.
- **Poltergeist**: Emplear objetos cuyo único propósito es pasar la información a terceros objetos sin aportar valor o realizar transformaciones.
- **Problema del círculo-elipse (circle-ellipse problem)** : Crear variables de tipo pensando en los valores de posibles subtipos, generando problemas de bifurcaciones lógicas que no son predecibles.
- **Problema del yoyó (yo-yo problem)**: Construir estructuras (por ejemplo de herencia) que son difíciles de comprender debido a su excesiva fragmentación.
- **Singletonitis**: Abuso de la utilización del patrón singleton. Este concepto es también aplicable a cualquier tipo de patrón de diseño en el que se abuse de su implementación en lugares no adecuados o necesarios. Suele ocurrir con programadores con poca experiencia
- **YAFL (“yet another layer” u otra capa más no deseada)**: Se trata de añadir capas innecesarias a un programa, sub-programa, biblioteca o framework. Esta tendencia se extendió bastante después de que se publicase el primer libro sobre patrones.

<a id="cod47"></a>

### **Singleton**

[Volver al indice](#cod-base)

Obliga a que exista solo un objeto de un tipo. Se puede usar para crear un objeto que se encargue de la conexión a una base de datos, para que no se creen múltiples conexiones.

```javascript
class Singleton {
    constructor() {
        // Si la instancia no existe, se crea
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        // Si no, se devuelve lo que ya existe
        return Singleton.instance;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton(); // Devuelve la misma instancia
```

<a id="cod48"></a>

### **Que es el Polimorfismo?**

[Volver al indice](#cod-base)

Conocido también como ***ligadura dinámica***, ***ligadura tardía*** (***late binding***), el concepto fundamental del ***Polimorfismo*** es “mismo mensaje, distinta implementación” y consiste en implementar o reemplazar el método de una clase con otro método llamado exactamente igual pero escrito en otra clase (derivada de la primera).

Para que se produzca esta ligadura tardía (que efectivamente se produce **en *tiempo de ejecución***, cuando el objeto es asignado a la variable) se requieren algunas cosas:

- Que las clase implicadas tengan declarado (y directa o indirectamente implementado) un método con ***exactamente la misma firma***.
- Que la variable que guarde el objeto sea de la clase de ***mayor jerarquía*** entre las todas las implicadas (la que todos los objetos posibles tengan en común).
- Que no se trate de un método *de clase* (***static***).
- Que no se trate de un método privado (porque no se puede heredar).
- Que no haya sido declarado como ***final***, porque no podrá ser definido.

Si se cumplen estos requisitos, usando **siempre la misma *llamada* o *invocación***  y**sea cual sea el objeto asignado**, **la variable declarada expondrá** a través de su*capa de abstracción* o *API* (*application programming interface*, o *interfaz de acceso programático*) ***distinta implementación***. Así, cuando una variable que contiene una instancia propia o de cualquiera de sus subclases invoca a un método, la versión del método que se ejecutará no será necesariamente la que figura en la clase de la variable declarada, sino la existente en la clase de la instancia referida por la variable. Dicho de otra manera, **la versión del método que será ejecutada depende de la clase del objeto referenciado, no de la variable que lo referencia**.

El polimorfismo es una de las principales aplicaciones de la herencia y supone el principal motivo de las clases abstractas

En POO polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de distinta clase

El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía

Para que el objeto pueda responder al mensaje, la clase debe contener el método (mensaje)

Para garantizar que dos clases distintas contengan el  mismo método, debemos hacer que estas  lo hereden de una clase superior

En el ejemplo de los polígonos, creamos una clase abstracta Poligono con un método abstracto obtenerSuperficie(). Este método no tiene implementación en la clase Poligono porque cada polígono tiene su propia fórmula para calcular la superficie, pero al declarar el método, establecemos un contrato que asegura que cualquier subclase de Poligono tendrá que implementar su propio cálculo de superficie. De esta forma, logramos que cada subclase, como Cuadrado, Triangulo o Circulo, implemente su cálculo específico de superficie, usando polimorfismo para permitir diferentes comportamientos en una misma estructura.

<a id="cod49"></a>

### **Que es el Upcasting?**

[Volver al indice](#cod-base)

Es la posibilidad de tratar a un objeto de una subclase como un objeto de la superclase.

Esto se logra apuntando a un objeto de una subclase con un puntero de su superclase.

```jsx
Perro fido;
Mascota a;
fido = new Perro("Fido", "Bull Dog");
a = fido;
```

Tras la conexión polimorfa únicamente podemos acceder a los atributos y métodos pertenecientes a la clase asociada a la referencia

<a id="cod50"></a>

### **Que es el Downcasting?**

[Volver al indice](#cod-base)

Es la posibilidad de volver a tratar el objeto con un puntero a la clase a la que pertenece

Se utiliza para volver a acceder a todos los atributos y métodos del mismo

A diferencia del upcasting, siempre se hace indicando cual es la subclase

```jsx
Perro fido;
Mascota a;
Perro  mismoFido;

fido = new Perro("Fido",
               "Bull Dog");
a = fido;
mismoFido = (Perro) a;
```

Es posible que al hacer un downcasting se produzca un error debido a que la clase a la que pertenezca el objeto no coincida con la clase del puntero.

Para evitarlo podemos utilizar la instrucción de Java instanceof.

```jsx
if (a instanceof Perro)
      mismoFido = (Perro) a;
```

<a id="cod51"></a>

### **¿Cómo se produce la ligadura tardía y dinámica que posibilita el polimorfismo?**

[Volver al indice](#cod-base)

Gracias a los punteros o referencias: cuando se crea una variable el lenguaje registra en una lista interna cada método declarado para esa clase y espera a que se “guarde” un objeto en la variable a través de una asignación. Cuando se produce la asignación del objeto, se recorre internamente la lista de métodos de la declarados en la variable que pueden ser sobreescritos y se compara con los métodos disponibles para el objeto (propios o heredados). Si la firma coincide, el método encontrado en el objeto asignado se asociará a la declaración existente y sobreescribirá la referencia y sustituirá el enlace al método original, si éste estaba implementado.

<a id="cod52"></a>

### **El Principio de Sustitución de Liskov**

[Volver al indice](#cod-base)

El ***Principio de Sustitución de Liskov*** fue acuñado por **Barbara Liskov** en 1987 durante una conferencia sobre *Jerarquía y Abstracción de datos*. Este principio dice que al sobreescribir un método se debe asegurar que éste mantenga el espíritu original del método, sin alterar ni dejar de cumplir la premisa o responsabilidad declarada inicialmente para el mismo. Según este principio, **una clase derivada no únicamente *es*, sino que *debe comportarse* como la clase base**. Por ejemplo, si hay un método *abrirPuerta()*, una clase derivada no debería hacer que su *abrirPuerta()* abra las ventanas, o prenda la radio. A nivel declarativo y de programación puede estar perfecto, pero no sería correcto. Puede tener otra forma de abrir la puerta, pero no hacer otra cosa.

<a id="cod53"></a>

### **¿Cómo ejemplificarías el uso de polimorfismo en Java usando una colección de objetos?**

[Volver al indice](#cod-base)

En Java, el polimorfismo se puede ver claramente al trabajar con una colección de objetos que comparten una clase base. En este ejemplo, creamos una lista ArrayList<Poligono> y agregamos instancias de Cuadrado, Triangulo y Circulo. Cuando recorremos esta colección, llamamos al método obtenerSuperficie() de cada polígono, y cada uno calcula su superficie utilizando su propia implementación del método. Así, aunque estamos llamando al mismo método, el comportamiento es diferente según el tipo específico de polígono:

```java
ArrayList<Poligono> poligonos = new ArrayList<>();
poligonos.add(new Cuadrado("#FF0000", 50));
poligonos.add(new Triangulo("#00FF00", 50, 50));
poligonos.add(new Circulo("#0000FF", 25));

for (Poligono poligono : poligonos) {
    System.out.printf("%s Superficie=%f\n", poligono, poligono.obtenerSuperficie());
}
```

<a id="cod54"></a>

### **Qué es la densidad de codigo?**

[Volver al indice](#cod-base)

La densidad de código es una métrica que mide la cantidad de código fuente en un programa en relación con la cantidad de comentarios y líneas en blanco. Se utiliza para evaluar la legibilidad y mantenibilidad del código, ya que un código con una alta densidad de código puede ser difícil de entender y modificar.

**Densidad Horizontal**

Mismo concepto pero de manera horizontal, entre caracteres

DON´T

```java
public Integer tripleSum(Integer a, Integer b, Integer c){
   if (a==null||b==null||c==null){
       return null;
   }
   return a+b+c;
}
```

DO

```java
public Integer tripleSum(Integer a, Integer b, Integer c) {
   if (a == null || b == null|| c == null){
       return null;
   }
   return a + b + c;
}
```

<a id="cod55"></a>

### **La importancia del orden de las funciones**

[Volver al indice](#cod-base)

El orden de las funciones es para facilitar la lectura. En el ejemplo, primero ponemos la funcion `a()` que a su vez, consume a `b()` y `c()`, haciendo que la lectura sea ordenada.

```
public void a(){
    b();
    c();
}public void b(){}public void c(){}
```

<a id="cod56"></a>

### **Porque se deberia evitar retornar null?**

[Volver al indice](#cod-base)

- No se debe devolver null en una funcion
- Al devolver null, obligamos que se chequee ese null, es una gran fuente de bugs, por ejemplo, es recomendable devolver una lista vacia en vez de un null
- No debemos pasar null en los parametros de una funcion, obligamos a que se chequee que estos parametros no sean nulos para ejecutar correctamente.

DON'T

```jsx
public void processRequestBatch() {
  List<Request> requestList = getRequestList();
  if (requestList != null) {
    for (Request r: requestList) {
      processRequest(r);
    }
  }
}
```

DO

```jsx
public void processRequestBatch(){
  List<Request> requestList = getRequestList();
  for (Request r: requestList) {
    processRequest(r);
  }
}
```

<a id="cod57"></a>

### **Porque se deberia evitar el uso de variables globales?**

[Volver al indice](#cod-base)

- Las variables globales pueden ser modificadas por cualquier parte del código, lo que puede llevar a errores difíciles de rastrear.
- Las variables globales pueden ser accedidas por cualquier parte del código, lo que puede llevar a dependencias no deseadas.
- Las variables globales pueden ser difíciles de depurar y mantener, ya que su alcance es global y no está claro dónde se utilizan o modifican.
- Las variables globales pueden causar problemas de concurrencia si se acceden y modifican desde múltiples hilos de ejecución.
- Las variables globales pueden dificultar la reutilización del código, ya que las dependencias globales pueden hacer que sea difícil separar las partes del código en módulos independientes.

<a id="cod57-1"></a>

### **¿Cómo podrías mejorar la calidad del código en un proyecto en marcha?**

[Volver al indice](#cod-base)

Mejorar la calidad del código en un proyecto en marcha requiere un enfoque estructurado y progresivo para no afectar la funcionalidad existente mientras se mejora la base del proyecto. Aquí hay varias estrategias que puedes seguir:


### **1. Evaluación inicial y establecimiento de objetivos**
- **Auditoría del código existente:** Revisa el código base para identificar problemas comunes como:
  - Código duplicado.
  - Nombres de variables poco descriptivos.
  - Falta de pruebas unitarias.
  - Ciclos de vida complejos o difíciles de seguir.
- **Definir estándares:** Establece o actualiza las guías de estilo (por ejemplo, estándares para nombres, estructura de carpetas, o uso de patrones).
- **Objetivos progresivos:** Define metas alcanzables, como mejorar la cobertura de pruebas al 80% o reducir el tiempo de carga en un 20%.

---

### **2. Limpieza y refactorización del código**
- **Refactorización progresiva:**
  - Identifica módulos o componentes críticos y refactorízalos uno a la vez.
  - Aplica principios SOLID para mejorar la modularidad y legibilidad.
  - Usa patrones de diseño (como Factory, Singleton o Strategy) si simplifican el código.
- **Eliminar código muerto:** Identifica funciones, componentes o estilos que ya no se usan y elimínalos.
- **Simplificación de funciones:** Divide funciones complejas en funciones más pequeñas y reutilizables.

*Ejemplo de refactorización:*

Código inicial:
```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === 'discounted') {
      total += items[i].price * 0.9;
    } else {
      total += items[i].price;
    }
  }
  return total;
}
```

Código refactorizado:
```javascript
function calculateItemPrice(item) {
  return item.type === 'discounted' ? item.price * 0.9 : item.price;
}

function calculateTotal(items) {
  return items.reduce((total, item) => total + calculateItemPrice(item), 0);
}
```

---

### **3. Implementación de pruebas**
- **Pruebas unitarias y de integración:**
  - Usa herramientas como Jest, Jasmine o Mocha para asegurar la calidad de cada módulo.
  - Prioriza las áreas del código con mayor probabilidad de errores o que se usan frecuentemente.
- **Pruebas automatizadas:**
  - Usa herramientas como Selenium, Cypress o Playwright para automatizar pruebas funcionales y de interfaz.
- **Cobertura de pruebas:** Implementa herramientas como Istanbul para monitorear la cobertura de pruebas y mantener estándares altos.

---

### **4. Optimización del rendimiento**
- **Análisis de rendimiento:**
  - Mide la velocidad del renderizado, el uso de memoria, y el tamaño de los bundles.
  - Usa herramientas como Lighthouse, Webpack Bundle Analyzer o DevTools.
- **Lazy loading y tree shaking:** Implementa carga diferida para recursos pesados y elimina código no utilizado en los bundles.
- **Optimización de la red:** Reduce las peticiones HTTP, habilita compresión (gzip/brotli) y usa HTTP/2 o HTTP/3.

---

### **5. Automatización de tareas repetitivas**
- **Linting y formateo:** Usa ESLint y Prettier para mantener la consistencia en el código.
- **Integración continua (CI/CD):**
  - Configura pipelines con herramientas como Jenkins, GitHub Actions, o GitLab CI para automatizar pruebas, linting y despliegues.
- **Revisión automatizada de código:** Implementa bots como Dependabot para gestionar dependencias y Snyk para detectar vulnerabilidades.

---

### **6. Mejora de documentación**
- **Comentarios efectivos:** Escribe comentarios para explicar el "por qué" de decisiones complejas, no el "cómo".
- **Documentación del proyecto:** Usa herramientas como Storybook para documentar componentes UI o Swagger/OpenAPI para APIs.
- **README claro:** Asegúrate de que el README tenga instrucciones claras sobre cómo ejecutar, probar y desplegar el proyecto.

---

### **7. Capacitación y revisión de código**
- **Revisión por pares:** Implementa pull requests obligatorios para garantizar que cada cambio pase por al menos una revisión.
- **Capacitación del equipo:** Organiza talleres para enseñar nuevas herramientas, patrones o buenas prácticas.

---

### **8. Monitoreo continuo**
- **Seguimiento de errores:** Usa herramientas como Sentry o LogRocket para detectar y solucionar problemas en producción.
- **Métricas de calidad:** Monitorea métricas como el tiempo de respuesta, número de bugs reportados y cumplimiento de estándares.

<a id="cod57-2"></a>

### **Si tienes plazos ajustados y te ves obligado a escribir "mal código", ¿cómo manejarías esa situación?**

[Volver al indice](#cod-base)

Cuando te enfrentas a plazos ajustados y necesitas priorizar la entrega sobre la calidad del código, es importante abordar la situación de manera estratégica para minimizar el impacto a largo plazo.


### **1. Planificación y comunicación temprana**
- **Habla con el equipo o stakeholders:**
  - Informa que, para cumplir con el plazo, es posible que se comprometa la calidad del código.
  - Explica los riesgos de acumular deuda técnica, como mayor dificultad de mantenimiento, bugs futuros, y tiempo extra para agregar nuevas funcionalidades.
  - Propón un plan para abordar esa deuda técnica después del plazo.

  *Ejemplo:*
  "Podemos cumplir con la fecha límite, pero algunos aspectos del código serán soluciones temporales. Después de la entrega, necesitaremos tiempo para refactorizar y mejorar la calidad del código para evitar problemas futuros."


### **2. Mantén un enfoque mínimo viable**
- **Define el alcance exacto:** Limita las funcionalidades al núcleo imprescindible para cumplir con los objetivos. Recorta características secundarias que puedan ser agregadas más tarde.
- **Prototipos rápidos:** En lugar de implementar una solución perfecta, crea una solución funcional que cumpla los requisitos mínimos.

  *Ejemplo:* Si estás desarrollando una funcionalidad de búsqueda, inicialmente podrías implementar una búsqueda básica sin filtros avanzados ni ordenación sofisticada.


### **3. Escribe "código malo" de manera controlada**
Si escribir "código malo" es inevitable, sigue estas prácticas para minimizar el daño:

- **Documenta las áreas débiles:**
  - Añade comentarios en el código para señalar qué partes necesitan refactorización o tienen lógica temporal.
  - Usa palabras clave como `// TODO` o `// FIXME` para que sean fácilmente identificables.

  ```javascript
  // FIXME: Optimizar esta función para manejar casos con grandes cantidades de datos.
  function processData(data) {
    return data.map(item => heavyComputation(item));
  }
  ```

- **Evita la propagación del mal código:**
  - Restringe las soluciones rápidas a un área específica del sistema.
  - Encapsula la lógica temporal en módulos o funciones que puedas reemplazar fácilmente más adelante.

  ```javascript
  // Solución temporal para cálculo de descuentos
  function calculateDiscount(price) {
    return price * 0.9; // TODO: implementar lógica avanzada con reglas dinámicas
  }
  ```

- **Pruebas básicas:** Aunque sea un código rápido, incluye al menos pruebas mínimas para asegurarte de que funciona correctamente.


### **4. Prioriza la deuda técnica más crítica**
- **Crea un backlog de deuda técnica:** Lleva un registro claro de todas las áreas donde el código requiere mejoras, priorizando según el impacto.
- **Asigna tiempo post-entrega:** Programa un sprint técnico después de cumplir con el plazo para refactorizar el código.


### **5. Evita problemas comunes del "código malo"**
Incluso bajo presión, sigue estas prácticas para evitar errores desastrosos:
- **No omitas validaciones:** Asegúrate de manejar errores, incluso con soluciones simples.
- **Usa nombres significativos:** No sacrifiques claridad; el código mal estructurado no tiene que ser ilegible.
- **Evita dependencias rígidas:** Asegúrate de que las soluciones rápidas no bloqueen la integración de futuras funcionalidades.

  *Ejemplo de mala práctica:*
  ```javascript
  // Hardcode que será difícil de mantener
  const API_URL = "http://localhost:3000/api/v1/products";
  ```

  *Mejor alternativa:*
  ```javascript
  // Define constantes para permitir configuraciones futuras
  const API_URL = process.env.API_URL || "http://localhost:3000/api/v1/products";
  ```


### **6. Post-entrega: Paga tu deuda técnica**
Después de cumplir el plazo:
- **Revisa el código:** Evalúa las partes comprometidas y refactóralas.
- **Incrementa la cobertura de pruebas:** Agrega pruebas unitarias y de integración para las áreas con código temporal.
- **Aprende de la experiencia:** Analiza qué causó el plazo ajustado y ajusta los procesos (como planificación o estimaciones) para evitar futuras situaciones similares.

Aunque no es ideal escribir "mal código," puedes minimizar el impacto con documentación, encapsulación, y planificación. Siempre prioriza una refactorización inmediata después de cumplir con los plazos. Esto garantizará que el proyecto siga siendo mantenible y escalable en el futuro.

<a id="cod58"></a>

### **¿Qué es un Code Smell?**

[Volver al indice](#cod-base)

Son sintomas de que el codigo no es todo lo limpio que deberia. Hay distintos tipos de code smells como:

- En los comentarios
- En el entorno de desarrollo
- En las funciones
- Code Smells Generales
- Code Smells en Java u otros lenguajes
- En los nombres
- En los tests

Nadie se va a volver experto teniendo esta lista de memoria, nunca va a ser una lista completa de todos los problemas que puede tener el código.

<a id="cod59"></a>

### **Code Smells en los Tests**

[Volver al indice](#cod-base)

**Tests insuficientes** Se deben probar todas las posibilidades de una funcion. Si no se prueban todas las condiciones, los tests son insuficientes.

**No usar una herramienta de cobertura** Se muestran claramente las lineas que no estan siendo cubiertas por los tests. Son faciles de instalar.

**Evitar los tests triviales** Aunque una funcionalidad parezca trivial, hacer un test igual. Es una gran fuente de bugs.

**Test ignorado o comentado** Segun Robert C. Martin “A veces tenemos dudas sobre los detalles de una funcionalidad, porque los requisitos no están claros. Podemos expresar estas dudas con un test comentado, o con un test con `@ignore`. La opcion que elijas depende de si tu test compila o no"

Si hay dudas en los tests, hay dudas en los requisitos

**No testear condiciones limite** Son los mayores generadores de bugs, hay que testearlos. No solo testear las condiciones normales del código.

**No buscar bugs de forma exhaustiva** Los bugs tienden a estar cerca unos de otros. Si encontrás un bug, revisar, pueden haber más.

**Los patrones de fallo son reveladores** Si vemos que una funcion falla cuando mandamos un String con caracteres en blanco, debemos manejar esto.

**La cobertura de codigo es reveladora** Se pueden encontrar los motivos de fallo con las lineas que no estan analizadas

**Los tests deben ser rápidos** Si los tests tardan mucho, no se van a correr. Deben ser rápidos para que se corran seguido.

<a id="cod60"></a>

### **Code Smells en Codigo**

[Volver al indice](#cod-base)

**Mezclar muchos lenguajes en un solo fichero** En el ejemplo podemos ver que se mezclan Java y HTML en un mismo archivo. A veces puede ser razonable (CSS + JS), pero en casos como el ejemplo, solo ensucia el codigo.

```java
public String getUserProfilePage (User user) {
  return "<html> <body>...."
}
```

**No usar variables explicatorias** Crear variables intermedias hace que el codigo quede mucho mas claro. Por ejemplo, en la imagen podemos ver la primera imagen que es una funcion de una sola linea, que queda mucho mas clara en su segunda version, agregando una variable intermedia para calcular un cateto.

```javascript
public Double calcularArea(Double hipotenusa, Double cateto) {
    return Math.sqrt(hipotenusa*hipotenusa - cateto*cateto) * cateto / 2;
}

public Double calcularArea (Double hipotenusa, Double cateto) {
    Double cateto_2 = Math.sqrt(hipotenusa*hipotenusa - cateto*cateto);

    return cateto * cateto_2 / 2;
}
```

No se debe sacrificar claridad por menos lineas.

**Duplicidad** Tener codigo repetido entre funciones y clases es algo común, es una oportunidad perdida para generar una nueva abstraccion. Si tenemos duplicidad entre varias clases, puede indicar la necesidad de una nueva jerarquia.
Ademas es dificil de mantener, ya que si cambiamos una parte de ese codigo, debemos repetirlo en todos los lugares en donde se encuentra.

**Demasiada Información** Poner demasiados metodos, demasiados get/set, etc, cuando no sabemos si hace falta. Los modulos bien definidos tienen interfaces muy pequeñas que permiten hacer mucho con pocos metodos.

- Exponer solo lo necesario
- Esconde los datos, ofrece operaciones, que no todo tenga get/set si no es necesario.

**Código Muerto** Código que no se usa debe ser eliminado. Por ejemplo:

- Funciones que no se llaman
- Condiciones en el switch/case que no se dan nunca, al igual que con el if
- try/catch con excepciones que nunca se lanzan

Se debe borrar sin miedo, Git recuerda todo.

**Basura** Son partes que no sirven de nuestro codigo, como por ejemplo:

- Constructores sin implementacion puestos por defecto
- Getters y Setters de todas las variables privadas de una clase que puede ser que no se usen nunca
- Variables y funciones que no se usan nunca

**Inconsistencia**

- Si haces algo de una forma, hacelo siempre de la misma forma, tanto nombre como logica
- Si, por ejemplo, se elije la palabra “delete” para eliminar algo, no cambiarlo en otro lado por “remove”
- Esto hace que nuestro codigo sea mucho mas facil de leer para otros y para uno mismo

**Distancia Vertical** Las variables y funciones deben estar cerca de donde se usen

- Las variables locales deben ser declaradas antes de ser usadas
- Las funciones privadas deben estar debajo de la primera funcion que las usa
- No queremos que codigo local este puesto a muchas lineas de distancia de donde es usado ya que hace que sea complicado de leer

**Comportamiento obvio no implementado**

```
Month month = MonthDate.StringToMonth(String monthName);
```

Esperamos que esta funcion pase el parametro `July` a un enum `Month.JULY`. Que haga lo mismo con `jULY` y `july`, si el codigo no hace lo que se espera en estos casos, se pierde confianza en el, y se debe estar revisando lo que hace cada linea.


**Listas de imports muy largas** Si usas dos o mas clases de un paquete, importar directamente todo el paquete.

**Herencia de constante** Se debe evitar el uso de herencia para estos mecanismos. Por ejemplo `Game` hereda de `GameConstants`. Se debe usar `GameConstants.NUMBER_OF_LEVELS` o importarlo directamente. No se debe usar herencia para crear estos mecanismos.

```jsx
public class EasyGame extends Game {
    private int currentLevel;
    public Double calculateProgress(){
        return currentLevel / NUMBER_OF_LEVELS;
    }
}

public abstract class Game implements GameConstants {
    public Double calculateProgress();
}

public interface GameConstants {
    public static final int NUMBER_OF_LEVELS = 10;
}
```

**Enums vs Constantes** Usar enums siempre y cuando sea posible. Es mas potente en funcionalidad y claridad. Tambien nos permiten declarar funciones abstractas para cada valor, como `numberOfLevels` por nivel.

```jsx
public class Game {
  private int currentLevel;
  DifficultyLevel difficultyLevel;

  public int levelsLeft() {
    return difficultyLevel.numberOfLevels() - currentLevel;
  }
}

public enum DifficultyLevel {
  EASY {
    public int numberOfLevels() {
      return 20;
    }
  },
  MEDIUM {
    public int numberOfLevels() {
      return 30;
    }
  },
  HARD {
    public int numberOfLevels(){
      return 50;
    }
  }

  public abstract int numberOfLevels();
}
```

Se evitan los condicionales por nivel de dificultad en el ejemplo.

<a id="cod61"></a>

### **Code Smells en Nombres**

[Volver al indice](#cod-base)

**Nombres en nivel de abstraccion incorrecto** Si tenemos una clase `FtpFileDownloader` que implementa la interfaz, ya no recibiria una web url.

```jsx
public interface FileDownloader {
  File download(String webUrl);
}
```

**No usar nomenclatura estandar**

- Por ejemplo, usar la palabra `Singleton` para clases que usen ese patrón, la palabra `Controller` cuando se trata de un controlador, etc..
- Sobreescribir metodos `toString` que ya tienen las clases Java en lugar de crear un metodo propio. No reinventar la rueda

**No usar nombres largos para largos alcances** Se pueden usar nombres de pocos caracteres para alcances cortos, pero si el alcance es mayor, el nombre largo es necesario. El ejemplo de un alcance acotado es en el caso de `i` para un bucle.

```jsx
for (int i = 0; i < numberOfRequests; i++) {
  processRequest(requests.get(i));
}

// NOPE
public class Car {
  private int hp;
}

// SIP
public class Car {
  private int horsePower;
}
```

**Usar Codificaciones**

- Evitar los nombres con codificaciones que distraigan al lector
- Un ejemplo malo son las variables, por ejemplo `intVariable` o `strName`. No es necesario agregar el prefijo `str` si ya se sabe que se trata de un String.

**Ocultar efectos secundarios** Si existen efectos secundarios, los nombres de las variables y funciones deben describirlo. Por ejemplo, en el caso de esta funcion `login`, se hace mas de una cosa, y no es aclarado. Se debe separar en dos funciones o cambiar el nombre (recomendable la primera)

```jsx
public Boolean login (User user) {
    User databaseUser = userRepository.findByUsername(user.getUsername());

    if (validCredentials(user, databaseUser)) {
        return true;
    }

    // Esto esta de mas
    if (checkNumberOfTries(user.getIp()) > MAX_TRIES) {
        blockUser(user);
    }

    return false;

}
```

<a id="cod62"></a>

### **Code Smells en Comentarios**

[Volver al indice](#cod-base)

**Informacion Inapropiada** Todo comentario que contenga informacion que este mejor documentada en otro sistema debe ser movida.
Por ejemplo en este caso, el autor del codigo ya esta siendo registrado por Git, no es necesario que haya un comentario que lo indique, lo mismo con los TODO

DON´T

```java
//@author Denisse Lemos
public class Comments {}
```

**Comentario Obsoleto** Los comentarios deben estar actualizados al codigo actual para que no confundan al programador.

**Comentario Redundante** Comentarios innecesarios de, por ejemplo, javadoc. Que no aportan valor al codigo

**Comentario mal redactado** Los comentarios utiles deben estar bien redactados, sin faltas de ortografia y directo.

**Código Comentado** Nunca dejar codigo comentado, ya que se guarda el registro de cambios en Git. El codigo que no se necesita, se borra.

<a id="cod63"></a>

### **Code Smells en el entorno**

[Volver al indice](#cod-base)

**Que la compilacion requiera mas de un paso** Se debe ser capaz de hacer un checkout del codigo fuente con un solo comando y compilarlo con otro solo comando. Si el codigo es simple y no tiene dependencias, es facil de hacer, pero a medida que va creciendo en dependencia, puede ser que se necesite compilar las dependencias por separado para luego compilar el proyecto, para esto se crearon muchas herramientas para automatizar el build del codigo. En Java el mas usado es Maven o Apache, en JS es Grunt, entre otros…

```
git clone {nuestroProyecto}
mvn install
```

**Los test requieren mas de un paso** Los test se deben ejecutar con un unico comando facil, rapido y obvio, al igual que la compilacion. Si esto no se cumple, pueden haber altas chances de que los test no suelan correrse por el trabajo que conllevan en si mismos. La idea es ejecutarlos muy seguido.
Tambien hay herramientas de automatizacion para los tests, con comandos especificos para los tests. En maven existe `mvn test`

<a id="cod64"></a>

### **Code Smells en Funciones**

[Volver al indice](#cod-base)

**Demasiados parametros / argumentos** Las funciones mas faciles de leer son las que no reciben parametros. Mientras mas parametros, mayor es la complejidad. No se recomiendan mas de 3 parametros, y si es el caso, se recomienda refactorizar, separando esta funcion en varias funciones mas pequeñas o encapsulando los argumentos en una clase

**Intenciones ocultas dificiles de apreciar**

- El codigo debe ser lo mas expresivo posible
- De nada vale un codigo que ocupa poco espacio si no lo entendemos. Mejor aclarar lo mas posible antes que priorizar el ahorro de caracteres

En este ejemplo podemos ver que se ahorraron muchas letras en los nombres de las funciones, haciendo que sea muy confuso de leer

```javascript
public int otCalc(){
  return isWkn * wkRte + (int) Math.round(0.5 * wkRte * ...);
}
```

**Una función recibe parametros de salida** Los argumentos de salida con los que se le pasan a una funcion para que esta guarde el resultado, en vez de usar un return, como en el caso del ejemplo el parametro `int* result`, que solo sirve para guardar el resultado en una variable global. Siempre se debe usar el `return`
Estos argumentos son muy usados en lenguajes como C.

```c
#include <stdio.h>

void suma (int input1, int input2, int* result) {
  *result = input1 + input2;
}

int main() {
  int result;
  suma(1,2,&result);
  printf("Result: %d\n", result);

  return 0;
}
```

**Comportamiento incorrecto en los limites del codigo** Muchos bugs del codigo estan en los limites de los condicionales o bucles de los codigos.

```java
private final List<String> thirtyOneDayMonths = Arrays.asList("January", "March", "May", "July", "August", "October", "December");

private final List<String> thirtyDayMonths = Arrays.asList("April", "June", "September", "November");

public int getNumberOfDaysInMonth(String month) {
  if (thirtyOneDayMonths.contains(month)) {
    return 31;
  }
  if (thirtyDayMonths.contains(month)) {
    return 30;
  }
  return 28;
}
```

Si un año es biciesto, el codigo seria incorrecto

**No encapsular las condiciones limite** Las condiciones limite son los focos mas importantes de bug. Es importante encapsularlas bien y tenerlas bien definidas.
Si tenemos que definir una variable mas para que quede mas claro, lo hacemos.

```jsx
if (level + 1 == game.getMaxLevel()) {
  loadFinalBoss();
}

Integer nextLevel = level + 1;
if (nextLevel == game.getMaxLevel()) {
  loadFinalBoss();
}
```

**Metodos estaticos inapropiados** Los metodos estaticos no operan bajo ninguna instancia. Se debe pensar si un metodo es realmente estatico antes de declararlo como tal.
En el caso del ejemplo, deberia ser una funcion de `Employee` si deseamos que sea polimorfica y calcule distinto dependiendo del tipo de Employee.

```java
public class HourlyPayCalculator {
    public static Double calculatePay(Employee employee, Double overtimeRate)
}
```

**No ser precisos** Se debe tener precision sobre las decisiones que se tomen sobre el codigo. No ser vago con las decisiones.

- Si se va a calcular dinero, usar enteros y manejar el redondeo
- Si se va a tratar con concurrencia, asegurar que no hayan carreras criticas
- Si hay metodos que pueden lanzar excepciones, tratarlas.

**Darle mas peso a convenciones que a la estructura** Las convenciones son importantes pero el diseño del software es mas importante. No uses MVC si no es la apropiada para tu codigo.

**Navegacion Transitiva**

- Un modulo debe saber lo menos posible sobre los demás
- Si A usa a B, y B usa a C, evitar `a.getB().getC()`, desde A hay que acceder a B para acceder a C. Y si queremos intercalar una clase D, tenemos que modificar estos llamados agregando `getD()` en el medio.
- Segun la Ley de Demeter hay que escribir codigo timido, A debe ser timido y no llamar a una funcion de C a traves de B. Debe conocer lo menos posible sobre los demás.
- Asi es como se forman las arquitecturas rigidas, si surge la necesidad de modificarla, será muy costoso.

**Usar condicionales negativos** Siempre es mejor usar condicionales positivos. Se debe cambiar el nombre a lo que sea necesario

```java
if (!isNotValid) {
    // ...
}

if (isValid) {
    // ...
}
```

**Envidia del ambito de otra clase** Cuando una clase esta interesada en demasiada info de otra clase. Es un problema de diseño. Lo ideal es que los metodos de una clase esten interesadas en su propia clase, y no tenga que usar variables ni funciones de otra clase.
En el ejemplo, `GameRankCalculator` tiene "envidia" de la clase `user`, ya que pide demasiadas cosas del mismo

```java

public class GameRankCalculator {
    public Rank calculateRank(User user) {
        Double hoursPlayed = user.getHoursPlayed();
        int gamesPlayed = user.getGamesPlayed();
        int achievements = user.getAchievements();

        Double winPercentage = gamesPlayed / user.getGamesWon();
        Double rank = hoursPlayed * gamesPlayed * achievements * winPercentage;

        return new Rank(rank);
    }
}
```

**Clases base dependen de las derivadas** Las clases base no deben saber nada de sus derivadas. En el ejemplo, `PlaneGeometry` no deberia tener logica asociada ni a `Rectangle` ni a `Triangle` que lo heredan, deberian encargarse ellos de sus especificaciones de clase. La clase base no deberia depender de quien la hereda.
Se recomendaria aplicar `getNumberOfSides` como abstracto.

```java
public class PlaneGeometry {
    public int getNumberOfSides() {
        if (this instanceof Rectangle) {
            return 4;
        }
        if (this instanceof Triangle) {
            return 3;
        }
        return 0;
    }
}

public class Rectangle extends PlaneGeometry {}
public class Triangle extends PlaneGeometry {}
```

**Ser arbitrario** Si la estructura del codigo es arbitraria, otros haran lo mismo sobre el, ensuciando mas el codigo. Las decisiones deben ser consistentes.

**No usar convenciones** Es importante seguir las normas establecidas para un lenguaje de programacion en particular, como las formas de llamar a las variables, tamaños de lineas, etc..
Todo el equipo debe seguir las mismas normas, si no, el codigo no sera homogeneo

**Responsabilidad fuera de lugar**

- El codigo debe ser escrito en el lugar mas natural para un lector
- No escribir el codigo donde mas convenga, si no, donde se esperaria leer
- Esto puede ir acoplado al ejemplo de PI acoplado con Circle, cuando quedaria mas claro que exista en una clase de constantes matematicas llamada `Math`

**Funciones que no dicen lo que hacen** Los nombres de las funciones deben ser explicativos, por ejemplo:

```
Date newDate = oldDate.add(5)
```

¿Qué estamos agregando acá? ¿Son 5 horas, minutos, segundos, dias?

**No conocer el algoritmo** Se deben entender los algoritmos complicados, si no los entendemos, el codigo no será todo lo limpio que puede ser. Si no se entiende, se debe refactorizar.

**Pasar Flags como argumento** Un flag, boolean, indica que la funcion hace mas de una cosa. Cada funcion debe hacer unicamente una cosa.

```java
private static final Double PREMIUM_DISCOUNT_FACTOR = 0.2;
private static final Double REGULAR_DISCOUNT_FACTOR = 0.1;

public Double calculateDiscount(Item item, boolean isPremium) {
  if (isPremium) {
    return item.getPrice() * PREMIUM_DISCOUNT_FACTOR;
  }
  return item.getPrice() * REGULAR_DISCOUNT_FACTOR;
}
```

**Funciones muertas — Dead Functions** Son funciones que no se llaman nunca. Deben eliminarse, y si llegamos a necesitarlas en un futuro, se guardan en el historial de Git.

<a id="cod65"></a>

### **Single Responsibility Principle**

- Puede ser un nombre confuso. No quiere decir que un modulo debe hacer una sola cosa, si no que **un modulo debe tener una unica razon para cambiar**
- Un modulo debe ser responsable de solo un usuario o interesado del sistema
- Un modulo es una clase dentro de POO.

Hay ciertos sintomas que diagnostican el no cumplimiento de SRP

```javascript
// Clase con una única responsabilidad: gestionar la lógica relacionada con el manejo de usuarios
class UserManager {
    // Método para agregar un nuevo usuario a la base de datos
    addUser(user) {
        // Lógica para agregar un usuario a la base de datos
        console.log(`User added: ${user.name}`);
    }

    // Método para enviar un correo electrónico de bienvenida a un nuevo usuario
    sendWelcomeEmail(user) {
        // Lógica para enviar un correo electrónico de bienvenida al nuevo usuario
        console.log(`Welcome email sent to: ${user.email}`);
    }

    // Método para generar un informe de usuarios registrados
    generateUserReport() {
        // Lógica para generar un informe de usuarios registrados
        console.log("Generating user report...");
    }
}

// Clase que representa un usuario del sistema
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Uso de las clases
const userManager = new UserManager();

const newUser = new User("John", "john@example.com");
userManager.addUser(newUser); // Output: User added: John
userManager.sendWelcomeEmail(newUser); // Output: Welcome email sent to: john@example.com
userManager.generateUserReport(); // Output: Generating user report...

```

<a id="cod66"></a>

### **Open/Closed Principle**

[Volver al indice](#cod-base)

**Un artefacto de software debe estar abierto para su extension, pero cerrado para su modificacion**. Se debe poder aumentar la funcionalidad sin modificar el funcionamiento ya existente.

¿Cómo se consigue?

- Separando el Software en componentes de alta cohesion.
- Que la direccion de las dependencias sea la correcta (se vera con mas detalle mas adelante).
- Se deben proteger a los componentes de alto nivel de los cambios en los componentes de bajo nivel.

```java
// Clase base para representar formas
class Shape {
    area() {
        // Método para calcular el área de la forma
        throw new Error("This method must be overridden");
    }
}

// Clase para representar un rectángulo
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        // Sobrescribimos el método para calcular el área de un rectángulo
        return this.width * this.height;
    }
}

// Clase para representar un círculo
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        // Sobrescribimos el método para calcular el área de un círculo
        return Math.PI * this.radius ** 2;
    }
}

// Uso de las clases
const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);

console.log(rectangle.area()); // Output: 20
console.log(circle.area()); // Output: 28.274333882308138

```

<a id="cod67"></a>

### **Interface Segregation Principle**

[Volver al indice](#cod-base)

El Principio de Segregación de Interfaces (ISP) establece que una clase no debe depender de interfaces que no utiliza. En otras palabras, las interfaces deben ser lo suficientemente específicas para cada cliente, evitando que los clientes dependan de métodos que no necesitan.

Supongamos que tenemos una interfaz `Worker` (Trabajador) que define diferentes acciones que un trabajador puede realizar. Sin embargo, algunos tipos de trabajadores solo necesitan implementar un subconjunto de estas acciones. Aplicaremos el ISP para dividir la interfaz `Worker` en interfaces más específicas:

```javascript
// Interfaz original para un trabajador
class Worker {
    work() {}
    eat() {}
    sleep() {}
}

// Interfaz para un trabajador que solo necesita trabajar
class WorkOnlyWorker {
    work() {}
}

// Interfaz para un trabajador que solo necesita comer
class EatOnlyWorker {
    eat() {}
}

// Interfaz para un trabajador que solo necesita dormir
class SleepOnlyWorker {
    sleep() {}
}

// Clase para un programador que solo necesita trabajar
class Programmer extends WorkOnlyWorker {
    work() {
        console.log("Programming...");
    }
}

// Clase para un camarero que solo necesita trabajar y comer
class Waiter extends WorkOnlyWorker, EatOnlyWorker {
    work() {
        console.log("Taking orders...");
    }

    eat() {
        console.log("Eating during break...");
    }
}

// Uso de las clases
const programmer = new Programmer();
const waiter = new Waiter();

programmer.work(); // Output: Programming...
waiter.work(); // Output: Taking orders...
waiter.eat(); // Output: Eating during break...

```

En este ejemplo, la interfaz `Worker` se divide en interfaces más específicas (`WorkOnlyWorker`, `EatOnlyWorker` y `SleepOnlyWorker`) que contienen solo los métodos necesarios para cada tipo de trabajador. Las clases concretas (`Programmer` y `Waiter`) implementan las interfaces relevantes para su tipo de trabajo, evitando así la dependencia de métodos que no necesitan. Esto cumple con el Principio de Segregación de Interfaces.

<a id="cod68"></a>

### **Liskov Substitution Principle**

[Volver al indice](#cod-base)

El Principio de Sustitución de Liskov (LSP) establece que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar la corrección del programa. En otras palabras, si tenemos una clase base y una subclase que la extiende, deberíamos poder usar un objeto de la subclase en lugar de un objeto de la clase base sin cambiar el comportamiento del programa.

Supongamos que tenemos una clase `Rectangle` (Rectángulo) y una subclase `Square` (Cuadrado). Según el LSP, deberíamos poder usar un objeto de tipo `Square` donde se espera un objeto de tipo `Rectangle` sin alterar el comportamiento esperado del programa:

```javascript
// Clase base para representar un rectángulo
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Subclase para representar un cuadrado
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

// Función para calcular el área de un rectángulo
function calculateArea(rectangle) {
    rectangle.setWidth(5);
    rectangle.setHeight(4);
    console.log("Area:", rectangle.area());
}

// Uso de las clases
const rectangle = new Rectangle(5, 4);
const square = new Square(5);

calculateArea(rectangle); // Output: Area: 20
calculateArea(square); // Output: Area: 25

```

En este ejemplo, la clase `Square` es una subclase de `Rectangle` y sobrescribe los métodos `setWidth()` y `setHeight()` para asegurarse de que siempre tenga la misma anchura y altura. Aunque `Square` es una subclase de `Rectangle`, podemos usar un objeto de tipo `Square` donde se espera un objeto de tipo `Rectangle` (como en la función `calculateArea()`) sin cambiar el comportamiento esperado del programa. Esto cumple con el Principio de Sustitución de Liskov.