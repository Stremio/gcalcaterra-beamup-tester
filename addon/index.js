require('dotenv').config();
const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.setHeader('Cache-Control', 'max-age=0, stale-while-revalidate=0, stale-if-error=0, public');
    res.send('all done')
    res.end();
});

app.get('/env', (req, res) => {
    res.setHeader('Cache-Control', 'max-age=0, stale-while-revalidate=0, stale-if-error=0, public');
    res.setHeader('Content-Type', 'application/json');
    
    if(req.query?.var){
        res.send(JSON.stringify(process.env[req.query.var]));
    }else{
        res.send(JSON.stringify(process.env));
    }

    res.end();
});

app.get('/logs', (req, res) => {
    res.setHeader('Cache-Control', 'max-age=0, stale-while-revalidate=0, stale-if-error=0, public');
    if(req.query?.code){
        console.log(`code:${req.query.code}`)
    }else{
        console.log('code:undefined')
    }
    res.send('all done')
    res.end();
});

// create local server
const port = process.env.PORT || 3000;
app.listen((port), function () {
    console.log(`Addon active on port ${port}`);
});