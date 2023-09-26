const express = require("express");
const userGetter = express.Router();

userGetter.post('/getuser', (req, res) => {
    const userName = req.body.userName;
    console.log("try to get user info for " + userName);
    const userInfo = {
        Name: "John Doe",
        LoginId: "19877",
        SISId: "123456789",
        Section: "A",
    }
    res.send(userInfo);
});

module.exports = userGetter;
