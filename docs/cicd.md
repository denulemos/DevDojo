# 🚀 CI/CD (Integración y entrega continua)

### **¿Qué es CI/CD?**

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

---

### **¿Qué es un Pipeline?**

Un **pipeline** es como una línea de montaje automática para tu código.

Cuando subís cambios, el pipeline sigue una serie de pasos (probar, construir, desplegar) en orden. Si un paso falla, los siguientes no se hacen.

**Ejemplo de pipeline:**
1. Revisar el código.
2. Ejecutar pruebas.
3. Construir la app.
4. Subirla a producción.

Así te asegurás de que todo funciona bien antes de que tu software llegue a los usuarios, y sin hacerlo a mano cada vez

---

### **¿Cómo armás un pipeline básico para una app Angular o frontend?**

1. **Armá tu repo:**
    - Usá GitHub, GitLab o Bitbucket.
    - Creá un repositorio para tu proyecto.
2. **Elegí una herramienta de CI/CD:**
    - Puede ser GitHub Actions, GitLab CI/CD, CircleCI, Travis CI, etc.
3. **Agregá el archivo de configuración:**
    - En el repo, sumá un archivo `.yml` (por ejemplo, `ci.yml`).
    - Ahí vas a definir los pasos del pipeline.
4. **Definí los pasos:**
    - **Instalar dependencias:** `npm install`
    - **Correr tests:** `ng test`
    - **Compilar la app:** `ng build`
    - **Desplegar:** Si todo sale bien, subí los archivos a un hosting (Firebase, Netlify, Vercel, etc).
5. **Configurá el entorno:**
    - Asegurate de tener las variables necesarias (claves, configs, etc) en el entorno de CI/CD.
6. **Probalo:**
    - Hacé un commit y subí los cambios.
    - Fijate que el pipeline corra bien y no tire errores.
7. **Ajustá lo que haga falta:**
    - Mirá los logs, corregí lo que falle y mejorá el proceso según lo que necesites.

---

### **¿Qué chequeos incluís típicamente en un pipeline de CI? (lint, test, build, etc.)**

Un pipeline de CI para una app Angular o frontend suele incluir varios chequeos para asegurarse de que el código funcione bien y cumpla con los estándares del equipo. Estos son los pasos más comunes:

- **Linting:** Revisa que el código siga las reglas de estilo y buenas prácticas (`ng lint`).
- **Pruebas unitarias:** Ejecuta tests para comprobar que las funciones individuales hacen lo que deben (`ng test`).
- **Pruebas de integración:** Asegura que distintas partes del sistema trabajen bien juntas, por ejemplo, componentes y servicios.
- **Build:** Compila la app para detectar errores de sintaxis o configuración (`ng build`).
- **Pruebas E2E:** Simula el uso real de la app para verificar que todo funcione desde el punto de vista del usuario (`ng e2e`).
- **Chequeo de dependencias:** Controla que las librerías estén actualizadas y sin vulnerabilidades (`npm audit`).
- **Chequeo de seguridad:** Busca posibles vulnerabilidades en el código o dependencias (por ejemplo, usando Snyk).
- **Chequeo de accesibilidad:** Verifica que la app sea usable para todos, incluyendo personas con discapacidades.
- **Chequeo de compatibilidad:** Prueba que la app funcione bien en distintos navegadores y dispositivos.
- **Notificaciones:** Si algo falla, avisa al equipo para que puedan corregirlo rápido.
- **Despliegue a staging:** Si todo pasa, sube la app a un entorno de pruebas para revisarla antes de ir a producción.
- **Despliegue a producción:** Si todo está bien, publica la app para los usuarios finales.
- **Rollback automático:** Si hay problemas en producción, vuelve automáticamente a la última versión estable.
- **Monitoreo y logs:** Configura herramientas para seguir el rendimiento y detectar errores en producción.
- **Revisión de código:** Si es posible, otro desarrollador revisa los cambios antes de fusionarlos.
- **Chequeo de calidad del código:** Usa herramientas como SonarQube para detectar posibles problemas o malas prácticas.
- **Chequeo de documentación:** Asegura que la documentación esté actualizada y sea clara para el equipo.

No todos los proyectos necesitan todos estos pasos, pero cuantos más tengas, más seguro y rápido será tu proceso de desarrollo.

---

### **¿Cómo automatizás deploys? ¿Qué estrategia usás (blue-green, canary, rolling updates)?**

Para automatizar deploys, lo más común es usar pipelines de CI/CD que, cuando todo pasa bien (tests, build, etc.), suben la app automáticamente al servidor o servicio de hosting. Por ejemplo, podés configurar GitHub Actions para que, después de un merge a `main`, haga el deploy a Vercel, Netlify, Firebase, o tu propio servidor.

Sobre estrategias de despliegue:

- **Blue-Green:** Tenés dos entornos idénticos (blue y green). El tráfico va a uno solo. Cuando hay una nueva versión, la subís al otro entorno y, si todo anda bien, cambiás el tráfico. Si falla, volvés rápido al anterior.
- **Canary:** Sacás la nueva versión solo para un porcentaje chico de usuarios. Si no hay problemas, vas aumentando hasta que todos la tengan.
- **Rolling Updates:** Vas actualizando los servidores de a poco, uno por uno, sin que la app deje de estar disponible.

En proyectos chicos, muchas veces se hace un deploy directo (sin estrategia), pero si el proyecto crece o tiene muchos usuarios, conviene usar alguna de estas para evitar caídas o problemas en producción.