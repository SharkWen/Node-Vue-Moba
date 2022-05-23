<template>
  <div>
    <h1>{{ id ? "编辑分类" : "新建分类" }}</h1>
    <el-form label-width="120px" @submit.prevent=" save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parents.name" placeholder="选择分类">
          <el-option v-for="item in model.parents" :key="item._id" :label="item.name" :value="item._id" @click="parentName(item._id)"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input style="width: 20vw" v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, } from "vue";
import { ElMessage } from "element-plus";
import { post, get, put } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = reactive({
  name: "",
  parents: [],
  parentName:Number,
  bool:""
});


function parentName(name){
  model.parentName = name
}
const save = async () => {
  console.log(model.parents)
  if (!model.name == "") {
    let mes;
    if (id) {
      await put(`categories/${id}`, { name: model.name  });
      mes = "修改成功!";
    } else {
      await post("categories", { name: model.name ,parentName:model.parentName});
      mes = "保存成功!";
      model.name = "";
    }
    router.push("/categories/list");
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
  const res = await get(`/categories/${id}`);
  model.name = res.data.name;
};
const fetchParents = async () => {
  const res = await get(`/categories`);
  model.parents = res.data;
  console.log(model)
};
id && fetch();
fetchParents()


</script>

<style scoped>
h1 {
  margin-left: 80px;
}
</style>