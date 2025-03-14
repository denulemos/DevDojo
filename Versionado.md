<a name="cam-base"></a>

## [Control de Versiones y Cambios - Integracion Continua](#cam)

| Temas |
|----------|
| [Para que nos sirve Git?](#cam1) |
| [Conceptos base de Git](#cam2) |
| [Algunos comandos de Git](#cam3) |
| [Git Flow](#cam4) |
| [trunk base dev. vs git flow](#cam5) |
| [Que es CI-CD?](#cam6)   |
| [Que es un CI-CD Pipeline?](#cam7) |
| [Que es Continuous Integration en detalle?](#cam8) |
| [Que es Continuous Delivery en detalle?](#cam9) |
| [Que es Continuous Deployment en detalle?](#cam10) |


---

<a id="cam"></a>

# Control de Versiones y Cambios

<a id="cam1"></a>

### **Para que nos sirve Git?**

[Volver al indice](#cam-base)

Son herramientas que nos permiten saber, entre otras cosas:

- Quien
- Cuando
- Porque

Nos permite separar nueva funcionalidad de la estable.

<a id="cam2"></a>

### **Conceptos base de Git**



- **Repositorio remoto:** Es el lugar centralizado donde se guardan los archivos.
- **Repositorio local**: Es el lugar dentro de la computadora donde se guardan los archivos.
- **Working directory:** Copia del repositorio donde voy a empezar a trabajar.
- **Versión**: Captura del repositorio en un determinado momento.
- **Commit**: Modificaciones que le hacemos a los archivos del repositorio en nuestra computadora.
- **Branch**: Son referencias a un commit específico o al más actualizado. Por convención tenemos una llamada master o main

<a id="cam3"></a>

### **Algunos comandos de Git**

[Volver al indice](#cam-base)

**`git init`:** Iniciar repositorio GIT en ese directorio

**`git status`:** Ver el estado de los archivos, sí estan untracked o para subir. (Sí no quiero tanto texto pongo git status -s)

**`git add “archivo” o *.exe` :** Para agregar los archivos que aparecen como untracked en el estado

**`git commit -m “mensaje”` :** Para commitear, y poner de referencia que cambios se hicieron. El mensaje debe estar entre comillas

**`git log`:** Para ver los cambios hechos hasta el momento

**`git remote add origin (link)` :** Para agregar un link de GitHub para subir el proyecto

**`git push -u origin master`:** Para subir el contenido al repositorio online

**`git clone (url)` :** Para clonar el repositorio git de ese link

**`git pull origin master`:** Para ver los cambios en nuestro repositorio

**`git branch (nombre branch)`:** Crear un branch

**`git log --graph --all --oneline`:** Ver todos los commits resumidos

Sí agrego un **Git ignore** se ignoran los archivos cache propios del Programa

### **Niveles de configuración**

- -local : Configurar un solo repositorio
- -global: Una configuracion para mi usuario solamente
- -system: Para todos los usuarios

<a id="cam4"></a>

### **Git Flow**

[Volver al indice](#cam-base)

- **Master:** Es la rama principal, la que se va a subir a producción.
- **Develop:** Es la rama de desarrollo, donde se van a hacer los cambios.
- **Feature:** Es la rama donde se van a hacer los cambios de una nueva funcionalidad.
- **Hotfix:** Es la rama donde se van a hacer los cambios de una funcionalidad que no esta funcionando bien.
- **Release:** Es la rama donde se van a hacer los cambios de una nueva versión.

<a id="cam5"></a>

### **trunk base dev. vs git flow**

[Volver al indice](#cam-base)

En el desarrollo basado en tronco, se trabaja principalmente en una sola rama (generalmente llamada "tronco" o "master"), y las características se desarrollan y se integran directamente en esta rama principal. En cambio, en Git flow, se utilizan múltiples ramas para gestionar diferentes tipos de cambios, como características, versiones de lanzamiento y correcciones de errores.

En resumen, mientras que el desarrollo basado en tronco enfatiza la simplicidad y la integración continua, Git flow proporciona un modelo más estructurado para gestionar el flujo de trabajo en proyectos más grandes con diferentes necesidades de versión y despliegue. La elección entre ambos enfoques depende de los requisitos y la complejidad del proyecto.

<a id="cam6"></a>

### **Que es CI-CD?**

[Volver al indice](#cam-base)

Son dos acronimos usados en la rama de DevOps y desarrollo. 

- CI: Continuous Integration, la practica de constantemente mergear codigo a un repositorio o branch central donde corren checks automaticos
- CD: Continuous Delivery o Deployment

CI es parte de tanto el proceso de Continuous Delivery como Deployment, donde se corren ciertos checks automaticos para luego mergear el codigo. 
La diferencia entre Delivery y Deployment es la presencia de un approval manual para deployar el codigo a produccion. Con Continuous Deployment, el codigo es subido a produccion sin necesidad de un approval explicito.

La aplicacion de cualquiera de los 3 requiere una fuerte cultura del testing y especialmente del testing automatizado, para esto se requeriria tambien, por ejemplo, chequear el coverage del codigo, ya que no tiene sentido ninguna de estas practicas si no hay codigo testing que lo chequee. 

![cicd](src/cicd.png)

Las herramientas mas usadas son Jenkins (Solucion on premise), Amazon CodePipeline, BitBucket Pipelines, CircleCI, Azure Pipelines, GitLab, entre otros. 

Tambien mediante el uso de Docker, se puede realizar el build de forma isolada, asi que se soluciona el tipico problema en donde los cambios funcionan en la computadora del dev pero no en otras computadoras. 

<a id="cam7"></a>

### **Que es CI-CD Pipeline?**

[Volver al indice](#cam-base)

Es el set de pasos ordenados que corren de manera automatica para chequear cambios en un codigo, se pueden correr test de todo tipo y cada proceso dentro del Pipeline esta divido en Pipeline Stages. 

<a id="cam8"></a>

### **Que es Continuous Integration en detalle?**

[Volver al indice](#cam-base)

Es la herramienta encontrada para evitar el **integration hell** donde se espera hasta el fin de un sprint o proyecto para mergear todos los cambios de todos los dev en un solo codigo. 
Cada cambio es integrado lo mas rapido posible y debe pasar por una serie de checks automaticos, poniendo especial enfasis en el Test automatizado.

**Costos de su implementacion**

- El equipo debera escribir tests automatizados que deben correr ante cada codigo mergeado
- Se necesita un servidor de CI que pueda monitorear el branch principal ante cualquier problema
- Si se implementa desde cero al principio se debe frenar un poco el ritmo de releases
- Se vuelve un requerimiento el escribir tests y actualizarlos ante cada cambio importante

**Beneficios**

- Hay menos bugs ya que gracias a los tests automatizados se pueden encontrar problemas de forma temprana
- Los dev son alertados cuando el branch principal esta roto sin necesidad de estar yendo a produccion
- Menos tiempo de testing manual
- Los costos de testing son mucho menores ya que se pueden correr miles de tests en pocos segundos

<a id="cam9"></a>

### **Que es Continuous Delivery en detalle?**

[Volver al indice](#cam-base)

Es el hecho de que, luego de que los cambios son mergeados, los mismos son deployados de forma automatica a un ambiente, o manual si tambien se desea triggerear este proceso de forma temprana. 

Esto en el caso de ser usado de forma productiva acelera mucho las releases, especialmente si los mismos solo poseen cambios pequenios. 

<a id="cam10"></a>

### **Que es Continuous Deployment en detalle?**

[Volver al indice](#cam-base)

Es lo mismo que Delivery, pero un paso mas adelantado. Si un solo test falla, ya los cambios no van a ir deployados a produccion, quitando el peso del release day por completo, ya que la idea es, de nuevo, sacar releases lo mas rapido o seguido posible. 

Para esto se debe tener una excelente cultura del testing y de la documentacion. 