<template>
  <div id="app">
    <Navigation v-bind:homePage="isHome" />
    <router-view v-bind:route="$route.name" @getRoute="getRoute" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      isHome: false,
    };
  },
  methods: {
    getRoute(pageRoute) {
      this.isHome = pageRoute !== "Home" ? true : false;
    },
  },
};
</script>

<style lang="scss"></style>
