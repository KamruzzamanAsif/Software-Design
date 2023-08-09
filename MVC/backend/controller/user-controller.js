const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');


const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return next(error);
    }

    if(!users) {
        return res.status(500).json({message: "Internal server error"}); 
    }

    return res.status(200).json(users);
}



const addUser = async (req, res, next) => {
    const { user_name } = req.body;

    if (!user_name) {
        return res.status(422).json({ message: 'Invalid data' });
    }

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ user_name });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Create a new User instance with the hashed password
        const newUser = new User({
            user_name
        });

        // Save the user to the database
        const user = await newUser.save();

        return res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
        return next(err);
    }
};



exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
