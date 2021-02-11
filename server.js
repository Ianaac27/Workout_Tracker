const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"));

app.listen(PORT, () => {
    console.log("App running on localhost:" + PORT)
});