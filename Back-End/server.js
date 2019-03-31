const express =require('express');
const app=express();

const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');

const todoRoutes=express.Router();

const PORT =4000;

let Todo=require('./todo.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todos',{
    useNewUrlParser:true
});
const connection=mongoose.connection;

connection.once('open',function(){
    console.log('Databse Connection established successfully')
});

app.use('/todos',todoRoutes);

app.listen(PORT,function(){
    console.log("Server is running "+PORT);
});