---
id: algoritmos
title: 🔢 Algoritmos
---

## **Algoritmos de Búsqueda**

---

### Binary Search

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

Su complejidada temporal es de `O(log n)`

![Algoritmo de búsqueda binaria](src/log1.png)

---

### Podemos aplicar Binary Search a una Linked List ordenada?

No, no se puede, ya que encontrar el index del elemento del medio es demasiado complicado.

---

### Binary Search vs Linear Search

La diferencia principal es que en Binary Search se divide el array en dos partes y se busca en la mitad, mientras que en Linear Search se recorre todo el array hasta encontrar el elemento, es la que hacemos tipicamente en codigo.

La complejidad de Binary Search es `O(log n)` y la de Linear Search es `O(n)`.

---

## **Algoritmos de Ordenamiento - Sorting**

### Bubble Sort

- Nos posicionamos al principio del Array
- Si el primer elemento es **mayor** al segundo, los **volteamos**
- Nos movemos al siguiente par y tomamos la misma decision

De esta forma los items mas pequeños "bubble" o van al principio de la lista y los mayores al final.

```js
function bubbleSort(arr) {
  // Copiamos el array para no modificar el original
  const a = [...arr];

  // Recorremos el array varias veces
  for (let i = 0; i < a.length - 1; i++) {
    // En cada pasada, comparamos elementos adyacentes
    for (let j = 0; j < a.length - 1 - i; j++) {
      // Si están en orden incorrecto, los intercambiamos
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
    // Al final de cada pasada, el mayor queda al final
  }

  // Retornamos el arreglo ordenado
  return a;
}

// Uso
console.log(bubbleSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
```

---

### Selection Sort

Es un algoritmo simple pero ineficiente. 

- Buscar el elemento mas pequeño usando un **escaneo lineal**
- Una vez encontrado, moverlo al frente, realizar un swap con el elemento que se encuentra en ese lugar
- Se busca el segundo elemento mas pequeño y se hace lo mismo

Se hace todo esto hasta que todos los elementos estan en su lugar.

```js
function selectionSort(arr) {
  // Copiamos el arreglo para no modificar el original
  const a = [...arr];

  // Recorremos el arreglo y seleccionamos el menor en cada pasada
  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;

    // Buscamos el índice del menor elemento en el resto del arreglo
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }

    // Si encontramos un menor, lo intercambiamos con la posición actual
    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
    }
  }

  // Retornamos el arreglo ordenado
  return a;
}

// Uso
console.log(selectionSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
```

---

### Merge Sort

Merge Sort (ordenamiento por mezcla) es un algoritmo que sigue la idea de “divide y vencerás”:

- Divide el arreglo en mitades hasta que cada parte tenga 1 elemento.
- Luego mezcla esas partes ordenadas comparando elementos y formando arreglos más grandes ya ordenados.

Cada mitad tiene aplicado el mismo algoritmo de ordenamiento, por eso su consumo de memoria es dependiendo del algoritmo elegido. Siempre tiene buen rendimiento `O(n log n)`

```js
function mergeSort(arr) {
  // Caso base: si el arreglo tiene 0 o 1 elemento, ya está ordenado
  if (arr.length <= 1) return arr;

  // Dividimos el arreglo en dos mitades
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Ordenamos recursivamente cada mitad y luego las mezclamos
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Comparamos elementos de ambas mitades y agregamos el menor
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Agregamos los elementos restantes (si hay)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Uso
console.log(mergeSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
```
