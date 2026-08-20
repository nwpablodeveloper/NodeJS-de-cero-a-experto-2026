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
- V046 - Cración de Scripts para trabajar con TypeScript
  ```js
    // Permite ejecutar directamente codigo de Typescritp en Node
    npm install -D ts-node nodemon

    // Crear archivos de configuración para nodemon (nodemon.json)
    {
      // estar pendiente de lo que pase en la carpeta "src"
      "watch": ["src"], 

      // estar pendientes de archivos con extensiones ts y js
      "ext": ".ts,.js", 

      // ignorar archivos
      "ignore": [],     

      // comando para ejecutar la app en modo de desarrollo
      "exec": "npx ts-node ./src/app.ts"  
    }
  ```
  ```js
    // Crear los script en package.json para ejecutar nodemon con Typescript
    "dev": "nodemon"

    // en caso de no querer instaar nodemon
    "dev": "npx nodemon" 
  ```
  ```js

    // Instalar rimraf (herramienta que elimina y crea directorios)
    npm i -D rimraf

    // package.json
    // Elimina directorio ./dist y crea los archivos para producción
    "build": "rimraf ./dist && tsc", 

    // asegurar de tener la carpeta de producción actualizada con los ultimos cambios
    "start": "npm run build && node dist/app.js" 
  ```
  ```js
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",

         // Ejecutamos para trabajar en modo de desarrollo
         // esto esta asociado al archivos nodemon.json
        "dev": "nodemon", 

        // para transpilar la app de TS a JS
        // Este comando se ejecuta con "start"
        // tsc - toma todo los archivos .ts y los compila
        "build": "rimraf ./dist && tsc", 

        // para ejecutar la app en modo de producción
        // Ejecuta primero "build" y luego dispara la App
        "start": "npm run build && node dist/v46" 
      },
  ```
- V047 - Trabajando con Node y Typescript juntos
- V048 - Migrar proyecto a TypeScript - Parte 1
  - Pasar el proyecto 02-Bases a typescript