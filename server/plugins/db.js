module.exports = app=>{
    const mongoose = require('mongoose');
    mongoose.connect("mongodb://127.0.0.1:27017/node-vue-moba");
    // mongoose.connect("mongodb://yu:rootyu@124.156.2.38:27017/node-vue-moba");
    require("require-all")(__dirname+"/../models");
}