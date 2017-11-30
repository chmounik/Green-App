var express = require('express');
var router = express.Router();
var passport = require('passport');
var Signup = require('../models/signupmodel');
var authenticate = require('../authenticate');


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
                        Signup.register(new Signup ({
                            name: req.body.name,
                            username: req.body.username,
                            email: req.body.email,
                            password: req.body.password,
                            passwordconfirm: req.body.confirmPassword
                        }),req.body.password,(err,user) =>{
                            if(err){
                                //console.log("Inside error");
                                res.json({success: false, status: 'User Already Exists'});
                            }
                            else{
                                passport.authenticate('local')(req, res, () => {
                                //console.log("registered")
                                res.json({success: true, status: 'User registered successfully'});
                                //res.send("User registered successfully");
                            });
                        }
                    });
        }
});

/*router.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
  });*/

  router.post('/login', function(req, res,next){
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.json( { message: info.message }) }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        var token = authenticate.getToken({_id: user._id});
        res.json({success: true, token: token, status: 'You are successfully logged in!'});
      });
      
    })(req, res, next);  

});
module.exports = router;

