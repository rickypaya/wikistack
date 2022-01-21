const express = require('express');
const { addPage } = require('../views');
const { Page } = require('../models');
const wikiRouter = express.Router();



wikiRouter.get('/', (req, res, next) => {
    try{
        res.send('getting /wiki')
    }
    catch(error){
        next(error);
    }
});
function slugFromTitle(title, options){
    options.slug = title.replace(/s+/g,'_').replace(/\W/g,'');
}
wikiRouter.post('/', async (req, res, next) => {
    try{
        const { title, content } = req.params;
            const page = await Page.create({
                title: title,
                content: content
            })
            page.addHook('beforeValidate', slugFromTitle(title, page))
            res.redirect('/');
    }
    catch(error){
        next(error);
    }
});

wikiRouter.get('/add', (req, res, next) => {
    try{
            res.send(addPage());
    }
    catch(error){
        next(error);
    }
});


module.exports = wikiRouter;
