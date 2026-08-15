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