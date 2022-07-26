const express= require('express');
const router = express.Router();


const {createUser,updateMealPlan}= require('../controllers/userController');

router.route("/createuser").post(createUser);
router.route("/updatemealplan/:id").post(updateMealPlan);



module.exports=router