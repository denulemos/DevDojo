---
id: aws
title: "☁️ AWS"
---

## IAM (Identity and Access Management)

Es un servicio global. Cuando creamos una cuenta en AWS, la misma es una cuenta **root**, y la misma se recomienda que **no sea utilizada ni compartida**, ya que posee acceso total. En su lugar, se recomienda crear usuarios con permisos específicos para cada tarea, y esto se realiza con IAM.

- Podemos guardar usuarios en **grupos** (no existe el concepto de subgrupo), y a cada grupo le asignamos permisos. Luego, los usuarios que estén dentro de ese grupo van a tener esos permisos, por ejemplo, grupo de Devs, Operaciones, etc..
- Los usuarios pueden estar en varios grupos a la vez, y van a tener los permisos de todos los grupos a los que pertenezcan.

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



