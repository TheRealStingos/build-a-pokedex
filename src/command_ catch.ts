import { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        return
    }

    const pokemon = await state.pokeAPI.fetchPokemon(args[0]);

    if (!pokemon) {
        return
    }

    console.log(`Throwing a Pokeball at ${pokemon.name}...`)

    const chance = Math.min(1, 100 / pokemon.base_experience);
    const attempt = Math.random();

    if (attempt < chance) {
        console.log(`${pokemon.name} was caught!`)
    }
    else {
        console.log(`${pokemon.name} escaped!`)
    }

}