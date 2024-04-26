const Academy=require('../../../academy/academySchema');


exports.signup=async(req,res)=>{
    try{
        const newAcademy=await Academy.create({
            name:req.body.name,
            address:req.body.address,
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
        const academies=await Academy.find();

        if(academies.length===0){ //proverka za dali ima vneseni akademii
            return res.status(404).send('No Academies found')
        }

        res.status(200).send({academies})
    }catch(err){
        res.status(500).send('Server problem')
    }
}

exports.delete=async(req,res)=>{
    try{
        const deletedAcademy=await Academy.findOneAndDelete(req.params.name)

        if(!deletedAcademy){
            return res.status(404).send('No Academy found by that name');
        }
    }catch(err){
        res.status(500).send('Server problem')
    }
}

exports.update=async(req,res)=>{
    const{name,body}=req.body;

    try{
        const updateAcdemyInfo=await Academy.findOneAndUpdate( { name, address })

        if(!updateAcdemyInfo){
            return res.status(404).send('Academy not found and not updated')
        }
        res.status(200).send({updateAcdemyInfo})
    }catch(err){
        res.status(500).send('Server problem')
    }
}