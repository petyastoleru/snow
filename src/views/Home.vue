<template>
  <div class="wrapper">
    <Header />
    <About />
    <BestProjects />
    <Slider />
    <Partners />
    <Blog />
    <Contact />
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
import Contact from "../components/ContactSection";
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
    Contact,
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
