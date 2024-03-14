# Codigo Limpio 

### 💙 ¿De qué trata el código limpio?

- Es un codigo facil de leer, entender y modificar
- Se recomienda leer el código de otras personas para aprender como son las distintas implementaciones para seguir limpiando nuestro código.
- No es posible escribir codigo perfecto a la primera, se consigue mediante un proceso de iteracion continuo que lo va mejorando
- La refactorizacion es segura ya que esta pensada la existencia de los Test Unitarios
- Es recomendable programar en ingles ya que los lenguajes estan en ingles y la mayoria del codigo tambien, las librerias, etc..

### 💙**Nombres Significativos**

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

### 💙**Funciones**

- Las funciones deben ser claras, concisas, faciles de leer y modificar
- Deben ser pequeñas, deben hacer una unica cosa, un unico nivel de abstraccion. Debemos separar lo mas posible todas las funciones, haciendo que sean reutilizables.
- No deben recibir muchos parametros
- No tienen efectos secundarios por fuera de su proposito principal
- Devuelven excepciones en lugar de codigos de error

### 💙**Unico Nivel de abstraccion**

Separar las responsabilidades en las entidades correspondientes.

DON´T

```
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

```
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

### 💙**Pocos Argumentos / Parametros**

Se deben evitar las funciones que reciben mas de 3 argumentos, muchos argumentos es una mala encapsulación. La mejor funcion es la que menos argumentos recibe.

DON´T

```
public User createUser(String username, String password, String name, String lastname, String address);public Circle createCircle(double x, double y, double radius)
```

DO

```
public User createUser(UserFormData userFormData)// Pasamos x e y a un objeto "Point" (centro del circulo) que es mucho mas explicativo
public Circle createCircle(Point center, double radius)
```

### 💙**Excepciones en lugar de codigos de error**

Conviene encerrar todo nuestro codigo que puede fallar dentro de un try/catch y manejarlo mediante el mismo que logear los errores al momento en que suceden, el flujo normal queda mucho mas claro.

DON´T

```
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

```
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

```
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

### 💙**Comentarios**

Se nos enseña mucho que debemos comentar mucho nuestro codigo. El buen codigo deberia poder leerse con casi ningun comentario.

- Solo agregar comentarios cuando es estrictamente necesario
- Los comentarios se desactualizan muy rapidamente ya que el codigo cambia mucho, son muy complicados de mantener, por eso no son aconsejables
- Si el codigo tiene demasiados comentarios es porque no se entiende (Refactorizacion necesaria) o porque los comentarios son demasiado obvios (eliminarlos en ese caso)
- Los comentarios de Javadocs en una API publica si son comentarios utiles.

DON´T

```
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

```
// --- Reemplazamos la condicion confusa por una funcion que resume lo que hace ---

if(isSecure(password))
// --- Se explican cosas que suman al codigo, por ejemplo, que busca matchear un regex que no se puede ver a simple vista ---
// Matches Date in format 17-09-2022 18:05:15
Pattern.matches(regexDate, date);

// --- Se dejan cosas en TODO para un futuro ---
// TODO expect this method to change when..
public void login (User user) {}
```

### 💙**Formato Codigo**

Hay dos tipos de formato:

- Vertical: Densidad, distancia y orden
- Horizontal: Densidad e Indentación

Todos los miembros de un equipo deben escribir bajo las mismas reglas (Se recomienda el Styleguide de Google)

### 💙**Densidad**

Numero de lineas que hay en un bloque de codigo en concreto. Deben haber lineas en blanco que separen conceptos.

### 💙Densidad Horizontal

Mismo concepto pero de manera horizontal, entre caracteres

DON´T

```
public Integer tripleSum(Integer a, Integer b, Integer c){
   if (a==null||b==null||c==null){
       return null;
   }
   return a+b+c;
}
```

DO

```
public Integer tripleSum(Integer a, Integer b, Integer c) {
   if (a == null || b == null|| c == null){
       return null;
   }
   return a + b + c;
}
```

### 💙**Orden**

El orden de las funciones es para facilitar la lectura. En el ejemplo, primero ponemos la funcion `a()` que a su vez, consume a `b()` y `c()`, haciendo que la lectura sea ordenada.

```
public void a(){
    b();
    c();
}public void b(){}public void c(){}
```

### 💙**Distancias**

Se deben agrupar los conceptos relacionados y separar los conceptos que son diferentes con lineas en blanco, siempre y cuando sean necesarios.

DON´T

```
public String getUserConfig(){
    Session session = getSession();    User currentUser = session.get(username);    String configString = null;    if (currentUser.isValid()){
        Config config = currentUser.getConfig();
    }    return configString;
}
```

DO

```
public String getUserConfig(){
    Session session = getSession();
    User currentUser = session.get(username);    String configString = null;
    if (currentUser.isValid()){
        Config config = currentUser.getConfig();
    }    return configString;
}
```

### 💙**Indentación**

- Se recomiendan dos o cuatro espacios de indentacion
- El maximo recomendado de caracteres por linea es de 100 caracteres, si no, se tendrá que partir la linea
- Se deben seguir siempre las mismas reglas

DON´T

```
public Integer tripleSum(Integer a, Integer b, Integer c){
if (a==null||b==null||c==null){
return null;
}
return a+b+c;
}
```

## 💙**Gestión de errores**

- Se debe buscar un codigo limpio pero tambien robusto en si mismo
- La gestion de errores puede ensuciar el codigo, hay que prestarle especial atención
- Se deben devolver excepciones en lugar de códigos de error
- Se deben usar excepciones unchecked
- No devolver ni pasar `null`

### 💙**Excepciones en lugar de códigos de error**

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

### 💙**Unchecked Exceptions**

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

### 💙**No Devolver null**

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

---

# Code Smells

# 🟢 **¿Qué es un Code Smell?**

Son sintomas de que el codigo no es todo lo limpio que deberia. Hay distintos tipos de code smells como:

- En los comentarios
- En el entorno de desarrollo
- En las funciones
- Code Smells Generales
- Code Smells en Java u otros lenguajes
- En los nombres
- En los tests

Nadie se va a volver experto teniendo esta lista de memoria, nunca va a ser una lista completa de todos los problemas que puede tener el código.

# 🟢**Code Smells en los Comentarios**

Hay distintos sintomas dentro de un Code Smells. En este primer punto son:

### 👉**Informacion Inapropiada**

Todo comentario que contenga informacion que este mejor documentada en otro sistema debe ser movida.

Por ejemplo en este caso, el autor del codigo ya esta siendo registrado por Git, no es necesario que haya un comentario que lo indique, lo mismo con los TODO

DON´T

```
//@author Denisse Lemos
public class Comments {}
```

### 👉**Comentario Obsoleto**

Los comentarios deben estar actualizados al codigo actual para que no confundan al programador.

### 👉**Comentario Redundante**

Comentarios innecesarios de, por ejemplo, javadoc. Que no aportan valor al codigo

### 👉**Comentario mal redactado**

Los comentarios utiles deben estar bien redactados, sin faltas de ortografia y directo.

### 👉**Código Comentado**

Nunca dejar codigo comentado, ya que se guarda el registro de cambios en Git. El codigo que no se necesita, se borra.

# 🟢**Code Smells en el entorno**

### 👉**Que la compilacion requiera mas de un paso**

Se debe ser capaz de hacer un checkout del codigo fuente con un solo comando y compilarlo con otro solo comando. Si el codigo es simple y no tiene dependencias, es facil de hacer, pero a medida que va creciendo en dependencia, puede ser que se necesite compilar las dependencias por separado para luego compilar el proyecto, para esto se crearon muchas herramientas para automatizar el build del codigo. En Java el mas usado es Maven o Apache, en JS es Grunt, entre otros…

```
git clone {nuestroProyecto}
mvn install
```

### 👉**Los test requieren mas de un paso**

Los test se deben ejecutar con un unico comando facil, rapido y obvio, al igual que la compilacion. Si esto no se cumple, pueden haber altas chances de que los test no suelan correrse por el trabajo que conllevan en si mismos. La idea es ejecutarlos muy seguido.

Tambien hay herramientas de automatizacion para los tests, con comandos especificos para los tests. En maven existe `mvn test`

# 🟢**Code Smells en Funciones**

### 👉**Demasiados parametros / argumentos**

Las funciones mas faciles de leer son las que no reciben parametros. Mientras mas parametros, mayor es la complejidad. No se recomiendan mas de 3 parametros, y si es el caso, se recomienda refactorizar, separando esta funcion en varias funciones mas pequeñas o encapsulando los argumentos en una clase

### 👉**Una función recibe parametros de salida**

Los argumentos de salida con los que se le pasan a una funcion para que esta guarde el resultado, en vez de usar un return, como en el caso del ejemplo el parametro `int* result`, que solo sirve para guardar el resultado en una variable global. Siempre se debe usar el `return`

Estos argumentos son muy usados en lenguajes como C.

```
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
### 👉**Pasar Flags como argumento**

Un flag, boolean, indica que la funcion hace mas de una cosa. Cada funcion debe hacer unicamente una cosa.

```
private static final Double PREMIUM_DISCOUNT_FACTOR = 0.2;
private static final Double REGULAR_DISCOUNT_FACTOR = 0.1;

public Double calculateDiscount(Item item, boolean isPremium) {
  if (isPremium) {
    return item.getPrice() * PREMIUM_DISCOUNT_FACTOR;
  }
  return item.getPrice() * REGULAR_DISCOUNT_FACTOR;
}

```

### 👉**Funciones muertas — Dead Functions**

Son funciones que no se llaman nunca. Deben eliminarse, y si llegamos a necesitarlas en un futuro, se guardan en el historial de Git.

# 🟢**Code Smells Generales**

### 👉**Mezclar muchos lenguajes en un solo fichero**

En el ejemplo podemos ver que se mezclan Java y HTML en un mismo archivo. A veces puede ser razonable (CSS + JS), pero en casos como el ejemplo, solo ensucia el codigo.

```
public String getUserProfilePage (User user) {
  return "<html> <body>...."
}
```

### 👉**Comportamiento obvio no implementado**

Por ejemplo tenemos la siguiente función:

```
Month month = MonthDate.StringToMonth(String monthName);
```

Esperamos que esta funcion pase el parametro `July` a un enum `Month.JULY`. Que haga lo mismo con `jULY` y `july`, si el codigo no hace lo que se espera en estos casos, se pierde confianza en el, y se debe estar revisando lo que hace cada linea.

### 👉**Anular mecanismos de seguridad**

Deshabilitar warnings del compilador, ignorar o comentar tests fallidos, etc.. Por algo estan ahi!

### 👉**Duplicidad**

Tener codigo repetido entre funciones y clases es algo común, es una oportunidad perdida para generar una nueva abstraccion. Si tenemos duplicidad entre varias clases, puede indicar la necesidad de una nueva jerarquia.

Ademas es dificil de mantener, ya que si cambiamos una parte de ese codigo, debemos repetirlo en todos los lugares en donde se encuentra.

### 👉**Código en el nivel de abstracción incorrecto**

El método `changeRadioChannel` esta mal, ya que no todos los vehículos tienen radio. El método no debería estar en esa clase tan general como lo es `Vehicle`

```
public class Vehicle() {
  public void turnOn();
  public void turnOff();
  public Integer getLeftAutonomyInKm();
  public void changeRadioChannel(RadioCHannel selectedChannel);
}
```

### 👉**Distancia Vertical**

Las variables y funciones deben estar cerca de donde se usen

- Las variables locales deben ser declaradas antes de ser usadas
- Las funciones privadas deben estar debajo de la primera funcion que las usa
- No queremos que codigo local este puesto a muchas lineas de distancia de donde es usado ya que hace que sea complicado de leer

### 👉**Inconsistencia**

- Si haces algo de una forma, hacelo siempre de la misma forma, tanto nombre como logica
- Si, por ejemplo, se elije la palabra “delete” para eliminar algo, no cambiarlo en otro lado por “remove”
- Esto hace que nuestro codigo sea mucho mas facil de leer para otros y para uno mismo

### 👉**Demasiada Información**

Poner demasiados metodos, demasiados get/set, etc, cuando no sabemos si hace falta. Los modulos bien definidos tienen interfaces muy pequeñas que permiten hacer mucho con pocos metodos.

- Exponer solo lo necesario
- Esconde los datos, ofrece operaciones, que no todo tenga get/set si no es necesario.

### 👉**Código Muerto**

Código que no se usa debe ser eliminado. Por ejemplo:

- Funciones que no se llaman
- Condiciones en el switch/case que no se dan nunca, al igual que con el if
- try/catch con excepciones que nunca se lanzan

Se debe borrar sin miedo, Git recuerda todo.

### 👉**Basura**

Son partes que no sirven de nuestro codigo, como por ejemplo:

- Constructores sin implementacion puestos por defecto
- Getters y Setters de todas las variables privadas de una clase que puede ser que no se usen nunca
- Variables y funciones que no se usan nunca

---

# Acronimos

### 👮 DRY

Don’t Repeat Yourself, si hay una pieza de programación que se repite en mas de un lugar, se debe crear una función de la misma

### 👮 SOLID

Son 5 principios

- Single Responsibility Principle
- Open Closed Principle
- Lisvok Substitution
- Interface Segregation
- Dependency Inversion

### 👮 KISS

Keep it Simple Stupid, no escribir codigo que nadie pueda entender o leer, mantener todo simple

### 👮 LOD

Law Of Demeter, quien puede hablar con quien, una unidad puede comunicarse solo con sus unidades cercanas

### 👮 SOC

Separation of Concerns, Cada unidad deberia tener una unica responsabilidad, un ejemplo es el patron MVC

### 👮 YAGNI

You Aren’t Gonna Need it! No escribir codigo de mas solo porque puede que lo necesites mas adelante. Implementar algo solo si es necesario en el momento

---

# Code Reviews

### ✅ Cuales son los beneficios de una Code Review?

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

### ✅ Que puede pasar si los evito?

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

Sin revisión de código, tu equipo tiene una mayor probabilidad de introducir problemas de seguridad que afecten a los usuarios finales. Estos problemas podrían llevar a brechas de datos sensibles, vulnerabilidad a ataques de ransomware y otras consecuencias negativas para tus clientes y la reputación de tu empresa..

### ✅ Que tipos de Code review existen?

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

---
