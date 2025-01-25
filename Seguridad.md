<a name="seg-base"></a>

## [Seguridad](#seg)

| Introducción y Conceptos Básicos |
|----------|
| [¿Qué es el ciberespacio?](#seg4) |
| [¿Cuáles son los componentes del Ciberespacio?](#seg5) |
| [¿Cuáles son los problemas del Ciberespacio?](#seg6) |
| [¿Qué es la Ciberseguridad?](#seg8) |
| [¿Qué quiere decir "Ciberataque"?](#seg1) |
| [¿Que quiere decir "Ciberamenazas"?](#seg2) |
| [¿Qué quiere decir "Vulnerabilidad"?](#seg3) |
| [¿Cuáles son las ciberamenazas actuales?](#seg7) |

| Metodologías y Roles en Ciberseguridad |
|----------|
| [¿Cuál es el perfil del Oficial de seguridad informática?](#seg9) |
| [¿De qué pasos consta la metodología de ciberseguridad?](#seg10) |
| [¿De qué pasos criterios de seguridad consta la metodología de ciberseguridad?](#seg11) |

| Tipos de Ciberataques |
|----------|
| [¿Cuáles son algunas modalidades comunes de ataques?](#seg13) |
| [¿Qué son los ataques internos?](#seg15) |
| [¿Qué tipos de Ingenierías sociales existen?](#seg16) |
| [¿Cuáles son las etapas en un proceso de hacking?](#seg14) |

| Medidas de prevencion |
|----------|
| [¿Cuáles son algunas medidas comunes contra los ataques?](#seg12) |
| [¿Qué es la triada CIA?](#seg17) |
| [¿Qué es la seguridad perimetral?](#seg18) |
| [Es una amenaza.. Verdadero o Falso?](#seg23) |

| IDS (Intrusion Detection Systems) |
|----------|
| [IDS (Intrusion Detection System)](#seg19) |
| [Tecnicas de detección de intrusiones](#seg20) |
| [Indicadores de una intrusión](#seg21) |
| [Tipos de IDS](#seg22) |

| Firewalls |
|----------|
| [¿Qué es un Firewall?](#seg24) |
| [Tipos de Firewall](#seg25) |

| Criptografía |
|----------|
| [¿Qué es la criptografía?](#seg26) |
| [¿Qué es una función Hash?](#seg27) |
| [¿Cuáles son los requisitos de un Cripto sistema?](#seg28) |
| [¿Cómo funciona el Cifrado Simétrico?](#seg29) |
| [¿Cómo funciona el Cifrado Asimétrico?](#seg30) |

| Informática Forense |
|----------|
| [Adquisición en Informática Forense](#seg31) |
| [El informe pericial informático](#seg32) |

---

<a id="seg"></a>

# Seguridad

<a id="seg1"></a>

### **Qué quiere decir "Ciberataque"?**

[Volver al indice](#seg-base)

Es cualquier maniobra ofensiva de explotación deliberada que tiene como objetivo tomar el control, desestabilizar o dañar un sistema informático.

<a id="seg2"></a>

### **Que quiere decir "Ciberamenazas"?**

[Volver al indice](#seg-base)

Representa un evento con potencial de daño que puede afectar negativamente a las operaciones de una organización o a sus activos.

<a id="seg3"></a>

### **¿Qué quiere decir "Vulnerabilidad"?**

[Volver al indice](#seg-base)

Representa una condición de debilidad en los sistemas informáticos que permiten la materialización del daño

<a id="seg4"></a>

### **¿Qué es el ciberespacio?**

[Volver al indice](#seg-base)

El ciberespacio es un ambiente complejo en donde interactúan los seres humanos, el software y los servicios disponibles en Internet, soportados por el hardware y las redes de comunicaciones de todo el mundo

<a id="seg5"></a>

### **¿Cuáles son los componentes del Ciberespacio?**

[Volver al indice](#seg-base)

- Personas
- Software
- Servicios en Internet
- Dispositivos Informaticos
- Redes Digitales

<a id="seg6"></a>

### **Cuales son los problemas del Ciberespacio?**

[Volver al indice](#seg-base)

- Ciberdelincuencia
- Robo de Informacion
- Fraude informático
- Ciberterrorismo
- Hacktivismo
- Daños informáticos
- Ciberataques

<a id="seg7"></a>

### **¿Cuáles son las ciberamenazas actuales?**

[Volver al indice](#seg-base)

| Nombre | Descripcion |
| --- | --- |
| Malware | Es un programa malicioso que realiza acciones dañinas en un sistema informático de forma intencionada ysin el conocimiento del usuario. |
| Web-bassed attacks | Es todo tipo de ataque que se realiza a la infraestructura web de una organización. |
| Phising | Es un conjunto de técnicas que tienecomo objetivo obtener a través de Internet datos privados de los usuarios, especialmente para accedera sus cuentas o datos bancarios. Sebasa en la ingeniería social |
| Web Application Attacks | Son ataques dirigidos a errores de codificación en los sitios web, ejemplo de estos son el XSS, SQL Injection, LFI, etc |
| SPAM: o “correo basura” | Es un correo electrónico no solicitado que se envía a un gran número de destinatarios con fines publicitarios o comerciales |
| DDoS | Es la versión distribuida de una ataque de denegación de servicio y tiene como objetivo afectar a la disponibilidad de los servicios de una organización |
| Identity Theft | O robo de identidad. Tiene como objetivo utilizar de manera ilícita los datos personales de otra persona persiguiendo un fin lucrativo. |
| Data Breach | Es un incidente en el que se roba o setoma información de un sistema sin el conocimiento o la autorización del propietario del sistema |
| Insider Threat | Es un riesgo de seguridad que seorigina dentro de la organizaciónobjetivo. Esto no significa que el actor deba ser un empleado o funcionario actual de la organización. |
| Botnets | Es una red de computadoras zombies secuestradas que están controladas de forma remota por un hacker |
| Data manipulation attack | El ciberdelincuente no toma posesión de los datos, sino que hace ajustes sutiles y sigilosos a los mismos con el fin de obtener algún tipo de ganancia |
| Information leakage | O fuga de información, es la transmisión no autorizada de datos desde dentro de una organización aun destino o destinatario externo. |
| Ransomware | Es un programa malicioso que persigue el cifrado de archivos y/o datos a fin de cobrar un rescate parasu restitución |
| Cyberespionage | Es la estrategia de irrumpir en sistemas y/o redes informáticas a finde extraer información sensible de un gobierno o corporación |
| Criptojacking | Es el uso no autorizado de una computadora o red informática ajena afin de minar criptomonedas |
| Carga de archivos sin restricciones | Archivos maliciosos se cargan en el servidor y luego se ejecutan. Puede incluir un sistema de archivos sobrecargado o bases de datos, control total del sistema, etc.. |
| Clickjacking | Un usuario hace click en un link o boton que lleva a un lugar que no corresponde al sitio, y dan datos personales |
| Ataque XSS | Se inyectan secuencias de comandos maliciosos del lado del navegador en la pagina, codigo JS |
| SQL Injection | Se inyecta codigo malicioso SQL en los campos de entrada, inputs. |
| Session Hijacking | Las comunicaciones entre el servidor y el cliente se interceptan y se roban datos.  |
| Remote Network Hack | Simula un ataque por internet  |
| Remote Dial-Up Network Hack | Simula un ataque hacia el pool de modems del cliente  |
| Stolen Equipment Hack | Simula el robo de un activo con info importante  |
| Online Scams | Se recopila información por premios que no existen, es publicidad engañosa  |
| Local Network Hack | Simula el ataque de una persona con acceso físico tratando de acceder de manera no permitida por una red local  |

<a id="seg8"></a>

### **¿Qué es la Ciberseguridad?**

[Volver al indice](#seg-base)

La Ciberseguridad surge como resultado de una visión amplia de los aspectos de seguridad que se deben tener a fin de poder minimizar los riesgos que proponen los nuevos desafíos y retos del ciberespacio. Se define como el conjunto de medidas de protección de la información, a través del tratamiento de las amenazas que ponen en riesgo a la misma y que es tratada por los sistemas de información interconectados

La Ciberseguridad se centra únicamente en los activos digitales conectados a Internet. Mantiene su atención principalmente en los riesgos provenientes únicamente del ciberespacio. Extiende su visión a la protección de la infraestructura crítica de información

<a id="seg9"></a>

### **¿Cuál es el perfil del Oficial de seguridad informática?**

[Volver al indice](#seg-base)

El oficial de seguridad informática tiene la función de brindar los servicios de seguridad en la organización, a través de la planeación, coordinación y administración de los procesos de seguridad informática, así como difundir la cultura de seguridad informática entre todos los miembros de la organización

- Analizar las necesidades particulares de la organización en cuestión de seguridad digital.
- Elaborar y presupuestar un plan de prevención y de actuación ante los posibles ciberataques.
- Determinar los requisitos de seguridad para el sistema en red de la organización.
- Proteger los equipos de la organización contra accesos no autorizados o maliciosos.
- Configurar las diferentes herramientas de software de seguridad.
- Realizar pruebas y análisis de vulnerabilidades.
- Llevar a cabo auditorías de seguridad informática.
- Responder de manera inmediata ante incidentes de seguridad informática.
- Investigar los ciberdelitos

<a id="seg10"></a>

### **¿De qué pasos consta la metodología de ciberseguridad?**

[Volver al indice](#seg-base)

- **Identificar**: se debe entender el funcionamiento de la organización para minimizar el riesgo de los sistemas, activos, datos y capacidades.
- **Proteger**: se deben diseñar salvaguardas para limitar el impacto de los eventos potenciales sobre los servicios y las infraestructuras críticas
- **Detectar**: ejecutar actividades para identificar la ocurrencia de un evento de ciberseguridad.
- **Responder**: tomar las medidas apropiadas después de enterarse de un evento de seguridad.
- **Recuperar**: planificar la capacidad de recuperación y la reparación oportuna de capacidades y servicios comprometidos

<a id="seg11"></a>

### **¿De qué pasos criterios de seguridad consta la metodología de ciberseguridad?**

[Volver al indice](#seg-base)

- Debido a los nuevos desafíos que vienen aparejados con las tecnologías, la rama de la ciberseguridad dentro de una organización debe ser considerada transversal, enfocándose principalmente en el resguardo de sus activos informáticos, pero también haciendohincapié en la concientización del factor humano
- Al momento de evaluar una tecnología, se debe prestar atención al entorno donde se va a implementar, su relación con otros entornos y/o plataformas y/o servicios, su alcance y sus canales de comunicación
- Se deben tener en cuenta sus vulnerabilidades asociadas y los riesgos inherentes y externos
- Se debe considerar quienes serán los actores principales y los secundarios de la misma, afin de efectuar una correcta segregación funciones y/o roles
- Es importante efectuar una validación univoca de la identidad de los actores
- Se debe poder garantizar, en todo momento, una trazabilidad completa de la operatoria

<a id="seg12"></a>

### **¿Cuáles son algunas medidas comunes contra los ataques?**

[Volver al indice](#seg-base)

* Restringir el acceso a la base de datos: No dejarla expuesta en la red para que cualquiera pueda conectarse. Recomendable tener una lista de IPs u origenes que pueden conectarse a la misma.
* Guardar de forma segura informacion sensible: No guardar en texto plano informacion sensible por si la BD se ve comprometida. Un ejemplo son las contraseñas, Se recomienda aplicar Hashing con algoritmos especializados.
* Guardar configuracion en variables de entorno: Como conexiones a bases de datos, keys de servicios, etc.. Que varíe dependiendo del ambiente que estemos usando
* Asegurar las rutas de la API: Alguien puede intentar con Postman usar nuestra API salteandose validaciones de seguridad. El endpoint deberia validar la autenticacion (token que expire) y la autorizacion (que esta persona tiene los permisos para acceder a esta API, estar autenticado no signfica estar autorizado)
* Validar del lado de Servidor y de Cliente idealmente: No asumir que los datos vienen del cliente y que este ya los valido. Se deberia validar tanto en cliente como en servidor.
* No guardar informacion sensible del lado del cliente: No guardar informacion sensible en cookies o Local Storage ya que son almacenamientos de facil acceso.
* **Honeypot** Es un dispositivo destinado a ser atacado para estudiar el comportamiento de los atacantes o desviar su atención.

<a id="seg13"></a>

### **¿Cuáles son algunas modalidades comunes de ataques?**

[Volver al indice](#seg-base)

- **Black Box (Blind):** Security Tester, no cuenta con info sobre el objetivo
- **Double Black Box (Double Blind):** El cliente no sabe nada sobre el test que hará, cómo ni cuándo
- **White Box:** El ST sabe todo sobre el objetivo, la forma, etc..
- **Gray Box:** Internal Testing, examina el nivel de acceso desde la red interna, solo sabe info parcial sobre los objetivos puestos por el cliente
- **Double Gray Box:** El cliente sabe que tipo de test se va a hacer, pero no como ni cuando.

<a id="seg14"></a>

### **¿Cuáles son las etapas en un proceso de hacking?**

[Volver al indice](#seg-base)

(Exploración de un sistema, Explotación de las vulnerabilidades, Corrupción del Sistema, Búsqueda de Vulnerabilidades y Eliminación de pruebas)

- **Reconocimiento** Recolectar info sobre la víctima, Riesgo Moderado
- **Escaneo** Con la información del reconocimiento, busco vulnerabilidades, Riesgo alto
- **Obtener Acceso** Explotar las vulnerabilidades, esto ya seria una violacion de la ley, Riesgo muy alto
- **Mantener el acceso** Una vez dentro, buscar el reingreso al mismo sin riesgos
- **Eliminar rastros** Eliminar evidencia y evitar acciones legales

<a id="seg15"></a>

### **¿Qué son los ataques internos?**

[Volver al indice](#seg-base)

Muchos ataques son desde dentro de la misma organización, se infiltran o hablan con empleados para obtener información sobre la víctima/empresa

Pueden infiltrar un pendrive con una etiqueta engañosa para que sea usado por algún empleado, el famoso **Rubber Ducky**

- **Tailgating:** Acceder a una área restringida sin permiso por credenciales falsas o usando la de otra persona
- **Piggybacking:** Persona autorizada da acceso a otra persona no autorizada
- **Eavesdropping:** Escucha, o ve cosas privadas sin permiso.

**Contramedidas:** Control de acceso, mínimo privilegio sí no es necesario, separación de tareas, política legal, etc...

<a id="seg16"></a>

### **¿Qué tipos de Ingenierías sociales existen?**

[Volver al indice](#seg-base)

- **Human Based:** La interacción de persona a persona, de forma remota o por llamada telefónica
    - **Impersonalización:** Ganar acceso físico simulando ser un usuario válido
    - **Empleado Importante:** Simular ser un ejecutivo e intimidar con eso
    - **Tercera parte de confianza:** Simular el tener el permiso de una tercera persona para acceder a algo
    - **Soporte Tecnico:** Simular ser soporte tecnico para acceder a información
    - **Shoulder Surfing:** Obtener contraseña mirando de reojo lo que escribe un usuario
- **Dumpster Diving:** Revisar basura y documentos
- **Computer Based:** Se hace un software tipo Phishing para interactuar con el usuario
    - Archivos adjuntos en emails
    - Sitios web falsos
    - Pop Ups
- **Ingeniería social Inversa:** Es la más usada, es para que el usuario contacte al atacante sí este lo solicita

<a id="seg17"></a>

### **¿Qué es la triada CIA?**

[Volver al indice](#seg-base)

**Confidencialidad:** Solo accede a la info gente autorizada

**Autenticidad:** Quien dice ser es verdadero

**Integridad:** Solo usuarios autorizados pueden modificar la info de manera controlada

**Disponibilidad:** El poder acceder a la info por usuarios autorizados sólo cuando sea necesario (por ejemplo, limite de horario)

**El no repudio:** Probar que un evento o una acción fue realizada por alguien o algo, y que ese alguien o algo no pueda "negarlo", esto es más para cuando hablamos de cosas como firma digital, etc..

**Triada de la seguridad informática:** No repudio, Autenticidad, Responsabilidad y Fiabilidad.

<a id="seg18"></a>

### **¿Qué es la seguridad perimetral?**

[Volver al indice](#seg-base)

- Conjunto de sistemas de detección electrónica hecho para proteger perímetros internos y externos
- Su funcion es detectar, disuadir, y hasta parar un ataque con antelación
- Algunos sistemas son: Firewall, DMZ, UTM, IDS, WAF, Web Filtering, AppControl, Antivirus y Antispam

<a id="seg19"></a>

### **IDS (Intrusion Detection System)**

[Volver al indice](#seg-base)

- Es un sistema de detección de intrusiones es un componente que inspecciona los datos de una red o equipo en busca de elementos sospechosos
- Recopilar info para analizar y correlacionar
- Sus elementos básicos son: Sensor, consola y un protocolo de comunicación entre ambos
- Su comportamiento en las redes influye el sniffing de paquetes
- Si detecta un posible ataque, manda una alarma

<a id="seg20"></a>

### **Tecnicas de detección de intrusiones**

[Volver al indice](#seg-base)

- **Reconocimiento de Firmas: Identificación de eventos y acciones conocidas**
- **Detección Anomalías: Identificación de comportamientos raros**
- **Anomalía de protocolos:** Identificación de paquetes TCP/IP raros.

<a id="seg21"></a>

### **Indicadores de una intrusión**

[Volver al indice](#seg-base)

- Modificación de software y archivos de configuración.
- Bajo rendimiento inusual en el sistema.
- Cuelgues y reinicios en el sistema.
- Períodos en los cuales los logs no registran datos.
- Ausencia de logs o incompletos.
- Procesos desconocidos.
- Cambios en los permisos del sistema de archivos.
- Cambios raros en el tamaño de los archivos.
- Problemas de disponibilidad en los sistemas.
- Conexiones desde y hacia lugares desconocidos.
- Repetición de intentos de conexiones.
- Presencia de archivos extraños. Ausencia de archivos determinados.

Si el IDS Detecta algún tipo de ataque toma las siguientes medidas:

- Bloquear la dirección IP del atacante en el Firewall.
- Alertar al administrador.
- Generar logs con toda la información posible.
- Guardar toda la evidencia y captura de paquetes.
- Lanzar otras aplicaciones para actuar sobre el evento

<a id="seg22"></a>

### **Tipos de IDS**

[Volver al indice](#seg-base)

- **NIDS (Network IDS)**: Elemento de red que inspecciona el tráfico de la misma.
- **HIDS (Host IDS)**: Software que inspecciona los eventos dentro del marco de un sistema operativo.
- **Monitor Logs**: Correlaciona y analiza los logs de sistemas y aplicaciones.
- **Verificador Integridad:** Chequea la integridad de archivos de un sistema

<a id="seg23"></a>

### **Es una amenaza.. Verdadero o Falso?**

[Volver al indice](#seg-base)

- **Verdadero Positivo**: Debería generarse una alarma y ésta se genera.
- **Falso Positivo**: No debería generarse una alarma, pero ésta se genera
- **Verdadero Negativo**: No debería generarse una alarma, y ésta no se genera.
- **Falso Negativo:** Debería generarse una alarma, pero ésta no se genera

<a id="seg24"></a>

### **¿Qué es un Firewall?**

[Volver al indice](#seg-base)

- Un Firewall divide una red segura de una red insegura, normalmente una privada de una publica
- Su función principal es examinar los paquetes en busca de coincidencia con las reglas definidas.
- El filtrado es en sentido entrante y saliente. También es por dirección de Origen / Destino, puerto Origen / Destino, protocolo de capa superior y por estado de conexión
- También puede crear logs y generar alarmas
- Toma acciones en base a cierto criterio y acepta o rechaza los paquetes

El firewall **NO** protege conexiones que NO pasen por el Firewall, no protege contra el Malware, no protege contra acciones internas y no protege contra ataques de ingeniería social

<a id="seg25"></a>

### **Tipos de Firewall**

[Volver al indice](#seg-base)

**Packet Filters**

- Filtran en Capa 3 (Internet Protocol IP)
- Sólo entienden direcciones IP
- Aplicable a Routers

**Circuit Level Gateways**

- Filtran en Capa 4 (TCP)
- No filtran paquetes individuales sino sesiones
- Entienden de puertos y sesiones

**Application Level Gateways**

- Filtran en Capa 7 (Application)
- Se utilizan como Proxy.
- Entienden comandos específicos de los protocolos.

**Stateful Multilayer**

- Filtran en todas las capas anteriores (Application, TCP y IP)
- Son más costosos y difíciles de administrar.
- Tienen gran capacidad de análisis y filtrado.

<a id="seg26"></a>

### **Que es la Criptografia?**

[Volver al indice](#seg-base)

- Técnica que protege documentos y datos
- Uso de cifras/códigos para ocultar cierta información para que sea decodificada por quien pueda (y deba) hacerlo
- Es una rama de las matemáticas y de la informática en cierta forma
- **Usos: Correo electrónico, E-commerce, Servicios web (HTTPS) y Networking**

**Los elementos básicos de un sistema criptográfico son:** Criptograma, Texto Claro y Algoritmo de Cifrado

<a id="seg27"></a>

### **Que es una funcion Hash?**

[Volver al indice](#seg-base)

Es un algoritmo que consigue crear a partir de una entrada (ya sea un texto, una contraseña o un archivo, por ejemplo) una salida alfanumérica de longitud normalmente fija, que representa un resumen de toda la información que se le ha dado.
Es decir, a partir de los datos de la entrada crea una cadena que solo puede volverse a crear con esos mismos datos.

Para crear una firma digital, el software de firma crea un hash unidireccional de los datos electrónicos que se deben firmar. La clave privada se usa para encriptar el hash. El hash cifrado junto con otra información es la firma digital.
Cualquier cambio en los datos, incluso cambiando o eliminando un solo carácter, da como resultado un valor diferente. Este atributo permite a otros validar la integridad de los datos mediante el uso de la clave pública del firmante para descifrar el hash.

Si el hash descifrado coincide con un segundo hash calculado de los mismos datos, prueba que los datos no han cambiado desde que se firmó. Si los dos hash no coinciden, los datos se han alterado de algún modo (integridad) o la firma se ha creado con una clave privada que no corresponde a la clave pública presentada por el firmante (autenticación).
Las firmas digitales dificultan que el firmante niegue haber firmado algo (no repudio), suponiendo que su clave privada no se haya visto comprometida, ya que la firma digital es única tanto para el documento como para el firmante, y los une.

Un certificado digital es un documento electrónico que contiene la firma digital de la autoridad emisora del certificado, vincula una clave pública con una identidad y se puede usar para verificar que una clave pública pertenece a una persona o entidad en particular.
Las firmas digitales se usan ampliamente para proporcionar pruebas de autenticidad, integridad de los datos y no repudio de las comunicaciones y transacciones realizadas a través de Internet.

- Es una funcion matemática fácil de calcular
- Uno puede hacer un algoritmo **unidireccional** (no se puede decodificar, o no se debería)
- Sirve para certificar que la informacion es veridica y no fue modificada
- Se usa para el concepto de firma digital y en blockchain
- **Compresión:** Son de longitud única su resultado
- **Difusión: Sí se modifica la mitad de un bit del mensaje original, el hash cambia la mitad de sus bits.**
- Mensaje => Algoritmo criptográfico (clave k) => Mensaje Cifrado (C)

**Principales algoritmos hash:** MD4, SHA 56, Sha1, etc..

<a id="seg28"></a>

### **Cuáles son los requisitos de un Cripto sistema?**

[Volver al indice](#seg-base)

- Integridad, confidencialidad y no repudio
- El algoritmo debe ser rápido y fiable, no debe haber retardo entre el cifrado y descifrado
- No debe ser posible contar con una clave para deshashearla
- Un esquema de cifrado es computacionalmente inseguro sí el texto cifrado generado cumple El costo de romper el cifrado es bajo y la información está dentro de la vida útil

<a id="seg29"></a>

### **Como funciona el Crifrado Simetrico?**

[Volver al indice](#seg-base)

Se descifra con una misma clave (Clave secreta), el emisor se lo tiene que "pasar" al receptor, lo cual significa una vulnerabilidad porque si son poco cuidadosos, cualquiera podría obtener esa clave y obtener la información privada. Es un proceso rápido. Que la clave sea muy segura es muy importante. También se le dice de clave privada porque es una sola clave. Con este sistema de clave pública se hizo SSH luego, que es una manera de establecer una comunicación segura entre páginas webs (servidores) y clientes.

Las debilidades del Cifrado simetrico son..

- Debilidades de clave única
- Mala gestión de claves
- Criptosistemas asimétricos
- Lo que se cifra con una clave se descifra con otra clave

<a id="seg30"></a>

### **Como funciona el Crifrado Asimetrico?**

[Volver al indice](#seg-base)

- También se le dice de **clave pública**.
- Hay 2 claves, una para cifrar y otra para descifrar.
- Tenemos que tener cuidado de que la clave pública no dé lugar a que se adivine de cierta manera a la clave privada. Lo ideal es que se descifra con la clave privada, es decir, una que tenga el receptor, es como tener una cuenta que no puedo resolver si no tengo los números para saber qué es lo que tengo que sumar.
- Sí quiero darle confidencialidad a un documento, y que lo vea solo el destinatario, cifrar el documento con la **clave pública** del destinatario
- Está pensado para pasar por lugares poco seguros, es por eso que se considera un sistema menos vulnerable.
- Hay 3 tipos de cifrado en este tipo de cifrado, RSA (La seguridad de este algoritmo radica en el problema de la factorización de números enteros (números primos grandes), DSA, edDSA y ECDSA (El sistema está basado en curvas elípticas el cual emplea puntos sobre las curvas para la generación del par de claves).

<a id="seg31"></a>

### **Adquisicion en Informatica Forense**

[Volver al indice](#seg-base)

En el campo de la Informática Forense, uno de los puntos más importantes es la recolección de la evidencia, también conocido como Adquisición Forense, ya que, si al momento de tomar la evidencia no se toman los recaudos correspondientes puede echarse a perder todo el análisis posterior. Es muy importante recalcar este punto debido a que la alteración de la evidencia llevará a la invalidez de toda la investigación.

Un punto a considerar al momento de realizar las copias bit a bit es que necesitaremos de tiempo, ya que, es un proceso que suele demandar varias horas.

En nuestro caso de estudio, trabajaremos con la distribución de DEFT 8.2, la cual dispone de todas las herramientas necesarias para realizar la toma de evidencia. Para la misma utilizaremos una herramienta muy sencilla y útil a la vez: dd.

Sin embargo, daremos un paseo por un listado de buenas prácticas que son recomendables realizar previo a la recolección de la evidencia.

**Adquisición física** Se entiende por adquisición física a la adquisición forense de la capacidad absoluta de un medio de almacenamiento. Qué quiere decir esto? Se refiere a que si nuestro disco es de 1TB, se realizará la copia del TB completo.

**Adquisición lógica** En el caso de la adquisición lógica, se adquiere por volúmen lógico, por partición. Esto quiere decir que si nuestro disco es de 1TB pero dentro tenemos una partición de 100GB podríamos únicamente realizar la copia bit a bit solo de esos 100GB. Pero, como se imaginarán, estaríamos descartando datos que podrían ayudar a la causa.

**Adquisición directa** Se llama Adquisición Directa cuando se extrae el medio de almacenamiento y se conecta al equipo de analista forense con el fin de realizar su copia bit a bit.

**Adquisición indirecta** En el caso de la adquisición Indirecta a la adquisición forense realizada por medio de un SW utilizando la red como medio de transmisión para almacenar la copia en un equipo remoto. En este caso deben tener en cuenta que si el proceso de copia bit a bit es largo, hacerlo por la red demandará de mucho más tiempo.

**Adquisición por hardware** Como supondrán, en este caso nos referimos a realizar la adquisición por un dispositivo que se encuentra diseñado para realizar copias forenses. Los mismos, por lo general, traen un bloqueador de escritura para evitar contaminar la evidencia.

**Adquisición por Software** En este caso, se utilizará para realizar la adquisición software confeccionado para llevar a cabo la copia bit a bit. En este caso, tenemos que preocuparnos de que el disco no se monte con permisos de escritura, ya que, si esto sucede estaríamos contaminando la evidencia. Con estas herramientas estaremos trabajando durante esta clase.

**Adquisición por red** En este caso, se realizará la adquisición por red, es decir, se realizará la copia bit a bit de un equipo remoto a un equipo local. En este caso, se deberá tener en cuenta que la red no esté saturada, ya que, si esto sucede, la copia se verá afectada.

<a id="seg32"></a>

### **El informe pericial informatico**

[Volver al indice](#seg-base)

La pericia se dirige a quienes no son especialistas por eso debe mantener un lenguaje claro para ser entendido por cualquiera.

- Debe iniciarle con los datos objetivos (nombre del perito, domicilio, teléfono, carátula del expediente y su número, nombre del tribunal al que se dirige, etc.
- Copia de los puntos de pericia que fueron encomendados.
- La descripción pormenorizada del objeto de estudio y de las medidas realizadas estableciendo día y hora de inicio y duración de la medida.
- La metodología empleada en la pericia, los elementos utilizados, los resguardos y el procedimiento de conservación.
- El análisis efectuado.
- Las conclusiones en forma de respuesta a los puntos de pericia ordenados.
- Toda aquella información que el perito considere conveniente para el esclarecimiento del caso. Puede ser explicaciones adicionales, nuevos elementos que el perito considere relevantes, etc.