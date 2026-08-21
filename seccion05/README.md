# Sección 05: Introducción a Testing

- V051 - Introducción a la sección
- V052 - Temas puntuales de la sección
  - ¿Qué es el testing automático?
  - ¿Por qué es importante?
  - Jest testing library
  - Configuraciones Node + TS + Jest
  - Pruebas en todos los archivos realizados en la sección anterior
  - Coverage - Cobertura  del testing
- V053 - Introducción Pruebas automáticas
  - Terminología AAA
    - Arrange (Arreglar)
      - Preparamos el estado inicial
        - Inicializamos variables
        - Importaciones necesarias
    - Act (Actuar)
      - Aplicamos acciones o estímulos
        - Llamar a métodos
        - Simular clicks
        - Realizar acciones sobre el paso anterior
    - Asser (Afirmar)
      - Observar el comportamiento resultante
        - Son los resultados esperados
        - Ej: que algo cambie, algo incremente o bien que nada suceda 
  - Mitos
    - Hacen que mi aplicación no tenga errores
    - Las pruebas no pueda fallar
    - Las pruebas hacen mas lenta mi aplicación
    - Es una pérdida de tiempo
    - Hay que probar todo
- V054 - Continuación de proyecto - Bases
- V055 - configurar ambiente de pruebas
  - [pasos a seguir](https://gist.github.com/Klerith/98d7b1bc0f1525e892f260813cad1007)
- V056 - Nota para próximas clases
- V057 - Arrange, Act, Assert
- V058 - Pruebas en 01-Template
- V059 - Pruebas en 02-Destructuring
- V060 - Pruebas en 03-Callbacks
```js
describe('03-Callbacks', () => {
    test('getUserById deberia retornar error o un usuario', (done)=> {
        
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            /* 
              done() le indica a Jest que el test asíncrono ha terminado.
              Jest espera hasta que llamemos a done().
              Si nunca llamamos a done(), Jest esperará hasta que se alcance
              el tiempo máximo permitido (por defecto, 5 segundos). 
            */
            done();
        });
    });
});
```
- V061 - Pruebas en 03-Callbacks - parte 2
- V062 - Preubas en 05-Factory
- V063 - Pruebas en 06-Promises
- V064 - Pruebas en GetAgeAdapter
- V065 - SpyOn - Métodos de objetos
- V066 - Pruebas en getUUID Adapter
- V067 - Pruebas en HttpClient Adapter
- V068 - Pruebas en el Logger Adpater
- V069 - Testing Coverage
  - Visualizar reporte de testing con "coverage" scirpt "test:coverage": "jest --coverage",
  - [coverage/low-report/plugins/index.html](./02-bases/coverage/lcov-report/index.html)
- V070 - Conectar Build + Testing