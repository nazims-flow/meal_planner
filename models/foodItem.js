const mongoose = require('mongoose')

const fooditemSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required: [ true , 'please provide foodItem name'],
        trim: true,
        maxlength: [120 , 'name should not be more than 120 characters']
    },
    calories:{
        type: Number,
        required: [true, 'please provide amount of calories'],

    },
    protein:{
        type: Number,
        required: [true, 'please provide amount of proteins'],

    },
    carb:{
        type: Number,
        required: [true, 'please provide amount of carb'],

    },
    fat:{
        type: Number,
        required: [true, 'please provide amount of fat'],

    },
    acceptedUnits:{
        type: String ,
        required: [true, 'Please select the units from ml , l , kg , g , item'],
        enum: {
            values: [
                'ml',
                'l',
                'kg',
                'g',
                'item'

            ],
            message:'Please select the units from ml , l , kg , g , item'
        }
    },
    itemWeight:{

        type:Number ,
        required: [true, 'Please give item weight in g'],
        message:'Please mention the weight in g'
        
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports=mongoose.model('Fooditem' , fooditemSchema);