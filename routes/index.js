var express = require('express');
var router = express.Router();
var cymail = require('../modules/mails/CYMail');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Half Realty - Neptune'});
});

router.post('/', function (req, res, next) {
    if (req.body.service_code) {
        if (req.body.service_code === 'register') {
            cymail.sendEmail(req.body, function (data) {
                res.render('thankyou', {
                    title: 'Half-Realty Taurus'
                });
            });
        }
    } else {
        res.send('SERVICE_CODE');
    }
});
module.exports = router;
