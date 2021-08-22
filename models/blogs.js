const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const bookSchema= new Schema({
    title:{
        type:String,required:true
    },
    author:{
        type:String,required:true
    },
    context:{
        type:String,required:true
    },
    genre:{
        type:String,require:true
    }
    },{timestamps:true})

module.exports=mongoose.model('Blog',blogSchema);
