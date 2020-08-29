<template>
  <VueSlickCarousel class="slider" v-bind="settings">
    <template v-for="news in newsList">
      <BlogItem :key="news.id" v-bind:item="news" v-bind:isSlider="true" />
    </template>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import BlogItem from "../components/BlogItem";

export default {
  components: { VueSlickCarousel, BlogItem },
  data() {
    return {
      newsList: this.$store.getters.getBlogPosts,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        autoSlidesToShow: true,
        variableWidth: true,
        centerMode: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              autoSlidesToShow: false,
              centerMode: false,
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.slider {
  max-width: 1140px;
  margin: 57px auto !important;
  padding: 0 15px;

  @include tablet {
    height: 470px !important;
  }

  @include laptop {
    height: 470px !important;
  }

  @include desktop {
    height: 470px !important;
  }

  .slick-list {
    @include mobile {
      height: 500px !important;
    }
  }

  .slick-dots {
    bottom: 0;
    @include flexCenter;

    & > li {
      margin: 0;
      & > button {
        &::before {
          color: $color__title;
        }
      }
    }
  }

  .slick-active {
    & > button {
      &::before {
        font-size: 10px;
      }
    }
  }
}
</style>