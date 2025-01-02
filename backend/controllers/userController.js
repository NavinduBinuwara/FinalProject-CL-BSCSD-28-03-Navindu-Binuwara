import validator from 'validator'
import bycript from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
// API to register user
const registerUser = async (req,res) => {
    try {

        const { name, email, password} = req.body

        if (!name || !password || !email) {
            return res.json({success:false,message:"Missing Details"})
        }
        
        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Enter a valid email"})
        }
        
        // validating strong password
        if (password.length < 8) {
            return res.json({success:false,message:"Enter a strong password"})
        }

        // hashing user password
        const salt = await bycript.genSalt(10)
        const hashedPassword = await bycript.hash(password,salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET )

        res.json({success:true,token})
        
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }
}

//API For use Login
const loginUser = async (req,res) => {

    try {

        const {email,password} = req.body
        const user = await userModel.findOne({email})

        if (!user) {
           return res.json({sucess:false,message:'User Does Not exist'})
        }

        const isMatch = await bycript.compare(password,user.password)

        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true,token})
        } else{
            res.json({success:false,message:"Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }

}

export {registerUser,loginUser}