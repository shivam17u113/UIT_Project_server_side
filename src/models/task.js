const mongoose =require('mongoose')
const validator =require('validator')

const taskSchema =  new mongoose.Schema({

    title:{
        type:String,
        trim:true,
        required:true
    },
    done:{
        type :Boolean,
        default:false
    }
},{
    timestamps:true
})

const Task =mongoose.model('Task',taskSchema)

module.exports=Task