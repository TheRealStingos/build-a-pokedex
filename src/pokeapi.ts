import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    private cache: Cache;
    constructor(cacheInterval: number) {
        this.cache = new Cache(cacheInterval);
    }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const cached = this.cache.get<ShallowLocations>(url);
        if (cached) {
            return cached;
        }
        const res = await fetch(url)
        const locations: ShallowLocations = await res.json();
        this.cache.add(url, locations);
        return locations;
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