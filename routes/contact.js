const express = require('express');
const { handleGetAllContacts, handleCreateContact } = require('../controllers/contact');

const router = express.Router();

// get for /contacts
router.get('/', handleGetAllContacts);

// router.get('/search');

//post for /contacts
router.post('/', handleCreateContact);

module.exports = router;
