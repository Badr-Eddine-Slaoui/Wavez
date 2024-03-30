const express = require('express');
const { addCommand } = require('../Controllers/commandController');
const { getEmail } = require('../Middlewares/commandMiddlewares');

const router = express.Router();

router.post('/buy',getEmail,addCommand);

module.exports = router;