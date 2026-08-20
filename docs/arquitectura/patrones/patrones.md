---
id: patrones
title: 🧩 Patrones de diseño
---

## Singleton

*Parte de esta explicacion fue tomada del libro ¨Cracking the Coding Interview¨ de Mcdowell* 

Este asegura que exista una sola entidad de una clase y que la misma sea accesible. Es bastante útil cuando tenemos objetos globales que deben usarse en toda la aplicación.

Por ejemplo, si queremos implementar el Singleton de un restaurante en Java:

 ```js
 public class Restaurant {
    private static Restaurant _instance = null;

    protected Restaurant(){...}

    public static Restaurant getInstance(){
        if (_instance == null) {
            // Si la instancia aun no fue creada, crearla
            _instance = new Restaurant();
        }

        // Si no, devolverla
        return _instance;
    }
 }
 ```

Ejemplo en JavaScript

```js
class Logger {
  static instance;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  log(msg) {
    console.log(`[LOG] ${msg}`);
  }
}

// Uso
const logger1 = new Logger(); // Crea logger
const logger2 = new Logger(); // Devuelve el mismo creado en Logger1

logger1.log("Hola");
console.log(logger1 === logger2); // true - Ambos refieren al mismo Logger
```

A no muchas personas les agrada este patrón; por eso, en varios lugares se considera un antipatrón, ya que puede interferir con las pruebas unitarias.

---

## Factory

*Parte de esta explicacion fue tomada del libro ¨Cracking the Coding Interview¨ de Mcdowell* 

Este patrón ofrece una interfaz para la creación de instancias de una clase, con sus subclases decidiendo qué clase instanciar. Es una forma simple de crear objetos sin decirle al código “crea exactamente esta clase”. En lugar de eso, dices “créame un objeto de este tipo” y una “fábrica” decide cuál clase concreta construir.

Por ejemplo, si se tiene una máquina de bebidas, el usuario pide una bebida caliente y la máquina decide si dar café o té.

- Evita que el código esté lleno de `if-else` para decidir qué clase crear.
- Es más fácil agregar variantes sin romper lo existente; es escalable.

```js
public class CardGame {
    public static CardGame createCardGame(GameType type) {
        if (type == GameType.poker){
            return new PokerGame();
        }
        else if (type == GameType.BlackJack) {
            return new BlackJackGame();
        }

        // Recomendable lanzar una excepcion en vez de devolver null
        return null;
    }
}
```

Ejemplo en JavaScript

```js
class PaymentFactory {
  static create(type) {
    if (type === "card") return new CardPayment();
    if (type === "cash") return new CashPayment();
    throw new Error("Tipo de pago no válido");
  }
}

class CardPayment {
  pay(amount) {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class CashPayment {
  pay(amount) {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

// Uso - Dependiendo con que se realiza el pago la instancia devuelta.
const payment = PaymentFactory.create("card");
payment.pay(100);
```

Centraliza la creación de objetos y oculta la clase concreta al resto del código.
