# Ciclos de Vida de Software

Tradicionalmente el desarrollo de aplicaciones informáticas se llevaba a cabo de forma individualizada, a base de codificar (generar líneas de código) y probar lo realizado cuanto antes. La misma persona escribía el código, lo ejecutaba y, si fallaba, lo depuraba. El proceso se realizaba sin ninguna planificación previa y sin que soliese existir documentación alguna. Debido a que la movilidad en el trabajo era baja, los ejecutivos estaban seguros de que esa persona estaría allí cuando se produjese algún fallo. En principio, el hecho de que desde un primer momento se vaya generando código, podría considerarse como un síntoma de enorme progreso, pero puede suponer posteriormente un gran retroceso e incluso la necesidad de desechar una gran parte de lo realizado en el caso de que existan errores y no se puedan llevar a cabo las modificaciones necesarias para subsanarlos (por ejemplo, si al 90% del código se descubre que el diseño de la base de datos es incorrecto, puede suponer desechar el trabajo y tener que comenzar de nuevo). Con este enfoque, cualquier cosa que no sea codificación pura y dura no se realiza (como, por ejemplo, actividades de planificación, de documentación, de aseguramiento de la calidad).

Esta forma de desarrollar aplicaciones es muy común en muchas organizaciones y, generalmente, se utiliza cuando no se elige o sigue un enfoque de desarrollo (ciclo de vida) concreto y/o apenas se realiza la actividad de planificación. Además, otro factor que juega a favor de este enfoque de *codificar y probar* es que requiere poca experiencia y cualquier persona podrá fácilmente familiarizarse con él [MCCONNELL, 1997].

Esta forma de desarrollar software puede ser eficaz en programas pequeños. Para otro tipo de proyectos, puede resultar peligrosa su utilización, ya que no se puede conocer el progreso del proyecto, ni tampoco su calidad, simplemente se está codificando y probando hasta que finaliza el proyecto. Otras maneras de realizar el desarrollo software, como se verán en los siguientes apartados, permitirán, por ejemplo, conocer el progreso, detectar un error lo antes posible, etc.

Por lo tanto, es probable que las aplicaciones realizadas según este enfoque de *codificar y probar:*

- Sean poco flexibles, y ante posibles modificaciones (por cambios en los requerimientos del cliente, cambios en el hardware, etc.) se incremente el coste de los proyectos e, incluso, en ocasiones, resulten virtualmente irrealizables debido a la naturaleza personalizada de los programas y a la falta de documentación (lo que provocará problemas de mantenimiento).
- Sean incompletas o no reflejen bien las necesidades del cliente, es decir, que no realicen todas las funciones requeridas y, además, lo hagan con una escasa fiabilidad.
- Provoquen el descontento de los clientes, pues se producen retrasos en la entrega (no se conoce el momento exacto en el que se entregarán), aparecen errores una vez que la aplicación ha sido entregada (lógico al no haberse realizado de forma sistemática actividades de verificación y validación en el proyecto).

Por tanto, es necesario que todo esfuerzo en el desarrollo del software conlleve un enfoque lógico para su realización. Dicho enfoque debe abarcar toda la vida del sistema, comenzando con su concepción y finalizando cuando ya no se utiliza o se retira [SIGWART, 1990].

El ciclo de vida software es la descripción de las distintas formas de desarrollo de un proyecto o aplicación informática, es decir, la orientación que debe seguirse para obtener, a partir de los requerimientos del cliente, sistemas que puedan ser utilizados por dicho cliente. También puede definirse como el conjunto de fases o etapas, procesos y actividades requeridas para ofertar, desarrollar, probar, integrar, explotar y mantener un producto software.

Las funciones principales de un ciclo de vida software son:

- Determinar el orden de las fases y procesos involucrados en el desarrollo del software y su evolución (teniendo en cuenta el modelo de procesos que se utilice como referencia).
- Establecer los criterios de transición para pasar de una fase a la siguiente (productos intermedios). Todo ello, incluye los criterios para la terminación de la fase actual y los criterios para seleccionar e iniciar la fase siguiente.

El ciclo de vida software da respuesta a las siguientes preguntas de la gestión de un proyecto de software:

- ¿Qué haré a continuación?
- ¿Cuánto tiempo continuaré haciéndolo?

El ciclo de vida que se seleccione en un proyecto [DAVIS, 1988] influirá en el éxito del proyecto, y puede ayudar a asegurar que cada paso que se dé acorte más la consecución del objetivo. Dependiendo del ciclo de vida que se seleccione, se puede aumentar la velocidad de desarrollo, mejorar la calidad, el control y el seguimiento del proyecto, minimizar gastos y riesgos, o mejorar las relaciones con los clientes. Una selección ineficaz puede ser una fuente constante de ralentización del trabajo, trabajo repetitivo, innecesario y frustrante.

Algunas de las ventajas que aporta el enfoque de ciclo de vida residen en lo siguiente:

- En las primeras fases, aunque no haya líneas de código, pensar el diseño es avanzar en la construcción del sistema, pues posteriormente resulta más fácil la codificación
- Asegura un desarrollo progresivo, con controles sistemáticos, que permite detectar precozmente los defectos.
- Se controla el sobrepasar los plazos de entrega y los costes excesivos mediante un adecuado seguimiento del progreso.
- La documentación se realiza de manera formal y estandarizada simultáneamente al desarrollo, lo que facilita la comunicación interna entre el equipo de desarrollo y la de éste con los usuarios. También aumenta la visibilidad y la posibilidad de control para la gestión del proyecto.
- Supone una guía para el personal de desarrollo, marcando las tareas a realizar en cada momento.
- Minimiza la necesidad de rehacer trabajo y los problemas de puesta a punto.

### 💜 **Iterativo e Incremental**

Es dividir el desarrollo en partes y cada parte es una **iteración**, que resulta un **incremento.** Las iteraciones deben ser controladas, es decir, planificarse. Los desarrolladores tienen en cuenta lo que deben hacer en funcion de los casos de uso de cada iteración.

- Reduce el riesgo a los costes de un solo incremento
- Reduce retrasos en el calendario
- Acelera el desarrollo. Se trabaja más a corto plazo

### 💜 **De waterfall a Agile**

****Se comprenden las siguientes fases:

- Especificación de requerimientos al principio de todo, y de ahí se congelan.
- Diseño
- Construcción
- Integración
- Debugging
- Instalación
- Mantenimiento

Consta de una evolución secuencial, los problemas se dieron por el entorno constantemente cambiante que tiene la industria. Según estudios, se sacó la conclusión de que la participación del usuario y el empleo de períodos de tiempo más cortos son claves para incrementar el éxito, de ahí surgieron varias otras metodologías:

- Espiral
- Iterativo
- Agile
