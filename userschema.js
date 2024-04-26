var mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});


// const uri = 'mongodb+srv://sumitsamsingh1111:oTmGKMpL7XENaWnz@cluster0.pcwfqgz.mongodb.net/FOOD_FRENZY?retryWrites=true&w=majority&appName=Cluster0';


// mongoose.connect(uri)










// mongoose.connect("mongodb://127.0.0.1:27017/react1");
// mongoose.connect("mongodb+srv://sumitsamsingh1111:oTmGKMpL7XENaWnz@cluster0.pcwfqgz.mongodb.net/react1");
// mongoose.connect("mongodb+srv://sumitsamsingh1111:wqrT8hRMpX2U7eQi@cluster0.xz423hp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
number:{
    type:String,
    required:true
},
  
});


const User = mongoose.model('User', userSchema);
 
module.exports = User;
