//This one is endpoint and used api checked


const getTodo=(req,res) =>{res.send(
    'to do get'
)}
const getTodos=(req,res) =>{res.send(
    'to do get(s)'
)}
const createTodo=(req,res) =>{res.send(
    'to do create'
)}
const updateTodo=(req,res) =>{res.send(
    'to do update'
)}
const deleteTodo=(req,res) =>{res.send(
    'to do delete'
)}

module.exports = {getTodo,
getTodos,
createTodo,
updateTodo,
deleteTodo
}