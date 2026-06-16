export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const res = await fetch(url)
        return await res.json()
    }

    async fetchLocation(locationName: string): Promise<Location | null> {
        return null
    }
}

export type ShallowLocations = {
    count: number
    next: string | null
    previous: string | null
    results: {
        name: string;
        url: string;
    }[];
};

export type Location = {
    // add properties here
};