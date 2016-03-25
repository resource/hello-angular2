'use strict';

// ============================================================
// === Imports ================================================
// ============================================================

// globals

const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const logger = require('./utilities/logger');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const compression = require('compression');

// routes

const index = require('./routes/index');
const items = require('./routes/items');

// ============================================================
// === Setup ==================================================
// ============================================================

// setup

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// route handling

app.use('/api',[items]);
app.use('*',index);

// error handling

app.use((req, res, next) => {

    let err = new Error('Not Found');
    err.status = '404';
    err.message = 'Not found';
    next(err);

});

app.use((err, req, res) => {
    let response = {
        error: {
            status: err.status || '500',
            detail: err.message || 'Error'
        }
    };
    res.status(err.status || '500').json(response);
});

// ============================================================
// === Startup ================================================
// ============================================================

var httpServer = http.createServer(app);
const PORT = process.env.PORT || '3000';

httpServer.listen(PORT, () => {
    logger.info(`HTTP server running at ${PORT}`);
});