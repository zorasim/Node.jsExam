const express=require('express');
const academy=require('./handlers/academyHandler');
const courses=require('./handlers/coursesHandler');
const db=require('../../pkg/db/index');

const app=express();

db.init();
app.use(express.json());

app.post('api/v1/auth/create-academy',academy.signup);
app.post('api/v1/auth/create-course',courses.input);

app.listen(process.env.PORTAUTH, (err)=>{
    if(err){
        console.log('Could not start server. Sorry')
    }
    console.log("Server started successfully! Yay!")
})