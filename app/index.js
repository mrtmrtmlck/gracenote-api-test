const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const apiRoutes = require("./routes/sports-event.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const url =
  "mongodb://mongodb:27017/gns-api";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.on("error", error => console.error(error));
mongoose.connection.once("open", () => console.log("connected to database"));

const port = 8080;

app.use("/sportsevents", apiRoutes);
app.listen(port, function() {});
