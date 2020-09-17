degit -> Like git clone with some additional features.

### Getting the starter files using `degit`

Globally install degit

> npm i degit -g

Get the template files

> degit sveltejs/template project-name
> npm install

### Folder structure

In `src/`, `main.js` is used to kick start the project.

File extensions of components have `.svelte` extension.

`rollup.config.js` is like a webpack file. It watches the files, handles compilation and bundles the files. No need to edit this file.

`public/` is where svelte outputs the final production code which we can deploy.This is where we put stylesheets, html files which is then served by the browser.

#### Start the local development server

> npm run dev
