<template>
  <section class="section section--grey blog">
    <h2 class="blog__title section__title">Latest Blog</h2>
    <p
      class="blog__subtitle section__subtitle"
    >Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.</p>
    <BlogSlider />
  </section>
</template>

<script>
import BlogSlider from "../components/BlogSlider";
export default {
  components: { BlogSlider },
};
</script>

<style lang="scss" scoped>
.blog {
  height: auto;
  overflow: hidden;

  @include tablet {
    height: 860px;
  }

  @include laptop {
    height: 860px;
  }

  @include desktop {
    height: 860px;
  }
}
</style>