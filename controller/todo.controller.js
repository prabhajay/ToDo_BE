//This one is endpoint and used api checked
const toDoModel=require('../db/models/ToDo.model')
//const {ToDo: toDoModel } =require('../db/models')
const getToDo=async(req,res) =>{res.send(
    'to do get'
)}
const getToDos=async(req,res) =>{res.send(
    'to do get(s)'
)}
const createToDo=async(req,res) =>{
    try{
        const todo=req.body
        const newToDo=await toDoModel.create(todo)
        res.send(newToDo)
        return
    }catch(err){
        res.status(500).send(err.message)
    }
    }
const updateToDo=async(req,res) =>{res.send(
    'to do update'
)}
const deleteToDo=async(req,res) =>{res.send(
    'to do delete'
)}

module.exports = {getToDo,
getToDos,
createToDo,
updateToDo,
deleteToDo
}