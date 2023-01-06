const express = require("express")

const routes=require('./routes/routes')
const mongoose = require("mongoose")
const app = express()
mongoose.set('strictQuery', true)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://singhshreya425:shreyasingh1234@cluster0.yxxvuvg.mongodb.net/SocialNetwork",{useNewUrlParser:true})
.then (()=>console.log(("MongoDb is connected")))
.catch (err=> console.log(err.message))

app.use ("/",routes)
app.listen(process.env.PORT||3000, function(){console.log("express is running on port "+ (process.env.PORT||3000))})