const express=require ('express')

//controllers func

const{loginUser,signupUser} = require('../controllers/userController')



const router =express.Router()


router.post('/login',loginUser)

router.post('/signup',signupUser)



module.exports=router