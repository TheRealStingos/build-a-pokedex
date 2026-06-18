import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    readline: Interface
    commands: Record<string, CLICommand>
    prevLocationsURL: string | null
    nextLocationsURL: string | null
    pokeAPI: PokeAPI
}

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(cacheInterval: number) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    return {
        readline: rl,
        commands: getCommands(),
        prevLocationsURL: null,
        nextLocationsURL: null,
        pokeAPI: new PokeAPI(cacheInterval)
    }
}