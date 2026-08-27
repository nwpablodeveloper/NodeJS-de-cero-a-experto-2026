import { CreateTable } from "./create-table.use-case";

describe('create-table.use-case.test', () => {
    
    test('Creación de la tabla con valores por defecto', () => {
        
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 2});
        const rows = table.split('\n').length;

        // console.log(table);

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 4 = 8');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);
    });

    test('Crear tabla con valores personalizados', () => {

        const options = {
            base: 3,
            limit: 20,
        }

        const createTable = new CreateTable();
        const table = createTable.execute(options);

        // console.log(table);

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('3 x 5 = 15');
        expect(table).toContain('3 x 20 = 60');
        expect(table.split('\n').length).toBe(options.limit);
    });

})