# Jest build up steps

## Common JS

1. Run `npm init` to create your `package.json` file.
2. Let your `package.json` file have something like this below :
  
   ```
     "scripts": {
       "test": "jest"
     },
   ```
3. Install jest by using command `npm init jest@latest`.
4. Name your test file format like: `[filename].test.js`
5. And then just run `npm test`.
   > You can also install plug-in in vscode: [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## ES6 module

1. In `package.json`

   ```
   "type": "module",
   ```

2. Follow steps by [Babel Installation](https://babeljs.io/setup#installation)

## How to write a test file?

### Basic

```javascript
test("[TEST_CASE_NAME]", () => { 
  expect([FUNCTION]).toBe([EXPECTED_VALUE]);
})
```
