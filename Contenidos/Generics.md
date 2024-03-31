# Generics

Cada tipo primitivo (int, boolean, float..) tiene su clase hermana. Las clases siempre empiezan en mayus, los minuscula son llamados clases envoltorio.

```html

Integer --> int
Boolean --> boolean
Float --> float
Character --> char

edades.add(45) == edades.add(new Integer(45));
```

Los ArrayList reconocen el tipo de dato que evaluan <String> / <Integer> por los **Generics** 
que ya vienen con java.

### 👤 Estructura de Datos

Manera de estructurar datos, Array, ArrayList, Pila, Cola..

Por ejemplo, un sorteador posee las sig operaciones:

- Sortear elemento
- Agregar un elemento --> En un ArrayList. Con **programacion generica** 
no se que tipo voy a recibir, lo voy a saber cuando me lo mandan. (public class Sorteador<T>, private ArrayList<T> elementos , public void agregarElemento(T elemento){}), se trabaja todo con T (puede tener cualquier otro nombre).
- Esta vacio?

Definimos el tipo del sorteador cuando lo instanciamos para usarlo. Sorteador solo sabe como realiza sus metodos.

### 👤Agregar muchos elementos a la vez

```html
public void agregar (T[] elementos){
  this.elementos.addAll(Arrays.asList(elementos));
       }
```

También puedo usar un foreach.

### 👤Instancio mi Sorteador

```html
Sorteador<String> nombres = new Sorteador<>();
```

### 👤Hacer que mi sorteador sea iterable

```html
public class Sorteador<T> implements Iterable<T>
```

Implementando así el metodo propio de iterable que es iterator(), ya que es una interfaz

```html
@Override
public Iterator<T> iterator(){
return new IteratorSorteador();
}

private class IteratorSorteador implements Iterator<T>{

@Override
public boolean hasNext(){
return !estaVacio();
}

@Override
public T next(){
return proximoSorteado();
}

}
```


