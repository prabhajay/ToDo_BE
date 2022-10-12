require('dotenv').config();

const route=require('route')
const express=require('express');
const { 
    getToDo, 
    createToDo, 
    updateToDo, 
    deleteToDo
 } = require('./controller/todo.controller');

require('./db/index')()
const app=express();
app.use(express.json())

const port=process.env.PORT || 3000

app.set()
app.get('/api/v1/todo/:id',getToDo)

app.route('/api/v1/todo')
.get(getToDo)
.post(createToDo)
.patch(updateToDo)
.delete(deleteToDo)

app.get('*',(req,res)=>{
    res.send('Not Found')
})

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})