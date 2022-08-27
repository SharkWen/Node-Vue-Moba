<template>
  <div>
    <swiper
      :modules="[Pagination]"
      v-for="(ads, i) in adsItems"
      :key="i"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(iii, ii) in 3" :key="ii">
        <a :href="ads.items[ii].url" 
        target="_blank"
          ><img class="w-100" :src="ads.items[ii].image" alt=""
        /></a>
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
            class="text-decoration"
            @click="active = i"
            :to="`/articles/${news._id}`"
          >
            <div class="py-2 fs-lg d-flex" :class="{ op: i === active }">
              <span class="text-info">[{{ news.categoryName }}]</span>
              <span class="px-2">|</span>
              <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
                news.title
              }}</span>
              <span class="text-grey-1 fs-sm">{{
                date(news.updatedAt).format("MM/DD")
              }}</span>
            </div>
          </router-link>
        </div>
      </template>
    </m-ListCard>

    <m-ListCard title="英雄列表" icon="card-hero" :categories="heroCards">
      <template #items="{ category }">
        <div class="d-flex flex-wrap">
          <router-link
            class="fs-xxs text-center text-dark text-decoration"
            style="width: 20%"
            v-for="hero in category.heroList"
            :key="hero._id"
            :to="`/heroes/${hero._id}`"
          >
            <div>
              <img :src="hero.avatar" class="p-2 w-100" alt="" />
              <div>{{ hero.name }}</div>
            </div>
          </router-link>
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
const active = ref(null);
const newsCards = ref([]);
const heroCards = ref([]);
const adsItems = ref([]);

const fetchNewsCats = async () => {
  const res = await $http.get("/news/list");
  newsCards.value = res.data;
};
const fetchHeroCats = async () => {
  const res = await $http.get("/heroes/list");
  heroCards.value = res.data;
};
const fetchAds = async () => {
  const res = await $http.get("/ads/list");
  adsItems.value = res.data;
};
onMounted(() => {
  fetchNewsCats();
  fetchHeroCats();
  fetchAds();
  console.log(adsItems.value);
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
.op {
  opacity: 0.6;
}
</style>