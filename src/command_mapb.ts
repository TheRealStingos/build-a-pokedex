import { PokeAPI, ShallowLocations } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandMapB(state: State) {
    if (state.prevLocationsURL === null) {
        console.log("You're on the first page")
        return
    }
    const res = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = res.next
    state.prevLocationsURL = res.previous
    for (const item of res.results) {
        console.log(item.name)
    }
}