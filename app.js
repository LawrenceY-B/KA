const express = require('express');
const path = require('path');
const app=express();
const bodyparser= require('body-parser');
const mongoose = require('mongoose');
require('mongoose-type-email');
const port= process.env.PORT || 3000;
const publicDirectoryPath= path.join(__dirname,'./public');
app.use(express.static(publicDirectoryPath))
app.use(bodyparser.urlencoded({extended: true}))

const connectDB = async () => {
  try {
      await mongoose.connect(`mongodb+srv://larry:mamamia@cluster0.voe6t.mongodb.net/KAdb`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('MongoDB connected!!');
  } catch (err) {
      console.log('Failed to connect to MongoDB', err);
  }
};
const dbschema={
FullName:String,
Email:{ type: String, require: true, unique: true },
Phonenumber:Number,
}
const db =mongoose.model('db',dbschema);
app.get('/', (req,res)=>{
res.sendFile(__dirname +'/index.html')})
app.get('/joinus.html', (req,res)=>{
res.sendFile(__dirname +'/joinus.html')})
app.get('/Aboutus.html', (req,res)=>{
res.sendFile(__dirname +'/Aboutus.html')})
app.get('/resources.html', (req,res)=>{
res.sendFile(__dirname +'/resources.html')})
app.get('/Meetings.html', (req,res)=>{
res.sendFile(__dirname +'/Meetings.html')})
app.get('/joinus.html', (req,res)=>{
res.sendFile(__dirname +'/joinus.html')})

app.post("/",(req,res) => {
    let newdb = new db({
      FullName:req.body.FullName,
      Email:req.body.Email,
      Phonenumber:req.body.Phonenumber,
    });
    newdb.save(); 
    res.redirect('/Meetings.html');
})
app.listen(port, () => {
  connectDB()
    console.log('Listening to server 3000')
}) 