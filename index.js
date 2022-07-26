const app = require('./app')
const connectWithDb = require('./config/db')

//connect with DB
connectWithDb();

app.listen(8100,()=>{
    console.log(`Server is running at port:8100`)
})