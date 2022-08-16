<template>
  <m-Card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === i }"
        v-for="(category, i) in categories"
        :key="i"
        @click="active = i"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper>
        <swiper-slide v-for="(category ,i) in categories" :key="i">
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
</script>

<style>
</style>