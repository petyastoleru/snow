<template>
  <div class="page__wrapper">
    <template v-if="childDataLoaded">
      <SingleWork v-bind:item="objItem" v-bind:isBlog="false" />

      <Choose v-bind:currentProduct="objItem" />
      <Footer />
    </template>
  </div>
</template>

<script>
import SingleWork from "../components/BestProjects/SingleWork";
import Choose from "../components/Navigation/ChooseSingleWork";
import Footer from "../components/Footer/Footer";

export default {
  components: {
    SingleWork,
    Choose,
    Footer,
  },
  data() {
    return {
      objItem: Object,
      childDataLoaded: false,
    };
  },
  props: {
    route: String,
  },
  created() {
    this.$emit("getRoute", this.route);
  },
  mounted() {
    this.objItem = this.$store.getters.getElementByID(
      +this.$route.params.id
    )[0];
    this.childDataLoaded = this.objItem ? true : false;
  },
};
</script>

<style lang="scss">
</style>
