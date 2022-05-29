<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="装备">
        <el-input style="width: 20vw" v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="称号">
        <el-input style="width: 20vw" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="category.name" multiple>
          <el-option
            v-for="item in category"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难度">
        <el-rate
          :max="9"
          show-score
          style="width: 20vw; margin-top: 0.6rem"
          v-model="scores.diffcult"
        ></el-rate>
      </el-form-item>
      <el-form-item label="技能">
        <el-rate
          :max="9"
          show-score
          style="width: 20vw; margin-top: 0.6rem"
          v-model="scores.skills"
        ></el-rate>
      </el-form-item>
      <el-form-item label="攻击">
        <el-rate
          :max="9"
          show-score
          style="width: 20vw; margin-top: 0.6rem"
          v-model="scores.attack"
        ></el-rate>
      </el-form-item>
      <el-form-item label="生存">
        <el-rate
          :max="9"
          show-score
          style="width: 20vw; margin-top: 0.6rem"
          v-model="scores.survive"
        ></el-rate>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          :action="`${instance.defaults.baseURL}/upload`"
          :show-file-list="true"
          :on-success="afterUpload"
        >
          <img v-if="icon" :src="icon" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="顺丰出装">
        <el-select v-model="items1.name" multiple>
          <el-option
            v-for="item in items1"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="逆风出装">
        <el-select v-model="items2.name" multiple>
          <el-option
            v-for="item in items2"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="使用技巧">
        <el-input type="textarea" v-model="usageTips"></el-input>
      </el-form-item>
      <el-form-item label="对抗技巧">
        <el-input type="textarea" v-model="battleTips"></el-input>
      </el-form-item>
      <el-form-item label="团战思路">
        <el-input type="textarea" v-model="teamTips"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { post, get, put, instance } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = reactive({
  name: "",
  icon: "",
  title: "",
  category: [],
  scores: {},
  items1: [],
  items2: [],
  usageTips: "",
  battleTips: "",
  teamTips: "",
});
const {
  name,
  icon,
  title,
  category,
  scores,
  items1,
  items2,
  usageTips,
  battleTips,
  teamTips,
} = toRefs(model);
const save = async () => {
  if (!name == "") {
    let mes;
    if (id) {
      await put(`rest/heros/${id}`, {
        name: name.value,
        icon: icon.value,
        title: title.value,
        category: category.value,
        scores: scores.value,
        items1: items1.value,
        items2: items2.value,
        usageTips: usageTips.value,
        battleTips: battleTips.value,
        teamTips: teamTips.value,
      });
      mes = "修改成功!";
    } else {
      await post("rest/heros", {
        name: name.value,
        icon: icon.value,
        title: title.value,
        category: category.value,
        scores: scores.value,
        items1: items1.value,
        items2: items2.value,
        usageTips: usageTips.value,
        battleTips: battleTips.value,
        teamTips: teamTips.value,
      });
      mes = "保存成功!";
      name.value = "";
    }
    router.push("/heros/list");
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
  const res = await get(`rest/heros/${id}`);
  name.value = res.data.name;
  icon.value = res.data.icon;
  title.value = res.data.title;
  category.value = res.data.category;
  scores.value = res.data.scores;
  items1.value = res.data.items1;
  items2.value = res.data.items2;
  usageTips.value = res.data.usageTips;
  battleTips.value = res.data.battleTips;
  teamTips.value = res.data.teamTips;
};
const fetchCategory = async () => {
  const res = await get("rest/categories");
  category.value = res.data;
};
const fetchItems1 = async () => {
  const res = await get("rest/items");
  items1.value = res.data;
};
const fetchItems2 = async () => {
  const res = await get("rest/items");
  items2.value = res.data;
};
const afterUpload = (res) => {
  icon.value = res.url;
};
fetchItems1();
fetchItems2();
fetchCategory();
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