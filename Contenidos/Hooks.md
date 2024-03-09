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

## **useEffect**

Reemplaza las funciones del ciclo de vida para los componentes de función, los combina en uno solo, es un Hook.

```python
import React, {useEffect} from 'react';
```

Requiere ser importado para ser usado

Por ejemplo, en el caso del contador, quedaria algo asi con Hooks

```python
function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        alert("Amount of Clicks: " + counter);
    })

    function increment() {
        setCounter(counter++);
    }

    return <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    </div>;
}
```

Cuando el componente se monta y actualiza se ejecuta el useEffect()

Si queremos que useEffect se ejecute solo ante la actualización del componente y no cuando se monta, agregamos un pequeño array vacío al final del useEffect(). Este array puede llenarse de dependencia que puede que usemos al ejecutar el Hook.

```python
useEffect(() => {
    // Codigo
}), []);
```

Y si queremos que cumpla una función de “clean up” como en el caso del componentWillUnmount(), podemos devolver una función que limpie lo necesario

```python
useEffect(() => {
    return () => {
        // cleanup, se ejecuta ultimo
    };
});
```

Si queremos que nuestro useEffect funcione como un componentDidMount() y un componentDidUpdate()

```python
useEffect(() => {console.log("Update"); });
```

Si queremos que funcione como un componentDidMount() (Solo se ejecuta cuando es montado)

```python
useEffect(() => {console.log("Mount");}, []);
```

Y si queremos que se ejecute ante el cambio de un state

```markdown

useEffect(() => {console.log("Mount");}, [state]);
```
