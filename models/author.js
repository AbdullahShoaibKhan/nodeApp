const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstName:{
        type:String,required:true
    },
    familyName:{
        type:String,required:true
    },
    gender:{
        type:String,required:true
    },
    dob:{
        type:String,required:true
    },
    dod:{
        type:String,required:true
    },
})
mongoose.exports=mongoose.models('author',authorSchema);