const mongoose=require('mongoose')
const alienSchema=new mongoose.Schema
({
    name:
    {
        type:String,
        required:true
    },
    Roll:
    {
        type:Number,
        required:true
    },
    Dept:
    {
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Alien',alienSchema)
