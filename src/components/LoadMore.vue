<template>
  <div class="section loadMore">
    <a href="#">Load More {{load}}</a>
  </div>
</template>

<script>
export default {
  props: ["load"],
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

  & > a {
    color: $color__title;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>