<a name="react-base"></a>

| React |
|----------|
| [¿Qué es React?](#rea47) |
|[Libreria vs Framework 💛](#rea47-2)|
| [Para que es el comando React eject?](#rea49) |
| [Que son las Ref?](#rea52-5) |
| [De que tratan los Ciclos de Vida Componentes?](#react62) |
|[Componentes de clase vs Componentes de Funcion 💛](#rea62-1)|
| [componentWillReceiveProps()](#rea55) |
| [componentDidMount()](#rea56) |
| [componentWillUnmount()](#rea57) |
| [componentWillMount()](#rea58) |
| [componentDidUpdate()](#rea59) |
| [shouldComponentUpdate()](#rea60) |
| [componentWillUpdate()](#rea61) |
| [useCallback](#rea1) 💛|
| [useDispatch - Hook Redux](#rea2)|
| [useEffect](#rea3) 💛|
|[Puede el useEffect ser asincrono? Porque?](#rea3-2) 💛|
| [useState](#rea4) 💛|
| [useSelector - Hook Redux](#rea5) |
| [useRef](#rea6) 💛|
| [useMemo](#rea7) 💛|
|[¿Cuál es la diferencia entre useCallback y useMemo?](#rea7-1) 💛|
| [useReducer](#rea8) 💛|
| [useLayoutEffect](#rea9) |
|[¿Qué diferencia hay entre useEffect y useLayoutEffect? ¿Cuándo usarías cada uno?](#rea9-1)|
| [¿Que es Redux?](#rea18) 💛|
| [Cuando conviene usar Redux?](#rea19) |
| [¿Cuales son los beneficios de usar Redux?](#rea20) |
| [Redux vs ContextAPI](#rea21) 💛|
| [¿Cual es el flujo de Redux?](#rea22) |
| [Que es ContextAPI?](#rea23) 💛|
| [Que es React Fiber?](#rea24) |
| [Para que sirven las claves o Keys en React?](#rea25) |
|[Que tener en cuenta para tener una buena performance en React](#rea24-1) 💛|
| [¿Qué es el Virtual DOM?](#rea39) 💛|
|Para que tipo de proyectos React es recomendable?|
|¿Cuál es la diferencia entre React.createElement() y JSX?|
|¿Qué es un Fragment en React y para qué se utiliza?|
|¿Cómo funcionan las claves (keys) en las listas de React? ¿Por qué son importantes?|
|¿Qué es un "error boundary" y cómo se implementa en React?|
|¿Qué son los custom hooks? ¿Cómo los crearías y para qué sirven? 💛|
|¿Qué es el hook useImperativeHandle y en qué casos se utiliza?|
|¿Qué es el hook useTransition y cómo mejora la experiencia de usuario en aplicaciones de React?|
|¿Cómo manejarías el estado global sin usar Redux ni Context API? 💛|
|¿Qué son los Higher-Order Components (HOCs) y cómo se diferencian de los Render Props? 💛|
|¿Qué es el patrón "Compound Components" en React y cuándo sería útil implementarlo?|
|¿Cómo manejarías la composición de componentes en lugar de la herencia en React? 💛|
|¿Qué es un "portal" en React y para qué se utiliza?|
|¿Cómo implementarías un "Suspense" en React para manejar la carga de datos de forma asincrónica? 💛|
|¿Qué son las "re-renderizaciones innecesarias" y cómo las evitarías? 💛|
|¿Cómo usarías React.memo para mejorar la performance de un componente? 💛|
|¿Qué herramientas usarías para identificar problemas de rendimiento en una aplicación React? 💛|
|¿Cómo se gestiona el "debounce" o "throttle" en React para eventos como el scroll o input?|
|¿Cómo integrarías una librería de terceros en un proyecto de React?|
|¿Qué consideraciones tienes al usar React con TypeScript?|
|¿Qué diferencia hay entre usar un API REST y GraphQL con React?|
|¿Cómo manejarías la gestión de estados en aplicaciones grandes sin que se vuelva complicado?|
|¿Cómo realizarías pruebas unitarias para un componente React?|
|¿Qué es React Testing Library y en qué se diferencia de otras herramientas como Enzyme?|
|¿Cómo probarías un hook personalizado?|
|¿Qué es el modo estricto de React (React.StrictMode) y para qué sirve?|
|¿Cómo manejarías la internacionalización (i18n) en una aplicación React?|
|¿Qué diferencia hay entre SSR (Server-Side Rendering), CSR (Client-Side Rendering) y SSG (Static Site Generation)?|
|¿Qué son los Concurrent Features de React y cómo afectan la experiencia del usuario?|
|¿Qué problemas podrías encontrar al implementar un formulario grande en React y cómo los solucionarías?|
|¿Cómo manejarías la gestión de rutas en una aplicación React?|
|¿Qué es el "code splitting" y cómo lo implementarías en una aplicación React?|
|¿Cómo manejarías la autenticación y autorización en una aplicación React?|

---

<a id="rea47"></a>

### **¿Qué es React?**

[Volver al indice](#react-base)

React fue creado por Facebook en el año 2013, y sigue siendo mantenida por él. (ahora Meta). Algunos ejemplos de proveedores que usan React son, además de Facebook, PayPal, Netflix, etc., páginas con un gran flujo de usuarios al día de hoy.

Es rápido y escalable. Es declarativo y basado en componentes. Aclaramos que es lo que queremos renderizar, pero no el cómo. Al ser declarativo, hace que sea facil el seguir patrones de diseño.

Su trabajo es predecible, toda la info va en una sola via. Nos ayuda a prevenir mutaciones involuntarias.

Funciona con la llamada **Programación Reactiva**, cada componente reacciona y se vuelve a renderizar (o no) cuando se produce un cambio de estado o llegan ciertas propiedades.

Al ser una libreria, se puede usar directamente en un HTML (aunque no es la manera mas común), y esta hecho para aplicaciones de cualquier magnitud.

Tambien se puede trabajar del lado del servidor con Node, aplicaciones mobile con React Native y de escritorio con Electron. Todo con el mismo tipo de codigo.

<a id="rea47-2"></a>

### **Libreria vs Framework** 💛

[Volver al indice](#react-base)

- **Libreria:** Es un conjunto de funciones que se pueden usar en un proyecto. El programador decide cuando y como usarla, es mucho mas flexible. Ejemplo: React, Redux, Lodash.
- **Framework:** Es un conjunto de reglas y estructuras que se deben seguir para desarrollar un proyecto. El framework decide cuando y como usarlo. Ejemplo: Angular, Vue, Django.

Es por eso que cuando vemos un proyecto hecho con React, y luego otro tambien hecho con React, su estructura puede ser completamente distinta. En cambio, cuando vemos proyectos Angular, podemos encontrar la misma estructura base en todos.

<a id="rea49"></a>

### **Para que es el comando React eject?**

[Volver al indice](#react-base)

El comando `eject` de React es una forma de sacar toda la configuración de Webpack y Babel que React trae por defecto, para poder modificarla a gusto. Es una forma de tener control total sobre la configuración de la aplicación.

```jsx
npx create-react-app my-app
cd my-app
npm run eject
```

<a id="rea52-5"></a>

### **Que son las Ref?**

[Volver al indice](#react-base)

Permite a react manipular directamente el DOM Sin necesidad de actualizar un componente, asumen cambios en los mismos que no se pueden resolver mediante el traspaso de props o cuyo impacto se limita al propio componente no siendo rentable renderizarlo de nuevo.

```jsx
class AnimatedSpinner extends Component {

  constructor() {
    super()
    this.animationRef = React.createRef()    // 1. creación
  }

  triggerAnimation() {
    this.animationRef.current.className.add('animated')  // 3. acceso
  }

  render() {
    return (
      <>
        <div ref={this.animationRef} className="spinner"> </div>  // asociación
        <button onClick={this.triggerAnimation}> Animar </button>

    )
  }
}
```

<a id="react62"></a>

### **De que tratan los Ciclos de Vida Componentes?**

[Volver al indice](#react-base)

React provee de metodos especificos para los ciclos de vida de los componentes, en este caso, veremos en los de clase. Se llaman cuando el componente se monta, actualiza o desmonta, veamos las deficiones:

- Monta: El componente se renderiza en la pagina
- Desmonta: El componente es removido de la pagina
- Actualiza: El componente se actualiza en la pagina

Varios de los estados que veremos que se utilizaban tipicamente en componentes de clase se encuentran deprecados, y deben usarse con un tag UNSAFE para su uso.

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

### **useCallback** 💛

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

Reemplaza las funciones del ciclo de vida para los componentes de función, los combina en uno solo, es un Hook.

```jsx
import React, {useEffect} from 'react';
```

Requiere ser importado para ser usado

Por ejemplo, en el caso del contador, quedaria algo asi con Hooks

```jsx
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

```jsx
useEffect(() => {
    // Codigo
}), []);
```

Y si queremos que cumpla una función de “clean up” como en el caso del componentWillUnmount(), podemos devolver una función que limpie lo necesario

```jsx
useEffect(() => {
    return () => {
        // cleanup, se ejecuta ultimo
    };
});
```

Si queremos que nuestro useEffect funcione como un componentDidMount() y un componentDidUpdate()

```jsx
useEffect(() => {console.log("Update"); });
```

Si queremos que funcione como un componentDidMount() (Solo se ejecuta cuando es montado)

```jsx
useEffect(() => {console.log("Mount");}, []);
```

Y si queremos que se ejecute ante el cambio de un state

```jsx
useEffect(() => {console.log("Mount");}, [state]);
```

<a id="rea3-2"></a>

### **Puede el useEffect ser asincrono? Porque?** 💛

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

Es una manera de tener un estado global sin dependencias como Redux, ya que viene desde React 16.3.

Se pueden pasar state o funciones desde el componente principal hacia los hijos, nos evitamos pasarlo por cada uno de los componentes, es algo global.

Cuenta con el hook `useContext` que facilita el acceso a los datos del Context.

Children refiere a los componentes dentro del Provider que recibirán estos datos.

Provider: De donde vienen los datos

```jsx
import {createContext} from 'react';

const QuoteContext = createContext();

const QuoteProvider = ({children}) => {
  return (
    <QuoteContext.Provider
    value=({})>
      {children}
    </QuoteContext.Provider>
  )
}

export { QuoteProvider }
export default QuoteContext;
```

Dentro de value ponemos lo que queremos exportar para el resto de componentes, y luego, lo consumimos de la siguiente manera:

```jsx
// Donde entre llaves ponemos lo que queremos consumir de ese Context.
const {} = useContext(QuoteContext);
```

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