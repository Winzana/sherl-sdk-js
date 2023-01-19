# Contributing to Sherl SDK

### Reporting Bugs

- **Do not open a GitHub issue if the bug is a security vulnerability issue**, instead please contact us at support@winzana.com
- **Ensure that the bug has not already been reported**, by searching in GitHub Issues.
- If you didn't find an open issue related to your problem, open a new one. Be sure to add **a title and a clear description** with as much relevant informations as possible.

### Suggesting Enhancements

All enhancements must be associated to a GitHub issue.

#### Local development

##### Installation

Clone the project:

```
git clone https://github.com/Winzana/sherl-sdk-js.git
```

In the project folder, install the dependencies:

```
npm install
```

##### Build

Build the project using the `build` script:

```
npm run build
```

This command will build for all targets. For a specific target, use the following commands:

- `build:commonjs`: CommonJS
- `build:esm`: ES6+
- `build:bundle`: Browser

For watch mode, use the `watch` command:

```
npm run watch
```

Again, for specific targets, use the following commands:

- `build:commonjs:watch`
- `build:esm:watch`
- `build:bundle:watch`

##### Linters

To check code with linters, run:

```
npm run lint
```

To fix linters errors, run:

```
npm run fix
```

##### Link

To install your local package on a local project, run the following command in the project folder:

```
npm link /path-to/sherl-sdk-js
```

For browser testing, you can create a symbolic link to the builded file:

```
ln -s /path-to/sherl-sdk-js/_bundles/sherl-sdk.min.js ./
```

### Pull Requests

1. Fork the repo.
2. Make your changes in a new git branch.
3. Commit your changes using a message that follows our [commit message guidelines](CONTRIBUTING.md#git-commit-messages).
4. Push your branch to GitHub.
5. In GitHub, send a pull request to `sherl-sdk-js:develop`.
   - We will review your changes and possibly suggest changes.

#### Notes on semantic-release

We use [semantic-release](https://github.com/semantic-release/semantic-release) for automated version management and package publishing.

Currently, we only have one distribution channel to manage package versions as the package is under active development:

- **master**
  - package tag: `@latest`
  - main version

## Styleguides

### Project structure

Sherl APIs are developped following multiple patterns including CQRS and DDD.

To follow the idea behind those patterns, the Sherl SDK for JavaScript is structured per domains.

Here is an example for the Product domain:

```
src/product
├── actions
│   ├── get-product.action.ts
│   ├── get-products.action.ts
│   └── index.ts
├── api
│   ├── client.ts
│   └── endpoints.ts
├── index.ts
├── provider.ts
└── types.ts
```

`index.ts` will export the provider to the end user by a method with the name of the domain.

`provider.ts` is the entrypoint of the domain. This file contains a class which will provide methods for domain features and an instance of error factory to manage domains error.

`types.ts` contains types declarations associated to the domain.

The `api` folder contains two files :

- `client.ts` contains a single class with static methods for each API calls.
- `endpoints.ts` contains an object describing API routes.

The `actions` folder contains one file per actions/features and an `index.ts` that will export methods of all files. An action is a method that will:

- Call the API through the client (see `api` folder)
- Transform and return the result

Actions are called by the provider.

### Git Commit Messages

We use [semantic-release](https://github.com/semantic-release/semantic-release) for automated version management and package publishing.

Guidelines for commit messages are based on [AngularJS contributors guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

A commit message should be structured as follow:

```
<type>(<scope>): <subject>
```

`<type>`:

- Should be lowercase
- Values:
  - **build**: Changes to build system or external dependencies
  - **ci**: Changes to CI configuration
  - **docs**: Documentation changes
  - **feat**: A new feature
  - **fix**: A bug fix
  - **refactor**: Not a new feature or a bug fix
  - **style**: Changes to code format
  - **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

`<scope>`:

- Should specify place of the commit change
- Should be "kebab-case"

`<subject>`:

- Don't capitalize first letter
- Use the imperative, present tense: "change" not "changed" nor "changes"
- Reference issues at the end of the line
