var express = require('express');
var router = express.Router();
var Signup = require('../models/signupmodel');


router.get('/',function(req,res,next){
    res.send("Inside get");
});
router.post('/',function(req,res,next){
    console.log("Inside signup nodejs");
    console.log(req.body.password+'  '+req.body.confirmPassword);
        if(req.body.password != req.body.confirmPassword){
            /*var err = new Error('Passwords do not match');
            err.status = 400;*/
            res.send("passwords dont match");
            //return next(err);
            //console.log('Passwords dont match');
        }
        if(req.body.password && req.body.confirmPassword && req.body.name
                    && req.body.username && req.body.email){
                        //console.log('Inside all pass');
                        var userData = new Signup ({
                            name: req.body.name,
                            username: req.body.username,
                            email: req.body.email,
                            password: req.body.password,
                            passwordconfirm: req.body.confirmPassword
                        });
                        userData.save(function(err){
                            if (err) {
                                //throw err;
                                res.send("User already exists");
                            }
                            //res.statusCode = 200;
                            //res.setHeader('Content-Type', 'text/plain');
                            //console.log("Inserted into DB");
                            res.end('You are Authenticated');
                        });
        }
});

module.exports = router;

