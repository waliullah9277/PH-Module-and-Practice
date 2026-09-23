/* Problem 9
Problem statement: Create an appConfig object (theme, version), lock it with as const. Try mutating a property and comment on the resulting error. Derive a union type from an array using typeof + as const.
Input: const appConfig = { theme: "dark", version: 2 } as const;
Output: commented error on mutation attempt (Cannot assign to 'theme' because it is a read-only property); derived union type example (e.g. "red" | "green" | "blue"). */

const appConfig = { theme: "dark", version: 2 } as const;

// Attempting to mutate a property will result in an error
// appConfig.theme = "light"; // Error: Cannot assign to 'theme' because it is a read-only property.

const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number];

const myColor: Color = "red"; // Valid
// const invalidColor: Color = "yellow"; // Error: Type '"yellow"' is not assignable to type 'Color'.

