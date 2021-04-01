const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(() => {

   console.log("connection is successful");
}).catch((e) =>{
    console.log("No connection");
})