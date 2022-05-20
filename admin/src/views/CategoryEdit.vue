<template>
  <div>
    <h1>{{id ? '编辑分类' : '新建分类'}}</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="名称">
        <el-input style="width:20vw;" v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, } from "vue";
import { ElMessage } from 'element-plus'
import { post,get,put } from "../http";
import { useRouter,useRoute } from "vue-router";
const id = useRoute().params.id
const router = useRouter();
const model = reactive({
  name: "",
});
const save = async () => {
  if (!model.name == "") {
    let mes
    if(id){
      await put(`categories/${id}`,{name:model.name})
      mes = '修改成功!'
    }else{
      await post("categories", { name: model.name });
      mes = '保存成功!'
      model.name = "";
    }
    router.push("/categories/list");
    console.log("save");
    ElMessage({
    message: mes,
    type: 'success',
    center:true,
    showClose:true,
    duration:1000,
  })
  }else{
    ElMessage({
    message: '请输入',
    type: 'warning',
    center:true,
    showClose:true,
    duration:1000,
  })
  }
};
const fetch = async ()=>{
  const res = await get(`/categories/${id}`)
  model.name = res.data.name
}
id && fetch()
</script>

<style scoped>
h1 {
  margin-left: 80px;
}
</style>