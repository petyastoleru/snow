<template>
  <div class="wrapper">
    <Header id="header" />
    <About />
    <BestProjects />
    <Slider />
    <Partners />
    <Blog id="contact" />
    <AddComment v-bind:isHomeForm="true" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import BestProjects from "../components/BestProjects";
import Slider from "../components/Slider";
import Partners from "../components/PartnersSlider";
import Blog from "../components/BlogSection";
import AddComment from "../components/AddComment";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    About,
    BestProjects,
    Slider,
    Partners,
    Blog,
    AddComment,
    Footer,
  },
  props: {
    route: String,
  },
  created() {
    this.$emit("getRoute", this.route);
  },
};
</script>

<style lang="scss">
</style>
