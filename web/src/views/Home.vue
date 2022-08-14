<template>
  <div>
    
    <swiper :modules="modules" :pagination="{ clickable: true }">
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


  </div>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.swiper-pagination {
  &-bullet {
    transform: translateX(12rem);
    width: 0.7rem;
    height: 0.7rem;
    opacity: 1;
    background: map-get($colors, "white");
    border-radius: 30%;
    &-active {
      background-color: map-get($colors, "primary");
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