const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    { name: 
        {type:String, 
        required:[true, "The name is required!"], 
        minlength:[3, "The name must be at least 3 characters long!"]
    }},
    {timestamps:true}
)

const Authors = mongoose.model('Author', AuthorSchema)

module.exports = Authors;
