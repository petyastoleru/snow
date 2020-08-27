<template>
  <div class="page__wrapper">
    <SingleWork v-bind:item="item" />

    <Choose v-bind:currentProduct="objItem" />

    <Footer />
  </div>
</template>

<script>
import SingleWork from "../components/SingleWork";
import Choose from "../components/ChooseSingleWork";
import Footer from "../components/Footer";

export default {
  components: {
    SingleWork,
    Choose,
    Footer,
  },
  data() {
    return {
      objItem: Object,
    };
  },
  props: {
    route: String,
    item: Object,
  },
  created() {
    this.$emit("getRoute", this.route);
  },
  mounted() {
    this.objItem = this.item
      ? this.item
      : JSON.parse(localStorage.getItem("vuex")).choosenItem;
  },
};
</script>

<style lang="scss">
</style>
