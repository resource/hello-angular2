'use strict';

const express = require('express');
const router = express.Router();
var cloudinary = require('cloudinary');

const projects = [{
    id: "digits",
    name: "Digits",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum ante, ornare eu congue ut, congue at lacus. Nam sapien sapien, suscipit nec lacus vel, vestibulum pulvinar risus. Vestibulum molestie lectus sed odio bibendum, ullamcorper imperdiet libero lobortis.",
    poster:"/images/digits/digits2.png",
    images:[{
        id:"digits1",
        caption:"Caption for image 1",
        source:"/images/digits/digits1.png"
    },{
        id:"digits2",
        caption:"Caption for image 2",
        source:"/images/digits/digits2.png"
    },{
        id:"digits3",
        caption:"Caption for image 3",
        source:"/images/digits/digits3.png"
    },{
        id:"digits4",
        caption:"Caption for image 4",
        source:"/images/digits/digits4.png"
    },{
        id:"digits5",
        caption:"Caption for image 5",
        source:"/images/digits/digits5.png"
    },{
        id:"digits6",
        caption:"Caption for image 6",
        source:"/images/digits/digits6.png"
    }]
}];

router.get('/projects', function(req, res) {
    res.status(200).json(projects);
});

router.get('/project/:id', function(req, res) {

    projects.forEach((project) => {
        if (project.id === req.params.id) {
            res.status(200).json(project);
            return;
        }
    });

    res.status('404').json({
        error:{
            code:'404',
            message:'Could not find project'
        }
    });

});



module.exports = router;
