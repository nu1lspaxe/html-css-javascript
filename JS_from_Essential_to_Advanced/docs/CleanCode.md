# Clean Code (in JavaScript)

- [Clean Code (in JavaScript)](#clean-code-in-javascript)
  - [Variables](#variables)
  - [Functions](#functions)
  - [Objects](#objects)
  - [Classes](#classes)
  - [SOLID Principle](#solid-principle)
  - [Testing](#testing)
  - [Formatting and Comments](#formatting-and-comments)

<br>

## Variables

1.  Use meaningful and pronounceable variable names

    ```javascript
    // DON'T: var yyyymmdd;

    var yearMonthDay;
    ```

2.  Use ES6 constants when variable values do not change

    ```javascript
    // DON'T: var SERVER_PORT = 3000;

    const SERVER_PORT = 3000;
    ```

3.  Use the same vocabulary for hte same type of variable

    ```javascript
    // DON'T: getUserInfo(), getClientData(), getCustomerRecord()...

    getUser();
    ```

4.  Use searchable names

    ```javascript
    // DON'T: for (let i = 0; i < 52600; i++) { /* ... */ }

    const MINUTES_IN_A_YEAR = 52600;
    for (let i = 0; i < MINUTES_IN_A_YEAR; i++) {
      runCronJob();
    }
    ```

5.  Use explanatory variables

    ```javascript
    const regexCityState = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;

    // DON'T: saveCityState(regexCityState.match(regexCityState)[1], regexCityState.match(regexCityState)[2]);

    const match = regexCityState.match(regexCityState);
    const city = match[1];
    const state = match[2];
    saveCityState(city, state);
    ```

6.  Do not add unneeded context

    ```javascript
    // DON'T: carMake, carModel, carColor...

    var Car = {
      make: "Honda",
      model: "Accord",
      color: "Blue",
    };

    function paintCar(car, color) {
      car.color = color;
    }
    ```

7.  Short-circuiting is cleaner than conditionals

    ```javascript
    // DON'T: if...else... statement

    function addTitle(article, title) {
      article.title = title || "Untitled";
    }
    ```

<br>

## Functions

1.  Function arguments (2 or fewer ideally)

    ```javascript
    const menuConfig = {
      title: "Foo",
      body: "Bar",
      buttonText: "Click ME!",
      cancellable: true,
    };

    // DON'T: function createMenu(title, body, buttonText, cancellable) { /* ... */ }

    function createMenu(menuConfig) {
      /* ... */
    }
    ```

2.  Functions should do one thing

    ```javascript
    // DON'T: write two(or more) actions in one function

    function emailClients(clients) {
      clients.filter(isClientActive).forEach(email);
    }

    function isClientActive(client) {
      const clientRecord = database.lookup(client);
      return clientRecord.isActive();
    }
    ```

3.  Function names should say what they do

    ```javascript
    // DON'T: addToDate()

    function addMonthToDate(month, date) {
      /* ... */
    }
    ```

4.  Functions should only be one level of abstraction

    ```javascript
    // DON'T: reduce dependency, i.e., get c from b.forEach() and get b from a.forEach()

    function tokenize(code) {
      const REGEXES = [
        // ...
      ];
      const statements = code.split(" ");
      const tokens = [];

      REGEXES.forEach((REGEX) => {
        statements.forEach((statement) => {
          tokens.push(/* ... */);
        });
      });

      return tokens;
    }

    function lexer(token) {
      const ast = [];
      tokens.forEach((token) => {
        ast.push(/* ... */);
      });

      return ast;
    }

    function parseBetterJS(code) {
      const tokens = tokenize(code);
      const ast = lexer(tokens);
      ast.forEach((node) => {
        /* ... */
      });
    }
    ```

5.  Remove duplicate code

6.  Don't use flags as function parameters

    ```javascript
    function createFile(name) {
      fs.create(name);
    }

    function createTempFile(name) {
      fs.create(`./temp/${name}`);
    }
    ```

7.  Avoid side effects\
    Don't change the global variable if you want to do something to it.

8.  Don't write to global functions

    ```javascript
    // DON'T: Array.prototype.diff = function() { /* ... */ };

    class extendArray extends Array {
        function diff() { /* ... */ };
    }
    ```

9.  Favor functional programming over imperative programming\
    Use functions such as `.map(), .reduce(), .filter()...` instead of `for loop`.

10. Encopsulate conditionals

    ```javascript
    // DON'T: if (fsm.state === 'fetching' && isEmpty(listNode)) { /* ... */ }

    function isSpinner(fsm, listNode) {
      return fsm.state === "fetching" && isEmpty(listNode);
    }

    if (isSpinner) {
      /* ... */
    }
    ```

11. Avoid negative conditionals

12. Avoid conditionals
    Instead of using `switch...case...`, should replace with `class...extends...`

13. Remove dead code

<br>

## Objects

1. Use getters and setters
2. Make objects have private members

## Classes

1. Prefer ES2015/ES6 classes over ES5 plain functions
2. Use method chaining\
    When you create a `class`, **do not** just `this.[___] = ___;`\
    Add one line `return this;`
3. Prefer composition over inheritance\
    If they have directly relationships.

## SOLID Principle

- **S**: Single Responsibility
- **O**: Open/Closed
- **L**: Liskov Substitution
- **I**: Interface Segregation
- **D**: Dependency Inversion

Article : [freeCodeCamp - SOLID Principles](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)\
Video : [freeCodeCamp - Clean Code: SOLID](https://youtu.be/XzdhzyAukMM?si=G-uQPWNybi3iETX7)

## Testing
1. Single concept per test
2. Use ES6 `Promises`, not callbacks
3. ES8 `Async/Await` are even cleaner than Promises
4. Error Handling, don't ignore caught errors

## Formatting and Comments

- Formatting
    1. Use consistent capitalization
    2. Function callers and callees should be close
- Comments
    1. Only comment thing that have business logic complexity
    2. Don't leave commented out code in your codebase
    3. Don't have journal comments
    4. Avoid positional markers