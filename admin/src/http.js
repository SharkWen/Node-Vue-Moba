import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/admin/api", //设置默认数据根接口
});
const post = (url, data = {}) => {
  return new Promise((resolve, reject) => { // Promise 是一个容器，对象，构造函数
    //新建promise的resolve传出的值将作为then方法返回的promise的resolve的值传递出
    instance
      .post(url, data, {
        headers: { "Content-Type": "application/json" }, //设置请求类型为json格式
      })
      .then(
        (response) => {
          resolve(response); //请求已完成
        },
        (err) => {
          reject(err); //拒绝请求抛出错误
        }
      );
  });
};
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    //新建promise的resolve传出的值将作为then方法返回的promise的resolve的值传递出
    instance.get(url, { params }).then(
      (response) => {
        resolve(response); //请求已完成
      },
      (err) => {
        reject(err); //拒绝请求抛出错误
      }
    );
  });
};
const put = (url, params) => {
  return new Promise((resolve, reject) => {
    //新建promise的resolve传出的值将作为then方法返回的promise的resolve的值传递出
    instance.put(url, params).then(
      (response) => {
        resolve(response); //请求已完成
      },
      (err) => {
        reject(err); //拒绝请求抛出错误
      }
    );
  });
};
const del= (url) => {
  return new Promise((resolve, reject) => {
    //新建promise的resolve传出的值将作为then方法返回的promise的resolve的值传递出
    instance.delete(url).then(
      (response) => {
        resolve(response); //请求已完成
      },
      (err) => {
        reject(err); //拒绝请求抛出错误
      }
    );
  });
};
export { post, get, put ,del};