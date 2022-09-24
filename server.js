// const hello = require("./hello");

// hello.sayHello();

// const lib = require("./lib");
// console.log(lib.halfOf(10));

// // Node
// const http = require("http");
// http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello, World!");
// }).listen(3000);

// console.log("Server running at http://localhost:3000/");

const connect = require('connect');
const app = connect();
app.listen(3000);

const logger = (request, response, next) => {
    console.log(request.method, request.url);
    next();
};

const helloWorld = (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello, World!');
};

const goodbye = (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Good bye!');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbye);

console.log("Server running at http://localhost:3000/");
