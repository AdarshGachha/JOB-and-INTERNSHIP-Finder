
exports.sendtoken = (employe,statusCode,res)=>{
    const token = employe.getjwttoken();

    const options = {
        expiresIn:'20h',
        httpOnly:true,
    };

    res.status(statusCode).cookie("token", token, options).json({success:true, id:employe._id, token});

    res.json({token});

};