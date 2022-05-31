<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="100px" @submit.prevent="save">
      <el-tabs model-value="skills" type="border-card">
        <el-tab-pane label="基本信息">
          <el-form-item label="名称">
            <el-input style="width: 20vw" v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input style="width: 20vw" v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.category" multiple>
              <el-option
                v-for="item in select.category"
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
              v-model="model.scores.diffcult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              :max="9"
              show-score
              style="width: 20vw; margin-top: 0.6rem"
              v-model="model.scores.skills"
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              :max="9"
              show-score
              style="width: 20vw; margin-top: 0.6rem"
              v-model="model.scores.attack"
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              :max="9"
              show-score
              style="width: 20vw; margin-top: 0.6rem"
              v-model="model.scores.survive"
            ></el-rate>
          </el-form-item>
          <el-form-item label="图片">
            <el-upload
              class="avatar-uploader"
              :action="`${instance.defaults.baseURL}/upload`"
              :show-file-list="true"
              :on-success="afterUpload"
            >
              <img v-if="model.icon" :src="model.icon" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="顺丰出装">
            <el-select v-model="model.items1" multiple>
              <el-option
                v-for="item in select.items1"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option
                v-for="item in select.items2"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧" style="width: 70%">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧" style="width: 70%">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路" style="width: 70%">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button text type="primary" @click="model.skills.push({})"
            ><el-icon><Plus /></el-icon>添加技能</el-button
          >
          <el-row type="flex">
            <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="`${instance.defaults.baseURL}/upload`"
                  :show-file-list="true"
                  :on-success="(res) => (item.icon = res.url)" >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"><Plus/></el-icon>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(index, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top: 1rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { post, get, put, instance } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = ref({
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
  skills: [],
});
const select = ref({
  category:[],
  items1:[],
  items2:[]
})
const save = async () => {
  if (!model.value.name == "") {
    let mes;
    if (id) {
      await put(`rest/heros/${id}`, model.value);
      mes = "修改成功!";
    } else {
      await post("rest/heros", model.value);
      mes = "保存成功!";
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
  model.value = res.data;
};
const fetchCategory = async () => {
  const res = await get("rest/categories");
  select.value.category = res.data;
};
const fetchItems1 = async () => {
  const res = await get("rest/items");
  select.value.items1 = res.data;
};
const fetchItems2 = async () => {
  const res = await get("rest/items");
  select.value.items2 = res.data;
};
const afterUpload = (res) => {
  model.value.icon = res.url;
};
fetchItems1();
fetchItems2();
fetchCategory();
id && fetch();
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 5rem;
  height: 5rem;
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
  width: 5rem;
  height: 5rem;
  text-align: center;
}
</style>