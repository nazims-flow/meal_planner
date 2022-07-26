const Fooditem =require('../models/foodItem')
const BigPromise = require('../middlewares/bigPromise');


exports.addfoodItem=BigPromise(async (req , res, next) =>{
    
    const {name , calories, protein , carb, fat , acceptedUnits , itemWeight} =req.body

    const foodItem = await Fooditem.create({
        name,
        calories,
        protein,
        carb,
        fat,
        acceptedUnits,
        itemWeight
    })



    res.status(200).json({
        success: true ,
        foodItem
    });
 

})