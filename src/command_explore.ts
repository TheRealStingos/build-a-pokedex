import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length != 1) {
        return
    }
    const res = await state.pokeAPI.fetchLocation(args[0]);

    console.log(`Exploring ${args[0]}...`)
    if (!res?.pokemon_encounters) {
        return console.log("No Pokemon found")
    }

    console.log("Found Pokemon:")

    for (const encounter of res?.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`)
    }

}