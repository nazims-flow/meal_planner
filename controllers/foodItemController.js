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

exports.searchfoodItem=BigPromise(async (req , res, next) =>{
    
    const {calories} =req.body
    const highCalorie=calories+100;
    const lowCalorie=calories-100;
    const FoodItem=await Fooditem.find();
    var food=[]
    function checkProtein(protein,calories){
        const protien_conversion=4*protein;
        if(pr<=(calo*0.3) && pr>=(calory*0.2)){
            return true;
        }
        else{
            return false;
        }
    }
    for (var i=0; i < FoodItem.length; i++) {
        if(FoodItem[i].calories<highCalorie&&FoodItem[i].calories>lowCalorie){
            if(checkProtein(FoodItem[i].protein,FoodItem[i].calories)){
            food.push(FoodItem[i]);
            }
        }
     }

   res.send(ans);
 

})