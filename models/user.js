const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Specify your name'],
        maxlength: [40 , 'Name should be under 40 characters']
    },
    calorieRequirement:{
        type:Number,
        required:[true, 'Please give your calorie requirement']
    },
    mealPlan:[

        {
            date:{
                type:Date,
                required:[true,'Please specify date']
            },
            meals:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Meal"
            }

        }

    ]


})

module.exports=mongoose.model('User' , userSchema);
