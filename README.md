Things to install before running this test:
- npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
- npm install cypress @badeball/cypress-cucumber-preprocessor cucumber prettier --save-dev

Run the test using "npx cypress open" command

Note that running "npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild" might cause the test to fail, but I couldn't get the test to run without it in the first place (following the material given for Binus Quality Assurance Course 2025)
Error happens after updating cypress.config.js with the error message as following:

Error: Cannot find module '@bahmutov/cypress-esbuild-preprocessor'

*Therefore some of the codes are untested and written with writer's logic
