<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="装备">
        <el-input style="width: 20vw" v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
    <el-upload
    class="avatar-uploader"
    :action='`${instance.defaults.baseURL}/upload`'
    :show-file-list="true"
    :on-success="afterUpload"
  >
    <img v-if="model.icon" :src="model.icon" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive ,} from "vue";
import { post, get, put ,instance} from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = reactive({
  name: "",
  icon:""
});
const save = async () => {
  if (!model.name == "") {
    let mes;
    if (id) {
      await put(`rest/items/${id}`, { name: model.name,icon:model.icon});
      mes = "修改成功!";
    } else {
      await post("rest/items", { name: model.name,icon:model.icon});
      mes = "保存成功!";
      model.name = "";
    }
    router.push("/items/list");
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
  const res = await get(`rest/items/${id}`);
  model.name = res.data.name;
  model.icon = res.data.icon;
};
const afterUpload = (res)=>{
  model.icon = res.url
}
id && fetch();
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>