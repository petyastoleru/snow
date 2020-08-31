<template>
  <section class="singleWork section section--grey">
    <div class="singleWork__main">
      <div class="singleWork__desc">
        <h2 class="singleWork__title section__title">{{ objItem.name }}</h2>
        <p class="singleWork__subtitle section__subtitle">{{ objItem.desc }}</p>
      </div>
      <div class="singleWork__info">
        <p class="singleWork__client">
          <span class="singleWork__strong">Client:</span>
          {{ objItem.client }}
        </p>
        <p class="singleWork__date">
          <span class="singleWork__strong">Date:</span>
          {{ objItem.date }}
        </p>
        <p class="singleWork__links">
          <span class="singleWork__strong">Share:</span>
          <a
            class="singleWork__link"
            v-for="(shareItem, index) in objItem.share"
            :key="index"
            :href="shareItem.link"
            target="blank"
          >
            {{ shareItem.desc }}
            <template v-if="index < objItem.share.length - 1">,</template>
          </a>
        </p>
      </div>
    </div>
    <div class="singleWork__image">
      <img :src="objItem.url" :alt="objItem.name" />
    </div>
  </section>
</template>

<script>
import Choose from "../Navigation/ChooseSingleWork";
import SocLinks from "../Navigation/SocialLinks";

export default {
  data() {
    return {
      objItem: Object,
    };
  },
  props: ["item"],
  mounted() {
    this.objItem = this.item;
  },
};
</script>

<style lang="scss">
.singleWork {
  position: relative;

  &__main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @include laptop {
      flex-wrap: nowrap;
    }

    @include desktop {
      flex-wrap: nowrap;
    }
  }

  &__desc {
    padding-top: 101px;
    padding-left: 5vw;
    text-align: left;

    @include laptop {
      padding-top: 151px;
      padding-left: 98px;
    }

    @include desktop {
      padding-top: 151px;
      padding-left: 98px;
    }
  }

  &__info {
    font-family: $font-workSans;
    color: $color__subtitle;
    text-align: left;
    padding-left: 5vw;
    padding-top: 50px;

    @include laptop {
      padding-left: 0;
      padding-right: 105px;
      padding-top: 308px;
    }

    @include desktop {
      padding-right: 105px;
      padding-top: 308px;
    }

    & > p {
      margin: 10px 0 10px 0;
      padding-left: 15px;

      @include laptop {
        padding-left: 0;
      }

      @include desktop {
        padding-left: 0;
      }
    }
  }

  &__strong {
    font-weight: 500;
    color: $color__title;
  }

  &__link {
    text-transform: capitalize;
    color: $color__subtitle;

    &:hover {
      opacity: 0.6;
    }
  }

  &__image {
    width: 100%;
    height: 377px;
    margin-top: 80px;

    & > img {
      width: 60%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>