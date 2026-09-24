const express = require("express");
const app = express();
app.get("/", (req, res) => {res.send("Test keamanan")});
app.listen(3000, () => { console.log(("jalan di port 3000")) })