import { CLICommand, State } from "./state.js";

export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage: \n");

    for (const value of Object.values(state.commands)) {
        console.log(`${value.name}: ${value.description}`)
    }
}