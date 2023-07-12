import IConsole from "../Consoles/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(launch : IConsole){
        super(launch)
        this.challenge();
        console.log("Inicializando configurações avançadas...")
    }

    challenge() : void{
        this.difficult();
        console.log("Liberando Desafios...")
    }

    difficult() : void{
        console.log("Configurando Dificuldades...")
    }
}