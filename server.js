const express = require('express');
const router = require('./backend/routes/route');
const bodyParser = require('body-parser');
const mongodb = require('./backend/db/connect');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
});
app.use('/', router);
app.get('/', (req, res) => {
    res.send("Hello Francky")
})

mongodb.initDb((err, mongodb) => {
    if(err){
        console.log("View Error: ", err);
    }else{
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        });
    }
});
