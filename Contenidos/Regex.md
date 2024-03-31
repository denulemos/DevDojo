# Regex

### 💙 **Test Method**

Las regular expressions son usadas para matchear partes de un String. Por ejemplo, sí quiero buscar la palabra “Hola” en la oración “Hola, como estas”, podemos referenciar la palabra como /Hola/, devolviendo (mediante un **regex** y un `.test()`) True sí encuentra la palabra, o false en caso contrario.

```html
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

Esto sí encuentra la expresion exacta, es decir, encontrara “Code”, pero no CODE ni code. Para que esto no suceda, tendremos que escribir /Palabra/**i**, esta i le dira al codigo que ignore las diferencias de case posibles.

### 💙 **Buscar más de un String**

Puedo matchear más de un String usando los condicionales comunes

```html
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
//Devuelve true, ya que encontro cat
```

El codigo de arriba va a buscar Dog o Cat o Bird o Fish en el String.

### 💙 **Devolver los matches**

No solo puedo saber sí existe una palabra o no en una oracion, sí no también “extraerla”, esto con el **.match()**

```html
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

Esto se puede hacer más de una vez, extrayendo más de 1 match agregando **/g** 
a la funcion match

```html
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

Se puede usar más de un “flag” en una misma funcion, es decir, puedo poner **/g y /gi** para que no sea case sensitive al mismo tiempo.

Sí quiero buscar palabras pero solo por, por ejemplo, las primeras 2 letras, solo poniendo un **punto**  al final o al principio del wildmatch, va a buscar esos matches.

```html
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
```

También podemos establecer con cuales caracteres queremos que matchee nuestro String

```html
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";

let bgRegex = /b[aiu]g/; //Matchea con palabras entre b y g, siempre y cuando tengan una i, una u o una a en el medio.

bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```

Y sí no queremos poner entre los corchetes la letra por letra con la cual deseamos hacer match, podemos establecer un String de ciertos caracteres, es decir, **/b[a-z]g/,** matcheando así de la “a” a la “z”

También podemos matchear una serie de numeros, por ejemplo /[0-5]/ matchea numeros del 0 al 5, teniendo estos dos también incluidos. También es posible combinar numeros y letras al mismo tiempo.

```html
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex); //Que jennyStr matchee con myRegex donde tengo todo definido.
```

También podemos marcar **caracteres con los que NO queremos matchear,** 
esto se hace agregando un ‘^’ antes de definir los caracteres a matchear.

```html
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; 
let result = quoteSample.match(myRegex);
```

También sí queremos matchear un caracter que aparece más de una vez, eso se soluciona poniendo un ‘+’ al lado del caracter que sabemos que se repite una o más veces

```html
let difficultSpelling = “Mississippi”; 
let myRegex = /s+/g; // this is the solution 
let result = difficultSpelling.match(myRegex);
```

Esto también se puede hacer con ‘*’, cuando ocurren cero o más veces

```html
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

Despues tenemos los **Lazy matching** que busca la parte más pequeña del String que pueda satisfacer la condicion. Por ejemplo, con la palabra Titanic, tenemos que usar /t[a-z]*i/, ya que matchea la t, las letras del medio, y la i del final, en cambio con el lazy, sí le agregamos un /t[a-z]*?i/, nos va a devolver solo la “ti”

Por ejemplo, sí queremos matchear con un tag H1 de html, pero no con el texto.

```html
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // it's the answer!
let result = text.match(myRegex);
```

### 💙 **Ver sí una palabra esta al principio de una oracion**

Puede ser tanto una palabra como una oracion o cierto pattern.

```html
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true ya que ricky es la primera palabra 
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false ya que ricky ya no es la primera palabra
```

### 💙 **Ver sí una palabra esta al FINAL de una oracion**

```html
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true ya que la oracion termina con story
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false ya que la oracion ya no termina con story
```