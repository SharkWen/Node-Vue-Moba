<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}文章</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="所属文章">
        <el-select v-model="model.categories" placeholder="选择文章" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input style="width: 20vw" v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情" style="width:80%;">
        <md-editor v-model="model.body" @onUploadImg="onUploadImg"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import MdEditor from "md-editor-v3";
import 'md-editor-v3/lib/style.css'
import { post, get, put } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = ref({
  title: "",
  categories: [],
  body: "",
});
const categories = ref([]);
const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);
          post('upload', form)
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );

  callback(res.map((item) => item.data.url));
};
const save = async () => {
  if (!model.value.title == "") {
    let mes;
    if (id) {
      await put(`rest/articles/${id}`, model.value);
      mes = "修改成功!";
    } else {
      await post("rest/articles", model.value);
      mes = "保存成功!";
    }
    router.push("/articles/list");
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
  const res = await get(`rest/articles/${id}`);
  model.value = res.data;
};
const fetchCategories = async () => {
  const res = await get(`rest/categories`);
  categories.value = res.data;
};
fetchCategories();
id && fetch();
</script>

<style scoped>
h1 {
  margin-left: 80px;
}
</style>