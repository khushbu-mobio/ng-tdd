# Unittesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# How to Set Up Angular E2E Testing with Cucumber

# 1. Install the needed dependencies
npm install --save-dev @types/{chai,cucumber} chai cucumber protractor-cucumber-framework

# 2. Setup Cucumber and Chai's type definition files
Open the e2e/tsconfig.json file.

Replace:

    "types": ["jasmine", "jasminewd2", "node"]

By:

    "types": ["chai", "cucumber", "node"]

# 3. Update the Protractor configuration to use Cucumber

Open Protractor's configuration file located at e2e/protractor.conf.js and do the following modifications:

Update the test files to be used by Protractor:

    specs: ['./src/features/**/*.feature']

Our feature files will reside in the e2e/src/features folder.

Tell Protractor that you want to use Cucumber as the testing framework.

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')

Configure Cucumber Options

    cucumberOpts: {
        require: ['./src/steps/**/*.steps.ts'],
    },

cucumberOpts defines the actual command line options that are passed to Cucumber.js. Here we are telling Cucumber that our step definitions files reside in the e2e/src/steps folder.

Remove any Jasmine specific code from e2e/protractor.conf.js

    const { SpecReporter } = require('jasmine-spec-reporter');
    ....
        framework: 'jasmine',
        jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    ...
    onPrepare() {
    ...
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }

  # 4. Write the actual tests
  
  
The page object - e2e/src/pages/app.po.ts


# 5. Launch the tests

To launch the tests, simply run the following command:

ng e2e