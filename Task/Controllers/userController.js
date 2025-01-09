const userModel = require('../Models/userModel');

exports.signup = async (req, res, next) =>{
    const {name, email, fatherName,password, confirmPassword} = req.body;
    // const userDetails = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     fatherName: req.body.fatherName,
    //     password: req.body.password,
    //     confirmPassword: req.body.confirmPassword
    // }
    if(password !=confirmPassword){
        res.status(400).json({message: "Password and confirm Password should be same"})
    }
    try{
        const db = req.app.locals.db;
        const user = await userModel.findUseryEmail(db, email)
        if(user){
            res.status(400).json({message: "Email already exists, try another mail"})
        }
        const result = await userModel.createUser(db, {name, fatherName, email, password, confirmPassword});
        res.status(200).json({message: "User Registered Successfuly"});
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"})
    }

}

exports.getUser = async (req, res, next) =>{
    try{
        const db = req.app.locals.db;
        const user = await userModel.getUser(db);
        res.status(200).json(user);

    } catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"})
    }
}