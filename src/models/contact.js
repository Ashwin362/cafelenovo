
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type:String,
       


    },
    phone: {
        type:Number,
       


    },
    numberguests: {
        type:Number,

    },
    date: {
        type:String,

    },

    time:
    {
        type: String,
    },
    Message: {
        type: String,
        
    }
});
const Reservation = mongoose.model('Users', userSchema);
module.exports = Reservation;