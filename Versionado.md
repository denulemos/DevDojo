<a name="cam-base"></a>

| Versionado |
|----------|
| [Git vs Mercurial](#ent63) |
| [Para que nos sirve Git?](#cam1) |
| [Conceptos base de Git](#cam2) |
| [Comandos Básicos de Git](#cam3) |
| [Manejo de Branches (Git Flow)](#cam4) |
| [trunk base dev. vs git flow](#cam5) |

| Deployment |
|----------|
| [Que es CI-CD?](#cam6)   |
| [Que es un Pipeline?](#cam7) |


---

<a id="ent63"></a>

### **Git vs Mercurial**

[Volver al indice](#cam-base)

Las diferencias principales entre **Git** y **Mercurial** son:

### **1. Filosofía y Diseño**

- **Git**:
  - **Modelo distribuido**: Git es un sistema distribuido de control de versiones. Cada desarrollador tiene una copia completa del repositorio, incluidos el historial de cambios y las ramas.
  - **Eficiencia y rendimiento**: Git está diseñado para ser rápido y manejar grandes repositorios con eficiencia, lo que lo hace ideal para proyectos de gran escala.
  - **Complejidad**: Git puede ser más complejo debido a su amplio conjunto de características y su sintaxis más complicada. Ofrece una gran flexibilidad, pero eso puede hacer que sea más difícil de aprender para los principiantes.

- **Mercurial**:
  - **Modelo distribuido**: Al igual que Git, Mercurial también es distribuido, lo que significa que cada usuario tiene una copia completa del repositorio.
  - **Simplicidad y enfoque**: Mercurial se centra en ser simple, intuitivo y fácil de usar. Su flujo de trabajo está diseñado para ser más sencillo, lo que puede facilitar su adopción en equipos pequeños o nuevos en el control de versiones.
  - **Curva de aprendizaje**: Mercurial es generalmente considerado más fácil de aprender que Git debido a su sintaxis más sencilla y menos características avanzadas.

### **2. Popularidad y Comunidad**

- **Git**:
  - **Adopción**: Git es más popular que Mercurial y se ha convertido en el estándar de facto para la mayoría de los proyectos de desarrollo de software, especialmente en plataformas como GitHub, GitLab y Bitbucket.
  - **Ecosistema y herramientas**: Dado que Git es más utilizado, tiene un ecosistema más grande de herramientas, bibliotecas y documentación disponible. Muchas plataformas de desarrollo, CI/CD y servicios de repositorio están optimizados para Git.

- **Mercurial**:
  - **Adopción**: Aunque Mercurial tiene una base de usuarios leal, ha sido menos adoptado que Git, y muchos proyectos más grandes han migrado a Git. Un ejemplo famoso de esto es el caso de **Bitbucket**, que inicialmente soportaba Mercurial antes de que decidiera centrarse exclusivamente en Git.
  - **Comunidad más pequeña**: Mercurial tiene una comunidad de usuarios más pequeña en comparación con Git, lo que puede resultar en una menor cantidad de recursos y soporte.

### **3. Flujo de trabajo y rendimiento**

- **Git**:
  - **Ramas**: Git es conocido por su fuerte soporte para **ramas (branching)**, lo que permite a los desarrolladores crear y fusionar ramas de manera rápida y flexible. Git es altamente eficiente en cuanto al manejo de ramas, lo que lo hace perfecto para flujos de trabajo que dependen de ramificación y fusiones frecuentes.
  - **Rendimiento**: Git generalmente tiene un buen rendimiento, incluso con repositorios grandes, aunque algunas operaciones complejas como el *merge* pueden ser lentas si no se gestionan correctamente.

- **Mercurial**:
  - **Ramas**: Mercurial utiliza un modelo de ramas diferente al de Git. Si bien Mercurial también soporta ramas, su enfoque es algo diferente y puede ser menos flexible en comparación con Git. Sin embargo, Mercurial proporciona soporte para **"named branches"** y **"bookmarks"** (que son más parecidos a las ramas en Git).
  - **Rendimiento**: Mercurial también tiene un buen rendimiento, aunque puede no ser tan rápido como Git en repositorios de gran escala debido a su menor optimización para estos casos.

### **4. Características clave**

- **Git**:
  - **Flexibilidad avanzada**: Git ofrece una gran cantidad de comandos y opciones avanzadas, lo que permite personalizar flujos de trabajo según las necesidades del equipo o el proyecto.
  - **Staging Area**: Git tiene una **staging area** o área de preparación que permite a los desarrolladores seleccionar qué cambios se deben incluir en el próximo commit, lo que proporciona un control más preciso sobre las modificaciones.

- **Mercurial**:
  - **Simplicidad y enfoque**: Mercurial es más simple en cuanto a su conjunto de características. No tiene un equivalente directo a la **staging area** de Git, lo que hace que el flujo de trabajo sea más directo (aunque menos flexible).
  - **Facilidad de uso**: Mercurial ofrece una interfaz de línea de comandos más simple y tiene menos configuraciones que gestionar.

### **5. Soporte y Herramientas**

- **Git**:
  - **Herramientas**: Git es ampliamente soportado por herramientas de desarrollo modernas, como **GitHub**, **GitLab**, **Bitbucket** y otras plataformas de CI/CD. Además, la integración de Git con herramientas como **Visual Studio Code**, **Atom** y **Sublime Text** es muy robusta.
  - **Servicios en la nube**: Git es compatible con todos los principales servicios en la nube de control de versiones (GitHub, GitLab, Bitbucket).

- **Mercurial**:
  - **Herramientas**: Mercurial tiene soporte en herramientas como **Bitbucket** (aunque ya no se usa para repositorios nuevos), **SourceForge**, y algunos editores de texto. Sin embargo, su integración no es tan amplia como la de Git.
  - **Soporte de la comunidad**: La comunidad de Mercurial es más pequeña, lo que puede dificultar encontrar recursos y soporte en comparación con Git.

### **6. Casos de uso y elección**

- **Git**: 
  - Ideal para equipos grandes, proyectos de código abierto y flujos de trabajo con ramificación frecuente.
  - Utilizado ampliamente en la industria del software, especialmente en proyectos que requieren una integración estrecha con plataformas como GitHub o GitLab.
  
- **Mercurial**: 
  - Mejor para equipos más pequeños que buscan una herramienta sencilla y rápida de implementar.
  - Aún se utiliza en ciertos proyectos grandes y populares como **Mozilla** y **Facebook**, que lo adoptaron debido a sus beneficios para sus flujos de trabajo específicos.


| Característica                 | **Git**                                  | **Mercurial**                        |
|---------------------------------|------------------------------------------|--------------------------------------|
| **Popularidad**                 | Mucho más popular, especialmente con GitHub | Menos popular, con base de usuarios más pequeña |
| **Complejidad**                 | Más complejo, con muchas características avanzadas | Más simple, fácil de aprender |
| **Rendimiento**                 | Muy eficiente, especialmente en grandes repositorios | Buen rendimiento, pero no tan optimizado en repositorios grandes |
| **Soporte para ramas**          | Muy fuerte, con ramificación avanzada    | Menos flexible, pero soporta ramas básicas y bookmarks |
| **Flujo de trabajo**            | Flexible, adecuado para equipos grandes y colaboraciones complejas | Flujo de trabajo más simple y directo |
| **Herramientas y servicios**    | Gran soporte (GitHub, GitLab, Bitbucket) | Menos herramientas, principalmente Bitbucket antes de eliminar soporte |
| **Curva de aprendizaje**       | Más empinada, requiere más tiempo para aprender | Más fácil de aprender, ideal para principiantes |

**Git** es la opción preferida para la mayoría de los proyectos de desarrollo modernos debido a su flexibilidad, rendimiento, y soporte en plataformas como GitHub. Es ideal para proyectos grandes y equipos que necesitan un control detallado sobre sus flujos de trabajo y un ecosistema de herramientas robusto.

**Mercurial** puede ser una excelente opción para proyectos pequeños o equipos que buscan una solución más simple y fácil de aprender, aunque su adopción está disminuyendo debido a la creciente popularidad de Git.

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

- **Repositorio remoto:** Donde se guarda el código en la nube o en un servidor.
- **Repositorio local:** Tu copia en la computadora.
- **Working directory:** Carpeta donde trabajás con los archivos.
- **Versión:** Estado del repositorio en un momento dado.
- **Commit:** Cambios guardados en el historial.
- **Branch:** Rama, referencia a un commit específico (por defecto suele ser master o main).

<a id="cam3"></a>

### **Comandos Básicos de Git**

[Volver al indice](#cam-base)

- `git init`: Inicia un repositorio en el directorio actual.
- `git status`: Muestra el estado de los archivos (si están listos para subir o no).
- `git add archivo` o `git add *.exe`: Agrega archivos para el próximo commit.
- `git commit -m "mensaje"`: Guarda los cambios con un mensaje.
- `git log`: Muestra el historial de cambios.
- `git remote add origin <url>`: Agrega la dirección del repositorio remoto (por ejemplo, en GitHub).
- `git push -u origin master`: Sube los cambios al repositorio remoto.
- `git clone <url>`: Descarga un repositorio remoto.
- `git pull origin master`: Trae los últimos cambios del repositorio remoto.
- `git branch <nombre>`: Crea una nueva rama.
- `git log --graph --all --oneline`: Muestra el historial de forma gráfica y resumida.

Si agregás un archivo **.gitignore**, podés evitar que se suban archivos que no te interesan (como cachés o temporales).

**Niveles de configuración:**
- `--local`: Solo para el repositorio actual.
- `--global`: Para tu usuario.
- `--system`: Para todos los usuarios del sistema.

<a id="cam4"></a>

### **Manejo de Branches (Git Flow)**

[Volver al indice](#cam-base)

- **Master:** Rama principal, lista para producción.
- **Develop:** Rama de desarrollo, donde se hacen los cambios.
- **Feature:** Para nuevas funcionalidades.
- **Hotfix:** Para arreglos urgentes.
- **Release:** Para preparar nuevas versiones.

<a id="cam5"></a>

### **trunk base dev. vs git flow**

[Volver al indice](#cam-base)

**Trunk Based Development**:
- Todos trabajan sobre la rama principal (main o trunk).
- Si hacés un cambio, creás una rama corta y la unís rápido.
- Menos ramas largas, menos conflictos.
- Ventaja: Todo está más simple y actualizado.
- Desventaja: Hay que tener cuidado de no romper nada.

**Git Flow**:
- Hay varias ramas: main, develop, feature, release, hotfix.
- Cada cosa importante tiene su propia rama.
- Ventaja: Mejor organización para equipos grandes.
- Desventaja: Puede ser más complicado y lento.

**¿Cuál conviene?**
- Equipos chicos o proyectos simples: Trunk Based Development.
- Proyectos grandes o con muchos colaboradores: Git Flow.

| Estrategia                | ¿Cómo se usa?                       | ¿Cuándo conviene?         |
|---------------------------|-------------------------------------|---------------------------|
| Trunk Based Development   | Todos en la rama principal           | Equipos chicos, simple    |
| Git Flow                  | Muchas ramas para cada cosa          | Proyectos grandes         |


<a id="cam6"></a>

### **Que es CI-CD?**

[Volver al indice](#cam-base)

**CI/CD** significa **Integración Continua** y **Entrega/Despliegue Continuo**.

- **Integración Continua (CI):** Cada vez que alguien sube cambios, se ejecutan pruebas automáticas para detectar errores rápido.
- **Entrega/Despliegue Continuo (CD):** Si todo sale bien, el código se puede poner en producción automáticamente.

**¿Por qué sirve?**
- Encontrás errores antes.
- El código llega más rápido a los usuarios.
- Menos trabajo manual.

**Ejemplo:**
1. Subís tu código a GitHub.
2. Un robot (como GitHub Actions) lo prueba automáticamente.
3. Si todo pasa, lo sube a producción.

**En resumen:** CI/CD automatiza pruebas y despliegues para que tu software llegue más rápido y seguro.

<a id="cam7"></a>

### **Que es un Pipeline?**

[Volver al indice](#cam-base)

Un **pipeline** es como una línea de montaje automática para tu código.

Cuando subís cambios, el pipeline sigue una serie de pasos (probar, construir, desplegar) en orden. Si un paso falla, los siguientes no se hacen.

**Ejemplo de pipeline:**
1. Revisar el código.
2. Ejecutar pruebas.
3. Construir la app.
4. Subirla a producción.

Así te asegurás de que todo funciona bien antes de que tu software llegue a los usuarios, y sin hacerlo a mano cada vez

