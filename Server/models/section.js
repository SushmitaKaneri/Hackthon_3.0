const mongoose = require('mongoose');
const Joi = require('joi');

const Section = mongoose.model('Section',new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxlength : 256
    },
    image : {
        type : mongoose.Schema.Types.ObjectId
    },
    description : {
        type : String,
        maxlength : 256
    },
    reminder : {
        type : String
    },
    email : {
        type:String,
        required : true
    },
    pin_color : {
        type:String
    },
    note_color : {
        type:String
    },
    label : {
        type:String
    },
    status : {
        type:String,
        required : true
    }

}));

function validate(exp){
    const schema = {
        title : Joi.string().min(3).required(),
        image : Joi.ObjectID(),
        description : Joi.string().min(3).max(256).required(),
        reminder : Joi.string(),
        email : Joi.string().required(),
        pin_color : Joi.string(),
        note_color : Joi.string(),
        label : Joi.string(),
        status : Joi.string().required()
    }

    return result = Joi.validate(exp,schema);

}

exports.Section = Section;
exports.validate = validate;
