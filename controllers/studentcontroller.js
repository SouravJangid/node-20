const Student = require('../models/Student');

async function addStudent(req, res) {
    try{
        // console.log(req.body);
        const student = new Student(req.body);
        await student.save();
        res.render('studentinsert',{message:'data add successfully....'});
       
    }catch(error){
        console.log(error);
    }
};

async function getStudents(req, res){
    try{
        const students = await Student.find();
        res.render('studentlist',{students: students});
    }catch(error){
        console.log(error);
    }
};


async function editStudent(req,res){
    try{
        const student = await Student.findOne({_id:req.params.id });
        res.render('studentedit',{student: student});
    }catch(error){console.log(error);
}

}


async function updateStudent(req,res){
    try{
        const student = await Student.findOneAndUpdate({_id:req.params.id},req.body,{new: true});
        res.redirect('/student');
    }catch(error){console.log(error);
}
}


module.exports = {
    addStudent,
    getStudents,
    editStudent,
    updateStudent,
}