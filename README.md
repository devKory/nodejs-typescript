# nodejs-typescript

This is a template useful for projects wanting to use TypeScript in Node.js with a testing framework. Code goes in the src/app folder and tests follow the same structure in the src/tests folder.

## Instructions

- Run "**npm install**" to install all the dependencies
- Run "**npm run dev:tsc**" to start the TypeScript compiler in watch mode
- Run "**npm run dev**" to execute your application from index.js
- Run "**npm run test**" to test your JavaScript files using Jest

*You may want to run "npm run dev:tsc" and "npm run dev" in separate terminal windows for easier development.*

*Running "npm run test" will generate a coverage folder where Jest creates test reports.*

### Scripts (npm run)

- **build**: Cleans dist folder and transpiles all TypeScript files in the project
- **dev**: Sets Node environment to development and then executes dist/app/index.js
- **dev:tsc**: Cleans dist folder, transpiles all TypeScript files, and then watches for changes
- **prod**: Sets Node environment to production, cleans dist folder, transpiles all TypeScript files, removes tests folder from dist, and executes dist/app/index.js
- **test**: Cleans dist folder, transpiles all TypeScript files, and runs the JestJS testing framework
