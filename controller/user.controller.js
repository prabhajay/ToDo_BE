const bcrypt= require ('bcryptjs');
const jwt=require('jsonwebtoken')
const userModel=require('../db/models/User.model')

const login = async(req,res) =>{
    try {
        const { email, password } = req.body;
        
        const user = await userModel.findOne({ email }).exec();
       
        //if(!newUser || newUser.passwordHash !== passwordHash){
        if(!user)
        {
            res.status(401).send("Incorrect Email or password")
            return
        }
        const isValidPassword= await bcrypt.compare(password,user.password);
       
        if(!isValidPassword)
        {
        res.status(401).send("Incorrect email or password");
        return
        }
        const token=jwt.sign({email},process.env.JWT_SECURT, {expiresIn:'1h'})
        const payload=jwt.verify(token,process.env.JWT_SECURT)

        res.send({token,payload})
    }
    catch(err)
    { 
        res.status(500).send(err.message);
    }
    
}


const register = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(422).send('wrong email or password')
    }
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await userModel.create({ email, password:passwordHash })
    
    res.send(user)
  } catch (e) {
    res.status(500).send("some thing error")
  }
}
module.exports={login,register};