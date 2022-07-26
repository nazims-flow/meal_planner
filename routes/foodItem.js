const express= require('express');
const router = express.Router();

const{addfoodItem}= require('../controllers/foodItemController')

router.route("/addfooditem").post(addfoodItem);



module.exports=router