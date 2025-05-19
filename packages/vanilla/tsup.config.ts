import type { Options } from "tsup";

import { defineConfig } from "tsup";

const options: Options = {
    entry: {
        index: "./src/index.ts",
    },
    sourcemap: true,
    outDir: "./dist",
    platform: "browser",
    tsconfig: "./tsconfig.json",
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        format: "cjs",
        dts: true,
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
    },
]);
