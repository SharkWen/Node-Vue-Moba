const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        select:false,//不可查
        set:(val)=> require('bcrypt').hashSync(val,10)//10为加密指数,
    }
})
module.exports = mongoose.model('AdminUser',schema)