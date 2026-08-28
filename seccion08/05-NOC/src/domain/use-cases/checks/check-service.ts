interface checkServiceUseCase {
    execute(url: string): Promise<boolean>;
}

export class CheckService implements checkServiceUseCase{

    public async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);

            if(!req.ok) 
                throw new Error(`Error en checkservise con url: \n${url}`)

            console.log(`URL OK: ${url}`);
            return true;

        } catch (error) {
            console.log(`${error}`);
            return false;
        }

    }


}