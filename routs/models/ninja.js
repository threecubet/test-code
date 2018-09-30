const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema and model
const  ninjaschema = new Schema({
    name:{
        type: String,
        required: [true,'Name is required']
    },
    rank:{
        type: String,
    },
    available:{
        type: Boolean,
        default: false
    }
    // add in location
});
const Ninja = mongoose.model('ninja',ninjaschema);
module.exports = Ninja;