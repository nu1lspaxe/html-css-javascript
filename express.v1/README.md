# Auto Set up
1. ```npx express-generator --view=pug``` 
    > ```jade``` have already deprecated.
2. ```npm install``` to install dependencies
3. if you are in **powershell**: ```SET DEBUG=[FolderName]:* ; npm start``` or **cmd**: ```SET DEBUG=[FolderName]:* & npm start```

<br>

# Dev Friendly Environment
Your every changes can not be seen soon iff restart server. Configure following setting to help your developing process easier.
1. ```npm install --save-dev nodemon```
2. In ```package.json```, edit as below
    > ```javascript = 
    > "scripts": {
    >   "start": "node ./bin/www",
    >   "devstart": "nodemon ./bin/www"
    > },
3. run ```npm run devstart``` instead

<br>

# Mongoose Tutorial
Mongoose is an ORM on MongoDB. (Good for using schema, and of course, id key)

[Tutorial Link](https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/mongoose)

<br> 

# Appendix

### Why I lose code hint node.js module!!
> run ```npm i @types/express```

### Use "express-async-handler" without try...catch
[express-async-handler](https://www.npmjs.com/package/express-async-handler), this module provides a wrapper function.

### Pug essential tutorial
[Template primer](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)

> Other quick notes of Pug
> - 'extends' means to use `layout.pug` as base template ant it must be placed in first line
> - only named blocks and mixins can appear at the top level of an extending template
> - use '[tag]=', for example 'h1=', to treat the following text as javascript expression.
> - `block` tag is used to mark up sections of content that may be replaced in a derived template (if the block is not redefined then its implementation in the base class is used). For example, 'block content' replaces 'content mark base on base template