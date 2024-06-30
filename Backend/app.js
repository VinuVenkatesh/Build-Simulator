const express = require('express');
const app = express();
const port = 3000;
const https = require('https');
const fs = require('fs');
const path = require('path');
const router = require('./routes/router');

const privateKey = fs.readFileSync(path.join(__dirname, 'server.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'server.cert'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);
app.get('/favicon.ico', (req, res) => res.status(204));
app.use(router)

httpsServer.listen(3000, () => {
  console.log('HTTPS Server running on port 3000');
});