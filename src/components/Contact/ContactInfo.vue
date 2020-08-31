<template>
  <div class="contactInfo">
    <h2 class="contactInfo__title section__title">Contact Info:</h2>
    <p
      class="contactInfo__subtitle section__subtitle"
    >Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>
    <ul class="contactInfo__list">
      <li class="contactInfo__item" v-for="(item, index) in array" :key="index">
        <span class="contactInfo__key">{{Object.keys(item)[0]}}:</span>
        <a
          v-if="Object.keys(item)[0] === 'email'"
          :href="`mailto:${item[Object.keys(item)[0]]}`"
        >{{item[Object.keys(item)[0]]}}</a>
        <a
          v-else-if="Object.keys(item)[0] === 'phone'"
          :href="`tel:${item[Object.keys(item)[0]]}`"
        >{{item[Object.keys(item)[0]]}}</a>
        <template v-else>{{item[Object.keys(item)[0]]}}</template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        { adress: " 10111 Santa Monica Boulevard, LA" },
        { phone: " +44 987 065 908" },
        { email: " info@Example.com" },
        { fax: " +44 987 065 908" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contactInfo {
  text-align: left;
  max-width: 610px;
  &__title {
    padding-top: 0;
  }

  &__list {
    padding-left: 15px;
  }

  &__item {
    margin-top: 20px;
    color: $color__subtitle;
    font-family: $font-workSans;

    & > a {
      color: $color__subtitle;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  &__key {
    font-weight: 700;
    text-transform: capitalize;
    color: $color__title;
  }
}
</style>