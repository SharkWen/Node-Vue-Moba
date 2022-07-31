module.exports = app => {
  const express = require('express');
  const router = express.Router({
    mergeParams:true //// 保留来自父路由器的req.params值。如果父对象和子对象具有冲突的参数名，则以子对象的值为准
  }) 
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true,
      del: req.params.id,
    })
  })
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if(req.Model.modelName === 'Category'){
      queryOptions.populate = 'parentName'
    }else if(req.Model.modelName==='Article'){
      queryOptions.populate = 'categories'
    }
    const items = await req.Model.find().setOptions(queryOptions)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model)
  })
  app.use('/admin/api/rest/:resource',async (req,res,next)=>{
    const ModelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${ModelName}`)
    next()
  }, router)
  const multer = require('multer')
  const upload = multer({dest:__dirname + '/../../uploads'});
  app.post('/admin/api/upload', upload.single('file'), async (req,res)=>{
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login',async (req,res)=>{
    const {username,password} = req.body;
    const AdminUser  = require('../../models/AdminUser');
    const User = await AdminUser.findOne({username}).select('+password');
    if(!User){
      return res.status(422).send({
        message:"用户名不存在"
      })
    } 
    const isValid = require('bcrypt').compareSync(password,User.password);
    if(!isValid){
      return res.status(422).send({
        message:"密码错误"
      })
    }
    const jwt = require('jsonwebtoken');
    const token =  jwt.sign({id:User._id},app.get('secret'));
    res.send({token});
  })
}