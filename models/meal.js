const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({

    category: {
        type:String,
        required:[true, 'Please specify the meal Breakfast, Lunch , Snack, Dinner'],
        enum:{
            values:[
                'Breakfast',
                'Lunch',
                'Snack',
                'Dinner'
            ]
        },
        message:'Please specify the meal Breakfast, Lunch , Snack, Dinner'

        
    },

    name:{
        type:String,
        required:[true, 'Please give the name']
    },

    foodItems:[
        {
        item:{
            type:  mongoose.Schema.ObjectId,
            ref: 'Fooditem',
            required:true
        }  
        }
    ]

})

module.exports=mongoose.model('Meal' , mealSchema);