<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}用户</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="用户名">
        <el-input style="width: 20vw" v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input style="width: 20vw" type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref ,} from "vue";
import { ElMessage } from "element-plus";
import { post, get, put } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = ref({
  username:"",
  password:""
});
const save = async () => {
  if (!model.value.username == ""  ) {
    let mes;
    if (id) {
      await put(`rest/admin_users/${id}`,model.value );
      mes = "修改成功!";
    } else {
      await post("rest/admin_users", model.value);
      mes = "保存成功!";
    }
    router.push("/admin_users/list");
    console.log("save");
    ElMessage({
      message: mes,
      type: "success",
      center: true,
      showClose: true,
      duration: 1000,
    });
  } else {
    ElMessage({
      message: "请输入",
      type: "warning",
      center: true,
      showClose: true,
      duration: 1000,
    });
  }
};
const fetch = async () => {
  const res = await get(`rest/admin_users/${id}`);
  model.value = res.data
};
id && fetch();
</script>

<style scoped>
h1 {
  margin-left: 80px;
}
</style>
