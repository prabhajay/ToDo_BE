const mongoose=require('mongoose')
module.exports= ()=>{
    const {DB_USERNAME,
        DB_PASSWORD, 
        DB_NAME}=process.env
//const uri=`mongodb+srv://admin:admin@cluster0.5nykrqk.mongodb.net/?retryWrites=true&w=majority`
const uri=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.5nykrqk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri).catch(err=>{
    console.error(err)})

mongoose.connection.on('open',()=>{
    console.log('Mongoose connected successfully')
})
}
