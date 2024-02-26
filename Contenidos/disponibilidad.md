# Disponibilidad

## **Cómo hace Amazon route 53 para dar alta disponibilidad y baja latencia?**

- Servidores distribuidos globalmente. Hay DNS en todo el mundo, sí haces una query desde cualquier lugar del mundo, va a haber un servidor DNS cerca para cumplirlo
- Dependencia: Route 53 proporciona un alto nivel de confiabilidad requerido por las aplicaciones críticas.
- Ubicaciones óptimas: Route 53 atiende las solicitudes desde el centro de datos más cercano al cliente que envía la solicitud. AWS tiene centros de datos en todo el mundo. Los datos se pueden almacenar en caché en diferentes centros de datos ubicados en diferentes regiones del mundo según los requisitos y la configuración elegida. Route 53 permite que cualquier servidor en cualquier centro de datos que tenga los datos necesarios para responder. De esta manera, permite que el servidor más cercano atienda la solicitud del cliente, reduciendo así el tiempo de atención

## **Cuál es la diferencia entre Availability Zone y Region?**

Availability Zone es una ubicación física donde Amazon tiene un data center. Una Region es una colección o grupo de AZ o Data Centers.

Esto ayuda a que los servicios tengan más disponibilidad mientras se colocan distintas VM en distintos lugares del mundo para cumplir peticiones. Esto también ayuda a que el servicio se mantenga siempre disponible aunque un Data Center caiga.
