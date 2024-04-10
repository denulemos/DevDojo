# Algoritmos - Conceptos generales

### 🧠 Binary Search

Encontrar elementos en un vector ordenado de forma rápida sin recorrer todo el vector corriendo el comienzo para no recorrer lo ya recorrido. 

![Algoritmo de búsqueda binaria](src/log1.png)

### 🧠 ¿Podemos aplicar Binary Search a una Linked List ordenada?

No, no se puede, ya que encontrar el index del elemento del medio es demasiado complicado.

### 🧠 Selection Sort

Busca el valor más pequeño de la matriz y lo intercambia con el primer valor de la matriz. A continuación, encuentra el siguiente valor más pequeño de la matriz y lo intercambia con el segundo valor de la matriz. Continúa iterando a través de la matriz hasta que está completamente ordenada.

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

### 🧠 Insertion Sort

Este algoritmo funciona construyendo una matriz ordenada al principio de la lista. Comienza la matriz ordenada con el primer elemento. A continuación, inspecciona el siguiente elemento y lo cambia hacia atrás en la matriz ordenada hasta que esté en una posición ordenada, y así sucesivamente.

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

### 🧠 Bubble Sort

Es el más simple de todos. Da vuelta los elementos si estan en el orden incorrecto de a pares. Para darse cuenta de que está ordenado, debe hacer una pasada completa sin hacer ningun swipe. 

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

### 🧠 Binary Search Tree

El mismo tiene las propiedades de:

- Cada hijo izquierdo tiene un valor mas pequeño que su padre
- Cada hijo derecho tiene un valor mas grande que su padre
- Cada nodo puede tener hasta dos hijos.

![Algoritmo de búsqueda binaria](src/log3.png)

```jsx
function TreeNode(val, left, right) {
     this.val = val
     this.left = left
     this.right = right
 }
```

### 🧠 ¿Porque se dice que buscar un nodo en un BST es mas eficiente que en un Simple Binary Tree?

Porque, por la particularidad que tienen los hijos de los nodos de un BST (que uno es mas chico que el otro), se puede seguir el recorrido mas facilmente. Hace que la busqueda sea mucha mas eficiente.

### 🧠 ¿Cuales son los beneficios de un Linked List sobre un Array?

Consideremos un escenario donde debemos guardar mucha data en un array, pero, la memoria para guardar esa data no esta disponible de forma continua, en ese caso, no podemos usar un Array. 

En un Linked List, como cada nodo esta conectado con un link, no es necesario que la memoria sea continua. 

### 🧠 ¿Cual es el uso de una Doubly-Linked List cuando se lo compara con un Singly Linked List?

Un Singly Linked List se tienen links derechos, pero no podemos ir para atrás ya que siempre apuntan al siguiente. El DLL posee en cada nodo 3 campos, uno que apunta al nodo anterior, otro al siguiente. 

Se puede reconocer cuando un nodo es el primero ya que su link anterior es Nulo, lo mismo con el último. Es mas eficiente acceder a los elementos en un DLL.

### 🧠 ¿Cual es la diferencia entre un Array y un Linked List?

Un Array es una estructura de datos que almacena elementos de forma contigua en la memoria. Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria.

### 🧠 ¿Cual es la diferencia entre un Linked List y un Doubly Linked List?

Un Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria. Un Doubly Linked List es una estructura de datos que almacena elementos de forma no contigua en la memoria, pero cada nodo tiene un link al nodo anterior y al siguiente.

---

# Big O - Performance de un Algoritmo

O viene por la palabra Orden. La n representa un número o el tamaño de un conjunto

Podemos ejecutar nuestro algoritmo y medir cuanto tiempo tarda en ejecutarse, pero es algo muy variable, dependiendo el algoritmo, el tiempo de ejecución escala con la entrada (lo que recibe), como por ejemplo los algoritmos de búsqueda que pueden funcionar bien con cantidades pequeñas de datos y muy mal con cantidades muy grandes.

La mejor opcion es la que crece menos ante el aumento de datos de entrada

### 🔹**Reglas para calcular Big O**

- Se ignoran las constantes

```html
3 * O(1) => O(1)
0(n/2) => O(n)
```

- Dominancia de términos: Siempre nos quedaremos con el peor caso.

```html
O(n) < O(n^2)
O(n log n) < O(2^n)
```

### 🔹**Calcular Big O**

Supongamos que necesitamos llevar unas valijas a la casa de un primo. No importan cuantas valijas llevemos, el tiempo siempre será el mismo, 5 minutos.

Si quiero llevar las valijas corriendo, supongamos que solo puedo llevar 2 valijas por corrida, entonces, el tiempo que tardaré subirá exponencialmente, dependo de mi entrada, y el tiempo sube de manera lineal.

![](C:\Codigo\Bibler\Contenidos\src\perf1.png)

### 🔹**Notación Asintótica**

La notacion asintotica nos permite simplificar estos graficos, es como redondear decimales.

En desarollo nos interesa el limite superior, que es la notacion de **Big 0, es el comportamiento en el peor de los casos**.

Asi podremos calificar nuestros algoritmos con distintas complejidades. Si mi algoritmo es n² entre mas crezca la entrada, peor se va a comportar, como se puede ver en el siguiente grafico

![performance](C:\Codigo\Bibler\Contenidos\src\perf2.png)

- **O(1)** => Tiempo constante, el algoritmo no variará su rendimiento con la entrada. Por ejemplo, asignaciones de variables.

```jsx
x = x+1; O(1)
y = 200*3; O(1)
print(y); O(1)
O(1) + O(1) + O(1) = O(1)
```

- **O(n)** => Crecimiento Lineal, indica que el crecimiento de complejidad del algoritmo es proporcional al input. Mas datos, mas complejidad. Aparece en iteraciones.

```jsx
for (int i = 0; i<n; i++) 
	print(arr[1]);

// O(1)
```

- n * O(1) = O(n) | La impresion es de complejidad O(1), pero se ejecuta n veces dependiendo del input ya que esta dentro de un bucle for

```jsx
y = 2+2; // O(1)

//O(n)
for(int i = 0; i<n; i++)
	print(arr[1]);

// n + O(1) => O(n)
```

- **O(n^2)** => El crecimiento en complejidad es proporcional al cuadrado del tamaño del input. Son los menos recomendados para datos grandes. Aparece sobre iteraciones dentro de iteraciones. Se le dice **complejidad cuadratica.**

```jsx
for(int i = 0; i<n; i++) // O(n)
	for (int j = 0; i<k; j++) { // O(n)
		print(m[i][j]); // O(1)
	}

n * n * O(1) => O(n^2)
```

No importa si tenemos un algoritmo muy complejo dentro de un if al que probablemente no se entre dependiendo la entrada, SIEMPRE se toma el peor caso posible.

### 🔹**¿Cómo analizamos el codigo?**

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

Los ciclos son considerados `O(n) `, siendo n la entrada. Depende que tan grande sea la entrada, cuanto se recorrerá. Pero, si se itera solo 3 veces, se considera `O(1)`, ya que la entrada es indiferente en la cantidad de ciclos de ejecución.

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

🔹**Multiplicacion de Runtimes**

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

### 🔹**Complejidad Espacial**

Es la cantidad de memoria que debemos usar para resolver un problema de decision.

La memoria se puede reusar, y el tiempo no, es la principal diferencia entre ambas mediciones (tiempo / espacio). A los inputs se los considera read-only.

---

### Ejemplos de Ejercicios

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

---

