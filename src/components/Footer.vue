<template>
  <footer class="footer section section--grey">
    <SocLinks class="footer__socLinks" />
    <p class="footer__copyright">Copyright © 2016. Created by Unvab</p>
  </footer>
</template>

<script>
import SocLinks from "../components/SocialLinks";
export default {
  components: {
    SocLinks,
  },
};
</script>

<style lang="scss">
.footer {
  height: 150px;

  &__socLinks {
    display: flex;
    justify-content: center;
    padding-top: 54px;
    position: relative;
    left: 0;
    transform: none;
  }

  &__copyright {
    font-family: $font-workSans;
    font-size: 14px;
    color: $color__subtitle;
    margin-top: 27px;
  }
}
</style>