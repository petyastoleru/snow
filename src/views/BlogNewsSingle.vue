<template>
  <div class="page__wrapper">
    <div>{{objItem.title}}</div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: {
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
      : JSON.parse(localStorage.getItem("vuex")).choosenBlog;
  },
};
</script>

<style lang="scss">
</style>