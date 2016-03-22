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
const projects = require('./routes/projects');

// ============================================================
// === Setup ==================================================
// ============================================================

// setup

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

var publicFolder = path.join(__dirname, '../client');
var nodeModulesFolder = path.join(__dirname, '../node_modules');

app.use(express.static(publicFolder));
app.use(express.static(nodeModulesFolder));

// route handling

app.use('*',index);

// error handling

app.use((req, res, next) => {

    if (req.timedout) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    var response = {
        error: {
            status: err.status || 500,
            detail: err.message
        }
    };
    res.status(err.status || 500).json(response);
});

// ============================================================
// === Startup ================================================
// ============================================================

var httpServer = http.createServer(app);
const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
    logger.info('HTTP server running at %d', PORT);
});