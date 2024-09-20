const mongoose = require('mongoose');
const {Schema} = mongoose.Schema;

const StudentSchema = new Schema({
    rollNo: {type: String , required: true},
    fistName: {type: String},
    lastName: {type: String},
    fatherName: {type: String},
    adharCard: {type: String},
    mobileNumber: {type: String},

});

module.exports = mongoose.model('Student', StudentSchema);