const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const Knex = require("knex");
const { Model } = require("objection")
const knexconfig = require("./knexfile");
// Set up the express app
const app = express();
const port = 4000;
const routes = require("./Routes/route")

// knex intialization
const knex = Knex(knexconfig['development']);
Model.knex(knex);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes)

// app.get('/check', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})