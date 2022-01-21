const express = require('express');
const { addPage } = require('../views');
const wikiRouter = express.Router();



wikiRouter.get('/', (req, res) => {
    try{
        res.send('getting /wiki')
    }
    catch(error){
        next(error);
    }
});

wikiRouter.post('/', (req, res) => {
    try{
            res.send('getting /wiki post');
    }
    catch(error){
        next(error);
    }
});

wikiRouter.get('/add', (req, res) => {
    try{
            res.send(addPage());
    }
    catch(error){
        next(error);
    }
});


module.exports = wikiRouter;