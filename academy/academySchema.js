const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');

const academySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'An Academy name must be inputed']
    },
    address:{
        type:String,
        required:[true,'An address must be inputed']
    }
})

const Academy=mongoose.model('Academy',academySchema);

module.exports=Academy;