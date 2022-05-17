# Readme

## Atomic Data React tutorial

In this tutorial, we'll be building a data browser that can create and edit arbitrary data.
The @tomic/react NPM package will deal with global state management and component updates, as well as authentication and authorization.

- For VSCode users, install recommended extensions: `.vscode/extensions.json`  (vite + react + typescript)

```sh
# First, make sure yarn (or NPM) is installed.
yarn create vite atomic-browser --template react-ts
# Install dependencies
yarn
# Add the Atomic Data React dependency
yarn add @tomic/react
# Run server
yarn run dev
# Open http://localhost:3000/ to see app
```

- Import `Store` and `StoreContext` from `@tomic/react`.
- Instantiate a `Store`.
- Wrap contents in `App` in the `StoreContext.Provider`, and pass it a newly instantiated `Store`.
- Let's view some data!
  - Create a new `Browser` resource that will handle navigation of current Resource
  - Create `ResourcePage` with a simple Title shown
  - Render a `description` property using `useString`
  - Add `loading` and `error` states
  - Render values using `ValueComp` and `PropVal`
- Let's edit data!
  - Create an Atomic Data agent on https://atomicdata.dev/invites/1
  - Go to User Settings and copy the `secret`
  - Return the second `set` function from `useString`, and call this when the input of the description changes
