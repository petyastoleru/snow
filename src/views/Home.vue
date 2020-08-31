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
import Header from "../components/Header/Header";
import About from "../components/About/About";
import BestProjects from "../components/BestProjects/BestProjects";
import Slider from "../components/QuoteSlider/Slider";
import Partners from "../components/Partners/PartnersSlider";
import Blog from "../components/Blog/BlogSection";
import Contact from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";

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
