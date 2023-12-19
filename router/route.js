import { Router } from "express";
import * as controller from '../controllers/appController.js';
import Auth,{ localVariables } from '../middleWare/auth.js';
import { registerMail } from "../middleWare/mailer.js";

const router = Router();
/** post api */
router.route('/register').post(controller.register) //register user
router.route('/registerMail').post(registerMail); //send mail
router.route('/authentication').post(controller.verifyUser,(req,res)=> res.end()); // finding authentication
router.route('/login').post(controller.verifyUser,controller.login); // user login
/** get api */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser,localVariables,controller.generateOTP) // genetate otp
router.route('/verifyOTP').get(controller.verifyUser,controller.verifyOTP) // veriftying otp
router.route('createResetSection').get() // reset all the variables
/**put api*/
router.route('/updateuser').put(Auth,controller.updateuser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser,controller.resetPassword)  // used ti change password

export default router;