<template>
  <div>
    <swiper :modules="[Pagination]" :pagination="{ clickable: true }">
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper3.jpeg" alt="" />
      </swiper-slide>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav nav-icons -->
    <m-ListCard title="新闻资讯" icon="menu1" :categories="newsCards">
      <template #items="{ category }">
        <div v-for="(news, i) in category.newsList" :key="i">
          <router-link
            class="py-2 fs-lg d-flex text-decoration"
            :to="`/articles/${news._id}`"
          >
            <span class="text-info">[{{ news.categoryName }}]</span>
            <span class="px-2">|</span>
            <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
              news.title
            }}</span>
            <!-- <span class="text-grey-1 fs-sm">{{
              date(news.updatedAt).format("MM/DD")
            }}</span> -->
          </router-link>
        </div>
      </template>
    </m-ListCard>

    <m-ListCard title="英雄列表" icon="card-hero" :categories="heroCards">
      <template #items="{ category }">
        <div class="d-flex flex-wrap">
          <div
            class="fs-xxs text-center"
            style="width: 20%"
            v-for="(hero, i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="p-2 w-100" alt="" />
            <div>{{ hero.name }}</div>
          </div>
        </div>
      </template>
    </m-ListCard>
  </div>
</template>

<script setup>
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
import $http from "../plugin/http.js";
import date from "dayjs";
const newsCards = ref([]);
const heroCards = ref([]);
const fetchNewsCats = async () => {
  const res = await $http.get("/news/list");
  newsCards.value = res.data;
};
const fetchHeroCats = async () => {
  const res = await $http.get("/heroes/list");
  heroCards.value = res.data;
};
onMounted(() => {
  fetchNewsCats();
  fetchHeroCats();
});
</script>

<style lang="scss" >
@import "../assets/scss/_variables.scss";
.swiper-pagination {
  &-bullet {
    transform: translateX(10rem);
    width: 0.7rem;
    height: 0.7rem;
    opacity: 0.7;
    margin-right: 0.4rem !important;
    background: map-get($colors, "white");
    border-radius: 30%;
    &-active {
      background-color: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border: none;
    }
  }
}
</style>