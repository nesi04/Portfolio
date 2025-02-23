import mongoose, { Mongoose } from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title:{type:String , required:true},
    description:{type:String,required:true},
    imageUrl:{type:String},
    gitHubLink:{type:String},
    liveDemo:{type:String},
    techStack:{type:[String],required:true},
    createdAt:{type:Date,default:Date.now}
});

export default mongoose.model("Project",ProjectSchema);