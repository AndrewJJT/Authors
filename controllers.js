var Author = require('./models')

var conrollers ={
    getallauthors: function getallauthors(req, res){
        Author.find()
        .then(data=> res.json({message:"success", allauthors:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    getauthor: function getauthor(req, res){
        Author.find({_id:req.params.id})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    addauthor: function addauthor(req,res){
        Author.create(req.body)
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    updateauthor: function updateauthor(req, res){
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    deleteauthor: function deleteauthor(req,res){
        Author.findByIdAndDelete({_id:req.params.id})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    }
}

module.exports = conrollers;