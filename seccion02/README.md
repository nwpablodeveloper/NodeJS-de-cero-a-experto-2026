# Sección 02: Fundamentos de Node - Primeros pasos

- V008 - Introducción de la sección
- V009 - Temas puntuales de la sección
  - Preguntas comunes sobre Node.
  - Hola Mundo en Node.
  - Laboratorio con FileSystem.
  - Event Loop.
- V010 - Preguntas comunes sobre Node [VER](https://nodejs.org/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)
***
    ¿Qué es NodeJs?
    
    NodeJS es básicamente un ambiente de ejecución para ejecutar JavaScript desligado del navegador Web
***
    ¿Qué lo hace especial?

    Código abierto con el motro de V8 de Google y esta diseñado para realiar tareas de E/S junto con el 
    manejo de archivos de la computadora cliente/servidor

    Caracteristicas
        * Asincronia
        * Módulos nativos y de terceros
        * Gestión de paquetes con NPM
        * Contrucción de servidores
        * Escalabilidad
        * Múltiple pltataforma
***
    NON-BLOCKING I/O

    Casi ninguna función en Node bloquea la lecutra, por lo que podemos tner cientos de peticiones sin bloquear el servicio
***
    BLOCKING

    Básicamente cuando la ejecución del código debe de esperar a que se complete el proceso pero esta vez, impide que 
    se siga ejecutando otras instrucciones en paralelo
***

  - [Ejemplo - Código Blocking](codigo-blocking.js) 
  - [Ejemplo - Código Non-Blocking](codigo-blocking.js) 
- V011 - Hello Word en NodeJS
  - Desde la powershell de windows con el comando "node" ya entramos en ejecución de Nodejs.
- V012 - Archivos de JavaScript [Archivo app](01-fundamentos/app.js)

 