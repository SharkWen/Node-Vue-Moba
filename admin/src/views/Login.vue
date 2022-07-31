<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form label-width="4rem" @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item label-width="0">
            <el-button type="primary" class="login-btn" native-type="submit">登录</el-button>
        </el-form-item>   
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {post} from '../http'
import {useRouter} from 'vue-router'
import { ElMessage } from "element-plus";
const router = useRouter();
const model = ref({
    username:"",
    password:""
})
const login = async ()=>{
 const res = await post('/login',model.value)
//sessionStorage.token = res.data.token;//关了没有
  localStorage.token = res.data.token;//关了还有
 router.push("/");
    ElMessage({
      message: "登录成功",
      type: "success",
      center: true,
      showClose: true,
      duration: 1000,
    });
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(160deg, #00ffd5 20%, #008cff 80%);
}
.login-card {
  width: 30rem;
  margin: 10rem auto;
}
.login-btn{
    width: 50%;
    margin: 0 auto;
}

</style>