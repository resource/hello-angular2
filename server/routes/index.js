'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    let file = String(fs.readFileSync(path.join(__dirname,'../../client/index.html')));
    res.status('200').send(file);
});

module.exports = router;
