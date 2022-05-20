module.exports = app =>{
    const express = require('express');
    const router = express.Router() //子路由
    const Category = require('../../models/Category')
    router.post('/categories',async (req,res)=>{
      const model =  await  Category.create(req.body)
      res.send(model)
    })
    router.put('/categories/:id',async (req,res)=>{
      const model =  await  Category.findByIdAndUpdate(req.params.id,req.body)
      res.send(model)
    })
    router.delete('/categories/:id',async (req,res)=>{
       await  Category.findByIdAndDelete(req.params.id)
      res.send({
        success:true,
        del:req.params.id,
      })
    })
    router.get('/categories', async (req,res)=>{
      const items =  Category;
      items.find({},(err,dosc)=>{
        if(err) throw err;
        res.send(dosc)
      })
    })
    router.get('/categories/:id', async (req,res)=>{
      const model =await Category.findById(req.params.id);
      console.log(model)
      res.send(model)
    })
    app.use('/admin/api',router)
}