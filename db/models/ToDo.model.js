const mongoose=require('mongoose');
const toDOschema=new mongoose.Schema({
    todo:{
        type:String,
        required:[true,'to do text is required']
    },
    isCompleted:{
        type:String,
        default:false
    }
})
const ToDo=mongoose.model('ToDo',toDOschema)
module.exports = ToDo