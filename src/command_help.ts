import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage: \n");

    for (const value of Object.values(commands)) {
        console.log(`${value.name}: ${value.description}`)
    }
}