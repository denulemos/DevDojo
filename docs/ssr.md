# 🖥️ Server Side Rendering

### Que es Server Side Rendering?

SSR ocurre cuando el HTML es generado en el servidor y no en el cliente. Se usa en frameworks como **Next.Js, Angular Universal, Nuxt** entre otros. 

Es un **Patron de renderizado**, NO es un Patron de disenio, no entra en los GoF design patterns, aunque se suele confundir ya que define como fluye la responsabilidad, impacta performance, UX y se aplica a nivel de arquitectura, no solo de codigo. 

---

## **Server-Side Rendering (SSR) en React**

SSR en React se utiliza generalmente con 3 herramientas: 

- NextJs (El mas usado)
- Remix (Orientado a Web Standards)
- Astro (SSR parcial)

El flujo completo de SSR + Hydration seria el siguiente:

`Request → Server (React render) → HTML listo → Browser pinta → JS carga → Hydration → App interactiva`

### Qué es la hydration?

Hydration es el momento en el que React “cobra vida” sobre un HTML que ya existe, ya que viene del servidor, React solo se encarga de agregarle la interactivilidad.

Antes de Hydration, el navegador recibe lo siguiente

```html
<button>Comprar</button>
```

Es un boton que no hace nada por si mismo. Luego de Hydration, se asocia el HTML con el Virtual DOM y se asocian sus eventos, esto ejecutando `hydrateRoot()`

```html
<button onClick={()=> setCount(count + 1)}>
  Comprar
</button>
```

Este agregado de interactivilidad NO causa el re-render, por eso posee tan buen rendimiento en general.

### Qué rompe la Hydration?

Algo importante es que React espera que el HTML coincida exactamente con lo que renderizaria en el cliente, si esto no sucede, el error de hydration acontece. 

- Usar `window` directamente
- Usar `math.random` en el render
- El uso de `Date.now()`
- El acceso directo a `localStorage`

Esto se soluciona con el uso del `useEffect`

```js
useEffect(() => {
  setTime(new Date().toLocaleTimeString())
}, [])
```

#### React Server Components (resumen rápido)

Son componentes que se ejecutan SOLO en el servidor, no llegan al navegador.

- No se hidratan
- No envian JS al cliente
- No poseen `useState` ni `useEffect`
- No suman JS al bundle

Por ejemplo el siguiente componente:

```tsx
// app/page.tsx
export default async function Page() {
  const products = await fetchProducts()

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  )
}
```

- Se ejecuta en el servidor
- Puede acceder a la base de datos
- No va al bundle del navegador

Por otro lado, un Client component se veria asi

```tsx
'use client'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
```

- Vive en el navegador
- Tiene estado
- Se hidrata

Se puede realizar una mezcla de ambos

```tsx
import Counter from './Counter'

export default async function Page() {
  const data = await getData()

  return (
    <>
      <h1>{data.title}</h1>
      <Counter />
    </>
  )
}
```

`Page` vive en el server, `Counter` se hidrata en el cliente. 

Se recomiena el uso de Server Components para estructura y datos, para el resto, usar Client Components, solo donde hay interaccion. 

“React Server Components allow us to move rendering and data fetching to the server, reducing client-side JavaScript and improving performance, while keeping interactivity through client components.”

### React Server Components

Los **React Server Components** son una forma de hacer que parte de tu app se arme en el servidor y no en el navegador. Así, el usuario recibe la página ya lista y más liviana, porque no tiene que bajar tanto JavaScript.

- **Más rápido**: la página carga antes porque el servidor hace el trabajo pesado.
- **Menos código en el navegador**: solo se manda lo necesario.
- **Podés pedir datos directamente desde el servidor** (por ejemplo, de una base de datos).

**OJO:** En estos componentes no podés usar hooks como `useState` o `useEffect`, porque solo funcionan en el navegador.

#### Ejemplo:

```jsx
// Componente que corre en el servidor
export default function ServerComponent() {
  const datos = buscarDatosEnLaBase(); // Esto solo lo hace el servidor
  return <div>Datos: {datos}</div>;
}

// Componente que corre en el navegador
export default function ClientComponent() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <p>Clicks: {contador}</p>
    </div>
  );
}
```

Se usan mucho con frameworks como Next.js para que tu app sea más rápida y eficiente.