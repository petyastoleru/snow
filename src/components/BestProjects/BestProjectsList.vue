<template>
  <transition-group name="list" tag="ul" appear class="portfolioList">
    <template v-for="(project, index) in projectArray">
      <li class="portfolioList__item" :key="project.id" v-if="index<quantity">
        <PortfolioItem v-bind:projectDesc="project" />
      </li>
    </template>
  </transition-group>
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
  props: ["projectArr", "quantity"],
};
</script>

<style lang="scss" scoped >
.list-enter-active,
.list-leave-active {
  transition: opacity 1s;
}
.list-enter, .list-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

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
    display: block;
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