import IConsole from "./IConsole";

export default class Xbox implements IConsole{

    constructor(){
        this.configuregame();
        console.log("Xbox: Console configurado, pronto para inicializar o jogo!")
    }
    configuregame() {
        this.authToken();
        console.log("Xbox: Configurando o jogo...")
    }
    authToken() {
        console.log("Xbox: Autorizando o Token...")
    }

}