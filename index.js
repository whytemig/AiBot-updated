const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routerChat = require("./routes/chat");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;

app.use("/", routerChat);

app.listen(port, console.log("Server is working on Port " + port));
