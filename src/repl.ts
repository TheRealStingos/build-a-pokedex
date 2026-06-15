import { createInterface } from "node:readline"

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
    rl.prompt();

    rl.on("line", (input) => {
        const result = cleanInput(input);
        if (result.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${result[0]}`);
        rl.prompt();
    });
}