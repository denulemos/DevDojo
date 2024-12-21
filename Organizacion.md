<a name="cic-base"></a>

## [Organizacion en Software - Derecho en IT](#cic)

| Temas |
|----------|
| [¿Qué es el ciclo de vida de un software?](#cic1) |
| [Iterativo e Incremental](#cic2) |
| [De waterfall a Agile](#cic3) |
| [¿Cuál es el concepto de Organización?](#cic4)|
| [El concepto de "Misión de una Organización"](#cic5)|
| [El concepto de "Visión de una Organización"](#cic6)|
| [El concepto de "Valores de una Organización"](#cic7)|
| [El concepto de "Excelencia Empresarial"](#cic8)|
| [El concepto de Interesados (Stakeholders)](#cic9)|
| [El concepto de "Objetivos de una Organización"](#cic10)|
| [El concepto de "Entorno de una Organización"](#cic11)|
| [Recursos de una Organizacion](#cic12)|
| [Propiedad intelectual e informática - Derecho de Cita](#cic13)|
| [Propiedad intelectual y derechos de traducción](#cic14)|
| [Propiedad intelectual y derechos de ejecución](#cic15)|
| [Fotografías, Filmaciones e Informática](#cic16)|
| [Fraude a la propiedad intelectual](#cic17)|
| [El análisis de las obras intelectuales en la actividad informática](#cic18)|
| [Dignidad Humana y su protección, valores comprometidos](#cic19)|
| [Derechos sobre la imagen personal](#cic20)|
| [Casos en los que no es necesario el consentimiento](#cic21)|
| [Imagen de personas públicas](#cic22)|
| [Imagen de personas fallecidas](#cic23)|
| [Caso de la mujer en la tribuna](#cic24)|
| [El caso de los espías](#cic25)|
| [El software y los problemas de su encuadramiento legal](#cic26)|
| [El software como Obra Intelectual](#cic27)|
| [El software como invención](#cic28)|
| [El software como un nuevo objeto jurídico](#cic29)|
| [La prisión de los conceptos jurídicos](#cic30)|
| [Distintas etapas de la tecnología y distintos problemas](#cic31)|
| [El software y la protección por el régimen de la propiedad intelectual](#cic32)|
| [Software propietario, abierto y libre.](#cic33)|
| [Consecuencias de la inclusión de los programas dentro del régimen de propiedad intelectual](#cic34)|
| [Las ideas no pueden ser de nadie](#cic35)|
| [Obras intelectuales e inventos, marcas comerciales, diseños industriales](#cic36)|
| [Obras Intelectuales](#cic37)|
| [El carácter temporal](#cic38)|
| [Características: Novedad, originalidad, creatividad](#cic39)|
| [*Derechos sobre la obra, personalísimos y de explotación económica](#cic40)|
| [Origen de las firmas](#cic41)|
| [Firma desde el derecho](#cic42)|
| [Firma electrónica y firma digital](#cic43)|
| [La firma digital y la criptografía](#cic44)|
| [Personas en el derecho](#cic45)|
| [Elementos de un contrato](#cic46)|
| [Contratos sobre Hardware](#cic47)|
| [Contratos sobre Software](#cic48)|
| [Los contratos de obra y de servicios](#cic49)|
| [El problema de la protección de la información](#cic50)|
| [Responsabilidad Civil - El daño y sus categorías](#cic51)|
| [Relación de causalidad con el hecho dañoso](#cic52)|
| [Significado de los factores de atribución](#cic53)|
| [Factores de atribución subjetivos](#cic54)|
| [Factores de atribución objetivos](#cic55)|
| [Factores de distribución de la responsabilidad civil](#cic56)|
| [Tipicidad penal informática - El problema de la tipicidad penal](#cic57)|
| [La aparición de la informática y lo que produjo](#cic58)|
| [Metodos de analisis de tipo penales](#cic59)|
| [El problema de la tipificación de los delitos informáticos](#cic60)|
| [Normas de SGSI](#cic61)|
| [ISO/IEC 27001](#cic62)|
| [Responsabilidad de programadores, administradores de redes](#cic63)|
| [El problema del daño causado por un tercero por injurias realizadas en un sitio web](#cic64)|
| [Beneficios para una organización de implementar ISO 27001](#cic65)|

---

<a id="cic"></a>

# Organizacion en Software - Derecho en IT

<a id="cic1"></a>

### **¿Qué es el ciclo de vida de un software?**

[Volver al indice](#cic-base)

Tradicionalmente el desarrollo de aplicaciones informáticas se llevaba a cabo de forma individualizada, a base de codificar (generar líneas de código) y probar lo realizado cuanto antes. La misma persona escribía el código, lo ejecutaba y, si fallaba, lo depuraba. El proceso se realizaba sin ninguna planificación previa y sin que soliese existir documentación alguna. Debido a que la movilidad en el trabajo era baja, los ejecutivos estaban seguros de que esa persona estaría allí cuando se produjese algún fallo. En principio, el hecho de que desde un primer momento se vaya generando código, podría considerarse como un síntoma de enorme progreso, pero puede suponer posteriormente un gran retroceso e incluso la necesidad de desechar una gran parte de lo realizado en el caso de que existan errores y no se puedan llevar a cabo las modificaciones necesarias para subsanarlos (por ejemplo, si al 90% del código se descubre que el diseño de la base de datos es incorrecto, puede suponer desechar el trabajo y tener que comenzar de nuevo). Con este enfoque, cualquier cosa que no sea codificación pura y dura no se realiza (como, por ejemplo, actividades de planificación, de documentación, de aseguramiento de la calidad).

Esta forma de desarrollar aplicaciones es muy común en muchas organizaciones y, generalmente, se utiliza cuando no se elige o sigue un enfoque de desarrollo (ciclo de vida) concreto y/o apenas se realiza la actividad de planificación. Además, otro factor que juega a favor de este enfoque de *codificar y probar* es que requiere poca experiencia y cualquier persona podrá fácilmente familiarizarse con él [MCCONNELL, 1997].

Esta forma de desarrollar software puede ser eficaz en programas pequeños. Para otro tipo de proyectos, puede resultar peligrosa su utilización, ya que no se puede conocer el progreso del proyecto, ni tampoco su calidad, simplemente se está codificando y probando hasta que finaliza el proyecto. Otras maneras de realizar el desarrollo software, como se verán en los siguientes apartados, permitirán, por ejemplo, conocer el progreso, detectar un error lo antes posible, etc.

Por lo tanto, es probable que las aplicaciones realizadas según este enfoque de *codificar y probar:*

* Sean poco flexibles, y ante posibles modificaciones (por cambios en los requerimientos del cliente, cambios en el hardware, etc.) se incremente el coste de los proyectos e, incluso, en ocasiones, resulten virtualmente irrealizables debido a la naturaleza personalizada de los programas y a la falta de documentación (lo que provocará problemas de mantenimiento).
* Sean incompletas o no reflejen bien las necesidades del cliente, es decir, que no realicen todas las funciones requeridas y, además, lo hagan con una escasa fiabilidad.
* Provoquen el descontento de los clientes, pues se producen retrasos en la entrega (no se conoce el momento exacto en el que se entregarán), aparecen errores una vez que la aplicación ha sido entregada (lógico al no haberse realizado de forma sistemática actividades de verificación y validación en el proyecto).

Por tanto, es necesario que todo esfuerzo en el desarrollo del software conlleve un enfoque lógico para su realización. Dicho enfoque debe abarcar toda la vida del sistema, comenzando con su concepción y finalizando cuando ya no se utiliza o se retira [SIGWART, 1990].

El ciclo de vida software es la descripción de las distintas formas de desarrollo de un proyecto o aplicación informática, es decir, la orientación que debe seguirse para obtener, a partir de los requerimientos del cliente, sistemas que puedan ser utilizados por dicho cliente. También puede definirse como el conjunto de fases o etapas, procesos y actividades requeridas para ofertar, desarrollar, probar, integrar, explotar y mantener un producto software.

Las funciones principales de un ciclo de vida software son:

* Determinar el orden de las fases y procesos involucrados en el desarrollo del software y su evolución (teniendo en cuenta el modelo de procesos que se utilice como referencia).
* Establecer los criterios de transición para pasar de una fase a la siguiente (productos intermedios). Todo ello, incluye los criterios para la terminación de la fase actual y los criterios para seleccionar e iniciar la fase siguiente.

El ciclo de vida software da respuesta a las siguientes preguntas de la gestión de un proyecto de software:

* ¿Qué haré a continuación?
* ¿Cuánto tiempo continuaré haciéndolo?

El ciclo de vida que se seleccione en un proyecto [DAVIS, 1988] influirá en el éxito del proyecto, y puede ayudar a asegurar que cada paso que se dé acorte más la consecución del objetivo. Dependiendo del ciclo de vida que se seleccione, se puede aumentar la velocidad de desarrollo, mejorar la calidad, el control y el seguimiento del proyecto, minimizar gastos y riesgos, o mejorar las relaciones con los clientes. Una selección ineficaz puede ser una fuente constante de ralentización del trabajo, trabajo repetitivo, innecesario y frustrante.

Algunas de las ventajas que aporta el enfoque de ciclo de vida residen en lo siguiente:

* En las primeras fases, aunque no haya líneas de código, pensar el diseño es avanzar en la construcción del sistema, pues posteriormente resulta más fácil la codificación
* Asegura un desarrollo progresivo, con controles sistemáticos, que permite detectar precozmente los defectos.
* Se controla el sobrepasar los plazos de entrega y los costes excesivos mediante un adecuado seguimiento del progreso.
* La documentación se realiza de manera formal y estandarizada simultáneamente al desarrollo, lo que facilita la comunicación interna entre el equipo de desarrollo y la de éste con los usuarios. También aumenta la visibilidad y la posibilidad de control para la gestión del proyecto.
* Supone una guía para el personal de desarrollo, marcando las tareas a realizar en cada momento.
* Minimiza la necesidad de rehacer trabajo y los problemas de puesta a punto.

<a id="cic2"></a>

### **Iterativo e Incremental**

[Volver al indice](#cic-base)

Es dividir el desarrollo en partes y cada parte es una **iteración**, que resulta un **incremento.** Las iteraciones deben ser controladas, es decir, planificarse. Los desarrolladores tienen en cuenta lo que deben hacer en funcion de los casos de uso de cada iteración.

* Reduce el riesgo a los costes de un solo incremento
* Reduce retrasos en el calendario
* Acelera el desarrollo. Se trabaja más a corto plazo

<a id="cic3"></a>

### **De waterfall a Agile**

[Volver al indice](#cic-base)

Se comprenden las siguientes fases:

* Especificación de requerimientos al principio de todo, y de ahí se congelan.
* Diseño
* Construcción
* Integración
* Debugging
* Instalación
* Mantenimiento

Consta de una evolución secuencial, los problemas se dieron por el entorno constantemente cambiante que tiene la industria. Según estudios, se sacó la conclusión de que la participación del usuario y el empleo de períodos de tiempo más cortos son claves para incrementar el éxito, de ahí surgieron varias otras metodologías:

* Espiral
* Iterativo
* Agile

<a id="cic4"></a>

### **¿Cuál es el concepto de Organización?**

[Volver al indice](#cic-base)

Una organización es un conjunto de entidades (personas o no personas) con varios objetivos y/o metas en común, basada en valores, con estructura, recursos y entorno, que maneja información y realiza actividades.

Toda organización provee un servicio.

Tipos de organizaciones:

-Sector privado: Independiente del gobierno, buscan obtener ganancias. Un subconjunto de estas son las empresas. La forma de identificar lo que posee una organización (capital, recursos, etc.) es el contrato social.
Organizaciones sin fines de lucro: Utilizan sus ganancias para apoyar sus objetivos. Suelen ser de carácter voluntario o público.
-Sector público: Ofrece servicios gubernamentales.
-Sector voluntario o de caridad: Se enfocan en causas de beneficencia pública.
Toda organización está construida sobre valores, una misión y una visión.

<a id="cic5"></a>

### **El concepto de "Misión de una Organización"**

[Volver al indice](#cic-base)

Se refiere a la declaración que define el propósito fundamental y único de una organización, estableciendo su razón de ser. La misión describe la naturaleza de la organización y lo que la distingue de otras entidades similares. Es una guía para las acciones de la organización, reflejando las metas y valores de la misma y proporcionando un marco para las estrategias y políticas operativas. La misión suele responder a las siguientes preguntas:

* ¿Cuál es el propósito de la organización?
* ¿Qué busca lograr en su contexto y entorno?
* ¿Qué actividades realiza para alcanzar sus objetivos?
* ¿A quiénes se dirige o quiénes son sus beneficiarios o afectados por sus acciones?

En tu texto, hay algunos detalles que podrían mejorarse para que la redacción sea más clara y precisa:

1. "Es el motivo, propósito o razón de ser de la existencia de una empresa y/o organización" podría reescribirse como: "Es el motivo, propósito o razón de ser de una empresa u organización."

2. "Que pretende lograr en dónde está" podría ser más claro si se escribe como: "Qué pretende lograr en su contexto actual."

3. "Que hace en su entorno" podría reescribirse para mejorar la coherencia con el resto del texto: "Qué acciones realiza en su entorno."

4. "A quién va  a afectar eso que quiere hacer" podría ajustarse para una mejor comprensión: "A quiénes afectarán las acciones que planea llevar a cabo."

Con estos ajustes, el texto quedaría así:

El concepto de Misión de una Organización se refiere al motivo, propósito o razón de ser de una empresa u organización. Esta misión establece:

* Qué pretende lograr en su contexto actual.
* Qué acciones realiza en su entorno.
* A quiénes afectarán las acciones que planea llevar a cabo.

<a id="cic6"></a>

### **El concepto de "Visión de una Organización"**

[Volver al indice](#cic-base)

A dónde va esa empresa a largo plazo, teniendo en cuenta a las nuevas tecnologías, los cambios, los clientes, etc..

<a id="cic7"></a>

### **El concepto de "Valores de una Organización"**

[Volver al indice](#cic-base)

Creencias o convicciones del grupo que conforma a la organización, son los principios de comportamiento que posee la organización. Se demuestran con un código de conducta, etc..

<a id="cic8"></a>

### **El concepto de "Excelencia Empresarial"**

[Volver al indice](#cic-base)

Es el conjunto de **prácticas sobresalientes** en la gestión de la organización que conllevan al logro de ciertas cosas. Lograr esta excelencia es responder de buena manera a dos necesidades: -Mantener lo esencial y lo que funciona

- Responder con agilidad a los cambios del entorno

Se impulsa a hacer equipos de alto rendimiento, con un líder, disminuyendo cada vez más los cursos jerárquicos.

**Un modelo de calidad o de excelencia** es una metodología para comprobar la excelencia de la organización, es como una autoevaluación de la misma.

<a id="cic9"></a>

### **El concepto de Interesados (Stakeholders)**

[Volver al indice](#cic-base)

Es toda persona y/o organización que tiene algún tipo de relación o interés sobre un proyecto, ese o no en el. Hay de distintos tipos:

- Empresas y/o organizaciones pueden agregar certificaciones, aprobaciones, permisos para ser ejecutado
- Usuarios Quienes van a usar el producto de nuestro proyecto.
- Afectados Personas que no están relacionadas con el proyecto pero que se ven afectadas en algún aspecto por este
- La propia organización , los trabajadores, supervisores, etc..

<a id="cic10"></a>

### **El concepto de "Objetivos de una Organización"**

[Volver al indice](#cic-base)

Los fines a donde va la actividad de la organización. Pueden ser propios, para los empleados o para el afuera.

<a id="cic11"></a>

### **El concepto de "Entorno de una Organización"**

[Volver al indice](#cic-base)

Elementos externos que afectan o influyen en la actividad de una organización. Es un concepto. Entre la empresa y el entorno hay una relación constante:

- Entorno General: sistema social, político y económico en el que se mueve la organización. La cultura de la población, el marco jurídico y la forma de conducta
- Entorno próximo: Organizaciones que influyen de forma directa o indirecta en el accionar de la organización, como el estado.
- Entorno Intermedio: Pueden ser los sindicatos o las cámaras comerciales.

<a id="cic12"></a>

### **Recursos de una Organizacion**

[Volver al indice](#cic-base)

Productos activos productivos de la empresa, son pocos, y por eso tienen mucho valor $$. Los hay de distintos tipos como:

- Tangibles: Financieros y físicos. Son sostenidos por un contrato, como por ejemplo el valor de un jugador de fútbol.
- Intangibles: Tecnológicos y de reputación, como la confianza que infunden en el cliente.

Otro tipo de clasificación puede ser...

- Humanos *Renovables y No renovables (Materiales y No materiales)
- No Humanos  *Renovables y No renovables (Materiales y No Materiales)

**Recursos económicos:** Lo patrimonial de la empresa, individuo, una empresa, etc.. ****

**Recursos financieros:** Disponibilidad financiera, liquidez, disposición del efectivo, etc..

**Bienes de uso:** Edificios, autos, sufren procesos de amortización. El único que no se amortiza son los terrenos o campos

**Bienes de cambio:** Están para vender o cambiar y representan ganancia para la empresa.

<a id="cic13"></a>

### **Propiedad intelectual e informática - Derecho de Cita**

[Volver al indice](#cic-base)

En los libros hay citas de varias obras que son hechas sin autorización, pero eso no es ilegal, ya que se está usando el **derecho de cita**. A veces las obras necesitan citas textuales y el régimen autoriza a hacerlo en algunos casos. En argentina se permite en dos condiciones:

- Que sea el mínimo necesario y no sean más de 1000 palabras, u 8 compases sí es música. Señalar al autor y a la obra
- Que se haga en contexto de cita, solo en la medida que la cita lo requiera. La cita debe estar embebida en la nueva obra, debe ser necesaria

En otros países se maneja la cantidad de palabras por porcentajes, o es un criterio más flexible. Nada dice la ley sobre imágenes o filmaciones, donde habrá que recurrir al concepto jurídico de lo “razonable”, con varias interpretaciones. Estas reglamentaciones se hicieron pensando en los libros que una vez impresos son inmodificables.

La tecnología del Servicio Web es distinta, fue creada con el objetivo de desvincular la estructura fija del que escribe con la estructura del que lee. El archivo web no tiene una estructura determinada, es dada por cada lector. Por ejemplo, sí desarrollamos una web que remite a otras web (como quitandolas), contamos con las mismas regulaciones de los libros? Ahora imaginemos una cita dinámica, lo citado cambia cada X cantidad de tiempo. En estos casos no tenemos respuesta ya que no tenemos normas jurídicas que se adapten a la realidad tecnológica actual.



<a id="cic14"></a>

### **Propiedad intelectual y derechos de traducción**

[Volver al indice](#cic-base)

Muchas obras son hechas en un idioma y luego se traducen a otro, algo que se considera una obra que requiere esfuerzo intelectual, originalidad y creatividad. Cada traducción expresa algunos aspectos de la obra original.

La ley reconoce a los traductores derechos sobre su traducción, basada en las características de novedad, originalidad y creatividad que desarrollan. Para contar con estos derechos, la traducción no tiene que ser legítima, debe hacerse con autorización del autor en caso de que existan derechos de propiedad vigentes. Cuando la traducción es hecha por computadora, no se le llamaría traducción ya que la PC no tiene el espíritu necesario para reconocimiento de derechos de propiedad intelectual de traducción.

<a id="cic15"></a>

### **Propiedad intelectual y derechos de ejecución**

[Volver al indice](#cic-base)

Algunas obras están destinadas a ser interpretadas o ejecutadas, como la música o las obras de teatro, o ciertas obras. Cada ejecución difiere y hay preferencias. El sistema de propiedad intelectual también reconoce el derecho sobre las ejecuciones porque en cada una el intérprete contribuye a sus dotes de novedad, originalidad y creatividad, ya que las ejecuciones no son mecánicas, se realizan a base de decisiones.

Los programas que sintetizan el habla o reproducen obras musicales se perfeccionan y ¿se puede reclamar derecho sobre estas? No, porque para la ley solo se pueden poseer derechos sí una persona humana ha dejado la impronta de su espíritu en la ejecución.

<a id="cic16"></a>

### **Fotografías, Filmaciones e Informática**

[Volver al indice](#cic-base)

Algunas fotografías son obras intelectuales y otras no. Para que lo sea, debe poseer los requisitos de novedad, originalidad y creatividad. La ley Argentina establece un régimen diferenciado de protección, el plazo es de 20 años a contar desde su primera publicación. Se deberá inscribir dejando constancia de esa fecha, lugar de publicación y autor. ¿Una computadora puede realizar una fotografía artística? No.

<a id="cic17"></a>

### **Fraude a la propiedad intelectual**

[Volver al indice](#cic-base)

Se establecen penas sobre la reproducción de obras intelectuales, la pena es de 1 mes a 6 años y el tipo es Defraudar => Derechos de propiedad intelectual.

<a id="cic18"></a>

### **El análisis de las obras intelectuales en la actividad informática**

[Volver al indice](#cic-base)

Aunque una obra califique como obra intelectual y tenga toda la protección de la ley, se debe determinar sí se encuentra en el dominio privado o público, donde se podrán reproducir sin autorización.

<a id="cic19"></a>

### **Dignidad Humana y su protección, valores comprometidos**

[Volver al indice](#cic-base)

La dignidad es el centro de todos los derechos, es el principio mediante se explican construcciones juridicas y de las socluciones que se dan en casos individuales, el individuo no puede renunciar a su propia dignidad, por eso no son legales los “contratos” de esclavitud, etc..

Hay un tipo de derechos que son extrapatrimoniales, **derechos personalísimos**, unidos a la persona y a los que nadie puede renunciar. Sí una persona sufre un daño a su dignidad, puede pedir su cese y la indemnización correspondiente, sin necesidad de probar que se realizó un daño concreto. La **intimidad personal** es el derecho de contar con un ámbito restringido de vida dentro del cual nadie no autorizado pueda ingresar o conocer sin autorización. Con el uso de las PC, se han multiplicado los problemas relativos a las violaciones de ámbitos privados, en un dispositivo podemos guardar información muy relevante sobre nosotros. En las redes sociales quedan grabados nuestros vínculos, opiniones, etc.. lo que nos hace muy vulnerables ante acciones no deseadas.

<a id="cic20"></a>

### **Derechos sobre la imagen personal**

[Volver al indice](#cic-base)

El derecho a la imagen protege no solo la imagen visual (también formas de presentarla por fotos, videos, etc..), sino también la imagen sonora de las personas (su voz). El objetivo es que nadie pueda captar ni reproducir ni difundir la imagen visual ni auditiva de una persona sin su permiso, cada uno es dueño exclusivo de su imagen.

Sí una persona presta su consentimiento para que se publique una imagen, puede revocar cuando decida, y sí esta revocación produce perjuicio al antes autorizado, se le debe resarcir. La autorización para sacar una foto no autoriza su difusión, son dos permisos distintos.

<a id="cic21"></a>

### **Casos en los que no es necesario el consentimiento**

[Volver al indice](#cic-base)

La ley elabora los casos en donde no es necesario el consentimiento de las personas cuya imagen sea captada o difundida

- Que la persona participe de actos públicos. Sí la imagen es de la calle y de forma casual es tomada por la persona que circulaba, entonces no será necesario su consentimiento. Pero sí el objetivo es señalar a alguien por alguna característica especial, entonces sí se deberá requerir su consentimiento
- Que haya interés científico, cultural o educacional prioritario. Se deberán tomar medidas necesarias para que la imagen no produzca un daño innecesario, eliminar cuanto se pueda la imagen en la medida en que pueda mantenerse el objetivo científico, educacional o cultural
- Que sea el ejercicio regular del derecho de informar sobre acontecimientos de interés general

Se chocan dos derechos. El de informar y el derecho a preservar la imagen. Se deberá determinar en cada caso cuál prevalecerá. Sí hay conflicto, se irá al tribunal.

<a id="cic22"></a>

### **Imagen de personas públicas**

Personas por propia voluntad se expusieron al conocimiento público, como famosos, políticos, etc.. La imagen de estas personas puede mostrarse sin su consentimiento porque hacerlo es de interés público, respetando ámbitos de intimidad, tampoco vulnerando su dignidad

<a id="cic23"></a>

### **Imagen de personas fallecidas**

[Volver al indice](#cic-base)

Serán los herederos quienes deberán prestar el consentimiento en los mismos términos como sí fuera una persona viva. Pasados los 20 años de muerto, pasará a ser libre, siempre y cuando no sea ofensiva, sí lo resulta, los herederos podrán aún así, reclamar.

<a id="cic24"></a>

### **Caso de la mujer en la tribuna**

[Volver al indice](#cic-base)

Una revista capta una foto en un acto público, con 5 personas, en el medio una mujer. La foto podría publicarse ya que la regla dice que no se necesita consentimiento cuando se trata de un acto público. Pero antes de su publicación, la revista difumina a todas las personas menos a la mujer, entonces la mujer demanda a la revista por haber difundido esta imagen sin su consentimiento. La mujer triunfa en el juicio y la revista debe indemnizarla.

Supongamos que la mujer vuelve a otro acto público, y se saca otra foto, y por cuestiones de la naturaleza, salen difuminados todos menos ella. La mujer hace otro juicio, y esta vez la revista gana el juicio, aunque la foto sea casi igual, ya que lo que define el resultado jurídico no es el hecho en sí, sino el contexto.

<a id="cic25"></a>

### **El caso de los espías**

[Volver al indice](#cic-base)

Se saca una foto de gente caminando en la calle y a una persona se le tapa el rostro con una franja negra. Esta misma persona se reconoce y hace un juicio. La revista argumenta que no es la misma persona y que tiene derecho a publicar esta imagen ya que es una imagen sucedida en público. El demandante prueba que es él, y dice que sí bien fue un acto público, el hecho de haberle tapado la cara, lo individualizan, haciendo que su participación dejará de ser casual. Por esto mismo, el demandante gana el juicio.

En las redes sociales se suben fotos constantemente de personas, ¿Pueden estas demandar a los usuarios?

- El consentimiento no debe ser necesariamente expreso, ya con que la persona participe de la imagen es algo
- Con consentimiento, igualmente es revocable como consecuencia de que se trata de un derecho personalísimo.
- Sí se trata de terceros, la ley autoriza el uso de la imagen sí es un acto público o estos terceros aparecen casualmente en la imagen.

El derecho de la imagen no se respeta en las redes sociales. Esto se debe a dos cosas, el desconocimiento y la dificultad de los operadores jurídicos en preparar la prueba en las que se van a apoyar. Aunque no negamos que en un futuro esto pueda evolucionar.

<a id="cic26"></a>

### **El software y los problemas de su encuadramiento legal**

[Volver al indice](#cic-base)

Antes del software, existían regímenes de protección de objetos inmateriales, como el derecho de propiedad intelectual y el derecho de patentes de invención. El problema fue en cual de esos regímenes jurídicos corresponde encuadrarlo o sí el software por sus características intrínsecas era una obra intelectual o un invento.

En 1967, la OMPI (Organización Mundial de la Propiedad Intelectual) estableció que el software era una obra intelectual, y que por lo tanto, se le aplicaría el régimen de protección de las obras intelectuales. En 1991, la OMPI estableció que el software era una obra intelectual, pero que también podía ser considerado un invento, y que por lo tanto, se le aplicaría el régimen de protección de las patentes de invención.

<a id="cic27"></a>

### **El software como Obra Intelectual**

[Volver al indice](#cic-base)

¿Cumple con los requisitos?

- **Novedoso: Puede serlo**
- **Originario: Se plantean dudas**
- **Creativo: Lo creativo es lo contrario de lo trivial, implica una forma de expresar la idea germinal que sea distinta, que no lo pueda desarrollar cualquiera, es el descubrimiento de la obra intelectual. El software puede cumplir con este requisito.**

Las dudas se plantean respecto al carácter de originariedad. El sistema de propiedad intelectual es heredero ideológico del romanticismo según el cual las obras intelectuales son las que provienen del espíritu individualista de una persona. El espíritu de las personas producen obras, y ellas son las expresiones de ideas que se protegen.

Sí el software es una técnica, un procedimiento para lograr la realización de una tarea, no sería una obra originaria, y tampoco sería una obra intelectual en los términos que el derecho exige.

El software puede ser una creación originaria, cuando se programa se lo puede hacer llevando melodías, contrapuntos y ritmos, puede ser elaborado siguiendo sentidos estéticos, lo que sería parecido al arte puro. Todo sin perjuicio de los objetivos prácticos y operativos de los programas.

<a id="cic28"></a>

### **El software como invención**

[Volver al indice](#cic-base)

Un invento para ser protegido debe ser un desarrollo destinado a la solución de un problema práctico que termine en un producto tangible. Las ideas y procedimientos intelectuales están fuera de la protección de las patentes. No se puede proteger por este sistema a conceptos abstractos y sus combinaciones.

Los inventos deben aportar una solución a un problema de naturaleza técnica y el software no fue visto así porque por “problema de naturaleza técnica” se entendió un problema fundamentalmente de naturaleza material.

El régimen de patentes generaba otro problema, un invento. Al igual que una obra intelectual, debe ser novedoso. Una obra intelectual existe desde que se crea y se considera novedosa hasta que alguien entabla una demanda sosteniendo que ha sido copiada. Para otorgar una patente, la oficina correspondiente debe verificar que lo sea, debe verificar que nunca se haya desarrollado en ninguna parte del mundo. Constituía un obstáculo de difícil solución en el sistema legal.

<a id="cic29"></a>

### **El software como un nuevo objeto jurídico**

[Volver al indice](#cic-base)

Esta era la polémica situación tanto en la doctrina como en las fluctuantes decisiones judiciales en muchos países. Una nueva posición sostuvo que el software no se encuadra ni en el sistema de propiedad intelectual ni en el de patentes, por lo que no correspondía generar un sistema conceptual novedoso para esta creación contemporánea. Esta posición, no tuvo adherentes destacados y fue descartada.

<a id="cic30"></a>

### **La prisión de los conceptos jurídicos**

[Volver al indice](#cic-base)

El derecho tiene la funcion de solucionar problemas. Para hacerlo crea estructuras conceptuales que forman subsistemas dentro de estructuras generales. Se producen contradicciones entre distintas partes, vacíos, etc.. También se producen prisiones conceptuales. Una vez se desarrollan los conceptos, se explican, suele perderse en el olvido el problema para el cual se crearon.

Al generarse un mundo conceptual nuevo se olvida el carácter de los problemas que se buscaba resolver y que originaron las construcciones. Nos vemos compelidos por estos conceptos porque las cosas reales son obligadas a encuadrarse en ellos. A los problemas se los encuadra de la manera más conocida, donde haya luz, y paso esto con el software y sus problemas de protección. Podemos hacer un razonamiento distinto, en vez de preguntarnos en qué régimen jurídico es más adecuado para integrar el software, podemos preguntarnos en qué régimen sería más conveniente incluirlo, para los de, usuarios y la sociedad.

<a id="cic31"></a>

### **Distintas etapas de la tecnología y distintos problemas**

[Volver al indice](#cic-base)

Antes, cuando las PC no eran tan comunes de tener, el problema era la copia de los procedimientos o algoritmos de programación. El peligro era en ese entonces el espionaje industrial porque eran verdaderos espías quienes trafican ilegalmente con fórmulas de programación. Cuando las computadoras pudieron compartir el software, el problema cambió, con la aparición de las PC más personales se generalizó la copia ilegal de los programas, a punto del escándalo. La necesidad era evitar la copia de los programas, la copia de los archivos, la copia lisa y llana por medios electrónicos. El régimen jurídico apropiado para este contexto era el de la propiedad intelectual que lo que hace es impedir la reproducción ilegal lisa y llana. El régimen de la propiedad intelectual cuenta con un tipo penal de fraude que resultaba adecuado para ser aplicado a las organizaciones dedicadas a la copia ilegal.

<a id="cic32"></a>

### **El software y la protección por el régimen de la propiedad intelectual**

[Volver al indice](#cic-base)

Se acordó que el software será protegido por el mismo régimen de la propiedad intelectual. No necesitamos resolver el problema respecto a sí el software es o no es una obra intelectual, simplemente le damos el mismo régimen de protección de las obras intelectuales. El incorporarlas dentro del régimen generó dificultades que se fueron viendo con el tiempo.

En Argentina, por la ley 25036 se modificó la ley 11723 de propiedad intelectual y se le agregaron una serie de normas relativas a los programas de computación y a las BD. La primera dificultad es saber sí para que los programas de computación y las BD estén protegidos se requiere que se cumplan requisitos como cumplen las obras intelectuales por el solo hecho de serlo. Las soluciones judiciales han sido vacilantes, también la ley especifica que cuando un programa se elabore por dependientes contratados para hacerlo, el titular de los derechos será quien los contrato, salvo que se acuerde lo contrario. Esto es importante saberlo ya que permite realizar contratos en que las partes obtengan de una forma más adecuada la satisfacción de sus intereses. Las formas en que puede darse la copia ilegal de un programa son 3, porque 3 son las formas en que un programa se expresa.

El programa es un texto que un programador escribe, el archivo resultante es sometido a un proceso que genera nuevos archivos llamados archivos objetos, y esos archivos pueden correrse en la computadora por donde aparecen dibujos en la pantalla, opciones, se transforman datos que se exponen por periféricos. Esto permite 3 tipos de copias:

- Del programa como texto, esto puede suceder sí se puede acceder al código fuente del programa
- Copia de los archivos que se ejecutan, la más común, cuando se copian sin tener licencia.
- El programa mientras es ejecutado por la computadora, va mostrando imágenes combinadas, también es posible copiar en su despliegue.

El derecho de propiedad intelectual protege contra las copias ilegales y las consecuencias son dos, la comisión del delito de fraude a la propiedad intelectual y la obligación de reparar civilmente los daños.

<a id="cic33"></a>

### **Software propietario, abierto y libre.**

[Volver al indice](#cic-base)

- **Propietario**: que se encuentra protegido y existe un titular. No puede reproducirse sin autorización.
- **Software de dominio público**: no existe titular o este lo ha liberado y es de libre uso.
- **Software libre:** es un software amparado por los derechos de propiedad intelectual, pero que el o los autores han establecido una licencia de uso amplia de acuerdo a ciertos principios. Normalmente está autorizada la copia sin necesidad de autorización expresa siempre y cuando se respeten ciertas condiciones.
- **Software abierto**: software que se distribuye con el programa fuente. Más allá de ello, puede estar autorizada la modificación o no.

<a id="cic34"></a>

### **Consecuencias de la inclusión de los programas dentro del régimen de propiedad intelectual**

[Volver al indice](#cic-base)

El régimen de propiedad intelectual fue creado dentro de un contexto tecnológico muy determinado, fundamentalmente la tecnología de edición de libros y la ideología del romanticismo europeo. Ante una realidad nueva, como fue la creación de las computadoras y los programas, se buscó la protección y se ajustó su inclusión en el régimen de propiedad intelectual lo que ha traído varias consecuencias poco funcionales:

- El límite temporal de la protección de estos derechos intenta establecer una ecuación de equilibrio entre los derechos del autor, inventor o creador por una parte y los de la sociedad por la otra. El software, por sus características, cuenta con un tiempo de explotación o de vida útil reducido en comparación a las obras intelectuales. Con lo cual protegerlos durante los mismos períodos resulta ridículo. Proteger un programa de computación por un lapso de 70 años después de la muerte del autor o por 70.000 años resulta ser lo mismo, una protección infinita; por ello se rompe el equilibrio en perjuicio de la sociedad.
- El derecho de cita se vuelve materialmente imposible porque el mismo concepto resulta ser absurdo en el ámbito del software.
- No se entiende si para estar protegidos los programas se deben respetar ciertas características de novedad, originalidad y creatividad o en qué sentido podrían entenderse.
- No existe conciencia social del delito de fraude a la propiedad intelectual de los programas por lo cual resulta escandaloso que hasta los mismos gobiernos utilicen programas ilícitamente obtenidos. Por ello resulta crucial desarrollar nuevas alternativas de protección que se ajusten a la realidad tecnológica y a los valores de la sociedad actual.



<a id="cic35"></a>

### **Las ideas no pueden ser de nadie**

[Volver al indice](#cic-base)

Las ideas no pueden robar, para robar el objeto debe ser ajeno y las ideas como tales no son propiedad. Todas nuestras actividades son producto de nuestras ideas, el humano funciona a ideas. Una cosa es una idea para hacer algo y otra es su expresión concreta. No es lo mismo la idea que inspira a una canción que la canción en sí. Existe la concepción de la idea y, tras una elaboración, lo producido por esa idea.

El derecho actúa sobre estas ideas, y lo hace con el siguiente proceso:

https://lh7-us.googleusercontent.com/lEQzeAdxNA8h_IK9gHcQ_LL9gIbH17IwrHLArC5MdcuKbjfxeZ6pdhCAWXwKPv6xfxQo9qIlo5TGm891X5eZNnUQNfzsFNkXKTSX6Hsusm2dP__AxWNHLi9OqAyEJESoPgpcObF6K7FvGOhANwan0g

- Por una ley, se crea un concepto que agrupa un conjunto de los objetos creados, como la obra intelectual. Se agrupan las elaboraciones en conjuntos circunscriptos.

Las clasificaciones que se producen como consecuencia de este paso podrían haber sido distintas:

- Dicta para ese conjunto un sistema jurídico, es decir, normas que establecerán el momento en que se adquiere la propiedad
- La ley establece tipos penales para para quien viole los derechos de los de ahora propietarios de lo creado

Algunos conceptos quedaron encuadrados caracterizados, definidos, mientras que otras de las realidades producidas por las ideas no merecieron ese tratamiento legislativo. Esa diferencia sucede porque la ley protege algunas de esas creaciones y otras no conforme lo que los legisladores entienden son los valores e intereses de una sociedad.

<a id="cic36"></a>

### **Obras intelectuales e inventos, marcas comerciales, diseños industriales**

[Volver al indice](#cic-base)

Hay obras artísticas literarias, científicas, etc.., donde el material (sonidos de la canción, libro, etc..) carece de importancia en cuanto a la obra, es solo un soporte y lo relevante es el sentido. También están las cosas tangibles que solucionan problemas prácticos y son de utilidad material. En el primer caso, el objetivo de la obra es satisfacer necesidades espirituales, el segundo busca resolver problemas prácticos y son de importancia económica.

A las primeras la ley las agrupa como **obras intelectuales**, y las segundas son protegidas con el **régimen de patentes de invención.**

- “¿Patentaste tu idea?” => Las ideas como tal no están protegidas y lo único que se patenta son los inventos.

De forma parecida se protegieron las marcas comerciales, símbolos que identifican un producto dentro de un mercado y diseños industriales.

<a id="cic37"></a>

### **Obras Intelectuales**

[Volver al indice](#cic-base)

Son creaciones artísticas, literarias, científicas y pedagógicas. La protección fundamental es que nadie puede reproducirlas sin el consentimiento del autor, titular, etc..

- Es **internacional**. Se hizo con características mínimas comunes a todos los países. Una obra de Argentina se protege en todo el mundo.
- Se adquiere en el mismo momento de la creación
- Se inscriben en los registros de la propiedad intelectual. Esta no otorga la propiedad, sino que tiene como funcion esencial cuidar la prueba sobre quien es el que la creó. No es una prueba definitiva, pero demuestra que el dia de la inscripción estaba en poder de quien lo realizó
- Es **temporal**, pasado x tiempo dejan de pertenecer al autor o a sus descendientes y se convierten en uso público.

<a id="cic38"></a>

### **El carácter temporal**

[Volver al indice](#cic-base)

¿Por qué una obra intelectual es temporal? La ley establece que las obras intelectuales pertenecen a sus creadores por un tiempo y luego pasarán al patrimonio común, no al estado como se suele creer. Serán de uso público. En 1933 en Argentina se establecieron 30 años desde la muerte del autor de vencimiento, y a medida que se mejoraron las comunicaciones, tecnología de impresión y reproducción de libros, el plazo debía disminuir porque la explotación económica de las obras intelectuales se hacía más veloz. Hoy en día la obra se encuentra protegida toda la vida del autor y luego a sus herederos por 70 años desde el 1 de enero desde su muerte.

<a id="cic39"></a>

### **Características: Novedad, originalidad, creatividad**

[Volver al indice](#cic-base)

No cualquier creación producto del trabajo intelectual es una obra intelectual

- **Debe ser novedosa**: No debe existir antes. Toda obra intelectual tiene parecidos, similitudes, podríamos decir que toda obra intelectual es la modificación de otra anterior previamente existente. Una creación para ser una obra intelectual debe ser novedosa.
- **Debe ser originaria**: Es una obra que nace del espíritu de una persona, dentro del ambiente ideológico en el cual se desarrolló el sistema de la propiedad intelectual el espíritu se expresa en la poesía, música, novelas, esculturas. Esas producciones del espíritu son las que están protegidas por el sistema de propiedad intelectual. Solo son originarias obras de contenido artístico, literario, científico o pedagógico.
- **Debe ser creativa:** Lo creativo es lo distinto. El espíritu se manifiesta a través de obras únicas y que pueden expresar una singularidad que enriquece el universo. En la práctica judicial se aplica un criterio amplio ya que no se evalúa el valor estético sino la singularidad.

<a id="cic40"></a>

### ***Derechos sobre la obra, personalísimos y de explotación económica**

[Volver al indice](#cic-base)

Como expresión de una idea se produce una obra intelectual. Reproducir una obra puede ser hecho de muchas formas, fotocopiando un libro, cantando una canción, etc.. ¿Qué derechos concretos tiene el autor? **Derechos personalísimos y derechos de explotación económica**.

Los derechos personalísimos son derechos inalienables, no pueden ser enajenados ni por el titular de esos derechos, son derechos de la persona humana. El autor no puede renunciar a esos derechos como no puede renunciar a su libertad, nombre, cuerpo, etc..

- **Derechos de autoría:** Sí el autor de una novela hace un contrato con una editorial para publicar y editar la obra, sí hay una cláusula que autoriza publicar la obra con el nombre de otra persona como autor, esta no tendría validez.
- **Derecho de integridad:** es el derecho inalienable a que la obra se mantenga intacta, sin agregados, según el autor la hizo. Cualquier cláusula contraria será nula
- **Derecho de arrepentimiento:** Sí el autor se arrepiente una vez que sus libros están a la venta, el editor no puede seguir vendiendo. El autor debe pagar los daños que produce su decisión. Por el motivo que sea.

    https://lh7-us.googleusercontent.com/DkRMPgn0J8E2o8YK-jpsJNTl_MJ5ybdJBYQyBl6OvBKELvIFeq5_yzPZWcJWtiiwqDwxLQCoApPbtiPEjEPfuoZDpz122odphA4z5PAOmB5V27CVKPkGGhG4EDHxAXvocdCzCo1WjhLincN4mo2VDw


El derecho de explotación económica permite al autor difundir su obra a través de autorizaciones de reproducción, pagas o gratuitas. El autor realiza convenios que establecen dentro de la totalidad de lo posible, los límites de lo autorizado. El autor diseña lo que va a entregar a través de convenios.

<a id="cic41"></a>

### **Origen de las firmas**

[Volver al indice](#cic-base)

El humano, cada persona, tiene características únicas, irrepetibles, en su modo de escribir. El derecho aprovechó esto para darle sentido jurídico a la firma, se inventó junto con el establecimiento de consecuencias legales a los documentos en los cuales alguien la estampa su firma.

“Firma” refiere a lo firme, a lo afirmado. Antes de la firma hubo otro sistema, con sellos. Las personas tenían un anillo-sello que los identificaba y con el marcaban los documentos.

La firma es un acto personalísimo, no puede ser delegado. La firma es un acto de voluntad, de adhesión a un contenido. La firma es un acto de fe, de confianza, de creencia en la palabra dada. La firma es un acto de responsabilidad, de asunción de las consecuencias de lo firmado.

<a id="cic42"></a>

### **Firma desde el derecho**

[Volver al indice](#cic-base)

La firma identifica a la persona, autentifica el documento firmado y el firmante hace saber que presta su consentimiento sobre lo expresado en el documento. La firma a mano también se llama **autógrafa**. Lo que permitió la difusión de la firma a mano fue la característica de poder determinarse su autenticidad, en el caso de que alguien diga que una firma no es suya, hay maneras de saber sí lo es o no.

La invención de la escritura y la proliferación de documentos permitieron desarrollar actividades importantes, como cosas financieras o de negocios. La ventaja de la firma es que determina al autor y la autenticidad del documento por el gesto de la mano firmante. No se puede firmar documentos digitales, solo documentos en papel.

<a id="cic43"></a>

### **Firma electrónica y firma digital**

[Volver al indice](#cic-base)

| Firma Digital | Firma Electrónica |
| --- | --- |
| La firma digital es, por tanto, una parte fundamental de la firma electrónica avanzada y de la firma electrónica cualificada, pero no de la firma electrónica simple. | Una firma electrónica simple sería por ejemplo, un número de
identificación personal (PIN) ingresado en un cajero automático del banco o hacer clic en "aceptar" o "en desacuerdo" en un
contrato electrónico de "términos y condiciones". |
| Evita la suplantación de identidad y permite la autenticación e identificación en toda clase de procesos administrativos, burocráticos o fiscales, etc | Este tipo de firma electrónica no permite atribuir la firma
electrónica de un firmante a ese firmante en concreto, por lo que
no reúne las características de la firma digital. |
|  | La firma electrónica es una expresión genérica y mucho más
amplia relativa a los datos electrónicos, la firma digital es la
firma con criptografía basada en clave pública. |

El documento digital es modificable sin dejar rastros físicos que deja el documento en papel. Esto dio lugar a problemas esenciales, especialmente en cuanto al valor probatorio de estos documentos. Para las legislaciones, el único documento firmado que existía era el papel. En el ámbito de la informática, aparecieron tecnologías para asegurar la identidad del autor y la autenticidad documental, se desarrollaron las firmas electrónicas y digitales.

Sí A y B quieren firmar algo tienen que estar ambos presentes. Sí están a distancia, podrían escribir un contrato, y enviarlo por email, el problema surge de dos formas:

- La legislación aclara que ciertos contratos deberán ser firmados
- Sí uno de ellos niega la autenticidad del contrato no podrían servidor los correos como medio de prueba con lo cual elimina toda posibilidad de hacerlo así

La aparición de las firmas electrónicas o digitales resuelve esto. Hay muchos sistemas, uno es el de **doble clave** y funciona con un usuario con dos claves que tienen una relación matemática entre sí, la **clave privada y la clave pública**, la primera es reservada y la segunda se puede dar a conocer.

https://lh7-us.googleusercontent.com/e7at5pUmAulCNgWbc9S81WKi7UxPah5NVf-mds8Y9j6ZbwBOG9eXZZ40brhIro6qvMt3TSPzEI0YIJTPrFMb6noxzzk36ukf8zzUBS3K0YI6nqyO6yxCbJjR9VKdERdKU63A1SZEcXOSkS8qOT9nRA

Cuando se firma electrónicamente, el usuario le aplica su clave privada y el programa agrega al documento un trozo de texto que lo acompañará como su “firma”. Con ese agregado puede copiarlo o enviarlo de cualquier forma a su destinatario. El receptor, para verificar la autenticidad del documento, debe aplicarse la clave pública. Sí el programa dice que es verdadero el receptor verifica que:

- La identidad del autor, es quien dice ser
- El documento no fue modificado, no hay un solo carácter del documento que haya sido modificado desde que fue firmado.

Así, igualmente, hay problemas. El primero es cual sea el procedimiento para dar a conocer la clave pública y la identidad de la persona a quien pertenece. El segundo, la validez jurídica del documento digital así firmado. El derecho, con esta realidad tecnológica, establece el concepto de firma digital o electrónica, establece requisitos y le da las consecuencias jurídicas correspondientes.

Los sistemas legales son homogéneos y mantienen una diferencia acorde a las distintas realidades socioeconómicas de los países. La implementación de nuevas tecnologías depende del acierto de los gobiernos en conseguir armonización institucional y jurídica normativa.

En Argentina esta la ley N 25.506 de Firma digital que establece:

- Para que exista firma digital se necesita que un elemento de conocimiento exclusivo del firmante sirva a este para estampar la firma en un documento, como una contraseña. Es esencial porque implica el principio de individualidad y soberanía del usuario sobre su firma. Debe existir un procedimiento para verificar esta firma.
- El principio de eficacia jurídica de la firma digital. Distintos países han adoptado estrategias para la implementación de esta. Uno fue implementar por sectores, para darle validez jurídica en un ámbito limitado para luego avanzar en otros sectores. La Argentina por su parte estableció en la ley el principio más general, siempre que se requiera una firma manuscrita en cualquier sector del sistema jurídico o que una firma manuscrita tenga consecuencia, esa firma manuscrita puede ser reemplazada por una digital.

Se plantean excepciones, algunas de ellas por mantener un criterio limitado en cuanto al sentido de la firma digital

- No se puede hacer testamentos con firma digital
- Se prohíbe su uso en actos jurídicos del derecho de familia
- No se permite la aplicación en actos personalísimos
- Cuando existan exigencias que lo impidan, trivial.

Una firma electrónica es igual a la firma digital salvo alguno de sus requisitos. La firma electrónica es lo mismo tecnológicamente que la digital, pero el certificado no está dado por un certificador licenciado, sino que la clave pública es distribuida de otra forma. La mayoría de los países, usando distintos nombres, hacen esta diferenciación.

- La firma digital se presume verdadera, sí es comprobada mediante el certificado es verdadera. Esta presunción, igual, no es absoluta, sí pese a resultar verdadera de acuerdo al certificado, aquel a quien le es atribuida la niega, debe probarlo. Y sí lo prueba, el documento firmado no es verdadero, la firma es falsa pese a resultar auténtica con el certificado.
- La firma electrónica es verdadera hasta que alguien la niegue. Aquel que pretenda hacer valer debe probar su autenticidad

De estos principios podemos decir:

- La firma digital tiene más valor que la firma manuscrita, no el mismo. Sí la firma manuscrita es negada debe probarse con pericias. No se presume verdadera como la digital.
- No existe la propiedad de tener no repudio. Es un error tener no repudio.
- La validez de la firma electrónica es casi la misma que la digital porque en el sistema jurídico hay pocos actos que requieran la firma para cumplir sus consecuencias, sí se pudiese establecer medios de prueba de tal manera que presentado el caso se pueda probar autenticidad, no se necesitaría la firma digital, con la electrónica alcanza

<a id="cic44"></a>

### **La firma digital y la criptografía**

[Volver al indice](#cic-base)

La firma digital es un equivalente funcional de la firma manuscrita. Sirve para que las personas presten su consentimiento respecto a las expresiones en los documentos que se firman. Los procedimientos tecnológicos no son en sí un problema jurídico, sí no, informático. Una tecnología posterior podría cambiarlos a todos y la funcion jurídica se mantendrá idéntica, siempre se asegure la soberanía del usuario y el control de los procedimientos en el ámbito de su responsabilidad.

La criptografía se aplica para asegurar que solo quien cuente con la clave privada pueda firmar. La relación matemática entre la clave pública y privada está protegida, porque sí bien desde la pública se obtiene la privada. El proceso para intercambiar un contrato es:

- A Envía el documento firmado con su clave privada
- B Verifica con la clave pública de A que se obtiene de su certificado otorgado y firmado por un certificador licenciado. sí es verdadero, B comprobó la identidad de A, y su integridad.
- B firma el mismo documento con su clave privada y lo envía. Lo comprueba. Sí da verdadero, ambos tienen un documento digital que tiene validez jurídica, al igual que un documento hecho a mano.

<a id="cic45"></a>

### **Personas en el derecho**

[Volver al indice](#cic-base)

Todos aquellos que puedan tener derechos y obligaciones pertenecerán al mundo jurídico y se llamarán personas. No son solo humanos, sino también las personas jurídicas y todas tienen que tener un patrimonio que con el tiempo va cambiando e incluye el patrimonio moral.
Estas personas establecen vínculos entre sí y con el Estado Nacional que también es una persona, así como las municipalidades, fundaciones, etc..
Los vínculos pueden ser de distinta naturaleza, sí alguien choca con su auto a una persona produciendo lesiones, ahí se estableció un vínculo (obligacional) con la persona que fue dañada.

https://lh7-us.googleusercontent.com/rWj6aM_WjMnjXnDZGEZjfE8S7mWyphiJ_TCED6c-OfR4U4QnI29WMWib4QC54C7mm6y4yIpHqHv-Z39nTyX8gnK4l6Sa0rHEXPVSgKVJvPZ6rd-GarFBgV7mZ4am0atDLXQLmIIrGqNpkAfKoIGOhg

Las personas pueden generar otras personas con lo cual los intervinientes en el juego jurídico crecen, pero también desaparecen, las personas físicas por fallecer y las jurídicas por disolución. El mundo jurídico es muy dinámico en ese sentido, y sí le agregamos que el juego jurídico responde a un conjunto de normas que también cambia porque algunas desaparecen del conjunto mientras son creadas otras que generan nuevas obligaciones y derechos, el sistema se muestra en toda su complejidad.
Sí una persona humana hace un negocio de poco éxito que da deudas, las debe afrontar con todo su patrimonio, que es la garantía general de sus obligaciones. Por ejemplo, sí un grupo de amigos quieren emprender, pero solo arriesgando una parte de su capital, pueden crear una sociedad comercial en la que ellos serían los dueños, pero la persona que se relaciona con otras generando obligaciones no serían ellos, sí no la nueva persona. Las ganancias de la sociedad serían repartidas entre los propietarios, y sí no hay ganancias, o pérdidas, los dueños perderían los aportes que hicieron, pero no responderían con el resto de su patrimonio. Las sociedades son un elemento fundamental en la economía.

<a id="cic46"></a>

### **Elementos de un contrato**

[Volver al indice](#cic-base)

Es un acuerdo entre dos o más personas para crear obligaciones, o para modificarlas, extinguirlas o regularlas. Pueden tener cualquier contenido, siempre y cuando no se contrapongan con las leyes. No es necesario que un contrato sea de una clase determinada, puede tener cualquier obligación para las partes.

Se le dice contrató al documento en donde están expresadas las cláusulas, pero el contrato es un ente ideal, el acuerdo de voluntades y no un objeto material.

Para hacer un contrato hay que establecer estos elementos:

- Identificación de las partes que intervienen, sí se trata de una persona jurídica hay que diferenciarla de la persona que la representa
- Obligaciones de las partes, el contrato se hace para que las partes se obliguen a realizar determinadas cosas. Hay que preparar un listado de estas obligaciones para tenerlas en claro antes de hacer el contrato
- Consecuencias del incumplimiento
- Establecer los tribunales que las partes acuerdan que intervendrán en caso de algo judicial
- Datos objetivos, como el lugar donde se realiza, etc..
- Que las partes tengan en claro que es lo que tienen intención de convenir.


<a id="cic47"></a>

### **Contratos sobre Hardware**

[Volver al indice](#cic-base)

El hardware se compra, así que el contrato es de compraventa, una parte conviene la entrega de una cosa y la otra paga un precio. El Código Civil y comercial de Argentina establece unas normas que son de aplicación supletoria (sí las partes no acordaron sobre ello, son las que regirán)

- El comprador debe pagar el precio en el tiempo convenido
- El comprador debe realizar todo lo necesario para recibir la cosa y colaborar para que el vendedor la entregue
- El comprador debe pagar los gastos para recibirla
- El vendedor debe entregar la factura con identificación de la cosa y de los pagos hechos
- Sí no se estableció lugar de entrega, será el lugar donde la cosa se encuentre al momento de celebrar el contrato
- Estas normas pueden ser modificadas por las partes. Estas son las que quedan por defecto.

<a id="cic48"></a>

### **Contratos sobre Software**

[Volver al indice](#cic-base)

En los contratos de desarrollo de software no sólo es relevante aclarar las funciones que los programas deberán cumplir, sino que se deberá hacer referencia al hardware y las limitaciones para ejecutarlos. La poca claridad de, por ejemplo, plazos de entrega, pruebas, etc.. Son las comunes causas de conflicto entre las partes, a veces en relaciones de buena fe, como causa tienen la mala redacción de los contratos por falta de previsión en cuanto a las obligaciones de las partes.

En el caso de Licencias de Software estándar, se deben establecer los tiempos, las actualizaciones y el límite de licencias, y la cantidad de copias a correrse al mismo tiempo. En el desarrollo de webs deberían contemplarse el problema de las obras intelectuales que podrían crearse para lo cual se deberá referir al sistema de protección de la propiedad intelectual. Deberá recordarse que cuando se hagan tareas en relación de dependencia los derechos de explotación económica quedarán en manos de quien encargó la tarea, salvo que se aclare lo contrario.

<a id="cic49"></a>

### **Los contratos de obra y de servicios**

[Volver al indice](#cic-base)

En los contratos de obra o servicios, una persona de forma independiente se obliga a favor de otra a realizar una obra o proveer un servicio a cambio de una retribución. La diferencia entre ambos es que en el contrato de servicios la persona se obliga a realizar la tarea correctamente, pero independientemente de que se logren los resultados, en el de obra el compromiso es de un resultado.

Contratar un servicio de administración de software implica que la responsabilidad del prestador se regirá por el cumplimiento del modelo de conducta exigible para una tarea de la clase que se realiza. Ciertas consecuencias negativas del desempeño informático no pueden evitarse más allá  de la corrección de las tareas realizadas.

Sí existe relación de dependencia con el prestador del servicio, entonces estaremos frente a un caso contemplado dentro del derecho laboral.

<a id="cic50"></a>

### **El problema de la protección de la información**

[Volver al indice](#cic-base)

Con la generalización de la informática se ha producido un aumento del problema de la protección de la información, especialmente la de los datos personales. Muchos contratos que se hacen son de mantenimiento de bases de datos con información sensible de las personas. La ley de protección de datos personales impone obligaciones a quienes las manejan en cuanto a la corrección de los datos, el derecho de acceso por los interesados, la modificación en caso de datos erróneos, etc..

En la realización de contratos que involucre entregar al contratante bases de datos o acceso a estas es necesario agregar las normas relativas a su protección y manejo de tal manera que se cumplan con las disposiciones legales y también evitar provocar daños con consecuencias de responsabilidad civil.

<a id="cic51"></a>

### **Responsabilidad Civil - El daño y sus categorías**

[Volver al indice](#cic-base)

- **Daño emergente:** El damnificado debe disminuir su patrimonio para reparar cosas, o debe suplantar los servicios que le daban con gastos de transporte, gastos médicos, etc..
- **Lucro cesante:** Un flujo económico que entraba al patrimonio del damnificado se detiene por el daño. No es problema de output del patrimonio, sí no de input
- **Pérdida de chance:** Cuando existe la posibilidad actual y cierta de recibir un beneficio, pero el hecho impidió que el beneficio suceda
- **Daños en los derechos personalísimos, salud psico física, afecciones espirituales, y proyectos de vida**

<a id="cic52"></a>

### **Relación de causalidad con el hecho dañoso**

[Volver al indice](#cic-base)

El daño es producido por un hecho dañoso. Para que haya un daño se deben dar condiciones, de todas ellas, debemos establecer una que nos diga cual vamos a considerar causa del hecho.
A produce B cuando en el orden natural y corriente de las cosas A produce B. La causalidad jurídica se diferencia de la causalidad física. Podemos ver que en el mundo hay daños producidos por causas, pero no sabemos nada respecto a quien o quienes deban pagarlos

<a id="cic53"></a>

### **Significado de los factores de atribución**

[Volver al indice](#cic-base)

Sí hay daño y un hecho ilegal en relación de causalidad, para que haya responsabilidad civil, falta una regla que nos indique quien debe pagar. A este conjunto de reglas se les dice **factor de atribución de la responsabilidad civil**. Sí la regla señala a alguien como responsable, este deberá pagar la indemnización, será un monto a pagar por una o más personas. El objetivo es restaurar patrimonios disminuidos y no beneficiar a los que cometieron actos dañosos

<a id="cic54"></a>

### **Factores de atribución subjetivos**

[Volver al indice](#cic-base)

Son subjetivos porque dependen de la acción de un sujeto y son, el dolo y la culpa.

- En el dolo el sujeto busca intencionalmente producir daño. Sí hay un daño en relación causal con una acción de un sujeto capaz que la realizó con intención de provocar ese daño, el agente debe pagar
- La culpa es el factor de atribución de la responsabilidad que dice que el que obre imprudentemente debe pagar los daños que provoque por esa forma de actuar torpe.

La culpa puede medirse porque las conductas imprudentes tienen distinta gravedad. Para hacerlo usamos una escala del 0 a 100 para clasificar en porcentaje la culpa. El objetivo del sistema no es castigar, sí no reparar, a diferencia del derecho penal.

<a id="cic55"></a>

### **Factores de atribución objetivos**

[Volver al indice](#cic-base)

En este caso no nos interesa la actitud de nadie. Son reglas objetivas que establecen que alguien debe pagar por encontrarse en X situación. El reproche que podemos encontrar en los casos de dolo o de culpa en los factores objetivos no existe.

- Daños producidos por cosas riesgosas. Es la actividad la que provoca el daño. Podemos decir que la misma “se va de las manos” de su propietario, y causa daños por sí misma. La regla dice que el dueño o el guardián son responsables civiles. Deben pagar por los daños. Este sistema de cosas “riesgosas” nació como consecuencia de daños por automóviles, ascensores, etc.. También sucede con los animales, aunque el mismo tenga una buena conducta, puede producir daños.
- Daños producidos por terceros por los que se debe responder. Cuando hay una relación de dependencia y el dependiente produce un daño el principal debe responder civilmente y pagar los daños. Hay casos donde ambos son responsables, pero hay veces que el principal debe pagar igual por la conducta de su dependiente.

Para determinar sí existe responsabilidad civil debemos:

- Verificar que exista un daño
- Establecer que exista una relación causal adecuada entre el hecho y el daño
- Buscar un factor de atribución que nos diga quién debe pagar y porque

Sí aplicamos el sistema visto hasta ahora se puede dar un resultado muy injusto ya que pueden haber casos de gente que recibe daño a propósito para recibir una indemnización, sí analizamos la situación, sí, hay daños, pero para evitar estos casos injustos, se incorporó lo siguiente...

<a id="cic56"></a>

### **Factores de distribución de la responsabilidad civil**

[Volver al indice](#cic-base)

- **Dolo de la victima: Sí la victima lo provoco con intención**
- **Dolo de un tercero: Sí un tercero, por ejemplo, empuja a otro a la calle para que sea atropellado**
- **Culpa de la víctima: Sí la víctima por su torpeza contribuyó al daño**
- **Culpa del tercero: Sí por un tercero se colaboró al daño**
- **Fuerza Mayor: Cuando un daño se produce porque no se puede prever o no se puede evitar.**

En casos de distribución por culpa, la misma puede ser total o parcial. Esto depende de la cantidad de culpa. Se pueden medir las culpas en porcentajes

<a id="cic57"></a>

### **Tipicidad penal informática - El problema de la tipicidad penal**

[Volver al indice](#cic-base)

La ley penal dice que conductas son delitos por el procedimiento llamado **tipificación**, asociar una pena a una conducta que es descripta. Esta característica del derecho penal moderno protege a las personas que con anticipación pueden saber qué conductas son delitos y cuáles no.
Pero todo se sostiene sobre el supuesto de que todas las conductas pueden ser descriptas de una forma tan clara que no haya dudas sobre la inclusión, o no, de una acción, más allá de las interpretaciones judiciales. Hubo veces donde los tribunales no se pusieron de acuerdo con casos determinados o en casos confusos (mal hecho) o “abierto” (no perfectamente determinado, mal hecho), pero más allá de esto, el sistema ha funcionado.
En los casos de tribunales, los abogados y fiscales debaten la prueba de la existencia de los hechos y la subsunción de los hechos al tipo, la descripción puede ser clara, pero el hecho concreto, las particularidades del mismo pueden generar dudas.
Pero todos están de acuerdo en que sí no cae de una forma clara en el tipo penal no puede ser castigado penalmente, aun cuando el hecho sea dañoso o parecido a otro que sí fue penalizado, sí el hecho no encaja en el tipo no puede ser juzgado como delito. Está prohibido hacer razonamientos por analogía.

<a id="cic58"></a>

### **La aparición de la informática y lo que produjo**

[Volver al indice](#cic-base)

El desarrollo del procesamiento automatizado, la representación digital de la realidad y las redes de comunicaciones dieron 2 realidades con relevancia en el mundo penal

- Aparición de nuevos valores a proteger como las redes de comunicación, archivos digitales, programas.. eso exige que aparecieran nuevos tipos. Fue necesario ampliar el universo de las acciones clasificadas como delitos
- La forma distinta de hacer ciertas acciones tradicionales. Al cambiarse la forma de realizar estas en ocasiones provocó que se queden fuera de las descripciones penales aun cuando el sentido de la acción era el mismo. Eso generó dudas y debates respecto a la inclusión o no de algunas conductas en los tipos existentes.

Por ejemplo, existe el delito llamado “Daño”, y según la descripción del código penal Argentino, para que esté el delito, debe haber una “cosa” dañada, un objeto material susceptible. Con la generalización de la informática aparece un problema, modificar una página web ¿se puede considerar un daño también?, existe un principio del derecho llamado **in dubio pro reo** que quiere decir que sí hay duda, el imputado es inocente. La consecuencia de la modificación o destrucción de archivos tiene el mismo significado que la destrucción de objetos materiales, o hasta puede ser más grave, pero por el dicho anterior, no puede considerarse delito sí no está comprendido en la descripción literal de “Daños”.

Esto dio a que varias situaciones quedarán fuera del sistema penal a pesar de merecer una pena. Se entendió que se deben reformar las leyes penales para incorporar nuevos tipos penales y modificar los existentes. Estos delitos informáticos se incorporaron de forma diversa en todos los países. Aún no se hizo un estudio sobre las dificultades que ha tenido la tipificación de los delitos informáticos en las legislaciones, hay complicaciones para tipificar estos delitos.

<a id="cic59"></a>

### **Metodos de analisis de tipo penales**

[Volver al indice](#cic-base)

Por ejemplo, pidámosle a alguien que piense una acción molesta, como hacer sonar una bocina en la calle. Ahora, que intente tipificar esta accion, pero sin verbos, por ejemplo, “Sera reprimido con prision de..”. Todos los intentos fallaron.

El verbo es la expresión gramatical de una acción y el delito es una acción, sin verbo no puede explicarse, el núcleo del tipo penal es el verbo y a él tiene que dirigirse nuestra atención. Además del verbo pueden existir otros elementos sobre los que debemos aclarar el significado porque, sin ellos, no habrá tipo, porque sí el tipo tiene muchos elementos, todos deben cumplirse para que se cumpla el acuerdo entre acción y tipo.

<a id="cic60"></a>

### **El problema de la tipificación de los delitos informáticos**

[Volver al indice](#cic-base)

Al tipificar, se tiene en cuenta una acción, se la imagina y a partir de esto se redacta la ley penal. Se estima su gravedad y se decide la pena. Una buena tipificación tiene como sustento un conocimiento de los casos que se incluyen. Pueden producirse dos tipos de errores llamados **Errores de tipificación Clase A (Error-A) y Clase B (Error-B).**

El **Error-A** es dejar afuera del tipo acciones que son parecidas a las que quedaron adentro y que el juicio de valor dice que deberían incluirse. Es un error por defecto. El dictar una ley lleva mucho tiempo, entonces cometer este error A es de un alto costo social e institucional.

El **Error-B** es cuando hay una redacción incorrecta del tipo, y quedaron incluidas cosas que no era la idea que estuvieran ahí, esto es más grave y tiene otro costo

| **Delito**                                                                                  | **Descripción**                                                                                                                                                      |
|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Violación de correo electrónico** (art. 153 del C.P., prisión de 15 días a 6 meses)       | - Abriere o accediera: comunicación electrónica.  <br> - Apoderare: comunicación electrónica. <br> - Suprimiere o desviare: comunicación electrónica. <br> - Interceptare o captare: comunicación electrónica o telecomunicaciones. |
| **Acceso indebido a un sistema informático** (art. 153 bis del C.P., prisión de 15 días a 6 meses) | - Accediera: sistema informático de acceso restringido.                                                                                                             |
| **Publicación de comunicación electrónica** (art. 155 del C.P., multa)                     | - Hiciere publicar: comunicación electrónica no destinada a la publicidad.                                                                                         |
| **Acceso a bancos de datos personales** (art. 157 bis del C.P., prisión de 1 mes a 2 años) | - Accediera: banco de datos personales. <br> - Proporcionare o revelare: información registrada en un registro o banco de datos personales sobre los que debiera guardar secreto. <br> - Insertar o hiciere insertar: datos en un archivo de datos personales. |
| **Fraude** (art. 172/3 del C.P., prisión de 1 mes a 6 años)                                | - Defraudare: mediante cualquier técnica de manipulación informática.                                                                                              |
| **Daños Informáticos** (art. 183/4 del C.P., prisión de 15 días a 1 año)                   | - Alterare, destruyere, inutilizar: datos, documentos, programas o sistemas informáticos. <br> - Vendiere, distribuyere, hiciere circular o introdujera en un sistema informático programas destinados a causar daños. |
| **Interrupción de comunicaciones** (art. 197 del C.P., prisión de 6 meses a 2 años)        | - Interrumpiera o entorpeciera la comunicación telegráfica, telefónica o de otra naturaleza (incluye todas las comunicaciones informáticas). <br> - Resistieren violentamente: el restablecimiento de una comunicación interrumpida. |

<a id="cic61"></a>

### **Normas de SGSI**

[Volver al indice](#cic-base)

Un sistema de gestión de seguridad de la información (SGSI) consiste en el conjunto de políticas, procedimientos y directrices junto a los recursos y actividades asociadas que son administradas colectivamente por una organización, en la búsqueda de proteger sus activos de información esenciales

- **ISO-IEC 27001**: se enfoca al proceso y modelo PDCA de mejora continua.
- **ITIL**: se enfoca en alinear la seguridad de IT con la organización a finde efectuar una gestión eficaz en todas las actividades.
- **COBIT**: se enfoca en la tecnología de la información, gestión de activos y controles



<a id="cic62"></a>

### **ISO/IEC 27001**

[Volver al indice](#cic-base)

La norma ISO 27001 es una solución de mejora continua en base a la cual puede desarrollarse un sistema de gestión de seguridad de la información (SGSI) que permita evaluar todo tipo de riesgos o amenazas susceptibles de poner en peligro la información de una organización tanto propia como datos de terceros. Por otro lado, también permite establecer los controles y estrategias más adecuadas para eliminar o minimizar dichos peligros

**Enfoque**

La norma 27001 es un sistema basado en el ciclo de mejora continua o de deming. Dicho ciclo consiste, en Planificar-Hacer-Verificar-Actuar, por lo que se le conoce también como ciclo PDCA (Plan-Do-Check-Act)

1. **Análisis y evaluación de riesgos**

Identificar todos aquellos activos de información que tienen algún valor para la organización. Asociar las amenazas relevantes con los activos identificados. Determinar las vulnerabilidades que puedan ser aprovechadas por dichas amenazas. Identificar el impacto que podría suponer una pérdida de confidencialidad, integridad y disponibilidad para cada activo

2. **Implementación de controles**

La norma ISO 27001 establece 113 puntos de control. Los mismos se encuentran divididos por grandes objetivos:

- Políticas de seguridad de la información.
- Controles operacionales.

Cada organización puede añadir más puntos de control si lo considera conveniente, así como personalizarlos para adaptarlos a su propio plan de control operacional, pero siempre deben estar alineados a lo que pide la norma

3. **Definición de un plan de tratamiento de los riesgos o esquema de mejora**

Una vez realizado el análisis, se debe definir un plan de tratamiento o esquema de mejora en el que se tengan en cuenta las distintas consecuencias potenciales de esos riesgos, estableciendo una criticidad para cada uno de ellos y así poder evaluar con objetividad las diferentes amenazas. Formas de afrontar el riesgo:

- Eliminar el riesgo (hacer tender la posibilidad de ocurrencia a cero mediante la utilización de todos los recursos posibles).
- Mitigar el riesgo (implantar medidas preventivas o correctivas con el fin de reducir la posibilidad de ocurrencia).
- Trasladar el riesgo (contratar algún tipo de seguro que compense las consecuencias económicas de una pérdida o deterioro de la información)

4. **Alcance de la gestión**

En la planeación para la implementación de un SGSI es muy importante definir su alcance. El mismo dependerá del tamaño de la organización, haciendo uso de las siguientes variables:

- Número de empleados y clientes.
- Volumen de información, activos físicos y lógicos.
- Número de sedes u oficinas

5. **Contexto de organización**

El análisis de contexto de la organización es fundamental para el SGSI, ya que nos permite determinar los problemas internos y externos de la organización, así como sus debilidades, amenazas, fortalezas y oportunidades (matriz FODA) que nos puedan afectar

6. **Partes interesadas**

Se debe comprender las necesidades y expectativas de las partes interesadas que podrían ser:

- Proveedores de servicios de información y de equipamientos de Tecnologías de la Información (TICs).
- Clientes, poniendo especial cuidado en la gestión de datos de protección personal.
- Fuerzas de seguridad del Estado y autoridades jurídicas para tratar los aspectos legales.
- La sociedad en general

7. **Fijación y medición de objetivos**

Es necesario fijar los objetivos para la gestión de riegos, los cuales deben poder ser medibles, aunque no es necesario que sean cuantificables. Estos objetivos deben ser eficientemente comunicados al conjunto de los empleados de la empresa, puesto que todos deben ser conscientes de que participan en un objetivo común y que un descuido o una mala actitud pueden acarrear consecuencias muy negativas

8. **Proceso documental**

Esta cuestión es fundamental para la obtención de la certificación. La documentación puede ser presentada en diversos formatos: documentos en papel, archivos de texto, hojas de cálculo, archivos de vídeo o audio, etc. La organización debe gestionar tanto los documentos internos (políticas diversas, procedimientos, documentación del proyecto, etc.), como los documentos externos(correspondencia, remitos, documentación recibida con equipamiento, etc.)

9. **Auditorías internas y externas**

Para garantizar el correcto funcionamiento y mantenimiento de un SGSI, se hace necesario llevar a cabo planes de auditoría internas como externas de forma periódica

La norma define dos grandes tipos de auditorías:

- **Gestión**: donde se supervisa el liderazgo, el contexto, etc.
- **Controles**: en este caso se auditan los 113 controles y es de forma periódica

**Revisión por parte de la Dirección**

Es fundamental realizar revisiones periódicas del SGSI por parte de la alta dirección, con el objetivo de comprobar el buen funcionamiento del sistema, si se están cumpliendo los objetivos y también si se está produciendo un retorno de la inversión (ROI). La alta dirección de la organización es la máxima responsable de que el área auditada lleve acabo las acciones necesarias para eliminar las no conformidades que se hayan detectado durante la auditoría interna y externa

<a id="cic63"></a>

### **Responsabilidad de programadores, administradores de redes**

[Volver al indice](#cic-base)

Estos roles son profesionales que pueden ser sujetos de la responsabilidad civil por el factor culpa. Sí en su trabajo no cumplen con el modelo exigible que puede establecerse a partir de las normas de la ciencia y el arte de la programación y, como consecuencia de su mala labor, se producen daños, deberán indemnizarlos.

Para eximirse, deberá demostrar que su labor sí correspondió con el modelo. Tendrían que, mientras hacen sus tareas, analizar de qué manera podrían probar la corrección de su conducta profesional.

Cuando en el contrato que no une con un cliente se establece el compromiso respecto un resultado determinado y no una labor, su responsabilidad será objetiva, sólo se eximirá sí puede demostrar la intervención de un tercero, de la víctima o que se encuadre en el marco de fuerza mayor.

Los gerentes no son principales en el sentido de factor de atribución respecto a sus subordinados. Es necesario tener en claro que la palabra dependiente en sentido jurídico no es la misma que en sentido administrativo. Un dependiente administrativo no es un dependiente en el sentido del factor de atribución. El análisis de la responsabilidad civil debe ser un elemento más en el diseño de sistemas y en el diseño de las actividades profesionales

<a id="cic64"></a>

### **El problema del daño causado por un tercero por injurias realizadas en un sitio web**

[Volver al indice](#cic-base)

Pongámosle el ejemplo de que alguien viene y comenta en una página de negocios que alguien de un negocio es un estafador, y que gracias a este comentario, a este negocio le va mal, además los pobladores de donde es el dueño de este negocio se asombran y algunos sospechan de ellos (Damnificados).

Intervienen 3 personajes, **dueño del sitio, tercero del comentario no identificado y los damnificados.** Queremos saber sí los damnificados pueden cobrar una indemnización.

- Existe daño. Los damnificados pierden oportunidad de negocio, también sufrieron daño moral y personal
- Existe relación causal entre el daño y la publicación. En el orden natural de las cosas, cuando se realiza una publicación de este estilo la gente pierde oportunidades
- La acción es ilegal, no se hace en defensa propia o de un tercero por alguna amenaza
- Factor de atribución: dolo. Este tercero no identificado hizo el daño queriendo hacerlo

Conclusión: Este tercero debe pagar, el tema es que como no se sabe quien es, no se le puede cobrar, así que los damnificados buscan otra opción.

- El daño y la relación de causalidad ya quedaron establecidas.
- Factor de atribución: culpa. Del dueño, por no haber tomado los recaudos para que el daño no se produzca. El dueño debería haber revisado los mensajes antes de que se publicaran. No hacerlo provocó el daño y es quien debe pagar.

Respuesta del dueño: se exige una conducta imposible. Nadie puede exigir conductas imposibles. Hay sistemas moderadores pero son fáciles de traspasar. Los sistemas que se crearon en internet son incontrolables por lo que no puede aplicarse el factor culpa porque el modelo a seguir no puede ser realizar una conducta imposible.

- Los damnificados intentan aplicar el factor actividad riesgosa
- Para rechazar el factor culpa, el dueño efectuó todos los argumentos para fundamentar el factor actividad riesgosa, la actividad riesgosa es aquella que es incontrolable.
- No se reprocha al dueño haber hecho el sistema, sí no que por aplicación del favor atribución objetivo de actividad riesgosa debe pagar

El dueño pretende defenderse diciendo que existe un factor de distribución de la responsabilidad, el tercero no identificado. El llamado tercero no identificado es un dependiente del dueño, y para determinar sí hay dependencia, debemos comprobar que hay una relación de interés económica entre el dueño y el dependiente. Al dueño del sitio le interesa que la gente escriba comentarios porque de esa forma la página se hace más interesante. Además, quienes ingresan a la página tienen indicaciones de cómo registrarse y de cómo escribir, en consecuencia, el dueño del sitio debe pagar la indemnización por ser el principal respecto al supuesto tercero.

Además se debe probar que ese tercero exista. En conclusión, este caso tiene muchas consecuencias y todavía no se encuentra 100% resultó en muchos países, sí lo generalizamos, llegaríamos a la conclusión de que casi todas las publicaciones serán civilmente responsables por los comentarios en sus páginas lo que llevaría a la eliminación de la posibilidad de su misma existencia.

Parece un argumento contrario el de la existencia de muchos sitios en donde leemos comentarios malos. Un contraargumento podría ser que simplemente esta situación no llegó al ámbito judicial.

Por otra parte, sí se resolviera en forma contraria existe un ámbito (el de los comentarios) en el cual se podrían realizar injurias gratuitamente y sin consecuencias civiles lo que daría la falta de funcionamiento del sistema de reparaciones.

Esta situación anómala es una de las muchas a las que se ha llegado como consecuencia del uso de internet y que aún no han tenido una respuesta.

**El problema de las pizzas de autor ([www.pizzacomoarte.com.ar](http://www.pizzacomoarte.com.ar/))**

Hacemos la página web pizza como arte para un comercio. Leyendo los libros, aprendimos que hay 3 tipos de funciones para las páginas en cuanto a las actividades comerciales

- Las que informan sobre los productos, precios, etc..
- La que permite realizar la operación de compra, y el producto físico debe ser enviado de alguna manera, y además muestran la información
- Las páginas sobre las que se puede realizar todas las operaciones sin intervenir objetos físicos

La página que se hará será la del segundo tipo, donde se podrá ver la información de los productos y venderlos para que luego sean enviados al domicilio del comprador. Además, desarrollamos un programa que permite diseñar pizzas. Este emprendimiento tuvo tanto éxito que se cerró el local y se empezó a recorrer todo Argentina. Del precio cobrado se le enviará a fin de mes el 70% a la pizzeria.

Un dia se preparaba una fiesta de egresados, se hizo un encargo y él mismo cayó en una pizzería que tenía problema con roedores, el mismo dia que debían hacerse las pizzas, el cocinero pasó antes de ir a su trabajo por un comercio donde compró un raticida, y terminó poniéndolo como sí fuera sal en las pizzas. Esto dio una intoxicación de 300 personas.

- **¿Existe daño?** Sí, daño emergente y daño personal. Las indemnizaciones serán altas.
- **¿Hay relación causal?** Sí, en el orden natural de las cosas, cuando se pone veneno en las pizzas, se produce un tipo de daño.
- **¿La contaminación fue ilícita?** Sí, no fue un acto defensivo ni del ejercicio regular de un derecho. Es ilegal dañar a otro, a menos que haya una adecuada justificación.
- **¿Hay factor subjetivo de dolor?** No, nadie quiso el resultado

**¿Hay algún factor subjetivo culpable?**

Sí, el cocinero actuó con culpa por no haber seguido la conducta que se le puede exigir a un cocinero. Su acción fue torpe. Cumplido el factor de atribución, el cocinero debe pagar, pero su patrimonio no va a alcanzar para pagar todo.

Encontrar a un solo responsable no termina el problema, ya que puede haber más de uno.

**Existe factor de atribución objetivo de riesgo creado?**

No, el daño se produce por un hecho humano, no por la intervención de un hecho o una cosa que haya descontrolado todo.

**Existe factor de atribución de dependencia?** Para eso tiene que darse un principal y un dependiente que genere el daño. El daño es generado por el cocinero que es dependiente de la pizzería que cometió el hecho. Esta última también es responsable por el daño en su carácter de principal.

**¿Los dueños del sitio son responsables?** Sí, porque también son los platos principales del cocinero. El concepto de principal es amplio y abarca no solo a los contratantes laborales de alguien, sí no a todos para los cuales ese alguien hace un trabajo beneficiando los económicamente.

Ahora que el sitio está quebrado, resulta imposible evitar los daños que este hecho ocasionó al resto de pizzerías asociadas. Esto es culpa del **factor dependencia.**

Podríamos colocar un cartel que dijera “Usted ha diseñado su pizza y esta será preparada por X pizzería, ubicada en y con este teléfono, y por su cuenta nosotros facilitamos la operación”, también se agregara una cláusula al contrato que se haga a futuro, así, no habrá relación de dependencia ni responsabilidad civil. Nuestro trabajo está en el diseño de la pizza y no en su preparación.

<a id="cic65"></a>

### **Beneficios para una organización de implementar ISO 27001**

[Volver al indice](#cic-base)

Los beneficios que trae a un organización la implementación de la norma ISO 27001 son los siguientes:

- **Incremento de la confianza**. La confiabilidad de la organización aumenta en los clientes, proveedores y socios, dado que certificar la norma demuestra el compromiso de la misma en materia de seguridad de la información.
- **Chequeos periódicos**. Se realizan revisiones periódicas a fin de verificar el cumplimiento de la norma y de sus controles internos.
- **Reducción de riesgos**. Las posibilidades de perder información bajan notablemente, dado que la norma contempla una gestión de riesgo
- **Gestión de la información.** La norma permite la clasificación de los activos de información, pudiendo conocer la importancia de los mismos y protegerlos de acuerdo a su criticidad.
- **Capacitación constante.** Exige una capacitación continua, lo que genera un fuerte compromiso interno para su cumplimiento
- **Identificación de los riesgos**. Permite identificar los riesgos en la seguridad informática dela organización y establecer controles de gestión, control de riesgos y sus planes de mitigación.
- **Clasificación de los riesgos.** Permite clasificar los riesgos en función de su gravedad y delas posibilidades de que se materialicen.
- **Unificación de controles**. Permite la unificación de criterios y controles en toda la organización
- **Cumplimiento de las leyes**. Permite el cumplimiento de los reglamentos y leyes vigentes en información personal y propiedad intelectual, evitando posibles sanciones y multas.
- **Reducción de costos**. Permite generar un ROI en la organización al minimizar el impacto ocasionado por la materialización de posibles amenazas.
- **Correcto acceso a la información**. Permite asegurar el correcto funcionamiento de las plataformas de acceso a la información.
- **Mejora de la competitividad**. Permite mejorar la competitividad de la organización y su imagen institucional a nivel nacional e internacional

