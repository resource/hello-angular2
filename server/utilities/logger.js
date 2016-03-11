'use strict';

// ============================================================
// ============================================================
// ============================================================

const tracer = require('tracer');

// ============================================================
// ============================================================
// ============================================================

module.exports = tracer.colorConsole({
    level: process.env.LOG_LEVEL || 'info',
    format : [ '{{timestamp}} [{{title}}] ({{file}}:{{line}}) {{message}}'],
    dateformat : 'HH:MM:ss.L',
    preprocess :  function(data){
        data.title = data.title.toUpperCase();
        data.file = data.file.split('.')[0];
    }
});