# Step-1

1. <html ng-app>
The ng-app attribute represents an AngularJS directive
This directive is used to flag the HTML element that AngularJS should consider to be the root element of our application. 
This gives application developers the freedom to tell AngularJS if the entire HTML page or only a portion of it should be treated as the AngularJS application.

2.angular.js script tag:
 This code downloads the angular.js script which registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, AngularJS looks for the ngApp directive. If AngularJS finds the directive, it will bootstrap the application with the root of the application DOM being the element on which the ngApp directive was defined.

3. Nothing here {{'yet' + '!'}}
The binding tells AngularJS that it should evaluate an expression and insert the result into the DOM in place of the binding.

# Explaination

### Bootstrapping AngularJS Applications

Bootstrapping AngularJS applications automatically using the ngApp directive is very easy and suitable for most cases.

There are 3 important things that happen during the bootstrap phase:

1. The injector that will be used for dependency injection is created.

2. The injector will then create the root scope that will become the context for the model of our application.

3. AngularJS will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.

Once an application is bootstrapped, it will then wait for incoming browser events (such as mouse clicks, key presses or incoming HTTP responses) that might change the model. Once such an event occurs, AngularJS detects if it caused any model changes and if changes are found, AngularJS will reflect them in the view by updating all of the affected bindings.

Commad: 
1. git clone --depth=16 https://github.com/angular/angular-phonecat.git
2. cd angular-phonecat
3. git checkout -f step-0

================
What is a Travis Yml file?
. travis. yml is a configuration file, which provides instructions to the testing and building software on how to run tests and build any files required by the project. This file is part of the repository's git repository.

JSHint is a static analysis tool written in JavaScript that helps developers detect potential bugs in their JavaScript code and enforce their development team's JavaScript coding conventions.
 This directive is deprecated.
 
 karma.conf.js
  it is a unit testing conf file
package.json
-- define application metadata, dependency, dev dependency, script to star app, perform testing (unit testing, e2e testing)
 

# Step-2

For AngularJS applications, we encourage the use of the Model-View-Controller (MVC) design pattern to decouple the code and separate concerns. With that in mind, let's use a little AngularJS and JavaScript to add models, views, and controllers to our app.

## View
In AngularJS, the view is a projection of the model through the HTML template. This means that whenever the model changes, AngularJS refreshes the appropriate binding points, which updates the view.

## Model & Controller

The data model (a simple array of phones in object literal notation) is now instantiated within the PhoneListController controller. The controller is simply a constructor function that takes a $scope parameter:

### Setup Unit testing Karma

add app.spec.js file.

and testing command: npm test


# Step-3 Compoents

Since this combination (template + controller) is such a common and recurring pattern, AngularJS provides an easy and concise way to combine them together into reusable and isolated entities, known as components. Additionally, AngularJS will create a so called isolate scope for each instance of our component, which means no prototypal inheritance and no risk of our component affecting other parts of the application or vice versa.
To create a component, we use the .component() method of an AngularJS module. We must provide the name of the component and the Component Definition Object (CDO for short).


# Step-4 File Organization

## Organizing by Feature
we are going to group our files into directories by feature. For example, since we have a section in our application that lists phones, we will put all related files into a phone-list/ directory under app/. We are soon to find out that certain features are used across different parts of the application. We will put those inside app/core/.

## Using Modules
As previously mentioned, one of the benefits of having a modular architecture is code reuse — not only inside the same application, but across applications too. There is one final step in making this code reuse frictionless:

Each feature/section should declare its own module and all related entities should register themselves on that module.


## External Templates
Create new file app/phone-list/phone-list.template.html

At runtime, when AngularJS needs to create an instance of the phoneList component, it will make an HTTP request to get the template from app/phone-list/phone-list.template.html.

The URL is relative to our `index.html` file on component


# Step-5 Filtering Repeaters and e2e testing
We will also write an end-to-end (E2E) test, because a good E2E test is a good friend. It stays with your app, keeps an eye on it, and quickly detects regressions.

## Testing
In previous steps, we learned how to write and run unit tests. Unit tests are perfect for testing controllers and other parts of our application written in JavaScript, but they can't easily test templates, DOM manipulation or interoperability of components and services. For these, an end-to-end (E2E) test is a much better choice.

The search feature was fully implemented via templates and data-binding, so we'll write our first E2E test, to verify that the feature works.

Much like Karma is the test runner for unit tests, we use Protractor to run E2E tests. 
Try it with 

``` 
	npm run protractor
```

E2E tests take time, so unlike with unit tests, Protractor will exit after the tests run and will not automatically rerun the test suite 
on every file change. To rerun the test suite, execute *npm run protractor* again.

Notied that when we try to run next time, there is error occured.we need to kill the process (_chromedriver_108.0.5359.71.exe_)

For windows, we need to run the command below:
```
 taskkill /IM chromedriver_108.0.5359.71.exe /F
```

# 6 - Two-way Data Binding
Very simple two way binding example.

