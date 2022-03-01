const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = new Schema({
    
        name:String,
        number:Number,
        phoneType:String
})

mongoose.model('contact', ContactSchema)