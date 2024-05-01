# C#

C# (leído en inglés "C Sharp" y en español "C Almohadilla") es el nuevo lenguaje de propósito general diseñado por Microsoft para su plataforma .NET.
Aunque es posible escribir código para la plataforma .NET en muchos otros lenguajes, C# es el único que ha sido diseñado específicamente para ser utilizado en ella, por lo que programarla usando C# es mucho más sencillo e intuitivo que hacerlo con cualquiera de los otros lenguajes ya que C# carece de elementos heredados innecesarios en .NET. Por esta razón, se suele decir que C# es el lenguaje nativo de .NET

### 💜 Caracteristicas de C#

- **Sencillez**. C# elimina muchos elementos que otros lenguajes incluyen y que son innecesarios en .NET. Por ejemplo: el código escrito en C# es autocontenido (no necesita de ficheros adicionales al propio fuente tales como ficheros de cabecera) y el tamaño de los tipos de datos básicos es fijo e independiente del compilador, sistema operativo o máquina para quienes se compile (no como en C++), lo que facilita la portabilidad del código.
- **Modernidad**. C# incorpora en el propio lenguaje elementos que a lo largo de los años ha ido demostrándose son muy útiles para el desarrollo de aplicaciones: tipo básico decimal (128 bits), instrucción foreach, tipo básico string, etc.
- **Orientación a objetos**. C# no admiten ni funciones ni variables globales sino que todo el código y datos han de definirse dentro de definiciones de tipos de datos, lo que reduce problemas por conflictos de nombres y facilita la legibilidad del código.
- **Orientación a componentes**. La sintaxis de C# permite definir cómodamente propiedades (similares a campos de acceso controlado), eventos (asociación controlada de funciones de respuesta a notificaciones) o atributos (información sobre un tipo o sus miembros).
- **Gestión automática de memoria**. Todo lenguaje de .NET tiene a su disposición el recolector de basura del CLR.

C# soporta todas las características propias del paradigma de programación orientada a
objetos: encapsulación, herencia y polimorfismo.

- **Encapsulación**: además de public, private y protected C# añade el modificador internal.
- C# sólo admite herencia simple.
- Todos los métodos son por defecto sellados y que los redefinibles hayan de
marcarse con el modificador virtual.
- **Seguridad de tipos**. # incluye mecanismos que permiten asegurar que los accesos a tipos de datos siempre se realicen correctamente:
    - Sólo se admiten conversiones entre tipos compatibles
    - No se pueden usar variables no inicializadas.
    - Se comprueba que los accesos a los elementos de una tabla se realice con
    índices que se encuentren dentro del rango de la misma.
    - C# incluye delegados, que son similares a los punteros a funciones de C++ pero siguen un enfoque orientado a objetos: pueden almacenar referencias a varios métodos simultáneamente, y se comprueba que los métodos a los que apunten tengan parámetros y valor de retorno del tipo indicado al definirlos.
    - Siempre se comprueba que los valores que se pasan en cada llamada a métodos que admitan un número indefinido de parámetros de un cierto tipo sean de los tipos apropiados.
- **Instrucciones seguras**. En C# se han impuesto una serie de restricciones en el uso de las instrucciones de control más comunes (toda condición está controlada por una expresión condicional, todo caso de un switch ha de terminar en un break o goto, etc.
- **Sistema de tipos unificado**. Todos los tipos de datos que se definan siempre derivarán, aunque sea de manera implícita, de una clase base común llamada System.Object, por lo que dispondrán de todos los miembros definidos en ésta clase (es decir, serán "objetos"). Esto también es aplicable a los tipos de datos básicos.
- **Extensibilidad de operadores.** C# permite redefinir el significado de la mayoría de los operadores -incluidos los de conversión, tanto para conversiones implícitas como explícitas- cuando se apliquen a diferentes tipos de objetos.
- **Extensibilidad de modificadores**. C# ofrece, a través del concepto de atributos, la posibilidad de añadir, a los metadatos del módulo resultante de la compilación de cualquier fuente, información adicional a la generada por el compilador que luego podrá ser consultada en tiempo ejecución a través de la biblioteca de reflexión de .NET. Esto, que más bien es una característica propia de la plataforma .NET y no de C#, puede usarse como un mecanismo para definir nuevos modificadores.
- **Versionable**. C# incluye una política de versionado que permite crear nuevas versiones de tipos sin temor a que la introducción de nuevos miembros provoquen errores difíciles de detectar en tipos hijos previamente desarrollados y ya extendidos con miembros de igual nombre a los recién introducidos.
- **Eficiente**. En principio, en C# todo el código incluye numerosas restricciones para asegurar su seguridad y no permite el uso de punteros. Sin embargo, y a diferencia de Java, en C# es posible saltarse dichas restricciones manipulando objetos a través de punteros. Para ello basta marcar regiones de código como inseguras (modificador unsafe) y podrán usarse en ellas punteros de forma similar a cómo se hace en C++, lo que puede resultar vital para situaciones donde se necesite una eficiencia y velocidad procesamiento muy grandes.
- **Compatible**. C# mantiene una sintaxis muy similar a C, C++ o Java que permite incluir directamente en código escrito en C# fragmentos de código escrito en estos lenguajes.
- Lenguaje orientado al desarrollo de componentes (módulos independientes de granularidad mayor que los objetos): propiedades, métodos y eventos; atributos (metadatos); documentación integrada con XML; "one-stop programming" (sin ficheros de cabecera, ni IDL, puede integrarse en páginas ASP... ¡al más puro estilo de Java!)
- Todo es un objeto: desaparece la distinción entre tipos primitivos y objetos de lenguajes como Java o C++ (sin penalizar la eficiencia como en LISP o Smalltalk).
- Software robusto y duradero: recolección de basura, excepciones, comprobación de tipos, ausencia de variables sin inicializar y de castings no seguros, gestión de versiones, eliminación de errores comunes

```csharp
using System;
class Hola
{
	static void Main( )
	{
		Console.WriteLine("¡Hola, mundo!");
		Console.ReadLine(); // Enter para terminar.
	}
}
```

### 💜 Comentarios

Un comentario es texto que incluido en el código fuente de un programa con la idea de facilitar su legibilidad a los programadores y cuyo contenido es, por defecto, completamente ignorado por el compilador.

```csharp
// En una línea, al estilo de C++
/*
	En múltiples líneas, como en C
*/
```

### 💜 Identificadores

Un identificador no es más que un nombre con el que identificaremos algún elemento de nuestro código, ya sea una clase, una variable, un método, etc.

- Deben comenzar por letra o subrayado (_).
- No pueden contener espacios en blanco.
- Pueden contener caracteres Unicode.
- Son sensibles a mayúsculas/minúsculas.
- No pueden coincidir con palabras reservadas (a no ser que tengan el prefijo @).

### 💜 Palabras reservadas

```csharp
abstract, as, base, bool, break, byte, case, catch, char, checked, class, const, continue,
decimal, default, delegate, do, double, else, enum, event, explicit, extern, false, finally,
fixed, float, for, foreach, goto, if, implicit, in, int, interface, internal, lock, is, long,
namespace, new, null, object, operator, out, override, params, private, protected, public,
readonly, ref, return, sbyte, sealed, short, sizeof, stackalloc, static, string, struct, switch,
this, throw, true, try, typeof, uint, ulong, unchecked, unsafe, ushort, using, virtual, void,
while
```

### 💜 Literales

Un literal es la representación explícita de los valores que pueden tomar los tipos básicos del lenguaje.

```csharp
123 // Int
0x7B // Hexadecimal
123U // Unsigned
123ul // Unsigned long
123L // Long
123.0 // Double
123f // Float
123D // Double
123.456m // Decimal
1.23e2f // Float
12.3E1M // Decimal
true
false
'A' // Simple character
'\u0041' // Unicode
'\x0041' // Unsigned short hexadecimal
'\n' // CR+LF
'\'' // Single quote
'\"' // Double quote
'\\' // Backslash
'\0' // Null
'\t' // Tabulador
```

### 💜 Operadores

Un operador es un símbolo formado por uno o más caracteres que permite realizar una determinada operación entre uno o más datos y produce un resultado.
C# proporciona un conjunto fijo de operadores, cuyo significado está definido para los tipos predefinidos, si bien algunos de ellos pueden sobrecargarse.
Tipos de operadores: aritméticos, lógicos, relacionales, manipulación de bits,
asignación, acceso a tablas, acceso a objetos, creación de objetos, información sobre tipos, etc. La siguiente tabla recoge los operadores de C# de mayor a menor precedencia:

| Categoria | Operadores |
| --- | --- |
| Operadores primarios | Grouping: (x)
Member access: x.y
Method call: f(x)
Indexing: a[x]
Post-increment: x++
Post-decrement: x--
Constructor call: new
Type retrieval: typeof
Arithmetic check on: checked
Arithmetic check off: unchecked |
| Operadores unarios | Positive value of: +
Negative value of: -
Not: !
Bitwise complement: ~
Pre-increment: ++x
Post-decrement: --x
Type cast: (T)x |
| Operadores multiplicativos | Multiply: *
Divide: /
Division remainder: % |
| Operadores aditivos | Add: +
Subtract: - |
| Operadores de desplazamiento | Shift bits left: <<
Shift bits right: >> |
| Operadores relacionales | Less than or equal to: <=
Greater than or equal to: >=
Type equality/compatibility: is
Type conversion: as |
| Igualdad | == |
| Desigualdad | ≠ |
| Bitwise AND | & |
| Bitwise XOR | ^ |
| Logical AND | && |
| Condicional ternario | ?: |
| Asignación | =, *=, /=, %=, +=, -=, <<=, >>=, &=,
^= |

### 💜 Asociatividad

Como siempre, es mejor utilizar paréntesis para controlar el orden de evaluación

```csharp
x = y = z se evalúa como x = (y = z)
x + y + z se evalúa como (x + y) + z
```

### 💜 Variables y constantes

```csharp
static void Main()
{
const float pi = 3.14f;
const int r = 123;
Console.WriteLine(pi * r * r);
int a;
int b = 2, c = 3;
a = 1;
Console.WriteLine(a + b + c);
}
```

El ámbito de una variable abarca desde su declaración hasta que termina el bloque en el que fue declarada. Dentro del ámbito de una variable, es un error declarar otra variable con el mismo identificador (aunque sea en un bloque interno):

```csharp
{
	int x;
	{
		int x; // Error!!!
	}
}
```

Siempre hay que asignarle un valor a una variable antes de utilizarla (de hecho, lo comprueba el compilador, como en Java).

```csharp
void Foo()
{
	string s;
	Console.WriteLine(s); // Error
}
```

---

# Namespaces

### 🟢 Concepto de namespaces (Espacios de nombres)

Del mismo modo que los archivos se organizan en directorios, los tipos de datos se organizan en espacios de nombres.
Por un lado estos espacios permiten tener más organizados los tipos de datos, lo que facilita su localización. De hecho, esta es la forma en que se encuentra organizada la librería de clases base (BCL) del Framework .NET, de modo que todas las clases más usadas en cualquier aplicación
pertenecen al espacio de nombres llamado System, las de acceso a bases de datos en `System.Data`, las de operaciones de entrada/salida en `System.IO`, etc.
Por otro lado, los espacios de nombres también permiten usar en un mismo programa varias clases con igual nombre si pertenecen a espacios diferentes. La idea es que cada fabricante defina sus tipos dentro de un espacio de nombres propio para que no hayan conflictos si
varios fabricantes definen clases con el mismo nombre y se quieren usar a la vez en un mismo programa. Para que esto funciones no han de coincidir los nombres los espacios de cada fabricante.

### 🟢 Definicion de Namespaces

Para definir un espacio de nombres se utiliza la siguiente sintaxis:

```csharp
namespace <nombreEspacio>
{
	<tipos>
}
```

Los tipos que se definan en `<tipos>` pasarán a considerase pertenecientes al espacio de nombres llamado `<nombreEspacio>`.
Como veremos más adelante, aparte de clases esto tipos pueden ser también interfaces, estructuras, tipos enumerados y delegados. A continuación se muestra un ejemplo en el que definimos una clase de
nombre `ClaseEjemplo` perteneciente a un espacio de nombres llamado EspacioEjemplo:

```csharp
namespace EspacioEjemplo
{
	class ClaseEjemplo
		{}
}
```

El verdadero nombre de una clase, al que se denomina nombre completamente calificado, es el nombre que le demos al declararla prefijado por la concatenación de todos los espacios de nombres a los que pertenece ordenados del más externo al más interno y seguido cada uno de ellos por un punto. Por ejemplo, el verdadero nombre de la clase `ClaseEjemplo` antes definida es `EspacioEjemplo.ClaseEjemplo`.

Si no definimos una clase dentro de una definición de espacio de nombres, se considera que ésta pertenece al denominado espacio de nombres global y su nombre completamente calificado coincidirá con el nombre que le demos al definirla.
Aparte de definiciones de tipo, también es posible incluir como miembros de un espacio de nombres a otros espacios de nombres. Podemos anidar espacios de nombres:

```csharp
namespace EspacioEjemplo
{
	namespace EspacioEjemplo2
	{
		class ClaseEjemplo
		{}
	}
}
```

Ahora `ClaseEjemplo` tendrá
`EspacioEjemplo.EspacioEjemplo2.ClaseEjemplo` como nombre completamente calificado. En realidad es posible compactar las definiciones de espacios de nombres anidados usando esta sintaxis de calificación completa para dar el nombre del espacio de nombres a
definir. Es decir, el último ejemplo es equivalente a:

```csharp
namespace EspacioEjemplo.EspacioEjemplo2
{
	class ClaseEjemplo
		{}
}
```

En ambos casos lo que se ha definido es una clase llamada `ClaseEjemplo` perteneciente al espacio de nombres llamado `EspacioEjemplo2` que, a su vez, pertenece al espacio de nombres llamado `EspacioEjemplo`.

### 🟢 Importación de espacios de nombres

### Using

Si desde código perteneciente a una clase definida en un cierto espacio de nombres se desea hacer referencia a tipos definidos en otros espacios de nombres, se ha de referir a los mismos usando su nombre completamente calificado. Por ejemplo:

```csharp
namespace EspacioEjemplo.EspacioEjemplo2 {
	class ClaseEjemplo
	{}
}
class Principal // Pertenece al espacio de nombres
global {
public static void Main () {
	EspacioEjemplo.EspacioEjemplo2.ClaseEjemplo c = new EspacioEjemplo.EspacioEjemplo2.ClaseEjemplo();
}
}
```

Como puede resultar muy pesado tener que escribir nombres tan largos en cada referencia a tipos, en C# se ha incluido un mecanismo de importación de espacios de nombres que usa la siguiente sintaxis:

```csharp
using <espacioNombres>;
```

Este tipo de sentencias siempre ha de aparecer dentro de una definición de espacio de nombres antes que cualquier definición de miembros de la misma y permiten indicar cuáles serán los espacios de nombres que se usarán implícitamente dentro de ese espacio de nombres. A los miembros de los espacios de nombres así importados se les podrá hacer referencia sin tener que usar calificación completa, por ejemplo:

```csharp
using EspacioEjemplo.EspacioEjemplo2;
namespace EspacioEjemplo.EspacioEjemplo2
{
	class ClaseEjemplo
	{}
}
// (1)
class Principal // Pertenece al espacio de nombres
global
{
public static void ()
{
// EspacioEjemplo.EspacioEjemplo2. está implícito
ClaseEjemplo c = new ClaseEjemplo();
}
}
```

Nótese que la sentencia using no podría haberse incluido en la zona marcada en el código como (1) porque se violaría la regla de que todo using ha aparecer en un espacio de nombres antes que cualquier definición de miembro. Sin embargo, el siguiente código si que sería válido:

```csharp
namespace EspacioEjemplo.EspacioEjemplo2
{
	class ClaseEjemplo
	{}
}

namespace Principal
{
	using EspacioEjemplo.EspacioEjemplo2;
	class Principal // Pertenece al espacio de nombres
	global
{
public static void Main()
{
	ClaseEjemplo c = new ClaseEjemplo();
}
}
}
```

En este caso el using aparece antes que cualquier otra definición de tipos dentro del espacio de nombres en que se incluye (Principal) Sin embargo, ahora la importación hecha con el using sólo será válida dentro de código incluido en ese mismo espacio de nombres, mientras
que en el caso anterior era válida en todo el archivo al estar incluida en el espacio de nombres global.
Si una sentencia using importa miembros de igual nombre que miembros definidos en el espacio de nombres donde se incluye, el using no se produce error alguno pero se da preferencia a los miembros no importados. Un ejemplo:

```csharp
namespace N1.N2 {
	class A {}
	class B {}
}

namespace N3 {
	using N1.N2;
	class A {}
	class C: A {}
}
```

En este ejemplo C deriva de N3.A en vez de N1.N2.A. Si queremos que ocurra lo contrario tendremos que referenciar a N1.N2.A por su nombre completo al definir C o, como se explica a continuación, usar un alias.
