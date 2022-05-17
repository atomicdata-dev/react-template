# Atomic Data React Vite Typescript Template

This is a template / boilerplate for React apps using Atomic Data.
It demonstrates the use of [`@tomic/react`](https://www.npmjs.com/package/@tomic/react).
Run `npx degit atomicdata-dev/react-template my-project` to use this template on your machine.
You can also open this repo on [codesandbox](https://codesandbox.io/s/objective-leavitt-5np08m?file=/src/App.tsx)

- Easily create **decentralized applications** with **real-time updates** and **linked data**
- Read more in the [Atomic Data docs](https://docs.atomicdata.dev/)
- Designed to work with [Atomic-Server](https://github.com/atomicdata-dev/atomic-data-rust/)
- Powered by React, typescript, vite, [`@tomic/react`](https://www.npmjs.com/package/@tomic/react)
- All tools in this template (including this template itself) are MIT Licensed / free / open source.

## Atomic Data React tutorial

In this tutorial, we'll be building a data browser that can create and edit arbitrary data.
The @tomic/react NPM package will deal with global state management and component updates, as well as authentication and authorization.awdawd wdaw d


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

- For VSCode users, install [recommended extensions](.vscode/extensions.json) (vite + react + typescript)
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
- Let's add routing / navigation
  - Create a `Context` in `Browser.tsx` for navigation
  - Give it the `setState` for the current `subject`
  - consume it where you want to handle navigation actions using `useContext`
