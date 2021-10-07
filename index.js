const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/login", (req, res) => {
    res.send("LOgin");
})
app.listen(8080, () => {
    console.log("app is listening");
})
