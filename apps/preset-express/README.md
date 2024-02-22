1. Created using `npx create-nx-workspace esm-test --preset=expres`
2. Update main.ts


`nx run preset-express:build` - Works
`nx run preset-express:serve` - Fails - Error [ERR_REQUIRE_ESM]: require() on esm library import or workspace libraries that have esm imports
