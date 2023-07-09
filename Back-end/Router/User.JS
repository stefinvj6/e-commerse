const express = require("express")
const router = express.Router()
const user = require("../Model/UserSchema")
const bcrypt = require("bcrypt")
const saltRounds = 10
const crypto = require("crypto")
const dotenv = require("dotenv")
const jwt = require ("jsonwebtoken")

dotenv.config();

router.get("/",async(req,res)=>{
    try {
        const getUser = await user.find()
        res.json(getUser)        
    } catch (error) {
        res.send(error)
    }

})

router.post("/",async(req,res)=>{
    try {
        const postUser = new user(req.body)
        const Password = req.body.Password
        const hashedPassword = await bcrypt.hash(Password, saltRounds)
        postUser["Password"]=hashedPassword
        await postUser.save()
        res.json(postUser)
    } catch (error) {
        res.send(error)
    }
})



router.post("/login",async(req,res)=>{
    try {
        const { Username, Password } = req.body
        const postUser = await user.find({Username:Username})
        let validUser =null;
        for(const userObj of postUser){
            const hashedPassword = userObj.Password 
            const comparisonResult = await bcrypt.compare(Password,hashedPassword)
            if(comparisonResult){
                validUser=userObj;  
                break;
            }
        }
        
        if(!validUser){
            return res.status(401).json({Messages:"Invalid Username or Password"})
        }
        const token = generateAccessToken(validUser.Username);  
        res.status(200).json({Message:"Login Successfully",Token:token})
    } catch (error) {
        console.error("Login Failed:", error);
        res.status(404).send({Message:"Login Failed"})
    }
})

router.get("/random",async(req,res)=>{
    try {
        const secret = crypto.randomBytes(64).toString('hex')
        res.send(secret)
    } catch (error) {
        res.send(error)
    }
})

function generateAccessToken(Username) {
    const token =jwt.sign({Username},process.env.TOKEN_SECRET,{ expiresIn : '1800s'});
    return token;
}

// router.post("/login",async(req,res)=>{
//     try {
//        const Username = req.body.Username
//        const postUser = await user.find({Username:Username})
//        const Password = req.body.Password
//        const hashedPassword = postUser[0].Password 
//        const comparisonResult = await bcrypt.compare(Password,hashedPassword)
//        res.status(401).json({Message:"Login Successfully"})
//     } catch (error) {
//         res.status(404).send({Message:"Login Failed"})
//     }
// })

// router.post("/login", async (req, res) => {
//     try {
//       const { Username, Password } = req.body;
  
//       const postUser = await user.find({ Username: Username });
  
//       const hashedPassword = postUser[0].Password;
//       const comparisonResult = await bcrypt.compare(Password, hashedPassword);
  
//       if (!comparisonResult) {
//         return res.status(401).json({ Message: "Invalid Username or Password" });
//       }
  
//       res.status(200).json({ Message: "Login Successfully" });
//     } catch (error) {
//       res.status(404).send({ Message: "Login Failed" });
//     }
//   });

// router.post("/login", async (req, res) => {
//     try {
//       const { Username, Password } = req.body;
//       const validUser = await user.findOne({ Username });
  
//       if (!validUser) {
//         return res.status(401).json({ Message: "Invalid Username or Password" });
//       }
  
//       const comparisonResult = await bcrypt.compare(Password, validUser.Password);
  
//       if (!comparisonResult) {
//         return res.status(401).json({ Message: "Invalid Username or Password" });
//       }
  
//       res.status(200).json({ Message: "Login Successfully" });
//     } catch (error) {
//       res.status(404).send({ Message: "Login Failed" });
//     }
//   });

module.exports = router 