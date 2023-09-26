const express = require("express");
const deviceGetter = express.Router();

deviceGetter.get('/get-device', (req, res) => {
    const retFlags = { isWindows: false, isMac: false, isLinux: false, postmanRunTime: false };
    const whatDeviceIsThis = req.header('User-Agent');

    if (whatDeviceIsThis.includes('Windows')) {
        retFlags.isWindows = true;
    }

    if (whatDeviceIsThis.includes('Macintosh')) {
        retFlags.isMac = true;
    }

    if (whatDeviceIsThis.includes('Linux')) {
        retFlags.isLinux = true;
    }

    if (whatDeviceIsThis.includes('PostmanRuntime')) {
        retFlags.postmanRunTime = true;
    }

    res.send(retFlags);
});

module.exports = deviceGetter;
