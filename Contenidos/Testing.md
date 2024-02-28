# Testing

## **Que es el testing?**

Mide la calidad del producto, el producto debe cumplir con lo que debería. El testing es para hacer visible la calidad

## **Que es un Test Limpio?**

- Camino feliz, caso positivo
- **Flujo normal de un caso de uso sin errores, p**or ejemplo un Login con datos válidos
- Por cada caso limpio “debería” tener 5 sucios
- Es el test más importante, el sistema debería hacer lo que debe hacer en principio.

## **Cuando empezar a testear?**

**Cuando hay una primera versión estable de los requerimientos**, se debe ver si estos tienen sentido, etc.. Se deben encontrar errores en la etapa de definición para ahorrar tiempo y dinero en un futuro.

## **Cuando terminar de testear?**

- Depende de diversos criterios que el tester y el desarrollador acordaron con anterioridad.
- Cuando se testeo y no se encontró ningún error
- Cuando hay un Fault-rate bajo (se debe cumplir con un estándar predeterminado)
- Ya se encontraron ciertos números de errores en total

## **Diferencia entre coverage y confianza**

- La confianza es que tan parecido son los test a un comportamiento que puede tener el usuario con nuestro sistema. Generalmente se refleja en el e2e.
- Coverage son la cantidad de lineas de codigo cubiertas por tests

## **Diferencia entre unit test e Integration Test**

Unit testing testea los componentes individuales del software de forma separada, es un testing hecho generalmente por el mismo desarrollador. Es un test de caja blanca. 

El Integration Test testea la interfaz entre dos unidades o modulos del software, testea los modulos combinados entre si para ver como se relacionan. Se ejecuta luego del unit test. Es un test de caja negra hecho generalmente por el tester. 

| Unit Test | Integration Test |
| --- | --- |
| Focus on one specific piece of the system in isolation | Focus on the interaction between the units, modules, or components |
| Are easier to write, faster to execute, and cheaper to maintain | Are more complex, slower to run, and more expensive to maintain |
| Verify internal consistency of code that you have complete control over | Verify how your code integrates with some other code |
| Have no external dependency―any external dependency is mocked or stubbed out | Often require interaction with external dependencies, such as databases, network services, hardware, etc. |
| Let you know the exact piece of code where the error is | Indicate which modules/components contain the error |
| Are comparable to checking whether a mobile phone battery is alive or whether the SIM card is activated | Are comparable to checking whether a mobile phone battery and SIM card are assembled to start the phone |

## **Que test de performance existen?**

- Load Test: Se simula el maximo uso del sistema, con maxima cantidad de usuarios.
- Stess Test: Se incrementara la cantidad de llamados a los servicios del sistema hasta que rompa, indicara la mayor cantidad de usuarios que el sistema podra soportar y cuanto tiempo tarda en recuperarse
- Resistance Test: Es test testear el sistema durante periodos de tiempo mas largos para revelar otros tipos de problemas.
- Test de aceleracion: Se testea como carga el contenido para usuarios con conexiones mas lentas.
- Peak Testing: Se simula que sucede con el sistema cuando llega a un pico de trafico
- Escalability Test: Testeamos, por ejemplo, cuanto podra el sistema escalar si agregamos otro servidor, o escalamos la instancia ya existente.
- **Prueba de volumen:**
    - Que el **software soporte muchos datos**
    - Enfocado en base de datos y transacciones

## **Que tipos de testing hay?**

- Integracion - Integration: Que un **código con otro se integre bien**, a veces lo hace el tester o el dev, Ejecutada por el **integrador**
- Unit:
    - Código que prueba una unidad de código, envió valores y veo lo que resuelve, por desarrolladores
    - No es TDD (Desarrollo definido por pruebas).
    - Es la primera etapa de prueba
- Static: Se identifican errores mientras se van escribiendo
- **Test de Regresión:**
    - Es el test de todo, **que una implementación no rompa algo ya hecho**.
    - Se hace en primera sobre casos positivos
- **Test de Humo:** Test rápido que **verifica que la versión está estable**
 (pocos test básicos, todos positivos por lo general)
- **Prueba aceptación usuario: El usuario interactúa con el sistema**, es casi siempre positivo, que lo que necesite funcione bien, esto en un entorno de **testing en alpha**
- **Pruebas beta:** Lo mismo que el anterior pero en un entorno productivo en prueba, el desarrollador no está presente. El mismo vuelve para recibir un feedback del usuario

## **Que chequea el Unit Test?**

A unit test checks the functionality of the smallest testable elements of an application―classes and functions―which allows developers to spot the failure and isolate it. Unit tests prove that given some input, the function returns the expected output. A collection of unit tests makes up a test suite

## **Quien es responsable de escribir los Unit Test?**

Unlike many other types of testing, unit tests must be written and updated by the same developers who write and adjust the application code. Unit testing is most beneficial for developers because once the test suite runs, they receive autogenerated, rapid feedback on their work.

## **Cuando se deberian escribir los Unit Test?**

Unit tests must be written at the same time as the main code. This timing makes the code loosely coupled and testable, and it pushes developers to think through edge cases (those that occur only at extreme operating parameters).

There is a common misconception that unit tests are a waste of precious project time. This may be the case at the beginning of a project―when your team has implemented only the initial set of features, every piece of the code is fresh, and you have no old code to worry about.

However, in a few months―or sometimes even weeks―the project grows, and with additional features to implement, you find yourself rewriting the old code more often. Developers and engineering teams commit hours to understanding how the old code works to ensure that each new change has not broken it. Gradually, the project slows down, and it becomes harder to add new features.

## **Cuando se deberian ejecutar los Unit Test?**

Unit tests are the first level of software testing and should be executed as early as possible—first, on a local developer workstation once any logically completed piece of code is implemented; second, in the Continuous Integration (CI) pipeline once code is pushed.

## **Cuanto se deberian demorar en correr los Unit Test?**

It takes seconds to run the whole unit test suite, allowing your team to regularly execute testing without slowing down the development process.

## **Ejecutar los Unit test requiere que la aplicacion sea ejecutada?**

A unit test does NOT require running an application. Your team can perform unit testing easily in an integrated development environment (IDE) or a command line without the need to execute the application as a whole.

## **Principios FIRST de los Unit test**

**Fast**

Tests should be fast-running. A whole suite of unit tests should take seconds to run. The faster the tests, the more of them you can have in the suite, and the more often you can run them. When tests run slowly, your team will not run them frequently. As a result, you may not find problems early enough to fix them easily, which limits your ability to clean up the code, resulting in a gradual deterioration of code quality.

**Independent**

Tests should not be dependent on each other. One test should not set the conditions for the next. Your team members should be able to run each test independently and in any order. When tests depend on each other, the first one to fail causes a cascade of downstream failures, making a diagnosis difficult and hiding downstream defects.

**Repeatable**

Tests should be repeatable in any environment. If unit tests pass when running one-by-one but fail when running the whole test suite, or if they pass on your development machine but fail on the continuous integration server, there’s a design flaw. Your team should be able to successfully run the tests on the production environment, QA environment, and laptops so there’s never an excuse not to do it.

**Self-Validating**

Tests should have a Boolean output and either pass or fail. The same test that fails now and passes later is flaky and compromises the whole testing suite. Flaky tests lead to negative consequences. Developers stop trusting tests and start ignoring them, and it becomes challenging to identify non-flaky tests that fail in a sea of flaky tests. You should not have to read through a log file or manually compare two text files to determine if a test passes. If they are not self-validating, then failure becomes subjective, and running tests requires a long manual evaluation.

**Timely**

Unit tests should be written in a timely manner―before or at the same time as the production code. Testing post facto requires developers on your team to refactor the working code and make additional efforts to have tests fulfilling FIRST principles.
