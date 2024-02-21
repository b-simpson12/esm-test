# esm-lib

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build esm-lib` to build the library.

## Running unit tests

Run `nx test esm-lib` to execute the unit tests via [Vitest](https://vitest.dev/).


1. nx g @nx/js:lib libs/esm-lib
2. Updated library to import lodash-es
3. Updated files
   - package.json - updated type to module
   - project.json - updated format and added `bundle: true`
   - tsconfig.lib.json - added module and target
- 
