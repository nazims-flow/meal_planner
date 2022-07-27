const express= require('express');
const router = express.Router();

const{addfoodItem, searchfoodItem}= require('../controllers/foodItemController')

router.route("/addfooditem").post(addfoodItem);
router.route("/searchfoodItem").get(searchfoodItem)


module.exports=router