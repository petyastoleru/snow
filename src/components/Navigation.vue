<template>
  <nav class="nav" v-bind:class="{ close: scrolled && !isOpen || homePage && !isOpen}">
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo-light.svg" alt="logo" />
    </router-link>

    <ul class="nav__list" v-bind:class="{ show: isOpen }">
      <li class="nav__item" @click="onMenuClick" v-for="(link, index) in links" :key="index">
        <router-link v-bind:to="link.linkTo">{{ link.desc }}</router-link>
      </li>
    </ul>

    <Burger
      class="nav__burger"
      @burger="onOpen"
      v-bind:class="{ scrolled_burger: scrolled && !isOpen || homePage && !isOpen }"
      ref="burger"
    />

    <SocialLinks class="nav__socialLinks" v-bind:class="{ show: isOpen }" />
  </nav>
</template>

<script>
import Burger from "./Burger.vue";
import SocialLinks from "./SocialLinks.vue";

export default {
  components: {
    Burger,
    SocialLinks,
  },
  data() {
    return {
      isOpen: false,
      scrolled: false,
      links: [
        { linkTo: "/#about", desc: "About" },
        { linkTo: "/#contact", desc: "Contact" },
        { linkTo: "/portfolio", desc: "Portfolio" },
        { linkTo: "/blog", desc: "Blog" },
      ],
    };
  },
  props: ["homePage"],
  methods: {
    onScroll() {
      this.scrolled = window.top.scrollY > 1 ? true : false;
    },
    onOpen(value) {
      this.isOpen = value;
    },
    onMenuClick() {
      if (window.innerWidth < 960) {
        this.$refs.burger.onClick();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
.nav {
  padding: 33px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  max-width: 1600px;

  &__list {
    @include flexCenter;
    flex-direction: column;
    margin-right: 98px;
    display: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url("../assets/images/post-3-mid.jpg") 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    box-shadow: inset 10px 10px 5px 100vw rgba(0, 0, 0, 0.75);

    @include laptop {
      display: flex;
      flex-direction: row;
      background: none;
      width: auto;
      height: auto;
      position: initial;
      box-shadow: none;
    }

    @include desktop {
      display: flex;
      flex-direction: row;
      background: none;
      width: auto;
      height: auto;
      position: initial;
      box-shadow: none;
    }
  }

  &__item {
    margin: 0 23px 0 23px;
    font-size: 25px;
    margin-top: 30px;
    transition: all 0.3s;
    font-family: $font-playFair;
    font-weight: 700;
    text-transform: capitalize;

    @include laptop {
      margin-top: 0;
      font-family: $font-workSans;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
    }

    @include desktop {
      margin-top: 0;
      font-family: $font-workSans;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
    }

    & > * {
      color: $color__menu;

      &.router-link-exact-active {
        color: $color__main--white;

        @include laptop {
          color: $color__btnBg;
        }

        @include desktop {
          color: $color__btnBg;
        }
      }
    }

    &:hover {
      & > * {
        color: $color__main--white;
      }
    }
  }

  &__socialLinks {
    bottom: -80vh;
    @include flexCenter;
    display: none;

    & .socialLinks__item {
      &:hover {
        & > a {
          color: $color__main--white;
        }
      }
    }
  }
}

.close {
  background-color: $color__main--white;

  .nav__item {
    & > * {
      &:hover {
        color: $color__btnBg;
      }
    }
  }

  .logo {
    filter: invert(1);
  }
}

.logo {
  margin-left: 5vw;
  z-index: 999;

  @include laptop {
    margin-left: 98px;
  }

  @include desktop {
    margin-left: 98px;
  }

  & > img {
    width: 85px;
  }
}

.show {
  display: flex;
}

.scrolled_burger {
  & > span {
    background-color: $color__btnBg !important;
  }
}
</style>
