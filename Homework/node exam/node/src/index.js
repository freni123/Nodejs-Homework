const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/v1");
const config = require("./config/config");
const { connectDB } = require("./db/dbconnection");

/* -------------------------- express using server -------------------------- */
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

/* ---------------------- Routes Namespace upload files --------------------- */
app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not Found!"));
});
/* --------------------------- Database connection -------------------------- */
connectDB();
/* ------------------------ create server using http ------------------------ */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listening");
});
