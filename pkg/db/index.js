//npm i mongoose dotenv
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:`${__dirname}/../config/config.env`})

const DB=process.env.DATABASE.replace('<password>',process.DATABASE_PASSWORD); //replacing with the password so it isnt hardcoded in 

exports.init=async()=>{
    try{
        await mongoose.connect(DB);
    }catch(err){
        console.log(err.message);
    }
}