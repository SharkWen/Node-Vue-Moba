<template>
  <div>
    <h1>{{ id ? "编辑分类" : "新建分类" }}</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parentName" placeholder="选择分类">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
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
import { ref ,} from "vue";
import { post, get, put } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = ref({
  name: "",
  parentName:"Select" || Number,
});
const parents = ref([])

const save = async () => {
  if (!model.value.name == ""  ) {
    let mes;
    if (id) {
      await put(`rest/categories/${id}`,model.value );
      mes = "修改成功!";
    } else {
      await post("rest/categories", model.value.parentName !="Select" ? model.value :{name:model.value.name});
      mes = "保存成功!";
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
  const res = await get(`rest/categories/${id}`);
  model.value = res.data
};
const fetchParents = async () => {
  const res = await get(`rest/categories`);
  parents.value = res.data;
};
id && fetch();
fetchParents()


</script>

<style scoped>
h1 {
  margin-left: 80px;
}
</style>