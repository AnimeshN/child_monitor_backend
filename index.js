const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000
//const db = require('./config/keys').pool;
const getc = require('./routes/api/child');


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.send(`Base Route`)
});

app.get("/api/child/id/:child_id", getc.getChildById);
app.get("/api/child/all", getc.getAllChildren);
app.get("/api/awc/:awc_id", getc.getChildByAWC);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })