<template>
  <section class="contact section section--grey" id="contact">
    <div class="contact__wrapper">
      <ContactInfo />
      <AddComment v-bind:isHomeForm="true" class="contact__form" />
    </div>
  </section>
</template>

<script>
import ContactInfo from "../components/ContactInfo";
import AddComment from "../components/AddComment";
export default {
  components: { ContactInfo, AddComment },
};
</script>

<style lang="scss" scoped>
.contact {
  height: auto;

  &__wrapper {
    max-width: 1110px;
    margin: 0 auto;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    @include laptop {
      flex-wrap: nowrap;
      padding-right: 15px;
    }

    @include desktop {
      flex-wrap: nowrap;
      padding-right: 15px;
    }
  }

  &__form {
    padding-top: 25px;

    @include laptop {
      padding-top: 0;
    }

    @include desktop {
      padding-top: 0;
    }
  }
}
</style>