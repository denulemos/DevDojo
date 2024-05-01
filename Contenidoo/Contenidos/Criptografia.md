# Criptografia 📰

## **Que es la Criptografia?**

- Técnica que protege documentos y datos
- Uso de cifras/códigos para ocultar cierta información para que sea decodificada por quien pueda (y deba) hacerlo
- Es una rama de las matemáticas y de la informática en cierta forma
- **Usos: Correo electrónico, E-commerce, Servicios web (HTTPS) y Networking**

**Los elementos básicos de un sistema criptográfico son:** Criptograma, Texto Claro y Algoritmo de Cifrado

## **Que es una funcion Hash?**

- Es una funcion matemática fácil de calcular
- Uno puede hacer un algoritmo **unidireccional** (no se puede decodificar, o no se debería)
- Sirve para certificar que la informacion es veridica y no fue modificada
- Se usa para el concepto de firma digital y en blockchain
- **Compresión:** Son de longitud única su resultado
- **Difusión: Sí se modifica la mitad de un bit del mensaje original, el hash cambia la mitad de sus bits.**
- Mensaje => Algoritmo criptográfico (clave k) => Mensaje Cifrado (C)

**Principales algoritmos hash:** MD4, SHA 56, Sha1, etc..

## **Cuáles son los requisitos de un Cripto sistema?**

- Integridad, confidencialidad y no repudio
- El algoritmo debe ser rápido y fiable, no debe haber retardo entre el cifrado y descifrado
- No debe ser posible contar con una clave para deshashearla
- Un esquema de cifrado es computacionalmente inseguro sí el texto cifrado generado cumple El costo de romper el cifrado es bajo y la información está dentro de la vida útil

## **Como funciona el Crifrado Simetrico?**

Se descifra con una misma clave (Clave secreta), el emisor se lo tiene que "pasar" al receptor, lo cual significa una vulnerabilidad porque si son poco cuidadosos, cualquiera podría obtener esa clave y obtener la información privada. Es un proceso rápido. Que la clave sea muy segura es muy importante. También se le dice de clave privada porque es una sola clave. Con este sistema de clave pública se hizo SSH luego, que es una manera de establecer una comunicación segura entre páginas webs (servidores) y clientes.

**Las debilidades del Cifrado simetrico son..**

- Debilidades de clave única
- Mala gestión de claves
- Criptosistemas asimétricos
- Lo que se cifra con una clave se descifra con otra clave

## **Como funciona el Crifrado Asimetrico?**

- También se le dice de **clave pública**.
- Hay 2 claves, una para cifrar y otra para descifrar.
- Tenemos que tener cuidado de que la clave pública no dé lugar a que se adivine de cierta manera a la clave privada. Lo ideal es que se descifra con la clave privada, es decir, una que tenga el receptor, es como tener una cuenta que no puedo resolver si no tengo los números para saber qué es lo que tengo que sumar.
- Sí quiero darle confidencialidad a un documento, y que lo vea solo el destinatario, cifrar el documento con la **clave pública** del destinatario
- Está pensado para pasar por lugares poco seguros, es por eso que se considera un sistema menos vulnerable.
- Hay 3 tipos de cifrado en este tipo de cifrado, RSA (La seguridad de este algoritmo radica en el problema de la factorización de números enteros (números primos grandes), DSA, edDSA y ECDSA (El sistema está basado en curvas elípticas el cual emplea puntos sobre las curvas para la generación del par de claves).
