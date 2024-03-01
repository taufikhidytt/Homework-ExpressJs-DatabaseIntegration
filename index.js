const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const router = require('./routes');

app.use('/api', router);


db.connect((err) => {
    return err ? console.log(err) : console.log("database connected");;
});
app.listen(port);
