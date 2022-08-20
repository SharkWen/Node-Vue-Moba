<template>
  <el-table :data="items" style="width: 100vw" size="large">
    <el-table-column label="ID" align="center" width="300vw">
      <template #default="scope">
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <el-icon><timer /></el-icon>
          <span style="">{{ scope.row._id }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="100%">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="title"  width="100vw">
      <template #default="scope">

          <span style="">{{ scope.row.title}}</span>

      </template>
    </el-table-column>
        <el-table-column label="Avatar" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #reference>
            <img :src="scope.row.avatar" style="height:3rem;" alt="">
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          size="small"
          @click="router.push(`/heros/edit/${scope.row._id}`)"
          >Edit</el-button
        >
        <el-button size="small" type="danger" @click="Del(scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from "vue";
import { get, del } from "../http";
import { useRouter } from "vue-router";
const router = useRouter();
const items = ref([]);
const fetch = async () => {
  const res = await get("rest/heros");
  items.value = res.data;
};
fetch();
const Del = async (row) => {
  ElMessageBox.confirm(
    "是否删除分类?",
    "提示",
    {
      confirmButtonText: "删除",
      cancelButtonText: "取消",
      type: "error",
    }
  )
    .then(() => {
      ElMessage({
        type: "info",
        message: "删除成功",
      });
    })
    .then(async () => {
      await del(`rest/heros/${row._id}`);
      fetch();
    });
};
</script>
