const User = require('../models/user');

exports.handleGetAllContacts = async (req, res) => {
    const users = await User.find({}); // empty object so that it will return all the data
    return res.json({data: users})
}

// export.handleSearchAllContacts = async (req, res) => {
//     const q = req.
// }

exports.handleCreateContact = async (req, res) => {
    const {firstName, lastName, phone} = req.body;
    const user = await User.create({
        firstName,
        lastName,
        phone
    });

    return res.json({status: 'Success', data: user})
}