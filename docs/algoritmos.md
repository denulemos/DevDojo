---
id: algoritmos
title: Algoritmos
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