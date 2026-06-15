import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest"

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: "Another Test",
        expected: ["another", "test"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input)

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    })
})