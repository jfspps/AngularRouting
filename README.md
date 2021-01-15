# AngularRouting

This project demonstrates routing in Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

# Absolute and relative paths

Router links of the form "/somePath" are __absolute paths__ and ignore the current path of the Angular app. Router links of the form "somePath" are __relative paths__ and append the current location with a subdirectory _somePath_ and hence the full path depends on the component loaded.

It is also possible to write relative paths as "./somePath", which is the same as "somePath" or "../somePath" which instructs Angular to seek the directory above the current one and then append _somePath_, in effect, "../somePath" is 'sibling' of the current path. In fact, "../currentPath" would just reload the current path in Angular (note that no http requests to a server are performed).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
