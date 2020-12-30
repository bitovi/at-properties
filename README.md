# at-properties

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Style Guide
Storybook JS is deployable just like the Prototype app. In many cases, it directly uses the component code to show how features look in reality. This makes it an excellent choice for a robust Style Guide that is easy to keep up to date and can be referenced from anywhere.

In development mode, Storybook can be run locally and will hot reload with any changes. A browser tab will automatically open with the local Style Guide after the framework compiles. Additionally, the terminal output will display the correct port.

```
yarn run storybook
```

To publish a static production build of the Style Guide, build Storybook. The application will be compiled and minified being output to /storybook-static. This may be deployed to any standard hosting environment.

```
yarn run build-storybook
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
