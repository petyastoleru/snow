<template>
  <div class="portfolio section section--grey" id="portfolio">
    <CustomFilter v-bind:gottenList="filterList" class="portfolio__filter" @filterItems="onFilter" />

    <BestProjectsList v-bind:projectArr="array" :key="filterString" v-bind:quantity="quantity" />

    <LoadMore v-bind:load="loadString" @loadMore="onLoadMore" />

    <Footer />
  </div>
</template>

<script>
import BestProjectsList from "../components/BestProjects/BestProjectsList";
import CustomFilter from "../components/Filter/CustomFilter";
import LoadMore from "../components/Navigation/LoadMore";
import Footer from "../components/Footer/Footer";
export default {
  data() {
    return {
      filterList: [
        "all",
        "branding",
        "print",
        "photography",
        "design",
        "mockup",
      ],
      array: this.$store.getters.getProjects,
      filterString: "",
      loadString: "works",
      quantity: 9,
    };
  },
  components: {
    BestProjectsList,
    CustomFilter,
    Footer,
    LoadMore,
  },
  props: {
    route: String,
  },
  created() {
    this.$emit("getRoute", this.route);
  },
  methods: {
    onFilter(filterBy) {
      this.array = this.$store.getters.getFiltered(filterBy);
      this.filterString = filterBy;
    },
    onLoadMore() {
      this.quantity += 3;
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__filter {
    padding-top: 160px;
  }

  &__load {
    background-color: #fff;
    height: 100px;
    text-transform: uppercase;
    font-family: $font-workSans;
    font-size: 15px;
    font-weight: 500;
    @include flexCenter;

    & > a {
      color: $color__title;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>