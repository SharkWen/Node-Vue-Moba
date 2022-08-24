<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="100px" @submit.prevent="save">
      <el-tabs model-value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input style="width: 20vw" v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input style="width: 20vw" v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item in select.categories"
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
              v-model="model.scores.difficult"
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
          <el-form-item label="avatar">
            <el-upload
              class="avatar-uploader"
              :action="getUploadUrl"
              :headers="getAuthHead()"
              :show-file-list="true"
              :on-success="(res) => (model.avatar = res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="banner">
            <el-upload
              class="avatar-uploader"
              :action="getUploadUrl"
              :headers="getAuthHead()"
              :show-file-list="true"
              :on-success="(res) => (model.banner = res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
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
                  :action="getUploadUrl"
                  :headers="getAuthHead()"
                  :show-file-list="true"
                  :on-success="(res) => (item.icon = res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能冷却">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="蓝量消耗">
                <el-input v-model="item.cost"></el-input>
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
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button size="small" @click="model.partners.push({})">
            <i class="el-icon-plus"></i> 添加英雄
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.partners" :key="i">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero">
                  <el-option
                    v-for="hero in select.heroes"
                    :key="hero._id"
                    :value="hero._id"
                    :label="hero.name"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.partners.splice(i, 1)"
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
import { ref, onMounted } from "vue";
import { post, get, put } from "../http";
import { useRouter, useRoute } from "vue-router";
const id = useRoute().params.id;
const router = useRouter();
const model = ref({
  name: "",
  avatar: "",
  banner: "",
  title: "",
  categories: [],
  scores: {},
  items1: [],
  items2: [],
  partners: [],
  usageTips: "",
  battleTips: "",
  teamTips: "",
  skills: [],
});
const select = ref({
  categories: [],
  items1: [],
  items2: [],
  heroes: [],
});
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
  if (res.data.scores == null) {
    res.data.scores = {};
  }
  model.value = res.data;
};
const fetchCategory = async () => {
  const res = await get("rest/categories");
  select.value.categories = res.data;
};
const fetchItems1 = async () => {
  const res = await get("rest/items");
  select.value.items1 = res.data;
};
const fetchItems2 = async () => {
  const res = await get("rest/items");
  select.value.items2 = res.data;
};
const fetchHeroes = async () => {
  const res = await get("rest/heroes");
  select.value.heroes = res.data;
};
onMounted(() => {
  fetchItems1();
  fetchItems2();
  fetchCategory();
  fetchHeroes();
  id && fetch();
});
</script>

<style scoped>
.avatar-uploader .avatar {
  width: auto;
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