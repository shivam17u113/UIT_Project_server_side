const express =require('express')
const Task =require('../models/task.js')

const router = new express.Router()
var ObjectID = require('mongodb').ObjectID;

router.post('/task',async(req,res)=>
{
    var task=new Task(req.body)

   
   try {
    console.log(task)
    await task.save()
    res.status(400).send('task saved successfully')
 
   } catch (error) {
    res.status(500).send(e)

   }
})

module.exports=router