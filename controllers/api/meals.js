const Meal = require('../../models/Meal')
const express = require('express');
const router = express.Router();
const User = require('../../models/user')

function create(req,res){
    console.log(`create function ran`)
    // let user
    try{
        // console.log(req.body)
        Meal.create(req.body)
        .then((data)=> {
            console.log(data)
            // console.log(req.body[0].userId)
            User.updateOne({_id:req.body[0].userId},
                {$push:{meals:data}})
            })
            .then((message) => {
                // console.log(message)
            })
    } catch (e) {
        res.status(400).json(e)
    }
}


  module.exports = {create};