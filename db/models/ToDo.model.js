const mongoose=require('mongoose');
const toDoschema=new mongoose.Schema({
    todo:{
        type:String,
        required:[true,'to do text is required']
    },
    isCompleted:{
        type:String,
        default:false
    }
})
const ToDo=mongoose.model('ToDo',toDoschema)
module.exports = ToDo