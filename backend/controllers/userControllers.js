const asyncHandler = require("express-async-handler");
const User = require('../models/UserModel');
const generateToken = require('../config/generateToken');
const { error } = require("console");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please provide name, email, and password');
    }
    

    try {
        // Check for existing user
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400);
            throw new Error('Email already in use');
        }

        // Create and save a user
        const user = await User.create({
            name,
            email,
            password,
        });

        if (user && (await user.matchPassword(password))) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(404);
            throw new Error("Failed to find user");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("Invalid Email or Password");
        }
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

module.exports = { registerUser, authUser };
