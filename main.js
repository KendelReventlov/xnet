const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send("<html><body><p>Lorem ipsum</p></body></html>"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
