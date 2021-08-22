const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const genreSchema= new Schema({
    title:{
        type:String,reuired:true
    },
    detail:{
        type:String,reuired:true
    }
})
module.exports=mongoose.model('genre',genreSchema);