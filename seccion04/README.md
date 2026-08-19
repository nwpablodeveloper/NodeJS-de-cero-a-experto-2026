# Sección 04: Baes de Node + TypeScript

- V039 - Introducción a la sección
- V040 - Temas puntuales de la sección
  - Loggers y su necesidad
  - Winston (Loggs - Node Logger)
  - Configuraciones básicas y adaptador
  - TypeScript
  - Configuración de TypeScript con Node
  - Migración de proyecto
  - TSC
  - ts-node + nodemon
  - Entre otras cosas
- V041 - Continuación de la sección
  - [Continuación de la sección anterior](https://github.com/Klerith/node-ts-bases/tree/fin-seccion-3)
- V042 - Node Logger - Winston
- V043 - Winston - Parte 2 (Loogs)
- V044 - TypeScript - Proyecto básico
  ```js
    // cmd
    npx  - Paquete para ejecutar nodemon de otra manera
    npx nodemon + "ruta de la  App"
  ```
- V045 - Configuración de TypeScript en Node
  - [Pasos para usar Node con TypeScript](https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01)
  ```js
    // crear dependencia de desarrollo
    npx i -D typescript @types/node

    // Inicializar archivo de configuración de Typescript
    npx tsc --init

    // configurar direcotiors
    "rootDir": "./src",
    "outDir": "./dist",
  ```