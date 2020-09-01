<template>
  <section class="header section" :style="bgImage">
    <div class="section__wrapper header__wrapper">
      <h1 class="header__title">new branding agency</h1>
      <p class="header__subtitle">
        We are about to change the way
        <span class="header__subtitle--italic">you publish on web</span>
      </p>
    </div>
    <scrollactive :exact="true" :offset="110" :duration="900" bezier-easing-value=".5,0,.35,1">
      <router-link to="/#about" class="scrollactive-item">
        <div class="header__scroll">
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'angle-down' }" />
        </div>
      </router-link>
    </scrollactive>
  </section>
</template>


<script>
export default {
  data() {
    return {
      bgImage: {
        backgroundImage: `url(${require("@/assets/images/home-7.jpg")})`,
      },
    };
  },
};
</script>

<style lang="scss">
.header {
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  box-shadow: inset 10px 10px 5px 100vw rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: $font-workSans;
  font-size: 12px;
  font-weight: 700;
  color: $color__main--white;

  @include tablet {
    font-size: 13px;
  }

  @include laptop {
    font-size: 14px;
  }

  @include desktop {
    font-size: 14px;
  }

  &__wrapper {
    @include aboluteCenter;
  }

  &__title {
    text-transform: uppercase;
    letter-spacing: 2.8px;
  }

  &__subtitle {
    display: inline-block;
    margin-top: 30px;
    font-family: $font-playFair;
    font-size: 33px;
    letter-spacing: 1.44px;
    width: 85vw;
    line-height: 1.25;

    @include tablet {
      margin-top: 20px;
      font-size: 42px;
    }

    @include laptop {
      font-size: 48px;
      max-width: 730px;
      margin-top: 10px;
    }

    @include desktop {
      font-size: 48px;
      max-width: 730px;
      margin-top: 10px;
    }

    &--italic {
      font-weight: 400;
      font-style: italic;
    }
  }

  &__scroll {
    width: 50px;
    height: 50px;
    border: solid 1px #ffffff;
    border-radius: 50%;
    @include aboluteCenterLeft;
    bottom: 40px;
    @include flexCenter;
    color: $color__main--white;

    & > * {
      @include aboluteCenterLeft;
      animation: scrollDown 1s ease-out infinite;
    }

    &:hover {
      & > * {
        animation-play-state: paused;
      }
    }
  }
}

@keyframes scrollDown {
  from {
    top: 7px;
  }
  to {
    top: 32px;
    opacity: 0.3;
  }
}
</style>
