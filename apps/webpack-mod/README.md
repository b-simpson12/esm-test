1. Created with `nx g @nx/express:application <app name>`
2. Update files
 - Add build target to project.json
 - Update webpack file name to .cjs
 - Added package.json
 - Add `module` & `moduleResolution` to tsconfig.json
 - Add `module` & `target` to tsconfig.app.json
 - Updated webpack.config.cjs content
 - Updated __dirname reference
 - Added imports to main.ts
3. 


`nx run webpack-mod:build` - (Fails - does not recognize libs) - WORKS with esm module import
`nx run webpack-mod:serve` - (Fails - does not recognize libs) - WORKS with esm module import
