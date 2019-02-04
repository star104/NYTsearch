const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require ("mongoose");
const db = require ("./models/books");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/BookDB", 
{ useCreateIndex: true, useNewUrlParser: true});

app.post('/save', (req, res)=> {
    db.create(req.body).then(result => {
        res.send(result);
    })
})

app.get('/saved', (req, res)=> {
    console.log("in saved")
    db.find({}).then(result => {
        res.send(result);
    })
})
//send id here
//make route to delete 




app.listen(PORT, ()=> {
     console.log(`listening on port : ${PORT}`)
    })