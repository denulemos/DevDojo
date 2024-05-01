# Python

### 🐍 ¿Qué es Python?

- Es interpretado, no necesita compilacion
- **CPhyton: Una interpretacion de Phyton**

### 🐍 Imprimir Hello World en Python

```python
print(“Hello World”);
```

### 🐍 Declarar una variable

```python
variable(“Hola”)
```

### 🐍 Comparar dos Strings, en este caso sí son iguales, lo mismo con los numeros.

```python
“Apple” == “Apple”
```

### 🐍 Hacer un if

```python
if True:
print(“Hola”)
elif False:
print(“Es false”)
else:
print(“Otra cosa”)
```

### 🐍 Hacer un while

```python
while 3>1:
print(“Algo”)
```

### 🐍 Hacer un for

```python
for number in range (1,4): //La cantidad de veces que queremos que se repita el loop, el ultimo numero no esta incluido
print(number)
//Devuelve 1,2,3
```

### 🐍 Foreach

```python
for name in names: //Por cada nombre en la lista de nombres
print(name)
```

### 🐍 Convertir un numero a un String

```python
print(str(number)) //La funcion str() convierte cualquier cosa a String
```

### 🐍 Repetir varias veces un String

```python
print(frase * 3) //Se va a repetir 3 veces
```

### 🐍 Saber cuantos caracteres tiene un String

```python
print(len(frase)) //len() devuelve un int
```

### 🐍 Acceder a cierto caracter de un String

```python
name[0] //Los String son tecnicamente arrays de caracteres que empiezan desde cero
```

### 🐍 Para obtener solo ciertos caracteres de mi String

```python
name[0:7]
```

### 🐍 Reemplazar una palabra de un String por otro

```python
p = “Hola denu”
p = p.replace(“Hola”, “Chau”)
p --> Chau denu
```

### 🐍 Hacer un enter en un String largo

```python
a= “””Hola \ aca hay un salto de linea””” 
//Si o sí con 3 pares de comillas, se hace el salto de linea con \
```

### 🐍 Crear una lista

```python
List = [“Hola”, 45, “Denu”, 20] 
//No hay restriccion de tipo de elemento en la lista. Empieza desde cero
```

### 🐍 Imprimir lista

```python
print(str(List)) //Pasarlo a String para imprimirlo

```

### 🐍Saber cantidad de elementos de una lista

```python
len(List) //Devuelve la cantidad de elementos
```

### 🐍 Agregar elementos a una lista

```python
List.append(“Nuevo Elemento”)
```

### 🐍Tuples

Son como listas pero más rapidas, y son constantes, una vez declaradas no pueden ser cambiadas, sirve para las constantes.

```python
tup1 = (“Constante 1”) //Es con parentesis en vez de corchetes
// Puedo convertir listas en Tuples y tuples en listas
tup1=(List)
List=[tup1]
Definir una funcion
def funcion():
print(“hola soy una funcion”)
funcion()
```

### 🐍 Diccionarios

Los Diccionarios son como las listas o los tuplets, pero en vez de ordenarse por index, se ordenan por keys.

```python
numeros = {“uno” : “un” , “dos” : “do”} => siendo el “uno” la key, y el un el valor a la que refiere esa key.
```

Los diccionarios pueden referenciar a cualquier tipo de dato, es decir, un int puede referenciar a un String y viceversa.

```python
// Referenciar a un valor de diccionario
numeros[“uno”]

// Sí solo quiero las keys
numeros.keys() // Los diccionarios no poseen un orden, así que van a devolver las keys en cualquier orden

// Saber sí existe cierta key en mi diccionario
“uno” in numeros // devuelve un booleano

// Saber cuantos pares de datos tengo en mi diccionario
len(numeros)

// Agregar un nuevo valor a mi diccionario
numeros.update(“tres”: “tre”)

// Borrar un valor de mi diccionario
números.pop(“tres”)
```

### 🐍 Declarar clases en Phyton

```python
class car :
ruedas = 4
def arrancar(self):
print(“wroom”)

// Instanciar una clase
my_car = car()

// Llamar a un método de la clase
my_car.arrancar()

// Crear instancia de una clase misma
class car:
wheels = 4
def *init*(self):
self.running = False
def start_engine(self):
self.running = True
print (“hola”)

auto = car()

// *init* puede recibir más de un parámetro además de self, 
// sí al crear el objeto ponemos más de un parámetro de referencia

class Car :
wheels = 4
def *init*(self,color)
self.color = color
self.running = false
def start_engine (self):
self.running = true

my_car = car(red)
my_car.color
```
