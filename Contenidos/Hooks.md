# React Hooks

## **useCallback**
Tiene dos casos de uso:

- Cuando queremos mandar una función a un componente hijo
- Cuando tenemos un useEffect y el efecto tiene una dependencia que es la función, se recomienda usar el useCallback

Lo importamos de la siguiente manera

```python
import React, {useState, useCallback} from "react";
```

Y lo usamos de la siguiente manera:

```python
const [counter, setCounter] = useState(10);

// const increment = () => {
//    setCounter(counter + 1);
//}

const increment = useCallback((num) => {
    setCounter(c => c + num);
}, [setCounter])
```

Se toma como referencia el setCounter, y la c de la función del useCallback hace referencia al counter.

Para solucionar el segundo caso de uso, tenemos que hacer lo siguiente:

```python
const increment = useCallback((num) => {
    setCounter(c => c + num);
}, [setCounter]);

useEffect(() => {
    // code
}, [increment])
```

Si no tuviéramos el useCallback, el useEffect se dispararía ante cada cambio de la función increment.

## **useDispatch**

Es para ejecutar las acciones que podamos tener en nuestro Redux

```markdown
const [name, setName] = useState("");
const [price, setPrice] = useState(0);

const dispatch = useDispatch();

const addProduct = (product) => {
    dispatch({
        type: "ADD_PRODUCT",
        payload: product,
    });
};

const submitNewProduct = (e) => {
    e.preventDefault();

    if (!name.trim()) {
        console.log("Name is required");
        return;
    }

    if (price <= 0) {
        console.log("Price is required");
        return;
    }

    addProduct({
        name,
        price,
    });
};
```
