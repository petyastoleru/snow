<template>
  <ul class="portfolioList">
    <li class="portfolioList__item" v-for="(project, index) in projectArray" :key="index">
      <PortfolioItem v-bind:projectDesc="project" />
    </li>
  </ul>
</template>

<script>
import PortfolioItem from "./PortfolioItem";

export default {
  components: {
    PortfolioItem,
  },
  data() {
    return {
      projectArray: this.projectArr,
      filterName: "all",
    };
  },
  props: ["projectArr"],
};
</script>

<style lang="scss" scoped>
.portfolioList {
  width: min-content;
  padding-top: 57px;
  margin: 0 auto;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  @include laptop {
    width: 720px;
  }

  @include desktop {
    width: 1035px;
  }

  &__item {
    width: 90vw;
    height: 345px;

    @include tablet {
      width: 345px;
      height: 345px;
    }

    @include laptop {
      width: 345px;
      height: 345px;
    }

    @include desktop {
      width: 345px;
      height: 345px;
    }
  }
}
</style>