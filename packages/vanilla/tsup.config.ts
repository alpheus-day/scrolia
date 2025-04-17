import type { Options } from "tsup";

import { defineConfig } from "tsup";

const options: Options = {
    entry: {
        index: "./src/index.ts",
    },
    sourcemap: true,
    outDir: "./dist",
    platform: "browser",
};

export default defineConfig([
    {
        ...options,
        format: "esm",
        tsconfig: "./tsconfig.json",
    },
    {
        ...options,
        format: "cjs",
        dts: true,
        tsconfig: "./tsconfig.cjs.json",
    },
    // cdn
    {
        ...options,
        entry: {
            scrolia: "./src/cdn.ts",
        },
        target: "es3",
        format: "cjs",
        noExternal: [/(.*)/],
        tsconfig: "./tsconfig.cjs.json",
    },
    // cdn minify
    {
        ...options,
        entry: {
            "scrolia.min": "./src/cdn.ts",
        },
        target: "es3",
        minify: true,
        format: "cjs",
        sourcemap: false,
        noExternal: [/(.*)/],
        tsconfig: "./tsconfig.cjs.json",
    },
]);
