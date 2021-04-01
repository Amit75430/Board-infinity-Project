const express = require("express");
const Todo = require("./models/todo");
require("./db/conn");
const Student = require("./models/todo");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

// create a file


app.post("/todo", async(req,res) => {
    try{

    
    const user = new Todo(req,res) 
    const createUser = user.save();
    res.status(201).send(user);
    }catch(e){
    res.status(400).send(e);}
})


app.get("/todo", async(req,res) => {
    try{
        const tododata = await Todo.find();
        res.send(tododata)
    }catch(e){
        res.send(e)
    }
})

app.get("/todo/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const todosdata = await Todo.findById(_id);

        if(!tododata){
            return res.status(404).send();
        }else{
            res.send(todosdata);
        }
        res.send(todosdata)

    }catch(e){
        res.status(500).send(e)
    }
})

app.delete("/todo/:id", async(req,res) => {
    try{
        const TestSchema = await Todo.findByIdAndDelete({
            expire_at: {type: Date, default: Date.now, expires: 1800} 
        });
    }catch(e){
        res.status(500).send(e);
    }

})

app.listen(port, () => {
    console.log(`connect is setup at ${port}`);
})