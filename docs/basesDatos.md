# 🗄️ Bases de Datos

## Elementos de una base de datos

- **Tablas**: Contienen la información
- **Vistas**: Parecidas a la tabla, son para consultas, más rápidas
- **Índices**: Uno o más columnas de una tabla para encontrar la data más rápido, es como el índice de un libro
- **Triggers**: Disparadores que ejecutan código de SQL cuando se inserta, borra o se updatea un campo (CRUD (Create, Read, Update, Delete))
- **Procedures**: Pedazos de código SQL que se ejecutan
- **Constraints**: Previenen inconsistencia de datos en una columna
- **Reglas:** Se especifican valores válidos para ser insertados en una tabla o columna.

## **SQL** {#sql}

Se centran en estructurar los datos en tablas relacionadas entre si. 

- MySQL
- PostgreSQL
- SQL Server
- Oracle Database

Se basan en el lenguaje estructurado de consultas **SQL**, el cual permite realizar operaciones complejas con facilidad y consultar los datos de diferentes maneras.

Cada herramienta posee pequeñas diferencias en su sintaxis y funcionalidades, pero en esencia se basan en SQL. No existe un único estándar de SQL.

El esquema de datos es predefinido, es decir, en una tabla que acepta nombres y edades, no podremos guardar direcciones, para esto debemos modificar el schema, esto hace que nuestros datos sean **consistentes** pero menos flexibles. Ademas, se **evita la duplicidad de los datos** mediante la referencia por IDs o Keys.

| Beneficios | Desventajas      |
| ------ | ---------- |
| Es un sistema robusto y con muchos anios de uso. ACID asegura la fiabilidad y consistencia total    | Estructura poco flexible ya que esta predefinida      |
|   Se puede usar SQL, un lenguaje muy potente para realizar consultas complejas | Es mas dificil de escalar  que las bases de datos no relacionales    |
| Almacenamiento eficiente, se reduce la duplicidad de la informacion    | Lecturas mas lentas dependiendo de los joins que se hagan en la consulta      |
| Estructura natural para los humanos, es intuitivo incluso para personas fuera del mundo de la informatica | ACID puede hacer que nuestras transacciones sean ligeramente mas lentas     |

Se deben usar cuando:

- Tenemos una estructura de datos bien definida
- En casos donde las garantias de las transacciones ACID sean totalmente necesarias
- Si queremos realizar consultas complejas sobre nuestros datos

### ORM

Si bien la estructura de las bases de datos SQL es muy intuitiva para los humanos, es todo lo contrario para los programadores, ya que en nuestro codigo trabajamos con objetos, listas, grafos, etc.

Por esto, es que existen las herramientas **ORM (Object-Relational Mapping)**, las cuales nos permiten trabajar con las bases de datos SQL como si fueran objetos en nuestro codigo.

Un ORM puede realizar un **mapeo de datos** o `mapping`. Por ejemplo, transformar una fila de una tabla en un objeto. O transformar una coleccion de filas en una lista de objetos.

### JOINS

Supongamos tenemos una tabla `user` con `id`, `email` y `username`, y otra tabla `post` con `id`, `title` y `userId` ya que nuestra aplicacion se trata de un foro.

| id | email | username |
| --- | --- | --- |
| 1 | [EMAIL_ADDRESS] | denisse |
| 2 | [EMAIL_ADDRESS] | dev-denisse |
| 3 | [EMAIL_ADDRESS] | denisse-developer |

| id | title | userId |
| --- | --- | --- |
| 1 | post1 | 1 |
| 2 | post2 | 2 |
| 3 | post3 | 3 |

Como podemos ver, para **evitar la duplicidad de la informacion** la tabla `post` solo tiene el ID del usuario como referencia, para saber a cual usuario pertenece el post. A esta tecnica se le conoce como `JOIN`, ya que estamos juntando la informacion de dos filas de dos tablas distintas para devolver la informacion completa.

- Ralentizan las lecturas dependiendo del numero de joins que se hagan en una consulta, y en la cantidad de registros en las tablas. 

```sql
  SELECT u.username, p.title FROM user u JOIN post p ON u.id = p.userId;
```

### Inner Join

Solo muestra lo que tiene en comun A y B

```sql
SELECT loginID
FROM tabla1 AS e
   INNER JOIN Ventas.vendedor AS s
   ON e.idnegocio = s.idnegocio
```

(El id negocio debe estar en tabla a y b)

### Outer Join (Con left y right join)

El left Join, por ejemplo, con dos tablas A y B, devuelve todo lo de la tabla A y lo que este también en la tabla AB, sí no quiero esto último, agrego un WHERE tabla_b IS NULL . El right join es lo mismo pero con B. El full Join toma absolutamente todo de ambas tablas, agregando el NULL anterior con ambas tablas, ahi es donde se muestran ambas tablas menos lo que tienen en común.

```sql
SELECT p.nombre, pr.productoid
FROM produccion.producto p
LEFT OUTER JOIN
produccion.producto pr
ON p.productoid = pr.productoid
```

### Self Join

Un Join que referencia a la misma tabla.

```sql
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID --No se repiten ID
AND A.City <> B.City --Esta linea hace que no se repitan ciudades
ORDER BY A.City;
```

### UNION

Con los set de datos finales se trata de unificar a un set único

Elimina los duplicados entre ambos conjuntos de entrada (**ES UN DISTINCT IMPLÍCITO**).

```sql
SELECT * a
UNIÓN ALL
Select * b
```

### TOP

Top de los resultados de una query, es decir, las X primeras (En el ejemplo, 10) de un SELECT

```sql
SELECT TOP (10)
nombres, apellidos
FROM tabla1
```

### EXCEPT

De un set de datos se saca los que no estan en el 2do set de datos a relacionar, todo lo de a de tabla1, menos lo que este también en b tabla2

Retorna filas del conjunto de la izquierda que no están incluidas en el conjunto de la derecha entrada (**ES UN DISTINCT IMPLÍCITO**)

```sql
SELECT a
FROM tabla1
EXCEPT
SELECT b
FROM tabla2
```


### ACID

Son un conjunto de propiedads que garantizan la fiabilidad de las transacciones en bases de datos relacionales.

- **Atomicidad (Atomicity)**: Las transacciones son indivisibles, o se ejecutan todas o ninguna. Una transacción puede implicar una o varias operaciones. Por ejemplo, una transferencia bancaria implica la resta de dinero de una cuenta y la suma a otra. Si alguna de estas operaciones falla, la transacción se revierte a su estado original (`rollback`).
- **Consistencia (Consistency)**: Si partimos de un estado consistente antes de ejecutar una transaccion, va a seguir consistente cuando se finalice, haya terminado satisactoriamente o no. 
- **Aislamiento (Isolation)**: Las transacciones se ejecutan de forma independiente. Una transaccion no se vera afectada por otras transacciones concurrentes.
- **Durabilidad (Durability)**: Las transacciones son permanentes, los efectos de las transacciones confirmadas se mantendran en la base de datos.


### Programación declarativa

La programación declarativa se concentra en qué cosas hay que hacer y no necesariamente en cómo hacerlas. Un ejemplo es SQL, donde se le dice a la base de datos qué datos queremos, pero no cómo obtenerlos.

### Performance

- Cada índice creado en la tabla incrementa el tiempo en que se llevan a cabo los insert, updates o deletes, por lo que el número de índices en una tabla no deben de ser muchos. Use sólo los índices necesarios, para PK y para FK, y según el uso de los datos (WHERE, ORDER BY, GROUP BY). Si la tabla es de solo lectura entonces el número de índices se puede incrementar.
- Mantén los índices lo más pequeños que puedas; al reducirlos, disminuye la cantidad de I/O necesaria para leerlos.
- Trata de que los índices creados sean sobre campos de tipo enteros y no de carácter.
- Si se crean índices compuestos el orden en que se creen es muy importante. Trata de colocar primero la columna que sea más selectiva, es decir donde no se repitan mucho los valores y después la menos selectiva. También debes de tomar en consideración la forma en que escribes tus queries (tener en cuenta el orden de ejecución del query).
- Los índices clustered funcionan mucho mejor que los nonclustered si se necesitan hacer consultas sobre un rango de valores o se necesitan ordenar datos por medio de GROUP BY o ORDER BY.
- Para tablas que son modificadas con mucha frecuencia (UPDATE, INSERT, DELETE) es recomendable usar un FILLFACTOR diferente de 0 o 100. Relacionado al espacio en disco reservado para almacenar el índice
- No utilizar SELECT * en las consultas, siempre se deben de definir las columnas que se quieren extraer, esto reduce el I/O mejorando el performance. Indicar sólo las columnas necesarias.
- Evitar el uso de cursores, es mejor usar loops con sentencias WHILE, es más rápido, pero para poder hacer uso de esto es necesario tener definida en la tabla una clave que identifique al registro (primary key o unique).

```sql
--Usando cursores

declare @bd varchar(50)
DECLARE bdcursor cursor for
select name from master..sysdatabases where name not in ('master','tempdb','msdb')
open bdcursor
fetch bdcursor into @bd
WHILE @@FETCH_STATUS = 0
BEGIN
print 'Base de Datos: ' + @bd
fetch bdcursor into @bd
END
DEALLOCATE bdcursor


--Sin cursores
DECLARE @dbName VARCHAR(50)
SET @dbName = ''

WHILE @dbName IS NOT NULL
BEGIN
SELECT @dbName = MIN( Name )
FROM master..sysdatabases
WHERE name not in ('master','tempdb','msdb') and Name > @dbName

IF @dbName IS NOT NULL
BEGIN
print 'Base de Datos: ' + @dbName
END
END
```

- Evitar el uso de tablas temporales ya que generan más IO, considerar primero el uso de queries más avanzados, vistas, como tipo de dato tabla, tablas derivadas, cte.

```sql
-- Tipo de dato tabla
DECLARE @TableVar TABLE
  (Cola int PRIMARY KEY,
   Colb char(3))

INSERT INTO @TableVar VALUES (1, 'abc')
INSERT INTO @TableVar VALUES (2, 'def')

SELECT * FROM @TableVar
GO

-- Tabla derivada
SELECT ST.stor_id, ST.stor_name
FROM stores AS ST,
     (SELECT stor_id, COUNT(DISTINCT title_id) AS title_count
      FROM sales
      GROUP BY stor_id
     ) AS SA
WHERE ST.stor_id = SA.stor_id
AND SA.title_count = (SELECT COUNT(*) FROM titles)
```

- Evitar el uso de `%` al inicio de la palabra cuando se busca por medio de un LIKE ya que provoca un index scan, el cual elimina el propósito del índice, en cambio el segundo ejemplo realiza un index scan. Evite en las búsquedas usar operadores del tipo `<>` y `NOT` ya que resultan en table scan e index scan (scan=recorre entrada por entrada tanto en tablas como en índices).

```sql
SELECT LocationID FROM Locations WHERE Specialities LIKE '%pples'
SELECT LocationID FROM Locations WHERE Specialities LIKE 'A%s'
```

- Hacer uso de SHOWPLAN_TEXT o SHOWPLAN_ALL para analizar los queries. Alternativamente puede usar la interfaz gráfica para mostrar el plan de ejecución estimado (Query analizar).

```sql
USE AdventureWorks;
GO
SET SHOWPLAN_TEXT ON;
GO
SELECT *
FROM Production.Product
WHERE ProductID = 905;
GO
SET SHOWPLAN_TEXT OFF;
GO
```

- Utilizar SET NOCOUNT ON en los sp’s
- No poner a los sps el prefijo sp_, ya que las búsquedas se llevan a cabo primero en master. La base master tiene los sp del motor de base de datos entre otras cosas.
- Tratar de no hacer uso de campos tipo text o ntext para almacenar datos largos (text y ntext están deprecados), ya que no se pueden realizar updates directamente sobre ellos o hacer inserts. Para esto se debe hacer uso de READTEXT, WRITETEXT y UPDATETEXT. También SQL Server tiene demasiados BUGS para replicar tipos de datos de este tipo. Por lo que si no se tiene piensa guardar un dato mayor a 8K utilice char(8000) o varchar(8000) o varchar(max).
- Tratar de no usar tipos de datos binary o image dentro de la base de datos. En su caso almacenar la ruta de los archivos ya que tiene mucho mejor performance.
- Siempre en las sentencias de insert colocar las columnas a las que se va a insertar.

```sql
CREATE TABLE EuropeanCountries
(
CountryID int PRIMARY KEY,
CountryName varchar(25)
)
-- Here's an INSERT statement without a column list , that works perfectly:
INSERT INTO EuropeanCountries
VALUES (1, 'Ireland')

-- Now, let's add a new column to this table:

ALTER TABLE EuropeanCountries
ADD EuroSupport bit

-- Server: Msg 213, Level 16, State 4, Line 1
-- Insert Error: Column name or number of supplied values does not match table definition.

-- Esto se evita de la siguiente manera
INSERT INTO EuropeanCountries
(CountryID, CountryName)
VALUES (1, 'England')
```

- Es preferible usar constraints en la definición de las tablas para mantener la integridad referencial en vez de usar triggers ya que son más rápidos. Solo usar triggers para auditar, validaciones que no se puedan hacer con constraints.
- Siempre acceder las tablas en el mismo orden en todos los Store Proceedures y triggers, de esta manera evitamos generar deadlocks asi como también mantener las transacciones lo más pequeñas posibles. También hacer que las aplicaciones reintenten la transacción en caso de generarse un deadlock (error 1205).
- No hacer llamado de funciones repetitivamente en los Store Proceedures o triggers, en lugar de eso hacer el llamado una sola vez y guardarlo en alguna variable
- También tener en cuenta el consumo de CPU que generan tus consultas o queries.

## **Not Only SQL - NoSQL** {#nosql}

Hay de diversos tipos:

- **Almacenamiento documentales**: almacenan los datos en documentos como JSON - **MongoDB**, **Couchbase**
- **Clave Valor**: almacenan los datos en forma de clave valor - **Redis**, **Memcached**, **DynamoDB**
- **Columnar**: almacenan los datos en forma de columnas - **Cassandra**, **ScyllaDB**
- **Orientadas a grafos**: almacenan los datos en forma de grafos - **Neo4j**
- **Series Temporales**: almacenan los datos en forma de series temporales - **InfluxDB**, **TimescaleDB**

- No hay un esquema predefinido, no necesitamos tener la estructura de los datos por antelacion, es completamente flexible. 
- No es necesario usar un ORM para trabajar con estas bases de datos ya que en algunos casos ya poseen estructuras en listas, objetos, etc..
- Pocos soportan ACID

| Ventajas | Desventajas |
| --- | --- |
| **Flexibilidad** : No hay un esquema predefinido, no necesitamos tener la estructura de los datos por antelacion, es completamente flexible. | **Inconsistencia** : Los datos no son consistentes en todo momento, pueden variar dependiendo del nodo que se consulte. Falta de transacciones ACID completas |
| **Escalabilidad y rendimiento** : Gracias al modelo BASE se sacrifica consistencia para ganar rendimiento | **Complejidad** : Es más complejo de gestionar que una base de datos relacional, no hay un esquema predefinido, etc.. La curva de aprendizaje es mas pronunciada, ya que es un sistema menos maduro que SQL |
| **Disponibilidad** : Debe estar disponible para lecturas y escrituras incluso en fallos parciales. BASE asegura esto.| **Seguridad** : Es más dificil de asegurar que una base de datos relacional, no hay un esquema predefinido, etc.. |

Se debe usar cuando:

- Tenemos sistemas que carecen de una estructura de datos fija o bien definida
- Sistemas donde la consistencia total no es un problema, y cuando no necesitamos ACID
- Cuando se necesita mayor performance en las lecturas

### BASE

- **Basically Available**: Disponible en la mayoria de los casos, debe estar disponible para lecturas y escrituras incluso en fallos parciales. No asegura la consistencia de los datos, pero si la consistencia eventual.
- **Soft state**: Se permite tener informacion en estados intermedios o transitorios, eventualmente llegaran a un estado consistente.
- **Eventual consistency**: Eventualmente todos los nodos convergen al mismo estado. Lecturas realizadas por distintos usuarios pueden tener distintos resultados.

---

## Elementos de Data Control Language (DCL)

- **GRANT**: Da permisos a un usuario
- **REVOKE**: Quita permisos a un usuario
- **DENY**: Niega permisos a un usuario
- **COMMIT**: Guarda los cambios hechos en la base de datos
- **ROLLBACK**: Revierte los cambios hechos en la base de datos
- **SAVEPOINT**: Crea un punto de guardado en una transacción para poder hacer rollback a ese punto específico
- **TRANSACTION**: Inicia una transacción
- **SET TRANSACTION**: Configura las propiedades de la transacción actual
- **LOCK**: Bloquea una tabla o fila para evitar que otros usuarios la modifiquen mientras se está trabajando en ella
- **UNLOCK**: Desbloquea una tabla o fila que fue bloqueada previamente
- **EXPLAIN**: Muestra el plan de ejecución de una consulta SQL para optimización
- **ANALYZE**: Recopila estadísticas sobre la distribución de datos en una tabla para ayudar al optimizador de consultas a tomar decisiones informadas
- **MERGE**: Combina datos de dos tablas en una sola tabla
- **CALL**: Invoca un procedimiento almacenado en la base de datos
- **DESCRIBE**: Muestra la estructura de una tabla, incluyendo sus columnas y tipos de datos
- **SHOW**: Muestra información sobre la base de datos, como tablas, vistas, índices, etc.
- **USE**: Cambia la base de datos actual en uso
- **SET**: Configura opciones de sesión para la base de datos
- **HELP**: Proporciona ayuda sobre comandos y funciones de la base de datos

---

## Lenguaje de manipulación de datos (DML)

Las sentencias de lenguaje de manipulación de datos (DML) son utilizadas para gestionar datos dentro de las bases de datos . Algunos ejemplos:

- `SELECT` - para obtener datos de una base de datos.
- `INSERT` - para insertar datos a una tabla.
- `UPDATE` - para modificar datos existentes dentro de una tabla.
- `DELETE` - elimina todos los registros de la tabla; no borra los espacios asignados a los registros.

---

## Lenguaje de definición de datos (DDL)

Las sentencias DDL se utilizan para crear y modificar la estructura de las tablas así como otros objetos de la base de datos.

- `CREATE` - para crear objetos en la base de datos.
- `ALTER` - modifica la estructura de la base de datos.
- `DROP `- borra objetos de la base de datos.
- `TRUNCATE` - elimina todos los registros de la tabla, incluyendo todos los espacios asignados a los registros. Además, reinicia los campos autonuméricos.

---

## Indices

Imagina que tienes una guía telefónica y quieres encontrar el número de "Denu Lemon":

- **Sin indice**: Tendrías que revisar página por página hasta encontrar el nombre (esto sería muy lento)
- **Con indice**: Vas directamente a la sección "L" y encuentras rápidamente a "Lemon"

En una base de datos funciona igual:

- **Sin indice**: La base de datos tiene que revisar TODA la tabla para encontrar lo que busca -> `full table scan`
- **Con indice**: La base de datos sabe exactamente dónde buscar la información -> `index scan`

Se almacenan en tablas Hash o B-Tree. Se recomienda indexar solo las columnas que se usan frecuentemente para buscar información. No se deben indexar todas las columnas.

| Ventajas | Desventajas |
|----------|-------------|
| Hace las búsquedas muchísimo más rápidas especialemente si se tienen muchos datos | Ocupa más espacio en el disco duro |
| Ayuda a encontrar datos duplicados fácilmente | Hace que agregar o modificar datos sea un poco más lento (porque tiene que actualizar también el índice) |

**¿Cuándo usarlos?**

- Cuando tienes muchos datos en una tabla
- En columnas que usas frecuentemente para buscar información
- En columnas que necesitan tener valores únicos

---

## Normalización

Normalización es el proceso de ordenar una base de datos para que no haya datos repetidos, sea más fácil de mantener y evites errores raros cuando guardás, editás o borrás información.

Normalizar = dividir la información en tablas lógicas + crear relaciones correctas.

Objetivos principales:

- Evitar datos duplicados.
- Evitar inconsistencias (que un dato cambie en un lado pero no en otro) y a minimiza la redundancia. Si modifiucamos el nombre de una profesion en la tabla original, debemos modificarlo en todas las filas donde se use. 
- Hacer que la base sea más fácil de modificar, pero no de leer, ya que al dividir la informacion en mas tablas, se nos hace mas necesario realizar mas `joins` para obtener la informacion completa, lo que hace que nuestras consultas sean mas lentas.
- Asegurar integridad de la info.

Hay distintos grados de normalización:

- **Primera forma normal**: Cada celda debe contener un solo valor, no un conjunto de valores

Esta tabla esta en la **primera forma normal** ya que cada celda tiene un solo valor.

| id | job_code | job_name | name | country_code | country |
| --- | --- | --- | --- | --- | --- |
| E1 | J1 | Developer | Daniel | US | United States |
| E1 | J2 | Manager | Daniel | US | United States |
| E2 | J2 | Developer | Ana | US | United States |

Con el ID del empleado podemos saber el nombre, pais y codigo de pais. Cada empleado puede tener multiples trabajos, como Daniel.

No se necesita el `job_code` para eso, **esta tabla no cumple con la segunda forma normal** ya que no dependen completamente de la PK. 

- **Segunda forma normal**: Cumplir con la primera, y no deben haber dependencias parciales. Todos los atributos no clave deben depender de la clave primaria (PK)

Debemos separar la tabla de empleados y profesiones en dos tablas distintas para cumplir con la segunda forma normal para que todos los campos dependan completamente de sus claves. **Como dado un codigo de pais se puede identificar el pais asociado, no cumple con la tercera forma normal**

| id |  name | country_code | country |
| --- |  --- | --- | --- |
| E1 |  Daniel | US | United States |
| E1 |  Daniel | US | United States |
| E2 |  Ana | US | United States |

| id | name | 
| --- | --- |
| J1 | Developer  |
| J2 | Manager  |
| J2 | Developer |

| employee_id | job_id  |
| --- | --- |
| E1 | J1 |
| E1 | J2 | 
| E2 | J2 | 

- **Tercera forma normal**: Debe cumplir con las 2 anteriores, y ademas un atributo no clave no debe depender de otro atributo no clave. Es decir, no debe haber dependencias transitivas.

Para que nuestras tablas anteriores cumplan con la tercera forma normal, debemos eliminar la columna `country` de la tabla de empleados, ya que dado un codigo de pais se puede identificar el pais asociado.


| id |  name | country_id | 
| --- |  --- | --- | 
| E1 |  Daniel | US |
| E1 |  Daniel | US | 
| E2 |  Ana | US | 

| id | name | 
| --- | --- |
| J1 | Developer  |
| J2 | Manager  |
| J2 | Developer |

| employee_id | job_id  |
| --- | --- |
| E1 | J1 |
| E1 | J2 | 
| E2 | J2 | 

| id | name  |
| --- | --- |
| ES | Spain |
| US | United States |


## Desnormalización

Se trata de realizar el proceso inverso a la Normalizacion, generalmente duplicando la informacion, reduciendo la consistencia y aumentando la redundancia, pero haciendo las lecturas mucho mas rapidas. 

Esto se realiza cuando vemos que hay consultas seguidas a unas tablas en particular, y si queremos mejorar la performance de estas consultas, la desnormalizacion es una buena opcion, ya que al tener la informacion duplicada, no necesitamos hacer joins para obtener la informacion completa, lo que hace que nuestras consultas sean mucho mas rapidas.

- Mas performance sacrificando consistencia, hay que actualizar los datos en multiples ubicaciones, lo que hace que sea mas propenso a errores, y a tener datos inconsistentes.
- Se hace uso de mayor espacio de almacenamiento, ya que se esta duplicando la informacion.
- Se debe aplicar cuando no podemos mejorar la performance con el agregado de indices u optimizando consultas existentes.

**Ejemplo normalizado**

| id | name | author_id | year |
| --- | --- | --- | --- |
| B1 | Book 1 | A1 | 2020 |
| B2 | Book 2 | A2 | 2021 |
| B3 | Book 3 | A1 | 2022 |

| id | name  |
| --- | --- |
| A1 | Author 1 |
| A2 | Author 2 |

**Ejemplo desnormalizado**

| id | name |author_id|  author_name | year |
| --- | --- | --- | --- | --- |
| B1 | Book 1 | A1 |  Author 1 | 2020 |
| B2 | Book 2 | A2 |  Author 2 | 2021 |
| B3 | Book 3 | A1 |  Author 1 | 2022 |

## Replicacion de datos

Es el proceso de copiar y mantener datos en múltiples ubicaciones para mejorar la disponibilidad, la tolerancia a fallos y el rendimiento de las consultas.

Si tengo un unico servidor de base de datos en un futuro habra un **cuello de botella** ya que:

- La cantidad de peticiones sera demasiado alto para poder ser procesado por un solo servidor -> **afecta rendimiento**
- Si este servidor cae, toda la base de datos quedara caida -> **afecta disponibilidad**

La replicacion de datos se hara en un **Modelo Master-Slave**:

- **Master**: Base de datos principal donde se realizan las operaciones de escritura (`INSERT`, `UPDATE`, `DELETE`), y este replica la informacion a todos los servidores **Slave**, se encarga de mantener la consistencia de los datos.
- **Slave**: Base de datos secundaria que recibe las actualizaciones del master y se utiliza principalmente para operaciones de lectura (`SELECT`).

El numero de servidores depende de la cantidad de lecturas y escrituras. Si se realizan mas lecturas que escrituras, habran mas servidores **Slave**.

- Si un servidor slave cae, no sucede nada, ya que el resto soportara su carga, si tengo uno solo, o todos los slave caen, las peticiones de lectura se redirigen al master, lo que puede afectar el rendimiento, pero no la disponibilidad.
- Si Master tiene problemas, el proceso es mas complejo. Un Slave sera ascendido a Master y lo reemplazara. Puede suceder que las replicas no esten 100% actualizadas, ocasionando un downtime mientras que la recuperacion de datos se realiza, y este servidor esta listo para ser Master. 

**Beneficios**:

- Mayor rendimiento, se reparte mas la carga.
- Mayor fiabilidad, si un servidor cae, el resto mantendran la informacion a salvo. 
- Mayor disponibilidad, si un servidor cae, el resto soportara su carga, ya que hay multiples servidores, **se elimina el unico punto de fallo**.

## Sharding (Particionado de datos)

Si tenemos un sismea con muchas escirturas, la replicacion de datos puede ser insuficiente. Esta tecnica divide la base de datos en partes mas pequeñas llamadas shards, cada shard es un subconjunto de los datos y se aloja en un servidor diferente. Cada shard es independiente y puede ser consultado de forma individual, lo que mejora el rendimiento y la escalabilidad del sistema.

- **Clave de Sharding - Partition Key**: Una o mas columnas que van a determinar como se va a distribuir la informacion entre los distintos shards. Es importante elegir una buena clave de sharding para evitar problemas de rendimiento y balanceo de carga.

**Ejemplo tabla sin sharding**

| id | username |
| --- | --- |
| 1 | user1 |
| 2 | user2 |
| 3 | user3 |
| 4 | user4 |
| 5 | user5 |
| 6 | user6 |
| .... | .... |
| 12 | user12 |

Imaginemos que queremos tener 3 shards distintos, y elegimos como clave de sharding el `id`, entonces la distribucion de los datos seria la siguiente:

| id  | username |
| --- | --- |
| 1 | user1 |
| 4 | user1 |
| 7 | user1 |
| 10 | user1 |

| id  | username |
| --- | --- |
| 2 | user2 |
| 5 | user2 |
| 8 | user2 |
| 11 | user2 |


| id  | username |
| --- | --- |
| 3 | user3 |
| 6 | user3 |
| 9 | user3 |
| 12 | user3 |

Cada tabla estara guardada en un servidor, y cada consulta se redirigira al shard correspondiente dependiendo de la clave de sharding.

- **Sharding basado en rango**: Se asignan a cada shard los datos generados en una linea de tiempo, por ejemplo, el shard 1 se encarga de los datos generados en el año 2020, el shard 2 se encarga de los datos generados en el año 2021, etc.. Este tipo de sharding puede generar problemas de balanceo de carga si hay un aumento repentino de datos en un rango de tiempo específico. **es eficiente para consultas de rango, aunque puede haber un desequilibrio de carga si un rango de tiempo tiene muchos datos.**
- **Sharding basado en hash**: Se aplica una función de hash a la clave de sharding para determinar a qué shard se asigna cada dato. Este tipo de sharding distribuye los datos de manera más uniforme entre los shards, **es eficiente para consultas de igualdad, pero no para consultas de rango.**
- **Sharding basado en listas**: Por ejemplo, separar por codigo de pais. Tambien puede causar **desequilibrio de tablas** si no se tiene un buen disenio.
- **Round Robin**: Se asigna cada nuevo dato al siguiente shard disponible de manera secuencial. Este tipo de sharding es fácil de implementar, pero puede generar problemas de rendimiento si hay un aumento repentino de datos en un shard específico. Ademas puede dar problemas de localizacion de datos, ya que no hay una clave de sharding clara.

**Desafios**

- **Resharding**: Si un shard se llena o se vuelve demasiado grande, es necesario redistribuir los datos entre los shards, lo que puede ser un proceso complejo y costoso en términos de tiempo y recursos. Esto se puede mitigar con el **Consistent Hashing**, que es una técnica que permite agregar o eliminar shards sin necesidad de redistribuir todos los datos, solo los datos que se encuentran en el shard afectado.
- **Celebrity - Hotspot**: Si unos datos son mas populares que otros, el shard que contiene esos datos puede recibir una cantidad desproporcionada de tráfico, lo que puede afectar el rendimiento del sistema. Esto se puede mitigar con técnicas de balanceo de carga y replicacion de datos. Puede que se necesiten estrategias de shard mas creativas, como basadas en popularidad. 
- **Realizar consultas**: Los Datos se distribuyen en distintos harsh, por lo que debemos obtener informacion de distintos nodos, lo que puede afectar el rendimiento de las consultas. Esto se puede mitigar con técnicas de caché y optimización de consultas.

## Teorema CAP

En un sistema distribuido de datos es imposible garantizar la **Consistencia, Disponibilidad y Tolerancia a Particiones** al mismo tiempo. Solo se pueden garantizar dos de estas propiedades, por lo que es necesario elegir cuáles son las más importantes para el sistema que se está diseñando.

- **Consistencia (Consistency)**: Todos los nodos ven la misma información al mismo tiempo. Si un dato se actualiza en un nodo, esa actualización se refleja inmediatamente en todos los demás nodos.
- **Disponibilidad (Availability)**: El sistema siempre responde a las solicitudes, incluso si algunos nodos están caídos. No hay un único punto de fallo, por lo que el sistema sigue funcionando aunque algunos nodos no estén disponibles, provocando que **clientes distintos vean informacion distinta**
- **Tolerancia a Particiones (Partition Tolerance)**: El sistema sigue funcionando incluso si hay una partición en la red que impide que algunos nodos se comuniquen entre sí. El sistema puede manejar la pérdida de comunicación entre nodos sin afectar su funcionamiento.

Solo se pueden garantizar dos de estas propiedades al mismo tiempo:

- **CA (Consistencia y Disponibilidad)**: El sistema garantiza que todos los nodos ven la misma información al mismo tiempo y siempre responde a las solicitudes, pero no puede manejar particiones en la red. Si hay una partición, el sistema puede volverse inconsistente o no disponible.
- **CP (Consistencia y Tolerancia a Particiones)**: El sistema garantiza que todos los nodos ven la misma información al mismo tiempo y puede manejar particiones en la red, pero no siempre responde a las solicitudes. Si hay una partición, el sistema puede volverse no disponible.
- **AP (Disponibilidad y Tolerancia a Particiones)**: El sistema siempre responde a las solicitudes y puede manejar particiones en la red, pero no garantiza que todos los nodos vean la misma información al mismo tiempo. Si hay una partición, el sistema puede volverse inconsistente.