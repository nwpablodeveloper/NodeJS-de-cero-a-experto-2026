# Sección 11: MongoDB y PostgreSQL

- V147 - Introducción a la sección
- V148 - Temas puntuales de la sección
  - Esta sección es para integrar las bases de datos Mongo y PostgreSQL en nuestra aplicación de  monitoreo, puntualmente veremos:
  - Mongoose
  - Prisma
  - TypeORM (superficialmente)
  - Migraciones de prisma
  - Insertar en base de datos
  - Leer de base de datos
  - Mapeo de data a Entidades
  - Creación de datasources
    - Caso de uso nuevo, para grabar en múltiples destinos simultáneamente
  Es una sección importante en la cual culminaremos nuestro proyecto de NOC.
- V149 - Continuación del proyecto
- V150 - Base de datos MongoDB
  - [Docker imagen Mongo versiones](https://hub.docker.com/_/mongo)
- V151 - Probar MongoDB
```js
  // CMD
  docker --version
  // docker compose up
  docker compose up -d // para no depender de la terminal abierta
```
- V152 Node + Node + Mongoose
  - [mongoose](https://mongoosejs.com/)