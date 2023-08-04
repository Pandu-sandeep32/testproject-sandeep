const repo = require("../repo/fb_repo")


exports.createfb = async(req,res) => {
    try {
        const getdata = await repo.register(req.body)
        if(getdata != ""){
            res.json(getdata)
        }
    } catch (error) {
        
        //console.error('Error during user registration:', error);
        res.status(500).json({ message: `${error}` });
    }
}

exports.retreiveall = async(req,res) =>{
    try{
        const readalldata = await repo.readall()
        if(readalldata != ""){
            res.json(readalldata)
        }
        
    }
    catch(error){
        console.error('Error during retreiving data:', error);
        res.status(500).json({ message: 'An error occurred during retreiving data.' });
    }
}

exports.deleteuserbyid = async(req,res) =>{
    try {
        const deleteuser = await repo.deleteuserbyid(req.body)
       
            res.json({message:"user deleted succefully"})
        
    } catch (error) {
        console.error('Error during deleting data:', error);
        res.status(500).json({ message: 'An error occurred during deleting data.' });
    }
}

exports.updateuser = async(req,res) =>{
    try {
        const updateddata = await repo.updateuser(req.body)
        if(updateddata != ""){
            res.json({message:"updated successfully"})
        }
    } catch (error) {
        console.error('Error during updating data:', error);
        res.status(500).json({ message:  `${error}` });
    }
}

exports.login = async(req,res) =>{
    try {
        const login = await repo.login(req.body)
        if(login!=""){
            res.json(login)
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: `${error}` });
    }
}