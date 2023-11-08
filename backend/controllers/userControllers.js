const asyncHandler = require("express-async-handler")
const User= require('../models/UserModel')
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler (async(req,res) =>{
    const {name,email,password,pic} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please fill all fields');
    }

    // check for existing user
    const userExists= await UserActivation.findOne({email});

    if (userExists){
        res.status(400)
        throw new Error ('Email already in use')
    }
    // create and save a user 
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic:user.pic,
            token: generateToken(user._id),

        })
    } else{
        res.status(404);
        throw new Error("Failed to find user");
    }
    
});


const authUser= asyncHandler(async(req,res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email});

    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })       
    }else{
        res.status(401);
        throw new Error ("Invalid Email or Password")
    }
});

module.exports= {registerUser, authUser}