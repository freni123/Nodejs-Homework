const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes =require('./routes/v1');
const config = require('./config/config');
const {connectDB} = require('./db/dbConnection');

// http module
// http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

// express using server
const app = express();
// app.get('/',(req,res)=> {
//     res.send('Express server is Running');
//     console.warn('Express server is Running');
//     res.end()
// }).listen(4500);
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

app.use(express.static(path.join(__dirname,`./public`)));

//Routes Namespace upload files
app.use("/v1", routes);

app.use((req,res,next) => {
    next(new Error("Route not Found!"));
});
//Database connection
connectDB();

// create server using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listening");
})

