const Meal =require('../models/meal')
const BigPromise = require('../middlewares/bigPromise');

exports.createMeal=BigPromise(async (req , res, next) =>{

    const {category , name, foodItems} = req.body

    const meal= await Meal.create({
        category,
        name,
        foodItems
    })

    res.status(200).json({
        success: true ,
        meal
    });
 

})

exports.updateMeal=BigPromise(async (req , res, next) =>{

    const meal= await Meal.findById(req.params.id)

    if(!meal){
        return next(new CustomError('No meal  found with this id' , 401))
    }

    meal.category = req.body.category;
    meal.foodItems= req.body.foodItems
    
    await meal.save()


    res.status(200).json({
        success: true ,
        meal
    });
 

})