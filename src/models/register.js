const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String

    },
    username:{
        type:String
    },
    number: {
        type: Number
    },
    email: {
        type: String,

    },
    password: {
        type: String

    },
    confirmpassword: {
        type: String

    }
})
const Register = new mongoose.model("Register", employeeSchema)
module.exports = Register;