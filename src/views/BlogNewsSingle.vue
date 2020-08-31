<template>
  <div class="singleBlog section section--grey" v-if="childDataLoaded">
    <div class="singleBlog__image">
      <img :src="objItem.imgUrl" :alt="objItem.title" />
    </div>
    <div class="singleBlog__text">
      <h1 class="singleBlog__title section__title">{{objItem.title}}</h1>
      <div class="singleBlog__postInfo">
        <span>{{objItem.date}}</span>
        <span>{{objItem.type}}</span>
        <span>{{ commentsQuantity }}</span>
      </div>
      <div class="singleBlog__desc" v-html="objItem.htmlDesc"></div>
    </div>
    <Comments v-bind:comments="comments" v-if="showCommentBlog" />
    <AddComment v-bind:blogID="objItem.id" v-bind:isHomeForm="false" />
    <Choose v-bind:currentProduct="objItem" v-bind:isBlog="true" />

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer/Footer";
import Comments from "../components/Comments/Comments";
import AddComment from "../components/Comments/AddComment";
import Choose from "../components/Navigation/ChooseSingleWork";

export default {
  components: {
    Footer,
    Comments,
    AddComment,
    Choose,
  },
  data() {
    return {
      objItem: Object,
      childDataLoaded: false,
      comments: [],
      commentsQuantity: "",
      showCommentBlog: false,
    };
  },
  props: {
    route: String,
  },
  created() {
    this.$emit("getRoute", this.route);
  },
  mounted() {
    this.objItem = this.$store.getters.getNewsByID(
      +this.$route.path.slice(
        this.$route.path.search("id") + 2,
        this.$route.path.length
      )
    )[0];
    this.childDataLoaded = this.objItem ? true : false;

    this.comments = this.$store.getters.getCommentByBlogID(this.objItem.id);

    this.commentsQuantity =
      this.comments.length === 1
        ? "1 comment"
        : `${this.comments.length} comments`;

    this.showCommentBlog = this.comments.length !== 0 ? true : false;
  },
};
</script>

<style lang="scss">
.singleBlog {
  padding-top: 100px;
  text-align: left;
  &__image {
    width: 100%;
    height: 650px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    max-width: 610px;
    margin: 90px auto 60px auto;
    padding: 0 15px;

    @include laptop {
      padding: 0;
    }

    @include desktop {
      padding: 0;
    }
  }

  &__title {
    padding: 0;
  }

  &__postInfo {
    margin: 0 0 25px 0;
    display: flex;
    justify-content: left;
    text-transform: uppercase;
    font-family: $font-workSans;
    font-size: 13px;
    color: $color__title;
    font-weight: 500;
    flex-wrap: wrap;

    & > * {
      margin-right: 50px;
      margin-top: 15px;
    }
  }

  &__desc {
    font-family: $font-workSans;
    font-size: 15px;
    line-height: 1.65;
    color: $color__blogDesc;
  }

  .em {
    font-style: italic;
    font-family: $font-playFair;
    font-size: 20px;
    line-height: 1.55;
  }
}
</style>