const fb = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleErrors = (err) =>{
    throw Error(err.message)
}
exports.register = async(req) =>{
    try{
    const {username,email,password} = req
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await fb.create({
        username,
        email,
        password: hashedPassword,
      });
      if(user == ""){
        
        throw Error("error while registering")
      }
      return user
    }
    catch(err){
        handleErrors(err)
        throw err
    }

}


exports.readall = async() =>{
    try{
        const getallusers = await fb.findAll()
        if(getallusers ==""){
            throw Error("no data found")
        }
        else{
            return getallusers
        }
    }
    catch(err){
        throw err
    }
    
}

exports.deleteuserbyid = async(req) =>{
    try {
        
        const deleteuser = await fb.destroy({where:{id:req.id}})
        if(!deleteuser){
            throw Error("user not deleted")
        }
        
    } catch (error) {
        throw error       
    }
}

exports.updateuser = async(req) =>{
    try {
        const {id,username,email,password} = req
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await fb.findByPk(req.id)
        if(!user){
            throw Error("user not found")
        }
        else{
            const updateuserbyid = await fb.update({
                username,
                email,
                password:hashedPassword,
            },{where:{id : req.id}})
            return updateuserbyid
        }
    } catch (error) {
        handleErrors(error)
        throw error
    }
}

exports.login = async(req) =>{
    try {
        const { email, password } = req;
        const user = await fb.findOne({ where: { email }  });
    
        if (!user) {
          throw Error("user not found")
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          throw Error("password incorrect")
        }
        else{
            return user
        }
    } catch (error) {
        throw error
    }
}