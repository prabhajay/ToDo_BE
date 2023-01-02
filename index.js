require('dotenv').config()

const cors=require('cors')

const route=require('route')
const express=require('express');
const { 
    getToDo, 
    createToDo, 
    updateToDo, 
    deleteToDo
 } = require('./controller/todo.controller.js');
 const {login, register}=require('./controller/user.controller.js');
 const modelIndex=require('./controller/index.js')
const { connect } = require('mongoose');

require('./db/index')()
const app=express();
app.use(express.json())
app.use(cors())
const port=process.env.PORT || 3000

app.get('/api/v1/todo/:id',getToDo)

app.route('/api/v1/todo')
.get(getToDo)
.post(createToDo)
.patch(updateToDo)
.delete(deleteToDo)

app.get('*',(req,res)=>{
    res.send('Not Found')
})

app.post('/login',login);
app.post('/register',register);

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})