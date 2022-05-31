<template>
  <el-table :data="items" style="width: 70%" size="large">
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
    <el-table-column label="Title" width="180">
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
import { ElMessage, ElMessageBox } from "element-plus";
const router = useRouter();
const items = ref([]);
const fetch = async () => {
  const res = await get("rest/articles");
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
      await del(`rest/articles/${row._id}`);
      fetch();
    });
};
// import { Timer } from '@element-plus/icons-vue'

// interface User {
//   date: string
//   name: string
//   address: string
// }

// const handleEdit = (index: number, row: User) => {
//   console.log(index, row)
// }
// const handleDelete = (index: number, row: User) => {
//   console.log(index, row)
// }

// const tableData: User[] = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]
</script>
