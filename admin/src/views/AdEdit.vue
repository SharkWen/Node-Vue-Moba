<template>
  <div>
    <h1>{{ id ? "编辑广告" : "新建广告" }}</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="名称">
        <el-input style="width: 20vw" v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button text type="primary" @click="model.items.push({})"
          ><el-icon><Plus /></el-icon>添加广告</el-button
        >
        <el-row type="flex" style="width: 80%">
          <el-col :md="12" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="跳转链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图标" style="margin-top: 20px;">
              <el-upload
                class="avatar-uploader"
                :action="getUploadUrl"
                :headers="getAuthHead()"
                :show-file-list="true"
                :on-success="(res) => (item.image = res.url)"
              >
                <img style="width:10rem;" v-if="item.image" :src="item.image" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="model.items.splice(index, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { post, get, put,  } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = ref({
  name: "",
  items: [],
});
const save = async () => {
  if (!model.value.name == "") {
    let mes;
    if (id) {
      await put(`rest/ads/${id}`, model.value);
      mes = "修改成功!";
    } else {
      await post("rest/ads", model.value);
      mes = "保存成功!";
    }
    router.push("/ads/list");
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
  const res = await get(`rest/ads/${id}`);
  model.value = res.data;
};
id && fetch();
</script>

<style scoped>
h1 {
  margin-left: 80px;
}
</style>