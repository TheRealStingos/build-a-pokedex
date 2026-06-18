import { startREPL } from "./repl.js"
import { initState } from "./state.js";

function main() {
    const start = initState(1000 * 60)
    startREPL(start);
}

main();