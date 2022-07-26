const express= require('express');
const router = express.Router();

const{ createMeal, updateMeal}= require('../controllers/mealController')

router.route("/createmeal").post(createMeal);
router.route("/updateMeal/:id").post(updateMeal);



module.exports=router