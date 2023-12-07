const express=require('express')
const connectToMongodb = require('./db/Connection');
const  formdataRoutes= require('./Routes/Formdata.routes');


require('dotenv').config()

let app=express()
app.use(express.json())
app.use('/api/formdata',formdataRoutes)



// ! we are just running server here--------------------and connecting it to the server
let StartServer=async()=>
{

    try{
        app.listen(process.env.DEV_PORT,()=>
        {
            console.log(`Server is running on port ${process.env.DEV_PORT}`);
        })

        await connectToMongodb(process.env.DEV_Mongo_URL);
        console.log('Mongo connected succesfully');
        
    }
    catch(err)
    {
        console.log(err);
    }
} 
StartServer() 