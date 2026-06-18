import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const lowered = input.toLowerCase().trim();
    return lowered.split(" ");
};



export function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on("line", async (input) => {
        const result = cleanInput(input);
        if (result.length === 0) {
            state.readline.prompt();
            return;
        }
        if (state.commands[result[0]]) {
            try {
                const [commandName, ...args] = result
                await state.commands[commandName].callback(state, ...args);
            } catch (e) {
                console.error(e)
            }
        }
        else { console.log(`Unknown command`); }
        state.readline.prompt();
    });
}