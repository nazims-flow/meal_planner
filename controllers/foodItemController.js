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
    


   const {givenCalories} =req.body
    
   const FoodItem=await Fooditem.find();

   async function checkProtein(protein,calory){
       var prCal=4*protein;
       if(prCal<=(calory*0.3)&&prCal>=(calory*0.2)){
           return true;
       }
       else{
           return false;
       }
   }
   async function check(temp){
       for(var i=0;i<foodPlan.length;i++){
           if(foodPlan[i].length==temp.length){
               for(var j=0;j<temp.length;j++){
                   if(foodPlan[i][j]==temp[j]){
                       return false;
                   }
               }
           }
       }
       return true;
   }
   var foodPlan=[];
   var low=caloryReq-100;
   var high=caloryReq+100;
   var temp=[];
   async function search(temp,cal,ind){
      
       if(temp.length>5){
           return 0;
       }
       if(ind>=FoodItem.length){
           return 0;
       }
       if((cal<hi)&&(cal>lo)){
           if((temp.length>=2)&&(await check(temp))){
           var prCal=0;
           for(var j=0;j<temp.length;j++){
               prCal+=temp[j].protein;
           }
           if(await checkProtein(prCal,cal)){
           var arr=[];
           for(var i=0;i<temp.length;i++){
               arr.push(temp[i]);
           }
           foodPlan.push(arr);
       }
       }
       }
       if(cal>hi){
           return 0;
       }
           
           
        await search(temp,cal,ind+1);
        temp.push(FoodItem[ind]);
        cal+=FoodItem[ind].calories;
        await search(temp,cal,ind+1);
        temp.pop();
        cal-=FoodItem[ind].calories;
          
   }
   await search(temp,0,0);
       
    res.status(200).json({
    success: true ,
    foodPlan
    });
 

})