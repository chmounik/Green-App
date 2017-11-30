var express = require('express');
var router = express.Router();
var authenticate = require('../authenticate');
var QuestionModel = require('../models/questionmodel');

router.route('/')

        .post(authenticate.verifyUser,(req, res, next) => {
                let questionDoc = new QuestionModel({
                        username : req.body.username,
                        car : req.body.car,
                        miles : req.body.miles,
                        gas : req.body.gas,
                        therms : req.body.therms,
                        power : req.body.power,
                        flown : req.body.flown,
                        flymiles : req.body.flymiles,
                        housearea : req.body.housearea,
                        people : req.body.people,
                        score : req.body.score
                }).toObject();
                delete questionDoc._id;
                QuestionModel.update(
                    {username : req.body.username}, // find a document with that filter
                    questionDoc, // document to insert when nothing was found
                    {upsert: true, new: true, runValidators: true}, // options
                    (err, response) => { // callback
                        if (err) {
                                res.write("Error updating");
                        } else {
                                res.json({message :"Successfully Updated" , response : response});
                        }
                    }
                );
        });

router.route('/:username')

        .get(authenticate.verifyUser,(req, res, next) =>{
                QuestionModel.find({username : req.params.username},(err,response) =>{
                        if(err){
                                res.write("No record found");
                        }
                        else{
                                res.json({response : response});
                        }
                })
        })

module.exports = router;