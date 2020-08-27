<template>
  <div class="burger header__burger" v-bind:class="{ open: opened }" @click="onClick">
    <span class="burger__bar burger__bar--first"></span>
    <span class="burger__bar burger__bar--second"></span>
    <span class="burger__bar burger__bar--third"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    onClick: function () {
      this.opened = !this.opened;
      this.$emit("burger", this.opened);
    },
  },
};
</script>

<style lang="scss" scoped>
.burger {
  margin-right: 5vw;
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @include laptop {
    display: none;
  }

  @include desktop {
    display: none;
  }

  &__bar {
    width: 100%;
    height: 3px;
    background-color: $color__main--white;
    border-radius: 20px;
    transition: transform 330ms ease-out;

    .open &--first {
      transform: translate(-12px) rotate(-45deg);
      transform-origin: top right;
      width: 110%;
    }

    .open &--second {
      transform: translate(-5px) rotate(45deg);
      width: 110%;
    }

    .open &--third {
      transform: translate(1px) rotate(-45deg);
      transform-origin: bottom left;
      width: 110%;
    }
  }
}
</style>
