<template>
  <el-table :data="items" style="width: 90%" size="large">
    <el-table-column label="ID" align="center">
      <template #default="scope">
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <el-icon><timer /></el-icon>
          <span style="">{{ scope.row._id }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Title">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.title }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.title }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="body" label="详情"></el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          size="small"
          @click="router.push(`/articles/edit/${scope.row._id}`)"
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
  const res = await get("rest/articles");
  items.value = res.data;
};
fetch();
const Del = async (row) => {
  ElMessageBox.confirm("是否删除分类?", "提示", {
    confirmButtonText: "删除",
    cancelButtonText: "取消",
    type: "error",
  })
    .then(() => {
      ElMessage({
        type: "info",
        message: "删除成功",
      });
    })
    .then(async () => {
      await del(`rest/articles/${row._id}`);
      fetch();
    });
};
</script>

<style lang="scss">
.el-table__body {
  .el-table__row {
    .el-table_1_column_3 {
      .cell {
        display: inline-block;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
