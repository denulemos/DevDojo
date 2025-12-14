---
id: seguridad
title: 🔒 Seguridad
---

### Ciberamenazas actuales

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

---

### ¿Cuáles son algunas medidas comunes contra los ataques?

* Restringir el acceso a la base de datos: No dejarla expuesta en la red para que cualquiera pueda conectarse. Recomendable tener una lista de IPs u origenes que pueden conectarse a la misma.
* Guardar de forma segura informacion sensible: No guardar en texto plano informacion sensible por si la BD se ve comprometida. Un ejemplo son las contraseñas, Se recomienda aplicar Hashing con algoritmos especializados.
* Guardar configuracion en variables de entorno: Como conexiones a bases de datos, keys de servicios, etc.. Que varíe dependiendo del ambiente que estemos usando
* Asegurar las rutas de la API: Alguien puede intentar con Postman usar nuestra API salteandose validaciones de seguridad. El endpoint deberia validar la autenticacion (token que expire) y la autorizacion (que esta persona tiene los permisos para acceder a esta API, estar autenticado no signfica estar autorizado)
* Validar del lado de Servidor y de Cliente idealmente: No asumir que los datos vienen del cliente y que este ya los valido. Se deberia validar tanto en cliente como en servidor.
* No guardar informacion sensible del lado del cliente: No guardar informacion sensible en cookies o Local Storage ya que son almacenamientos de facil acceso.
* **Honeypot** Es un dispositivo destinado a ser atacado para estudiar el comportamiento de los atacantes o desviar su atención.

---

### Modalidades comunes de ataques

- **Black Box (Blind):** Security Tester, no cuenta con info sobre el objetivo
- **Double Black Box (Double Blind):** El cliente no sabe nada sobre el test que hará, cómo ni cuándo
- **White Box:** El ST sabe todo sobre el objetivo, la forma, etc..
- **Gray Box:** Internal Testing, examina el nivel de acceso desde la red interna, solo sabe info parcial sobre los objetivos puestos por el cliente
- **Double Gray Box:** El cliente sabe que tipo de test se va a hacer, pero no como ni cuando.

---

### Etapas en un proceso de hacking

(Exploración de un sistema, Explotación de las vulnerabilidades, Corrupción del Sistema, Búsqueda de Vulnerabilidades y Eliminación de pruebas)

- **Reconocimiento** Recolectar info sobre la víctima, Riesgo Moderado
- **Escaneo** Con la información del reconocimiento, busco vulnerabilidades, Riesgo alto
- **Obtener Acceso** Explotar las vulnerabilidades, esto ya seria una violacion de la ley, Riesgo muy alto
- **Mantener el acceso** Una vez dentro, buscar el reingreso al mismo sin riesgos
- **Eliminar rastros** Eliminar evidencia y evitar acciones legales

---

### Ataques internos

Muchos ataques son desde dentro de la misma organización, se infiltran o hablan con empleados para obtener información sobre la víctima/empresa

Pueden infiltrar un pendrive con una etiqueta engañosa para que sea usado por algún empleado, el famoso **Rubber Ducky**

- **Tailgating:** Acceder a una área restringida sin permiso por credenciales falsas o usando la de otra persona
- **Piggybacking:** Persona autorizada da acceso a otra persona no autorizada
- **Eavesdropping:** Escucha, o ve cosas privadas sin permiso.

**Contramedidas:** Control de acceso, mínimo privilegio sí no es necesario, separación de tareas, política legal, etc...

---

### Tipos de Ingenierías sociales

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

---

### Triada CIA

**Confidencialidad:** Solo accede a la info gente autorizada

**Autenticidad:** Quien dice ser es verdadero

**Integridad:** Solo usuarios autorizados pueden modificar la info de manera controlada

**Disponibilidad:** El poder acceder a la info por usuarios autorizados sólo cuando sea necesario (por ejemplo, limite de horario)

**El no repudio:** Probar que un evento o una acción fue realizada por alguien o algo, y que ese alguien o algo no pueda "negarlo", esto es más para cuando hablamos de cosas como firma digital, etc..

**Triada de la seguridad informática:** No repudio, Autenticidad, Responsabilidad y Fiabilidad.

---

### Intrusion Detection System

- Es un sistema de detección de intrusiones es un componente que inspecciona los datos de una red o equipo en busca de elementos sospechosos
- Recopilar info para analizar y correlacionar
- Sus elementos básicos son: Sensor, consola y un protocolo de comunicación entre ambos
- Su comportamiento en las redes influye el sniffing de paquetes
- Si detecta un posible ataque, manda una alarma

---

### Indicadores de intrusión

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

---

### Tipos de Intrusion Detection System (IDS)

- **NIDS (Network IDS)**: Elemento de red que inspecciona el tráfico de la misma.
- **HIDS (Host IDS)**: Software que inspecciona los eventos dentro del marco de un sistema operativo.
- **Monitor Logs**: Correlaciona y analiza los logs de sistemas y aplicaciones.
- **Verificador Integridad:** Chequea la integridad de archivos de un sistema

---

### Firewall

- Un Firewall divide una red segura de una red insegura, normalmente una privada de una publica
- Su función principal es examinar los paquetes en busca de coincidencia con las reglas definidas.
- El filtrado es en sentido entrante y saliente. También es por dirección de Origen / Destino, puerto Origen / Destino, protocolo de capa superior y por estado de conexión
- También puede crear logs y generar alarmas
- Toma acciones en base a cierto criterio y acepta o rechaza los paquetes

El firewall **NO** protege conexiones que NO pasen por el Firewall, no protege contra el Malware, no protege contra acciones internas y no protege contra ataques de ingeniería social

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

---

### Criptografía

- Técnica que protege documentos y datos
- Uso de cifras/códigos para ocultar cierta información para que sea decodificada por quien pueda (y deba) hacerlo
- Es una rama de las matemáticas y de la informática en cierta forma
- Usos: Correo electrónico, E-commerce, Servicios web (HTTPS) y Networking

**Los elementos básicos de un sistema criptográfico son:** Criptograma, Texto Claro y Algoritmo de Cifrado

---

### Función Hash

Una función hash es un algoritmo que toma una entrada (como un texto o archivo) y genera una cadena alfanumérica de longitud fija, llamada hash, que representa un resumen único de esa información. Es prácticamente imposible obtener la entrada original a partir del hash (es unidireccional).

Las funciones hash se usan para verificar la integridad de los datos: si los datos cambian, el hash también cambia. Son fundamentales en firmas digitales, blockchain y almacenamiento seguro de contraseñas.

Características principales:
- Fácil de calcular.
- Unidireccional (no se puede revertir).
- El resultado siempre tiene la misma longitud.
- Un pequeño cambio en la entrada produce un hash completamente diferente.

Ejemplos de algoritmos hash: MD5, SHA-1, SHA-256.

---

### Requisitos de un Cripto sistema

- Integridad, confidencialidad y no repudio
- El algoritmo debe ser rápido y fiable, no debe haber retardo entre el cifrado y descifrado
- No debe ser posible contar con una clave para deshashearla
- Un esquema de cifrado es computacionalmente inseguro sí el texto cifrado generado cumple El costo de romper el cifrado es bajo y la información está dentro de la vida útil

---

### Cifrado Simétrico

Se descifra con una misma clave (Clave secreta), el emisor se lo tiene que "pasar" al receptor, lo cual significa una vulnerabilidad porque si son poco cuidadosos, cualquiera podría obtener esa clave y obtener la información privada. Es un proceso rápido. Que la clave sea muy segura es muy importante. También se le dice de clave privada porque es una sola clave. Con este sistema de clave pública se hizo SSH luego, que es una manera de establecer una comunicación segura entre páginas webs (servidores) y clientes.

Las debilidades del Cifrado simetrico son..

- Debilidades de clave única
- Mala gestión de claves
- Criptosistemas asimétricos
- Lo que se cifra con una clave se descifra con otra clave

---

### Cifrado Asimétrico

- También se le dice de **clave pública**.
- Hay 2 claves, una para cifrar y otra para descifrar.
- Tenemos que tener cuidado de que la clave pública no dé lugar a que se adivine de cierta manera a la clave privada. Lo ideal es que se descifra con la clave privada, es decir, una que tenga el receptor, es como tener una cuenta que no puedo resolver si no tengo los números para saber qué es lo que tengo que sumar.
- Sí quiero darle confidencialidad a un documento, y que lo vea solo el destinatario, cifrar el documento con la **clave pública** del destinatario
- Está pensado para pasar por lugares poco seguros, es por eso que se considera un sistema menos vulnerable.
- Hay 3 tipos de cifrado en este tipo de cifrado, RSA (La seguridad de este algoritmo radica en el problema de la factorización de números enteros (números primos grandes), DSA, edDSA y ECDSA (El sistema está basado en curvas elípticas el cual emplea puntos sobre las curvas para la generación del par de claves).

---

### Ataque de fuerza bruta

Un ataque de fuerza bruta es cuando un atacante prueba todas las combinaciones posibles de contraseñas o claves hasta encontrar la correcta. Es como si intentaras abrir una cerradura probando todas las llaves que existen, una por una, hasta que alguna funcione. Es un método lento, pero puede funcionar si la contraseña es corta o fácil de adivinar. Por eso es importante usar contraseñas largas y complejas.

---

### Phishing y como prevenirlo

El **phishing** es una técnica de engaño donde un atacante se hace pasar por una persona o empresa de confianza (por ejemplo, tu banco o una red social) para robarte información personal, como contraseñas, números de tarjeta o datos bancarios. Normalmente, lo hacen enviando correos electrónicos, mensajes o creando páginas web falsas que parecen reales.

**¿Cómo prevenirlo?**
- No hagas clic en enlaces sospechosos ni descargues archivos de correos o mensajes que no esperabas.
- Verifica siempre la dirección del remitente y la URL de la página web antes de ingresar tus datos.
- Usa autenticación en dos pasos siempre que puedas.
- Si tienes dudas, contacta directamente a la empresa o persona por otro medio.
- Mantén actualizado tu navegador y antivirus.

---

### Mejores prácticas de seguridad en desarrollo web

- **Revisá y limpiá todo lo que el usuario escribe:** No te fíes de los datos que llegan de formularios o entradas. Siempre verificá y limpiá esa info para evitar problemas como inyección de código o scripts maliciosos.
- **Usá HTTPS:** Así la información viaja segura y cifrada entre el usuario y tu sitio, evitando que alguien la intercepte.
- **Controlá quién entra y qué puede hacer:** Implementá sistemas de inicio de sesión y permisos seguros, como OAuth o JWT, para que solo las personas correctas accedan a lo que deben.
- **Protegé las contraseñas:** Nunca guardes contraseñas tal cual. Usá métodos de hash y “sal” (como bcrypt) para que estén seguras aunque alguien acceda a la base de datos.
- **Mantené todo actualizado:** Actualizá tus librerías y herramientas seguido. Muchas vulnerabilidades se arreglan en nuevas versiones.
- **Hacé revisiones de seguridad:** Cada tanto, revisá tu aplicación buscando posibles fallos o pedile a alguien que intente encontrar errores de seguridad.
- **Poné límites a los datos sensibles:** No muestres ni guardes más información de la necesaria y usá cifrado para proteger datos importantes.
- **Monitoreá tu aplicación:** Llevá un registro de lo que pasa en tu app para detectar comportamientos raros o sospechosos.
- **Capacitá a tu equipo:** Asegurate de que todos conozcan las buenas prácticas de seguridad y estén atentos a posibles amenazas.

---

### OWASP Top 10

OWASP (Open Web Application Security Project) es una organización sin fines de lucro que se dedica a mejorar la seguridad del software. Proveen recursos, herramientas y guías para ayudar a desarrolladores y empresas a crear aplicaciones web más seguras.

Uno de sus recursos más conocidos es el "OWASP Top Ten", que es una lista de las diez vulnerabilidades de seguridad más críticas en aplicaciones web. Esta lista ayuda a los desarrolladores a entender y priorizar los riesgos de seguridad que deben abordar en sus proyectos.

OWASP es importante porque:
- Promueve buenas prácticas de seguridad en el desarrollo de software.
- Proporciona herramientas y recursos gratuitos para mejorar la seguridad.
- Ayuda a crear conciencia sobre la importancia de la seguridad en el desarrollo web.
- Facilita la colaboración entre profesionales de la seguridad y desarrolladores para enfrentar amenazas comunes.

El **OWASP Top Ten** es una lista de las diez vulnerabilidades más críticas en aplicaciones web. La versión 2021 incluye:

1. **Broken Access Control:** Fallas en la restricción de lo que los usuarios pueden ver o hacer.
2. **Cryptographic Failures:** Problemas en la protección de datos sensibles, como cifrado débil o mal implementado.
3. **Injection:** Inyección de código malicioso (por ejemplo, SQL, NoSQL, OS, LDAP) a través de entradas no validadas.
4. **Insecure Design:** Falta de controles de seguridad en el diseño de la aplicación.
5. **Security Misconfiguration:** Configuraciones inseguras o por defecto en servidores, bases de datos o frameworks.
6. **Vulnerable and Outdated Components:** Uso de librerías, frameworks o componentes con vulnerabilidades conocidas.
7. **Identification and Authentication Failures:** Problemas en la autenticación o gestión de identidades (por ejemplo, contraseñas débiles).
8. **Software and Data Integrity Failures:** Falta de verificación de integridad en actualizaciones, datos o software de terceros.
9. **Security Logging and Monitoring Failures:** Falta de registros y monitoreo adecuados para detectar y responder a incidentes.
10. **Server-Side Request Forgery (SSRF):** El servidor realiza solicitudes no autorizadas a otros servicios por manipulación del atacante.

Más información y detalles en: [OWASP Top Ten 2021](https://owasp.org/Top10/)