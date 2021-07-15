# shadow-ninja

* Get dependencies using [yarn package manager](https://yarnpkg.com/).

```
yarn install
```

* Get up and running with your dev server.

```
yarn run dev
```

This will run a bunch of scripts in parallel:

- Builds shadow-ninja components (a file npm dependency).
- Generates the Tailwind CSS.
- Runs the shadow-cljs server.
- Puts a watch on files for hot reloading.

## Resources

* [Shadow CLJS](https://shadow-cljs.github.io/docs/UsersGuide.html):
  Compile your ClojureScript projects with a focus on simplicity and ease of use.

* [Tailwind](https://tailwindcss.com/):
  Rapidly build modern websites without ever leaving your HTML.

* [Webpack](https://webpack.js.org/):
  Bundle all the things.

* For our nested node module read up about
  [npm packages and modules](https://docs.npmjs.com/about-packages-and-modules).
  and contributing [packages](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) to the registry
  for an idea of how to create an npm package. We won't be pushing our package to the registry.

## Oh the glory!

* Libraries that call hooks need to use `:>` to use the function as a react component, and wrap the response with `as-element`.
