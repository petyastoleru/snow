<template>
  <section class="bestProjects section section--grey">
    <h2 class="bestProjects__title section__title">Best Projects</h2>
    <p class="bestProjects__subtitle section__subtitle">
      Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus.
      Vestibulum gravida volutpat ipsum non ultrices.
    </p>
    <BestProjectsList v-bind:projectArr="this.$store.getters.getProjects" />
  </section>
</template>

<script>
import BestProjectsList from "./BestProjectsList";

export default {
  components: {
    BestProjectsList,
  },
};
</script>

<style lang="scss">
.bestProjects {
  height: auto;
}
</style>