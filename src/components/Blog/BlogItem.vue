<template>
  <div class="card">
    <div class="card__image">
      <router-link :to="{ name: 'Blog-Item', params: { id: item.id }}">
        <img :src="item.imgUrl" :alt="item.title" draggable="false" />
      </router-link>
      <span class="card__type">{{item.type}}</span>
    </div>
    <div class="card__description">
      <router-link :to="{ name: 'Blog-Item', params: { id: item.id }}">
        <h3 class="card__title">{{item.title}}</h3>
      </router-link>
      <p class="card__date">{{item.date}}</p>
      <p class="card__shortDesc" v-if="isSlider">{{item.shortDesc}}</p>
      <p class="card__blogDesc" v-else v-html="item.blogDesc"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "isSlider"],
};
</script>

<style lang="scss">
.slick-slide {
  & > div {
    margin: 0 20px;
  }
}

.card {
  width: 90vw !important;
  text-align: left;
  background-color: $color__main--white;

  @include tablet {
    width: 340px !important;
    height: 420px;
  }

  @include laptop {
    width: 340px !important;
    height: 420px;
  }

  @include desktop {
    width: 340px !important;
    height: 420px;
  }
  &:focus {
    outline: 0;
  }

  &__image {
    width: 100%;
    height: 55%;
    position: relative;

    & > a {
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  &__type {
    display: block;
    width: 90px;
    height: 30px;
    color: $color__main--white;
    background-color: $color__btnBg;
    @include flexCenter;
    text-transform: uppercase;
    position: absolute;
    left: 10px;
    bottom: 9px;
  }

  &__description {
    padding: 25px 30px 30px 30px;
    color: $color__title;
    font-family: $font-workSans;
    cursor: grab;
  }

  &__title {
    font-family: $font-playFair;
    color: $color__title;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.6px;

    &:hover {
      opacity: 0.6;
    }
  }

  &__date {
    font-size: 12px;
    font-weight: 500;
    margin-top: 20px;
    text-transform: uppercase;
  }

  &__shortDesc {
    margin-top: 14px;
    font-size: 15px;
    color: $color__subtitle;
  }

  &__blogDesc {
    cursor: text;
    margin-top: 15px;
  }
}
</style>