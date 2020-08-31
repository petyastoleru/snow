<template>
  <div class="section comments">
    <div class="comments__wrapper">
      <h2 class="comments__title section__title">Comments:</h2>
      <template v-for="comment in comments">
        <Comment :key="comment.id" v-bind:comment="comment" />
      </template>
    </div>
  </div>
</template>

<script>
import Comment from "./SingleComment";
export default {
  components: {
    Comment,
  },
  props: ["comments"],
};
</script>

<style lang="scss" scoped>
.comments {
  text-align: left;
  background-color: $color__main--white;

  &__wrapper {
    max-width: 610px;
    margin: 0 auto;
  }

  &__title {
    font-size: 26px;
    padding-top: 60px;
  }
}
</style>