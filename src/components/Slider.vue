<template>
  <div class="section section--pattern quote">
    <VueSlickCarousel class="quote__slider" v-bind="settings">
      <blockquote class="quote__item">
        <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
        <span class="quote__author">Michael Hopkins</span>
      </blockquote>
      <blockquote class="quote__item">
        <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
        <span class="quote__author">Michael Hopkins</span>
      </blockquote>
      <blockquote class="quote__item">
        <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
        <span class="quote__author">Michael Hopkins</span>
      </blockquote>
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
        dots: true,
        autoplay: true,
      },
    };
  },
};
</script>

<style lang="scss">
.quote {
  height: auto;
  overflow: hidden;

  @include laptop {
    height: 500px;
  }

  @include desktop {
    height: 500px;
  }

  &__slider {
    padding-top: 70px;
    margin-bottom: 100px;
    height: 100%;

    @include laptop {
      padding-top: 170px;
    }

    @include desktop {
      padding-top: 170px;
    }
  }

  &__item {
    max-width: 715px;
    font-family: $font-playFair;
    font-size: 25px;
    color: $color__main--white;
    font-style: italic;
    line-height: 1.45;
    padding: 0 15px 0 15px;
    cursor: grab;

    & > p {
      &::before,
      &::after {
        content: " ” ";
        font-size: 30px;
      }
    }

    &:focus {
      outline: 0;
    }
  }

  .slick-dots {
    bottom: -50px;
    @include flexCenter;

    @include laptop {
      bottom: 65px;
    }

    @include desktop {
      bottom: 65px;
    }

    & > li {
      margin: 0;
      & > button {
        &::before {
          color: $color__main--white;
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
  &__author {
    margin-top: 17px;
    font-family: $font-workSans;
    text-transform: uppercase;
    font-style: normal;
    font-size: 15px;
  }
}
</style>