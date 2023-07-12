import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configuregame();
        console.log("PlayStation: Console configurado, pronto para inicializar o jogo!")
    }
    configuregame() {
        this.authToken();
        console.log("PlayStation: Configurando o jogo...")
    }
    authToken() {
        console.log("PlayStation: Autorizando o Token...")
    }
}