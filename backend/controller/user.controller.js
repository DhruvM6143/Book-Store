import { response } from 'express';
import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword
        })
        await createdUser.save();
        res.status(201).json({
            message: "Created Successfully", createdUser: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            }
        });
    } catch (error) {

        res.status(500).json({ message: "Internal Server Error", error });
        return console.log("Error: " + error.message);
    }
}


export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ message: "User not found" })
            return;
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials" })
            return;
        }
        res.status(200).json({
            message: "Login Successfully", user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return console.log("Error: " + error.message);
    }

}