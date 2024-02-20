require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');


const url = process.env.MONGOOSE_URL;
// console.log('thakur url: ', url);

// mongoose.connect("mongodb+srv://ThakurMahendarSingh:<password>@cluster0.4rweglh.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect(url)
.then(() => {
    console.log('mongo db connected');
}).catch( (err) => {
    console.log('connection error: ',err);
})

// model for user collection
// {{$randomFullName}}"
const {Schema} = mongoose
// const userSchema = new mongoose.Schema({
 // unique true - mongoose creates an index on that field
 // required true- ensure that field value is not null

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true });

// const userSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     phone: String,
// }, {timestamps: true});


// To use our schema definition, we need to convert our uerSchema into a Model we can work with
const User = mongoose.model('user', userSchema);

const port = 8000;
const app = express();

app.use(express.json());

// create a route to check 

app.get('/users', async (req, res) => {
    const users = await User.find({});
    return res.json({data: users})
})
app.post('/user', async (req,res) => {
    const {firstName, lastName, phone} = req.body;
    const user = await User.create({
        firstName,
        lastName,
        phone
    });

    return res.json({status: 'Success', data: user})
})

app.listen(port, () => console.log('server started....'));
