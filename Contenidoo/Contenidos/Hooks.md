# React Hooks

### **useCallback**
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

### **useDispatch**

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

### **useEffect**

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

### **useState**

Hooks permiten usar los state dentro de los componentes funcionales. El más común es el useState que necesita ser importado de la siguiente manera para ser usado

`import React, {useState} from 'react';`

Y lo manejamos de la siguiente manera:

```
function Hello() {
  const [name, setName] = useState("David");

  return <h1>Hola {name} </h1>;
}
```

name es la manera en la que nos referimos al state en si, `useState` lo inicializa con algún valor, y setName queda como la funcion para modificar el mismo.

Tambien podemos manejar objetos dentro de los `useState`

```
const [coordenadas, serCoodernadas] = useState ({
  latitud: null, longitud: null });

setCoordenadas({latitud: 12, longitud: 13});
```

Los Hooks solo pueden ser usados dentro de un componente funcional, en el caso de los componentes de clase, debemos usar el this para referenciar a un estado.

### **useSelector**

Es para acceder a un state dentro del componente. Es decir, si tenemos un state de error, poder reflejar algo en la UI en funcion de su valor. 

```python
const error = useSelector(state => state.error)
```

### **useRef**

Es otro Hook que viene con React. Asi que debe ser importado en conjunto

```python
import React, {useRef} from 'react';
```

Su utilidad es para hacer referencia a un item en particular sin necesitar que la página o el componente vuelvan a ser renderizados.

Un caso de uso es, teniendo un input de texto y un botón, hacer que el cuadro de texto se seleccione cuando el botón es accionado.

Inicializamos el ref:

```python
const inputRef = useRef();
```

Agregamos el ref al elemento deseado, en este caso, el input de texto:

```python
<input
    ref={inputRef}
    className="form-control"
    placeholder="Nombre"
/>
```

Y se lo agregamos a la función que se ejecuta en el `onClick` del botón, en este caso, la función `handleClick`

```python
const handleClick = () => {
    inputRef.current.select();
}
```

Y si hacemos un console.log de este ref, podemos ver que hace referencia al item de input que configuramos, con todas sus propiedades

!https://miro.medium.com/max/1236/1*UY_6duTresBTHq5p35M8EQ.png

Esto no es el uso más común de este Hook de React. Podemos usarlo para chequear si un componente está montado (o no, si se tiene la referencia es porque el componente no está montado actualmente)

Entonces ante un desmonte del componente, actualizamos el valor de la refernecia de `isMounted` a `false`, como se puede ver en el useEffect() (Recordar que cuando esta en el return, se ejecuta en el **`componentWillUnmount**()` )

Lo podemos utilizar para no llamar a un servicio cuando el componente esta desmontado, por ejemplo.

```python
const isMounted = useRef(true);
const [state, setState] = useState({data});

useEffect(() => {
    return () => {
        isMounted.current = false;
    }
}, [])
```

Notar que nos referimos al valor del ref o para su cambio con current

### **useMemo**

Primero para entender este Hook, debemos entender el uso de Memo en React.

Para prevenir que un componente vuelva a renderizarse si sus props son las mismas usamos Memo, lo memorizamos.

Lo podemos hacer de dos maneras, con memo desde React, si la prop “value” no cambia del valor anterior, el componente no vuelve a renderizarse.

```python
import React, {memo} from 'react';

export const Small = memo(({value}) => {
    console.log("Me volvi a llamar");
    // http?
    
    return (
        <small>{value}</small>
    )
})
```

En el caso del uso del Hook useMemo, es muy parecido a Memo.

```python
const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
```

Se recibe como primer parámetro una función en callback, y como segundo parámetro una variable o estado que debemos chequear su valor para memorizar, o no, la función.

El valor se almacena en la variable memoProcesoPesado, y lo usamos en lugar de la función en todas sus referencias de uso

```python
<p> {memoProcesoPesado} </p>
```

Lo que hace, en resumen, es que si el valor de counter no cambia, la función no se re-ejecuta ante cada nuevo renderizado, solo se vuelve a procesar si counter cambia, no es necesario que sea la misma variable que la función recibe por parámetros.

Evitar re-renderizado de, por ejemplo, una lista

```jsx
const twoRandomProducts = useMemo(() => [...products]
.sort(() => (Math.random() > ...))
.slice(0,2), [products]); // dependencia de products, si products no cambia, memo no cambia
```

### **useReducer**

Es una alternativa a useState que se utiliza de la siguiente manera al momento de inicializar el componente:

`const [state, dispatch] = useReducer(reducer, initialArg, init);`

- **init** es usado como funcion para inicializar el state en caso de que el mismo sea procesado o haga varias acciones.
- **dispatch** ayuda a disparar las acciones hacia el reducer

Cuando son estados simples, es preferible el useState, pero si es algo bastante amplio y con muchas acciones que deben estar cambiando mediante props, ahí puede considerarse el useReducer con el Reducer correspondiente.

```jsx
const initialState = {count: 0};

function reducer(state, action){
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onCLick={() => dispatch({type: 'decrement'}))> - </button>
      <button onCLick={() => dispatch({type: 'increment'}))> + </button>
    </>
  );
}
```

### **useLayoutEffect**

No es un Hook muy común en si mismo. Se dispara de forma asíncrona después de que todas las manipulaciones del DOM se hayan hecho, se usa para tomar referencias, como por ejemplos, tamaños de cajas de textos, etc...

La misma documentación de React recomienda usar `useEffect` en su lugar para evitar el bloqueo de actualizaciones visuales.

Se activa en las mismas fases del `componentDidMount` y `componentDidUpdate` que podiamos ver en los componentes de clase y sus ciclos de vida.

Por ejemplo, para recoger el tamaño de un elemento de nuestro DOM, hacemos lo siguiente.

Lo importamos como un Hook nativo de React

```python
import React, {useLayoutEffect} from 'react';
```

Posee la misma estructura que el useEffect, en el ejemplo este console.log se ejecutará ante cada primer renderizado del componente por su array final []

```python
useLayoutEffect(() => {
    console.log("hola");
}, [])
```

Podemos complementar el ejemplo con useRef, y agregarlo al elemento que queremos evaluar.

```jsx
const pTag = useRef();

useLayoutEffect(() => {
	console.log(pTag.current.getBoundingClientRect());
}, [quote]);
```

En este ejemplo podemos ver que se creó la referencia (pTag) ya posicionada en el elemento a evaluar, y, cada vez que cambia la variable quote de nuestro componente, se ejecutará el `useLayoutEffect`, tomando el tamaño del rectángulo que contiene al elemento, para eso sirve el **`getBoundingClientRect()`** usado en este caso.

Una vez hecho esto, nos aparecerá esto en la consola del navegador ⇒ 

!https://miro.medium.com/max/1400/1*ehoXFftQ5DCge88ZZtS7cQ.png

El primero es cuando el DOM todavía no renderizo el elemento, por eso es todo valor cero. El segundo es cuando ya está renderizado.

Ante cada cambio de quote que se haga, volverá a cero y volverá a tener otro valor, ya que este elemento es el que contiene el valor de quote, de longitud variable (es una frase random)
