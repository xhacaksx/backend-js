import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async ()=>{
    try{
        //mongoose returns object, we can have variable to store
        //console.log(process.env.MONGODB_URI);
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection FAILED ", error)
        process.exit(1)
    }
}

export default connectDB;