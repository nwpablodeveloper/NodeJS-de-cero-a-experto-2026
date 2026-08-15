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
- V013 - Leer archivos - FileSystem
  - [Material adjunto de react README.md](https://github.com/facebook/react)
- V014 - Tarea - Contador de palabras React
  - [Mi Solución](01-fundamentos/tarea.js)
  - [Solución Fernando Herrera](01-fundamentos/tarea-solucion.js)
- V015 - Orden de ejecución - Introducción [VER](recursos/orden-de-ejecucion.js)
    - [VER JPG - Orden de ejecución](recursos/orden-de-ejecucion.jpg)
    ***
      Si bien el 2° Timer tiene 1 milisegundo, se va a disparar antes del que tiene 0 milisegundos por que logror
      resolverse mientras estaba en la memoria "Libuv" mientras el flujo de código seguia ejecutandose en la memoria "Call Stack"
    ***
- V016 - Node - Event Loop & Code Execution
  - ¿Qué pasa si 2 Timesouts terminan al mismo tiempo?
  - ¿Qué pasa si una promesa termina al mismo tiempo que otro callback?
- V017 - Node Event Loop [VER](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)
  - [Timer, I/O, Checks](recursos/Timer-IO-Checks.jpg)
    ### El Event Loop sigue ciertas reglas
    - 1. Callbacks en el microstacks se ejecutan primero.
    - 2. Todos los callbacks dentro del timer "queue" se ejecutan.
    - 3. Callbacks en el microtask "queue"(si hay) se ejecutan después de los callbak timers, primero tareas en 
          nextTick "queue" y luego tareas en el promise "queue".
    - 4. Callbacks de I/O se ejecutan.
    - 5. Callbacks en el microtask "queue" se ejecutan (si hay), y luego promise queue (si hay).
    - 6. Todos los callbacks en el check queue se ejecutan.
    - 7. Callbacks en el microtask se ejecutan después de cada callback en el check queue. (Siguiendo el mismo orden anterior
          , nextTick y luego promise).
    - 8. Todos los callbacks en el close queue son ejecutados.
    - 9. Por una última vez en el mismo ciclo, los microtask queues son ejecutados de la mism forma, nextTick y luego promise queue