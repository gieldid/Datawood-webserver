const express = require("express"); 
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const app = express();
dotenv.config();



app.listen(process.env.SERVER_PORT, function () {
console.log("Server listening at: " + process.env.SERVER_PORT)});

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/weight", require("./controllers/weight.route"));

