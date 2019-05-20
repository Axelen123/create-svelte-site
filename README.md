# Create Svelte

### Create a [Svelte](https://svelte.dev/) or [Sapper](https://sapper.svelte.dev/) site in a single command.

This is a fork of https://github.com/gojutin/create-svelte-site but with more templates and features.

# Installation

This is a command line utility, install it globally:

### With npm

```sh
npm i create-svelte -g
```

### With yarn

```sh
yarn global add create-svelte
```

# Usage

## Creating a Site
**You’ll need to have Node 8.10.0 or later on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### With npx

```sh
  npx create-svelte myapp
```

### With npm

```sh
  npm init svelte myapp
```

### With yarn

```sh
  yarn create svelte myapp
```

_Note: We are using `myapp` as an example. This can be any project name you choose._

You will be prompted to select a template from the official Svelte template library.

After you make your selection, your new site will be created in a directory named `myapp` inside the current folder.

### Next steps:

Navigate to the newly created directory.

```sh
cd myapp
```

Then, start up the development server.

```sh
npm run dev
```

Your site will be available at [http://localhost:5000](http://localhost:5000).

_Note: The port may be different depending on the template you chose._

_Note: `npm run dev` does not apply to the `Svelte Native` project type._
