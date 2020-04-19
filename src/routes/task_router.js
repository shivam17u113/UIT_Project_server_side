const express =require('express')
const Task =require('../models/task.js')

const router = new express.Router()
var ObjectID = require('mongodb').ObjectID;

router.post('/task',async(req,res)=>
{
    console.log("in router post")
    var task=new Task(req.body)
    console.log("in post request ",task)

   try {
    console.log(task)
    await task.save()
    res.status(201).send('task saved successfully')
 
   } catch (error) {
    res.status(500).send(e)

   }
})

router.get('/task_list',async(req,res)=>
{
        console.log('req is ',req)
        try {
            const data= await Task.find({}).sort({"createdAt":1})
            res.status(201).send(data)
          //  console.log(data)
        } catch (e) {
            res.status(500).send(e)
            console.log("error is ",e)
        }
        
})

router.get('/task_id/:id',async(req,res)=>
{
   // it is necessary to pass _id only to findById() not req.param.id
    const _id=ObjectID(req.params.id)
try {
    const data = await Task.findByIdAndRemove(_id)
    console.log(data)
    res.status(201).send()

} catch (e) {
    console.log(e)
    res.send(e)
}


})

module.exports=router