const express = require('express');
const { getAllUsers, addUser} = require('../controller/user-controller');


const router = express.Router();

router.get('/users/', getAllUsers);
router.post('/signup/', addUser);


module.exports = router;