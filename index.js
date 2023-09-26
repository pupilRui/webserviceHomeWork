const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const deviceGetter = require('./routes/get-device');
const userGetter = require('./routes/getuser');

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

app = express();

const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', startUp)
app.use('/', deviceGetter)
app.use('/', userGetter)
app.use('/get-device', deviceGetter)



server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});