const mongoose = require('mongoose');

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

module.exports = User;

