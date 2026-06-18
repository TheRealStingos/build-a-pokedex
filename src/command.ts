import { commandCatch } from "./command_ catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";
import { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Display the next page of the map",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Display the previous page of the map",
            callback: commandMapB,
        },
        explore: {
            name: "explore",
            description: "Explore a specific location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempt to catch a Pokemon",
            callback: commandCatch,
        }
    }
}