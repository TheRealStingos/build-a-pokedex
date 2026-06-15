import { startREPL } from "./repl.js"
import { initState } from "./state.js";

function main() {
    const start = initState()
    startREPL(start);
}

main();