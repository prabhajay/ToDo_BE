require('dotenv').config();

const route=require('route')
const express=require('express');
const {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}=require('./controller').toDo

require('./db/models')()
const app=express();

const port=process.env.PORT || 3000

app.set()
app.get('/api/v1/todo/:id',getTodo)

app.route('/api/v1/todo')
.get(getTodo)
.post(createTodo)
.patch(updateTodo)
.delete(deleteTodo)

app.get('*',(req,res)=>{
    res.send('Not Found')
})

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})