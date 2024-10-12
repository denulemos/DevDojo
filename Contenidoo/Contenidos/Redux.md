

### ✅ ¿Cual es el flujo de Redux?

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

### ✅  Redux vs Context

Pros Context

- Context viene integrado a React
- Es facil de entender para principiantes
- No requiere mucho codigo boilerplate

Contras Context

- NO esta hecho para almacenar datos con actualizaciones frecuentes, esto puede llevar a renders innecesarios y, en consecuencia, una depuracion complicada
- Redux flow da mas consistencia en este sentido

### ✅  ¿Que es un generador?

Es una funcion que tiene la opcion de suspenderse hasta que sea invocada. En Redux se le saca mucho provecho. Es una funcion que itera y tiene la habilidad de suspenderse. 

### ✅  ¿Que tan distinto es de Flux y MVC?

En MVC las capas estan bien separadas y manejadas, y si queremos cambiar algo, debemos hacer demasiados cambios en todos lados ya que el flujo de datos es bidireccional en MVC. El mantenimiento y debug es muy complejo. 

Flux esta muy ligado a Redux, poseen la misma estrategia de capturar los cambios aplicados al estado de la aplicacion, la subscripcion al evento y el estado actual. 

¿Que conceptos de programacion funcional utiliza Redux?

- Las funciones son objetos de primera clase
- Se pueden pasar funciones como argumentos
- Se puede controlar el flujo usando recursiones, funciones y matrices
- Se usan funciones auxiliares como map y reduce
