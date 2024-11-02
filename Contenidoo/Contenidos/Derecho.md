
### 🤍 **Firma electrónica y firma digital**

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

### 🤍 **Sistema institucional de la firma digital**

Con un sistema de doble clave, el más común actualmente, se requiere que la clave pública se dé a conocer ligándome a una persona. Esta clave permitirá verificar la validez de los documentos suscritos por el usuario identificado con ese “certificado digital”. La cuestión es determinar el procedimiento mediante el cual se dará a conocer ese certificado. Muchas alternativas son posibles, pero en Argentina se resolvió que eso se hará a través de empresas que deberán obtener de la autoridad de aplicación una licencia de certificador. El certificado del certificador será dado por la misma autoridad de aplicación.

---

# **Firma digital y firma electrónica**

Una firma electrónica es igual a la firma digital salvo alguno de sus requisitos. La firma electrónica es lo mismo tecnológicamente que la digital, pero el certificado no está dado por un certificador licenciado, sino que la clave pública es distribuida de otra forma. La mayoría de los países, usando distintos nombres, hacen esta diferenciación.

- La firma digital se presume verdadera, sí es comprobada mediante el certificado es verdadera. Esta presunción, igual, no es absoluta, sí pese a resultar verdadera de acuerdo al certificado, aquel a quien le es atribuida la niega, debe probarlo. Y sí lo prueba, el documento firmado no es verdadero, la firma es falsa pese a resultar auténtica con el certificado.
- La firma electrónica es verdadera hasta que alguien la niegue. Aquel que pretenda hacer valer debe probar su autenticidad

De estos principios podemos decir:

- La firma digital tiene más valor que la firma manuscrita, no el mismo. Sí la firma manuscrita es negada debe probarse con pericias. No se presume verdadera como la digital.
- No existe la propiedad de tener no repudio. Es un error tener no repudio.
- La validez de la firma electrónica es casi la misma que la digital porque en el sistema jurídico hay pocos actos que requieran la firma para cumplir sus consecuencias, sí se pudiese establecer medios de prueba de tal manera que presentado el caso se pueda probar autenticidad, no se necesitaría la firma digital, con la electrónica alcanza

### 🤍**La firma digital y la criptografía**

****La firma digital es un equivalente funcional de la firma manuscrita. Sirve para que las personas presten su consentimiento respecto a las expresiones en los documentos que se firman. Los procedimientos tecnológicos no son en sí un problema jurídico, sí no, informático. Una tecnología posterior podría cambiarlos a todos y la funcion jurídica se mantendrá idéntica, siempre se asegure la soberanía del usuario y el control de los procedimientos en el ámbito de su responsabilidad.

La criptografía se aplica para asegurar que solo quien cuente con la clave privada pueda firmar. La relación matemática entre la clave pública y privada está protegida, porque sí bien desde la pública se obtiene la privada. El proceso para intercambiar un contrato es:

- A Envía el documento firmado con su clave privada
- B Verifica con la clave pública de A que se obtiene de su certificado otorgado y firmado por un certificador licenciado. sí es verdadero, B comprobó la identidad de A, y su integridad.
- B firma el mismo documento con su clave privada y lo envía. Lo comprueba. Sí da verdadero, ambos tienen un documento digital que tiene validez jurídica, al igual que un documento hecho a mano.

---

# **Contratos y sociedades comerciales**

### 🤍**Personas en el derecho**

Todos aquellos que puedan tener derechos y obligaciones pertenecerán al mundo jurídico y se llamarán personas. No son solo humanos, sino también las personas jurídicas y todas tienen que tener un patrimonio que con el tiempo va cambiando e incluye el patrimonio moral.

Estas personas establecen vínculos entre sí y con el Estado Nacional que también es una persona, así como las municipalidades, fundaciones, etc..

Los vínculos pueden ser de distinta naturaleza, sí alguien choca con su auto a una persona produciendo lesiones, ahí se estableció un vínculo (obligacional) con la persona que fue dañada.

https://lh7-us.googleusercontent.com/rWj6aM_WjMnjXnDZGEZjfE8S7mWyphiJ_TCED6c-OfR4U4QnI29WMWib4QC54C7mm6y4yIpHqHv-Z39nTyX8gnK4l6Sa0rHEXPVSgKVJvPZ6rd-GarFBgV7mZ4am0atDLXQLmIIrGqNpkAfKoIGOhg

Las personas pueden generar otras personas con lo cual los intervinientes en el juego jurídico crecen, pero también desaparecen, las personas físicas por fallecer y las jurídicas por disolución. El mundo jurídico es muy dinámico en ese sentido, y sí le agregamos que el juego jurídico responde a un conjunto de normas que también cambia porque algunas desaparecen del conjunto mientras son creadas otras que generan nuevas obligaciones y derechos, el sistema se muestra en toda su complejidad.

Sí una persona humana hace un negocio de poco éxito que da deudas, las debe afrontar con todo su patrimonio, que es la garantía general de sus obligaciones. Por ejemplo, sí un grupo de amigos quieren emprender, pero solo arriesgando una parte de su capital, pueden crear una sociedad comercial en la que ellos serían los dueños, pero la persona que se relaciona con otras generando obligaciones no serían ellos, sí no la nueva persona. Las ganancias de la sociedad serían repartidas entre los propietarios, y sí no hay ganancias, o pérdidas, los dueños perderían los aportes que hicieron, pero no responderían con el resto de su patrimonio. Las sociedades son un elemento fundamental en la economía.

### 🤍**Contratos**

Es un acuerdo entre dos o más personas para crear obligaciones, o para modificarlas, extinguirlas o regularlas. Pueden tener cualquier contenido, siempre y cuando no se contrapongan con las leyes. No es necesario que un contrato sea de una clase determinada, puede tener cualquier obligación para las partes.

Se le dice contrató al documento en donde están expresadas las cláusulas, pero el contrato es un ente ideal, el acuerdo de voluntades y no un objeto material.

### 🤍**Elementos de un contrato**

****Para hacer un contrato hay que establecer estos elementos:

- Identificación de las partes que intervienen, sí se trata de una persona jurídica hay que diferenciarla de la persona que la representa
- Obligaciones de las partes, el contrato se hace para que las partes se obliguen a realizar determinadas cosas. Hay que preparar un listado de estas obligaciones para tenerlas en claro antes de hacer el contrato
- Consecuencias del incumplimiento
- Establecer los tribunales que las partes acuerdan que intervendrán en caso de algo judicial
- Datos objetivos, como el lugar donde se realiza, etc..
- Que las partes tengan en claro que es lo que tienen intención de convenir.

### 🤍**Contratos sobre Hardware**

****El hardware se compra, así que el contrato es de compraventa, una parte conviene la entrega de una cosa y la otra paga un precio. El Código Civil y comercial de Argentina establece unas normas que son de aplicación supletoria (sí las partes no acordaron sobre ello, son las que regirán)

- El comprador debe pagar el precio en el tiempo convenido
- El comprador debe realizar todo lo necesario para recibir la cosa y colaborar para que el vendedor la entregue
- El comprador debe pagar los gastos para recibirla
- El vendedor debe entregar la factura con identificación de la cosa y de los pagos hechos
- Sí no se estableció lugar de entrega, será el lugar donde la cosa se encuentre al momento de celebrar el contrato
- Estas normas pueden ser modificadas por las partes. Estas son las que quedan por defecto.

### 🤍**Contratos sobre Software**

En los contratos de desarrollo de software no sólo es relevante aclarar las funciones que los programas deberán cumplir, sino que se deberá hacer referencia al hardware y las limitaciones para ejecutarlos. La poca claridad de, por ejemplo, plazos de entrega, pruebas, etc.. Son las comunes causas de conflicto entre las partes, a veces en relaciones de buena fe, como causa tienen la mala redacción de los contratos por falta de previsión en cuanto a las obligaciones de las partes.

En el caso de Licencias de Software estándar, se deben establecer los tiempos, las actualizaciones y el límite de licencias, y la cantidad de copias a correrse al mismo tiempo. En el desarrollo de webs deberían contemplarse el problema de las obras intelectuales que podrían crearse para lo cual se deberá referir al sistema de protección de la propiedad intelectual. Deberá recordarse que cuando se hagan tareas en relación de dependencia los derechos de explotación económica quedarán en manos de quien encargó la tarea, salvo que se aclare lo contrario.

### 🤍**Los contratos de obra y de servicios**

En los contratos de obra o servicios, una persona de forma independiente se obliga a favor de otra a realizar una obra o proveer un servicio a cambio de una retribución. La diferencia entre ambos es que en el contrato de servicios la persona se obliga a realizar la tarea correctamente, pero independientemente de que se logren los resultados, en el de obra el compromiso es de un resultado.

Contratar un servicio de administración de software implica que la responsabilidad del prestador se regirá por el cumplimiento del modelo de conducta exigible para una tarea de la clase que se realiza. Ciertas consecuencias negativas del desempeño informático no pueden evitarse más allá  de la corrección de las tareas realizadas.

Sí existe relación de dependencia con el prestador del servicio, entonces estaremos frente a un caso contemplado dentro del derecho laboral.

### 🤍**El problema de la protección de la información**

Con la generalización de la informática se ha producido un aumento del problema de la protección de la información, especialmente la de los datos personales. Muchos contratos que se hacen son de mantenimiento de bases de datos con información sensible de las personas. La ley de protección de datos personales impone obligaciones a quienes las manejan en cuanto a la corrección de los datos, el derecho de acceso por los interesados, la modificación en caso de datos erróneos, etc..

En la realización de contratos que involucre entregar al contratante bases de datos o acceso a estas es necesario agregar las normas relativas a su protección y manejo de tal manera que se cumplan con las disposiciones legales y también evitar provocar daños con consecuencias de responsabilidad civil.

### 🤍**Redacción de contratos**

Los contratos son la herramienta básica para el desarrollo comercial, sin estos no podría existir la actividad económica. Los contratos generan muchos conflictos entre partes, esto se produce no por el incumplimiento de las obligaciones, sí no en la distinta interpretación de cuales sean y las modalidades del cumplimiento, y ello se debe a la mala redacción de los contratos, cuya parte central es la descripción detallada y completa de las obligaciones de las partes.

---

# Responsabilidad Civil

### ◻️ **El daño y sus categorías**

- **Daño emergente:** El damnificado debe disminuir su patrimonio para reparar cosas, o debe suplantar los servicios que le daban con gastos de transporte, gastos médicos, etc..
- **Lucro cesante:** Un flujo económico que entraba al patrimonio del damnificado se detiene por el daño. No es problema de output del patrimonio, sí no de input
- **Pérdida de chance:** Cuando existe la posibilidad actual y cierta de recibir un beneficio, pero el hecho impidió que el beneficio suceda
- **Daños en los derechos personalísimos, salud psico física, afecciones espirituales, y proyectos de vida**

### ◻️ **Relación de causalidad con el hecho dañoso**

El daño es producido por un hecho dañoso. Para que haya un daño se deben dar condiciones, de todas ellas, debemos establecer una que nos diga cual vamos a considerar causa del hecho.

A produce B cuando en el orden natural y corriente de las cosas A produce B. La causalidad jurídica se diferencia de la causalidad física. Podemos ver que en el mundo hay daños producidos por causas, pero no sabemos nada respecto a quien o quienes deban pagarlos

### ◻️ **Significado de los factores de atribución**

Sí hay daño y un hecho ilegal en relación de causalidad, para que haya responsabilidad civil, falta una regla que nos indique quien debe pagar. A este conjunto de reglas se les dice **factor de atribución de la responsabilidad civil**. Sí la regla señala a alguien como responsable, este deberá pagar la indemnización, será un monto a pagar por una o más personas. El objetivo es restaurar patrimonios disminuidos y no beneficiar a los que cometieron actos dañosos

### ◻️ **Factores de atribución subjetivos**

Son subjetivos porque dependen de la acción de un sujeto y son, el dolo y la culpa.

- En el dolo el sujeto busca intencionalmente producir daño. Sí hay un daño en relación causal con una acción de un sujeto capaz que la realizó con intención de provocar ese daño, el agente debe pagar
- La culpa es el factor de atribución de la responsabilidad que dice que el que obre imprudentemente debe pagar los daños que provoque por esa forma de actuar torpe.

La culpa puede medirse porque las conductas imprudentes tienen distinta gravedad. Para hacerlo usamos una escala del 0 a 100 para clasificar en porcentaje la culpa. El objetivo del sistema no es castigar, sí no reparar, a diferencia del derecho penal.

### ◻️ **Factores de atribución objetivos**

En este caso no nos interesa la actitud de nadie. Son reglas objetivas que establecen que alguien debe pagar por encontrarse en X situación. El reproche que podemos encontrar en los casos de dolo o de culpa en los factores objetivos no existe.

- Daños producidos por cosas riesgosas. Es la actividad la que provoca el daño. Podemos decir que la misma “se va de las manos” de su propietario, y causa daños por sí misma. La regla dice que el dueño o el guardián son responsables civiles. Deben pagar por los daños. Este sistema de cosas “riesgosas” nació como consecuencia de daños por automóviles, ascensores, etc.. También sucede con los animales, aunque el mismo tenga una buena conducta, puede producir daños.
    
- Daños producidos por terceros por los que se debe responder. Cuando hay una relación de dependencia y el dependiente produce un daño el principal debe responder civilmente y pagar los daños. Hay casos donde ambos son responsables, pero hay veces que el principal debe pagar igual por la conducta de su dependiente.

Para determinar sí existe responsabilidad civil debemos:

- Verificar que exista un daño
- Establecer que exista una relación causal adecuada entre el hecho y el daño
- Buscar un factor de atribución que nos diga quién debe pagar y porque

Sí aplicamos el sistema visto hasta ahora se puede dar un resultado muy injusto ya que pueden haber casos de gente que recibe daño a propósito para recibir una indemnización, sí analizamos la situación, sí, hay daños, pero para evitar estos casos injustos, se incorporó lo siguiente...

### ◻️ **Factores de distribución de la responsabilidad civil**

- **Dolo de la victima: Sí la victima lo provoco con intención**
- **Dolo de un tercero: Sí un tercero, por ejemplo, empuja a otro a la calle para que sea atropellado**
- **Culpa de la víctima: Sí la víctima por su torpeza contribuyó al daño**
- **Culpa del tercero: Sí por un tercero se colaboró al daño**
- **Fuerza Mayor: Cuando un daño se produce porque no se puede prever o no se puede evitar.**

En casos de distribución por culpa, la misma puede ser total o parcial. Esto depende de la cantidad de culpa. Se pueden medir las culpas en porcentajes

### ◻️ **La necesaria ilegalidad**

El hecho que produce el daño debe ser ilegal, sí el hecho se produce en legítima defensa, el daño no es indemnizable

---

# Tipicidad penal informática

### 🟢 **El problema de la tipicidad penal**

La ley penal dice que conductas son delitos por el procedimiento llamado **tipificación**, asociar una pena a una conducta que es descripta. Esta característica del derecho penal moderno protege a las personas que con anticipación pueden saber qué conductas son delitos y cuáles no.

Pero todo se sostiene sobre el supuesto de que todas las conductas pueden ser descriptas de una forma tan clara que no haya dudas sobre la inclusión, o no, de una acción, más allá de las interpretaciones judiciales. Hubo veces donde los tribunales no se pusieron de acuerdo con casos determinados o en casos confusos (mal hecho) o “abierto” (no perfectamente determinado, mal hecho), pero más allá de esto, el sistema ha funcionado.

En los casos de tribunales, los abogados y fiscales debaten la prueba de la existencia de los hechos y la subsunción de los hechos al tipo, la descripción puede ser clara, pero el hecho concreto, las particularidades del mismo pueden generar dudas.

Pero todos están de acuerdo en que sí no cae de una forma clara en el tipo penal no puede ser castigado penalmente, aun cuando el hecho sea dañoso o parecido a otro que sí fue penalizado, sí el hecho no encaja en el tipo no puede ser juzgado como delito. Está prohibido hacer razonamientos por analogía.

### 🟢 **La aparición de la informática y lo que produjo**

El desarrollo del procesamiento automatizado, la representación digital de la realidad y las redes de comunicaciones dieron 2 realidades con relevancia en el mundo penal

- Aparición de nuevos valores a proteger como las redes de comunicación, archivos digitales, programas.. eso exige que aparecieran nuevos tipos. Fue necesario ampliar el universo de las acciones clasificadas como delitos
- La forma distinta de hacer ciertas acciones tradicionales. Al cambiarse la forma de realizar estas en ocasiones provocó que se queden fuera de las descripciones penales aun cuando el sentido de la acción era el mismo. Eso generó dudas y debates respecto a la inclusión o no de algunas conductas en los tipos existentes.

Por ejemplo, existe el delito llamado “Daño”, y según la descripción del código penal Argentino, para que esté el delito, debe haber una “cosa” dañada, un objeto material susceptible. Con la generalización de la informática aparece un problema, modificar una página web ¿se puede considerar un daño también?, existe un principio del derecho llamado **in dubio pro reo** que quiere decir que sí hay duda, el imputado es inocente. La consecuencia de la modificación o destrucción de archivos tiene el mismo significado que la destrucción de objetos materiales, o hasta puede ser más grave, pero por el dicho anterior, no puede considerarse delito sí no está comprendido en la descripción literal de “Daños”.

Esto dio a que varias situaciones quedarán fuera del sistema penal a pesar de merecer una pena. Se entendió que se deben reformar las leyes penales para incorporar nuevos tipos penales y modificar los existentes. Estos delitos informáticos se incorporaron de forma diversa en todos los países. Aún no se hizo un estudio sobre las dificultades que ha tenido la tipificación de los delitos informáticos en las legislaciones, hay complicaciones para tipificar estos delitos.

### 🟢 **Metodos de analisis de tipo penales**

Por ejemplo, pidámosle a alguien que piense una acción molesta, como hacer sonar una bocina en la calle. Ahora, que intente tipificar esta accion, pero sin verbos, por ejemplo, “Sera reprimido con prision de..”. Todos los intentos fallaron.

El verbo es la expresión gramatical de una acción y el delito es una acción, sin verbo no puede explicarse, el núcleo del tipo penal es el verbo y a él tiene que dirigirse nuestra atención. Además del verbo pueden existir otros elementos sobre los que debemos aclarar el significado porque, sin ellos, no habrá tipo, porque sí el tipo tiene muchos elementos, todos deben cumplirse para que se cumpla el acuerdo entre acción y tipo.

### 🟢 **El proceso de tipificación y los errores**

Al tipificar, se tiene en cuenta una acción, se la imagina y a partir de esto se redacta la ley penal. Se estima su gravedad y se decide la pena. Una buena tipificación tiene como sustento un conocimiento de los casos que se incluyen. Pueden producirse dos tipos de errores llamados **Errores de tipificación Clase A (Error-A) y Clase B (Error-B).**

****El **Error-A** es dejar afuera del tipo acciones que son parecidas a las que quedaron adentro y que el juicio de valor dice que deberían incluirse. Es un error por defecto. El dictar una ley lleva mucho tiempo, entonces cometer este error A es de un alto costo social e institucional.

El **Error-B** es cuando hay una redacción incorrecta del tipo, y quedaron incluidas cosas que no era la idea que estuvieran ahí, esto es más grave y tiene otro costo

| Violación de correo electrónico
 (art. 153 del C.P. prisión de 15 días a 6 meses) | Abriere o accediera => comunicación electrónica.  
Apoderare => comunicación electrónica.  
Suprimiere o desviare => comunicación electrónica.  
Interceptare o captare => comunicación electrónica o telecomunicaciones. |
| --- | --- |
| Acceso  indebido  a  un  sistema  informático  (art.  153  bis CP,  prisión  de  15  días  a  6  
meses) | Accediera => sistema informático de acceso restringido. |
| Publicación de comunicación electrónica (art. 155 CP, multa) | Hiciere publicar => comunicación electrónica no destinada a la publicidad. |
| Acceso a bancos de datos personales (art. 157 bis, prisión de 1 mes a 2 años) | Accediera => banco de datos personales.  
Proporcionare  o  revelare => información  registrada  en  un  registro  o  banco  de  
datos personales sobre los que debiera guardar secreto.  
Insertar o hiciere insertar => datos en un archivo de datos personales. |
| Fraude (art. 172/3 del CP, prisión de 1 mes a 6 años) | Defraudare=> mediante cualquier técnica de manipulación informática. |
| Daños Informáticos (art. 183/4 del CP prisión de 15 días a 1 año) | Alterare,  destruyere,  inutilizar  => datos,  documentos,  programas  o  sistemas  
informáticos.  Vendiere, distribuyere, hiciere circular o introdujera en un sistema informático programas destinados a causar daños. |
| Interrupción de comunicaciones
 (art. 197 CP prisión de 6 meses a 2 años) | Interrumpiera o entorpecer la comunicación telegráfica, telefónica o de otra naturaleza (ello incluye todas las comunicaciones informáticas).  
Resistieron violentamente => el  restablecimiento  de  una  comunicación  interrumpida. |

### 🟢 **Análisis de los delitos informáticos**

Identificados los delitos podemos estudiarlos en la descripción que realiza la ley penal para verificar los casos que abarcan. Además debemos tratar de encontrar errores de clase  A  y  B.  Esa  tarea  nos  da  un  conocimiento  mucho  más  preciso  porque  así investigamos las fronteras de las acciones.

---

# Razón de la existencia del derecho penal. El delito. Derecho penal de la acción.

### 🧡 **El derecho penal es una construcción social**

El sistema penal tiene un gran costo por todo lo que incluye, para justificarlo, debemos suponer que el derecho penal es una necesidad esencial para la sociedad y su funcionamiento, castigado de alguna manera las acciones indeseadas y estableciendo el control. El estado genera un sistema para investigar delitos, comparecer a las personas sospechosas, para juzgarlos y que cumplan la condena.

Con la aplicación de una pena se busca la **corrección y el mostrarle a la sociedad lo que no se tiene que hacer.**

### 🧡 **La Acción**

Las acciones pueden clasificarse en **lícitas e ilícitas**, las últimas son esas que son contrarias a una norma jurídica,  y también se establece una sanción correspondiente para quien la haga, y estas deben ser proporcionadas a la gravedad de la acción. Algunas acciones ilícitas en un lugar no lo son para otro, variando también su sanción. Del universo de las acciones humanas, un subconjunto de acciones ilícitas tienen asignadas sanciones. Todos los días vemos acciones ilícitas, como gente que estaciona mal o cruza mal la calle, algunas otras acciones es muy raro que las veamos y cuando lo hacemos nos conmocionan, como el robo de un banco. Estas acciones menos comunes son especialmente graves y tienen penas más severas, siendo un subconjunto de las acciones ilícitas, llamados **delitos**

### 🧡 **Componentes de la acción: Discernimiento, voluntad y Exteriorización**

- **Discernimiento:** Las acciones necesitan que el sujeto comprenda lo que está haciendo, no tiene sentido castigar a alguien que no sabe que hizo algo mal, por ende, lo hizo sin querer. El castigo no corregirá ni servirá de ejemplo para la población. El Discernimiento es la comprensión de la criminalidad del acto.
No tienen discernimiento todos aquellos que, por patologías mentales no puedan comprender sus actos, o los que actúan por “reacciones” físicas, como el ser sonámbulo, o por simple error.
Con los menores las legislaciones cambian, en algunos países se los evalúa según el caso para determinar sí comprenden el acto y en otros lugares se los considera inimputables, es decir, no pueden cometer delitos. Se debería analizar cada caso ya que se cae en áreas grises, pero sería imposible.
- **Voluntad:** Podría ser que en realidad no se quiso hacer lo que se hizo. Se hizo sin querer pero sí entendiendo la gravedad. La voluntad puede perderse por la coacción, que es forzar a alguien a hacer algo que no quiso hacer, física o moralmente.
- **La exteriorización y el problema de la causalidad:** Se necesita exteriorización, el sujeto debe expresar su decisión voluntaria y esa expresión debe afectar valores sociales como la vida (homicidios), la seguridad pública (incendios, estragos), la administración, etc.. Debe existir una relación de causalidad entre la acción y el resultado. Una acción A provoca B.

### 🧡 **La descripción de los tipos y el catálogo**

****¿Cómo sabemos cuáles acciones son delitos y cuáles no? ¿Cómo hace una sociedad y el sistema jurídico para comunicar las acciones que se ha decidido que se sancionan penalmente? Primero, un “catálogo” de acciones que se consideran delitos (Código penal y leyes), Segundo, este listado, y sus cambios, sólo podrá establecerse mediante el dictado de una ley, y Tercero, esa ley debe dar una descripción precisa de esas conductas que se consideran delitos.

### 🧡 **Antijuricidad y Justificación de realización de conductas típicas**

Se puede realizar una conducta cumpliendo todos los puntos anteriores, pero que no constituya un delito, son casos en donde por alguna razón, el derecho “autoriza” a hacerla. Es como la legítima defensa, se justifica porque se hace en defensa de un valor en general superior al valor atacado. Una acción SOLO está justificada sí se hace para defender un valor que está siendo agredido en forma actual y para ello la acción que se hace es proporcional, es la necesaria para defender ese valor.

### 🧡 **La culpabilidad: dolo y culpa**

Todas las acciones tienen consecuencia directa, otras que se van desplegando en el sistema causal infinito, algunas acciones tienen muchas consecuencias y otras casi ninguna. El  elemento  de  discernimiento,  voluntad  y  externalización  puede  ser  dirigido  a  un  objetivo  determinado  y  entonces  decimos  que  la  acción  es  dolosa.  En  ese  caso  se  produce  la  consecuencia  directa  y  las  consecuencias  de  las  consecuencias.  Pero  es  esencial  destacar  que  el  agente  tiene  intención  de  que  se  produzca  el  resultado.  Cuando la tipicidad se refiere a estas acciones, en general, no describe en el tipo el elemento doloso. Así, “... el que matare a otro...”, “... el que defraudare...”, etc. Hay otro tipo de acciones donde el agente hace una acción determinada, pero de forma imprudente, negligentemente, cuando alguien maneja con mucha velocidad, o cuando se tira el cigarrillo en lugares inflamables, en estos casos, el sujeto tiene intención de hacer la acción. Estas acciones torpes, llevan a resultados no deseados, estos son **delitos culposos.** 
Todos los delitos son dolosos salvo pocos que son culpables. La regla es el dolo y la culpa, la excepción.

Dibujamos a EGO (Yo en tercera persona) dentro de un área de **ámbito de discernimiento,** 
R son los resultados de las acciones de EGO, unidos por flechas que son la **relación de causalidad**
, muchas acciones tienen efectos fuera del EGO. Otras mueren dentro de EGO, en sí mismas.

Algunas acciones imprudentes de EGO no producen consecuencias notables, pero pueden generarlas y muy graves. ¿Cómo sabemos que una acción es negligente, torpe e imprudente? La comparamos con un modelo de conducta bien hecha. Toda conducta tiene un modelo correcto, no perfecto, pero razonable. Las acciones torpes van a señalarse con líneas curvas.

Al momento de tipificar, la ley dice para agregar al catálogo de los delitos, dos tipos de acciones. Las acciones **dolosas**
 son esas que se hacen buscando el objetivo, las consecuencias se desean, y las acciones que se desarrollan de forma torpe, y sí tienen consecuencias graves, son **culposas.** 
Los delitos son culposos dependiendo de sí la acción imprudente tuvo esas consecuencias o no.

### 🧡 **Análisis de casos**

Para determinar sí un hecho es un delito se debe analizar cada punto y puede ser o no delito, no otra cosa. Un método es el ATAQUE, en una máquina ponemos el caso, se recorre de izquierda a derecha verificando el cumplimiento de las condiciones, sí la primera es negativo, sale por abajo, que no es delito, y sí todas dan positivo, es delito

Ejemplo:

**Hechos**: Un hombre de 32 años entra al subte, una vez en el vagón, se hace el loco, grita y asusta a muchos. Lo hace porque es divertido. Los pasajeros, al llegar a una estación, lo denuncian e intervienen guardias.

**Acción (A)**

**Discernimiento (DEl** hombre comprendía lo que hacía

**Voluntad (V):** El hombre quiso hacerlo

**Exteriorización (E):** En el orden natural de las cosas, cuando una persona grita la gente se asusta

**Tipicidad (T):** sí buscamos en el catálogo, como el código penal, no se dice nada sobre esta acción => **NO ES DELITO**

**Hechos:** Hombre al salir del trabajo camina a su casa y al doblar en la esquina, donde se ve con un grupo de gente, ve que se está produciendo un incendio en una casa de dos pisos, llama a los bomberos, pero es posible que tarden mucho ya que es un caos el tránsito. En un balcón de la casa aparece una mujer pidiendo ayuda. Entrar en esas condiciones es absurdo ya que moriría en el intento. Pero frente a la casa hay un auto nuevo dónde en el interior se ve un matafuego. Como el auto está cerrado, rompe el vidrio, agarra el matafuego y corre a ayudar a la mujer. La salva.

**Acción (A)**

**Discernimiento (DEl** hombre comprende que se apodera de algo ajeno

**Voluntad (V):** El hombre sabía lo que hacía y lo quiso hacer

**Exteriorización (E):** En el orden natural de las cosas, cuando alguien rompe un vidrio y se roba un matafuego, deja al dueño sin el mismo.

**Tipicidad (T):** Sí buscamos en el código penal, lo podemos describir como robo.

**Antijuricidad (ASí**, hubo una justificación válida para hacerlo **NO ES DELITO**

**Culpabilidad (C):** Quiso el resultado de la acción? si

---

# Sistema de gestión de la seguridad de la información

Un sistema de gestión de seguridad de la información (SGSI) consiste en el conjunto de políticas, procedimientos y directrices junto a los recursos y actividades asociadas que son administradas colectivamente por una organización, en la búsqueda de proteger sus activos de información esenciales

# 💙 Normas de SGSI

- **ISO-IEC 27001**: se enfoca al proceso y modelo PDCA de mejora continua.
- **ITIL**: se enfoca en alinear la seguridad de IT con la organización a finde efectuar una gestión eficaz en todas las actividades.
- **COBIT**: se enfoca en la tecnología de la información, gestión de activos y controles

## • ISO/IEC 27001

La norma ISO 27001 es una solución de mejora continua en base a la cual puede desarrollarse un sistema de gestión de seguridad de la información (SGSI) que permita evaluar todo tipo de riesgos o amenazas susceptibles de poner en peligro la información de una organización tanto propia como datos de terceros. Por otro lado, también permite establecer los controles y estrategias más adecuadas para eliminar o minimizar dichos peligros

**Enfoque**

La norma 27001 es un sistema basado en el ciclo de mejora continua o de deming. Dicho ciclo consiste, en Planificar-Hacer-Verificar-Actuar, por lo que se le conoce también como ciclo PDCA (Plan-Do-Check-Act)

### **Fases de un SGSI basado en la norma ISO 27001**

1. **Análisis y evaluación de riesgos**

Identificar todos aquellos activos de información que tienen algún valor para la organización. Asociar las amenazas relevantes con los activos identificados. Determinar las vulnerabilidades que puedan ser aprovechadas por dichas amenazas. Identificar el impacto que podría suponer una pérdida de confidencialidad, integridad y disponibilidad para cada activo

1. **Implementación de controles**

La norma ISO 27001 establece 113 puntos de control. Los mismos se encuentran divididos por grandes objetivos:

- Políticas de seguridad de la información.
- Controles operacionales.

Cada organización puede añadir más puntos de control si lo considera conveniente, así como personalizarlos para adaptarlos a su propio plan de control operacional, pero siempre deben estar alineados a lo que pide la norma

1. **Definición de un plan de tratamiento de los riesgos o esquema de mejora**

Una vez realizado el análisis, se debe definir un plan de tratamiento o esquema de mejora en el que se tengan en cuenta las distintas consecuencias potenciales de esos riesgos, estableciendo una criticidad para cada uno de ellos y así poder evaluar con objetividad las diferentes amenazas. Formas de afrontar el riesgo:

- Eliminar el riesgo (hacer tender la posibilidad de ocurrencia a cero mediante la utilización de todos los recursos posibles).
- Mitigar el riesgo (implantar medidas preventivas o correctivas con el fin de reducir la posibilidad de ocurrencia).
- Trasladar el riesgo (contratar algún tipo de seguro que compense las consecuencias económicas de una pérdida o deterioro de la información)
1. **Alcance de la gestión**

En la planeación para la implementación de un SGSI es muy importante definir su alcance. El mismo dependerá del tamaño de la organización, haciendo uso de las siguientes variables:

- Número de empleados y clientes.
- Volumen de información, activos físicos y lógicos.
- Número de sedes u oficinas
1. **Contexto de organización**

El análisis de contexto de la organización es fundamental para el SGSI, ya que nos permite determinar los problemas internos y externos de la organización, así como sus debilidades, amenazas, fortalezas y oportunidades (matriz FODA) que nos puedan afectar

1. **Partes interesadas**

Se debe comprender las necesidades y expectativas de las partes interesadas que podrían ser:

- Proveedores de servicios de información y de equipamientos de Tecnologías de la Información (TICs).
- Clientes, poniendo especial cuidado en la gestión de datos de protección personal.
- Fuerzas de seguridad del Estado y autoridades jurídicas para tratar los aspectos legales.
- La sociedad en general
1. **Fijación y medición de objetivos**

Es necesario fijar los objetivos para la gestión de riegos, los cuales deben poder ser medibles, aunque no es necesario que sean cuantificables. Estos objetivos deben ser eficientemente comunicados al conjunto de los empleados de la empresa, puesto que todos deben ser conscientes de que participan en un objetivo común y que un descuido o una mala actitud pueden acarrear consecuencias muy negativas

1. **Proceso documental**

Esta cuestión es fundamental para la obtención de la certificación. La documentación puede ser presentada en diversos formatos: documentos en papel, archivos de texto, hojas de cálculo, archivos de vídeo o audio, etc. La organización debe gestionar tanto los documentos internos (políticas diversas, procedimientos, documentación del proyecto, etc.), como los documentos externos(correspondencia, remitos, documentación recibida con equipamiento, etc.)

1. **Auditorías internas y externas**

Para garantizar el correcto funcionamiento y mantenimiento de un SGSI, se hace necesario llevar a cabo planes de auditoría internas como externas de forma periódica

La norma define dos grandes tipos de auditorías:

- **Gestión**: donde se supervisa el liderazgo, el contexto, etc.
- **Controles**: en este caso se auditan los 113 controles y es de forma periódica

**Revisión por parte de la Dirección**

Es fundamental realizar revisiones periódicas del SGSI por parte de la alta dirección, con el objetivo de comprobar el buen funcionamiento del sistema, si se están cumpliendo los objetivos y también si se está produciendo un retorno de la inversión (ROI). La alta dirección de la organización es la máxima responsable de que el área auditada lleve acabo las acciones necesarias para eliminar las no conformidades que se hayan detectado durante la auditoría interna y externa

### **Beneficios para una organización de implementar ISO 27001**

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

---

# Prueba informática y las pericias

### 💛 **La prueba**

Las resoluciones judiciales se dictan contemplando dos cosas, los hechos y las normas que se le aplican. Los hechos son del pasado (como sucedio el choque de dos autos). Para aplicar una norma entonces se tiene que tener por verdadero un conjunto de hechos para tener por verdaderos otro conjunto que se debe probar. La prueba es la realizacion de los actos necesarios para que un tribunar tenga acreditados los hechos necesarios para fundar un derecho.

Existen muchos medios de prueba, documental, testimonial, etc.. Uno de estos es la **prueba pericial,** donde se designan peritos, profesionales en X disciplina para realizar una investigacion.

### 💛 **La prueba judicial y los criterios de evaluacion**

****Los informes no terminan de resolver el problema de los hechos, ellos solo informan al juez y este es el que decide que hacer. Aunque, aun así, son de mucha importancia

### 💛 **Objetos de una pericia informatica**

****El objeto de una pericia esta ligado a la investigacion que se haga, como la existencia de archivos encriptados, busquedas de copias de resguardo, origen de programas, etc..

### 💛 **Procedimiento de una pericia**

- Identificación del objeto a peritar. Se debe identificar inequívocamente mediante una descripción cuidadosa.
- Preservación. Se debe tener especial cuidado en que los procedimientos que se deban realizar no alteren el objeto de tal manera que todo lo que se realice pueda repetirse de idéntico modo. Si es necesario copiar archivos, se deben identificar las copias para su entrega y si es posible firmarlas electrónicamente.
- Aplicación de la metodología de la investigación que sea adecuada al objetivo que se le ha indicado al perito con identificación de las herramientas utilizadas en la operación.
- Proceder al análisis, es decir, los objetos que se han identificado se someten a las pruebas que correspondan de tal manera que, utilizando los mismos elementos, se llegue a los mismos resultados.
- Elaborar las conclusiones. Esta es una etapa intelectual en la que el profesional utiliza el conocimiento de la ciencia y el arte de la informática para llegar a determinadas conclusiones que respondan a los puntos de pericia que ha ordenado el juez.
- Realizar el informe correspondiente para ser entregado al tribunal.

### 💛 **El informe pericial informatico**

La pericia se dirige a quienes no son especialistas por eso debe mantener un lenguaje claro para ser entendido por cualquiera.

- Debe iniciarle con los datos objetivos (nombre del perito, domicilio, teléfono, carátula del expediente y su número, nombre del tribunal al que se dirige, etc.
- Copia de los puntos de pericia que fueron encomendados.
- La descripción pormenorizada del objeto de estudio y de las medidas realizadas estableciendo día y hora de inicio y duración de la medida.
- La metodología empleada en la pericia, los elementos utilizados, los resguardos y el procedimiento de conservación.
- El análisis efectuado.
- Las conclusiones en forma de respuesta a los puntos de pericia ordenados.
- Toda aquella información que el perito considere conveniente para el esclarecimiento del caso. Puede ser explicaciones adicionales, nuevos elementos que el perito considere relevantes, etc.

### 💛 **El problema de la pericia informatica y la interdisciplinariedad**

Cuando un juez pide una pericia es porque debe resolver un caso. En la mayoría de los casos se conoce lo que hay que hacer, pero no se sabe hacerlo. Ello porque si bien se trata de rigurosas disciplinas, es de conocimiento común lo que esas disciplinas hacen y muchos de los elementos que manejan. Pero con las pericias informáticas sucede que no se desconocen solamente cómo se debe investigar, sino que se tienen ideas totalmente erróneas sobre el funcionamiento de los sistemas. Esto lleva a un problema de una inusitada gravedad y la causa común de que las pericias informáticas no cumplan su cometido. Las pericias son correctas en cuanto han realizado un análisis adecuado y las conclusiones son las debidas, pero quien debe interpretarlas, el juez, o no las entiende o las confunde. Esta circunstancia no reside simplemente en las dificultades del lenguaje técnico, sino en las concepciones erróneas de los operadores jurídicos respecto al funcionamiento de las redes, las características de los correos electrónicos, las posibilidades de editar archivos, etc. Es usual que los puntos de pericia estén mal planteados ya que tal como son dados al perito no permitirán resolver la cuestión. Entonces lo que debe hacer el perito antes de comenzar el desarrollo de la pericia es preguntarse qué es lo que es relevante para el juez. Por ejemplo, si se trata de una pericia en un ámbito criminal, el perito debe estudiar el tipo penal para ver cuáles son las condiciones requeridas para su cumplimiento. Siempre al juez penal lo que le interesa es determinar si un caso se puede subsumir en la conducta descripta en el tipo. Por su parte en el ámbito de la responsabilidad civil, el perito debe estudiar si existen daños, si se produjeron como consecuencia de una acción determinada o como consecuencia de la misma actividad independiente de los sistemas. Debe también poder determinar el modelo de conducta profesional y establecer si en el caso se lo siguió, etc. etc. Pero siempre debe conocer el problema jurídico que motiva la necesidad de la pericia y no guiarse exclusivamente por los puntos de pericia que le fueron planteados.

---

# Responsabilidad civil aplicada a la Informática

### 💙 **La responsabilidad civil y la informática**

Es un error decir que en informática no hay nada regulado, en informática se aplican las mismas normas que en cualquier otro ámbito, podríamos decir que en informática está todo regulado desde antes de que esta exista. Los problemas no son falta de regulación, sino de incomprensión de los operadores jurídicos con respecto sobre lo que deben tratar y decidir.

### 💙 **El problema del daño causado por un tercero por injurias realizadas en un sitio web**

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

### 💙 **El problema de las pizzas de autor ([www.pizzacomoarte.com.ar](http://www.pizzacomoarte.com.ar/))**

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

### 💙 **Responsabilidad de programadores, administradores de redes**

Estos roles son profesionales que pueden ser sujetos de la responsabilidad civil por el factor culpa. Sí en su trabajo no cumplen con el modelo exigible que puede establecerse a partir de las normas de la ciencia y el arte de la programación y, como consecuencia de su mala labor, se producen daños, deberán indemnizarlos.

Para eximirse, deberá demostrar que su labor sí correspondió con el modelo. Tendrían que, mientras hacen sus tareas, analizar de qué manera podrían probar la corrección de su conducta profesional.

Cuando en el contrato que no une con un cliente se establece el compromiso respecto un resultado determinado y no una labor, su responsabilidad será objetiva, sólo se eximirá sí puede demostrar la intervención de un tercero, de la víctima o que se encuadre en el marco de fuerza mayor.

Los gerentes no son principales en el sentido de factor de atribución respecto a sus subordinados. Es necesario tener en claro que la palabra dependiente en sentido jurídico no es la misma que en sentido administrativo. Un dependiente administrativo no es un dependiente en el sentido del factor de atribución. El análisis de la responsabilidad civil debe ser un elemento más en el diseño de sistemas y en el diseño de las actividades profesionales

---

# Firmas y Certificados Digitales

### 🌀 ¿Qué es una Firma Digital?

Una firma digital, que no debe confundirse con un certificado digital, es una técnica matemática utilizada para validar la autenticidad e integridad de un mensaje, software o documento digital.

La firma digital, a diferencia de una firma tradicional, no es un nombre sino que consta de dos "claves" o secuencias de caracteres separadas. Consiste en aplicar mecanismos criptográficos al contenido de un mensaje o documento con el objetivo de demostrar al receptor del mensaje autenticación, no repudio e integridad.

● Que el emisor del mensaje es real (autenticación);
● Que éste no puede negar que envió el mensaje (no repudio);
● Que el mensaje no ha sido alterado desde su emisión (integridad)

La firma digital es legal, pero su objetivo no es dar fe de un acto de voluntad por parte del firmante como la firma electrónica, sino tan sólo encriptar los datos de un documento para conferir mayor seguridad.
La firma digital se puede aplicar a una gama más amplia de tipos de archivos, como películas, sonidos, música, etc., haciéndola más versátil que la tradicional firma de papel.

### 🌀 ¿Cuál es la diferencia entre una Firma digital y electrónica?

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

### 🌀 ¿Cómo funcionan las Firmas Digitales?

Se basan en la criptografía de clave pública. Hay tres algoritmos involucrados con el proceso de firma digital:

- Generación de dos claves que están matemáticamente vinculadas: un algoritmo
proporciona una clave privada junto con su clave pública correspondiente.
- Firma: este algoritmo produce una firma al recibir una clave privada y el mensaje
que se está firmando.
- Verificación: este algoritmo comprueba la autenticidad del mensaje al verificarlo
junto con la firma y la clave pública

### 🌀 ¿Qué es un Hash?

Es un algoritmo que consigue crear a partir de una entrada (ya sea un texto, una contraseña o un archivo, por ejemplo) una salida alfanumérica de longitud normalmente fija, que representa un resumen de toda la información que se le ha dado.
Es decir, a partir de los datos de la entrada crea una cadena que solo puede volverse a crear con esos mismos datos.

Para crear una firma digital, el software de firma crea un hash unidireccional de los datos electrónicos que se deben firmar. La clave privada se usa para encriptar el hash. El hash cifrado junto con otra información es la firma digital.
Cualquier cambio en los datos, incluso cambiando o eliminando un solo carácter, da como resultado un valor diferente. Este atributo permite a otros validar la integridad de los datos mediante el uso de la clave pública del firmante para descifrar el hash.

Si el hash descifrado coincide con un segundo hash calculado de los mismos datos, prueba que los datos no han cambiado desde que se firmó. Si los dos hash no coinciden, los datos se han alterado de algún modo (integridad) o la firma se ha creado con una clave privada que no corresponde a la clave pública presentada por el firmante (autenticación).
Las firmas digitales dificultan que el firmante niegue haber firmado algo (no repudio), suponiendo que su clave privada no se haya visto comprometida, ya que la firma digital es única tanto para el documento como para el firmante, y los une.

Un certificado digital es un documento electrónico que contiene la firma digital de la autoridad emisora del certificado, vincula una clave pública con una identidad y se puede usar para verificar que una clave pública pertenece a una persona o entidad en particular.
Las firmas digitales se usan ampliamente para proporcionar pruebas de autenticidad, integridad de los datos y no repudio de las comunicaciones y transacciones realizadas a través de Internet.

### 🌀 ¿Qué es un Certificado Digital?

Es el único medio que permite garantizar técnica y legalmente la identidad de una persona en Internet. Se trata de un requisito indispensable para que las instituciones puedan ofrecer servicios seguros a través de Internet.

- Permite la firma electrónica de documentos: El receptor de un documento firmado puede tener la seguridad de que éste es el original y no ha sido manipulado y el autor de la firma electrónica no podrá negar la autoría de esta firma.
- Habilita cifrar las comunicaciones: Solamente el destinatario de la información podrá acceder al contenido de la misma.

Consta de una pareja de claves criptográficas, una pública y una privada. El titular del certificado debe mantener bajo su poder la clave privada, ya que si ésta es sustraída, el sustractor podría suplantar la identidad del titular en la red.
En este caso el titular debe revocar el certificado lo antes posible, igual que se anula una tarjeta de crédito sustraída.

La clave pública forma parte de lo que se denomina Certificado Digital en sí, que es un documento digital que contiene la clave pública junto con los datos del titular, todo ello firmado electrónicamente por una Autoridad de Certificación, que es una tercera entidad de confianza que asegura que la clave pública se corresponde con los datos del titular.

La Firma Electrónica sólo puede realizarse con la clave privada. La Autoridad de Certificación se encarga de emitir los certificados para los titulares tras comprobar su identidad. El formato de los Certificados Digitales está definido por el estándar internacional ITU-T X.509. De esta forma, los certificados pueden ser leídos o escritos por cualquier aplicación que cumpla con el mencionado estándar.