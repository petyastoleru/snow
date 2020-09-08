<template>
  <div class="blog section section--grey">
    <CustomFilter v-bind:gottenList="filterList" class="blog__filter" @filterItems="onFilter" />

    <ul class="blog__list" :key="filterString">
      <template v-for="(item, index) in array">
        <li class="blog__item" :key="item.id" v-if="index<quantity">
          <BlogItem v-bind:item="item" />
        </li>
      </template>
    </ul>
    <LoadMore v-bind:load="loadString" @loadMore="onLoadMore" />
    <Footer />
  </div>
</template>

<script>
import CustomFilter from "../components/Filter/CustomFilter";
import BlogItem from "../components/Blog/BlogItem";
import LoadMore from "../components/Navigation/LoadMore";
import Footer from "../components/Footer/Footer";

export default {
  components: { BlogItem, CustomFilter, LoadMore, Footer },
  data() {
    return {
      filterList: ["all", "nature", "cities", "branding", "design"],
      array: this.$store.getters.getBlogPosts,
      filterString: "",
      loadString: "posts",
      quantity: 5,
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
    onLoadMore() {
      this.quantity += 3;
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
