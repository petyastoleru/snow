<template>
  <div class="postMessage">
    <h2 class="section__title postMessage__title" v-if="!isHomeForm">Leave a Comment:</h2>
    <form
      method="get"
      class="section section--grey postMessage__form"
      autocomplete="off"
      @submit.prevent="onSubmit"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name..."
        v-model="name"
        pattern="^[A-Za-z-]+\s+[A-Za-z-]+$"
      />
      <input
        type="email"
        name="email"
        placeholder="Your e-mail..."
        v-model="email"
        pattern="^[a-z0-9._-]+@[a-z]+\.[a-z]{2,}$"
      />
      <input
        v-if="isHomeForm"
        class="postMessage__titleForm"
        type="text"
        name="title"
        placeholder="Your title..."
        v-model="title"
        pattern="^[A-Za-z- ]+$"
      />
      <textarea name="comment" placeholder="Your comment" v-model="commentText"></textarea>
      <button class="postMessage__btn btn" type="submit">Post a comment</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      title: "",
      commentText: "",
    };
  },

  props: ["blogID", "isHomeForm"],

  methods: {
    onSubmit() {
      console.log(
        this.name,
        this.email,
        this.isHomeForm ? this.title : "",
        this.commentText
      );
      this.$store.commit("addNewComment", {
        name: this.name,
        commentText: this.commentText,
        blogID: this.blogID,
      });
      if (!this.isHomeForm) {
        location.reload();
      } else {
        this.name = "";
        this.email = "";
        this.title = "";
        this.commentText = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.postMessage {
  width: 90vw;
  margin: 0 auto;

  @include tablet {
    max-width: 610px;
  }

  @include laptop {
    max-width: 610px;
  }

  @include desktop {
    max-width: 610px;
  }

  &__title {
    font-size: 26px;
    padding-top: 60px;
    padding-left: 0;
    padding-bottom: 20px;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: $font-workSans;
    font-size: 14px;

    & > input {
      width: 100%;
      margin-top: 20px;
      height: 50px;
      padding-left: 16px;
      background-color: $color__main--white;
      border: 0;
      color: $color__form--placeholder;

      &:focus {
        outline: none;
        border-bottom: 1px solid $color__subtitle;
      }

      &:invalid {
        border-bottom: 1px solid rgba($color: red, $alpha: 0.2);
      }

      @include tablet {
        width: 48%;
        margin-top: 0;
      }

      @include laptop {
        width: 48%;
        margin-top: 0;
      }

      @include desktop {
        width: 48%;
        margin-top: 0;
      }
    }

    & > textarea {
      margin-top: 20px;
      width: 100%;
      padding-left: 16px;
      padding-top: 20px;
      height: 168px;
      background-color: $color__main--white;
      border: 0;
      color: $color__form--placeholder;
      resize: none;

      &:focus {
        outline: none;
        border-bottom: 2px solid $color__subtitle;
      }
    }
  }

  &__titleForm {
    width: 100% !important;
    margin-top: 20px !important;
  }

  &__btn {
    /*     margin-top: 20px;
    margin-bottom: 20px; */
    margin: 20px auto;

    @include laptop {
      margin: 20px 0 20px 0;
    }

    @include desktop {
      margin: 20px 0 20px 0;
    }
  }
}
</style>