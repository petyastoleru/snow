<template>
  <div class="section partners">
    <VueSlickCarousel class="partners__slider" v-bind="settings">
      <div class="partners__item" v-for="(partner, index) in partnersArray" :key="index">
        <img v-bind:src="partner" alt="our partner" draggable="false" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 5,
        touchMove: true,
        speed: 500,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 4,
            },
          },

          {
            breakpoint: 660,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      partnersArray: this.$store.getters.getPartners,
    };
  },
};
</script>

<style lang="scss">
.partners {
  height: auto;
  background-color: $color__main--white;

  &__slider {
    height: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }

  &__item {
    padding: 17px 0;
    cursor: grab;
    z-index: 2;

    &:focus {
      outline: 0;
    }

    & > img {
      width: 133px;
      height: 89px;
      margin: 20px auto;
      user-select: none;
    }
  }
}
</style>