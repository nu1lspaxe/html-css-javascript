# Jest build up steps
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
> You can also install plug-in in vscode: [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest).
> 
> This plug-in can tell if your test case wrong in text editor without run command. 
> 
> But I personally prefer to use command line.

## How to write a test file?
### Basic
```
test("[TEST_CASE_NAME]", () => {  // you know, just a function there
  expect([YOUR_FUNCTION]).toBe([YOUR_EXPECTED_VALUE]);
})
```
