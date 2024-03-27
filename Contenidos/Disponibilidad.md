# Disponibilidad

## **Cómo hace Amazon route 53 para dar alta disponibilidad y baja latencia?**

- Servidores distribuidos globalmente. Hay DNS en todo el mundo, sí haces una query desde cualquier lugar del mundo, va a haber un servidor DNS cerca para cumplirlo
- Dependencia: Route 53 proporciona un alto nivel de confiabilidad requerido por las aplicaciones críticas.
- Ubicaciones óptimas: Route 53 atiende las solicitudes desde el centro de datos más cercano al cliente que envía la solicitud. AWS tiene centros de datos en todo el mundo. Los datos se pueden almacenar en caché en diferentes centros de datos ubicados en diferentes regiones del mundo según los requisitos y la configuración elegida. Route 53 permite que cualquier servidor en cualquier centro de datos que tenga los datos necesarios para responder. De esta manera, permite que el servidor más cercano atienda la solicitud del cliente, reduciendo así el tiempo de atención

## **Cuál es la diferencia entre Availability Zone y Region?**

Availability Zone es una ubicación física donde Amazon tiene un data center. Una Region es una colección o grupo de AZ o Data Centers.

Esto ayuda a que los servicios tengan más disponibilidad mientras se colocan distintas VM en distintos lugares del mundo para cumplir peticiones. Esto también ayuda a que el servicio se mantenga siempre disponible aunque un Data Center caiga.

## **Qué es la alta disponibilidad?**

La alta disponibilidad es un término que se utiliza para describir la capacidad de un sistema o componente para estar operativo y accesible durante un período de tiempo determinado. La alta disponibilidad se logra mediante la implementación de redundancia y tolerancia a fallos en los sistemas y componentes críticos.

## **Qué es la baja latencia?**

La baja latencia es el tiempo que tarda un sistema en responder a una solicitud. La baja latencia es importante en aplicaciones en tiempo real, como juegos en línea, transmisión de video y aplicaciones financieras, donde incluso pequeños retrasos pueden afectar la experiencia del usuario.

## **Qué es un sistema tolerante a fallos?**

Un sistema tolerante a fallos es un sistema que puede continuar funcionando incluso si uno o más de sus componentes fallan. Los sistemas tolerantes a fallos se diseñan para minimizar el impacto de los fallos y garantizar que el sistema siga siendo operativo y accesible en caso de fallo de un componente.

## **Qué es un sistema distribuido?**

Un sistema distribuido es un sistema de software que se ejecuta en múltiples computadoras interconectadas y se comunica a través de una red de computadoras. Los sistemas distribuidos se utilizan para distribuir la carga de trabajo, mejorar la escalabilidad y la disponibilidad, y permitir la colaboración y la comunicación entre múltiples usuarios y sistemas.

## **Qué es un sistema de alta disponibilidad?**

Un sistema de alta disponibilidad es un sistema que está diseñado para garantizar que esté operativo y accesible durante un período de tiempo determinado. Los sistemas de alta disponibilidad se implementan mediante la redundancia y la tolerancia a fallos en los sistemas y componentes críticos para garantizar que el sistema siga siendo operativo en caso de fallo de un componente.

## **Qué es un CDN?**

Un CDN (Content Delivery Network) es una red de servidores distribuidos geográficamente que se utilizan para entregar contenido web, como imágenes, videos, archivos y otros recursos estáticos, a los usuarios finales de manera rápida y eficiente. Los CDNs almacenan en caché el contenido en servidores distribuidos en todo el mundo y utilizan algoritmos de enrutamiento inteligentes para dirigir a los usuarios al servidor más cercano para una entrega rápida y eficiente del contenido.

## **Qué es un balanceador de carga?**

Un balanceador de carga es un dispositivo de red que distribuye el tráfico de red entre múltiples servidores o dispositivos de red para garantizar que el tráfico se distribuya de manera uniforme y eficiente entre los servidores. Los balanceadores de carga se utilizan para mejorar la escalabilidad, la disponibilidad y el rendimiento de las aplicaciones web y los servicios en línea al distribuir la carga de trabajo entre múltiples servidores y garantizar que los servidores no se sobrecarguen.





