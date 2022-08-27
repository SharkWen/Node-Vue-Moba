module.exports = app => {
  const express = require('express');
  const jwt = require('jsonwebtoken');
  const assert = require('http-assert');
  const AdminUser = require('../../models/AdminUser');
  const authMiddleware = require('../../middleware/auth');
  const resourceMiddleware = require('../../middleware/resource');
  const router = express.Router({
    mergeParams: true //// 保留来自父路由器的req.params值。如果父对象和子对象具有冲突的参数名，则以子对象的值为准
  })
  //保存数据
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  //更新数据
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body) 
    res.send(model)
  })
  //删除数据
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true,
      del: req.params.id,
    })
  })
  //获取数据列表
  router.get('/',authMiddleware(), async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parentName'
    } 
    // else if (req.Model.modelName === 'Article') {
    //   queryOptions.populate = 'categories'
    // }
    const items = await req.Model.find().setOptions(queryOptions)
    res.send(items)
  })
  //获取单个数据
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model)
  })
  app.use('/admin/api/rest/:resource',authMiddleware(), resourceMiddleware(), router)
  const multer = require('multer')
  const MAO = require('multer-aliyun-oss');
  const upload = multer({
    storage: MAO({
        config: {
            region: 'oss-cn-hangzhou',
            accessKeyId: 'LTAI5tL6XiW9CRxRsMdieoVm',
            accessKeySecret: 'BC5mRqHSaYhh6kBrvbFg8Hg15lpI9u',
            bucket: 'moba-node',
        },
        // to set path prefix for files, could be string or function
        destination: 'node-vue-moba'
    })
});
  // const upload = multer({ dest: __dirname + '/../../uploads' });
  app.post('/admin/api/upload',authMiddleware() ,upload.single('file'), async (req, res) => {
    const file =  await req.file;
    // file.url = `http://127.0.0.1:3000/uploads/${file.filename}` 
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body;
    const User = await AdminUser.findOne({ username }).select('+password');
    assert(User, 422, '用户名错误')
    const isValid = require('bcrypt').compareSync(password, User.password);
    assert(isValid,422,'密码错误')
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ id: User._id }, app.get('secret'));
    res.send({ token });

  })
 // 错误处理函数
 app.use( async (err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    message: err.message
  })
})
} 
