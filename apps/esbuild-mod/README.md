1. Created with `nx g @nx/express:application <app name>`
2. Update files
- Add build target to project.json
- Added package.json
- Add `module` & `moduleResolution` to tsconfig.json
- Add properties to tsconfig.app.json
- Updated __dirname reference
- Added imports to main.ts


`nx run esbuild-mod:build` - (Fails - does not recognize libs) - WORKS with esm module import
`nx run esbuild-mod:serve` - (Fails - does not recognize libs) - WORKS with esm module import
