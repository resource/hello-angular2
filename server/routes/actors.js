'use strict';

const express = require('express');
const router = express.Router();
const ActorsService = require('../services/actors-service')

const actors = new ActorsService();

router.get('/actors', function(req, res) {
    res.status(200).json(actors.getActors());
});

router.get('/actor/:id', function(req, res) {

    let actor;

    if (!req.params.id) {
        res.status('404').json({
            error: {
                code: '503',
                message: 'You must supply an actor id.'
            }
        });
        return;
    }

    actor = actors.getActorWith(req.params.id);

    if (actor) {

        res.status(200).json(actor);

    } else {

        res.status('404').json({
            error: {
                code: '404',
                message: 'Could not find specified actor.'
            }
        });

    }

});



module.exports = router;
