const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname));

require('./routes/routes_HTML')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  