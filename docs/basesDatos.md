# 🗄️ Bases de Datos

## **SQL**

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

## **Not Only SQL - NoSQL**

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

## Elementos de una base de datos

- **Tablas**: Contienen la información
- **Vistas**: Parecidas a la tabla, son para consultas, más rápidas
- **Índices**: Uno o más columnas de una tabla para encontrar la data más rápido, es como el índice de un libro
- **Triggers**: Disparadores que ejecutan código de SQL cuando se inserta, borra o se updatea un campo (CRUD (Create, Read, Update, Delete))
- **Procedures**: Pedazos de código SQL que se ejecutan
- **Constraints**: Previenen inconsistencia de datos en una columna
- **Reglas:** Se especifican valores válidos para ser insertados en una tabla o columna.

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

## Índices

Imagina que tienes una guía telefónica y quieres encontrar el número de "Denu Lemon":

- Sin índice: Tendrías que revisar página por página hasta encontrar el nombre (esto sería muy lento)
- Con índice: Vas directamente a la sección "L" y encuentras rápidamente a "Lemon"

En una base de datos funciona igual:
- Sin índice: La base de datos tiene que revisar TODA la tabla para encontrar lo que buscas
- Con índice: La base de datos sabe exactamente dónde buscar la información

Ventajas:
- Hace las búsquedas muchísimo más rápidas
- Ayuda a encontrar datos duplicados fácilmente

Desventajas:
- Ocupa más espacio en el disco duro
- Hace que agregar o modificar datos sea un poco más lento (porque tiene que actualizar también el índice)

¿Cuándo usarlos?
- Cuando tienes muchos datos en una tabla
- En columnas que usas frecuentemente para buscar información
- En columnas que necesitan tener valores únicos

---

## Normalización

Normalización es el proceso de ordenar una base de datos para que no haya datos repetidos, sea más fácil de mantener y evites errores raros cuando guardás, editás o borrás información.

Normalizar = dividir la información en tablas lógicas + crear relaciones correctas.

Objetivos principales:

- Evitar datos duplicados.
- Evitar inconsistencias (que un dato cambie en un lado pero no en otro).
- Hacer que la base sea más fácil de modificar.
- Asegurar integridad de la info.
- Evitar redundancia
- Evitar problemas de actualización
- Asegurar la integridad
- Asegurar que no hayan 2 registros iguales
- Todos los datos de una determinada propiedad
deben ser del mismo tipo.
- Ejemplo “Nacimiento” debe tener una fecha.

Hay distintos grados de normalización:

- Primera forma normal
- Segunda forma normal
- Tercera forma normal

Cada una de estas formas normales tiene sus reglas.
Una base de datos no necesita estar siempre en la tercera forma normal; puede ocurrir que, para resolver problemas complejos, no se requiera llevar algún dato hasta esa forma.

---
