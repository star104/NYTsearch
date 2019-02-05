const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models/books");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/BookDB",
    { useCreateIndex: true, useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.post('/save', (req, res) => {
    db.create(req.body).then(result => {
        res.send(result);
    })
})

app.get('/saved', (req, res) => {
    console.log("in saved")
    db.find({}).then(result => {
        res.send(result);
    })
})
//send id here
//make route to delete 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`)
})