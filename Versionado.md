<a name="cam-base"></a>

## [Control de Versiones y Cambios](#cam)

| Temas |
|----------|
| [Para que nos sirve Git?](#cam1) |
| [Conceptos base de Git](#cam2) |
| [Algunos comandos de Git](#cam3) |
| [Git Flow](#cam4) |
| [trunk base dev. vs git flow](#cam5) |
|¿Qué estrategias de lanzamiento considerarías para minimizar riesgos en un proyecto grande?|
|¿Cómo manejarías lanzamientos continuos o progresivos?|
|¿Implementarías feature toggles o dark launches?|

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