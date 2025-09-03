<a name="react-base"></a>


| Conceptos Generales (Preguntas en común con devhood) |
|----------|
| [¿Cuál es la diferencia entre una librería y un framework?](#rea47-2) |
| [¿Para qué sirve el comando `eject` en React?](#rea49) |
| [¿Qué son las Ref en React?](#rea52-5) |
| [¿Qué es el Virtual DOM?](#rea39) 💛|
| [Que es React Fiber?](#rea24) |
|[Que tener en cuenta para tener una buena performance en React](#rea24-1) 💛|
|[¿Qué es un Fragment en React y para qué se utiliza?](#rea44)|
|[¿Qué es el modo estricto de React (React.StrictMode) y para qué sirve?](#rea68)|
| [¿Que es Redux?](#rea18) 💛|
| [Cuando conviene usar Redux?](#rea19) |
| [¿Cuales son los beneficios de usar Redux?](#rea20) |
| [¿Cual es el flujo de Redux?](#rea22) |
| [Que es ContextAPI?](#rea23) 💛|
| [Redux vs ContextAPI](#rea21) 💛|
|[¿Cuál es la diferencia entre useCallback y useMemo?](#rea7-1) 💛|
|[¿Qué diferencia hay entre useEffect y useLayoutEffect? ¿Cuándo usarías cada uno?](#rea9-1)|
| [useReducer](#rea8) 💛|
| [useLayoutEffect](#rea9) |
|[¿Qué son los custom hooks? ¿Cómo los crearías y para qué sirven?](#rea46) 💛|
|[¿Cómo funcionan las claves (keys) en las listas de React? ¿Por qué son importantes?](#rea45)|
|[¿Qué son las "re-renderizaciones innecesarias" y cómo las evitarías?](#rea455) 💛|
|[¿Qué herramientas usarías para identificar problemas de rendimiento en una aplicación React?](#rea456) 💛|
|[¿Cómo manejarías el estado global sin usar Redux ni Context API?](#rea62) 💛|
|[Componentes de clase vs Componentes de Funcion 💛](#rea62-1)|
| [SSR - React Server Components](#ent69-1) |

| Ciclo de vida y Componentes Clásicos |
|----------|
| [Ciclos de vida en React - Component LifeCycle](#react62) |
| [componentWillReceiveProps()](#rea55) |
| [componentDidMount()](#rea56) |
| [componentWillUnmount()](#rea57) |
| [componentWillMount()](#rea58) |
| [componentDidUpdate()](#rea59) |
| [shouldComponentUpdate()](#rea60) |
| [componentWillUpdate()](#rea61) |
| [useState](#rea4) 💛|
| [useEffect](#rea3) 💛|
|[Puede el useEffect ser asincrono?](#rea3-2) 💛|
| [useRef](#rea6) 💛|
| [useReducer](#rea8) 💛|
| [useCallback](#rea1) 💛|
| [useMemo()](#rea7) 💛|
| [useLayoutEffect](#rea9) |
|[¿Cuál es la diferencia entre useCallback y useMemo?](#rea7-1) 💛|
|[¿Qué diferencia hay entre useEffect y useLayoutEffect? ¿Cuándo usarías cada uno?](#rea9-1)|
|[¿Qué son los custom hooks? ¿Cómo los crearías y para qué sirven?](#rea46) 💛|
| [useRef](#rea6) 💛|
| [useActionState()](#ent69) |
| [startTransition()](#ent70) |
| [useFormStatus()](#ent71) |
| [useOptimistic()](#ent72) |

| Testing |
|----------|
|[Nombrar distintas herramientas de Testing para React](#rea99)|

| Conceptos Generales (Solo en DevDojo) |
|----------|
| [¿Qué es React?](#rea47) |
| [Funciones de alto nivel / Higher order Function](#rea43) |
| [Patrones de disenio en React](#ent44) |
|[Consideraciones de Seguridad en React 🔐](#rea69)|


| Manejo de Estado |
|----------|
| [Redux Async Flow](#ent53) |
| [useDispatch](#rea2)|
| [useSelector](#rea5) |

| Performance |
|----------|
|[¿Cómo funcionan las claves (keys) en las listas de React? ¿Por qué son importantes?](#rea45)|
|[¿Qué son las "re-renderizaciones innecesarias" y cómo las evitarías?](#rea455) 💛|
|[¿Qué herramientas usarías para identificar problemas de rendimiento en una aplicación React?](#rea456) 💛|
|¿Cómo se gestiona el "debounce" o "throttle" en React para eventos como el scroll o input?|
|¿Cómo implementarías un "Suspense" en React para manejar la carga de datos de forma asincrónica? 💛|

---

<a id="rea47-2"></a>

### **¿Cuál es la diferencia entre una librería y un framework?** 

[Volver al indice](#react-base)

Imagina que estás cocinando:

- **Librería:** Es como tener un libro de recetas. Tú eliges qué receta usar y cuándo. Tienes el control y decides cómo organizar tu cocina.  
  Ejemplo: **React**, **Redux**, **Lodash**.

- **Framework:** Es como tener un chef jefe en tu cocina que te dice exactamente qué hacer, en qué orden y cómo organizar todo. El framework manda, tú sigues las reglas.  
  Ejemplo: **Angular**, **Vue**, **Django**.

| Característica         | Librería                | Framework                |
|----------------------- |------------------------|--------------------------|
| ¿Quién tiene el control? | El programador         | El framework             |
| ¿Flexibilidad?         | Mucha                   | Menos, hay que seguir reglas |
| ¿Estructura fija?      | No, cada proyecto puede ser distinto | Sí, todos los proyectos se parecen |
| Ejemplos               | React, Redux, Lodash    | Angular, Vue, Django     |

Por eso, dos proyectos hechos con React pueden ser muy diferentes entre sí, pero dos proyectos hechos con Angular suelen tener la misma estructura.

<a id="rea47"></a>

### **¿Qué es React?**

[Volver al indice](#react-base)

React fue creado por Facebook en el año 2013, y sigue siendo mantenida por él. (ahora Meta). Algunos ejemplos de proveedores que usan React son, además de Facebook, PayPal, Netflix, etc., páginas con un gran flujo de usuarios al día de hoy.

Es rápido y escalable. Es declarativo y basado en componentes. Aclaramos que es lo que queremos renderizar, pero no el cómo. Al ser declarativo, hace que sea facil el seguir patrones de diseño.

Su trabajo es predecible, toda la info va en una sola via. Nos ayuda a prevenir mutaciones involuntarias.

Funciona con la llamada **Programación Reactiva**, cada componente reacciona y se vuelve a renderizar (o no) cuando se produce un cambio de estado o llegan ciertas propiedades.

Al ser una libreria, se puede usar directamente en un HTML (aunque no es la manera mas común), y esta hecho para aplicaciones de cualquier magnitud.

Tambien se puede trabajar del lado del servidor con Node, aplicaciones mobile con React Native y de escritorio con Electron. Todo con el mismo tipo de codigo.

<a id="rea49"></a>

### **¿Para qué sirve el comando `eject` en React?**

[Volver al indice](#react-base)

Cuando creás una app con `create-react-app`, toda la configuración complicada (Webpack, Babel, etc.) está "escondida" para que no tengas que preocuparte. Pero si algún día necesitás cambiar algo avanzado (por ejemplo, agregar un plugin raro), podés usar el comando:

```bash
npm run eject
```

Esto "destapa" toda la configuración y la pone en tu proyecto para que la puedas modificar. **OJO:** No se puede volver atrás fácilmente. Usalo solo si realmente necesitás cambiar la configuración interna de React.

<a id="rea52-5"></a>

### **¿Qué son las Ref en React?**

[Volver al indice](#react-base)

Las **Ref** en React sirven para acceder directamente a un elemento del DOM (por ejemplo, un `<div>`, un `<input>`, etc.) desde tu código JavaScript, sin tener que pasar por el sistema de props o estado de React.

**¿Para qué se usan?**
- Cuando necesitas modificar algo del DOM directamente (por ejemplo, enfocar un input, reproducir un video, medir el tamaño de un elemento, etc.).
- Cuando NO querés que el componente se vuelva a renderizar solo por ese cambio.

**Ejemplo fácil con componente funcional:**

```jsx
import React, { useRef } from 'react';

function MiComponente() {
  const inputRef = useRef(); // Creamos la ref

  const enfocarInput = () => {
    inputRef.current.focus(); // Accedemos al input y lo enfocamos
  };

  return (
    <>
      <input ref={inputRef} placeholder="Escribí algo..." />
      <button onClick={enfocarInput}>Enfocar input</button>
    </>
  );
}
```

**¿Qué pasa acá?**
- `useRef()` crea una referencia.
- Se la damos al `<input ref={inputRef} />`.
- Cuando apretás el botón, el input se enfoca automáticamente.

Las Ref son como un "puente" para manipular directamente elementos del DOM desde React, sin tener que actualizar el estado ni renderizar de nuevo el componente.

<a id="react62"></a>

### **Ciclos de vida en React - Component LifeCycle**

[Volver al indice](#react-base)

Los **ciclos de vida** de los componentes en React son una serie de métodos especiales que permiten ejecutar código en momentos específicos del ciclo de vida de un componente de clase: cuando se monta (aparece en pantalla), se actualiza (cambia su estado o props) o se desmonta (se elimina del DOM).

- **Montaje (Mounting):** El componente se crea y se inserta en el DOM.
- **Actualización (Updating):** El componente se vuelve a renderizar debido a cambios en props o estado.
- **Desmontaje (Unmounting):** El componente se elimina del DOM.

React proporciona métodos como `componentDidMount`, `componentDidUpdate` y `componentWillUnmount` para manejar estas etapas. Algunos métodos antiguos están deprecados y requieren el prefijo `UNSAFE_` para ser usados, ya que pueden causar problemas en futuras versiones de React.

Hoy en día, en componentes funcionales, estos ciclos de vida se gestionan principalmente con el hook `useEffect`.

<a id="rea62-1"></a>

### **Componentes de clase vs Componentes de Funcion 💛**

[Volver al indice](#react-base)

Antes se utilizaban los componentes de clase para componentes complejos, y los componentes de funcion para componentes con poca logica en si mismos, hoy en dia se puede decir que los componentes de funcion reemplazaron completamente a los componentes de clase.

Los componentes de funcion son mas faciles de leer, escribir y testear, y son mas faciles de optimizar. Los componentes de clase son mas dificiles de leer, escribir y testear, y son mas dificiles de optimizar.

| Componentes de Clase | Componentes de Funcion |
| --- | --- |
| Manejaba los props con `this.props` | Maneja los props como argumentos de la funcion |
| Manejaba los ciclos de vida con funciones como `componentDidMount()` | Maneja los ciclos de vida con hooks como `useEffect()` |
| Manejaba los eventos con funciones como `this.handleClick` | Maneja los eventos con funciones como `handleClick` |
| Manejaba el estado con `this.state` | Maneja el estado con `useState` |
| Manejaba el contexto con `this.context` | Maneja el contexto con `useContext` |

<a id="rea55"></a>

### **componentWillReceiveProps()**

[Volver al indice](#react-base)

Se ejecuta cuando hay alguna actualizacion de alguna prop

```jsx
componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
        // do something important here
    }
}
```

<a id="rea56"></a>

### **componentDidMount()**

[Volver al indice](#react-base)

Se llama cuando el componente es renderizado en la pagina. Se puede usar para inicializar cosas, como para pedir la informacion inicial de los componentes.

```jsx
componentDidMount() {
    // get the data I need to correctly display
}
```

<a id="rea57"></a>

### **componentWillUnmount()**

[Volver al indice](#react-base)

Es llamado antes de que el componente sea desmontado del DOM. Se puede usar para liberar recursos. No existe un “DidUnmount” ya que, una vez que se desmonta, ya no se puede hacer nada por el mismo.

```jsx
componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
}
```

<a id="rea58"></a>

### **componentWillMount()**

[Volver al indice](#react-base)

Corresponde a cuando el componente va a montarse, se ejecuta antes de su montaje, es como el constructor del mismo.

```jsx
componentWillMount() {
    // setup your state
}
```

<a id="rea59"></a>

### **componentWillMount()**

[Volver al indice](#react-base)

Se llama cuando el componente se actualiza en el DOM. Podemos hacerlo para, por ejemplo, para avisar que el counter fue incrementado en uno.

```jsx
componentDidUpdate() {
    alert('Number of clicks: ' + this.state.count);
}
```

<a id="rea60"></a>

### **shouldComponentUpdate()**

[Volver al indice](#react-base)

Nos permite decidir si debemos ejecutar o no el render. Muestra con que valores, o bajo que condiciones, se realizará la actualizacion.

```jsx
shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
}
```

<a id="rea61"></a>

### **componentWillUpdate()**

[Volver al indice](#react-base)

Es cuando se esta por ejecutar el render. Nos ayuda a setear valores globales justo antes del mismo.

```jsx
componentWillUpdate() {
    // set some global variables
}
```


<a id="rea1"></a>

### **useCallback()** 

[Volver al indice](#react-base)

Tiene dos casos de uso:

* Cuando queremos mandar una función a un componente hijo
* Cuando tenemos un useEffect y el efecto tiene una dependencia que es la función, se recomienda usar el useCallback

Lo importamos de la siguiente manera

```jsx
import React, {useState, useCallback} from "react";
```

Y lo usamos de la siguiente manera:

```jsx
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

```jsx
const increment = useCallback((num) => {
    setCounter(c => c + num);
}, [setCounter]);

useEffect(() => {
    // code
}, [increment])
```

Si no tuviéramos el useCallback, el useEffect se dispararía ante cada cambio de la función increment.

<a id="rea2"></a>

### **useDispatch - Hook Redux** 

[Volver al indice](#react-base)

Es para ejecutar las acciones que podamos tener en nuestro Redux

```jsx
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

<a id="rea3"></a>

### **useEffect** 💛

[Volver al indice](#react-base)

El hook `useEffect` es un hook que aparecio como reemplazo de las funciones de manejo de ciclo de vida de los componentes de clase.

Podemos hacer que se ejecute ante cada renderizado, solo al montar el componente, solo al desmontar el componente, o solo cuando ciertos valores cambian.

```jsx
// Se ejecuta ante cada renderizado
useEffect(() => {
    console.log('Hola');
});

// Se ejecuta solo al montar el componente
useEffect(() => {
    console.log('Hola');
}, []);

// Se ejecuta solo al desmontar el componente
useEffect(() => {
    return () => console.log('Adios');
}, []);

// Se ejecuta solo cuando el valor de `value` cambia
useEffect(() => {
    console.log('Hola');
}, [value]);
```

Se pueden realizar diversas cosas dentro del useEffect, como llamadas a las APIs, para las cuales se recomienda que esten en otra funcion aparte y no dentro del useEffect, convirtiendolo en asincrono, ya que React espera que useEffect devuelva `undefined` o una funcion de limpieza, no una Promise. Probablemente funcione, pero tendremos un error en la consola.

<a id="rea3-2"></a>

### **Puede el useEffect ser asincrono?** 💛

[Volver al indice](#react-base)

El useEffect **no** deberia ser asincrono en si mismo, ya que no se puede retornar una promesa. Pero si se puede llamar a una funcion asincrona dentro del useEffect

```jsx
useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://api.com");
        const data = await response.json();
        console.log(data);
    }

    fetchData();
}, []);
```

Esto es porque el useEffect esta hecho para devolver una funcion de clean up, y no una promesa.

En el caso de que el useEffect en si mismo sea asincrono, el codigo funcionara, pero habra un error en la consola.

![useeffect error](https://blog.logrocket.com/useeffect-react-hook-complete-guide/)

<a id="rea4"></a>

### **useState**

[Volver al indice](#react-base)

Hooks permiten usar los state dentro de los componentes funcionales. El más común es el useState que necesita ser importado de la siguiente manera para ser usado

`import React, {useState} from 'react';`

Y lo manejamos de la siguiente manera:

```jsx
function Hello() {
  const [name, setName] = useState("David");

  return <h1>Hola {name} </h1>;
}
```

name es la manera en la que nos referimos al state en si, `useState` lo inicializa con algún valor, y setName queda como la funcion para modificar el mismo.

Tambien podemos manejar objetos dentro de los `useState`

```jsx
const [coordenadas, serCoodernadas] = useState ({
  latitud: null, longitud: null });

setCoordenadas({latitud: 12, longitud: 13});
```

Los Hooks solo pueden ser usados dentro de un componente funcional, en el caso de los componentes de clase, debemos usar el this para referenciar a un estado.

<a id="rea5"></a>

### **useSelector - Hook Redux**

[Volver al indice](#react-base)

Es un hook dado por Redux. 

Es para acceder a un state dentro del componente. Es decir, si tenemos un state de error, poder reflejar algo en la UI en funcion de su valor.

```jsx
const error = useSelector(state => state.error)
```

<a id="rea6"></a>

### **useRef**

[Volver al indice](#react-base)

Es otro Hook que viene con React. Asi que debe ser importado en conjunto

```jsx
import React, {useRef} from 'react';
```

Su utilidad es para hacer referencia a un item en particular sin necesitar que la página o el componente vuelvan a ser renderizados.

Un caso de uso es, teniendo un input de texto y un botón, hacer que el cuadro de texto se seleccione cuando el botón es accionado.

Inicializamos el ref:

```jsx
const inputRef = useRef();
```

Agregamos el ref al elemento deseado, en este caso, el input de texto:

```jsx
<input
    ref={inputRef}
    className="form-control"
    placeholder="Nombre"
/>
```

Y se lo agregamos a la función que se ejecuta en el `onClick` del botón, en este caso, la función `handleClick`

```jsx
const handleClick = () => {
    inputRef.current.select();
}
```

Y si hacemos un console.log de este ref, podemos ver que hace referencia al item de input que configuramos, con todas sus propiedades

!<https://miro.medium.com/max/1236/1*UY_6duTresBTHq5p35M8EQ.png>

Esto no es el uso más común de este Hook de React. Podemos usarlo para chequear si un componente está montado (o no, si se tiene la referencia es porque el componente no está montado actualmente)

Entonces ante un desmonte del componente, actualizamos el valor de la refernecia de `isMounted` a `false`, como se puede ver en el useEffect() (Recordar que cuando esta en el return, se ejecuta en el **`componentWillUnmount**()` )

Lo podemos utilizar para no llamar a un servicio cuando el componente esta desmontado, por ejemplo.

```jsx
const isMounted = useRef(true);
const [state, setState] = useState({data});

useEffect(() => {
    return () => {
        isMounted.current = false;
    }
}, [])
```

Notar que nos referimos al valor del ref o para su cambio con current

<a id="rea7"></a>

### **useMemo**

[Volver al indice](#react-base)

Primero para entender este Hook, debemos entender el uso de Memo en React.

Para prevenir que un componente vuelva a renderizarse si sus props son las mismas usamos Memo, lo memorizamos.

Lo podemos hacer de dos maneras, con memo desde React, si la prop “value” no cambia del valor anterior, el componente no vuelve a renderizarse.

```jsx
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

```jsx
const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
```

Se recibe como primer parámetro una función en callback, y como segundo parámetro una variable o estado que debemos chequear su valor para memorizar, o no, la función.

El valor se almacena en la variable memoProcesoPesado, y lo usamos en lugar de la función en todas sus referencias de uso

```jsx
<p> {memoProcesoPesado} </p>
```

Lo que hace, en resumen, es que si el valor de counter no cambia, la función no se re-ejecuta ante cada nuevo renderizado, solo se vuelve a procesar si counter cambia, no es necesario que sea la misma variable que la función recibe por parámetros.

Evitar re-renderizado de, por ejemplo, una lista

```jsx
const twoRandomProducts = useMemo(() => [...products]
.sort(() => (Math.random() > ...))
.slice(0,2), [products]); // dependencia de products, si products no cambia, memo no cambia
```

<a id="rea7-1"></a>

### **¿Cuál es la diferencia entre useCallback y useMemo?**

[Volver al indice](#react-base)

Tanto useCallback como useMemo son hooks de React diseñados para optimizar el rendimiento al evitar cálculos innecesarios o recreaciones de funciones/valores. La diferencia principal radica en qué optimizan y cómo se usan:

- `useCallback` memoriza funciones, evitando que se creen nuevas instancias de la función en cada renderizado. Se usa para evitar que las funciones se pasen como propiedades a componentes hijos se vuelvan a renderizar innecesariamente.

```jsx
const memoizedCallback = useCallback(() => {
  // lógica de la función
}, [dependencias]);

const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);

return <Button onClick={handleClick} />;
```

- `useMemo` memoriza valores, evitando que se recalculen en cada renderizado. Se usa para evitar cálculos costosos en componentes funcionales.

```jsx
const memoizedValue = useMemo(() => {
  // lógica de cálculo
  return resultado;
}, [dependencias]);

const filteredItems = useMemo(() => {
  return items.filter(item => item.isActive);
}, [items]);

return <ItemList items={filteredItems} />;
```

Ambos dependen de un array de dependencias para saber cuándo deben actualizarse. Si las dependencias no cambian, el hook devuelve el valor o la función memorizada.

<a id="rea8"></a>

### **useReducer**

[Volver al indice](#react-base)

Es una alternativa a useState que se utiliza de la siguiente manera al momento de inicializar el componente:

`const [state, dispatch] = useReducer(reducer, initialArg, init);`

* **init** es usado como funcion para inicializar el state en caso de que el mismo sea procesado o haga varias acciones.
* **dispatch** ayuda a disparar las acciones hacia el reducer

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
      <button onCLick={() => dispatch({type: 'decrement'})}> - </button>
      <button onCLick={() => dispatch({type: 'increment'})}> + </button>
    </>
  );
}
```

<a id="rea9"></a>

### **useLayoutEffect**

[Volver al indice](#react-base)

No es un Hook muy común en si mismo. Se dispara de forma asíncrona después de que todas las manipulaciones del DOM se hayan hecho, se usa para tomar referencias, como por ejemplos, tamaños de cajas de textos, etc...

La misma documentación de React recomienda usar `useEffect` en su lugar para evitar el bloqueo de actualizaciones visuales.

Se activa en las mismas fases del `componentDidMount` y `componentDidUpdate` que podiamos ver en los componentes de clase y sus ciclos de vida.

Por ejemplo, para recoger el tamaño de un elemento de nuestro DOM, hacemos lo siguiente.

Lo importamos como un Hook nativo de React

```jsx
import React, {useLayoutEffect} from 'react';
```

Posee la misma estructura que el useEffect, en el ejemplo este console.log se ejecutará ante cada primer renderizado del componente por su array final []

```jsx
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

!<https://miro.medium.com/max/1400/1*ehoXFftQ5DCge88ZZtS7cQ.png>

El primero es cuando el DOM todavía no renderizo el elemento, por eso es todo valor cero. El segundo es cuando ya está renderizado.

Ante cada cambio de quote que se haga, volverá a cero y volverá a tener otro valor, ya que este elemento es el que contiene el valor de quote, de longitud variable (es una frase random)

<a id="rea9-1"></a>

### **¿Qué diferencia hay entre useEffect y useLayoutEffect? ¿Cuándo usarías cada uno?**

[Volver al indice](#react-base)

Ambos son Hooks de React que se utilizan para ejecutar efectos secundarios en componentes funcionales. La diferencia principal entre useEffect y useLayoutEffect es cuándo se ejecutan.

1. **useEffect**:
   - Se ejecuta después de que el navegador haya renderizado el componente y actualizado el DOM.
   - Es asincrónico y no bloquea la actualización visual del navegador.
   - Se utiliza para tareas que no requieren acceso inmediato al DOM, como llamadas a API, suscripciones a eventos y actualizaciones de estado.
   - Se ejecuta después de que el navegador haya pintado el componente en la pantalla, lo que puede causar un parpadeo o retraso en la actualización visual.
   - Se recomienda usar useEffect para la mayoría de los efectos secundarios, ya que es más eficiente y no bloquea la actualización visual.

2. **useLayoutEffect**:
    - Se ejecuta de forma síncrona después de que el navegador haya renderizado el componente pero antes de que se actualice el DOM.
    - Es síncrono y bloquea la actualización visual del navegador.
    - Se utiliza para tareas que requieren acceso inmediato al DOM, como medir elementos, calcular geometría y realizar animaciones.
    - Se ejecuta antes de que el navegador pinte el componente en la pantalla, lo que garantiza que los cambios en el DOM se reflejen de inmediato.
    - Se recomienda usar useLayoutEffect solo cuando sea necesario acceder al DOM de forma síncrona y realizar cambios que afecten la geometría de los elementos.

En resumen, useEffect se utiliza para efectos secundarios asincrónicos que no requieren acceso inmediato al DOM, mientras que useLayoutEffect se utiliza para efectos secundarios síncronos que requieren acceso inmediato al DOM y afectan la geometría de los elementos.

<a id="rea18"></a>

### **¿Que es Redux?**

[Volver al indice](#react-base)

Redux permitira manejar el state global de manera facil conforme van creciendo, tambien ayuda a manejar los datos dependiendo de las acciones del usuario. Fue creado por un dev del equipo de React.

- Solo hay 1 state principal
- El state cambia depende lo que pase en la interfaz de usuario
- Solo ciertas funciones cambiarán el State
- Solo se hace un cambio a la vez

Redux es un contenedor de estado que se usa generalmente con React. 

En el **Redux Store** se guarda el estado de la aplicacion al cual podemos acceder mediante **Actions**. 

```javascript
{
  type: 'PEDIR_PIZZA',
  payload: { item: 'pizza' }
}
```

El `type` es el tipo de accion que se desea realizar de una cantidad pre-definida, el `payload` es la informacion necesaria para realizar este cambio. Este pedido es manejado por el **Reducer**

```javascript
function pedidosReducer(state = [], action) {
  switch (action.type) {
    case 'PEDIR_PIZZA':
      return [...state, action.payload.item]; // Añade 'pizza' al pedido
    default:
      return state; // Devuelve el estado tal cual si no reconoce la acción
  }
}
```

Una vez que el cambio esta hecho, todos los componentes que la consumen estan al tanto de este cambio y cambian en consecuencia.

Redux guarda la informacion en un solo lugar de la aplicacion y la distribuye a todos los componentes que la necesitan, y es facil de depurar. Es especialmete util en aplicaciones grandes.

<a id="rea19"></a>

### **Cuando conviene usar Redux?**

[Volver al indice](#rea-base)

Si la app es pequeña, se recomienda ContextAPI o hooks. Si es grande, y va a ser mantenido por varias personas, se recomeinda Redux

- No hace la app mas rapida
- Existe Redux para muchos frameworks, no solo React
- No es necesario usarlo en cada proyecto

<a id="rea20"></a>

### **¿Cuales son los beneficios de usar Redux?**

[Volver al indice](#react-base)

- Como su estructura es muy estricta, es muy facil de mantener y de organizar, tambien es muy estable.
- Da una fiable representacion del servidor, es muy util especialmente para presentaciones preliminares. Puede optimizar, por ejemplo, motores de busqueda.
- Provee muchas herramientas para los devs
- Es facil de probar, las funciones de redux y el codigo en si son pequeñas y atomicas.

<a id="rea21"></a>

### **Redux vs ContextAPI**

[Volver al indice](#react-base)

**Context**

- Context es una herramienta de React que permite pasar datos a traves del arbol de componentes sin tener que pasar props manualmente en cada nivel
- Context es una buena opcion para datos que son necesarios en muchos componentes de la aplicacion
- Context es una buena opcion para datos que no cambian frecuentemente
- Context viene integrado a React
- Es facil de entender para principiantes
- No requiere mucho codigo boilerplate

**Redux**

- Redux es una libreria de manejo de estado que permite manejar el estado de la aplicacion de manera predecible
- Redux es una buena opcion para datos que cambian frecuentemente
- Redux es una buena opcion para aplicaciones grandes con muchos componentes
- Redux no viene integrado a React, se debe instalar por separado

<a id="rea22"></a>

### **¿Cual es el flujo de Redux?**

[Volver al indice](#react-base)

Store

- Contiene el state y solo hay un Store por app

Dispatch

- Ejecuta una accion, es una funcion que maneja un state

```jsx
dispatch(addProductOk(product))
```

Actions

- Objetos en JS con tipo y payload (datos que modificaran el state)
- Los componentes no deben modificar el state directamente, se modifica por medio de funciones llamadas Actions

Subscribe

- Similar al event listener para el state

Reducer

- Funciones que saben que hacer con las acciones y el payload

<a id="rea23"></a>

### **Que es ContextAPI?**

[Volver al indice](#react-base)

ContextAPI es una herramienta que viene con React de manera nativa que cumple la misma funcion que Redux pero de una manera mucho mas pequenia. 
A veces nos puede suceder que si queremos que cierta informacion sea usada por varios componentes caemos en un **prop drilling** donde terminamos pasando esas mismas props de un componente a otro, incluso si ese componente no lo necesita en su totalidad. 

```jsx
const App = () => {
  const user = { name: 'John Doe' }; // Datos globales

  return (
    <Parent user={user} />
  );
};

const Parent = ({ user }) => {
  return (
    <Child user={user} />
  );
};

const Child = ({ user }) => {
  return <h1>{user.name}</h1>;
};
```

En este caso, ContextApi soluciona este problema disponibilizando un sistema de estado global, haciendo que solo el que lo necesita acceda a la informacion. 

ContextApi funciona bajo 3 conceptos:

- Context: Es un contenedor para datos que pueden ser compartidos entre componentes

```jsx
const UserContext = React.createContext();
```

- Provider: Es un componente que provee la infomacion a los componentes que lo precisan, solo se deben poner dentro de este los componentes que necesitan la informacion.

```jsx
<UserContext.Provider value={{ name: 'John Doe' }}>
  <Parent />
</UserContext.Provider>
```

- Consumer: Es el componente que precisa acceder a esta informacion.

```jsx  
import React from 'react';
import { UserContext } from './UserContext';

const Child = () => {
  return (
    <UserContext.Consumer>
      {(user) => <h1>Hola, {user.name}!</h1>}
    </UserContext.Consumer>
  );
};
```

Tambien se puede utilizar el hook `useContext` que facilita la consumicion de esta informacion.

```jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Child = () => {
  const user = useContext(UserContext); // Consumir el contexto directamente
  return <h1>Hola, {user.name}!</h1>;
};
```

Las limitaciones que posee ContextApi son

- Cuando el valor del contexto cambia, los elementos que la consumen se van a re-renderizar de manera innecesaria en algunos casos, es por eso que es recomendable dividir los componentes en unidades mas pequenias para poder manejar esto de mejor manera
- Si preciso manejar estados mas complejos, Redux sigue siendo la mejor opcion


<a id="rea24"></a>

### **Que es React Fiber?**

[Volver al indice](#rea-base)

La arquitectura de React hizo que fuera muy facil trabajar no solo en web si no tambien en mobile (React Native) y en hasta aplicaciones de Realidad Virtual. Asi los dev de React decidieron separar su algoritmo de reconciliacion (el que compara los cambios entre DOM y VDOM) y el lienzo donde esos cambios se muestran (Web, Mobile, etc..)

Fiber fue diseñado para mejorar el rendimiento, particularmente en aplicaciones que requieren animaciones, interacciones complejas y actualizaciones de gran volumen.

React Fiber organiza la renderización en dos fases principales:

- **Fase de Render (Reconciliación)**: Se construye o actualiza un árbol de componentes de manera asíncrona. React decide qué cambios deben aplicarse al DOM basándose en las prioridades.
- **Fase de Commit**: Es sincrónica y rápida. Los cambios calculados en la fase de render se aplican al DOM real.

React Fiber no cambia cómo los desarrolladores escriben código React, pero mejora significativamente el rendimiento y la flexibilidad de las aplicaciones React modernas. Es la base que permite que React maneje de manera eficiente aplicaciones cada vez más interactivas y complejas.

<a id="rea24-1"></a>

### **Que tener en cuenta para tener una buena performance en React** 💛

[Volver al indice](#react-base)

- Usar memorizacion para evitar renderizados innecesarios. Usar `useMemo` para valores y `useCallback` para funciones.

```jsx
import React, { useMemo, useCallback } from 'react';

const Componente = ({ lista }) => {
  const listaOrdenada = useMemo(() => lista.sort(), [lista]);
  const manejarClick = useCallback(() => console.log('Clicked'), []);
  return <button onClick={manejarClick}>Ordenar</button>;
};
```

- Usa contextos (React Context) de manera adecuada para evitar actualizaciones globales innecesarias.
- Evita la mutacion directa de objetos y arrays. Usa `useState` y `useReducer` para actualizar el estado de manera inmutable.
- Divide la logica en componentes mas pequeños y reutilizables.
- Usar la propiedad `key` cuando se renderizan listas para mejorar el rendimiento, ya que ayuda a React a identificar elementos únicos y realizar actualizaciones más eficientes.
- Usar React Window o React Virtualized para renderizar grandes listas de elementos de manera eficiente.

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const App = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
```

- Usa React.lazy y Suspense para cargar componentes bajo demanda y mejorar los tiempos de carga.
- Usa herramientas como Webpack para dividir el código en partes más pequeñas y cargar solo lo necesario.
- Limita el uso de operaciones manuales con el DOM que pueden interferir con la reconciliación de React.
- Usa herramientas como className o bibliotecas como styled-components en lugar de pasar estilos inline directamente en los elementos. Evita renders excesivos de estilos dinámicos.
- Usa Server-Side Rendering (SSR) con herramientas como Next.js para mejorar tiempos de carga inicial
- Usa las herramientas de React para identificar problemas de rendimiento como React DevTools y React Profiler.
- Optimización de imágenes, carga diferida y compresión de recursos para mejorar los tiempos de carga y la experiencia del usuario. Usa formatos modernos como WebP.

<a id="rea39"></a>

### **¿Qué es el Virtual DOM?** 💛

[Volver al indice](#react-base)

Para que React pueda efectuar esta suerte de “recarga parcial por pedazos” de una página, debe usar el Virtual DOM, que es una representación del DOM real.

Cuando un elemento cambia, primero se actualiza el VDOM de forma muy rápida, luego, React compara este VDOM propio con el DOM real, y basándonos en sus diferencias, únicamente aplica los cambios necesarios para que ambos coincidan.

Todo sale de app.js, que contiene X cantidad de componentes, y estos poseen Z cantidad de componentes en sí mismos. Si actualizamos a `app.js`, se actualiza la página entera, pero si actualizamos algo dentro de estos componentes, únicamente se actualizará de este componente “para arriba” en la jerarquía de componentes.

Más arriba la jerarquía, más refrescos habrá. Un componente hijo, idealmente, no deberia necesitar modificar el estado del componente padre.

- Aumenta la velocidad de la aplicacion
- No acapara mucha memoria, hace que el uso de la misma sea mucho mas eficiente
- Provee una capa adicional de Scripting, dandole un peso mas a la CPU

![Virtual Dom](src/vdom.png)

<a id="ent53"></a>

### **Redux Async Flow**

[Volver al indice](#entrevista-base)

Redux Async Flow es el flujo asincrono de Redux. Si bien Redux maneja los estados de manera asincrona, a veces necesitamos llevar a cabo tareas asincronas en si mismos, como llamar a una API, y Redux no entiende funciones asincronas, no sabe esperar a que la API termine su procesamiento. 

Para solucionar esto se usa un middleware llamado `Redux Thunk` o `Redux Saga` que funciona como intermediario entre los actions y los reducers, los mismos permiten ejeuctan funciones asincronas en las acciones y despachar nuevas acciones una vez que la primera tarea asincrona termino.

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
```

Se suele manejar la informacion en un objeto con 3 elementos:

```javascript
{
  loading: false,
  data: [...], // Datos obtenidos
  error: null
}
```

<a id="ent69"></a>

### **useActionState en React**

[Volver al indice](#entrevista-base)

Es un hook que en React 18 fue considerado experimental, utilizado para simpliificr la gestion de acciones asincronas en los componentes, como el estado de `loading`, `error` y `data`.

```jsx
const [state, action, isPending] = useActionState(actionFunction, initialState);
```

- `actionFunction` es la funcion asincrona
- `initialState` es el valor inicial del estado

Este hook nos ahorra usar multiples `useState` para el manejo de estos estados

<a id="ent70"></a>

### **startTransition() React**

[Volver al indice](#entrevista-base)

La función `startTransition()` de React es una herramienta que se utiliza para gestionar actualizaciones de estado que no son críticas para la interacción inmediata del usuario. Su principal objetivo es mejorar la **experiencia de usuario** al permitir que las actualizaciones menos importantes no bloqueen el hilo de ejecución principal y no interfieran con las interacciones críticas.

### ¿Cómo funciona `startTransition()`?

En React, las actualizaciones de estado, por defecto, son **sincrónicas**, lo que significa que cualquier cambio en el estado de un componente o renderización se ejecutará inmediatamente, lo cual puede causar problemas de rendimiento si el componente tiene un renderizado pesado o si hay muchos cambios de estado que se ejecutan al mismo tiempo.

`startTransition()` es una API que permite que ciertas actualizaciones no se consideren prioritarias. Cuando usas `startTransition()`, le estás diciendo a React que esta actualización es **baja prioridad** y puede ser interrumpida si el hilo está ocupado haciendo tareas más importantes, como responder a las interacciones del usuario.

### ¿Cómo se usa `startTransition()`?

Aquí tienes un ejemplo básico de cómo usar `startTransition()`:

```javascript
import React, { useState, startTransition } from 'react';

function MyComponent() {
  const [isPending, setIsPending] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    // Aquí usamos startTransition para hacer que el cambio en el estado de inputValue sea de baja prioridad
    startTransition(() => {
      setInputValue(value);
    });

    // Marca si la actualización está pendiente
    setIsPending(true);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {isPending && <div>Updating...</div>}
    </div>
  );
}
```

1. **Prioridad baja para actualizaciones de estado**: Dentro del `startTransition()`, el cambio de estado `setInputValue(value)` se marca como una actualización de baja prioridad, lo que significa que React intentará procesar esta actualización solo cuando haya tiempo disponible, sin bloquear interacciones importantes como el input del usuario.
   
2. **Optimización del rendimiento**: Esto permite que, si hay una actualización costosa o renderizado en progreso, las actualizaciones menos importantes no retrasen la interacción del usuario.

### ¿Cuándo se debería usar `startTransition()`?

Se debe usar `startTransition()` cuando tengas actualizaciones de estado o renderizados que no necesiten ser procesados inmediatamente y que no afecten la interacción directa del usuario. Algunos ejemplos incluyen:

- **Filtros o búsquedas en listas grandes**: Si tienes una búsqueda que filtra una lista muy grande y el filtrado no es urgente.
- **Actualización de datos en segundo plano**: Si necesitas actualizar ciertos estados o cálculos en segundo plano sin interrumpir las interacciones del usuario.
- **Animaciones o cambios visuales complejos**: Para renderizados pesados o animaciones que no son necesarias de inmediato, como transiciones de interfaz de usuario.

### Beneficios de `startTransition()`

1. **Mejora de la experiencia del usuario**: Evita que la interfaz se congele o se sienta lenta debido a renderizados pesados.
2. **Optimización del rendimiento**: Al gestionar las actualizaciones de estado con menor prioridad, React puede hacer las actualizaciones más críticas primero, manteniendo la interfaz fluida.
3. **Control más fino de las actualizaciones**: Permite una separación entre las tareas que son cruciales para la interacción del usuario y las que pueden esperar.

### Limitaciones

- **No reemplaza el uso de `useEffect`**: `startTransition()` no se debe usar para efectos secundarios que deban ocurrir de manera inmediata (como realizar peticiones API).
- **No aplica a todas las actualizaciones de estado**: Debe usarse en contextos donde el rendimiento es una preocupación, pero no es necesario para todas las actualizaciones de estado.

<a id="ent71"></a>

### **useFormStatus() React**

[Volver al indice](#entrevista-base)

`useFormStatus()` es un **hook** en React que se introdujo en React 18 como parte de las nuevas APIs para mejorar la experiencia de formularios y manejar estados de carga en el proceso de envío de formularios. Está diseñado para trabajar con formularios que pueden estar en un estado de envío o validación y es especialmente útil para mejorar la accesibilidad y la usabilidad cuando los formularios se envían de manera asincrónica.

`useFormStatus()` te permite manejar el estado de un formulario de forma declarativa y reaccionar a las actualizaciones del estado del formulario, como si está enviando datos (en proceso), si hay un error o si se ha completado con éxito.

Este hook ofrece un estado relacionado con la validación y el envío del formulario, incluyendo propiedades como `pending` (si la acción de envío está pendiente), `submitted` (si el formulario ha sido enviado), y `error` (si hubo un error durante el envío).

El hook `useFormStatus()` devuelve un objeto con los siguientes valores:

1. **`pending`**: Un valor booleano que indica si el formulario está en proceso de envío. Es `true` cuando el formulario está esperando una respuesta (por ejemplo, esperando una respuesta del servidor).
2. **`submitted`**: Un valor booleano que indica si el formulario ha sido enviado.
3. **`error`**: Un valor que contiene cualquier error que ocurra durante el proceso de envío del formulario (puede ser un objeto de error si se produjo algún fallo).

Ejemplo básico de uso

Aquí te dejo un ejemplo básico de cómo usar `useFormStatus()` en un formulario React.

```javascript
import React, { useState } from 'react';
import { useFormStatus } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  // Usamos useFormStatus para manejar el estado del formulario
  const { pending, submitted, error } = useFormStatus();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simula el envío del formulario (por ejemplo, hacer una petición a un servidor)
    try {
      // Aquí enviaríamos el formulario a una API, pero en este ejemplo solo simulamos
      await new Promise((resolve) => setTimeout(resolve, 2000));  // Simulando un retraso
      // Si el envío es exitoso, podemos marcar el formulario como enviado
      console.log('Formulario enviado con éxito');
    } catch (error) {
      console.log('Error en el envío:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      
      <button type="submit" disabled={pending}>
        {pending ? 'Enviando...' : 'Enviar'}
      </button>

      {submitted && <p>Formulario enviado con éxito.</p>}
      {error && <p>Error al enviar el formulario: {error.message}</p>}
    </form>
  );
}

export default MyForm;
```

Explicación del código:

1. **Estados de Formulario**:
   - Se utiliza `useState` para manejar los valores del formulario (`formData`).
   - Se utiliza `useFormStatus()` para obtener el estado del formulario en cuanto a su envío (`pending`, `submitted`, `error`).
   
2. **Envío del Formulario**:
   - El formulario está configurado para simular el proceso de envío de datos al hacer una petición simulada con `setTimeout`. 
   - Durante este proceso, el botón de envío está deshabilitado si el formulario está en estado `pending`, es decir, si está esperando una respuesta.
   
3. **Mensajes de Estado**:
   - Si el formulario se envía con éxito, se muestra un mensaje diciendo "Formulario enviado con éxito".
   - Si hay un error durante el envío, se muestra un mensaje de error.

Beneficios de usar `useFormStatus()`

- **Mejora la accesibilidad**: Proporciona un estado claro y consistente sobre el envío del formulario, lo que es útil para los lectores de pantalla y otras herramientas de accesibilidad.
- **Control de estado de carga**: Permite gestionar y mostrar los estados de carga, éxito y error sin tener que manejar manualmente estos estados.
- **Flujo de trabajo simplificado**: Facilita la gestión del estado relacionado con el formulario, simplificando la lógica que generalmente involucra manejar los estados de validación, envío y error.

Consideraciones

- **Compatibilidad**: Asegúrate de que tu versión de React sea 18 o posterior, ya que `useFormStatus()` es una característica nueva que fue introducida en React 18.
- **Flujos de trabajo complejos**: Si tu formulario involucra validación compleja o interacciones con múltiples APIs, es posible que necesites integrar este hook con otros hooks personalizados o librerías como Formik o React Hook Form para manejar el estado y las validaciones de manera más avanzada.

<a id="ent72"></a>

### **useOptimistic() React**

[Volver al indice](#entrevista-base)

El hook `useOptimistic()` es una característica introducida en React para manejar **actualizaciones optimistas** de manera más sencilla y declarativa. Se utiliza para actualizar la interfaz de usuario de manera inmediata, asumiendo que una operación asíncrona se completará correctamente, mientras el servidor procesa los datos. Si la operación falla, puedes revertir el estado de la interfaz de usuario.

Este enfoque mejora la experiencia del usuario al hacer que las actualizaciones sean instantáneas, incluso antes de recibir una confirmación del servidor.

---

### ¿Cómo funciona `useOptimistic()`?

`useOptimistic()` es un hook diseñado para trabajar con estados que podrían necesitar ser actualizados de forma optimista. Al usarlo, defines un estado inicial y una función para calcular el nuevo estado después de una actualización. React se encargará de manejar ese estado temporalmente mientras la operación real se completa.

El hook devuelve un par de valores:

1. **`optimisticState`**: El estado actual, incluyendo cualquier cambio optimista que se haya realizado.
2. **`setOptimisticState`**: Una función para actualizar el estado de manera optimista.

---

### Sintaxis de `useOptimistic()`

```javascript
const [optimisticState, setOptimisticState] = useOptimistic(initialState, reducer);
```

- **`initialState`**: El estado inicial que quieres usar.
- **`reducer`**: Una función que calcula el nuevo estado basado en el estado actual y una acción.

---

### Ejemplo básico

Aquí tienes un ejemplo de cómo usar `useOptimistic()` para manejar una lista de tareas donde las eliminaciones se manejan de forma optimista:

```javascript
import React, { useOptimistic } from 'react';

function TodoList() {
  const initialTodos = [
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir una app' },
    { id: 3, text: 'Publicar en producción' },
  ];

  // Estado optimista para la lista de tareas
  const [todos, setTodos] = useOptimistic(initialTodos, (currentTodos, action) => {
    switch (action.type) {
      case 'delete':
        // Eliminar tarea de manera optimista
        return currentTodos.filter((todo) => todo.id !== action.id);
      default:
        return currentTodos;
    }
  });

  const handleDelete = async (id) => {
    // Actualización optimista: elimina la tarea de inmediato
    setTodos({ type: 'delete', id });

    try {
      // Simular una operación asíncrona, como una petición al servidor
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error('Error eliminando la tarea:', error);
      // Si falla, puedes manejar la reversión manualmente (aquí no se implementa).
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button onClick={() => handleDelete(todo.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
```

---

### Explicación del ejemplo:

1. **Estado optimista**: Usamos `useOptimistic()` para definir un estado inicial de tareas y un `reducer` que nos permite actualizar ese estado de forma declarativa.

2. **Actualización optimista**: Cuando el usuario elimina una tarea, el estado se actualiza inmediatamente en la interfaz de usuario sin esperar la confirmación del servidor.

3. **Reversión manual (si es necesario)**: Si la operación asíncrona (como la petición al servidor) falla, puedes manejar la reversión al estado anterior. Este manejo de errores no se incluye en el ejemplo, pero es importante para aplicaciones reales.

---

### ¿Cuándo usar `useOptimistic()`?

Usa `useOptimistic()` cuando quieras manejar interacciones de usuario con actualizaciones rápidas en la interfaz, pero que dependen de operaciones asíncronas que podrían fallar. Algunos casos comunes incluyen:

- **Edición de datos**: Actualizar textos, estados o elementos en una lista.
- **Eliminaciones**: Mostrar instantáneamente que un elemento fue eliminado, aunque aún no se haya confirmado en el servidor.
- **Creación de elementos**: Mostrar nuevos elementos en la interfaz antes de recibir confirmación del servidor.
- **Actualizaciones de likes/reacciones**: Incrementar un contador de likes instantáneamente mientras se envía la acción al servidor.

---

### Beneficios de `useOptimistic()`

1. **Experiencia de usuario mejorada**: Las actualizaciones optimistas hacen que la aplicación parezca más rápida y responsiva.
2. **Código más declarativo**: Con el uso de un `reducer`, puedes definir cómo manejar diferentes acciones de manera clara.
3. **Integración con la API de React**: Funciona perfectamente con las características de React 18, como el concurrent rendering.

---

### Consideraciones:

- **Reversión manual**: Si la operación falla, tendrás que manejar manualmente la reversión del estado optimista.
- **No es adecuado para todas las operaciones**: Si el resultado de la operación en el servidor afecta de manera significativa la lógica de la aplicación, puede ser mejor esperar a la confirmación antes de actualizar el estado.
- **Evitar estados inconsistentes**: Asegúrate de manejar errores correctamente para que la interfaz no muestre datos incorrectos.

<a id="ent69-1"></a>

### **React Server Components**

[Volver al indice](#react-base)

Es una caracteristica de React que nos permite renderizar algunos componentes en el lado del servidor, y que el cliente solo reciba el HTML necesario para renderizar la pagina, y que lo hidrate (que significa que los hace interactivos sin tener que re-renderizarlos completamente) de ser necesario, esto es muy util para componentes que son estaticos y no son interactivos, todo esto para evitar la carga de JS inutil.

- Disminuye el peso del bundle 
- Mejora el tiempo de carga ya que el browser no debe hacer tanto trabajo para cargar la pagina
- Se pueden realizar acciones como acceder a una base de datos desde el lado del servidor sin necesitar de involucrar al cliente
- En estos componentes marcados como `Server Component` no se puede usar `useState` o `useEffect`, ya que estos son manejados por el cliente

```jsx
// Componente del Servidor (Rendimiento en el servidor)
export default function ServerComponent() {
  // Este código se ejecuta en el servidor
  const data = fetchDataFromDatabase();  // Llamada al servidor o base de datos
  return <div>Datos del servidor: {data}</div>;
}

// Componente del Cliente (Rendimiento en el cliente)
export default function ClientComponent() {
  // Este componente puede ser interactivo
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Haz clic</button>
      <p>Has hecho clic {count} veces</p>
    </div>
  );
}
```

Es muy util combinar esta funcionalidad con NextJs para mejorar el rendimiento de la aplicacion.

<a id="rea43"></a>

### **Funciones de alto nivel / Higher order Function**

[Volver al indice](#react-base)

Habían muchas funcionalidades que se estaban repitiendo, entonces JS decidio hacerlas nativas, como iteraciones. Funciones de orden mayor es que reciben como parametro los iterables y un callback, que se ejecutaba en cada elemento iterado.

Hoy en dia todo esto esta abstraído y solo pasamos el callback.

Ejemplos puede ser .map, .filter, .reduce

```javascript
// Función de orden superior que toma una función como argumento
function operacionMatematica(x, y, operacion) {
  return operacion(x, y);
}

// Funciones que serán pasadas como argumentos a la función de orden superior
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

// Uso de la función de orden superior con diferentes funciones como argumentos
console.log(operacionMatematica(5, 3, suma)); // Devuelve 8 (5 + 3)
console.log(operacionMatematica(10, 4, resta)); // Devuelve 6 (10 - 4)
console.log(operacionMatematica(6, 2, multiplicacion)); // Devuelve 12 (6 * 2)
```

Es un patron de disenio muy comunmente usado en React en donde una funcion recibe como parametro un componente y devuelve un componente nuevo con una funcioanlidad extendida.

```jsx
const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { extra: 'some extra prop' };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};
```

Es muy comun cuando debo chequear varias veces si el usuario se encuentra autenticado en la aplicacion

```jsx
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Lógica de autenticación
    if (!isAuthenticated) {
      return <div>No estás autenticado</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const Dashboard = () => {
  return <h1>Bienvenido al Dashboard</h1>;
};

const ProtectedDashboard = withAuth(Dashboard);

// Ahora ProtectedDashboard verifica autenticación antes de renderizar Dashboard
export default function App() {
  return <ProtectedDashboard />;
}

```

Existe el concepto de **wrapper hell** en donde tengo demasiados niveles anidados en los componentes, este fue el motivo por el cual React introdujo a los Custom Hook 

```jsx
const useAuth = () => {
  const isAuthenticated = true; // Lógica de autenticación
  return isAuthenticated;
};

const Dashboard = () => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <div>No estás autenticado</div>;
  }
  return <h1>Bienvenido al Dashboard</h1>;
};
```

Hoy en dia los HOC son utiles cuando se utilizan patrones de clases, o cuando se necesita un mayor control sobre el ciclo de vida del componente.

<a id="ent44"></a>

### **Patrones de disenio en React**

[Volver al indice](#react-base)

**Componentizacion**

Es el separar la interfaz de usuario en componentes reutilizables, es la base de React en si mismo.

**Contenedor y Presentación (Container-Presenter Pattern)**

Separar los componentes que se encargan de la UI de los componentes de logica. Se le dice componente presentacion y componente contenedor

```jsx
// Componente Presentación
const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

// Componente Contenedor
const UserContainer = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <UserList users={users} />;
};

export default UserContainer;
```

**Higher-Order Components (HOCs)**

Como se explico anteriormente, es un patron de disenio muy comunmente usado en React en donde una funcion recibe como parametro un componente y devuelve un componente nuevo con una funcionalidad extendida.

```jsx
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Componente renderizado con props:', props);
    return <WrappedComponent {...props} />;
  };
};

// Uso
const MyComponent = ({ message }) => <div>{message}</div>;
const MyComponentWithLogging = withLogging(MyComponent);

// Render
<MyComponentWithLogging message="Hola, mundo!" />;
```

**Render Props**

Es un patron de disenio que permite a los componentes compartir logica de renderizado con otros componentes.

```jsx
const Mouse = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return render(position);
};

// Uso
const App = () => (
  <Mouse
    render={({ x, y }) => (
      <div>
        <h1>El mouse está en la posición ({x}, {y})</h1>
      </div>
    )}
  />
);
```

**Custom Hooks**

Es un patron de disenio que permite extraer logica de un componente en una funcion reutilizable. reemplaza en parte a los HOC

```jsx
const useMouse = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

// Uso
const App = () => {
  const { x, y } = useMouse();

  return (
    <div>
      <h1>El mouse está en la posición ({x}, {y})</h1>
    </div>
  );
};
```

**Context API - Context pattern**

Es un patron de disenio que permite pasar datos a traves del arbol de componentes sin tener que pasar props manualmente en cada nivel. Elimina el Prop Drilling.

```jsx
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
```

**Compound Components**

Es un patron de disenio que permite a los componentes trabajar juntos de manera mas eficiente, como por ejemplo un `select` y `option`

```jsx
const Select = ({ children }) => {
  const [selected, setSelected] = React.useState(null);

  const onSelect = (value) => {
    setSelected(value);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === Option) {
          return React.cloneElement(child, {
            onSelect,
            selected: child.props.value === selected
          });
        }
        return child;
      })}
    </div>
  );
};

const Option = ({ value, onSelect, selected, children }) => (
  <div
    onClick={() => onSelect(value)}
    style={{ background: selected ? 'lightblue' : 'white' }}
  >
    {children}
  </div>
);

// Uso

const App = () => (
  <Select>
    <Option value="1">Opción 1</Option>
    <Option value="2">Opción 2</Option>
    <Option value="3">Opción 3</Option>
  </Select>
);
```

**Controlled y Uncontrolled Components**

Es un patron de disenio que permite manejar los componentes de una forma mas eficiente, en los **Controlled Components** el estado del componente es manejado por React, mientras que en los **Uncontrolled Components** el estado es manejado por el propio componente.

```jsx
// Controlled Component
const ControlledInput = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input value={value} onChange={handleChange} />;
};

// Uncontrolled Component
const UncontrolledInput = () => {
  const inputRef = React.useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
    // El estado es manejado por el DOM
      <input ref={inputRef} />
      <button onClick={handleClick}>Obtener valor</button>
    </div>
  );
};
```

<a id="rea68"></a>

### **¿Qué es el modo estricto de React (React.StrictMode) y para qué sirve?**

[Volver al indice](#react-base)

React.StrictMode es una herramienta de desarrollo que React proporciona para identificar posibles problemas en una aplicación. Es un componente que no afecta el comportamiento de la aplicación en producción, pero ayuda a detectar errores y advertencias en el desarrollo.

1. **Identificación de problemas de ciclo de vida**: Detecta métodos de ciclo de vida obsoletos o inseguros, como `componentWillMount`, `componentWillReceiveProps`, y `componentWillUpdate`.

1. **Advertencias sobre efectos secundarios**: Ejecuta los efectos secundarios (como los definidos en `useEffect`) dos veces en modo desarrollo para asegurarse de que sean puros y no contengan errores.

1. **Detección de APIs obsoletas**: Identifica el uso de APIs de React que están en desuso o que podrían causar problemas en el futuro.

1. **Comprobación de referencias de cadenas**: Detecta el uso de referencias de cadenas (`string refs`), que son una práctica obsoleta.

1. **Ayuda con la migración a nuevas versiones**: Facilita la transición a nuevas versiones de React al advertir sobre prácticas que podrían no ser compatibles en el futuro.

```jsx
import React from 'react';

function App() {
  return (
   <React.StrictMode>
    <MyComponent />
   </React.StrictMode>
  );
}

export default App;
```

- Mejora la calidad del código al identificar problemas potenciales.
- Ayuda a adoptar mejores prácticas de React.
- Facilita la migración a futuras versiones de React.
- Solo funciona en modo desarrollo, no afecta el comportamiento en producción.
- Puede generar advertencias adicionales que no siempre son críticas.

<a id="rea69"></a>

### **Consideraciones de Seguridad en React 🔐**

[Volver al indice](#react-base)

**Evitar la inyección de código malicioso (XSS)**

- Nunca uses `dangerouslySetInnerHTML` a menos que sea absolutamente necesario. Si lo usas, asegúrate de sanitizar el contenido con una biblioteca como `DOMPurify`.
- Valida y escapa cualquier dato que provenga de fuentes externas antes de renderizarlo.

```jsx
import DOMPurify from 'dompurify';

const sanitizedHTML = DOMPurify.sanitize(untrustedHTML);
<div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
```

**Usar HTTPS**

- Asegúrate de que tu aplicación esté servida a través de HTTPS para proteger la transmisión de datos entre el cliente y el servidor.

**Proteger las claves API**

- Nunca expongas claves API en el código del cliente. Usa un servidor intermedio para manejar las solicitudes que requieran autenticación.

**Implementar Content Security Policy (CSP)**

Configura una política de seguridad de contenido para prevenir la ejecución de scripts no confiables.

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.google.com">
```

**Autenticación y Autorización**

- Usa bibliotecas como `jsonwebtoken` para manejar tokens de autenticación de manera segura.
- Protege las rutas sensibles con componentes de alto orden o hooks personalizados.

```jsx
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Redirect to="/login" />;
};
```

**Evitar la exposición de datos sensibles**

No almacenes información sensible como contraseñas o tokens en el estado global o en el almacenamiento local sin cifrar.

**Validación de entradas**

Valida todas las entradas del usuario tanto en el cliente como en el servidor para prevenir ataques como SQL Injection o XSS.

**Mantén tus dependencias actualizadas**

Usa herramientas como `npm audit` o `yarn audit` para identificar vulnerabilidades en las dependencias.

**Evitar el uso de eval()**

Nunca uses `eval()` o funciones similares que ejecuten código arbitrario.

**Protección contra ataques CSRF**
Usa tokens CSRF para proteger las solicitudes sensibles.

**Deshabilitar herramientas de desarrollo en producción**
Asegúrate de que las herramientas como React Developer Tools estén deshabilitadas en el entorno de producción.

```javascript
if (process.env.NODE_ENV === 'production') {
  // Deshabilitar herramientas de desarrollo
}
```

**Configurar correctamente los permisos de CORS**
Asegúrate de que tu servidor tenga configuraciones de CORS adecuadas para evitar accesos no autorizados.

**Usar Helmet para mejorar la seguridad**
Usa bibliotecas como `helmet` para configurar encabezados HTTP de seguridad.

```javascript
import helmet from 'helmet';
app.use(helmet());
```

**Evitar el Prop Drilling de datos sensibles**
Usa Context API o Redux para manejar datos sensibles de manera segura y evitar pasarlos innecesariamente a través de props.

<a id="rea44"></a>

### **¿Qué es un Fragment en React y para qué se utiliza?**

[Volver al indice](#react-base)

Un **Fragment** en React es un componente especial que permite agrupar varios elementos sin añadir nodos adicionales al DOM. Es útil cuando necesitas devolver múltiples elementos desde un componente sin envolverlos en un elemento contenedor como un `<div>`.

### ¿Por qué usar Fragment?

1. **Evitar nodos innecesarios en el DOM**: Usar un `<div>` u otro contenedor puede generar nodos adicionales que no son necesarios, lo que puede afectar el rendimiento o el estilo de la aplicación.
2. **Mejorar la semántica del HTML**: Al no añadir contenedores innecesarios, el HTML resultante es más limpio y semántico.

### Ejemplo básico

```jsx
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Título</h1>
      <p>Este es un párrafo.</p>
    </>
  );
}

export default MyComponent;
```

También puedes usar `React.Fragment` explícitamente, especialmente si necesitas añadir una clave (`key`) a los elementos agrupados, como en una lista:

```jsx
import React from 'react';

function MyList({ items }) {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </React.Fragment>
  );
}

export default MyList;
```

<a id="rea45"></a>

### **¿Cómo funcionan las claves (keys) en las listas de React? ¿Por qué son importantes?**

[Volver al indice](#react-base)

Las **claves (keys)** en React son atributos especiales que se utilizan para identificar de manera única los elementos en una lista. Son importantes porque ayudan a React a identificar qué elementos han cambiado, se han agregado o se han eliminado, lo que mejora el rendimiento y la eficiencia del proceso de reconciliación.
Las claves deben ser únicas entre los elementos hermanos, pero no necesitan ser únicas en toda la aplicación. Generalmente, se recomienda usar un identificador único de los datos (como un ID) como clave.

Sin claves, React tendria que reconstruir toda la lista desde cero ante cada cambio, lo que puede ser ineficiente y causar problemas de rendimiento.

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

No se recomienda usar el index del elemento en un array como identificador, ya que esto puede causar problemas al reordenar la lista y especialmente si se contempla el eliminar elementos.

<a id="rea455"></a>

### **¿Qué son las "re-renderizaciones innecesarias" y cómo las evitarías?**

[Volver al indice](#react-base)

Las **re-renderizaciones innecesarias** ocurren cuando un componente de React se vuelve a renderizar sin que haya cambios en las props o el estado que afecten su salida visual. Esto puede impactar negativamente el rendimiento de la aplicación, especialmente en componentes complejos o listas grandes.

**Causas comunes de re-renderizaciones innecesarias:**

1. **Cambios en el estado o props que no afectan al componente.**
2. **Funciones recreadas en cada renderizado.**
3. **Falta de uso de claves (`key`) únicas en listas.**
4. **Componentes hijos que se renderizan aunque sus props no hayan cambiado.**
5. **Uso excesivo de contextos que provocan re-renderizaciones globales.**

**Cómo evitarlas:**

1. **Usar `React.memo` para memorizar componentes funcionales:**
Evita que un componente se vuelva a renderizar si sus props no han cambiado.

  ```jsx
  const MyComponent = React.memo(({ value }) => {
    return <div>{value}</div>;
  });
  ```

**Usar `useMemo` para memorizar valores calculados:** Evita cálculos costosos en cada renderizado.

  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

**Usar `useCallback` para memorizar funciones:** Evita que las funciones se recreen en cada renderizado.

  ```jsx
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  ```

**Evitar pasar funciones inline como props:** Las funciones inline se recrean en cada renderizado, lo que puede causar re-renderizaciones en componentes hijos.

  ```jsx
  // En lugar de esto:
  <Child onClick={() => doSomething()} />
  // Usa:
  const handleClick = useCallback(() => doSomething(), []);
  <Child onClick={handleClick} />
  ```

**Dividir componentes grandes en componentes más pequeños:**
Esto reduce el impacto de las actualizaciones al limitar el alcance de las re-renderizaciones.

**Usar claves (`key`) únicas en listas:** Ayuda a React a identificar qué elementos han cambiado.

  ```jsx
  items.map((item) => <li key={item.id}>{item.name}</li>);
  ```

**Evitar el uso excesivo de contextos:** Divide los contextos en unidades más pequeñas para evitar re-renderizaciones globales innecesarias.

**Usar herramientas de análisis de rendimiento:** React DevTools y el Profiler pueden ayudarte a identificar qué componentes se están renderizando innecesariamente.

#### **Ejemplo práctico:**

```jsx
const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount((prev) => prev + 1), []);

  return (
   <div>
    <button onClick={handleClick}>Incrementar</button>
    <Child count={count} />
   </div>
  );
};

const Child = React.memo(({ count }) => {
  console.log('Renderizando Child');
  return <div>Count: {count}</div>;
});
```

En este ejemplo, `React.memo` y `useCallback` evitan que el componente `Child` se vuelva a renderizar innecesariamente.

<a id="rea456"></a>

### **¿Qué herramientas usarías para identificar problemas de rendimiento en una aplicación React?**

[Volver al indice](#react-base)

- Con **React DevTools** se puede utilizar el Profiler que nos ayuda a identificar problemas de rendimiento en la aplicación. Permite ver qué componentes se están renderizando y cuánto tiempo tardan en hacerlo, y que props se ven modificadas.
- Se puede usar **Lighthouse** para auditar el rendimiento de la aplicación, incluyendo el tiempo de carga y el tamaño del bundle. Esta herramienta se encuentra en las DevTools de Chrome.
- **Web Vitals** es una biblioteca que mide métricas clave de rendimiento, como el tiempo de carga y la interactividad. Proporciona información sobre la experiencia del usuario en la aplicación.
- **React Profiler API** permite medir el rendimiento de los componentes y registrar información sobre las re-renderizaciones. Se puede integrar en la aplicación para obtener métricas personalizadas mediante el uso de `Profiler`.
- **Redux DevTools** si se está utilizando Redux, permite ver las acciones y el estado de la aplicación, lo que puede ayudar a identificar problemas de rendimiento relacionados con el manejo del estado global.
- **Herramientas de análisis de bundle** como `webpack-bundle-analyzer` o `source-map-explorer` ayudan a identificar el tamaño del bundle y las dependencias que están afectando el rendimiento de la aplicación.
- **Herramientas de monitoreo de rendimiento** como `Sentry`, `New Relic` o `Datadog` permiten rastrear el rendimiento de la aplicación en producción y detectar problemas en tiempo real.
- Usar `why-did-you-render` para detectar re-renderizaciones innecesarias en componentes funcionales. Esta herramienta ayuda a identificar cuándo un componente se vuelve a renderizar sin necesidad.
- **Herramientas de análisis de código estático** como `ESLint` y `Prettier` pueden ayudar a identificar patrones de código que podrían afectar el rendimiento, como el uso excesivo de funciones inline o la falta de claves únicas en listas.
- **Herramientas de monitoreo de errores** como `Sentry` o `Rollbar` pueden ayudar a identificar errores y problemas de rendimiento en la aplicación en producción, lo que permite realizar ajustes y mejoras.
- **Herramientas de análisis de red** en las DevTools del navegador permiten ver el tiempo de carga de los recursos y las solicitudes de red, lo que puede ayudar a identificar cuellos de botella en la carga de la aplicación.

<a id="rea46"></a>

### **¿Qué son los custom hooks? ¿Cómo los crearías y para qué sirven?**

[Volver al indice](#react-base)

Los **custom hooks** son funciones en React que permiten encapsular y reutilizar lógica relacionada con los hooks nativos de React, como `useState`, `useEffect`, `useContext`, entre otros. Sirven para extraer lógica repetitiva o compleja de los componentes, haciéndolos más limpios y fáciles de mantener.

Su nombre debe comenzar con "use" y debe ser llamado dentro de un componente funcional o de otro hook.

#### Ejemplo básico: Hook para manejar el estado de un formulario

```jsx
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleChange];
}

export default useForm;
```

Uso del custom hook en un componente:

```jsx
import React from 'react';
import useForm from './useForm';

function MyForm() {
  const [formValues, handleInputChange] = useForm({ name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      <input
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Correo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

1. **Reutilización de lógica**: Permiten compartir lógica entre componentes sin duplicar código.
2. **Separación de preocupaciones**: Ayudan a mantener los componentes más limpios al mover la lógica compleja a un hook separado.
3. **Facilidad de prueba**: Los custom hooks son funciones puras, lo que facilita su prueba unitaria.
4. **Consistencia**: Garantizan que la lógica compartida se implemente de manera uniforme en toda la aplicación.

<a id="rea62"></a>

### **¿Cómo manejarías el estado global sin usar Redux ni Context API?**

[Volver al indice](#react-base)

Una forma de manejar el estado global sin usar Redux ni Context API es utilizando un enfoque basado en hooks personalizados y el sistema de suscripción de React. Este método permite compartir el estado entre componentes sin necesidad de bibliotecas externas.

#### Ejemplo: Crear un estado global con un hook personalizado

```jsx
import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useGlobalState = () => {
  const [, setState] = useState(globalState);

  const dispatch = (actionType, payload) => {
    const newState = actions[actionType](globalState, payload);
    globalState = { ...globalState, ...newState };
    listeners.forEach((listener) => listener(globalState));
  };

  useEffect(() => {
    const listener = (newState) => setState(newState);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return [globalState, dispatch];
};

export const initGlobalState = (initialState, globalActions) => {
  globalState = { ...initialState };
  actions = { ...globalActions };
};
```

#### Uso del estado global

1. **Inicializar el estado global**:

```jsx
import { initGlobalState } from './useGlobalState';

initGlobalState(
  { count: 0 },
  {
    increment: (state) => ({ count: state.count + 1 }),
    decrement: (state) => ({ count: state.count - 1 }),
  }
);
```

2. **Consumir el estado global en un componente**:

```jsx
import React from 'react';
import { useGlobalState } from './useGlobalState';

const Counter = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default Counter;
```

- **Sin dependencias externas**: No necesitas instalar bibliotecas adicionales.
- **Ligero y personalizable**: Puedes adaptar la lógica según las necesidades de tu aplicación.
- **Fácil de entender**: Utiliza conceptos básicos de React como hooks y suscripciones.
- **Menos herramientas de desarrollo**: No tendrás acceso a herramientas avanzadas como las DevTools de Redux.
- **Escalabilidad limitada**: Puede volverse difícil de mantener en aplicaciones muy grandes.

Este enfoque es ideal para aplicaciones pequeñas o medianas donde no se justifica la complejidad de Redux o Context API.

<a id="rea99"></a>

### **Nombrar distintas herramientas de Testing para React**

[Volver al indice](#react-base)

- **Jest**: Framework de pruebas por defecto para aplicaciones React creado por Facebook. Soporta pruebas unitarias, de integración y de snapshot.
- **React Testing Library**: Biblioteca enfocada en pruebas de componentes React desde la perspectiva del usuario final.
- **Enzyme**: Herramienta creada por Airbnb para pruebas de componentes React, aunque está menos recomendada en proyectos nuevos debido a su falta de soporte para React 18.
- **Cypress**: Herramienta de pruebas end-to-end que permite probar aplicaciones React en un navegador real.
- **Playwright**: Herramienta moderna para pruebas end-to-end que soporta múltiples navegadores.
- **Puppeteer**: Biblioteca para pruebas end-to-end que interactúa con navegadores basados en Chromium.
- **Storybook Testing Library**: Permite realizar pruebas en historias de Storybook para componentes React.
- **MSW (Mock Service Worker)**: Herramienta para simular APIs en pruebas de integración.
- **Vitest**: Framework de pruebas rápido y moderno que puede usarse con React, similar a Jest.
- **Testing Playground**: Herramienta visual para generar selectores de pruebas compatibles con React Testing Library.
