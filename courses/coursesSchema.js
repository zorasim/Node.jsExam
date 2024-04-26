const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');

const coursesSchmea=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A course name must be inputed']
    },
    address:{
        type:String,
        required:[true,'An address must be inputed']
    },
    subject:{
        type:String,
        required:[true,'A subject must be inputed']
    }
})

const Courses=mongoose.model('Courses',coursesSchmea);

module.exports=Courses;