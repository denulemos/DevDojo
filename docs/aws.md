---
id: aws
title: "☁️ AWS"
---

## IAM (Identity and Access Management) (Servicio Global)

Es un servicio global. Cuando creamos una cuenta en AWS, la misma es una cuenta **root**, y la misma se recomienda que **no sea utilizada ni compartida**, ya que posee acceso total. En su lugar, se recomienda crear usuarios con permisos específicos para cada tarea, y esto se realiza con IAM.

- Podemos guardar usuarios en **grupos** (no existe el concepto de subgrupo), y a cada grupo le asignamos permisos. Luego, los usuarios que estén dentro de ese grupo van a tener esos permisos, por ejemplo, grupo de Devs, Operaciones, etc..
- Los usuarios pueden estar en varios grupos a la vez, y van a tener los permisos de todos los grupos a los que pertenezcan.
- Se le pueden asignar roles IAM a los servicios de AWS, para que estos puedan interactuar entre si, por ejemplo, un rol para que una instancia EC2 pueda acceder a un bucket de S3.
    - Roles de instancia EC2
    - Roles de funcion Lambda

A los usuarios o grupos se le pueden asignar documentos JSON llamados **politicas**

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "*"
        }
    ]
}
```

Por ejemplo, en este JSON se le asigna a un usuario o grupo el permiso de listar los buckets de S3. En este caso, se le asigna el permiso a todos los buckets, pero también se puede asignar a un bucket específico.

En AWS se aplica el **principio de minimo privilegio**, es decir, se le asigna a cada usuario o grupo solo los permisos necesarios para realizar su tarea, y no más.

### Politicas

Dentro de los grupos podemos definir politicas que afecten a los usuarios dentro de estas. Pero, si tenemos un usuario que no pertenece a ningun grupo, o que pertenece a varios grupos, y a su vez le asignamos politicas a este usuario, los permisos se intersectionan.

El JSON se veria asi:

```json
{
    "Version": "2012-10-17",
    "Id": "PolicyForXProjectBucket",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::123456789012:user/DevDojo"
            },
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::nombre-bucket"
        }, 
    ]
}
```

- **Version**: Version del lenguaje de la politica, siempre incluye un `2012-10-17`.
- **Id**: Id de la politica, es un identificador unico. (Opcional)
- **Statement**: Es un array de statements, cada statement es un permiso. (Obligatorio, ya que no tendria sentido definir una politica sin esta)
- **Sid**: Id del statement, es un identificador unico. (Opcional)
- **Effect**: Puede ser `Allow` o `Deny`.
- **Principal**: Usuario o grupo al que se le asigna la politica.
- **Action**: Acciones que se permiten o deniegan. Puede ser un array.
- **Resource**: Recursos a los que se aplican las acciones.
- **Condition**: Condiciones para cuando esta politica esta en efecto (opcional)

Se pueden crear politicas modificando el JSON o un editor visual en AWS.

### Politica de contraseñas

Se pueden establecer politicas de contraseñas, por ejemplo: 

- Longitud minima
- Requerir tipos de caracteres especificos
- Permitir a todos los usuarios IAM cambiar sus propias contraseñas
- Requerir el cambio de contraseña cada cierto tiempo
- Impedir la reutilizacion de contraseñas anteriores

Las politicas de contraseñas se pueden aplicar a nivel de cuenta raiz o a nivel de usuario IAM. 

La politica de contraseñas a nivel de cuenta raiz afecta a todos los usuarios IAM, mientras que la politica de contraseñas a nivel de usuario IAM afecta solo al usuario IAM al que se le aplica.

### MFA

Los usuarios IAM pueden elegir sus contraseñas, pero por seguridad es recomendable utilizar MFA (Multi-Factor Authentication)

Puede suceder que un usuario pierda su contraseña o haya sido hackeado, dandole acceso a alguien malintencionado a nuestra cuenta de AWS. Por este motivo, es recomendable utilizar MFA.

Se recomienda **establecer una contraseña y un dispositivo de seguridad**

- **Dispositivos virtuales MFA**: Aplicaciones como Google Authenticator, Authy o Microsoft Authenticator.
- **Clave de seguridad del segundo factor universal U2F**: YubiKey, etc. Es un USB que se conecta al computador y funciona como llave.
- **Dispositivo MFA de hardware**: Un dispositivo fisico que genera códigos MFA.

### Herramientas de seguridad

- **IAM Credential Report**: Es un reporte que muestra el estado de las credenciales de los usuarios IAM, como si tienen MFA habilitado, si tienen claves de acceso, etc.
- **IAM Access Advisor**: Es una herramienta que muestra los permisos que tienen los usuarios IAM, cuando se accedio a los mismos por ultima vez, y recomienda eliminar permisos innecesarios.

### Buenas practicas

- No usar la cuenta root, si no usuarios IAM. Solo usar root para lo necesario.
- Cada usuario fisico = un usuario AWS. No compartir usuarios IAM entre varias personas.
- Asignar usuarios a grupos y asignar permisos a los mismos
- Establecer una politica de contraseñas fuerte y utilizar MFA
- Crear y utilizar roles 


### Modos de acceder a AWS

- Consola de administracion de AWS, protegida por contraseña y MFA.
- AWS CLI, utilizando las credenciales de acceso (Access Key ID y Secret Access Key)
- AWS SDKs, utilizando las credenciales de acceso (Access Key ID y Secret Access Key)

Las claves de acceso se pueden generar para cada usuario IAM, y se recomienda rotarlas cada cierto tiempo por seguridad.

Las claves de acceso son como contraseñas, y se recomienda no compartirlas ni exponerlas en el codigo fuente. Para esto, se pueden utilizar servicios como AWS Secrets Manager o AWS Systems Manager Parameter Store para almacenar las claves de acceso de forma segura.

## CLI

Es una herramienta que nos permite interactuar con los servicios mediante la Shell. Para utilizarla, es necesario configurarla con las credenciales de acceso (Access Key ID y Secret Access Key) de un usuario IAM.

Es de codigo abierto. 

Se puede instalar en Windows, Linux o MacOS. Para su uso se debe:

- Crear una clave de acceso para un usuario IAM
- Configurar la CLI con las credenciales de acceso utilizando el comando `aws configure`

Y para ver la lista de usuarios IAM, por ejemplo, se puede utilizar el comando `aws iam list-users`.

## CloudShell (Servicio Regional)

Es una terminal basada en la web que nos permite interactuar con los servicios de AWS sin necesidad de instalar nada en nuestro computador. Es una herramienta muy util para realizar tareas rapidas o para usuarios que no quieren instalar la CLI.

Funciona a nivel de region, es decir, cada region tiene su propia CloudShell, y no esta disponible en todas las regiones. 

Para acceder a CloudShell, se puede hacer desde la consola de AWS, y se recomienda utilizarlo con un usuario IAM que tenga permisos limitados.

## SDK 

Es un conjunto de librerias que nos permiten interactuar con los servicios de AWS desde nuestro codigo. AWS ofrece SDKs para varios lenguajes de programacion, como Java, Python, JavaScript, etc.

Permite acceder a los servicios de AWS desde nuestro codigo, lo que es muy util para automatizar tareas, crear aplicaciones que interactuen con AWS, etc.