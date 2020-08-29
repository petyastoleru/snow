<template>
  <div class="section choose">
    <template v-if="childDataLoaded">
      <template v-if="!isBlog">
        <router-link
          :to="{ name: 'Portfolio-Item', params: { id: prevProject.id } }"
          @click.native="onClick"
        >
          <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'angle-left' }"
            class="choose__icon choose__icon--left"
          />
          <p class="choose__text">Previous Project</p>
        </router-link>

        <router-link
          :to="{ name: 'Portfolio-Item', params: { id: nextProject.id } }"
          @click.native="onClick"
        >
          <p class="choose__text">Next Project</p>
          <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'angle-right' }"
            class="choose__icon choose__icon--right"
          />
        </router-link>
      </template>

      <template v-else>
        <router-link
          :to="{ name: 'Blog-Item', params: { id: prevProject.id } }"
          @click.native="onClick"
        >
          <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'angle-left' }"
            class="choose__icon choose__icon--left"
          />
          <p class="choose__text">Previous post</p>
        </router-link>

        <router-link
          :to="{ name: 'Blog-Item', params: { id: nextProject.id } }"
          @click.native="onClick"
        >
          <p class="choose__text">Next post</p>
          <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'angle-right' }"
            class="choose__icon choose__icon--right"
          />
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextProject: Object,
      prevProject: Object,
      childDataLoaded: false,
    };
  },
  props: ["currentProduct", "isBlog"],
  methods: {
    onClick() {
      location.reload();
    },
  },
  mounted() {
    let ID = +this.$route.path.slice(
      this.$route.path.search("/id") + 3,
      this.$route.path.length
    );

    this.nextProject = this.$store.getters.getNextOrPrevProject(
      ID + 1,
      this.isBlog
    );
    this.prevProject = this.$store.getters.getNextOrPrevProject(
      ID - 1,
      this.isBlog
    );

    this.childDataLoaded = true;
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
