const Courses=require('../../../courses/coursesSchema');


exports.input=async(req,res)=>{
    try{
        const newCourse=await Courses.create({
            name:req.body.name,
            address:req.body.address,
            subject:req.body.subject,
        })

        res.status(201).json({
            status:'success'
        })
    }catch(err){
        res.status(500).send('Server problem')
    }
}

exports.read=async(req,res)=>{
    try{
        const courses=await Courses.find();

        if(courses.length===0){ //proverka za dali ima vneseni akademii
            return res.status(404).send('No courses found found')
        }

        res.status(200).json({courses})
    }catch(err){
        res.status(500).send('Server problem')
    }
}

exports.delete=async(req,res)=>{
    try{
        const deleteCourse=await Courses.findOneAndDelete(req.params.name)

        if(!deletedCourse){
            return res.status(404).send('No Course found by that name');
        }
    }catch(err){
        res.status(500).send('Server problem')
    }
}

exports.update=async(req,res)=>{
    const{name,body,subject}=req.body;

    try{
        const updateCourseInfo=await Courses.findOneAndUpdate( { name, address, subject })

        if(!updateCourseInfo){
            return res.status(404).send('Course not found and not updated')
        }
        res.status(200).send({updateCourseInfo})
    }catch(err){
        res.status(500).send('Server problem')
    }
}