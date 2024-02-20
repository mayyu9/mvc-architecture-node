require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const contactRouter = require('./routes/contact');
const url = process.env.MONGOOSE_URL;
// console.log('thakur url: ', url);

// mongoose.connect("mongodb+srv://ThakurMahendarSingh:<password>@cluster0.4rweglh.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect(url)
.then(() => {
    console.log('mongo db connected');
}).catch( (err) => {
    console.log('connection error: ',err);
})


const port = 8000;
const app = express();

app.use(express.json());

app.use('/contacts', contactRouter);

app.listen(port, () => console.log('server started....'));
