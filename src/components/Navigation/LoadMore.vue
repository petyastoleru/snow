<template>
  <div class="section loadMore">
    <span @click="onClick">Load More {{load}}</span>
  </div>
</template>

<script>
export default {
  props: ["load"],
  methods: {
    onClick() {
      this.$emit("loadMore");
    },
  },
};
</script>

<style lang="scss">
.loadMore {
  background-color: #fff;
  height: 100px;
  text-transform: uppercase;
  font-family: $font-workSans;
  font-size: 15px;
  font-weight: 500;
  @include flexCenter;

  & > span {
    color: $color__title;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>