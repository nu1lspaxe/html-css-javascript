# Auto Set up
1. ```npx express-generator --view=pug``` 
    > ```jade``` have already deprecated.
2. ```npm install``` to install dependencies
3. if you are in **powershell**: ```SET DEBUG=[FolderName]:* ; npm start``` or **cmd**: ```SET DEBUG=[FolderName]:* & npm start```

---

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

---

# Mongoose Tutorial
Mongoose is an ORM on MongoDB. (Good for schema, id)
(Tutorial Link)[https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/mongoose]

--- 

### Why I lose code hint node.js module!!
> run ```npm i @types/express```