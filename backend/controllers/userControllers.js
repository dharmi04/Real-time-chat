const asyncHandler = require("express-async-handler")


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
    const User = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic:user.pic

        })
    } else{
        res.status(404);
        throw new Error("Failed to find user");
    }
    
})

module.exports= {registerUser}