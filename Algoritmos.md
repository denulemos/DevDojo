<a name="alg-base"></a>

# Algoritmos, Manejo de Datos y Tipos de Programacion

(Mayoria de ejemplos hechos en Java)

| Búsqueda |
|----------|
| [Binary Search](#alg1) |
| [Podemos aplicar Binary Search a una Linked List ordenada?](#alg2) |
|[¿Cuál es la diferencia entre Binary Search y Linear Search?](#alg22)|

<a name="alg-base-ord"></a>

| Algoritmos de Ordenamiento |
|----------|
| [Selection Sort](#alg3) |
| [Insertion Sort](#alg4) |
| [Bubble Sort](#alg5) |
| [Merge Sort](#alg6) |
|[¿Cuándo sería más adecuado usar Merge Sort en lugar de Quick Sort?](#alg66)|
|[¿Cómo varía la eficiencia de estos algoritmos con el tamaño de los datos?](#alg77)|

<a name="alg-base-comp"></a>

| Complejidad Algorítmica |
|----------|
| [Big O - ¿Qué es?](#alg7) |
| [Reglas para calcular Big O](#alg8) |
| [Calcular Big O](#alg9) |
| [Notación Asintótica](#alg10) |
| [¿Cómo analizamos el codigo?](#alg11) |
| [Multiplicacion de Runtimes](#alg12) |
| [Ejemplos de Ejercicios](#alg14) |

<a name="alg-base-arr"></a>

| Arrays y ArrayLists |
|----------|
| [Estructuras de datos (Arrays en Java)](#alg15) |
| [Especificando la clase de contenido de un ArrayList en Java](#alg16) |
| [Creación de un ArrayList en Java](#alg17) |
|[¿Cuál es la diferencia entre un ArrayList y un array tradicional en Java?](#alg17-2)|
|[¿Cómo afecta la capacidad de crecimiento dinámico un ArrayList a su rendimiento?](#alg17-3)|
| [Agregar un elemento a un ArrayList](#alg18) |
| [Obtener el elemento n de un ArrayList](#alg19) |
| [Extraer el elemento n de un ArrayList](#alg20) |
| [Recorrer el ArrayList completo con for-each](#alg21) |
| [Buscar un elemento en la colección](#alg22) |
| [Remover algunos de los elementos del ArrayList](#alg23) |

<a name="alg-base-col"></a>

| Colecciones y Estructuras |
|----------|
| [Creando colecciones como atributo de una clase en Java](#alg24) |
| [Devolver una colección secundaria en Java](#alg25) |
|[¿En qué situaciones es más eficiente usar un HashMap en lugar de un Array?](#alg302)|
| [Linked Lists](#alg31) 💛|
| [¿Cuales son los beneficios de un Linked List sobre un Array?](#alg32) |
|[¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?](#alg33) |
| [¿Cual es la diferencia entre un Linked List y un Doubly Linked List?](#alg34) |

<a name="alg-base-var"></a>

| Variables |
|----------|
| [¿Qué es una Variable?](#var1) |
| [¿En qué se diferencia una variable común, nativa, de un objeto?](#var2) |
| [¿A qué nos referimos cuando hablamos de tipos de datos?](#var3) |
| [¿Cómo se declara una variable?](#var4) |
| [¿Qué son las variables no declaradas y no definidas?](#var19) |
|[¿Qué es la tipificación estática y dinámica?](#var19-2)|

<a name="alg-base-pilcol"></a>

| Pilas y Colas |
|----------|
|[Qué son las Pilas y Colas?](#alg37) |
| [Colas](#alg38) |
| [Pilas](#alg39) |
| [Nodo versus dato](#alg40) |
| [Uso de Pilas y Colas](#alg41) |

<a name="alg-base-arb"></a>

| Arboles |
|----------|
| [Arboles](#alg42) |
| [¿Qué es un Binary Tree?](#alg43) |
| [¿Qué es un Binary Search Tree?](#alg44) |
| [¿Por qué se dice que buscar un nodo en un BST es más eficiente que en un Simple Binary Tree?](#alg45) |
| [Complete Binary Tree](#alg46) |
| [Maneras de recorrer un Arbol](#alg47) |
| [In-Order Traversal](#alg48) |
| [Pre-order traversal](#alg49) |
| [Post-order traversal](#alg51) |
| [Recorrido de un Binary Tree](#alg50) |
| [Heaps](#alg54) |

<a name="alg-base-3"></a>

| Estructuras Avanzadas y Generics |
|----------|
| [Generics en Java](#alg35) |
|[Estructuras de Datos](#alg36) |
| [Recursividad](#alg52) |
| [Factorial](#alg53) |

<a name="alg-base-obj"></a>

| Programación Funcional y Orientada a Objetos |
|----------|
| [Que es la programacion funcional?](#var27-1) 💛 |
| [Que es el Function Factory?](#var20) |
| [Que es el Currying?](#var23)  💛 |
| [¿Qué son las funciones puras y cómo se relacionan con la programación funcional?](#var23-1)|
| [¿Qué ventajas ofrece la inmutabilidad al manejar estructuras de datos? Proporciona un ejemplo práctico.](#ent14) |

<a name="alg-base-async"></a>

| Manejo de Eventos y Asincronía |
|----------|
| [Event delegation](#var11) |
| [Bubble vs Capture](#var15) |
| [Funciones de "bloqueo" y "no bloqueo"](#var13) |
|[¿Cómo implementarías un patrón pub/sub para manejar eventos entre diferentes partes de una aplicación?](#var10-5)|

---

<a id="alg"></a>

# Algoritmos y complejidad

<a id="alg1"></a>

### **Binary Search**

[Volver al indice](#alg-base)

Encontrar elementos en un vector ordenado de forma rápida sin recorrer todo el vector corriendo el comienzo para no recorrer lo ya recorrido.

```jsx
function binarySearch(arr, target) {
  // Inicializamos los extremos del rango de búsqueda.
  let left = 0; // Índice del extremo izquierdo del rango.
  let right = arr.length - 1; // Índice del extremo derecho del rango.

  // Calculamos el índice medio inicial.
  let middle = Math.floor((left + right) / 2);

  // Iteramos mientras no hayamos encontrado el elemento
  // y el rango de búsqueda sea válido (izquierda <= derecha).
  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) {
      // Si el elemento buscado es menor que el valor medio,
      // descartamos la mitad derecha del rango ajustando el límite derecho.
      right = middle - 1;
    } else {
      // Si el elemento buscado es mayor que el valor medio,
      // descartamos la mitad izquierda del rango ajustando el límite izquierdo.
      left = middle + 1;
    }
    // Recalculamos el índice medio con los nuevos límites.
    middle = Math.floor((left + right) / 2);
  }

  // Al salir del bucle, verificamos si el elemento en el índice medio
  // es igual al objetivo. Si lo es, devolvemos su índice.
  // Si no lo es, significa que el elemento no está en el array, devolvemos -1.
  return arr[middle] === target ? middle : -1;
}

// Ejemplo de uso:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array ordenado para búsqueda binaria.
console.log(binarySearch(arr, 5)); // Devuelve 4 (el índice del número 5 en el array).

```

Su complejidada temporal es de O(log n)

![Algoritmo de búsqueda binaria](src/log1.png)

<a id="alg2"></a>

### **Podemos aplicar Binary Search a una Linked List ordenada?**

[Volver al indice](#alg-base)

No, no se puede, ya que encontrar el index del elemento del medio es demasiado complicado.

<a id="alg22"></a>

### **¿Cuál es la diferencia entre Binary Search y Linear Search?**

[Volver al indice](#alg-base)

La diferencia principal es que en Binary Search se divide el array en dos partes y se busca en la mitad, mientras que en Linear Search se recorre todo el array hasta encontrar el elemento, es la que hacemos tipicamente en codigo.

La complejidad de Binary Search es O(log n) y la de Linear Search es O(n).

---

<a id="alg3"></a>

### **Selection Sort**

[Volver al indice](#alg-base-ord)

![Selection Sort Tutorials & Notes | Algorithms | HackerEarth](https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png)

Se busca el elemento mas pequeño y se pone en primera posición

Se busca el segundo mas pequeño y se pone segundo

Se repite el proceso hasta llegar a la ultima posición

```javascript
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

// Inicializo el for desde uno mas del index donde estoy parado
    for (let j = i + 1; j < array.length; j++) {
        // Si el valor actual de j es menor que minIndex, reemplazo minIndex por este nuevo valor
    if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

// Luego de que nuestro for interno finalizo, hago el swap de valores
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}
```

Su complejidad temporal es de O(n^2)

<a id="alg4"></a>

### **Insertion Sort**

[Volver al indice](#alg-base-ord)

Este algoritmo funciona construyendo una matriz ordenada al principio de la lista.

Comienza la matriz ordenada con el primer elemento.

Inspecciona el siguiente elemento y lo cambia hacia atrás en la matriz ordenada hasta que esté en una posición ordenada, y así sucesivamente.

```javascript
const insertionSort = (array) => {
    // Un algoritmo de ordenación por inserción comienza la ordenación al principio de la lista, lo que significa que el primer elemento ya está ordenado.
  for (let i = 1; i < array.length; i++){
    const currValue = array[i];
    let j = i - 1;
    // Mientras no vaya mas alla del inicio del array, y mientras no se encuentre un valor mas pequenio del guardado en currValue
      while(j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        // evitar el loop
        j--;
      }

      array[j + 1] = currValue;
  }
}
```

Su complejidad temporal es de O(n^2)

<a id="alg5"></a>

### **Bubble Sort**

[Volver al indice](#alg-base-ord)

Es el más simple de todos.

Da vuelta los elementos si estan en el orden incorrecto de a pares.

Para darse cuenta de que está ordenado, debe hacer una pasada completa sin hacer ningun swipe.

![Algoritmo de búsqueda binaria](src/log2.png)

```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // Itera por todos los elementos menos el ultimo, por eso length - 1
    for (let j = 0; j < array.length - 1; j++) {
        // Es el elemento actual (j) mayor al siguiente? (j + 1)
      if (array[j] > array[j + 1]) {

        // Si se cumple la condicion, darlos vuelta
        const temp = array[j];

        // Asigno al elemento actual el valor siguiente
        array[j] = array[j + 1];

        // Asigno al valor siguiente el elemento actual
        array[j + 1] = temp;
      }
    }
  }

    // devuelvo el array ordenado
    return array;
}
```

Su complejidad temporal es de O(n^2)

<a id="alg6"></a>

### **Merge Sort**

[Volver al indice](#alg-base-ord)

![Understanding Merge Sort-Sorting Algorithm -4 | by Jaykishan Sewak | Medium](https://miro.medium.com/v2/resize:fit:672/1*WQ4YJMWRFrGHLK1KQDeDHQ.png)

Aplica el principio divide y vencerás.

Divide el array a la mitad de forma sucesiva

Se mezclan pares de subarray hasta volver a juntar el array completo

Es recursivo

 ```javascript
 // Función principal para ordenar un array utilizando Merge Sort
 function mergeSort(arr) {
     // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
     if (arr.length <= 1) {
         return arr;
     }

     // Encuentra el punto medio del array
     const mid = Math.floor(arr.length / 2);

     // Divide el array en mitades
     const left = arr.slice(0, mid);
     const right = arr.slice(mid);

     // Ordena recursivamente las mitades izquierda y derecha
     return merge(mergeSort(left), mergeSort(right));
 }

 // Función para combinar y ordenar dos arrays ordenados
 function merge(left, right) {
     // Array para almacenar el resultado fusionado
     let result = [];
     // Índices para recorrer los arrays izquierdo y derecho
     let leftIndex = 0;
     let rightIndex = 0;

     // Mientras haya elementos en ambos arrays
     while (leftIndex < left.length && rightIndex < right.length) {
         // Compara los elementos actuales de ambos arrays
         if (left[leftIndex] < right[rightIndex]) {
             // Si el elemento izquierdo es menor, añádelo al resultado y avanza al siguiente elemento del array izquierdo
             result.push(left[leftIndex]);
             leftIndex++;
         } else {
             // Si el elemento derecho es menor, añádelo al resultado y avanza al siguiente elemento del array derecho
             result.push(right[rightIndex]);
             rightIndex++;
         }
     }

     // Después de salir del bucle, uno de los arrays puede tener elementos restantes

 ```

Su complejidad temporal es de O(n log n)

<a id="alg66"></a>

### **¿Cuándo sería más adecuado usar Merge Sort en lugar de Quick Sort?**

[Volver al indice](#alg-base-ord)

Merge Sort es más adecuado cuando se necesita una estabilidad en la ordenación, es decir, cuando se necesita mantener el orden relativo de los elementos iguales en el array original.

Quick Sort es más adecuado cuando se necesita una ordenación en su lugar, es decir, cuando no se puede permitir el uso de memoria adicional para almacenar los elementos ordenados.

<a id="alg77"></a>

### **¿Cómo varía la eficiencia de estos algoritmos con el tamaño de los datos?**

[Volver al indice](#alg-base-ord)

La eficiencia de los algoritmos de ordenación varía con el tamaño de los datos de entrada. En general, los algoritmos de ordenación más eficientes, como Merge Sort y Quick Sort, tienen una complejidad temporal de O(n log n), lo que significa que su tiempo de ejecución aumenta de forma logarítmica con el tamaño de los datos de entrada.

Por otro lado, los algoritmos de ordenación menos eficientes, como Bubble Sort y Selection Sort, tienen una complejidad temporal de O(n^2), lo que significa que su tiempo de ejecución aumenta de forma cuadrática con el tamaño de los datos de entrada.

---

<a id="alg7"></a>

### **Big O - ¿Qué es?**

[Volver al indice](#alg-base-comp)

O viene por la palabra Orden. La n representa un número o el tamaño de un conjunto

Podemos ejecutar nuestro algoritmo y medir cuanto tiempo tarda en ejecutarse, pero es algo muy variable, dependiendo el algoritmo, el tiempo de ejecución escala con la entrada (lo que recibe), como por ejemplo los algoritmos de búsqueda que pueden funcionar bien con cantidades pequeñas de datos y muy mal con cantidades muy grandes.

La mejor opcion es la que crece menos ante el aumento de datos de entrada

<a id="alg8"></a>

### **Reglas para calcular Big O**

[Volver al indice](#alg-base-comp)

* Se ignoran las constantes

```html
3 * O(1) => O(1)
0(n/2) => O(n)
```

* Dominancia de términos: Siempre nos quedaremos con el peor caso.

```html
O(n) < O(n^2)
O(n log n) < O(2^n)
```

* Ignorar los términos no dominantes

```html
O(n^2 + n) => O(n^2)
O(n^2 + n + 1) => O(n^2)
```

* Ignorar los productos

```html
O(n * log n) => O(n log n)
```

* Ignorar las sumas

```html
O(n + log n) => O(n)
```

* Ignorar las divisiones

```html
O(n / 2) => O(n)
```

* Ignorar las constantes multiplicativas

```html
O(2n) => O(n)
```

* Ignorar las constantes aditivas

```html
O(n + 1) => O(n)
```

<a id="alg9"></a>

### **Calcular Big O**

[Volver al indice](#alg-base-comp)

Supongamos que necesitamos llevar unas valijas a la casa de un primo. No importan cuantas valijas llevemos, el tiempo siempre será el mismo, 5 minutos.

Si quiero llevar las valijas corriendo, supongamos que solo puedo llevar 2 valijas por corrida, entonces, el tiempo que tardaré subirá exponencialmente, dependo de mi entrada, y el tiempo sube de manera lineal.

![Grafico](.\src\perf1.png)

<a id="alg10"></a>

### **Notación Asintótica**

[Volver al indice](#alg-base-comp)

La notacion asintotica nos permite simplificar estos graficos, es como redondear decimales.

En desarollo nos interesa el limite superior, que es la notacion de **Big 0, es el comportamiento en el peor de los casos**.

Asi podremos calificar nuestros algoritmos con distintas complejidades. Si mi algoritmo es n² entre mas crezca la entrada, peor se va a comportar, como se puede ver en el siguiente grafico

![performance](.\src\perf2.png)

* **O(N!) =>** Es el peor de todos. Tambien para funciones recursivas en general.

```javascript
void nFactorialExample(int n) {
  for (int i = 0; i < n; i++){
    nFactorialExample(n - 1);
  }
}

// Factorial de 3: 3x2 = 6
// Factorial de 6: 6x5x4x3x2 = 720
```

* **O(2'N) =>** Responde a las secuencias fibonacci recursivas. Es una complejidad exponencial. Tambien cuando se trata de arboles.

```javascript
// Ejemplo poco eficiente - Recursiva
int fibonacci (int n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

* **O (N log N) =>** Aplica a Merge Sort, Heap Sort y Quick Sort, que son los mas eficientes.

* **O(log n)** => Es muy comun verlo en la busqueda binaria, ya que se situa a la mitad de un array ordenado y de ahi, mediante comparacion, encuentra el elemento.

* **O(1)** => Tiempo constante, el algoritmo no variará su rendimiento con la entrada. Por ejemplo, asignaciones de variables.

```jsx
x = x+1; O(1)
y = 200*3; O(1)
print(y); O(1)
O(1) + O(1) + O(1) = O(1)

int max(int a, int b) {
  if (a >= b) return a;
  return b;
}
```

* **O(n)** => Crecimiento Lineal, indica que el crecimiento de complejidad del algoritmo es proporcional al input. Mas datos, mas complejidad. Aparece en iteraciones.

```jsx
for (int i = 0; i<n; i++)
 print(arr[1]);

// En el peor de los casos se recorre el array entero para encontrar a un solo empleado.
Employee linearSeach(Employee[] employees, String name) {
  for (Employee e: employees) {
    if (name.equals(e.getName())) return e;
  }
  return null;
}
```

* **n * O(1) = O(n)** | La impresion es de complejidad O(1), pero se ejecuta n veces dependiendo del input ya que esta dentro de un bucle for

```jsx
y = 2+2; // O(1)

//O(n)
for(int i = 0; i<n; i++)
 print(arr[1]);

// n + O(1) => O(n)
```

* **O(n^2)** => El crecimiento en complejidad es proporcional al cuadrado del tamaño del input. Son los menos recomendados para datos grandes. Aparece sobre iteraciones dentro de iteraciones. Se le dice **complejidad cuadratica.**

```jsx
for(int i = 0; i<n; i++) // O(n)
 for (int j = 0; i<k; j++) { // O(n)
  print(m[i][j]); // O(1)
 }

n * n * O(1) => O(n^2)

void printPairs(int[] array) {
  for (int x: array) {
    for (int y : array) {
      System.out.println(x y);
    }
  }
}
```

No importa si tenemos un algoritmo muy complejo dentro de un if al que probablemente no se entre dependiendo la entrada, SIEMPRE se toma el peor caso posible.

<a id="alg11"></a>

### **¿Cómo analizamos el codigo?**

[Volver al indice](#alg-base-comp)

Cualquier función se considera O(1) (constante) siempre y cuando no sea un ciclo, no tenga recursion y no sea una llamada a una funcion que no sea de tiempo constante

```jsx
entrada = input() // O(1)
x = 5 // O(1)

if entrada == "hola":
 print("saludo" * x) // O(1)

// n es la entrada
for (int i = 1; i <=n; i += c) { // O(n)
 // CUalquier sentencia O(1)
}
```

Los ciclos son considerados `O(n)`, siendo n la entrada. Depende que tan grande sea la entrada, cuanto se recorrerá. Pero, si se itera solo 3 veces, se considera `O(1)`, ya que la entrada es indiferente en la cantidad de ciclos de ejecución.

Si hay dos bucles anidados, se considera `O(n^2)`, la complejidad depende del ciclo de adentro del ciclo padre.

```javascript
// n es la entrada
for (int i = 1; i <= n; i += c) {
    // O(n^2)
    for (int j = 1; j <= n; j += c) {
        // Cualquier sentencia O(1)
    }
}
```

Si la variable del ciclo, en lugar de estar incrementandose por un numero constante, se multiplica o divide, se vuelve `O(log(n))`, va incrementandose de manera exponencial con su entrada.

```javascript
// n es la entrada
// O(log(n))
for (int i = 1; i <= n; i *= c) {
    // Cualquier sentencia O(1)
}
```

Si es mucho mas complejo lo que sucede con la variable que itera, se vuelve `O(log(log(n))`

```javascript
// O(log(log(n))) - Hay muchas mas operaciones dentro de ese for
for (int i = 2; i <= n; i = pow(i,c)) {
    // Cualquier sentencia O(1)
}
```

Sumamos todas las complejidades del codigo y lo simplificamos. Tomamos el termino mas significativo, el pedazo de codigo mas grande, para sacar la complejidad total de todo el codigo.

Las lineas dentro de un bucle tendrán el mismo tipo de complejidad que su ciclo padre.

```javascript
public static void main(String[] args){
    int []arr = {5,3,4,8,7,5,4,2,4}; // 1

    for (int j = 1; j < arr.length; j++) { // n
        int actual = arr[j]; // n

        int i = j - 1; // n
        while (i >= 0 && arr[i] > actual) { // n^2
            arr[i+1] = arr[i]; // n^2
            i --; // n^2 - Ya que su padre es // n^2
        }

        arr[i + 1] = actual;
    }
}
```

Con esto, hacemos la siguiente operación:

`3n^2 + 4n + 1 = O(n^2)`

Nos quedamos con el termino mas significativo, que seria n^2

<a id="alg12"></a>

### **Multiplicacion de Runtimes**

[Volver al indice](#alg-base-comp)

Si mi código es "Hace esto y luego hace esto otro", se agrega al Runtime

```javascript
// O(A+B)
for (int a : arrA) {
    print(a);
}
for (int b: arrB) {
    print(b);
}
```

En cambio, si mi codigo es del estilo "Mientras haces esto, hace esto otro", se multiplica el runtime

```javascript
// O(AB)
for (int a: arrA) {
 for (int b: arrB) {
  print(a + "," + b);
 }
}
```

<a id="alg14"></a>

### **Ejemplos de Ejercicios**

[Volver al indice](#alg-base-comp)

En este caso es O(N) (Muy bueno), el hecho de que iteremos dos veces el array no importa.

```javascript
void foo(int[] array) {
    int sum = 0;
    int product = 1;
    for (int i = 0; i < array.length; i++) { // O(N)
        sum += array[i];
    }
    for (int i = 0; i < array.length; i++) { // O(N)
        product *= array[i];
    }

    System.out.println(sum + product);
}
```

`O(N)` - La complejidad crece dependiendo de la entrada de datos, es decir, el array que recibe y tendra que recorrer.

```javascript
int sum = 0;
int product = 1;

for (int val: array) {
  sum +=val;
  product *=val;
}
```

`O(2N'2) == O(N'2 + N'2) === O(N'2)`. Se deben eliminar los terminos no dominantes

```javascript
int sum = 0;
int result = 0;

// O(N) - No Dominante
for (int val: array) {
  sum +=val;
}

// O(N'2) - Dominante. Si optimizamos solo esta parte, podremos obtener todos los beneficios
for (int x : array) {
  for (int y: array) {
    result += x * y - sum;
  }
}
```

A simple vista parece `O(N)`, porque recorre solo dos veces los dos array por separado, pero estos array pueden tener tamanios distintos, entonces seria `O(A + B)`, A siendo el tamanio de arrayA y B de arrayB

```javascript
int sum = 0;

for (int val: arrayA) {
  sum += val;
}

for (int val: arrayB){
  sum += val;
}
```

O(N), solo se necesita recorrer la mitad del array, y si el mismo crece de tamanio, la complejidad crecera con el.

```javascript
void reverseArray(int [] array) {
  // Recorre el array hasta la mitad
  for (int i = 0; i < array.length / 2; i++) {
    // Calculamos la posicion nueva del elemento
    int reversePosition = array.length - 1 - i;
    // Posicion actual
    int tmpVal = array[i];

    // Cambiamos de lugar
    array[i] = array[reversePosition];
    array[reversePosition] = tmpVal;
  }
}
```

O(N'2)

```javascript
// Imprimir parejas de valores de un array
void printUnorderedPairs(int[] array) {
  for (int i = 0; i< array.length - 1; i++) {
    for (int j = i+1; j < array.length; j++) {
      System.out.println(ij);
    }
  }
}
```

O(N) - Si B crece, el tiempo crece. Seria O(B)

```javascript
// Calcular el producto de dos numeros sin usar la funcion predeterminada. Sumar B veces el valor A
int product(int a, int b) {
  int result = 0;
  // B define que tan grande es este for
  for (int i = 0; i < b; i++) {
    result += a;
  }
  return result;
}
```

O(N'2) - Tengo dos complejidades lineales.

```javascript
// copiar un array a otro de forma poco eficiente - elemento a elemento a un array creado desde cero

// O(N) - recorre el array
// Se recibe un arrray
int[] copyArray(int[] array) {
  // Se guarda una copia del array
  int[] copy = new int[0];
  for (int val: array) {
    copy = appendToNew(copy, val);
  }
  return copy
}


// O(N) - recorre el array recibido
// Se pasa la copia del array y el valor a agregar en esa copia
int[] appendToNew(int[] array, int val) {
  // Creo un array un poco mayor
  int[] bigger = new int[array.length + 1];
  for (int i = 0; i < array.length; i++){
    bigger[i] = array[i];
  }

  bigger[bigger.length - 1] = val;
  return bigger;
}
```

O(AB)

```javascript
void printPairsTwoArrays(int[] arrayA, int[] arrayB) {
  // Aca recorro el arrayA - O(A)
  for (int valA : arrayA) {
    // Aca el arrayB - O(B)
    for (int valB: arrayB) {
      System.out.println(valA, valB);
    }
  }
}
```

---

<a id="alg15"></a>

### **Estructuras de datos (Arrays en Java)**

[Volver al indice](#alg-base-arr)

Las colecciones de objetos son comunes en la programación moderna, especialmente bajo el paradigma de la Programación Orientada a Objetos (POO). Como su nombre lo indica, las colecciones de objetos permiten reunir elementos de un mismo tipo y, si existen, de sus subtipos. Esto significa que, desde el punto de vista de la POO, dentro de una colección podemos almacenar en memoria objetos de una misma clase, así como de sus subclases.

En Java, la forma más simple de trabajar con colecciones de objetos es utilizando la clase `ArrayList`, que permite guardar de forma dinámica y secuencial un elemento detrás del otro, acceder a ellos y eliminarlos cuando lo necesitemos.

A continuación, veremos cómo crear colecciones de objetos utilizando `ArrayList`. También exploraremos cómo manipular su contenido a través de los siguientes métodos (hay más, pero por ahora no los trataremos):

| Método            | Descripción                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `add(elemento)`   | Permite agregar un elemento al final de la colección.                                                                                           |
| `add(n, elemento)`| Permite agregar un elemento en la posición señalada por `n`. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |
| `get(n)`          | Permite obtener el elemento `n` de la colección. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |
| `remove(n)`       | Permite extraer el elemento `n` de la colección. Si esta posición está fuera del rango aceptable (determinado por la cantidad de elementos de la lista), se producirá un error de ejecución. |

En Java, los `ArrayList` son una implementación de la interfaz `List`. También se los conoce como listas, aunque este concepto es más amplio de lo que trataremos aquí, donde sólo los utilizaremos para crear colecciones dinámicas de datos.

<a id="alg16"></a>

### **Especificando la clase de contenido de un ArrayList en Java**

[Volver al indice](#alg-base-arr)

Esta clase tiene una particularidad: para instanciar un ArrayList debemos indicar la clase de elementos que contendrá. Crear el ArrayList sin especificar la clase de elementos que contendrá está permitido, pero indicará una alerta y asumirá que sus elementos son de la clase Object. Los ArrayLists soportan que en su definición se indique cuál será la clase que tomaremos como clase base para añadir elementos a la estructura.
Si necesitamos crear una colección de objetos que pueda guardar cualquier clase de elemento, debemos asociarla a la clase Object, pero la clase Object no conocerá los métodos y atributos específicos de cada elemento que pongamos en la lista, y esto impedirá acceder a sus atributos y métodos particulares en forma automática.

```java
ArrayList<Object> coleccion = new ArrayList<>();
```

<a id="alg17"></a>

### **Creación de un ArrayList en Java**

[Volver al indice](#alg-base-arr)

Como primera medida importaremos el paquete correspondiente a partir de la adición de su namespace (Esto al momento de escritura de este apunte):

```java
import java.utils.ArrayList;
```

Una vez agregado el paquete nuestro programa permitirá crear colecciones de la siguiente manera (podemos hacerlo en dos partes, primero declarando la variable y luego creando el objeto; aquí está la “versión corta”):

```java
ArrayList<ClaseBase> coleccion = new ArrayList<>();
```

Así, para crear una colección de objetos de la clase Persona, haremos:

```java
ArrayList<Persona> personas = new ArrayList<>();
```

Tengamos en cuenta que al hacer esto estamos creando únicamente la colección vacía, sin ningún elemento. La clase ArrayList posee el método size() que nos indica cuál es la cantidad de elementos que se han guardado en el momento en la colección. Si ejecutásemos la siguiente instrucción inmediatamente después de crearla, obtendríamos como respuesta un 0:

```java
System.out.println(coleccion.size());
```

En caso de necesitar crear una colección de elementos de los tipos nativos del lenguaje (integer, double, etc.) debemos recurrir a sus contrapartes como clase:

```java
ArrayList<Integer> numeros = new ArrayList<>();
```

Tampoco deberemos crear una nueva clase para generar colecciones de Strings, porque de por sí String ya es una clase:

```java
ArrayList<String> palabras = new ArrayList<>();
```

<a id="alg17-2"></a>

### **¿Cuál es la diferencia entre un ArrayList y un array tradicional en Java?**

[Volver al indice](#alg-base-arr)

Un array tradicional en Java es una estructura de datos fija que almacena un conjunto de elementos del mismo tipo. Una vez que se crea un array, su tamaño no puede cambiar. Por otro lado, un ArrayList en Java es una implementación de la interfaz List que proporciona una colección dinámica de elementos. A diferencia de un array tradicional, un ArrayList puede cambiar de tamaño dinámicamente, lo que significa que puede crecer o reducirse según sea necesario.

<a id="alg17-3"></a>

### **¿Cómo afecta la capacidad de crecimiento dinámico un ArrayList a su rendimiento?**

[Volver al indice](#alg-base-arr)

El crecimiento dinámico de un ArrayList en Java puede afectar su rendimiento en ciertas situaciones. Cuando un ArrayList crece más allá de su capacidad actual, necesita aumentar su tamaño interno para acomodar más elementos. Esto implica la creación de un nuevo array interno con una capacidad mayor y la copia de todos los elementos existentes al nuevo array. Este proceso de redimensionamiento puede ser costoso en términos de tiempo y recursos, especialmente si el ArrayList contiene una gran cantidad de elementos.

<a id="alg18"></a>

### **Agregar un elemento a un ArrayList**

[Volver al indice](#alg-base-arr)

Para agregar un elemento a un ArrayList utilizaremos el método add(elemento), el cual permite agregar un nuevo elemento al final de la estructura (es decir, como último elemento).

Por ejemplo, para agregar un elemento, podemos hacer:

```java
// creamos el objeto
Objeto elemento = new Objeto();
...
...
...
// lo agregamos a la colección
coleccion.add(elemento);
```

Solamente en el caso de las clases relacionadas a los tipos nativos (integer, double, etc.) podremos agregar elementos sin necesidad de crear explícitamente el objeto (Java lo hará por nosotros):

```java
numeros.add(19); // insertará el número 19 en la colección
```

<a id="alg19"></a>

### **Obtener el elemento n de un ArrayList**

[Volver al indice](#alg-base-arr)

Para obtener el elemento n del ArrayList utilizaremos el método get(n), donde n es la posición en la cual está el elemento. El valor de n debe estar entre 0 y size()-1, caso contrario se producirá un error de ejecución.
Para obtener el primer elemento de la colección haremos:

```java
Objeto elemento = coleccion.get(0);
```

Esto guardará la referencia al elemento sin quitarlo de la lista (no hace una copia). Entonces, si modificamos el elemento que tenemos en el auxiliar, obviamente estaremos modificando el elemento que está en la lista, pues es el mismo elemento referenciado desde dos lugares distintos.

<a id="alg20"></a>

### **Extraer el elemento n de un ArrayList**

[Volver al indice](#alg-base-arr)

Para extraer el elemento n del ArrayList utilizaremos el método remove(n ), donde n es la posición en la cual está el elemento. El tratamiento es similar al caso del get(): el valor de n debe estar entre 0 y size()-1, caso contrario se producirá un error de ejecución. A diferencia del get(), remove() extrae el elemento de la posición, y si éste no era el último, su lugar será ocupado por el siguiente elemento (y así hasta el final), acortando el tamaño de la estructura en 1.
Por ejemplo, para extraer el primer elemento de la colección haremos:

```java
Objeto elemento = coleccion.remove(0);

coleccion.remove(0);
```

La diferencia entre estos dos casos es que mientras el primero guarda el elemento removido en una variable auxiliar para su uso posterior, el segundo lo descarta inmediatamente y ya no tendremos acceso al mismo.
Pero sacar un elemento de la colección, como vimos más arriba, tiene algunas consecuencias impensadas, algunas de las cuales trataremos más adelante en esta misma guía.

<a id="alg21"></a>

### **Recorrer el ArrayList completo con for-each**

[Volver al indice](#alg-base-arr)

El ciclo conocido como for-each es una variante del for tradicional que, en vez de utilizar un valor índice para iterar una determinada cantidad de veces, utiliza un iterador implícito para visitar en cada ciclo cada los elementos cargados en la lista, de a uno por vez, del primero al último elemento. Para eso necesita una variable local en la cual guardará temporalmente la referencia al elemento visitado.
La estructura del for-each es la que sigue:

```java
for (Clase elementoAuxiliar : coleccion) {
 proceso(elementoAuxiliar);
}
```

En el ejemplo, proceso() deberá reemplazarse por lo que querramos hacer con el elemento visitado. Por ejemplo, para mostrar el nombre y el número de DNI de cada persona guardada en la colección, haríamos:

```java
for (Persona persona : personas){
 System.out.println(persona.getNombre());
 System.out.println(persona.getDocumento());
}
```

Este ejemplo podría leerse como “para cada persona que esté en la colección de personas, mostrar el nombre y el número de documento”. Esto hará que en cada iteración (en cada vuelta del ciclo) la variable persona guarde temporalmente, una a una, cada persona que esté en la estructura, comenzando con la primera de todas y hasta que no haya más. La variable persona tendrá asignada en cada ciclo, entonces, el objeto de la colección que se está visitando en ese momento.

<a id="alg22"></a>

### **Buscar un elemento en la colección**

[Volver al indice](#alg-bas-arr)

Utilizar el ciclo for-each es muy fácil y cómodo, pero no tiene una manera natural de abandonar el recorrido por la colección sin recorrerlo por completo. El inconveniente de esto es que si estamos buscando un elemento específico y ya lo encontramos, o si ya sabemos que no lo encontraremos, seguiríamos recorriendo la estructura hasta el final innecesariamente.
Hay formas de recorrer la estructura parcialmente. Una de ellas es utilizando
explícitamente un iterador, la cual probablemente sea la forma más conocida de
hacerlo. Pero trabajar con iteradores requiere de cierto cuidado y tener en cuenta algunos conceptos que dejaremos para más adelante.
Entonces nos queda una forma de recorrer la estructura parcialmente sin
necesidad de hacerlo por completo: aprovechando la capacidad de acceder a un
elemento determinado con get(). Por ejemplo, si necesitamos ubicar una persona determinada de la lista, podríamos hacer lo siguiente:

```java
// Búsqueda de la persona por nro de documento.
// creamos una variable auxiliar donde dejaremos
// el elemento buscado, si lo encontramos.
Persona personaBuscada = null;
int indice = 0;
// buscamos mientras no hayamos llegado al final
// de la estructura y no hayamos encontrado el
// elemento que estamos buscando.
while (indice < personas.size() && personaBuscada == null) {
 if (personas.get(indice).getDocumento() == docBuscado) {
 // si la encontramos, la asignamos al auxiliar
  personaBuscada = personas.get(indice);
 } else {
  // incrementamos el índice para
  // pasar al siguiente elemento
  indice++;
 }
}
```

El ejemplo anterior utilizará el ciclo while para recorrer la estructura mientras haga falta. El if interno, como está expresado en los comentarios, cumple dos tareas. La primera es asignar el elemento al auxiliar cuando es el que buscamos. La segunda, es darnos la posibilidad de intentar con el siguiente, a ver si es el que queremos. El incremento de índice puede hacerse también fuera del if (no en el else), aunque en ese caso perdería la posición donde encontró el elemento. De esta forma, guarda también la posición y no incremente el índice sin necesidad.

<a id="alg23"></a>

### **Remover algunos de los elementos del ArrayList**

[Volver al indice](#alg-base-arr)

Un tratamiento similar debemos aplicar cuando queremos extraer algunos elementos de la colección, pero no todos. El tema, en este caso, pasa porque al remover un elemento determinado, los posteriores se adelantan en una posición. Esto hace que al incrementar el valor del índice inmediatamente después de extraer el elemento, como todos los elementos posteriores se movieron para adelante una posición, en la posición que acabamos de abandonar ha quedado, si existe, un elemento que no hemos visitado. Para que esto no suceda, sólo debemos avanzar cuando el elemento recién visitado no haya sido extraído. Si lo hemos extraído, nos quedaremos en esa posición esperando a que los  elementos se reacomoden (que todos los posteriores ocupen su nuevo lugar) y, así, no perder el nuevo elemento que cayó en la posición donde estamos parados.
Veamos el siguiente ejemplo: supongamos que tenemos una colección de números con los valores 1, 7, 4, 9, 17, 22. No es necesario que estén ordenados. Lo que intentaremos es dejar sólo los números impares, eliminando los pares:

```java
// Eliminando todos los números pares de la colección.
int indice = 0;
// buscamos mientras no hayamos llegado al final
// de la estructura.
while (indice < numeros.size()) {
 if (numeros.get(indice) % 2 == 0) {
 // si es par lo quitamos
  numeros.remove(indice);
 } else {
  // incrementamos el índice para
  // pasar al siguiente elemento
  indice++;
 }
}
```

Así, recorreremos la colección de números hasta llegar al 4 (índice=2, recordemos que el primero tiene índice=0). Entonces, lo extraeremos, y todos los elementos posteriores se adelantarán un lugar. La colección, entonces, queda así: 1, 7, 9, 17, 22

Nosotros seguiremos parados en la posición 2, donde ahora, en vez del 4 que extrajimos, está el 9. Gracias a que no avanzamos, en la nueva iteración del ciclo (donde podría haber encontrado un nuevo número par) trataremos el 9, luego el 17 y así hasta llegar al 22. Aquí también nos detendremos a extraer el número y no incrementaremos, pero la lista habrá perdido un nuevo elemento (el 22), quedando entonces sólo con 4 elementos (1, 7, 9, 17). Como el ciclo sólo itera mientras el índice sea menor a la cantidad de elementos de la colección, saldremos y la lista quedará solamente con los números impares.

<a id="alg24"></a>

### **Creando colecciones como atributo de una clase en Java**

[Volver al indice](#alg-base-col)

Supongamos que tenemos la clase Club, y que el club mantiene una lista de sus socios.
Para esto, crearemos el atributo privado socios, que será un ArrayList de elemento de clase Socio. Si bien podemos instanciar aquí la colección, sólo la declararemos y le asignaremos el valor null para que la colección sea creada explícitamente en el constructor de la clase Club, pues consideramos que es el mejor lugar para hacerlo:

```java
public class Club {
 private ArrayList<Socio> socios = null;
 public Club() {
  this.socios = new ArrayList<Socio>();
 }
 public void agregarSocio(Socio socio) {
  socios.add(socio);
 }
 public void agregarSocio(String nombre) {
  socios.add(new Socio(nombre));
 }
}
```

También podemos ver dos métodos distintos para agregar socios, el primero pasándole directamente un objeto de la clase Socio, y el segundo que sólo recibe el nombre del nuevo socio, que será instanciado y agregado en el momento.
¿Y qué deberíamos hacer para dar de baja un socio? ¿Cómo hacemos para devolver la instancia de socio que queremos eliminar sin exponer la colección completa?

```java
public Socio darDeBaja(int numero) {
 Socio socio = null;
 int indice = 0;
 while (indice < socios.size() && socio == null) {
  if (socios.get(indice).getNumero() == numero) {
   socio = socios.get(indice);
  } else {
   indice++;
  }
 }
 return socio;
}
```

Así devolvemos null o el socio encontrado, que ya ha sido removido de la colección, para que desde donde han llamado a la rutina se procese la instancia de la manera que se desee (por ejemplo, para mostrar los datos del socio dado de baja).

<a id="alg25"></a>

### **Devolver una colección secundaria en Java**

[Volver al indice](#alg-base-col)

Siguiendo con el ejemplo anterior, supongamos que queremos devolver una colección con todos los socios vitalicios del club. Para eso podríamos hacer algo como lo que sigue:

```java
public ArrayList<Socio> obtenerVitalicios() {
 ArrayList<Socio> vitalicios = new ArrayList<Socio>();
 for (Socio s: socios) {
  if (s.esVitalicio()) {
   vitalicios.add(s);
  }
 }
 return vitalicios;
}
```

En este caso agregará a la colección vitalicios (creada como variable local) todos aquellos socios que cumplan con la condición de ser vitalicios. Pero, ¿qué pasará, entonces, con la lista de socios principal, donde estaban los estos socios, ahora en la lista de socios vitalicios?
No pasará nada: todos los socios estarán en la lista principal, y aquellos que cumplan con lo condición deseada, además, estarán en esta lista secundaria. Cada socio vitalicio estará tanto en la lista secundaria como en la principal, porque en ambas se guarda la referencia al objeto de clase Socio en cuestión. En caso de eliminar el elemento de una de las listas, seguirá vivo en la otra. Esto puede no ser algo deseable, pero es algo que se tratará en otra oportunidad.

<a id="alg302"></a>

### **¿En qué situaciones es más eficiente usar un HashMap en lugar de un Array?**

[Volver al indice](#alg-base-col)

Un HashMap es más eficiente que un Array cuando necesitamos almacenar pares clave-valor y realizar búsquedas rápidas por clave. En un Array, las búsquedas por valor tienen una complejidad de O(n), mientras que en un HashMap, las búsquedas por clave tienen una complejidad de O(1) en promedio.


<a id="alg31"></a>

### **Linked Lists** 💛

[Volver al indice](#alg-base-col)

Es una estructura de datos que representa una secuencia de nodos.

* Es una lista enlazada simple, un nodo apunta al siguiente.
* Doble, el nodo apunta al siguiente y al anterior nodo.

Los nodos almacenan cualquier tipo de informacion

```java
public class Node {
  // Referencia al nodo siguiente
 public Node next;
  // Valor del nodo en este caso int
 public int value;

 public Node(int value) {
  this.value = value;
 }
}
```

Sus operaciones mas comunes son:

* **Insercion al final de la lista**: Se obtiene el nodo primero de la lista (head), hasta llegar a uno que no tenga un nodo siguiente, significa que es el ultimo. Ahi inserto su referencia next al nuevo nodo, y este nuevo nodo, sin referencia a next
* **Eliminar un nodo**: Si es el head, solo se mueve la referencia a head al nodo siguiente. Para cualquier otro nodo, simplemente cambio las referencias al mismo en next (`node.next = node.next.next`)

Sus ventajas son:

* Capacidad de insertar un nodo en cualquier posicion de la lista de manera directa, sin mover nada. Solo cambio las referencias de los nodos.
* Se puede hacer referencia solo al valor

Sus inconvenientes son:

* El acceso a un item aleatorio es complicado. Se deben recorrer todos los nodos hasta llegar a donde queremos, esto es ineficiente.

```java
public class SingleLinkedList {
  public Node head; // El primer nodo de todos

  public void agregarAlFinal(int value) {
    // Si es el primer elemento de todos
    if (head == null) {
      head = new Node(value);
      return;
    }

    Node current = head;
    // Mientras no encuentre un nodo sin referencia next (el ultimo)
    while (current.next != null) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  public void eliminarNodo(int value) {
    // No hay elementos a eliminar porque no hay lista
    if (head == null) return;

    if (head.value == value) {
      // Si el elemento a borrar es el head, paso el head al segundo elemento de la lista
      head = head.next;
      return;
    }

    Node current = head;
    while(current.next != null) {
      if (current.next.value == value) {
        current.next = current.next.next;
        return
      }

      current = current.next;
    }
  }

  public void print() {
    if (head == null) return;

    Node current = head;
    while (current.next != null) {
      System.out.println(current.value);
      current = current.next;
    }
  }
}
```

<a id="alg32"></a>

#### **¿Cuales son los beneficios de un Linked List sobre un Array?**

[Volver al indice](#alg-base-col)

Un Array es una estructura de datos que almacena elementos de forma contigua en la memoria. Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria.

Consideremos un escenario donde debemos guardar mucha data en un array, pero, la memoria para guardar esa data no esta disponible de forma continua, en ese caso, no podemos usar un Array.

En un Linked List, como cada nodo esta conectado con un link, no es necesario que la memoria sea continua.

<a id="alg33"></a>

### ¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?

[Volver al indice](#alg-base-col)

Un Singly Linked List se tienen links derechos, pero no podemos ir para atrás ya que siempre apuntan al siguiente. El DLL posee en cada nodo 3 campos, uno que apunta al nodo anterior, otro al siguiente.

Se puede reconocer cuando un nodo es el primero ya que su link anterior es Nulo, lo mismo con el último. Es mas eficiente acceder a los elementos en un DLL

<a id="alg34"></a>

### **¿Cual es la diferencia entre un Linked List y un Doubly Linked List?**

[Volver al indice](#alg-base-col)

Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria. Un Doubly Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria, pero cada nodo tiene un link al nodo anterior y al siguiente.

<a id="var1"></a>

### **¿Qué es una Variable?**

[Volver al indice](#alg-base-var)

Una *variable* es un *contenedor* que tiene un valor o dato. Desde el punto de vista técnico, es un espacio de la memoria en el que guardamos ese determinado valor (o dato).

Todas las variables tienen características comunes (por ejemplo un nombre que las identifica) y otras que difieren según el tipo de dato que contengan. Si pudiéramos ver qué contiene internamente una variable, veríamos que en algunos casos contiene directamente el valor y en otros (como en el caso de los objetos) otra cosa.

<a id="var2"></a>

### **¿En qué se diferencia una variable común, nativa, de un objeto?**

[Volver al indice](#alg-base-var)

Consideraremos que las variables nativas son entidades elementales: un número, un carácter, un valor verdadero o falso, que son entendidas por el lenguaje y asociadas a un tipo de dato *reconocible* por el entorno donde el programa corre, mientras que los objetos son entidades complejas que pueden estar formadas por la agrupación de más de un elemento, incluyendo *campos* y *métodos*. Pero todas ocupan un espacio de memoria (que puede ser mayor o menor).

Ahora bien, las variables nativas guardan en sí mismas sus valores, y su tamaño está determinado por el tamaño definido del tipo de dato. En el caso de los objetos, como cada clase tiene su propia definición y el tamaño de sus *instancias solamente puede ser resuelto en tiempo de ejecución*, solamente guardarán la *dirección de memoria* de la *instancia*. Es lo que comúnmente se conoce como puntero.

Es por eso que cuando a una variable de "tipo clase" no se le asigna ningún valor posee *null* como valor *por defecto*. Este *null* implica que la variable no guarda ningún objeto, y es por eso que produce un error de ejecución cuando se intenta acceder a un método de la instancia cuando ésta aún no se ha creado.

<a id="var3"></a>

### **¿A qué nos referimos cuando hablamos de tipos de datos?**

[Volver al indice](#alg-base-var)

En los programas en Java puede ser necesario tanto el uso de datos elementales como de datos complejos. Por eso se usa el término “Tipos de datos” para englobar a cualquier cosa que ocupe un espacio de memoria y que pueda ir tomando distintos valores o características durante la ejecución del programa. Es decir, en vez de hablar de tipos de variables o de tipos de objetos, hablaremos simplemente de tipos de datos.

En Java diferenciamos dos tipos de datos: por un lado, los tipos primitivos, que se corresponden con los tipos de variables en lenguajes como C y que son los datos elementales que hemos citado. Por otro lado, los tipos objeto (que normalmente incluyen métodos)

![Cola](src/variables1.png)

<a id="var4"></a>

### **¿Cómo se declara una variable?**

[Volver al indice](#alg-base-var)

Para definir una variable seguiremos la estructura:

```jsx
tipoDato nombreVariable;

String profesor;

int capacidad;

boolean funciona;
```

Una vez declaradas, podemos asignarles valor de la siguiente manera:

```jsx
profesor = "Catalina";

capacidad = 10;

funciona = true;
```

Si cuando declaramos una variable ya sabemos el valor inicial que queremos que tome, podemos asignarlo en el mismo momento. Por ejemplo:

```jsx
String profesor = "Catalina";
```

<a id="var19"></a>

### **¿Qué son las variables no declaradas y no definidas?**

[Volver al indice](#alg-base-var)

**Variables no declaradas**: son las que no existen en un programa, y no se declaran. Si el programa trata de leer su valor entonces va a arrojar un error.

**Variables no definidas**: son aquellas declaradas en el programa, pero no tienen asignado ningún valor. Si el programa quiere leer el valor de  variable no definida, se devuelve un valor no definido.

<a id="var19-2"></a>

### **¿Qué es la tipificación estática y dinámica?**

[Volver al indice](#alg-base-var)

**Tipificación estática**: es un tipo de sistema de tipado en el que las variables están asociadas a un tipo de dato en tiempo de compilación. Esto significa que el tipo de dato de una variable se conoce en tiempo de compilación y no puede cambiar durante la ejecución del programa.

**Tipificación dinámica**: es un tipo de sistema de tipado en el que las variables están asociadas a un tipo de dato en tiempo de ejecución. Esto significa que el tipo de dato de una variable se conoce en tiempo de ejecución y puede cambiar durante la ejecución del programa.

---

<a id="alg37"></a>

### **Qué son las Pilas y Colas?**

[Volver al indice](#alg-base-pilcol)

Un Tipo de dato abstracto (TDA) es una estructura que integra un conjunto de datos (elementos) con un grupo de operaciones permitidas específicas que determinan la forma en la cual esos elementos son manipulados.

Cada TDA provee de una interfaz a través de la cual podemos realizar las operaciones permitidas, abstrayéndose de cómo estas están implementadas. Esto quiere decir que un mismo TDA puede ser implementado utilizando distintas estructuras de datos internas, pero proveyendo siempre la misma funcionalidad a través de su interfaz (API).

Como primeros ejemplos les mostraremos aquí un par de implementaciones de Pilas y Colas, las que serán implementadas usando ArrayList y Nodos, aunque es posible realizar otras implementaciones, como por ejemplo con Arrays. Elegimos implementar estas porque ninguna de las dos limita *por naturaleza* la cantidad de elementos que se pueden agregar, aunque podríamos crear pilas y colas con un máximo de elementos sin inconveniente.

Respecto a estas implementaciones, y dado que la funcionalidad propia de estas estructura va más allá del tipo elemento contenido (en cierta forma podemos decir que a cada uno de estos TDA no le importa el tipo de información que guarda) todas las implementaciones que presentamos hacen uso de *Generics* pues el *comportamiento* de ambas estructuras tiene que ver con el orden en el cual se puede acceder, agregar y quitar un elemento:

* Las PIlas son estructuras LIFO (Last In, First Out), donde el último elemento que se agrega es el primero que se sacará.
* Las Colas son estructuras FIFO (First In, First Out), donde los elementos se sacan en el mismo orden que fueron agregados.

Un detalle que tienen en común ambas estructuras es que **no permiten**
 acceder a ningún otro elemento contenido en el TDA. no es posible buscar ni elegir otro elemento que no sea el primero que está disponible para su extracción

<a id="alg38"></a>

### **Colas**

[Volver al indice](#alg-base-pilcol)

El primer par de implementaciones que mostramos son las pertenecientes al TDA **`Cola<*TipoElemento*>`** donde, al igual que se hace con ArrayList, *TipoElemento* indica qué clase de elemento podrá contener (puede ser tanto una *clase* como una *interfaz*).

Se puede ver que ambas implementaciones coinciden en el cumplimiento de la interfaz. Puede ser que la implementación con ArrayList sea más simple, pero no olvidemos el trabajo que hace el propio ArrayList en su manejo interno de su contenido, Así, lo único que tendremos que hacer siempre es agregar los nuevos elementos al final (usando el método *`add()`* de ArrayList) y siempre sacando el primer elemento (usando `remove(0)` también del ArrayList). También podemos transferir el valor del método *`isEmpty()`* de ArrayList al propio método *`isEmpty()`* de la cola).

La segunda implementación, basada en nodos, puede parecer más complicada, pero en cuanto a su funcionamiento real es más simple que la anterior pues el trabajo con nodos es más eficiente. Por ejemplo, con esta implementación no se produce el desplazamiento interno de todos los elementos del ArrayList cuando se saca el primer elemento.

![Cola](src/Cola1.png)

<a id="alg39"></a>

### **Pilas**

[Volver al indice](#alg-base-pilcol)

Veamos ahora las implementaciones de **`Pila<*TipoElemento*>`**

La implementación de **`Pila<*TipoElemento*>`** es extremadamente similar, aunque los nombres para los métodos *`add()`*, *`remove()`* y *`get()`* suelen encontrarse como *`push()`*, *`pop()`* y *`peek()`*, respectivamente, y éstos son los nombres que elegimos para diferenciar claramente la Pila de la Cola:

![Pila](src/Pila1.png)

<a id="alg40"></a>

### **Nodo versus dato**

[Volver al indice](#alg-base-pilcol)

Un detalle a tener en cuenta en cuanto a la implementación con nodos es que no debemos confundir el ***nodo*** con el ***dato***: mientras que este último es el *elemento* que se agrega, mira o quita, el primero es su *contenedor* circunstancial y lo guarda en su interior. Por otra parte, los nodos nunca son accesibles a través de la interfaz del TDA y están encapsulados (**composición**). Por lo tanto, así como en la implementación con ArrayList no podemos acceder al mismo, tampoco podemos acceder a la cadena de nodos. Para quien usa el TDA, la implementación es completamente *transparente*.

<a id="alg41"></a>

### **Uso de Pilas y Colas**

[Volver al indice](#alg-base-pilcol)

Para utilizar las estructuras haremos algo muy parecido a lo que hacemos con ArrayList: las declararemos indicando el tipo de elemento contenido dentro de los paréntesis agudos. Pero a diferencia de cuando usamos ArrayList, aquí estamos declarando las estructuras usando interfaces, y con éstas no se pueden crear instancias pues no están implementadas. Por eso, para poder crear alguna instancia de cualquier TDA deberemos elegir alguna de sus implementaciones

Por ejemplo podríamos elegir las implementaciones con Nodos y hacer:

```javascript
Pila<Caja> pilaDeCajas = new PilaNodos<>();
Cola<Persona> filaDePasajeros = new ColaNodos<>();
```

Para agregar una caja en la pilaDeCajas haremos:

```javascript
pilaDeCajas.push(new Caja());
```

Y para agregar una persona a la fila…

```javascript
filaDePasajeros.add(new Persona());
```

Para ver los elementos disponibles haremos:

```javascript
System.out.println(“Caja visible: “ + pilaDeCajas.peek());
System.out.println(“Primera persona en la fila: “ + filaDePasajeros.get());
```

Cabe aclarar que ninguna de estas dos operaciones modifica el estado de las estructuras (no agrega ni quita ningún elemento, simplemente muestran el único que se puede *ver* en cada caso).

```javascript
System.out.println(“Caja visible: “ + pilaDeCajas.pop());
System.out.println(“Primera persona en la fila: “ + filaDePasajeros.remove());
```

Quitan el primer elemento disponible en cada estructura, dejando ambas estructuras vacías pues las dos tenían un único elemento cada una. Ahora el método *isEmpty()* de ambas devolverá *true*

---

<a id="alg42"></a>

### **Arboles**

[Volver al indice](#alg-base-arb)

Es una estructura donde un nodo tiene un solo padre y muchos hijos. Siempre hay una raiz.
Es excelente para cuando queremos insertar conjuntos de datos ordenados o para las búsquedas.

```java
public class Node {
  public int value;
  public Node[] hijos;

  // Puede ser cualquier tipo de dato, no solo int
  public Node(int value) {
    this.value = value;
  }
}
```

<a id="alg43"></a>

### **Qué es un Binary Tree?**

[Volver al indice](#alg-base-arb)

Un arbol en donde cada nodo debe tener como MAXIMO 2 hijos.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

<a id="alg44"></a>

### **Qué es un Binary Search Tree?**

[Volver al indice](#alg-base-arb)

Cada nodo puede tener MAXIMO 2 hijos, y cada descendiente del lado izquierdo debe tener un valor menor o igual al padre y los de la derecha deben tener un valor mayor o igual al padre.

El mismo tiene las propiedades de:

* Cada hijo izquierdo tiene un valor mas pequeño que su padre
* Cada hijo derecho tiene un valor mas grande que su padre
* Cada nodo puede tener hasta dos hijos.

![Algoritmo de búsqueda binaria](src/log3.png)

```jsx
function TreeNode(val, left, right) {
     this.val = val
     this.left = left
     this.right = right
 }
```

<a id="alg45"></a>

#### **Porque se dice que buscar un nodo en un BST es mas eficiente que en un Simple Binary Tree?**

[Volver al indice](#alg-base-arb)

Porque, por la particularidad que tienen los hijos de los nodos de un BST (que uno es mas chico que el otro), se puede seguir el recorrido mas facilmente. Hace que la busqueda sea mucha mas eficiente.

<a id="alg46"></a>

### **Complete Binary Tree**

[Volver al indice](#alg-base-arb)

En este arbol todos los niveles estan completos excepto por el ultimo. Si el ultimo nivel no esta completo, debe estar ocupado de izquierda a derecha. Por ejemplo, todos los nodos tienen 2 hijos excepto el ultimo que tiene uno solo.

Es un arbol 100% balanceado.

```javascript
// Definición de la clase TreeNode para un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Crear un árbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
```

<a id="alg47"></a>

### **Maneras de recorrer un Arbol**

[Volver al indice](#alg-base-arb)

![Tree Traversal: Inorder, Preorder, Postorder, and Level-order](https://assets-global.website-files.com/5d0dc87aac109e1ffdbe379c/60e18e09daeb6db6f4995305_-Vsv_RLYEukjbDMgKxKJpxTnA246o-X1OjUPkl5HvnSiR-dFU4w5qKNaUtw-rq8wD4vMTGxFKtjvKCt7Uthmidpl_ajqRpVqgAH57N1HTpQ5MGBE4HCvE0dq7gTeM4-JtFLkQShX.png)

<a id="alg48"></a>

### **In-Order Traversal**

[Volver al indice](#alg-base-arb)

Rama izquierda del nodo, a continuación el propio nodo y después la rama derecha. Se empieza por la raiz

<a id="alg49"></a>

### **Pre-order traversal**

[Volver al indice](#alg-base)

Primero el nodo padre, despues izquierda y luego derecha

<a id="alg51"></a>

### **Post-order traversal**

[Volver al indice](#alg-base-arb)

Primero la rama izquierda, luego la derecha y luego el padre

<a id="alg50"></a>

### **Recorrido de un Binary Tree**

[Volver al indice](#alg-base-arb)

```javascript
// Definición de la clase TreeNode para un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Función recursiva para recorrer un árbol binario en orden (in-order traversal)
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Visita el nodo izquierdo
        console.log(node.value);    // Imprime el valor del nodo actual
        inOrderTraversal(node.right);// Visita el nodo derecho
    }
}

// Crear un árbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Ejemplo de uso
console.log("Recorrido in-order del árbol binario:");
inOrderTraversal(root);

```

<a id="alg54"></a>

### **Heaps**

[Volver al indice](#alg-base-arb)

Un heap, también conocido como montículo, es una estructura de datos que se utiliza para mantener un conjunto de elementos donde cada elemento tiene una relación de orden con respecto a los demás elementos. La propiedad fundamental de un heap es que el elemento en la raíz (ya sea el más grande o el más pequeño, dependiendo del tipo de heap) siempre cumple con esta relación de orden con respecto a sus hijos.

Hay dos tipos principales de heaps:

1. **Max-Heap**: En un max-heap, el valor de cada nodo es mayor o igual que los valores de sus hijos. Esto significa que el elemento en la raíz es el más grande de todos los elementos en el heap.
2. **Min-Heap**: En un min-heap, el valor de cada nodo es menor o igual que los valores de sus hijos. Esto significa que el elemento en la raíz es el más pequeño de todos los elementos en el heap.

Los heaps se utilizan comúnmente para implementar las siguientes estructuras de datos y algoritmos:

* Cola de prioridad: Se puede utilizar un min-heap o un max-heap para implementar una cola de prioridad, donde los elementos se insertan con una prioridad y se eliminan de acuerdo con esa prioridad.
* Algoritmos de ordenación eficientes: Algunos algoritmos de ordenación, como heapsort, utilizan heaps para ordenar eficientemente un conjunto de elementos.
* Algoritmos de búsqueda eficientes: Algunos algoritmos de búsqueda, como el algoritmo de Dijkstra para encontrar el camino más corto en un grafo, utilizan colas de prioridad basadas en heaps para buscar eficientemente el siguiente nodo a visitar.

Los heaps proporcionan operaciones eficientes para insertar nuevos elementos, eliminar el elemento mínimo o máximo, y encontrar el elemento mínimo o máximo. Estas operaciones tienen una complejidad de tiempo logarítmica en el peor de los casos, lo que hace que los heaps sean una estructura de datos muy eficiente para ciertas aplicaciones.

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Función para obtener el índice del padre de un nodo en el heap
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Función para obtener el índice del hijo izquierdo de un nodo en el heap
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    // Función para obtener el índice del hijo derecho de un nodo en el heap
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    // Función para intercambiar dos elementos en el heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Función para insertar un nuevo elemento en el heap
    insert(value) {
        // Agregar el nuevo elemento al final del heap
        this.heap.push(value);
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyUp();
    }

    // Función para reajustar el heap hacia arriba (hacia la raíz)
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.parentIndex(currentIndex);
            // Si el valor del nodo actual es menor que el valor del padre, intercambiamos los nodos
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break; // Si el valor del nodo actual es mayor o igual al valor del padre, el heap está en orden
            }
        }
    }

    // Función para extraer el elemento mínimo (raíz) del heap
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const minValue = this.heap[0];
        // Reemplazar la raíz con el último elemento del heap
        this.heap[0] = this.heap.pop();
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyDown();
        return minValue;
    }

    // Función para reajustar el heap hacia abajo (hacia las hojas)
    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = this.leftChildIndex(currentIndex);
            const rightChildIndex = this.rightChildIndex(currentIndex);
            let smallestIndex = currentIndex;

            // Encontrar el índice del hijo con el valor más pequeño
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            // Si el valor del nodo actual es mayor o igual que los valores de los hijos, el heap está en orden
            if (smallestIndex === currentIndex) {
                break;
            }

            // Si el valor del nodo actual es mayor que el valor del hijo más pequeño, intercambiamos los nodos
            this.swap(currentIndex, smallestIndex);
            currentIndex = smallestIndex;
        }
    }
}

// Ejemplo de uso de MinHeap
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(4);
console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4]

console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.heap); // Output: [2, 4, 3, 5]
```

<a id="alg35"></a>

### **Generics en Java**

[Volver al indice](#alg-base-3)

Cada tipo primitivo (int, boolean, float..) tiene su clase hermana. Las clases siempre empiezan en mayus, los minuscula son llamados clases envoltorio.

```html

Integer --> int
Boolean --> boolean
Float --> float
Character --> char

edades.add(45) == edades.add(new Integer(45));
```

Los ArrayList reconocen el tipo de dato que evaluan <String> / <Integer> por los **Generics** que ya vienen con java.

<a id="alg36"></a>

### **Estructuras de Datos**

[Volver al indice](#alg-base-3)

Manera de estructurar datos, Array, ArrayList, Pila, Cola..

Por ejemplo, un sorteador posee las sig operaciones:

* Sortear elemento
* Agregar un elemento --> En un ArrayList. Con **programacion generica**
no se que tipo voy a recibir, lo voy a saber cuando me lo mandan. (public class Sorteador<T>, private ArrayList<T> elementos , public void agregarElemento(T elemento){}), se trabaja todo con T (puede tener cualquier otro nombre).
* Esta vacio?

Definimos el tipo del sorteador cuando lo instanciamos para usarlo. Sorteador solo sabe como realiza sus metodos.

#### Agregar muchos elementos a la vez

```java
public void agregar (T[] elementos){
  this.elementos.addAll(Arrays.asList(elementos));
       }
```

También puedo usar un foreach.

#### Instancio mi Sorteador

```java
Sorteador<String> nombres = new Sorteador<>();
```

#### Hacer que mi sorteador sea iterable

```java
public class Sorteador<T> implements Iterable<T>
```

Implementando así el metodo propio de iterable que es iterator(), ya que es una interfaz

```java
@Override
public Iterator<T> iterator(){
return new IteratorSorteador();
}

private class IteratorSorteador implements Iterator<T>{
    @Override
    public boolean hasNext(){
        return !estaVacio();
    }

    @Override
    public T next(){
        return proximoSorteado();
    }
}
```

<a id="alg52"></a>

### **Recursividad**

[Volver al indice](#alg-base-3)

Son problemas que se pueden dividir en subproblemas. Por ejemplo: Calcula el elemento, obten los primero n elementos o un metodo que compute todos..

TODOS los algoritmos recursivos tienen una alternativa iterativa. Su complejidad espacial es `O(cantidad de llamadas)`.

<a id="alg53"></a>

### **Factorial**

[Volver al indice](#alg-base-3)

El factorial de un número entero positivo n, denotado como n!, es el producto de todos los enteros positivos menores o iguales a n. Por ejemplo, el factorial de 5 se denota como 5! y se calcula como 5! = 5 * 4 * 3 * 2 * 1 = 120.

```javascript
// Función recursiva para calcular el factorial de un número
function factorial(n) {
    // Caso base: factorial de 0 es 1
    if (n === 0) {
        return 1;
    }
    // Caso recursivo: n * factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso
console.log(factorial(5)); // Output: 120
```

<a id="var27-1"></a>

### **Que es la programacion funcional?** 💛

[Volver al indice](#alg-base-obj)

Es un paradigma de programación que trata de minimizar los cambios de estado y los datos mutables. Se basa en funciones puras, que son funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos.

```jsx
const sum = (a, b) => a + b;
```

La programación funcional se basa en los siguientes principios:

- **Inmutabilidad**: Los datos no cambian una vez que se han creado.
- **Funciones puras**: Las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos.
- **Composición de funciones**: Las funciones se pueden combinar para crear funciones más complejas.
- **Declaratividad**: Se centra en qué se quiere hacer, no en cómo hacerlo.
- **Transparencia referencial**: Dado un valor de entrada, la función siempre devolverá el mismo valor de salida.
- **Recursión**: Se pueden definir funciones que se llaman a sí mismas para resolver problemas de manera iterativa.
- **Funciones de orden superior**: Las funciones pueden tomar otras funciones como argumentos o devolver funciones como resultado.
- **Evaluación perezosa**: Los valores se calculan solo cuando se necesitan.
- **Currying**: Transformar una función que toma varios argumentos en una secuencia de funciones que toman un solo argumento.

<a id="var20"></a>

### **Que es el Function Factory?**

[Volver al indice](#alg-base-obj)

Son funciones que crean funciones u objetos. Con este patron se puede implementar Currying

```jsx
const crearUsuario = ({ userName, avatar }) => ({
      id: crearUnID(),
      userName,
      avatar,
      cambiarUserName (userName) {
        this.userName = userName;
        return this;
      },
      cambiarAvatar (url) {
        // ejecuta logica para obtener el avatar desde la url
        const nuevoAvatar = obtenerAvtarDesdeUrl(url)
        this.avatar = nuevoAvatar
        return this
      }
    });

        console.log(crearUsuario({ userName: 'Bender', avatar: 'bender.png' }));

    {
      "id":"17hakg9a7jas",
      "avatar": "bender.png",
      "userName": "Bender",
      "cambiarUsername": [Function cambiarUsername]
      "cambiarAvatar": [Function cambiarAvatar]

    }
    */
```

<a id="var23"></a>

### **Que es el Currying?** 💛

[Volver al indice](#alg-base-obj)

Es una técnica de programación funcional que consiste en transformar una función que recibe múltiples argumentos en una secuencia de funciones que reciben un solo argumento.

```jsx
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30); // 60
```

<a id="var23-1"></a>

### **¿Qué son las funciones puras y cómo se relacionan con la programación funcional?**

[Volver al indice](#alg-base-obj)

Las funciones puras son funciones que siempre devuelven el mismo resultado dadas los mismos parametros, no dependen de factores externos como states o variables.

```jsx
function suma (a, b) {
  return a + b;
}

function agregarElemento(array, elemento) {
  return [...array, elemento]; // Crea un nuevo array sin modificar el original
}

const miArray = [1, 2, 3];
const nuevoArray = agregarElemento(miArray, 4);

console.log(miArray);      // [1, 2, 3] (el array original no se modifica)
console.log(nuevoArray);   // [1, 2, 3, 4]

```

Una funcion que no es pura se puede ver asi:

```jsx
let contador = 0;

function incrementar(a) {
  contador++; // Modifica el estado externo
  return a + contador;
}
```

Si utilizas funciones puras, puedes:

- Evitar errores al no modificar datos globales ni estados externos.
- Hacer pruebas unitarias fácilmente, porque su comportamiento es predecible.
- Aprovechar características como la memoización, donde puedes guardar los resultados de funciones puras y reutilizarlos para optimización.

<a id="var11"></a>

### **Event delegation**

[Volver al indice](#alg-base-async)

Por ejemplo, si tenemos botones y queremos hacer eventos para todos los botones, no es viable hacer un evento por boton ya que no es escalable.

Agregamos el evento al container y dependiendo donde es el click (en cual boton), se detecta una cierta clase o propiedad, y se ejecuta el evento correspondiente utilizando [`e.target`](http://e.target) para identificar el elemento, por ejemplo.

<a id="var15"></a>

### **Bubble vs Capture**

[Volver al indice](#alg-base-async)

Cuando agregamos un elemento parece que solo lo agregamos a un elemento DOM pero en realidad este se propaga en una direccion. Podemos elegir cual direccion escuchan nuestros eventos.

- Fase Capture: Llega al evento que dispara el evento
- Fase Target
- Fase Bubbling

<a id="var13"></a>

### **Funciones de "bloqueo" y "no bloqueo"**

[Volver al indice](#alg-base-async)

Cuando emites una función de bloqueo, las demás piezas de código detienen su ejecución hasta que haya sido completado un evento designado de Entrada/Salida.

A su vez, las funciones de no bloqueo le permiten al desarrollador realizar múltiples tareas (Manteniendo múltiples códigos en ejecución) mientras que simultáneamente se realizan múltiples eventos de Entrada/Salida.

<a id="var10-5"></a>

### **¿Cómo implementarías un patrón pub/sub para manejar eventos entre diferentes partes de una aplicación?**

[Volver al indice](#alg-base-async)

El patrón pub/sub (publicación/suscripción) es un patrón de diseño de software que permite la comunicación entre diferentes partes de una aplicación.

```jsx
// Implementación de un patrón pub/sub
const pubsub = (function() {
  const events = {};

  // Suscribirse a un evento
  function subscribe(eventName, fn) {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  }

  // Publicar un evento
  function publish(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }

  return {
    subscribe,
    publish
  };
})();

// Uso del patrón pub/sub
function mySubscriber(data) {
  console.log(data);
}

// Suscribirse a un evento
pubsub.subscribe('event1', mySubscriber); // Suscribirse a 'event1'
pubsub.publish('event1', 'hello, world!'); // Publicar 'event1'

// Salida: 'hello, world!'
```

<a id="ent14"></a>

### **¿Qué ventajas ofrece la inmutabilidad al manejar estructuras de datos? Proporciona un ejemplo práctico.**

[Volver al indice](#alg-base-obj)

Solo a modo de repaso, la inmutabilidad es algo muy propio de la programacion funcional. Algunas de sus ventajas son:

- Al no estar modificando directamente mis datos, evito errores de estado compartido
- Eliminamos los errores de concurrencia, ya que los datos no estan siendo modificados, entonces no tengo necesidad de tener si o si la ultima version de los mismos para poder continuar
- Se pueden implementar facilmente funciones de `undo`, ya que se puede volver a la version anterior muy facilmente
- Integridad de datos, ya que al no estar modificando los datos, no se pueden corromper los mismos

```typescript
const tareasOriginales = [
    { id: 1, texto: 'Hacer la compra', completada: false },
    { id: 2, texto: 'Llamar al médico', completada: true }
];

function agregarTarea(tareas, nuevaTarea) {
    return [...tareas, nuevaTarea];
}

const nuevaTarea = { id: 3, texto: 'Pagar el alquiler', completada: false };
const tareasActualizadas = agregarTarea(tareasOriginales, nuevaTarea);

console.log(tareasOriginales); // La lista original permanece sin cambios
console.log(tareasActualizadas); // Nueva lista con la tarea agregada
```

Un ejemplo de la IA que me gusto mucho para explicar esto: 

Imagina que estás escribiendo un documento en un procesador de textos. Cada vez que haces un cambio, como añadir una palabra, el programa no borra todo el documento y lo reescribe desde cero con la palabra añadida. En lugar de eso, crea una nueva versión del documento con la palabra incluida. Si algo sale mal mientras escribes, siempre puedes volver a la versión anterior sin problemas. Esto es similar a cómo funciona la inmutabilidad en las aplicaciones de software.