import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"


export const registerController = async (req,res) =>{
    try {
        const {name,email,password,phone,address} = req.body;
        //validation
        if(!name){
            return res.send({error:"name is required"})
        }
        if(!email){
            return res.send({error:"email is required"})
        }
        if(!password){
            return res.send({error:"password is required"})
        }
        if(!phone){
            return res.send({error:"phone is required"})
        }
        if(!address){
            return res.send({error:"address is required"})
        }
        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Registered please login',
            })
        }
        //Registered user
        const hashedPassword = await hashPassword(password)
        //For save
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();
        res.status(200).send({
            success:true,
            message:'User registered successfulluy',
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        });
    }
}