import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const lowered = input.toLowerCase().trim();
    return lowered.split(" ");
};



export function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on("line", (input) => {
        const result = cleanInput(input);
        if (result.length === 0) {
            state.readline.prompt();
            return;
        }
        if (state.commands[result[0]]) {
            state.commands[result[0]].callback(state);
        }
        else { console.log(`Unknown command`); }
        state.readline.prompt();
    });
}