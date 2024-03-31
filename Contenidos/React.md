# React

Es el desarrollo de lo que el cliente va a ver. Consiste, básicamente, en HTML, CSS y JS. Como desarrolladores que somos, somos conscientes de que, a medida que crecen nuestros productos, se vuelven cada vez más complejos, y de ahí nació React como librería.

### **¿Qué es React?**

React fue creado por Facebook en el año 2013, y sigue siendo mantenida por él. (ahora Meta). Algunos ejemplos de proveedores que usan React son, además de Facebook, PayPal, Netflix, etc., páginas con un gran flujo de usuarios al día de hoy.

Es rápido y escalable. Es declarativo y basado en componentes. Aclaramos que es lo que queremos renderizar, pero no el cómo. Al ser declarativo, hace que sea facil el seguir patrones de diseño.

Su trabajo es predecible, toda la info va en una sola via. Nos ayuda a prevenir mutaciones involuntarias.

Funciona con la llamada **Programación Reactiva**, cada componente reacciona y se vuelve a renderizar (o no) cuando se produce un cambio de estado o llegan ciertas propiedades.

Al ser una libreria, se puede usar directamente en un HTML (aunque no es la manera mas común), y esta hecho para aplicaciones de cualquier magnitud.

Tambien se puede trabajar del lado del servidor con Node, aplicaciones mobile con React Native y de escritorio con Electron. Todo con el mismo tipo de codigo.

### **¿De qué hablamos cuando hablamos de una SPA (Single Page App)?**

Una SPA (Single Page Application) son apps web que simulan ser una única página con contenido dinámico. La idea es darle la “ilusión” al usuario de que está navegando una aplicación de escritorio, que no recarga, no se satura, etc.

Las únicas recargas, o pantallas de carga, son cuando se está trayendo información del servidor. No se recarga toda la página, aun así, solo ciertas partes, dando a una experiencia mucho más fluida.

Este tipo de apps SPA interactúan con dos servicios, REST y Serverless (Firebase es un ejemplo, donde únicamente consumimos su servicio), los cuales descentralizan la lógica de la app de la interfaz gráfica.

En resumen:

- Se evita la constante recarga entera de la página
- La página no se satura ni realiza peticiones constantes al servidor. Únicamente se pide lo necesario.
- No nos interesa el backend, únicamente lo que recibimos de él.


### **Para que es el comando React eject?**

`create-react-app` encapsula todos los modulos npm para usar internamente asi el package.json queda bastante limpio. Eject lo que hace es deshacer este encapsulamiento y pasar a mostrar todo lo que esta instalado. 

Es para cuando necesitamos hacer cosas mas complejas o para instalar modulos que puedan interactuar con modulos ya instalados. 

### **Como evitar mandar muchos eventos inutiles, por ejemplo, ejecutar un search por letra?**

Debounce es un termino de electronica que ayuda a que, por ejemplo, si apretamos varias veces un boton, no se manden muchas veces las instrucciones

```jsx
function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
			const timeoutId = setTimeout(() => {
				setDebouncedValue(value)
		}, delay)

		return () => clearTimeout(timeoutId)
}, [value])

return debouncedValue;
}

// Luego en el component que tiene el search

const queryDebouncedValue = useDebounce(query, 300)

useEffect(() => {
api.search(queryDebouncedValue).then(setProducts);
}, [queryDebouncedValue]);
```

### **Que es async rendering?**

Permite que el renderizado pueda interrumpirse, permitiendo renderizar varios arboles de componentes a la vez sin necesidad de bloquear el hilo principal del navegador.

### **Que funcion cumple el StrictMode?**

Permite identificar potenciales problemas en la aplicacion. Habilita un modo seguro en sus componentes anidados, avisando asi del uso de recursos obsoletos, efectos colaterales, ciclos de vida inseguros, entre otros

</**StrictMode**>

<**Componente2**/>

<**Componente1**/>

<**StrictMode**>

### **Cual es la diferencia entre el montaje y el renderizado de un componente?**

Que significa prop drilling y como evitarlo?

Es cuando las props que se comparten acumulan demasiadas dependencias. Da lugar a flujos de datos profundos, dificiles de identificar y refactorizar. Dos formas de resolverlo son:

- Composicion de componentes frente a un mismo juego de datos compartido por varios componentes
- Redux o API Context, aptas para escenarios mas complejos donde conviene manejar un estado global.

### **Que es un componente controlado?**

Son componentes que reciben informacion en forma de props y se valen de callbacks como onChange para mutar el estado del componente. Son dumb components. 

### **Como limitar el alcance de los estilos de React?**

Usando namespaces que da lugar a un tratamiento mas predecible y modular de los componentes. Entre las tecnicas estan CSS modules, bibliotecas CSS, etc..

NO se aconsejan los estilos inline por cuestiones de rendimiento de React

### **Que es un state / estado?**

Son objetos que contienen ciertos datos dentro de ellos. Los datos pueden ser alterados durante el ciclo de vida de un componente dependiendo de los eventos que sucedan.

### **Que son los limites de error?**

Son una funcion que asigna ciertos errores especificos dentro de los componentes secundarios, los airla y luego intercambia el area bloqueada con una interfaz de usuario de respaldo. Los limites de error son como un sistema de seguridad para el dev si algo no sale bien.

### **Que son las Ref?**

Permite a react manipular directamente el DOM Sin necesidad de actualizar un componente, asumen cambios en los mismos que no se pueden resolver mediante el traspaso de props o cuyo impacto se limita al propio componente no siendo rentable renderizarlo de nuevo. 

```
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
        <div ref={this.animationRef} className="spinner"> </div>     // 2. asociación
        <button onClick={this.triggerAnimation}> Animar </button>

    )
  }
}
```

### **Cual es la diferencia entre un componente y un elemento**

Un componente de Ract acepta entradas y devuelve un elemento, es una descripcion de lo que se puede ver en pantalla

### **JSX es entendido por los navegadores?**

No. Los navegadores solo leen JS. Debe ser convertido.


### **Para que sirven las claves o Keys en React**

Se usan las claves para diferenciar entre simples elementos DOM virtuales con los que son unicos. Ayudan a React a reciclar elementos DOM existentes para que la libreria pueda ejecutarse y renderizarse mas rápidamente, ya que React recicla los elementos que no fueron modificados de los que si para no renderizarlos cuando no es necesario. Este elemento se usa mas que nada en iteraciones de listas. 

El key no afecta el renderizado en si, es por eso que igualmente funciona el render, solo se muestra un warning. 

### **Hay diferencias entre un componente contenedor y un componente de presentacion?**

Un componente contenedor se enfoca en dar datos a la presentacion y a otros contenedores. Son responsables de mantener el funcionamiento del todo. Los componentes de presentacion son los responsables del aspecto visual. 

### **Para que son los eventos sinteticos (SyntheticEvent) ?**

Funcionan de la misma forma que los eventos normales de los exploradores. Los eventos sinteticos usan codigo que puede ser aplicado en multiples exploradores web mientras que los eventos normales se enfocan en un solo navegador

Ayuda a que el dev no se preocupe tanto en como manejar un evento segun el navegador para el cual esta desarrollando, ya que estos eventos simulan muchos eventos y garantiza el mismo comportamiento.

### **Como funcionaba la delegacion de eventos?**

React crea un unico manejador de eventos y lo agrega al elemento raiz del  `index.html`, React no tiene que tener en cuenta los manejadores de eventos en los nodos DOM cuando le toca actualizarlo. Asi fue hasta React 17. 

Ahora se agrega al elemento raiz de la app en vez del HTML

###  Como se crea un objeto con un metodo “Hello” que escribe “Hello <name>” en la consola?

```jsx
const p = {
	name: 'Denu',
	hello: () => console.log(`hello ${name}`)`
}

p.hello(); // denu
p.name = 'Deno';
p.hello(); // deno
```

Y como haria el nombre inmutable?

```jsx
Object.freeze(p)
p.name = 'Pedrito' // Si uso 'use strict' tiraria un error en consola
p.hello(); // denu
```


---

# **React Native**

Es la misma libreria pero para desarrollar aplicaciones nativas para Android e iOS, solo nos preocupamos por la logica de negocio y la maquetacion. El mismo codigo JS genera codigo nativo para ambas plataformas.

Posee las mismas herramientas de ReactJS con componentes para mobile. Tambien provee una actualizacion en tiempo real para ver los cambios de manera casi instantanea.

Es una opcion ideal para los que vienen de la rama web y quieren aprender mobile.

Posee algunas diferencias con respecto a ReactJS con respecto a los elementos del HTML, por ejemplo, en vez de <div>, hablamos de <View> para separar en partes el codigo. 

**¿Cuál es la estructura del proyecto que acabo de crear?**

- **Public**: Contiene todo lo que la aplicación va a mostrar al cliente, como el index.html, que es el template de nuestra página. Son archivos estáticos.
- **Src**: Contiene todo el JS, CSS e imágenes que van a ser compilados en el index.html. Es básicamente el corazón de la aplicación
- **index.js**: Es el entry point de la aplicación, posee un método llamado ReactDOM.render() que busca al elemento cuyo ID es el “root” en el HTML, e inserta todo el código ahí (El ID “container”)
- **package.json**: Declara las dependencias que serán instaladas en node_modules, junto con el nombre de la app, su versión y scripts.
- **Node_modules**: Aquí estarán instaladas las dependencias (y las dependencias de las dependencias). Pesa mucho, y es ignorada por git.
- **App.js**: Es el componente main de la aplicación que será renderizado en el DOM. Es básicamente el primer nivel de la jerarquía DOM.

Otra cosa que debemos tener en cuenta es Webpack, es un File Loader, este crea un bundle que contiene todos los archivos, creando un solo HTML con todo, para que pueda ser interpretado por el navegador.

### **Que diferencia a ReactjS de React Native**

ReactJS es una libreria, React Native es una plataforma completa de multiples caracteristicas con la que se podran crear apps desde cero.

---

# **JSX**

React por defecto usa JavaScript, y también podemos utilizar TypeScript. Generalmente, se recomienda TS por un tema de mantenimiento, y aun así, no se utiliza 100% JS, si no, JSX.

JSX es una extensión de JS que nos permite construir elementos en la UI empleando código JS pero dentro del HTML.

**JSX = JS + XML**

Es una mezcla entre XML y JS, se pueden utilizar etiquetas HTML, pero no se lo emplea directamente. En este también podremos crear nuestras propias etiquetas (componentes)

JSX fue desarrollado por Facebook, y no es un lenguaje en sí mismo, viene integrado con Babel, que es importado y configurado por React.

**Babel traduce los lenguajes “Modernos” en lenguajes que cualquier navegador es capaz de entender.**

!https://miro.medium.com/max/1400/1*lbS3qOPzJ7UOp80pCjZixw.png

Es importante que, en cada archivo donde React deba hacer algo, tener el siguiente import para que JSX funcione correctamente:

!https://miro.medium.com/max/534/1*nd8-PCrbBLug-WY8tczZAg.png

Para ver un poco su funcionamiento, podemos tomar de ejemplo el método Render que vimos anteriormente. Se le pasan dos argumentos, el elemento HTML que queremos renderizar y el container del mismo.

!https://miro.medium.com/max/674/1*XDT-TEcmbET7jPxPpXHl6A.png

También podemos manejarnos con variables como en el siguiente ejemplo:

!https://miro.medium.com/max/676/1*GBRLvuEHJHYVF31fjojmug.png

Podemos usar como atributos de un HTML nombres comunes o usar una expresión JS entre llaves:

!https://miro.medium.com/max/424/1*-lP87XS4njckAPlR6UrnqQ.png

Cuando las expresiones JSX son compiladas, se convierten en objetos JS que representan componentes React, y luego estos son usados para construir el DOM que se mostrará en el navegador.

Por ejemplo, podemos ver el ejemplo de este contador:

!https://miro.medium.com/max/736/1*wT3VIa5mgqBoVJbZFFrCrA.png

Cada 1 segundo (1000 milisegundos) se ejecuta la función “show()” que incrementa en uno el valor del contador y renderiza el elemento con el valor actualizado en el HTML, dentro de un elemento cuyo ID es “root”.

Vemos esto y pensamos, “entonces actualiza la página cada 1 segundo para renderizar ese párrafo”, pues, no, es la magia de React, solo va a actualizar ese párrafo, dejando la página sin recargar completa.

---

# React Testing Library

Es una alternativa a Enzyme. Enzyme le da a los devs de React utilidades para testear componentes, y RTL pone al developer en los zapatos del usuario final. 

Mientras mas el test se asemeje a como será usado el software por el usuario final, mas confianza habrá. 

NO es una alternativa a Jest, generalmente se usan los dos juntos, se necesitan mutuamente para funcionar.

### ⚛️ ¿Está cierto texto en la pantalla?

```jsx
import {render, screen} from '@testing-library/react'
import app from './app'

describe('test description', () => {
it ('should show a list of characters including deno', () => {
	render(<app/>);
	expect(screen.getByText('deno')).toBeInTheDocument();
});
});
```

### ⚛️ ¿Cada elemento en la lista es correcto? (Data es un archivo .json)

```jsx
it ('should show a list of characters from a JSON file', () => {
render(<app/>;
for (let character of data.results) {
	expect(screen.getByText(character.name)).toBeInTheDocument();
}
});
});
```

### ⚛️ Mockear un Fetch (llamada a un servicio)

```jsx
function App() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		getPeople().then((data => setPeople(data.results));
		}, []);

	return (
		<ul> {data.results.map((character) => (
				<li key={character.name}>{character.name}</li>
				))}
		</ul>
	)
}

// FETCH

export async function getPeople() {
	const response = await fetch('url');
	const data = await response.json();
	return data
}

// TEST

// Vigilamos el evento fetch en el window actual

beforeAll(() => jest.spyOn(window, 'fetch));

// Mockeamos la respuesta devolviendo un json escrito por nosotros

it ('should show a list of characters from the Api', () => {
	window.fetch.mockResolvedValueOnce({
	ok: true,
	json: async () => data,
	})

render (<app/>); // @testing-library/react {render}
expect(window.fetch).toHaceBeenCalledTimes(1);
expect(window.fetch).toHaveBeenCalledWith('url');
//Chequeamos si se hizo la peticion y si se llamo con esa URL 
// (aunque no lo haya hecho realmente)
}
```

### ⚛️ Chequear probables errores en API (como de conexión)

```jsx
// Codigo base

const [errorState, setErrorState] = useState({hasError: false});

useEffect(() => {
	getPeople()
	 .then((data) => setPeople(data.results))
	 .catch(handleError);
}, []);

const handleError = err => {
	setErrorState({hasError: true});
}

// API (Fetch error)

export async function getPeople() {
	try {
			const response = await fetch('url');
			if (!response.ok) {
				throw new NetworkError();
			}
			const data = await response.json();
			return data;
	} catch (err) {
			throw err;	
		}
	}

class NetworkError extends Error {
	constructor() {
		super('network error')
	}
}

// Test error

it('should show error message when network error', async() => {
		window.fetch.mockRejectedValueOnce(new Error('network error'));
	})
});
```

Si tengo un proyecto con Typescript necesito la dependencia dev  `@types/jest` para que funcione todo bien. 

### ⚛️  Sintaxis correcta de los tests

```jsx
// example.test.ts

describe("when the arguments passed are positive numbers", () => {
	test('should return the right answer', () => {
		expect(sumPositiveNumbers(2,2).toBe(4);	
	}
}
```

### ⚛️  Funciones

```jsx
// La funcion está definida
expect(funcion).toBeDefined();

// Los getall arman arrays, pudiendo acceder por indice o hasta por length
screen.getAllByRole('textbox')[0];
screen.getAllByAltText('textbox')[0];
screen.getAllByText('textbox').length
```

### ⚛️  Test para render de componente

```jsx
describe('When everything is ok', () => {
	test('should render the app component without crashing', () => {
		render(<App/>); // We don´t need any expect, if it fails, the test will too
		screen.debug(); // See the HTML output in console
	});
});
```

Al hacer el Screen.debug, podemos ver el componente este rodeado de una etiqueta `<body><div>`, eso lo agrega la libreria por nosotros. 

### ⚛️  Test para useState

```jsx
// componente
const [text, setText] = useState('');

function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
	setText(event.target.value);
}

return( <div>
	<CustomInput value={text} onChange={handleChange}>
		Search:
	</CustomInput>
	<p> You typed: {text ? text: ''} </p>
</div> );

//-------------------- Otro componente --------------------

function CustomInput ({children, value, onChange} : CustomInputProps ) {
	return (
		<div>
			<label htmlFor="search">{children}</label>
			<input id="search" type="text" value={value} onChange={onChange}/>
		</div>
	) 
}

//-------------------- Interface TS --------------------

interface CustomInputProps {
	childen: React.ReactNode;
	value: string;
	onChange(event: React.ChangeEvent<HTMLInputElement>) : void;
}

// -------------------- Test --------------------

// Buscar por texto
test('should select the children that is being passed to the CustomInput component', () => {
	render(<App/>;
	**screen.getByText('Input:');**
}

// Buscar por arialabel
test('should select the input element by its role', () => {
	render(<App/>;
	screen.getByRole('textbox');
	**expect(screen.getByRole('textbox')).toBeInTheDocument();**
}

// Buscar por rol con query
test('should not find the rol whatever', () => {
	**expect(** screen.queryByRole('whatever')**).toBeNull();**
}

// Buscar por placeholder

test('should select the input element by its placeholder', () => {
	render(<App/>;
	screen.getByPlaceholderText('Example');
	**expect(screen.getByRole('textbox')).toBeInTheDocument();**
}
```

### ⚛️ Acciones para antes de cada test

```jsx
// Nos ahorramos el render por cada test 

beforeEach(() => {
	render(<App/>);
}
```

### ⚛️ Busqueda de elementos asincronos

Para jest con TS instalamos una dependencia llamada ts-jest

```jsx
// -------------- Llamado al servicio-----------------

export interface User = {
	id: string;
	name: string;
};

// prmise que devuelve un usuario
export function getUser(): Promise<User> {
	return Promise.resolve({id: 1, name: 'denu'});
};

//------------------------ componente ---------------

const [user, setUser] = useState<User | null>(null);

useEffect(() => {
	const fetchUser = async () => {
		const user = await getUser();
		setUser(user);
	}
	fetchUser();
}, []);

function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
	setText(event.target.value);
}

return( <div>
	{user ? <p>{user.name}</p> : null}
</div> );

// ----------------- Test ------------------

import {waitFor} from '@testing-library/react'
import {mocked} from 'ts-jest/utils';

// Mockeamos el llamado
jest.mock('./get-user'); // donde se encuentra el servicio
const mockGetUser = mocked(getUser, true);

beforeEach(async () => {
// Esperamos antes de cada test que cada servicio este "llamado"
	await waitFor(() => expect(mockGetUser).toHaveBeenCalled())
});

describe('when the component fetches the user ok', () => {
// Limpiamos el mock antes de cada test
	beforeEach(() => {mockGetUser.mockClear();}

	test('should call getUser once', () => {
			render(<App/>);
			await waitFor(() => expect(mockGetUser).**toHaveBeenCalledTimes**(1));
	});

	test('should render the username passed', async() => {
		const name = 'denu';
		// mockeamos la respuesta
		mockGetUser.mockResolvedValueOnce({id: '1', name});
		render(<App/>);
		// De principio username no existirá
		expect(screen.queryByText(/Username/)).toBeNull();
		expect(await screen.findByText(/Username/)).toBeInTheDocument();
		expect(await screen.findByText(/name/)).toBeInTheDocument();
	})

});
```

### ⚛️ Simular interacciones del usuario

```jsx
import {waitFor, render, fireEvent} from '@testing-library/react'

describe("when the user enters some text in the input, () => {
	test('should display the text in the Screen', async() => {
		render(<App/>);
		await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
	
		// simulamos el evento sucediendo en el input	
		fireEvent.change(screen.getByRole('textbox'), {
			target: {value: 'denu' },
		});
		
		expect(screen.getByText(/denu/));
})
```

Se puede reemplazar fireEvent por el import `userEvent` de `@testing-library/react`

```jsx
await userEvent.type(screen.getByRole("textbox"), "denu");
```

Otro ejemplo de llamado a un handler en un onChange

```jsx
test('should call the onChange callback handler), () => {
	const onChangeMock= jest.fn();
	render(<CustomInput value="" onChange={onChangeMock}>...</CustomInput>);
	fireEvent.change(screen.getByRole('textbox'),{
		target: {value: 'denu'},
	 });
	expect(onChangeMock).toHaveBeenCalledTimes(1)
})
```

### ⚛️ Dependencias necesarias

```jsx
devDependencies : {
	@testing-library/jest-dom
	@testing-library/react
	@testing-library/user-event
	@types/jest
	jest-environment-jsdon-sixteen
	ts-jest
	typescript
}

scripts : {
	test: react-scripts test --env=jest-enviroment-jsdom-sixteen
}
```

https://github.com/testing-library/jest-dom

### ⚛️ Coverage

```jsx
coverage: yarn test --coverage --watchAll=false
```

### ⚛️ Configuracion Jest en package.json

```jsx
"jest" : {
	"collectCoverageFrom": [
		"src/**/*.{ts.tsx.js.jsx}", // testear archivos con estas extensiones
		"!src/serviceWorker.ts", // excluir ciertos archivos
	]
}
```

### ⚛️ Mock Axios

```jsx
import axios from 'axios';

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('search', () => {
	test('should show the results', async () => {
		const result = [...]

		mockedAxios.get.mockResolvedValueOnce({data: {result }});
		render(<Component/>);	
	})
})

// Mock Error

test('should show the results', async () => {
		const result = [...]

		mockedAxios.get.mockRejectedValueOnce(new Error());
		render(<Component/>);	
})

```

---

# **Ciclos de Vida Componentes**

React provee de metodos especificos para los ciclos de vida de los componentes, en este caso, veremos en los de clase. Se llaman cuando el componente se monta, actualiza o desmonta, veamos las deficiones:

- Monta: El componente se renderiza en la pagina
- Desmonta: El componente es removido de la pagina

Varios de los estados que veremos a continuacion se encuentran deprecados, y deben usarse con un tag UNSAFE para su uso

### **componentWillReceiveProps()**

Se ejecuta cuando hay alguna actualizacion de alguna prop

```markdown
componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
        // do something important here
    }
}
```

### **componentDidMount()**

Se llama cuando el componente es renderizado en la pagina. Se puede usar para inicializar cosas, como para pedir la informacion inicial de los componentes.

```markdown
componentDidMount() {
    // get the data I need to correctly display
}
```

### **componentWillUnmount()**

Es llamado antes de que el componente sea desmontado del DOM. Se puede usar para liberar recursos. No existe un “DidUnmount” ya que, una vez que se desmonta, ya no se puede hacer nada por el mismo.

```markdown
componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
}
```

### **componentWillMount()**

Corresponde a cuando el componente va a montarse, se ejecuta antes de su montaje, es como el constructor del mismo.

```markdown
componentWillMount() {
    // setup your state
}
```

### **componentDidUpdate()**

Se llama cuando el componente se actualiza en el DOM. Podemos hacerlo para, por ejemplo, para avisar que el counter fue incrementado en uno.

```markdown
componentDidUpdate() {
    alert('Number of clicks: ' + this.state.count);
}
```

### **shouldComponentUpdate()**

Nos permite decidir si debemos ejecutar o no el render. Muestra con que valores, o bajo que condiciones, se realizará la actualizacion.

```markdown
shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
}
```

### **componentWillUpdate() — DEPRECADO**

Es cuando se esta por ejecutar el render. Nos ayuda a setear valores globales justo antes del mismo.

```markdown
componentWillUpdate() {
    // set some global variables
}
```

---




