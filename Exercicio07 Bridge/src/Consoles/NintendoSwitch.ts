import IConsole from "./IConsole";

export default class NintendoSwitch implements IConsole{
    constructor(){
        this.configuregame();
        console.log("Switch: Console configurado, pronto para inicializar o jogo!")
    }
    configuregame() {
        this.authToken();
        console.log("Switch: Configurando o jogo...")
    }
    authToken() {
        console.log("Switch: Autorizando o Token...")
    }
}