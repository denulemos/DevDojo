# SQL

## **Cuáles son los elementos de una base de datos?**

- **Tablas: Contienen la información**
- **Vistas: Parecidas a la tabla, son para consultas, más rápidas**
- **Índices: Uno o más columnas de una tabla para encontrar la data más rápido, es como el índice de un libro**
- **Triggers: Disparadores que ejecutan código de SQL cuando se inserta, borra o se updatea un campo (CRUD (Create, Read, Update, Delete))**
- **Procedures: Pedazos de código SQL que se ejecuta**
- **Constraints: Previenen inconsistencia de datos en una columna**
- **Reglas:** Se especifican valores válidos para ser insertados en una tabla o columna.


## **Cuales son los elementos de Data Control Language? (DCL)**

- GRANT - Dar permisos específicos a una tabla y/o objeto
- REVOKE - Revocar permisos

## ** Lenguaje de manipulación de datos (DML)**

Las sentencias de lenguaje de manipulación de datos (DML) son utilizadas para gestionar datos dentro de las bases de datos . Algunos ejemplos:

- SELECT - para obtener datos de una base de datos.
- INSERT - para insertar datos a una tabla.
- UPDATE - para modificar datos existentes dentro de una tabla.
- DELETE - elimina todos los registros de la tabla; no borra los espacios asignados a los registros.

## **Lenguaje de definición de datos (DDL)**

Las sentencias DDL se utilizan para crear y modificar la estructura de las tablas así como otros objetos de la base de datos.

- CREATE - para crear objetos en la base de datos.
- ALTER - modifica la estructura de la base de datos.
- DROP - borra objetos de la base de datos.
- TRUNCATE - elimina todos los registros de la tabla, incluyendo todos los espacios asignados a los registros. Además, reinicia los campos autonuméricos.

## **Algunos tips de Performance SQL**

- Cada índice creado en la tabla incrementa el tiempo en que se llevan a cabo los insert, updates o deletes, por lo que el número de índices en una tabla no deben de ser muchos. Use sólo los índices necesarios, para PK y para FK, y según el uso de los datos (WHERE, ORDER BY, GROUP BY). Si la tabla es de solo lectura entonces el número de índices se puede incrementar.
- Manteen los índices lo más pequeño que puedas, reduciéndolo se reducen el número de IO para leerlo (esto depende de la complejidad de claves del índice).
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

- Evitar el uso de ‘%’ al inicio de la palabra cuando se busca por medio de un LIKE ya que provoca un index scan, el cual elimina el propósito del índice, en cambio el segundo ejemplo realiza un index scan. Evite en las búsquedas usar operadores del tipo <> y NOT ya que resultan en table scan e index scan (scan=recorre entrada por entrada tanto en tablas como en índices).

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
- Siempre acceder las tablas en el mismo orden en todos los sp’s y triggers, de esta manera evitamos generar deadlocks asi como también mantener las transacciones lo más pequeñas posibles. También hacer que las aplicaciones reintenten la transacción en caso de generarse un deadlock (error 1205).
- No hacer llamado de funciones repetitivamente en los sp’s o triggers, en lugar de eso hacer el llamado una sola vez y guardarlo en alguna variable
- También toma en cuenta el consumo de CPU que generan tus consultas

---

# Triggers

## **DML TRIGGERS**

Son procedimientos almacenados que se ejecutan automáticamente ante un evento DML (Update – Delete – Insert) que afecta una **tabla o vista.**

Se los puede utilizar para, una vez desencadenados:

- Forzar reglas de negocio
- Mantener la integridad de datos
- Querear otras tablas
- Ejecutar complejas instrucciones SQL

La integridad debiera ser forzada al nivel más bajo por índices que formen parte de un Primary Key o Foreing Key contraints -

Los CHECK Constraints son otra alternativa

Para asegurar la Integridad Referencial nada mejor que los Foreing Key

Los DML TRIGGERS son especialmente utilizados cuando, con el simple uso de un constraint, no se cubren las necesidades de una aplicación

## **Consideraciones Generales y Beneficio**

No se pueden invocar por si mismos, se disparan automáticamente

- No reciben ni retornan parámetros
- A diferencia de los constraint “check” pueden hacer referencia a otras tablas (por ejemplo se puede controlar una inserción en una tabla de ventas si y solo si el valor de un campo stock de una tabla artículos sea mayor a x cantidad)
- Se pueden crear más de un trigger para un mismo evento en una tabla, con lo cual se pueden controlar múltiples alternativas sobre la misma tabla.
- Permiten evaluar el estado de una tabla antes y después de una modificación y tomar acciones acorde a la evaluación
- Permiten customizar mensajes de error, algo que los constraints en general no permiten.
- Los triggers DML utilizan dos tablas especiales denominadas **Inserted** y **Deleted**.
- Son tablas creadas automáticamente por el SQL con la misma estructura que la tabla sobre la cual está definido el trigger
- La tabla **Inserted** solo tiene datos en operaciones de Insert y Update
- La tabla **Deleted** sólo tiene datos en operaciones de Delete y Update
- En caso de un update las tablas Inserted y Deleted tienen data al mismo tiempo.
- No se pueden modificar los datos de estas tablas

```sql
CREATE TRIGGER <Nombre del Trigger> 
ON <Nombre de la Tabla>
AFTER <INSERT,DELETE,UPDATE>
      AS
BEGIN
SET NOCOUNT ON;
-- Inserta aquí las instrucciones
END
```

### Ejemplos

1. Se graba un histórico de stock cada vez que se modifica un artículo de la tabla “articulos”

```sql
-----------------------------------------------------------------
      --  TRIGGER DML                                                                            
      --  Detalle: este trigger genera un histórico de stock cada vez 
          que se modifica la existencia de un artículo --
      -----------------------------------------------------------------
      CREATE TRIGGER TR_ARTICULOS
      ON ARTICULOS
      AFTER UPDATE
      AS 
        BEGIN
         INSERT INTO HCO_STOCK
         (IDARTICULO, STOCK, FECHA)
         SELECT IDARTICULO, STOCK, getdate()
         FROM INSERTED
        END

       --- Con este evento UPDATE se desencadena el Trigger

      UPDATE ARTICULOS
      SET STOCK = STOCK + 10
      WHERE IDARTICULO = 1
```

1. Podemos hacer que el trigger del ejemplo 1 se desencadene sólo si una columna es afectada

```sql
CREATE TRIGGER TR_ARTICULOS
      ON ARTICULOS
      AFTER UPDATE
      AS 
        BEGIN
           IF UPDATE (STOCK)    -- sólo si actualiza STOCK
            BEGIN
             INSERT INTO HCO_STOCK
             (IDARTICULO, STOCK, FECHA)
             SELECT IDARTICULO, STOCK, getdate()
             FROM INSERTED
            END
END
```

1. Podemos hacer que el trigger deshaga toda la operación incluyendo un ROLLBACK

```sql
CREATE TRIGGER TR_ARTICULOS
      ON ARTICULOS
      AFTER UPDATE
      AS 
        BEGIN
             INSERT INTO HCO_ARTICULOS
             (IDARTICULO, STOCK, FECHA)
             SELECT IDARTOCULO, STOCK, getdate()
             FROM INSERTED
                
             ROLLBACK 
END
```

1. Podemos DESACTIVAR/ACTIVAR un Trigger o Todos lo Triggers de la tabla

```sql
----------------------------------------------------------
      -- Desactivar y Activar Todos los Triggers de una Tabla --
      ---------------------------------------------------------

      -- Desactiva todos los trigger de la tabla ARTICULOS
      ALTER TABLE ARTICULOS DISABLE TRIGGER ALL
      GO
      -- Activa todos los trigger de la tabla ARTICULOS
      ALTER TABLE ARTICULOS ENABLE TRIGGER ALL

      ----------------------------------------------------
      -- Desactivar y Activar Un Trigger en Particular --
      ---------------------------------------------------

      -- Desactiva el trigger TR_STOCK
      DISABLE TRIGGER TR_STOCK ON ARTICULOS
      GO
      -- Activa el trigger TR_STOCK
      ENABLE TRIGGER TR_STOCK ON ARTICULOS
      GO
```

## **DDL Triggers**

Son triggers especiales que se crean **a nivel de base de datos** y que disparan en respuesta a eventos DML  (Update – Delete – Insert). Suelen ser utilizados para ejecutar tareas administrativas en una base de datos auditando y regulando cierta clase de eventos.

```sql
CREATE TRIGGER <Nombre del Trigger> 
ON DATABASE 
FOR <DROP TABLE, ALTER TABLE>
AS
BEGIN
   SET NOCOUNT ON;
   -- Inserta aquí las instrucciones
END
```

El siguiente trigger impide que sentencias DROP TABLE y ALTER TABLE a nivel de Base de Datos

```sql
CREATE TRIGGER TR_Seguridad
       ON DATABASE FOR DROP_TABLE, ALTER_TABLE
       AS
       BEGIN
         RAISERROR ('No está permitido borrar ni modificar tablas !' , 16, 1)
         ROLLBACK TRANSACTION 

       END
```

---

# Funciones tipo Rowset

### 🤍 **Acceso a consulta en servidor externo que tiene una base Sql Server**

```sql
SELECT a.*  
FROM OPENROWSET('SQLNCLI', 'Server=Seattle1;Trusted_Connection=yes;',  
     'SELECT GroupName, Name, DepartmentID  
      FROM AdventureWorks2012.HumanResources.Department  
      ORDER BY GroupName, Name') AS a;
```

**'SQLNCLI'**: Es el nombre del proveedor OLEDB para conectarse (nombre del driver a usar según el motor)

**Seattle1**: Nombre del servidor externo.

**Trusted_Connection=yes**; Tipo de autenticación, misma que Windows.

### 🤍 **Acceso a tabla de base de datos Access**

```sql
SELECT CustomerID, CompanyName  
   FROM OPENROWSET('Microsoft.Jet.OLEDB.4.0',  
      'C:\Program Files\Microsoft Office\OFFICE11\SAMPLES\Northwind.mdb';  
      'admin';'',Customers);
```

**'Microsoft.Jet.OLEDB.4.0'**: Es el nombre del proveedor OLEDB para conectarse (nombre del driver a usar según el motor)

**'C:\Program Files\Microsoft Office\OFFICE11\SAMPLES\Northwind.mdb'**: Nombre del archive de base de datos Access.

**'admin**'; Usuario de ingreso a la base.

### 🤍 **Acceso a tabla de Access con JOIN a tabla de base de datos** **origen**

```sql
USE Northwind  ;  
GO  
SELECT c.*, o.*  
FROM Northwind.dbo.Customers AS c   
   INNER JOIN OPENROWSET('Microsoft.Jet.OLEDB.4.0',   
   'C:\Program Files\Microsoft Office\OFFICE11\SAMPLES\Northwind.mdb';'admin';'', Orders)      
   AS o   
   ON c.CustomerID = o.CustomerID ;  
GO
```

### 🤍 **Acceso a servidor externo con otro motor de base de datos**

Usar una consulta desde un *servidor vinculado de SQL Server* mediante **OPENQUERY** puede ser necesario en diferentes escenarios. Por ejemplo podemos necesitarlo para cargar una tabla intermedia con los datos de venta que sacamos de ***MySql*** a través de un servidor vinculado en ***SQLServer***.

---

Vamos con un ejemplo donde consultamos una tabla de ***Mysql*** directamente:

```sql
SELECT *
FROM Ventas.CABECERAS
WHERE date_format(FECHA, '%Y-%m-%d') >= '2012-12-01'
```

Esta misma consulta, lanzada desde SQL Server usando **OPENQUERY**  y un servidor vinculado llamado **'*MY*'** para acceder sería:

```sql
SELECT *
FROM OPENQUERY  (MY, 'SELECT * FROM Ventas.CABECERAS
WHERE date_format(FECHA, ''%Y-%m-%d'') >= '''2012-12-01''')
```

### 🤍 **Diferencia entre OPENROWSET y OPENQUERY**

- **OPENROWSET:** hay que indicar toda la información de conexión de los datos externos (String de conexión o ConnectionString).
- **OPENQUERY:** se indica el nombre del servidor linkeado al motor desde donde ejecuto las consultas.

---

# JOINS

### 🟡 **Inner Join**

Solo muestra lo que tiene en comun A y B

```sql
SELECT loginID
FROM tabla1 AS e
   INNER JOIN Ventas.vendedor AS s
   ON e.idnegocio = s.idnegocio

(El id negocio debe estar en tabla a y b)
```

### 🟡 **Outer Join (Con left y right join)**

El left Join, por ejemplo, con dos tablas A y B, devuelve todo lo de la tabla A y lo que este también en la tabla AB, sí no quiero esto último, agrego un WHERE tabla_b IS NULL . El right join es lo mismo pero con B. El full Join toma absolutamente todo de ambas tablas, agregando el NULL anterior con ambas tablas, ahi es donde se muestran ambas tablas menos lo que tienen en común.

```sql
SELECT p.nombre, pr.productoid
FROM produccion.producto p
LEFT OUTER JOIN
produccion.producto pr
ON p.productoid = pr.productoid
```

### 🟡 **Cross Join**

El producto cartesiano entre ese set de datos. Son todas las posibles combinaciones de rows entre todas las tablas aplicadas.Puede tardar mucho en procesar si se tiene mucha data.

### 🟡 **Self Join**

Un Join que referencia a la misma tabla.

```sql
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID --No se repiten ID
AND A.City <> B.City --Esta linea hace que no se repitan ciudades 
ORDER BY A.City;
```

### 🟡 UNIÓN

Con los set de datos finales se trata de unificar a un set único

Elimina los duplicados entre ambos conjuntos de entrada (**ES UN DISTINCT IMPLÍCITO**).

```sql
SELECT * a
UNIÓN ALL
Select * b
```

### 🟡 EXCEPT

De un set de datos se saca los que no estan en el 2do set de datos a relacionar, todo lo de a de tabla1, menos lo que este también en b tabla2

Retorna filas del conjunto de la izquierda que no están incluidas en el conjunto de la derecha entrada (**ES UN DISTINCT IMPLÍCITO**)

```sql
SELECT a
FROM tabla1
EXCEPT
SELECT b
FROM tabla2
```

### 🟡 INTERSECT

Intersección entre dos tablas. Lo contrario a EXCEPT. Retorna filas en común a ambos conjuntos de entrada (**ES UN DISTINCT IMPLÍCITO**).

### 🟡 TOP

Top de los resultados de una query, es decir, las X primeras (En el ejemplo, 10) de un SELECT

```sql
SELECT TOP (10)
nombres, apellidos
FROM tabla1
```
---

# Normalizacion

### 💛 Cual es la definición?

Definición formal: La normalización es el proceso mediante el cual se transforman datos complejos a un conjunto de estructuras de datos más pequeñas, que además de ser más simples y más estables, son más fáciles de mantener.

También se puede entender la normalización como una serie de reglas que sirven para ayudar a los diseñadores de bases de datos a desarrollar un esquema que minimice los problemas de lógica.

### 💛 Cuales son los objetivos de la Normalización?

- Evitar redundancia
- Evitar problemas de actualización
- Asegurar la integridad
- Asegurar que no hayan 2 registros iguales
- Todos los datos de una determinada propiedad
deben ser del mismo tipo.
- Ejemplo “Nacimiento” debe tener una fecha.

### 💛 Cuales son los grados de Normalización?

- Primera forma normal
- Segunda forma normal
- Tercera formal normal

Cada una de estas formas normales tiene sus reglas.
Una base de datos no es necesario que este siempre en la 3era forma normal, puede ocurrir que para resolver
problemas complejos, no se requiera de algún dato en la 3era forma.

