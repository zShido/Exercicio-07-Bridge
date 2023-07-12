import IConsole from "../Consoles/IConsole";
import ILaunch from "./ILaunch";

export default class Play implements ILaunch{

    constructor(private launch : IConsole){
        this.playing();
    }
    playing() {
        this.result();
        console.log("Começando a jogatina...")
    }
    result() {
        console.log("Jogo Inicializado com Sucesso!")
    }

}