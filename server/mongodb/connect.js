import mongoose from "mongoose";

const connectDB=(url)=>{
    mongoose.set('strictQuery',true);//it isusefull when working set functionality
    mongoose.connect(url)
    .then(()=>console.log('MongoDb connected'))
    .catch((err)=>console.log(err))
}
export default connectDB




