# Readme

# Atomic Data React tutorial

```sh
# First, make sure yarn (or NPM) is installed.
yarn create vite atomic-demo --template react-ts
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
