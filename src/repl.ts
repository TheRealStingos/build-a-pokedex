import { createInterface } from "node:readline"
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
    const lowered = input.toLowerCase().trim();
    return lowered.split(" ");
};

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
});

export function startREPL() {
    const commands = getCommands();
    rl.prompt();

    rl.on("line", (input) => {
        const result = cleanInput(input);
        if (result.length === 0) {
            rl.prompt();
            return;
        }
        if (commands[result[0]]) {
            commands[result[0]].callback(commands);
        }
        else { console.log(`Unknown command`); }
        rl.prompt();
    });
}