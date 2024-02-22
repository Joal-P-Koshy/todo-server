// 1) import json server.
const jsonServer = require('json-server');

// 2) create json server
const toDoServer = jsonServer.create();

// 3) create a connection to db.json. It uses a method named router.
const router = jsonServer.router('db.json');

// 4) create a middleware
const middleware = jsonServer.defaults();

// 5) use this middleware
toDoServer.use(middleware);
toDoServer.use(router);

const port = 5000;

toDoServer.listen(port, ()=>{
    console.log(`Server is up and running in port ${port}`);
})