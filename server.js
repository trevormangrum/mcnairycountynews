//Server layout from https://github.com/vercel/next.js/discussions/10939
const express = require('express');
const next = require('next');
const { default: sslRedirect } = require('heroku-ssl-redirect');
const port = process.env.PORT || 3000; 
const dev = process.env.NODE_ENV !== "production";
const app = next({dev, dir: __dirname});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(sslRedirect())

    server.all('*', (req,res) => {
        return handle(req,res);
    });

    server.listen(port, err => {
        if(err) throw err;
        console.log('Server running.');
    })
});
