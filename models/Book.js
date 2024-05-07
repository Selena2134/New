const mongoose = require('mongoose');

module.exports = mongoose.model("Book" , {
    title : String ,
    description : String ,
    grade : Number ,
    year : Number ,
    readers : Number ,
    country : String ,
    type : String
})