const User=require('../models/user')
const BigPromise = require('../middlewares/bigPromise');


exports.createUser = BigPromise(async(req,res)=>{
    const {name , calorieRequirement , mealPlan} = req.body

    const user = await User.create({
        name,
        calorieRequirement,
        mealPlan

    })

    
    res.status(200).json({
        success: true ,
        user
    });

});

exports.updateMealPlan =BigPromise(async (req , res, next) =>{

    const user= await User.findById(req.params.id)

    if(!user){
        return next(new CustomError('No meal  found with this id' , 401))
    }

    user.mealPlan= req.body.mealPlan;
    
    await user.save()


    res.status(200).json({
        success: true ,
        user
    });
 

})
