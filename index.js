const express = require("express");
const mongoose = require("mongoose");
const { formsIdModel }= require('./models/formsId.js');

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h1>You are connected to our server<h1/>");
});

app.get('/api/contact-us', async(req, res) => {
    try{
        const product = await formsIdModel.find({})
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})
app.post("/contact-us", async(req,res) => {

    try {
        const formsidmodel = await formsIdModel.create(req.body);
        res.status(200).json({formsidmodel});
    }catch(error){
        res.status(500).json({message : error.message});
    }
});
app.get('/contact-us', (req, res) => {
    res.status(200).json({ message : req.body})
})


mongoose.connect("mongodb+srv://omolewaotimothy17:3mvYL2v1XXXJqxp9@apitrial.l76yulz.mongodb.net/apitrial?retryWrites=true&w=majority&appName=apitrial")
.then(() => {
    app.listen(3000, () => {
        console.log("connected to server at port 3000");
    })
    console.log("Database connected");
})
.catch(err => {
    res.status(500).send('connection failed');
})