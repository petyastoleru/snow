<template>
  <div class="section choose">
    <router-link
      :to="{ name: 'Portfolio-Item', params: { name: prevProject.name, item: prevProject }}"
      @click.native="onPrevClick"
    >
      <font-awesome-icon
        :icon="{ prefix: 'fas', iconName: 'angle-left' }"
        class="choose__icon choose__icon--left"
      />
      <p class="choose__text">Previous Project</p>
    </router-link>
    <router-link
      :to="{ name: 'Portfolio-Item', params: { name: nextProject.name, item: nextProject }}"
      @click.native="onNextClick"
    >
      <p class="choose__text">Next Project</p>
      <font-awesome-icon
        :icon="{prefix: 'fas', iconName: 'angle-right' }"
        class="choose__icon choose__icon--right"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextProject: Object,
      prevProject: Object,
    };
  },
  props: ["currentProduct"],
  methods: {
    onPrevClick() {
      this.$store.commit("setItem", this.prevProject);
      window.location.reload();
    },
    onNextClick() {
      this.$store.commit("setItem", this.nextProject);
      window.location.reload();
    },
  },
  mounted() {
    this.nextProject = this.$store.getters.getNextOrPrevProject(
      this.currentProduct.id != undefined
        ? this.currentProduct.id + 1
        : JSON.parse(localStorage.getItem("vuex")).choosenItem.id + 1
    );

    this.prevProject = this.$store.getters.getNextOrPrevProject(
      this.currentProduct.id != undefined
        ? this.currentProduct.id - 1
        : JSON.parse(localStorage.getItem("vuex")).choosenItem.id - 1
    );
  },
};
</script>

<style lang="scss">
.choose {
  height: 100px;
  background-color: $color__main--white;
  text-transform: uppercase;
  font-family: $font-workSans;
  font-weight: 500;
  letter-spacing: 0.15px;
  @include flexAlignCenter(space-between);
  padding: 0 5vw 0 5vw;

  @include tablet {
    padding: 0 98px 0 98px;
  }

  @include laptop {
    padding: 0 98px 0 98px;
  }

  @include desktop {
    padding: 0 98px 0 98px;
  }

  & > * {
    color: $color__title;
    display: flex;
    align-items: flex-end;

    &:hover {
      opacity: 0.6;
    }
  }

  &__text {
    display: none;

    @include laptop {
      display: block;
    }

    @include desktop {
      display: block;
    }
  }

  &__icon {
    color: $color__subtitle;
    margin-top: 3px;
    padding: 0.5px;

    &--left {
      margin-right: 5px;
    }

    &--right {
      margin-left: 5px;
    }
  }
}
</style>