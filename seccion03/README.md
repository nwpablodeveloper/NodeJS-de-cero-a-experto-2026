# Sección 03: Desarrollando en Node

- V019 - Introducción a la sección.
- V020 - Temas puntuales de la sección.
  - Package.json.
  - Node Modules.
  - Scripts.
  - Importaciones y Exportac.iones
  - Módulos.
  - Reforzamiento de JS.
    - Callbacks.
    - Arrows Functions.
    - Factory Functions.
    - Promises.
    - Async Await.
  - Peticiones Http básicas.
  - Dependencias de Producción y Desarrollo.
  - Patrón adaptador para nuestras dependencias.
  - y mas...
- V021 - Inicio de proyecto - Fundamentos 
  - desde la powershell "npm init" - [package.json](02-bases/package.json)
- V022 - Package.json Scripts
  - SRC - Directorio donde vamos a crear unestro código
```js
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node src/app.js",
        "dev": "echo 'hola mundo desde el dev"
    },
``` 
- V023 - Importaciones y Exportaciones
  - [Template](02-bases/src/js-foundation/01-template.js)
  - [v23.js](02-bases/src/v23.js)
- V024 - [Nodemon](https://www.npmjs.com/package/nodemon), paquetes de terceros
```js
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node src/app.js",
        "v23": "node src/v23.js",
        "v24": "nodemon src/v23.js", // Aplicamos Nodemon - ejecutar con: npm run v24
        "dev": "echo 'hola mundo desde el dev"
    },
``` 
- V025 - Variables de entorno por defecto
```js
    // package.json
    "v25": "nodemon src/js-foundation/02-destructuring",
``` 
  - [Destructuración](02-bases/src/js-foundation/02-destructuring.js)
- V026 - Depuración de apliaciones de Node
  - 1 - Poner Red point
  - 2 - Ejecutar "Debug/Depurar" en "packache.json"
- V027 - [Callbacks](02-bases/src/v27.js)
- V028 - Arrow Functions - [Funciones Flecha](02-bases/src/v28.js)
- V029 - Factory functions - [Introducción](02-bases/src/v29.js)
- V030 - Factory functions - [Necesidad](02-bases/src/v30.js)
  - La necesidad del FACTORY FUNCTIONS, nos facilita a trabajar con las dependencias de terceros en ficheros
    independientes a nuestro código. (Patrón adaptador)
    - [uuid](https://www.npmjs.com/package/uuid)
    - [get-age](https://www.npmjs.com/package/get-age)
- V031 - Patrón adaptador, [App](02-bases/src/v31.js)
  - Archivo de barrido, [../plugins/index.js](02-bases/plugins/index.js)
```js
  /*
    Ahora las dependencias de terceros estan separadas en una carpeta llamada "Plugins", esto nos
    facilita eliminarla o modificarlas con facilidad el día que ya no sean requeridas.
  */  
 
 ```
- V032 - Factory Functions - [Aplicado](02-bases/src/v32.js)
 ```js
  // Un Factory functions es una función que regresa otra función
 ```
 - V033 - Promesas - [introducción](02-bases/src/v33.js)
   - [Pokemon api](https://pokeapi.co/)
