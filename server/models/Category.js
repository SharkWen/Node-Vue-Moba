const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{type:String},
    parentName:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
})
schema.virtual('children',{
    localField:'_id',
    foreignField:'parentName',
    justOne:false,
    ref:'Category'
})
schema.virtual('newsList',{
    localField:'_id',
    foreignField:'categories',
    justOne:false,
    ref:'Article'
})
module.exports = mongoose.model('Category',schema)