const Student = require('../models/Student');

async function addStudent(req, res) {
    try{
        // console.log(req.body);
        const student = new Student(req.body);
        await student.save();
        res.render('success',{message:'data add successfully....'});
       
    }catch(error){
        console.log(error);
    }
};


module.exports = {
    addStudent
}