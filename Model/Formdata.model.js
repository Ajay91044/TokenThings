const {Schema,model} = require('mongoose');

let formSchema=new Schema(
    {

        fname:{
            type:String,
            required:true,
        },
        Email:{
            type:String,
            required:true,
        },
        Mobile:{
            type:Number,
            required:true,
        },
        Pass:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },

    } 
,{timestamps:true})


//! doubt below 
module.exports=model('formdata',formSchema)