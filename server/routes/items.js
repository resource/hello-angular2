'use strict';

const express = require('express');
const router = express.Router();
const ItemsService = require('../services/items-service')

const items = new ItemsService();

router.get('/items', function(req, res) {
    res.status(200).json(items.getItems());
});

router.get('/item/:id', function(req, res) {

    let item;

    if (!req.params.id) {
        res.status('404').json({
            error: {
                code: '503',
                message: 'You must supply an item id.'
            }
        });
        return;
    }

    item = items.getItemWith(req.params.id);

    if (item) {

        res.status(200).json(item);

    } else {

        res.status('404').json({
            error: {
                code: '404',
                message: 'Could not find specified item.'
            }
        });

    }

});



module.exports = router;
