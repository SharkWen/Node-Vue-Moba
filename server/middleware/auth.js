module.exports = options => {
  const AdminUser = require('../models/AdminUser');
  const jwt = require('jsonwebtoken');
  const assert = require('http-assert');
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop();
    assert(token, 401, "请先登录1");
    jwt.verify(token, req.app.get('secret'), (err, decoded) => {
      if (err) throw new Error("token过时或解析错误请重新登录");
    });
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, "请先登录3");
    next();
  }
}