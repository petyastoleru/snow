<template>
  <div class="blog section section--grey">
    <CustomFilter v-bind:gottenList="filterList" class="blog__filter" @filterItems="onFilter" />

    <ul class="blog__list" :key="filterString">
      <li class="blog__item" v-for="item in array" :key="item.id">
        <BlogItem v-bind:item="item" v-bind:isSlider="false" />
      </li>
    </ul>
    <LoadMore v-bind:load="loadString" />
    <Footer />
  </div>
</template>

<script>
import CustomFilter from "../components/CustomFilter";
import BlogItem from "../components/BlogItem";
import LoadMore from "../components/LoadMore";
import Footer from "../components/Footer";
export default {
  components: { BlogItem, CustomFilter, LoadMore, Footer },
  data() {
    return {
      filterList: ["all", "nature", "cities", "branding", "design"],
      array: this.$store.getters.getBlogPosts,
      filterString: "",
      loadString: "posts",
    };
  },
  props: {
    route: String,
  },
  methods: {
    onFilter(filterBy) {
      this.array = this.$store.getters.getFilteredPosts(filterBy);
      this.filterString = filterBy;
    },
  },
  created() {
    this.$emit("getRoute", this.route);
  },
};
</script>

<style lang="scss" scoped>
.blog {
  &__filter {
    padding-top: 160px;
  }

  &__list {
    margin: 0 auto;
    margin-top: 20px;
    max-width: 720px;
    padding: 0 20px 20px 20px;
  }

  &__item {
    width: 100%;
    background-color: #fff;
    margin-top: 15px;

    & > div {
      width: 100% !important;
      height: fit-content;
    }
  }
}
</style>
