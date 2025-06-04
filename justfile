set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
biome := node_bin + "biome"
tsc := node_bin + "tsgo"
tsup := node_bin + "tsup"
rslib := node_bin + "rslib"
sass := node_bin + "sass"
typedoc := node_bin + "typedoc"

shared := "./packages/shared/"
vanilla := "./packages/vanilla/"
alias := "./packages/alias/"
react := "./packages/react/"
native_c := "./packages/react-native-core/"
native_ct := "./packages/react-native-core-thumb/"
native := "./packages/react-native/"
native_fl := "./packages/react-native-flash-list/"
native_rt := "./packages/react-native-reanimated-thumb/"

# Default action
_:
    just lint
    just fmt

# Setup the project
setup:
    brew install ls-lint typos-cli
    pnpm install

# Lint with TypeScript Compiler
tsc:
    cd ./{{shared}} && ../../{{tsc}} --noEmit
    cd ./{{vanilla}} && ../../{{tsc}} --noEmit
    cd ./{{alias}} && ../../{{tsc}} --noEmit
    cd ./{{react}} && ../../{{tsc}} --noEmit
    cd ./{{native_c}} && ../../{{tsc}} --noEmit
    cd ./{{native_ct}} && ../../{{tsc}} --noEmit
    cd ./{{native}} && ../../{{tsc}} --noEmit
    cd ./{{native_fl}} && ../../{{tsc}} --noEmit
    cd ./{{native_rt}} && ../../{{tsc}} --noEmit

# Lint code
lint:
    ls-lint
    typos
    just tsc

# Format code
fmt:
    ./{{biome}} check --write .

# Build shared package
build-shared: 
    cd ./{{shared}} && ../../{{tsup}}

# Build vanilla package
build-vanilla:
    cd ./{{vanilla}} && ../../{{tsup}}

# Build React package
build-react:
    cd ./{{react}} && ../../{{rslib}} build

# Build React Native packages
build-native:
    cd ./{{native_c}} && ../../{{rslib}} build
    cd ./{{native_ct}} && ../../{{rslib}} build
    cd ./{{native}} && ../../{{rslib}} build
    cd ./{{native_fl}} && ../../{{rslib}} build
    cd ./{{native_rt}} && ../../{{rslib}} build

# Build a specific package
build PACKAGE:
    just build-{{PACKAGE}}

# Build all packages
build-all:
    just build-shared
    just build-vanilla
    cd ./{{alias}} && ../../{{tsup}}
    just build-react
    just build-native

# Generate APIs documentation
api:
    cd ./{{vanilla}} && ../../{{typedoc}}
    cd ./{{react}} && ../../{{typedoc}}
    cd ./{{native}} && ../../{{typedoc}}
    cd ./{{native_fl}} && ../../{{typedoc}}
    cd ./{{native_rt}} && ../../{{typedoc}}

# Clean builds
clean:
    rm -rf ./{{shared}}/dist
    rm -rf ./{{vanilla}}/dist
    rm -rf ./{{alias}}/dist
    rm -rf ./{{react}}/dist
    rm -rf ./{{native_c}}/dist
    rm -rf ./{{native_ct}}/dist
    rm -rf ./{{native}}/dist
    rm -rf ./{{native_fl}}/dist
    rm -rf ./{{native_rt}}/dist

# Clean everything
clean-all:
    rm -rf ./node_modules
    rm -rf ./{{shared}}/node_modules
    rm -rf ./{{vanilla}}/node_modules
    rm -rf ./{{alias}}/node_modules
    rm -rf ./{{react}}/node_modules
    rm -rf ./{{native_c}}/node_modules
    rm -rf ./{{native_ct}}/node_modules
    rm -rf ./{{native}}/node_modules
    rm -rf ./{{native_fl}}/node_modules
    rm -rf ./{{native_rt}}/node_modules
    just clean
