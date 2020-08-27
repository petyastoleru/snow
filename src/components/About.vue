<template>
  <section class="about section section--grey" id="about">
    <div class="section__wrapper">
      <h2 class="about__title section__title">About Our Agency</h2>
      <p class="about__subtitle section__subtitle">
        We are a new design studio based in USA. We have over 20 years of combined experience, and know
        a thing or two about designing websites and mobile apps. Clever use of technology
        and lean processes enable us to work faster and smarter.
      </p>
      <div class="about__signature">
        <img src="../assets/images/about-me-signature.png" alt="signature" />
      </div>
    </div>

    <Achievements class="about__achievements" />
  </section>
</template>

<script>
import Achievements from "./Achievements";

export default {
  components: { Achievements },
};
</script>

<style lang="scss">
.about {
  &__subtitle {
    max-width: 750px;
  }

  &__signature {
    margin-top: 37px;
  }

  &__achievements {
    margin-top: 100px;
  }
}
</style>