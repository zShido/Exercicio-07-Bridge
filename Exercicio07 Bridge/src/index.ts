import IConsole from "./Consoles/IConsole";
import NintendoSwitch from "./Consoles/NintendoSwitch";
import PlayStation from "./Consoles/PlayStation";
import Xbox from "./Consoles/Xbox";
import AdvancedPlay from "./Launch/AdvancedPlay";
import Play from "./Launch/Play";

function startplay(launch : IConsole){
    console.log("Aguarde...");
    const play = new Play(launch);
}

function startAdvancedPlay(launch : IConsole){
    console.log("Aguarde...");
    const aPlay = new AdvancedPlay(launch);
}

startplay(new Xbox());

startplay(new PlayStation());

startplay(new NintendoSwitch());

startAdvancedPlay(new Xbox());

startAdvancedPlay(new PlayStation());

startAdvancedPlay(new NintendoSwitch());