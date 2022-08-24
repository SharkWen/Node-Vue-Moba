<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <router-link class="text-decoration" to="/">
        <div class="iconfont icon-Back text-blue"></div>
      </router-link>
      <strong class="flex-1 text-blue pl-2">{{ model.title }}</strong>
      <!-- <div class="text-grey fs-xs">2019-06-19</div> -->
    </div>
    <div v-html="model.body" class="px-3 by fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          class="text-decoration"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
          @click="fetch"
          ><div class="py-1">
            {{ item.title }}
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import $http from "../plugin/http.js";
const props = defineProps({
  id: { required: true },
});

const model = ref(null);
const fetch = async () => {
  console.log(props.id);
  const res = await $http.get(`/articles/${props.id}`);
  model.value = res.data;
};
onMounted(() => {
  fetch();
});
</script>

<style lang="scss">
.page-article {
  .icon-Back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>