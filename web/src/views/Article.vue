<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">{{ model.title }}</strong>
      <!-- <div class="text-grey fs-xs">2019-06-19</div> -->
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
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
  const res = await $http.get(`/articles/${props.id}`);
  model.value = res.data;
};
onMounted(() => {
  fetch();
});
</script>

<style>
</style>