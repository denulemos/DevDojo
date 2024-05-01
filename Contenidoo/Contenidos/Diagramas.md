# Diagramas

## Pseudo-código

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

## Diagrama de Nassi-Schneiderman

![Diagrama de Nassi-Schneiderman](src/diag1.png)

### Mostrar mensajes por pantalla

Para representar una salida por pantalla, debe utilizarse un rectángulo, en cuyo ángulo superior izquierdo lleve un pequeño cuadrado marcando una S de Salida.

![Diagrama de Nassi-Schneiderman](src/diag2.png)

### Leer datos desde el teclado

La E en lugar de la S nos marca una Entrada, es decir, que el programa espera que el usuario ingrese un dato.

En el rectángulo, debe ir el nombre de la variable en dónde se va a almacenar el dato. Asignación de valores a variables.

![Diagrama de Nassi-Schneiderman](src/diag3.png)

### Asignar valores a variables

Para asignarle un dato a una variable, se debe poner a la izquierda de la sentencia el nombre de la variable que va a recibir un valor, el signo “=” y el valor a asignarle. Este valor puede ser:

- Un valor propiamente dicho.
- Una constante (se le asigna el valor de la constante).
- Una variable (se le asigna el valor de la variable).
- El resultado de una operación aritmética o lógica.

Por ejemplo:

![Diagrama de Nassi-Schneiderman](src/diag4.png)

Como sucede en este caso, en el que la variable importeTotal recibe el resultado del producto del valor de una constante por una variable, el valor puede darse por alguna operación aritmética o lógica.

### Operadores

Los operadores son la herramienta que tenemos para indicarle al programa que debe realizar cierta operación. Existen operadores aritméticos (suma, resta, etc..), de relación (Numero mayor a otro numero, etc..) o lógicos (AND, OR, XOR..).

![Diagrama de Nassi-Schneiderman](src/diag5.png)

```jsx
int a = 8;
int b = 3;
System.out.println(“La suma de a + b es ” + (a + b));
```

### Decisiones simples

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

### Decisiones múltiples. Sentencia switch

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

### While (ciclo 0-n)

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

### Do-while (ciclo 1-n)

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