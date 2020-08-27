<template>
  <div class="blog">
    <h1>This is an blog page {{route}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    route: String,
  },
  created() {
    this.$emit("getRoute", this.route);
  },
};
</script>

<style></style>
