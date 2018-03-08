const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();


app.use(bodyParser.json());
app.use(cors());

//replace console log with massive and since this is a promise we need .then
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)

    });
app.get('/api/planes:count', controller.getPlanes);
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

