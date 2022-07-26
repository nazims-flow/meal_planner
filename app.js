const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

const user = require('./routes/user');
const foodItem= require('./routes/foodItem');
const createMeal = require('./routes/meal')


app.use("/api/v1" , createMeal);
app.use("/api/v1" , foodItem)
app.use("/api/v1" , user)


module.exports=app;