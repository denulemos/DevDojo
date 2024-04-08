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

