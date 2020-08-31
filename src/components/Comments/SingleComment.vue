<template>
  <div class="comment">
    <div class="comment__avatar">
      <img :src="comment.avatar" alt="avatar" />
    </div>
    <div class="comment__desc">
      <span class="comment__author">{{comment.name}}</span>
      <span class="comment__date">{{comment.date}}</span>
      <p class="comment__text">{{comment.commentText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment"],
};
</script>

<style lang="scss" scoped>
.comment {
  max-width: 625px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 25px 15px;

  @include laptop {
    flex-direction: row;
    padding: 0;
    padding-top: 25px;
  }

  @include desktop {
    flex-direction: row;
    padding: 0;
    padding-top: 25px;
  }

  &__avatar {
    width: 10%;

    & > img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &__desc {
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: $font-workSans;
    font-size: 15px;
    margin-top: 20px;

    @include laptop {
      margin-top: 0;
    }

    @include desktop {
      margin-top: 0;
    }
  }

  &__author {
    text-transform: capitalize;
    font-weight: 500;
  }

  &__date {
    font-size: 13px;
    text-transform: uppercase;
  }

  &__text {
    margin: 15px auto 20px auto;
    color: $color__blogDesc;
    line-height: 1.65;
    width: 100%;
  }
}
</style>