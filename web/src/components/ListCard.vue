<template>
  <m-Card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === i }"
        v-for="(category, i) in categories"
        :key="i"
        @click="sw.slideTo(i)"
      >
        <div>{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :autoHeight="true" @swiper="onSwiper" @slideChange="(index) => (active = index.snapIndex)">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-Card>
</template>

<script setup>
import { defineProps, ref } from "vue";
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  categories: { type: Array, required: true },
});
const active = ref(0);
let sw = ref(null);
const onSwiper = (swiper)=>{
  sw.value = swiper
}
</script>

<style>
</style>