<template>
  <router-link :to="{ name: 'Portfolio-Item', params: { id: projectDesc.id }}">
    <div class="portfolioItem">
      <img v-bind:src="projectDesc.url" alt="image" />
      <div class="portfolioItem__bg">
        <h3 class="portfolioItem__name">{{projectDesc.name}}</h3>
        <span class="portfolioItem__type">{{projectDesc.type}}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["projectDesc"],
};
</script>

<style lang="scss">
.portfolioItem {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:hover &__bg {
    display: flex;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__bg {
    background: rgba($color: $color__footer--bg, $alpha: 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include flexCenter;
    flex-direction: column;
    font-family: $font-playFair;
    font-weight: 700;
    color: $color__main--white;
    font-size: 30px;
    text-transform: capitalize;
    display: none;
    transition: all 0.5s;
  }

  &__name {
    position: relative;
    animation: showProjectText 0.5s ease-in;
  }

  &__type {
    margin-top: 10px;
    font-family: $font-workSans;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    animation: showProjectText 0.58s ease-in;
  }
}

@keyframes showProjectText {
  0% {
    top: 20px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>