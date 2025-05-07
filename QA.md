<a name="qa-base"></a>

## [QA](#qa)

| Conceptos Fundamentales |
|----------|
| [Que es el testing?](#qa1) |
| [Cuando empezar a testear?](#qa3) |
| [Cuando terminar de testear?](#qa4) |
| [Diferencia entre coverage y confianza](#qa5) |

| Tipos de Testing |
|----------|
| [Que tipos de testing hay?](#qa8) |
| [Diferencia entre unit test e Integration Test](#qa6) |
| [Que test de performance existen?](#qa7) |
| [Distintos tipos de testing en Frontend](#ent62) |

| Testing de Unidad |
|----------|
| [Que es un Test Limpio?](#qa2) |
| [Que verifica el Unit Test?](#qa9) |
| [Principios FIRST de los Unit test](#qa10) |

| Estrategias y Mejores Prácticas |
|----------|
| [¿Qué código debería estar cubierto con pruebas unitarias?](#qa11) |
| [Pruebas para refactorización entre frameworks](#qa12) |
| [Estrategias de testing para refactorización completa](#qa13) |

---


<a id="qa"></a>

# QA

<a id="qa1"></a>

### **Que es el testing?**

[Volver al indice](qa-base)

Mide la calidad del producto, el producto debe cumplir con lo que debería. El testing es para hacer visible la calidad

<a id="qa2"></a>

### **Que es un Test Limpio?**

[Volver al indice](qa-base)

* Camino feliz, caso positivo
* **Flujo normal de un caso de uso sin errores, p**or ejemplo un Login con datos válidos
* Por cada caso limpio “debería” tener 5 sucios
* Es el test más importante, el sistema debería hacer lo que debe hacer en principio.

<a id="qa3"></a>

### **Cuando empezar a testear?**

[Volver al indice](qa-base)

**Cuando hay una primera versión estable de los requerimientos**, se debe ver si estos tienen sentido, etc.. Se deben encontrar errores en la etapa de definición para ahorrar tiempo y dinero en un futuro.

<a id="qa4"></a>

### **Cuando terminar de testear?**

[Volver al indice](qa-base)

* Depende de diversos criterios que el tester y el desarrollador acordaron con anterioridad.
* Cuando se testeo y no se encontró ningún error
* Cuando hay un Fault-rate bajo (se debe cumplir con un estándar predeterminado)
* Ya se encontraron ciertos números de errores en total

<a id="qa5"></a>

### **Diferencia entre coverage y confianza**

[Volver al indice](qa-base)

* La confianza es que tan parecido son los test a un comportamiento que puede tener el usuario con nuestro sistema. Generalmente se refleja en el e2e.
* Coverage son la cantidad de lineas de codigo cubiertas por tests

<a id="qa6"></a>

### **Diferencia entre unit test e Integration Test**

[Volver al indice](qa-base)

Las pruebas unitarias (Unit testing) prueban los componentes individuales del software de forma aislada; son pruebas que generalmente realiza el mismo desarrollador. Es una prueba de caja blanca.

El test de integración (Integration Test) prueba la interfaz entre dos unidades o módulos del software, verificando cómo se comportan los módulos combinados entre sí. Se ejecuta después de las pruebas unitarias. Es una prueba de caja negra que generalmente realiza un tester.

| Unit Test | Integration Test |
| --- | --- |
Se enfoca en una pieza específica del sistema de manera aislada | Se enfoca en la interacción entre unidades, módulos o componentes |
Son más fáciles de escribir, más rápidas de ejecutar y más económicas de mantener | Son más complejas, más lentas de ejecutar y más costosas de mantener |
Verifican la consistencia interna del código sobre el cual se tiene control total | Verifican cómo se integra tu código con otro código |
No tienen dependencias externas; cualquier dependencia externa es simulada o eliminada | A menudo requieren interacción con dependencias externas, como bases de datos, servicios de red, hardware, etc. |
Te indican la pieza exacta del código donde se encuentra el error | Indican qué módulos o componentes contienen el error
Son comparables a comprobar si una batería de un teléfono móvil está cargada o si la tarjeta SIM está activada | Son comparables a comprobar si la batería y la tarjeta SIM de un teléfono móvil están ensambladas para encender el teléfono

<a id="qa7"></a>

### **Que test de performance existen?**

[Volver al indice](qa-base)

* Load Test: Se simula el maximo uso del sistema, con maxima cantidad de usuarios.
* Stess Test: Se incrementara la cantidad de llamados a los servicios del sistema hasta que rompa, indicara la mayor cantidad de usuarios que el sistema podra soportar y cuanto tiempo tarda en recuperarse
* Resistance Test: Es test testear el sistema durante periodos de tiempo mas largos para revelar otros tipos de problemas.
* Test de aceleracion: Se testea como carga el contenido para usuarios con conexiones mas lentas.
* Peak Testing: Se simula que sucede con el sistema cuando llega a un pico de trafico
* Escalability Test: Testeamos, por ejemplo, cuanto podra el sistema escalar si agregamos otro servidor, o escalamos la instancia ya existente.
* **Prueba de volumen:**
  * Que el **software soporte muchos datos**
  * Enfocado en base de datos y transacciones


<a id="ent62"></a>

### **Distintos tipos de testing en Frontend**

[Volver al indice](#qa-base)

- **Unit Testing**: Pruebas pequeñas que verifican que una pieza específica de código funciona correctamente por sí sola. Por ejemplo, probar que una función que suma dos números devuelve el resultado correcto.

- **Integration Testing**: Pruebas que verifican que diferentes partes de la aplicación funcionan bien juntas. Por ejemplo, probar que cuando llenas un formulario y haces clic en "Enviar", los datos llegan correctamente al servidor.

- **End-to-End Testing**: Pruebas que simulan a un usuario real usando la aplicación completa. Por ejemplo, probar todo el proceso desde que un usuario se registra hasta que hace una compra.

- **Functional Testing**: Pruebas que verifican que las funcionalidades principales de la app funcionan como deberían. Por ejemplo, probar que los botones hacen lo que deben hacer cuando los presionas.

- **UI/UX Testing**: Pruebas que verifican que la aplicación se ve bien y es fácil de usar. Por ejemplo, probar que los botones son lo suficientemente grandes para hacer clic y que los colores tienen buen contraste.

- **Performance Testing**: Pruebas que verifican qué tan rápida y eficiente es la aplicación. Por ejemplo, probar que una página carga rápidamente y no se congela cuando muchas personas la usan al mismo tiempo.

- **Regression Testing**: Pruebas que verifican que las cosas que ya funcionaban siguen funcionando después de hacer cambios. Por ejemplo, probar que después de agregar una nueva función, las funciones viejas siguen funcionando bien.

- **Smoke Testing**: Pruebas rápidas de las funciones más importantes para asegurarse que nada está gravemente roto. Por ejemplo, probar que los usuarios pueden iniciar sesión y ver la página principal antes de hacer pruebas más detalladas.

<a id="qa8"></a>

### **Que tipos de testing hay?**

[Volver al indice](#qa-base)

* Integracion - Integration: Que un **código con otro se integre bien**, a veces lo hace el tester o el dev, Ejecutada por el **integrador**
* Unit:
  * Código que prueba una unidad de código, envió valores y veo lo que resuelve, por desarrolladores
  * No es TDD (Desarrollo definido por pruebas).
  * Es la primera etapa de prueba
* Static: Se identifican errores mientras se van escribiendo
* **Test de Regresión:**
  * Es el test de todo, **que una implementación no rompa algo ya hecho**.
  * Se hace en primera sobre casos positivos
* **Test de Humo:** Test rápido que **verifica que la versión está estable**
 (pocos test básicos, todos positivos por lo general)
* **Prueba aceptación usuario: El usuario interactúa con el sistema**, es casi siempre positivo, que lo que necesite funcione bien, esto en un entorno de **testing en alpha**
* **Pruebas beta:** Lo mismo que el anterior pero en un entorno productivo en prueba, el desarrollador no está presente. El mismo vuelve para recibir un feedback del usuario

<a id="qa9"></a>

### **Que verifica el Unit Test?**

[Volver al indice](qa-base)

Una prueba unitaria verifica la funcionalidad de los elementos más pequeños testables de una aplicación―clases y funciones―lo que permite a los desarrolladores detectar fallos y aislarlos. Las pruebas unitarias demuestran que, dado un determinado input, la función devuelve el resultado esperado. Una colección de pruebas unitarias conforma un conjunto de pruebas (test suite).

<a id="qa10"></a>

### **Principios FIRST de los Unit test**

[Volver al indice](qa-base)

**Rápido**

Las pruebas deben ejecutarse rápidamente. Todo un conjunto de pruebas unitarias debería tomar segundos en ejecutarse. Cuanto más rápidas sean las pruebas, más de ellas podrás incluir en el conjunto y con mayor frecuencia podrás ejecutarlas. Cuando las pruebas se ejecutan lentamente, tu equipo no las ejecutará con frecuencia. Como resultado, es posible que no encuentres problemas lo suficientemente pronto como para corregirlos fácilmente, lo que limita tu capacidad para limpiar el código y resulta en un deterioro gradual de la calidad del mismo.

**Independiente**

Las pruebas no deben depender unas de otras. Una prueba no debe establecer las condiciones para la siguiente. Los miembros de tu equipo deberían poder ejecutar cada prueba de forma independiente y en cualquier orden. Cuando las pruebas dependen entre sí, la primera que falla provoca una cascada de fallos posteriores, dificultando el diagnóstico y ocultando defectos posteriores.

**Repetible**

Las pruebas deben ser repetibles en cualquier entorno. Si las pruebas unitarias pasan cuando se ejecutan una por una pero fallan al ejecutar todo el conjunto de pruebas, o si pasan en tu máquina de desarrollo pero fallan en el servidor de integración continua, hay un defecto de diseño. Tu equipo debería poder ejecutar las pruebas con éxito en el entorno de producción, en el entorno de QA y en las laptops, para que nunca haya una excusa para no hacerlo.

**Autovalidación**

Las pruebas deben tener una salida booleana y pasar o fallar. La misma prueba que falla ahora y pasa después es inestable y compromete todo el conjunto de pruebas. Las pruebas inestables llevan a consecuencias negativas. Los desarrolladores dejan de confiar en las pruebas y empiezan a ignorarlas, lo que dificulta identificar las pruebas no inestables que fallan en un mar de pruebas inestables. No deberías tener que leer un archivo de registro o comparar manualmente dos archivos de texto para determinar si una prueba pasa. Si no son autovalidantes, entonces el fallo se vuelve subjetivo y ejecutar las pruebas requiere una evaluación manual prolongada