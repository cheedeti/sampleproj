# Remix 1.x - Component Library
---
### Pre-Requisites
- Install **Node** version **6.x** (*Optional*: Try [NVM](https://github.com/coreybutler/nvm-windows) for managing different Node versions.)
- Install and use [**Yarn**](https://yarnpkg.com/en/) instead of **npm**
- Update NPM registry. NPM registry in .npmrc and package.json files is intentionally referring non-exisging repo (**npm-registry.metlife.com**) to enable different development options.
    1. Add host entry to map **npm-registry.metlife.com** to appropriate registry.
      - localhost (if local sinopia is installed)
      - 172.26.60.108
    2. Update *.npmrc* and *package.json* files.
- *Optional* - Install local NPM registry ( npm i -g sinopia ) and create uplink to 172.26.60.108


### Build Commands

- #### Install - `yarn`
    - `yarn` - Install dependencies.
    - `yarn upgrade` - Update already installed packages.

- #### Lint - `gulp lint`
    - Lint JS files (`gulp lint:scripts`)
    - Lint JSON Schema files
    - Lint SCSS/SASS files (`gulp lint:stylescc`)

- #### Formatting - `gulp format`
    - Auto correct lint errors and code format/style JS files
    - Auto correct format/style JSON Schema files
    - TODO - Auto format SCSS/SASS files

- #### Clean  - `gulp clean`
    - Clean all the build generated artifacts

- #### Test  - `gulp test`
    - Run the Unit Tests
    - Generate Code Coverage Report

- #### Build (JS) - `gulp buildJS`
    - Clean, format, lint and build JS

- #### Build (SCSS) - `gulp buildCSS`
    - Clean, lint and pre-process CSS

- #### Build - `gulp build`
    - Build JS and CSS

- #### Build Everything - `gulp buildALL`
    - Clean, format, lint, build, analyze and test all assets

- #### Analyze Styles - `gulp analyzeStyles`
    - Count Number of CSS selectors

- #### Analyze Scripts - `gulp analyzeScripts`
    - Analyze bundle size

- #### Publish - `gulp publish`
    - Build, Test and Analyze assets
    - Publish Node Modules to NPM/Sinopia

- #### Publish - `gulp republish`
    - Build, Test and Analyze assets
    - Unpublish Node Modules to NPM/Sinopia
    - Publish Node Modules to NPM/Sinopia

- #### Publish - `publish-server-only`
    - Build, Test and Analyze assets
    - Auto increment NPM version
    - Create GIT TAG with current version number
    - Publish Node Modules to NPM/Sinopia/Artifactory
    - Push latest code / tag to GIT repo
